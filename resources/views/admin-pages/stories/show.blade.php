@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="main-title mb-4">
                    <h4>{{ $story->title }}</h4>
                </div>
                <div class="card profile-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <div class="d-flex align-items-center flex-shrink-0">
                                <span class="avatar avatar-lg"><img class="rounded-2" src="assets/img/user/user-05.jpg" alt="img"></span>
                                <div class="ms-3">
                                    <h6 class="mb-1 d-inline-flex flex-wrap align-items-center">Adrian Revolt</h6>
                                    <p class="mb-2">California, US</p>
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-star-filled me-2 text-warning"></i>Ratings 5.0 (45 Reviews)</p>
                                </div>
                            </div>
                            <a href="#" class="btn btn-lg btn-dark"><i class="ti ti-user-edit me-1"></i>Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div class="card profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Personal Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Name</h6>
                                <p class="mb-0">David Wilson</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Email</h6>
                                <p class="mb-0">davidwilson@example.com</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Phone</h6>
                                <p class="mb-0">+1(452) 125-6789</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Date</h6>
                                <p class="mb-0">25 Jan 2024</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Speaks</h6>
                                <p class="mb-0">English, Portugese</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Member Since</h6>
                                <p class="mb-0">25 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Address Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Country</h6>
                                <p class="mb-0">United States</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>City</h6>
                                <p class="mb-0">California</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>State</h6>
                                <p class="mb-0">Los Angeles</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Address Line</h6>
                                <p class="mb-0">1234 Sunset Blvd, Apt 56B</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Postal Code</h6>
                                <p class="mb-0">90026</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-0">
                    <div class="card-header">
                        <h6 class="mb-0">About Me</h6>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">Hello, Greetings! My name is Adrian, a professional embroidery digitizer who converts an Image into embroidery files such as DST, PES or any other. I can produce an embroidery design file without any fabric puckering. I'm
                            the guy who has more than 15 years of experience in the field of embroidery design digitizing. I love what I do because embroidery digitizing is my passion and profession. so, get in touch with me if you have any question.
                            thank you!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection