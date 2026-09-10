<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\ConnectionPayment;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentConnectionController extends Controller
{
    /**
     * Display talent connection requests and earnings.
     */
    public function index(Request $request)
    {
        $talent = auth()->user()->talent;

        abort_unless($talent, 403);

        $status = $request->input('status', 'all');

        /*
        |--------------------------------------------------------------------------
        | Connection Requests
        |--------------------------------------------------------------------------
        |
        | The connection itself comes from talent_connections.
        | Payment information is loaded from connection_payments
        | through the payment() relationship.
        |
        */

        $query = TalentConnection::query()
            ->where('talent_id', $talent->id)
            ->with('payment')
            ->latest();

        if (
            in_array(
                $status,
                ['pending', 'accepted', 'declined'],
                true
            )
        ) {
            $query->where('status', $status);
        } else {
            $status = 'all';
        }

        $connections = $query
            ->paginate(10)
            ->withQueryString();

        /*
        |--------------------------------------------------------------------------
        | Connection Counts
        |--------------------------------------------------------------------------
        */

        $baseConnectionQuery = TalentConnection::query()
            ->where('talent_id', $talent->id);

        $counts = [
            'all' => (clone $baseConnectionQuery)->count(),

            'pending' => (clone $baseConnectionQuery)
                ->where('status', 'pending')
                ->count(),

            'accepted' => (clone $baseConnectionQuery)
                ->where('status', 'accepted')
                ->count(),

            'declined' => (clone $baseConnectionQuery)
                ->where('status', 'declined')
                ->count(),
        ];

        /*
        |--------------------------------------------------------------------------
        | Paid Payment Statuses
        |--------------------------------------------------------------------------
        |
        | These statuses are considered successfully paid.
        |
        */

        $paidStatuses = [
            'paid',
            'completed',
            'success',
            'successful',
        ];

        /*
        |--------------------------------------------------------------------------
        | REAL PAYMENT DATA
        |--------------------------------------------------------------------------
        |
        | IMPORTANT:
        |
        | Financial calculations use:
        |
        | connection_payments.amount
        |
        | NOT:
        |
        | talent_connections.amount
        |
        */

        $payments = ConnectionPayment::query()
            ->where('talent_id', $talent->id)
            ->whereIn('status', $paidStatuses);

        /*
        |--------------------------------------------------------------------------
        | Total Payment Amount
        |--------------------------------------------------------------------------
        */

        $totalAmount = (float) $payments->sum('amount');

        /*
        |--------------------------------------------------------------------------
        | Future Connect Earnings
        |--------------------------------------------------------------------------
        |
        | Future Connect receives 5%.
        |
        */

        $futureConnectEarnings = $totalAmount * 0.05;

        /*
        |--------------------------------------------------------------------------
        | Talent Earnings
        |--------------------------------------------------------------------------
        |
        | Talent receives 95%.
        |
        */

        $talentEarnings = $totalAmount * 0.95;

        /*
        |--------------------------------------------------------------------------
        | Number of Paid Connections
        |--------------------------------------------------------------------------
        */

        $paidConnections = (clone $payments)->count();

        /*
        |--------------------------------------------------------------------------
        | Pending / Unpaid Payments
        |--------------------------------------------------------------------------
        */

        $pendingPayments = ConnectionPayment::query()
            ->where('talent_id', $talent->id)
            ->whereNotIn('status', $paidStatuses)
            ->count();

        /*
        |--------------------------------------------------------------------------
        | Render Page
        |--------------------------------------------------------------------------
        */

        return Inertia::render(
            'Talent/Connections/Index',
            [
                'connections' => $connections,

                'counts' => $counts,

                'filters' => [
                    'status' => $status,
                ],

                'earnings' => [
                    'total_amount' => round(
                        $totalAmount,
                        2
                    ),

                    'talent_earnings' => round(
                        $talentEarnings,
                        2
                    ),

                    'future_connect_earnings' => round(
                        $futureConnectEarnings,
                        2
                    ),

                    'paid_connections' =>
                        $paidConnections,

                    'pending_payments' =>
                        $pendingPayments,

                    'currency' => 'RWF',
                ],
            ]
        );
    }

    /**
     * Display a single connection request.
     */
    public function show(TalentConnection $connection)
    {
        $talent = auth()->user()->talent;

        abort_unless($talent, 403);

        /*
        |--------------------------------------------------------------------------
        | Security
        |--------------------------------------------------------------------------
        |
        | A talent can only view their own connections.
        |
        */

        abort_unless(
            $connection->talent_id === $talent->id,
            403
        );

        /*
        |--------------------------------------------------------------------------
        | Load Payment
        |--------------------------------------------------------------------------
        */

        $connection->load('payment');

        $payment = $connection->payment;

        /*
        |--------------------------------------------------------------------------
        | REAL PAYMENT AMOUNT
        |--------------------------------------------------------------------------
        |
        | Use connection_payments.amount.
        |
        */

        $amount = (float) (
            $payment?->amount ?? 0
        );

        /*
        |--------------------------------------------------------------------------
        | Earnings Calculation
        |--------------------------------------------------------------------------
        */

        $futureConnectFee =
            $amount * 0.05;

        $talentEarning =
            $amount * 0.95;

        /*
        |--------------------------------------------------------------------------
        | Connection Data
        |--------------------------------------------------------------------------
        */

        return Inertia::render(
            'Talent/Connections/Show',
            [
                'connection' => [
                    'id' =>
                        $connection->id,

                    'name' =>
                        $connection->name,

                    'email' =>
                        $connection->email,

                    'phone' =>
                        $connection->phone,

                    'status' =>
                        $connection->status,

                    'message' =>
                        $connection->message,

                    'response' =>
                        $connection->response,

                    'created_at' =>
                        $connection
                            ->created_at
                            ?->format(
                                'd M Y, H:i'
                            ),

                    'created_at_human' =>
                        $connection
                            ->created_at
                            ?->diffForHumans(),

                    /*
                    |--------------------------------------------------------------------------
                    | Payment
                    |--------------------------------------------------------------------------
                    */

                    'payment' =>
                        $payment
                            ? [
                                'id' =>
                                    $payment->id,

                                'reference' =>
                                    $payment->reference,

                                'amount' =>
                                    (float)
                                    $payment->amount,

                                'currency' =>
                                    $payment->currency ??
                                    'RWF',

                                'status' =>
                                    $payment->status,

                                'provider' =>
                                    $payment->provider,

                                'provider_transaction_id' =>
                                    $payment
                                        ->provider_transaction_id,

                                'paid_at' =>
                                    $payment
                                        ->paid_at
                                        ?->format(
                                            'd M Y, H:i'
                                        ),
                            ]
                            : null,
                ],

                /*
                |--------------------------------------------------------------------------
                | Earnings
                |--------------------------------------------------------------------------
                */

                'earnings' => [
                    'amount' =>
                        round(
                            $amount,
                            2
                        ),

                    'future_connect_fee' =>
                        round(
                            $futureConnectFee,
                            2
                        ),

                    'talent_earning' =>
                        round(
                            $talentEarning,
                            2
                        ),

                    'currency' =>
                        $payment?->currency ??
                        'RWF',
                ],
            ]
        );
    }

    /**
     * Accept or decline a connection request.
     */
    public function respond(
        Request $request,
        TalentConnection $connection
    ) {
        $talent = auth()->user()->talent;

        abort_unless($talent, 403);

        /*
        |--------------------------------------------------------------------------
        | Security
        |--------------------------------------------------------------------------
        */

        abort_unless(
            $connection->talent_id === $talent->id,
            403
        );

        /*
        |--------------------------------------------------------------------------
        | Validation
        |--------------------------------------------------------------------------
        */

        $validated = $request->validate([
            'status' => [
                'required',
                'in:accepted,declined',
            ],

            'response' => [
                'nullable',
                'string',
                'max:2000',
            ],
        ]);

        /*
        |--------------------------------------------------------------------------
        | Update Connection
        |--------------------------------------------------------------------------
        */

        $connection->update([
            'status' =>
                $validated['status'],

            'response' =>
                $validated['response'] ?? null,
        ]);

        /*
        |--------------------------------------------------------------------------
        | Redirect
        |--------------------------------------------------------------------------
        */

        return redirect()
            ->route(
                'talent.connections.show',
                $connection
            )
            ->with(
                'success',
                'Connection response saved successfully.'
            );
    }
}