<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class AdminTestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::with('talent')->get();

        return view('admin-pages.testimonials.index', [
            'talents' => \App\Models\Talent::all(),
            'testimonials' => $testimonials
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $testimonial = Testimonial::create($validated);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial added successfully.');
    }

    public function show($id)
    {
        $testimonial = Testimonial::with('talent')->findOrFail($id);

        return response()->json($testimonial);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'rating' => 'sometimes|integer|min:1|max:5',
        ]);

        $testimonial->update($validated);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial updated successfully.');
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }
}
