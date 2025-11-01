<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\JobSection;
use App\Models\JobSectionApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserJobController extends Controller
{
    public function index(Request $request)
    {
        $query = JobSection::with('company');

        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                ->orWhere('skills', 'like', '%' . $request->search . '%');
        }

        $jobs = $query->latest()->paginate(10);
        return view('user-page.jobs.index', compact('jobs'));
    }

    public function show($id)
    {
        $job = JobSection::findOrFail($id);
        $recent = JobSection::latest()->take(5)->get();
        return view('user-page.jobs.show', compact('job','recent'));
    }

    public function apply(Request $request, JobSection $job)
    {
        $request->validate([
            'cover_letter' => 'nullable|string',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048'
        ]);

        $resumePath = $request->hasFile('resume') ? $request->file('resume')->store('resumes', 'public') : null;

        JobSectionApplication::create([
            'job_section_id' => $job->id,
            'user_id' => Auth::id(),
            'cover_letter' => $request->cover_letter,
            'resume' => $resumePath
        ]);

        return redirect()->route('user.jobs.show', $job->id)->with('success', 'Application submitted successfully.');
    }
}
