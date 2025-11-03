@extends('layouts.app')

@section('title', 'Orders for ' . $ticket->type . ' Ticket')

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Orders for: {{ $ticket->type }}</h2>
        <a href="{{ route('admin.events.show', $ticket->event_id) }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left me-1"></i> Back to Event
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table align-middle mb-0">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th class="text-center">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($orders as $order)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $order->user->name ?? $order->customer_name }}</td>
                            <td>{{ $order->user->email ?? $order->customer_email }}</td>
                            <td>{{ number_format($order->total_amount, 2) }} {{ config('app.currency', 'RWF') }}</td>
                            <td>
                                @if($order->payment_status === 'paid')
                                <span class="badge bg-success">Paid</span>
                                @elseif($order->payment_status === 'pending')
                                <span class="badge bg-warning">Pending</span>
                                @else
                                <span class="badge bg-danger">Failed</span>
                                @endif
                            </td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-outline-info rounded-pill" data-bs-toggle="modal" data-bs-target="#paymentModal{{ $order->id }}">
                                    <i class="bi bi-credit-card"></i> View
                                </button>

                                {{-- Payment Modal --}}
                                <div class="modal fade" id="paymentModal{{ $order->id }}" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content rounded-4 shadow-lg">
                                            <div class="modal-header bg-primary text-white rounded-top-4">
                                                <h5 class="modal-title fw-bold">Payment Details</h5>
                                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="modal-body">
                                                    @if($order->payment)
                                                    <p><strong>Transaction Ref:</strong> {{ $order->payment->transaction_id }}</p>
                                                    <p><strong>Amount:</strong> {{ number_format($order->payment->amount, 2) }} {{ config('app.currency', 'RWF') }}</p>
                                                    <p><strong>Status:</strong>
                                                        <span class="badge bg-{{ $order->payment->status === 'paid' ? 'success' : ($order->payment->status === 'pending' ? 'warning' : 'danger') }}">
                                                            {{ ucfirst($order->payment->status) }}
                                                        </span>
                                                    </p>
                                                    <p><strong>Payment Method:</strong> {{ $order->payment->payment_method ?? 'N/A' }}</p>
                                                    <p><strong>Date:</strong> {{ $order->payment->created_at->format('M d, Y H:i') }}</p>
                                                    @else
                                                    <div class="alert alert-warning rounded-3">
                                                        <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                                        No payment record found for this order yet.
                                                    </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {{-- End Modal --}}
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="7" class="text-center text-muted py-4">No orders for this ticket yet.</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection