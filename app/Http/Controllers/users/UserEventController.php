<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class UserEventController extends Controller
{
    public function index()
    {
        $events = Event::with('tickets')->where('event_date', '>=', now())->get();
        return view('user-page.events.index', compact('events'));
    }

    public function show($id)
    {
        $event = Event::where('id', $id)
            ->with('tickets') // relationship: hasMany(EventTicket)
            ->firstOrFail();

        return view('user-page.events.show', compact('event'));
    }
}
