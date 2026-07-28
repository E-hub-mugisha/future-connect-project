<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseEnrollmentSeeder extends Seeder
{
    public function run(): void
    {
        $courseIds = DB::table('courses')->pluck('id')->all();
        $userIds = DB::table('users')->pluck('id')->all();
        $statuses = ['active', 'completed', 'active', 'completed', 'canceled', 'active', 'completed', 'active', 'active', 'completed'];

        foreach ($courseIds as $i => $courseId) {
            DB::table('course_enrollments')->insert([
                'course_id' => $courseId,
                'user_id' => $userIds[$i % count($userIds)],
                'progress' => rand(10, 100),
                'status' => $statuses[$i % count($statuses)],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
