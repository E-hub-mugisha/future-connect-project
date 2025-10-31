<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('events')->insert([
            [
                'title' => 'Youth Meet Investors',
                'organizer_id' => 1,
                'description' => 'A virtual networking event connecting young innovators with potential investors and mentors. Includes live pitch sessions and breakout networking rooms.',
                'venue' => 'Online - Zoom Conference',
                'event_date' => Carbon::parse('2025-11-20'),
                'type' => 'online',
                'start_time' => Carbon::parse('2025-11-20 10:00:00'),
                'end_time' => Carbon::parse('2025-11-20 15:00:00'),
                'capacity' => 500,
                'image' => 'events/youth-meet-investors.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Women in Skills Innovation',
                'organizer_id' => 2,
                'description' => 'A hybrid event spotlighting women leading innovation in various skill sectors. Includes keynotes, mentorship, and partnership opportunities.',
                'venue' => 'Kigali Convention Centre + Online',
                'event_date' => Carbon::parse('2025-12-05'),
                'type' => 'hybrid',
                'start_time' => Carbon::parse('2025-12-05 09:00:00'),
                'end_time' => Carbon::parse('2025-12-05 17:00:00'),
                'capacity' => 800,
                'image' => 'events/women-in-innovation.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Tech for Climate Impact',
                'organizer_id' => 3,
                'description' => 'A global virtual event connecting tech enthusiasts and climate activists to build sustainable solutions.',
                'venue' => 'Online - Hopin Platform',
                'event_date' => Carbon::parse('2026-01-15'),
                'type' => 'online',
                'start_time' => Carbon::parse('2026-01-15 14:00:00'),
                'end_time' => Carbon::parse('2026-01-15 18:00:00'),
                'capacity' => 1000,
                'image' => 'events/tech-for-climate.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Future of Work Summit',
                'organizer_id' => 1,
                'description' => 'A hybrid summit exploring the future of work, remote collaboration, and AI-driven productivity tools.',
                'venue' => 'BK Arena + Online',
                'event_date' => Carbon::parse('2026-02-10'),
                'type' => 'hybrid',
                'start_time' => Carbon::parse('2026-02-10 09:00:00'),
                'end_time' => Carbon::parse('2026-02-10 18:00:00'),
                'capacity' => 1200,
                'image' => 'events/future-of-work.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
