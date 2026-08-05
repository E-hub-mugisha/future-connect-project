<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Mail\ProductStatusMail;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Seller;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TalentProductController extends Controller
{
    public function index()
    {
        if (!auth()->check()) {
            return redirect()->route('login')->with('message', 'Please login first');
        }

        $user = auth()->user();

        if (!$user->seller) {
            return Inertia::render('Talent/Products/BecomeSeller');
        }

        $products = Product::with(['category', 'seller', 'reviews'])
            ->where('seller_id', $user->seller->id)
            ->latest()
            ->get();

        return Inertia::render('Talent/Products/Index', [
            'products' => $products
        ]);
    }

    public function show($id)
    {
        $product = Product::with(['seller', 'category', 'reviews.user'])->findOrFail($id);

        // Ensure the product belongs to the logged-in seller
        if ($product->seller_id !== auth()->user()->seller->id ?? null) {
            abort(403);
        }

        return Inertia::render('Talent/Products/Show', [
            'product' => $product
        ]);
    }

    public function create()
    {
        $categories = ProductCategory::all();
        $sellerId = auth()->user()->seller->id ?? null;

        return Inertia::render('Talent/Products/Create', [
            'categories' => $categories,
            'sellerId' => $sellerId
        ]);
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $categories = ProductCategory::all();

        return Inertia::render('Talent/Products/Edit', [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    public function storeProduct(Request $request)
    {
        $user = auth()->user();

        if (!$user->seller) {
            return back()->with('error', 'Seller profile not found.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:190',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|max:2048',
            'product_category_id' => 'required|exists:product_categories,id',
            'status' => 'required|in:active,draft',
        ]);

        $productImage = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/products/');

            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            $productImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            $image->move($path, $productImage);
        }

        Product::create([
            'name' => $validated['name'],
            'price' => $validated['price'],
            'description' => $validated['description'],
            'stock' => $validated['stock'],
            'image' => $productImage,
            'product_category_id' => $validated['product_category_id'],
            'seller_id' => $user->seller->id,
            'status' => $validated['status']
        ]);

        return redirect()->route('talent.products.index')->with('success', 'Product created successfully.');
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:190',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|max:2048',
            'product_category_id' => 'required|exists:product_categories,id',
            'status' => 'required|in:active,draft,pending,approved,rejected',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = public_path('image/products/');

            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }

            $productImage = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            $image->move($path, $productImage);
            $validated['image'] = $productImage;
        }

        $product->update($validated);

        return redirect()->route('talent.products.index')->with('success', 'Product updated successfully.');
    }

    public function updateStatus(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $request->validate(['status' => 'required|in:pending,approved,rejected,active,draft']);

        $product->status = $request->status;
        $product->save();

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

    public function becameSeller()
    {
        return Inertia::render('Talent/Products/BecomeSeller');
    }

    public function storeSeller(Request $request)
    {
        $user = Auth::user();
        $talent = Talent::where('user_id', $user->id)->first();

        if (!$talent) {
            return back()->with('error', 'Talent profile not found. Please complete your talent profile first.');
        }

        if (Seller::where('user_id', $user->id)->exists()) {
            return redirect()->route('talent.products.index')->with('info', 'You are already registered as a seller.');
        }

        Seller::create([
            'user_id'      => $user->id,
            'company_name' => $user->name,
            'email'        => $user->email,
            'phone'        => $talent->phone,
            'address'      => $talent->address,
            'description'  => $talent->description,
        ]);

        return redirect()->route('talent.products.index')->with('success', 'Seller account created successfully 🎉');
    }
}
