@extends('layouts.guest')
@section('content')



{{-- BREADCRUMB --}}
<div class="breadcrumb-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    About <span>Future Connect</span>
                </h2>
            </div>
        </div>
    </div>
</div>

{{-- ABOUT SECTION --}}
<section class="about-us-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="row me-4">
                    <div class="col-sm-6">
                        <div class="about-inner-img" style="height:290px;">
                            <img src="assets/img/aboutus/Future Connect-01.jpg" class="img-fluid" alt="Future Connect" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="about-inner-img" style="height:138px;">
                                    <img src="assets/img/aboutus/Future Connect-02.jpg" class="img-fluid" alt="Future Connect" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="about-inner-img" style="height:138px;">
                                    <img src="assets/img/aboutus/Future Connect-03.jpg" class="img-fluid" alt="Future Connect" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-us-info">
                    <span class="about-badge">About Future Connect</span>
                    <div class="about-us-head">
                        <h2>Empowering Young Talents Through Stories & Skills</h2>
                        <p>
                            Future Connect is a digital hub where emerging talents shine. We connect youth with
                            opportunities to showcase their stories, share unique skills, and grow through
                            meaningful exposure and community support.
                        </p>
                        <h5>Our Mission</h5>
                        <p>
                            To ignite the potential in every young dreamer by offering a space to inspire,
                            learn, and thrive. We believe in storytelling as a catalyst for connection and
                            skills as the bridge to brighter futures.
                        </p>
                    </div>
                    <div class="about-features">
                        <ul class="list-one">
                            <li><span></span>Talent-Powered Stories</li>
                            <li><span></span>Inclusive & Empowering Platform</li>
                        </ul>
                        <ul class="list-two">
                            <li><span></span>Mentorship & Opportunities</li>
                            <li><span></span>Skill Sharing & Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {{-- Stats Strip --}}
        <div class="stats-strip">
            <div class="stat-item">
                <div class="stat-num">10K+</div>
                <div class="stat-label">Young Talents</div>
            </div>
            <div class="stat-item">
                <div class="stat-num">150+</div>
                <div class="stat-label">Opportunities</div>
            </div>
            <div class="stat-item">
                <div class="stat-num">50+</div>
                <div class="stat-label">Mentors & Volunteers</div>
            </div>
        </div>
    </div>
</section>

{{-- WHY CHOOSE SECTION --}}
<section class="why-choose-sec">
    <div class="container">
        <div class="about-us-header">
            <h2>Why Choose <span>Future Connect</span></h2>
            <p>Because every story matters and every skill deserves a stage.</p>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-01.svg" alt="" />
                    </div>
                    <h4>Real Impact</h4>
                    <p>Our platform helps youth turn passion into purpose, with real results and community support.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-02.svg" alt="" />
                    </div>
                    <h4>Inspiring Stories</h4>
                    <p>Every Future Connect profile tells a powerful story. Be heard. Be seen. Be remembered.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-03.svg" alt="" />
                    </div>
                    <h4>Skill Marketplace</h4>
                    <p>Discover, hire, or support skilled youth who are ready to deliver excellence.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-04.svg" alt="" />
                    </div>
                    <h4>Safe & Supportive</h4>
                    <p>Your content and data are protected as you grow in a nurturing community.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-05.svg" alt="" />
                    </div>
                    <h4>Easy Donations</h4>
                    <p>Support talents with secure, transparent donation tools and reward systems.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-06.svg" alt="" />
                    </div>
                    <h4>Community First</h4>
                    <p>Our agents, mentors, and volunteers uplift every talent's journey to success.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- FAQ SECTION --}}
<section class="faq-section">
    <div class="container">
        <div class="section-title mb-4">
            <h2 class="mb-1">Most frequently asked questions</h2>
            <p>Here are the most frequently asked questions you may check before getting started.</p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="faq-wrapper faq-lists">
                    @foreach ($faqs as $index => $faq)
                    <div class="faq-card">
                        <h4 class="faq-title">
                            <a class="collapsed"
                               data-bs-toggle="collapse"
                               href="#faq{{ $index }}"
                               aria-expanded="false"
                               aria-controls="faq{{ $index }}">
                                {{ $faq->question }}
                            </a>
                        </h4>
                        <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent=".faq-lists">
                            <div class="faq-content">
                                <p>{!! nl2br(e($faq->answer)) !!}</p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

@endsection