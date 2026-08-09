<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function courses()
    {
        $user = Auth::user();

        $enrollments = \App\Models\CourseEnrollment::with(['course.category', 'course.talent'])
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('UserPanel/Courses/Index', [
            'enrollments' => $enrollments,
        ]);
    }
}
