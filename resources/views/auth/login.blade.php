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

    <!-- Right Section with Login Form -->
    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form action="{{ route('login') }}" method="POST">
                    @csrf
                    <div class="login-userset">
                        <div class="login-logo">
                            <img src="{{ asset('assets/img/logo.svg') }}" alt="img" />
                        </div>
                        <div class="login-card">
                            <div class="login-heading">
                                <h3>Hi, Welcome Back!</h3>
                                <p>Fill the fields to get into your account</p>
                            </div>

                            <div>
                                <label class="form-label">Email</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-mail"></i>
                                    </span>
                                    <input type="email" name="email" class="form-control floating" required />
                                </div>
                            </div>

                            <div>
                                <label class="form-label">Password</label>
                                <div class="form-wrap form-focus pass-group">
                                    <span class="form-icon">
                                        <i class="toggle-password feather-eye-off"></i>
                                    </span>
                                    <input type="password" name="password" class="pass-input form-control floating"
                                        required />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-wrap">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember"
                                                id="remember">
                                            <label class="form-check-label" for="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-wrap text-md-end">
                                        <a href="{{ route('password.request') }}"
                                            class="forgot-link">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>

                            <div class="form-wrap mantadory-info d-none">
                                <p><i class="feather-alert-triangle"></i>Fill all the fields to submit</p>
                            </div>

                            <button type="submit" class="btn btn-primary">Sign In</button>

                            <div class="login-or">
                                <span class="span-or">or sign up with</span>
                            </div>

                            <ul class="login-social-link">
                                <li>
                                    <a href="#">
                                        <img src="{{ asset('assets/img/icons/google-icon.svg') }}"
                                            alt="Google" /> Google
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="{{ asset('assets/img/icons/fb.svg') }}"
                                            alt="Facebook" /> Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="acc-in">
                            <p>Don’t have an account? <a href="{{ route('register') }}">Sign
                                    Up</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>

@endsection
