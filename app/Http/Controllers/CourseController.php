<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Category;
use App\Models\CourseEnrollment;
use App\Models\CourseFeedback;
use App\Models\CoursePayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with(['category', 'talent', 'feedback'])->paginate(8);
        $categories = Category::with('courses')->get();
        return Inertia::render('UserPage/LearningCenter', compact('courses', 'categories'));
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

    public function handleCallback(Request $request)
    {
        $tx_ref = $request->get('tx_ref'); // e.g., "5-12-1721123456789"
        $status = $request->get('status');
        $course_id = $request->get('course_id');

        $email = $request->get('email', 'kabosierik@gmail.com'); // default if not passed
        $course = Course::findOrFail($course_id);

        // Check if the transaction already exists
        if (CoursePayment::where('tx_ref', $tx_ref)->exists()) {
            return redirect()->back()->with('info', 'Payment already processed');
        }

        // Create a payment record in DB
        $payment = CoursePayment::create([
            'user_id' => auth()->id(),
            'course_id' => $course_id,
            'tx_ref' => $tx_ref,
            'amount' => $course->price,
            'currency' => 'RWF',
            'status' => $status,
        ]);

        if ($status === 'successful') {

            // Payment successful
            $payment->update(['status' => 'completed']);

            // Enroll user
            CourseEnrollment::firstOrCreate([
                'user_id' => $payment->user_id,
                'course_id' => $payment->course_id,
            ]);
            
            return redirect()->back()->with('success', 'Payment already processed');
        }

        return redirect()->route('user.home')->with('error', 'Payment failed or cancelled.');
    }


    public function paymentSuccess(Request $request, $courseId)
    {
        $course = Course::findOrFail($courseId);

        // Verify payment via gateway API here
        $paymentVerified = true; // Example, implement verification

        if ($paymentVerified) {
            // Enroll the user after successful payment
            Auth::user()->userCourses()->syncWithoutDetaching($course->id);

            return redirect()->route('user.courses.show', $course->id)
                ->with('success', 'Payment successful! You are now enrolled.');
        }

        return redirect()->route('user.courses.show', $course->id)
            ->with('error', 'Payment failed. Please try again.');
    }
}
