<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::query()
            ->withCount('items')
            ->with('user:id,name,email')
            ->when($request->status, fn ($q, $status) => $q->where('status', $status))
            ->when($request->search, function ($q, $search) {
                $q->where(function ($q) use ($search) {
                    $q->where('order_number', 'like', "%{$search}%")
                        ->orWhere('customer_name', 'like', "%{$search}%")
                        ->orWhere('customer_email', 'like', "%{$search}%")
                        ->orWhere('customer_phone', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('AdminPage/Orders/Index', [
            'orders' => $orders,
            'filters' => $request->only('status', 'search'),
            'statusCounts' => [
                'pending' => Order::where('status', 'pending')->count(),
                'processing' => Order::where('status', 'processing')->count(),
                'completed' => Order::where('status', 'completed')->count(),
                'cancelled' => Order::where('status', 'cancelled')->count(),
            ],
        ]);
    }

    public function show(Order $order)
    {
        $order->load(['items.product', 'user:id,name,email', 'confirmedBy:id,name']);

        return Inertia::render('AdminPage/Orders/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Confirm a pending order — moves it to "processing" and records who/when.
     * Kept separate from a generic status update so the confirm action always
     * has a clear audit trail (confirmed_at / confirmed_by), even though
     * updateStatus() below can also move an order to "processing" manually.
     */
    public function confirm(Order $order)
    {
        if ($order->status !== 'pending') {
            return back()->withErrors(['status' => 'Only pending orders can be confirmed.']);
        }

        $order->update([
            'status' => 'processing',
            'confirmed_at' => now(),
            'confirmed_by' => Auth::id(),
        ]);

        return back()->with('success', "Order {$order->order_number} confirmed.");
    }

    public function updateStatus(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,processing,completed,cancelled'],
        ]);

        $order->update(['status' => $validated['status']]);

        return back()->with('success', "Order {$order->order_number} marked as {$validated['status']}.");
    }
}