<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseEnrollment;
use App\Models\User;
use Illuminate\Database\Seeder;

class CourseEnrollmentSeeder extends Seeder
{
    public function run(): void
    {
        $course = Course::first();
        $user   = User::first() ?? User::factory()->create();

        if ($course && $user) {
            CourseEnrollment::create([
                'course_id' => $course->id,
                'user_id'   => $user->id,
                'progress'  => 20,
                'status'    => 'active',
            ]);
        }
    }
}
