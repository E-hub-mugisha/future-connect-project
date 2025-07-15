@extends('layouts.guest')
@section('content')



<div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
    <div class="container">
        <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="/talents">Talent</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Profile</li>
            </ol>
        </nav>
        <h2 class="breadcrumb-title">
            {{ $talent->name }}
        </h2>
    </div>
</div>

<style>
    .talent-profile-info {
        background: #011E34;
        color: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }
</style>

<div class="page-content content">
    <div class="container">
        <div class="row">

            <div class="col-lg-8">

                <div class=" breadcrumb-bar-info talent-profile-info breadcrumb-info text-start pt-0 bg-white">
                    <a role="button" tabIndex="0" class="badge bg-light mb-4 mt-4 text-dark">
                        {{ $talent->category->name ?? 'Uncategorized' }}
                    </a><br />
                    <h2 class="breadcrumb-title">
                        {{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i>
                    </h2>
                    <ul class="info-links">
                        <li>
                            <i class="ti ti-star-filled text-warning"></i>
                            {{ number_format($talent->feedback->avg('rating'), 1) }}
                            ({{ $talent->feedback->count() }} Feedbacks)
                        </li>

                        <li>
                            <i class="ti ti-user"></i>Open to {{ $talent->skill }}
                        </li>
                        <li>
                            <i class="ti ti-calendar-due"></i>Profile Created: {{ $talent->created_at->format('d M, Y') }}
                        </li>
                        <li class="border-0">
                            <div class="tranlator d-flex align-items-center">
                                <i class="ti ti-heart"></i>
                                {{ $talent->status ? 'Active' : 'Inactive' }}
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Slider -->
                <div class="slider-card service-slider-card" style="background: var(--white);">
                    <div class="slider service-slider">
                        <div class="service-img-wrap text-center">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" class="img-fluid" alt="Slider Img" style="width: 60%;">
                        </div>

                    </div>
                </div>
                <!-- /Slider -->


                <div class="row gx-3 row-gap-3 mb-4 statistics">
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-photo-star text-secondary"></i>
                            <p>Total Stories</p>
                            <h6>
                                {{ $talent->stories->count() }}
                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-heart text-purple"></i>
                            <p>Total Rating</p>
                            <h6>
                                {{ number_format($talent->feedback->avg('rating'), 1) }}

                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-message-chatbot text-indigo"></i>
                            <p>Feedbacks</p>
                            <h6>
                                {{ $talent->feedback->count() }}

                            </h6>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                        <div class="buy-box">
                            <i class="ti ti-eye text-teal"></i>
                            <p>Profile Views</p>
                            <h6>1,100</h6>
                        </div>
                    </div>
                </div>



                <div class="listing-tab rounded-3 bg-white shadow-sm p-3">
                    <ul class="nav nav-tabs justify-content-center flex-wrap gap-2" id="profileTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about_me"
                                type="button" role="tab" aria-controls="about_me" aria-selected="true">
                                About Me
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#my_skills"
                                type="button" role="tab" aria-controls="my_skills" aria-selected="false">
                                My Skills & Courses
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="stories-tab" data-bs-toggle="tab" data-bs-target="#my_stories"
                                type="button" role="tab" aria-controls="my_stories" aria-selected="false">
                                My Stories
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
                                type="button" role="tab" aria-controls="review" aria-selected="false">
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="tab-content rounded-3 mt-4 py-4" style="background: var(--white);">

                    <div class="tab-pane fade show active" id="about_me" role="tabpanel">

                        <div class="service-wrap">
                            <h3>About Me</h3>
                            <p>{{ $talent->description }}</p>
                        </div>

                    </div>
                    <div class="tab-pane fade " id="my_skills" role="tabpanel">

                        <div class="service-wrap">
                            <div class="container">
                                <div class="section-head d-flex">
                                    <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                                        <h2><span>Explore</span> My Skills</h2>
                                    </div>
                                    <div class="section-tab">
                                        <ul class="nav nav-pills inner-tab aos aos-init aos-animate" id="pills-tab"
                                            role="tablist" data-aos="fade-up">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="pills-popular-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-popular"
                                                    type="button" role="tab" aria-controls="pills-popular"
                                                    aria-selected="true">Popular</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-latest-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-latest" type="button" role="tab"
                                                    aria-controls="pills-latest" aria-selected="false"
                                                    tabindex="-1">Latest</button>
                                            </li>

                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-rating-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-rating" type="button" role="tab"
                                                    aria-controls="pills-rating" aria-selected="false"
                                                    tabindex="-1">Top Ratings</button>
                                            </li>

                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-trend-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-trend" type="button" role="tab"
                                                    aria-controls="pills-trend" aria-selected="false"
                                                    tabindex="-1">Trending </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-content dashboard-tab">
                                    <div class="tab-pane fade show active" id="pills-popular" role="tabpanel"
                                        aria-labelledby="pills-popular-tab">
                                        <div class="row aos aos-init aos-animate" data-aos="fade-up"
                                            data-aos-delay="500">
                                            <div class="col-md-12">
                                                @if($talent->skills && $talent->skills->count() > 0)
                                                @foreach($talent->skills as $skill)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $skill->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('talent/' . $talent->id) }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="User">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}" class="badge bg-primary-light mb-2">
                                                                    {{ $skill->category?->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $skill->tags }}
                                                                </p>
                                                            </div>
                                                            <div class="d-flex gap-2">
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-video"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-danger">
                                                                    <i class="feather-heart"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-share-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <h5 class="mb-2">
                                                            <a href="{{ url('talent/skills/' . $skill->id) }}" class="text-dark text-decoration-none">
                                                                {{ $skill->name }}
                                                            </a>
                                                        </h5>

                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span class="text-warning">
                                                                    <i class="fa-solid fa-star"></i>
                                                                </span>
                                                                <small class="text-muted">5.0 (28 Reviews)</small>
                                                                <span class="badge bg-secondary ms-2">Delivery in 1 day</span>
                                                            </div>
                                                            <h6 class="mb-0 text-success">$780</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                                @else
                                                <p>No skills found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-latest" role="tabpanel"
                                        aria-labelledby="pills-latest-tab">
                                        <div class="row">
                                            <div class="col-md-12">
                                                @if($talent->skills && $talent->skills->count() > 0)
                                                @foreach($talent->skills as $skill)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $skill->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('talent/' . $talent->id) }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="User">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}" class="badge bg-primary-light mb-2">
                                                                    {{ $skill->category?->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $skill->tags }}
                                                                </p>
                                                            </div>
                                                            <div class="d-flex gap-2">
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-video"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-danger">
                                                                    <i class="feather-heart"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-share-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <h5 class="mb-2">
                                                            <a href="{{ url('talent/skills/' . $skill->id) }}" class="text-dark text-decoration-none">
                                                                {{ $skill->name }}
                                                            </a>
                                                        </h5>

                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span class="text-warning">
                                                                    <i class="fa-solid fa-star"></i>
                                                                </span>
                                                                <small class="text-muted">5.0 (28 Reviews)</small>
                                                                <span class="badge bg-secondary ms-2">Delivery in 1 day</span>
                                                            </div>
                                                            <h6 class="mb-0 text-success">$780</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                                @else
                                                <p>No skills found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-rating" role="tabpanel"
                                        aria-labelledby="pills-rating-tab">
                                        <div class="row">
                                            <div class="col-md-12">
                                                @if($talent->skills && $talent->skills->count() > 0)
                                                @foreach($talent->skills as $skill)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $skill->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('talent/' . $talent->id) }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="User">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}" class="badge bg-primary-light mb-2">
                                                                    {{ $skill->category?->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $skill->tags }}
                                                                </p>
                                                            </div>
                                                            <div class="d-flex gap-2">
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-video"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-danger">
                                                                    <i class="feather-heart"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-share-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <h5 class="mb-2">
                                                            <a href="{{ url('talent/skills/' . $skill->id) }}" class="text-dark text-decoration-none">
                                                                {{ $skill->name }}
                                                            </a>
                                                        </h5>

                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span class="text-warning">
                                                                    <i class="fa-solid fa-star"></i>
                                                                </span>
                                                                <small class="text-muted">5.0 (28 Reviews)</small>
                                                                <span class="badge bg-secondary ms-2">Delivery in 1 day</span>
                                                            </div>
                                                            <h6 class="mb-0 text-success">$780</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                                @else
                                                <p>No skills found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-trend" role="tabpanel"
                                        aria-labelledby="pills-trend-tab">
                                        <div class="row">
                                            <div class="col-md-12">
                                                @if($talent->skills && $talent->skills->count() > 0)
                                                @foreach($talent->skills as $skill)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $skill->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('talent/' . $talent->id) }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="User">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('talent/skills/' . $skill->id) }}" class="badge bg-primary-light mb-2">
                                                                    {{ $skill->category?->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $skill->tags }}
                                                                </p>
                                                            </div>
                                                            <div class="d-flex gap-2">
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-video"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-danger">
                                                                    <i class="feather-heart"></i>
                                                                </a>
                                                                <a role="button" tabindex="0" class="text-muted">
                                                                    <i class="feather-share-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <h5 class="mb-2">
                                                            <a href="{{ url('talent/skills/' . $skill->id) }}" class="text-dark text-decoration-none">
                                                                {{ $skill->name }}
                                                            </a>
                                                        </h5>

                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span class="text-warning">
                                                                    <i class="fa-solid fa-star"></i>
                                                                </span>
                                                                <small class="text-muted">5.0 (28 Reviews)</small>
                                                                <span class="badge bg-secondary ms-2">Delivery in 1 day</span>
                                                            </div>
                                                            <h6 class="mb-0 text-success">$780</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                                @else
                                                <p>No skills found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade " id="my_stories" role="tabpanel">

                        <div class="service-wrap">
                            <div class="container">
                                <div class="section-head d-flex">
                                    <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                                        <h2><span>Explore</span> My Stories</h2>
                                    </div>
                                    <div class="section-tab">
                                        <ul class="nav nav-pills inner-tab aos aos-init aos-animate" id="pills-tab"
                                            role="tablist" data-aos="fade-up">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="pills-popular-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-popular"
                                                    type="button" role="tab" aria-controls="pills-popular"
                                                    aria-selected="true">Popular</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-latest-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-latest" type="button" role="tab"
                                                    aria-controls="pills-latest" aria-selected="false"
                                                    tabindex="-1">Latest</button>
                                            </li>

                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-rating-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-rating" type="button" role="tab"
                                                    aria-controls="pills-rating" aria-selected="false"
                                                    tabindex="-1">Top Ratings</button>
                                            </li>

                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-trend-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-trend" type="button" role="tab"
                                                    aria-controls="pills-trend" aria-selected="false"
                                                    tabindex="-1">Trending </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-content dashboard-tab">

                                    @php
                                    $tabs = [
                                    'popular' => 'Popular',
                                    'latest' => 'Latest',
                                    'rating' => 'Top Rated',
                                    'trend' => 'Trending'
                                    ];
                                    @endphp

                                    @foreach($tabs as $key => $label)
                                    <div class="tab-pane fade {{ $loop->first ? 'show active' : '' }}" id="pills-{{ $key }}" role="tabpanel" aria-labelledby="pills-{{ $key }}-tab">
                                        <div class="row aos" data-aos="fade-up" data-aos-delay="500">
                                            <div class="col-md-12">
                                                @if($talent->stories && $talent->stories->count())
                                                @foreach($talent->stories as $story)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('story-details/'.$story->slug) }}">
                                                                    <img src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="{{ $story->title }}">
                                                                </a>
                                                            </div>
                                                            <!-- Optional: Add more slides if needed -->
                                                        </div>
                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $story->level ?? 'N/A' }}
                                                            </span>
                                                        </div>
                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('buyer-profile') }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="Talent">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('story-details/'.$story->slug) }}" class="badge bg-primary-light mb-2">
                                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $story->tags ?? 'No tags' }}
                                                                </p>
                                                            </div>
                                                            <div class="d-flex gap-2">
                                                                <a role="button" tabindex="0" class="text-muted"><i class="feather-video"></i></a>
                                                                <a role="button" tabindex="0" class="text-danger"><i class="feather-heart"></i></a>
                                                                <a role="button" tabindex="0" class="text-muted"><i class="feather-share-2"></i></a>
                                                            </div>
                                                        </div>

                                                        <h5 class="mb-2">
                                                            <a href="{{ url('story-details/'.$story->slug) }}" class="text-dark text-decoration-none">
                                                                {{ $story->title }}
                                                            </a>
                                                        </h5>

                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                                                                <small class="text-muted">5.0 (28 Reviews)</small>
                                                                <span class="badge bg-secondary ms-2">Delivery in 1 day</span>
                                                            </div>
                                                            <h6 class="mb-0 text-success">${{ $story->price ?? '780' }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                                @else
                                                <p>No stories found.</p>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach

                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="review" role="tabpanel">
                        <div class="review-widget">

                            {{-- Reviews Title --}}
                            <div class="review-title sort-search-gigs">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <h3>Reviews ({{ $talent->feedback->count() }})</h3>
                                    </div>
                                </div>
                            </div>

                            {{-- Star Breakdown --}}
                            <div class="total-rating align-items-center">
                                <div class="total-review">

                                    @php
                                    $total = $talent->feedback->count();
                                    $starCounts = [
                                    5 => $talent->feedback->where('rating', 5)->count(),
                                    4 => $talent->feedback->where('rating', 4)->count(),
                                    3 => $talent->feedback->where('rating', 3)->count(),
                                    2 => $talent->feedback->where('rating', 2)->count(),
                                    1 => $talent->feedback->where('rating', 1)->count(),
                                    ];
                                    $average = $total ? number_format($talent->feedback->avg('rating'), 1) : 0;
                                    @endphp

                                    @foreach($starCounts as $stars => $count)
                                    @php
                                    $percent = $total ? ($count / $total) * 100 : 0;
                                    @endphp
                                    <div class="progress-lvl mb-2">
                                        <h6>{{ $stars }} Star Ratings</h6>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar"
                                                style="width: {{ $percent }}%" aria-valuenow="{{ $percent }}" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <p>{{ $count }}</p>
                                    </div>
                                    @endforeach

                                </div>

                                {{-- Average Rating --}}
                                <div class="total-reviews text-center bg-white">
                                    <h6> Customer Reviews & Ratings </h6>
                                    <h2> {{ $average }} / 5.0 </h2>
                                    <div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                        @for($i = 1; $i <= 5; $i++)
                                            <i class="ti ti-star-filled {{ $i <= round($average) ? 'text-warning' : 'text-light' }}"></i>
                                            @endfor
                                    </div>
                                    <p class="text-center">Based on {{ $total }} Reviews</p>
                                </div>
                            </div>

                            {{-- Individual Reviews List --}}
                            <ul class="review-lists home-reviews">
                                @forelse($talent->feedback as $fb)
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}" alt="img" />
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <h6>{{ $fb->name }}</h6>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            @for($i = 1; $i <= 5; $i++)
                                                                <i class="fa-solid fa-star {{ $i <= $fb->rating ? 'filled' : '' }}"></i>
                                                                @endfor
                                                        </span>
                                                        <span class="rating-count">{{ $fb->rating }} </span>
                                                    </div>
                                                </div>
                                                <div class="reviewer-time">
                                                    <p>{{ $fb->created_at->diffForHumans() }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>{{ $fb->comment }}</p>
                                        </div>
                                    </div>
                                </li>
                                @empty
                                <li>No reviews yet.</li>
                                @endforelse
                            </ul>

                        </div>

                        {{-- Review Submission Form --}}
                        <div class="login-card mt-4">
                            <form action="{{ route('talent.feedback.store') }}" method="POST">
                                @csrf
                                <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                                <div class="login-heading text-start mb-4">
                                    <h5>Leave a Review</h5>
                                </div>

                                <div class="form-wrap form-focus mb-3">
                                    <label class="mb-1 fw-medium text-dark">Your Rating <span class="text-primary">*</span></label>

                                    <div class="star-rating">
                                        <input type="radio" name="rating" id="star5" value="5" required>
                                        <label for="star5" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star4" value="4">
                                        <label for="star4" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star3" value="3">
                                        <label for="star3" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star2" value="2">
                                        <label for="star2" class="ti ti-star-filled"></label>

                                        <input type="radio" name="rating" id="star1" value="1">
                                        <label for="star1" class="ti ti-star-filled"></label>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Name <span class="text-primary">*</span></label>
                                            <input type="text" name="name" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Email <span class="text-primary">*</span></label>
                                            <input type="email" name="email" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark">Write a Review <span class="text-primary">*</span></label>
                                            <textarea name="comment" class="form-control text-area" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary member-btn">Submit a Review</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-4 theiaStickySidebar">

                <div class="service-widget member-widget" style="background: var(--white);">
                    <div class="user-details">
                        <div class="user-img users-img">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img" />
                        </div>
                        <div class="user-info">
                            <h5>
                                <span class="me-2">{{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i></span>
                                <span class="badge badge-success">
                                    Verified
                                </span>
                            </h5>
                            <p><i class="fa-solid fa-star"></i> {{ number_format($talent->feedback->avg('rating'), 1) }}
                                ({{ $talent->feedback->count() }} Feedbacks)</p>
                        </div>
                    </div>

                    <div class="about-me new-about">
                        <h6>About Me</h6>
                        <p>
                            Hello, I'm {{ $talent->name ?? 'Unnamed Talent' }},
                            a passionate {{ $talent->skill ?? 'creative' }} and performer blending
                            {{ $talent->category->name ?? 'various disciplines' }}.
                            <span class="more-content">
                                I create immersive experiences that inspire and uplift communities.
                            </span>
                        </p>
                        <a role="button" tabindex="0" class="read-more">Read More</a>
                    </div>

                    <div class="member-info member-info-new">
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-music"></i>
                            <h6 class="mb-0">
                                Talent Type
                                <span class="pt-2"> {{ $talent->skill }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-world"></i>
                            <h6 class="mb-0">
                                Based In
                                <span class="pt-2"> {{ $talent->address }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap mb-3">
                            <i class="ti ti-calendar-event"></i>
                            <h6 class="mb-0">
                                Active Since
                                <span class="pt-2"> {{ \Carbon\Carbon::parse($talent->created_at)->format('F d, Y') }}</span>
                            </h6>
                        </div>
                        <div class="member-list d-flex align-items-center gap">
                            <i class="ti ti-language"></i>
                            <h6 class="mb-0">
                                Languages
                                <span class="pt-2">{{ $talent->language }}</span>
                            </h6>
                        </div>
                    </div>

                    <a role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
                        class="btn btn-outline-primary mb-0 w-100">Support Talent</a>

                </div>


                <div class="service-widget " style="background: var(--white);">
                    <h5 class="">Share Talent Profile</h5>
                    <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                        <ul>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook" style="color: var(--white);"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter" style="color: var(--white);"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram" style="color: var(--white);"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-google" style="color: var(--white);"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube" style="color: var(--white);"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>

<div class="modal fade" id="support_talent" tabindex="-1" aria-labelledby="supportTalentLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="supportTalentLabel">Support Talent</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Add form or message here -->
                <form method="POST" action="{{ route('support.talent') }}">
                    @csrf
                    <input type="hidden" name="talent_id" value="{{ $talent->id }}">

                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" name="name" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input type="email" class="form-control" name="email" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="amount" class="form-label">Support Amount</label>
                        <input type="number" class="form-control" name="amount" id="amount" required>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Message (Optional)</label>
                        <textarea name="message" id="message" class="form-control" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Send Support</button>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('.star-rating-input i').click(function() {
            var rating = $(this).data('value');
            $('#ratingInput').val(rating);

            // Highlight stars
            $('.star-rating-input i').each(function() {
                if ($(this).data('value') <= rating) {
                    $(this).removeClass('text-light').addClass('text-warning');
                } else {
                    $(this).removeClass('text-warning').addClass('text-light');
                }
            });
        });
    });
</script>


@endsection