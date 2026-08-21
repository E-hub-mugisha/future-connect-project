<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectApplication;
use App\Mail\ProjectAccountCreated;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class UserProjectController extends Controller
{
    public function index()
    {
        $categories = Category::withCount('projects')
            ->orderBy('name')
            ->get();
 
        $projects = Project::with(['category', 'user'])
            ->where('status', 'approved')
            ->latest()
            ->take(6)
            ->get();
        return Inertia::render('UserPage/Projects', compact('projects', 'categories'));
    }

    public function all(Request $request)
    {
        $filters = $request->only(['category', 'location', 'keyword', 'status']);

        $categories = Category::withCount('projects')
            ->orderBy('name')
            ->get();

        $projects = Project::with(['category', 'user'])
            ->when($filters['category'] ?? null, function ($query, $categoryId) {
                $query->where('category_id', $categoryId);
            })
            ->when($filters['location'] ?? null, function ($query, $location) {
                $query->where('location', 'like', "%{$location}%");
            })
            ->when($filters['keyword'] ?? null, function ($query, $keyword) {
                $query->where(function ($sub) use ($keyword) {
                    $sub->where('title', 'like', "%{$keyword}%")
                        ->orWhere('description', 'like', "%{$keyword}%");
                });
            })
            ->when($filters['status'] ?? null, function ($query, $status) {
                $query->where('status', $status);
            })
            ->latest()
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('UserPage/AllProjects', [
            'categories' => $categories,
            'projects' => $projects,
            'filters' => [
                'category' => $filters['category'] ?? '',
                'location' => $filters['location'] ?? '',
                'keyword' => $filters['keyword'] ?? '',
                'status' => $filters['status'] ?? '',
            ],
        ]);
    }
    public function show($id)
{
    $project = Project::with(['user:id,name,email', 'category:id,name'])
        ->findOrFail($id);

    $recent = Project::with('category:id,name')
        ->where('id', '!=', $id)
        ->latest()
        ->take(5)
        ->get(['id', 'title', 'category_id', 'verified']);

    return Inertia::render('UserPage/ProjectShow', compact('project', 'recent'));
}

    public function store(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,zip|max:2048',
            'portfolio_url' => 'nullable|url|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $project = Project::findOrFail($id);

        $path = $request->file('attachment')
            ? $request->file('attachment')->store('applications', 'public')
            : null;

        ProjectApplication::create([
            'project_id' => $project->id,
            'message' => $request->message,
            'attachment' => $path,
            'portfolio_url' => $request->portfolio_url,
            'name' => $request->name,
            'email' => $request->email,
            'status' => 'pending',
        ]);

        return redirect()->route('user.projects.show', $project->id)
            ->with('success', 'Your application has been sent successfully!');
    }
    
    /**
     * Show the "submit a project" form.
     */
    public function create(): Response
    {
        return Inertia::render('UserPage/SubmitProject', [
            'categories'   => Category::orderBy('name')->get(['id', 'name']),
            'old'          => session()->getOldInput(),
            'status'       => session('status'),
            'needsAccount' => session('needs_account', false),
        ]);
    }

    /**
     * Handle the project submission.
     */
    public function storeProject(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'            => ['required', 'string', 'max:255'],
            'description'      => ['required', 'string'],
            'category_id'      => ['required', 'exists:categories,id'],
            'budget_amount'    => ['nullable', 'numeric', 'min:0'],
            'budget_currency'  => ['required', 'string', 'in:RWF,USD'],
            'location'         => ['required', 'string', 'max:255'],
            'email'            => ['required', 'email', 'max:255'],
            'first_name'       => ['nullable', 'string', 'max:100'],
            'last_name'        => ['nullable', 'string', 'max:100'],
        ]);

        $user = User::where('email', $data['email'])->first();

        // No matching account — need the person's name before we can create one.
        if (! $user) {
            if (empty($data['first_name']) || empty($data['last_name'])) {
                return back()
                    ->withInput()
                    ->with('needs_account', true)
                    ->with('status', "We couldn't find an account for {$data['email']}. Please add your first and last name so we can create one for you and submit the project.");
            }

            $password = $this->generateDefaultPassword();

            $user = User::create([
                'first_name'        => $data['first_name'],
                'last_name'         => $data['last_name'],
                'name'              => trim($data['first_name'] . ' ' . $data['last_name']),
                'email'             => $data['email'],
                'password'          => Hash::make($password),
                'email_verified_at' => null,
            ]);

            Mail::to($user->email)->send(new ProjectAccountCreated($user, $password));
        }

        $project = Project::create([
            'user_id'         => $user->id,
            'title'           => $data['title'],
            'description'     => $data['description'],
            'budget_amount'   => $data['budget_amount'] ?? null,
            'budget_currency' => $data['budget_currency'],
            'location'        => $data['location'],
            'status'          => 'pending',
            'verified'        => false,
            'category_id'     => $data['category_id'],
        ]);

        $message = $user->wasRecentlyCreated
            ? 'Your project has been submitted and a new account has been created for you. Check your email for your login details.'
            : 'Your project has been submitted successfully.';

        return redirect()
            ->route('user.projects.show', $project->id)
            ->with('status', $message);
    }

    /**
     * Generate a readable one-time default password, e.g. "Fc-7X4kQ2".
     */
    private function generateDefaultPassword(): string
    {
        return 'Fc-' . Str::upper(Str::random(2)) . random_int(1000, 9999) . Str::lower(Str::random(2));
    }
}
