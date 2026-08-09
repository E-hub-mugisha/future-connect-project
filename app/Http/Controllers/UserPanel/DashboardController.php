<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
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
}
