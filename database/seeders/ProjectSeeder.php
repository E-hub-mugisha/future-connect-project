<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\User;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure we have users first
        if (User::count() === 0) {
            $this->command->warn('⚠️ No users found. Please run UserSeeder first.');
            return;
        }

        $projects = [
            [
                'title' => 'Graphic Designer Looking for Tailor to Collaborate on Custom Apparel Line',
                'category' => 'Fashion & Design',
                'description' => 'I am a graphic designer with a strong portfolio in branding and pattern design. Looking for a tailor to collaborate on a limited collection of streetwear and cultural fashion pieces. We’ll share revenue after sales.',
                'budget' => 'Revenue Share',
                'location' => 'Remote / Kigali',
                'status' => 'approved',
                'verified' => true,
            ],
            [
                'title' => 'Mobile Developer Seeking Filmmaker for Short Documentary App Launch',
                'category' => 'Media & Technology',
                'description' => 'I built an app for indie filmmakers to share their work. I’m looking for a videographer or filmmaker to create a short documentary about our users. Paid collaboration + app feature credit.',
                'budget' => '$800 - $1,200',
                'location' => 'Remote / Nairobi',
                'status' => 'approved',
                'verified' => true,
            ],
            [
                'title' => '3D Artist Looking for Animator to Produce NFT Motion Graphics',
                'category' => 'Art & Digital Media',
                'description' => 'Seeking an experienced animator who can bring my static 3D NFT collection to life. Ideal collaborator should be familiar with Blender or Cinema4D. Revenue share or commission available.',
                'budget' => '$500 - $1,000',
                'location' => 'Remote',
                'status' => 'approved',
                'verified' => false,
            ],
            [
                'title' => 'Software Engineer Looking for UX Designer for Startup MVP',
                'category' => 'Tech & Product Design',
                'description' => 'Building a simple SaaS tool for small businesses. I have the backend ready but need a creative UX/UI designer to make it clean, intuitive, and market-ready. Equity share available.',
                'budget' => 'Equity Partnership',
                'location' => 'Sweden',
                'status' => 'approved',
                'verified' => true,
            ],
            [
                'title' => 'Musician Looking for Producer to Collaborate on EP',
                'category' => 'Music & Audio Production',
                'description' => 'I’m a singer-songwriter looking for a music producer to co-create a 5-track EP. Pop / R&B style preferred. Looking for someone with mixing/mastering experience. Revenue share after streaming release.',
                'budget' => 'Negotiable',
                'location' => 'Remote / Stockholm',
                'status' => 'approved',
                'verified' => true,
            ],
        ];

        foreach ($projects as $data) {
            Project::create(array_merge($data, [
                'user_id' => User::inRandomOrder()->first()->id,
                'created_at' => now()->subDays(rand(1, 30)),
                'updated_at' => now(),
            ]));
        }

        $this->command->info('✅ ProjectSeeder: 5 verified collaboration projects created successfully.');
    }
}
