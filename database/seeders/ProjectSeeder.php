<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();

        $projects = [
            ['title' => 'Community Borehole Water Project', 'category' => 'Water & Sanitation', 'location' => 'Nyagatare', 'budget' => 4500000],
            ['title' => 'Girls Coding Club Equipment Fund', 'category' => 'Education', 'location' => 'Kigali', 'budget' => 3200000],
            ['title' => 'Cooperative Greenhouse Construction', 'category' => 'Agriculture', 'location' => 'Musanze', 'budget' => 6000000],
            ['title' => 'Youth Vocational Training Centre', 'category' => 'Education', 'location' => 'Huye', 'budget' => 8500000],
            ['title' => 'Solar Power for Rural Clinic', 'category' => 'Health', 'location' => 'Rubavu', 'budget' => 5200000],
            ['title' => 'Handicraft Cooperative Market Stall', 'category' => 'Commerce', 'location' => 'Muhanga', 'budget' => 1800000],
            ['title' => 'Road Access Improvement for Village', 'category' => 'Infrastructure', 'location' => 'Rwamagana', 'budget' => 9000000],
            ['title' => 'Digital Library for Secondary School', 'category' => 'Education', 'location' => 'Gicumbi', 'budget' => 2700000],
            ['title' => 'Women Tailoring Cooperative Startup', 'category' => 'Enterprise', 'location' => 'Kicukiro', 'budget' => 3000000],
            ['title' => 'Reforestation Initiative', 'category' => 'Environment', 'location' => 'Nyanza', 'budget' => 2200000],
        ];

        foreach ($projects as $i => $p) {
            $projectId = DB::table('projects')->insertGetId([
                'user_id' => $userIds[$i % count($userIds)],
                'title' => $p['title'],
                'category' => $p['category'],
                'description' => 'A community-driven project seeking local and diaspora support to improve livelihoods in Rwanda.',
                'budget_amount' => $p['budget'],
                'budget_currency' => 'RWF',
                'location' => $p['location'],
                'status' => $i % 4 === 0 ? 'closed' : 'approved',
                'verified' => $i % 2 === 0 ? 1 : 0,
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ]);

            DB::table('project_applications')->insert([
                'project_id' => $projectId,
                'name' => ['Divine Iradukunda','Olivier Nshimiyimana','Consolee Mukandoli','Theogene Habineza','Josiane Umwali','Gilbert Ntawuruhunga','Beatrice Nyiraneza','Christian Ishimwe','Peace Uwimbabazi','Damascene Karangwa'][$i],
                'email' => 'volunteer' . ($i + 1) . '@gmail.com',
                'message' => 'I would like to contribute my skills to support this community project.',
                'portfolio_url' => null,
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
