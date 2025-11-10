<?php

namespace App\Http\Controllers\Wallets;

use App\Http\Controllers\Controller;
use App\Models\WalletTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{

    public function callback(Request $request)
    {
        $tx_ref = $request->get('tx_ref'); // e.g., "5-12-1721123456789"
        $status = $request->get('status');
        $transaction_id = $request->get('transaction_id');

        $transaction = WalletTransaction::find($transaction_id);

        if (!$transaction) {
            return redirect()->route('user.wallet.index')->with('error', 'Transaction not found');
        }

        if ($status === 'successful') {

            $transaction->update([
                'payment_method' => 'flutterwave',
                'status' => 'successful',
                'reference' => $tx_ref
            ]);

            // Add funds to wallet
            $wallet = $transaction->wallet;
            $wallet->increment('balance', $transaction->amount);

            return redirect()->route('user.wallet.index')->with('success', 'Wallet funded successfully!');
        }

        return redirect()->route('user.wallet.index')->with('error', 'Payment failed. Try again.');
    }
}
