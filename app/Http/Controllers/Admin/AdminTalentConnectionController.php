<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Talent;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTalentConnectionController extends Controller
{
    /**
     * Display all talent connection requests.
     */
    public function index(Request $request)
    {
        $query = TalentConnection::with([
            'talent',
            'user',
            'payment',
        ])->latest();

        /*
        |--------------------------------------------------------------------------
        | Search
        |--------------------------------------------------------------------------
        */
        if ($request->filled('search')) {
            $search = trim($request->search);

            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%")
                    ->orWhere('message', 'like', "%{$search}%")
                    ->orWhere('response', 'like', "%{$search}%")
                    ->orWhere('payment_reference', 'like', "%{$search}%")
                    ->orWhereHas('talent', function ($talentQuery) use ($search) {
                        $talentQuery->where('name', 'like', "%{$search}%");
                    });
            });
        }

        /*
        |--------------------------------------------------------------------------
        | Status filter
        |--------------------------------------------------------------------------
        */
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        /*
        |--------------------------------------------------------------------------
        | Paginated connections
        |--------------------------------------------------------------------------
        */
        $connections = $query
            ->paginate(10)
            ->withQueryString();

        /*
        |--------------------------------------------------------------------------
        | Talents for new connection modal
        |--------------------------------------------------------------------------
        */
        $talents = Talent::query()
            ->select('id', 'name', 'email')
            ->orderBy('name')
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Dashboard statistics
        |--------------------------------------------------------------------------
        */
        $stats = [
            'total' => TalentConnection::count(),

            'pending' => TalentConnection::where(
                'status',
                'pending'
            )->count(),

            'accepted' => TalentConnection::whereIn(
                'status',
                ['accepted', 'approved']
            )->count(),

            'paid' => TalentConnection::whereIn(
                'payment_status',
                ['paid', 'completed', 'success']
            )->count(),
        ];

        return Inertia::render(
            'AdminPage/Talents/ConnectionIndex',
            [
                'connections' => $connections,
                'talents' => $talents,
                'stats' => $stats,
                'filters' => [
                    'search' => $request->search ?? '',
                    'status' => $request->status ?? '',
                ],
            ]
        );
    }

    /**
     * Create a new connection request.
     *
     * The requester is ALWAYS the authenticated user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'talent_id' => [
                'required',
                'exists:talents,id',
            ],

            'message' => [
                'nullable',
                'string',
                'max:2000',
            ],
        ]);

        $user = $request->user();

        TalentConnection::create([
            'talent_id' => $validated['talent_id'],

            // Authenticated requester
            'user_id' => $user->id,

            // Stored from authenticated user
            'name' => $user->name,
            'email' => $user->email,
            'phone' => data_get($user, 'phone'),

            'status' => 'pending',
            'payment_status' => 'pending',

            'message' => $validated['message'] ?? null,
        ]);

        return back()->with(
            'success',
            'Talent connection request created successfully.'
        );
    }

    /**
     * Display a single connection request.
     */
    public function show($id)
    {
        $connection = TalentConnection::with([
            'talent',
            'user',
            'payment',
        ])->findOrFail($id);

        return Inertia::render(
            'AdminPage/Talents/ConnectionShow',
            compact('connection')
        );
    }

    /**
     * Respond to a connection request.
     */
    public function respond(Request $request, $id)
    {
        $validated = $request->validate([
            'response' => [
                'required',
                'string',
                'max:2000',
            ],
        ]);

        $connection = TalentConnection::findOrFail($id);

        $connection->update([
            'response' => $validated['response'],
        ]);

        return back()->with(
            'success',
            'Your response has been sent to the requester.'
        );
    }

    /**
     * Accept a connection request.
     */
    public function accept($id)
    {
        $connection = TalentConnection::findOrFail($id);

        $connection->update([
            'status' => 'accepted',
        ]);

        return back()->with(
            'success',
            'Connection request has been accepted.'
        );
    }
}
