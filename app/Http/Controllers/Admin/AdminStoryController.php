<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Story;
use App\Models\Category;
use App\Models\Talent;
use Illuminate\Support\Str;

class AdminStoryController extends Controller
{
    public function index()
    {
        return view('admin-pages.stories.index', [
            'stories' => Story::all(),
        ]);
    }

    public function show($id)
    {
        return view('admin-pages.stories.show', [
            'story' => Story::with(['talent', 'category'])->findOrFail($id),
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        $talents = Talent::all();

        return view('admin-pages.stories.edit', [
            'categories' => $categories,
            'talents' => $talents,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'media' => 'nullable|url',
            'tags' => 'nullable|string',
            'status' => 'in:pending,approved,rejected',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $path = 'image/thumbnails/';
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path($path), $imageName); 
        }
        
        $validated['thumbnail'] = isset($imageName) ? $path . $imageName : null;
        $story = Story::create($validated);
        return redirect()->route('admin.stories.index');
    }

    public function edit($id)
    {
        $story = Story::with(['category', 'talent'])->findOrFail($id);
        $talents = Talent::all();
        $categories = Category::all();

        return view('admin-pages.stories.edit',[
            'story' => $story,
            'talents' => $talents,
            'categories' => $categories,
        ]);
    }
    // Update a story
    public function update(Request $request, $id)
    {
        $story = Story::findOrFail($id);

        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'media' => 'nullable| url',
            'tags' => 'nullable|string',
            'status' => 'in:pending,approved,rejected',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $path = 'image/thumbnails/';
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path($path), $imageName);
            $validated['thumbnail'] = $path . $imageName;
        }
        else {
            $validated['thumbnail'] = $story->thumbnail; // Keep the old thumbnail if not updated
        }
        // Update the story with validated data
        $story->update($validated);
        return redirect()->route('admin.stories.index');
    }

    // Delete a story
    public function destroy($id)
    {
        $story = Story::findOrFail($id);
        $story->delete();

        return redirect()->route('admin.stories.index');
    }
}
