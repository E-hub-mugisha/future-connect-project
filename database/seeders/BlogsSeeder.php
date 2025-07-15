<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class BlogsSeeder extends Seeder
{
    public function run()
    {
        $blogs = [
            [
                'title' => '5 Essential Skills Every Young Talent Should Develop',
                'content' => "In today's competitive world, young talents need to focus on building skills that set them apart. From communication to critical thinking, these abilities are crucial for success in any field. This blog explores the top five skills and practical ways to develop them.",
                'image' => 'skills-development.jpg',
                'author_id' => 1, // adjust based on your users
                'category_id' => 2, // adjust based on your categories
                'views' => 120,
                'is_published' => true,
            ],
            [
                'title' => 'How to Nurture Creativity in Your Team',
                'content' => "Creativity is the backbone of innovation. Leaders who foster an environment that encourages creative thinking unlock the full potential of their teams. Discover effective strategies to nurture creativity and inspire breakthrough ideas.",
                'image' => 'nurture-creativity.jpg',
                'author_id' => 2,
                'category_id' => 3,
                'views' => 85,
                'is_published' => true,
            ],
            [
                'title' => 'The Role of Continuous Learning in Talent Growth',
                'content' => "Talent management is incomplete without continuous learning. This blog dives into the importance of ongoing education, professional development, and how companies can support their employees to keep growing.",
                'image' => 'continuous-learning.jpg',
                'author_id' => 3,
                'category_id' => 2,
                'views' => 90,
                'is_published' => true,
            ],
            [
                'title' => 'Top 10 Platforms to Showcase Your Talent Online',
                'content' => "With digital platforms booming, talents can reach global audiences easily. This post reviews the top 10 websites and apps where artists, developers, writers, and other creatives can showcase their work and get discovered.",
                'image' => 'showcase-platforms.jpg',
                'author_id' => 1,
                'category_id' => 4,
                'views' => 140,
                'is_published' => true,
            ],
            [
                'title' => 'Why Emotional Intelligence Matters for Talented Individuals',
                'content' => "Beyond technical skills, emotional intelligence can be a game-changer for talents in leadership and teamwork. Learn why EQ matters and how to cultivate it for personal and professional growth.",
                'image' => 'emotional-intelligence.jpg',
                'author_id' => 2,
                'category_id' => 3,
                'views' => 110,
                'is_published' => true,
            ],
        ];

        foreach ($blogs as $blog) {
            DB::table('blogs')->insert([
                'title' => $blog['title'],
                'slug' => Str::slug($blog['title']),
                'content' => $blog['content'],
                'image' => $blog['image'],
                'author_id' => $blog['author_id'],
                'category_id' => $blog['category_id'],
                'views' => $blog['views'],
                'is_published' => $blog['is_published'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
