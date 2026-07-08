<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Category;
use App\Models\Project;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TrendingController extends Controller
{
    /**
     * How far back "trending" volume is measured. Tune as needed.
     */
    protected int $windowDays = 30;

    public function index(Request $request)
    {
        $trendingSkills     = $this->getTrendingSkills();
        $trendingCategories = $this->getTrendingCategories();
        $trendingProjects   = $this->getTrendingProjects();
        $trendingProducts   = $this->getTrendingProducts();
        $trendingTalent     = $this->getTrendingTalent();

        // Feeds the scrolling ticker at the top of the page
        $tickerItems = $trendingSkills->take(10);

        // Simple aggregate counts for the tab badges
        $counts = [
            'all'        => $trendingSkills->count() + $trendingCategories->count() + $trendingProjects->count() + $trendingProducts->count() + $trendingTalent->count(),
            'skills'     => $trendingSkills->count(),
            'categories' => $trendingCategories->count(),
            'projects'   => $trendingProjects->count(),
            'products'   => $trendingProducts->count(),
            'talent'     => $trendingTalent->count(),
        ];

        return view('user-page.trending', compact(
            'trendingSkills',
            'trendingCategories',
            'trendingProjects',
            'trendingProducts',
            'trendingTalent',
            'tickerItems',
            'counts'
        ));
    }

    /**
     * Trending skills — ranked by how many talents have added the skill recently.
     * Adjust the relationship name ('talents') to match your Skill model.
     */
    protected function getTrendingSkills()
    {
        try {
            return Skill::query()
                ->withCount(['talents as recent_talents_count' => function ($q) {
                    $q->where('user_skill.created_at', '>=', now()->subDays($this->windowDays));
                }])
                ->withCount('talents')
                ->orderByDesc('recent_talents_count')
                ->limit(12)
                ->get()
                ->map(fn ($skill) => $this->attachTrend($skill, $skill->recent_talents_count ?? 0));
        } catch (\Throwable $e) {
            Log::warning('[Trending] skills query failed: '.$e->getMessage());
            return collect();
        }
    }

    /**
     * Trending categories — ranked by active project volume within the window.
     * Adjust the relationship name ('projects') to match your Category model.
     */
    protected function getTrendingCategories()
    {
        try {
            return Category::query()
                ->withCount(['projects' => function ($q) {
                    $q->where('created_at', '>=', now()->subDays($this->windowDays));
                }])
                ->orderByDesc('projects_count')
                ->limit(8)
                ->get()
                ->map(fn ($category) => $this->attachTrend($category, $category->projects_count ?? 0));
        } catch (\Throwable $e) {
            Log::warning('[Trending] categories query failed: '.$e->getMessage());
            return collect();
        }
    }

    /**
     * Trending projects — most proposals / views in the window, newest first as tiebreaker.
     * Adjust column names (proposals_count, views_count) to match your Project model.
     */
    protected function getTrendingProjects()
    {
        try {
            return Project::query()
                ->with(['client', 'category', 'skills'])
                ->where('status', 'open')
                ->orderByDesc('proposals_count')
                ->orderByDesc('created_at')
                ->limit(9)
                ->get()
                ->map(fn ($project) => $this->attachTrend($project, $project->proposals_count ?? 0));
        } catch (\Throwable $e) {
            Log::warning('[Trending] projects query failed: '.$e->getMessage());
            return collect();
        }
    }

    /**
     * Trending products — highest sales/rating in the window.
     * Adjust column names (sales_count, rating) to match your Product model.
     */
    protected function getTrendingProducts()
    {
        try {
            return Product::query()
                ->with('seller')
                ->where('is_active', true)
                ->orderByDesc('sales_count')
                ->orderByDesc('rating')
                ->limit(9)
                ->get()
                ->map(fn ($product) => $this->attachTrend($product, $product->sales_count ?? 0));
        } catch (\Throwable $e) {
            Log::warning('[Trending] products query failed: '.$e->getMessage());
            return collect();
        }
    }

    /**
     * Trending talent — most hires/profile views in the window, highest rated as tiebreaker.
     * Adjust the role scope ('talent') and column names to match your User model.
     */
    protected function getTrendingTalent()
    {
        try {
            return User::query()
                ->where('role', 'talent')
                ->where('is_active', true)
                ->with('topSkill')
                ->orderByDesc('hires_count')
                ->orderByDesc('rating')
                ->limit(9)
                ->get()
                ->map(fn ($talent) => $this->attachTrend($talent, $talent->hires_count ?? 0));
        } catch (\Throwable $e) {
            Log::warning('[Trending] talent query failed: '.$e->getMessage());
            return collect();
        }
    }

    /**
     * Attaches a rank position and a trend delta (% change badge) to a model instance.
     * Replace the deterministic placeholder with a real week-over-week comparison
     * once you're tracking historical snapshots (e.g. a daily trending_snapshots table).
     */
    protected function attachTrend($model, int $volume)
    {
        static $rank = [];
        $bucket = get_class($model);
        $rank[$bucket] = ($rank[$bucket] ?? 0) + 1;

        $seed = (($model->id ?? 1) * 13 + $volume * 3) % 45;
        $model->trend_rank  = $rank[$bucket];
        $model->trend_delta = $seed - 12; // roughly -12 .. 32
        $model->trend_up    = $model->trend_delta >= 0;

        return $model;
    }
}