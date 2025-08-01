@extends('layouts.guest')
@section('content')

<!-- SwiperJS for carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

@php

$categories = \App\Models\Category::all();

@endphp

<style>
    .talent-card {
        background: #fff;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transition: transform 0.4s;
    }

    .talent-img-wrapper {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: rotateY(0);
        transition: transform 0.5s ease-in-out;
    }

    .talent-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-slide:hover .talent-card {
        transform: scale(1.05) rotateY(5deg);
    }
</style>


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
        /* margin-top: -.625em; */
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
        display: inline-block;
        min-width: 50%;
        background: linear-gradient(90deg, #3b3d4a, #3b3d4a);
        box-shadow: 0 .5em 1.2em #011e3461;
        font-size: 14px;
        margin: .3em 0 1.5em;
        padding: .45em 1.5em;
        border-radius: 9em;
        text-decoration: none;
        color: #fff;
        text-shadow: 0 2px 3px #011e3461;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .postLists.cards .post-item.m-card .go:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }

    .card.post-item.m-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }
</style>

<!-- next gen -->
<div class="talent-section-two next-gen-section" style="background: #aac2e1a8;">
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">

                <!-- Category Section -->
                <div class="marketing-section">
                    <div class="marketing-content">
                        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
                            <h2 class="mb-2"><span class="title-bg"></span>Meet the Next Generation of talents<span
                                    class="title-bg2"></span></h2>
                            <p style="color: #319BF9;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
                        </div>
                    </div>
                </div>
                <!-- /Category Section -->

                <!-- Trending Categories -->
                <div class="trend-section">
                    <div class="row align-items-center">
                        <div class="col-sm-10">
                            <h5>Trending Categories of talents</h5>
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
                                                <a href="{{ route('user.talents.category', $cat->slug) }}"><i class="feather-arrow-up-right"></i></a>
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

                <!-- Filter -->
                <div class="filters-section">
                    <ul class="filters-wrap">

                        <!-- Categories -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-list page input"></i> Categories
                                    </a>
                                </div>
                                <div id="categories" class="collapse-body">
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
                        </li>
                        <!-- /Categories -->

                        <!-- Locations -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-map-pin-pin"></i>Locations
                                    </a>
                                </div>
                                <div id="locations" class="collapse-body">
                                    <div class="form-group search-group">
                                        <span class="search-icon"><i class="feather-search"></i></span>
                                        <input type="text" class="form-control" placeholder="Search Locations">
                                    </div>
                                    <ul class="checkbox-list categories-lists">
                                        <li class="active">
                                            <label class="custom_check">
                                                <span class="checked-title">Canada</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Bolivia</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Tunsania</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Indonesia</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">UK</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">UAE</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">USA</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- /Locations -->

                        <!-- Ratings -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-stars"></i>Reviews
                                    </a>
                                </div>
                                <div id="ratings" class="collapse-body">
                                    <ul class="checkbox-list star-rate">
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-4">
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                </span>
                                                <span class="rating-count">(5.0)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-4">
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <span class="rating-count">(4.0)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-4">
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star "></i>
                                                </span>
                                                <span class="rating-count">(3.0)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-4">
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <span class="rating-count">(2.0)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                <span class="ratings ms-4">
                                                    <i class="fa-solid fa-star filled"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <span class="rating-count">(1.0)</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div class="filter-btn">
                                        <a href="javascript:void(0);">Reset</a>
                                        <button class="btn btn-primary">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- /Ratings -->

                    </ul>
                    <!-- /Filter -->

                    <!-- Sort By -->
                    <div class="filters-wrap sort-categories">
                        <div class="collapse-card float-lg-end">
                            <div class="filter-header">
                                <a href="javascript:void(0);" class="sorts-list">
                                    <i class="ti ti-sort-ascending"></i>Sorts by: <span>Recommended</span>
                                </a>
                            </div>
                            <div id="categories2" class="collapse-body" style="display: none;">
                                <div class="form-group search-group">
                                    <span class="search-icon"><i class="feather-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search Category">
                                </div>
                                <ul class="checkbox-list categories-lists">
                                    <li class="active">
                                        <label class="custom_check">
                                            <span class="checked-title"> Featured</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="custom_check">
                                            <span class="checked-title">Popular</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="custom_check">
                                            <span class="checked-title">Latest</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="custom_check">
                                            <span class="checked-title"> Recommended </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Sort By -->

                </div>
                <!-- /Filter -->

            </div>
        </div>
    </div>
    <div class="container">

        <div class="row seller-list postLists cards">
            @foreach($talents as $talent)
            <div class="col-xl-3 col-lg-4 col-md-6 post-card-wrapper">
                <div class="card post-item m-card" data-aos="flip-left">
                    <div class="card-body text-center">
                        <div class="avatar d-inline-block mb-3" style="width: 120px; height: 120px; overflow: hidden;">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img class="img rounded-3 w-100 h-100" style="object-fit: cover;" src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}" alt="img" />
                            </a>
                        </div>

                        <h6 class="mb-1">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                {{ $talent->name }}
                                <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                            </a>
                        </h6>
                        <p>{{ $talent->category->name ?? 'Uncategorized' }}</p>
                        <p class="mb-0 location-text d-inline-flex align-items-center">
                            <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                            Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                        </p>
                        <div class="d-flex gap-2 align-items-center flex-wrap mt-3 mb-3 justify-content-center">
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                {{ $talent->skill }}
                            </a>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                {{ $talent->language }}
                            </a>
                        </div>
                        <a href="{{ route('user.talent.details', $talent->id) }}" class="go">view</a>
                    </div>
                </div>

            </div>
            @endforeach
            
            <div class="col-md-12">

                <!-- Pagination -->
                <div class="pagination" data-aos="fade-up">
                    <ul>
                        <li>
                            <a href="javascript:void(0);" class="previous"><i class="fa-solid fa-chevron-left"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="active">1</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">2</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">3</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">4</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">5</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="next"><i class="fa-solid fa-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
                <!-- /Pagination -->

            </div>
        </div>
    </div>
</div>
<!-- next gen -->

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


@endsection