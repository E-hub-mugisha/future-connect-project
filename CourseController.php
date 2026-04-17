<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    /**
     * Display a listing of courses with filters.
     */
    public function index(Request $request)
    {
        $query = Course::with(['talent', 'category'])
            ->withCount('enrollments');

        // Filters
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('level')) {
            $query->where('level', $request->level);
        }

        if ($request->filled('is_free')) {
            $query->where('is_free', (bool) $request->is_free);
        }

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        $perPage = $request->get('per_page', 15);
        $courses = $query->latest()->paginate($perPage);

        // Stats for the stat cards
        $stats = [
            'total'       => Course::count(),
            'published'   => Course::where('status', 'published')->count(),
            'draft'       => Course::where('status', 'draft')->count(),
            'enrollments' => \App\Models\CourseEnrollment::count(),
        ];

        $categories = Category::orderBy('name')->get();

        return view('courses.index', compact('courses', 'stats', 'categories'));
    }

    /**
     * Show the form for creating a new course.
     */
    public function create()
    {
        $talents    = Talent::orderBy('name')->get();
        $categories = Category::orderBy('name')->get();

        return view('courses.create', compact('talents', 'categories'));
    }

    /**
     * Store a newly created course.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'talent_id'   => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'is_free'     => 'required|boolean',
            'price'       => 'nullable|numeric|min:0',
            'level'       => 'nullable|in:beginner,intermediate,advanced',
            'status'      => 'nullable|in:draft,published,archived',
            'video'       => 'nullable|url|max:500',
            'thumbnail'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')
                ->store('courses/thumbnails', 'public');
        }

        // Default status
        $validated['status'] = $validated['status'] ?? 'draft';

        // If free, clear price
        if ($validated['is_free']) {
            $validated['price'] = null;
        }

        Course::create($validated);

        return redirect()
            ->route('courses.index')
            ->with('success', 'Course created successfully.');
    }

    /**
     * Show the course detail page.
     */
    public function show(Course $course)
    {
        $course->load([
            'talent',
            'category',
            'lessons',
            'enrollments.user',
            'feedback.user',
        ]);

        return view('courses.show', compact('course'));
    }

    /**
     * Show the form for editing the course.
     */
    public function edit(Course $course)
    {
        $talents    = Talent::orderBy('name')->get();
        $categories = Category::orderBy('name')->get();

        $course->load(['lessons', 'enrollments']);

        return view('courses.edit', compact('course', 'talents', 'categories'));
    }

    /**
     * Update the specified course.
     */
    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'talent_id'   => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'is_free'     => 'required|boolean',
            'price'       => 'nullable|numeric|min:0',
            'level'       => 'nullable|in:beginner,intermediate,advanced',
            'status'      => 'nullable|in:draft,published,archived',
            'video'       => 'nullable|url|max:500',
            'thumbnail'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail
            if ($course->thumbnail) {
                Storage::disk('public')->delete($course->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')
                ->store('courses/thumbnails', 'public');
        }

        if ($validated['is_free']) {
            $validated['price'] = null;
        }

        $course->update($validated);

        return redirect()
            ->route('courses.show', $course)
            ->with('success', 'Course updated successfully.');
    }

    /**
     * Remove the specified course.
     */
    public function destroy(Course $course)
    {
        if ($course->thumbnail) {
            Storage::disk('public')->delete($course->thumbnail);
        }

        $course->delete();

        return redirect()
            ->route('courses.index')
            ->with('success', 'Course deleted successfully.');
    }
}
