<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Category;
use App\Models\Project;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

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
        $recentlyAdded      = $this->getRecentlyAdded();

        // Feeds the scrolling ticker at the top of the page
        $tickerItems = $trendingSkills->take(10);

        // Simple aggregate counts for the tab badges
        $counts = [
            'all'        => $trendingSkills->count() + $trendingCategories->count() + $trendingProjects->count() + $trendingProducts->count() + $trendingTalent->count(),
            'recent'     => $recentlyAdded->count(),
            'skills'     => $trendingSkills->count(),
            'categories' => $trendingCategories->count(),
            'projects'   => $trendingProjects->count(),
            'products'   => $trendingProducts->count(),
            'talent'     => $trendingTalent->count(),
        ];

        return Inertia::render('UserPage/Trending', compact(
            'trendingSkills',
            'trendingCategories',
            'trendingProjects',
            'trendingProducts',
            'trendingTalent',
            'recentlyAdded',
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
     * Recently added — a single, unified "just landed" feed pulled from every
     * model type and interleaved by created_at. This is what powers the new
     * "Just Added" tab and is intentionally separate from the trending
     * (volume-ranked) queries above, since "newest" and "most popular" are
     * different signals and shouldn't be conflated.
     *
     * Adjust the per-type pull size (6 each below) and the overall $limit to
     * taste. Everything is normalized into a flat shape the frontend can
     * render without needing to know which Eloquent model it came from.
     */
    protected function getRecentlyAdded(int $limit = 12)
    {
        try {
            $items = collect();

            Skill::query()
                ->withCount('talents')
                ->latest()
                ->limit(6)
                ->get()
                ->each(function ($skill) use (&$items) {
                    $items->push([
                        'id'         => $skill->id,
                        'type'       => 'skill',
                        'type_label' => 'Skill',
                        'name'       => $skill->name,
                        'subtitle'   => ($skill->talents_count ?? 0).' talents offer this',
                        'slug'       => $skill->slug ?? $skill->id,
                        'created_at' => $skill->created_at,
                    ]);
                });

            Project::query()
                ->with('category')
                ->where('status', 'open')
                ->latest()
                ->limit(6)
                ->get()
                ->each(function ($project) use (&$items) {
                    $items->push([
                        'id'         => $project->id,
                        'type'       => 'project',
                        'type_label' => 'Project',
                        'name'       => $project->title,
                        'subtitle'   => $project->category->name ?? 'General',
                        'slug'       => $project->slug ?? $project->id,
                        'created_at' => $project->created_at,
                    ]);
                });

            Product::query()
                ->with('seller')
                ->where('is_active', true)
                ->latest()
                ->limit(6)
                ->get()
                ->each(function ($product) use (&$items) {
                    $items->push([
                        'id'         => $product->id,
                        'type'       => 'product',
                        'type_label' => 'Product',
                        'name'       => $product->title,
                        'subtitle'   => 'RWF '.number_format($product->price ?? 0),
                        'slug'       => $product->slug ?? $product->id,
                        'created_at' => $product->created_at,
                    ]);
                });

            User::query()
                ->where('role', 'talent')
                ->where('is_active', true)
                ->with('topSkill')
                ->latest()
                ->limit(6)
                ->get()
                ->each(function ($talent) use (&$items) {
                    $items->push([
                        'id'         => $talent->id,
                        'type'       => 'talent',
                        'type_label' => 'Talent',
                        'name'       => $talent->name,
                        'subtitle'   => $talent->topSkill->name ?? $talent->title ?? 'Freelance professional',
                        'slug'       => $talent->slug ?? $talent->id,
                        'created_at' => $talent->created_at,
                    ]);
                });

            return $items
                ->sortByDesc(fn ($item) => $item['created_at'])
                ->take($limit)
                ->values();
        } catch (\Throwable $e) {
            Log::warning('[Trending] recently-added query failed: '.$e->getMessage());
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