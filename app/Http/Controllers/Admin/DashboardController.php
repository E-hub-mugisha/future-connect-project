<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Talent;
use App\Models\Job;
use App\Models\Payment;
use App\Models\ActivityLog;
use App\Models\ConnectionPayment;
use App\Models\JobSection;
use App\Models\LoginActivity;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        // ── Stat cards ───────────────────────────────────────
        $now       = Carbon::now();
        $thisMonth = $now->copy()->startOfMonth();
        $lastMonth = $now->copy()->subMonth()->startOfMonth();

        $totalUsers     = User::count();
        $usersThisMonth = User::where('created_at', '>=', $thisMonth)->count();
        $usersLastMonth = User::whereBetween('created_at', [$lastMonth, $thisMonth])->count();

        $activeTalents     = Talent::count();
        $talentsThisMonth  = Talent::where('created_at', '>=', $thisMonth)->count();
        $talentsLastMonth  = Talent::whereBetween('created_at', [$lastMonth, $thisMonth])->count();

        $openJobs      = JobSection::count();
        $jobsThisMonth = JobSection::where('created_at', '>=', $thisMonth)->count();
        $jobsLastMonth = JobSection::whereBetween('created_at', [$lastMonth, $thisMonth])->count();

        $revenueThis = ConnectionPayment::where('created_at', '>=', $thisMonth)->sum('amount');
        $revenueLast = ConnectionPayment::whereBetween('created_at', [$lastMonth, $thisMonth])->sum('amount');

        $stats = [
            'total_users'       => $totalUsers,
            'users_change'      => $this->pctChange($usersLastMonth, $usersThisMonth),
            'active_talents'    => $activeTalents,
            'talents_change'    => $this->pctChange($talentsLastMonth, $talentsThisMonth),
            'open_jobs'         => $openJobs,
            'jobs_change'       => $this->pctChange($jobsLastMonth, $jobsThisMonth),
            'revenue_formatted' => $this->formatRevenue($revenueThis),
            'revenue_change'    => $this->pctChange($revenueLast, $revenueThis),
        ];

        // ── Registration chart (last 12 months) ─────────────
        $chartData   = [];
        $chartLabels = [];
        for ($i = 11; $i >= 0; $i--) {
            $month         = $now->copy()->subMonths($i);
            $chartLabels[] = $month->format('M');
            $chartData[]   = User::whereYear('created_at', $month->year)
                                 ->whereMonth('created_at', $month->month)
                                 ->count();
        }

        // ── Platform health ──────────────────────────────────
        $totalUsersForCalc  = max($totalUsers, 1);
        $verifiedCount      = User::where('is_verified', true)->count();
        $profilesDone       = User::count();
        $filledJobs         = JobSection::count();
        $totalJobsEver      = max(JobSection::count(), 1);
        $completedCourses   = DB::table('course_enrollments')->where('progress', true)->count();
        $totalEnrollments   = max(DB::table('course_enrollments')->count(), 1);

        $platformHealth = collect([
            ['label' => 'Server Uptime',      'value' => 99,  'color' => '#48d597'],
            ['label' => 'Verified Users',      'value' => round($verifiedCount / $totalUsersForCalc * 100), 'color' => '#4a9de0'],
            ['label' => 'Profile Completion',  'value' => round($profilesDone  / $totalUsersForCalc * 100), 'color' => '#e8a44a'],
            ['label' => 'Job Fill Rate',       'value' => round($filledJobs    / $totalJobsEver     * 100), 'color' => '#e05c5c'],
            ['label' => 'Course Completion',   'value' => round($completedCourses / $totalEnrollments * 100), 'color' => '#48d597'],
        ]);

        // ── Skills by category ───────────────────────────────
        $colors = ['#48d597','#4a9de0','#e8a44a','#e05c5c','#a074e8','#5bbcd6'];
        $skillCategories = Talent::select('category_id', DB::raw('count(*) as total'))
            ->groupBy('category_id')
            ->orderByDesc('total')
            ->get()
            ->values()
            ->map(function ($item, $index) use ($colors, $activeTalents) {
                return [
                    'name'       => ucfirst($item->category),
                    'count'      => $item->total,
                    'percentage' => $activeTalents > 0 ? round($item->total / $activeTalents * 100) : 0,
                    'color'      => $colors[$index % count($colors)],
                ];
            });

        // ── Recent activity ──────────────────────────────────
        $recentActivity = LoginActivity::with('user')
            ->latest()
            ->take(5)
            ->get()
            ->map(fn($log) => [
                'color'   => $log->color,
                'icon'    => $log->icon_svg,
                'message' => $log->formatted_message,
                'time'    => $log->created_at,
            ]);

        // ── Recent users ─────────────────────────────────────
        $avatarColors = [
            'green' => ['rgba(0,166,103,0.15)',    '#48d597'],
            'blue'  => ['rgba(74,157,224,0.15)',   '#4a9de0'],
            'amber' => ['rgba(232,164,74,0.15)',   '#e8a44a'],
            'red'   => ['rgba(224,92,92,0.15)',    '#e05c5c'],
            'purple'=> ['rgba(160,116,232,0.15)',  '#a074e8'],
        ];
        $colorKeys = array_keys($avatarColors);

        $recentUsers = User::with('talent')
            ->latest()
            ->take(6)
            ->get()
            ->map(function ($user, $i) use ($avatarColors, $colorKeys) {
                $key   = $colorKeys[$i % count($colorKeys)];
                [$bg, $color] = $avatarColors[$key];
                $nameParts = explode(' ', $user->name);
                return [
                    'id'             => $user->id,
                    'name'           => $user->name,
                    'email'          => $user->email,
                    'initials'       => strtoupper(substr($nameParts[0], 0, 1) . substr($nameParts[1] ?? '', 0, 1)),
                    'avatar_bg'      => $bg,
                    'avatar_color'   => $color,
                    'category'       => ucfirst($user->talent?->category ?? 'General'),
                    'category_color' => $key,
                    'joined_at'      => $user->created_at,
                    'status'         => $user->status ?? 'pending',
                ];
            });

        // ── Pending reviews ──────────────────────────────────
        $pendingVerifications     = Talent::where('status', 'pending')->count();
        $pendingSellerApplications = DB::table('sellers')->where('status', 'pending')->count();

        return view('admin.dashboard', compact(
            'stats',
            'chartLabels',
            'chartData',
            'platformHealth',
            'skillCategories',
            'recentActivity',
            'recentUsers',
            'pendingVerifications',
            'pendingSellerApplications',
        ));
    }

    // ── Helpers ──────────────────────────────────────────────
    private function pctChange(float $old, float $new): float
    {
        if ($old == 0) return $new > 0 ? 100 : 0;
        return round((($new - $old) / $old) * 100, 1);
    }

    private function formatRevenue(float $amount): string
    {
        if ($amount >= 1_000_000) return round($amount / 1_000_000, 1) . 'M';
        if ($amount >= 1_000)    return round($amount / 1_000, 1) . 'K';
        return number_format($amount);
    }
}
