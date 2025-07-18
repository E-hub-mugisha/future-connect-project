<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\StoryPayment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function showEmailForm($story_id, $video_id)
    {
        return view('user-page.payment.verify-user', compact('story_id', 'video_id'));
    }
    public function verifyEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'story_id' => 'required',
            'video_id' => 'required',
        ]);

        $hasPaid = StoryPayment::where('story_id', $request->story_id)
            ->where('video_id', $request->video_id)
            ->where('email', $request->email)
            ->where('status', 'successful')
            ->exists();

        if ($hasPaid) {
            // Save email in session so they can continue
            session(['video_access_email' => $request->email]);
            return redirect()->route('video.play', ['video_id' => $request->video_id]);
        }

        // Not paid, go to payment
        return redirect()->route('payment.checkout', [
            'email' => $request->email,
            'story_id' => $request->story_id,
            'video_id' => $request->video_id
        ])->with('info', 'No payment found. Please make a payment to access this video.');
    }
    public function checkout($story_id, $video_id, Request $request )
    {
        $email = $request->query('email'); // Get email from query string or default to empty
        $story = \App\Models\Story::findOrFail($story_id);
        $public_key = env('FLW_PUBLIC_KEY');
        return view('user-page.payment.checkout', [
            'video_id' => $video_id,
            'public_key' => $public_key,
            'story_id' => $story_id,
            'story' => $story,
            'email' => $email,
        ]);
    }
    public function pay(Request $request)
    {
        // Normally you'd redirect to real payment gateway here (Stripe, Flutterwave, etc.)
        // For demo: Simulate successful payment and redirect

        return redirect()->route('video.play', ['video_id' => $request->video_id])
            ->with('success', 'Payment completed. You may now watch the full video.');
    }
    public function watch($video_id)
    {
        // You can fetch video info from DB if needed
        return view('user-page.video', compact('video_id'));
    }
    public function handleCallback(Request $request)
    {
        $tx_ref = $request->get('tx_ref'); // e.g., "5-12-1721123456789"
        $status = $request->get('status');
        $story_id = $request->get('story_id');
        $video_id = $request->get('video_id');
        $email = $request->get('email', 'kabosierik@gmail.com'); // Default or from request

        // Check if the tx_ref already exists
        if (StoryPayment::where('tx_ref', $tx_ref)->exists()) {
            return redirect()->route('video.play', ['video_id' => $request->video_id])
                ->with('info', 'Payment already processed.');
        }
        StoryPayment::create([
            'tx_ref' => $tx_ref,
            'flw_ref' => $request->get('flw_ref', ''), // if passed back
            'status' => $status,
            'amount' => 5.00,  // Hardcoded or pass dynamically
            'currency' => 'USD',
            'email' => $email,
            'video_id' => $video_id,
            'story_id' => $story_id,
        ]);

        if ($status === 'successful') {
            // Save transaction to DB, unlock video, etc.
            return redirect()->route('video.play', ['video_id' => $video_id])->with('success', 'Payment successful. Enjoy your video!');
        }

        return redirect()->route('user.home')->with('error', 'Payment failed or cancelled.');
    }
}
