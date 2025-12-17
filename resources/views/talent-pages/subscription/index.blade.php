@extends('layouts.talents')
@section('title', 'Subscriptions')
@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-breadcrumb">
            <span>{{ Auth::user()->name }}</span>
            <span>@yield('title')</span>
        </div>
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">Your Subscriptions</h2>
            <div class="d-flex justify-content-end az-content-header-right">
                <a href="{{ route('user.subscription.plan') }}" class="btn btn-primary rounded-pill mb-3 align-self-start">
                    View Pricing Plan
                </a>
            </div>
        </div>
        @if($subscriptions->isEmpty())
        <div class="card shadow-sm p-4">
            <p class="text-center"><span class="badge badge-danger">You have no subscriptions yet.</span></p>
        </div>
        @else
        <div class="card shadow-sm p-4">
            <div class="az-content-label mg-b-5">Your Subscriptions</div>
            <div>
                <table id="example2" class="table">
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
                                <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#subscriptionModal{{ $subscription->id }}">
                                    View Subscription Details
                                </button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        @endif
    </div>
</div>


@foreach($subscriptions as $subscription)
<!-- Modal -->
<div class="modal fade" id="subscriptionModal{{ $subscription->id }}" tabindex="-1" aria-labelledby="subscriptionModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="subscriptionModalLabel">Subscription Details</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <div class="card border-0">
                    <div class="card-body">
                        <p><strong>Plan:</strong> {{ $subscription->pricingPlan->name }}</p>
                        <p><strong>Billing Cycle:</strong> {{ ucfirst($subscription->billing_cycle) }}</p>
                        <p><strong>Price:</strong> ${{ $subscription->price }}</p>
                        <p><strong>Status:</strong> {{ ucfirst($subscription->status) }}</p>
                        <p><strong>Starts At:</strong> {{ $subscription->starts_at->format('d M Y') }}</p>
                        <p><strong>Ends At:</strong> {{ $subscription->ends_at->format('d M Y') }}</p>

                        <h5 class="mt-3">Payment Info</h5>
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
            </div>

            <div class="modal-footer d-flex flex-wrap justify-content-between">
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
                @elseif($subscription->status === 'trialing')
                <a href="{{ route('user.subscription.upgrade.form', $subscription->id) }}" class="btn btn-primary">Upgrade/Downgrade</a>
                <form action="{{ route('user.subscription.cancel', $subscription->id) }}" method="POST" class="d-inline">
                    @csrf
                    <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to cancel this subscription?')">Cancel</button>
                </form>
                @endif

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@endforeach

@endsection