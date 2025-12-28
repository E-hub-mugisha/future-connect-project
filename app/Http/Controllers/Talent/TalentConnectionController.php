<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentConnectionController extends Controller
{
    public function connectionRequests()
    {
        // Get current user's talent profile
        $talent = Auth::user()->talent; // assuming User hasOne Talent

        if (!$talent) {
            return redirect()->back()->with('error', 'You don’t have a talent profile.');
        }

        // Fetch all connection requests sent TO this talent
        $connections = TalentConnection::with('requester', 'payment')
            ->where('talent_id', $talent->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return view('talent-pages.connections.index', compact('connections'));
    }
}
