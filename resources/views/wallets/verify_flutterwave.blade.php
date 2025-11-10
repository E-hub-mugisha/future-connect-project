@extends('layouts.nonHeader')
@section('title', 'Upgrade to Verified Membership')
@section('content')

<div class="container py-5 d-flex justify-content-center align-items-center" style="min-height: 70vh;">
    <div class="card shadow-lg rounded-4 p-4 p-md-5 text-center" style="max-width: 480px; width: 100%;">
        <div class="card-body">
            <div class="mb-4">
                <i class="fa fa-user-check text-warning" style="font-size: 3rem;"></i>
            </div>
            <h3 class="card-title mb-3 fw-bold">Upgrade to Verified</h3>
            <p class="text-muted mb-4">
                Secure your Verified status on the platform by completing the payment.
            </p>

            <div class="mb-4">
                <span class="h4 fw-bold">{{ number_format($transaction->amount, 2) }} RWF</span>
            </div>

            <button id="flutterwave-pay-btn" class="btn btn-warning btn-lg w-100 fw-semibold d-flex justify-content-center align-items-center gap-2" style="padding: 0.75rem 1.5rem; font-size: 1.1rem;">
                <i class="fa fa-credit-card"></i> Pay Now
                <span id="spinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
            </button>

            <p class="mt-3 text-muted small">Payment is securely processed via Flutterwave.</p>
        </div>
    </div>
</div>

<style>
    body {
        background: #f4f6f9;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }

    #flutterwave-pay-btn {
        transition: all 0.3s ease;
    }

    #flutterwave-pay-btn:hover {
        filter: brightness(1.05);
    }
</style>

<script src="https://checkout.flutterwave.com/v3.js"></script>
<script>
document.getElementById('flutterwave-pay-btn').addEventListener('click', function () {
    FlutterwaveCheckout({
        public_key: "{{ $public_key }}",
        tx_ref: "VERIFIED-{{ $transaction->id }}-{{ time() }}",
        amount: {{ $transaction->amount }},
        currency: "RWF",
        payment_options: "card, mobilemoneyrwanda",
        customer: {
            email: "{{ Auth::user()->email }}",
            name: "{{ Auth::user()->name }}"
        },
        callback: function(data) {
            window.location.href = `/membership/verify/callback?transaction_id={{ $transaction->id }}&status=${data.status}&tx_ref=${data.tx_ref}`;
        },
        onclose: function() { },
        customizations: {
            title: "Upgrade to Verified",
            description: "Verified Membership Payment",
            logo: "{{ asset('logo.png') }}"
        }
    });
});
</script>
@endsection
