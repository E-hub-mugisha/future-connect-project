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

                <!-- Review Lists -->
                <div class="review-widget postLists">
                    <div class="review-title sort-search-gigs">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h3>Reviews (45)</h3>
                            </div>
                            <div class="col-sm-6">
                                <div class="filters-wrap sort-categories justify-content-end">
                                    <div class="collapse-card float-lg-end">
                                        <div class="filter-header">
                                            <a href="javascript:void(0);" class="sorts-list">
                                                Most Recent
                                            </a>
                                        </div>
                                        <div id="categories" class="collapse-body" style="display: none;">
                                            <div class="form-group search-group">
                                                <span class="search-icon"><i class="feather-search"></i></span>
                                                <input type="text" class="form-control" placeholder="Search Category">
                                            </div>
                                            <ul class="checkbox-list categories-lists">
                                                <li class="active">
                                                    <label class="custom_check">
                                                        <span class="checked-title"> Recent</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="custom_check">
                                                        <span class="checked-title">Oldest </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Total Ratings -->
                    <div class="total-rating align-items-center">
                        <div class="total-review">
                            <!-- Progress 1 -->
                            <div class="progress-lvl mb-2">
                                <h6>5 Star Ratings</h6>
                                <div class="progress">
                                    <div class="progress-bar bg-warning five-star" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>247</p>
                            </div>

                            <!-- Progress 2 -->
                            <div class="progress-lvl mb-2">
                                <h6>4 Star Ratings</h6>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>145</p>
                            </div>

                            <!-- Progress 3 -->
                            <div class="progress-lvl mb-2">
                                <h6>3 Star Ratings</h6>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>600</p>
                            </div>

                            <!-- Progress 4 -->
                            <div class="progress-lvl mb-2">
                                <h6>2 Star Ratings</h6>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>560</p>
                            </div>

                            <!-- Progress 5 -->
                            <div class="progress-lvl">
                                <h6>1 Star Ratings</h6>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p>400</p>
                            </div>
                        </div>
                        <div class="total-reviews text-center bg-white">
                            <h6> Customer Reviews &amp; Ratings </h6>
                            <h2> 4.9 / 5.0 </h2>
                            <div class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                            </div>
                            <p class="text-center">Based On 2,459 Reviews</p>
                        </div>
                    </div>
                    <!-- Total Ratings -->

                    <ul class="review-lists home-reviews">
                        <li>
                            <div class="review-wrap">
                                <div class="review-user-info">
                                    <div class="review-img">
                                        <img src="assets/img/user/user-01.jpg" alt="img">
                                    </div>
                                    <div class="reviewer-info">
                                        <div class="reviewer-loc">
                                            <h6><a href="javascript:void(0);">kadajsalamander</a></h6>
                                        </div>
                                        <div class="reviewer-rating">
                                            <div class="star-rate">
                                                <span class="ratings">
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">5.0 </span>
                                            </div>
                                        </div>
                                        <div class="reviewer-time">
                                            <p>1 Months ago</p>
                                            <p> Excellent service! </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-content">
                                    <p>I recently hired a him to help me with a project and I must say, I am extremely impressed with their work. From start to finish, the freelancer was professional, efficient, and a pleasure to work with.</p>
                                    <a href="javascript:void(0);" class="reply-btn bg-light"><i class="feather-corner-up-left"></i>Reply</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="review-wrap">
                                <div class="review-user-info">
                                    <div class="review-img">
                                        <img src="assets/img/user/user-01.jpg" alt="img">
                                    </div>
                                    <div class="reviewer-info">
                                        <div class="reviewer-loc">
                                            <h6><a href="javascript:void(0);">kadajsalamander</a></h6>
                                        </div>
                                        <div class="reviewer-rating">
                                            <div class="star-rate">
                                                <span class="ratings">
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">5.0 </span>
                                            </div>
                                        </div>
                                        <div class="reviewer-time">
                                            <p>1 Months ago</p>
                                            <p> Excellent service! </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-content">
                                    <p>I recently hired a him to help me with a project and I must say, I am extremely impressed with their work. From start to finish, the freelancer was professional, efficient, and a pleasure to work with.</p>
                                    <a href="javascript:void(0);" class="reply-btn bg-light"><i class="feather-corner-up-left"></i>Reply</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="review-wrap">
                                <div class="review-user-info">
                                    <div class="review-img">
                                        <img src="assets/img/user/user-01.jpg" alt="img">
                                    </div>
                                    <div class="reviewer-info">
                                        <div class="reviewer-loc">
                                            <h6><a href="javascript:void(0);">kadajsalamander</a></h6>
                                        </div>
                                        <div class="reviewer-rating">
                                            <div class="star-rate">
                                                <span class="ratings">
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">5.0 </span>
                                            </div>
                                        </div>
                                        <div class="reviewer-time">
                                            <p>1 Months ago</p>
                                            <p> Excellent service! </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-content">
                                    <p>I recently hired a him to help me with a project and I must say, I am extremely impressed with their work. From start to finish, the freelancer was professional, efficient, and a pleasure to work with.</p>
                                    <a href="javascript:void(0);" class="reply-btn bg-light"><i class="feather-corner-up-left"></i>Reply</a>
                                </div>
                            </div>
                        </li>
                        <li class="border-0">
                            <div class="review-wrap">
                                <div class="review-user-info">
                                    <div class="review-img">
                                        <img src="assets/img/user/user-01.jpg" alt="img">
                                    </div>
                                    <div class="reviewer-info">
                                        <div class="reviewer-loc">
                                            <h6><a href="javascript:void(0);">kadajsalamander</a></h6>
                                        </div>
                                        <div class="reviewer-rating">
                                            <div class="star-rate">
                                                <span class="ratings">
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">5.0 </span>
                                            </div>
                                        </div>
                                        <div class="reviewer-time">
                                            <p>1 Months ago</p>
                                            <p> Excellent service! </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-content">
                                    <p>I recently hired a him to help me with a project and I must say, I am extremely impressed with their work. From start to finish, the freelancer was professional, efficient, and a pleasure to work with.</p>
                                    <a href="javascript:void(0);" class="reply-btn bg-light"><i class="feather-corner-up-left"></i>Reply</a>
                                </div>
                            </div>
                        </li>
                        <li class="review-active">
                            <div class="review-wrap">
                                <div class="review-user-info">
                                    <div class="review-img">
                                        <img src="assets/img/user/user-01.jpg" alt="img">
                                    </div>
                                    <div class="reviewer-info">
                                        <div class="reviewer-loc">
                                            <h6><a href="javascript:void(0);">kadajsalamander</a></h6>
                                        </div>
                                        <div class="reviewer-rating">
                                            <div class="star-rate">
                                                <span class="ratings">
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">5.0 </span>
                                            </div>
                                        </div>
                                        <div class="reviewer-time">
                                            <p>1 Months ago</p>
                                            <p> Excellent service! </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-content">
                                    <p>I recently hired a him to help me with a project and I must say, I am extremely impressed with their work. From start to finish, the freelancer was professional, efficient, and a pleasure to work with.</p>
                                    <a href="javascript:void(0);" class="reply-btn bg-light"><i class="feather-corner-up-left"></i>Reply</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="text-center dark-btn">
                        <a href="faq.html" class="btn btn-dark text-center fs-13"> Load More </a>
                    </div>
                </div>
                <!-- /Review Lists -->

                <!-- Review Tags -->
                <div class="login-card postLists">
                    <div class="login-heading text-start mb-4">
                        <h5>Leave a Review</h5>
                    </div>
                    <div class="form-wrap form-focus">
                        <label class="mb-1 fw-medium text-dark mb-1">Your Rating <span class="text-primary">*</span> </label>
                        <div class="icon d-flex gap-1">
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-warning"></i>
                            <i class="ti ti-star-filled text-light"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark">Name <span class="text-primary">*</span> </label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark"> Email <span class="text-primary">*</span> </label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-wrap form-focus">
                                <label class="mb-1 fw-medium text-dark"> Write a Review <span class="text-primary">*</span> </label>
                                <textarea class="form-control text-area"></textarea>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary member-btn"> Submit a Review </a>
                </div>
                <!-- /Review Tags -->

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
    const modalId = {{ $product->id }};
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


@endsection