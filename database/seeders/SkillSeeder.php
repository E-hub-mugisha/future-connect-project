<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class SkillSeeder extends Seeder
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

        $skills = [
            [
                'name' => 'Web Development',
                'description' => 'Building responsive websites and web applications using modern technologies.',
                'tags' => 'Future Connect,Web Development,Laravel',
                'level' => 'Intermediate',
            ],
            [
                'name' => 'Graphic Design',
                'description' => 'Creating visually appealing designs for print and digital platforms.',
                'tags' => 'Future Connect,Design,Creativity',
                'level' => 'Beginner',
            ],
            [
                'name' => 'Mobile App Development',
                'description' => 'Developing user-friendly mobile applications for Android and iOS.',
                'tags' => 'Future Connect,Mobile,Apps',
                'level' => 'Advanced',
            ],
        ];

        foreach ($skills as $skill) {
            Skill::create([
                'name'        => $skill['name'],
                'slug'        => Str::slug($skill['name']) . '-' . $faker->unique()->randomNumber(3),
                'description' => $skill['description'],
                'image'       => $faker->imageUrl(640, 480, 'technology', true),
                'talent_id'   => $faker->randomElement($talentIds),
                'category_id' => $faker->randomElement($categoryIds),
                'tags'        => $skill['tags'],
                'status'      => $faker->randomElement(['draft', 'published', 'archived']),
                'level'       => $skill['level'],
            ]);
        }
    }
}
