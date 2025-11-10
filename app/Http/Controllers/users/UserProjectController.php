<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('status', 'approved')->latest()->paginate(10);
        $categories = \App\Models\Category::all();
        return view('user-page.projects.index', compact('projects', 'categories'));
    }
    public function show($id)
    {
        $project = Project::with('user')->findOrFail($id);
        $recent = Project::where('id', '!=', $id)->latest()->take(5)->get();

        return view('user-page.projects.show', compact('project', 'recent'));
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,zip|max:2048',
        ]);

        $project = Project::findOrFail($id);

        $path = $request->file('attachment')
            ? $request->file('attachment')->store('applications', 'public')
            : null;

        ProjectApplication::create([
            'project_id' => $project->id,
            'user_id' => Auth::id(),
            'message' => $request->message,
            'attachment' => $path,
            'portfolio_url' => $request->portfolio_url,
            'status' => 'pending',
        ]);

        return redirect()->route('user.projects.show', $project->id)
            ->with('success', 'Your application has been sent successfully!');
    }
}
