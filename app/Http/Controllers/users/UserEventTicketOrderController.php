<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Mail\EventTicketMail;
use App\Models\EventTicket;
use App\Models\TicketCode;
use App\Models\TicketOrder;
use App\Models\TicketOrderItem;
use App\Models\TicketPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;
use PHPUnit\Framework\Attributes\Ticket;

class UserEventTicketOrderController extends Controller
{
    /**
     * Handle checkout form submission and show order preview.
     */
    public function preview(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:event_tickets,id',
            'quantity' => 'required|integer|min:1',
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|email',
            'customer_phone' => 'required|string|max:20',
            'attendees' => 'array',
        ]);

        $ticket = EventTicket::with('event')->findOrFail($request->ticket_id);

        $quantity = $request->quantity;
        $totalAmount = $ticket->price * $quantity;

        // Store order preview temporarily in session
        session([
            'order_preview' => [
                'ticket_id' => $ticket->id,
                'quantity' => $quantity,
                'customer_name' => $request->customer_name,
                'customer_email' => $request->customer_email,
                'customer_phone' => $request->customer_phone,
                'attendees' => $request->attendees ?? [],
                'total_amount' => $totalAmount,
            ]
        ]);

        return view('user-page.events.order-preview', compact('ticket', 'quantity', 'totalAmount'));
    }

    /**
     * Confirm and proceed to payment (stub for now).
     */
    public function checkout(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:event_tickets,id',
            'quantity' => 'required|integer|min:1',
            'attendees' => 'required|array|min:1',
            'attendees.*' => 'required|string',
            'customer_name' => 'required|string',
            'customer_email' => 'required|email',
            'customer_phone' => 'required|string',
            'total_amount' => 'required|numeric',
        ]);

        // 2️⃣ Get the ticket
        $ticket = EventTicket::findOrFail($request->ticket_id);

        // 3️⃣ Check ticket availability
        if ($request->quantity > ($ticket->quantity - $ticket->sold)) {
            return back()->withErrors(['quantity' => 'Not enough tickets available.']);
        }

        // Create order record (unpaid)
        $order = TicketOrder::create([
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'total_amount' => $request->total_amount,
            'payment_status' => 'pending',
        ]);

        // 5️⃣ Create order items and ticket codes
        foreach ($request->attendees as $attendee) {
            // Each attendee is one ticket
            $orderItem = $order->items()->create([
                'ticket_order_id' => $order->id, // ✅ use the correct column name
                'ticket_id' => $ticket->id,
                'attendee_name' => $attendee,
                'quantity' => 1,
                'price' => $ticket->price,
            ]);

            // Generate unique ticket code
            TicketCode::create([
                'order_item_id' => $orderItem->id,
                'code' => strtoupper(uniqid('TCKT')),
            ]);
        }

        // 6️⃣ Update ticket sold count
        $ticket->increment('sold', $request->quantity);

        // 7️⃣ Redirect to order summary or payment page
        return redirect()->route('user.ticket.order-summary', $order->id)
            ->with('success', 'Order created! Proceed to payment.');
    }

    public function summary(TicketOrder $order)
    {
        $order->load('items.ticket.event'); // eager load related data
        return view('user-page.events.order-summary', compact('order'));
    }

    public function callback(Request $request)
    {
        $tx_ref = $request->get('tx_ref'); // e.g., "5-12-1721123456789"
        $status = $request->get('status');
        $order_id = $request->get('order_id');
        $data = $request->get('data', []);

        // Check if the transaction already exists
        if (TicketPayment::where('transaction_id', $tx_ref)->exists()) {
            $order = TicketOrder::findOrFail($order_id);
            return redirect()->route('order.tickets', $order->id)->with('info', 'Payment already processed.');
        }

        $order = TicketOrder::findOrFail($order_id);

        // ✅ Save payment record
        TicketPayment::updateOrCreate([
            'transaction_id' => $tx_ref,
            'order_id' => $order->id,
            'status' => $status,
            'amount' => $order->total_amount,
            'currency' => 'RWF',
            'payment_method' => 'Flutterwave',
            'processor_response' => $status,
            'meta' => $request->all(),
        ]);

        // ✅ Update order
        $order->update([
            'payment_status' => 'paid',
            'transaction_id' => $data['transaction_id'] ?? $tx_ref,
        ]);

        if ($status === 'successful') {

            // ✅ Send tickets to email
            $pdfs = [];

            foreach ($order->items as $item) {
                $pdf = Pdf::loadView('user-page.events.pdf', compact('item'))->output();
                $pdfs[] = [
                    'filename' => 'ticket_' . $item->id . '.pdf',
                    'content' => $pdf,
                ];
            }

            Mail::to($order->customer_email)->send(new EventTicketMail($order, $pdfs));

            return redirect()->route('order.tickets', $order->id)->with('success', 'Payment successful! Your tickets are confirmed.');
        }

        return redirect()->route('user.ticket.order-summary', $order->id)->with('error', 'Payment verification failed. Please try again.');
    }

    // Show all tickets after payment success
    public function showTicket($id)
    {
        $order = TicketOrder::with('items.ticket.event', 'items.codes')->findOrFail($id);

        return view('user-page.events.ticket-show', compact('order'));
    }

    // Generate individual ticket PDF
    public function downloadTicket($id)
    {
        $item = TicketOrderItem::with('ticket.event', 'codes')->findOrFail($id);

        $pdf = Pdf::loadView('user-page.events.pdf', compact('item'));

        return $pdf->download('ticket_' . $item->id . '.pdf');
    }

    public function show(TicketOrder $order)
    {
        $order->load('items.ticket.event');
        return view('user-page.events.orders-show', compact('order'));
    }
}
