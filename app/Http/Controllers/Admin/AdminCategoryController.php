<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    // GET /api/categories
    public function index()
    {
        $categories = Category::all();
        $totalTalents = \App\Models\Talent::count();
        $totalStories = \App\Models\Story::count();
        $totalSkills = \App\Models\Skill::count();
        return Inertia::render('AdminPage/Categories/Index', compact('categories', 'totalTalents', 'totalStories', 'totalSkills'));
    }

    // POST /api/categories
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:categories,name',
            'description' => 'required|string',
            'featured' => 'boolean',
            'image' => 'nullable|string',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        $category = Category::create($validated);

        return redirect()->back()->with('success', 'category created successfully.');
    }

    // GET /api/categories/{id}
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    // PUT /api/categories/{id}
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|unique:categories,name,' . $category->id,
            'description' => 'sometimes|string',
            'featured' => 'boolean',
            'image' => 'nullable|string',
        ]);

        if (isset($validated['name'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $category->update($validated);

        return redirect()->back()->with('success', 'category updated successfully.');
    }

    // DELETE /api/categories/{id}
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->back()->with('success', 'category deleted successfully.');
    }

}
