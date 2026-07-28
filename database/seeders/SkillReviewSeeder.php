<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillReviewSeeder extends Seeder
{
    public function run(): void
    {
        $skillIds = DB::table('skills')->pluck('id')->all();
        $reviewers = [
            ['name' => 'Alexis Mugisha', 'email' => 'alexis.mugisha@gmail.com'],
            ['name' => 'Florence Nyirahabimana', 'email' => 'florence.nyira@gmail.com'],
            ['name' => 'Innocent Bizimana', 'email' => 'innocent.bizimana@gmail.com'],
            ['name' => 'Aimee Uwamahoro', 'email' => 'aimee.uwamahoro@gmail.com'],
            ['name' => 'Bernard Rukundo', 'email' => 'bernard.rukundo@gmail.com'],
            ['name' => 'Yvonne Umuhoza', 'email' => 'yvonne.umuhoza@gmail.com'],
            ['name' => 'Fabrice Nsengimana', 'email' => 'fabrice.nsengimana@gmail.com'],
            ['name' => 'Claudine Mukandayisenga', 'email' => 'claudine.mukan@gmail.com'],
            ['name' => 'Emmanuel Niyonzima', 'email' => 'emmanuel.niyonzima@gmail.com'],
            ['name' => 'Solange Ingabire', 'email' => 'solange.ingabire@gmail.com'],
        ];

        foreach ($reviewers as $i => $r) {
            DB::table('skill_reviews')->insert([
                'skill_id' => $skillIds[$i % count($skillIds)],
                'name' => $r['name'],
                'email' => $r['email'],
                'rating' => rand(3, 5),
                'message' => 'Excellent work, delivered on time and communicated clearly throughout the project.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
