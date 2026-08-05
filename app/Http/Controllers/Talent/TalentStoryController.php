<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Story;
use App\Models\Talent;
use App\Models\Category;

class TalentStoryController extends Controller
{
    /**
     * Entry point for "My Story". Redirects straight to the story if the
     * talent already has one, otherwise shows a "no story yet" screen
     * with a link to create one.
     */
    public function index()
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            return redirect()->route('talent.dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        $story = Story::where('talent_id', $talent->id)->latest()->first();

        if ($story) {
            return redirect()->route('talent.page.stories.show', $story->id);
        }

        return Inertia::render('Talent/Story/Index', [
            'talent' => $talent,
            'message' => "You haven't shared your story yet.",
        ]);
    }

    /**
     * Show the form to create a new story.
     */
    public function create()
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            return redirect()->route('talent.dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        // Prevent creating a second story — send them to edit instead
        $existing = Story::where('talent_id', $talent->id)->latest()->first();
        if ($existing) {
            return redirect()->route('talent.page.stories.edit', $existing->id);
        }

        return Inertia::render('Talent/Story/Create', [
            'talent' => $talent,
            'categories' => Category::orderBy('name')->get(['id', 'name']),
        ]);
    }

    /**
     * Store a newly created story.
     */
    public function store(Request $request)
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            return redirect()->route('talent.dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'tags' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', 'in:draft,published'],
            'thumbnail' => ['nullable', 'image', 'max:4096'],
            'media' => ['nullable', 'file', 'max:20480'],
        ]);

        $validated['talent_id'] = $talent->id;
        $validated['status'] = $validated['status'] ?? 'published';
        $validated['slug'] = $this->uniqueSlug($validated['title']);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $request->file('thumbnail')->store('stories/thumbnails', 'public');
        }

        if ($request->hasFile('media')) {
            $validated['media'] = $request->file('media')->store('stories/media', 'public');
        }

        $story = Story::create($validated);

        return redirect()->route('talent.page.stories.show', $story->id)
            ->with('success', 'Your story has been published.');
    }

    /**
     * Display a single story (ensuring it belongs to the logged-in talent
     * when the viewer is the owner; adjust here if stories are public).
     */
    public function show($id)
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        $story = Story::with('category')
            ->where('id', $id)
            ->when($talent, fn ($q) => $q->where('talent_id', $talent->id))
            ->firstOrFail();

        return Inertia::render('Talent/Story/Show', [
            'story' => $story,
            'isOwner' => $talent && $story->talent_id === $talent->id,
        ]);
    }

    /**
     * Show the form to edit an existing story.
     */
    public function edit($id)
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            return redirect()->route('talent.dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        $story = Story::where('id', $id)
            ->where('talent_id', $talent->id)
            ->firstOrFail();

        return Inertia::render('Talent/Story/Edit', [
            'story' => $story,
            'categories' => Category::orderBy('name')->get(['id', 'name']),
        ]);
    }

    /**
     * Update an existing story.
     */
    public function update(Request $request, $id)
    {
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            return redirect()->route('talent.dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        $story = Story::where('id', $id)
            ->where('talent_id', $talent->id)
            ->firstOrFail();

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'tags' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', 'in:draft,published'],
            'thumbnail' => ['nullable', 'image', 'max:4096'],
            'media' => ['nullable', 'file', 'max:20480'],
        ]);

        if ($validated['title'] !== $story->title) {
            $validated['slug'] = $this->uniqueSlug($validated['title'], $story->id);
        }

        if ($request->hasFile('thumbnail')) {
            if ($story->thumbnail) {
                Storage::disk('public')->delete($story->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('stories/thumbnails', 'public');
        }

        if ($request->hasFile('media')) {
            if ($story->media) {
                Storage::disk('public')->delete($story->media);
            }
            $validated['media'] = $request->file('media')->store('stories/media', 'public');
        }

        $story->update($validated);

        return redirect()->route('talent.page.stories.show', $story->id)
            ->with('success', 'Your story has been updated.');
    }

    /**
     * Generate a unique slug for a story, excluding the given story ID.
     */
    protected function uniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($title);
        $slug = $base;
        $i = 1;

        while (
            Story::where('slug', $slug)
                ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = "{$base}-" . $i++;
        }

        return $slug;
    }
}