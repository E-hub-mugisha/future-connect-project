@extends('layouts.guest')
@section('title', 'Welcome to')
@section('content')

<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 3rem 0;
        border-radius: 1.5rem;
        height: 22rem;
    }

    .bubbles span {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        animation: move 10s linear infinite;
    }

    @keyframes move {
        0% {
            transform: translateY(0);
            opacity: 1;
        }

        100% {
            transform: translateY(-50vh);
            opacity: 0;
        }
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        gap: 2rem;
    }

    .slider-arrow {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .slider-arrow:hover {
        background: #fff;
        color: #319BF9;
    }

    ion-icon {
        font-size: 1.5rem;
    }
</style>

<div class="container p-4">
    <section id="tranding">
        <div class="bubbles">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="tranding-grid">
            <!-- Caption Slider -->
            <div class="swiper tranding-caption-slider" id="captionSwiper">
                <div class="swiper-wrapper">
                    @foreach ($talents as $talent)
                    <div class="swiper-slide">
                        <div class="tranding-slide-caption">
                            <h3 class="text-2xl font-bold mb-2">{{ $talent->name }}</h3>
                            <p>
                                Passionate {{ $talent->skill ?? 'creative' }} blending
                                {{ $talent->category->name ?? 'various disciplines' }} into meaningful art and innovation.
                            </p>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn">
                                <i class="feather-arrow-right"></i> Read More
                            </a>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Image Slider -->
            <div class="swiper tranding-image-slider" id="imageSwiper">
                <div class="swiper-wrapper">
                    @foreach ($talents as $talent)
                    <div class="swiper-slide">
                        <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/home/banner-image.svg') }}"
                            alt="{{ $talent->name }}">
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Controls -->
        <div class="tranding-slider-control">
            <div class="swiper-button-prev slider-arrow"><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div class="swiper-button-next slider-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></div>
        </div>
    </section>
</div>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<script>
    var captionSwiper = new Swiper('#captionSwiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        allowTouchMove: false,
        slidesPerView: 1,
        speed: 700,
    });

    var imageSwiper = new Swiper('#imageSwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        speed: 1000,
        autoplay: {
            delay: 4000, // Change this value to control slide interval
            disableOnInteraction: false, // Keeps autoplay running after manual navigation
        },
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    imageSwiper.on('slideChangeTransitionStart', function() {
        captionSwiper.slideToLoop(imageSwiper.realIndex);
    });

    captionSwiper.on('slideChangeTransitionStart', function() {
        imageSwiper.slideToLoop(captionSwiper.realIndex);
    });

    const section = document.querySelector('#tranding');
    section.addEventListener('mouseenter', () => imageSwiper.autoplay?.stop());
    section.addEventListener('mouseleave', () => imageSwiper.autoplay?.start());
</script>

@endsection