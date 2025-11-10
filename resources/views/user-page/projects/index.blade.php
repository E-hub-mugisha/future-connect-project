@extends('layouts.guest')
@section('title', 'Ongoing Projects')
@section('content')
<!-- Service -->

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
                        <h1 class="mb-2">Get inspired with projects & Opportunities</h1>
                        <p class="d-inline-flex">Discover the latest initiatives, programs, and collaborations that drive impact.</< /p>
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

<div class="popular-section-two">
    <div class="container">
        <div class="section-header-two text-center aos-init aos-animate" data-aos="fade-up">
            <h2 class="mb-2"><span class="title-bg"></span>Popular Categories<span class="title-bg2"></span></h2>
            <p>Unlock a world of opportunities and take control of your future</p>
        </div>
        <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
            @foreach( $categories as $category )
            <div class="col d-flex">
                <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                    <span><i class="ti ti-speakerphone"></i></span>
                    <h6 class="mb-1"><a href="javascript:void(0);">{{ $category->name }}</a></h6>
                    <p>{{ $category->projects_count ? $category->projects_count : 0 }} Projects</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>

<div class="page-content content">
    <div class="container">
        <div class="service-gigs">
            <div class="row">
                <div class="section-header-two text-center">
                    <h2 class="mb-2"><span class="title-bg"></span>Our ongoing projects<span class="title-bg2"></span></h2>
                    <p>Get inspired with projects like these</p>
                </div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Service -->

<div class="container">
    <div class="trusted-customers-two">
        <img src="assets/img/home/shape-2.svg" alt="img" class="trusted-bg img-fluid d-lg-flex d-none">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="trusted-customers-image position-relative d-lg-block d-none text-center aos-init aos-animate" data-aos="fade-up">
                    <img src="assets/img/home/jointeam.svg" alt="img" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5 aos-init aos-animate" data-aos="fade-left">
                <h2 class="mb-3">Want to Get Involved?</h2>
                <p>Explore more projects, collaborate with talented individuals, or submit your own initiatives to make a meaningful impact.</p>
                <a href="#" class="btn btn-white btn-lg me-3" style="font-weight: 600; padding: 0.8rem 2rem;">
                    Submit a Project
                </a>
            </div>
        </div>
    </div>
</div>
@endsection