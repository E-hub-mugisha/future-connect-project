<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Inertia\Inertia;
class AdminTalentConnectionController extends Controller
{
    public function index()
    {
        // eager load related models for performance
        $connections = TalentConnection::with(['talent'])
            ->latest()
            ->paginate(10);

        return Inertia::render('AdminPage/Talents/ConnectionIndex', compact('connections'));
    }

    public function show($id)
    {
        $connection = TalentConnection::with(['talent'])
            ->findOrFail($id);

        return Inertia::render('AdminPage/Talents/ConnectionShow', compact('connection'));
    }

    public function respond(Request $request, $id)
    {
        $request->validate([
            'response' => 'required|string|max:2000',
        ]);

        $connection = TalentConnection::findOrFail($id);
        $connection->response = $request->response;
        $connection->save();

        // (Optional) Notify requester by email or notification
        // Notification::send($connection->requester, new ConnectionResponded($connection));

        return back()->with('success', 'Your response has been sent to the requester.');
    }

    public function accept($id)
    {
        $connection = TalentConnection::findOrFail($id);
        $connection->status = 'accepted';
        $connection->save();

        // (Optional) Notify requester about acceptance
        // Notification::send($connection->requester, new ConnectionAccepted($connection));

        return back()->with('success', 'Connection request has been accepted.');
    }
}
