<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SellerApprovedMail;
use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SellerAdminController extends Controller
{
    // Show all sellers
    public function index()
    {
        $sellers = Seller::latest()->get();
        return Inertia::render('AdminPage/Sellers/Index', compact('sellers'));
    }

    // Show single seller details (optional for modal)
    public function show(Seller $seller)
    {
        return Inertia::render('AdminPage/Sellers/Show', [
            'seller' => $seller->loadCount('products')->load('products:id,seller_id,name,price,status'),
        ]);
    }

    // Update seller (status, info)
    public function update(Request $request, Seller $seller)
    {
        $request->validate([
            'status' => 'required|in:pending,approved,rejected',
            'company_name' => 'nullable|string|max:255',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $seller->update($request->only(['status', 'company_name', 'email', 'phone', 'address', 'description']));

        return redirect()->back()->with('success', 'Seller updated successfully!');
    }

    // Delete seller
    public function destroy(Seller $seller)
    {
        $seller->delete();
        return redirect()->back()->with('success', 'Seller deleted successfully!');
    }

    // Update seller status only
    public function updateStatus(Request $request, Seller $seller)
    {
        $request->validate([
            'status' => 'required|in:pending,approved,rejected',
        ]);

        $oldStatus = $seller->status;

        $seller->status = $request->status;
        $seller->save();

        // If approved and wasn't approved before
        if ($request->status === 'approved' && $oldStatus !== 'approved') {

            // Check if a user already exists for this email
            $existingUser = User::where('email', $seller->email)->first();

            if (!$existingUser) {
                // Generate random password
                $password = \Illuminate\Support\Str::random(10);

                // Create user account
                $user = User::create([
                    'name' => $seller->company_name,
                    'email' => $seller->email,
                    'password' => Hash::make($password),
                    'role' => 'seller', // Make sure your users table has 'role'
                ]);

                // Update seller with user_id
                $seller->user_id = $user->id;
                $seller->save();

                // Send email with credentials
                Mail::to($seller->email)->send(new SellerApprovedMail($user, $password));
            } else {
                // If user already exists, just update user_id on seller
                $seller->user_id = $existingUser->id;
                $seller->save();
            }
        }

        return redirect()->back()->with('success', 'Seller status updated successfully!');
    }
}
