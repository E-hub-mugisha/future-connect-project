<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseFeedback;
use App\Models\CourseLesson;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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
            'is_free' => 'sometimes|boolean',
            'price' => 'nullable|numeric|min:0',
            'level' => 'nullable|string|max:50',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'video' => 'nullable|url|max:255',
            'status' => 'required|in:draft,published',
        ]);

        $course = new Course();

        $course->title = $validated['title'];
        $course->slug = Str::slug($validated['title']) . '-' . uniqid();
        $course->description = $validated['description'] ?? '';
        $course->category_id = $validated['category_id'];
        $course->talent_id = $validated['talent_id'];
        $course->status = $validated['status'];
        $course->level = $validated['level'] ?? 'Beginner';
        $course->video = $validated['video'] ?? null;

        $course->is_free = $request->boolean('is_free');
        $course->price = $course->is_free ? 0 : ($validated['price'] ?? 0);

        // Handle manual file upload with move()
        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');

            // Build safe, unique file name
            $fileName = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Destination path (inside public/)
            $destinationPath = public_path('images/thumbnails');

            // Ensure directory exists
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            // Move the uploaded file
            $image->move($destinationPath, $fileName);

            // Save only filename or relative path
            $course->thumbnail = $fileName;
        }

        $course->save();

        return redirect()
            ->route('admin.courses.index')
            ->with('success', 'Course created successfully.');
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
        $course = Course::findOrFail($id);

        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_free' => 'sometimes|boolean',
            'price' => 'nullable|numeric|min:0',
            'level' => 'nullable|string|max:50',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'video' => 'nullable|url|max:255',
            'status' => 'required|in:draft,published',
        ]);

        // Update basic fields
        $course->title = $validated['title'];
        $course->slug = Str::slug($validated['title']) . '-' . uniqid();
        $course->description = $validated['description'] ?? '';
        $course->category_id = $validated['category_id'];
        $course->talent_id = $validated['talent_id'];
        $course->status = $validated['status'];
        $course->level = $validated['level'] ?? 'Beginner';
        $course->video = $validated['video'] ?? null;
        $course->is_free = $request->boolean('is_free');
        $course->price = $course->is_free ? 0 : ($validated['price'] ?? 0);

        // Handle thumbnail replacement
        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $filename = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('images/thumbnails');

            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            // Delete old image if exists
            if ($course->thumbnail && file_exists(public_path('images/thumbnails/' . $course->thumbnail))) {
                unlink(public_path('images/thumbnails/' . $course->thumbnail));
            }

            // Move new file
            $image->move($destinationPath, $filename);
            $course->thumbnail = $filename;
        }

        $course->save();

        return redirect()->route('admin.courses.index')
            ->with('success', 'Course updated successfully.');
    }

    public function show($slug)
    {
        $course = Course::where('slug', $slug)->with(['category', 'talent'])->firstOrFail();
        return view('admin-pages.courses.show', compact('course'));
    }

    public function destroy($id)
    {
        $course = Course::findOrFail($id);

        // Delete thumbnail file if it exists
        if ($course->thumbnail && file_exists(public_path('images/thumbnails/' . $course->thumbnail))) {
            unlink(public_path('images/thumbnails/' . $course->thumbnail));
        }

        // Delete the course record
        $course->delete();

        return redirect()->route('admin.courses.index')
            ->with('success', 'Course deleted successfully.');
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
            'video_url' => 'required|url|max:522', // 50MB max
        ]);
        // Create lesson
        $lesson = CourseLesson::create([
            'course_id' => $request->course_id,
            'title' => $request->title,
            'content' => $request->content,
            'video_url' => $request->video_url,
            'order' => $request->order,
        ]);

        return redirect()->back()->with('success', 'Lesson added successfully.');
    }

    public function editLesson($id)
    {
        $lesson = CourseLesson::findOrFail($id);
        return view('admin-pages.courses.edit-lesson', compact('lesson'));
    }

    public function updateLesson(Request $request, $id)
    {
        $lesson = CourseLesson::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'order' => 'nullable|integer',
            'video_url' => 'required|url|max:522', // 50MB max
        ]);

        $lesson->update([
            'title' => $request->title,
            'content' => $request->content,
            'video_url' => $request->video_url,
            'order' => $request->order,
        ]);

        return redirect()->back()->with('success', 'Lesson updated successfully.');
    }

    public function destroyLesson($id)
    {
        $lesson = CourseLesson::findOrFail($id);
        $lesson->delete();

        return redirect()->back()->with('success', 'Lesson deleted successfully.');
    }
}
