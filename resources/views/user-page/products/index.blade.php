@extends('layouts.guest')
@section('title', 'Browse Marketplace Products')
@section('content')

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
        margin-bottom: 1.75rem;

    }
</style>

<section class="hero-section">
    <div class="banner-bg-imgs">
        <img src="{{ asset('assets/img/bg/banner-bg-01.png') }}" class="banner-bg-one" alt="img">
        <img src="{{ asset('assets/img/bg/banner-bg-02.png') }}" class="banner-bg-two" alt="img">
        <!-- <img src="{{ asset('assets/img/bg/banner-bg-04.png') }}" class="banner-bg-four" alt="img"> -->
    </div>
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <div class="banner-head">
                        <h1 class="mb-2">Future Connector Shop</h1>
                        <p class="d-inline-flex">Find everything you need from trusted local and global sellers.</p>
                    </div>
                    <div class="banner-form">
                        <form action="#">
                            <div class="banner-search-list">
                                <div class="input-block">
                                    <label>Category</label>
                                    <select class="select select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                        <option data-select2-id="6">Select</option>
                                        <option>Digital Marketing</option>
                                        <option>Writing</option>
                                        <option>Social Media</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-one5-container"><span class="select2-selection__rendered" id="select2-one5-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                                <div class="input-block">
                                    <label>Location</label>
                                    <div class="input-locaion">
                                        <input type="text" class="form-control" placeholder="Miami, USA">
                                        <img src="assets/img/icons/map-pin-heart.svg" alt="Icon">
                                    </div>
                                </div>
                                <div class="input-block border-0">
                                    <label>Keyword</label>
                                    <input type="text" class="form-control" placeholder="Need Graphic Designer">
                                </div>
                            </div>
                            <div class="input-block-btn">
                                <button class="btn btn-lg btn-primary d-inline-flex align-items-center" type="submit">
                                    <i class="ti ti-search"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="popular-search">
                        <h5>Popular Searches : </h5>
                        <ul>
                            <li><a href="service-grid-sidebar.html">Online Mockup</a></li>
                            <li><a href="service-grid-sidebar.html">Carpentering</a></li>
                            <li><a href="service-grid-sidebar.html">Event Organiser</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="banner-img">
                    <!-- <div class="banner-img-right">
                        <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="img-fluid" alt="img">
                    </div> -->
                    <img src="{{ asset('assets/img/bg/banner-small-bg-01.svg') }}" class="banner-small-bg-one" alt="img">
                    <img src="{{ asset('assets/img/bg/banner-small-bg-02.png') }}" class="banner-small-bg-two" alt="img">
                </div>
            </div>
        </div>
    </div>
</section>

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
                                    <div class="card-overlay-badge">
                                        <a href="service.html"><span class="badge bg-warning"><i class="feather-star"></i>{{ $product->stock }}</span></a>
                                        <a href="service.html"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>{{ $product->status }}</span></a>
                                    </div>
                                    <div class="fav-selection">
                                        <a href="javascript:void(0);" class="video-icon"><i class="feather-video"></i></a>
                                        <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                    </div>
                                    <div class="user-thumb">
                                        <a href="buyer-profile.html"><img src="assets/img/user/user-01.jpg" alt="img"></a>
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
                                    <div class="gigs-card-footer">
                                        <div>
                                            <a href="javascript:void(0);" class="share-icon"><i class="feather-share-2"></i></a>
                                            <span class="badge">Delivery in 1 day</span>
                                        </div>
                                        <h5>${{ $product->price }}</h5>
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