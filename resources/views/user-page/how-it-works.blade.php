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
            <h3>Start As Seller</h3>
            <p>Showcase your expertise on a platform designed for success. Create your seller profile, highlight your skills, and set your services apart. Benefit from our robust marketplace that connects you with a global audience.</p>
          </div>
          <div class="seller-feature-list d-flex w-100">
            <div class="sllers-list">
              <ul>
                <li><span><i class="feather-check-square"></i></span>Set your prices</li>
                <li><span><i class="feather-check-square"></i></span>Flexible schedule</li>
                <li><span><i class="feather-check-square"></i></span>Build your reputation</li>
                <li><span><i class="feather-check-square"></i></span>Provide 24/7 support</li>
              </ul>
              <a href="signin.html" class="btn btn-primary w-auto">Become a Seller</a>
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
      <h2>Why Choose Us</h2>
      <p>We prioritize your satisfaction through personalized solutions and a commitment to excellence.</p>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-01.svg" alt="img">
          </div>
          <h4>Service Commitment</h4>
          <p> We deliver top-tier solutions, ensuring satisfaction through reliability, transparency, and a dedication to exceeding expectations.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-02.svg" alt="img">
          </div>
          <h4>Fabulous Experience</h4>
          <p> Our intuitive interface offers an effortless journey, through reliability from browsing services to booking and beyond.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-03.svg" alt="img">
          </div>
          <h4>Data Secure</h4>
          <p> We employ robust encryption, stringent access controls, and ongoing monitoring to safeguard your information.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-04.svg" alt="img">
          </div>
          <h4>Fast Service</h4>
          <p> We prioritize speed without compromising quality, ensuring your needs are met promptly and effectively
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-05.svg" alt="img">
          </div>
          <h4>Secure Payment</h4>
          <p> Enjoy peace of mind with encrypted transactions, trusted gateways, and a commitment to safeguarding your information.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="why-choose-card">
          <div class="card-icon">
            <img src="assets/img/icons/why-choose-icon-06.svg" alt="img">
          </div>
          <h4>Dedicated Support</h4>
          <p> Our 24/7 customer service team is here to assist you every step of the way. Experience personalized assistance for a seamless journey
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{{-- Hero Banner --}}
<section class="hero-section py-5 text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7);">
  <div class="container text-center">
    <h1 class="fw-bold mb-3">How Future Connect Works</h1>
    <p class="lead">Connecting talents, clients, and opportunities for growth and success.</p>
  </div>
</section>

{{-- Tabs Navigation --}}
<section class="how-it-works-tabs py-5">
  <div class="container">
    <ul class="nav nav-tabs justify-content-center mb-4" id="howItWorksTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="talent-tab" data-bs-toggle="tab" data-bs-target="#talent"
          type="button" role="tab" aria-controls="talent" aria-selected="true">Talent</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="client-tab" data-bs-toggle="tab" data-bs-target="#client"
          type="button" role="tab" aria-controls="client" aria-selected="false">Client / Employer</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="success-tab" data-bs-toggle="tab" data-bs-target="#success"
          type="button" role="tab" aria-controls="success" aria-selected="false">Success Stories</button>
      </li>
    </ul>

    <div class="tab-content" id="howItWorksTabContent">

      {{-- Talent Tab --}}
      <div class="tab-pane fade show active" id="talent" role="tabpanel" aria-labelledby="talent-tab">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-primary mb-3"><i class="ti ti-user-plus"></i></div>
              <h5 class="fw-semibold">Sign Up & Build Profile</h5>
              <p class="text-muted small">Create your profile, showcase your skills, experience, and portfolio.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-success mb-3"><i class="ti ti-briefcase"></i></div>
              <h5 class="fw-semibold">Find Opportunities</h5>
              <p class="text-muted small">Browse projects, apply, or get invited by clients based on your expertise.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-warning mb-3"><i class="ti ti-award"></i></div>
              <h5 class="fw-semibold">Work & Grow</h5>
              <p class="text-muted small">Complete work, get paid securely, and build your reputation with ratings.</p>
            </div>
          </div>
        </div>
      </div>

      {{-- Client/Employer Tab --}}
      <div class="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-primary mb-3"><i class="ti ti-clipboard-list"></i></div>
              <h5 class="fw-semibold">Post a Project</h5>
              <p class="text-muted small">Share your project details and connect with suitable talents.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-success mb-3"><i class="ti ti-search"></i></div>
              <h5 class="fw-semibold">Hire the Best</h5>
              <p class="text-muted small">Search and review talent profiles to select the right candidate.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-4 hover-scale h-100">
              <div class="display-6 text-warning mb-3"><i class="ti ti-handshake"></i></div>
              <h5 class="fw-semibold">Manage & Pay Securely</h5>
              <p class="text-muted small">Track progress, communicate, and pay safely when work is delivered.</p>
            </div>
          </div>
        </div>
      </div>

      {{-- Success Stories Tab --}}
      <div class="tab-pane fade" id="success" role="tabpanel" aria-labelledby="success-tab">
        <div class="row text-center">

          @forelse($successStories as $story)
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm rounded-4 p-3 h-100">
              <img src="{{ $story->thumbnail_url }}" class="card-img-top rounded-3" alt="{{ $story->title }}">
              <div class="card-body">
                <h5 class="card-title fw-semibold">{{ $story->title }}</h5>
                <p class="card-text text-muted small">{{ Str::limit($story->excerpt, 80) }}</p>
                <a href="#" class="text-primary small fw-semibold">Read More</a>
              </div>
            </div>
          </div>
          @empty
          <p class="text-muted text-center">No success stories yet. Check back soon!</p>
          @endforelse
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
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Seamless Experience</h4>
                  <p>“Communication with the service provider was smooth and efficient through the platform's messaging system. The built-in tools for file sharing ensuring a productive experience.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-18.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">John Cramer</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-19.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Mary Marquez</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-16.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Joanne Parise</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs and Development.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-17.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Gloria Weber</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Seamless Experience</h4>
                  <p>“Communication with the service provider was smooth and efficient through the platform's messaging system. The built-in tools for file sharing ensuring a productive experience.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-18.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">John Cramer</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item active" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-19.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Mary Marquez</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-16.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Joanne Parise</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs and Development.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-17.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Gloria Weber</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Seamless Experience</h4>
                  <p>“Communication with the service provider was smooth and efficient through the platform's messaging system. The built-in tools for file sharing ensuring a productive experience.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-18.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">John Cramer</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
              <div class="owl-item cloned" style="width: 416px; margin-right: 24px;">
                <div class="review-card">
                  <span class="quotation-icon"><img src="assets/img/icons/quotation-icon.svg" alt="img"></span>
                  <h4>Great Work</h4>
                  <p>“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”
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
                    <a href="javascript:void(0);"><img src="assets/img/user/user-19.jpg" alt="img"></a>
                    <h6><a href="javascript:void(0);">Mary Marquez</a><span>United States</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="fa-solid fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa-solid fa-chevron-right"></i></button></div>
          <div class="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  </div>
</section>


{{-- Call to Action --}}
<section class="cta-section py-5 bg-light text-center">
  <div class="container">
    <h3 class="fw-bold mb-3">Ready to Get Started?</h3>
    <p class="text-muted mb-4">Join Future Connect today and unlock your potential.</p>
    <a href="{{ route('user.register_as_talent') }}" class="btn btn-primary btn-lg rounded-pill me-2">Join as Talent</a>
    <a href="{{ route('register') }}" class="btn btn-outline-primary btn-lg rounded-pill">Hire Talent</a>
  </div>
</section>

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