@extends('layouts.guest')

@section('title', 'How It Works | Future Connect')

@section('content')

<style>
  /* ===== GLOBAL ===== */
  * {
    box-sizing: border-box;
  }

  /* ===== START SELLER SECTION ===== */
  .start-seller-sec {
    background: #0e1618;
    padding: 60px 0;
  }

  .seller-inner-img {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 14px;
    overflow: hidden;
    min-height: 340px;
  }

  .seller-inner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.9;
    transition: opacity 0.3s;
  }

  .seller-inner-img img:hover {
    opacity: 1;
  }

  .seller-info-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 32px;
  }

  .seller-head {
    margin-bottom: 24px;
  }

  .seller-head h3 {
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.35;
    margin-bottom: 10px;
  }

  .seller-head h3 span {
    color: #48d597;
  }

  .seller-head p {
    font-size: 14px;
    color: #8aa4aa;
    line-height: 1.8;
    margin: 0;
  }

  .seller-feature-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sllers-list ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sllers-list ul li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #c8dde0;
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 8px;
    padding: 10px 14px;
    transition: border-color 0.2s;
  }

  .sllers-list ul li:hover {
    border-color: rgba(0, 166, 103, 0.4);
  }

  .sllers-list ul li span {
    color: #48d597;
    font-size: 16px;
    line-height: 1;
    flex-shrink: 0;
  }

  .sllers-list .btn-primary {
    background: #48d597;
    border: none;
    color: #fff;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, transform 0.2s;
  }

  .sllers-list .btn-primary:hover {
    background: #008f58;
    transform: translateY(-2px);
    color: #fff;
  }

  /* ===== HOW IT WORKS / WHY CHOOSE SECTION ===== */
  .why-choose-sec {
    background: #0b1416;
    padding: 60px 0;
    border-top: 1px solid #1a2a2e;
    border-bottom: 1px solid #1a2a2e;
  }

  .about-us-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .about-us-header h2 {
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .about-us-header p {
    font-size: 14px;
    color: #6b8a90;
  }

  /* Nav Tabs */
  .why-choose-sec .nav-tabs {
    border-bottom: 1px solid #1a2a2e;
    gap: 4px;
    margin-bottom: 32px !important;
  }

  .why-choose-sec .nav-tabs .nav-link {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px 8px 0 0;
    color: #6b8a90;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .why-choose-sec .nav-tabs .nav-link:hover {
    color: #48d597;
    background: rgba(0, 166, 103, 0.06);
    border-color: transparent;
  }

  .why-choose-sec .nav-tabs .nav-link.active {
    background: rgba(0, 166, 103, 0.1);
    border-color: #1e3035 #1e3035 transparent;
    color: #48d597;
    font-weight: 600;
  }

  /* Cards */
  .why-choose-card {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 14px;
    padding: 24px 20px;
    margin-bottom: 20px;
    transition: border-color 0.25s, transform 0.25s;
  }

  .why-choose-card:hover {
    border-color: rgba(0, 166, 103, 0.5);
    transform: translateY(-4px);
  }

  .why-choose-card .card-icon {
    width: 46px;
    height: 46px;
    background: rgba(0, 166, 103, 0.1);
    border: 1px solid rgba(0, 166, 103, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .why-choose-card .card-icon img {
    width: 22px;
    height: 22px;
    filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%);
  }

  .why-choose-card h4 {
    font-size: 15px;
    font-weight: 600;
    color: #e0f0f0;
    margin-bottom: 8px;
  }

  .why-choose-card p {
    font-size: 13px;
    color: #6b8a90;
    line-height: 1.7;
    margin: 0;
  }

  /* ===== TESTIMONIALS SECTION ===== */
  .client-review-sec {
    background: #0e1618;
    padding: 60px 0;
  }

  .client-review-sec .about-us-header h2 {
    color: #ffffff;
  }

  .review-card {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 14px;
    padding: 24px;
    transition: border-color 0.25s, transform 0.25s;
    height: 100%;
  }

  .review-card:hover {
    border-color: rgba(0, 166, 103, 0.4);
    transform: translateY(-3px);
  }

  .quotation-icon img {
    width: 32px;
    opacity: 0.5;
    margin-bottom: 14px;
    filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%);
  }

  .review-card h4 {
    font-size: 15px;
    font-weight: 600;
    color: #e0f0f0;
    margin-bottom: 10px;
  }

  .review-card>p {
    font-size: 13px;
    color: #8aa4aa;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .star-rate {
    margin-bottom: 16px;
  }

  .star-rate i {
    color: #1e3035;
    font-size: 13px;
  }

  .star-rate i.filled {
    color: #f4b942;
  }

  .review-user {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid #1a2a2e;
  }

  .review-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(0, 166, 103, 0.3);
  }

  .review-user h6 {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #c8dde0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .review-user h6 a {
    color: #c8dde0;
    text-decoration: none;
    transition: color 0.2s;
  }

  .review-user h6 a:hover {
    color: #48d597;
  }

  .review-user h6 span {
    font-size: 11px;
    color: #6b8a90;
    font-weight: 400;
  }

  /* Owl Nav override */
  .owl-nav button {
    background: #0f1e21 !important;
    border: 1px solid #1e3035 !important;
    color: #48d597 !important;
    width: 36px;
    height: 36px;
    border-radius: 8px !important;
    transition: border-color 0.2s !important;
  }

  .owl-nav button:hover {
    border-color: rgba(0, 166, 103, 0.5) !important;
    background: rgba(0, 166, 103, 0.08) !important;
  }

  .owl-nav button i {
    color: #48d597;
    font-size: 14px;
  }

  /* ===== CTA SECTION ===== */
  .cta-section {
    padding: 40px 0 60px;
    background: #0e1618;
  }

  .cta-wrap {
    background: linear-gradient(135deg, #0f2a22 0%, #0f1e21 60%, #0b1c28 100%);
    border: 1px solid rgba(0, 166, 103, 0.25);
    border-radius: 16px;
    padding: 40px 36px;
    position: relative;
    overflow: hidden;
  }

  .cta-wrap .row {
    position: relative;
    z-index: 2;
  }

  .cta-info .badge {
    display: inline-block;
    background: rgba(0, 166, 103, 0.12);
    color: #48d597;
    border: 1px solid rgba(0, 166, 103, 0.3);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 14px;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .cta-info h3 {
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.4;
    margin: 0;
  }

  .cta-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }

  .cta-btn .btn-primary {
    background: #48d597;
    border: none;
    color: #fff;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, transform 0.2s;
  }

  .cta-btn .btn-primary:hover {
    background: #008f58;
    transform: translateY(-2px);
    color: #fff;
  }

  .cta-btn .btn-primary i {
    font-size: 18px;
  }

  .cta-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
  }

  .cta-bg1 {
    position: absolute;
    left: -40px;
    top: -40px;
    opacity: 0.04;
  }

  .cta-bg2 {
    position: absolute;
    right: -40px;
    bottom: -40px;
    opacity: 0.04;
  }

  .cta-bg1 img,
  .cta-bg2 img {
    width: 200px;
  }

  /* ===== EMPTY STATE ===== */
  .text-muted {
    color: #6b8a90 !important;
    padding: 32px 0;
  }
</style>

{{-- HERO / SELLER SECTION --}}
<section class="start-seller-sec">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 d-flex mb-4 mb-lg-0">
        <div class="seller-inner-img w-100">
          <img src="assets/img/aboutus/about-us-04.jpg" class="img-fluid" alt="How Future Connect Works">
        </div>
      </div>
      <div class="col-lg-6 d-flex">
        <div class="seller-info-content w-100">
          <div class="seller-head">
            <h3>How <span>Future Connect</span> Works</h3>
            <p>Connecting talents, clients, and opportunities for growth and success.</p>
          </div>
          <div class="seller-feature-list">
            <div class="sllers-list">
              <ul>
                <li><span><i class="feather-check-square"></i></span>Sign Up & Build Profile</li>
                <li><span><i class="feather-check-square"></i></span>Find Opportunities</li>
                <li><span><i class="feather-check-square"></i></span>Work & Grow</li>
                <li><span><i class="feather-check-square"></i></span>Post a Project</li>
              </ul>
              <a href="{{ route('user.register_as_talent') }}" class="btn btn-primary w-auto">
                Register your Skills <i class="ti ti-arrow-badge-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{{-- HOW IT WORKS TABS --}}
<section class="why-choose-sec">
  <div class="container">
    <div class="about-us-header">
      <h2>How it Works</h2>
      <p>Connecting talents, clients, and opportunities for growth and success.</p>
    </div>

    <ul class="nav nav-tabs justify-content-center mb-4" id="howItWorksTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="talent-tab" data-bs-toggle="tab" data-bs-target="#talent"
          type="button" role="tab" aria-controls="talent" aria-selected="true">Talent</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="client-tab" data-bs-toggle="tab" data-bs-target="#client"
          type="button" role="tab" aria-controls="client" aria-selected="false">Client / Employer</button>
      </li>
    </ul>

    <div class="tab-content" id="howItWorksTabContent">
      {{-- Talent Tab --}}
      <div class="tab-pane fade show active" id="talent" role="tabpanel" aria-labelledby="talent-tab">
        <div class="row">
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-01.svg" alt="">
              </div>
              <h4>Sign Up & Build Profile</h4>
              <p>Create your profile, showcase your skills, experience, and portfolio.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-02.svg" alt="">
              </div>
              <h4>Find Opportunities</h4>
              <p>Browse projects, apply, or get invited by clients based on your expertise.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-03.svg" alt="">
              </div>
              <h4>Work & Grow</h4>
              <p>Complete work, get paid securely, and build your reputation with ratings.</p>
            </div>
          </div>
        </div>
      </div>

      {{-- Client Tab --}}
      <div class="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
        <div class="row">
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-01.svg" alt="">
              </div>
              <h4>Post a Project</h4>
              <p>Share your project details and connect with suitable talents.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-02.svg" alt="">
              </div>
              <h4>Hire the Best</h4>
              <p>Search and review talent profiles to select the right candidate.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-03.svg" alt="">
              </div>
              <h4>Manage & Pay Securely</h4>
              <p>Track progress, communicate, and pay safely when work is delivered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{{-- TESTIMONIALS --}}
<section class="client-review-sec">
  <div class="container">
    <div class="about-us-header">
      <h2>What Our Clients Say</h2>
      <p>Hear what our clients have to say — testimonials that showcase our commitment to excellence.</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="review-slider owl-carousel owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage" style="transform: translate3d(-1320px, 0px, 0px); transition: all; width: 4400px;">
              @forelse($successStories as $story)
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon">
                    <img src="assets/img/icons/quotation-icon.svg" alt="">
                  </span>
                  <h4>{{ $story->title }}</h4>
                  <p>"{{ Str::limit($story->excerpt, 80) }}"</p>
                  <div class="star-rate">
                    <span>
                      <i class="fa-solid fa-star filled"></i>
                      <i class="fa-solid fa-star filled"></i>
                      <i class="fa-solid fa-star filled"></i>
                      <i class="fa-solid fa-star filled"></i>
                      <i class="fa-solid fa-star filled"></i>
                    </span>
                  </div>
                  <div class="review-user">
                    <a href="javascript:void(0);">
                      <img src="{{ $story->thumbnail_url }}" alt="{{ $story->author_name }}">
                    </a>
                    <h6>
                      <a href="javascript:void(0);">{{ $story->author_name }}</a>
                      <span>{{ $story->role }}</span>
                    </h6>
                  </div>
                </div>
              </div>
              @empty
              <p class="text-muted text-center w-100">No success stories yet. Check back soon!</p>
              @endforelse
            </div>
          </div>
          <div class="owl-nav">
            <button type="button" role="presentation" class="owl-prev">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button type="button" role="presentation" class="owl-next">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div class="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{{-- CTA SECTION --}}
<div class="container">
  <div class="cta-section">
    <div class="cta-wrap">
      <div class="row gx-0 align-items-center">
        <div class="col-md-8">
          <div class="cta-info">
            <span class="badge">Ready to Get Started?</span>
            <h3>Join Future Connect today and unlock your potential.</h3>
          </div>
        </div>
        <div class="col-md-4 text-md-end">
          <div class="cta-btn">
            <a href="{{ route('user.register_as_talent') }}" class="btn btn-primary btn-lg">
              Register your Skills <i class="ti ti-arrow-badge-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="cta-bg">
        <div class="cta-bg1"><img src="assets/img/bg/contact-bg-01.png" alt=""></div>
        <div class="cta-bg2"><img src="assets/img/bg/contact-bg-02.png" alt=""></div>
      </div>
    </div>
  </div>
</div>

@endsection