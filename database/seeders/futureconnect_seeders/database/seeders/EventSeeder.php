<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();

        $events = [
            ['title' => 'Kigali Talent Expo 2026', 'venue' => 'Kigali Convention Centre', 'type' => 'hybrid'],
            ['title' => 'Rwanda Fashion Week', 'venue' => 'Kigali Serena Hotel', 'type' => 'hybrid'],
            ['title' => 'Digital Skills Bootcamp', 'venue' => 'Norrsken House Kigali', 'type' => 'online'],
            ['title' => 'Made in Rwanda Trade Fair', 'venue' => 'Petit Stade, Remera', 'type' => 'hybrid'],
            ['title' => 'Diaspora Investment Forum', 'venue' => 'Kigali Marriott Hotel', 'type' => 'online'],
            ['title' => 'Agribusiness Innovation Summit', 'venue' => 'Musanze Conference Hall', 'type' => 'hybrid'],
            ['title' => 'Youth Job Fair', 'venue' => 'Huye District Stadium', 'type' => 'hybrid'],
            ['title' => 'Creative Arts Showcase', 'venue' => 'Kigali Cultural Village', 'type' => 'hybrid'],
            ['title' => 'Construction & Real Estate Expo', 'venue' => 'Rebero Trade Centre', 'type' => 'hybrid'],
            ['title' => 'Women in Business Summit', 'venue' => 'Kigali Convention Centre', 'type' => 'online'],
        ];

        foreach ($events as $i => $e) {
            $eventId = DB::table('events')->insertGetId([
                'title' => $e['title'],
                'organizer_id' => $userIds[$i % 2],
                'description' => 'Join us for this exciting event connecting Rwandan talents, businesses and clients.',
                'venue' => $e['venue'],
                'type' => $e['type'],
                'start_time' => now()->addDays(($i + 1) * 3)->setTime(9, 0),
                'end_time' => now()->addDays(($i + 1) * 3)->setTime(17, 0),
                'capacity' => rand(100, 1000),
                'image' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('event_tickets')->insert([
                'event_id' => $eventId,
                'type' => 'Standard',
                'price' => 5000 + ($i * 1000),
                'quantity' => 200,
                'sold' => rand(10, 150),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
