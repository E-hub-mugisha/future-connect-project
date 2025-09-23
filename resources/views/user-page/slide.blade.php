@extends('layouts.guest')
@section('title', 'Welcome to')
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
                @foreach ($talents as $talent)
                <!-- Slide -->
                <div class="swiper-slide tranding-slide">
                    <div class="slide-wrapper row align-items-center">

                        <!-- Caption on the left -->
                        <div class="tranding-slide-caption col-md-6">
                            <p>{{ $talent->name }} - Passionate {{ $talent->skill ?? 'creative' }} and performer blending
                                {{ $talent->category->name ?? 'various disciplines' }}
                            </p>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn">
                                <i class="feather-arrow-right"></i>Read More
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                            </a>
                        </div>

                        <!-- Image on the right -->
                        <div class="tranding-slide-img col-md-6">
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

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<script>
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        slidesPerView: 1.5,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
</script>
@endsection