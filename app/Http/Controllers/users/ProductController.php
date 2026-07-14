<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('seller', 'category', 'reviews')->latest()->paginate(9);
        $categories = ProductCategory::withCount('products')->get();
        $featuredProducts = Product::where('status', 'active')
            ->latest()
            ->take(5)
            ->get();
        return Inertia::render('UserPage/Products', compact('products', 'categories', 'featuredProducts'));
    }

    public function details($id)
    {
        $product = Product::with('reviews')->findOrFail($id);
        return Inertia::render('UserPage/ProductDetails', compact('product'));
    }

    // Show all products by category
    public function showCategory($id)
    {
        $category = ProductCategory::findOrFail($id);
        $products = Product::where('product_category_id', $id)->get();
        $categories = ProductCategory::withCount('products')->get();
        return Inertia::render('UserPage/ProductsByCategory', compact('category', 'products', 'categories'));
    }

    /**
     * Store a new review
     */
    public function store(Request $request, $productId)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $product = Product::findOrFail($productId);

        $product->reviews()->create([
            'user_id' => auth()->id(),
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        return redirect()->back()->with('success', 'Your review has been submitted!');
    }
}
