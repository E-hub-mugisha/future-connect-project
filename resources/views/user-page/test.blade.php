<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fody Slider</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="style.css">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/5.1.3/css/bootstrap.min.css">

    <style>

        #tranding {
            padding: 4rem 0;
            margin: 6rem 9rem;
            background: cadetblue;
            border-radius: 2rem;
        }

        @media (max-width:1440px) {
            #tranding {
                padding: 7rem 0;
            }
        }

        /* #tranding .tranding-slider {
            height: 52rem;
            padding: 2rem 0;
            position: relative;
        } */

        @media (max-width:500px) {
            #tranding .tranding-slider {
                height: 45rem;
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
            width: 20rem;
            height: 20rem;
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
            transform: translate3d(730px, 0px, -100px) rotateY(52deg) scale(1) !important;
            z-index: 1;
        }



        /* First next slide */
        .swiper-slide-next {
            transform: translate3d(-490px, 0px, -337px) rotateY(-50deg) scale(1) !important;
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
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.5s ease;
        }

        /* Show caption only for active slide */
        .swiper-slide-active .tranding-slide-caption {
            opacity: 1;
            transform: translateX(0);
        }

        /* Caption styling */
        .tranding-slide-caption {
            flex: 1;
            max-width: 40%;
            text-align: left;
            background: rgba(0, 0, 0, 0.05);
            padding: 2rem;
            border-radius: 1rem;
            position: absolute;
            right: 54%;
        }

        /* Image styling */
        .tranding-slide-img {
            flex: 1;
            position: absolute;
            left: 50rem;
        }
    </style>
</head>

<body>

    @php
    $talents = [
    ['name' => 'John Doe'],
    ['name' => 'Jane Smith'],
    ['name' => 'Alice Johnson'],
    ];
    @endphp

    <section id="tranding">

        <div class="swiper tranding-slider">
            <div class="swiper-wrapper">
                @foreach ($talents as $talent)
                <!-- Slide-start -->
                <div class="swiper-slide tranding-slide">
                    <div class="slide-wrapper row">
                        <!-- Caption on the left -->
                        <div class="tranding-slide-caption col-md-6">
                            <h2>Chef's Choice</h2>
                            <p>Fresh ingredients & baked to perfection</p>
                            <h3>{{ $talent['name'] }}</h3>
                            <div class="food-rating">
                                <span>4.5</span>
                                <div class="rating">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <p class="food-price">$20</p>
                        </div>

                        <!-- Image on the right -->
                        <div class="tranding-slide-img col-md-6">
                            <img src="image/tranding-food-1.png" alt="{{ $talent['name'] }}">
                        </div>
                    </div>
                </div>

                <!-- Slide-end -->
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
                <!-- <div class="swiper-pagination"></div> -->
            </div>
        </div>
        </div>
    </section>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script src="script.js"></script>

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
</body>

</html>