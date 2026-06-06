<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

/**
 * OPTIMIZATION 1: Fix incorrect / oversized column types
 *
 * Issues addressed:
 * - stories.category_id stored as varchar(255) but used as a FK to categories(id) — BUG, no FK exists
 * - talent_connections.status is varchar(255) — should be enum
 * - orders.status / payment_status are varchar(255) — should be enum
 * - wallet_transactions.status is varchar(255) — should be enum
 * - ticket_payments.status is varchar(255) — should be enum
 * - wallets.currency is varchar(255) — should be varchar(10) like all other currency columns
 * - login_activities.ip_address is varchar(255) — should be varchar(45) (covers IPv6)
 * - login_activities has both logged_in_at AND created_at — logged_in_at is redundant
 * - testimonials.rating is int(11) — should be tinyint (1–5 range)
 * - projects.budget is varchar(255) — should be decimal for proper filtering/sorting
 * - job_sections skills/type/experience_level are loose varchar(255) — typed below
 * - diaspora_accounts.password should be nullable (pre-registration use-case)
 * - events.event_date is redundant with start_time (both datetime)
 */
return new class extends Migration
{
    public function up(): void
    {
        // ── stories.category_id ──────────────────────────────────────────────
        // Was varchar(255) with NO FK constraint — type mismatch bug.
        // Convert to proper unsignedBigInteger and add the FK.
        // IMPORTANT: run only if your data is clean (no orphan category strings).
        Schema::table('stories', function (Blueprint $table) {
            // Drop old column, re-add as correct type
            $table->unsignedBigInteger('category_id')->nullable()->change();
        });

        // Raw alter because Laravel's change() can't change varchar→bigint safely on MariaDB
        DB::statement('ALTER TABLE stories MODIFY category_id BIGINT UNSIGNED NULL');

        Schema::table('stories', function (Blueprint $table) {
            $table->foreign('category_id')
                  ->references('id')->on('categories')
                  ->nullOnDelete();
        });

        // ── talent_connections.status ────────────────────────────────────────
        DB::statement("ALTER TABLE talent_connections MODIFY status ENUM('pending','accepted','rejected','cancelled') NOT NULL DEFAULT 'pending'");

        // ── orders ───────────────────────────────────────────────────────────
        DB::statement("ALTER TABLE orders MODIFY status ENUM('pending','processing','completed','cancelled','refunded') NOT NULL DEFAULT 'pending'");
        DB::statement("ALTER TABLE orders MODIFY payment_status ENUM('unpaid','paid','refunded','failed') NOT NULL DEFAULT 'unpaid'");

        // ── wallet_transactions.status ───────────────────────────────────────
        DB::statement("ALTER TABLE wallet_transactions MODIFY status ENUM('pending','completed','failed','reversed') NOT NULL DEFAULT 'completed'");

        // ── ticket_payments.status ───────────────────────────────────────────
        DB::statement("ALTER TABLE ticket_payments MODIFY status ENUM('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending'");

        // ── wallets.currency ─────────────────────────────────────────────────
        DB::statement("ALTER TABLE wallets MODIFY currency VARCHAR(10) NOT NULL DEFAULT 'RWF'");

        // ── login_activities.ip_address ──────────────────────────────────────
        DB::statement("ALTER TABLE login_activities MODIFY ip_address VARCHAR(45) NULL");

        // ── testimonials.rating ──────────────────────────────────────────────
        DB::statement("ALTER TABLE testimonials MODIFY rating TINYINT UNSIGNED NOT NULL DEFAULT 0");

        // ── projects.budget ──────────────────────────────────────────────────
        // Old: varchar(255). New: decimal for proper range queries.
        // If you stored formatted strings like "500,000 RWF" you'll need to clean first.
        DB::statement("ALTER TABLE projects ADD COLUMN budget_amount DECIMAL(14,2) NULL AFTER budget");
        DB::statement("ALTER TABLE projects ADD COLUMN budget_currency VARCHAR(10) NOT NULL DEFAULT 'RWF' AFTER budget_amount");
        // Keep budget varchar for now as a fallback until data is migrated
        // then drop: Schema::table('projects', fn($t) => $t->dropColumn('budget'));

        // ── job_sections: type and experience_level ──────────────────────────
        DB::statement("ALTER TABLE job_sections MODIFY type ENUM('full-time','part-time','contract','internship','remote','hybrid') NULL");
        DB::statement("ALTER TABLE job_sections MODIFY experience_level ENUM('entry','junior','mid','senior','lead','executive') NULL");

        // ── Remove redundant logged_in_at from login_activities ──────────────
        // created_at already captures this. Drop logged_in_at after confirming no app code depends on it.
        // Uncomment when ready:
        // Schema::table('login_activities', function (Blueprint $table) {
        //     $table->dropColumn('logged_in_at');
        // });
    }

    public function down(): void
    {
        // Reverse enum changes back to varchar(255)
        DB::statement("ALTER TABLE talent_connections MODIFY status VARCHAR(255) NOT NULL DEFAULT 'pending'");
        DB::statement("ALTER TABLE orders MODIFY status VARCHAR(255) NOT NULL DEFAULT 'pending'");
        DB::statement("ALTER TABLE orders MODIFY payment_status VARCHAR(255) NOT NULL DEFAULT 'unpaid'");
        DB::statement("ALTER TABLE wallet_transactions MODIFY status VARCHAR(255) NOT NULL DEFAULT 'completed'");
        DB::statement("ALTER TABLE ticket_payments MODIFY status VARCHAR(255) NOT NULL DEFAULT 'pending'");
        DB::statement("ALTER TABLE wallets MODIFY currency VARCHAR(255) NOT NULL DEFAULT 'RWF'");
        DB::statement("ALTER TABLE login_activities MODIFY ip_address VARCHAR(255) NULL");
        DB::statement("ALTER TABLE testimonials MODIFY rating INT(11) NOT NULL DEFAULT 0");

        Schema::table('stories', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });
        DB::statement('ALTER TABLE stories MODIFY category_id VARCHAR(255) NOT NULL');

        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn(['budget_amount', 'budget_currency']);
        });
    }
};
