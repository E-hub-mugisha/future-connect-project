<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

/**
 * OPTIMIZATION 4: Structural / design improvements
 *
 * Issues addressed:
 * 1. events.event_date is fully redundant — start_time is already a datetime.
 *    Keeping both is a data-consistency risk (they can diverge).
 *
 * 2. login_activities.user_agent is varchar(255) but real UAs exceed 255 chars.
 *    Should be text.
 *
 * 3. diaspora_accounts.password — this account is linked via user_id FK to users.
 *    The password here is either dead code or a pre-registration staging field.
 *    We'll mark it with a comment and make nullable if not already.
 *
 * 4. talent_connections.message is NOT NULL but logically a message is optional
 *    when a connection is made.
 *
 * 5. corporate_recruitments.skills / job_sections.skills stored as text/varchar
 *    — migrate to JSON for proper querying (e.g. JSON_CONTAINS).
 *
 * 6. Add soft deletes to core business tables (talents, products, projects, users).
 *    This prevents accidental data loss and preserves referential integrity for
 *    things like wallets, orders, and commissions.
 *
 * 7. Add `views` counter to stories (missing, blogs has it, stories doesn't).
 *
 * 8. Add `slug` to courses (exists as nullable — set NOT NULL with unique).
 *
 * 9. ticket_orders is missing a user_id FK — orders are placed by guests but
 *    we should allow linking to registered users optionally.
 */
return new class extends Migration
{
    public function up(): void
    {
        // ── 1. Remove redundant events.event_date ─────────────────────────────
        // start_time (datetime) already captures this. Drop after verifying no
        // Blade or controller references events->event_date.
        // Uncomment when code is updated:
        // Schema::table('events', function (Blueprint $table) {
        //     $table->dropColumn('event_date');
        // });

        // ── 2. login_activities.user_agent → text ─────────────────────────────
        DB::statement('ALTER TABLE login_activities MODIFY user_agent TEXT NULL');

        // ── 3. talent_connections.message → nullable ──────────────────────────
        Schema::table('talent_connections', function (Blueprint $table) {
            $table->text('message')->nullable()->change();
        });

        // ── 4. corporate_recruitments.skills → JSON ───────────────────────────
        // First ensure all existing data is valid JSON (empty = NULL or '[]')
        DB::statement("UPDATE corporate_recruitments SET skills = NULL WHERE skills = '' OR skills = '[]'");
        DB::statement('ALTER TABLE corporate_recruitments MODIFY skills JSON NULL');

        // ── 5. job_sections.skills → JSON ────────────────────────────────────
        DB::statement("UPDATE job_sections SET skills = NULL WHERE skills = '' OR skills = '[]'");
        DB::statement('ALTER TABLE job_sections MODIFY skills JSON NULL');

        // ── 6. Soft deletes on core tables ───────────────────────────────────
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('talents', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('courses', function (Blueprint $table) {
            $table->softDeletes();
        });

        // ── 7. Add views counter to stories ──────────────────────────────────
        Schema::table('stories', function (Blueprint $table) {
            $table->unsignedInteger('views')->default(0)->after('tags');
        });

        // ── 8. Link ticket_orders to users optionally ─────────────────────────
        Schema::table('ticket_orders', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->after('id');
            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
            $table->index('user_id');
        });

        // ── 9. courses.slug — enforce unique if you use it for routing ────────
        // Already nullable in schema, but if you route by slug it must be unique.
        // Uncomment after ensuring all courses have a slug:
        // Schema::table('courses', function (Blueprint $table) {
        //     $table->unique('slug');
        // });

        // ── 10. Add missing `is_active` to partners ───────────────────────────
        // partners.status is tinyint(1), rename to is_active for consistency
        // (all other boolean flags use is_* naming)
        // This is low-risk — just an alias.
        // Uncomment and update model/queries:
        // DB::statement('ALTER TABLE partners RENAME COLUMN status TO is_active');
    }

    public function down(): void
    {
        DB::statement('ALTER TABLE login_activities MODIFY user_agent VARCHAR(255) NULL');

        Schema::table('talent_connections', function (Blueprint $table) {
            $table->text('message')->nullable(false)->change();
        });

        DB::statement('ALTER TABLE corporate_recruitments MODIFY skills VARCHAR(255) NULL');
        DB::statement('ALTER TABLE job_sections MODIFY skills TEXT NULL');

        Schema::table('users', fn($t) => $t->dropSoftDeletes());
        Schema::table('talents', fn($t) => $t->dropSoftDeletes());
        Schema::table('products', fn($t) => $t->dropSoftDeletes());
        Schema::table('projects', fn($t) => $t->dropSoftDeletes());
        Schema::table('courses', fn($t) => $t->dropSoftDeletes());

        Schema::table('stories', fn($t) => $t->dropColumn('views'));

        Schema::table('ticket_orders', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropIndex(['user_id']);
            $table->dropColumn('user_id');
        });
    }
};
