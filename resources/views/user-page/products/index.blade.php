@extends('layouts.guest')
@section('title', 'Explore our Marketplace')
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
        border: 1px solid #00a667;
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

<div class="container p-4">
    <section id="tranding">
        <div class="container">
            <div class="row">
                <div id="jobInfoCarousel" class="carousel slide carousel-fade mb-4" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        @foreach($featuredProducts as $key => $product)
                        <div class="carousel-item {{ $key == 0 ? 'active' : '' }}">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                        <div class="banner-head mt-4">
                                            <h1 class="mb-2 text-white">{{ $product->name }}</h1>
                                            <p class="d-inline-flex">{{ $product->description ?? 'Top quality product available now' }}</p>
                                        </div>
                                        <div class="banner-form">
                                            <p class="text-white">
                                                {{ $product->description ?? 'Top quality product available now' }}
                                            </p>
                                            <a href="{{ route('user.product-details', $product->id) }}" class="btn btn-light">
                                                View Product
                                            </a>
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
                        @endforeach
                    </div>
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
                <div class="trend-section mt-4">
                    <div class="row align-items-center mb-3">
                        <div class="col-sm-10">
                            <h5>Trending Categories</h5>
                        </div>
                        <div class="col-sm-2 text-sm-end">
                            <div class="owl-nav trend-nav nav-control nav-top">
                                <button type="button" role="presentation" class="owl-prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button type="button" role="presentation" class="owl-next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="trend-items owl-carousel">
                        @foreach($categories->take(8) as $category)
                        <div class="trend-box">
                            <div class="trend-info">
                                <h6>
                                    <a href="{{ route('user.product.category', $category->id) }}">{{ $category->name }}</a>
                                </h6>
                                <p>({{ $category->products_count ?? 0 }} Products)</p>
                            </div>
                            <a href="{{ route('user.product.category', $category->id) }}">
                                <i class="feather-arrow-up-right"></i>
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div>
                <!-- /Trending Categories -->

                <!-- Filter Section -->
                <div class="filters-section mt-5">
                    <ul class="filters-wrap">

                        <!-- Categories Filter -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-list"></i> Categories
                                    </a>
                                </div>
                                <div id="categories" class="collapse-body">
                                    <div class="form-group search-group mb-3">
                                        <span class="search-icon"><i class="feather-search"></i></span>
                                        <input type="text" class="form-control" placeholder="Search Category">
                                    </div>
                                    <ul class="checkbox-list categories-lists">
                                        @foreach($categories as $category)
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox" name="category[]" value="{{ $category->id }}">
                                                <span class="checkmark"></span>
                                                <span class="checked-title">{{ $category->name }}</span>
                                            </label>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- /Categories Filter -->

                        <!-- Ratings -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-stars"></i> Customer Ratings
                                    </a>
                                </div>
                                <div id="ratings" class="collapse-body">
                                    <ul class="checkbox-list star-rate">
                                        @for ($i = 5; $i >= 1; $i--)
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox" name="rating[]" value="{{ $i }}">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-3">
                                                    @for ($j = 1; $j <= 5; $j++)
                                                        <i class="fa-solid fa-star {{ $j <= $i ? 'filled' : '' }}"></i>
                                                        @endfor
                                                </span>
                                                <span class="rating-count">({{ $i }}.0)</span>
                                            </label>
                                        </li>
                                        @endfor
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- /Ratings -->

                        <!-- Budget -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-moneybag"></i> Price Range
                                    </a>
                                </div>
                                <div id="budget" class="collapse-body">
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Max Price">
                                    </div>
                                    <ul class="checkbox-list">
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget" value="under-100">
                                                <span class="checkmark"></span>Under $100
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget" value="100-500">
                                                <span class="checkmark"></span>$100 - $500
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget" value="500-1000">
                                                <span class="checkmark"></span>$500 - $1000
                                            </label>
                                        </li>
                                    </ul>
                                    <div class="filter-btn mt-2">
                                        <a href="javascript:void(0);" class="me-2">Reset</a>
                                        <button class="btn btn-primary btn-sm">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- /Budget -->

                    </ul>

                    <!-- Sort By -->
                    <div class="filters-wrap sort-categories mt-4">
                        <div class="collapse-card float-lg-end">
                            <div class="filter-header">
                                <a href="javascript:void(0);" class="sorts-list">
                                    <i class="ti ti-sort-ascending"></i> Sort By: <span>Newest</span>
                                </a>
                            </div>
                            <div id="categories2" class="collapse-body">
                                <ul class="checkbox-list categories-lists">
                                    <li><label class="custom_check"><span class="checked-title">Newest Arrivals</span></label></li>
                                    <li><label class="custom_check"><span class="checked-title">Price: Low to High</span></label></li>
                                    <li><label class="custom_check"><span class="checked-title">Price: High to Low</span></label></li>
                                    <li><label class="custom_check"><span class="checked-title">Top Rated</span></label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Sort By -->
                </div>
                <!-- /Filter Section -->

            </div>
        </div>


        <!-- Service -->
        <div class="service-gigs">
            <div class="row">

                <div class="col-lg-12">
                    <div class="row">
                        @foreach($products as $product)
                        <!-- Service List -->
                        <div class="col-lg-4 col-md-6">
                            <div class="gigs-grid">
                                <div class="gigs-img">
                                    <div class="img-slider owl-carousel owl-loaded owl-drag">
                                        <div class="owl-stage-outer">
                                            <div class="owl-stage" style="transform: translate3d(-876px, 0px, 0px); transition: all; width: 3066px;">
                                                <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-07.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item active" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-01.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-07.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-01.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                    <div class="slide-images">
                                                        <a href="{{ route('user.product-details', $product->id )}}">
                                                            <img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                                        <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                                    </div>
                                </div>
                                <div class="gigs-content">
                                    <div class="gigs-info">
                                        <a href="{{ route('user.product.category', $product->category->id) }}" class="badge bg-primary-light">{{ $product->category?->name ?? 'Uncategorized' }}</a>
                                        <p><i class="ti ti-user"></i>{{ $product->seller->company_name }}</p>
                                    </div>
                                    <div class="gigs-title">
                                        <h3>
                                            <a href="{{ route('user.product-details', $product->id )}}">{{ $product->name }}</a>
                                        </h3>
                                    </div>
                                    <div class="star-rate">
                                        <span><i class="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                    </div>
                                    <div class="gigs-card-footer gap-2">
                                        <h5>${{ $product->price }}</h5>
                                        <div>
                                            
                                            <span class="badge"><a href="{{ route('user.product-details', $product->id )}}">View Details</a></span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Service List -->
                        @endforeach
                        <div class="col-md-12">
                            <!-- Pagination -->
                            @if ($products->hasPages())
                            <div class="pagination">
                                <ul>
                                    {{-- Previous --}}
                                    <li>
                                        @if ($products->onFirstPage())
                                        <a href="javascript:void(0);" class="previous disabled"><i class="fa-solid fa-chevron-left"></i></a>
                                        @else
                                        <a href="{{ $products->previousPageUrl() }}" class="previous"><i class="fa-solid fa-chevron-left"></i></a>
                                        @endif
                                    </li>

                                    {{-- Pages --}}
                                    @foreach ($products->getUrlRange(1, $products->lastPage()) as $page => $url)
                                    <li>
                                        <a href="{{ $url }}" @if($page==$products->currentPage()) class="active" @endif>{{ $page }}</a>
                                    </li>
                                    @endforeach

                                    {{-- Next --}}
                                    <li>
                                        @if ($products->hasMorePages())
                                        <a href="{{ $products->nextPageUrl() }}" class="next"><i class="fa-solid fa-chevron-right"></i></a>
                                        @else
                                        <a href="javascript:void(0);" class="next disabled"><i class="fa-solid fa-chevron-right"></i></a>
                                        @endif
                                    </li>
                                </ul>
                            </div>
                            @endif
                            <!-- /Pagination -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Service -->

    </div>
</div>

<!-- Seller Application Modal -->
<div class="modal fade" id="applySellerModal" tabindex="-1" aria-labelledby="applySellerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <form action="{{ route('seller.store') }}" method="POST" class="p-2">
                @csrf

                <!-- Header -->
                <div class="modal-header border-0 bg-gradient text-white"
                    style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                    <h5 class="modal-title fw-bold" id="applySellerModalLabel">
                        🌟 Apply to Become a Seller
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body py-4 px-3">
                    <p class="text-muted mb-4">
                        Join the <strong>Future Connect Shop</strong> and start selling products that empower our members.
                    </p>

                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Company Name</label>
                            <input type="text" name="company_name" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. Creative Minds Ltd" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Email</label>
                            <input type="email" name="email" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. example@domain.com" required>
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Phone</label>
                            <input type="text" name="phone" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="+250 700 123 456">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label fw-semibold">Address</label>
                            <input type="text" name="address" class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="e.g. Kigali, Rwanda">
                        </div>

                        <div class="col-12">
                            <label class="form-label fw-semibold">Company Description</label>
                            <textarea name="description" rows="3"
                                class="form-control form-control-lg rounded-3 border-0 shadow-sm"
                                placeholder="Tell us more about your company, products, and goals..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="modal-footer border-0 d-flex justify-content-between px-4 py-3">
                    <button type="button" class="btn btn-light border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection