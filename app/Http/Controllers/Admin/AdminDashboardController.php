<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    //
    public function dashboard()
    {
        // You can fetch the necessary data for the dashboard here
        $totalTestimonials = \App\Models\Testimonial::count();
        $totalStories = \App\Models\Story::count();
        $totalTalents = \App\Models\Talent::count();
        $totalUsers = \App\Models\User::count();

        $users = \App\Models\User::latest()->take(5)->get();
        $talents = \App\Models\Talent::latest()->take(5)->get();
        return view('admin-pages.dashboard.index', compact('totalTestimonials', 'totalStories', 'totalTalents', 'totalUsers', 'users', 'talents'));
    }
}
