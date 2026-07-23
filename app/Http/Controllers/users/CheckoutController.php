<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    
    public function create(Request $request, Product $product)
    {
        $quantity = max(1, (int) $request->query('quantity', 1));

        if ($product->stock !== null && $quantity > $product->stock) {
            $quantity = max(1, $product->stock);
        }

        return Inertia::render('UserPage/ProductCheckout', [
            'product' => $product->load('category', 'seller'),
            'quantity' => $quantity,
        ]);
    }

    public function store(Request $request, Product $product)
    {
        $user = Auth::user();

        $rules = [
            'quantity' => ['required', 'integer', 'min:1'],
            'customer_name' => ['required', 'string', 'max:255'],
            'customer_email' => ['required', 'email', 'max:255'],
            // Rwandan phone: 07[2-9]XXXXXXX
            'customer_phone' => ['required', 'regex:/^07[2-9][0-9]{7}$/'],
            'province' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'sector' => ['required', 'string', 'max:255'],
            'cell' => ['nullable', 'string', 'max:255'],
            'shipping_address' => ['required', 'string', 'max:500'],
            'payment_method' => ['required', 'in:momo,airtel,cash'],
            'payment_phone' => ['required_if:payment_method,momo,airtel', 'nullable', 'regex:/^07[2-9][0-9]{7}$/'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ];

        // Guests must not be able to spoof account ownership through the form
        $validated = $request->validate($rules);

        if ($product->stock !== null && $validated['quantity'] > $product->stock) {
            return back()->withErrors([
                'quantity' => 'Only ' . $product->stock . ' unit(s) left in stock.',
            ])->withInput();
        }

        $order = DB::transaction(function () use ($validated, $product, $user) {
            $subtotal = $product->price * $validated['quantity'];

            $order = Order::create([
                'user_id' => $user?->id, // null => guest order
                'customer_name' => $validated['customer_name'],
                'customer_email' => $validated['customer_email'],
                'customer_phone' => $validated['customer_phone'],
                'province' => $validated['province'],
                'district' => $validated['district'],
                'sector' => $validated['sector'],
                'cell' => $validated['cell'] ?? null,
                'shipping_address' => $validated['shipping_address'],
                'payment_method' => $validated['payment_method'],
                'payment_phone' => $validated['payment_phone'] ?? null,
                'subtotal' => $subtotal,
                'total_amount' => $subtotal, // add shipping/fees here later if needed
                'notes' => $validated['notes'] ?? null,
            ]);

            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $product->id,
                'seller_id' => $product->seller_id,
                'product_name' => $product->name,
                'price' => $product->price,
                'quantity' => $validated['quantity'],
                'subtotal' => $subtotal,
            ]);

            if ($product->stock !== null) {
                $product->decrement('stock', $validated['quantity']);
            }

            return $order;
        });

        return redirect()
            ->route('checkout.success', $order->order_number)
            ->with('success', 'Order placed successfully!');
    }

    public function success(string $orderNumber)
    {
        $order = Order::with('items.product')
            ->where('order_number', $orderNumber)
            ->firstOrFail();

        return Inertia::render('UserPage/CheckoutSuccess', [
            'order' => $order,
        ]);
    }
}