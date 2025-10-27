<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Music',
                'description' => 'Talents related to singing, instruments, composition, and music production.',
                'featured' => true,
                'image' => 'uploads/categories/music.jpg',
            ],
            [
                'name' => 'Dance',
                'description' => 'Talents specialized in different dance styles including contemporary, hip-hop, ballet, and more.',
                'featured' => true,
                'image' => 'uploads/categories/dance.jpg',
            ],
            [
                'name' => 'Photography',
                'description' => 'Talents skilled in photography, photo editing, and creative visual storytelling.',
                'featured' => true,
                'image' => 'uploads/categories/photography.jpg',
            ],
            [
                'name' => 'Fashion',
                'description' => 'Talents focused on fashion design, styling, tailoring, and clothing innovation.',
                'featured' => true,
                'image' => 'uploads/categories/fashion.jpg',
            ],
            [
                'name' => 'Coding',
                'description' => 'Talents in programming, web development, app development, and software engineering.',
                'featured' => false,
                'image' => 'uploads/categories/coding.jpg',
            ],
            [
                'name' => 'Art',
                'description' => 'Talents specialized in painting, drawing, sculpture, and creative arts.',
                'featured' => false,
                'image' => 'uploads/categories/art.jpg',
            ],
            [
                'name' => 'Cooking',
                'description' => 'Talents skilled in culinary arts, recipe creation, and food styling.',
                'featured' => false,
                'image' => 'uploads/categories/cooking.jpg',
            ],
            [
                'name' => 'Sports',
                'description' => 'Talents in different sports disciplines including athletics, football, basketball, and fitness training.',
                'featured' => false,
                'image' => 'uploads/categories/sports.jpg',
            ],
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'description' => $category['description'],
                'featured' => $category['featured'],
                'image' => $category['image'],
                'slug' => Str::slug($category['name']),
            ]);
        }
    }
}
