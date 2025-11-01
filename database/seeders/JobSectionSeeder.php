<?php

namespace Database\Seeders;

use App\Models\JobSection;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $companies = User::all();

        if($companies->isEmpty()) {
            $this->command->info("No companies found. Please seed companies first.");
            return;
        }

        $jobsData = [
            [
                'title' => 'Frontend Developer',
                'description' => 'We are looking for a skilled Frontend Developer proficient in HTML, CSS, JavaScript, and modern frameworks like Vue.js or React.',
                'location' => 'Kigali, Rwanda',
                'type' => 'Full-time',
                'experience_level' => 'Mid',
                'salary_range' => '80000-120000',
                'skills' => 'HTML,CSS,JavaScript,React,Vue.js',
            ],
            [
                'title' => 'Backend Developer',
                'description' => 'Looking for a Backend Developer experienced with PHP, Laravel, REST APIs, and MySQL.',
                'location' => 'Remote',
                'type' => 'Full-time',
                'experience_level' => 'Senior',
                'salary_range' => '100000-150000',
                'skills' => 'PHP,Laravel,MySQL,REST API',
            ],
            [
                'title' => 'UI/UX Designer',
                'description' => 'Seeking a creative UI/UX designer to craft user-friendly interfaces and improve user experience.',
                'location' => 'Kigali, Rwanda',
                'type' => 'Contract',
                'experience_level' => 'Junior',
                'salary_range' => '50000-80000',
                'skills' => 'Figma,AdobeXD,Sketch,User Research',
            ],
            [
                'title' => 'Project Manager',
                'description' => 'Manage software development projects, coordinate with teams, and ensure timely delivery.',
                'location' => 'Remote',
                'type' => 'Full-time',
                'experience_level' => 'Senior',
                'salary_range' => '120000-180000',
                'skills' => 'Project Management,Agile,Scrum,Communication',
            ],
            [
                'title' => 'Data Analyst',
                'description' => 'Analyze datasets, generate insights, and provide reports to support business decisions.',
                'location' => 'Kigali, Rwanda',
                'type' => 'Part-time',
                'experience_level' => 'Mid',
                'salary_range' => '70000-100000',
                'skills' => 'Excel,SQL,Python,Data Visualization',
            ],
        ];

        foreach ($jobsData as $jobData) {
            $jobData['company_id'] = $companies->random()->id;
            JobSection::create($jobData);
        }
    }
}
