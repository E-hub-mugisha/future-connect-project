@extends('layouts.guest')
@section('content')

<div class="container">
    <section id="tranding">
        <!-- Bubble Background -->
        <div class="bubbles">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <!-- Swiper -->
        <div class="swiper tranding-slider">
            <div class="swiper-wrapper">
                @foreach ($talents as $talent)
                    <div class="swiper-slide tranding-slide">
                        <div class="slide-wrapper row align-items-center">
                            <div class="tranding-slide-caption col-md-6">
                                <p>
                                    {{ $talent->name }} — Passionate {{ $talent->skill ?? 'creative' }}
                                    blending {{ $talent->category->name ?? 'various disciplines' }}.
                                </p>
                                <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn">
                                    <i class="feather-arrow-right"></i> Read More
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                </a>
                            </div>

                            <div class="tranding-slide-img col-md-6">
                                <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/home/banner-image.svg') }}"
                                     alt="{{ $talent->name }}">
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <!-- Controls -->
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

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    var swiper = new Swiper(".tranding-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: -100,
        speed: 800,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { spaceBetween: -40 },
            768: { spaceBetween: -80 },
            1200: { spaceBetween: -100 }
        }
    });
</script>

<!-- Custom Styles -->
<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 3rem 0;
        border-radius: 2rem;
        margin-top: 2rem;
        box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
        z-index: 1;
        perspective: 1200px; /* 3D depth */
    }

    /* Swiper Core */
    .tranding-slider {
        overflow: visible !important;
        padding-bottom: 4rem;
        transform-style: preserve-3d;
    }

    .tranding-slide {
        transition: all 0.7s ease;
        width: 60%;
        opacity: 0.5;
        transform-origin: center center;
        transform: scale(0.9) rotateY(25deg);
    }

    /* Active Slide (Center) */
    .swiper-slide-active {
        opacity: 1;
        transform: scale(1.05) rotateY(0deg) translateZ(60px);
        z-index: 3;
    }

    /* Side Slides */
    .swiper-slide-prev {
        transform: scale(0.95) rotateY(25deg) translateX(-40px) translateZ(-60px);
        opacity: 0.7;
        z-index: 2;
    }

    .swiper-slide-next {
        transform: scale(0.95) rotateY(-25deg) translateX(40px) translateZ(-60px);
        opacity: 0.7;
        z-index: 2;
    }

    .slide-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        position: relative;
    }

    .tranding-slide-caption {
        max-width: 50%;
        position: relative;
    }

    .tranding-slide-caption p {
        font-size: 1.5rem;
        line-height: 1.4;
        font-weight: 600;
    }

    .tranding-slide-img img {
        width: 14rem;
        height: 14rem;
        border-radius: 2rem;
        object-fit: cover;
        transition: transform 0.4s ease;
        box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.3);
    }

    .swiper-slide-active .tranding-slide-img img {
        transform: scale(1.15) rotateY(0deg);
    }

    /* Navigation Arrows */
    .tranding-slider-control {
        position: absolute;
        top: 45%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 5;
    }

    .tranding-slider:hover .tranding-slider-control {
        opacity: 1;
        pointer-events: auto;
    }

    .slider-arrow {
        background: #fff;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.2);
    }

    .slider-arrow ion-icon {
        color: #000;
        font-size: 1.8rem;
    }

    /* Bubble Animation */
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

    @keyframes bubbleUp {
        0% { transform: translateY(0) scale(1); opacity: 0.4; }
        50% { opacity: 0.8; }
        100% { transform: translateY(-1000px) scale(1.3); opacity: 0; }
    }

    /* Responsive */
    @media (max-width: 992px) {
        .tranding-slide { width: 80%; }
        .tranding-slide-caption { max-width: 90%; text-align: center; }
        .tranding-slide-img img { width: 10rem; height: 10rem; }
    }

    @media (max-width: 576px) {
        .tranding-slide { width: 90%; }
        .tranding-slide-caption p { font-size: 1rem; }
        .tranding-slide-img img { width: 8rem; height: 8rem; }
    }
</style>

@endsection