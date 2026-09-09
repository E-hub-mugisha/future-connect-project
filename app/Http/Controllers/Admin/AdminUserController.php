<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Password;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->whereIn('role', ['admin', 'user'])
            ->latest()
            ->paginate(15)
            ->withQueryString();

        $stats = [
            'total' => User::whereIn('role', ['admin', 'user'])->count(),

            'active' => User::where('role', 'user')
                ->where('active', true)
                ->count(),

            'inactive' => User::where('role', 'user')
                ->where('active', false)
                ->count(),

            'admins' => User::where('role', 'admin')->count(),
        ];

        return Inertia::render('AdminPage/User/Index', [
            'users' => $users,
            'stats' => $stats,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'role'  => ['required', Rule::in(['admin', 'user'])],
            'active' => 'required|boolean',
            'password' => 'required|string|min:6'
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);

        return redirect()->back()->with('success', 'user registered successfully.');
    }

    public function show(User $user)
    {
        $activities = $user->activities()
            ->latest('created_at')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('AdminPage/User/Show', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'role' => $user->role,
                'active' => (bool) $user->active,
                'created_at' => $user->created_at,
            ],

            'activities' => $activities,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => ['required', 'email', Rule::unique('users')->ignore($user->id)],
            'role'  => ['required', Rule::in(['admin', 'user'])],
            'active' => 'required|boolean',
        ]);

        $user->update($validated);

        return redirect()->back()->with('success', 'user updated successfully.');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back()->with('success', 'user deleted successfully.');
    }

    public function sendPasswordReset(User $user)
    {
        $status = Password::sendResetLink([
            'email' => $user->email,
        ]);

        if ($status === Password::RESET_LINK_SENT) {
            return back()->with(
                'success',
                "Password reset link sent to {$user->email}."
            );
        }

        return back()->with(
            'error',
            'Unable to send the password reset link. Please try again.'
        );
    }
}
