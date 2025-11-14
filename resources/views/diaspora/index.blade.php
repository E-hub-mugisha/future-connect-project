@extends('layouts.guest')

@section('content')

<section class="hero-section p-4">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                    <div class="banner-head">
                        <h1 class="mb-2">Diaspora Connect</h1>
                        <p class="d-inline-flex">Sponsor, invest, or mentor verified local talent. Make a real impact and watch innovators grow.</p>
                        <ul class="list-unstyled mb-4">
                            <li class="mb-2">Sponsor a young innovator — get monthly progress updates.</li>
                            <li class="mb-2">90% goes directly to the project; 10% supports Future Connect operations.</li>
                            <li class="mb-2">Watch how your sponsorship changes lives.</li>
                            <li class="mb-2">Partner as a mentor or investor — verified collaboration, zero spam.</li>
                        </ul>
                    </div>
                    <a href="{{ route('diaspora.create') }}" class="btn btn-lg btn-primary rounded-pill d-inline-flex align-items-center">Become a Sponsor<i class="ti ti-chevron-right ms-1"></i></a>
                    <a href="{{ route('user.projects.index') }}" class="btn btn-outline-primary btn-lg rounded-pill d-inline-flex align-items-center">
                        View Projects
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="banner-img">
                    <div class="banner-img-right">
                        <img src="assets/img/banner-img.png" class="img-fluid" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="explore-gigs-section">
    <div class="container">
        <div class="section-head d-flex">
            <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                <h2><span>Explore</span> Our Featured Projects.</h2>
            </div>
            <div class="section-tab">
                <ul class="nav nav-pills inner-tab aos aos-init aos-animate" id="pills-tab" role="tablist" data-aos="fade-up">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false" tabindex="-1">Latest</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-rating-tab" data-bs-toggle="pill" data-bs-target="#pills-rating" type="button" role="tab" aria-controls="pills-rating" aria-selected="false" tabindex="-1">Top Ratings</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-trend-tab" data-bs-toggle="pill" data-bs-target="#pills-trend" type="button" role="tab" aria-controls="pills-trend" aria-selected="false" tabindex="-1">Trending </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-content dashboard-tab">
            <div class="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                <div class="row aos aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <div class="col-md-12">
                        <div class="gigs-card-slider owl-carousel owl-loaded owl-drag">

                            <div class="owl-stage-outer">
                                <div class="owl-stage" style="transform: translate3d(-440px, 0px, 0px); transition: 2s; width: 2200px;">
                                    @foreach($projects as $index => $project)
                                    <div class="owl-item" style="width: 416px; margin-right: 24px;">
                                        <div class="gigs-grid">
                                            <div class="gigs-img">
                                                <div class="card-overlay-badge">
                                                    <a href="service.html"><span class="badge bg-warning"><i class="feather-star"></i>Featured</span></a>
                                                    <a href="service.html"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span></a>
                                                </div>
                                                <div class="fav-selection">
                                                    <a href="javascript:void(0);">
                                                        <i class="feather-video"></i>
                                                    </a>
                                                    <a href="javascript:void(0);" class="fav-icon">
                                                        <i class="feather-heart"></i>
                                                    </a>
                                                </div>
                                                <div class="user-thumb">
                                                    <a href="buyer-profile.html">
                                                        <img src="assets/img/user/user-01.jpg" alt="User">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="gigs-content">
                                                <div class="gigs-info">
                                                    <a href="{{ route('user.projects.show', $project->id) }}" class="badge bg-light">
                                                        Website Promotion
                                                    </a>
                                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin-check me-1"></i>Newyork</p>
                                                </div>
                                                <div class="gigs-title">
                                                    <h5>
                                                        <a href="{{ route('user.projects.show', $project->id) }}">
                                                            {{ $project->title }}
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div class="star-rate">
                                                    <span><i class="fa-solid fa-star"></i>5.0 (40 Reviews)</span>
                                                </div>
                                                <div class="gigs-card-footer">
                                                    <div class="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i class="feather-share-2"></i>
                                                        </a>
                                                        <span class="badge">Delivery in 1 day</span>
                                                    </div>
                                                    <h6><a href="{{ route('user.projects.show', $project->id) }}" class="btn btn-primary rounded-pill float-end">View Project</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                            <div class="owl-dots disabled"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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
            <div class="col-lg-7">
                <div class="expert-header">
                    <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                        <h2><span>How </span>Diaspora Connect Works</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="section-header aos-init aos-animate" data-aos="fade-up">
                    <h6 class="fw-medium text-white">Professional, concise explanation about verified talent and transparency</h6>
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
                            <h5>Verified Projects</h5>
                            <p>All projects are verified for legitimacy, ensuring your sponsorship reaches real innovators making a difference.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                    <div class="expert-item">
                        <div class="expert-icon">
                            <img src="assets/img/icons/expert-icon.svg" alt="img">
                        </div>
                        <div class="expert-info">
                            <h5>Transparent Support</h5>
                            <p>90% of funds go directly to the project, with full tracking and monthly updates on progress and impact.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 aos aos-init aos-animate" data-aos="fade-up">
                    <div class="expert-item">
                        <div class="expert-icon">
                            <img src="assets/img/icons/users-icon.svg" alt="img">
                        </div>
                        <div class="expert-info">
                            <h5>Mentor & Invest</h5>
                            <p>Partner as a mentor or investor. Collaborate with verified talent safely, and provide guidance or funding directly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="testimonial-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                    <h2><span>Testimonials</span> from Sponsored Talent</h2>
                </div>
                <div class="testimonial-slider owl-carousel owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-1317px, 0px, 0px); transition: all; width: 4394px;">
                            @foreach($testimonials as $testimonial)
                            <div class="owl-item cloned" style="width: 417.333px; margin-right: 22px;">
                                <div class="testimonial-item aos aos-init aos-animate" data-aos="fade-up">
                                    <div class="testimonial-icon">
                                        <img src="assets/img/icons/arrow-icon.svg" alt="icon">
                                    </div>
                                    <h5>{{ $testimonial->name }}</h5>
                                    <p>“{{ $testimonial->content ?? 'Passionate writer with a flair for storytelling and compelling narratives.' }}”</p>
                                    <div class="star-rate">
                                        <span>
                                            @for($i = 0; $i < 5; $i++)
                                                <i
                                                class="ti ti-star-filled {{ $i < $testimonial->rating ? 'text-warning' : 'text-muted' }}"></i>
                                                @endfor
                                        </span>
                                    </div>
                                    <div class="testimonial-user">
                                        <img src="{{ $testimonial->talent->image 
        ? asset('image/talents/' . $testimonial->talent->image) 
        : asset('assets/img/user/profile.jpg') }}" alt="img">
                                        <div class="testimonial-info">
                                            <h6>{{ $testimonial->talent->name ?? 'Jacob Rivera' }}</h6>
                                            <p>{{ $testimonial->talent->address ?? 'Kigali, Rwanda' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
                    <div class="owl-dots disabled"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="testimonial-bg">
        <div class="testimonial-bg1">
            <img src="assets/img/bg/testimonial-bg-01.png" alt="Shape">
        </div>
        <div class="testimonial-bg2">
            <img src="assets/img/bg/testimonial-bg-02.png" alt="Shape">
        </div>
        <div class="testimonial-bg3">
            <img src="assets/img/bg/testimonial-bg-03.png" alt="Shape">
        </div>
    </div>
</section>

<div class="container">
    <div class="join-with-us">
        <img src="assets/img/home/shape-5.svg" alt="img" class="img-fluid join-with-us-bg">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div data-aos="fade-right" class="aos-init aos-animate">
                <h2 class="text-white">Ready to Make an Impact?</h2>
                <p class="mb-0">Join Diaspora Connect today and sponsor local talent to grow and succeed.</p>
            </div>
            <a href="{{ route('diaspora.create') }}" class="btn btn-lg btn-primary flex-shrink-0 aos-init aos-animate" data-aos="fade-left">Join With Us</a>
        </div>
    </div>
</div>


@endsection