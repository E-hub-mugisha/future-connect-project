@extends('layouts.guest')
@section('content')

<style>
    /* Gradient background for hero section */
    .hero-section {
        background: linear-gradient(165deg, #011E34 15% 40%, #27AE60 100%);
        color: #ffffff;
    }


    /* Hero title highlight icon and text */
    .hero-title i {
        color: #2F80ED;
    }

    .hero-title {
        color: #2F80ED;
        font-weight: 600;
    }

    /* Hero headline spans */
    .hero-section-two h1 span {
        color: #27AE60;
    }

    /* CTA buttons */
    .hero-section-two .btn-primary {
        background-color: #27AE60;
        border-color: #27AE60;
    }

    .hero-section-two .btn-primary:hover {
        background-color: #ffffff;
        border-color: #27AE60;
        color: #27AE60;
    }

    /* Optional: gradient overlay effect on image (if needed) */
    .banner-image::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(to top right, rgba(47, 128, 237, 0.3), rgba(39, 174, 96, 0.3)); */
        z-index: 1;
    }

    .banner-image img {
        position: relative;
        z-index: 2;
    }
</style>
<!-- Hero Section Carousel -->
<div id="heroCarousel" class="hero-section carousel slide" data-bs-ride="carousel" data-bs-interval="2000">

    <div class="carousel-inner pt-3">

        <!-- Carousel Item 1 -->
        <div class="carousel-item active">
            <div class="hero-section-two py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                <div class="banner-head">
                                    <span class="d-inline-flex mb-3 align-items-center hero-title">
                                        <i class="ti ti-point-filled me-1"></i>Inspire the World
                                    </span>
                                    <h1 class="mb-2 text-white">Share Your Story & Showcase Your stories</h1>
                                    <p class="d-inline-flex">A large number of individuals use us to transform their thoughts into the real world.</p>
                                </div>
                                <div class="banner-form">
                                    <form action="{{ url('/search') }}" method="GET">
                                        <div class="banner-search-list">

                                            <div class="input-block">
                                                <select name="category" class="form-select">
                                                    <option value="">Select Category</option>
                                                    @foreach($categories as $cat)
                                                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>


                                            <div class="input-block">
                                                <div class="input-location">
                                                    <input type="text" name="region" class="form-control" placeholder="Region: e.g., Kigali, Nairobi, Lagos">
                                                </div>
                                            </div>


                                            <div class="input-block">
                                                <input type="text" name="keyword" class="form-control" placeholder="Search: e.g., photography, coding, music">
                                            </div>
                                        </div>
                                        <div class="input-block-btn">
                                            <button class="btn btn-lg btn-primary d-inline-flex align-items-center" type="submit">
                                                <i class="ti ti-search"></i> Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="popular-search">
                                    <h5>Popular Searches : </h5>
                                    <ul>
                                        @foreach($popularCategories as $category)
                                        <li><a href="{{ route('user.talents.category', $category->slug) }}">{{ $category->name }}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="banner-img">
                                <div class="banner-img-right">
                                    <img src="{{ asset('assets/img/home/banner-image.svg') }}" class="img-fluid" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Item 2 (Duplicate or Variation) -->
        <div class="carousel-item">
            <div class="hero-section-two py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                <div class="banner-head">
                                    <span class="d-inline-flex mb-3 align-items-center hero-title">
                                        <i class="ti ti-point-filled me-1"></i>Inspire the World
                                    </span>
                                    <h1 class="mb-2 text-white">Turn Your Passion into Impact</h1>
                                    <p class="d-inline-flex">Join a community where your skills and stories can make a difference.</p>
                                    <a href="{{ route('user.upload-story') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">
                                        Upload Your Story<i class="ti ti-chevron-right ms-1"></i>
                                    </a>
                                </div>
                                <div class="banner-form">
                                    <form action="{{ url('/search') }}" method="GET">

                                        <div class="banner-search-list">


                                            <div class="input-block">
                                                <select name="category" class="form-select">
                                                    <option value="">Select Category</option>
                                                    @foreach($categories as $cat)
                                                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>


                                            <div class="input-block">
                                                <div class="input-location">
                                                    <input type="text" name="region" class="form-control" placeholder="Region: e.g., Kigali, Nairobi, Lagos">
                                                </div>
                                            </div>


                                            <div class="input-block">
                                                <input type="text" name="keyword" class="form-control" placeholder="Search: e.g., photography, coding, music">
                                            </div>

                                        </div>


                                        <div class="input-block-btn">
                                            <button class="btn btn-lg btn-primary d-inline-flex align-items-center justify-content-center" type="submit">
                                                <i class="ti ti-search"></i> Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="popular-search">
                                    <h5>Popular Searches : </h5>
                                    <ul>
                                        @foreach($popularCategories as $category)
                                        <li><a href="{{ route('user.talents.category', $category->slug) }}">{{ $category->name }}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="banner-img">
                                <div class="banner-img-right">
                                    <img src="{{ asset('assets/img/home/front-view-handsome-male-musician-singing-home-with-microphone.jpg') }}"
                                        alt="Hero image 2" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</div>
<!-- /Hero Section Carousel -->


<div class="client-slider-sec">
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-lg-12">
                <div class="section-header text-center aos" data-aos="fade-up">
                    <h3 class="text-white">Trusted by {{ $partners->count() }}+ partners Around Globe</h3>
                </div>

                <div class="row mt-4">
                    @foreach($partners as $partner)
                    <div class="col-6 col-sm-2 col-md-2 col-lg-2 mb-4 text-center">
                        <div class="client-logo">
                            <img src="{{ $partner->logo ? asset('image/partners/' . $partner->logo) : asset('/assets/img/company/logo.svg') }}"
                                class="img-fluid"
                                alt="Client Logo" style="height: 50px; width: auto;">
                        </div>
                    </div>
                    @endforeach
                </div>

            </div>
        </div>
    </div>
</div>

<!-- Future Connect: Popular Talent Categories -->
<div class="popular-section-two">
    <div class="container">
        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Popular Talent Categories<span
                    class="title-bg2"></span></h2>
            <p>Discover inspiring stories, impactful skills, and creative talent across Africa</p>
        </div>
        <div
            class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
            @foreach($categories as $cat)
            <div class="col d-flex">
                <div class="pop-category flex-fill" data-aos="flip-left">
                    <span><i class="{{ $cat->image ?? 'ti ti-star' }}"></i></span>
                    <h6 class="mb-1" style="color: var(--white);"><a
                            href="{{ route('user.talents.category', $cat->slug) }}" style="color: var(--white);">{{ $cat->name }}</a>
                    </h6>
                    @if(isset($cat->talents_count))
                    <p style="color: var(--white);">{{ $cat->talents_count }} talents</p>
                    @else
                    <p style="color: var(--white);">0 talents</p>
                    @endif
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
<!-- /Future Connect: Popular Talent Categories -->



<style>
    .card-custom {
        background: linear-gradient(to right, #011E34, #09354F);
        /* border: 1px solid rgba(255, 255, 255, 0.2); */
        border-radius: 16px;
        padding: 1.5rem;
        color: #ffffff;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

    }

    .next-gen-section {
        position: relative;
        padding: 4rem 0;
        overflow: hidden;
        z-index: 1;
    }

    .next-gen-section .card {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
</style>

<!-- next gen -->
<div class="next-gen-section">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Meet the Next Generation of talents<span
                    class="title-bg2"></span></h2>
            <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>
        <div class="row seller-list">
            @foreach($talents as $talent)
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card card-custom" data-aos="flip-left">
                    <div class="card-body text-center">
                        <span class="avatar d-inline-block" style="width: 60px; height: 60px; overflow: hidden;">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img
                                    class="rounded-3 w-100 h-100"
                                    style="object-fit: cover;"
                                    src="{{ $talent->image 
                ? asset('image/talents/' . $talent->image) 
                : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" />
                            </a>
                        </span>

                        <h6 class="mb-1">
                            <a
                                href="{{ route('user.talent.details', $talent->id) }}" style="color: var(--white);">{{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i></a>
                        </h6>
                        <p>{{ $talent->category->name ?? 'Uncategorized' }}
                        </p>
                        <p class="mb-0 location-text d-inline-flex align-items-center">
                            <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                            Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                        </p>
                        <div class="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                            <a href="{{ route('user.talent.details', $talent->id) }}"
                                class="badge bg-light">
                                {{ $talent->skill }}
                            </a>
                            <a href="{{ route('user.talent.details', $talent->id) }}"
                                class="badge bg-light">
                                {{ $talent->language }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
            <div class="text-center mt-3" data-aos="fade-up">
                <a href="{{ route('user.talents') }}" class="btn btn-lg btn-dark">View All
                    Talents</a>
            </div>
        </div>
    </div>
</div>
<!-- next gen -->



<div class="how-it-works">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="how-it-works-content position-relative">
                    <img src="assets/img/home/shape-1.svg" alt="img" class="img-fluid how-it-works-bg">
                    <div class="section-header-two aos-init aos-animate" data-aos="fade-up">
                        <h2 class="mb-2"><span class="title-bg"></span>How it Works<span class="title-bg2"></span></h2>
                        <p>Empowering young talents through storytelling, skills sharing, and community support.</p>
                    </div>
                    <div class="how-it-works-item d-flex align-items-center p-3 bg-white rounded aos-init aos-animate" data-aos="fade-up">
                        <span class="count bg-primary-transparent">01</span>
                        <div>
                            <h6 class="mb-2">Create Your Talent Profile</h6>
                            <p class="mb-0">Sign up and showcase your story, skills, and aspirations through
                                text, images, and videos.</p>
                        </div>
                    </div>
                    <div class="how-it-works-item d-flex align-items-center p-3 bg-white rounded aos-init aos-animate" data-aos="fade-up">
                        <span class="count bg-secondary-transparent">02</span>
                        <div>
                            <h6 class="mb-2">Get Discovered & Rated</h6>
                            <p class="mb-0">Users browse talents by category, like your story, rate your skills,
                                and share feedback to help you grow.</p>
                        </div>
                    </div>
                    <div class="how-it-works-item d-flex align-items-center p-3 bg-white rounded aos-init aos-animate" data-aos="fade-up">
                        <span class="count bg-pink-transparent">03</span>
                        <div>
                            <h6 class="mb-2">Earn Support & Recognition</h6>
                            <p class="mb-0">Receive donations or course purchases, and gain visibility through
                                the Future Connect community.</p>
                        </div>
                    </div>
                    <div class="how-it-works-item d-flex align-items-center p-3 bg-white rounded aos-init aos-animate" data-aos="fade-up">
                        <span class="count bg-success-transparent">04</span>
                        <div>
                            <h6 class="mb-2">Grow With Us</h6>
                            <p class="mb-0">Access learning resources, connect with agents and mentors, and keep
                                your profile evolving.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="how-it-works-images d-lg-block d-none">
                    <div class="row align-items-center">
                        <div class="col-7 text-end">
                            <img src="{{ asset('assets/img/creative.png') }}" class="img-fluid rounded aos-init aos-animate" alt="img" data-aos="fade-down">
                            <img src="{{ asset('assets/img/singer.png') }}" class="img-fluid rounded aos-init aos-animate" alt="img" data-aos="fade-right">
                        </div>
                        <div class="col-5">
                            <img src="{{ asset('assets/img/home/front-view-handsome-male-musician-singing-home-with-microphone.jpg') }}" class="img-fluid rounded aos-init aos-animate" alt="img" data-aos="fade-down">
                            <img src="{{ asset('assets/img/young-man-playing-music-jazz-day.jpg') }}" class="img-fluid rounded aos-init aos-animate" alt="img" data-aos="fade-left">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Future Connect talent slider -->
<div class="service-slider-section">
    <div class="horizontal-slide d-flex" data-direction="right" data-speed="slow">
        <div class="slide-list d-flex gap-4">
            @foreach($categories as $cat)
            <div class="p-3 px-4 d-flex align-items-center service-item">
                <h4>{{ $cat->name }}</h4>
            </div>
            @endforeach
        </div>
    </div>
</div>
<!-- end Future Connect talent slider -->


<!-- new services -->
<div class="new-services-section">
    <div class="container">
        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Our New Skills<span class="title-bg2"></span></h2>
            <p>Unlock a world of opportunities and take control of your future</p>
        </div>
        <div class="listing-tab" data-aos="fade-up">
            <div class="listing-slider">
                <ul class="nav nav-tabs justify-content-center" id="skillsCategoryTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="tab-all" data-category="All" role="tab">
                            All
                        </a>
                    </li>
                    @foreach($categories as $category)
                    <li class="nav-item" role="presentation">
                        <a class="nav-link"
                            id="tab-{{ \Illuminate\Support\Str::slug($category->name) }}"
                            data-category="{{ $category->name }}" role="tab">
                            {{ $category->name }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="tab-content" data-aos="fade-up" id="skillsContent">
            <div class="row">
                @forelse($skills as $skill)
                <div class="col-xl-4 col-md-6 skill-card"
                    data-category="{{ $skill->category->name ?? 'Uncategorized' }}">
                    <div class="gigs-grid">
                        <div class="gigs-img">
                            <div class="img-slider owl-carousel">
                                <div class="slide-images">
                                    <a href="{{ url('skills/category/' . $skill->slug) }}">
                                        <img src="{{ asset('assets/img/home/service-01.jpg') }}" class="img-fluid" alt="Gigs">
                                    </a>
                                </div>

                            </div>
                            <div class="card-overlay-badge">
                                <a href="{{ url('skills/category/'.$skill->slug) }}">
                                    <span class="badge bg-warning">
                                        <i class="feather-star"></i>{{ $skill->category->name ?? 'Uncategorized' }}
                                    </span>
                                </a>
                                <a href="{{ url('skills/category/'.$skill->slug) }}">
                                    <span class="badge bg-danger">
                                        <i class="fa-solid fa-meteor"></i>
                                        {{ $skill->level }}
                                    </span>
                                </a>
                            </div>
                            <div class="fav-selection">
                                <a role="button" tabindex="0"><i class="feather-video"></i></a>
                                <a role="button" tabindex="0" class="fav-icon"><i
                                        class="feather-heart"></i></a>
                            </div>
                        </div>
                        <div class="gigs-content">
                            <div class="gigs-info">
                                <div>
                                    <a href="{{ url('skills/'.$skill->category->slug ?? '') }}"
                                        class="badge bg-light">
                                        {{ $skill->category->name ?? 'Uncategorized' }}
                                    </a>
                                    <span class="ms-2">+1</span>
                                </div>
                                <div class="star-rate">
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        {{ $skill->average_rating ? number_format($skill->average_rating, 1) : '0.0' }}
                                        ({{ $skill->total_reviews ?? 0 }} Reviews)
                                    </span>
                                </div>
                            </div>
                            <div class="gigs-title">
                                <h5><a
                                        href="{{ url('skills/'.$skill->slug) }}">{{ $skill->name }}</a>
                                </h5>
                            </div>
                            <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center gigs-left-text">
                                    <a href="{{ url('/talent/' . $skill->talent->id) }}" class="avatar avatar-sm flex-shrink-0">
                                        <img src="{{ $skill->talent->image ? asset('image/talents/' . $skill->talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                            class="img-fluid rounded-pill" alt="img" />
                                    </a>
                                    <div class="ms-2">
                                        <h6 class="mb-0">
                                            <a role="button"
                                                tabindex="0">{{ $skill->talent->name ?? 'Author' }}</a>
                                        </h6>

                                    </div>
                                </div>
                                <div class="text-end">
                                    <span>{{ $skill->tags }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @empty
                <p class="text-center mt-4">No skills found.</p>
                @endforelse
            </div>
        </div>


    </div>
</div>
<!-- new services -->



<!-- what makes Future Connect -->
<div class="what-makes-dream-gigs">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div class="what-makes-left" data-aos="fade-right">
                    <h2 class="mb-3">What Makes <span>Future Connect</span> Unique</h2>
                    <p class="mb-0">Future Connect is more than just a platform — it’s a launchpad for young
                        talents to share their stories, showcase their skills, and inspire impact. From
                        storytellers to creators and dreamers, we bring their potential to the spotlight.</p>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row row-gap-3" data-aos="fade-left">
                    <div class="col-lg-4">
                        <div class="what-makes-item bg-white rounded-2">
                            <div class="d-flex align-items-center justify-content-between">
                                <span class="what-makes-icon bg-primary-transparent rounded"><i
                                        class="ti ti-sparkles"></i></span>
                                <h2>01</h2>
                            </div>
                            <h6 class="mb-2">Authentic Talent Stories</h6>
                            <p class="mb-0">Real stories from real talents. Discover inspiring journeys that
                                reflect resilience, creativity, and growth.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="what-makes-item bg-white rounded-2">
                            <div class="d-flex align-items-center justify-content-between">
                                <span class="what-makes-icon bg-pink-transparent rounded"><i
                                        class="ti ti-certificate"></i></span>
                                <h2>02</h2>
                            </div>
                            <h6 class="mb-2">Skill-Focused Opportunities</h6>
                            <p class="mb-0">Explore a curated space where talents can connect with mentors,
                                showcase skills, and access paid opportunities.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="what-makes-item bg-white rounded-2">
                            <div class="d-flex align-items-center justify-content-between">
                                <span class="what-makes-icon bg-success-transparent rounded"><i
                                        class="ti ti-users-group"></i></span>
                                <h2>03</h2>
                            </div>
                            <h6 class="mb-2">Community of Changemakers</h6>
                            <p class="mb-0">Join a growing community driven by purpose, collaboration, and
                                positive social impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- what makes Future Connect -->

<!-- <div class="container">
    <div class="row">
        <div class="col-md-12 mt-5">
            <div class="section-header-two text-center" data-aos="fade-up">
                <h2 class="mb-2"><span class="title-bg"></span>Latest Stories<span class="title-bg2"></span></h2>
                <p>Explore the latest stories shared by our talented community.</p>
            </div>
            <div class="trend-section">
                <div class="row">
                    <div class="container">

                        <div class="row" data-aos="fade-up">
                            @foreach($stories as $story)
                            <div class="col-xl-4 col-md-4">
                                <div class="gigs-grid">
                                    <div class="gigs-img">
                                        <div class="img-slider">
                                            <div class="slide-images">
                                                <a href="{{ url('story-details/'.$story->slug) }}">
                                                    <img src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/user/profile.jpg') }}" class="img-fluid" alt="{{ $story->title }}">
                                                </a>
                                            </div>
                                        </div>

                                        <div class="card-overlay-badge">
                                            @if($story->status == 'approved')
                                            <a role="button" tabindex="0">
                                                <span class="badge bg-success">
                                                    <i class="fa-solid fa-bolt"></i> Published
                                                </span>
                                            </a>
                                            @elseif($story->status == 'pending')
                                            <a role="button" tabindex="0">
                                                <span class="badge bg-warning">
                                                    <i class="feather-star"></i> Pending
                                                </span>
                                            </a>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="gigs-content">
                                        <div class="gigs-info">
                                            <div>
                                                <span class="badge bg-light">{{ $story->category->name }}</span>
                                                @if($story->tags)
                                                <span class="ms-2">+{{ count(explode(',', $story->tags)) }}</span>
                                                @endif
                                            </div>
                                        </div>

                                        <div class="gigs-title">
                                            <h5>
                                                <a href="{{ url('story-details/'.$story->slug) }}">
                                                    {{ $story->title }}
                                                </a>
                                            </h5>
                                        </div>

                                        <div class="gigs-card-footer">
                                            <div class="d-flex align-items-center gigs-left-text">
                                                <a role="button" tabindex="0" class="avatar avatar-sm flex-shrink-0">
                                                    <img src="{{ $story->talent->image ? asset('image/talents/' . $story->talent->image) : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-pill" alt="img">
                                                </a>
                                                <div class="ms-2">
                                                    <h6 class="mb-0">
                                                        <a role="button" tabindex="0">{{ $story->talent->name }}</a>
                                                    </h6>
                                                    <p class="mb-0">Posted: {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->

<style>
    .talent-card {
        background: linear-gradient(to bottom right, #011E34, #27AE60);
        color: #ffffff;
        border-radius: 16px;
        padding: 1.5rem;
        text-align: left;
        display: flex;
        gap: 1.5rem;
        align-items: center;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    .talent-card:hover {
        transform: translateY(-5px);
    }

    /* Talent Image */
    .talent-card img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid #ffffff33;
    }

    /* Talent Info */
    .talent-info h4 {
        margin: 0;
        color: #dcdcdc;
        font-size: 1.25rem;
        font-weight: 700;
    }

    .talent-info p {
        margin: 4px 0;
        font-size: 0.95rem;
    }

    .talent-info .rating {
        color: #FFD700;
        font-size: 0.9rem;
    }

    .talent-info .location {
        color: #dcdcdc;
        font-size: 0.85rem;
    }

    .talent-info .tag {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.75rem;
        margin-right: 5px;
    }
</style>


<!-- testimonials -->
<div class="testimonials-section-two">
    <img src="{{ asset('assets/img/home/shape-4.svg') }}" alt="img" class="img-fluid testimonials-bg3 d-lg-inline-flex d-none">
    <div class="container">
        <div class="row align-items-center row-gap-4">
            <div class="col-lg-6">
                <div class="section-header-two" data-aos="fade-up">
                    <h2 class="mb-2 p-0">What Talents Say About Future Connect</h2>
                    <p>Discover the voices of passionate individuals whose lives have been impacted by sharing
                        their stories and skills on Future Connect.</p>
                </div>
                <h6 class="mb-3" data-aos="fade-up">We’re Building a Global Talent Community</h6>
                <div class="avatar-list-stacked me-2" data-aos="fade-up">
                    @foreach($testimonials as $testimonial)
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="{{ $testimonial->talent->image 
        ? asset('image/talents/' . $testimonial->talent->image) 
        : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    @endforeach
                </div>
            </div>
            <div class="col-lg-6">
                @foreach($testimonials as $test)
                <div class="talent-card mb-4">
                    <img src="{{ $test->talent->image 
        ? asset('image/talents/' . $test->talent->image) 
        : asset('assets/img/user/profile.jpg') }}" alt="Talent Photo">
                    <div class="talent-info">
                        <h4>{{ $test->talent->name ?? 'Jacob Rivera' }}</h4>
                        <p>{{ $test->title ?? 'Creative Writer' }}</p>
                        <div class="rating">@for($i = 0; $i < 5; $i++)
                                <i
                                class="ti ti-star-filled {{ $i < $test->rating ? 'text-warning' : 'text-muted' }}"></i>
                                @endfor</div>
                        <p class="description">{{ $test->content ?? 'Passionate writer with a flair for storytelling and compelling narratives.' }}</p>
                        <div class="location">📍 {{ $test->talent->address ?? 'New York, NY' }}</div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
<!-- testimonials -->


<div class="container">
    <div class="join-with-us">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div data-aos="fade-right" class="aos-init aos-animate">
                <h2 class="text-white">Join Future Connect</h2>
                <p class="mb-0">Showcase your talent, share your story, and inspire others. Be part of a
                    community that empowers growth and recognition.</p>
            </div>
            <a href="{{ route('user.upload-story') }}" class="btn btn-lg btn-primary join-us flex-shrink-0 aos-init aos-animate"
                data-aos="fade-left">Get
                Started</a>
        </div>
    </div>
</div>


@endsection