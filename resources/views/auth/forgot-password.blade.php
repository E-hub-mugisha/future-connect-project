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
                <form method="POST" action="{{ route('password.email') }}">
                    @csrf
                    <div class="login-userset postLists">
                        <div class="login-logo">
                            <img src="assets/img/logo.svg" alt="img">
                        </div>
                        <div class="login-card">
                            <div class="login-heading">
                                <p>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                            </div>
                            <!-- Email Address -->
                            <div>
                                <label for="email" :value="__('Email')">Email</label>
                                <input id="email" class="form-control floating" type="email" name="email" :value="old('email')" required autofocus />
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <button class="btn btn-primary" type="submit">
                                    {{ __('Email Password Reset Link') }}
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