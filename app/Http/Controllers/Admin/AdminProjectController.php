<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminProjectController extends Controller
{
    public function index()
    {
        $projects = Project::latest()->paginate(10);
        return view('admin-pages.projects.index', compact('projects'));
    }

    // create project
    public function create()
    {
        return view('admin-pages.projects.create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'required|string|max:100',
            'budget' => 'nullable|numeric',
            'location' => 'nullable|string|max:255',
            'status' => 'required|string|max:50',
            'verified' => 'boolean',
        ]);
        $validated['user_id'] = Auth::user()->id;
        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully!');
    }

    // edit project
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return view('admin-pages.projects.edit', compact('project'));
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'required|string|max:100',
            'budget' => 'nullable|numeric',
            'location' => 'nullable|string|max:255',
            'status' => 'required|string|max:50',
            'verified' => 'boolean',
        ]);

        $project = Project::findOrFail($id);
        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully!');
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);
        return view('admin-pages.projects.show', compact('project'));
    }

    public function verify($id)
    {
        $project = Project::findOrFail($id);
        $project->verified = true;
        $project->save();

        return redirect()->back()->with('success', 'Project verified successfully!');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect()->back()->with('success', 'Project deleted successfully!');
    }
}
