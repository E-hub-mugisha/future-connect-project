@extends('layouts.guest')
@section('title', 'Explore our Marketplace')
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
        color: #0d6efd;
        font-weight: 500;
        padding: 0.6rem 1.5rem;
        transition: all 0.3s ease;
        border: 2px solid #0d6efd;
    }

    .nav-pills .nav-link.active {
        background-color: #0d6efd;
        color: #fff;
        box-shadow: 0 0 10px rgba(13, 110, 253, 0.6);
    }

    .nav-pills .nav-link:not(.active):hover {
        background-color: rgba(255, 255, 255, 0.1);
    }


    .hero-tab {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
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
        border-radius: 50px;
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
        background: #d4e6f526;
        backdrop-filter: blur(15px) saturate(180%);
    }
</style>

<section class="hero-section">
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <div class="banner-head">
                        <h1 class="mb-2">Explore our marketplace</h1>
                        <p class="d-inline-flex">Find everything you need from trusted local and global sellers.</p>
                    </div>
                    <div class="banner-form">
                        <!-- Tabs Navigation -->
                        <ul class="nav nav-pills mb-3" id="heroTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="marketplace-tab" data-bs-toggle="pill" data-bs-target="#marketplace" type="button" role="tab">Explore Marketplace</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="opportunities-tab" data-bs-toggle="pill" data-bs-target="#seller" type="button" role="tab">Became a seller</button>
                            </li>
                        </ul>
                        <!-- Tabs Content -->
                        <div class="tab-content" id="heroTabsContent">
                            <!-- Skills Marketplace -->
                            <div class="tab-pane hero-tab fade show active postLists" id="marketplace" role="tabpanel">
                                <h4 class="text-black">Explore our marketplace</h4>
                                <form action="#">
                                    <div class="banner-search-list">
                                        <div class="input-block border-0">
                                            <input type="text" class="form-control" placeholder="Eg: Smartphone X200, Wireless Headphones, Smartwatch Pro">
                                        </div>
                                    </div>
                                    <div class="input-block-btn">
                                        <button class="btn btn-lg btn-primary d-inline-flex align-items-center rounded-pill" type="submit">
                                            <i class="ti ti-search"></i> Search Products
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <!-- seller Center -->
                            <div class="tab-pane hero-tab fade postLists" id="seller" role="tabpanel">
                                <h4 class="text-black">Unlock New Opportunities</h4>
                                <p class="text-black">
                                    Join the Future Connect Shop and start selling products that empower our members.
                                </p>
                                <a data-bs-toggle="modal" data-bs-target="#applySellerModal" class="btn btn-outline-primary rounded-pill">Apply as Seller</a>
                            </div>
                        </div>
                    </div>
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