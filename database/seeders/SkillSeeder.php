<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $skills = [
            ['name' => 'Laravel & React Web Application Development', 'level' => 'Advanced'],
            ['name' => 'Custom Kitenge & Imishanana Tailoring', 'level' => 'Intermediate'],
            ['name' => 'Solid Wood Furniture Joinery', 'level' => 'Advanced'],
            ['name' => 'Bridal Makeup & Hair Braiding', 'level' => 'Intermediate'],
            ['name' => 'Greenhouse Vegetable Farming', 'level' => 'Beginner'],
            ['name' => 'Traditional Rwandan Cuisine Catering', 'level' => 'Advanced'],
            ['name' => 'Wedding & Portrait Photography', 'level' => 'Advanced'],
            ['name' => 'Brick Masonry & Plastering', 'level' => 'Intermediate'],
            ['name' => 'Traditional Drumming (Ingoma) Performance', 'level' => 'Expert'],
            ['name' => 'Brand Identity & Logo Design', 'level' => 'Intermediate'],
        ];

        foreach ($skills as $i => $s) {
            DB::table('skills')->insert([
                'name' => $s['name'],
                'slug' => Str::slug($s['name']),
                'description' => 'Professional service offered by a verified Rwandan talent through FutureConnect.',
                'image' => null,
                'talent_id' => $talentIds[$i % count($talentIds)],
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'tags' => 'rwanda,skill',
                'status' => 'published',
                'level' => $s['level'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
