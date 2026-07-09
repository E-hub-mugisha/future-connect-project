@extends('layouts.guest')
@section('title', 'Learning Center and Courses')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">




<!-- ═══ HERO ═══ -->
<section class="lc-hero">
  <div class="container">
    <div class="row align-items-center g-5">

      <!-- Left -->
      <div class="col-lg-6">
        <div class="hero-eyebrow"><span></span> Learning Center</div>
        <h1>
          Where <span class="accent">knowledge</span><br>meets opportunity
        </h1>
        <p class="hero-sub">
          Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today.
        </p>
        <div class="hero-cta-row">
          <a href="#courses" class="btn-green"><i class="ti ti-book-2"></i> Explore Courses</a>
          <a href="{{ route('register') }}" class="btn-outline"><i class="ti ti-users"></i> Join Platform</a>
        </div>
      </div>

      <!-- Right (desktop) -->
      <div class="col-lg-6 d-none d-lg-block">
        <div class="hero-info-cards">
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-certificate"></i></div>
            <h6>Certified Courses</h6>
            <p>Learn from verified professionals with recognized certifications.</p>
            <a href="#courses">Browse now <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-clock"></i></div>
            <h6>Learn at Your Pace</h6>
            <p>All courses available on-demand, accessible anytime anywhere.</p>
            <a href="#courses">Get started <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-currency-dollar"></i></div>
            <h6>Free &amp; Paid Content</h6>
            <p>Access free courses or invest in premium skill-building content.</p>
            <a href="#courses">Explore free <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-world"></i></div>
            <h6>Africa-Focused</h6>
            <p>Skills and insights tailored for professionals across Africa.</p>
            <a href="{{ route('register') }}">Join community <i class="ti ti-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <!-- Mobile carousel -->
      <div class="col-12 d-lg-none">
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div class="carousel-indicators" style="bottom:-30px;">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="m-hero-card">
                <div class="hi-card-icon mx-auto mb-3"><i class="ti ti-book-2"></i></div>
                <h4>Knowledge Meets Opportunity</h4>
                <p>Explore courses and categories to enhance your skills and advance your career.</p>
                <a href="#courses" class="btn-green mx-auto">Explore Courses</a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="m-hero-card">
                <div class="hi-card-icon mx-auto mb-3"><i class="ti ti-users"></i></div>
                <h4>Unlock New Opportunities</h4>
                <p>Join the platform and share your skills with the community.</p>
                <a href="{{ route('register') }}" class="btn-green mx-auto">Join Platform</a>
              </div>
            </div>
          </div>
        </div>
        <div style="height:40px;"></div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ STATS BAR ═══ -->
<div class="stats-bar">
  <div class="container">
    <div class="row g-0">
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">{{ $courses->total() }}<span style="color:var(--green);">+</span></span><span class="stat-label">Courses</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">{{ $categories->count() }}<span style="color:var(--green);">+</span></span><span class="stat-label">Categories</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">74K<span style="color:var(--green);">+</span></span><span class="stat-label">Learners</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">Free<span style="color:var(--green);">+</span></span><span class="stat-label">Content Available</span></div>
      </div>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<!-- ═══ CATEGORIES ═══ -->
<div class="cat-strip">
  <div class="container">
    <div class="section-label">Browse</div>
    <div class="section-title">Trending Learning Categories</div>
    <p class="section-sub">View all learning materials and courses offered by skilled people</p>

    <!-- Mobile: horizontal scroll chips -->
    <div class="cat-scroll d-lg-none">
      @foreach($categories as $category)
        <a href="{{ url('/courses/category/' . $category->slug) }}" class="cat-chip">
          {{ $category->name }}
          <span style="color:var(--green); margin-left:4px;">({{ $category->courses->count() }})</span>
        </a>
      @endforeach
    </div>

    <!-- Desktop: card grid -->
    <div class="cat-cards-grid d-none d-lg-grid">
      @foreach($categories as $category)
        <a href="{{ url('/courses/category/' . $category->slug) }}" class="cat-card-item">
          <div class="cci-icon"><i class="ti ti-book"></i></div>
          <div class="cci-name">{{ $category->name }}</div>
          <div class="cci-count">{{ $category->courses->count() }} courses</div>
        </a>
      @endforeach
    </div>
  </div>
</div>

<div class="section-divider" style="margin-top:48px;"></div>

<!-- ═══ COURSES LISTING ═══ -->
<div class="container py-5" id="courses">

  <!-- Header -->
  <div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
    <div>
      <div class="section-label">Courses</div>
      <div class="section-title">
        Learning Center &amp; Courses
      </div>
      <p class="section-sub">
        Browse listing &amp; more —
        <strong style="color:var(--green); font-family:var(--font-head);">{{ $courses->total() }} courses</strong>
        available
      </p>
    </div>
  </div>

  <!-- Filter bar -->
  <div class="filter-bar">
    <div class="filter-tabs">
      <button class="filter-tab active" data-filter="all">All</button>
      <button class="filter-tab" data-filter="latest">Latest</button>
      <button class="filter-tab" data-filter="popular">Popular</button>
      <button class="filter-tab" data-filter="featured">Featured</button>
      <button class="filter-tab" data-filter="recommended">Recommended</button>
    </div>
    <span class="courses-count d-none d-md-block">
      Showing <strong>{{ $courses->count() }}</strong> of <strong>{{ $courses->total() }}</strong> courses
    </span>
  </div>

  <!-- Course grid -->
  <div class="course-grid" id="courseGrid">
    @forelse($courses as $course)
    <div class="course-item" data-category="{{ strtolower($course->tag ?? 'featured') }}">
      <div class="course-card">

        <!-- Thumbnail -->
        <div class="course-thumb">
          <a href="{{ route('user.courses.show', $course->slug) }}">
            <img src="{{ asset('image/thumbnails/'.$course->thumbnail) }}"
                 alt="{{ $course->title }}">
          </a>
          <div class="course-thumb-overlay"></div>
          <span class="thumb-badge">{{ $course->category->name ?? 'Course' }}</span>
          <span class="thumb-price">
            @if($course->is_free) Free @else ${{ number_format($course->price, 2) }} @endif
          </span>
        </div>

        <!-- Body -->
        <div class="course-body">
          <a href="{{ route('user.courses', ['category' => $course->category->slug]) }}" class="course-cat">
            {{ $course->category->name ?? '' }}
          </a>

          <a href="{{ route('user.courses.show', $course->slug) }}" class="course-title">
            {{ $course->title }}
          </a>

          <div class="course-rating">
            <span class="stars">
              @for($s=1; $s<=5; $s++)
                @if($s <= round($course->feedback->avg('rating') ?? 0))
                  <i class="ti ti-star-filled"></i>
                @else
                  <i class="ti ti-star"></i>
                @endif
              @endfor
            </span>
            <span class="score">{{ number_format($course->feedback->avg('rating') ?? 0, 1) }}</span>
            <span>({{ $course->feedback->count() }} reviews)</span>
          </div>

          <div class="course-instructor">
            <img class="inst-avatar"
                 src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}"
                 alt="{{ $course->talent->name ?? '' }}">
            <div class="inst-info">
              <div class="inst-name">{{ $course->talent->name ?? 'Unknown' }}</div>
              <div class="inst-loc">
                <i class="ti ti-map-pin" style="font-size:10px;"></i>
                {{ $course->talent->region ?? 'N/A' }}
              </div>
            </div>
            <a href="{{ route('user.courses.show', $course->slug) }}" class="course-view-btn">
              <i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
    @empty
    <div class="empty-state">
      <i class="ti ti-books"></i>
      <h4>No courses found</h4>
      <p>Try a different category or check back later.</p>
    </div>
    @endforelse
  </div>

  <!-- Pagination -->
  @if($courses->hasPages())
  <div class="pagination-wrap">
    @if($courses->onFirstPage())
      <span class="page-btn disabled"><i class="ti ti-chevron-left"></i></span>
    @else
      <a href="{{ $courses->previousPageUrl() }}" class="page-btn"><i class="ti ti-chevron-left"></i></a>
    @endif

    @foreach($courses->getUrlRange(1, $courses->lastPage()) as $page => $url)
      <a href="{{ $url }}" class="page-btn {{ $page == $courses->currentPage() ? 'active' : '' }}">{{ $page }}</a>
    @endforeach

    @if($courses->hasMorePages())
      <a href="{{ $courses->nextPageUrl() }}" class="page-btn"><i class="ti ti-chevron-right"></i></a>
    @else
      <span class="page-btn disabled"><i class="ti ti-chevron-right"></i></span>
    @endif
  </div>
  @endif

</div>


<script>
document.addEventListener('DOMContentLoaded', () => {
  const tabs  = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.course-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
</script>

@endsection