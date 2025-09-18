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
                'title' => 'Future Connect Official Launch Event',
                'content' => 'Future Connect proudly announces its official launch, marking the beginning of a transformative journey to empower young talents across Rwanda. This event celebrates innovation, creativity, and the limitless potential of youth who are ready to shape the future. Participants will gain access to mentorship programs, networking opportunities, and career guidance designed to unlock their fullest potential.',
                'link' => 'https://futureconnect.rw/launch',
            ],
            [
                'title' => 'Strategic Partnership with Global Tech Leaders',
                'content' => 'We are thrilled to reveal our strategic partnership with leading international technology firms. This collaboration will provide scholarships, internships, and hands-on training opportunities for young Rwandan professionals. Through this initiative, Future Connect continues to bridge the gap between local talent and global opportunities, ensuring that Rwandan youth thrive in the fast-paced digital economy.',
                'link' => 'https://futureconnect.rw/partnerships',
            ],
            [
                'title' => 'Upcoming Skills Development Workshops',
                'content' => 'Future Connect is hosting a series of interactive workshops covering web development, graphic design, entrepreneurship, and digital marketing. These sessions are designed to help participants acquire practical skills that will give them a competitive advantage in today’s job market. Experienced professionals and guest speakers will guide learners through real-world projects and hands-on training.',
                'link' => 'https://futureconnect.rw/workshops',
            ],
            [
                'title' => 'Youth Innovation Challenge 2025',
                'content' => 'We are excited to launch the Youth Innovation Challenge 2025, a competition that invites young innovators to pitch groundbreaking ideas that address real-world problems. Winners will receive seed funding, mentorship, and an opportunity to showcase their projects on national and international stages. This initiative reflects Future Connect’s commitment to nurturing innovation and entrepreneurship among Rwanda’s youth.',
                'link' => 'https://futureconnect.rw/innovation-challenge',
            ],
            [
                'title' => 'Scholarship Program for Digital Careers',
                'content' => 'Future Connect, in collaboration with our education partners, is rolling out a scholarship program to support talented but underprivileged youth who aspire to build careers in technology. The program covers training in software engineering, data analysis, and artificial intelligence. Beneficiaries will also receive mentorship and internship placements to prepare them for competitive global opportunities.',
                'link' => 'https://futureconnect.rw/scholarships',
            ],
            [
                'title' => 'Future Connect Annual Youth Summit',
                'content' => 'Join us for the first annual Future Connect Youth Summit, a gathering of young leaders, industry experts, and policymakers. The summit will feature keynote addresses, panel discussions, and networking sessions aimed at exploring the future of work, digital transformation, and youth empowerment in Rwanda. This event is a platform for dialogue, collaboration, and inspiration for the next generation of leaders.',
                'link' => 'https://futureconnect.rw/youth-summit',
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
