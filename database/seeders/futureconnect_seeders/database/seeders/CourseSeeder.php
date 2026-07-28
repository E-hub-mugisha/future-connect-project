<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $courses = [
            ['title' => 'Introduction to Laravel for Beginners', 'is_free' => 1, 'price' => null, 'level' => 'Beginner'],
            ['title' => 'Mastering Kitenge Pattern Cutting', 'is_free' => 0, 'price' => 15000, 'level' => 'Intermediate'],
            ['title' => 'Modern Furniture Joinery Techniques', 'is_free' => 0, 'price' => 20000, 'level' => 'Advanced'],
            ['title' => 'Bridal Makeup Fundamentals', 'is_free' => 0, 'price' => 12000, 'level' => 'Beginner'],
            ['title' => 'Greenhouse Farming for Small Plots', 'is_free' => 1, 'price' => null, 'level' => 'Beginner'],
            ['title' => 'Event Catering Business Essentials', 'is_free' => 0, 'price' => 18000, 'level' => 'Intermediate'],
            ['title' => 'Portrait Photography with Any Camera', 'is_free' => 0, 'price' => 10000, 'level' => 'Beginner'],
            ['title' => 'Masonry Safety and Best Practices', 'is_free' => 1, 'price' => null, 'level' => 'Intermediate'],
            ['title' => 'Traditional Drumming Techniques', 'is_free' => 0, 'price' => 8000, 'level' => 'Advanced'],
            ['title' => 'Brand Identity Design with Free Tools', 'is_free' => 0, 'price' => 14000, 'level' => 'Intermediate'],
        ];

        foreach ($courses as $i => $c) {
            DB::table('courses')->insert([
                'talent_id' => $talentIds[$i % count($talentIds)],
                'title' => $c['title'],
                'slug' => Str::slug($c['title']),
                'description' => 'A practical course designed to help Rwandan learners build in-demand, income-generating skills.',
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'is_free' => $c['is_free'],
                'price' => $c['price'],
                'level' => $c['level'],
                'thumbnail' => null,
                'video' => null,
                'status' => 'published',
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ]);
        }
    }
}
