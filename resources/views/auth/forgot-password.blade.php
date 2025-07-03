@extends('layouts.auth')
@section('content')

<div class="row gx-0">

    <!-- Left Section with Carousel -->
    <div class="col-lg-6">
        <div class="authentication-wrapper">
            <div class="authentication-content">
                <div class="login-carousel owl-carousel">
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-01.svg') }}" class="img-fluid"
                            alt="img" />
                        <h2>Looking to Buy a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-02.svg') }}" class="img-fluid"
                            alt="img" />
                        <h2>Looking to Sell a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                </div>
            </div>

            <div class="login-bg">
                <img src="{{ asset('assets/img/bg/shape-01.png') }}" alt="img"
                    class="shape-01" />
                <img src="{{ asset('assets/img/bg/shape-02.png') }}" alt="img"
                    class="shape-02" />
                <img src="{{ asset('assets/img/bg/shape-03.png') }}" alt="img"
                    class="shape-03" />
                <img src="{{ asset('assets/img/bg/shape-04.png') }}" alt="img"
                    class="shape-04" />
                <img src="{{ asset('assets/img/bg/shape-05.png') }}" alt="img"
                    class="shape-05" />
                <img src="{{ asset('assets/img/bg/shape-06.png') }}" alt="img"
                    class="shape-06" />
                <img src="{{ asset('assets/img/bg/shape-07.png') }}" alt="img"
                    class="shape-07" />
            </div>
        </div>
    </div>

    <!-- Right Section with Forgot Password Form -->
    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form action="{{ route('password.email') }}" method="POST">
                    @csrf
                    <div class="login-userset">
                        <div class="login-logo">
                            <img src="{{ asset('assets/img/logo.svg') }}" alt="img" />
                        </div>
                        <div class="login-card">
                            <div class="login-heading text-start">
                                <h3>Forgot Password</h3>
                                <p>Enter your registered email</p>
                            </div>

                            @if(session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif

                            @error('email')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror

                            <div>
                                <label class="form-label">Email</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-mail"></i>
                                    </span>
                                    <input type="email" name="email" class="form-control floating" required />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        </div>

                        <div class="acc-in">
                            <p>Already have an account? <a href="{{ route('login') }}">Log in</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
@endsection
