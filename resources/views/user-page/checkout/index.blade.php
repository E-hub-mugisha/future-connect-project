@extends('layouts.guest')

@section('title', 'Checkout')

@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        transition: .25s;
        margin-bottom: 1.75rem;
    }

    .payment-btn {
        flex: 1 1 auto;
        padding: 0.75rem 1.25rem;
        border-radius: 1rem;
        transition: all 0.2s ease-in-out;
    }

    .payment-btn:hover {
        transform: scale(1.03);
    }
</style>

<div class="container py-5">
    <h2 class="mb-4"><i class="bi bi-bag-check-fill me-2"></i>Checkout</h2>

    @if($cartItems->count() > 0)
    <div class="row g-4">
        <!-- Order Summary -->
        <div class="col-lg-8">
            <div class="card postLists shadow-sm rounded-4">
                <div class="card-body p-4">
                    <h4 class="mb-3"><i class="bi bi-card-list me-2"></i>Order Summary</h4>
                    <div class="table-responsive">
                        <table class="table align-middle text-center mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
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
                                        <img src="{{ asset('storage/'.$item->product->image) }}" alt="{{ $item->product->name }}" width="50" class="rounded me-2">
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
                        <h4>Grand Total: $<span id="grand-total">{{ number_format($grandTotal, 2) }}</span></h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Payment Section -->
        <div class="col-lg-4">
            <div class="card postLists shadow-sm rounded-4">
                <div class="card-body p-4">
                    <h4 class="mb-3"><i class="bi bi-credit-card-2-front me-2"></i>Payment Options</h4>
                    <div class="d-flex gap-2 flex-wrap">
                        <!-- Flutterwave -->
                        <button type="button" class="btn payment-btn shadow-sm text-start"
                            data-bs-toggle="modal" data-bs-target="#flutterPaymentModal">
                            <img src="{{ asset('assets/img/payment/flutter.png') }}" alt="Flutterwave" width="30" class="me-2 align-middle">
                            Flutterwave
                        </button>
                    </div>
                    <div class="text-center mt-3">
                        <a href="{{ route('cart.index') }}" class="text-decoration-underline">&larr; Back to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Flutterwave Payment Modal -->
    <div class="modal fade" id="flutterPaymentModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                    <h5 class="modal-title">Checkout & Payment</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p class="fw-semibold">You are about to pay using <strong>Flutterwave</strong>.</p>
                    <form id="checkoutForm" method="POST">
                        @csrf
                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone" required>
                            </div>
                            <div class="col-md-6">
                                <input type="text" name="address" id="address" class="form-control required-input" placeholder="Address" required>
                            </div>
                        </div>
                        <h5>Total: ${{ number_format($grandTotal, 2) }}</h5>
                        <div class="d-grid gap-2 mt-3">
                            <button type="button" id="payBtn" class="btn btn-primary btn-lg rounded-pill">
                                <span id="payBtnText"><i class="fa fa-money-bill-wave"></i> Pay Now</span>
                                <span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                            </button>
                            <button type="button" class="btn btn-light rounded-pill" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @else
    <div class="alert alert-info rounded-3 text-center">
        Your cart is empty. <a href="{{ route('products.index') }}" class="text-decoration-underline">Browse Products</a>
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

        if (!payBtn) return;

        payBtn.addEventListener("click", () => {
            

            payBtn.disabled = true;
            payBtnText.textContent = "Processing Payment...";
            payBtnSpinner.classList.remove("d-none");

            const txRef = "CART_" + cartId + "_" + Date.now();
            const userEmail = "{{ Auth::user()->email }}";
            const userName = "{{ Auth::user()->name }}";

            FlutterwaveCheckout({
                public_key: publicKey,
                tx_ref: txRef,
                amount: grandTotal,
                currency: "RWF",
                payment_options: "card, mobilemoneyrwanda",
                customer: {
                    email: userEmail,
                    phonenumber: phone || "0000000000",
                    name: userName
                },
                customizations: {
                    title: "Cart Payment",
                    description: "Payment for your cart items",
                    logo: "{{ asset('logo.png') }}"
                },
                callback: function(data) {
                    window.location.href = `/cart/payment/callback?cart_id=${cartId}&amount=${amount}&email=${encodeURIComponent(userEmail)}&status=${encodeURIComponent(data.status)}&tx_ref=${encodeURIComponent(data.tx_ref)}`;
                },
                onclose: function() {
                    payBtn.disabled = false;
                    payBtnText.innerHTML = '<i class="fa fa-money-bill-wave"></i> Pay Now';
                    payBtnSpinner.classList.add("d-none");
                }
            });
        });
    });
</script>

@endsection