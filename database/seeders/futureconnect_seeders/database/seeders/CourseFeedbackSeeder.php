<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseFeedbackSeeder extends Seeder
{
    public function run(): void
    {
        $courseIds = DB::table('courses')->pluck('id')->all();
        $userIds = DB::table('users')->pluck('id')->all();

        foreach ($courseIds as $i => $courseId) {
            DB::table('course_feedback')->insert([
                'course_id' => $courseId,
                'user_id' => $userIds[($i + 1) % count($userIds)],
                'rating' => rand(3, 5),
                'comment' => 'Very practical course, learned skills I could apply immediately in my community.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
