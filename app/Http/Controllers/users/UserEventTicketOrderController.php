<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\EventTicket;
use App\Models\TicketOrder;
use Illuminate\Http\Request;

class UserEventTicketOrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $ticket = EventTicket::findOrFail($validated['ticket_id']);
        $total = $ticket->price * $validated['quantity'];

        $order = TicketOrder::create([
            'user_id' => auth()->id(),
            'total' => $total,
            'status' => 'pending',
        ]);

        $order->items()->create([
            'ticket_id' => $ticket->id,
            'quantity' => $validated['quantity'],
            'price' => $ticket->price,
        ]);

        return redirect()->route('ticket.orders.show', $order);
    }

    public function show(TicketOrder $order)
    {
        $order->load('items.ticket.event');
        return view('user-page.events.orders-show', compact('order'));
    }
}
