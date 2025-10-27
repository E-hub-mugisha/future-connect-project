<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\LoginActivity;
use App\Models\Setting;
use App\Models\StoryPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $announcements = Announcement::latest()->take(5)->get();
        $totalCourses = \App\Models\Course::count();
        return view('admin-pages.dashboard.index', compact('announcements','payments','totalStoryPayments', 'totalTestimonials', 'totalStories', 'totalTalents', 'totalUsers', 'users', 'talents','totalCourses'));
    }

    public function index()
    {
        // Fetch the first (and only) settings row
        $settings = Setting::first();

        return view('admin-pages.settings.index', compact('settings'));
    }

    /**
     * Show the settings page.
     */
    public function edit()
    {
        // Assuming there is only one settings row
        $settings = Setting::first();

        return view('admin-pages.settings.edit', compact('settings'));
    }

    /**
     * Update the settings.
     */
    public function update(Request $request)
    {
        $settings = Setting::first();

        $validatedData = $request->validate([
            'site_name' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'default_language' => 'nullable|string',
            'timezone' => 'nullable|string',
            'contact_email' => 'nullable|email',
            'contact_phone' => 'nullable|string|max:20',
            'contact_address' => 'nullable|string',
            'facebook_link' => 'nullable|url',
            'twitter_link' => 'nullable|url',
            'instagram_link' => 'nullable|url',
            'linkedin_link' => 'nullable|url',
            'registration_open' => 'nullable|boolean',
            'enable_notifications' => 'nullable|boolean',
        ]);

        // Handle logo upload
        if ($request->hasFile('logo')) {
            if ($settings->logo) {
                Storage::delete($settings->logo); // Delete old logo
            }
            $path = $request->file('logo')->store('settings', 'public');
            $validatedData['logo'] = $path;
        }

        // Checkbox handling
        $validatedData['registration_open'] = $request->has('registration_open') ? 1 : 0;
        $validatedData['enable_notifications'] = $request->has('enable_notifications') ? 1 : 0;

        $settings->update($validatedData);

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }

    public function indexActivity()
    {
        $activities = LoginActivity::with('user')->latest()->paginate(20);

        return view('admin-pages.login-activity.index', compact('activities'));
    }
}
