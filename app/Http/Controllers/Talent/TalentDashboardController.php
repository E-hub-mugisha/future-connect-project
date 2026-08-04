<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Talent;
use App\Models\Testimonial;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TalentDashboardController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();

        $talent = Talent::with([
            'courses',
            'skills',
            'stories',
            'feedback',
            'connections',
        ])->where('user_id', $user->id)->firstOrFail();

        /*
        |--------------------------------------------------------------------------
        | Totals (Top Cards & Bar Chart)
        |--------------------------------------------------------------------------
        */
        $totals = [
            'courses'     => $talent->courses->count(),
            'skills'      => $talent->skills->count(),
            'stories'     => $talent->stories->count(),
            'feedback'    => $talent->feedback->count(),
            'connections' => $talent->connections->count(),
        ];

        // FIX: guard against division by zero when a talent has no stories yet
        $totals['feedbackRate'] = $totals['stories'] > 0
            ? round(($totals['feedback'] / $totals['stories']) * 100, 2)
            : 0;

        /*
        |--------------------------------------------------------------------------
        | Monthly Activity (Last 6 Months – Line Charts)
        |--------------------------------------------------------------------------
        */
        $months = collect(range(5, 0))->map(
            fn ($i) => Carbon::now()->subMonths($i)->format('M')
        )->values();

        $monthlyStories = collect(range(5, 0))->map(
            fn ($i) => $talent->stories()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        )->values();

        $monthlyFeedback = collect(range(5, 0))->map(
            fn ($i) => $talent->feedback()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        )->values();

        $monthlyConnections = collect(range(5, 0))->map(
            fn ($i) => $talent->connections()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        )->values();

        /*
        |--------------------------------------------------------------------------
        | Send Data to Inertia Page
        |--------------------------------------------------------------------------
        */
        return Inertia::render('Talent/Dashboard/Index', [
            'totals'             => $totals,
            'months'             => $months,
            'monthlyStories'     => $monthlyStories,
            'monthlyFeedback'    => $monthlyFeedback,
            'monthlyConnections' => $monthlyConnections,
            'isFeatured'         => $talent->featured,
            'status'             => $talent->status,
            'matched'            => $talent->matched,
            'level'              => $talent->level,
        ]);
    }

    public function testimonials()
    {
        $testimonials = Testimonial::all();
        return Inertia::render('Talent/Testimonials', compact('testimonials'));
    }
}