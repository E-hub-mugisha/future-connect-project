@extends('layouts.guest')
@section('title', $categoryName . 'Talents')
@section('content')

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
        box-shadow: 0 .5em 1.2em #3b3d4a;
        font-size: 14px;
        margin: .3em 0 1.5em;
        padding: .45em 1.5em;
        border-radius: 9em;
        text-decoration: none;
        color: #fff;
        text-shadow: 0 2px 3px #3b3d4a;
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

<div class="container d-md-none" style="margin-top: 4.5rem;">
    <div class="trend-section ">
        <div class="row align-items-center">
            <div class="col-sm-10">
                <h5 data-aos="fade-up"><span class="title-bg"></span>Trending Categories of skilled people<span class="title-bg2"></span></h5>
                <p data-aos="fade-up">Discover inspiring stories, impactful skills, and creative people across Africa</p>
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
                                        <p>{{ optional($cat->talents)->count() ?? 0 }} talents</p>
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

<style>
    .postLists.cards .post-item.m-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        /* background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4); */
        box-shadow: 0 1em 1em #1f2d3d26;
        text-align: center;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }

    .postLists.cards .post-item.m-card .img {
        position: relative;
        /* display: block; */
        /* margin-top: -1.75em; */
        /* width: calc(100% - .85em); */
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

<!-- next gen -->
<div class="popular-section-two d-none d-md-flex">
    <div class="container">
        <div class="section-header-two text-center aos-init aos-animate" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Trending Categories of skilled people<span class="title-bg2"></span></h2>
            <p>Discover inspiring stories, impactful skills, and creative people across Africa</p>
        </div>
        <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
            @foreach($categories as $cat)
            <div class="col d-flex">
                <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                    <span><i class="ti ti-speakerphone"></i></span>
                    <h6 class="mb-1"><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></h6>
                    <p>{{ optional($cat->talents)->count() ?? 0 }} skills</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
<!-- next gen -->

<!-- next gen -->
<div class="talent-section-two next-gen-section">
    <div class="container">

        <!-- Mobile Filter Button -->
        <div class="d-lg-none mb-3 text-center">
            <button class="btn btn-outline-light" data-bs-toggle="offcanvas" data-bs-target="#mobileFilters">
                <i class="ti ti-filter"></i> Filters & Categories
            </button>
        </div>

        <!-- Offcanvas Filters (Mobile) -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileFilters">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <div id="mobileFiltersContainer"></div>
            </div>
        </div>

        <div class="section-header-two what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #ffffff;">
                <span class="title-bg"></span>
                Explore Generation of {{ $categoryName }} skilled people
                <span class="title-bg2"></span>
            </h2>
            <p style="color: #ffffff;">
                Connect with the next wave of skilled people, guiding you with fresh perspectives
            </p>
        </div>

        <div class="row seller-list postLists cards">

            <!-- Filter -->
            <div class="filters-section">
                <div class="listing-tab">
                    <ul class="nav nav-tabs justify-content-center flex-wrap gap-2" id="talentTabs" role="tablist">
                        <li class="nav-item"><a class="nav-link active" style="color:#ffffff;" data-filter="latest" type="button">Latest</a></li>
                        <li class="nav-item"><a class="nav-link" style="color:#ffffff;" data-filter="popular" type="button">Popular</a></li>
                        <li class="nav-item"><a class="nav-link" style="color:#ffffff;" data-filter="featured" type="button">Featured</a></li>
                        <li class="nav-item"><a class="nav-link" style="color:#ffffff;" data-filter="recommended" type="button">Recommended</a></li>
                        <li class="nav-item">
                            <a type="button" class="nav-link" style="color:#ffffff;" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <i class="ti ti-search me-1"></i> Search skills
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Sort By -->
                <div class="filters-wrap sort-categories">
                    <div class="collapse-card float-lg-end">
                        <div class="filter-header">
                            <a href="javascript:void(0);" class="sorts-list">
                                <i class="ti ti-sort-ascending"></i> Sorts by: <span>Categories</span>
                            </a>
                        </div>
                        <div id="categories2" class="collapse-body" style="display:none;">
                            <div class="form-group search-group">
                                <span class="search-icon"><i class="feather-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search Category">
                            </div>
                            <ul class="checkbox-list categories-lists">
                                @foreach($categories as $cat)
                                <li class="active">
                                    <label class="custom_check">
                                        <a href="{{ route('user.talents.category', $cat->slug) }}">
                                            <span class="checked-title">{{ $cat->name }}</span>
                                        </a>
                                    </label>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Filter -->

            <!-- Cards -->

            <div class="row d-none d-md-flex">
                @forelse($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6 post-card-wrapper talent-item" data-category="{{ strtolower($talent->tag ?? 'featured') }}">
                    <div class="card post-item m-card">
                        <div class="card-body text-center">

                            <!-- Image -->
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img
                                    class="img rounded-3"
                                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" style="height: 120px; object-fit: cover; transition: transform 0.3s ease;" />
                            </a>

                            <!-- Name -->
                            <h6 class="mb-1">
                                <a href="{{ route('user.talent.details', $talent->id) }}">
                                    {{ $talent->name }}
                                    <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                                </a>
                            </h6>

                            <!-- Category -->
                            <p>
                                {{ $talent->category->name ?? 'Uncategorized' }}
                            </p>

                            <!-- Location -->


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
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->skill }}
                                        </a>
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->language }}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- View Button -->
                            <div class="text-center d-flex justify-content-center">
                                <a href="{{ route('user.talent.details', $talent->id) }}" class="slide-line-btn">
                                    <i class="feather-arrow-right"></i>View Profile
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                @empty
                <p class="text-center">No skills found.</p>
                @endforelse

            </div>

            <div id="talentsCarousel" class="carousel slide d-md-none w-100" data-bs-ride="carousel">
                <div class="carousel-inner">
                    @forelse($talents as $index => $talent)
                    <div class="carousel-item {{ $index == 0 ? 'active' : '' }} post-card-wrapper talent-item">
                        <div class="card post-item m-card">
                            <div class="card-body text-center">

                                <!-- Image -->
                                <a href="{{ route('user.talent.details', $talent->id) }}">
                                    <img
                                        class="img rounded-3"
                                        src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                        alt="img" style="height: 120px; object-fit: cover; transition: transform 0.3s ease;" />
                                </a>

                                <!-- Name -->
                                <h6 class="mb-1">
                                    <a href="{{ route('user.talent.details', $talent->id) }}">
                                        {{ $talent->name }}
                                        <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                                    </a>
                                </h6>

                                <!-- Category -->
                                <p>
                                    {{ $talent->category->name ?? 'Uncategorized' }}
                                </p>

                                <!-- Location -->


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
                                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                                {{ $talent->skill }}
                                            </a>
                                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                                {{ $talent->language }}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- View Button -->
                                <div class="text-center d-flex justify-content-center">
                                    <a href="{{ route('user.talent.details', $talent->id) }}" class="slide-line-btn">
                                        <i class="feather-arrow-right"></i>View Profile
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    @empty
                    <p class="text-center">No skills found.</p>
                    @endforelse

                    <!-- Controls -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#talentsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#talentsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>

                    <!-- Indicators -->
                    <div class="carousel-indicators mt-2">
                        @foreach($talents as $index => $talent)
                        <button type="button" data-bs-target="#talentsCarousel" data-bs-slide-to="{{ $index }}" class="{{ $index == 0 ? 'active' : '' }}"></button>
                        @endforeach
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- /next gen -->

<!-- /next gen -->

<style>
    /* Glassmorphism Offcanvas */
    #mobileFilters .offcanvas-body,
    #mobileFilters .offcanvas-header {
        background: #0e1618;
        /* dark glass */
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        color: #fff;
    }

    /* Glass border + glow */
    #mobileFilters .offcanvas-content,
    #mobileFilters {
        border-right: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    }

    /* Improve text contrast inside filters */
    #mobileFilters a,
    #mobileFilters span,
    #mobileFilters li,
    #mobileFilters .nav-link {
        color: #fff !important;
    }

    /* Search input style in glass */
    #mobileFilters input.form-control {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: #fff;
    }

    #mobileFilters input::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    #mobileFilters {
        transition: transform 0.35s ease, opacity 0.35s ease;
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const filters = document.querySelector('.filters-section');
        const mobileFilters = document.getElementById('mobileFiltersContainer');
        const sellerList = document.querySelector('.seller-list');
        const offcanvasEl = document.getElementById('mobileFilters');
        const offcanvasInstance = offcanvasEl ? new bootstrap.Offcanvas(offcanvasEl) : null;

        function toggleFilters() {
            if (window.innerWidth < 992) {
                if (filters && mobileFilters && !mobileFilters.contains(filters)) {
                    mobileFilters.appendChild(filters);
                }
            } else {
                // Move filters back to desktop
                if (filters && sellerList && !sellerList.contains(filters)) {
                    sellerList.prepend(filters);
                }

                // Auto close offcanvas when switching to desktop
                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }
            }
        }

        toggleFilters();
        window.addEventListener('resize', toggleFilters);
    });
</script>

@endsection