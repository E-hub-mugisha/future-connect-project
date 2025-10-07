<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Category;
use App\Models\CourseEnrollment;
use App\Models\CourseFeedback;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with(['category', 'talent', 'feedback'])->paginate(12);
        $categories = Category::with('courses')->get();
        return view('user-page.courses', compact('courses', 'categories'));
    }

    public function show($slug)
    {
        $course = Course::with(['category', 'feedback', 'talent'])->where('slug', $slug)->firstOrFail();
        // Get related courses (same category, not the current one)
        $relatedCourses = Course::where('category_id', $course->category_id)
            ->where('id', '!=', $course->id)
            ->latest()
            ->take(6)
            ->with(['talent', 'category', 'feedback'])
            ->get();
        return view('user-page.course-details', compact('course', 'relatedCourses'));
    }

    public function getCoursesByCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();

        $courses = Course::with(['category', 'feedback', 'talent'])
            ->where('category_id', $category->id)
            ->latest()
            ->get();

        $categories = Category::all();
        $categoryName = $category->name;

        return view('user-page.category-course', compact('courses', 'categories', 'categoryName'));
    }
    public function storeReview(Request $request, $courseId)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);



        CourseFeedback::create([
            'course_id' => $courseId,
            'user_id' => auth()->id(),
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        return back()->with('success', 'Your review has been submitted!');
    }

    public function enroll($id)
    {
        $course = Course::findOrFail($id);

        CourseEnrollment::firstOrCreate([
            'course_id' => $course->id,
            'user_id' => auth()->id(),
        ]);

        return back()->with('success', 'You have successfully enrolled in this course!');
    }
}
