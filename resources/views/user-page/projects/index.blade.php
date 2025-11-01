@extends('layouts.guest')
@section('title','Projects')
@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>

<div class="page-content">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <!-- Category Section -->
                <div class="marketing-section postLists">
                    <div class="marketing-content">
                        <h2>Verified Projects Marketplace</h2>
                        <p class="text-black">
                            Discover verified projects and connect with skilled collaborators across industries.
                            Whether you’re a <strong>developer</strong> seeking a designer, a <strong>filmmaker</strong> looking for an editor,
                            or a <strong>creator</strong> with a new idea — our marketplace helps you find the right partners
                            to bring your vision to life.
                        </p>
                    </div>
                </div>

                <!-- /Category Section -->

                <!-- Trending Categories -->
                <!-- <div class="trend-section">
                    <div class="row align-items-center">
                        <div class="col-sm-10">
                            <h5>Trending Categories on Digital Marketing</h5>
                        </div>
                        <div class="col-sm-2 text-sm-end">
                            <div class="owl-nav trend-nav nav-control nav-top"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="trend-items owl-carousel owl-loaded owl-drag">





                                <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-1318px, 0px, 0px); transition: all; width: 4284px;">
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Ecommerce-Seo</a></h6>
                                                    <p>(42 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Promoted Listing</a></h6>
                                                    <p>(24 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Social Ecommerce</a></h6>
                                                    <p>(55 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="jservice-sub-category.html">Promoted Listing</a></h6>
                                                    <p>(24 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Website Promotion</a></h6>
                                                    <p>(80 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Ecommerce-Seo</a></h6>
                                                    <p>(42 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Promoted Listing</a></h6>
                                                    <p>(24 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item active" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Social Ecommerce</a></h6>
                                                    <p>(55 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="jservice-sub-category.html">Promoted Listing</a></h6>
                                                    <p>(24 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Website Promotion</a></h6>
                                                    <p>(80 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Ecommerce-Seo</a></h6>
                                                    <p>(42 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Promoted Listing</a></h6>
                                                    <p>(24 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                            <div class="trend-box">
                                                <div class="trend-info">
                                                    <h6><a href="service-sub-category.html">Social Ecommerce</a></h6>
                                                    <p>(55 Services)</p>
                                                </div>
                                                <a href="service-sub-category.html"><i class="feather-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </div> -->
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
                                        <li class="active">
                                            <label class="custom_check">
                                                <span class="checked-title">Programming &amp; Coding</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Data Science &amp; Analysis</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Databases </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Mobile App Development</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_check">
                                                <span class="checked-title">Email Template Development</span>
                                            </label>
                                        </li>
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

                        <!-- Budget -->
                        <li>
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <i class="ti ti-moneybag"></i>Budget
                                    </a>
                                </div>
                                <div id="budget" class="collapse-body">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter Custom Budget">
                                    </div>
                                    <ul class="checkbox-list">
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget" checked="">
                                                <span class="checkmark"></span><span class="text-dark"> Value :</span> Under $4500
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget">
                                                <span class="checkmark"></span><span class="text-dark"> Mid-range :</span> Under $4500
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget">
                                                <span class="checkmark"></span><span class="text-dark"> High-end :</span> Under $4500
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
                        <!-- /Budget -->

                        <!-- Seller Details -->
                        <li class="more-content" style="display: none;">
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/icons/user-icon.svg" alt="icon" class="me-2">Seller Details
                                    </a>
                                </div>
                                <div id="seller" class="collapse-body">
                                    <ul class="seller-list">
                                        <li>
                                            <a href="javascript:void(0):">Seller Level<span><i class="feather-chevron-right"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0):">Seller Availability<span><i class="feather-chevron-right"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0):">Seller Speaks<span><i class="feather-chevron-right"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0):">Seller Lives in<span><i class="feather-chevron-right"></i></span></a>
                                        </li>
                                    </ul>
                                    <div class="filter-btn">
                                        <a href="javascript:void(0);">Reset</a>
                                        <button class="btn btn-primary">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- /Seller Details -->

                        <!-- Delivery Time -->
                        <li class="more-content" style="display: none;">
                            <div class="collapse-card">
                                <div class="filter-header">
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/icons/time-icon.svg" alt="icon" class="me-2">Delivery Time
                                    </a>
                                </div>
                                <div id="deivery" class="collapse-body">
                                    <ul class="checkbox-list">
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget" checked="">
                                                <span class="checkmark"></span>Enter 24H
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget">
                                                <span class="checkmark"></span>Upto 3 days
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget">
                                                <span class="checkmark"></span>Upto 7 days
                                            </label>
                                        </li>
                                        <li>
                                            <label class="custom_radio">
                                                <input type="radio" name="budget">
                                                <span class="checkmark"></span>Anytime
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
                        <!-- /Delivery Time -->

                        <li class="view-all">
                            <a href="javascript:void(0);" class="show-more"><span><img src="assets/img/icons/add-icon.svg" alt="img"></span><span>Show More</span></a>
                        </li>
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
                                            <span class="checked-title">Price: Low to High </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="custom_check">
                                            <span class="checked-title"> Price: High to Low </span>
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

        <!-- Service -->
        <div class="service-gigs">
            <div class="row">

                <div class="col-lg-12">
                    <div class="row">
                        @foreach( $projects as $project )
                        <!-- Service List -->
                        <div class="col-lg-4 col-md-6">
                            <div class="gigs-grid postLists">
                                <div class="gigs-img mb-3">
                                    <div class="card-overlay-badge">
                                        <a href="{{ route('user.projects.show',$project->id) }}"><span class="badge bg-warning"><i class="feather-star"></i>{{ $project->verified ? 'Verified' : 'Pending' }}</span></a>
                                        <a href="{{ route('user.projects.show',$project->id) }}"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>{{ $project->status ?? 'Open' }}</span></a>
                                    </div>
                                </div>
                                <div class="gigs-content">
                                    <div class="gigs-info mt-4">
                                        <a href="{{ route('user.projects.show',$project->id) }}" class="badge bg-primary-light">{{ $project->category ?? 'General' }}</a>
                                        <p><i class="ti ti-map-pin-check"></i>{{ $project->location ?? 'Remote' }}</p>
                                    </div>
                                    <div class="gigs-title">
                                        <h3>
                                            <a href="{{ route('user.projects.show',$project->id) }}">{{ $project->title }}</a>
                                        </h3>
                                    </div>
                                    <div class="star-rate">
                                        <span>{{ Str::limit($project->description, 120) }}</span>
                                    </div>
                                    <div class="gigs-card-footer">
                                        <div>
                                            <span class="badge">{{ $project->location ?? 'Remote' }}</span>
                                        </div>
                                        <a href="{{ route('user.projects.show',$project->id) }}" class="btn btn-primary float-end rounded-pill">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Service List -->
                        @endforeach

                        <div class="col-md-12">

                            <!-- Pagination -->
                            <div class="pagination">
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
        </div>
        <!-- /Service -->

    </div>
</div>

@endsection