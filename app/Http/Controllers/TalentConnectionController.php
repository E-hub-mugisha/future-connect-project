<?php

namespace App\Http\Controllers;

use App\Models\ConnectionPayment;
use App\Models\Talent;
use App\Models\TalentConnection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentConnectionController extends Controller
{
    // List all talents (connection room)
    public function index()
    {
        $talents = Talent::where('status','approved')->paginate(12);
        return view('user-page.connection-room', compact('talents'));
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
            'message' => 'required|string'
        ]);
        // This is where you'd integrate Flutterwave/Stripe
        $amount = 10.00; // example connection fee

        $connection = TalentConnection::create([
            'talent_id' => $talent->id,
            'user_id'   => Auth::id(),
            'status'    => 'pending',
            'amount'    => $amount,
            'message' => $request->message
        ]);

        return redirect()->route('connections.payment.choice', $connection->id)->with('success','Request sent proceed with payment.');
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
        return back()->with('success','Connection updated successfully.');
    }
}
