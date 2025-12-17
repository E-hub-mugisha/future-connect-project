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
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        $user = Auth::user();

        // ✅ Auto-start trial if intended
        if (session()->pull('start_trial_after_login')) {
            app(\App\Http\Controllers\SubscriptionController::class)
                ->activate(request());
        }

        // ✅ Allow custom redirect via ?redirect_to=...
        if ($request->has('redirect_to')) {
            return redirect()->to($request->redirect_to);
        }

        // ✅ Default dashboard per role
        $defaultRedirect = match ($user->role) {
            'admin'  => route('admin.dashboard'),
            'agent'  => route('agent.dashboard'),
            'talent' => route('talent.dashboard'),
            'seller' => route('seller.dashboard'),
            default  => route('user.dashboard'),
        };

        // ✅ Go back to the saved intended URL (protected route)
        return redirect()->intended($defaultRedirect);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
