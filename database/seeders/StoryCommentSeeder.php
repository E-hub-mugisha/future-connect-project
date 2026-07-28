<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoryCommentSeeder extends Seeder
{
    public function run(): void
    {
        $storyIds = DB::table('stories')->pluck('id')->all();
        $commenters = [
            ['name' => 'Bernard Rukundo', 'email' => 'bernard.rukundo@gmail.com'],
            ['name' => 'Yvonne Umuhoza', 'email' => 'yvonne.umuhoza@gmail.com'],
            ['name' => 'Fabrice Nsengimana', 'email' => 'fabrice.nsengimana@gmail.com'],
            ['name' => 'Claudine Mukandayisenga', 'email' => 'claudine.mukan@gmail.com'],
            ['name' => 'Emmanuel Niyonzima', 'email' => 'emmanuel.niyonzima@gmail.com'],
            ['name' => 'Solange Ingabire', 'email' => 'solange.ingabire@gmail.com'],
            ['name' => 'Alexis Mugisha', 'email' => 'alexis.mugisha@gmail.com'],
            ['name' => 'Florence Nyirahabimana', 'email' => 'florence.nyira@gmail.com'],
            ['name' => 'Innocent Bizimana', 'email' => 'innocent.bizimana@gmail.com'],
            ['name' => 'Aimee Uwamahoro', 'email' => 'aimee.uwamahoro@gmail.com'],
        ];

        foreach ($commenters as $i => $c) {
            DB::table('story_comments')->insert([
                'story_id' => $storyIds[$i % count($storyIds)],
                'name' => $c['name'],
                'email' => $c['email'],
                'comment' => 'Truly inspiring story, proud to see Rwandan talent thriving like this!',
                'rating' => rand(3, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
