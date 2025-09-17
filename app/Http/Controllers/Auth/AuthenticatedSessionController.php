<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\LoginActivity;
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

        // The redirect will now be handled by authenticated()
        return $this->authenticated($request, Auth::user());
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

    /**
     * After user is authenticated.
     */
    protected function authenticated(Request $request, $user): RedirectResponse
    {
        // Log login activity
        LoginActivity::create([
            'user_id'     => $user->id,
            'ip_address'  => $request->ip(),
            'user_agent'  => $request->userAgent(),
            'logged_in_at' => now(),
        ]);

        // Redirect based on role
        switch ($user->role) {
            case 'admin':
                return redirect()->route('admin.dashboard');   // 👈 /admin/dashboard
            case 'talent':
                return redirect()->route('talent.dashboard'); // 👈 /talent/page/dashboard
            default:
                return redirect()->route('dashboard');        // 👈 fallback for normal users
        }
    }
}
