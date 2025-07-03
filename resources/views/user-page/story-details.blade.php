@extends('layouts.guest')
@section('content')
<!-- Breadcrumb -->
<div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
    <div class="breadcrumb-img">
        <div class="breadcrumb-left">
            <img src="assets/img/bg/banner-bg-03.png" alt="img">
        </div>
    </div>
    <div class="container">
        <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="talents.html">Stories</a>
                </li>
            </ol>
        </nav>
        <h2 class="breadcrumb-title">
            {{ $story->title }}
        </h2>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Content -->
<div class="page-content content">
    <div class="container">
        <div class="row">

            <!-- Service Details -->
            <div class="col-lg-8">
                <!-- Talent Profile Header -->
                <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info text-start pt-0 bg-white">
                    <a role="button" tabIndex="0" class="badge bg-light mb-4 text-dark">
                        {{ $story->category->name }}
                    </a>
                    <h2 class="breadcrumb-title">
                        {{ $story->title }}
                    </h2>
                    <ul class="info-links">
                        <li>
                            <i class="ti ti-star-filled text-warning"></i>5.0 (45 Supporters)
                        </li>
                        <li>
                            <i class="ti ti-user"></i>Open to Collaborations
                        </li>
                        <li>
                            <i class="ti ti-calendar-due"></i>Posted on:
                            {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}
                        </li>
                        <li class="border-0">
                            <div class="tranlator d-flex align-items-center">
                                @if($story->status == 'published')
                                    <span class="badge bg-success"></span>
                                    <i class="ti ti-heart"></i>
                                    Published
                            </div>
                        @elseif($story->status == 'draft')
                            <span class="badge bg-warning"></span>
                            <i class="feather-star"></i> Draft
                            </span>
                            @endif
                </div>
                </li>
                </ul>
            </div>
            <!-- /Talent Profile Header -->


            <!-- Slider -->
            <div class="slider-card service-slider-card">
                <div class="slider service-slider">
                    <div class="service-img-wrap">
                        <img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img">
                    </div>
                    <div class="service-img-wrap">
                        <img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img">
                    </div>
                    <div class="service-img-wrap">
                        <img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img">
                    </div>
                    <div class="service-img-wrap">
                        <img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img">
                    </div>
                    <div class="service-img-wrap">
                        <img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img">
                    </div>
                </div>
                <div class="slider slider-nav-thumbnails">
                    <div><img src="{{ asset('assets/img/service/service-slide-01.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                    <div><img src="{{ asset('assets/img/service/service-slide-02.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                    <div><img src="{{ asset('assets/img/service/service-slide-03.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                    <div><img src="{{ asset('assets/img/service/service-slide-04.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                    <div><img src="{{ asset('assets/img/service/service-slide-05.jpg') }}" class="img-fluid" alt="Slider Img"></div>
                </div>
            </div>
            <!-- /Slider -->

            <div class="row gx-3 row-gap-3 mb-4 statistics">
                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                    <div class="buy-box">
                        <i class="ti ti-photo-star text-secondary"></i>
                        <p>Total Stories</p>
                        <h6>18</h6>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                    <div class="buy-box">
                        <i class="ti ti-heart text-purple"></i>
                        <p>Total Likes</p>
                        <h6>320</h6>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                    <div class="buy-box">
                        <i class="ti ti-message-chatbot text-indigo"></i>
                        <p>Feedbacks</p>
                        <h6>25</h6>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                    <div class="buy-box">
                        <i class="ti ti-eye text-teal"></i>
                        <p>Profile Views</p>
                        <h6>1,100</h6>
                    </div>
                </div>
            </div>


            <!-- /TAB Services -->
            <div class="listing-tab">
                <div class="listing-slider">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a role="button" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
                                data-bs-target="#about_me" aria-selected="false" role="tab" tabindex="-1">
                                Description
                            </a>
                        </li>
                        <li>
                            <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab" data-bs-target="#review"
                                aria-selected="false" role="tab" tabindex="-1">
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="tab-content">

                <div class="tab-pane fade show active" id="about_me" role="tabpanel">
                    <!-- About Gigs -->
                    <div class="service-wrap">
                        <h3>{{ $story->title }}</h3>
                        <p>{{ $story->description }}</p>
                    </div>
                    <!-- /About Gigs -->
                </div>
                <div class="tab-pane fade " id="review" role="tabpanel">
                    <!-- Review Lists -->
                    <div class="review-widget">
                        <div class="review-title sort-search-gigs">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h3>Reviews (45)</h3>
                                </div>
                                <div class="col-sm-6">
                                    <div class="filters-wrap sort-categories justify-content-end">
                                        <div class="collapse-card float-lg-end">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0" class="sorts-list">
                                                    Most Recent
                                                </a>
                                            </div>
                                            <div id="categories" class="collapse-body" style="display: none;">
                                                <div class="form-group search-group">
                                                    <span class="search-icon"><i class="feather-search"></i></span>
                                                    <input type="text" class="form-control"
                                                        placeholder="Search Category">
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
                                        <div class="progress-bar bg-warning five-star" role="progressbar"
                                            aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>247</p>
                                </div>

                                <!-- Progress 2  -->
                                <div class="progress-lvl mb-2">
                                    <h6>4 Star Ratings</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar"
                                            aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>145</p>
                                </div>

                                <!-- Progress 3 -->
                                <div class="progress-lvl mb-2">
                                    <h6>3 Star Ratings</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar"
                                            aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>600</p>
                                </div>

                                <!-- Progress 4 -->
                                <div class="progress-lvl mb-2">
                                    <h6>2 Star Ratings</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar"
                                            aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>560</p>
                                </div>

                                <!-- Progress 5 -->
                                <div class="progress-lvl">
                                    <h6>1 Star Ratings</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar"
                                            aria-label="Success example" style="width: 25%" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>400</p>
                                </div>
                            </div>
                            <div class="total-reviews text-center bg-white">
                                <h6> Customer Reviews & Ratings </h6>
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
                            @foreach($comments as $comment)
                                <li>
                                    <div class="review-wrap">
                                        <div class="review-user-info">
                                            <div class="review-img">
                                                <img src="{{ asset('assets/img/user/profile.jpg') }}"
                                                    alt="img" />
                                            </div>
                                            <div class="reviewer-info">
                                                <div class="reviewer-loc">
                                                    <h6><a role="button" tabindex="0">{{ $comments->name }}</a>
                                                    </h6>
                                                </div>
                                                <div class="reviewer-rating">
                                                    <div class="star-rate">
                                                        <span class="ratings">
                                                            <i class="fa-solid fa-star filled"></i>
                                                        </span>
                                                        <span class="rating-count">5.0</span>
                                                    </div>
                                                </div>
                                                <div class="reviewer-time">
                                                    <p>{{ \Carbon\Carbon::parse($comment->created_at)->diffForHumans() }}
                                                    </p>
                                                    <p>Excellent service!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-content">
                                            <p>
                                                {{ $comment->comment }}
                                            </p>
                                            <a role="button" tabindex="0" class="reply-btn bg-light">
                                                <i class="feather-corner-up-left"></i> Reply
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            @endforeach

                        </ul>
                        <div class="text-center dark-btn">
                            <a href="faq.html" class="btn btn-dark text-center fs-13"> Load More </a>
                        </div>
                    </div>
                    <!-- /Review Lists -->

                    <!-- Review Tags -->
                    <div class="login-card">
                        <div class="login-heading text-start mb-4">
                            <h5>Leave a Review</h5>
                        </div>
                        <div class="form-wrap form-focus">
                            <label class="mb-1 fw-medium text-dark mb-1">Your Rating <span class="text-primary">*</span>
                            </label>
                            <div class="icon d-flex gap-1">
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-warning"></i>
                                <i class="ti ti-star-filled text-light"></i>
                            </div>
                        </div>
                        <form action="{{ route('comments.store') }}" method="POST">
                            @csrf
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="form-wrap form-focus">
                                        <label class="mb-1 fw-medium text-dark">Name <span
                                                class="text-primary">*</span></label>
                                        <input type="text" name="name" class="form-control"
                                            value="{{ old('name') }}" required />
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-wrap form-focus">
                                        <label class="mb-1 fw-medium text-dark">Email <span
                                                class="text-primary">*</span></label>
                                        <input type="email" name="email" class="form-control"
                                            value="{{ old('email') }}" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-wrap form-focus">
                                        <label class="mb-1 fw-medium text-dark">Write a comment <span
                                                class="text-primary">*</span></label>
                                        <textarea name="message" class="form-control text-area"
                                            required>{{ old('message') }}</textarea>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" tabindex="0" class="btn btn-primary member-btn">
                                Submit a comment
                            </button>
                        </form>

                    </div>
                    <!-- /Review Tags -->
                </div>
            </div>
        </div>
        <!-- /Service Details -->

        <!-- Talent Profile Sidebar -->
        <div class="col-lg-4 theiaStickySidebar">

            <div class="service-widget">
                <div class="service-amt p-3 price-lvl bg-dark">
                    <h3 class="">
                        <span class="d-block">Support Amount</span>
                        $25
                    </h3>
                </div>

                <div class="input-block form-wrap form-focus">
                    <label class="mb-1 fw-medium text-dark">Choose Amount <span class="text-primary">*</span></label>
                    <select class="select select2-hidden-accessible" data-select2-id="1" tabindex="-1"
                        aria-hidden="true">
                        <option data-select2-id="3" class="text-dark">$5</option>
                        <option>$10</option>
                        <option>$25</option>
                        <option>$50</option>
                        <option>$100</option>
                    </select>
                </div>

                <div class="service-widget service-select-widget">
                    <h5 class="mb-3">Support Options</h5>
                    <div class="service-select d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <label class="custom_radio">
                                <input type="radio" name="support_option" checked="">
                                <span class="checkmark"></span>
                                <span class="m-0 service-head-text">One-Time Support</span>
                            </label>
                        </div>
                    </div>
                    <div class="service-select d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <label class="custom_radio">
                                <input type="radio" name="support_option">
                                <span class="checkmark"></span>
                                <span class="m-0 service-head-text">Monthly Patron</span>
                            </label>
                        </div>
                    </div>
                </div>

                <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
                    class="btn btn-primary w-100 mb-0">
                    <i class="feather-heart"></i> Support This Talent
                </a>
            </div>

            <div class="service-widget member-widget">
                <div class="user-details">
                    <div class="user-img users-img">
                        <img src="assets/img/user/profile.jpg" alt="img">
                    </div>
                    <div class="user-info">
                        <h5><span class="me-2">Adrian Revolt</span> <span class="badge badge-success"><i
                                    class="fa-solid fa-circle"></i> Online</span></h5>
                        <p><i class="fa-solid fa-star"></i> 5.0 (45 Reviews)</p>
                    </div>
                </div>

                <div class="about-me new-about">
                    <h6>{{ $story->talent->name }}</h6>
                    <p>Hello, I'm Adrian, a passionate digital storyteller and performer blending visual art
                        and technology.<span class="more-content"> I create immersive experiences that
                            inspire and uplift communities.</span></p>
                    <a role="button" tabIndex="0" class="read-more">Read More</a>
                </div>

                <div class="member-info member-info-new">
                    <div class="member-list d-flex align-items-center gap mb-3">
                        <i class="ti ti-music"></i>
                        <h6 class="mb-0">
                            Talent Type
                            <span class="pt-2"> {{ $story->talent->category->name }}</span>
                        </h6>
                    </div>
                    <div class="member-list d-flex align-items-center gap mb-3">
                        <i class="ti ti-world"></i>
                        <h6 class="mb-0">
                            Based In
                            <span class="pt-2"> {{ $story->talent->address }}</span>
                        </h6>
                    </div>
                    <div class="member-list d-flex align-items-center gap mb-3">
                        <i class="ti ti-calendar-event"></i>
                        <h6 class="mb-0">
                            Posted:
                            <span class="pt-2">
                                {{ \Carbon\Carbon::parse($story->created_at)->format('M d, Y') }}</span>
                        </h6>
                    </div>
                    <div class="member-list d-flex align-items-center gap">
                        <i class="ti ti-language"></i>
                        <h6 class="mb-0">
                            Tags
                            @if($story->tags)
                                <span
                                    class="pt-2">+{{ count(explode(',', $story->tags)) }}</span>
                            @endif
                        </h6>
                    </div>
                </div>

                <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#contact_talent"
                    class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
            </div>

            <div class="service-widget">
                <h5 class="">Share Talent Profile</h5>
                <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                    <ul>
                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-google"></i></a></li>
                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- /Talent Profile Sidebar -->


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
                            <div class="owl-nav worknav nav-control nav-top"></div>
                        </div>
                    </div>
                </div>
                <div class="gigs-slider owl-carousel">
                    @forelse($relatedStories as $related)
                        <div class="gigs-grid">
                            <div class="gigs-img">
                                <div class="img-slider">
                                    <div class="slide-images">
                                        <a
                                            href="{{ route('story.details', $related->slug) }}">
                                            <img src="{{ asset($related->media) }}" class="img-fluid"
                                                alt="{{ $related->title }}">
                                        </a>
                                    </div>
                                </div>

                                <div class="card-overlay-badge">
                                    <span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span>
                                </div>

                                <div class="fav-selection">
                                    <a role="button" tabindex="0" class="video-icon"><i class="feather-video"></i></a>
                                    <a role="button" tabindex="0" class="fav-icon"><i class="feather-heart"></i></a>
                                </div>

                                <div class="user-thumb">
                                    <img src="{{ asset('assets/img/user/user-10.jpg') }}"
                                        alt="img">
                                </div>
                            </div>

                            <div class="gigs-content">
                                <div class="gigs-info">
                                    <span class="badge bg-primary-light">
                                        {{ $related->category->name ?? 'Uncategorized' }}
                                    </span>
                                    <p><i
                                            class="ti ti-map-pin-check"></i>{{ $related->location ?? 'Unknown' }}
                                    </p>
                                </div>

                                <div class="gigs-title">
                                    <h3>
                                        <a
                                            href="{{ route('story.details', $related->slug) }}">
                                            {{ Str::limit($related->title, 60) }}
                                        </a>
                                    </h3>
                                </div>

                                <div class="star-rate">
                                    <span><i class="fa-solid fa-star"></i> 4.2 (65 Reviews)</span>
                                </div>

                                <div class="gigs-card-footer">
                                    <div>
                                        <a role="button" tabindex="0" class="share-icon"><i
                                                class="feather-share-2"></i></a>
                                        <span class="badge">Published
                                            {{ \Carbon\Carbon::parse($related->created_at)->diffForHumans() }}</span>
                                    </div>
                                    <h5>${{ $related->price ?? 'N/A' }}</h5>
                                </div>
                            </div>
                        </div>
                    @empty
                        <p>No related stories found.</p>
                    @endforelse

                </div>

            </div>
        </div>
    </div>
    <!-- /Recent Work -->

</div>
<!-- /Content -->
@endsection
