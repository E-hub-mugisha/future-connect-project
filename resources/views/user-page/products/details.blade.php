@extends('layouts.guest')
@section('title', $product->name)
@section('content')

<style>
    .talent-profile-info {
        background: #011E34;
        color: #fff;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }

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
        margin-bottom: 1.75rem;

    }
</style>

<div class="page-content content" style="transform: none;">
    <div class="container" style="transform: none;">
        <div class="breadcrumb-bar postLists breadcrumb-bar-info breadcrumb-info">
            <div class="breadcrumb-img">
                <div class="breadcrumb-left">
                    <img src="assets/img/bg/banner-bg-03.png" alt="img">
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-12 text-start">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="service.html">Gigs</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Gigs Detail</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">
                            {{ $product->name }}
                        </h2>
                        <ul class="info-links">
                            <li>
                                <i class="ti ti-star-filled text-warning"></i>5.0 (40 Reviews)
                            </li>
                            <li>
                                <i class="ti ti-file"></i>{{ $product->stock }}
                            </li>
                            <li>
                                <i class="ti ti-calendar-due"></i>Created On : 25 May 2025
                            </li>
                            <li>
                                <i class="ti ti-home-shield"></i>{{ $product->category?->name ?? 'Uncategorized' }}
                            </li>
                            <li class="border-0">
                                <div class="tranlator d-flex align-items-center">
                                    <img src="assets/img/flags/us.svg" alt="flag" class="img-fluid img me-2 language">
                                    {{ $product->seller->company_name }}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-12">
                        <ul class="breadcrumb-links service-details">
                            <li class="mb-3 me-0">
                                <a href="#"><span><i class="feather-heart"></i></span>Add to Wishlist</a>
                            </li>
                            <li class="me-0">
                                <div class="social-links d-flex align-items-center breadcrumb-social justify-content-lg-end"> Share
                                    <ul class="ms-3">
                                        <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="javascript:void(0);"><i class="fa-brands fa-google"></i></a></li>
                                        <li><a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="transform: none;">

            <!-- Service Details -->
            <div class="col-lg-8">

                <!-- Slider -->
                <div class="slider-card postLists service-slider-card">
                    <div class="slide-part">
                        <div class="slider service-slider slick-initialized slick-slider"><button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous</button>
                            <div class="slick-list draggable">
                                <div class="slick-track" style="opacity: 1; width: 4280px;">
                                    <div class="service-img-wrap slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 836px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;">
                                        <img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img">
                                    </div>
                                    <div class="service-img-wrap slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 836px; position: relative; left: -856px; top: 0px; z-index: 998; opacity: 0;">
                                        <img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img">
                                    </div>
                                    <div class="service-img-wrap slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 836px; position: relative; left: -1712px; top: 0px; z-index: 998; opacity: 0;">
                                        <img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img">
                                    </div>
                                    <div class="service-img-wrap slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" style="width: 836px; position: relative; left: -2568px; top: 0px; z-index: 998; opacity: 0;">
                                        <img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img">
                                    </div>
                                    <div class="service-img-wrap slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style="width: 836px; position: relative; left: -3424px; top: 0px; z-index: 998; opacity: 0;">
                                        <img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img">
                                    </div>
                                </div>
                            </div>




                            <button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>
                        </div>
                    </div>
                    <div class="slider slider-nav-thumbnails slick-initialized slick-slider">
                        <div class="slick-list draggable">
                            <div class="slick-track" style="opacity: 1; width: 2996px; transform: translate3d(-856px, 0px, 0px);">
                                <div class="slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                                <div class="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabindex="-1" style="width: 194px;"><img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                            </div>
                        </div>




                    </div>
                </div>
                <!-- /Slider -->


                <!-- About Gigs -->
                <div class="service-wrap postLists">
                    <h3>About this {{ $product->name }}</h3>
                    <p>
                        {{ $product->description }}
                    </p>
                </div>
                <!-- /About Gigs -->

                <!-- Product Reviews Section -->
                <section class="product-reviews py-5" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(18px) saturate(180%); -webkit-backdrop-filter: blur(18px) saturate(180%); border-radius: 1rem; box-shadow: 0 8px 28px rgba(0,0,0,0.08); margin: 3rem 0;">
                    <div class="container">
                        <!-- Header -->
                        <div class="review-title sort-search-gigs mb-4">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h3>Reviews ({{ $product->reviews ? $product->reviews->count() : 0 }})</h3>
                                </div>
                                <div class="col-sm-6 text-end">
                                    <a href="javascript:void(0);" class="btn btn-outline-primary btn-lg rounded-pill" data-bs-toggle="modal" data-bs-target="#addReviewModal">
                                        <i class="fas fa-plus me-1"></i> Write a Review
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Average Rating -->
                        <div class="total-rating align-items-center mb-4">
                            <div class="total-reviews text-center bg-white p-4 rounded" style="box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
                                <h6>Customer Reviews & Ratings</h6>
                                <h2>{{ number_format($product->reviews->avg('rating'), 1) }} / 5.0</h2>
                                <div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                    @for ($i = 0; $i < 5; $i++)
                                        @if($i < round($product->reviews->avg('rating')))
                                        <i class="ti ti-star-filled text-warning"></i>
                                        @else
                                        <i class="ti ti-star-filled text-light"></i>
                                        @endif
                                        @endfor
                                </div>
                                <p>Based on {{ $product->reviews->count() }} Reviews</p>
                            </div>
                        </div>

                        <!-- Review List -->
                        <ul class="review-lists home-reviews list-unstyled">
                            @foreach($product->reviews as $review)
                            <li class="mb-4">
                                <div class="review-wrap p-3 rounded" style="background: rgba(255,255,255,0.35); backdrop-filter: blur(12px);">
                                    <div class="review-user-info d-flex align-items-start mb-2">
                                        <div class="review-img me-3">
                                            <img src="{{ $review->user->profile_photo_url ?? asset('assets/img/default-avatar.png') }}" alt="img" class="rounded-circle" style="width:50px; height:50px; object-fit:cover;">
                                        </div>
                                        <div class="reviewer-info">
                                            <h6>{{ $review->user->name }}</h6>
                                            <div class="reviewer-rating mb-1">
                                                <div class="star-rate">
                                                    @for($i = 0; $i < 5; $i++)
                                                        <i class="fa-solid fa-star {{ $i < $review->rating ? 'filled text-warning' : 'text-light' }}"></i>
                                                        @endfor
                                                        <span class="rating-count">{{ $review->rating }}.0</span>
                                                </div>
                                            </div>
                                            <p class="text-muted">{{ $review->created_at->diffForHumans() }}</p>
                                        </div>
                                    </div>
                                    <div class="review-content">
                                        <p>{{ $review->comment }}</p>
                                        <a href="javascript:void(0);" class="reply-btn bg-light p-1 rounded"><i class="feather-corner-up-left"></i> Reply</a>
                                    </div>
                                </div>
                            </li>
                            @endforeach
                        </ul>

                        <div class="text-center mt-3">
                            <a href="#" class="btn btn-dark fs-13">Load More</a>
                        </div>
                    </div>
                </section>

            </div>
            <!-- /Service Details -->

            <!-- Member Details -->
            <div class="col-lg-4 theiaStickySidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">

                <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; top: 0px; left: 1189.5px;">
                    <div class="service-widget postLists">
                        <div class="service-amt p-3 price-lvl price-lvl1 bg-light ">
                            <h3 class="text-grey">
                                <span class="d-block text-grey"> Price </span>
                                ${{ $product->price }}
                            </h3>
                        </div>
                        <!-- Add to Cart Button -->
                        <a href="#" class="btn btn-primary w-100 mb-3" data-bs-toggle="modal" data-bs-target="#addToCartModal{{ $product->id }}">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </a>

                    </div>
                    <div class="service-widget member-widget postLists">
                        <div class="user-details">
                            <div class="user-img users-img">
                                <img src="assets/img/user/user-05.jpg" alt="img">
                            </div>
                            <div class="user-info">
                                <h5><span class="me-2">{{ $product->seller->company_name }}</span> <span class="badge badge-success"><i class="fa-solid fa-circle"></i> Online</span></h5>
                                <p><i class="fa-solid fa-star"></i>5.0 (45 Reviews)</p>
                            </div>
                        </div>
                        <ul class="member-info">
                            <li>
                                From
                                <span>{{ $product->seller->address }}</span>
                            </li>
                        </ul>
                        <div class="about-me new-about">
                            <h6>About Me</h6>
                            <p>Hello, Greetings! My name is {{ $product->seller->company_name }}, and I am an experienced {{ $product->seller->description }}<span class="more-content" style="display: none;">I have over five years experience in digital affiliate marketing &amp; WordPress website development.</span></p>
                            <a href="javascript:void(0);" class="read-more">Read More</a>
                        </div>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#contact_me" class="btn btn-primary mb-0 w-100">Contact Me</a>
                    </div>
                    <div class="resize-sensor" style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                        <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0px; top: 0px; transition: all; width: 450px; height: 3735px;"></div>
                        </div>
                        <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Member Details -->

        </div>

        <!-- Recent Work -->
        <div class="recent-works">
            <div class="row">
                <div class="col-md-12">
                    <div class="title-sec">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h3>Recent Works</h3>
                            </div>
                            <div class="col-md-4">
                                <div class="owl-nav worknav nav-control nav-top"><button type="button" role="presentation" class="owl-prev disabled"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                            </div>
                        </div>
                    </div>
                    <div class="gigs-slider owl-carousel owl-loaded owl-drag">
                        <div class="owl-stage-outer">
                            <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all; width: 1760px;">
                                <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-loaded owl-drag">



                                                <div class="owl-stage-outer">
                                                    <div class="owl-stage" style="transform: translate3d(-876px, 0px, 0px); transition: all; width: 3066px;">
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-07.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item active" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-13.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-07.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-13.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-06.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                                                <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                                            </div>
                                            <div class="card-overlay-badge">
                                                <a href="service.html"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="javascript:void(0);" class="video-icon"><i class="feather-video"></i></a>
                                                <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="buyer-profile.html"><img src="assets/img/user/user-10.jpg" alt="img"></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Video Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Chicago</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">I will do creating and promoting video content to engage audiences</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.2 (65 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="javascript:void(0);" class="share-icon"><i class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 1 day</span>
                                                </div>
                                                <h5>$600</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-loaded owl-drag">



                                                <div class="owl-stage-outer">
                                                    <div class="owl-stage" style="transform: translate3d(-876px, 0px, 0px); transition: all; width: 3066px;">
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-08.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-09.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item active" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-14.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-08.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-09.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-14.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-08.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                                                <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="buyer-profile.html"><img src="assets/img/user/user-06.jpg" alt="img"></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Local SEO</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Moscow</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Optimizing online presence to enhance visibility in local search...</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="javascript:void(0);" class="share-icon"><i class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 2 day</span>
                                                </div>
                                                <h5>$550</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-loaded owl-drag">



                                                <div class="owl-stage-outer">
                                                    <div class="owl-stage" style="transform: translate3d(-876px, 0px, 0px); transition: all; width: 3066px;">
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-10.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-11.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item active" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-15.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-10.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-11.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-15.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-10.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                                                <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="buyer-profile.html"><img src="assets/img/user/user-03.jpg" alt="img"></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Mobile Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Norwich</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Optimizing marketing strategies for mobiles &amp; app based promotions</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="javascript:void(0);" class="share-icon"><i class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 1 day</span>
                                                </div>
                                                <h5>$720</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 416px; margin-right: 24px;">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider owl-loaded owl-drag">



                                                <div class="owl-stage-outer">
                                                    <div class="owl-stage" style="transform: translate3d(-876px, 0px, 0px); transition: all; width: 3066px;">
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-01.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-02.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item active" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-04.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-01.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-02.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-04.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                        <div class="owl-item cloned" style="width: 414px; margin-right: 24px;">
                                                            <div class="slide-images">
                                                                <a href="service-details.html"><img src="assets/img/gigs/gigs-01.jpg" class="img-fluid" alt="img"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                                                <div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div>
                                            </div>
                                            <div class="card-overlay-badge">
                                                <span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="buyer-profile.html"><img src="assets/img/user/user-04.jpg" alt="img"></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Digital Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Indonesia</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Embedded Android &amp; AOSP customizations</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="javascript:void(0);" class="share-icon"><i class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 2 day</span>
                                                </div>
                                                <h5>$900</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-dots disabled"></div>
                    </div>

                </div>
            </div>
        </div>
        <!-- /Recent Work -->

    </div>
</div>

<!-- Add Review Modal -->
<div class="modal fade" id="addReviewModal" tabindex="-1" aria-labelledby="addReviewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
            <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title" id="addReviewModalLabel" style="font-weight: 700;">Leave a Review</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('product.reviews.store', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body">

                    <!-- Star Rating -->
                    <div class="mb-3">
                        <label class="form-label fw-medium">Your Rating <span class="text-primary">*</span></label>
                        <div class="star-rating d-flex gap-1" style="font-size: 1.5rem; cursor: pointer; color: #ffc107;">
                            @for ($i = 1; $i <= 5; $i++)
                                <i class="fa-regular fa-star text-warning" data-value="{{ $i }}"></i>
                                @endfor
                        </div>
                        <input type="hidden" name="rating" id="ratingInput" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Write a Review <span class="text-primary">*</span></label>
                        <textarea name="comment" class="form-control" rows="4" required></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="submit" class="btn btn-success w-50 rounded-pill shadow-sm">
                        <i class="fas fa-paper-plane me-1"></i> Submit Review
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modern Add to Cart Modal -->
<div class="modal fade" id="addToCartModal{{ $product->id }}" tabindex="-1" aria-labelledby="addToCartModalLabel{{ $product->id }}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4">
            <div class="modal-header bg-gradient-primary text-white">
                <h5 class="modal-title" id="addToCartModalLabel{{ $product->id }}">
                    Add "{{ $product->name }}" to Cart
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form action="{{ route('cart.add', $product->id) }}" method="POST">
                @csrf
                <div class="modal-body p-4">
                    <div class="row g-4">
                        <!-- Product Image -->
                        <div class="col-md-5 text-center">
                            <img src="{{ asset('storage/'.$product->image) }}" alt="{{ $product->name }}" class="img-fluid rounded-4 shadow-sm">
                        </div>

                        <!-- Product Info -->
                        <div class="col-md-7 d-flex flex-column justify-content-between">
                            <div>
                                <h4 class="fw-bold">{{ $product->name }}</h4>
                                <p class="text-muted mb-2">{{ $product->description }}</p>

                                <p class="mb-1">
                                    <span class="badge bg-info me-2">{{ $product->category->name ?? 'General' }}</span>
                                    <span class="badge bg-success">{{ $product->seller->company_name ?? 'N/A' }}</span>
                                </p>
                                <p class="mb-2"><strong>Stock:</strong> {{ $product->stock ?? 'Unlimited' }}</p>

                                <p class="fs-5 text-primary fw-bold mb-3">
                                    Price: $<span id="modal-price-{{ $product->id }}">{{ number_format($product->price, 2) }}</span>
                                </p>

                                <!-- Quantity Selector -->
                                <div class="d-flex align-items-center mb-3">
                                    <label class="form-label me-3 mb-0">Quantity:</label>
                                    <input type="number" name="quantity" class="form-control quantity-input w-25" min="1" max="{{ $product->stock ?? 1000 }}" value="1" data-price="{{ $product->price }}">
                                </div>

                                <!-- Total -->
                                <div class="text-end mb-3">
                                    <span class="fw-bold">Total: $<span id="modal-total-{{ $product->id }}">{{ number_format($product->price, 2) }}</span></span>
                                </div>
                            </div>

                            <!-- Modal Buttons -->
                            <div class="d-flex gap-2">
                                <button type="button" class="btn btn-light w-50 rounded-pill shadow-sm" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="submit" class="btn btn-primary w-50 rounded-pill shadow-sm">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const modalId = {
            {
                $product - > id
            }
        };
        const qtyInput = document.querySelector('#addToCartModal' + modalId + ' .quantity-input');
        const totalEl = document.getElementById('modal-total-' + modalId);

        function updateTotal() {
            let qty = parseInt(qtyInput.value) || 1;
            const price = parseFloat(qtyInput.dataset.price);
            totalEl.textContent = (price * qty).toFixed(2);
        }

        qtyInput.addEventListener('input', updateTotal);
        updateTotal(); // initial
    });
</script>

<!-- Star Rating Script -->
<script>
    document.addEventListener("DOMContentLoaded", () => {
        const stars = document.querySelectorAll(".star-rating i");
        const ratingInput = document.getElementById("ratingInput");

        stars.forEach(star => {
            star.addEventListener("click", () => {
                const rating = star.getAttribute("data-value");
                ratingInput.value = rating;

                // Fill stars visually
                stars.forEach(s => {
                    if (s.getAttribute("data-value") <= rating) {
                        s.classList.remove("fa-regular");
                        s.classList.add("fa-solid");
                    } else {
                        s.classList.remove("fa-solid");
                        s.classList.add("fa-regular");
                    }
                });
            });
        });
    });
</script>


@endsection