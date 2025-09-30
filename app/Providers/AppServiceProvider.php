<?php

namespace App\Providers;

use App\Models\TalentFeedback;
use App\Observers\TalentFeedbackObserver;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Paginator::useBootstrapFive();
        TalentFeedback::observe(TalentFeedbackObserver::class);
    }
}
