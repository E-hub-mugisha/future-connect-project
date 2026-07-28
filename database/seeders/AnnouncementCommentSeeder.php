<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnnouncementCommentSeeder extends Seeder
{
    public function run(): void
    {
        $announcementIds = DB::table('announcements')->pluck('id')->all();
        $commenters = [
            ['name' => 'Patrick Habyarimana', 'email' => 'patrick.habyarimana@gmail.com'],
            ['name' => 'Aline Mukashema', 'email' => 'aline.mukashema@gmail.com'],
            ['name' => 'Eric Nkurunziza', 'email' => 'eric.nkurunziza@gmail.com'],
            ['name' => 'Chantal Mukamana', 'email' => 'chantal.mukamana@gmail.com'],
            ['name' => 'Diane Umutoni', 'email' => 'diane.umutoni@yahoo.com'],
            ['name' => 'Vincent Twagirayezu', 'email' => 'vincent.twagirayezu@yahoo.com'],
            ['name' => 'Immaculee Uwase', 'email' => 'immaculee.uwase@gmail.com'],
            ['name' => 'Jean de Dieu Ndayisenga', 'email' => 'jeandedieu.ndayisenga@gmail.com'],
            ['name' => 'Marie Claire Uwimana', 'email' => 'marieclaire.uwimana@futureconnect.rw'],
            ['name' => 'Jean Bosco Habimana', 'email' => 'jean.habimana@futureconnect.rw'],
        ];

        foreach ($commenters as $i => $c) {
            DB::table('announcement_comments')->insert([
                'announcement_id' => $announcementIds[$i % count($announcementIds)],
                'name' => $c['name'],
                'email' => $c['email'],
                'content' => 'Thanks for the update, this is great news for talents in our district!',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
