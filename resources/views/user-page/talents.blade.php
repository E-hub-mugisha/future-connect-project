@extends('layouts.guest')
@section('title', 'Talents')
@section('content')

<!-- SwiperJS for carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

@php

$categories = \App\Models\Category::all();

@endphp

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
        perspective: 1200px;
    }

    @media (max-width:1440px) {
        #tranding {
            padding: 7rem 0;
        }
    }

    @media (max-width:500px) {
        #tranding .tranding-slider {
            height: 45rem;
        }
    }

    @media (max-width: 768px) {
        .tranding-slide-caption {
            max-width: 67%;
            text-align: center;
            margin-top: -12rem;
            position: relative !important;
            right: auto !important;
            transform: translateY(0) !important;
        }
    }

    .tranding-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25rem;
        /* same as your original */
        perspective: 2000px;
        /* enables 3D effect */
    }

    @media (max-width:500px) {
        .tranding-slide {
            width: 28rem !important;
            height: 36rem !important;
        }

        .tranding-slide .tranding-slide-img img {
            width: 28rem !important;
            height: 36rem !important;
        }
    }

    .tranding-slide .tranding-slide-img img {
        width: 17rem;
        height: 17rem;
        border-radius: 2rem;
        object-fit: cover;
    }

    .tranding-slide .tranding-slide-content {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .tranding-slide-content .food-price {
        position: absolute;
        top: 2rem;
        right: 2rem;
        color: var(--white);
    }

    .tranding-slide-content .tranding-slide-content-bottom {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        color: var(--white);
    }

    .food-rating {
        padding-top: 1rem;
        display: flex;
        gap: 1rem;
    }

    .rating ion-icon {
        color: var(--primary);
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
        display: none;
    }

    /* Hide slider controls by default */
    .tranding-slider-control {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
    }

    /* Show when hovering over the whole slider */
    .tranding-slider:hover .tranding-slider-control {
        opacity: 1;
        pointer-events: auto;
    }


    .tranding-slider-control .swiper-button-next {
        left: 97% !important;
        transform: translateX(-58%) !important;
    }

    @media (max-width:990px) {
        .tranding-slider-control .swiper-button-next {
            left: 70% !important;
            transform: translateX(-70%) !important;
        }
    }

    @media (max-width:450px) {
        .tranding-slider-control .swiper-button-next {
            left: 80% !important;
            transform: translateX(-80%) !important;
        }
    }

    @media (max-width:990px) {
        .tranding-slider-control .swiper-button-prev {
            left: 30% !important;
            transform: translateX(-30%) !important;
        }
    }

    @media (max-width:450px) {
        .tranding-slider-control .swiper-button-prev {
            left: 20% !important;
            transform: translateX(-20%) !important;
        }
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

    .tranding-slider-control .slider-arrow ion-icon {
        font-size: 2rem;
        color: #222224;
    }

    .tranding-slider-control .slider-arrow::after {
        content: '';
    }

    .tranding-slider-control .swiper-pagination {
        position: relative;
        width: 15rem;
        bottom: 1rem;
    }

    .tranding-slider-control .swiper-pagination .swiper-pagination-bullet {
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .tranding-slider-control .swiper-pagination .swiper-pagination-bullet-active {
        background: var(--primary);
    }

    /* Active slide */
    .swiper-slide-active {
        transform: translate3d(0px, 0px, 0px) scale(1.05) !important;
        z-index: 2;
    }

    /* First previous slide */
    .swiper-slide-prev {
        transform: translate3d(73rem, 3px, 3rem) rotateY(55deg) scale(1) !important;
        z-index: 1;
    }



    /* First next slide */
    .swiper-slide-next {
        transform: translate3d(-33rem, 5px, -41rem) rotateY(-71deg) scale(1) !important;
        z-index: 1;
    }



    .caption-left {
        position: absolute;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%) translateX(-30px);
        opacity: 0;
        color: var(--white);
        background: rgba(0, 0, 0, 0.5);
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        max-width: 60%;
        transition: all 0.6s ease;
    }

    .swiper-slide-active .caption-left {
        transform: translateY(-50%) translateX(0);
        opacity: 1;
    }

    .slide-wrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 100%;
    }

    /* Hide caption by default */
    .tranding-slide-caption {
        display: none;
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.6s ease;
    }

    /* Show caption only for active slide */
    .swiper-slide-active .tranding-slide-caption {
        opacity: 1;
        display: block;
        transform: translateX(0);
    }

    /* Caption styling */
    .tranding-slide-caption {
        flex: 1;
        max-width: 50%;
        text-align: left;
        /* background: rgba(0, 0, 0, 0.05); */
        padding: 0rem;
        border-radius: 1rem;
        position: absolute;
        right: 56%;
    }

    .tranding-slide-caption p {
        font-size: 2rem;
        line-height: 1.5;
        color: #fff;
        font-weight: 700;
    }

    /* Image styling */
    .tranding-slide-img {
        flex: 1;
        position: absolute;
        left: 50rem;
    }

    .tranding-line-btn {
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

    .tranding-line-btn span {
        pointer-events: none;
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

    /* ================== Responsive ================== */
    /* Large screens */
    @media (max-width:1200px) {
        .tranding-slide-caption {
            max-width: 50%;
        }

        .tranding-slide-img img {
            width: 250px;
            height: 250px;
        }
    }


    /* Extra small screens */
    @media (max-width:480px) {
        .tranding-slide-img img {
            width: 150px;
            height: 150px;
        }

        .tranding-slide-caption p {
            font-size: 1rem;
        }
    }

    /* Tablet & Mobile: stack caption below image */
    @media (max-width:768px) {
        .slide-wrapper {
            flex-direction: column;
            align-items: center;
        }

        .tranding-slide-caption {
            max-width: 90%;
            text-align: center;
            margin-top: 1rem;
            /* space below image */
            position: relative !important;
            right: auto !important;
            transform: translateY(0) !important;
        }

        .tranding-slide-img img {
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }

        .tranding-slide-caption p {
            font-size: 1.2rem;
        }
    }

    /* ================== Responsive adjustments ================== */
    @media (max-width:1440px) {
        .swiper-slide-prev {
            transform: translate3d(15rem, 0, 2rem) rotateY(45deg) scale(1) !important;
        }

        .swiper-slide-next {
            transform: translate3d(-15rem, 0, -15rem) rotateY(-45deg) scale(1) !important;
        }

        .tranding-slide-img {
            left: 25rem;
        }
    }

    @media (max-width:1200px) {
        .swiper-slide-prev {
            transform: translate3d(10rem, 0, 2rem) rotateY(40deg) scale(1) !important;
        }

        .swiper-slide-next {
            transform: translate3d(-10rem, 0, -10rem) rotateY(-40deg) scale(1) !important;
        }

        .tranding-slide-img {
            left: 20rem;
        }
    }

    @media (max-width:992px) {
        .swiper-slide-prev {
            transform: translate3d(6rem, 0, 1rem) rotateY(35deg) scale(1) !important;
        }

        .swiper-slide-next {
            transform: translate3d(-6rem, 0, -5rem) rotateY(-35deg) scale(1) !important;
        }

        .tranding-slide-img {
            left: 15rem;
        }
    }

    @media (max-width:768px) {
        .swiper-slide-prev {
            transform: translate3d(3rem, 0, 0) rotateY(25deg) scale(0.95) !important;
        }

        .swiper-slide-next {
            transform: translate3d(-3rem, 0, 0) rotateY(-25deg) scale(0.95) !important;
        }

        .tranding-slide-img {
            position: relative;
            left: auto;
            margin: 0 auto;
        }
    }

    @media (max-width:480px) {

        .swiper-slide-prev,
        .swiper-slide-next {
            transform: translate3d(0, 0, 0) rotateY(0deg) scale(0.9) !important;
        }
    }

    /* Hide slide image on tablet and mobile */
    @media (max-width: 992px) {
        .tranding-slide-img {
            display: none !important;
        }
    }

    /* Hide slide image on mobile screens */
    @media (max-width: 768px) {
        .tranding-slide-img {
            display: none !important;
        }
    }
</style>

<div class="container">
    <section id="tranding">
        <!-- Bubble Background -->
        <div class="bubbles">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="swiper tranding-slider">
            <div class="swiper-wrapper">
                @foreach ($featuredTalents as $talent)
                <!-- Slide -->
                <div class="swiper-slide tranding-slide">
                    <div class="slide-wrapper row">

                        <!-- Caption on the left -->
                        <div class="tranding-slide-caption col-md-6" data-aos="fade-up" data-aos-duration="1000">

                            <p>{{ $talent->name }} - Passionate {{ $talent->skill ?? 'creative' }} and performer blending
                                {{ $talent->category->name ?? 'various disciplines' }}
                            </p>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn" data-aos="fade-up" data-aos-duration="1000">
                                <i class="feather-arrow-right"></i>Read More
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                            </a>
                        </div>

                        <!-- Image on the right -->
                        <div class="tranding-slide-img col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/home/banner-image.svg') }}"
                                alt="{{ $talent['name'] }}">
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <!-- Slider controls -->
            <div class="tranding-slider-control">
                <div class="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div class="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    </section>
</div>


<div class="container" style="margin-top: 4.5rem;">
    <div class="trend-section ">
        <div class="row align-items-center">
            <div class="col-sm-10">
                <h5 data-aos="fade-up"><span class="title-bg"></span>Trending Categories of talents<span class="title-bg2"></span></h5>
                <p data-aos="fade-up">Discover inspiring stories, impactful skills, and creative talent across Africa</p>
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

<!-- next gen -->
<div class="talent-section-two next-gen-section" style="background: #aac2e1a8;">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>Meet the Next Generation of talents<span
                    class="title-bg2"></span></h2>
            <p style="color: #319BF9;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>
        <div class="row seller-list postLists cards">
            <!-- Filter -->
            <div class="filters-section">
                <div class="listing-tab ">
                    <ul class="nav nav-tabs justify-content-center flex-wrap gap-2" id="talentTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-filter="latest" type="button">Latest</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="popular" type="button">Popular</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="featured" type="button">Featured</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="recommended" type="button">Recommended</a>
                        </li>
                    </ul>

                </div>

                <!-- /Filter -->

                <!-- Sort By -->
                <div class="filters-wrap sort-categories">
                    <div class="collapse-card float-lg-end">
                        <div class="filter-header">
                            <a href="javascript:void(0);" class="sorts-list">
                                <i class="ti ti-sort-ascending"></i>Sorts by: <span>Categories</span>
                            </a>
                        </div>
                        <div id="categories2" class="collapse-body" style="display: none;">
                            <div class="form-group search-group">
                                <span class="search-icon"><i class="feather-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search Category">
                            </div>
                            <ul class="checkbox-list categories-lists">
                                @foreach($categories as $cat)
                                <li class="active">
                                    <label class="custom_check">
                                        <span class="checked-title">{{ $cat->name }}</span>
                                    </label>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Sort By -->

            </div>
            <!-- /Filter -->
            <div class="row" id="talentGrid">
                @foreach($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6 post-card-wrapper talent-item" data-category="{{ strtolower($talent->tag ?? 'featured') }}">
                    <div class="card post-item m-card">
                        <div class="card-body text-center">

                            <!-- Image -->
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img
                                    class="img rounded-3"
                                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" style="height: 120px; object-fit: cover; transition: transform 0.3s ease;" />
                            </a>

                            <!-- Name -->
                            <h6 class="mb-1">
                                <a href="{{ route('user.talent.details', $talent->id) }}">
                                    {{ $talent->name }}
                                    <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                                </a>
                            </h6>

                            <!-- Category -->
                            <p>{{ $talent->category->name ?? 'Uncategorized' }}
                                @php
                                // Pick a color class based on the level
                                $badgeClass = match($talent->level) {
                                'advanced' => 'bg-success', // Green
                                'intermediate' => 'bg-warning text-dark', // Yellow/Orange
                                default => 'bg-secondary', // Gray for Beginner
                                };
                                @endphp

                                <span class="badge {{ $badgeClass }}">
                                    {{ ucfirst($talent->level) }}
                                </span>
                            </p>

                            <!-- Location -->
                            <p class="mb-0 location-text d-inline-flex align-items-center">
                                <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                                Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                            </p>

                            <!-- Ratings -->
                            <div class="d-flex gap-2 align-items-center flex-wrap mt-3 mb-3 justify-content-center">
                                <div class="talent-hover-box">
                                    <div class="default-badges">
                                        <span class="badge bg-light">
                                            {{ number_format($talent->feedback->avg('rating'), 1) }} <i class="ti ti-star"></i>
                                        </span>
                                        <span class="badge bg-light">
                                            {{ $talent->feedback->count() }} <i class="ti ti-message-2"></i>
                                        </span>
                                    </div>
                                    <div class="hover-badges">
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->skill }}
                                        </a>
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->language }}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- View Button -->
                            <div class="text-center d-flex justify-content-center">
                                <a href="{{ route('user.talent.details', $talent->id) }}" class="slide-line-btn">
                                        <i class="feather-arrow-right"></i>View Profile
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                @endforeach
            </div>
        </div>
    </div>
</div>
<!-- next gen -->

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
@endsection