<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('seller', 'category')->latest()->get();
        $categories = ProductCategory::withCount('products')->get();
        return view('user-page.products.index', compact('products', 'categories'));
    }

    public function details($id)
    {
        $product = Product::findOrFail($id);
        return view('user-page.products.details', compact('product'));
    }

    // Show all products by category
    public function showCategory($id)
    {
        $category = ProductCategory::findOrFail($id);
        $products = Product::where('product_category_id', $id)->get();
        $categories = ProductCategory::withCount('products')->get();
        return view('user-page.products.category', compact('category', 'products', 'categories'));
    }
}
