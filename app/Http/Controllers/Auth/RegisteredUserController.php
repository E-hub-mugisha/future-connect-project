<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Seller;
use App\Models\Talent;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            'categories' => Category::select('id', 'name')->orderBy('name')->get(),
        ]);
    }

    /**
     * Handle an incoming registration request.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'role' => ['required', Rule::in(['user', 'talent', 'seller'])],

            // Shared fields
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'phone' => ['nullable', 'string', 'max:20'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'terms' => ['accepted'],

            // Talent-only fields
            'talent_address' => ['required_if:role,talent', 'nullable', 'string', 'max:255'],
            'talent_language' => ['required_if:role,talent', 'nullable', 'string', 'max:100'],
            'category_id' => ['required_if:role,talent', 'nullable', 'exists:categories,id'],
            'talent_description' => ['nullable', 'string', 'max:2000'],

            // Seller-only fields
            'company_name' => ['required_if:role,seller', 'nullable', 'string', 'max:255'],
            'seller_address' => ['required_if:role,seller', 'nullable', 'string', 'max:255'],
            'seller_description' => ['nullable', 'string', 'max:2000'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);

        if ($validated['role'] === 'talent') {
            Talent::create([
                'user_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $validated['phone'] ?? null,
                'address' => $validated['talent_address'],
                'language' => $validated['talent_language'],
                'category_id' => $validated['category_id'],
                'description' => $validated['talent_description'] ?? null,
                'status' => 'pending',
            ]);
        }

        if ($validated['role'] === 'seller') {
            Seller::create([
                'user_id' => $user->id,
                'company_name' => $validated['company_name'],
                'email' => $user->email,
                'phone' => $validated['phone'] ?? null,
                'address' => $validated['seller_address'],
                'description' => $validated['seller_description'] ?? null,
                'status' => 'pending',
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('user.home', absolute: false));
    }
}