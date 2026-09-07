<?php

namespace App\Listeners;

use App\Models\UserActivity;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Str;

class LogUserLogin
{
    public function handle(Login $event): void
    {
        $request = request();

        UserActivity::create([
            'user_id' => $event->user->id,
            'type' => 'login',
            'description' => 'User signed in successfully.',
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'device' => $this->detectDevice($request->userAgent()),
            'browser' => $this->detectBrowser($request->userAgent()),
            'platform' => $this->detectPlatform($request->userAgent()),
            'created_at' => now(),
        ]);
    }

    private function detectDevice(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown';
        }

        return preg_match('/Mobile|Android|iPhone|iPad/i', $userAgent)
            ? 'Mobile'
            : 'Desktop';
    }

    private function detectBrowser(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown';
        }

        return match (true) {
            Str::contains($userAgent, 'Edg') => 'Microsoft Edge',
            Str::contains($userAgent, 'Chrome') => 'Google Chrome',
            Str::contains($userAgent, 'Firefox') => 'Mozilla Firefox',
            Str::contains($userAgent, 'Safari') => 'Safari',
            default => 'Other',
        };
    }

    private function detectPlatform(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown';
        }

        return match (true) {
            Str::contains($userAgent, 'Windows') => 'Windows',
            Str::contains($userAgent, 'Mac OS') => 'macOS',
            Str::contains($userAgent, 'Android') => 'Android',
            Str::contains($userAgent, 'iPhone') => 'iOS',
            Str::contains($userAgent, 'Linux') => 'Linux',
            default => 'Other',
        };
    }
}