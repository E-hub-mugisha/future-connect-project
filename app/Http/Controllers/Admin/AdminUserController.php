<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('AdminPage/User/Index', compact('users'));
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

    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('AdminPage/User/Show', compact('user'));
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
}
