@extends('layouts.auth')
@section('content')

<div class="row gx-0 justify-content-center align-items-center vh-100">

    <!-- Right Section with Forgot Password Form -->
    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <div class="auth-content p-4">
                    <form action="{{ route('password.email') }}" method="POST">
                        @csrf
                        <div class="login-userset">
                            <div class="login-logo">
                                <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo.svg') }}" alt="img" style="height: 50px;" /></a>
                            </div>
                            <div class="login-card">
                                <div class="login-heading text-start">
                                    <h3>Forgot Password</h3>
                                    <p>Enter your registered email to reset your password</p>
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
                                    <div class="form-wrap form-focus">
                                        <span class="form-icon">
                                            <i class="feather-mail"></i>
                                        </span>
                                        <input type="email" name="email" class="form-control floating" placeholder="Enter your email" required />
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary mt-3">Reset Password</button>
                            </div>

                            <div class="acc-in">
                                <p>Already remember your password? <a href="{{ route('login') }}">Log in</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection