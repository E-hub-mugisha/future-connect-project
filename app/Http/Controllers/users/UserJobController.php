<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\JobCategory;
use App\Models\JobSection;
use App\Models\JobSectionApplication;
use App\Models\Project;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserJobController extends Controller
{
    public function index(Request $request)
    {
        $categories = JobCategory::withCount('jobSections')->get();
        $locations = JobSection::select('location')->distinct()->pluck('location');
        $ratings = [5, 4, 3, 2, 1];
        $budgets = [
            ['label' => 'Value', 'min' => 0, 'max' => 4500],
            ['label' => 'Mid-range', 'min' => 4501, 'max' => 10000],
            ['label' => 'High-end', 'min' => 10001, 'max' => 20000],
        ];
        $subscriptionPlans = ['All', 'Basic', 'Premium'];
        $deliveryTimes = ['24H', '3 days', '7 days', 'Anytime'];

        $jobs = JobSection::query();

        if ($request->category)
            $jobs->where('job_category_id', $request->category);

        if ($request->location)
            $jobs->where('location', $request->location);

        if ($request->rating)
            $jobs->where('rating', '>=', $request->rating);

        if ($request->budget_min && $request->budget_max)
            $jobs->whereBetween('budget', [$request->budget_min, $request->budget_max]);

        if ($request->subscription)
            $jobs->where('subscription', $request->subscription);

        if ($request->delivery)
            $jobs->where('delivery_time', $request->delivery);

        $jobs = $jobs->paginate(10);

        $jobs = JobSection::latest()->paginate(10);
        $categories = JobCategory::withCount('jobSections')->get();
        $companies = Seller::get();
        $locations = JobSection::select('location')->distinct()->get();

        return view('user-page.jobs.index', compact(
            'categories',
            'locations',
            'ratings',
            'budgets',
            'subscriptionPlans',
            'deliveryTimes',
            'jobs',
            'companies',


        ));
    }



    public function show($id)
    {
        $job = JobSection::findOrFail($id);
        $recent = JobSection::latest()->take(5)->get();
        return view('user-page.jobs.show', compact('job', 'recent'));
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
