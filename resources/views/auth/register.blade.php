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

    <!-- Right Section with Registration Form -->
    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form action="{{ route('register') }}" method="POST">
                    @csrf
                    <div class="login-userset">
                        <div class="login-logo">
                            <img src="{{ asset('assets/img/logo.svg') }}" alt="img" />
                        </div>
                        <div class="login-card">
                            <div class="login-heading">
                                <h3>Hi, Welcome!</h3>
                                <p>Register to get access to DreamGigs</p>
                            </div>

                            <div>
                                <label class="form-label">Name</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-user"></i>
                                    </span>
                                    <input type="text" name="name" class="form-control floating" required />
                                </div>
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

                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <select class="form-select" name="role" required>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select class="form-select" name="active" required>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
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

                            <div>
                                <label class="form-label">Confirm Password</label>
                                <div class="form-wrap form-focus">
                                    <input type="password" name="password_confirmation" class="form-control floating"
                                        required />
                                </div>
                            </div>

                            <div class="form-wrap">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terms" required>
                                    <label class="form-check-label" for="terms">
                                        By signing up you agree to our <a
                                            href="{{ url('terms-condition') }}"
                                            class="terms-links">Terms of Use</a> and <a
                                            href="{{ url('privacy-policy') }}"
                                            class="terms-links">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Sign Up</button>

                            <div class="login-or">
                                <span class="span-or">or sign up with</span>
                            </div>

                            <!-- Social Links can be added here -->

                        </div>

                        <div class="acc-in">
                            <p>Already have an account? <a href="{{ route('login') }}">Sign In</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>

@endsection
