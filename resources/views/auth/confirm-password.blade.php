@extends('layouts.auth')
@section('content')

<div class="row gx-0">

    <div class="col-lg-6">
        <div class="authentication-wrapper">
            <div class="authentication-content">
                <div class="login-carousel owl-carousel">
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-01.svg') }}" class="img-fluid" alt="img" />
                        <h2>Looking to Buy a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                    <div class="login-slider">
                        <img src="{{ asset('assets/img/login-card-02.svg') }}" class="img-fluid" alt="img" />
                        <h2>Looking to Sell a service?</h2>
                        <p>Browse Listing & More 900 Services</p>
                    </div>
                </div>
            </div>

            <div class="login-bg">
                <img src="{{ asset('assets/img/bg/shape-01.png') }}" alt="img" class="shape-01" />
                <img src="{{ asset('assets/img/bg/shape-02.png') }}" alt="img" class="shape-02" />
                <img src="{{ asset('assets/img/bg/shape-03.png') }}" alt="img" class="shape-03" />
                <img src="{{ asset('assets/img/bg/shape-04.png') }}" alt="img" class="shape-04" />
                <img src="{{ asset('assets/img/bg/shape-05.png') }}" alt="img" class="shape-05" />
                <img src="{{ asset('assets/img/bg/shape-06.png') }}" alt="img" class="shape-06" />
                <img src="{{ asset('assets/img/bg/shape-07.png') }}" alt="img" class="shape-07" />
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="login-wrapper">
            <div class="login-content">
                <form method="POST" action="{{ route('password.confirm') }}">
                    @csrf

                    <div class="login-userset">
                        <div class="login-logo">
                            <img src="{{ asset('assets/img/logo.svg') }}" alt="img" />
                        </div>

                        <div class="login-card">
                            <div class="login-heading text-start">
                                <h3>Confirm Your Password</h3>
                                <p>This is a secure area of the application. Please confirm your password before continuing.</p>
                            </div>

                            <div>
                                <label class="form-label">Password</label>
                                <div class="form-wrap form-focus pass-group">
                                    <span class="form-icon">
                                        <i class="feather-lock"></i>
                                    </span>
                                    <input id="password" type="password" name="password" class="form-control floating" required autocomplete="current-password">
                                </div>
                                @error('password')
                                    <div class="text-danger mt-1">{{ $message }}</div>
                                @enderror
                            </div>

                            <button type="submit" class="btn btn-primary mt-3">Confirm</button>
                        </div>

                        <div class="acc-in">
                            <p>Want to go back? <a href="{{ url()->previous() }}">Cancel</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>


@endsection

