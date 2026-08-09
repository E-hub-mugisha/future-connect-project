<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function profile()
    {
        return Inertia::render('UserPanel/Profile/Index', ['user' => Auth::user()]);
    }

    public function updateProfile(Request $request, $id)
    {
        // Prevent one user from editing another user's profile via the URL
        abort_unless((int) $id === (int) Auth::id(), 403);

        $request->validate([
            'name'    => 'required',
            'string',
            'max:255',
            'regex:/^[a-zA-Z\s]+$/',
            'bio'     => 'nullable|string|max:1000',
            'photo'   => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'address' => 'nullable|string|max:255',
            'phone'   => [
                'nullable',
                'string',
                'max:20',
                'regex:/^[0-9+\-\s()]+$/'
            ],
        ]);

        $user = \App\Models\User::findOrFail($id);

        DB::transaction(function () use ($request, $user) {
            // Persist the name onto the users table (this was validated but never saved)
            $user->update([
                'name' => $request->input('name'),
            ]);

            $userDetail = $user->detail ?? new \App\Models\UserDetail(['user_id' => $user->id]);

            // Handle image upload
            if ($request->hasFile('photo')) {
                $image = $request->file('photo');
                $path = public_path('image/users/');

                // Ensure folder exists
                if (!file_exists($path)) {
                    mkdir($path, 0777, true);
                }

                // Create a safe, unique file name
                $userPhoto = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

                // Delete the old photo before saving the new one
                if ($userDetail->photo && file_exists($path . $userDetail->photo)) {
                    unlink($path . $userDetail->photo);
                }

                // Move uploaded file
                $image->move($path, $userPhoto);

                $userDetail->photo = $userPhoto;
            }

            $userDetail->user_id = $user->id;
            $userDetail->bio = $request->input('bio');
            $userDetail->address = $request->input('address');
            $userDetail->phone = $request->input('phone');
            $userDetail->save();
        });

        return back()->with('success', 'Profile updated successfully.');
    }

    public function connections()
    {
        $user = Auth::user();

        $connections = \App\Models\TalentConnection::with(['talent.category'])
            ->where('email', $user->email)
            ->latest()
            ->get();

        return Inertia::render('UserPanel/Connections/Index', [
            'connections' => $connections,
        ]);
    }

    public function showConnection($id)
    {
        $talent = Talent::with(['category', 'skills', 'stories', 'feedback'])->findOrFail($id);

        return Inertia::render('UserPanel/Connections/Show', [
            'talent' => $talent,
        ]);
    }
}
