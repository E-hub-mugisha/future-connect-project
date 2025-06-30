@extends('layouts.guest')
@section('content')

<!-- Hero Section Carousel -->
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner">

        <!-- Carousel Item 1 -->
        <div class="carousel-item active">
            <div class="hero-section-two py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Left Column -->
                        <div class="col-lg-7">
                            <div class="banner-content" data-aos="fade-up">
                                <img src="assets/img/home/banner-shape-1.svg" alt="decorative shape"
                                    class="img-fluid banner-bg-1 d-none d-lg-flex">
                                <span class="d-inline-flex mb-3 align-items-center hero-title">
                                    <i class="ti ti-point-filled me-1"></i>Empowering Young Talents
                                </span>
                                <h1 class="mb-2">Share Your <span>Story</span> & Showcase Your
                                    <span>Skills</span>
                                </h1>
                                <p class="mb-4">
                                    Future Connect is where creativity meets opportunity. Upload your journey,
                                    highlight your
                                    talents, and connect with a community that celebrates and supports your
                                    growth.
                                </p>
                                <a href="talents.html" class="btn btn-lg btn-primary d-inline-flex align-items-center">
                                    Discover Talents<i class="ti ti-chevron-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <!-- Right Column -->
                        <div class="col-lg-5">
                            <div class="banner-image position-relative">
                                <img src="assets/img/home/banner-image.svg" alt="Future Connect hero image"
                                    class="img-fluid banner-img">
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
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="banner-content" data-aos="fade-up">
                                <img src="assets/img/home/banner-shape-1.svg" alt="decorative shape"
                                    class="img-fluid banner-bg-1 d-none d-lg-flex">
                                <span class="d-inline-flex mb-3 align-items-center hero-title">
                                    <i class="ti ti-point-filled me-1"></i>Inspire the World
                                </span>
                                <h1 class="mb-2">Turn Your <span>Passion</span> into <span>Impact</span></h1>
                                <p class="mb-4">
                                    Upload your unique journey, find opportunities, and let the world see what
                                    you’re capable of.
                                </p>
                                <a href="upload.html" class="btn btn-lg btn-primary d-inline-flex align-items-center">
                                    Upload Your Story<i class="ti ti-chevron-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="banner-image position-relative">

                                <img src="assets/img/home/front-view-handsome-male-musician-singing-home-with-microphone.jpg"
                                    alt="Hero image 2" class="img-fluid banner-img">
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
<!-- /Hero Section Carousel -->



<!-- Future Connect Search Form -->
<div class="banner-form banner-form-two" data-aos="fade-up">
    <div class="row justify-content-center">
        <div class="col-xl-8">
            <form action="search-results.html">
                <div class="banner-search-list">
                    <div class="input-block">
                        <label>Explore</label>
                        <select class="select">
                            <option>Select Category</option>
                            @foreach( $categories as $cat)
                                <option>{{ $cat->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="input-block">
                        <label>Region</label>
                        <div class="input-locaion">
                            <input type="text" class="form-control" placeholder="e.g., Kigali, Nairobi, Lagos">
                        </div>
                    </div>
                    <div class="input-block border-0">
                        <label>Search</label>
                        <input type="text" class="form-control" placeholder="e.g., photography, coding, music">
                    </div>
                </div>
                <div class="input-block-btn">
                    <button class="btn btn-lg btn-primary d-inline-flex align-items-center justify-content-center"
                        type="submit">
                        <i class="ti ti-search"></i> Search
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Future Connect Search Form -->

<div class="client-slider-sec mt-5">
    <img src="assets/img/bg/shape-09.png" alt="Shape" class="client-slider-img">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-header text-center aos aos-init aos-animate" data-aos="fade-up">
                    <h3 class="text-white">Trusted by 300+ Client around globe</h3>
                </div>
                <div class="clients-slider owl-carousel owl-loaded owl-drag aos-init aos-animate" data-aos="fade-up">

                    <div class="owl-stage-outer">
                        <div class="owl-stage"
                            style="transform: translate3d(-2304px, 0px, 0px); transition: 2s; width: 6720px;">
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>





                            <div class="owl-item" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>





                            <div class="owl-item cloned active" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 168px; margin-right: 24px;">
                                <div class="client-logo">
                                    <img src="assets/img/company/logo.svg" class="w-auto" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i
                                class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation"
                            class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                    <div class="owl-dots disabled"></div>
                    <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i
                                class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation"
                            class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                    <div class="owl-dots disabled"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Future Connect: Popular Talent Categories -->
<div class="popular-section-two">
    <div class="container">
        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Popular Talent Categories<span class="title-bg2"></span></h2>
            <p>Discover inspiring stories, impactful skills, and creative talent across Africa</p>
        </div>
        <div
            class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
            @foreach($categories as $cat)
                <div class="col d-flex">
                    <div class="pop-category flex-fill" data-aos="flip-left">
                        <span><i class="ti ti-movie"></i></span>
                        <h6 class="mb-1"><a
                                href="{{ url('/talents/category/' . $cat->slug) }}">{{ $cat->name }}</a>
                        </h6>
                        <p>85 Stories</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
<!-- /Future Connect: Popular Talent Categories -->

<!-- next gen -->
<div class="next-gen-section">
    <div class="container">
        <div class="section-header-two text-center" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Meet the Next Generation of talents<span
                    class="title-bg2"></span></h2>
            <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>
        <div class="row seller-list">
            @foreach($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card" data-aos="flip-left">
                        <div class="card-body text-center">
                            <span class="avatar">
                                <a href="{{ url('/talent/' . $talent->id) }}">
                                    <img class="rounded-pill" src="/assets/img/user/profile.jpg" alt="img" height="50"
                                        width="50">
                                </a>
                                <i class="ti ti-discount-check-filled verify-icon"></i>
                            </span>
                            <h6 class="mb-1">
                                <a
                                    href="{{ url('/talent/' . $talent->id) }}">{{ $talent->name }}</a>
                            </h6>
                            <p>{{ $talent->category->name ?? 'Uncategorized' }}</p>
                            <p class="mb-0 location-text d-inline-flex align-items-center">
                                <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                                Rwanda <i class="ti ti-point-filled mx-1"></i> Total Gigs: 45
                            </p>
                            <div class="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                                <a href="{{ url('/talent/' . $talent->id) }}"
                                    class="badge bg-light">
                                    {{ $talent->skill }}
                                </a>
                                <a href="{{ url('/talent/' . $talent->id) }}"
                                    class="badge bg-light">
                                    {{ $talent->language }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
            <div class="text-center mt-3" data-aos="fade-up">
                <a href="{{ url('/talents') }}" class="btn btn-lg btn-dark">View All Talents</a>
            </div>
        </div>
    </div>
</div>
<!-- next gen -->

<!-- how it works for Future Connect -->
<div class="how-it-works">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12">
                <div class="how-it-works-content position-relative row">
                    <img src="assets/img/home/shape-1.svg" alt="img" class="img-fluid how-it-works-bg">
                    <div class="section-header-two" data-aos="fade-up">
                        <h2 class="mb-2"><span class="title-bg"></span>How It Works<span class="title-bg2"></span></h2>
                        <p>Empowering young talents through storytelling, skills sharing, and community support.
                        </p>
                    </div>
                    <div class="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                        data-aos="fade-up">
                        <span class="count bg-primary-transparent">01</span>
                        <div>
                            <h6 class="mb-2">Create Your Talent Profile</h6>
                            <p class="mb-0">Sign up and showcase your story, skills, and aspirations through
                                text, images, and videos.</p>
                        </div>
                    </div>
                    <div class="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                        data-aos="fade-up">
                        <span class="count bg-secondary-transparent">02</span>
                        <div>
                            <h6 class="mb-2">Get Discovered & Rated</h6>
                            <p class="mb-0">Users browse talents by category, like your story, rate your skills,
                                and share feedback to help you grow.</p>
                        </div>
                    </div>
                    <div class="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                        data-aos="fade-up">
                        <span class="count bg-pink-transparent">03</span>
                        <div>
                            <h6 class="mb-2">Earn Support & Recognition</h6>
                            <p class="mb-0">Receive donations or course purchases, and gain visibility through
                                the Future Connect community.</p>
                        </div>
                    </div>
                    <div class="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                        data-aos="fade-up">
                        <span class="count bg-success-transparent">04</span>
                        <div>
                            <h6 class="mb-2">Grow With Us</h6>
                            <p class="mb-0">Access learning resources, connect with agents and mentors, and keep
                                your profile evolving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end how it works -->


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
                                        <a href="{{ url('skills/category/'.$skill->slug) }}">
                                            <img src="/assets/img/home/service-01.jpg" class="img-fluid" alt="Gigs" />
                                        </a>
                                    </div>
                                </div>
                                <div class="card-overlay-badge">
                                    <a href="service.html">
                                        <span class="badge bg-warning">
                                            <i class="feather-star"></i>Featured
                                        </span>
                                    </a>
                                    <a href="service.html">
                                        <span class="badge bg-danger">
                                            <i class="fa-solid fa-meteor"></i>
                                            {{ $skill->level }}
                                        </span>
                                    </a>
                                </div>
                                <div class="fav-selection">
                                    <a role="button" tabindex="0"><i class="feather-video"></i></a>
                                    <a role="button" tabindex="0" class="fav-icon"><i class="feather-heart"></i></a>
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
                                        <span><i class="fa-solid fa-star"></i>4.8 (360 Reviews)</span>
                                    </div>
                                </div>
                                <div class="gigs-title">
                                    <h5><a
                                            href="{{ url('skills/'.$skill->slug) }}">{{ $skill->name }}</a>
                                    </h5>
                                </div>
                                <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center gigs-left-text">
                                        <a href="talent-profile.html" class="avatar avatar-sm flex-shrink-0">
                                            <img src="/assets/img/user/profile.jpg" class="img-fluid rounded-pill"
                                                alt="img" />
                                        </a>
                                        <div class="ms-2">
                                            <h6 class="mb-0">
                                                <a role="button"
                                                    tabindex="0">{{ $skill->talent->name ?? 'Author' }}</a>
                                            </h6>
                                            <p class="mb-0">
                                                {{ $skill->talent->address ?? 'Rwanda' }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <h6 class="mb-1">$645</h6>
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


<!-- testimonials -->
<div class="testimonials-section-two">
    <img src="assets/img/home/shape-4.svg" alt="img" class="img-fluid testimonials-bg3 d-lg-inline-flex d-none">
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
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                </div>
            </div>
            <div class="col-lg-6">
                @foreach($testimonials as $test)
                    <div class="testimonials-item bg-white rounded mb-0" data-aos="fade-up">

                        {{-- Talent Info --}}
                        <div class="d-flex align-items-center gigs-left-text mb-3">
                            <a role="button" tabindex="0" class="avatar avatar-sm flex-shrink-0">
                                <img src="/assets/img/user/profile.jpg" class="img-fluid rounded-pill" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="mb-0">
                                    <a role="button" tabindex="0">
                                        {{ $test->talent->name ?? 'Talent Name' }}
                                    </a>
                                </h6>
                                <p class="mb-0">
                                    {{ $test->talent->location ?? 'Location' }}</p>
                            </div>
                        </div>

                        {{-- Testimonial Content --}}
                        <h6 class="mb-1">{{ $test->title }}</h6>
                        <p class="mb-3">{{ $test->content }}</p>

                        {{-- Star Rating --}}
                        @for($i = 0; $i < 5; $i++)
                            <i
                                class="ti ti-star-filled {{ $i < $test->rating ? 'text-warning' : 'text-muted' }}"></i>
                        @endfor

                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
<!-- testimonials -->


<div class="container">
			<div class="join-with-us">
				<img src="assets/img/home/shape-5.svg" alt="img" class="img-fluid join-with-us-bg">
				<div class="d-sm-flex align-items-center justify-content-between">
					<div data-aos="fade-right" class="aos-init aos-animate">
						<h2 class="text-white">Join Future Connect</h2>
						<p class="mb-0">Showcase your talent, share your story, and inspire others. Be part of a
							community that empowers growth and recognition.</p>
					</div>
					<a href="upload-story.html" class="btn btn-lg btn-primary flex-shrink-0 aos-init aos-animate" data-aos="fade-left">Get
						Started</a>
				</div>
			</div>
		</div>


@endsection
