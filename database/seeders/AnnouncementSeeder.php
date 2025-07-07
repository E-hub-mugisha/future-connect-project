<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\User;
use Faker\Factory as Faker;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $categoryIds = Category::pluck('id')->toArray();
        $userIds = User::pluck('id')->toArray();

        if (empty($categoryIds) || empty($userIds)) {
            $this->command->warn('Please seed categories and users first.');
            return;
        }

        $announcements = [
            [
                'title' => 'Future Connect Launch Event',
                'content' => 'We are excited to announce the official launch of Future Connect, empowering young talents across Rwanda.',
                'link' => 'https://futureconnect.rw/launch',
            ],
            [
                'title' => 'New Partnership Announcement',
                'content' => 'Future Connect has partnered with top tech companies to provide more opportunities for Rwandan youth.',
                'link' => 'https://futureconnect.rw/partnerships',
            ],
            [
                'title' => 'Upcoming Skills Workshops',
                'content' => 'Join our upcoming workshops to enhance your skills in web development, design, and entrepreneurship.',
                'link' => 'https://futureconnect.rw/workshops',
            ],
        ];

        foreach ($announcements as $announcement) {
            Announcement::create([
                'title'       => $announcement['title'],
                'content'     => $announcement['content'],
                'image'       => $faker->imageUrl(640, 480, 'business', true),
                'link'        => $announcement['link'],
                'is_active'   => true,
                'created_by'  => $faker->randomElement($userIds),
                'category_id' => $faker->randomElement($categoryIds),
            ]);
        }
    }
}
