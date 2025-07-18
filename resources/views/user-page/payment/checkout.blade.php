@extends('layouts.guest')

@section('content')

<script src="https://checkout.flutterwave.com/v3.js"></script>

<style>
    body {
        background-color: #f8f9fa;
    }

    .payment-card {
        max-width: 500px;
        margin: 100px auto;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        background: #fff;
    }

    .btn-pay {
        background-color: #f57c00;
        color: white;
    }

    .btn-pay:hover {
        background-color: #ef6c00;
    }

    .option-icon {
        font-size: 2rem;
        margin-right: 10px;
        color: #007bff;
    }
</style>

<div class="container">
    <div class="payment-card text-center">
        <h3 class="mb-4">Video Payment</h3>

        <p>You need to pay <strong>$5.00</strong> to continue watching this video {{ $story->title }} with ID: {{ $story->id }}.</p>

        <hr class="my-4">

        <h5>Available Payment Options</h5>
        <ul class="list-group text-start mb-3">
            <li class="list-group-item d-flex align-items-center">
                💳 <span class="ms-2">Card (Visa, MasterCard, Verve)</span>
            </li>
            <li class="list-group-item d-flex align-items-center">
                📱 <span class="ms-2">Rwanda Mobile Money (MTN, Airtel)</span>
            </li>
        </ul>

        <button id="payBtn" class="btn btn-pay mt-3 w-100">Pay Now</button>
    </div>
</div>

<script>
    document.getElementById('payBtn').addEventListener('click', function () {

        const userEmail = "{{ $email }}";
        const storyId = {{ $story->id }}; // correctly embeds as integer
        const videoId = "{{ $video_id }}"; // correctly embeds as integer
        const txRef = storyId + "-" + videoId + "-" + Date.now();

        FlutterwaveCheckout({
            public_key: "{{ $public_key }}",
            tx_ref: txRef,
            amount: 5.00,
            currency: "RWF",
            payment_options: "card, mobilemoneyrwanda",
            customer: {
                email: userEmail // get email from logged-in user
            },
            callback: function (data) {
                const url = `/story/payment/callback?story_id=${storyId}&video_id=${videoId}&email=${encodeURIComponent(userEmail)}&status=${encodeURIComponent(data.status)}&tx_ref=${encodeURIComponent(data.tx_ref)}`;
                window.location.href = url;
            },
            onclose: function () {
                alert('Payment process was closed.');
            },
            customizations: {
                title: "Video Payment",
                description: "Pay to watch the video",
                logo: "{{ asset('logo.png') }}",
            },
        });
    });
</script>
@endsection