<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use App\Models\CourseLesson;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class TalentCourseController extends Controller
{
    /**
     * Resolve (or provision) the Talent profile for the current user.
     * Centralized so index()/store() don't duplicate the same 3-query lookup chain.
     */
    private function resolveTalentForUser($user): Talent
    {
        $talent = Talent::where('user_id', $user->id)->first();

        if (!$talent) {
            $talent = Talent::where('email', $user->email)->whereNull('user_id')->first();

            if ($talent) {
                $talent->update(['user_id' => $user->id]);
            }
        }

        if (!$talent) {
            $talent = Talent::create([
                'user_id' => $user->id,
                'name'    => $user->name ?? 'Unnamed Talent',
                'email'   => $user->email,
                'status'  => 'active',
            ]);
        }

        return $talent;
    }

    /**
     * Ensure the given course belongs to the current user's talent profile.
     * Aborts with 403 otherwise. Prevents IDOR (editing/deleting others' courses).
     */
    private function authorizeCourseOwner(Course $course): void
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent || $course->talent_id !== $talent->id) {
            abort(Response::HTTP_FORBIDDEN, 'You do not own this course.');
        }
    }

    public function index()
    {
        $talent = $this->resolveTalentForUser(Auth::user());

        $courses = Course::where('talent_id', $talent->id)
            ->with(['category:id,name', 'talent:id,name,email'])
            ->withCount(['lessons', 'enrollments'])
            ->withAvg('feedback', 'rating')
            ->latest()
            ->get();

        return Inertia::render('Talent/Courses/Index', compact('courses'));
    }

    public function show($id)
    {
        $course = Course::with([
            'category',
            'talent',
            'feedback' => fn($q) => $q->latest(),
            'lessons' => fn($q) => $q->orderBy('order'),
        ])
            ->withCount('enrollments')
            ->findOrFail($id);

        $this->authorizeCourseOwner($course);

        return Inertia::render('Talent/Courses/Show', compact('course'));
    }

    public function create()
    {
        $categories = Category::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Talent/Courses/Create', compact('categories'));
    }

    public function edit($id)
    {
        $course = Course::findOrFail($id);
        $this->authorizeCourseOwner($course);

        $categories = Category::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Talent/Courses/Create', compact('course', 'categories'));
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        // if (!$user->activeSubscription) {
        //     return redirect()->back()
        //         ->with('warning', 'You must subscribe before posting to course.');
        // }

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_free'     => 'sometimes|boolean',
            'price'       => 'nullable|numeric|min:0',
            'level'       => 'nullable|string|max:50',
            'thumbnail'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'video'       => 'nullable|url|max:255',
            'status'      => 'required|in:draft,published',
        ]);

        $talent = $this->resolveTalentForUser($user);
        $isFree = $request->boolean('is_free');

        $course = DB::transaction(function () use ($validated, $talent, $isFree, $request) {
            $course = new Course([
                'title'       => $validated['title'],
                'slug'        => Str::slug($validated['title']) . '-' . uniqid(),
                'description' => $validated['description'] ?? '',
                'category_id' => $validated['category_id'],
                'talent_id'   => $talent->id,
                'status'      => $validated['status'],
                'level'       => $validated['level'] ?? 'Beginner',
                'video'       => $validated['video'] ?? null,
                'is_free'     => $isFree,
                'price'       => $isFree ? 0 : ($validated['price'] ?? 0),
            ]);

            if ($request->hasFile('thumbnail')) {
                $course->thumbnail = $this->storeThumbnail($request->file('thumbnail'));
            }

            $course->save();

            return $course;
        });

        return redirect()
            ->route('talent.courses.index')
            ->with('success', 'Course created successfully.');
    }

    public function update(Request $request, $id)
    {
        $course = Course::findOrFail($id);
        $this->authorizeCourseOwner($course);

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_free'     => 'sometimes|boolean',
            'price'       => 'nullable|numeric|min:0',
            'level'       => 'nullable|string|max:50',
            'thumbnail'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'video'       => 'nullable|url|max:255',
            'status'      => 'required|in:draft,published',
        ]);

        $isFree = $request->boolean('is_free');

        DB::transaction(function () use ($course, $validated, $isFree, $request) {
            // Only regenerate the slug if the title actually changed —
            // otherwise every edit silently breaks the course's public URL / SEO.
            if ($course->title !== $validated['title']) {
                $course->slug = Str::slug($validated['title']) . '-' . uniqid();
            }

            $course->title       = $validated['title'];
            $course->description = $validated['description'] ?? '';
            $course->category_id = $validated['category_id'];
            $course->status      = $validated['status'];
            $course->level       = $validated['level'] ?? 'Beginner';
            $course->video       = $validated['video'] ?? null;
            $course->is_free     = $isFree;
            $course->price       = $isFree ? 0 : ($validated['price'] ?? 0);

            if ($request->hasFile('thumbnail')) {
                $this->deleteThumbnail($course->thumbnail);
                $course->thumbnail = $this->storeThumbnail($request->file('thumbnail'));
            }

            $course->save();
        });

        return redirect()->route('talent.courses.index')
            ->with('success', 'Course updated successfully.');
    }

    public function destroy($id)
    {
        $course = Course::findOrFail($id);
        $this->authorizeCourseOwner($course);

        $this->deleteThumbnail($course->thumbnail);
        $course->delete();

        return redirect()->route('talent.courses.index')
            ->with('success', 'Course deleted successfully.');
    }

    /* ---------- thumbnail helpers (shared by store/update) ---------- */

    private function storeThumbnail($image): string
    {
        $destinationPath = public_path('images/thumbnails');

        if (!file_exists($destinationPath)) {
            mkdir($destinationPath, 0755, true);
        }

        // Match the talent-profile pattern: time() + uniqid() for the filename,
        // full relative path stored in DB so the frontend never has to guess the folder.
        $filename = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();

        $image->move($destinationPath, $filename);

        return "images/thumbnails/{$filename}";
    }

    private function deleteThumbnail(?string $thumbnail): void
    {
        if ($thumbnail && file_exists(public_path($thumbnail))) {
            unlink(public_path($thumbnail));
        }
    }

    /* ---------- lessons ---------- */

    public function storeLesson(Request $request)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title'     => 'required|string|max:255',
            'content'   => 'nullable|string',
            'order'     => 'nullable|integer',
            'video_url' => 'required|url|max:522',
        ]);

        $course = Course::findOrFail($validated['course_id']);
        $this->authorizeCourseOwner($course);

        CourseLesson::create($validated);

        return redirect()->back()->with('success', 'Lesson added successfully.');
    }

    public function updateLesson(Request $request, $id)
    {
        $lesson = CourseLesson::findOrFail($id);
        $this->authorizeCourseOwner($lesson->course);

        $validated = $request->validate([
            'title'     => 'required|string|max:255',
            'content'   => 'nullable|string',
            'order'     => 'nullable|integer',
            'video_url' => 'required|url|max:522',
        ]);

        $lesson->update($validated);

        return redirect()->back()->with('success', 'Lesson updated successfully.');
    }

    public function destroyLesson($id)
    {
        $lesson = CourseLesson::findOrFail($id);
        $this->authorizeCourseOwner($lesson->course);

        $lesson->delete();

        return redirect()->back()->with('success', 'Lesson deleted successfully.');
    }
}
