@extends('layouts.guest')
@section('title', 'Skilled Marketplace – Discover Skilled Professionals')
@section('content')

<!-- SwiperJS for carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

@php

$categories = \App\Models\Category::all();

@endphp


<!-- Modern UI Styling -->
<style>
    .modern-tabs .nav-link {
        border: 1px solid #319BF9;
        background: #f8f9fa;
        margin-right: 8px;
        padding: 10px 18px;
        border-radius: 10px;
        font-weight: 500;
        transition: all 0.2s ease;
        color: #319BF9;
    }

    .modern-tabs .nav-link:hover {
        background: #e9ecef;
        color: #000;
    }

    .modern-tabs .nav-link.active {
        background: #319BF9;
        color: #fff !important;
        /* box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3); */
    }

    .modern-tab-content {
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        border: 1px solid #eee;
    }
</style>

<style>
    #tranding {
        /* position: relative; */
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

<style>
    /* Smooth card */
    .wizard-wrapper {
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1.2rem;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .progress {
        height: 10px;
        border-radius: 50px;
        overflow: hidden;
        background: #e9ecef;
    }

    .progress-bar {
        transition: width .4s ease-in-out;
    }

    /* Step titles */
    .step-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #34495e;
        margin-bottom: .7rem;
    }

    /* Wizard step section */
    .step-section {
        display: none;
    }

    .step-section.active {
        display: block;
        animation: fadeStep .35s ease;
    }

    @keyframes fadeStep {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Button styles */
    .btn-primary,
    .btn-success,
    .btn-danger {
        padding: .6rem 1.5rem;
        font-weight: 600;
        border-radius: .5rem;
        transition: all 0.25s ease-in-out;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
    }

    .btn-success:hover {
        transform: translateY(-2px);
    }

    .wizard-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .wizard-header h2 {
        font-weight: 800;
        color: #2d3436;
        letter-spacing: -.5px;
    }

    .wizard-header p {
        font-size: 1rem;
        color: #6c757d;
    }

    .info-note {
        background: rgba(13, 110, 253, 0.1);
        border-left: 4px solid #0d6efd;
        padding: 1rem 1.2rem;
        border-radius: .5rem;
        margin-bottom: 1.3rem;
        font-size: .95rem;
    }

    /* Modal glass style */
    .modal-glass .modal-content {
        background: rgba(255, 255, 255, 0.69);
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
    }

    .seller-info-content {
        background: #319bf970;
        backdrop-filter: blur(15px) saturate(180%);
        /* box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36); */
        border-radius: 10px;
        padding: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: auto 0 auto -100px;
        height: 420px;
    }
</style>

<div class="container p-4">
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
                            <div id="skillCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="5000">
                                <!-- Indicators -->
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
                                    <button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="2"></button>
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
                                            <h4 style="color:#afafaf;">Promote Your Skills</h4>
                                            <p style="color:#afafaf;">
                                                Stand out! Boost your profile and reach 3× more employers.<br>
                                                Get verified and feature your story on our homepage.
                                            </p>
                                            <a type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#searchModal">
                                                <i class="ti ti-search me-1"></i> Search skilled people
                                            </a>
                                        </div>
                                    </div>
                                    <!-- gig Center -->
                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 style="color:#afafaf;">Join Our skill Hub</h4>
                                            <p style="color:#afafaf;">
                                                Showcase your skills, get verified, and connect with clients globally.
                                                Our platform helps skilled people like you grow professionally and gain exposure.
                                            </p>
                                            <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#talentModal">Register your skills</button>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="hero-tab text-center p-4">
                                            <h4 style="color:#afafaf;">Expand Your Network</h4>
                                            <p style="color:#afafaf;">
                                                Connect with industry professionals, mentors, and peers.
                                                Join groups, attend virtual events, and build relationships that matter.
                                            </p>
                                            <a href="{{ route('register')}}" class="btn btn-light">Join the Community</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Tabs Content -->
                            <div class="tab-content row d-none d-md-flex">
                                <!-- Skills Marketplace -->
                                <div class="col-md-4" id="marketplace">
                                    <div class="tab-pane hero-tab" id="marketplace" role="tabpanel">
                                        <h4 style="color:#afafaf;">Promote Your Skills</h4>
                                        <p style="color:#afafaf;">
                                            Stand out! Boost your profile and reach 3× more employers.<br>
                                            Get verified and feature your story on our homepage.
                                        </p>
                                        <a type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#searchModal">
                                            <i class="ti ti-search me-1"></i> Search skilled people
                                        </a>
                                    </div>
                                </div>

                                <!-- Opportunities Center -->
                                <div class="col-md-4" id="marketplace">
                                    <div class="tab-pane hero-tab" id="opportunities" role="tabpanel">
                                        <h4 style="color:#afafaf;">Join Our skill Hub</h4>
                                        <p style="color:#afafaf;">
                                            Showcase your skills, get verified, and connect with clients globally.
                                            Our platform helps skilled people like you grow professionally and gain exposure.
                                        </p>
                                        <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#talentModal">Register your skills</button>
                                    </div>
                                </div>
                                <!-- Connection Room -->
                                <div class="col-md-4" id="marketplace">
                                    <div class="tab-pane hero-tab" id="connection" role="tabpanel">
                                        <h4 style="color:#afafaf;">Expand Your Network</h4>
                                        <p style="color:#afafaf;">
                                            Connect with industry professionals, mentors, and peers.
                                            Join groups, attend virtual events, and build relationships that matter.
                                        </p>
                                        <a href="{{ route('register')}}" class="btn btn-light">Join the Community</a>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="popular-search">
                                <h5>Popular Searches : </h5>
                                <ul>
                                    @foreach($categories as $cat)
                                    <li><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></li>
                                    @endforeach
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<div class="container d-md-none" style="margin-top: 4.5rem;">
    <div class="trend-section ">
        <div class="row align-items-center">
            <div class="col-sm-10">
                <h5 data-aos="fade-up"><span class="title-bg"></span>Trending Categories of skilled people<span class="title-bg2"></span></h5>
                <p data-aos="fade-up">Discover inspiring stories, impactful skills, and creative people across Africa</p>
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
                                        <p>{{ optional($cat->talents)->count() ?? 0 }} talents</p>
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
        /* display: block; */
        /* margin-top: -1.75em; */
        /* width: calc(100% - .85em); */
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
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
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

<!-- next gen -->
<div class="popular-section-two d-none d-md-flex">
    <div class="container">
        <div class="section-header-two text-center aos-init aos-animate" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Trending Categories of skilled people<span class="title-bg2"></span></h2>
            <p>Discover inspiring stories, impactful skills, and creative people across Africa</p>
        </div>
        <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
            @foreach($categories as $cat)
            <div class="col d-flex">
                <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                    <span><i class="ti ti-speakerphone"></i></span>
                    <h6 class="mb-1"><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></h6>
                    <p>{{ optional($cat->talents)->count() ?? 0 }} skills</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
<!-- next gen -->

<section class="explore-services-sec">
    <!-- <div class="section-bg">
        <img src="{{ asset('assets/img/bg/section-bg-06.png') }}" class="explore-bg1" alt="img">
    </div> -->
    <div class="container">
        <div class="trusted-customers-sec ">
            <div class="trusted-customers">
                <div class="section-header mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <h2 style="color:#afafaf;">Want to Showcase Your skills?</h2>
                    <p style="color:#afafaf;">Over 74K skilled people on the platform - available today for you.</p>
                    <p style="color:#afafaf;">Join our community and take the first step towards your dream career.</p>
                </div>
                <div class="more-btn text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <a role="button" data-bs-toggle="modal" data-bs-target="#talentModal" class="btn btn-lg btn-primary">Register your skills<i class="ti ti-chevron-right me-2"></i></a>
                </div>
            </div>
        </div>

        <div class="faq-sec mt-4">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="faq-heading aos" data-aos="fade-up">
                        <div class="section-header mb-2">
                            <h2 style="color:#afafaf;"><span>Skilled People</span> Frequently Asked Questions</h2>
                        </div>
                        <p style="color:#afafaf;">Don’t see your question? We’re here to help you connect with the right skilled people.</p>
                        <a href="{{ route('user.contact') }}" class="btn btn-primary">Ask a Question <i class="ti ti-arrow-badge-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="faq-wrapper faq-lists">

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" style="color:#afafaf;" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">
                                    How can I find the right skilled people for my project?
                                </a>
                            </h4>
                            <div id="faqone" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p style="color:#afafaf;">Our skilled people Marketplace allows you to filter professionals by skills, categories, experience, and location, making it easy to find the perfect match for your project.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" style="color:#afafaf;" data-bs-toggle="collapse" href="#faqtwo" aria-expanded="false">
                                    How do I hire a skilled people?
                                </a>
                            </h4>
                            <div id="faqtwo" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p style="color:#afafaf;">After browsing profiles, you can contact skilled peoples directly through the platform or request a proposal. Our messaging system ensures smooth communication and collaboration.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" style="color:#afafaf;" data-bs-toggle="collapse" href="#faqthree" aria-expanded="false">
                                    Can skilled peoples showcase their past projects?
                                </a>
                            </h4>
                            <div id="faqthree" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p style="color:#afafaf;">Yes! skilled peoples can upload portfolios, project samples, and certifications to highlight their skills and achievements, helping you make informed hiring decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" style="color:#afafaf;" data-bs-toggle="collapse" href="#faqfour" aria-expanded="false">
                                    Is there a verification process for talents?
                                </a>
                            </h4>
                            <div id="faqfour" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p style="color:#afafaf;">We verify all registered talents to ensure authenticity. Verified talents are marked with a badge on their profiles, giving you confidence in your collaboration.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" style="color:#afafaf;" data-bs-toggle="collapse" href="#faqfive" aria-expanded="false">
                                    How much does it cost to hire a talent?
                                </a>
                            </h4>
                            <div id="faqfive" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p style="color:#afafaf;">Costs vary depending on the talent’s experience, skills, and project scope. The platform provides transparent pricing or allows you to negotiate directly with the talent.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Glassmorphic Search Modal -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">

            <!-- Modal Header -->
            <div class="modal-header border-0 bg-gradient text-white"
                style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title fw-bold" id="searchModalLabel">
                    🔎 Find Your skills
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body py-4 px-4">
                <form method="GET" action="{{ route('user.talents') }}" class="row g-3">

                    <div class="col-md-6">
                        <div class="input-group input-group-lg glass-input shadow-sm">
                            <span class="input-group-text bg-transparent border-0">
                                <i class="ti ti-search text-primary"></i>
                            </span>
                            <input type="text" name="keyword" class="form-control rounded-3 border-0 shadow-sm"
                                placeholder="Search talents, skills, or names..." value="{{ request('keyword') }}">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <select name="category" class="form-select form-select-lg rounded-3 border-0 shadow-sm">
                            <option value="">All Categories</option>
                            @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" {{ request('category') == $cat->id ? 'selected' : '' }}>
                                {{ $cat->name }}
                            </option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Footer -->
                    <div class="modal-footer border-0 d-flex justify-content-between px-4 py-3">
                        <button type="button" class="btn btn-light border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">
                            Search
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

<!-- SwiperJS Scripts -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    new Swiper('.talentSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        },
    });
</script>

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


<!-- Talent Modal -->
<div class="modal fade modal-glass" id="talentModal" tabindex="-1" aria-labelledby="talentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title fw-bold" id="talentModalLabel">Skill Registration</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">

                <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <!-- Step 1 -->
                    <div class="step-section active" id="step-1">
                        <div class="step-title"><i class="fas fa-user"></i> Personal Info</div>
                        <div class="info-note">Fill your basic information for profile setup.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Names</label>
                                <input type="text" name="name" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g John Doe" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Address</label>
                                <input type="text" name="address" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g Kigali, Rwanda" required>
                            </div>
                        </div>
                        <div class="text-end mt-4">
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="step-section" id="step-2">
                        <div class="step-title"><i class="fas fa-phone"></i> Contact Info</div>
                        <div class="info-note">Provide your contact details for clients to reach you.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Phone</label>
                                <input type="text" name="phone" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g +250 788 123 456" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" name="email" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g john.doe@example.com" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="step-section" id="step-3">
                        <div class="step-title"><i class="fas fa-star"></i> Skill Info</div>
                        <div class="info-note">Define your skills and expertise.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Languages Spoken</label>
                                <input type="text" name="language" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g English, Kinyarwanda" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Skill Category</label>
                                <select name="category_id" class="form-select" required>
                                    <option value="">Select Skill Category</option>
                                    @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold">Description</label>
                                <textarea name="description" class="form-control rounded-3 border-0 shadow-sm" rows="3" placeholder="Describe your talent..."></textarea>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="step-section" id="step-4">
                        <div class="step-title"><i class="fas fa-camera"></i> Upload Photo & Submit</div>
                        <div class="info-note">Add a professional photo for your profile.</div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Profile Image</label>
                            <input type="file" name="image" class="form-control rounded-3 border-0 shadow-sm" accept="image/*" required>
                            <div class="invalid-feedback">Please upload a valid image file. Accepts: .jpg, .jpeg, .png</div>
                        </div>
                        <div class="form-check mt-3 mb-3">
                            <input type="checkbox" class="form-check-input" id="terms" required>
                            <label class="form-check-label" for="terms">
                                I accept the <a href="{{ route('user.terms-condition') }}" class="text-primary">Terms & Conditions</a>
                            </label>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="submit" class="btn btn-success">Submit Registration</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const steps = document.querySelectorAll(".step-section");
        const nextBtns = document.querySelectorAll(".btn-next");
        const prevBtns = document.querySelectorAll(".btn-prev");
        const progressBar = document.getElementById("progressBar");

        let currentStep = 0;

        function showStep(step) {
            steps.forEach((s, i) => s.classList.toggle("active", i === step));
        }

        nextBtns.forEach(btn => btn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) currentStep++;
            showStep(currentStep);
        }));

        prevBtns.forEach(btn => btn.addEventListener("click", () => {
            if (currentStep > 0) currentStep--;
            showStep(currentStep);
        }));

        showStep(currentStep);
    });
</script>
@endsection