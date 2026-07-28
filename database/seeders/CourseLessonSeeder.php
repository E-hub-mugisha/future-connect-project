<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseLessonSeeder extends Seeder
{
    public function run(): void
    {
        $courseIds = DB::table('courses')->pluck('id')->all();
        $titles = [
            'Getting Started and Setting Up Your Environment',
            'Core Concepts and Foundations',
            'Hands-On Practice Session',
            'Working with Tools and Materials',
            'Common Mistakes and How to Avoid Them',
            'Client Communication Best Practices',
            'Pricing and Quoting Your Work',
            'Quality Control and Finishing Touches',
            'Marketing Your Skill on FutureConnect',
            'Final Project and Certification',
        ];

        foreach ($titles as $i => $title) {
            DB::table('course_lessons')->insert([
                'course_id' => $courseIds[$i % count($courseIds)],
                'title' => $title,
                'content' => 'In this lesson, learners will explore practical, real-world techniques applied by successful Rwandan professionals.',
                'video_url' => null,
                'order' => $i + 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
