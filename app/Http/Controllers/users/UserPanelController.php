<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Talent;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserPanelController extends Controller
{
    public function dashboard() {
        $user = auth()->user();
        return view('user.dashboard', [
            'user' => $user
        ]);
    }

    public function profile() {
        return view('user.profile', ['user' => auth()->user()]);
    }

    public function updateProfile(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string|max:1000',
            'photo' => 'nullable|image|max:2048'
        ]);

        $user = auth()->user();
        $user->update($request->only('name', 'bio'));

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('profile_photos', 'public');
            $user->photo = $path;
            $user->save();
        }

        return back()->with('success', 'Profile updated successfully.');
    }

    public function myTalents() {
        $talents = TalentConnection::where('user_id', Auth::user()->id)->where('status', 'accepted')->get();
        return view('user.talents', compact('talents'));
    }

    public function transactions() {
        $payments = auth()->user()->payments;
        return view('user.payments', compact('payments'));
    }

    public function notifications() {
        $notifications = auth()->user()->notifications()->latest()->get();
        return view('user.notifications', compact('notifications'));
    }

    public function connections() {
        $connections = TalentConnection::where('user_id', Auth::user()->id)->where('status', 'pending')->get();
        return view('user.connections', compact('connections'));
    }
    public function showConnection($id)
    {
        $connection = TalentConnection::with(['requester', 'talent', 'payment'])
            ->findOrFail($id);

        return view('user.connection-show', compact('connection'));
    }

    public function sendConnectionRequest(Request $request) {
        $request->validate(['user_id' => 'required|exists:users,id']);
        $sender = auth()->user();
        $receiverId = $request->user_id;

        // Prevent duplicate request
        if (!$sender->sentConnections()->where('receiver_id', $receiverId)->exists()) {
            $sender->sentConnections()->create(['receiver_id' => $receiverId]);
        }

        return back()->with('success', 'Connection request sent.');
    }
}
