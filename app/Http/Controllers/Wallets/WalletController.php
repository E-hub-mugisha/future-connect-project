<?php

namespace App\Http\Controllers\Wallets;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Wallet;

class WalletController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // If user has no wallet, create one
        if (!$user->wallet) {
            $user->wallet()->create([
                'balance' => 0,
                'currency' => 'RWF',
            ]);
        }

        $wallet = $user->wallet;
        $transactions = $wallet->transactions()->orderBy('id', 'desc')->paginate(20);

        return view('wallets.index', compact('wallet', 'transactions'));
    }


    public function topupRequest(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:100'
        ]);

        $wallet = Auth::user()->wallet;

        $transaction = $wallet->transactions()->create([
            'type' => 'credit',
            'amount' => $request->amount,
            'description' => 'Wallet top-up',
            'payment_method' => 'flutterwave',
            'status' => 'pending'
        ]);

        return redirect()->route('user.wallet.topup.show', ['transaction' => $transaction->id]);
    }

    public function showTopup($transaction)
    {
        $wallet = Auth::user()->wallet;
        $transaction = $wallet->transactions()->where('id', $transaction)->firstOrFail();
        $public_key = config('services.flutterwave.public_key');

        return view('wallets.checkout', [
            'transaction' => $transaction,
            'public_key' => $public_key,
        ]);
    }

    public function deleteTransaction($transactionId)
    {
        $wallet = Auth::user()->wallet;
        $transaction = $wallet->transactions()->where('id', $transactionId)->firstOrFail();

        if ($transaction->status === 'pending') {
            $transaction->delete();
            return redirect()->route('user.wallet.index')->with('success', 'Pending transaction deleted successfully.');
        }

        return redirect()->route('user.wallet.index')->with('error', 'Only pending transactions can be deleted.');
    }

    // Admin: View all wallets
    public function walletsIndex()
    {
        $wallets = Wallet::with('user')->paginate(20);
        return view('admin-pages.wallets.index', compact('wallets'));
    }
}
