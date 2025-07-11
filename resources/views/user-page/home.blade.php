@extends('layouts.guest')
@section('content')

<!-- Hero Section Carousel -->
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
    <div class="carousel-inner pt-3">

        <!-- Carousel Item 1 -->
        <div class="carousel-item active">
            <div class="hero-section-two py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Left Column -->
                        <div class="col-lg-5">
                            <div class="banner-content" data-aos="fade-up">

                                <span class="d-inline-flex mb-3 align-items-center hero-title">
                                    <i class="ti ti-point-filled me-1"></i>Empowering Young Talents
                                </span>
                                <h1 class="mb-2">Share Your <span>Story</span> & Showcase Your
                                    <span>Skills</span>
                                </h1>
                                <!-- <p class="mb-4">
                                    Future Connect is where creativity meets opportunity. Upload your journey,
                                    highlight your
                                    talents, and connect with a community that celebrates and supports your
                                    growth.
                                </p> -->
                                <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">
                                    Discover Talents<i class="ti ti-chevron-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <!-- Right Column -->
                        <div class="col-lg-7">
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
                        <div class="col-lg-5">
                            <div class="banner-content" data-aos="fade-up">

                                <span class="d-inline-flex mb-3 align-items-center hero-title">
                                    <i class="ti ti-point-filled me-1"></i>Inspire the World
                                </span>
                                <h1 class="mb-2">Turn Your <span>Passion</span> into <span>Impact</span></h1>
                                <!-- <p class="mb-4">
                                    Upload your unique journey, find opportunities, and let the world see what
                                    you’re capable of.
                                </p> -->
                                <a href="{{ route('user.upload-story') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">
                                    Upload Your Story<i class="ti ti-chevron-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7">
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

            <form action="{{ url('/search') }}" method="GET">

                <div class="banner-search-list text-center">

                    <!-- Category Select -->
                    <div class="input-block">
                        <select name="category" class="form-select" style="background: #c1c1c1; border: 1px solid #e4e4e4; border-radius: 30px;">
                            <option value="">Select Category</option>
                            @foreach($categories as $cat)
                            <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Region Input -->
                    <div class="input-block">
                        <div class="input-location">
                            <input type="text" name="region" class="form-control" placeholder="Region: e.g., Kigali, Nairobi, Lagos" style="background: #c1c1c1; border: 1px solid #e4e4e4; border-radius: 30px;">
                        </div>
                    </div>

                    <!-- Keyword Search -->
                    <div class="input-block">
                        <input type="text" name="keyword" class="form-control" placeholder="Search: e.g., photography, coding, music" style="background: #c1c1c1; border: 1px solid #e4e4e4; border-radius: 30px;">
                    </div>

                </div>

                <!-- Submit Button -->
                <div class="input-block-btn">
                    <button class="btn btn-lg btn-primary d-inline-flex align-items-center justify-content-center" type="submit">
                        <i class="ti ti-search"></i> Search
                    </button>
                </div>

            </form>

        </div>
    </div>
</div>
<!-- /Future Connect Search Form -->


<div class="client-slider-sec mt-5">
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
                    <h6 class="mb-1"><a
                            href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a>
                    </h6>
                    @if(isset($cat->talents_count))
                    <p>{{ $cat->talents_count }} talents</p>
                    @else
                    <p>0 talents</p>
                    @endif
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
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
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
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img
                                    class="rounded-3"
                                    src="{{ $talent->image 
        ? asset('image/talents/' . $talent->image) 
        : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" />

                            </a>

                        </span>
                        <h6 class="mb-1">
                            <a
                                href="{{ route('user.talent.details', $talent->id) }}">{{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon"></i></a>
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

<div class="container">
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
                                                    <img src="{{ $story->talent->image 
        ? asset('image/talents/' . $story->talent->image) 
        : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-pill" alt="img">
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
</div>


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
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="assets/img/user/profile.jpg"
                            class="img-fluid rounded-circle border border-white" alt="Img"></span>
                </div>
            </div>
            <div class="col-lg-6">
                @foreach($testimonials as $test)
                <div class="testimonials-item bg-white rounded mb-0" data-aos="fade-up">

                    {{-- Talent Info --}}
                    <div class="d-flex align-items-center gigs-left-text mb-3">
                        <a role="button" tabindex="0" class="avatar avatar-sm flex-shrink-0">
                            <img src="/assets/img/user/profile.jpg" class="img-fluid rounded-pill"
                                alt="img">
                        </a>
                        <div class="ms-2">
                            <h6 class="mb-0">
                                <a role="button" tabindex="0">
                                    {{ $test->talent->name ?? 'Talent Name' }}
                                </a>
                            </h6>
                            <p class="mb-0">
                                {{ $test->talent->location ?? 'Location' }}
                            </p>
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