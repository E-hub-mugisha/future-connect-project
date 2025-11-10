<?php

namespace App\Http\Controllers;

use App\Models\WalletTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MembershipController extends Controller
{
    public function upgradeToVerified(Request $request)
    {
        $user = Auth::user();
        $upgradeFee = 5000; // e.g., RWF 5000

        // Check if user already verified
        if ($user->is_verified) {
            return redirect()->back()->with('info', 'You are already verified.');
        }

        $wallet = $user->wallet;

        // Check balance
        if ($wallet->balance < $upgradeFee) {
            return redirect()->back()->with('error', 'Insufficient wallet balance. Please top up.');
        }

        // Deduct wallet
        $wallet->decrement('balance', $upgradeFee);

        // Log transaction
        WalletTransaction::create([
            'wallet_id' => $wallet->id,
            'type' => 'debit',
            'amount' => $upgradeFee,
            'description' => 'Verified Membership Upgrade',
            'status' => 'completed',
            'payment_method' => 'wallet',
        ]);

        // Mark user as verified
        $user->verify();

        return redirect()->back()->with('success', 'You are now a Verified Member!');
    }

    public function upgradeWithWallet(Request $request)
    {
        $user = Auth::user();
        $fee = 5000; // Verified upgrade fee

        if ($user->is_verified) {
            return back()->with('info', 'You are already verified.');
        }

        if (($user->wallet->balance ?? 0) < $fee) {
            return back()->with('error', 'Insufficient wallet balance.');
        }

        $user->wallet->decrement('balance', $fee);

        WalletTransaction::create([
            'wallet_id' => $user->wallet->id,
            'type' => 'debit',
            'amount' => $fee,
            'description' => 'Verified Membership Upgrade',
            'status' => 'completed',
            'payment_method' => 'wallet',
        ]);

        $user->update(['is_verified' => true]);

        return back()->with('success', 'You are now a Verified Member!');
    }

    public function upgradeWithFlutter(Request $request)
    {
        $user = Auth::user();
        $fee = 5000; // Verified upgrade fee

        // Create a temporary transaction
        $transaction = WalletTransaction::create([
            'wallet_id' => $user->wallet->id ?? null,
            'type' => 'credit',
            'amount' => $fee,
            'description' => 'Verified Membership Upgrade via Flutterwave',
            'status' => 'pending',
            'payment_method' => 'flutterwave',
        ]);

        $public_key = config('services.flutterwave.public_key');

        return view('wallets.verify_flutterwave', compact('transaction', 'public_key'));
    }


    public function callbackFlutter(Request $request)
    {
        $transaction = WalletTransaction::find($request->transaction_id);

        if (!$transaction) return redirect()->route('wallet.index')->with('error', 'Transaction not found');

        if ($request->status === 'successful') {
            $transaction->update(['status' => 'completed']);
            $user = Auth::user();
            $user->is_verified = true;
            $user->save();

            return redirect()->route('user.wallet.index')->with('success', 'You are now Verified!');
        }

        $transaction->update(['status' => 'failed']);
        return redirect()->route('user.wallet.index')->with('error', 'Payment failed.');
    }
}
