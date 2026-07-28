<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalentFeedbackSeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $reviewers = [
            ['name' => 'Divine Iradukunda', 'email' => 'divine.iradukunda@gmail.com'],
            ['name' => 'Olivier Nshimiyimana', 'email' => 'olivier.nshimiyimana@gmail.com'],
            ['name' => 'Consolee Mukandoli', 'email' => 'consolee.mukandoli@gmail.com'],
            ['name' => 'Theogene Habineza', 'email' => 'theogene.habineza@gmail.com'],
            ['name' => 'Josiane Umwali', 'email' => 'josiane.umwali@gmail.com'],
            ['name' => 'Gilbert Ntawuruhunga', 'email' => 'gilbert.ntawuruhunga@gmail.com'],
            ['name' => 'Beatrice Nyiraneza', 'email' => 'beatrice.nyiraneza@gmail.com'],
            ['name' => 'Christian Ishimwe', 'email' => 'christian.ishimwe@gmail.com'],
            ['name' => 'Peace Uwimbabazi', 'email' => 'peace.uwimbabazi@gmail.com'],
            ['name' => 'Damascene Karangwa', 'email' => 'damascene.karangwa@gmail.com'],
        ];

        foreach ($reviewers as $i => $r) {
            DB::table('talent_feedback')->insert([
                'talent_id' => $talentIds[$i % count($talentIds)],
                'name' => $r['name'],
                'email' => $r['email'],
                'rating' => rand(3, 5),
                'comment' => 'Reliable and skilled, would definitely hire again through FutureConnect.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
