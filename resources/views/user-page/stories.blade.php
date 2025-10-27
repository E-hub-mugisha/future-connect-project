@extends ('layouts.guest')
@section('title', 'Stories')
@section('content')

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<style>
    .postLists {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        /* text-align: center; */
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }

    .gigs-grid:hover {
        transform: translateY(-5px);
        transition: all 0.3s ease;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }

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
                @foreach ($featuredStories as $story)
                <!-- Slide -->
                <div class="swiper-slide tranding-slide">
                    <div class="slide-wrapper row">

                        <!-- Caption on the left -->
                        <div class="tranding-slide-caption col-md-6" data-aos="fade-up" data-aos-duration="1000">

                            <p>
                                {{ \Illuminate\Support\Str::limit($story->title, 60) }}
                            </p>
                            <a href="{{ url('story-details/'.$story->slug) }}" class="tranding-line-btn" data-aos="fade-up" data-aos-duration="1000">
                                <i class="feather-arrow-right"></i>Read More
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                                <span class="slide-line"></span>
                            </a>
                        </div>

                        <!-- Image on the right -->
                        <div class="tranding-slide-img col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="{{ asset('images/stories/'.$story->thumbnail) }}"
                                alt="{{ \Illuminate\Support\Str::limit($story->title, 60) }}">
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

<div class="page-content">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <!-- Trending Categories -->
                <div class="trend-section">
                    <div class="row align-items-center">
                        <div class="col-sm-10">
                            <h5>Trending Categories of stories</h5>
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

                                                    <h6><a href="{{ url('/story/category/' . $cat->slug) }}">{{ $cat->name }}</a></h6>
                                                    @if(isset($cat->stories_count))
                                                    <p>{{ $cat->stories_count }} stories</p>
                                                    @else
                                                    <p>0 stories</p>
                                                    @endif
                                                </div>
                                                <a href="{{ url('/story/category/' . $cat->slug) }}"><i class="feather-arrow-up-right"></i></a>
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
                <!-- /Trending Categories -->

            </div>
            <div class="col-md-12">
                <form action="{{ route('stories.filter') }}" method="GET">
                    <div class="filters-section mb-4">
                        <ul class="filters-wrap">
                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <a role="button" tabIndex="0">
                                            <i class="ti ti-list page input"></i> Categories
                                        </a>
                                    </div>
                                    <div id="categories" class="collapse-body">
                                        <select name="category" class="form-select categories-lists">
                                            <option value="">Select Category</option>
                                            @foreach($categories as $cat)
                                            <option value="{{ $cat->id }}"><span class="checked-title">{{ $cat->name }}</span></option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <div class="input-location">
                                            <input type="text" name="region" class="form-control" placeholder="e.g., Kigali, Nairobi, Lagos">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="collapse-card">
                                    <div class="filter-header">
                                        <div class="input-block border-0">
                                            <input type="text" name="keyword" class="form-control" placeholder="e.g., photography, coding, music">
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <div class="text-end mt-3">
                            <button type="submit" class="btn btn-primary">Apply Filters</button>
                            <a href="{{ route('stories.filter') }}" class="btn btn-light">Reset</a>
                        </div>
                    </div>
                </form>

                <div class="trend-section">
                    <div class="row">
                        <div class="container">

                            <div class="row" data-aos="fade-up">
                                @foreach($stories as $story)
                                <div class="col-xl-4 col-md-4">
                                    <div class="gigs-grid postLists mb-4">
                                        <div class="gigs-img position-relative">
                                            <a href="{{ url('story-details/'.$story->slug) }}">
                                                <img src="{{ asset('image/stories/'.$story->thumbnail) }}"
                                                    class="img-fluid w-100" alt="{{ $story->title }}"
                                                    style="height: 240px; object-fit: cover; transition: transform 0.3s ease;"
                                                    onmouseover="this.style.transform='scale(1.05)'"
                                                    onmouseout="this.style.transform='scale(1)'">
                                            </a>

                                            @if($story->status)
                                            <div class="position-absolute top-0 start-0 m-2">
                                                @if($story->status == 'approved')
                                                <span class="badge bg-success px-3 py-1"><i class="fa-solid fa-bolt"></i> Approved</span>
                                                @elseif($story->status == 'pending')
                                                <span class="badge bg-warning px-3 py-1"><i class="feather-star"></i> Pending</span>
                                                @endif
                                            </div>
                                            @endif
                                        </div>

                                        <div class="gigs-content p-3">
                                            <div class="gigs-info mb-2 d-flex align-items-center">
                                                <span class="badge bg-light text-dark">{{ $story->category->name }}</span>
                                                @if($story->tags)
                                                <small class="text-muted">+{{ count(explode(',', $story->tags)) }} Tags</small>
                                                @endif
                                            </div>

                                            <div class="gigs-title mb-3">
                                                <h5 class="mb-0">
                                                    <a href="{{ url('story-details/'.$story->slug) }}" class="text-dark text-decoration-none">
                                                        {{ \Illuminate\Support\Str::limit($story->title, 60) }}
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="gigs-card-footer d-flex">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}"
                                                    class="rounded-circle me-2" width="40" height="40" alt="img">
                                                <div>
                                                    <h6 class="mb-0 fw-semibold">
                                                        <a href="#" class="text-dark text-decoration-none">{{ $story->talent->name }}</a>
                                                    </h6>
                                                    <small class="text-muted">Posted: {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                @endforeach

                                <div class="col-md-12">
                                    <!-- Pagination -->
                                    <div class="pagination" data-aos="fade-up">
                                        @if ($stories->hasPages())
                                        <ul>
                                            {{-- Previous Page Link --}}
                                            @if ($stories->onFirstPage())
                                            <li class="disabled"><span><i class="fa-solid fa-chevron-left"></i></span></li>
                                            @else
                                            <li><a href="{{ $stories->previousPageUrl() }}"><i class="fa-solid fa-chevron-left"></i></a></li>
                                            @endif

                                            {{-- Page Numbers --}}
                                            @foreach ($stories->getUrlRange(1, $stories->lastPage()) as $page => $url)
                                            @if ($page == $stories->currentPage())
                                            <li><a href="javascript:void(0);" class="active">{{ $page }}</a></li>
                                            @else
                                            <li><a href="{{ $url }}">{{ $page }}</a></li>
                                            @endif
                                            @endforeach

                                            {{-- Next Page Link --}}
                                            @if ($stories->hasMorePages())
                                            <li><a href="{{ $stories->nextPageUrl() }}"><i class="fa-solid fa-chevron-right"></i></a></li>
                                            @else
                                            <li class="disabled"><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                            @endif
                                        </ul>
                                        @endif
                                    </div>
                                    <!-- /Pagination -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection