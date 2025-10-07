<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseFeedback;
use App\Models\User;
use Illuminate\Database\Seeder;

class CourseFeedbackSeeder extends Seeder
{
    public function run(): void
    {
        $course = Course::first();
        $user   = User::first() ?? User::factory()->create();

        if ($course && $user) {
            CourseFeedback::create([
                'course_id' => $course->id,
                'user_id'   => $user->id,
                'rating'    => 5,
                'comment'   => 'Excellent course! Learned a lot.',
            ]);
        }
    }
}
