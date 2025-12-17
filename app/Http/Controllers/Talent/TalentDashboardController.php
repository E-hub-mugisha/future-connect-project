<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Testimonial;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentDashboardController extends Controller
{
    public function dashboard()
    {
        // You can fetch the necessary data for the dashboard here
        $totalTestimonials = \App\Models\Testimonial::count();
        $totalStories = \App\Models\Story::count();
        $totalTalents = \App\Models\Talent::count();
        $totalUsers = \App\Models\User::count();

        $users = \App\Models\User::latest()->take(5)->get();
        $talents = \App\Models\Talent::latest()->take(5)->get();
        $announcements = Announcement::latest()->take(5)->get();
        $payments = \App\Models\StoryPayment::latest()->take(5)->get();
        return view('talent-pages.dashboard.index', compact('totalTestimonials', 'totalStories', 'totalTalents', 'totalUsers', 'users', 'talents','announcements','payments'));
    }

    public function testimonials()
    {
        $testimonials = Testimonial::all();
        return view('talent-pages.testimonials.index', compact('testimonials'));
    }
}
