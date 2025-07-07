<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TalentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $categoryIds = Category::pluck('id')->toArray();

        if (empty($categoryIds)) {
            $this->command->warn('No categories found. Please seed categories first.');
            return;
        }

        $talents = [
            [
                'name' => 'Eric Mugisha',
                'skill' => 'Web Development',
                'phone' => '+250 788 123 456',
                'email' => 'eric.mugisha@example.com',
                'language' => 'English',
            ],
            [
                'name' => 'Aline Uwase',
                'skill' => 'Graphic Design',
                'phone' => '+250 722 456 789',
                'email' => 'aline.uwase@example.com',
                'language' => 'Kinyarwanda',
            ],
            [
                'name' => 'Jean Claude Niyonsaba',
                'skill' => 'Photography',
                'phone' => '+250 784 987 654',
                'email' => 'jeanclaude.niyonsaba@example.com',
                'language' => 'French',
            ],
            [
                'name' => 'Sandrine Umwali',
                'skill' => 'Digital Marketing',
                'phone' => '+250 730 654 321',
                'email' => 'sandrine.umwali@example.com',
                'language' => 'English',
            ],
            [
                'name' => 'Patrick Nsengimana',
                'skill' => 'UI/UX Design',
                'phone' => '+250 788 741 258',
                'email' => 'patrick.nsengimana@example.com',
                'language' => 'Kinyarwanda',
            ],
            [
                'name' => 'Diane Uwizeye',
                'skill' => 'Mobile App Development',
                'phone' => '+250 728 369 147',
                'email' => 'diane.uwizeye@example.com',
                'language' => 'English',
            ],
        ];

        foreach ($talents as $talent) {
            Talent::create([
                'name'        => $talent['name'],
                'skill'       => $talent['skill'],
                'story'       => $faker->paragraph(3),
                'rating'      => $faker->numberBetween(1, 5),
                'status'      => $faker->randomElement(['pending', 'approved', 'rejected']),
                'featured'    => $faker->boolean(),
                'description' => $faker->sentence(),
                'image'       => $faker->imageUrl(640, 480, 'people', true),
                'address'     => $faker->address(),
                'phone'       => $talent['phone'],
                'email'       => $talent['email'],
                'language'    => $talent['language'],
                'category_id' => $faker->randomElement($categoryIds),
                'matched'     => $faker->boolean(),
            ]);
        }
    }
}
