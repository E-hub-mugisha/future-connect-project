@extends('layouts.guest')

@section('title', 'How It Works')

@section('content')

<section class="how-it-works-section py-5">
  <div class="container">
    <div class="section-header-two text-center mb-5">
      <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>How It Works<span
                    class="title-bg2"></span>
      <p class="lead text-muted" style="color: #27AE60;">Discover how our platform helps you find and showcase talents seamlessly.</p>
    </div>

    <div class="row g-4">
      <!-- Step 1 -->
      <div class="col-md-4 text-center" data-aos="fade-up">
        <div class="how-step p-4 border rounded shadow-sm h-100" style="background: var(--white);">
          <div class="mb-3">
            <i class="feather-search text-primary" style="font-size: 3rem;"></i>
          </div>
          <h3 class="h5 mb-3">Explore Talents</h3>
          <p>Browse through a diverse pool of skilled individuals across various categories to find the perfect match for your needs.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="col-md-4 text-center" data-aos="fade-up">
        <div class="how-step p-4 border rounded shadow-sm h-100" style="background: var(--white);">
          <div class="mb-3">
            <i class="feather-user-check text-primary" style="font-size: 3rem;"></i>
          </div>
          <h3 class="h5 mb-3">Connect & Collaborate</h3>
          <p>Reach out directly to talents, discuss your project details, and build effective working relationships easily.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="col-md-4 text-center" data-aos="fade-up">
        <div class="how-step p-4 border rounded shadow-sm h-100" style="background: var(--white);">
          <div class="mb-3">
            <i class="feather-award text-primary" style="font-size: 3rem;"></i>
          </div>
          <h3 class="h5 mb-3">Hire & Grow</h3>
          <p>Finalize your hire, track project progress, and grow your success by leveraging talented professionals through our platform.</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="{{ route('register') }}" class="btn btn-primary btn-lg">Get Started Now</a>
    </div>
  </div>
</section>
@endsection
