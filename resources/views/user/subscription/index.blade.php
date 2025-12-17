@extends('layouts.user')

@section('content')
<div class="container">
    <h2>Your Subscriptions</h2>

    @if($subscriptions->isEmpty())
        <p>You have no subscriptions yet.</p>
    @else
        <table class="table">
            <thead>
                <tr>
                    <th>Plan</th>
                    <th>Billing Cycle</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Starts At</th>
                    <th>Ends At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($subscriptions as $subscription)
                <tr>
                    <td>{{ $subscription->pricingPlan->name }}</td>
                    <td>{{ ucfirst($subscription->billing_cycle) }}</td>
                    <td>${{ $subscription->price }}</td>
                    <td>{{ ucfirst($subscription->status) }}</td>
                    <td>{{ $subscription->starts_at->format('d M Y') }}</td>
                    <td>{{ $subscription->ends_at->format('d M Y') }}</td>
                    <td>
                        <a href="{{ route('user.subscription.show', $subscription->id) }}" class="btn btn-sm btn-primary">View</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    @endif
</div>
@endsection
