<?php

namespace App\Listeners;

use App\Models\UserActivity;
use Illuminate\Auth\Events\Logout;

class LogUserLogout
{
    public function handle(Logout $event): void
    {
        if (!$event->user) {
            return;
        }

        UserActivity::create([
            'user_id' => $event->user->id,
            'type' => 'logout',
            'description' => 'User signed out.',
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'created_at' => now(),
        ]);
    }
}