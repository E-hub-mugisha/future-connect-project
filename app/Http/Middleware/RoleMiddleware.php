<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle($request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();

        if (in_array($user->role, $roles)) {
            return $next($request);
        }

        // 🚀 Redirect user back to their own dashboard
        return redirect()->route($this->redirectTo($user->role));
    }

    /**
     * Decide dashboard route based on role.
     */
    protected function redirectTo($role)
    {
        return match ($role) {
            'admin'  => 'admin.dashboard',
            'talent' => 'talent.dashboard',
            'buyer'  => 'buyer.dashboard',
            default  => 'user.home',
        };
    }
}
