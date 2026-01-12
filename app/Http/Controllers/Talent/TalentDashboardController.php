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

class TalentDashboardController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();

        // Fetch Talent with relationships
        $talent = Talent::with([
            'courses',
            'skills',
            'stories',
            'feedback',
            'connections',
            'supports'
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
            'supports'    => $talent->supports->count(),
        ];

        /*
    |--------------------------------------------------------------------------
    | Monthly Activity (Last 6 Months – Line Charts)
    |--------------------------------------------------------------------------
    */
        $months = collect(range(5, 0))->map(function ($i) {
            return Carbon::now()->subMonths($i)->format('M');
        });

        $monthlyStories = collect(range(5, 0))->map(
            fn($i) =>
            $talent->stories()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        );

        $monthlyFeedback = collect(range(5, 0))->map(
            fn($i) =>
            $talent->feedback()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        );

        $monthlyConnections = collect(range(5, 0))->map(
            fn($i) =>
            $talent->connections()
                ->whereMonth('created_at', Carbon::now()->subMonths($i)->month)
                ->whereYear('created_at', Carbon::now()->subMonths($i)->year)
                ->count()
        );

        /*
    |--------------------------------------------------------------------------
    | Send Data to View
    |--------------------------------------------------------------------------
    */
        return view('talent-pages.dashboard.index', [
            'talent'              => $talent,

            // Summary Cards
            'totals'              => $totals,

            // Monthly Charts
            'months'              => $months,
            'monthlyStories'      => $monthlyStories,
            'monthlyFeedback'     => $monthlyFeedback,
            'monthlyConnections'  => $monthlyConnections,

            // Status Info
            'isFeatured'          => $talent->featured,
            'status'              => $talent->status,
            'matched'             => $talent->matched,
            'level'               => $talent->level,
        ]);
    }

    public function testimonials()
    {
        $testimonials = Testimonial::all();
        return view('talent-pages.testimonials.index', compact('testimonials'));
    }
}
