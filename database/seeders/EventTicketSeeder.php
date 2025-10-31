<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventTicketSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('event_tickets')->insert([
            // Event 1: Youth Meet Investors
            [
                'event_id' => 1,
                'type' => 'Regular',
                'price' => 10000,
                'quantity' => 300,
                'sold' => 50,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 1,
                'type' => 'VIP',
                'price' => 25000,
                'quantity' => 150,
                'sold' => 30,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 1,
                'type' => 'VVIP',
                'price' => 50000,
                'quantity' => 50,
                'sold' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Event 2: Women in Skills Innovation
            [
                'event_id' => 2,
                'type' => 'Regular',
                'price' => 15000,
                'quantity' => 400,
                'sold' => 80,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 2,
                'type' => 'VIP',
                'price' => 30000,
                'quantity' => 250,
                'sold' => 40,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 2,
                'type' => 'VVIP',
                'price' => 60000,
                'quantity' => 100,
                'sold' => 15,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Event 3: Tech for Climate Impact
            [
                'event_id' => 3,
                'type' => 'Regular',
                'price' => 8000,
                'quantity' => 500,
                'sold' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 3,
                'type' => 'VIP',
                'price' => 20000,
                'quantity' => 200,
                'sold' => 60,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 3,
                'type' => 'VVIP',
                'price' => 40000,
                'quantity' => 50,
                'sold' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Event 4: Future of Work Summit
            [
                'event_id' => 4,
                'type' => 'Regular',
                'price' => 20000,
                'quantity' => 600,
                'sold' => 150,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 4,
                'type' => 'VIP',
                'price' => 40000,
                'quantity' => 300,
                'sold' => 80,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'event_id' => 4,
                'type' => 'VVIP',
                'price' => 80000,
                'quantity' => 100,
                'sold' => 20,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
