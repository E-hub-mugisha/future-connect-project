@extends('layouts.guest')

@section('title', 'Checkout')

@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border-radius: 1.2rem;
        background: linear-gradient(145deg, #f7f9fc, #e9eef5);
        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        transition: .25s ease-in-out;
        margin-bottom: 1.75rem;
    }
    .postLists:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(0,0,0,0.10);
    }

    .payment-btn {
        flex: 1 1 auto;
        padding: 0.85rem 1.25rem;
        border-radius: 1rem;
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid #e4e9f2;
    }

    .payment-btn:hover {
        transform: scale(1.04);
        background: #f8faff;
        border-color: #d0d8e5;
    }

    .modal-content {
        border-radius: 1.3rem !important;
        overflow: hidden;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
    }

    .modal-header {
        padding: 1.5rem;
    }

    .info-label {
        font-weight: 600;
        color: #4b5d75;
    }

    .form-control, .form-select {
        border-radius: 0.75rem;
        border: 1px solid #ced4da;
    }

    .form-control:focus, .form-select:focus {
        box-shadow: 0 0 0 0.15rem rgba(0, 123, 255, 0.15);
    }
</style>

<div class="container py-5">

    <h2 class="mb-4 fw-bold">
        <i class="bi bi-bag-check-fill me-2 text-primary"></i>
        Checkout
    </h2>

    @if($cartItems->count() > 0)
    <div class="row g-4">

        <!-- Order Summary -->
        <div class="col-lg-8">
            <div class="card postLists">
                <div class="card-body p-4">

                    <h4 class="fw-semibold mb-3">
                        <i class="bi bi-card-list me-2 text-primary"></i>
                        Order Summary
                    </h4>

                    <div class="table-responsive">
                        <table class="table align-middle mb-0 text-center">
                            <thead class="table-light">
                                <tr>
                                    <th>#</th>
                                    <th class="text-start">Product</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                @php $grandTotal = 0; @endphp
                                @foreach($cartItems as $key => $item)
                                    @php
                                        $itemTotal = $item->quantity * $item->product->price;
                                        $grandTotal += $itemTotal;
                                    @endphp

                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td class="text-start d-flex align-items-center">
                                            <img src="{{ asset('storage/'.$item->product->image) }}"
                                                 width="50"
                                                 class="rounded me-2 shadow-sm"
                                                 alt="{{ $item->product->name }}">
                                            <span>{{ $item->product->name }}</span>
                                        </td>
                                        <td>${{ number_format($item->product->price, 2) }}</td>
                                        <td>{{ $item->quantity }}</td>
                                        <td>${{ number_format($itemTotal, 2) }}</td>
                                    </tr>

                                @endforeach
                            </tbody>
                        </table>
                    </div>

                    <div class="d-flex justify-content-end align-items-center mt-4">
                        <h4 class="fw-bold text-dark">
                            Grand Total: <span class="text-primary">
                                ${{ number_format($grandTotal, 2) }}
                            </span>
                        </h4>
                    </div>

                </div>
            </div>
        </div>

        <!-- Payment Section -->
        <div class="col-lg-4">
            <div class="card postLists">
                <div class="card-body p-4">

                    <h4 class="fw-semibold mb-3">
                        <i class="bi bi-credit-card-2-front me-2 text-success"></i>
                        Payment Options
                    </h4>

                    <div class="d-flex gap-2 flex-wrap">

                        <!-- Flutterwave -->
                        <button type="button"
                            class="btn payment-btn shadow-sm d-flex align-items-center w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#flutterPaymentModal">

                            <img src="{{ asset('assets/img/payment/flutter.png') }}"
                                 width="30"
                                 class="me-2">

                            <span class="fw-semibold">Flutterwave</span>
                        </button>

                    </div>

                    <div class="text-center mt-3">
                        <a href="{{ route('cart.index') }}" class="text-decoration-underline">
                            &larr; Back to Cart
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Flutterwave Modal -->
    <div class="modal fade" id="flutterPaymentModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">

                <div class="modal-header text-white"
                     style="background: linear-gradient(135deg, #0052D4, #4364F7);">
                    <h5 class="modal-title">Flutterwave Payment</h5>
                    <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-4">

                    <p class="fw-semibold mb-3">Please confirm your details before paying.</p>

                    <form id="checkoutForm" method="POST">
                        @csrf

                        <div class="row g-3 mb-3">

                            <div class="col-md-6">
                                <label class="info-label mb-1">Phone</label>
                                <input type="text"
                                       name="phone"
                                       id="phone"
                                       class="form-control"
                                       placeholder="Phone number"
                                       required>
                            </div>

                            <div class="col-md-6">
                                <label class="info-label mb-1">Address</label>
                                <input type="text"
                                       name="address"
                                       id="address"
                                       class="form-control"
                                       placeholder="Delivery address"
                                       required>
                            </div>

                        </div>

                        <h5 class="fw-bold mt-3">
                            Amount to Pay:
                            <span class="text-primary">
                                ${{ number_format($grandTotal, 2) }}
                            </span>
                        </h5>

                        <div class="d-grid gap-2 mt-4">
                            <button type="button" id="payBtn"
                                    class="btn btn-primary btn-lg rounded-pill">
                                <span id="payBtnText">
                                    <i class="fa fa-money-bill-wave me-1"></i>
                                    Pay Now
                                </span>
                                <span id="payBtnSpinner"
                                      class="spinner-border spinner-border-sm d-none"></span>
                            </button>

                            <button type="button"
                                    class="btn btn-light rounded-pill"
                                    data-bs-dismiss="modal">
                                Cancel
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    </div>

    @else
    <div class="alert alert-info text-center rounded-3">
        Your cart is empty.
        <a href="{{ route('products.index') }}" class="text-decoration-underline">Browse Products</a>
    </div>
    @endif
</div>

<script src="https://checkout.flutterwave.com/v3.js"></script>

<script>
document.addEventListener("DOMContentLoaded", () => {
    const payBtn = document.getElementById("payBtn");
    const payBtnText = document.getElementById("payBtnText");
    const payBtnSpinner = document.getElementById("payBtnSpinner");
    const grandTotal = Number("{{ $grandTotal }}");
    const publicKey = "{{ $public_key }}";
    const cartId = "{{ $cartId }}";
    const phone = "{{ Auth::user()->phone ?? '' }}";

    if (!payBtn) return;

    payBtn.addEventListener("click", function () {
        payBtn.disabled = true;
        payBtnText.textContent = "Processing Payment...";
        payBtnSpinner.classList.remove("d-none");

        const txRef = "CART_" + cartId + "_" + Date.now();
        const email = "{{ Auth::user()->email }}";
        const name = "{{ Auth::user()->name }}";

        FlutterwaveCheckout({
            public_key: publicKey,
            tx_ref: txRef,
            amount: grandTotal,
            currency: "RWF",
            payment_options: "card,mobilemoneyrwanda",
            customer: {
                email,
                phonenumber: phone || "0000000000",
                name
            },
            customizations: {
                title: "Cart Checkout",
                description: "Payment for products",
                logo: "{{ asset('logo.png') }}"
            },
            callback: function(data) {
                window.location.href =
                    `/cart/payment/callback?cart_id=${cartId}&amount=${grandTotal}&email=${encodeURIComponent(email)}&status=${encodeURIComponent(data.status)}&tx_ref=${encodeURIComponent(data.tx_ref)}`;
            },
            onclose: function() {
                payBtn.disabled = false;
                payBtnText.innerHTML = '<i class="fa fa-money-bill-wave me-1"></i> Pay Now';
                payBtnSpinner.classList.add("d-none");
            }
        });
    });
});
</script>

@endsection
