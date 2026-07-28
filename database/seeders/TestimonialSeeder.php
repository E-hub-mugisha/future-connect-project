<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $titles = [
            'Delivered our company website ahead of schedule',
            'Beautiful custom dress for my wedding',
            'Solid, durable furniture for our office',
            'My hair has never looked better',
            'Fresh produce delivered weekly without fail',
            'Catered our corporate event perfectly',
            'Captured our wedding day beautifully',
            'Completed our home construction on budget',
            'Amazing traditional performance at our event',
            'Professional branding that elevated our business',
        ];

        foreach ($titles as $i => $title) {
            DB::table('testimonials')->insert([
                'talent_id' => $talentIds[$i % count($talentIds)],
                'title' => $title,
                'content' => 'Working with this talent through FutureConnect was a fantastic experience from start to finish. Highly recommended to anyone in Rwanda.',
                'rating' => rand(4, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
