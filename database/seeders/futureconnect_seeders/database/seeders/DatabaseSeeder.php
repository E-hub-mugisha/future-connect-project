<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the FutureConnect (talent_platform) database with 10 realistic
     * Rwandan records per business table.
     *
     * NOTE: Laravel framework/infrastructure tables are intentionally NOT
     * seeded here because they hold runtime data, not business records:
     * cache, cache_locks, jobs, job_batches, failed_jobs, migrations,
     * password_reset_tokens, sessions. The `settings` table already ships
     * with its single singleton row from the SQL dump, so it isn't reseeded.
     *
     * Order matters: parents are seeded before the children that reference
     * them via foreign keys.
     */
    public function run(): void
    {
        $this->call([
            // Core reference data
            UserSeeder::class,
            CategorySeeder::class,
            RolePermissionSeeder::class,

            // Talent domain
            TalentSeeder::class,
            StorySeeder::class,
            StoryCommentSeeder::class,
            SkillSeeder::class,
            SkillReviewSeeder::class,
            TestimonialSeeder::class,
            TalentFeedbackSeeder::class,
            TalentConnectionSeeder::class,

            // Content / marketing
            AnnouncementSeeder::class,
            AnnouncementCommentSeeder::class,
            BlogSeeder::class,
            FaqSeeder::class,
            PartnerSeeder::class,
            ContactSeeder::class,
            SuccessStorySeeder::class,
            LoginActivitySeeder::class,

            // Courses
            CourseSeeder::class,
            CourseLessonSeeder::class,
            CourseEnrollmentSeeder::class,
            CourseFeedbackSeeder::class,

            // Marketplace
            ProductCategorySeeder::class,
            SellerSeeder::class,
            ProductSeeder::class,
            ProductReviewSeeder::class,
            CartSeeder::class,
            OrderSeeder::class,

            // Corporate recruitment
            CorporateRecruitmentSeeder::class,

            // Events & ticketing
            EventSeeder::class,
            TicketOrderSeeder::class,

            // Jobs
            JobCategorySeeder::class,
            JobSectionSeeder::class,

            // Projects & diaspora
            ProjectSeeder::class,
            DiasporaAccountSeeder::class,
            ProjectSponsorshipSeeder::class,

            // Pricing & subscriptions
            PricingPlanSeeder::class,
            UserSubscriptionSeeder::class,

            // Quick hires & demo requests
            QuickHireSeeder::class,
            DemoRequestSeeder::class,
        ]);
    }
}
