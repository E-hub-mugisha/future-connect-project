<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuthenticatedSessionController extends Controller
{
    public function create(): View
    {
        return view('auth.login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        $user = Auth::user();

        // Auto-start trial if intended
        if (session()->pull('start_trial_after_login')) {
            app(\App\Http\Controllers\SubscriptionController::class)
                ->activate($request);
        }

        // Admin always goes to dashboard
        if ($user->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }

        // Explicit redirect_to parameter
        if ($request->filled('redirect_to')) {
            $redirectTo = $request->redirect_to;

            if ($this->isSafeRedirect($redirectTo)) {
                return redirect()->to($redirectTo);
            }
        }

        // Non-admin users return to intended URL
        return redirect()->intended(route('user.dashboard'));
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Ensure redirect_to is a relative path or same-origin URL
     * to prevent open redirect attacks.
     */
    private function isSafeRedirect(string $url): bool
    {
        // Allow relative paths like /jobs/5 or /dashboard
        if (str_starts_with($url, '/') && !str_starts_with($url, '//')) {
            return true;
        }

        // Allow same-origin absolute URLs
        $parsed = parse_url($url);
        $appHost = parse_url(config('app.url'), PHP_URL_HOST);

        return isset($parsed['host']) && $parsed['host'] === $appHost;
    }
}
