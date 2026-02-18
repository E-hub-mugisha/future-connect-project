@extends('layouts.guest')
@section('title', 'Empowering Talent, Opportunities & Growth')
@section('content')


<style>
    #tranding {
        /* position: relative; */
        overflow: hidden;
        background: #060f11;
        color: #fff;
        padding: 1rem 0;
        border-radius: 0.1rem;
        border: 1px solid #3d4648;
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
        border: 1px solid #FFFDFB;

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
        /* background: rgba(255, 255, 255, 0.1); */
        backdrop-filter: blur(10px);
        border-radius: 2px;
        border: 1px solid #3d4648;
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
        border-radius: 5px;
        border: 1px solid #3d4648;
        background: #060f11;
        color: #afafaf;
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

<style>
    /* HERO SECTION */
    .announcement-hero {
        position: relative;
        height: 90vh;
        background: linear-gradient(to right, #073055d4, rgb(6 53 123 / 97%)),
            url('assets/img/creative.png') center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
        padding: 2rem;
    }

    .announcement-content {
        z-index: 2;
        max-width: 800px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        padding: 3rem;
        border-radius: 25px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 1.2s ease;
    }

    @keyframes fadeInUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .announcement-hero h1 {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .announcement-hero p {
        font-size: 1.1rem;
        color: #e0e0e0;
        margin-bottom: 2rem;
    }

    .highlight {
        color: #ffdd57;
        font-weight: 600;
    }

    /* CTA BUTTONS */
    .hero-buttons {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
        flex-wrap: wrap;
    }

    .btn-hero {
        border-radius: 50px;
        font-weight: 600;
        padding: 0.8rem 1.6rem;
        transition: all 0.3s ease;
    }

    .btn-events {
        background-color: #fff;
        color: #fff;
    }

    .btn-events:hover {
        background-color: #fff;
        color: #fff;
        transform: translateY(-2px);
    }

    .btn-announcements {
        border: 2px solid #fff;
        color: #fff;
        background: transparent;
    }

    .btn-announcements:hover {
        background-color: #fff;
        color: #fff;
        transform: translateY(-2px);
    }
</style>

<style>
    .hero-with-bg {
        position: relative;
        overflow: hidden;
    }

    .hero-bg-carousel {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .hero-bg-carousel .carousel-inner,
    .hero-bg-carousel .carousel-item {
        height: 100%;
    }

    .hero-bg-media {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }

    /* Video full cover */
    .hero-bg-media video,
    .hero-bg-carousel video.hero-bg-media {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Dark overlay for readability */
    .hero-overlay {
        position: absolute;
        inset: 0;
        background: #12232293;
        z-index: 1;
    }

    /* Ensure content stays above background */
    .hero-with-bg .container {
        position: relative;
        z-index: 2;
    }
</style>

<div class="hero-section-two hero-with-bg">

    <!-- Background Carousel -->
    <div id="heroBgCarousel" class="carousel slide hero-bg-carousel" data-bs-ride="carousel">
        <div class="carousel-inner">

            <!-- Image slide -->
            <div class="carousel-item active">
                <div class="hero-bg-media" style="background-image: url('assets/img/banner-hero.jpg');"></div>
            </div>

            <!-- Video slide -->
            <div class="carousel-item">
                <video class="hero-bg-media" autoplay muted loop playsinline>
                    <source src="assets/img/banner-video.mp4" type="video/mp4">
                </video>
            </div>

            <!-- Image slide -->
            <div class="carousel-item">
                <div class="hero-bg-media" style="background-image: url('assets/img/provide-bg.jpg');"></div>
            </div>

        </div>
    </div>

    <!-- Overlay (keeps text readable) -->
    <div class="hero-overlay"></div>

    <!-- EXISTING CONTENT (UNCHANGED) -->
    <div class="container position-relative">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <img src="assets/img/home/banner-shape-1.svg" alt="img" class="img-fluid banner-bg-1 d-none d-lg-flex">
                    <span class="d-inline-flex mb-3 align-items-center hero-title"><i class="ti ti-point-filled me-1"></i>Freelance Marketplace</span>
                    <h1 class="mb-2" style="color:#afafaf;">On-Demand <span>Services</span> for Your Every Need</h1>
                    <p class="mb-4">We pride ourselves on offering a seamless, secure, and efficient experience. Browse through thousands of trusted service providers, read reviews, compare prices.</p>
                    <a href="service.html" class="btn btn-lg btn-primary d-inline-flex align-items-center">Explore Services<i class="ti ti-chevron-right ms-1"></i></a>
                    
                </div>
            </div>
            <!-- <div class="col-lg-5">
                <div class="banner-image">
                    <img src="assets/img/home/banner-shape-2.svg" alt="img" class="img-fluid banner-bg-2 d-none d-lg-flex">
                    <img src="assets/img/home/banner-image.svg" alt="img" class="img-fluid banner-img">
                    <div class="trustpilot">
                        <h6 class="d-inline-flex align-items-center"><img src="assets/img/home/star1.svg" class="me-2" alt="img">Trustpilot</h6>
                        <div class="d-flex align-items-center mb-2">
                            <span>Excellent</span>
                            <div class="ms-2 d-inline-flex align-items-center">
                                <span class="excellent-star"><img src="assets/img/home/star2.svg" alt="img"></span>
                                <span class="excellent-star"><img src="assets/img/home/star2.svg" alt="img"></span>
                                <span class="excellent-star"><img src="assets/img/home/star2.svg" alt="img"></span>
                                <span class="excellent-star"><img src="assets/img/home/star2.svg" alt="img"></span>
                                <span class="excellent-star"><img src="assets/img/home/star2.svg" alt="img"></span>
                            </div>
                        </div>
                        <p class="mb-0">Based on 456 reviews</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>

<script>
    const heroCarousel = document.querySelector('#heroBgCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 6000,
            pause: false,
            ride: 'carousel'
        });
    }
</script>


<div class="container">
    <section id="tranding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                        <div class="banner-head mt-4">
                            <h1 class="mb-2" style="color:#afafaf;">Your gateway to skills, opportunities, and growth.</h1>
                            <!-- <p class="d-inline-flex text-white">Your gateway to skills, opportunities, and growth — all in one place.</p> -->
                        </div>
                        <div class="banner-form">
                            <!-- Mobile & Tablet Carousel -->
                            <div id="heroCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="5000">

                                <!-- Indicators -->
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
                                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                                </div>
                                <style>
                                    .carousel-indicators {
                                        bottom: -15px;
                                    }
                                </style>
                                <!-- Slides -->
                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <div class="hero-tab text-center p-4">
                                            <h4 class="text-white">Skills Marketplace</h4>
                                            <p class="text-muted">
                                                Stand out! Boost your profile and reach 3× more employers.<br>
                                                Get verified and feature your story on our homepage.
                                            </p>
                                            <a href="{{ route('user.talents') }}" class="btn btn-light">Explore Marketplace</a>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 class="text-white">Unlock New Opportunities</h4>
                                            <p class="text-muted">
                                                Discover tailored job listings, collaboration projects, and freelance gigs.<br>
                                                Set up alerts to never miss a chance to grow your career.
                                            </p>
                                            <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 class="text-white">Expand Your Network</h4>
                                            <p class="text-muted">
                                                Connect with industry professionals, mentors, and peers.<br>
                                                Join groups, attend virtual events, and build relationships that matter.
                                            </p>
                                            <a href="#connections" class="btn btn-light">Join the Community</a>
                                        </div>
                                    </div>

                                </div>

                                <!-- Controls -->
                                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>

                                <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button> -->

                            </div>

                            <!-- Tabs Content -->
                            <!-- Desktop Grid -->
                            <div class="tab-content row d-none d-md-flex">

                                <div class="col-md-4" id="marketplace">
                                    <div class="hero-tab">
                                        <h4 class="text-white">Skills Marketplace</h4>
                                        <p class="text-muted">
                                            Stand out! Boost your profile and reach 3× more employers.<br>
                                            Get verified and feature your story on our homepage.
                                        </p>
                                        <a href="{{ route('user.talents') }}" class="btn btn-light">Explore Marketplace</a>
                                    </div>
                                </div>

                                <div class="col-md-4" id="opportunities">
                                    <div class="hero-tab">
                                        <h4 class="text-white">Unlock New Opportunities</h4>
                                        <p class="text-muted">
                                            Discover tailored job listings, collaboration projects, and freelance gigs.<br>
                                            Set up alerts to never miss a chance to grow your career.
                                        </p>
                                        <a href="#opportunities" class="btn btn-light">Start Exploring</a>
                                    </div>
                                </div>

                                <div class="col-md-4" id="connection">
                                    <div class="hero-tab">
                                        <h4 class="text-white">Expand Your Network</h4>
                                        <p class="text-muted">
                                            Connect with industry professionals, mentors, and peers.<br>
                                            Join groups, attend virtual events, and build relationships that matter.
                                        </p>
                                        <a href="#connections" class="btn btn-light">Join the Community</a>
                                    </div>
                                </div>

                            </div>

                            <!-- <div class="popular-search">
                                <h5>Popular Searches : </h5>
                                <ul>
                                    <li><a href="service-grid-sidebar.html">Online Mockup</a></li>
                                    <li><a href="service-grid-sidebar.html">Carpentering</a></li>
                                    <li><a href="service-grid-sidebar.html">Event Organiser</a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<div class="container" style="margin-top: 4.5rem;">
    <div class="trend-section ">
        <div class="row align-items-center">
            <div class="col-sm-10">
                <h5 data-aos="fade-up"><span class="title-bg"></span>Trending Categories for our skills marketplace<span class="title-bg2"></span></h5>
                <p data-aos="fade-up" style="color: #FFFDFB;"> Explore the most sought-after skills and connections in today's job market.</p>
            </div>
            <div class="col-sm-2 text-sm-end">
                <div class="owl-nav trend-nav nav-control nav-top"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="trend-items owl-carousel owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-1977px, 0px, 0px); transition: 2s; width: 4284px;">
                            @foreach($categories as $cat)
                            <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                <div class="trend-box">
                                    <div class="trend-info">

                                        <h6><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></h6>
                                        @if(isset($cat->talents_count))
                                        <p>{{ $cat->talents_count }} talents</p>
                                        @else
                                        <p>0 talents</p>
                                        @endif
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

                                    <a href="{{ route('user.talents.category', $cat->slug) }}" class="slide-line-btn">
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
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Trending Categories -->

<div class="container">
    <div class="trusted-customers-two">
        <!-- <img src="assets/img/home/shape-2.svg" alt="img" class="trusted-bg img-fluid d-lg-flex d-none"> -->
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="trusted-customers-image position-relative d-lg-block d-none text-center aos-init aos-animate" data-aos="fade-up">
                    <img src="assets/img/home/jointeam.svg" alt="img" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5 aos-init aos-animate" data-aos="fade-left">
                <h2 class="mb-3">Find the right skills for your needs</h2>
                <p>Over {{ $totalTalents }}K skills available today for you.</p>
                <a href="{{ route('user.talents') }}" class="btn btn-lg btn-white">Explore skills hub</a>
            </div>
        </div>
    </div>
</div>

<style>
    /* Section base */
    .features-section {
        padding: 5rem 1rem;
        /* background: #fff; */
        /* text-align: right; */
    }

    .features-section h2 {
        font-weight: 700;
        margin-bottom: 2rem;
        color: #fff;
    }

    /* Switch Tabs Container */
    .feature-switch {
        display: inline-flex;
        background: #afafaf26;
        border-radius: 50px;
        padding: 5px;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2.5rem;
        gap: 0.5rem;
    }

    .feature-switch .nav-link {
        border-radius: 50px;
        font-weight: 500;
        color: #fff;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease;
        border: 1px solid #7d8385;
    }

    .feature-switch .nav-link.active {
        background-color: #122322;
        color: #fff;
        /* box-shadow: 0 0 10px rgba(13, 110, 253, 0.4); */
        border: 1px solid #00d992;
    }

    .feature-switch .nav-link:hover:not(.active) {
        background-color: #7d8385;
    }

    /* Tab Content */
    .tab-pane.feature-tab {
        /* max-width: 750px; */
        margin: 0 auto;
        background: #060f11;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }

    .tab-pane h4 {
        color: #fff;
        font-weight: 600;
    }

    .tab-pane p {
        margin-top: 1rem;
        color: #555;
    }

    .btn-primary {
        /* background-color: #fff; */
        border: none;
        border-radius: 50px;
        padding: 0.6rem 1.5rem;
        /* margin-top: 1.2rem; */
        transition: 0.3s;
    }

    .btn-primary:hover {
        /* background-color: #084298; */
        transform: translateY(-2px);
    }

    .coin-note {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #fff;
    }
</style>


<section class="features-section d-none d-lg-block" id="features">
    <div class="container">
        <h2 style="color:#afafaf;">Explore Future Connect Features</h2>

        <!-- Switch Tabs -->
        <ul class="nav feature-switch" id="featuresTab" role="tablist">
            <li class="nav-item"><button class="nav-link active" data-bs-toggle="pill" data-bs-target="#skills">Skills</button></li>
            <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#learning-section">Learning</button></li>
            <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#opportunity">Opportunities</button></li>
            <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#connect">Connect</button></li>
            <li class="nav-item"><button class="nav-link" data-bs-toggle="pill" data-bs-target="#marketplace-features">Marketplace</button></li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content">

            <!-- 1. Skills Marketplace -->
            <div class="tab-pane feature-tab fade show active" id="skills">
                <div class="hero-section-two">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                    <img src="assets/img/home/banner-shape-1.svg" alt="img" class="img-fluid banner-bg-1 d-none d-lg-flex">
                                    <span class="d-inline-flex mb-3 align-items-center hero-title"><i class="ti ti-point-filled me-1"></i>Skills Marketplace</span>
                                    <h1 class="mb-2">Showcase your talent <span>and</span> reach verified employers.</h1>
                                    <p class="mb-4">Future Connect’s Skills Marketplace empowers professionals to present verified skills, attract clients, and secure freelance or full-time work opportunities.</p>
                                    <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Explore skills marketplace<i class="ti ti-chevron-right ms-1"></i></a>
                                    <div class="banner-users d-flex align-items-center flex-wrap gap-3">
                                        <div class="avatar-list-stacked me-2">
                                            @foreach($featuredTalents as $talent)
                                            <span class="avatar avatar-md rounded-circle border-0"><img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-circle border border-white" alt="Img"></span>
                                            @endforeach
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center mb-1">
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <h6 class="mb-0 ms-2">4.8/5</h6>
                                            </div>
                                            <p class="mb-0">over {{ $totalTalents}}+ skilled professionals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="banner-image">
                                    <img src="assets/img/home/banner-image.svg" alt="img" class="img-fluid banner-img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Learning Center -->
            <div class="tab-pane feature-tab fade" id="learning-section">
                <section class="hero-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                    <div class="banner-head">
                                        <h1 class="mb-2">Upskill with short, impactful professional courses.</h1>
                                        <p class="d-inline-flex">The Learning Center brings together experts and learners for short, affordable, high-quality learning experiences. Each course is designed for practical application — so you can implement your knowledge immediately.</p>
                                    </div>
                                    <a href="{{ route('user.courses') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center mb-3">Explore courses<i class="ti ti-chevron-right ms-1"></i></a>

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

            <!-- 3. Opportunities -->
            <div class="tab-pane feature-tab fade" id="opportunity">
                <section class="hero-section-two">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="banner-content">
                                    <span class="d-inline-flex mb-3 align-items-center hero-title"><i class="ti ti-point-filled me-1"></i>Future Connect Opportunities</span>
                                    <h1 class="mb-2">Post work, find collaborators, <span>and</span> build your dream team in one verified network.</h1>
                                    <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Explore works<i class="ti ti-chevron-right ms-1"></i></a>
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

            <!-- 4. Connect Room -->
            <div class="tab-pane feature-tab fade" id="connect">
                <section class="about-us-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="row me-4">
                                    <div class="col-sm-6">
                                        <div class="about-inner-img">
                                            <img src="assets/img/aboutus/about-us-01.jpg" class="img-fluid" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="about-inner-img">
                                                    <img src="assets/img/aboutus/about-us-02.jpg" class="img-fluid" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="about-inner-img">
                                                    <img src="assets/img/aboutus/about-us-03.jpg" class="img-fluid" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-us-info">
                                    <div class="about-us-head">
                                        <h6>Connection Room</h6>
                                        <h2>Network and collaborate securely with verified users.</h2>
                                        <p>
                                            The Connect Room offers a secure messaging and meeting system for verified professionals. Build meaningful relationships, exchange ideas, or schedule mentorship calls with trusted peers.
                                        </p>
                                    </div>
                                    <div class="about-features">
                                        <ul class="list-one">
                                            <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Diverse Network of Professionals</li>
                                            <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Trust and Transparency</li>
                                        </ul>
                                        <ul class="list-two">
                                            <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>User Friendly Platform</li>
                                            <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Innovation In Technology</li>
                                        </ul>
                                    </div>
                                    <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Join community<i class="ti ti-chevron-right ms-1"></i></a>
                                    <div class="coin-note">Each connection supports skill programs and platform growth.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- 5. Marketplace -->
            <div class="tab-pane feature-tab fade" id="marketplace-features">
                <section class="provide-section" id="market-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-9">
                                <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                                    <h2><span>We’r</span> here help to find your Needs.</h2>
                                    <p>Our Marketplace lets creators showcase digital products from templates to software tools with full payment protection via our platform.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6">
                                <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                    <div class="provide-icon">
                                        <img src="assets/img/icons/ipad-icon.svg" alt="icon">
                                    </div>
                                    <h6 class="mb-1">Browse a product</h6>
                                    <p>Everything you need for your craft — safe payments through Future Connect.</p>
                                    <a href="{{ route('user.products.index') }}" class="btn btn-primary rounded-pill">Explore products<i class="ti ti-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                    <div class="provide-icon">
                                        <img src="assets/img/icons/service-icon.svg" alt="icon">
                                    </div>
                                    <h6 class="mb-1">Sell a product</h6>
                                    <p>Our Marketplace lets creators showcase digital products</p>
                                    <a href="#" class="btn btn-primary rounded-pill">Find a product<i class="ti ti-chevron-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                    <div class="provide-icon">
                                        <img src="assets/img/icons/user-icon-01.svg" alt="icon">
                                    </div>
                                    <h6 class="mb-1">Become a seller</h6>
                                    <p>Sellers earn instantly — FC keeps a small fee for logistics & support.</p>
                                    <a class="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#applySellerModal">Became a Seller<i class="ti ti-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    </div>
</section>

<!-- MOBILE ACCORDION -->
<div class="accordion d-lg-none" id="featuresAccordion" style="margin-top: 3rem;">
    <div class="container">
        <h2 class="mb-4" style="color:#afafaf;">Explore Future Connect Features</h2>
        <!-- Skills -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#accSkills">
                    Skills Marketplace
                </button>
            </h2>
            <div id="accSkills" class="accordion-collapse collapse show" data-bs-parent="#featuresAccordion">
                <div class="accordion-body">
                    <div class="hero-section-two">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                        <img src="assets/img/home/banner-shape-1.svg" alt="img" class="img-fluid banner-bg-1 d-none d-lg-flex">
                                        <span class="d-inline-flex mb-3 align-items-center hero-title"><i class="ti ti-point-filled me-1"></i>Skills Marketplace</span>
                                        <h1 class="mb-2">Showcase your talent <span>and</span> reach verified employers.</h1>
                                        <p class="mb-4">Future Connect’s Skills Marketplace empowers professionals to present verified skills, attract clients, and secure freelance or full-time work opportunities.</p>
                                        <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Explore skills marketplace<i class="ti ti-chevron-right ms-1"></i></a>
                                        <div class="banner-users d-flex align-items-center flex-wrap gap-3">
                                            <div class="avatar-list-stacked me-2">
                                                @foreach($featuredTalents as $talent)
                                                <span class="avatar avatar-md rounded-circle border-0"><img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-circle border border-white" alt="Img"></span>
                                                @endforeach
                                            </div>
                                            <div>
                                                <div class="d-flex align-items-center mb-1">
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <h6 class="mb-0 ms-2">4.8/5</h6>
                                                </div>
                                                <p class="mb-0">over {{ $totalTalents}}+ skilled professionals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="banner-image">
                                        <img src="assets/img/home/banner-image.svg" alt="img" class="img-fluid banner-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Learning -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accLearning">
                    Learning Center
                </button>
            </h2>
            <div id="accLearning" class="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                <div class="accordion-body">
                    <section class="hero-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                        <div class="banner-head">
                                            <h1 class="mb-2">Upskill with short, impactful professional courses.</h1>
                                            <p class="d-inline-flex">The Learning Center brings together experts and learners for short, affordable, high-quality learning experiences. Each course is designed for practical application — so you can implement your knowledge immediately.</p>
                                        </div>
                                        <a href="{{ route('user.courses') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center mb-3">Explore courses<i class="ti ti-chevron-right ms-1"></i></a>

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
            </div>
        </div>

        <!-- Opportunities -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accOpportunity">
                    Opportunities
                </button>
            </h2>
            <div id="accOpportunity" class="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                <div class="accordion-body">
                    <section class="hero-section-two">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="banner-content">
                                        <span class="d-inline-flex mb-3 align-items-center hero-title"><i class="ti ti-point-filled me-1"></i>Future Connect Opportunities</span>
                                        <h1 class="mb-2">Post work, find collaborators, <span>and</span> build your dream team in one verified network.</h1>
                                        <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Explore works<i class="ti ti-chevron-right ms-1"></i></a>
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
            </div>
        </div>

        <!-- Connect -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accConnect">
                    Connection Room
                </button>
            </h2>
            <div id="accConnect" class="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                <div class="accordion-body">
                    <section class="about-us-section">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="row me-4">
                                        <div class="col-sm-6">
                                            <div class="about-inner-img">
                                                <img src="assets/img/aboutus/about-us-01.jpg" class="img-fluid" alt="img">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="about-inner-img">
                                                        <img src="assets/img/aboutus/about-us-02.jpg" class="img-fluid" alt="img">
                                                    </div>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="about-inner-img">
                                                        <img src="assets/img/aboutus/about-us-03.jpg" class="img-fluid" alt="img">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="about-us-info">
                                        <div class="about-us-head">
                                            <h6>Connection Room</h6>
                                            <h2>Network and collaborate securely with verified users.</h2>
                                            <p>
                                                The Connect Room offers a secure messaging and meeting system for verified professionals. Build meaningful relationships, exchange ideas, or schedule mentorship calls with trusted peers.
                                            </p>
                                        </div>
                                        <div class="about-features">
                                            <ul class="list-one">
                                                <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Diverse Network of Professionals</li>
                                                <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Trust and Transparency</li>
                                            </ul>
                                            <ul class="list-two">
                                                <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>User Friendly Platform</li>
                                                <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img"></span>Innovation In Technology</li>
                                            </ul>
                                        </div>
                                        <a href="{{ route('user.talents') }}" class="btn btn-lg btn-primary d-inline-flex align-items-center">Join community<i class="ti ti-chevron-right ms-1"></i></a>
                                        <div class="coin-note">Each connection supports skill programs and platform growth.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- Marketplace -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#accMarketplace">
                    Marketplace
                </button>
            </h2>
            <div id="accMarketplace" class="accordion-collapse collapse" data-bs-parent="#featuresAccordion">
                <div class="accordion-body">
                    <section class="provide-section" id="market-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-9">
                                    <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                                        <h2><span>We’r</span> here help to find your Needs.</h2>
                                        <p>Our Marketplace lets creators showcase digital products from templates to software tools with full payment protection via our platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                        <div class="provide-icon">
                                            <img src="assets/img/icons/ipad-icon.svg" alt="icon">
                                        </div>
                                        <h6 class="mb-1">Browse a product</h6>
                                        <p>Everything you need for your craft — safe payments through Future Connect.</p>
                                        <a href="{{ route('user.products.index') }}" class="btn btn-primary rounded-pill">Explore products<i class="ti ti-chevron-right"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                        <div class="provide-icon">
                                            <img src="assets/img/icons/service-icon.svg" alt="icon">
                                        </div>
                                        <h6 class="mb-1">Sell a product</h6>
                                        <p>Our Marketplace lets creators showcase digital products</p>
                                        <a href="#" class="btn btn-primary rounded-pill">Find a product<i class="ti ti-chevron-right"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="provide-box aos-init aos-animate" data-aos="fade-up">
                                        <div class="provide-icon">
                                            <img src="assets/img/icons/user-icon-01.svg" alt="icon">
                                        </div>
                                        <h6 class="mb-1">Become a seller</h6>
                                        <p>Sellers earn instantly — FC keeps a small fee for logistics & support.</p>
                                        <a class="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#applySellerModal">Became a Seller<i class="ti ti-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .postLists.cards .post-item.m-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-align: center;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }

    .postLists.cards .post-item.m-card .img {
        position: relative;
        display: block;
        margin-top: -1.75em;
        width: calc(100% - .85em);
        /* padding-top: calc(89.45% - .67em); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .75em;
        box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        -webkit-box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        transform: translateZ(0);
        transition: .25s;
        margin-bottom: 1em;
    }

    .postLists.cards .post-item.m-card .infos {
        width: 100%;
    }

    .postLists.cards .post-item.m-card .title {
        font-size: 16px;
        /* padding: 0 .5em; */
        margin: 1em 0 .5em;
        overflow: hidden;
        max-width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        text-shadow: 0 1px #fff;
        transition: .25s;
        white-space: normal;
    }

    /* .postLists.cards .post-card-wrapper {
        width: 20%;
    } */

    .postLists .post-card-wrapper {
        z-index: 1;
    }

    .postLists.cards .post-item.m-card .go {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 16px 16px;
        color: #fff;
        background: #060f11;
        border-radius: 30px;
        text-decoration: none;
        overflow: hidden;
        z-index: 1;
        justify-content: center;
        min-width: 50%;
        /* Green to navy */
        box-shadow: 0 0.5em 1.2em rgba(1, 30, 52, 0.6);
        font-size: 14px;
        margin: 1em auto;
        text-shadow: 0 2px 3px rgba(1, 30, 52, 0.5);
        height: auto;
        line-height: 1.5em;
        transition: all 0.3s ease;
    }

    .postLists.cards .post-item.m-card .go-text,
    .postLists.cards .post-item.m-card .go::after {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: transform 0.4s ease, opacity 0.4s ease;
        white-space: nowrap;
    }

    .postLists.cards .post-item.m-card .go-text {
        top: 0;
        opacity: 1;
    }

    .postLists.cards .post-item.m-card .go::after {
        content: "profile detail";
        top: 100%;
        opacity: 0;
        color: #fff;
        font-weight: 600;
    }

    .postLists.cards .post-item.m-card .go:hover .go-text {
        transform: translate(-50%, -100%);
        opacity: 0;
    }

    .postLists.cards .post-item.m-card .go:hover::after {
        top: 0;
        opacity: 1;
        transform: translateX(-50%);
    }


    .card.post-item.m-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
        position: relative;
        display: block;
        /* margin-top: -1.75em; */
        width: calc(100% - .85em);
        /* padding-top: calc(28.45% - 1.67em); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .75em;
        box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        -webkit-box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        transform: translateZ(0);
        transition: .25s;
        margin-bottom: 1em;
    }

    .talent-hover-box {
        display: inline-block;
        position: relative;
    }

    .default-badges,
    .hover-badges {
        transition: opacity 0.3s ease;
    }

    .hover-badges {
        display: none;
    }

    .talent-hover-box:hover .default-badges {
        display: none;
    }

    .talent-hover-box:hover .hover-badges {
        display: inline-block;
    }
</style>


@if($partners->count() != 0)
<div class="container">
    <div class="client-slider-sec px-2 px-md-4 px-lg-5">
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
@endif

<section class="provide-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-9">
                <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                    <h2 style="color:#afafaf;"><span>We’r</span> Empowering skills, Creators and Innovators</h2>
                    <p>Discover opportunities, grow your skills, showcase your skills and connect with a community built for your success.</p>
                </div>
            </div>
        </div>
        <!-- Mobile & Tablet Carousel -->
        <div id="provideCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="5000">

            <!-- Indicators -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#provideCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
                <button type="button" data-bs-target="#provideCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#provideCarousel" data-bs-slide-to="2"></button>
            </div>

            <!-- Slides -->
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <div class="provide-box text-center p-4">
                        <div class="provide-icon mb-3">
                            <img src="assets/img/icons/ipad-icon.svg" alt="icon">
                        </div>
                        <h6 class="mb-1 text-white">Create Your Skills Profile</h6>
                        <p>Sign up and showcase your story, skills, and aspirations through text, images, and videos.</p>
                        <a href="{{ route('register') }}" class="btn btn-primary">
                            Get started <i class="ti ti-chevron-right"></i>
                        </a>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="provide-box text-center p-4">
                        <div class="provide-icon mb-3">
                            <img src="assets/img/icons/service-icon.svg" alt="icon">
                        </div>
                        <h6 class="mb-1 text-white">Get Discovered & Rated</h6>
                        <p>Users browse skills by category, like your story, rate your skills, and share feedback to help you grow.</p>
                        <a href="{{ route('user.talents') }}" class="btn btn-primary">
                            Explore Skills Hub <i class="ti ti-chevron-right"></i>
                        </a>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="provide-box text-center p-4">
                        <div class="provide-icon mb-3">
                            <img src="assets/img/icons/user-icon-01.svg" alt="icon">
                        </div>
                        <h6 class="mb-1 text-white">Grow With Us</h6>
                        <p>Shop or sell tools, digital kits and creative products from local sellers.</p>
                        <a data-bs-toggle="modal" data-bs-target="#applySellerModal" class="btn btn-primary">
                            <i class="ti ti-store"></i> Apply to Sell
                        </a>
                    </div>
                </div>

            </div>

            <!-- Controls -->
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#provideCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#provideCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button> -->

        </div>

        <!-- Desktop Grid -->
        <div class="row justify-content-center d-none d-md-flex">

            <div class="col-lg-4 col-md-6">
                <div class="provide-box" data-aos="fade-up">
                    <div class="provide-icon">
                        <img src="assets/img/icons/ipad-icon.svg" alt="icon">
                    </div>
                    <h6 class="mb-1 text-white">Create Your Skills Profile</h6>
                    <p>Sign up and showcase your story, skills, and aspirations through text, images, and videos.</p>
                    <a href="{{ route('register') }}" class="btn btn-primary">
                        Get started <i class="ti ti-chevron-right"></i>
                    </a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="provide-box" data-aos="fade-up">
                    <div class="provide-icon">
                        <img src="assets/img/icons/service-icon.svg" alt="icon">
                    </div>
                    <h6 class="mb-1 text-white">Get Discovered & Rated</h6>
                    <p>Users browse skills by category, like your story, rate your skills, and share feedback to help you grow.</p>
                    <a href="{{ route('user.talents') }}" class="btn btn-primary">
                        Explore Skills Hub <i class="ti ti-chevron-right"></i>
                    </a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="provide-box" data-aos="fade-up">
                    <div class="provide-icon">
                        <img src="assets/img/icons/user-icon-01.svg" alt="icon">
                    </div>
                    <h6 class="mb-1 text-white">Grow With Us</h6>
                    <p>Shop or sell tools, digital kits and creative products from local sellers.</p>
                    <a data-bs-toggle="modal" data-bs-target="#applySellerModal" class="btn btn-primary">
                        <i class="ti ti-store"></i> Apply to Sell
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>

<style>
    .postLists-bg-white {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #011e3461;
        /* text-align: center; */
        text-shadow: 0 1px #fff;
        transition: .25s;
        /* margin-bottom: 4.75rem; */

    }
</style>


<!-- what makes Future Connect -->
<!-- <div class="container">
    <div class="what-makes-dream-gigs mt-5">

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
</div> -->
<!-- what makes Future Connect -->


<style>
    .talent-card {
        background: #060f11;
        color: #afafaf;
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
        border: 3px solid #afafaf33;
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

    <div class="container">
        <div class="row align-items-center row-gap-4">
            <div class="col-lg-6">
                <div class="section-header-two" data-aos="fade-up">
                    <h2 class="mb-2 p-0" style="color:#afafaf;">What Talents Say About Future Connect</h2>
                    <p>Discover the voices of passionate individuals whose lives have been impacted by sharing
                        their stories and skills on Future Connect.</p>
                </div>
                <h6 class="mb-3" data-aos="fade-up" style="color:#afafaf;">We’re Building a Global Talent Community</h6>
                <div class="avatar-list-stacked me-2" data-aos="fade-up">
                    @foreach($testimonials as $testimonial)
                    <span class="avatar avatar-md rounded-circle border-0"><img
                            src="{{ $testimonial->talent->image 
        ? asset('image/talents/' . $testimonial->talent->image) 
        : asset('assets/img/user/profile.jpg') }}" class="img-fluid rounded-circle border border-white" alt="Img"></span>
                    @endforeach
                </div>
            </div>

            <!-- Mobile & Tablet Carousel -->
            <div id="testimonialCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="6000">

                <!-- Indicators -->
                <div class="carousel-indicators">
                    @foreach($testimonials as $index => $test)
                    <button type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide-to="{{ $index }}"
                        class="{{ $index === 0 ? 'active' : '' }}"
                        aria-current="{{ $index === 0 ? 'true' : 'false' }}">
                    </button>
                    @endforeach
                </div>

                <!-- Slides -->
                <div class="carousel-inner">

                    @foreach($testimonials as $index => $test)
                    <div class="carousel-item {{ $index === 0 ? 'active' : '' }}">
                        <div class="talent-card mb-4">
                            <img src="{{ $test->talent->image 
                        ? asset('image/talents/' . $test->talent->image) 
                        : asset('assets/img/user/profile.jpg') }}" alt="Talent Photo">

                            <div class="talent-info">
                                <h4>{{ $test->talent->name ?? 'Jacob Rivera' }}</h4>
                                <p>{{ $test->title ?? 'Creative Writer' }}</p>

                                <div class="rating">
                                    @for($i = 0; $i < 5; $i++)
                                        <i class="ti ti-star-filled {{ $i < $test->rating ? 'text-warning' : 'text-muted' }}"></i>
                                        @endfor
                                </div>

                                <p class="description">
                                    {{ $test->content ?? 'Passionate writer with a flair for storytelling and compelling narratives.' }}
                                </p>

                                <div class="location">
                                    <i class="ti ti-location-pin"></i> {{ $test->talent->address ?? 'Kigali, Rwanda' }}
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach

                </div>

                <!-- Controls -->
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button> -->

            </div>

            <!-- Desktop Testimonials -->
            <div class="col-lg-6 d-none d-md-block">
                @foreach($testimonials as $test)
                <div class="talent-card mb-4">
                    <img src="{{ $test->talent->image 
                ? asset('image/talents/' . $test->talent->image) 
                : asset('assets/img/user/profile.jpg') }}" alt="Talent Photo">

                    <div class="talent-info">
                        <h4>{{ $test->talent->name ?? 'Jacob Rivera' }}</h4>
                        <p>{{ $test->title ?? 'Creative Writer' }}</p>

                        <div class="rating">
                            @for($i = 0; $i < 5; $i++)
                                <i class="ti ti-star-filled {{ $i < $test->rating ? 'text-warning' : 'text-muted' }}"></i>
                                @endfor
                        </div>

                        <p class="description">
                            {{ $test->content ?? 'Passionate writer with a flair for storytelling and compelling narratives.' }}
                        </p>

                        <div class="location">
                            <i class="ti ti-location-pin"></i> {{ $test->talent->address ?? 'Kigali, Rwanda' }}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

        </div>
    </div>
</div>
<!-- testimonials -->


<!-- <div class="container">
    <div class="join-with-us">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div data-aos="fade-right" class="aos-init aos-animate">
                <h2 class="text-white">Join Future Connect</h2>
                <p class="mb-0">Showcase your talent, share your story, and inspire others. Be part of a
                    community that empowers growth and recognition.</p>
            </div>
            <a href="{{ route('register') }}" class="btn btn-lg btn-primary join-us flex-shrink-0 aos-init aos-animate"
                data-aos="fade-left">Get
                Started</a>
        </div>
    </div>
</div> -->

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('#talentTabs .nav-link');
        const items = document.querySelectorAll('.talent-item');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Activate clicked tab
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.dataset.filter;

                items.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
</script>

@endsection