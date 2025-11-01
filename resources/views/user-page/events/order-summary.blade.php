@extends('layouts.guest')

@section('title', 'Order Summary & Payment')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-10">

            {{-- Page Header --}}
            <div class="text-center mb-5">
                <h1 class="fw-bold text-primary">Order Summary</h1>
                <p class="text-muted">Review your ticket and event details before proceeding to payment.</p>
            </div>

            {{-- Event Info --}}
            <div class="card shadow-sm border-0 mb-4 rounded-4">
                <div class="card-body">
                    <h5 class="fw-semibold mb-3 text-primary">Event Details</h5>
                    <div class="row g-3 align-items-center">
                        <div class="col-md-4">
                            <img src="{{ asset($order->items->first()->ticket->event->image ?? 'default-event.jpg') }}" class="img-fluid rounded-4 shadow-sm" alt="{{ $order->items->first()->ticket->event->title }}">
                        </div>
                        <div class="col-md-8">
                            <h4 class="fw-bold">{{ $order->items->first()->ticket->event->title }}</h4>
                            <p class="mb-1"><i class="fa fa-map-marker-alt me-2 text-danger"></i>{{ $order->items->first()->ticket->event->venue ?? 'Online / Hybrid' }}</p>
                            <p class="mb-1"><i class="fa fa-calendar me-2 text-primary"></i>{{ \Carbon\Carbon::parse($order->items->first()->ticket->event->event_date)->format('F d, Y') }}, {{ \Carbon\Carbon::parse($order->items->first()->ticket->event->start_time)->format('h:i A') }} - {{ \Carbon\Carbon::parse($order->items->first()->ticket->event->end_time)->format('h:i A') }}</p>
                            <p class="text-secondary">{{ $order->items->first()->ticket->event->description }}</p>
                            <span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">{{ ucfirst($order->items->first()->ticket->event->type) }} Event</span>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Customer Info --}}
            <div class="card shadow-sm border-0 mb-4 rounded-4">
                <div class="card-body">
                    <h5 class="fw-semibold mb-3 text-primary">Customer Details</h5>
                    <div class="row g-3">
                        <div class="col-md-4"><p><strong>Name:</strong> {{ $order->customer_name }}</p></div>
                        <div class="col-md-4"><p><strong>Email:</strong> {{ $order->customer_email }}</p></div>
                        <div class="col-md-4"><p><strong>Phone:</strong> {{ $order->customer_phone }}</p></div>
                    </div>
                </div>
            </div>

            {{-- Tickets Table --}}
            <div class="card shadow-sm border-0 mb-4 rounded-4">
                <div class="card-body">
                    <h5 class="fw-semibold mb-3 text-primary">Tickets Purchased</h5>
                    <div class="table-responsive">
                        <table class="table table-hover text-center align-middle mb-0">
                            <thead class="table-primary">
                                <tr>
                                    <th>Attendee</th>
                                    <th>Ticket Type</th>
                                    <th>Price</th>
                                    <th>Ticket Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($order->items as $item)
                                    <tr>
                                        <td>{{ $item->attendee_name }}</td>
                                        <td>{{ $item->ticket->type }}</td>
                                        <td>{{ number_format($item->price, 2) }} RWF</td>
                                        <td>
                                            @foreach($item->codes as $code)
                                                <span class="badge bg-secondary">{{ $code->code }}</span>
                                            @endforeach
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {{-- Total & Actions --}}
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-body text-center">
                    <h4 class="fw-bold text-success mb-4">Total: {{ number_format($order->total_amount, 2) }} RWF</h4>
                    <button class="btn btn-primary w-50 fw-semibold rounded-pill" data-bs-toggle="modal" data-bs-target="#confirmPaymentModal">
                        <i class="fa fa-money-bill-wave me-1"></i> Proceed to Pay
                    </button>
                    <button class="btn btn-outline-secondary w-25 ms-2 rounded-pill" onclick="window.history.back();">
                        <i class="fa fa-times"></i> Cancel
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>

{{-- Confirmation Modal --}}
<div class="modal fade" id="confirmPaymentModal" tabindex="-1" aria-labelledby="confirmPaymentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4 shadow">
            <div class="modal-header bg-primary text-white rounded-top-4">
                <h5 class="modal-title fw-bold" id="confirmPaymentModalLabel"><i class="bi bi-exclamation-circle me-2"></i> Confirm Payment</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <p class="mb-3">You are about to pay <strong>{{ number_format($order->total_amount, 2) }} RWF</strong> for your tickets.</p>
                <p>Event: <strong>{{ $order->items->first()->ticket->event->title }}</strong></p>
                <p>Number of Tickets: <strong>{{ $order->items->count() }}</strong></p>
                <p>Do you want to proceed?</p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success rounded-pill" id="confirmPayBtn">
                    <i class="fa fa-money-bill-wave me-1"></i> Pay Now
                </button>
            </div>
        </div>
    </div>
</div>

<script src="https://checkout.flutterwave.com/v3.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const confirmPayBtn = document.getElementById('confirmPayBtn');
    const orderId = "{{ $order->id }}";
    const customerEmail = "{{ $order->customer_email }}";
    const customerName = "{{ $order->customer_name }}";
    const customerPhone = "{{ $order->customer_phone }}";
    const totalAmount = "{{ $order->total_amount }}";

    confirmPayBtn.addEventListener('click', function() {
        confirmPayBtn.disabled = true;
        confirmPayBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';

        FlutterwaveCheckout({
            public_key: "{{ env('FLW_PUBLIC_KEY') }}",
            tx_ref: `TCKT${orderId}_{{ uniqid() }}`,
            amount: parseFloat(totalAmount),
            currency: "RWF",
            payment_options: "card, ussd, banktransfer",
            customer: {
                email: customerEmail,
                name: customerName,
                phone_number: customerPhone
            },
            callback: function(data) {
                window.location.href = `/event/payment/callback?order_id=${orderId}&email=${encodeURIComponent(customerEmail)}&status=${encodeURIComponent(data.status)}&tx_ref=${encodeURIComponent(data.tx_ref)}`;
            },
            onclose: function() {
                confirmPayBtn.disabled = false;
                confirmPayBtn.innerHTML = '<i class="fa fa-money-bill-wave me-1"></i> Pay Now';
            },
            customizations: {
                title: "Event Tickets",
                description: "Payment for tickets to {{ $order->items->first()->ticket->event->title }}",
                logo: "{{ asset('logo.png') }}"
            }
        });
    });
});
</script>
@endsection
