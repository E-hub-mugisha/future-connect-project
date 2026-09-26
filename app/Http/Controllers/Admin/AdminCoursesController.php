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
use Inertia\Inertia;

class AdminCoursesController extends Controller
{
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

        $courses = $query
            ->latest()
            ->paginate($perPage);

        $stats = [
            'total'       => Course::count(),
            'published'   => Course::where('status', 'published')->count(),
            'draft'       => Course::where('status', 'draft')->count(),
            'enrollments' => \App\Models\CourseEnrollment::count(),
        ];

        $categories = Category::orderBy('name')->get();

        return Inertia::render(
            'AdminPage/Courses/Index',
            compact('courses', 'stats', 'categories')
        );
    }

    public function create()
    {
        $categories = Category::all();
        $talents = Talent::all();

        return Inertia::render(
            'AdminPage/Courses/Create',
            compact('categories', 'talents')
        );
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

            // Preview duration is stored in seconds
            // Example: 5 minutes = 300 seconds
            'preview_duration' => 'nullable|integer|min:0|max:7200',

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

        /*
        |--------------------------------------------------------------------------
        | Pricing
        |--------------------------------------------------------------------------
        */

        $course->is_free = $request->boolean('is_free');

        if ($course->is_free) {

            // Free courses don't need a payment preview restriction
            $course->price = 0;

            $course->preview_duration = 0;

        } else {

            $course->price = $validated['price'] ?? 0;

            // Default preview = 5 minutes
            $course->preview_duration =
                $validated['preview_duration'] ?? 300;
        }

        /*
        |--------------------------------------------------------------------------
        | Thumbnail Upload
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('thumbnail')) {

            $image = $request->file('thumbnail');

            $fileName =
                time() . '_' .
                Str::slug(
                    pathinfo(
                        $image->getClientOriginalName(),
                        PATHINFO_FILENAME
                    )
                ) .
                '.' .
                $image->getClientOriginalExtension();

            $destinationPath =
                public_path('images/thumbnails');

            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            $image->move(
                $destinationPath,
                $fileName
            );

            $course->thumbnail = $fileName;
        }

        $course->save();

        return redirect()
            ->route('admin.courses.index')
            ->with(
                'success',
                'Course created successfully.'
            );
    }

    public function edit($id)
    {
        $course = Course::findOrFail($id);

        $categories = Category::all();

        $talents = Talent::all();

        return Inertia::render(
            'AdminPage/Courses/Edit',
            compact(
                'course',
                'categories',
                'talents'
            )
        );
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

            // Preview duration stored in seconds
            'preview_duration' => 'nullable|integer|min:0|max:7200',

            'level' => 'nullable|string|max:50',

            'thumbnail' =>
                'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',

            'video' => 'nullable|url|max:255',

            'status' => 'required|in:draft,published',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Basic Information
        |--------------------------------------------------------------------------
        */

        $course->title = $validated['title'];

        $course->slug =
            Str::slug($validated['title']) . '-' . uniqid();

        $course->description =
            $validated['description'] ?? '';

        $course->category_id =
            $validated['category_id'];

        $course->talent_id =
            $validated['talent_id'];

        $course->status =
            $validated['status'];

        $course->level =
            $validated['level'] ?? 'Beginner';

        $course->video =
            $validated['video'] ?? null;

        /*
        |--------------------------------------------------------------------------
        | Pricing + Preview
        |--------------------------------------------------------------------------
        */

        $course->is_free =
            $request->boolean('is_free');

        if ($course->is_free) {

            $course->price = 0;

            // No preview restriction for free courses
            $course->preview_duration = 0;

        } else {

            $course->price =
                $validated['price'] ?? 0;

            // Keep existing preview duration if no value is supplied
            $course->preview_duration =
                $validated['preview_duration']
                ?? $course->preview_duration
                ?? 300;
        }

        /*
        |--------------------------------------------------------------------------
        | Thumbnail Replacement
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('thumbnail')) {

            $image = $request->file('thumbnail');

            $filename =
                time() . '_' .
                Str::slug(
                    pathinfo(
                        $image->getClientOriginalName(),
                        PATHINFO_FILENAME
                    )
                ) .
                '.' .
                $image->getClientOriginalExtension();

            $destinationPath =
                public_path('images/thumbnails');

            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            // Delete old thumbnail
            if (
                $course->thumbnail &&
                file_exists(
                    public_path(
                        'images/thumbnails/' .
                        $course->thumbnail
                    )
                )
            ) {
                unlink(
                    public_path(
                        'images/thumbnails/' .
                        $course->thumbnail
                    )
                );
            }

            $image->move(
                $destinationPath,
                $filename
            );

            $course->thumbnail = $filename;
        }

        $course->save();

        return redirect()
            ->route('admin.courses.index')
            ->with(
                'success',
                'Course updated successfully.'
            );
    }

    public function show($slug)
    {
        $course = Course::where(
            'slug',
            $slug
        )
            ->with([
                'category',
                'talent',
                'feedback',
                'enrollments',
                'lessons',
            ])
            ->firstOrFail();

        return Inertia::render(
            'AdminPage/Courses/Show',
            compact('course')
        );
    }

    public function destroy($id)
    {
        $course = Course::findOrFail($id);

        // Delete thumbnail
        if (
            $course->thumbnail &&
            file_exists(
                public_path(
                    'images/thumbnails/' .
                    $course->thumbnail
                )
            )
        ) {
            unlink(
                public_path(
                    'images/thumbnails/' .
                    $course->thumbnail
                )
            );
        }

        $course->delete();

        return redirect()
            ->route('admin.courses.index')
            ->with(
                'success',
                'Course deleted successfully.'
            );
    }

    public function storeFeedback(Request $request)
    {
        $request->validate([
            'rating' =>
                'required|integer|min:1|max:5',

            'course_id' =>
                'required|exists:courses,id',

            'comment' =>
                'required|string',
        ]);

        CourseFeedback::create([
            'user_id' => auth()->id(),

            'course_id' =>
                $request->course_id,

            'rating' =>
                $request->rating,

            'comment' =>
                $request->comment,
        ]);

        return redirect()
            ->back()
            ->with(
                'success',
                'Feedback added successfully.'
            );
    }

    public function storeLesson(Request $request)
    {
        $request->validate([
            'course_id' =>
                'required|exists:courses,id',

            'title' =>
                'required|string|max:255',

            'content' =>
                'nullable|string',

            'order' =>
                'nullable|integer',

            'video_url' =>
                'required|url|max:522',
        ]);

        CourseLesson::create([
            'course_id' =>
                $request->course_id,

            'title' =>
                $request->title,

            'content' =>
                $request->content,

            'video_url' =>
                $request->video_url,

            'order' =>
                $request->order,
        ]);

        return redirect()
            ->back()
            ->with(
                'success',
                'Lesson added successfully.'
            );
    }

    public function editLesson($id)
    {
        $lesson =
            CourseLesson::findOrFail($id);

        return Inertia::render(
            'AdminPage/Courses/EditLesson',
            compact('lesson')
        );
    }

    public function updateLesson(
        Request $request,
        $id
    ) {
        $lesson =
            CourseLesson::findOrFail($id);

        $request->validate([
            'title' =>
                'required|string|max:255',

            'content' =>
                'nullable|string',

            'order' =>
                'nullable|integer',

            'video_url' =>
                'required|url|max:522',
        ]);

        $lesson->update([
            'title' =>
                $request->title,

            'content' =>
                $request->content,

            'video_url' =>
                $request->video_url,

            'order' =>
                $request->order,
        ]);

        return redirect()
            ->back()
            ->with(
                'success',
                'Lesson updated successfully.'
            );
    }

    public function destroyLesson($id)
    {
        $lesson =
            CourseLesson::findOrFail($id);

        $lesson->delete();

        return redirect()
            ->back()
            ->with(
                'success',
                'Lesson deleted successfully.'
            );
    }
}
