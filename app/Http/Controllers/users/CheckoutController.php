<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class CheckoutController extends Controller
{
    public function index()
    {
        $cartItems = Cart::where('user_id', Auth::id())->with('product')->get();
        $grandTotal = $cartItems->sum(fn($item) => $item->quantity * $item->product->price);
        $public_key = config('services.flutterwave.public_key');

        // Use the authenticated user's cart ID or create one if not exist
        $cartId = $cartItems->first()?->cart_id ?? null;

        return view('user-page.checkout.index', compact('cartItems', 'grandTotal', 'public_key', 'cartId'));
    }

    public function paymentCallback(Request $request)
    {
        $status = $request->query('status');
        $txRef = $request->query('tx_ref');
        $cartId = $request->query('cart_id');
        $amount = $request->query('amount');
        $address = $request->query('address');

        // Create Order
        $cartItems = Cart::where('user_id', Auth::id())->with('product')->get();
        $order = Order::create([
            'user_id' => Auth::id(),
            'address' => $address,
            'total' => $amount,
            'payment_ref' => $txRef,
            'payment_status' => 'paid',
        ]);

        foreach ($cartItems as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item->product->id,
                'quantity' => $item->quantity,
                'price' => $item->product->price,
            ]);
        }



        if ($status === 'successful') {

            // Clear cart
            Cart::where('user_id', Auth::id())->delete();
            return redirect()->route('orders.show', $order->id)
                ->with('success', 'Payment successful and order created!');
        }
        return redirect()->route('cart.index')->with('error', 'Payment failed or cancelled.');
    }
}
