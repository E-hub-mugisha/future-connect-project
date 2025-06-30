@extends('layouts.guest')
@section('content')

<div>

    <div class="breadcrumb-bar">
        <div class="breadcrumb-img">
            <div class="breadcrumb-left">
                <img src="assets/img/bg/breadcrump-bg-01.png" alt="img" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">About Us </li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">
                        About Us
                    </h2>
                </div>
            </div>
        </div>
        <div class="breadcrumb-img">
            <div class="breadcrumb-right">
                <img src="assets/img/bg/breadcrump-bg-02.png" alt="img" />
            </div>
        </div>
    </div>


    <section class="about-us-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="row me-4">
                        <div class="col-sm-6">
                            <div class="about-inner-img">
                                <img src="assets/img/aboutus/Future Connect-01.jpg" class="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="about-inner-img">
                                        <img src="assets/img/aboutus/Future Connect-02.jpg" class="img-fluid"
                                            alt="img" />
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="about-inner-img">
                                        <img src="assets/img/aboutus/Future Connect-03.jpg" class="img-fluid"
                                            alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-us-info">
                        <div class="about-us-head">
                            <h6>About Future Connect</h6>
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
                                <li><span><img src="assets/img/icons/target-arrow-icon.svg"
                                            alt="img" /></span>Talent-Powered Stories</li>
                                <li><span><img src="assets/img/icons/target-arrow-icon.svg"
                                            alt="img" /></span>Inclusive & Empowering Platform</li>
                            </ul>
                            <ul class="list-two">
                                <li><span><img src="assets/img/icons/target-arrow-icon.svg"
                                            alt="img" /></span>Mentorship & Opportunities</li>
                                <li><span><img src="assets/img/icons/target-arrow-icon.svg" alt="img" /></span>Skill
                                    Sharing & Growth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="why-choose-sec">
        <div class="container">
            <div class="about-us-header">
                <h2>Why Choose Future Connect</h2>
                <p>Because every story matters and every skill deserves a stage.</p>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-01.svg" alt="img" />
                        </div>
                        <h4>Real Impact</h4>
                        <p>Our platform helps youth turn passion into purpose, with real results and community
                            support.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-02.svg" alt="img" />
                        </div>
                        <h4>Inspiring Stories</h4>
                        <p>Every Future Connect profile tells a powerful story. Be heard. Be seen. Be remembered.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-03.svg" alt="img" />
                        </div>
                        <h4>Skill Marketplace</h4>
                        <p>Discover, hire, or support skilled youth who are ready to deliver excellence.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-04.svg" alt="img" />
                        </div>
                        <h4>Safe & Supportive</h4>
                        <p>Your content and data are protected as you grow in a nurturing community.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-05.svg" alt="img" />
                        </div>
                        <h4>Easy Donations</h4>
                        <p>Support talents with secure, transparent donation tools and reward systems.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="why-choose-card">
                        <div class="card-icon">
                            <img src="assets/img/icons/why-choose-icon-06.svg" alt="img" />
                        </div>
                        <h4>Community First</h4>
                        <p>Our agents, mentors, and volunteers uplift every talent’s journey to success.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

@endsection