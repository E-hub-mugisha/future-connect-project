<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Course;
use App\Models\StoryPayment;
use App\Models\Talent;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class UserPanelController extends Controller
{
    public function dashboard() {
        $user = Auth::user();
        // You can fetch the necessary data for the dashboard here
        $totalTestimonials = \App\Models\Testimonial::count();
        $totalStories = \App\Models\Story::count();
        $totalTalents = \App\Models\Talent::count();
        $totalUsers = \App\Models\User::count();
        $users = \App\Models\User::latest()->take(5)->get();
        $talents = \App\Models\Talent::latest()->take(5)->get();
        $announcements = Announcement::latest()->take(5)->get();
        return Inertia::render('UserPanel/Dashboard', compact('announcements', 'totalTestimonials', 'totalStories', 'totalTalents', 'totalUsers', 'users', 'talents'));
    }

    public function profile() {
        return Inertia::render('UserPanel/Profile', ['user' => Auth::user()]);
    }

    public function updateProfile(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string|max:1000',
            'photo' => 'nullable|image|max:2048'
        ]);

        $user = \App\Models\User::find(Auth::id());
        $user->name = $request->input('name');
        $user->bio = $request->input('bio');
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('profile_photos', 'public');
            $user->photo = $path;
        }
        $user->save();

        return back()->with('success', 'Profile updated successfully.');
    }

    public function myTalents() {
        $talents = TalentConnection::where('user_id', Auth::user()->id)->where('status', 'accepted')->get();
        return Inertia::render('UserPanel/MyTalents', compact('talents'));
    }

    public function transactions() {
        $payments = auth()->user()->payments;
        return Inertia::render('UserPanel/Transactions', compact('payments'));
    }

    public function notifications() {
        $notifications = auth()->user()->notifications()->latest()->get();
        return Inertia::render('UserPanel/Notifications', compact('notifications'));
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

    public function userCourses() {
        $user = auth()->user();
        $courses = $user->enrollments()->with('course')->get()->pluck('course');
        return view('user.courses', compact('courses'));
    }
    public function userCoursesShow($slug) {
        $course = Course::where('slug', $slug)->with(['talent', 'feedback', 'lessons'])->firstOrFail();
        return view('user.course-show', compact('course'));
    }
}
