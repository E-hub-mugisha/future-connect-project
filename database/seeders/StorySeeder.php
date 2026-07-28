<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class StorySeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $titles = [
            'From Kimironko to Kigali Tech Hub: My Coding Journey',
            'Weaving Modern Style into Rwandan Fashion',
            'Building Furniture that Tells a Story',
            'From Salon Apprentice to Beauty Entrepreneur',
            'Growing Organic Produce in Nyagatare',
            'Feeding Kigali One Event at a Time',
            'Capturing Rwanda Through My Lens',
            'Laying the Foundation for Rubavu Homes',
            'Keeping Rwandan Rhythms Alive',
            'Designing Brands for Kigali Startups',
        ];

        foreach ($titles as $i => $title) {
            DB::table('stories')->insert([
                'talent_id' => $talentIds[$i % count($talentIds)],
                'title' => $title,
                'content' => 'This is the inspiring journey of a Rwandan talent who turned passion into a thriving craft, serving clients across Kigali and beyond through the FutureConnect platform.',
                'media' => null,
                'thumbnail' => null,
                'slug' => Str::slug($title) . '-' . ($i + 1),
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'tags' => 'rwanda,talent,success',
                'status' => $i % 5 === 0 ? 'pending' : 'published',
                'views' => rand(20, 900),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
