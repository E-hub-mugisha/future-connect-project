@extends('layouts.guest')

@section('title', 'How It Works | Future Connect')

@section('content')



{{-- ════════════════════════════════════
     5. HOW IT WORKS
════════════════════════════════════ --}}
<section class="fc-how">
  <div class="container">
    <div class="fc-section-head text-center" style="max-width:600px; margin:0 auto 48px;">
      <span class="eyebrow">How It Works</span>
      <h2>Get Started in 3 Simple Steps</h2>
    </div>
    <div class="steps-grid">
      <div class="step-card">
        <span class="step-num">01</span>
        <h5>Create Your Profile</h5>
        <p>Sign up and showcase your story, skills, and aspirations through text, images, and video.</p>
        <a href="{{ route('user.register_as_talent') }}" class="strip-link">Get Started <i class="ti ti-arrow-right"></i></a>
      </div>
      <div class="step-card">
        <span class="step-num">02</span>
        <h5>Get Discovered & Rated</h5>
        <p>Employers browse skills by category, rate your profile, and share feedback to help you grow.</p>
        <a href="{{ route('user.talents') }}" class="strip-link">Explore Skills <i class="ti ti-arrow-right"></i></a>
      </div>
      <div class="step-card">
        <span class="step-num">03</span>
        <h5>Grow with the Community</h5>
        <p>Connect, collaborate, and access learning resources. Shop or sell tools from local creators.</p>
        <a href="{{ route('talent.connections-room') }}" class="strip-link">Connection Room<i class="ti ti-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

{{-- ════════════════════════════════════
     2. FEATURE STRIP
════════════════════════════════════ --}}
<div class="fc-feature-strip">
  <div class="container">
    <div class="feature-strip-grid">
      <div class="feature-strip-item">
        <div class="strip-icon"><i class="ti ti-rocket"></i></div>
        <h5>Skills Marketplace</h5>
        <p>Stand out and reach 3× more employers. Boost your profile, get verified, and feature your story.</p>
        <a href="{{ route('user.talents') }}" class="strip-link">Find Skills <i class="ti ti-arrow-right"></i></a>
      </div>
      <div class="feature-strip-item">
        <div class="strip-icon"><i class="ti ti-briefcase"></i></div>
        <h5>Unlock Opportunities</h5>
        <p>Discover tailored job listings, collaboration projects, and freelance gigs matched to your skills.</p>
        <a href="{{ route('user.jobs.index') }}" class="strip-link">Start Exploring <i class="ti ti-arrow-right"></i></a>
      </div>
      <div class="feature-strip-item">
        <div class="strip-icon"><i class="ti ti-users"></i></div>
        <h5>Expand Your Network</h5>
        <p>Connect with professionals, mentors, and peers. Join groups and build relationships that matter.</p>
        <a href="{{ route('talent.connections-room') }}" class="strip-link">Skill Connect<i class="ti ti-arrow-right"></i></a>
      </div>
    </div>
  </div>
</div>

{{-- HOW IT WORKS TABS --}}
<section class="why-choose-sec">
  <div class="container">
    <div class="about-us-header">
      <h2>How it Works</h2>
      <p>Connecting skills, clients, and opportunities for growth and success.</p>
    </div>

    <ul class="nav nav-tabs justify-content-center mb-4" id="howItWorksTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="talent-tab" data-bs-toggle="tab" data-bs-target="#talent"
          type="button" role="tab" aria-controls="talent" aria-selected="true">Skills</button>
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
              <p>Share your project details and connect with suitable skills.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why-choose-card">
              <div class="card-icon">
                <img src="assets/img/icons/why-choose-icon-02.svg" alt="">
              </div>
              <h4>Hire the Best</h4>
              <p>Search and review skills profiles to select the right candidate.</p>
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