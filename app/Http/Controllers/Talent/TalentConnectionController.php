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
     * Payment statuses that count as an actually settled payment.
     *
     * Shared by index() and show() so the two views can never
     * disagree about whether a connection has been paid for.
     */
    private const PAID_STATUSES = [
        'paid',
        'completed',
        'success',
        'successful',
    ];

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
    | Payment information comes from connection_payments.
    | The payment is matched through:
    |
    | talent_connections.payment_reference
    |          ↓
    | connection_payments.reference
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
    | Prepare Connection Data For React
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    | Every row gets its financial information from
    | connection_payments.amount.
    |
    | We DO NOT use talent_connections.amount.
    |
    */

        $connections->getCollection()->transform(
            function ($connection) {

                $payment = $connection->payment;

                $amount = $payment
                    ? (float) $payment->amount
                    : 0;

                $currency = $payment?->currency ?? 'RWF';

                $paymentStatus = $payment?->status;

                $isPaid = $payment
                    && in_array(
                        strtolower((string) $paymentStatus),
                        self::PAID_STATUSES,
                        true
                    );

                /*
            |--------------------------------------------------------------------------
            | Earnings
            |--------------------------------------------------------------------------
            |
            | Future Connect = 5%
            | Talent = 95%
            |
            | Only real once the payment has actually settled -
            | a pending/failed payment record is not an earning yet.
            |
            */

                $futureConnectFee = $isPaid
                    ? $amount * 0.05
                    : 0;

                $talentEarning = $isPaid
                    ? $amount * 0.95
                    : 0;

                return [
                    'id' => $connection->id,
                    'name' => $connection->name,
                    'email' => $connection->email,
                    'phone' => $connection->phone,
                    'status' => $connection->status,
                    'message' => $connection->message,
                    'response' => $connection->response,

                    'created_at' => $connection->created_at
                        ?->format('d M Y, H:i'),

                    'created_at_human' => $connection->created_at
                        ?->diffForHumans(),

                    'payment' => $payment
                        ? [
                            'id' => $payment->id,
                            'reference' => $payment->reference,

                            /*
                        | IMPORTANT:
                        | This is connection_payments.amount
                        */
                            'amount' => round(
                                (float) $payment->amount,
                                2
                            ),

                            'currency' => $currency,
                            'status' => $payment->status,
                            'provider' => $payment->provider,

                            'provider_transaction_id' =>
                            $payment->provider_transaction_id,

                            'paid_at' => $payment->paid_at
                                ?->format('d M Y, H:i'),
                        ]
                        : null,

                    'earnings' => [
                        'amount' => round($amount, 2),
                        'talent' => round($talentEarning, 2),
                        'future_connect' => round($futureConnectFee, 2),
                        'currency' => $currency,
                        'is_paid' => $isPaid,
                    ],
                ];
            }
        );

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
    | REAL PAYMENT DATA
    |--------------------------------------------------------------------------
    |
    | All financial totals come from connection_payments.amount.
    |
    */

        $payments = ConnectionPayment::query()
            ->where('talent_id', $talent->id)
            ->whereIn('status', self::PAID_STATUSES);

        $totalAmount = (float) $payments->sum('amount');
        $futureConnectEarnings = $totalAmount * 0.05;
        $talentEarnings = $totalAmount * 0.95;
        $paidConnections = (clone $payments)->count();

        $pendingPayments = ConnectionPayment::query()
            ->where('talent_id', $talent->id)
            ->whereNotIn('status', self::PAID_STATUSES)
            ->count();

        return Inertia::render(
            'Talent/Connections/Index',
            [
                'connections' => $connections,
                'counts' => $counts,

                'filters' => [
                    'status' => $status,
                ],

                'earnings' => [
                    'total_amount' => round($totalAmount, 2),
                    'talent_earnings' => round($talentEarnings, 2),
                    'future_connect_earnings' => round($futureConnectEarnings, 2),
                    'paid_connections' => $paidConnections,
                    'pending_payments' => $pendingPayments,
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

        $amount = (float) ($payment?->amount ?? 0);

        /*
        |--------------------------------------------------------------------------
        | Is It Actually Paid?
        |--------------------------------------------------------------------------
        |
        | BUG FIX: this method previously computed the 95/5 split
        | off $amount unconditionally, even when the payment was
        | still pending or had failed. index() already guarded this
        | with $isPaid - show() didn't, so the two pages disagreed
        | about whether money had actually been earned.
        |
        */

        $isPaid = $payment
            && in_array(
                strtolower((string) $payment->status),
                self::PAID_STATUSES,
                true
            );

        $futureConnectFee = $isPaid ? $amount * 0.05 : 0;
        $talentEarning = $isPaid ? $amount * 0.95 : 0;

        return Inertia::render(
            'Talent/Connections/Show',
            [
                'connection' => [
                    'id' => $connection->id,
                    'name' => $connection->name,
                    'email' => $connection->email,
                    'phone' => $connection->phone,
                    'status' => $connection->status,
                    'message' => $connection->message,
                    'response' => $connection->response,

                    'created_at' => $connection->created_at
                        ?->format('d M Y, H:i'),

                    'created_at_human' => $connection->created_at
                        ?->diffForHumans(),

                    'payment' => $payment
                        ? [
                            'id' => $payment->id,
                            'reference' => $payment->reference,
                            'amount' => (float) $payment->amount,
                            'currency' => $payment->currency ?? 'RWF',
                            'status' => $payment->status,
                            'provider' => $payment->provider,

                            'provider_transaction_id' =>
                            $payment->provider_transaction_id,

                            'paid_at' => $payment->paid_at
                                ?->format('d M Y, H:i'),
                        ]
                        : null,
                ],

                'earnings' => [
                    'amount' => round($amount, 2),
                    'future_connect_fee' => round($futureConnectFee, 2),
                    'talent_earning' => round($talentEarning, 2),
                    'currency' => $payment?->currency ?? 'RWF',
                    'is_paid' => $isPaid,
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

        abort_unless(
            $connection->talent_id === $talent->id,
            403
        );

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

        $connection->update([
            'status' => $validated['status'],
            'response' => $validated['response'] ?? null,
        ]);

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