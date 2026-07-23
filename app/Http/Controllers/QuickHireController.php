<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\QuickHire;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;

class QuickHireController extends Controller
{
    /**
     * Timeline options shown in the wizard.
     */
    protected array $timelines = [
        'asap' => 'As soon as possible',
        'less_1_week' => 'Less than 1 week',
        '1_4_weeks' => '1 - 4 weeks',
        '1_3_months' => '1 - 3 months',
        'flexible' => 'Flexible / not sure yet',
    ];

    /**
     * Experience level options shown in the wizard.
     */
    protected array $experienceLevels = [
        'beginner' => 'Entry level',
        'intermediate' => 'Intermediate',
        'expert' => 'Expert',
        'any' => 'No preference',
    ];

    /**
     * GET /quick-hire — show the multi-step form.
     */
    public function create()
    {
        $categories = Category::orderBy('name')->get();

        return Inertia::render('UserPage/QuickHireCreate', [
            'categories' => $categories,
            'timelines' => $this->timelines,
            'experienceLevels' => $this->experienceLevels,
        ]);
    }

    /**
     * GET /quick-hire/talents-by-category/{category}
     * AJAX endpoint used by step 3 to load talent suggestions
     * as soon as the client picks a category in step 1.
     */
    public function talentsByCategory(Category $category): JsonResponse
    {
        $talents = Talent::query()
            ->where('category_id', $category->id)
            ->where('status', 'active')
            ->orderBy('matched')     // available talents (matched = false) first
            ->orderByDesc('featured')
            ->orderByDesc('level')
            ->take(6)
            ->get()
            ->map(function (Talent $talent) {
                return [
                    'id' => $talent->id,
                    'name' => $talent->name,
                    'image' => $talent->image
                        ? asset('storage/' . $talent->image)
                        : asset('assets/img/talents/default-avatar.jpg'),
                    'level' => $talent->level,
                    'featured' => (bool) $talent->featured,
                    'available' => ! $talent->matched,
                    'excerpt' => Str::limit(strip_tags($talent->description), 90),
                ];
            });

        return response()->json([
            'category' => $category->name,
            'talents' => $talents,
        ]);
    }

    /**
     * POST /quick-hire — validate and store the whole wizard payload
     * (the form is submitted once, at the end of the last step).
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'min:20'],

            'budget_type' => ['required', 'in:fixed,hourly'],
            'budget_min' => ['nullable', 'numeric', 'min:0'],
            'budget_max' => ['nullable', 'numeric', 'min:0', 'gte:budget_min'],
            'timeline' => ['nullable', 'string', 'max:100'],
            'experience_level' => ['nullable', 'string', 'max:50'],
            'skills' => ['nullable', 'string'],

            'talent_id' => ['nullable', 'exists:talents,id'],

            'client_name' => ['required', 'string', 'max:255'],
            'client_email' => ['required', 'email', 'max:255'],
            'client_phone' => ['nullable', 'string', 'max:30'],
            'company_name' => ['nullable', 'string', 'max:255'],
        ]);

        $skills = collect(explode(',', (string) $request->input('skills')))
            ->map(fn($skill) => trim($skill))
            ->filter()
            ->values()
            ->all();

        $quickHire = QuickHire::create([
            'user_id' => auth()->id(),
            'category_id' => $validated['category_id'],
            'talent_id' => $validated['talent_id'] ?? null,
            'title' => $validated['title'],
            'description' => $validated['description'],
            'budget_type' => $validated['budget_type'],
            'budget_min' => $validated['budget_min'] ?? null,
            'budget_max' => $validated['budget_max'] ?? null,
            'timeline' => $validated['timeline'] ?? null,
            'experience_level' => $validated['experience_level'] ?? null,
            'skills' => $skills,
            'client_name' => $validated['client_name'],
            'client_email' => $validated['client_email'],
            'client_phone' => $validated['client_phone'] ?? null,
            'company_name' => $validated['company_name'] ?? null,
            'status' => ! empty($validated['talent_id']) ? 'matched' : 'pending',
        ]);

        // TODO: notify ops / the matched talent, e.g.:
        // Notification::route('mail', $quickHire->client_email)->notify(new QuickHireReceived($quickHire));
        // if ($quickHire->talent_id) { $quickHire->talent->user?->notify(new QuickHireMatched($quickHire)); }

        return redirect()
            ->route('quick-hire.success', $quickHire)
            ->with('success', 'Your request has been submitted! Our team will reach out shortly.');
    }

    /**
     * GET /quick-hire/{quickHire}/success — confirmation page.
     */
    public function success(QuickHire $quickHire)
    {
        $quickHire->load(['category', 'talent']);

        return Inertia::render('UserPage/QuickHireSuccess', compact('quickHire'));
    }
}
