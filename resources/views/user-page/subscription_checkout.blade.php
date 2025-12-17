@extends('layouts.guest')
@section('title', 'Subscription Checkout')

@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border-radius: 1.2rem;
        background: linear-gradient(145deg, #f7f9fc, #e9eef5);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        transition: .25s ease-in-out;
        margin-bottom: 1.75rem;
    }

    .postLists:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
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

    .form-control,
    .form-select {
        border-radius: 0.75rem;
        border: 1px solid #ced4da;
    }

    .form-control:focus,
    .form-select:focus {
        box-shadow: 0 0 0 0.15rem rgba(0, 123, 255, 0.15);
    }
</style>

<div class="container py-5">
    <div class="card shadow rounded-4">
        <div class="card-body p-4">
            <h4 class="mb-3">Confirm Payment</h4>

            <p><strong>Plan:</strong> {{ $subscription->plan->name }}</p>
            <p><strong>Billing Cycle:</strong> {{ ucfirst($subscription->billing_cycle) }}</p>
            <p><strong>Amount:</strong> ${{ number_format($subscription->price, 2) }}</p>

            <hr>

            <button type="button" id="payBtn"
                class="btn btn-primary btn-lg rounded-pill">
                <span id="payBtnText">
                    <i class="fa fa-money-bill-wave me-1"></i>
                    Pay Now
                </span>
                <span id="payBtnSpinner"
                    class="spinner-border spinner-border-sm d-none"></span>
            </button>
        </div>
    </div>
</div>

{{-- Flutterwave Inline Script --}}
<script src="https://checkout.flutterwave.com/v3.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const payBtn = document.getElementById("payBtn");
        const payBtnText = document.getElementById("payBtnText");
        const payBtnSpinner = document.getElementById("payBtnSpinner");
        const publicKey = "{{ $public_key }}";
        const subscriptionId = "{{ $subscription->id }}";

        if (!payBtn) return;

        payBtn.addEventListener("click", function() {
            payBtn.disabled = true;
            payBtnText.textContent = "Processing Payment...";
            payBtnSpinner.classList.remove("d-none");

            FlutterwaveCheckout({
                public_key: "{{ $public_key }}",
                tx_ref: "SUB_{{ $subscription->id }}_{{ time() }}",
                amount: {{ $subscription->price }},
                currency: "RWF",
                payment_options: "card, mobilemoneyrwanda",

                callback: function (data) {
            window.location.href =
                "{{ route('payment.subscription.callback') }}" +
                "?status=" + data.status +
                "&tx_ref=" + data.tx_ref +
                "&subscriptionId={{ $subscription->id }}";
        },

                customer: {
                    email: "{{ Auth::user()->email }}",
                    name: "{{ Auth::user()->name }}",
                },

                customizations: {
                    title: "Talent Platform Subscription",
                    description: "{{ $subscription->plan->name }} ({{ ucfirst($subscription->billing_cycle) }})",
                    logo: "{{ asset('logo.png') }}",
                }
            });

        });
    });
</script>

@endsection