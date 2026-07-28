<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnnouncementSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $titles = [
            'FutureConnect Now Live in All 30 Districts',
            'New Digital Skills Bootcamp Starting in Kigali',
            'Talent Verification Process Update',
            'Diaspora Sponsorship Program Launched',
            'Upcoming Job Fair at Kigali Convention Centre',
            'New Payment Options: MTN MoMo & Airtel Money',
            'FutureConnect Partners with Rwanda Development Board',
            'Course Marketplace Now Open for Talents',
            'Corporate Recruitment Portal Now Available',
            'Platform Maintenance Notice for This Weekend',
        ];

        foreach ($titles as $i => $title) {
            DB::table('announcements')->insert([
                'title' => $title,
                'content' => 'FutureConnect continues to connect Rwandan talents with clients and opportunities across the country. Read more details about this update on our platform.',
                'image' => null,
                'link' => null,
                'is_active' => 1,
                'created_by' => $userIds[$i % 2],
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
