@extends('layouts.auth')
@section('title', 'Login')
@section('content')

<style>

    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>

<!-- Sign In -->
<div class="row gx-0 justify-content-center">
    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="login-userset postLists">
                        <div class="login-logo">
                            <img src="assets/img/logo.svg" alt="img">
                        </div>
                        <div class="login-card">
                            <div class="login-heading">
                                <h3>Hi, Welcome Back!</h3>
                                <p>Fill the fields to get into your account</p>
                            </div>
                            <!-- Email Address -->
                            <div>
                                <label for="email">{{ __('Email') }}</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-user"></i>
                                    </span>
                                    <input id="email" class="form-control floating" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="mt-4">
                                <label for="password" :value="__('Password')">{{ __('Password') }}</label>
                                <div class="form-wrap form-focus pass-group">
                                    <span class="form-icon">
                                        <i class="toggle-password feather-eye-off"></i>
                                    </span>
                                    <input id="password" class="form-control floating"
                                        type="password"
                                        name="password"
                                        required autocomplete="current-password" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-wrap">
                                        <div class="form-check">
                                            <input class="form-check-input" id="remember_me" type="checkbox" value="" name="remember">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-wrap text-md-end">
                                        @if (Route::has('password.request'))
                                        <a href="{{ route('password.request') }}" class="forgot-link">Forgot your Password?</a>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end mt-4">

                                <button class="btn btn-primary" type="submit">
                                    {{ __('Log in') }}
                                </button>
                            </div>
                        </div>
                        <div class="acc-in mb-4">
                            <p>Don’t have an account? <a href="{{ route('register') }}">Sign Up</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection