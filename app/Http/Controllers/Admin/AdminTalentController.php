<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\TalentApprovalNotification;
use App\Mail\TalentApproved;
use App\Models\Talent;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AdminTalentController extends Controller
{
    public function index()
    {
        $talents = Talent::all();
        $categories = Category::all();
        $totalRatings = Talent::sum('rating');
        $totalStories = Talent::with('story')->count();
        $totalComments = Talent::with('feedback')->count();
        $totalSkills = Talent::distinct('skill')->count('skill');

        return view('admin-pages.talents.index', compact('talents', 'categories', 'totalRatings', 'totalStories', 'totalComments', 'totalSkills'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'skill' => 'required|string',
            'story' => 'nullable|string',
            'rating' => 'nullable|integer|min:0|max:5',
            'featured' => 'boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'language' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $talentImage = null;
        if ($image = $request->file('image')) {
            $path = 'image/talents/';
            $talentImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move(public_path($path), $talentImage);
        }

        Talent::create([
            'name' => $request->name,
            'skill' => $request->skill,
            'story' => $request->story,
            'rating' => $request->rating,
            'featured' => $request->has('featured') ? 1 : 0,
            'description' => $request->description,
            'image' => $talentImage,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'language' => $request->language,
            'category_id' => $request->category_id,
        ]);

        session()->flash('success', 'Talent registered successfully.');
        return redirect()->back();
    }

    public function show($id)
    {
        $talent = Talent::withCount('stories')->findOrFail($id);
        $categories = Category::all();
        return view('admin-pages.talents.talent-profile', compact('talent', 'categories'));
    }

    public function update(Request $request, $id)
    {
        Log::info('Update hit', $request->all()); // add this
        // ✅ Validate input
        $request->validate([
            'name' => 'required|string',
            'skill' => 'required|string',
            'story' => 'nullable|string',
            'rating' => 'nullable|integer|min:0|max:5',
            'featured' => 'nullable|boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'language' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        // ✅ Find the talent record
        $talent = Talent::findOrFail($id);

        // ✅ Handle image upload
        $imageName = $talent->image; // Keep current image if no new one is uploaded

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = 'image/talents/';
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path($path), $imageName);
        }

        // ✅ Update talent fields
        $talent->update([
            'name'        => $request->name,
            'skill'       => $request->skill,
            'story'       => $request->story,
            'rating'      => $request->rating,
            'featured'    => $request->has('featured') ? 1 : 0, // checkbox
            'description' => $request->description,
            'image'       => $imageName,
            'address'     => $request->address,
            'phone'       => $request->phone,
            'email'       => $request->email,
            'language'    => $request->language,
            'category_id' => $request->category_id,
        ]);

        // ✅ Flash success message & redirect to index
        return redirect()->route('admin.talents')->with('success', 'Talent updated successfully.');
    }


    public function destroy($id)
    {
        $talent = Talent::findOrFail($id);

        if ($talent->image && file_exists(public_path('image/talents/' . $talent->image))) {
            unlink(public_path('image/talents/' . $talent->image));
        }
        $talent->delete();
        return response()->json(['message' => 'Talent deleted successfully']);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,approved,rejected'
        ]);

        $talent = Talent::findOrFail($id);
        $talent->status = $request->status;
        $talent->save();

        return redirect()->back();
    }
    public function approve($id)
    {
        $talent = Talent::findOrFail($id);

        // Check if user already exists
        $user = User::where('email', $talent->email)->first();

        $password = null;

        if (!$user) {
            $password = Str::random(10); // generate a 10-character password

            $user = User::create([
                'name' => $talent->name,
                'email' => $talent->email,
                'password' => Hash::make($password),
                'role' => 'talent',
            ]);
        }

        // Update the talent
        $talent->status = 'approved';
        $talent->user_id = $user->id;
        $talent->save();

        // Send email to talent only if account was just created
        if ($password) {
            Mail::to($user->email)->send(new TalentApproved($user, $password));
        }

        // Send email to the approver/admin
        Mail::to(auth()->user()->email)->send(new TalentApprovalNotification($talent));

        return back()->with('success', 'Talent approved and notifications sent.');
    }
}
