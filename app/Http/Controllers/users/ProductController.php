<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('seller')->latest()->get();
        return view('user-page.products.index', compact('products'));
    }

    public function details($id)
    {
        $product = Product::findOrFail($id);
        return view('user-page.products.details', compact('product'));
    }
}
