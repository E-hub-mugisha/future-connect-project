<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * OPTIMIZATION 2: Add missing indexes for high-traffic query patterns
 *
 * Strategy used:
 * - Single-column indexes on every column used in WHERE filters or ORDER BY
 * - Composite indexes on column pairs that appear together in common queries
 * - No index on low-cardinality booleans alone (e.g. is_active) — only composites
 *
 * Tables covered:
 * users, talents, skills, stories, courses, course_enrollments,
 * blogs, products, orders, wallet_transactions, user_subscriptions,
 * job_sections, job_section_applications, project_applications,
 * talent_connections, events, diaspora_accounts, announcements,
 * login_activities, corporate_recruitments, course_feedback
 */
return new class extends Migration
{
    public function up(): void
    {
        // ── users ────────────────────────────────────────────────────────────
        Schema::table('users', function (Blueprint $table) {
            // Frequent admin filters
            $table->index('role');
            $table->index('active');
            $table->index('is_verified');
            $table->index('created_at');
            // Composite: active verified users of a given role
            $table->index(['role', 'active', 'is_verified'], 'users_role_active_verified_idx');
        });

        // ── talents ──────────────────────────────────────────────────────────
        Schema::table('talents', function (Blueprint $table) {
            $table->index('status');
            $table->index('featured');
            $table->index('level');
            $table->index('matched');
            // Homepage: featured + approved talents
            $table->index(['status', 'featured'], 'talents_status_featured_idx');
            // Category browse
            $table->index(['category_id', 'status'], 'talents_category_status_idx');
        });

        // ── skills ───────────────────────────────────────────────────────────
        Schema::table('skills', function (Blueprint $table) {
            $table->index('status');
            $table->index('level');
            // Browsing published skills by category
            $table->index(['category_id', 'status'], 'skills_category_status_idx');
            $table->index(['talent_id', 'status'], 'skills_talent_status_idx');
        });

        // ── stories ──────────────────────────────────────────────────────────
        Schema::table('stories', function (Blueprint $table) {
            $table->index('status');
            $table->index(['talent_id', 'status'], 'stories_talent_status_idx');
            $table->index(['status', 'created_at'], 'stories_status_created_idx');
        });

        // ── courses ──────────────────────────────────────────────────────────
        Schema::table('courses', function (Blueprint $table) {
            $table->index('status');
            $table->index('is_free');
            $table->index('level');
            $table->index(['status', 'is_free'], 'courses_status_free_idx');
            $table->index(['talent_id', 'status'], 'courses_talent_status_idx');
        });

        // ── course_enrollments ───────────────────────────────────────────────
        Schema::table('course_enrollments', function (Blueprint $table) {
            $table->index('status');
            // Active enrollments per course
            $table->index(['course_id', 'status'], 'enrollments_course_status_idx');
            // User's enrolled courses
            $table->index(['user_id', 'status'], 'enrollments_user_status_idx');
        });

        // ── blogs ────────────────────────────────────────────────────────────
        Schema::table('blogs', function (Blueprint $table) {
            $table->index('is_published');
            $table->index('views');
            $table->index(['is_published', 'created_at'], 'blogs_published_created_idx');
            $table->index(['category_id', 'is_published'], 'blogs_category_published_idx');
        });

        // ── products ─────────────────────────────────────────────────────────
        Schema::table('products', function (Blueprint $table) {
            $table->index('status');
            $table->index('stock');
            $table->index(['seller_id', 'status'], 'products_seller_status_idx');
            $table->index(['product_category_id', 'status'], 'products_cat_status_idx');
        });

        // ── orders ───────────────────────────────────────────────────────────
        Schema::table('orders', function (Blueprint $table) {
            $table->index('status');
            $table->index('payment_status');
            $table->index(['user_id', 'status'], 'orders_user_status_idx');
            $table->index(['status', 'payment_status'], 'orders_status_payment_idx');
        });

        // ── wallet_transactions ──────────────────────────────────────────────
        Schema::table('wallet_transactions', function (Blueprint $table) {
            $table->index('type');
            $table->index('status');
            // Transaction history: wallet ordered by date
            $table->index(['wallet_id', 'created_at'], 'wallet_tx_wallet_created_idx');
            $table->index(['wallet_id', 'type'], 'wallet_tx_wallet_type_idx');
        });

        // ── user_subscriptions ───────────────────────────────────────────────
        Schema::table('user_subscriptions', function (Blueprint $table) {
            $table->index('status');
            $table->index('ends_at');
            // Check if user has active sub
            $table->index(['user_id', 'status'], 'subs_user_status_idx');
            // Expiry jobs — find subs ending soon
            $table->index(['status', 'ends_at'], 'subs_status_ends_idx');
        });

        // ── job_sections ─────────────────────────────────────────────────────
        Schema::table('job_sections', function (Blueprint $table) {
            $table->index('type');
            $table->index('experience_level');
            $table->index('location');
            $table->index(['job_category_id', 'type'], 'jobs_cat_type_idx');
        });

        // ── job_section_applications ─────────────────────────────────────────
        Schema::table('job_section_applications', function (Blueprint $table) {
            $table->index('status');
            $table->index(['job_section_id', 'status'], 'job_apps_section_status_idx');
        });

        // ── project_applications ─────────────────────────────────────────────
        Schema::table('project_applications', function (Blueprint $table) {
            $table->index('status');
            $table->index(['project_id', 'status'], 'proj_apps_project_status_idx');
        });

        // ── projects ─────────────────────────────────────────────────────────
        Schema::table('projects', function (Blueprint $table) {
            $table->index('status');
            $table->index('verified');
            $table->index(['status', 'verified'], 'projects_status_verified_idx');
        });

        // ── talent_connections ───────────────────────────────────────────────
        Schema::table('talent_connections', function (Blueprint $table) {
            $table->index('status');
            $table->index(['talent_id', 'status'], 'connections_talent_status_idx');
        });

        // ── events ───────────────────────────────────────────────────────────
        Schema::table('events', function (Blueprint $table) {
            $table->index('event_date');
            $table->index('type');
            $table->index(['event_date', 'type'], 'events_date_type_idx');
        });

        // ── diaspora_accounts ─────────────────────────────────────────────────
        Schema::table('diaspora_accounts', function (Blueprint $table) {
            $table->index('verification_status');
            $table->index('purpose');
            $table->index(['verification_status', 'purpose'], 'diaspora_status_purpose_idx');
        });

        // ── announcements ─────────────────────────────────────────────────────
        Schema::table('announcements', function (Blueprint $table) {
            $table->index('is_active');
            $table->index(['category_id', 'is_active'], 'announcements_cat_active_idx');
        });

        // ── login_activities ──────────────────────────────────────────────────
        Schema::table('login_activities', function (Blueprint $table) {
            $table->index('logged_in_at');
            // Security audit: all logins by user, sorted by time
            $table->index(['user_id', 'logged_in_at'], 'login_user_time_idx');
        });

        // ── corporate_recruitments ────────────────────────────────────────────
        Schema::table('corporate_recruitments', function (Blueprint $table) {
            $table->index('status');
            $table->index(['company_id', 'status'], 'corp_recruit_company_status_idx');
        });

        // ── course_feedback ────────────────────────────────────────────────────
        Schema::table('course_feedback', function (Blueprint $table) {
            $table->index('rating');
            $table->index(['course_id', 'rating'], 'course_feedback_course_rating_idx');
        });

        // ── sellers ────────────────────────────────────────────────────────────
        Schema::table('sellers', function (Blueprint $table) {
            $table->index('status');
        });

        // ── plan_prices ────────────────────────────────────────────────────────
        Schema::table('plan_prices', function (Blueprint $table) {
            $table->index('billing_cycle');
            $table->index(['pricing_plan_id', 'billing_cycle'], 'plan_prices_plan_cycle_idx');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['role']);
            $table->dropIndex(['active']);
            $table->dropIndex(['is_verified']);
            $table->dropIndex(['created_at']);
            $table->dropIndex('users_role_active_verified_idx');
        });

        Schema::table('talents', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['featured']);
            $table->dropIndex(['level']);
            $table->dropIndex(['matched']);
            $table->dropIndex('talents_status_featured_idx');
            $table->dropIndex('talents_category_status_idx');
        });

        Schema::table('skills', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['level']);
            $table->dropIndex('skills_category_status_idx');
            $table->dropIndex('skills_talent_status_idx');
        });

        Schema::table('stories', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex('stories_talent_status_idx');
            $table->dropIndex('stories_status_created_idx');
        });

        Schema::table('courses', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['is_free']);
            $table->dropIndex(['level']);
            $table->dropIndex('courses_status_free_idx');
            $table->dropIndex('courses_talent_status_idx');
        });

        Schema::table('course_enrollments', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex('enrollments_course_status_idx');
            $table->dropIndex('enrollments_user_status_idx');
        });

        Schema::table('blogs', function (Blueprint $table) {
            $table->dropIndex(['is_published']);
            $table->dropIndex(['views']);
            $table->dropIndex('blogs_published_created_idx');
            $table->dropIndex('blogs_category_published_idx');
        });

        Schema::table('products', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['stock']);
            $table->dropIndex('products_seller_status_idx');
            $table->dropIndex('products_cat_status_idx');
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['payment_status']);
            $table->dropIndex('orders_user_status_idx');
            $table->dropIndex('orders_status_payment_idx');
        });

        Schema::table('wallet_transactions', function (Blueprint $table) {
            $table->dropIndex(['type']);
            $table->dropIndex(['status']);
            $table->dropIndex('wallet_tx_wallet_created_idx');
            $table->dropIndex('wallet_tx_wallet_type_idx');
        });

        Schema::table('user_subscriptions', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['ends_at']);
            $table->dropIndex('subs_user_status_idx');
            $table->dropIndex('subs_status_ends_idx');
        });

        Schema::table('job_sections', function (Blueprint $table) {
            $table->dropIndex(['type']);
            $table->dropIndex(['experience_level']);
            $table->dropIndex(['location']);
            $table->dropIndex('jobs_cat_type_idx');
        });

        Schema::table('job_section_applications', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex('job_apps_section_status_idx');
            $table->dropIndex('job_apps_user_status_idx');
        });

        Schema::table('project_applications', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex('proj_apps_project_status_idx');
            $table->dropIndex('proj_apps_user_status_idx');
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['verified']);
            $table->dropIndex('projects_status_verified_idx');
        });

        Schema::table('talent_connections', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['payment_status']);
            $table->dropIndex('connections_talent_status_idx');
            $table->dropIndex('connections_user_status_idx');
        });

        Schema::table('events', function (Blueprint $table) {
            $table->dropIndex(['event_date']);
            $table->dropIndex(['type']);
            $table->dropIndex('events_date_type_idx');
        });

        Schema::table('diaspora_accounts', function (Blueprint $table) {
            $table->dropIndex(['verification_status']);
            $table->dropIndex(['purpose']);
            $table->dropIndex('diaspora_status_purpose_idx');
        });

        Schema::table('announcements', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
            $table->dropIndex('announcements_cat_active_idx');
        });

        Schema::table('login_activities', function (Blueprint $table) {
            $table->dropIndex(['logged_in_at']);
            $table->dropIndex('login_user_time_idx');
        });

        Schema::table('corporate_recruitments', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex('corp_recruit_company_status_idx');
        });

        Schema::table('course_feedback', function (Blueprint $table) {
            $table->dropIndex(['rating']);
            $table->dropIndex('course_feedback_course_rating_idx');
        });

        Schema::table('sellers', function (Blueprint $table) {
            $table->dropIndex(['status']);
        });

        Schema::table('plan_prices', function (Blueprint $table) {
            $table->dropIndex(['billing_cycle']);
            $table->dropIndex('plan_prices_plan_cycle_idx');
        });
    }
};
