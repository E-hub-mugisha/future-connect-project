<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\ProductStatusMail;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Seller;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('seller')->latest()->get();
        return view('admin-pages.products.index', compact('products'));
    }

    public function show($id)
    {
        $product = Product::with('seller')->findOrFail($id);
        return view('admin-pages.products.details', compact('product'));
    }

    public function create()
    {
        $sellers = Seller::all();
        $categories = ProductCategory::all();
        return view('admin-pages.products.create', compact('sellers', 'categories'));
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $sellers = Seller::all();
        return view('admin-pages.products.edit', compact('product', 'sellers'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:190',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|max:2048',
            'product_category_id' => 'required|exists:product_categories,id',
            'seller_id' => 'required|exists:sellers,id'
        ]);

        $talentImage = null;

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/products/');

            // Ensure folder exists
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            // Create a safe, unique file name
            $productImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Move uploaded file
            $image->move($path, $productImage);
        }

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'image' => $productImage,
            'product_category_id' => $request->product_category_id,
            'seller_id' => $request->seller_id,
            'status' => 'active'
        ]);

        return redirect()
            ->route('admin.products.index')
            ->with('success', 'Product created successfully.');
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:190',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|max:2048',
            'product_category_id' => 'required|exists:product_categories,id'
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/products/');

            // Ensure folder exists
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            // Create a safe, unique file name
            $productImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();

            // Move uploaded file
            $image->move($path, $productImage);
        }
        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'image' => isset($productImage) ? $productImage : $product->image,
            'product_category_id' => $request->product_category_id
        ]);

        return redirect()
            ->route('admin.products.index')
            ->with('success', 'Product updated successfully.');
    }

    public function updateStatus(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->status = $request->status;
        $product->save();

        // Send email to seller if approved or rejected
        if (in_array($request->status, ['approved', 'rejected'])) {
            Mail::to($product->seller->email)->send(new ProductStatusMail($product));
        }

        return redirect()->back()->with('success', 'Product status updated successfully.');
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->back()->with('success', 'Product deleted successfully.');
    }
}
