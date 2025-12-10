@extends('layouts.guest')
@section('title', 'Networking Hub – Connect with Talents & Opportunities')
@section('content')

@php

$categories = \App\Models\Category::all();

@endphp

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

<section class="hero-section">
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <div class="banner-head">
                        <h1 class="mb-2">Networking Hub – Connect with Talents & Opportunities</h1>
                        <p class="d-inline-flex">A large number of individuals use us to transform their thoughts into the real world and connect with like-minded professionals.</p>
                    </div>
                    <a href="#" class="btn btn-lg btn-primary rounded-pill mb-3 d-inline-flex align-items-center">
                        Explore Talents
                    </a>
                    <div class="popular-search">
                        <h5>Popular Searches : </h5>
                        <ul>
                            @foreach($categories as $cat)
                            <li><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="banner-img">
                    <div class="banner-img-right">
                        <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="img-fluid" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-us-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="row me-4">
                    <div class="col-sm-6">
                        <div class="about-inner-img">
                            <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="img-fluid" alt="img">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="about-inner-img">
                                    <img src="{{ asset('assets/img/aboutus/about-us-02.jpg') }}" class="img-fluid" alt="img">
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="about-inner-img">
                                    <img src="{{ asset('assets/img/aboutus/about-us-03.jpg') }}" class="img-fluid" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-us-info">
                    <div class="about-us-head">
                        <h6>About the Networking Hub</h6>
                        <h2>The <strong>Networking Hub</strong> gateway to meaningful professional connections.</h2>
                        <p>
                            your gateway to meaningful professional connections.
                            Whether you are a talent seeking opportunities, a project owner looking for collaborators, or an entrepreneur looking to expand your network, this hub connects you with the right people.
                        </p>
                        <h5>Our Mission</h5>
                        <p>At Future Connect, our mission is to empower individuals and businesses by facilitating easy access to a diverse range of high-quality services. We believe in creating a collaborative and inclusive marketplace that fosters growth,
                            creativity, and mutual success.
                        </p>
                    </div>
                    <div class="about-features">
                        <ul class="list-one">
                            <li><span><img src="{{ asset('assets/img/icons/target-arrow-icon.svg') }}" alt="img"></span>Diverse Network of Professionals</li>
                            <li><span><img src="{{ asset('assets/img/icons/target-arrow-icon.svg') }}" alt="img"></span>Trust and Transparency</li>
                        </ul>
                        <ul class="list-two">
                            <li><span><img src="{{ asset('assets/img/icons/target-arrow-icon.svg') }}" alt="img"></span>User Friendly Platform</li>
                            <li><span><img src="{{ asset('assets/img/icons/target-arrow-icon.svg') }}" alt="img"></span>Innovation In Technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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

<!-- next gen -->
<div class="talent-section-two next-gen-section">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>verified talents ready for Connection<span
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
                            <a href="{{ route('talent.profile.show',$talent->id) }}">
                                <img
                                    class="img rounded-3"
                                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" style="height: 120px; object-fit: cover; transition: transform 0.3s ease;" />
                            </a>

                            <!-- Name -->
                            <h6 class="mb-1">
                                <a href="{{ route('talent.profile.show',$talent->id) }}">
                                    {{ $talent->name }}
                                    <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                                </a>
                            </h6>

                            <!-- Category -->
                            <p>{{ $talent->category->name ?? 'Uncategorized' }}</p>

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
                                        <a href="{{ route('talent.profile.show',$talent->id) }}" class="badge bg-light">
                                            {{ $talent->skill }}
                                        </a>
                                        <a href="{{ route('talent.profile.show',$talent->id) }}" class="badge bg-light">
                                            {{ $talent->language }}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- View Button -->

                            <div class="text-center d-flex justify-content-center">
                                <a href="{{ route('talent.profile.show', $talent->id) }}" class="slide-line-btn">
                                    <i class="feather-arrow-right"></i>See Profile
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

<section class="popular-section expert-section">
    <div class="popular-img">
        <div class="popular-img-left">
            <img src="assets/img/bg/banner-bg-04.png" alt="Shape">
        </div>
        <div class="popular-img-right">
            <img src="assets/img/bg/shape-08.png" alt="Shape">
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="expert-header">
                    <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                        <h2><span>Key</span> Benefits</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="section-header aos-init aos-animate" data-aos="fade-up">
                    <h6 class="fw-medium text-white">Find professionals across various fields and expand your network effortlessly.</h6>
                </div>
            </div>
        </div>
        <div class="expert-wrapper">
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-4 col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                    <div class="expert-item">
                        <div class="expert-icon">
                            <img src="assets/img/icons/flag-icon.svg" alt="img">
                        </div>
                        <div class="expert-info">
                            <h5>Collaborate on Projects</h5>
                            <p>Work together with talented individuals to bring your ideas to life.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                    <div class="expert-item">
                        <div class="expert-icon">
                            <img src="assets/img/icons/expert-icon.svg" alt="img">
                        </div>
                        <div class="expert-info">
                            <h5>Connect with Talents</h5>
                            <p>Find professionals across various fields and expand your network effortlessly.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                    <div class="expert-item">
                        <div class="expert-icon">
                            <img src="assets/img/icons/users-icon.svg" alt="img">
                        </div>
                        <div class="expert-info">
                            <h5>Attend Networking Events</h5>
                            <p>Discover and participate in events designed to foster professional relationships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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