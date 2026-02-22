@extends('layouts.auth')
@section('title', 'Register')
@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #3d4648;
        border-radius: 3px;
        background: #060f11;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>

<!-- Sign In -->
<div class="row gx-0 justify-content-center">
    <div class="col-md-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="login-userset postLists">
                        <div class="login-logo">
                            <img src="assets/img/logo.svg" alt="img">
                        </div>
                        <div class="login-card row">
                            <div class="login-heading">
                                <h3>Hi, Welcome Back!</h3>
                                <p>Fill the fields to get into your account</p>
                            </div>
                            <!-- Name -->
                            <div>
                                <label for="name" :value="__('Name')">Name</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-user"></i>
                                    </span>
                                    <input id="name" class="form-control floating" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
                                </div>
                            </div>

                            <!-- Email Address -->
                            <div>
                                <label for="email" :value="__('Email')">Email</label>
                                <div class="form-wrap form-focus">
                                    <span class="form-icon">
                                        <i class="feather-user"></i>
                                    </span>
                                    <input id="email" class="form-control floating" type="email" name="email" :value="old('email')" required autocomplete="username" />
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="col-md-6">
                                <label for="password" :value="__('Password')">Password</label>

                                <div class="form-wrap form-focus pass-group">
                                    <span class="form-icon">
                                        <i class="toggle-password feather-eye-off"></i>
                                    </span>
                                    <input id="password" class="form-control floating"
                                        type="password"
                                        name="password"
                                        required autocomplete="new-password" />

                                </div>
                            </div>

                            <!-- Confirm Password -->
                            <div class="col-md-6">
                                <label for="password_confirmation" :value="__('Confirm Password')">Confirm Password</label>
                                <div class="form-wrap form-focus pass-group">
                                    <span class="form-icon">
                                        <i class="toggle-password feather-eye-off"></i>
                                    </span>
                                    <input id="password_confirmation" class="form-control floating"
                                        type="password"
                                        name="password_confirmation" required autocomplete="new-password" />
                                </div>
                            </div>
                            <div>
                                <div class="form-wrap">
                                    <div class="form-check">
                                        <input class="form-check-input" id="remember_me" type="checkbox" value="" name="remember">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            By login you agree to our Terms of Use and Privacy Policy
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end">
                                <button class="btn btn-primary" type="submit">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                        <div class="acc-in mb-4">
                            <p>Already have an account? <a href="{{ route('login') }}">Sign In</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection