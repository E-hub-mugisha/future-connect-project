@extends('layouts.guest')
@section('title', 'Explore works and jobs')
@section('content')

<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: #060f11;
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
        background-color: #122322;
        color: #fff;
        /* box-shadow: 0 0 10px rgba(13, 110, 253, 0.6); */
        border: 1px solid #00d992;
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
        background: #0d1618bd;
        backdrop-filter: blur(15px) saturate(180%);
    }
</style>


<div class="container p-4">
    <section id="tranding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                        <div class="banner-head mt-4">
                            <h1 class="mb-2" style="color:#afafaf;">Explore {{ $jobs->total() }}+ Available work</h1>
                            <p class="d-inline-flex" style="color:#afafaf;">Discover full-time, part-time and remote job opportunities tailored for your skills.</p>
                        </div>
                        <div class="banner-form">
                            <!-- Mobile & Tablet Carousel -->
                            <div id="jobCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="5000">
                                <!-- Indicators -->
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#jobCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
                                    <button type="button" data-bs-target="#jobCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#jobCarousel" data-bs-slide-to="2"></button>
                                </div>
                                <style>
                                    .carousel-indicators {
                                        bottom: -15px;
                                    }
                                </style>
                                <!-- Slides -->
                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <!-- Skills Marketplace -->
                                        <div class="hero-tab text-center p-4">
                                            <h4 style="color:#afafaf;">Find Work Today!</h4>
                                            <p style="color:#afafaf;">
                                                Every day, thousands of people browse our marketplace for services like yours. Don’t miss out!
                                            </p>
                                            <a href="#skills" class="btn btn-light">Explore work</a>
                                        </div>
                                    </div>
                                    <!-- gig Center -->
                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 style="color:#afafaf;">Ways to Earn through our platform</h4>
                                            <p style="color:#afafaf;">
                                                Learn how to earn through future connect platform.
                                            </p>
                                            <a data-bs-toggle="modal" data-bs-target="#postJobModal" role="button" class="btn btn-light">Get Started</a>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 style="color:#afafaf;">Unlock New Opportunities</h4>
                                            <p class="text-muted" style="color:#afafaf;">
                                                Discover tailored job listings, collaboration projects, and freelance gigs.

                                            </p>
                                            <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-content row d-none d-md-flex">

                                <div class="col-md-4" id="marketplace">
                                    <div class="hero-tab text-center p-4">
                                        <h4 style="color:#afafaf;">Find Work Today!</h4>
                                        <p style="color:#afafaf;">
                                            Every day, thousands of people browse our marketplace for services like yours. Don’t miss out!
                                        </p>
                                        <a href="#skills" class="btn btn-light">Explore work</a>
                                    </div>
                                </div>

                                <div class="col-md-4" id="opportunities">
                                    <div class="hero-tab p-4 text-center">
                                        <h4 style="color:#afafaf;">Unlock New Opportunities</h4>
                                        <p class="text-muted" style="color:#afafaf;">
                                            Discover tailored job listings, collaboration projects, and freelance gigs.

                                        </p>
                                        <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                    </div>
                                </div>

                                <div class="col-md-4" id="connection">
                                    <div class="hero-tab text-center p-4">
                                        <h4 style="color:#afafaf;">Ways to Earn through our platform</h4>
                                        <p style="color:#afafaf;">
                                            Learn how to earn through future connect platform and Ways to Earn through our platform.
                                        </p>
                                        <a data-bs-toggle="modal" data-bs-target="#postJobModal" role="button" class="btn btn-light">Get Started</a>
                                    </div>
                                </div>

                            </div>

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
                    <h5 data-aos="fade-up">Trending Categories of work and gigs</h5>
                    <p data-aos="fade-up" style="color: #FFFDFB;"> Explore the most sought-after skills and connections in today's job market.</p>
                </div>
                <div class="col-sm-2 text-end">
                    <div class="owl-nav service-nav nav-control nav-top"></div>
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
                                        background: #060f11;
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
            <div class="align-items-center">
                <div class="title-header">
                    <h3 style="color: #afafaf;">Works &amp; Gigs </h3>
                    <p style="color: #afafaf;">View all Works &amp; Gigs</p>
                </div>
            </div>
        </div> <!-- /Title -->
        <!-- Search Details -->
        <!-- Mobile Filter Dropdown -->
        <div class="service-gigs">

            <!-- ================== MOBILE FILTER DROPDOWN ================== -->
            <div class="d-md-none mb-3">
                <div class="dropdown">
                    <button class="btn btn-outline-primary dropdown-toggle w-100" type="button" id="mobileFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Jobs
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="mobileFilterDropdown">

                        <!-- Categories -->
                        <li class="px-3 py-2">
                            <strong>Categories</strong>
                            <ul class="list-unstyled mt-1 mb-2">
                                @foreach($categories as $cat)
                                <li>
                                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                        class="dropdown-item {{ request('category') == $cat->id ? 'active' : '' }}">
                                        {{ $cat->name }} ({{ $cat->job_sections_count }})
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                        </li>

                        <!-- Locations -->
                        <li class="px-3 py-2">
                            <strong>Locations</strong>
                            <ul class="list-unstyled mt-1 mb-2">
                                @foreach($locations as $loc)
                                <li>
                                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['location' => $loc])) }}"
                                        class="dropdown-item {{ request('location') == $loc ? 'active' : '' }}">
                                        {{ $loc }}
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                        </li>

                        <!-- Salary Range -->
                        <li class="px-3 py-2">
                            <strong>Salary Range</strong>
                            <ul class="list-unstyled mt-1 mb-0">
                                @foreach($salary as $b)
                                <li>
                                    <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['salary' => $b])) }}"
                                        class="dropdown-item {{ request('salary') == $b ? 'active' : '' }}">
                                        {{ $b }}
                                    </a>
                                </li>
                                @endforeach
                            </ul>
                        </li>

                        <li class="px-3 py-2 text-center">
                            <a href="{{ route('user.jobs.index') }}" class="btn btn-light w-100">Reset Filter</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row">

                <!-- ================== SIDEBAR (DESKTOP ONLY) ================== -->
                <div class="col-lg-3 theiaStickySidebar d-none d-md-block">
                    <div class="sidebar-widget">

                        <div class="sidebar-header">
                            <h3>Filter</h3>
                            <a href="{{ route('user.jobs.index') }}" class="reset-link">Reset Filter</a>
                        </div>

                        <div class="sidebar-body p-0">

                            <!-- Categories -->
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#categories2" style="color: #afafaf;">
                                        <img src="/assets/img/icons/category-icon.svg"> Categories
                                    </a>
                                </h4>
                                <div id="categories2" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($categories as $cat)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                                    class="{{ request('category') == $cat->id ? 'active' : '' }}">
                                                    <i class="fas fa-chevron-right me-2"></i> {{ $cat->name }} ({{ $cat->job_sections_count }})
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Locations -->
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#locations" style="color: #afafaf;">
                                        <img src="/assets/img/icons/map-icon.svg"> Locations
                                    </a>
                                </h4>
                                <div id="locations" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($locations as $loc)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['location' => $loc])) }}"
                                                    class="{{ request('location') == $loc ? 'active' : '' }}">
                                                    <i class="fas fa-chevron-right me-2"></i> {{ $loc }}
                                                </a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Salary Range -->
                            <div class="collapse-card">
                                <h4 class="card-title">
                                    <a data-bs-toggle="collapse" href="#budget" style="color: #afafaf;">
                                        <img src="/assets/img/icons/money-icon.svg"> Salary Range
                                    </a>
                                </h4>
                                <div id="budget" class="collapse show">
                                    <div class="collapse-body">
                                        <ul class="checkbox-list">
                                            @foreach($salary as $b)
                                            <li>
                                                <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['salary' => $b])) }}"
                                                    class="{{ request('salary') == $b ? 'active' : '' }}">
                                                    <i class="fas fa-chevron-right me-2"></i> {{ $b }}
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

                <!-- ================== JOBS GRID / CAROUSEL ================== -->
                <div class="col-lg-9">

                    <!-- Desktop Grid -->
                    <div class="row d-none d-md-flex">
                        @foreach($jobs as $job)
                        <div class="col-xl-4 col-md-6">
                            <div class="gigs-grid">
                                <div class="gigs-img">
                                    <a href="{{ route('user.jobs.show',$job->id) }}"><img src="assets/img/blog/blog-01.jpg" class="img-fluid" alt="img"></a>
                                    <div class="card-overlay-badge">
                                        <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-warning"><i class="feather-star"></i>{{ $job->location ?? 'Remote' }}</span></a>
                                        <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span></a>
                                    </div>
                                    <div class="fav-selection"><a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a></div>
                                </div>
                                <div class="gigs-content">
                                    <div class="gigs-info">
                                        <a href="{{ route('user.jobs.show',$job->id) }}" class="badge bg-primary-light">{{ $job->category->name ?? 'Website Promotion' }}</a>
                                        <div class="star-rate"><span><i class="fa-solid fa-star"></i>5.0</span></div>
                                    </div>
                                    <div class="gigs-title">
                                        <h3><a href="{{ route('user.jobs.show',$job->id) }}">{{ $job->title }}</a></h3>
                                    </div>
                                    <ul class="gigs-user-info">
                                        <li class="gigs-user">
                                            <img src="assets/img/user/user-01.jpg" alt="img">
                                            <p>By {{ $job->company->name }}</p>
                                        </li>
                                        <li class="gigs-loc">
                                            <p><i class="ti ti-map-pin-check"></i>{{ $job->location ?? 'Remote' }}</p>
                                        </li>
                                    </ul>
                                    <div class="gigs-card-footer gap-2">
                                        <h5>${{ $job->salary_range }}</h5>
                                        <span class="badge">view details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach

                        <!-- paginatio -->
                        <div class="col-12">
                            <div class="pagination-wrap d-flex justify-content-center">
                                {{ $jobs->links() }}
                            </div>
                        </div>
                    </div>

                    <!-- Mobile / Tablet Carousel -->
                    <div id="jobsCarousel" class="carousel slide d-md-none" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            @foreach($jobs as $index => $job)
                            <div class="carousel-item {{ $index == 0 ? 'active' : '' }}">
                                <div class="gigs-grid">
                                    <div class="gigs-img">
                                        <a href="{{ route('user.jobs.show',$job->id) }}"><img src="assets/img/blog/blog-01.jpg" class="img-fluid" alt="img"></a>
                                        <div class="card-overlay-badge">
                                            <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-warning"><i class="feather-star"></i>{{ $job->location ?? 'Remote' }}</span></a>
                                            <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span></a>
                                        </div>
                                        <div class="fav-selection"><a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a></div>
                                    </div>
                                    <div class="gigs-content">
                                        <div class="gigs-info">
                                            <a href="{{ route('user.jobs.show',$job->id) }}" class="badge bg-primary-light">{{ $job->category->name ?? 'Website Promotion' }}</a>
                                            <div class="star-rate"><span><i class="fa-solid fa-star"></i>5.0</span></div>
                                        </div>
                                        <div class="gigs-title">
                                            <h3><a href="{{ route('user.jobs.show',$job->id) }}">{{ $job->title }}</a></h3>
                                        </div>
                                        <ul class="gigs-user-info">
                                            <li class="gigs-user">
                                                <img src="assets/img/user/user-01.jpg" alt="img">
                                                <p>By {{ $job->company->name }}</p>
                                            </li>
                                            <li class="gigs-loc">
                                                <p><i class="ti ti-map-pin-check"></i>{{ $job->location ?? 'Remote' }}</p>
                                            </li>
                                        </ul>
                                        <div class="gigs-card-footer gap-2">
                                            <h5>${{ $job->salary_range }}</h5>
                                            <span class="badge">view details</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>

                        <!-- Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#jobsCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#jobsCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>

                        <!-- Indicators -->
                        <div class="carousel-indicators mt-2">
                            @foreach($jobs as $index => $job)
                            <button type="button" data-bs-target="#jobsCarousel" data-bs-slide-to="{{ $index }}" class="{{ $index == 0 ? 'active' : '' }}"></button>
                            @endforeach
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- /Service Details -->
    </div>
</div>

<div class="container">
    <div class="trusted-customers-two mb-4">
        <!-- <img src="./assets/img/home/shape-2.svg" alt="img" class="trusted-bg img-fluid d-lg-flex d-none"> -->
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="trusted-customers-image position-relative d-lg-block d-none text-center aos-init aos-animate" data-aos="fade-up">
                    <img src="./assets/img/home/jointeam.svg" alt="img" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5 aos-init aos-animate" data-aos="fade-left">
                <h2 class="mb-3">Showcase Your Skills & Find Work Today!</h2>
                <p>Post your gig in minutes and reach thousands of potential clients. Verified listings get more visibility and faster responses.</p>
                <a role="button" data-bs-toggle="modal" data-bs-target="#postJobModal" class="btn btn-lg btn-white">Post Your Gig</a>
                <span class="trusted-customers-shape d-lg-block d-none text-white mt-3">Takes less than 5 minutes — you stay in control of your work.</span>
            </div>
        </div>
    </div>
</div>

<!-- Post a Job/Gig Modal -->
<div class="modal fade" id="postJobModal" tabindex="-1" aria-labelledby="postJobModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title" id="postJobModalLabel">Post a New Job / Gig</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form action="{{ route('user.jobs.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row">
                        <!-- Job Title -->
                        <div class="col-md-12 mb-3">
                            <label for="jobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control form-control-lg rounded-3 border-0 shadow-sm" id="jobTitle" name="title" placeholder="Enter job title" required>
                        </div>

                        <!-- Description -->
                        <div class="col-md-12 mb-3">
                            <label for="jobDescription" class="form-label">Description</label>
                            <textarea class="form-control form-control-lg rounded-3 border-0 shadow-sm" id="jobDescription" name="description" rows="4" placeholder="Describe the job" required></textarea>
                        </div>

                        <!-- Job Category -->
                        <div class="col-md-4 mb-3">
                            <label for="jobCategory" class="form-label">Category</label>
                            <select class="form-select border-0 shadow-sm" id="jobCategory" name="job_category_id" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Location -->
                        <div class="col-md-4 mb-3">
                            <label for="jobLocation" class="form-label">Location</label>
                            <input type="text" class="form-control form-control-lg rounded-3 border-0 shadow-sm" id="jobLocation" name="location" placeholder="Job location" required>
                        </div>

                        <!-- Type -->
                        <div class="col-md-4 mb-3">
                            <label for="jobType" class="form-label">Job Type</label>
                            <select class="form-select border-0 shadow-sm" id="jobType" name="type">
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>

                        <!-- Experience Level -->
                        <div class="col-md-4 mb-3">
                            <label for="experienceLevel" class="form-label">Experience Level</label>
                            <select class="form-select border-0 shadow-sm" id="experienceLevel" name="experience_level">
                                <option value="entry">Entry Level</option>
                                <option value="mid">Mid Level</option>
                                <option value="senior">Senior Level</option>
                            </select>
                        </div>

                        <!-- Salary -->
                        <div class="col-md-4 mb-3">
                            <label for="salaryRange" class="form-label">Salary Range</label>
                            <input type="text" class="form-control form-control-lg rounded-3 border-0 shadow-sm" id="salaryRange" name="salary_range" placeholder="e.g., $500 - $2000">
                        </div>

                        <!-- Skills -->
                        <div class="col-md-4 mb-3">
                            <label for="jobSkills" class="form-label">Skills (comma separated)</label>
                            <input type="text" class="form-control form-control-lg rounded-3 border-0 shadow-sm" id="jobSkills" name="skills" placeholder="e.g., Laravel, VueJS, CSS">
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary px-5 py-2 rounded-3 shadow-sm fw-semibold" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">Post Job</button>
                </div>
            </form>

        </div>
    </div>
</div>

@endsection