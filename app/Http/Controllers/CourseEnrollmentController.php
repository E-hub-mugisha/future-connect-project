<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseEnrollment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class CourseEnrollmentController extends Controller
{
    /**
     * Enroll authenticated user in a course.
     */
    public function store(
        Request $request,
        Course $course
    ): RedirectResponse {
        $user = $request->user();

        if (!$user) {
            return redirect()->route('login');
        }

        /*
        |--------------------------------------------------------------------------
        | Prevent duplicate enrollment
        |--------------------------------------------------------------------------
        */
        $enrollment = CourseEnrollment::firstOrCreate(
            [
                'course_id' => $course->id,
                'user_id' => $user->id,
            ],
            [
                'progress' => 0,
                'status' => 'active',
            ]
        );

        /*
        |--------------------------------------------------------------------------
        | If an old enrollment was completed/inactive, activate it again
        |--------------------------------------------------------------------------
        */
        if ($enrollment->status !== 'active') {
            $enrollment->update([
                'status' => 'active',
            ]);
        }

        return back()->with(
            'success',
            'You have successfully enrolled in this course.'
        );
    }
}