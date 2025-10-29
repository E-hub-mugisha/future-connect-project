@extends('layouts.guest')
@section('title', 'Order Success')
@section('content')

<div class="page-content">
    <div class="container">

        <!-- Received gigs -->
        <div class="service-wrap text-center rounded-0 border-0 shadow-none p-0">
            <div class="received-iocn mb-4 m-auto d-flex align-items-center justify-content-center">
                <i class="ti ti-check"></i>
            </div>
            <h5 class="mb-1"> Thank you! Your Order has been Recieved </h5>
            <p> Order Number : <span> #OR1234 </span> </p>
        </div>
        <!-- Received gigs -->

        <!-- Order details -->
        <div class="service-widget member-widget">
            <h5 class="service-head d-flex align-items-center">Order Details</h5>
            <div class="user-details bg-light p-3 mb-16">
                <div class="user-img service-user">
                    <img src="assets/img/checkout-image.png" alt="img">
                </div>
                <div class="user-info">
                    <h5><span class="me-2">I will design, redesign wordpress website using elementor pro</span> </h5>
                    <p>Delivery : Jan 29 2025</p>
                </div>
            </div>
            <ul class="member-info">
                <li>
                    Gigs Price
                    <span>$45</span>
                </li>
                <li>
                    Gig's Quantity x 3
                    <span>$105</span>
                </li>
                <li>
                    Extra Services
                    <span>$98</span>
                </li>
                <li>
                    Processing Fees
                    <span>$4</span>
                </li>
                <li>
                    Tax (15%)
                    <span>$18</span>
                </li>
            </ul>
            <div class="about-me m-0 pt-3 mt-3 border-top border-grey">
                <h6 class="d-flex justify-content-between align-items-center m-0">Total <span> $298</span></h6>
            </div>
        </div>
        <!-- Order details -->

        <!-- Billing details -->
        <div class="row">
            <div class="col-lg-12">
                <div class="service-widget">
                    <h5 class="service-head mb-3">Billing Information </h5>
                    <h6 class="mb-2">Darren Jurel</h6>
                    <div class="service-text">
                        <p class="mb-1">367 hillcrest lane, Irvine, California, USA</p>
                        <p class="mb-1">Phone Number : 310-437-2766</p>
                        <p class="mb-0">Email ID : info@example.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="service-widget m-0">
                    <h5 class="service-head mb-3">Payment Details </h5>
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="service-text mb-0">
                            <h6 class="mb-1">Payment Method</h6>
                            <p class="mb-0"> Stripe </p>
                        </div>
                        <div class="service-text mb-0">
                            <h6 class="mb-1">Transaction ID</h6>
                            <p class="mb-0">#TXN1324566788929</p>
                        </div>
                        <div class="service-text mb-0">
                            <h6 class="mb-1">Time &amp; Date</h6>
                            <p class="mb-0">25 Jan 2025, 05:24 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Billing details -->
    </div>

</div>

@endsection