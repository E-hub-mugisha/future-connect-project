@extends('layouts.guest')

@section('title', 'How It Works | Future Connect')

@section('content')

<section class="start-seller-sec">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 d-flex">
        <div class="seller-inner-img w-100">
          <img src="assets/img/aboutus/about-us-04.jpg" class="img-fluid" alt="img">
        </div>
      </div>
      <div class="col-lg-6 d-flex">
        <div class="seller-info-content w-100">
          <div class="seller-head">
            <h3>How Future Connect Works</h3>
            <p>Connecting talents, clients, and opportunities for growth and success.</p>
          </div>
          <div class="seller-feature-list d-flex w-100">
            <div class="sllers-list">
              <ul>
                <li><span><i class="feather-check-square"></i></span>Sign Up & Build Profile</li>
                <li><span><i class="feather-check-square"></i></span>Find Opportunities</li>
                <li><span><i class="feather-check-square"></i></span>Work & Grow</li>
                <li><span><i class="feather-check-square"></i></span>Post a Project</li>
              </ul>
              <a href="{{ route('user.register_as_talent') }}" class="btn btn-primary w-auto">Register your skills</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="why-choose-sec">
  <div class="container">
    <div class="about-us-header">
      <h2>How it works</h2>
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
      <div class="tab-pane fade show active" id="talent" role="tabpanel" aria-labelledby="talent-tab">
        <div class="row">
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-01.svg" alt="img">
              </div>
              <h4>Sign Up & Build Profile</h4>
              <p>
                Create your profile, showcase your skills, experience, and portfolio.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-02.svg" alt="img">
              </div>
              <h4>Find Opportunities</h4>
              <p>
                Browse projects, apply, or get invited by clients based on your expertise.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-03.svg" alt="img">
              </div>
              <h4>Work & Grow</h4>
              <p> Complete work, get paid securely, and build your reputation with ratings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
        <div class="row">
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-01.svg" alt="img">
              </div>
              <h4>Post a Project</h4>
              <p>
                Share your project details and connect with suitable talents.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-02.svg" alt="img">
              </div>
              <h4>Hire the Best</h4>
              <p>
                Search and review talent profiles to select the right candidate.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-03.svg" alt="img">
              </div>
              <h4>Manage & Pay Securely</h4>
              <p>
                Track progress, communicate, and pay safely when work is delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="client-review-sec">
  <div class="container">
    <div class="about-us-header">
      <h2>What Our Client Say</h2>
      <p>Hear What Our Clients Have to Say. Explore the Testimonials that Showcase Our Commitment to Excellence
      </p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="review-slider owl-carousel owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage" style="transform: translate3d(-1320px, 0px, 0px); transition: all; width: 4400px;">
              @forelse($successStories as $story)
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>{{ $story->title }}</h4>
                  <p>“{{ Str::limit($story->excerpt, 80) }}”
                  </p>
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
                    <a href="javascript:void(0);"><img src="{{ $story->thumbnail_url }}" alt="img"></a>
                    <h6><a href="javascript:void(0);">{{ $story->author_name }}</a><span>{{ $story->role }}</span></h6>
                  </div>
                </div>
              </div>
              @empty
              <p class="text-muted text-center">No success stories yet. Check back soon!</p>
              @endforelse
            </div>
          </div>
          <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
          <div class="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container">
  <div class="cta-section">
    <div class="cta-wrap">
      <div class="row gx-0 align-items-center">
        <div class="col-md-8">
          <div class="cta-info aos-init aos-animate" data-aos="fade-right">
            <span class="badge">Ready to Get Started?</span>
            <h3>Join Future Connect today and unlock your potential.</h3>
          </div>
        </div>
        <div class="col-md-4 text-md-end">
          <div class="cta-btn aos-init aos-animate" data-aos="fade-left">
            <a href="{{ route('user.register_as_talent') }}" class="btn btn-lg btn-primary">Register your Skills<i class="ti ti-arrow-badge-right"></i></a>
          </div>
        </div>
      </div>
      <div class="cta-bg">
        <div class="cta-bg1">
          <img src="assets/img/bg/contact-bg-01.png" alt="Shape">
        </div>
        <div class="cta-bg2">
          <img src="assets/img/bg/contact-bg-02.png" alt="Shape">
        </div>
      </div>
    </div>
  </div>
</div>

{{-- Styles --}}
<style>
  .hover-scale {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;
  }

  .hover-scale:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  .nav-tabs .nav-link.active {
    font-weight: 600;
    color: #0052D4;
    border-bottom: 3px solid #0052D4;
  }

  .nav-tabs .nav-link {
    font-weight: 500;
    color: #555;
    font-size: 1.05rem;
    border: none;
    margin: 0 0.5rem;
    border-radius: 0;
  }

  .tab-content .card img {
    height: 180px;
    object-fit: cover;
    margin-bottom: 12px;
  }
</style>

@endsection