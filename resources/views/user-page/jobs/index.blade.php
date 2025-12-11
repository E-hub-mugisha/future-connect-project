@extends('layouts.guest')
@section('title', 'Explore works and gigs')
@section('content')

<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 1rem 0;
        border-radius: 2rem;
        margin-top: 2rem;
        box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
        z-index: 1;
        /* height: 22rem; */
    }

    .tranding-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        align-items: center;
        gap: 2rem;
        width: 80%;
        margin: 0 auto;
    }

    .tranding-image-slider {
        width: 100%;
        height: 20rem;
        perspective: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-slide {
        height: 15rem;
        width: 15rem;
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: scale(0.9);
        z-index: 1;
        opacity: 0.6;
    }

    .tranding-image-slider .swiper-slide.swiper-slide-active {
        transform: scale(1.1);
        z-index: 3;
        opacity: 1;
        margin: 0 auto;
    }

    .tranding-image-slider .swiper-slide img {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .tranding-caption-slider {
        width: 80%;
        text-align: left;
    }

    .tranding-caption-slider .swiper-slide {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .tranding-caption-slider .swiper-slide-active {
        opacity: 1;
        transform: translateY(0);
    }

    .tranding-slide-caption p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .tranding-line-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        border: 2px solid #fff;
        border-radius: 30px;
        padding: 0.5rem 1.2rem;
        transition: all 0.3s ease;
    }

    .tranding-line-btn:hover {
        background-color: #fff;
        color: #319BF9;
    }

    .tranding-slider-control {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4 ease;
    }

    .tranding-slider-control .slider-arrow {
        background: var(--white);
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        left: 3%;
        transform: translateX(-42%);
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-arrow {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .slider-arrow:hover {
        background: #fff;
        color: #319BF9;
    }

    /* Bubbles */
    .bubbles {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 0;
    }

    .bubbles span {
        position: absolute;
        bottom: -150px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: bubbleUp 15s infinite;
        opacity: 0.6;
    }

    .bubbles span:nth-child(1) {
        left: 10%;
        width: 60px;
        height: 60px;
        animation-duration: 20s;
    }

    .bubbles span:nth-child(2) {
        left: 30%;
        animation-delay: 2s;
    }

    .bubbles span:nth-child(3) {
        left: 50%;
        width: 80px;
        height: 80px;
        animation-duration: 25s;
    }

    .bubbles span:nth-child(4) {
        left: 70%;
        animation-delay: 1s;
        width: 30px;
        height: 30px;
    }

    .bubbles span:nth-child(5) {
        left: 90%;
        animation-duration: 18s;
    }

    @keyframes bubbleUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
        }

        50% {
            opacity: 0.8;
        }

        100% {
            transform: translateY(-1000px) scale(1.3);
            opacity: 0;
        }
    }
</style>

<style>
    /* --- SWITCH-STYLE NAV PILLS --- */
    .nav-pills {
        display: inline-flex;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 50px;
        padding: 5px;
        margin-bottom: 2rem;
        justify-content: center;
    }

    .nav-pills .nav-link {
        border-radius: 50px;
        color: #fff;
        font-weight: 500;
        padding: 0.6rem 1.5rem;
        transition: all 0.3s ease;
    }

    .nav-pills .nav-link.active {
        background-color: #0d6efd;
        color: #fff;
        box-shadow: 0 0 10px rgba(13, 110, 253, 0.6);
    }

    .nav-pills .nav-link:not(.active):hover {
        background-color: rgba(255, 255, 255, 0.1);
    }


    .hero-tab {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 2rem;
        color: #f1f1f1;
    }

    .hero-tab h4 {
        font-weight: 600;
        color: #fff;
    }

    .hero-tab p {
        font-size: 1rem;
        margin: 1rem 0 1.5rem;
    }

    .btn-light {
        border-radius: 50px;
        font-weight: 600;
        padding: 0.6rem 1.5rem;
    }

    #market-section {
        position: relative;
        /* background: #319bf9; */
        color: #f1f1f1;
        padding: 80px 0 56px;
        z-index: 1;
    }

    #market-section .provide-box {
        background: #d4e6f526;
        backdrop-filter: blur(15px) saturate(180%);
    }
</style>


<div class="container p-4">
    <section id="tranding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div id="jobInfoCarousel" class="carousel slide carousel-fade mb-4" data-bs-ride="carousel" data-bs-interval="4500">

                        <div class="carousel-inner">

                            <!-- Slide 1 -->
                            <div class="carousel-item active">
                                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                    <div class="banner-head mt-4">
                                        <h1 class="mb-2 text-white">{{ $jobs->total() }}+ Available Jobs</h1>
                                        <p class="d-inline-flex text-white">Discover full-time, part-time and remote job opportunities tailored for your skills.</p>
                                    </div>
                                    <div class="banner-form">
                                        <!-- Tabs Navigation -->
                                        <ul class="nav nav-pills mb-3" id="heroTabs" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="marketplace-tab" data-bs-toggle="pill" data-bs-target="#marketplace" type="button" role="tab">Browse Jobs</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="opportunities-tab" data-bs-toggle="pill" data-bs-target="#opportunities" type="button" role="tab">Account</button>
                                            </li>
                                        </ul>

                                        <!-- Tabs Content -->
                                        <div class="tab-content" id="heroTabsContent">
                                            <!-- Skills Marketplace -->
                                            <div class="tab-pane hero-tab fade show active" id="marketplace" role="tabpanel">
                                                <h4 class="text-white">Promote Your Skills</h4>
                                                <p class="text-white">
                                                    Stand out! Boost your profile and reach 3× more employers.<br>
                                                    Get verified and feature your story on our homepage.
                                                </p>
                                                <a href="#skills" class="btn btn-light">Explore Marketplace</a>
                                            </div>

                                            <!-- Opportunities Center -->
                                            <div class="tab-pane hero-tab fade" id="opportunities" role="tabpanel">
                                                <h4 class="text-white">Unlock New Opportunities</h4>
                                                <p class="text-white">
                                                    Discover tailored job listings, collaboration projects, and freelance gigs.<br>
                                                    Set up alerts to never miss a chance to grow your career.
                                                </p>
                                                <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                            </div>
                                            <!-- Connection Room -->
                                            <div class="tab-pane hero-tab fade" id="connection" role="tabpanel">
                                                <h4 class="text-white">Expand Your Network</h4>
                                                <p class="text-white">
                                                    Connect with industry professionals, mentors, and peers.<br>
                                                    Join groups, attend virtual events, and build relationships that matter.
                                                </p>
                                                <a href="#connections" class="btn btn-light">Join the Community</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Slide 1 -->
                            <div class="carousel-item">
                                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                    <div class="banner-head mt-4">
                                        <h1 class="mb-2 text-white">{{ $categories->count() }}+ Job Categories</h1>
                                        <p class="d-inline-flex text-white">Explore tech, marketing, design, management and more career fields.</p>
                                    </div>
                                    <div class="banner-form">
                                        <!-- Tabs Navigation -->
                                        <ul class="nav nav-pills mb-3" id="heroTabs" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="marketplace-tab" data-bs-toggle="pill" data-bs-target="#marketplace" type="button" role="tab">View Categories</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="opportunities-tab" data-bs-toggle="pill" data-bs-target="#opportunities" type="button" role="tab">Account</button>
                                            </li>
                                        </ul>

                                        <!-- Tabs Content -->
                                        <div class="tab-content" id="heroTabsContent">
                                            <!-- Skills Marketplace -->
                                            <div class="tab-pane hero-tab fade show active" id="marketplace" role="tabpanel">
                                                <h4 class="text-white">Promote Your Skills</h4>
                                                <p class="text-white">
                                                    Stand out! Boost your profile and reach 3× more employers.<br>
                                                    Get verified and feature your story on our homepage.
                                                </p>
                                                <a href="#skills" class="btn btn-light">Explore Marketplace</a>
                                            </div>

                                            <!-- Opportunities Center -->
                                            <div class="tab-pane hero-tab fade" id="opportunities" role="tabpanel">
                                                <h4 class="text-white">Unlock New Opportunities</h4>
                                                <p class="text-white">
                                                    Discover tailored job listings, collaboration projects, and freelance gigs.<br>
                                                    Set up alerts to never miss a chance to grow your career.
                                                </p>
                                                <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                            </div>
                                            <!-- Connection Room -->
                                            <div class="tab-pane hero-tab fade" id="connection" role="tabpanel">
                                                <h4 class="text-white">Expand Your Network</h4>
                                                <p class="text-white">
                                                    Connect with industry professionals, mentors, and peers.<br>
                                                    Join groups, attend virtual events, and build relationships that matter.
                                                </p>
                                                <a href="#connections" class="btn btn-light">Join the Community</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="banner-img">
                        <div class="banner-img-right">
                            <img src="assets/img/banner-img.png" class="img-fluid" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="page-content" style="transform: none;">
    <div class="container" style="transform: none;">
        <!-- Service Slider -->
        <div class="trend-section server-grid-slider">
            <div class="row">
                <div class="col-sm-10">
                    <h5>Trending Categories of work and gigs</h5>
                </div>
                <div class="col-sm-2 text-end">
                    <div class="owl-nav service-nav nav-control nav-top"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
            </div>
            <div class="service-sliders owl-carousel owl-loaded owl-drag">

                <div class="owl-stage-outer">
                    <div class="owl-stage" style="transform: translate3d(-1320px, 0px, 0px); transition: all; width: 4290px;">
                        @foreach($categories as $cat)
                        <div class="owl-item cloned" style="width: 306px; margin-right: 24px;">
                            <div class="service-box">
                                <div class="service-info">
                                    <div class="servive-name">
                                        <h5><a href="{{ route('user.jobs.index', ['category' => $cat->id]) }}">{{ $cat->name }}</a></h5>
                                        <p>{{ $cat->job_sections_count ?? 0 }} Gigs</p>
                                    </div>
                                </div>
                                <style>
                                    .slide-line-btn {
                                        position: relative;
                                        display: inline-flex;
                                        align-items: center;
                                        gap: 6px;
                                        padding: 6px 16px;
                                        color: #fff;
                                        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
                                        border-radius: 30px;
                                        text-decoration: none;
                                        overflow: hidden;
                                        z-index: 1;
                                    }

                                    .slide-line {
                                        position: absolute;
                                        top: 100%;
                                        left: -100%;
                                        width: 200%;
                                        height: 100%;
                                        background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%);
                                        transform: rotate(45deg);
                                        animation: slideRightUp 2s ease-in-out infinite;
                                        z-index: 0;
                                    }

                                    .slide-line:nth-child(2) {
                                        animation-delay: 0s;
                                        opacity: 0;
                                        width: 50%;
                                    }

                                    .slide-line:nth-child(3) {
                                        animation-delay: 0s;
                                        opacity: 0.5;
                                        width: 150%;
                                    }

                                    .slide-line:nth-child(4) {
                                        animation-delay: 0.8s;
                                        opacity: 0.7;
                                        width: 200%;
                                    }

                                    @keyframes slideRightUp {
                                        0% {
                                            top: 100%;
                                            left: -100%;
                                        }

                                        50% {
                                            top: 0%;
                                            left: 0%;
                                        }

                                        100% {
                                            top: -100%;
                                            left: 100%;
                                        }
                                    }

                                    .slide-line-btn span {
                                        pointer-events: none;
                                    }
                                </style>

                                <a href="{{ route('user.jobs.index', ['category' => $cat->id]) }}" class="slide-line-btn">
                                    <i class="feather-arrow-right"></i>Read More
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                </a>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
                <div class="owl-dots disabled"></div>
            </div> <!-- /Service Slider -->
        </div> <!-- Title -->
        <div class="title-section">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="title-header">
                        <h3>Works &amp; Gigs </h3>
                        <p>View all Works &amp; Gigs</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Sort By -->
                    <div class="filters-wrap sort-categories  justify-content-lg-end">
                        <div class="collapse-card float-lg-end">
                            <div class="filter-header"> <a href="javascript:void(0);" class="sorts-list"> <i class="ti ti-sort-ascending"></i>Sorts by: <span>New Arrivals</span> </a> </div>
                            <div id="categories" class="collapse-body" style="display: none;">
                                <ul class="checkbox-list categories-lists">
                                    <li class="active"> <label class="custom_check"> <span class="checked-title"> New Arrivals</span> </label> </li>
                                    <li> <label class="custom_check"> <span class="checked-title"> Features</span> </label> </li>
                                    <li> <label class="custom_check"> <span class="checked-title">Price: Low to High </span> </label> </li>
                                    <li> <label class="custom_check"> <span class="checked-title"> Price: High to Low </span> </label> </li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- /Sort By -->
                </div>
            </div>
        </div> <!-- /Title -->
        <!-- Search Details -->
        <div class="service-gigs" style="transform: none;">
            <div class="row" style="transform: none;">
                <div class="col-lg-3 theiaStickySidebar">

                    <div class="sidebar-widget">

                        <div class="sidebar-header">
                            <h3>Filter</h3>
                            <a href="{{ route('user.jobs.index') }}" class="reset-link">Reset Filter</a>
                        </div>

                        <div class="sidebar-body p-0">

                            {{-- ================= CATEGORIES ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#categories2">
                                        <img src="/assets/img/icons/category-icon.svg"> Categories
                                    </a>
                                </h4>

                                <div id="categories2" class="collapse show">
                                    <div class="collapse-body">

                                        <div class="form-group search-group">
                                            <span class="search-icon"><i class="feather icon-search"></i></span>
                                            <input type="text" class="form-control" placeholder="Search Category">
                                        </div>

                                        <ul class="checkbox-list">
                                            @foreach($categories as $cat)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                                    class="{{ request('category') == $cat->id ? 'active' : '' }}">
                                                    {{ $cat->name }} ({{ $cat->job_sections_count }})
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            {{-- ================= LOCATIONS ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#locations">
                                        <img src="/assets/img/icons/map-icon.svg"> Locations
                                    </a>
                                </h4>

                                <div id="locations" class="collapse show">
                                    <div class="collapse-body">

                                        <div class="form-group search-group">
                                            <span class="search-icon"><i class="feather icon-search"></i></span>
                                            <input type="text" class="form-control" placeholder="Search Locations">
                                        </div>

                                        <ul class="checkbox-list">
                                            @foreach($locations as $loc)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['location' => $loc])) }}"
                                                    class="{{ request('location') == $loc ? 'active' : '' }}">
                                                    {{ $loc }}
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            {{-- ================= RATINGS ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#ratings">
                                        <img src="/assets/img/icons/rating-icon.svg"> Ratings
                                    </a>
                                </h4>

                                <div id="ratings" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list star-rate">
                                            @foreach($ratings as $rate)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['rating' => $rate])) }}"
                                                    class="{{ request('rating') == $rate ? 'active' : '' }}">
                                                    @for($i=1; $i<=5; $i++)
                                                        <i class="fa-solid fa-star {{ $i <= $rate ? 'filled' : '' }}"></i>
                                                        @endfor
                                                        ({{ $rate }}+)
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {{-- ================= BUDGET ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#budget">
                                        <img src="/assets/img/icons/money-icon.svg"> Budget
                                    </a>
                                </h4>

                                <div id="budget" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($budgets as $b)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), [
                                        'budget_min' => $b['min'], 'budget_max' => $b['max']
                                    ])) }}"
                                                    class="{{ request('budget_min') == $b['min'] ? 'active' : '' }}">
                                                    {{ $b['label'] }}: ${{ number_format($b['max']) }}
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {{-- ================= SUBSCRIPTIONS ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#subscription">
                                        <img src="/assets/img/icons/subscribe-icon.svg"> Subscription
                                    </a>
                                </h4>

                                <div id="subscription" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($subscriptionPlans as $plan)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['subscription' => $plan])) }}"
                                                    class="{{ request('subscription') == $plan ? 'active' : '' }}">
                                                    {{ $plan }}
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {{-- ================= DELIVERY TIME ================= --}}
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#delivery">
                                        <img src="/assets/img/icons/time-icon.svg"> Delivery Time
                                    </a>
                                </h4>

                                <div id="delivery" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($deliveryTimes as $d)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['delivery' => $d])) }}"
                                                    class="{{ request('delivery') == $d ? 'active' : '' }}">
                                                    {{ $d }}
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <!-- /Sidebar -->
                <div class="col-lg-9">
                    <div class="row">
                        @foreach($jobs as $job)
                        <!-- Service List -->
                        <div class="col-xl-4 col-md-6">
                            <div class="gigs-grid">
                                <div class="gigs-img">
                                    <a href="{{ route('user.jobs.show',$job->id) }}"><img src="assets/img/blog/blog-01.jpg" class="img-fluid" alt="img"></a>
                                    <div class="card-overlay-badge"> <a href="service.html"><span class="badge bg-warning"><i class="feather-star"></i>{{ $job->location ?? 'Remote' }}</span></a> <a href="service.html"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span></a> </div>
                                    <div class="fav-selection"> <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a> </div>
                                </div>
                                <div class="gigs-content">
                                    <div class="gigs-info"> <a href="{{ route('user.jobs.show',$job->id) }}" class="badge bg-primary-light">{{ $job->category->name ?? 'Website Promotion' }}</a>
                                        <div class="star-rate"> <span><i class="fa-solid fa-star"></i>5.0</span> </div>
                                    </div>
                                    <div class="gigs-title">
                                        <h3> <a href="{{ route('user.jobs.show',$job->id) }}">{{ $job->title }}</a> </h3>
                                    </div>
                                    <ul class="gigs-user-info">
                                        <li class="gigs-user"> <img src="assets/img/user/user-01.jpg" alt="img">
                                            <p>By {{ $job->company->name }}</p>
                                        </li>
                                        <li class="gigs-loc">
                                            <p><i class="ti ti-map-pin-check"></i>{{ $job->location ?? 'Remote' }}</p>
                                        </li>
                                    </ul>
                                    <div class="gigs-card-footer gap-2">
                                        <h5>${{ $job->salary_range }}</h5> <span class="badge">Delivery in {{ $job->delivery_time ?? '1 day' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- /Service List -->
                        @endforeach
                    </div>
                </div>
            </div>
        </div> <!-- /Service Details -->
    </div>
</div>
@endsection