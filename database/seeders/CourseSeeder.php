<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run()
    {
        $courses = [
            // 🎤 Talent 1: Alice Niyonsaba - Music
            [
                'talent_id' => 1,
                'title' => 'Vocal Warm-ups & Breathing Techniques',
                'description' => 'Learn essential vocal warm-up routines and breathing exercises to improve tone and sustain your voice.',
                'category_id' => 1,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/vocal_basics.jpg',
                'video' => 'videos/vocal_basics.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 1,
                'title' => 'Stage Performance & Audience Connection',
                'description' => 'Master live performance, stage presence, audience engagement, and storytelling through song.',
                'category_id' => 1,
                'is_free' => false,
                'price' => 49.99,
                'level' => 'Intermediate',
                'thumbnail' => 'courses/stage_performance.jpg',
                'video' => 'videos/stage_performance.mp4',
                'status' => 'published',
            ],

            // 🎨 Talent 2: John Mugisha - Digital Art
            [
                'talent_id' => 2,
                'title' => 'Digital Art Fundamentals',
                'description' => 'Start with digital art using Procreate or Photoshop. Learn sketching, line art, and color blending basics.',
                'category_id' => 2,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/digital_art_basics.jpg',
                'video' => 'videos/digital_art_basics.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 2,
                'title' => 'Character Design & Illustration',
                'description' => 'Create expressive and believable characters for games, comics, and animations.',
                'category_id' => 2,
                'is_free' => false,
                'price' => 59.99,
                'level' => 'Advanced',
                'thumbnail' => 'courses/character_design.jpg',
                'video' => 'videos/character_design.mp4',
                'status' => 'published',
            ],

            // 📸 Talent 3: Grace Uwamahoro - Photography
            [
                'talent_id' => 3,
                'title' => 'Photography Basics: Lighting and Composition',
                'description' => 'Learn how lighting and composition shape powerful images, with exercises in natural and artificial light.',
                'category_id' => 3,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/photo_basics.jpg',
                'video' => 'videos/photo_basics.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 3,
                'title' => 'Portrait Photography Masterclass',
                'description' => 'Capture emotions and depth in portraits using different lighting setups and editing techniques.',
                'category_id' => 3,
                'is_free' => false,
                'price' => 69.00,
                'level' => 'Advanced',
                'thumbnail' => 'courses/portrait_photography.jpg',
                'video' => 'videos/portrait_photography.mp4',
                'status' => 'published',
            ],

            // ✍️ Talent 4: Patrick Habimana - Poetry
            [
                'talent_id' => 4,
                'title' => 'Creative Writing for Beginners',
                'description' => 'Unlock imagination with daily writing prompts and practical storytelling exercises.',
                'category_id' => 4,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/creative_writing.jpg',
                'video' => 'videos/creative_writing.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 4,
                'title' => 'Performing Spoken Word Poetry',
                'description' => 'Learn stage presence, vocal tone, and performance techniques to make poetry come alive.',
                'category_id' => 4,
                'is_free' => false,
                'price' => 45.00,
                'level' => 'Intermediate',
                'thumbnail' => 'courses/spoken_word.jpg',
                'video' => 'videos/spoken_word.mp4',
                'status' => 'published',
            ],

            // 💃 Talent 5: Sarah Uwase - Dance
            [
                'talent_id' => 5,
                'title' => 'Traditional Rwandan Dance Basics',
                'description' => 'Learn cultural rhythms, movements, and meanings of traditional Rwandan dance.',
                'category_id' => 5,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/traditional_dance.jpg',
                'video' => 'videos/traditional_dance.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 5,
                'title' => 'Modern Choreography Techniques',
                'description' => 'Build choreography skills with lessons on rhythm, transitions, and body coordination.',
                'category_id' => 5,
                'is_free' => false,
                'price' => 39.99,
                'level' => 'Intermediate',
                'thumbnail' => 'courses/modern_choreo.jpg',
                'video' => 'videos/modern_choreo.mp4',
                'status' => 'published',
            ],

            // 🎧 Talent 6: Eric Nkurunziza - Music Production
            [
                'talent_id' => 6,
                'title' => 'Introduction to FL Studio',
                'description' => 'Step-by-step guide to producing beats, recording vocals, and mixing songs using FL Studio.',
                'category_id' => 1,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/fl_studio_intro.jpg',
                'video' => 'videos/fl_studio_intro.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 6,
                'title' => 'Mixing and Mastering Like a Pro',
                'description' => 'Understand EQ, compression, reverb, and mastering workflow to make your tracks radio-ready.',
                'category_id' => 1,
                'is_free' => false,
                'price' => 79.99,
                'level' => 'Advanced',
                'thumbnail' => 'courses/mixing_mastering.jpg',
                'video' => 'videos/mixing_mastering.mp4',
                'status' => 'published',
            ],

            // 👗 Talent 7: Linda Ingabire - Fashion
            [
                'talent_id' => 7,
                'title' => 'Fashion Design Foundations',
                'description' => 'Learn sketching, color theory, and garment structure as you start your fashion design journey.',
                'category_id' => 8,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/fashion_foundations.jpg',
                'video' => 'videos/fashion_foundations.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 7,
                'title' => 'Sustainable Fashion Practices',
                'description' => 'Explore eco-friendly materials, ethical production, and design methods for a sustainable future.',
                'category_id' => 8,
                'is_free' => false,
                'price' => 54.99,
                'level' => 'Intermediate',
                'thumbnail' => 'courses/sustainable_fashion.jpg',
                'video' => 'videos/sustainable_fashion.mp4',
                'status' => 'published',
            ],

            // 🎭 Talent 8: Kevin Mutabazi - Acting
            [
                'talent_id' => 8,
                'title' => 'Fundamentals of Acting',
                'description' => 'Discover the building blocks of acting including voice projection, emotion control, and improvisation.',
                'category_id' => 6,
                'is_free' => true,
                'price' => null,
                'level' => 'Beginner',
                'thumbnail' => 'courses/acting_fundamentals.jpg',
                'video' => 'videos/acting_fundamentals.mp4',
                'status' => 'published',
            ],
            [
                'talent_id' => 8,
                'title' => 'Screen Acting & Film Presence',
                'description' => 'Learn techniques for camera work, scene analysis, and creating authentic on-screen characters.',
                'category_id' => 6,
                'is_free' => false,
                'price' => 64.99,
                'level' => 'Advanced',
                'thumbnail' => 'courses/screen_acting.jpg',
                'video' => 'videos/screen_acting.mp4',
                'status' => 'published',
            ],
        ];

        // Generate slug for each course
        foreach ($courses as &$course) {
            $course['slug'] = Str::slug($course['title']);
        }

        Course::insert($courses);
    }
}
