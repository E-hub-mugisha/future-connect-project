@extends('layouts.guest')

@section('title', $categoryName . ' Learning Material')

@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">




<!-- ═══ PAGE HEADER ═══ -->
<div class="page-header">
  <div class="container">
    <div class="ph-breadcrumb">
      <a href="{{ url('/') }}">Home</a>
      <span class="sep">/</span>
      <a href="{{ route('user.courses') }}">Courses</a>
      <span class="sep">/</span>
      <span class="current">{{ $categoryName }}</span>
    </div>
    <div class="ph-eyebrow">Category</div>
    <h1>
      <span class="accent">{{ $categoryName }}</span> Learning Materials
    </h1>
    <p>View all learning material and courses offered by skilled people in this category.</p>
  </div>
</div>

<!-- ═══ CATEGORY STRIP ═══ -->
<div class="cat-strip">
  <div class="container">
    <div class="cat-scroll">
      @foreach($categories as $category)
        <a href="{{ url('/courses/category/' . $category->slug) }}"
           class="cat-chip {{ $category->name === $categoryName ? 'active' : '' }}">
          {{ $category->name }}
          <span style="color:var(--green); margin-left:4px; font-size:0.7rem;">({{ $category->courses->count() }})</span>
        </a>
      @endforeach
    </div>
  </div>
</div>

<div class="section-divider"></div>

<!-- ═══ MAIN CONTENT ═══ -->
<div class="listing-layout">
  <div class="container">
    <div class="row g-4">

      <!-- ── SIDEBAR (desktop) ── -->
      <div class="col-lg-3 d-none d-lg-block">

        <!-- Active category highlight -->
        <div class="sidebar-card" style="border-color: rgba(0,166,103,0.3); background: var(--green-dim);">
          <div style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--green); font-weight:700; margin-bottom:6px;">Viewing</div>
          <div style="font-family:var(--font-head); font-size:1.05rem; font-weight:800; color:var(--white);">{{ $categoryName }}</div>
          <div style="font-size:0.78rem; color:var(--muted); margin-top:4px;">{{ $courses->count() }} course(s) available</div>
        </div>

        <!-- All categories -->
        <div class="sidebar-card">
          <div class="sidebar-title"><i class="ti ti-layout-grid"></i> All Categories</div>
          @foreach($categories as $category)
            <a href="{{ url('/courses/category/' . $category->slug) }}"
               class="sidebar-cat-link {{ $category->name === $categoryName ? 'active' : '' }}">
              {{ $category->name }}
              <span class="sidebar-count">{{ $category->courses->count() }}</span>
            </a>
          @endforeach
        </div>

        <!-- Back to all courses -->
        <a href="{{ route('user.courses') }}" class="btn-green" style="width:100%; justify-content:center; margin-top:4px;">
          <i class="ti ti-arrow-left"></i> All Courses
        </a>

      </div>
      <!-- /Sidebar -->

      <!-- ── CONTENT ── -->
      <div class="col-lg-9">

        <!-- Header -->
        <div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
          <div>
            <div class="section-label">{{ $categoryName }}</div>
            <div class="section-title">Browse Courses</div>
            <p class="section-sub">Learning center &amp; courses listing</p>
          </div>
          <div class="d-lg-none">
            <a href="{{ route('user.courses') }}" class="btn-green" style="padding:9px 16px; font-size:0.8rem;">
              <i class="ti ti-arrow-left"></i> All Courses
            </a>
          </div>
        </div>

        <!-- Filter bar -->
        <div class="filter-bar">
          <div class="filter-tabs">
            <button class="filter-tab active" data-filter="all">All</button>
            <button class="filter-tab" data-filter="latest">Latest</button>
            <button class="filter-tab" data-filter="popular">Popular</button>
            <button class="filter-tab" data-filter="featured">Featured</button>
          </div>
          <span class="result-count d-none d-md-block">
            <strong>{{ $courses->count() }}</strong> course(s) in {{ $categoryName }}
          </span>
        </div>

        <!-- Course grid -->
        <div class="course-grid" id="courseGrid">
          @if($courses->count() > 0)
            @foreach($courses as $course)
            <div class="course-item" data-category="{{ strtolower($course->tag ?? 'featured') }}">
              <div class="course-card">

                <!-- Thumbnail -->
                <div class="course-thumb">
                  <a href="{{ route('user.courses.show', $course->slug) }}">
                    <img src="{{ asset('images/thumbnails/'.$course->thumbnail) }}" alt="{{ $course->title }}">
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
                      @for($s = 1; $s <= 5; $s++)
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

                  <div class="delivery-tag">
                    <i class="ti ti-clock" style="font-size:11px;"></i> Delivery in 1 day
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
            @endforeach
          @else
            <div class="empty-state">
              <i class="ti ti-books"></i>
              <h4>No courses found</h4>
              <p>No courses are available in the <strong style="color:var(--green);">{{ $categoryName }}</strong> category yet.</p>
              <a href="{{ route('user.courses') }}" class="btn-green mt-3" style="margin: 0 auto;">
                <i class="ti ti-arrow-left"></i> Browse All Courses
              </a>
            </div>
          @endif
        </div>

      </div>
      <!-- /Content -->

    </div>
  </div>
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
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    });
  });
});
</script>

@endsection