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
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserJobController extends Controller
{
    protected array $salaryBands = [
        'Under 300K RWF',
        '300K - 800K RWF',
        '800K - 1.5M RWF',
        '1.5M+ RWF',
    ];

    public function index(Request $request)
    {
        // Fetch only categories that contain jobs
        $categories = JobCategory::withCount('jobSections')
            ->having('job_sections_count', '>', 0)
            ->get();

        // Dynamic filter options
        $locations = JobSection::select('location')->distinct()->pluck('location'); // collection of strings

        $ratings = [5, 4, 3, 2, 1];
        $salary = JobSection::select('salary_range')->distinct()->pluck('salary_range');
        $subscriptionPlans = ['All', 'Basic', 'Premium'];
        $deliveryTimes = ['24H', '3 days', '7 days', 'Anytime'];

        // Start query for jobs
        $jobsQuery = JobSection::query();

        // Apply filters dynamically
        if ($request->filled('category')) {
            $jobsQuery->where('job_category_id', $request->category);
        }

        if ($request->filled('location')) {
            $jobsQuery->where('location', $request->location);
        }

        if ($request->filled('rating')) {
            $jobsQuery->where('rating', '>=', $request->rating);
        }

        if ($request->filled('salary')) {
            $jobsQuery->where('salary_range', $request->salary);
        }

        if ($request->filled('subscription')) {
            $jobsQuery->where('subscription', $request->subscription);
        }

        if ($request->filled('delivery')) {
            $jobsQuery->where('delivery_time', $request->delivery);
        }

        // Paginate filtered jobs
        $jobs = $jobsQuery->latest()->paginate(10)->withQueryString();

        // Other data
        $companies = Seller::all();

        return Inertia::render('UserPage/JobsIndex', compact(
            'categories',
            'locations',
            'ratings',
            'salary',
            'subscriptionPlans',
            'deliveryTimes',
            'jobs',
            'companies'
        ));
    }

    public function show($id)
    {
        $job = JobSection::with('company')->findOrFail($id);
        $job->apply_url = route('user.jobs.apply', $job->id);

        $recent = JobSection::with('company')
            ->where('id', '!=', $job->id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($j) {
                $j->show_url = route('user.jobs.show', $j->id);
                return $j;
            });

        $categories = JobCategory::withCount('jobSections')
            ->having('job_sections_count', '>', 0)
            ->get();

        return Inertia::render('UserPage/JobShow', [
            'job' => $job,
            'recent' => $recent,
            'categories' => $categories,
            'filters' => request()->only(['category']),
            'routes' => [
                'user.jobs.index' => route('user.jobs.index'),
                'pricing'         => route('pricing'),
            ],
            'showSubscribeModal' => session('showSubscribeModal', false),
        ]);
    }

    public function apply(Request $request, JobSection $job)
    {

        $request->validate([
            'cover_letter' => 'nullable|string',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $resumePath = $request->hasFile('resume') ? $request->file('resume')->store('resumes', 'public') : null;

        JobSectionApplication::create([
            'job_section_id' => $job->id,
            'name' => $request->name,
            'email' => $request->email,
            'cover_letter' => $request->cover_letter,
            'resume' => $resumePath
        ]);

        return redirect()->route('user.jobs.show', $job->id)->with('success', 'Application submitted successfully.');
    }

    /**
     * Store a new job/gig.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'job_category_id' => 'required|exists:job_categories,id',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'type' => 'nullable|string|max:50',
            'experience_level' => 'nullable|string|max:50',
            'salary_range' => 'nullable|string|max:100',
            'skills' => 'nullable|string|max:255',
        ]);

        JobSection::create([
            'title' => $request->title,
            'job_category_id' => $request->job_category_id,
            'description' => $request->description,
            'location' => $request->location,
            'type' => $request->type,
            'experience_level' => $request->experience_level,
            'salary_range' => $request->salary_range,
            'skills' => $request->skills,
            'company_id' => Auth::id(), // assuming logged in user is the company
        ]);

        return redirect()->back()->with('success', 'Job posted successfully!');
    }

    /**
     * GET /jobs/browse — full filtered, sorted, paginated listing.
     */
    public function browse(Request $request)
    {
        $validated = $request->validate([
            'category' => ['nullable', 'integer', 'exists:job_categories,id'],
            'location' => ['nullable', 'string', 'max:255'],
            'salary'   => ['nullable', 'string', Rule::in($this->salaryBands)],
            'sort'     => ['nullable', 'string', Rule::in(['latest', 'salary'])],
        ]);
 
        $query = JobSection::query()
            ->with(['company:id,name']);
 
        if (!empty($validated['category'])) {
            $query->where('job_category_id', $validated['category']);
        }
 
        if (!empty($validated['location'])) {
            $query->where('location', $validated['location']);
        }
 
        if (!empty($validated['salary'])) {
            $query->where('salary_range', $validated['salary']);
        }
 
        match ($validated['sort'] ?? 'latest') {
            'salary' => $query->orderByDesc('salary_min'),
            default  => $query->latest(),
        };
 
        $jobs = $query->paginate(9)->withQueryString();
 
        $categories = JobCategory::query()
            ->withCount(['jobSections as job_sections_count'])
            ->orderBy('name')
            ->get(['id', 'name', 'slug']);
 
        // Distinct, non-empty locations currently in use by published jobs.
        $locations = JobSection::whereNotNull('location')
            ->distinct()
            ->orderBy('location')
            ->pluck('location');
 
        return Inertia::render('UserPage/BrowseJobs', [
            'jobs' => [
                'data'  => $jobs->items(),
                'total' => $jobs->total(),
                'links' => $jobs->linkCollection(),
            ],
            'categories' => $categories,
            'locations'  => $locations,
            'salary'     => $this->salaryBands,
            'filters'    => $validated,
        ]);
    }
 
    
    
}
