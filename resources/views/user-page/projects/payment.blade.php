@extends('layouts.app')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-6">
            <div class="card shadow-lg rounded-4 p-4 text-center">
                <h3 class="fw-bold mb-3">💳 Complete Your Sponsorship</h3>
                <p class="mb-4">
                    You are sponsoring <strong>{{ $sponsorship->project->title }}</strong><br>
                    Amount: <strong>{{ $sponsorship->amount }} {{ $sponsorship->currency }}</strong>
                </p>

                <button id="payButton" class="btn btn-primary btn-lg rounded-pill w-100 mb-3">
                    Proceed to Payment
                </button>

                <a href="{{ route('user.projects.index') }}" class="btn btn-outline-secondary rounded-pill">
                    Cancel and Return
                </a>
            </div>
        </div>
    </div>
</div>

<script src="https://checkout.flutterwave.com/v3.js"></script>
<script>
document.getElementById('payButton').addEventListener('click', function () {
    FlutterwaveCheckout({
        public_key: "{{ env('FLUTTERWAVE_PUBLIC_KEY') }}",
        tx_ref: "sponsorship_{{ $payment->id }}_{{ time() }}",
        amount: {{ $payment->amount }},
        currency: "{{ $payment->currency }}",
        payment_options: "card, mobilemoney, ussd",
        customer: {
            email: "{{ Auth::user()->email }}",
            phone_number: "{{ Auth::user()->diasporaAccount->phone }}",
            name: "{{ Auth::user()->diasporaAccount->full_name }}"
        },
        customizations: {
            title: "Future Connect Sponsorship",
            description: "Sponsoring {{ $sponsorship->project->title }}",
            logo: "{{ asset('assets/img/logo.png') }}"
        },
        callback: function (data) {
            if (data.status === "successful") {
                // Update payment record via server
                fetch("{{ route('diaspora.sponsorship.success', $sponsorship->id) }}")
                .then(() => {
                    window.location.href = "{{ route('diaspora.sponsorship.success', $sponsorship->id) }}";
                });
            }
        },
        onclose: function() {
            console.log("Payment closed");
        }
    });
});
</script>
@endsection
