@extends('layouts.guest')

@section('content')

<!-- Flutterwave Script -->
<script src="https://checkout.flutterwave.com/v3.js"></script>

<style>
    body {
        background-color: #f8f9fa;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .payment-card {
        max-width: 520px;
        margin: 60px auto;
        padding: 2rem;
        border-radius: 1.25rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        background: #fff;
        text-align: center;
    }

    .payment-title {
        font-weight: 600;
        color: #333;
    }

    .payment-desc {
        color: #555;
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
    }

    .btn-pay {
        background: linear-gradient(135deg, #f57c00, #ef6c00);
        color: white;
        border: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }

    .btn-pay:hover {
        background: linear-gradient(135deg, #ef6c00, #e65100);
        box-shadow: 0 4px 12px rgba(239, 108, 0, 0.4);
    }

    .btn-cancel {
        border: 1px solid #ccc;
        background: #f1f1f1;
        color: #444;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .btn-cancel:hover {
        background: #e2e2e2;
    }

    .payment-options {
        margin: 1rem 0;
        list-style: none;
        padding: 0;
    }

    .payment-options li {
        border: none;
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        border-radius: 0.5rem;
        background: #f9f9f9;
        margin-bottom: 0.5rem;
    }

    .option-icon {
        font-size: 1.6rem;
        margin-right: 10px;
    }

    .btn-group-custom {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    @media (min-width: 576px) {
        .btn-group-custom {
            flex-direction: row;
        }
    }
</style>

<div class="container">
    <div class="payment-card">
        <h3 class="payment-title mb-3">Subscribe to Video Access</h3>
        <p class="payment-desc">
            You need to pay <strong>$5.00</strong> to continue watching
            <strong>{{ $story->title }}</strong> (ID: <code>{{ $story->id }}</code>).
        </p>

        <p>Email: {{ $email }}</p>
        <p>Public Key: {{ $public_key }}</p>
        <p>Story ID: {{ $story_id }}</p>
        <p>Video ID: {{ $video_id }}</p>

        <hr class="my-4">

        <h5 class="mb-3">Available Payment Options</h5>
        <ul class="payment-options text-start">
            <li>
                <span class="option-icon"><i class="fa fa-credit-card"></i></span> Card (Visa, MasterCard, Verve)
            </li>
            <li>
                <span class="option-icon"><i class="fa fa-mobile"></i></span> Rwanda Mobile Money (MTN, Airtel)
            </li>
        </ul>

        <div class="btn-group-custom">
            <button id="payBtn" class="btn btn-pay w-100">
                <span id="payBtnText"><i class="fa fa-money-bill-wave"></i> Pay Now</span>
                <span id="payBtnSpinner" class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
            </button>
            <button class="btn btn-cancel w-100" onclick="window.history.back();"><i class="fa fa-times"></i> Cancel</button>
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

            const userEmail = "{{ $email }}";
            const storyId = "{{ $story->id }}";
            const videoId = "{{ $video_id }}";
            const txRef = storyId + "-" + videoId + "-" + Date.now();

            FlutterwaveCheckout({
                public_key: "{{ $public_key }}",
                tx_ref: txRef,
                amount: 5.00,
                currency: "RWF",
                payment_options: "card, mobilemoneyrwanda",
                customer: {
                    email: userEmail
                },
                callback: function(data) {
                    window.location.href = `/story/payment/callback?story_id=${storyId}&video_id=${videoId}&email=${encodeURIComponent(userEmail)}&status=${encodeURIComponent(data.status)}&tx_ref=${encodeURIComponent(data.tx_ref)}`;
                },
                onclose: function() {
                    payBtnText.innerHTML = '<i class="fa fa-money-bill-wave"></i> Pay Now';
                    payBtnSpinner.classList.add("d-none");
                    payBtn.disabled = false;
                },
                customizations: {
                    title: "Video Payment",
                    description: "Pay to watch the video",
                    logo: "{{ asset('logo.png') }}"
                }
            });
        });
    });
</script>

@endsection