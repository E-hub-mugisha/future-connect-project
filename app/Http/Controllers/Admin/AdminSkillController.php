<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skill;
use Illuminate\Support\Str;

class AdminSkillController extends Controller
{
    public function index()
    {
        $categories = \App\Models\Category::all();
        $talents = \App\Models\Talent::all();
        $skills = Skill::with(['talent', 'category'])->latest()->paginate(10);

        return view('admin-pages.skills.index', compact('skills', 'categories', 'talents'));
    }

    public function create()
    {
        $categories = \App\Models\Category::all();
        $talents = \App\Models\Talent::all();

        return view('admin-pages.skills.create', compact('categories', 'talents'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:skills',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'talent_id' => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'nullable|string',
            'status' => 'required|in:draft,published,archived',
            'level' => 'required|in:Beginner,Intermediate,Advanced,Expert',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            // Build safe, unique file name
            $fileName = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Destination path (inside public/)
            $destinationPath = public_path('images/skills');

            // Ensure directory exists
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            // Move the uploaded file
            $image->move($destinationPath, $fileName);

            // Save only filename or relative path
            $validatedData['image'] = $fileName;
        }

        $slug = \Illuminate\Support\Str::slug($validatedData['name']);
        $count = Skill::where('slug', 'LIKE', "{$slug}%")->count();
        $validatedData['slug'] = $count ? "{$slug}-{$count}" : $slug;

        Skill::create($validatedData);

        return redirect()->route('admin.skills.index')->with('success', 'Skill created successfully');
    }

    public function show(string $id)
    {
        $skill = Skill::with(['talent', 'category'])->findOrFail($id);

        return view('admin-pages.skills.show', compact('skill'));
    }

    public function edit($id)
    {
        $skill = Skill::with(['talent', 'category'])->findOrFail($id);
        $categories = \App\Models\Category::all();
        $talents = \App\Models\Talent::all();

        return view('admin-pages.skills.edit', compact('skill', 'categories', 'talents'));
    }

    public function update(Request $request, string $id)
    {
        $skill = Skill::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:skills,name,' . $skill->id,
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'talent_id' => 'required|exists:talents,id',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'nullable|string',
            'status' => 'required|in:draft,published,archived',
            'level' => 'required|in:Beginner,Intermediate,Advanced,Expert',
        ]);

        // Handle image replacement
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('images/skills');

            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0777, true);
            }

            // Delete old image if exists
            if ($skill->image && file_exists(public_path('images/skills/' . $skill->image))) {
                unlink(public_path('images/skills/' . $skill->image));
            }

            // Move new file
            $image->move($destinationPath, $filename);
            $skill->image = $filename;
        }

        $slug = \Illuminate\Support\Str::slug($validatedData['name']);
        $count = Skill::where('slug', 'LIKE', "{$slug}%")->where('id', '!=', $skill->id)->count();
        $validatedData['slug'] = $count ? "{$slug}-{$count}" : $slug;

        $skill->update($validatedData);

        return redirect()->route('admin.skills.index')->with('success', 'Skill updated successfully');
    }

    public function destroy(string $id)
    {
        $skill = Skill::findOrFail($id);
        // Delete associated image if exists
        if ($skill->image && file_exists(public_path('images/skills/' . $skill->image))) {
            unlink(public_path('images/skills/' . $skill->image));
        }
        $skill->delete();

        return redirect()->route('admin.skills.index')->with('success', 'Skill deleted successfully');
    }
}
