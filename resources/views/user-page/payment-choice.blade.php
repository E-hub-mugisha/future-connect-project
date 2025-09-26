@extends('layouts.guest') {{-- Or your main layout --}}
@section('title', 'Complete Your Connection Request')
@section('content')

<!-- Flutterwave Script -->
<script src="https://checkout.flutterwave.com/v3.js"></script>

<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-8">

            {{-- Card --}}
            <div class="card shadow-lg border-0 rounded-4">
                <div class="card-header bg-primary text-white text-center rounded-top">
                    <h4 class="mb-0">Complete Your Connection Request</h4>
                </div>

                <div class="card-body text-center p-4">
                    <p class="lead">
                        You are about to connect with
                        <strong>{{ $connection->talent->name }}</strong>.
                    </p>
                    <p class="text-muted">
                        To proceed, you can choose to <strong>Pay Now</strong> to activate the connection immediately
                        or <strong>Pay Later</strong> and complete the payment anytime from your dashboard.
                    </p>

                    {{-- Amount Display (Optional) --}}
                    @if(isset($connection->amount))
                    <h5 class="my-3">
                        <span class="badge bg-info">Connection Fee:
                            {{ number_format($connection->amount, 2) }} RWF
                        </span>
                    </h5>
                    @endif

                    <div class="d-flex justify-content-center gap-4 mt-4">
                        {{-- Pay Now --}}
                        <button id="payBtn" class="btn btn-success btn-lg px-5 rounded-pill">
                            <span id="payBtnText"><i class="fas fa-credit-card me-2"></i> Pay Now</span>
                            <span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                        </button>

                        {{-- Pay Later --}}
                        <form action="{{ route('connections.payment.later', $connection->id) }}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-outline-secondary btn-lg px-5 rounded-pill">
                                <i class="fas fa-clock me-2"></i> Pay Later
                            </button>
                        </form>
                    </div>
                </div>

                <div class="card-footer bg-light text-center rounded-bottom">
                    <small class="text-muted">
                        You can always find this request in your dashboard to pay later.
                    </small>
                </div>
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

        const userEmail = "{{ $connection->requester->email }}";
        const connectionId = "{{ $connection->id }}";
        const userId = "{{ $connection->requester->id }}";
        const txRef = connectionId + "-" + Date.now();

        FlutterwaveCheckout({
            public_key: "{{ $public_key }}",
            tx_ref: txRef,
            amount: 5.00,
            currency: "RWF",
            payment_options: "card, mobilemoneyrwanda",
            customer: { email: userEmail },
            callback: function(data) {
                window.location.href =
                    `/connection/payment/callback?connection_id=${connectionId}`
                    + `&email=${encodeURIComponent(userEmail)}`
                    + `&user_id=${encodeURIComponent(userId)}`   // ✅ correct key
                    + `&status=${encodeURIComponent(data.status)}`
                    + `&tx_ref=${encodeURIComponent(data.tx_ref)}`;
            },
            onclose: function() {
                payBtnText.innerHTML = '<i class="fa fa-money-bill-wave"></i> Pay Now';
                payBtnSpinner.classList.add("d-none");
                payBtn.disabled = false;
            },
            customizations: {
                title: "Connection Payment",
                description: "Pay to activate the connection",
                logo: "{{ asset('logo.png') }}"
            }
        });
    });
});
</script>

@endsection