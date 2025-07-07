<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class StorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $talentIds = Talent::pluck('id')->toArray();
        $categoryIds = Category::pluck('id')->toArray();

        if (empty($talentIds) || empty($categoryIds)) {
            $this->command->warn('Please seed talents and categories first.');
            return;
        }

        $stories = [
            [
                'title' => 'My Journey with Future Connect: From Beginner to Pro',
                'content' => 'Joining Future Connect changed my life. I gained the skills, confidence, and network to launch my own tech startup.',
                'tags' => 'Future Connect,Success Story,Inspiration',
            ],
            [
                'title' => 'How Future Connect Helped Me Break Into the Tech Industry',
                'content' => 'As a young talent in Rwanda, I struggled to find opportunities. Through Future Connect, I received mentorship and landed my first freelance project.',
                'tags' => 'Future Connect,Mentorship,Freelancing',
            ],
            [
                'title' => 'From Passion to Profession: My Future Connect Story',
                'content' => 'I always loved technology, but lacked direction. Future Connect guided me to turn my passion for design into a real career.',
                'tags' => 'Future Connect,Design,Passion',
            ],
        ];

        foreach ($stories as $story) {
            Story::create([
                'talent_id'   => $faker->randomElement($talentIds),
                'title'       => $story['title'],
                'content'     => $story['content'],
                'media'       => $faker->imageUrl(640, 480, 'business', true),
                'thumbnail'   => $faker->imageUrl(300, 200, 'people', true),
                'slug'        => Str::slug($story['title']) . '-' . $faker->unique()->randomNumber(4),
                'category_id' => $faker->randomElement($categoryIds),
                'tags'        => $story['tags'],
                'status'      => $faker->randomElement(['pending', 'approved', 'rejected']),
            ]);
        }
    }
}
