<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\JobCategory;
use App\Models\JobSection;
use App\Models\JobSectionApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentJobController extends Controller
{
    // Show all jobs
    public function index()
    {
        $jobs = JobSection::latest()->paginate(10);
        return view('talent-pages.jobs.index', compact('jobs'));
    }

    // Show create form
    public function create()
    {
        $categories = JobCategory::all();
        return view('talent-pages.jobs.create', compact('categories'));
    }

    // Store new job
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'nullable|string|max:255',
            'type' => 'nullable|string|max:50',
            'experience_level' => 'nullable|string|max:50',
            'salary_range' => 'nullable|string|max:100',
            'skills' => 'nullable|string',
        ]);

        $validated['company_id'] = Auth::id();

        JobSection::create($validated);

        return redirect()->route('talent.jobs.index')->with('success', 'Job created successfully.');
    }

    // Show edit form
    public function edit($id)
    {
        $job = JobSection::findOrFail($id);
        return view('talent-pages.jobs.edit', compact('job'));
    }

    // Update job
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'nullable|string|max:255',
            'type' => 'nullable|string|max:50',
            'experience_level' => 'nullable|string|max:50',
            'salary_range' => 'nullable|string|max:100',
            'skills' => 'nullable|string',
        ]);

        $job = JobSection::findOrFail($id);
        $job->update($validated);

        return redirect()->route('talent.jobs.index')->with('success', 'Job updated successfully.');
    }

    // Delete job
    public function destroy($id)
    {
        $job = JobSection::findOrFail($id);
        $job->delete();

        return redirect()->route('talent.jobs.index')->with('success', 'Job deleted successfully.');
    }

    // Show job details
    public function show($id)
    {
        $job = JobSection::findOrFail($id);
        return view('talent-pages.jobs.show', compact('job'));
    }

    public function updateApplicationStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,accepted,rejected',
        ]);

        $application = JobSectionApplication::findOrFail($id);
        $application->status = $request->status;
        $application->save();

        return redirect()->back()->with('success', 'Application status updated successfully!');
    }

    // Show list of applications for a specific job
    public function applications($jobId)
    {
        $job = JobSection::findOrFail($jobId);

        // Fetch applications for this job
        $applications = JobSectionApplication::where('job_section_id', $job->id)->latest()->get();

        return view('talent-pages.jobs.applications', compact('job', 'applications'));
    }
}
