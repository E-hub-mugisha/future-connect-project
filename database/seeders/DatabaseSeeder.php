<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            // 🧍 Core Users & Categories
            UserSeeder::class,
            CategorySeeder::class,
            BlogsSeeder::class,

            // 🌟 Talent-Related Seeders
            TalentSeeder::class,
            StorySeeder::class,

            // 🎓 Courses & Lessons
            CourseSeeder::class,
            CourseLessonSeeder::class,
            CourseFeedbackSeeder::class,

            // 📢 Other Content
            AnnouncementSeeder::class,
            TestimonialSeeder::class,
            EventSeeder::class,
            EventTicketSeeder::class,
            FaqsSeeder::class,

            SellerSeeder::class,

            ProductCategorySeeder::class,
            ProductSeeder::class,

            JobCategorySeeder::class,
            JobSectionSeeder::class,
            AssignJobCategoriesSeeder::class,
            ProjectSeeder::class,
            PricingPlanSeeder::class
        ]);
    }
}
