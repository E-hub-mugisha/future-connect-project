@extends('layouts.user')

@section('content')
<div class="container">
    <h2>Subscription Details</h2>

    <div class="card">
        <div class="card-body">
            <p><strong>Plan:</strong> {{ $subscription->pricingPlan->name }}</p>
            <p><strong>Billing Cycle:</strong> {{ ucfirst($subscription->billing_cycle) }}</p>
            <p><strong>Price:</strong> ${{ $subscription->price }}</p>
            <p><strong>Status:</strong> {{ ucfirst($subscription->status) }}</p>
            <p><strong>Starts At:</strong> {{ $subscription->starts_at->format('d M Y') }}</p>
            <p><strong>Ends At:</strong> {{ $subscription->ends_at->format('d M Y') }}</p>

            <h4>Payment Info</h4>
            @foreach($subscription->payments as $payment)
            <p>
                <strong>Amount:</strong> ${{ $payment->amount }} |
                <strong>Status:</strong> {{ ucfirst($payment->status) }} |
                <strong>Gateway:</strong> {{ $payment->gateway }} |
                <strong>Tx Ref:</strong> {{ $payment->tx_ref ?? 'N/A' }}
            </p>
            @endforeach
        </div>
    </div>
    <div class="mt-4">
        @if($subscription->status === 'active')
        <form action="{{ route('user.subscription.renew', $subscription->id) }}" method="POST" class="d-inline">
            @csrf
            <button type="submit" class="btn btn-success">Renew</button>
        </form>
        <a href="{{ route('user.subscription.upgrade.form', $subscription->id) }}" class="btn btn-primary">Upgrade/Downgrade</a>
        <form action="{{ route('user.subscription.cancel', $subscription->id) }}" method="POST" class="d-inline">
            @csrf
            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to cancel this subscription?')">Cancel</button>
        </form>
        @elseif($subscription->status === 'pending')
        <span class="badge bg-warning">Pending Payment</span>
        @elseif($subscription->status === 'cancelled')
        <span class="badge bg-secondary">Cancelled</span>
        @endif
    </div>

    <a href="{{ route('user.subscription') }}" class="btn btn-secondary mt-3">Back</a>
</div>
@endsection