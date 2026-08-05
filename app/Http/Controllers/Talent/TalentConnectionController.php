<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TalentConnectionController extends Controller
{
    /**
     * Display connection requests sent to the logged-in talent.
     */
    public function connectionRequests(Request $request)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $status = $request->input('status');

        $connections = TalentConnection::where('talent_id', $talent->id)
            ->when($status && $status !== 'all', fn ($q) => $q->where('status', $status))
            ->orderByDesc('created_at')
            ->paginate(10)
            ->withQueryString();

        $counts = [
            'all' => TalentConnection::where('talent_id', $talent->id)->count(),
            'pending' => TalentConnection::where('talent_id', $talent->id)->where('status', 'pending')->count(),
            'accepted' => TalentConnection::where('talent_id', $talent->id)->where('status', 'accepted')->count(),
            'declined' => TalentConnection::where('talent_id', $talent->id)->where('status', 'declined')->count(),
        ];

        return Inertia::render('Talent/Connections/Index', [
            'connections' => $connections,
            'counts' => $counts,
            'filters' => ['status' => $status ?? 'all'],
        ]);
    }

    /**
     * Respond to a connection request (accept/decline with an optional message).
     */
    public function respond(Request $request, $id)
    {
        $talent = Auth::user()->talent;

        if (!$talent) {
            return redirect()->back()->with('error', 'You don\'t have a talent profile.');
        }

        $connection = TalentConnection::where('id', $id)
            ->where('talent_id', $talent->id)
            ->firstOrFail();

        $validated = $request->validate([
            'status' => ['required', 'in:accepted,declined'],
            'response' => ['nullable', 'string', 'max:1000'],
        ]);

        $connection->update($validated);

        return redirect()->back()->with('success', 'Response sent successfully.');
    }
}