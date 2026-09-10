<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\ConnectionPayment;
use App\Models\Talent;
use App\Models\TalentConnection;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TalentConnectionController extends Controller
{
    // List all talents (connection room)
    public function index()
    {
        $talents = Talent::where('status', 'approved')->paginate(12);
        $categories = Category::whereIn(
            'id',
            Talent::where('status', 'approved')
                ->select('category_id')
                ->distinct()
        )->get();
        return Inertia::render('UserPage/NetworkingHub', compact('talents', 'categories'));
    }

    // Show a single talent profile
    public function show(Talent $talent)
    {
        return view('user-page.talent-profile', compact('talent'));
    }

    // Create a connection request after payment
    public function store(Request $request, Talent $talent)
    {
        $request->validate([
            'message' => 'required|string',
            'email' => 'required|email',
            'name' => 'required|string|max:255'
        ]);

        $connection = TalentConnection::create([
            'talent_id' => $talent->id,
            'name' => $request->name,
            'email' => $request->email,
            'status'    => 'pending',
            'message' => $request->message
        ]);

        return redirect()->back()->with('success', 'Request sent successfully and will be notified.');
    }

    public function paymentChoice($id)
    {
        $connection = TalentConnection::findOrFail($id);
        $public_key = config('services.flutterwave.public_key');
        return view('user-page.payment-choice', compact('connection', 'public_key'));
    }

    public function handleCallback(Request $request)
    {
        $tx_ref = $request->get('tx_ref'); // e.g., "5-12-1721123456789"
        $status = $request->get('status');
        $connection_id = $request->get('connection_id');
        $user_id = $request->get('user_id');
        $email = $request->get('email', 'kabosierik@gmail.com'); // default if not passed

        // Check if the transaction already exists
        if (ConnectionPayment::where('tx_ref', $tx_ref)->exists()) {
            return redirect()->route('user.home', [
                'user_id' => $user_id,
                'connection_id' => $connection_id
            ])->with('info', 'Payment already processed.');
        }

        // Save the payment
        ConnectionPayment::create([
            'tx_ref' => $tx_ref,
            'flw_ref' => $request->get('flw_ref', ''),
            'status' => $status,
            'amount' => 5.00,  // hardcoded or pass dynamically
            'currency' => 'RWF',
            'email' => $email,
            'user_id' => $user_id,
            'connection_id' => $connection_id,
        ]);

        if ($status === 'successful') {
            return redirect()->route('user.home', [
                'user_id' => $user_id,
                'connection_id' => $connection_id
            ])->with('success', 'Payment successful. Let\'s wait for talent to respond on your request!');
        }

        return redirect()->route('user.home')->with('error', 'Payment failed or cancelled.');
    }
    // Talent accepts or declines request
    public function respond(Request $request, TalentConnection $connection)
    {
        $this->authorize('update', $connection->talent);

        $connection->update(['status' => $request->status]); // accepted / declined
        return back()->with('success', 'Connection updated successfully.');
    }

    public function StartConnecting()
    {
        // Fetch featured talents - modify query as needed
        $talents = Talent::with('category', 'feedback', 'stories')->paginate(8);

        $now = Carbon::now();
        $oneMonthAgo = $now->copy()->subMonth();

        $talents->transform(function ($talent) use ($oneMonthAgo) {
            $avgRating = $talent->feedback->avg('rating') ?? 0;
            $feedbackCount = $talent->feedback->count();
            $createdAt = $talent->created_at;

            if ($talent->featured) {
                $talent->tag = 'featured';
            } elseif ($feedbackCount >= 20) {
                $talent->tag = 'popular';
            } elseif ($createdAt >= $oneMonthAgo) {
                $talent->tag = 'latest';
            } elseif ($avgRating >= 4 && $avgRating < 4.5) {
                $talent->tag = 'recommended';
            } else {
                $talent->tag = 'latest';
            }

            return $talent;
        });


        return Inertia::render('UserPage/StartConnecting', [
            'talents' => $talents,
            'categories' => Category::withCount('talents')->take(10)->get(),
            'featuredTalents' => Talent::inRandomOrder()->where('featured', 1)->get(),
            'popularCategories' => Category::withCount('talents')
                ->orderBy('talents_count', 'desc')
                ->take(3)
                ->get(),
        ]);
    }

    public function prepare(Request $request, Talent $talent)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
            'name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
        ]);

        // Prevent connecting to yourself
        if ($talent->user_id && $talent->user_id == $user->id) {
            return back()->withErrors([
                'connection' => 'You cannot connect with your own profile.',
            ]);
        }

        /*
         * Prevent duplicate pending/paid connections.
         */
        $existing = TalentConnection::where('talent_id', $talent->id)
            ->where('user_id', $user->id)
            ->whereIn('status', ['pending', 'accepted'])
            ->whereIn('payment_status', ['pending', 'paid'])
            ->first();

        if ($existing) {
            return back()->withErrors([
                'connection' => 'You already have an active connection with this talent.',
            ]);
        }

        /*
         * Replace this with your actual connection fee.
         */
        $amount = 500;

        $connection = TalentConnection::create([
            'talent_id' => $talent->id,
            'user_id' => $user->id,

            'name' => $validated['name'] ?: $user->name,
            'email' => $validated['email'] ?: $user->email,
            'phone' => $validated['phone'] ?: ($user->phone ?? null),

            'message' => $validated['message'],

            'status' => 'pending',
            'payment_status' => 'pending',

            'amount' => $amount,

            'payment_reference' =>
            'CONN-' . strtoupper(Str::random(12)),
        ]);

        /*
         * Redirect to payment page.
         */
        return redirect()->route(
            'connection.payment',
            $connection->id
        );
    }


    /**
     * Cancelled/failed payment.
     */
    public function paymentCancel(Request $request)
    {
        $reference = $request->reference;

        if ($reference) {
            $connection = TalentConnection::where(
                'payment_reference',
                $reference
            )->first();

            if ($connection) {
                $connection->update([
                    'payment_status' => 'cancelled',
                ]);
            }

            if ($connection) {
                return redirect()
                    ->route(
                        'talent.profile',
                        $connection->talent->slug
                    )
                    ->with(
                        'error',
                        'Payment was cancelled. Your connection request was not sent.'
                    );
            }
        }

        return back()->with(
            'error',
            'Payment was cancelled.'
        );
    }

    public function checkout(Request $request, Talent $talent)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        /*
         * Get the connection price.
         *
         * Replace this with the actual field/configuration
         * you use for your talent connection fee.
         */
        $amount = (int) ($talent->connection_fee ?? 5000);

        $reference = 'CON-' . strtoupper(
            Str::random(16)
        );

        $payment = ConnectionPayment::create([
            'user_id' => $request->user()->id,
            'talent_id' => $talent->id,
            'reference' => $reference,
            'amount' => $amount,
            'currency' => 'RWF',
            'status' => 'pending',
            'provider' => 'your-payment-provider',

            'meta' => [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'] ?? null,
                'message' => $validated['message'],
            ],
        ]);

        /*
         * IMPORTANT:
         *
         * No TalentConnection is created here.
         *
         * The user goes to payment first.
         */

        return redirect()->route(
            'connection.payment',
            $payment
        );
    }

    public function payment(Request $request, ConnectionPayment $payment)
    {
        abort_unless(
            $payment->user_id === $request->user()->id,
            403
        );

        return Inertia::render(
            'UserPage/ConnectionPayment',
            [
                'payment' => $payment,
                'talent' => $payment->talent,
            ]
        );
    }

    public function paymentSuccess(ConnectionPayment $payment)
    {
        if ($payment->status === 'paid') {
            return;
        }

        $payment->update([
            'status' => 'paid',
            'paid_at' => now(),
        ]);

        $meta = $payment->meta ?? [];

        TalentConnection::create([
            'talent_id' => $payment->talent_id,
            'user_id' => $payment->user_id,

            'name' => $meta['name'] ?? '',
            'email' => $meta['email'] ?? '',
            'phone' => $meta['phone'] ?? null,

            'message' => $meta['message'] ?? null,

            'status' => 'pending',
        ]);
    }

    /**
     * Start Flutterwave payment.
     */
    public function pay(
        Request $request,
        ConnectionPayment $payment
    ) {
        /*
        |--------------------------------------------------------------------------
        | Security
        |--------------------------------------------------------------------------
        */

        abort_unless(
            $payment->user_id === $request->user()->id,
            403
        );

        /*
        |--------------------------------------------------------------------------
        | Don't pay an already completed transaction
        |--------------------------------------------------------------------------
        */

        if ($payment->status === 'paid') {
            return redirect()->route(
                'connection.payment.success',
                $payment
            );
        }

        if (
            in_array(
                $payment->status,
                ['failed', 'cancelled']
            )
        ) {
            return back()->with(
                'error',
                'This payment request is no longer active.'
            );
        }

        $meta = $payment->meta ?? [];

        /*
        |--------------------------------------------------------------------------
        | Flutterwave API
        |--------------------------------------------------------------------------
        */

        $response = Http::withToken(
            config('services.flutterwave.secret_key')
        )->post(
            'https://api.flutterwave.com/v3/payments',
            [
                'tx_ref' => $payment->reference,

                'amount' => $payment->amount,

                'currency' => $payment->currency,

                'redirect_url' => route(
                    'connection.payment.callback'
                ),

                'customer' => [
                    'email' => $meta['email']
                        ?? $request->user()->email,

                    'name' => $meta['name']
                        ?? $request->user()->name,

                    'phonenumber' => $meta['phone'] ?? null,
                ],

                'customizations' => [
                    'title' => 'Talent Connection',
                    'description' =>
                    'Connection request for '
                        . $payment->talent->name,

                    'logo' => asset(
                        'images/logo.png'
                    ),
                ],

                'meta' => [
                    [
                        'metaname' => 'payment_id',
                        'metavalue' => $payment->id,
                    ],

                    [
                        'metaname' => 'talent_id',
                        'metavalue' => $payment->talent_id,
                    ],
                ],
            ]
        );

        /*
        |--------------------------------------------------------------------------
        | Flutterwave failed to create payment
        |--------------------------------------------------------------------------
        */

        if (!$response->successful()) {
            return back()->with(
                'error',
                'Unable to initialize payment. Please try again.'
            );
        }

        $data = $response->json();

        /*
        |--------------------------------------------------------------------------
        | Store provider information
        |--------------------------------------------------------------------------
        */

        $payment->update([
            'provider' => 'flutterwave',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Redirect customer to Flutterwave
        |--------------------------------------------------------------------------
        */

        if (
            isset($data['status']) &&
            $data['status'] === 'success' &&
            isset($data['data']['link'])
        ) {
            return redirect()->away(
                $data['data']['link']
            );
        }

        return back()->with(
            'error',
            'Unable to create the payment session.'
        );
    }


    /**
     * Flutterwave redirects the customer here.
     */
    public function callback(Request $request)
    {
        $transactionId = $request->query(
            'transaction_id'
        );

        $txRef = $request->query(
            'tx_ref'
        );

        $status = $request->query(
            'status'
        );

        /*
        |--------------------------------------------------------------------------
        | Cancelled / failed
        |--------------------------------------------------------------------------
        */

        if (
            !$transactionId ||
            !$txRef ||
            $status !== 'successful'
        ) {
            return redirect()
                ->route(
                    'talent.profile',
                    $this->getTalentSlugFromReference(
                        $txRef
                    )
                )
                ->with(
                    'error',
                    'Payment was cancelled or unsuccessful. No connection was created.'
                );
        }

        /*
        |--------------------------------------------------------------------------
        | Find payment
        |--------------------------------------------------------------------------
        */

        $payment = ConnectionPayment::where(
            'reference',
            $txRef
        )->firstOrFail();

        /*
        |--------------------------------------------------------------------------
        | Verify payment with Flutterwave
        |--------------------------------------------------------------------------
        */

        $verifyResponse = Http::withToken(
            config('services.flutterwave.secret_key')
        )->get(
            "https://api.flutterwave.com/v3/transactions/{$transactionId}/verify"
        );

        if (!$verifyResponse->successful()) {
            return redirect()
                ->route(
                    'connection.payment',
                    $payment
                )
                ->with(
                    'error',
                    'Unable to verify the payment.'
                );
        }

        $result = $verifyResponse->json();

        $transaction = $result['data'] ?? [];

        /*
        |--------------------------------------------------------------------------
        | IMPORTANT:
        | Verify amount, currency and reference
        |--------------------------------------------------------------------------
        */

        $paymentSuccessful =
            ($result['status'] ?? null) === 'success'
            &&
            ($transaction['status'] ?? null) === 'successful'
            &&
            (string) ($transaction['tx_ref'] ?? '') ===
            (string) $payment->reference
            &&
            (float) ($transaction['amount'] ?? 0) >=
            (float) $payment->amount
            &&
            strtoupper(
                $transaction['currency'] ?? ''
            ) === strtoupper(
                $payment->currency
            );

        if (!$paymentSuccessful) {
            $payment->update([
                'status' => 'failed',
                'provider_transaction_id' =>
                $transactionId,
            ]);

            return redirect()
                ->route(
                    'talent.profile',
                    $this->getTalentSlugFromReference(
                        $payment->reference
                    )
                )
                ->with(
                    'error',
                    'Payment could not be verified. No connection was created.'
                );
        }

        /*
        |--------------------------------------------------------------------------
        | Payment is valid
        |--------------------------------------------------------------------------
        */

        DB::transaction(function () use (
            $payment,
            $transactionId
        ) {
            /*
            |--------------------------------------------------------------------------
            | Prevent duplicate webhook/callback processing
            |--------------------------------------------------------------------------
            */

            if ($payment->status === 'paid') {
                return;
            }

            $payment->update([
                'status' => 'paid',

                'provider_transaction_id' =>
                $transactionId,

                'paid_at' => now(),
            ]);

            $meta = $payment->meta ?? [];

            /*
            |--------------------------------------------------------------------------
            | NOW create the actual connection
            |--------------------------------------------------------------------------
            */

            TalentConnection::create([
                'talent_id' => $payment->talent_id,

                'user_id' => $payment->user_id,

                'name' => $meta['name'] ?? '',

                'email' => $meta['email'] ?? '',

                'phone' => $meta['phone'] ?? null,

                'message' => $meta['message'] ?? null,

                'status' => 'pending',
            ]);
        });

        return redirect()
            ->route(
                'connection.payment.success',
                $payment
            );
    }

    /**
     * Get talent slug from payment reference.
     *
     * Replace this helper with a direct relationship if preferred.
     */
    private function getTalentSlugFromReference(
        ?string $reference
    ) {
        $payment = ConnectionPayment::where(
            'reference',
            $reference
        )->first();

        if (!$payment) {
            return null;
        }

        return $payment->talent->slug
            ?? $payment->talent->id;
    }

    public function success(
        Request $request,
        ConnectionPayment $payment
    ) {
        // Only the person who created the payment can view it.
        abort_unless(
            $payment->user_id === $request->user()->id,
            403
        );

        // The success page should only be accessible for paid payments.
        if ($payment->status !== 'paid') {
            return redirect()
                ->route('connection.payment', $payment)
                ->with(
                    'error',
                    'This payment has not been completed yet.'
                );
        }

        return Inertia::render('UserPage/ConnectionSuccess', [
            'payment' => $payment,
            'talent' => $payment->talent,
        ]);
    }
}
