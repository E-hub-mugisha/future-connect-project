<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSectionSeeder extends Seeder
{
    public function run(): void
    {
        $jobCategoryIds = DB::table('job_categories')->pluck('id')->all();
        $userIds = DB::table('users')->pluck('id')->all();

        $jobs = [
            ['title' => 'Junior Laravel Developer', 'location' => 'Kigali', 'type' => 'full-time', 'level' => 'junior', 'salary' => '400,000 - 600,000 RWF'],
            ['title' => 'Site Supervisor (Construction)', 'location' => 'Musanze', 'type' => 'full-time', 'level' => 'mid', 'salary' => '350,000 - 500,000 RWF'],
            ['title' => 'Agronomist Consultant', 'location' => 'Nyagatare', 'type' => 'contract', 'level' => 'senior', 'salary' => '600,000 - 800,000 RWF'],
            ['title' => 'Hotel Front Desk Officer', 'location' => 'Rubavu', 'type' => 'full-time', 'level' => 'entry', 'salary' => '150,000 - 250,000 RWF'],
            ['title' => 'Accounts Assistant', 'location' => 'Kigali', 'type' => 'part-time', 'level' => 'junior', 'salary' => '200,000 - 300,000 RWF'],
            ['title' => 'ICT Trainer', 'location' => 'Huye', 'type' => 'contract', 'level' => 'mid', 'salary' => '300,000 - 450,000 RWF'],
            ['title' => 'Community Health Worker', 'location' => 'Rwamagana', 'type' => 'full-time', 'level' => 'entry', 'salary' => '150,000 - 220,000 RWF'],
            ['title' => 'Sales & Marketing Executive', 'location' => 'Kigali', 'type' => 'full-time', 'level' => 'mid', 'salary' => '400,000 - 550,000 RWF'],
            ['title' => 'Remote Frontend Developer', 'location' => 'Remote', 'type' => 'remote', 'level' => 'mid', 'salary' => '500,000 - 700,000 RWF'],
            ['title' => 'Internship - Business Development', 'location' => 'Kigali', 'type' => 'internship', 'level' => 'entry', 'salary' => '100,000 RWF stipend'],
        ];

        foreach ($jobs as $i => $j) {
            $jobSectionId = DB::table('job_sections')->insertGetId([
                'job_category_id' => $jobCategoryIds[$i % count($jobCategoryIds)],
                'title' => $j['title'],
                'description' => 'We are seeking a motivated professional to join our team and support our growing operations in Rwanda.',
                'location' => $j['location'],
                'type' => $j['type'],
                'experience_level' => $j['level'],
                'salary_range' => $j['salary'],
                'skills' => json_encode(['problem solving', 'communication', 'reliability']),
                'company_id' => $userIds[$i % 2],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('job_section_applications')->insert([
                'job_section_id' => $jobSectionId,
                'name' => ['Divine Iradukunda','Olivier Nshimiyimana','Consolee Mukandoli','Theogene Habineza','Josiane Umwali','Gilbert Ntawuruhunga','Beatrice Nyiraneza','Christian Ishimwe','Peace Uwimbabazi','Damascene Karangwa'][$i],
                'email' => 'applicant' . ($i + 1) . '@gmail.com',
                'cover_letter' => 'I believe my skills and experience make me a strong fit for this role in Rwanda.',
                'resume' => null,
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
