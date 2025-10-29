<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SellerPanelController extends Controller
{
    public function index()
    {
        $seller = Seller::where('user_id', Auth::id())->first();

        if (!$seller) {
            return redirect()->route('home')->with('error', 'You are not registered as a seller.');
        }

        $products = Product::where('seller_id', $seller->id)->get();

        $stats = [
            'total_products' => $products->count(),
            'active_products' => $products->where('status', 'active')->count(),
            'inactive_products' => $products->where('status', 'inactive')->count(),
            'total_stock' => $products->sum('stock'),
        ];

        return view('sellers-page.dashboard.index', compact('seller', 'stats', 'products'));
    }
}
