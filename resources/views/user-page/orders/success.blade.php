@extends('layouts.guest')
@section('title', 'Order Success')
@section('content')

<div class="page-content">
    <div class="container">

        <!-- Received -->
        <div class="service-wrap text-center rounded-0 border-0 shadow-none p-0">
            <div class="received-iocn mb-4 m-auto d-flex align-items-center justify-content-center">
                <i class="ti ti-check"></i>
            </div>

            <h5 class="mb-1">Thank you! Your order has been received</h5>

            <p>Order Number :
                <span>#{{ $order->id }}</span>
            </p>
        </div>
        <!-- Received -->

        <!-- Order details -->
        <div class="service-widget member-widget">
            <h5 class="service-head d-flex align-items-center">Order Details</h5>

            @foreach($order->items as $item)
            <div class="user-details bg-light p-3 mb-3 d-flex align-items-center">

                <div class="user-img service-user me-3">
                    <img src="{{ asset('storage/'.$item->product->image ?? 'default.png') }}" alt="{{ $item->product->name ?? 'Product Deleted' }}" width="80">
                </div>

                <div class="user-info">
                    <h5 class="mb-1">{{ $item->product->name ?? 'Product Deleted' }}</h5>
                    <p>Delivery : {{ $order->delivery_date?->format('M d Y') ?? 'N/A' }}</p>
                    <p>Price: ${{ number_format($item->price, 2) }} x {{ $item->quantity }} = ${{ number_format($item->price * $item->quantity, 2) }}</p>
                </div>

            </div>
            @endforeach

            <ul class="member-info">
                <li>Subtotal <span>${{ number_format($order->items->sum(fn($i) => $i->price * $i->quantity), 2) }}</span></li>
                <li>Quantity <span>{{ $order->items->sum('quantity') }}</span></li>
                @if($order->extras > 0)
                <li>Extra Services <span>${{ number_format($order->extras, 2) }}</span></li>
                @endif
                @if($order->processing_fee > 0)
                <li>Processing Fee <span>${{ number_format($order->processing_fee, 2) }}</span></li>
                @endif
                @if($order->tax > 0)
                <li>Tax ({{ $order->tax_rate }}%) <span>${{ number_format($order->tax, 2) }}</span></li>
                @endif
            </ul>

            <div class="about-me m-0 pt-3 mt-3 border-top border-grey">
                <h6 class="d-flex justify-content-between align-items-center m-0">
                    Total
                    <span>${{ number_format($order->total, 2) }}</span>
                </h6>
            </div>
        </div>
        <!-- Order details -->

        <!-- Billing details -->
        <div class="row">
            <div class="col-lg-12">
                <div class="service-widget">
                    <h5 class="service-head mb-3">Billing Information</h5>
                    <h6 class="mb-2">{{ $order->user->name }}</h6>
                    <div class="service-text">
                        <p class="mb-1">{{ $order->user->address }}</p>
                        <p class="mb-1">Phone : {{ $order->user->phone }}</p>
                        <p class="mb-0">Email : {{ $order->user->email }}</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="service-widget m-0">
                    <h5 class="service-head mb-3">Payment Details</h5>
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="service-text mb-0">
                            <h6 class="mb-1">Payment Method</h6>
                            <p class="mb-0">{{ ucfirst($order->payment_method) }}</p>
                        </div>

                        <div class="service-text mb-0">
                            <h6 class="mb-1">Transaction ID</h6>
                            <p class="mb-0">#{{ $order->transaction_ref }}</p>
                        </div>

                        <div class="service-text mb-0">
                            <h6 class="mb-1">Time & Date</h6>
                            <p class="mb-0">{{ $order->created_at->format('d M Y, h:i A') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Billing details -->

    </div>
</div>

@endsection
