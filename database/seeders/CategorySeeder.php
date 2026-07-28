<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Software Development', 'description' => 'Web, mobile and desktop application development', 'type' => 'digital', 'featured' => 1],
            ['name' => 'Graphic Design', 'description' => 'Logo, branding and visual design services', 'type' => 'digital', 'featured' => 1],
            ['name' => 'Tailoring & Fashion Design', 'description' => 'Custom clothing and Rwandan fashion design', 'type' => 'craft', 'featured' => 0],
            ['name' => 'Carpentry & Woodwork', 'description' => 'Furniture making and woodwork craftsmanship', 'type' => 'craft', 'featured' => 0],
            ['name' => 'Agriculture & Farming', 'description' => 'Crop farming, livestock and agribusiness skills', 'type' => 'agriculture', 'featured' => 1],
            ['name' => 'Beauty & Hair Styling', 'description' => 'Hairdressing, makeup and salon services', 'type' => 'beauty', 'featured' => 0],
            ['name' => 'Culinary Arts & Catering', 'description' => 'Cooking, baking and event catering', 'type' => 'hospitality', 'featured' => 0],
            ['name' => 'Photography & Videography', 'description' => 'Event and studio photography, video production', 'type' => 'digital', 'featured' => 1],
            ['name' => 'Construction & Masonry', 'description' => 'Building, masonry and finishing works', 'type' => 'construction', 'featured' => 0],
            ['name' => 'Music & Performing Arts', 'description' => 'Traditional and modern music, dance and performance', 'type' => 'arts', 'featured' => 0],
        ];

        foreach ($categories as $c) {
            DB::table('categories')->insert([
                'name' => $c['name'],
                'description' => $c['description'],
                'type' => $c['type'],
                'featured' => $c['featured'],
                'slug' => Str::slug($c['name']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
