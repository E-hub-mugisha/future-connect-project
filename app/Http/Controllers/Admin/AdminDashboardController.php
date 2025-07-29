<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StoryPayment;
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
        $totalStoryPayments = StoryPayment::sum('amount');
        $users = \App\Models\User::latest()->take(5)->get();
        $talents = \App\Models\Talent::latest()->take(5)->get();
        $payments = \App\Models\StoryPayment::latest()->take(5)->get();
        return view('admin-pages.dashboard.index', compact('payments','totalStoryPayments', 'totalTestimonials', 'totalStories', 'totalTalents', 'totalUsers', 'users', 'talents'));
    }
}
