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
        $totalRatings = Talent::with('rating')->count();
        $totalStories = Talent::with('story')->count();
        $totalComments = Talent::with('feedback')->count();
        $totalSkills = Talent::with('skill')->count();

        return view('admin-pages.talents.index', compact('talents', 'categories', 'totalRatings', 'totalStories', 'totalComments', 'totalSkills'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'featured' => 'sometimes|boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg,webp|max:2048',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'language' => 'nullable|string|max:50',
            'category_id' => 'required|exists:categories,id',
        ]);

        $talentImage = null;

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/talents/');

            // Ensure folder exists
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            // Create a safe, unique file name
            $talentImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Move uploaded file
            $image->move($path, $talentImage);
        }

        Talent::create([
            'name' => $request->name,
            'featured' => $request->boolean('featured'),
            'description' => $request->description,
            'image' => $talentImage,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'language' => $request->language,
            'category_id' => $request->category_id,
        ]);

        return redirect()->back()->with('success', 'Talent registered successfully.');
    }


    public function show($id)
    {
        $talent = Talent::withCount('stories')->findOrFail($id);
        $categories = Category::all();
        return view('admin-pages.talents.talent-profile', compact('talent', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $talent = Talent::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'featured' => 'sometimes|boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg,webp|max:2048',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'language' => 'nullable|string|max:50',
            'category_id' => 'required|exists:categories,id',
        ]);

        $talentImage = $talent->image; // keep old image by default

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/talents/');

            // Create folder if it doesn’t exist
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            // Delete old image if exists
            if ($talent->image && file_exists($path . $talent->image)) {
                unlink($path . $talent->image);
            }

            // Generate safe, unique filename
            $talentImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Move new image
            $image->move($path, $talentImage);
        }

        $talent->update([
            'name' => $request->name,
            'featured' => $request->boolean('featured'),
            'description' => $request->description,
            'image' => $talentImage,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'language' => $request->language,
            'category_id' => $request->category_id,
        ]);

        return redirect()->back()->with('success', 'Talent updated successfully.');
    }

    public function destroy($id)
    {
        $talent = Talent::findOrFail($id);

        if ($talent->image && file_exists(public_path('image/talents/' . $talent->image))) {
            unlink(public_path('image/talents/' . $talent->image));
        }
        $talent->delete();
        return redirect()->route('admin.talents')->with('success', 'Talent deleted successfully.');
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
    public function feature(Request $request, $id)
    {
        $request->validate([
            'featured' => 'boolean',
        ]);

        $talent = Talent::findOrFail($id);
        $talent->featured = $request->has('featured') ? 1 : 0;
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
