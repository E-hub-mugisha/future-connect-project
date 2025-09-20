@extends('layouts.auth')
@section('content')


<div class="row gx-0 justify-content-center align-items-center vh-100">

    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <div class="auth-content p-4">
                    <form action="{{ route('login') }}" method="POST">
                        @csrf
                        <div class="login-userset">
                            <!-- <div class="login-logo">
                                <img src="{{ asset('assets/img/logo.svg') }}" alt="img" style="height: 50px;" />
                            </div> -->
                            <div class="login-card">
                                <div class="login-heading">
                                    <h3>Hi, Welcome Back!</h3>
                                    <p>Fill the fields to get into your account</p>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus">
                                        <span class="form-icon">
                                            <i class="feather-mail"></i>
                                        </span>
                                        <input type="email" name="email" class="form-control floating" placeholder="Enter your email" required />
                                    </div>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus pass-group">
                                        <span class="form-icon">
                                            <i class="toggle-password feather-eye-off"></i>
                                        </span>
                                        <input type="password" name="password" class="pass-input form-control floating" placeholder="Enter your password" required />
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

</div>

@endsection