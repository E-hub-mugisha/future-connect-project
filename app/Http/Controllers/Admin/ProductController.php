<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\ProductStatusMail;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('seller')->latest()->get();
        return view('admin-pages.products.index', compact('products'));
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
