<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TalentProfileController extends Controller
{
    public function index()
    {
        $talent = Talent::where('user_id', Auth::id())
            ->with(['feedback', 'courses','category', 'skills', 'stories'])
            ->firstOrFail();

        $categories = Category::all();

        return Inertia::render('Talent/Profile/Index', compact('talent', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $talent = Talent::findOrFail($id);

        // Make sure a talent can only edit their own profile
        if ($talent->user_id !== Auth::id()) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-zA-Z\s]+$/'
            ],
            'level'       => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'address'     => 'nullable|string|max:255',
            'phone' => [
                'nullable',
                'string',
                'max:20',
                'regex:/^[0-9+\-\s()]+$/'
            ],
            'email'       => 'nullable|email|max:255',
            'language'    => 'nullable|string|max:255',
            'category_id' => 'nullable|exists:categories,id',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Treat empty string as null for the FK select
        if (($validated['category_id'] ?? null) === '') {
            $validated['category_id'] = null;
        }

        if ($profile_image = $request->file('image')) {
            $destinationPath = public_path('image/talents/');

            // Generate unique filename
            $filename = time() . '_' . uniqid() . '.' . $profile_image->getClientOriginalExtension();

            // Create folder if it doesn't exist
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }

            // Clean up old image so storage doesn't fill up with orphans
            if ($talent->image && file_exists(public_path($talent->image))) {
                unlink(public_path($talent->image));
            }

            // Move image to public folder
            $profile_image->move($destinationPath, $filename);

            // Save relative path in DB
            $validated['image'] = "image/talents/{$filename}";
        } else {
            unset($validated['image']); // don't overwrite existing image with null
        }

        $talent->update($validated);

        return back()->with('success', 'Profile updated successfully!');
    }
}
