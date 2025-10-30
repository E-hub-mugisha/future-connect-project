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

            SellerSeeder::class,
            
            ProductCategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}
