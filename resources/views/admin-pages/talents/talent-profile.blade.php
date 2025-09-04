@extends('layouts.app')
@section('title', 'User Profile')
@section('content')

<div class="page-wrapper">
    <div class="page-content bg-light">
        <div class="row justify-content-center">
            <div class="col-xl-10">

                {{-- Page Title --}}
                <div class="main-title mb-4">
                    <h4>My Profile</h4>
                </div>

                {{-- Profile Header --}}
                <div class="card mb-4 profile-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <div class="d-flex align-items-center flex-shrink-0">
                                <span class="avatar avatar-lg">
                                    <img class="rounded-2" src="{{ $talent->image ? asset('future-connect/public/image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img">
                                </span>
                                <div class="ms-3">
                                    <h6 class="mb-1 d-flex align-items-center flex-wrap">
                                        {{ $talent->name }}
                                        <span class="badge bg-success ms-2 rounded-pill">{{ $talent->stories_count ?? 0 }} Stories</span>
                                    </h6>
                                    <p class="mb-1">{{ $talent->address }}</p>
                                    <p class="mb-0 text-muted">
                                        <i class="ti ti-star-filled text-warning me-1"></i>
                                        Ratings {{ number_format($talent->feedback->avg('rating'), 1) }} ({{ $talent->feedback->count() }} Reviews)
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex gap-2 mt-2 mt-md-0">
                                <a class="btn btn-dark btn-md" data-bs-toggle="modal" data-bs-target="#talentEditModal{{ $talent->id }}">
                                    <i class="ti ti-user-edit me-1"></i> Edit Profile
                                </a>
                                <a class="btn btn-primary btn-md">
                                    <i class="ti ti-phone me-1"></i> Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Personal Details --}}
                <div class="card mb-4 profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Personal Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Name</h6>
                                <p class="mb-0">{{ $talent->name }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Email</h6>
                                <p class="mb-0"><a href="mailto:{{ $talent->email }}">{{ $talent->email }}</a></p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Phone</h6>
                                <p class="mb-0">{{ $talent->phone }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Member Since</h6>
                                <p class="mb-0">{{ \Carbon\Carbon::parse($talent->created_at)->format('d M Y') }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Language(s)</h6>
                                <p class="mb-0">{{ $talent->language }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Rating</h6>
                                <p class="mb-0">{{ number_format($talent->feedback->avg('rating'), 1) }} / 5</p>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Address Details --}}
                <div class="card mb-4 profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Address Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Country</h6>
                                <p class="mb-0">{{ $talent->country ?? 'N/A' }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>City</h6>
                                <p class="mb-0">{{ $talent->city ?? 'N/A' }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>State</h6>
                                <p class="mb-0">{{ $talent->state ?? 'N/A' }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Address Line</h6>
                                <p class="mb-0">{{ $talent->address_line ?? 'N/A' }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Postal Code</h6>
                                <p class="mb-0">{{ $talent->postal_code ?? 'N/A' }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- About Me --}}
                <div class="card mb-4 profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">About Me</h5>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">{{ $talent->description ?? 'No description available.' }}</p>
                    </div>
                </div>

                {{-- Skills --}}
                <div class="card mb-4 profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Skills</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge bg-light text-dark fw-medium"><i class="ti ti-point-filled me-1"></i> {{ $talent->skill }}</span>
                        </div>
                    </div>
                </div>

                {{-- Category --}}
                <div class="card mb-4 profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Category</h5>
                    </div>
                    <div class="card-body">
                        <span class="badge bg-light text-dark fw-medium"><i class="ti ti-point-filled me-1"></i> {{ $talent->category->name ?? 'Uncategorized' }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection
