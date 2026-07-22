<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\LoginActivity;
use App\Models\Setting;
use App\Models\StoryPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    //
    public function index(Request $request)
    {
        return Inertia::render('AdminPage/Dashboard/Index', [
            'kpis'               => $this->kpis(),
            'talentsByCategory'  => $this->talentsByCategory(),
            'talentsByLevel'     => $this->talentsByLevel(),
            'signupsOverTime'    => $this->signupsOverTime(),
            'courseEnrollments'  => $this->courseEnrollmentsByStatus(),
            'quickHiresByStatus' => $this->quickHiresByStatus(),
            'recruitmentsByStatus' => $this->recruitmentsByStatus(),
            'topRatedTalents'    => $this->topRatedTalents(),
            'skillsByCategory'   => $this->skillsByCategory(),
        ]);
    }

    private function kpis(): array
    {
        return [
            'totalTalents'       => DB::table('talents')->whereNull('deleted_at')->count(),
            'approvedTalents'    => DB::table('talents')->where('status', 'approved')->count(),
            'totalUsers'         => DB::table('users')->whereNull('deleted_at')->count(),
            'activeCourses'      => DB::table('courses')->where('status', 'published')->whereNull('deleted_at')->count(),
            'pendingRecruitments' => DB::table('corporate_recruitments')->where('status', 'pending')->count(),
            'openQuickHires'     => DB::table('quick_hires')->whereIn('status', ['pending', 'matched'])->count(),
        ];
    }

    private function talentsByCategory()
    {
        return DB::table('talents')
            ->join('categories', 'categories.id', '=', 'talents.category_id')
            ->select('categories.name as category', DB::raw('count(talents.id) as total'))
            ->whereNull('talents.deleted_at')
            ->groupBy('categories.name')
            ->orderByDesc('total')
            ->get();
    }

    private function talentsByLevel()
    {
        return DB::table('talents')
            ->select('level', DB::raw('count(*) as total'))
            ->whereNull('deleted_at')
            ->groupBy('level')
            ->get();
    }

    private function signupsOverTime()
    {
        return DB::table('talents')
            ->select(
                DB::raw("DATE_FORMAT(created_at, '%b %Y') as month"),
                DB::raw("DATE_FORMAT(created_at, '%Y-%m') as sort_key"),
                DB::raw('count(*) as total')
            )
            ->where('created_at', '>=', now()->subMonths(6))
            ->groupBy('month', 'sort_key')
            ->orderBy('sort_key')
            ->get();
    }

    private function courseEnrollmentsByStatus()
    {
        return DB::table('course_enrollments')
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get();
    }

    private function quickHiresByStatus()
    {
        return DB::table('quick_hires')
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get();
    }

    private function recruitmentsByStatus()
    {
        return DB::table('corporate_recruitments')
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get();
    }

    private function topRatedTalents()
    {
        return DB::table('talent_feedback')
            ->join('talents', 'talents.id', '=', 'talent_feedback.talent_id')
            ->select('talents.name', DB::raw('round(avg(talent_feedback.rating), 1) as avg_rating'), DB::raw('count(talent_feedback.id) as reviews'))
            ->groupBy('talents.id', 'talents.name')
            ->orderByDesc('avg_rating')
            ->limit(5)
            ->get();
    }

    private function skillsByCategory()
    {
        return DB::table('skills')
            ->join('categories', 'categories.id', '=', 'skills.category_id')
            ->select('categories.name as category', DB::raw('count(skills.id) as total'))
            ->groupBy('categories.name')
            ->orderByDesc('total')
            ->get();
    }


    public function indexSettings()
    {
        // Fetch the first (and only) settings row
        $settings = Setting::first();

        return Inertia::render('AdminPage/Settings/Index', compact('settings'));
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

        return Inertia::render('AdminPage/User/LoginActivityIndex', compact('activities'));
    }
}
