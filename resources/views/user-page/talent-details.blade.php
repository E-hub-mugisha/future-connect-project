@extends('layouts.guest')
@section('content')

<style>
    .star-rating {
        direction: rtl;
        display: inline-flex;
        font-size: 1.5rem;
    }

    .star-rating input[type="radio"] {
        display: none;
    }

    .star-rating label {
        color: #ddd;
        cursor: pointer;
    }

    .star-rating input[type="radio"]:checked~label,
    .star-rating label:hover,
    .star-rating label:hover~label {
        color: #ffc107;
    }
</style>

<div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
    <div class="breadcrumb-img">
        <div class="breadcrumb-left">
            <img src="{{ asset('assets/img/bg/banner-bg-03.png') }}" alt="img" />
        </div>
    </div>
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


<div class="page-content content">
    <div class="container">
        <div class="row">


            <div class="col-lg-8">

                <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info text-start pt-0 bg-white">
                    <a role="button" tabIndex="0" class="badge bg-light mb-4 text-dark">
                        {{ $talent->category->name ?? 'Uncategorized' }}
                    </a><br />
                    <h2 class="breadcrumb-title">
                        {{ $talent->name }} - {{ $talent->skill }}
                    </h2>
                    <ul class="info-links">
                        <li>
                            <i class="ti ti-star-filled text-warning"></i>
                            {{ number_format($talent->feedback->avg('rating'), 1) }}
                            ({{ $talent->feedback->count() }} Feedbacks)
                        </li>

                        <li>
                            <i class="ti ti-user"></i>Open to Collaborations
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
                <div class="slider-card service-slider-card">
                    <div class="slider service-slider">
                        <div class="service-img-wrap">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" class="img-fluid" alt="Slider Img">
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



                <div class="listing-tab">
                    <div class="listing-slider">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a role="button" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
                                    data-bs-target="#about_me" aria-selected="false" tabindex="-1">
                                    About Me
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                    data-bs-target="#my_skills" aria-selected="false" tabindex="-1">
                                    My Skills & Courses
                                </a>
                            </li>
                            <li>
                                <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                    data-bs-target="#faq" aria-selected="false" tabindex="-1">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                    data-bs-target="#my_stories" aria-selected="false" tabindex="-1">
                                    My Stories
                                </a>
                            </li>
                            <li>
                                <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                    data-bs-target="#review" aria-selected="false" tabindex="-1">
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="tab-content">

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
                    <div class="tab-pane fade " id="faq" role="tabpanel">

                        <div class="service-wrap service-faq">
                            <h3>FAQ</h3>
                            <div class="faq-lists">
                                <div class="faq-card">
                                    <h4 class="faq-title">
                                        <a class="collapsed" data-bs-toggle="collapse" href="#faqone"
                                            aria-expanded="false">Do you offer assistance after the order has
                                            been completed?</a>
                                    </h4>
                                    <div id="faqone" class="card-collapse collapse">
                                        <div class="faq-content">
                                            <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                related to your website. Whenever you encounter a problem, feel
                                                free to reach out to me anytime.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-card">
                                    <h4 class="faq-title">
                                        <a class="collapsed" data-bs-toggle="collapse" href="#faqtwo"
                                            aria-expanded="false">Can I choose my favorite Product category or
                                            Niche?</a>
                                    </h4>
                                    <div id="faqtwo" class="card-collapse collapse">
                                        <div class="faq-content">
                                            <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                related to your website. Whenever you encounter a problem, feel
                                                free to reach out to me anytime.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-card">
                                    <h4 class="faq-title">
                                        <a class="collapsed" data-bs-toggle="collapse" href="#faqOne"
                                            aria-expanded="false">Can I add products myself?</a>
                                    </h4>
                                    <div id="faqOne" class="card-collapse collapse">
                                        <div class="faq-content">
                                            <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                related to your website. Whenever you encounter a problem, feel
                                                free to reach out to me anytime.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-card border-0 faq-end-card">
                                    <h4 class="faq-title">
                                        <a class="collapsed" data-bs-toggle="collapse" href="#faqfour"
                                            aria-expanded="false">Are there any additional or hidden
                                            charges?</a>
                                    </h4>
                                    <div id="faqfour" class="card-collapse collapse">
                                        <div class="faq-content">
                                            <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                related to your website. Whenever you encounter a problem, feel
                                                free to reach out to me anytime.</p>
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
                                    <div class="tab-pane fade show active" id="pills-popular" role="tabpanel"
                                        aria-labelledby="pills-popular-tab">
                                        <div class="row aos aos-init aos-animate" data-aos="fade-up"
                                            data-aos-delay="500">
                                            <div class="col-md-12">
                                                @if($talent->stories && $talent->stories->count() > 0)
                                                @foreach($talent->stories as $story)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">

                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-06.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-07.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $story->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('buyer-profile') }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="img">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('service-details') }}" class="badge bg-primary-light mb-2">
                                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $story->tags }}
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
                                                            <a href="{{ url('service-details') }}" class="text-dark text-decoration-none">
                                                                {{ $story->title }}
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
                                                <p>No stories found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-latest" role="tabpanel"
                                        aria-labelledby="pills-latest-tab">
                                        <div class="row">
                                            <div class="col-md-12">

                                                @if($talent->stories && $talent->stories->count() > 0)
                                                @foreach($talent->stories as $story)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">

                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-06.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-07.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $story->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('buyer-profile') }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="img">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('service-details') }}" class="badge bg-primary-light mb-2">
                                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $story->tags }}
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
                                                            <a href="{{ url('service-details') }}" class="text-dark text-decoration-none">
                                                                {{ $story->title }}
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
                                                <p>No stories found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-rating" role="tabpanel"
                                        aria-labelledby="pills-rating-tab">
                                        <div class="row">
                                            <div class="col-md-12">

                                                @if($talent->stories && $talent->stories->count() > 0)
                                                @foreach($talent->stories as $story)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">

                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-06.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-07.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $story->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('buyer-profile') }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="img">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('service-details') }}" class="badge bg-primary-light mb-2">
                                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $story->tags }}
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
                                                            <a href="{{ url('service-details') }}" class="text-dark text-decoration-none">
                                                                {{ $story->title }}
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
                                                <p>No stories found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-trend" role="tabpanel"
                                        aria-labelledby="pills-trend-tab">
                                        <div class="row">
                                            <div class="col-md-12">

                                                @if($talent->stories && $talent->stories->count() > 0)
                                                @foreach($talent->stories as $story)
                                                <div class="card mb-4 shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center gap-3">

                                                    <div class="position-relative" style="flex: 0 0 200px;">
                                                        <div class="owl-carousel owl-theme img-slider">
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-04.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-06.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                            <div class="item">
                                                                <a href="{{ url('service-details') }}">
                                                                    <img src="{{ asset('assets/img/gigs/gigs-07.jpg') }}" class="img-fluid rounded-3" alt="img">
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="position-absolute top-0 start-0 m-2">
                                                            <span class="badge bg-warning me-1">
                                                                <i class="feather-star"></i> Featured
                                                            </span>
                                                            <span class="badge bg-danger">
                                                                <i class="fa-solid fa-meteor"></i> {{ $story->level }}
                                                            </span>
                                                        </div>

                                                        <div class="position-absolute bottom-0 start-0 m-2">
                                                            <a href="{{ url('buyer-profile') }}">
                                                                <img src="{{ asset('assets/img/user/user-01.jpg') }}" class="rounded-circle" width="40" alt="img">
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between align-items-start">
                                                            <div>
                                                                <a href="{{ url('service-details') }}" class="badge bg-primary-light mb-2">
                                                                    {{ $story->category->name ?? 'Uncategorized' }}
                                                                </a>
                                                                <p class="mb-1 text-muted">
                                                                    <i class="ti ti-map-pin-check me-1"></i>
                                                                    {{ $story->tags }}
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
                                                            <a href="{{ url('service-details') }}" class="text-dark text-decoration-none">
                                                                {{ $story->title }}
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
                                                <p>No stories found.</p>
                                                @endif


                                            </div>
                                        </div>
                                    </div>
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

                <div class="service-widget">
                    <div class="service-amt p-3 price-lvl bg-dark">
                        <h3 class="">
                            <span class="d-block">Support Amount</span>
                            $25
                        </h3>
                    </div>

                    <div class="input-block form-wrap form-focus">
                        <label class="mb-1 fw-medium text-dark">Choose Amount <span
                                class="text-primary">*</span></label>
                        <select class="select select2-hidden-accessible" data-select2-id="1" tabindex="-1"
                            aria-hidden="true">
                            <option data-select2-id="3" class="text-dark">$5</option>
                            <option>$10</option>
                            <option>$25</option>
                            <option>$50</option>
                            <option>$100</option>
                        </select>
                    </div>

                    <div class="service-widget service-select-widget">
                        <h5 class="mb-3">Support Options</h5>
                        <div class="service-select d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <label class="custom_radio">
                                    <input type="radio" name="support_option" checked="" />
                                    <span class="checkmark"></span>
                                    <span class="m-0 service-head-text">One-Time Support</span>
                                </label>
                            </div>
                        </div>
                        <div class="service-select d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <label class="custom_radio">
                                    <input type="radio" name="support_option" />
                                    <span class="checkmark"></span>
                                    <span class="m-0 service-head-text">Monthly Patron</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
                        class="btn btn-primary w-100 mb-0">
                        <i class="feather-heart"></i> Support This Talent
                    </a>
                </div>

                <div class="service-widget member-widget">
                    <div class="user-details">
                        <div class="user-img users-img">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img" />
                        </div>
                        <div class="user-info">
                            <h5>
                                <span class="me-2">{{ $talent->name }}</span>
                                <span class="badge badge-success">
                                    <i class="fa-solid fa-circle"></i> Online
                                </span>
                            </h5>
                            <p><i class="fa-solid fa-star"></i> 5.0 (45 Reviews)</p>
                        </div>
                    </div>

                    <div class="about-me new-about">
                        <h6>About Me</h6>
                        <p>{{ $talent->description }}</p>
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

                    <a role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#contact_talent"
                        class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
                </div>


                <div class="service-widget">
                    <h5 class="">Share Talent Profile</h5>
                    <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                        <ul>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-google"></i></a></li>
                            <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>

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