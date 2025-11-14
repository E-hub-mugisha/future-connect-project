@extends('layouts.guest')

@section('content')

<script src="https://checkout.flutterwave.com/v3.js"></script>

<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="card shadow-lg rounded-4 p-4 text-center">
                <h3 class="fw-bold mb-3">💳 Complete Your Sponsorship</h3>
                <p class="mb-4">
                    You are sponsoring <strong>{{ $sponsorship->project->title }}</strong><br>
                    Amount: <strong>{{ $payment->amount }} {{ $payment->currency }}</strong>
                </p>

                <button id="payBtn" class="btn btn-pay w-100">
                    <span id="payBtnText"><i class="fa fa-money-bill-wave"></i> Pay Now</span>
                    <span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                </button>

                <a href="{{ route('user.projects.index') }}" class="btn btn-outline-secondary rounded-pill">
                    Cancel and Return
                </a>
            </div>
        </div>
    </div>
</div>


<script>
document.addEventListener("DOMContentLoaded", function() {

    const payBtn = document.getElementById("payBtn");
    const payBtnText = document.getElementById("payBtnText");
    const payBtnSpinner = document.getElementById("payBtnSpinner");

    if (!payBtn) return;

    payBtn.addEventListener("click", function() {

        // Show spinner
        payBtnText.textContent = "Processing Payment...";
        payBtnSpinner.classList.remove("d-none");
        payBtn.disabled = true;

        if (typeof FlutterwaveCheckout === "undefined") {
            alert("Payment script not loaded yet.");
            payBtnText.innerHTML = '<i class="fa fa-money-bill-wave"></i> Pay Now';
            payBtnSpinner.classList.add("d-none");
            payBtn.disabled = false;
            return;
        }

        const paymentId = "{{ $payment->id }}";
        const amount = "{{ $payment->amount }}";
        const currency = "{{ $payment->currency }}";

        FlutterwaveCheckout({
            public_key: "{{ $public_key }}",
            tx_ref: "sponsorship_{{ $payment->id }}_{{ time() }}",
            amount: amount,
            currency: currency,
            payment_options: "card, mobilemoneyrwanda",

            customer: {
                email: "{{ Auth::user()->email }}",
                phone_number: "{{ Auth::user()->phone }}",
                name: "{{ Auth::user()->name }}"
            },

            customizations: {
                title: "Future Connect Sponsorship",
                description: "Sponsoring {{ $sponsorship->project->title }}",
                logo: "{{ asset('assets/img/logo.png') }}"
            },

            callback: function(data) {
                window.location.href =
                    `/project/payment/callback?payment_id=${paymentId}&status=${data.status}&tx_ref=${data.tx_ref}`;
            }
        });

    }); // END click handler

}); // END DOMContentLoaded
</script>


@endsection