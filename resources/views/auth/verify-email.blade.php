@extends('layouts.auth')
@section('content')

<div class="row gx-0">

    <div class="col-lg-6">
        <div class="authentication-wrapper">
            <div class="authentication-content">
                <div class="login-carousel owl-carousel">
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-01.svg') }}" class="img-fluid" alt="img" />
                        <h2>Looking to Buy a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-02.svg') }}" class="img-fluid" alt="img" />
                        <h2>Looking to Sell a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                </div>
            </div>

            <div class="login-bg">
                <img src="{{ asset('assets/img/bg/shape-01.png') }}" alt="img" class="shape-01" />
                <img src="{{ asset('assets/img/bg/shape-02.png') }}" alt="img" class="shape-02" />
                <img src="{{ asset('assets/img/bg/shape-03.png') }}" alt="img" class="shape-03" />
                <img src="{{ asset('assets/img/bg/shape-04.png') }}" alt="img" class="shape-04" />
                <img src="{{ asset('assets/img/bg/shape-05.png') }}" alt="img" class="shape-05" />
                <img src="{{ asset('assets/img/bg/shape-06.png') }}" alt="img" class="shape-06" />
                <img src="{{ asset('assets/img/bg/shape-07.png') }}" alt="img" class="shape-07" />
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <div class="login-userset">
                    <div class="login-logo">
                        <img src="{{ asset('assets/img/logo.svg') }}" alt="img" />
                    </div>

                    <div class="login-card">
                        <div class="login-heading text-start">
                            <h3>Email Verification</h3>
                            <p>Thanks for signing up! Please verify your email by clicking the link we just sent to your inbox.</p>
                            <p>If you didn't receive the email, you can request another below.</p>
                        </div>

                        @if (session('status') == 'verification-link-sent')
                            <div class="alert alert-success mt-2">
                                A new verification link has been sent to the email address you provided during registration.
                            </div>
                        @endif

                        <form method="POST" action="{{ route('verification.send') }}" class="mt-3">
                            @csrf
                            <button type="submit" class="btn btn-primary w-100">Resend Verification Email</button>
                        </form>

                        <form method="POST" action="{{ route('logout') }}" class="mt-3">
                            @csrf
                            <button type="submit" class="btn btn-outline-primary w-100">Log Out</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

@endsection
