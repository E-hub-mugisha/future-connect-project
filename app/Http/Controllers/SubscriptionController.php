<?php

namespace App\Http\Controllers;

use App\Models\PlanPrice;
use App\Models\PricingPlan;
use App\Models\SubscriptionPayment;
use App\Models\UserSubscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class SubscriptionController extends Controller
{
    // List all user subscriptions
    public function index()
    {
        $user = Auth::user();
        $subscriptions = $user->subscriptions()->latest()->get(); // assuming User has 'subscriptions' relationship

        return view('talent-pages.subscription.index', compact('subscriptions'));
    }

    // Show single subscription details
    public function show(UserSubscription $subscription)
    {
        $plans = PricingPlan::where('is_active', true)->get();
        return view('talent-pages.subscription.show', compact('subscription', 'plans'));
    }
    public function subscribe(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'plan_id' => 'required|exists:pricing_plans,id',
            'billing_cycle' => 'required|in:monthly,annually',
        ]);

        // Prevent multiple active/trial subscriptions
        if ($user->activeSubscription()) {
            return back()->withErrors([
                'subscription' => 'You already have an active or trial subscription.'
            ]);
        }

        $plan = PricingPlan::findOrFail($request->plan_id);

        $price = $plan->prices
            ->where('billing_cycle', $request->billing_cycle)
            ->firstOrFail();

        // Apply free trial if eligible
        $isTrial = !$user->hasUsedTrial();
        $trialDays = 7;

        $subscription = UserSubscription::create([
            'user_id' => $user->id,
            'pricing_plan_id' => $plan->id,
            'billing_cycle' => $request->billing_cycle,
            'price' => $isTrial ? 0 : $price->price,
            'starts_at' => now(),
            'trial_ends_at' => $isTrial ? now()->addDays($trialDays) : null,
            'ends_at' => $isTrial
                ? now()->addDays($trialDays)
                : ($request->billing_cycle === 'monthly'
                    ? now()->addMonth()
                    : now()->addYear()),
            'status' => $isTrial ? 'trialing' : 'pending',
            'is_trial' => $isTrial,
        ]);

        // Only create payment if NOT trial
        if (!$isTrial) {
            SubscriptionPayment::create([
                'user_id' => $user->id,
                'user_subscription_id' => $subscription->id,
                'amount' => $price->price,
                'currency' => 'RWF',
                'gateway' => 'flutterwave',
                'status' => 'pending',
            ]);

            return redirect()->route('payment.subscription.checkout', $subscription->id);
        }

        // Trial activated instantly
        return redirect()->route('user.home')
            ->with('success', "🎉 {$trialDays}-day free trial activated!");
    }
    public function startTrial(Request $request)
    {
        $user = auth()->user();

        if ($user->hasUsedTrial()) {
            return back()->withErrors('You have already used your free trial.');
        }

        if ($user->activeSubscription()) {
            return back()->withErrors('You already have an active subscription.');
        }

        // Default trial plan (choose lowest or special plan)
        $plan = PricingPlan::where('is_trial_allowed', true)->firstOrFail();

        UserSubscription::create([
            'user_id' => $user->id,
            'pricing_plan_id' => $plan->id,
            'billing_cycle' => 'trial',
            'price' => 0,
            'is_trial' => true,
            'starts_at' => now(),
            'trial_ends_at' => now()->addDays(7),
            'ends_at' => now()->addDays(7),
            'status' => 'trial',
        ]);

        return redirect()->route('user.home')
            ->with('success', '🎉 Your free trial has started!');
    }
    /**
     * Guest clicks "Start Free Trial"
     */
    public function start()
    {
        if (!auth()->check()) {
            session(['start_trial_after_login' => true]);
            return redirect()->route('register');
        }

        return redirect()->route('pricing');
    }


    /**
     * Activate trial (after login)
     */
    public function activate(Request $request)
    {
        $user = auth()->user();

        if ($user->hasUsedTrial() || $user->hasActiveSubscription()) {
            return redirect()->route('pricing')
                ->withErrors('You already used your free trial.');
        }

        // Auto-activate trial
        $trialPlan = PricingPlan::where('name', 'Free Trial')->first();

        UserSubscription::create([
            'user_id' => $user->id,
            'pricing_plan_id' => $trialPlan->id, // trial
            'billing_cycle' => 'trial',
            'price' => 0,
            'is_trial' => true,
            'trial_ends_at' => now()->addDays(7),
            'starts_at' => now(),
            'ends_at' => now()->addDays(7),
            'status' => 'trialing',
        ]);

        // Mark user as trial used
        $user->update([
            'trial_used_at' => now(),
        ]);

        return redirect()->route('user.home')
            ->with('success', '🎉 Free trial activated for 7 days!');
    }

    public function checkout(UserSubscription $subscription)
    {
        if ($subscription->is_trial) {
            abort(403, 'Trial subscriptions do not require payment.');
        }

        return view('user-page.subscription_checkout', [
            'subscription' => $subscription,
            'public_key' => config('services.flutterwave.public_key'),
        ]);
    }


    public function callback(Request $request)
    {
        if ($request->status !== 'successful') {
            return redirect()->route('pricing')
                ->with('error', 'Payment cancelled.');
        }

        // Verify with Flutterwave
        // $response = Http::withToken(config('services.flutterwave.secret_key'))
        //     ->get("https://api.flutterwave.com/v3/transactions/{$request->tx_ref}/verify");

        // if (!$response->successful() || $response['data']['status'] !== 'successful') {
        //     return redirect()->route('pricing')
        //         ->with('error', 'Payment verification failed.');
        // }

        $subscription = UserSubscription::findOrFail($request->subscriptionId);

        $payment = SubscriptionPayment::where('user_subscription_id', $subscription->id)
            ->where('status', 'pending')
            ->firstOrFail();

        $payment->update([
            'status' => 'success',
            'tx_ref' => $request->tx_ref,
        ]);

        $subscription->update([
            'status' => 'active',
        ]);

        // Activate or renew
        if ($subscription->status === 'active') {
            $subscription->ends_at = $subscription->billing_cycle === 'monthly'
                ? $subscription->ends_at->addMonth()
                : $subscription->ends_at->addYear();
        } else {
            $subscription->status = 'active';
        }

        $subscription->save();

        return redirect()->route('user.home')
            ->with('success', 'Subscription activated successfully 🎉');
    }

    /* ===============================
       CANCEL
    =============================== */
    public function cancel(UserSubscription $subscription)
    {
        if ($subscription->status !== 'active') {
            return back()->withErrors('Subscription is not active.');
        }

        $subscription->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
            'auto_renew' => false,
        ]);

        return back()->with(
            'success',
            'Subscription will remain active until ' .
                $subscription->ends_at->toFormattedDateString()
        );
    }

    // Show upgrade form
    public function upgradeForm(UserSubscription $subscription)
    {

        $plans = PricingPlan::all(); // or filter higher plans only
        return view('talent-pages.subscription.upgrade', compact('subscription', 'plans'));
    }

    // Handle upgrade
    /* ===============================
       UPGRADE / DOWNGRADE
    =============================== */
    public function upgrade(Request $request, UserSubscription $subscription)
    {
        $request->validate([
            'plan_id' => 'required|exists:pricing_plans,id',
            'billing_cycle' => 'required|in:monthly,annually',
        ]);

        // 1️⃣ Ensure subscription is active or trialing
        if (!in_array($subscription->status, ['active', 'trialing'])) {
            return back()->withErrors('Subscription must be active to upgrade.');
        }


        // 2️⃣ Prevent upgrading to the same plan
        if ((int)$subscription->pricing_plan_id === (int)$request->plan_id) {
            return back()->withErrors('You are already subscribed to this plan.');
        }

        $newPlan = PricingPlan::findOrFail($request->plan_id);

        // 3️⃣ Get price for selected billing cycle
        $price = $newPlan->prices()
            ->where('billing_cycle', $request->billing_cycle)
            ->first();

        if (!$price) {
            return back()->withErrors('Selected billing cycle is not available for this plan.');
        }

        // 4️⃣ Cancel current subscription
        $subscription->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
        ]);

        // 5️⃣ Create new subscription (PENDING until payment)
        $newSubscription = UserSubscription::create([
            'user_id' => auth()->id(),
            'pricing_plan_id' => $newPlan->id,
            'billing_cycle' => $request->billing_cycle, // ✅ FIXED
            'price' => $price->price,
            'starts_at' => now(),
            'ends_at' => $request->billing_cycle === 'monthly'
                ? now()->addMonth()
                : now()->addYear(),
            'status' => 'pending',
        ]);

        // 6️⃣ Create payment record
        SubscriptionPayment::create([
            'user_id' => auth()->id(),
            'user_subscription_id' => $newSubscription->id,
            'amount' => $price->price,
            'currency' => 'RWF',
            'gateway' => 'flutterwave',
            'status' => 'pending',
        ]);

        return redirect()
            ->route('payment.subscription.checkout', $newSubscription)
            ->with('success', 'Upgrade initiated. Redirecting to payment.');
    }


    // Renew subscription
    public function renew(UserSubscription $subscription)
    {

        if ($subscription->status !== 'active') {
            return back()->withErrors('Only active subscriptions can be renewed.');
        }

        $price = $subscription->plan->prices
            ->where('billing_cycle', $subscription->billing_cycle)
            ->first();

        // Create renewal payment
        SubscriptionPayment::create([
            'user_id' => auth()->id(),
            'user_subscription_id' => $subscription->id,
            'amount' => $price->price,
            'currency' => 'RWF',
            'gateway' => 'flutterwave',
            'status' => 'pending',
        ]);

        return redirect()->route('payment.subscription.checkout', $subscription);
    }

    // List all user subscriptions
    public function indexUser()
    {
        $user = Auth::user();
        $subscriptions = $user->subscriptions()->latest()->get(); // assuming User has 'subscriptions' relationship

        return view('user.subscription.index', compact('subscriptions'));
    }

    // Show single subscription details
    public function showUser(UserSubscription $subscription)
    {
        $plans = PricingPlan::where('is_active', true)->get();
        return view('user.subscription.show', compact('subscription', 'plans'));
    }

    public function plan()
    {
        $plans = PricingPlan::with('prices')
            ->where('is_active', true)
            ->get();
        return view('talent-pages.subscription.subscription', compact('plans'));
    }
}
