<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

/**
 * OPTIMIZATION 3: Add missing unique constraints to prevent duplicate records
 *
 * Issues addressed:
 * - carts: no unique on (user_id, product_id) → duplicate cart rows possible
 * - course_enrollments: no unique on (user_id, course_id) → double enrollment possible
 * - course_feedback: no unique on (user_id, course_id) → multiple reviews per user
 * - talent_connections: no unique on (user_id, talent_id) → duplicate connection requests
 * - wallets: no unique on user_id → user could have multiple wallets
 * - project_applications: no unique on (user_id, project_id) → duplicate applications
 * - job_section_applications: no unique on (user_id, job_section_id) → duplicate applications
 * - product_reviews: no unique on (user_id, product_id) → multiple reviews same product
 * - plan_prices: no unique on (pricing_plan_id, billing_cycle) → duplicate billing cycles
 *
 * BEFORE RUNNING: clean any existing duplicates with the SQL in the comments below.
 */
return new class extends Migration
{
    public function up(): void
    {
        /*
         * Clean duplicates first (run manually before migrating):
         *
         * -- Keep only the latest cart row per user+product
         * DELETE c1 FROM carts c1
         *   INNER JOIN carts c2
         *   WHERE c1.user_id = c2.user_id AND c1.product_id = c2.product_id AND c1.id < c2.id;
         *
         * -- Keep only the latest enrollment per user+course
         * DELETE e1 FROM course_enrollments e1
         *   INNER JOIN course_enrollments e2
         *   WHERE e1.user_id = e2.user_id AND e1.course_id = e2.course_id AND e1.id < e2.id;
         *
         * -- Keep only latest feedback per user+course
         * DELETE f1 FROM course_feedback f1
         *   INNER JOIN course_feedback f2
         *   WHERE f1.user_id = f2.user_id AND f1.course_id = f2.course_id AND f1.id < f2.id;
         *
         * -- Keep only one connection per user+talent
         * DELETE tc1 FROM talent_connections tc1
         *   INNER JOIN talent_connections tc2
         *   WHERE tc1.user_id = tc2.user_id AND tc1.talent_id = tc2.talent_id AND tc1.id < tc2.id;
         *
         * -- Delete duplicate wallets (keep lowest id per user)
         * DELETE w1 FROM wallets w1
         *   INNER JOIN wallets w2
         *   WHERE w1.user_id = w2.user_id AND w1.id > w2.id;
         *
         * -- Keep only latest application per user+project
         * DELETE pa1 FROM project_applications pa1
         *   INNER JOIN project_applications pa2
         *   WHERE pa1.user_id = pa2.user_id AND pa1.project_id = pa2.project_id AND pa1.id < pa2.id;
         *
         * -- Keep only latest application per user+job
         * DELETE ja1 FROM job_section_applications ja1
         *   INNER JOIN job_section_applications ja2
         *   WHERE ja1.user_id = ja2.user_id AND ja1.job_section_id = ja2.job_section_id AND ja1.id < ja2.id;
         *
         * -- Keep only latest review per user+product
         * DELETE pr1 FROM product_reviews pr1
         *   INNER JOIN product_reviews pr2
         *   WHERE pr1.user_id = pr2.user_id AND pr1.product_id = pr2.product_id AND pr1.id < pr2.id;
         */

        // ── carts ─────────────────────────────────────────────────────────────
        Schema::table('carts', function (Blueprint $table) {
            $table->unique(['user_id', 'product_id'], 'carts_user_product_unique');
        });

        // ── course_enrollments ────────────────────────────────────────────────
        Schema::table('course_enrollments', function (Blueprint $table) {
            $table->unique(['user_id', 'course_id'], 'enrollments_user_course_unique');
        });

        // ── course_feedback ───────────────────────────────────────────────────
        Schema::table('course_feedback', function (Blueprint $table) {
            $table->unique(['user_id', 'course_id'], 'course_feedback_user_course_unique');
        });

        // ── talent_connections ────────────────────────────────────────────────
        Schema::table('talent_connections', function (Blueprint $table) {
            $table->unique(['user_id', 'talent_id'], 'connections_user_talent_unique');
        });

        // ── wallets ───────────────────────────────────────────────────────────
        Schema::table('wallets', function (Blueprint $table) {
            $table->unique('user_id', 'wallets_user_unique');
        });

        // ── project_applications ──────────────────────────────────────────────
        Schema::table('project_applications', function (Blueprint $table) {
            $table->unique(['user_id', 'project_id'], 'proj_apps_user_project_unique');
        });

        // ── job_section_applications ──────────────────────────────────────────
        Schema::table('job_section_applications', function (Blueprint $table) {
            $table->unique(['user_id', 'job_section_id'], 'job_apps_user_section_unique');
        });

        // ── product_reviews ───────────────────────────────────────────────────
        Schema::table('product_reviews', function (Blueprint $table) {
            $table->unique(['user_id', 'product_id'], 'product_reviews_user_product_unique');
        });

        // ── plan_prices ───────────────────────────────────────────────────────
        // Each plan can have only one price per billing cycle
        Schema::table('plan_prices', function (Blueprint $table) {
            $table->unique(['pricing_plan_id', 'billing_cycle'], 'plan_prices_plan_cycle_unique');
        });

        // ── subscription_payments: unique on tx_ref ───────────────────────────
        // Payment references should be globally unique
        Schema::table('subscription_payments', function (Blueprint $table) {
            $table->unique('tx_ref', 'sub_payments_tx_ref_unique');
        });

        // ── ticket_payments: transaction_id is already unique ─────────────────
        // Already exists — no change needed

        // ── diaspora_accounts: passport_number ───────────────────────────────
        // Passport numbers are unique identifiers per person
        Schema::table('diaspora_accounts', function (Blueprint $table) {
            $table->unique('passport_number', 'diaspora_passport_unique');
        });
    }

    public function down(): void
    {
        Schema::table('carts', fn($t) => $t->dropUnique('carts_user_product_unique'));
        Schema::table('course_enrollments', fn($t) => $t->dropUnique('enrollments_user_course_unique'));
        Schema::table('course_feedback', fn($t) => $t->dropUnique('course_feedback_user_course_unique'));
        Schema::table('talent_connections', fn($t) => $t->dropUnique('connections_user_talent_unique'));
        Schema::table('wallets', fn($t) => $t->dropUnique('wallets_user_unique'));
        Schema::table('project_applications', fn($t) => $t->dropUnique('proj_apps_user_project_unique'));
        Schema::table('job_section_applications', fn($t) => $t->dropUnique('job_apps_user_section_unique'));
        Schema::table('product_reviews', fn($t) => $t->dropUnique('product_reviews_user_product_unique'));
        Schema::table('plan_prices', fn($t) => $t->dropUnique('plan_prices_plan_cycle_unique'));
        Schema::table('subscription_payments', fn($t) => $t->dropUnique('sub_payments_tx_ref_unique'));
        Schema::table('diaspora_accounts', fn($t) => $t->dropUnique('diaspora_passport_unique'));
    }
};
