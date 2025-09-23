<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        // Abort if not logged in
        if (!$user) {
            return redirect()->route('login')
                ->with('error', 'Please login to continue.');
        }

        // Check if user role is in allowed roles
        if (!in_array($user->role, $roles)) {
            return redirect()->back()
                ->with('error', 'You don\'t have permission to access this page.');
        }

        return $next($request);
    }
}
