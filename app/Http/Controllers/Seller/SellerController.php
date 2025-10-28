<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    // Display all sellers (admin only)
    public function index()
    {
        $this->authorize('viewAny', Seller::class);
        $sellers = Seller::latest()->get();
        return view('admin.sellers.index', compact('sellers'));
    }

    // Show seller registration form
    public function create()
    {
        return view('seller.create');
    }

    // Store new seller registration
    public function store(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'email' => 'required|email|unique:sellers',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        Seller::create([
            'company_name' => $request->company_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'description' => $request->description,
            'status' => 'pending',
        ]);

        return redirect()->back()->with('success', 'Seller application submitted. Awaiting approval.');
    }


}
