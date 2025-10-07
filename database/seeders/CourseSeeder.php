<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        try {
            // Get first talent or create one
            $talent = Talent::first() ?? Talent::factory()->create();

            $courses = [
                [
                    'title' => 'Full-Stack Web Development',
                    'category' => 'Web Development',
                    'description' => 'Learn frontend and backend development with Laravel and React.',
                    'is_free' => false,
                    'price' => 120.00,
                    'level' => 'Intermediate',
                    'thumbnail' => 'courses/webdev.png',
                ],
                [
                    'title' => 'Creative Graphic Design',
                    'category' => 'Graphic Design',
                    'description' => 'Master Photoshop, Illustrator, and Canva tools for creative design.',
                    'is_free' => true,
                    'price' => null,
                    'level' => 'Beginner',
                    'thumbnail' => 'courses/design.png',
                ],
                [
                    'title' => 'Social Media Marketing',
                    'category' => 'Digital Marketing',
                    'description' => 'Build skills in Facebook Ads, Instagram Marketing, and SEO.',
                    'is_free' => false,
                    'price' => 75.50,
                    'level' => 'Beginner',
                    'thumbnail' => 'courses/marketing.png',
                ],
                [
                    'title' => 'Data Science with Python',
                    'category' => 'Data Science',
                    'description' => 'Learn Python, Pandas, and machine learning basics.',
                    'is_free' => false,
                    'price' => 150.00,
                    'level' => 'Advanced',
                    'thumbnail' => 'courses/datascience.png',
                ],
                [
                    'title' => 'Photography Masterclass',
                    'category' => 'Photography',
                    'description' => 'Basics of photography, lighting, and editing techniques.',
                    'is_free' => true,
                    'price' => null,
                    'level' => 'Beginner',
                    'thumbnail' => 'courses/photo.png',
                ],
                [
                    'title' => 'Music Production Essentials',
                    'category' => 'Music Production',
                    'description' => 'Create and edit music with FL Studio and Ableton Live.',
                    'is_free' => false,
                    'price' => 99.00,
                    'level' => 'Intermediate',
                    'thumbnail' => 'courses/music.png',
                ],
            ];

            foreach ($courses as $data) {
                try {
                    // Create category if missing
                    $category = Category::firstOrCreate(
                        ['name' => $data['category']],
                        [
                            'slug' => Str::slug($data['category']),
                            'description' => $data['category'] . ' courses category',
                        ]
                    );

                    // Create or update course
                    Course::updateOrCreate(
                        ['title' => $data['title'], 'talent_id' => $talent->id],
                        [
                            'slug' => Str::slug($data['title']),
                            'description' => $data['description'],
                            'category_id' => $category->id,
                            'is_free' => $data['is_free'],
                            'price' => $data['price'],
                            'level' => $data['level'],
                            'thumbnail' => $data['thumbnail'],
                            'status' => 'published',
                        ]
                    );

                } catch (\Throwable $e) {
                    Log::error("CourseSeeder Error (Course: {$data['title']}): " . $e->getMessage());
                }
            }

        } catch (\Throwable $e) {
            Log::error("CourseSeeder Fatal Error: " . $e->getMessage());
        }
    }
}
