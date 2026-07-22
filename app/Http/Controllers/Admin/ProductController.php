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
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['category:id,name', 'seller:id,company_name,address']);

        if ($status = $request->get('status')) {
            $query->where('status', $status);
        }

        return Inertia::render('AdminPage/Products/Index', [
            'products' => $query->latest()->get(),
            'counts' => [
                'total'    => Product::count(),
                'approved' => Product::where('status', 'approved')->count(),
                'pending'  => Product::where('status', 'pending')->count(),
                'rejected' => Product::where('status', 'rejected')->count(),
            ],
            'filters' => $request->only('status'),
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('AdminPage/Products/Show', [
            'product' => $product->load(['category:id,name', 'seller:id,company_name', 'reviews.user:id,name,profile_image']),
        ]);
    }

    public function create()
    {
        $sellers = Seller::all();
        $categories = ProductCategory::all();
        return Inertia::render('AdminPage/Products/Create', compact('sellers', 'categories'));
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $sellers = Seller::all();
        return Inertia::render('AdminPage/Products/Edit', compact('product', 'sellers'));
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
