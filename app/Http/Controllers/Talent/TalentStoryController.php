<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Story;   // ✅ Your Story model (adjust if different)
use App\Models\Talent;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TalentStoryController extends Controller
{
    /**
     * Display a list of stories belonging to the logged-in talent.
     */
    public function index()
    {
        // Find the talent profile for the logged-in user
        $talent = Talent::where('user_id', Auth::id())->first();

        if (!$talent) {
            // Optional: redirect or show a message if the user has no talent profile
            return redirect()->route('dashboard')
                ->with('error', 'You do not have a talent profile yet.');
        }

        // Fetch stories owned by this talent
        $stories = Story::where('talent_id', $talent->id)
            ->latest()
            ->get();

        return view('talent-pages.stories.index', compact('stories'));
    }

    /**
     * Display a single story by ID (ensure it belongs to the talent).
     */
    public function show($id)
    {
        $story = Story::findOrFail($id);

        return view('talent-pages.stories.show', compact('story'));
    }
}
