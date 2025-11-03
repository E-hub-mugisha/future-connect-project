<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminEventController extends Controller
{
    public function index()
    {
        $events = Event::with('tickets')->latest()->paginate(10);
        return view('admin-pages.events.index', compact('events'));
    }

    public function show(Event $event)
    {
        $event->load(['tickets.orders']);
        return view('admin-pages.events.show', compact('event'));
    }

    public function create()
    {
        return view('admin-pages.events.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string|max:50',
            'event_date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'venue' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $validated['organizer_id'] = auth()->id();

        $event_date = $request->event_date; // e.g. '2025-11-04'
        $start_time = $request->start_time; // e.g. '22:52'
        $end_time = $request->end_time;     // e.g. '12:52'

        $validated['start_time'] = $event_date . ' ' . $start_time . ':00';
        $validated['end_time'] = $event_date . ' ' . $end_time . ':00';

        Event::create($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event created successfully!');
    }

    public function edit(Event $event)
    {
        return view('admin-pages.events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'type' => 'required|string|max:50',
            'event_date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'venue' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($event->image) {
                Storage::disk('public')->delete($event->image);
            }
            $validated['image'] = $request->file('image')->store('events', 'public');
        }

        $event_date = $request->event_date; // e.g. '2025-11-04'
        $start_time = $request->start_time; // e.g. '22:52'
        $end_time = $request->end_time;     // e.g. '12:52'

        $validated['start_time'] = $event_date . ' ' . $start_time . ':00';
        $validated['end_time'] = $event_date . ' ' . $end_time . ':00';


        $event->update($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event updated successfully!');
    }

    public function destroy(Event $event)
    {
        if ($event->image) {
            Storage::disk('public')->delete($event->image);
        }

        $event->delete();

        return redirect()->route('admin.events.index')->with('success', 'Event deleted successfully!');
    }

    /**
     * Store a new ticket
     */
    public function storeTicket(Request $request)
    {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'type' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:1',
        ]);
        $event = Event::findOrFail($validated['event_id']);
        EventTicket::create($validated);

        return redirect()->route('admin.events.show', $event->id)
            ->with('success', 'Ticket created successfully.');
    }

    /**
     * Update an existing ticket
     */
    public function updateTicket(Request $request, EventTicket $ticket)
    {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'type' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:1',
        ]);

        $ticket->update($validated);

        return redirect()->route('admin.events.show', $ticket->event_id)
            ->with('success', 'Ticket updated successfully.');
    }

    /**
     * Delete a ticket
     */
    public function destroyTicket(EventTicket $ticket)
    {
        $eventId = $ticket->event_id;
        $ticket->delete();

        return redirect()->route('admin.events.show', $eventId)
            ->with('success', 'Ticket deleted successfully.');
    }

    public function ticketOrders($ticketId)
    {
        $ticket = EventTicket::with('orders.user')->findOrFail($ticketId);
        $orders = $ticket->orders()->latest()->get();

        return view('admin-pages.events.tickets-orders', compact('ticket', 'orders'));
    }
}
