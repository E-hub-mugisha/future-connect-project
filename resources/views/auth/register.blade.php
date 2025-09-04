@extends('layouts.auth')
@section('content')


<div class="row gx-0 justify-content-center align-items-center vh-100">


    <!-- Right Section with Registration Form -->
    <div class="col-lg-8">
        <div class="login-wrapper">
            <div class="login-content">
                <div class="auth-content p-4">
                    <form action="{{ route('register') }}" method="POST">
                        @csrf
                        <div class="login-userset">
                            <div class="login-logo">
                                <img src="{{ asset('assets/img/logo.svg') }}" alt="img" style="height: 50px;" />
                            </div>
                            <div class="login-card">
                                <div class="login-heading">
                                    <h3>Hi, Welcome!</h3>
                                    <p>Register to get access to {{ config('app.name') }}</p>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus">
                                        <span class="form-icon">
                                            <i class="feather-user"></i>
                                        </span>
                                        <input type="text" name="name" class="form-control floating" placeholder="Enter your name" required />
                                    </div>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus">
                                        <span class="form-icon">
                                            <i class="feather-mail"></i>
                                        </span>
                                        <input type="email" name="email" class="form-control floating" placeholder="Enter your email" required />
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <select class="form-select" name="role" required>
                                        <option value="" disabled selected>--- Select your role ---</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus pass-group">
                                        <span class="form-icon">
                                            <i class="toggle-password feather-eye-off"></i>
                                        </span>
                                        <input type="password" name="password" class="pass-input form-control floating"
                                           placeholder="Enter your password" required />
                                    </div>
                                </div>

                                <div>
                                    <div class="form-wrap form-focus">
                                        <input type="password" name="password_confirmation" class="form-control floating"
                                            placeholder="Confirm your password" required />
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

</div>

@endsection