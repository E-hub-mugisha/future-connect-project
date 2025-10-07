<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseLesson;
use Illuminate\Database\Seeder;

class CourseLessonSeeder extends Seeder
{
    public function run(): void
    {
        $course = Course::first();

        if ($course) {
            CourseLesson::insert([
                [
                    'course_id' => $course->id,
                    'title'     => 'Introduction',
                    'content'   => 'Welcome to the course!',
                    'video_url' => null,
                    'order'     => 1,
                ],
                [
                    'course_id' => $course->id,
                    'title'     => 'Setting up Environment',
                    'content'   => 'Install VS Code, PHP, and Composer.',
                    'video_url' => 'videos/setup.mp4',
                    'order'     => 2,
                ],
            ]);
        }
    }
}
