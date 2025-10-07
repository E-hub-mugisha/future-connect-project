<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseFeedback;
use App\Models\CourseLesson;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminCoursesController extends Controller
{
    public function index()
    {
        $courses = Course::with(['category', 'talent'])->latest()->get();
        return view('admin-pages.courses.index', compact('courses'));
    }

    public function create()
    {
        $categories = Category::all();
        $talents = Talent::all();
        return view('admin-pages.courses.create', compact('categories', 'talents'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_free' => 'boolean',
            'price' => 'nullable|numeric|min:0',
            'level' => 'nullable|string|max:50',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'video' => 'nullable|mimes:mp4,mov,avi,wmv|max:51200',
            'status' => 'required|in:draft,published',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        if ($request->hasFile('video')) {
            $validated['video'] = $request->file('video')->store('videos', 'public');
        }

        Course::create($validated);
        return redirect()->route('admin.courses.index')->with('success', 'Course created successfully.');
    }

    public function edit($id)
    {
        $course = Course::findOrFail($id);
        $categories = Category::all();
        $talents = Talent::all();
        return view('admin-pages.courses.create', compact('course', 'categories', 'talents'));
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_free' => 'boolean',
            'price' => 'nullable|numeric|min:0',
            'level' => 'nullable|string|max:50',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'video' => 'nullable|mimes:mp4,mov,avi,wmv|max:51200',
            'status' => 'required|in:draft,published',
        ]);

        $course = Course::findOrFail($id);

        if ($request->hasFile('thumbnail')) {
            if ($course->thumbnail) Storage::disk('public')->delete($course->thumbnail);
            $validated['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        if ($request->hasFile('video')) {
            if ($course->video) Storage::disk('public')->delete($course->video);
            $validated['video'] = $request->file('video')->store('videos', 'public');
        }

        $course->update($validated);
        return redirect()->route('admin.courses.index')->with('success', 'Course updated successfully.');
    }

    public function show($slug)
    {
        $course = Course::where('slug', $slug)->with(['category', 'talent'])->firstOrFail();
        return view('admin-pages.courses.show', compact('course'));
    }

    public function destroy(Course $course)
    {
        if ($course->thumbnail) Storage::disk('public')->delete($course->thumbnail);
        if ($course->video) Storage::disk('public')->delete($course->video);
        $course->delete();

        return redirect()->route('admin.courses.index')->with('success', 'Course deleted successfully.');
    }

    public function storeFeedback(Request $request)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'course_id' => 'required|exists:courses,id',
            'comment' => 'required|string',
        ]);

        CourseFeedback::create([
            'user_id' => auth()->id(),
            'course_id' => $request->course_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        return redirect()->back()->with('success', 'Feedback added successfully.');
    }

    public function storeLesson(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'order' => 'nullable|integer',
            'video_url' => 'required|mimes:mp4,mov,avi,wmv|max:51200', // 50MB max
        ]);

        // Upload video
        $videoPath = $request->file('video_url')->store('course_videos', 'public');

        // Create lesson
        $lesson = CourseLesson::create([
            'course_id' => $request->course_id,
            'title' => $request->title,
            'content' => $request->content,
            'video_url' => $videoPath,
            'order' => $request->order,
        ]);

        return redirect()->back()->with('success', 'Lesson added successfully.');
    }
}