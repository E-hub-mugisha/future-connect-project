@extends('layouts.auth')
@section('title', 'Reset Password')
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
                <form method="POST" action="{{ route('password.store') }}">
                    @csrf
                    <div class="login-userset postLists">
                        <div class="login-logo">
                            <img src="assets/img/logo.svg" alt="img">
                        </div>
                        <div class="login-card row">
                            <!-- Password Reset Token -->
                            <input type="hidden" name="token" value="{{ $request->route('token') }}">

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
                                    {{ __('Reset Password') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection