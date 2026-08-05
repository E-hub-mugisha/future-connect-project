<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    /**
     * Display all testimonials belonging to the logged-in talent.
     */
    public function index(Request $request)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $rating = $request->input('rating');

        $testimonials = Testimonial::where('talent_id', $talent->id)
            ->when($rating, fn ($q) => $q->where('rating', $rating))
            ->orderByDesc('created_at')
            ->paginate(9)
            ->withQueryString();

        $all = Testimonial::where('talent_id', $talent->id)->get();

        return Inertia::render('Talent/Testimonial/Index', [
            'testimonials' => $testimonials,
            'filters' => ['rating' => $rating ? (int) $rating : null],
            'stats' => [
                'total' => $all->count(),
                'average' => round($all->avg('rating') ?? 0, 1),
                'breakdown' => [
                    5 => $all->where('rating', 5)->count(),
                    4 => $all->where('rating', 4)->count(),
                    3 => $all->where('rating', 3)->count(),
                    2 => $all->where('rating', 2)->count(),
                    1 => $all->where('rating', 1)->count(),
                ],
            ],
        ]);
    }

    /**
     * Store a newly created testimonial.
     */
    public function store(Request $request)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $validated = $request->validate([
            'title'   => ['required', 'string', 'max:255'],
            'content' => ['required', 'string', 'max:1000'],
            'rating'  => ['required', 'integer', 'between:1,5'],
        ]);

        $validated['talent_id'] = $talent->id;

        Testimonial::create($validated);

        return redirect()
            ->route('talent.testimonials.index')
            ->with('success', 'Testimonial added successfully.');
    }

    /**
     * Update the specified testimonial.
     */
    public function update(Request $request, $id)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $testimonial = Testimonial::where('talent_id', $talent->id)->findOrFail($id);

        $validated = $request->validate([
            'title'   => ['required', 'string', 'max:255'],
            'content' => ['required', 'string', 'max:1000'],
            'rating'  => ['required', 'integer', 'between:1,5'],
        ]);

        $testimonial->update($validated);

        return redirect()
            ->route('talent.testimonials.index')
            ->with('success', 'Testimonial updated successfully.');
    }

    /**
     * Remove the specified testimonial.
     */
    public function destroy($id)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $testimonial = Testimonial::where('talent_id', $talent->id)->findOrFail($id);

        $testimonial->delete();

        return redirect()
            ->route('talent.testimonials.index')
            ->with('success', 'Testimonial deleted successfully.');
    }
}