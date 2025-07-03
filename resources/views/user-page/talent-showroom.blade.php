@extends('layouts.guest')
@section('content')
<div>

    <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
        <div class="breadcrumb-img">
            <div class="breadcrumb-left">
                <img src="/assets/img/bg/banner-bg-03.png" alt="img" />
            </div>
        </div>
        <div class="container">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="/skills">Skills</a>
                    </li>
                </ol>
            </nav>
            <h2 class="breadcrumb-title">
                {skill.name }
            </h2>
        </div>
    </div>


    <div class="page-content content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <div class="title-sec">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h3>Matched Talents</h3>
                                <p>Discover talents that align with your preferences</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        @forelse($matchedTalents as $talent)
                            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div class="gigs-grid">
                                    <div class="gigs-img position-relative">
                                        <a
                                            href="{{ url('/talent/' . $talent->id) }}">
                                            <img src="{{ $talent->profile_image ? asset('uploads/' . $talent->profile_image) : asset('assets/img/user/profile.jpg') }}"
                                                class="img-fluid" alt="{{ $talent->name }}">
                                        </a>
                                        <div class="card-overlay-badge">
                                            <span class="badge bg-success">
                                                <i class="fa-solid fa-star"></i> Matched
                                            </span>
                                        </div>
                                    </div>

                                    <div class="gigs-content text-center">
                                        <h5 class="mt-2">
                                            <a
                                                href="{{ url('/talent/' . $talent->id) }}">{{ $talent->name }}</a>
                                        </h5>
                                        <p class="mb-1">
                                            <i class="ti ti-map-pin"></i>
                                            {{ $talent->address ?? 'Unknown' }}
                                        </p>
                                        <p>
                                            <i class="fa-solid fa-star text-warning"></i> 4.7 (128 Reviews)
                                        </p>
                                        <a href="{{ url('/talent/' . $talent->id) }}"
                                            class="btn btn-outline-primary btn-sm mt-2">
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div class="col-12">
                                <p class="text-center mt-4">No matched talents found.</p>
                            </div>
                        @endforelse
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection