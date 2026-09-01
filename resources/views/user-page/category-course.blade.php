@extends('layouts.guest')

@section('title', $categoryName . ' Learning Material')

@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --bg:         #0e1618;
    --bg2:        #131d20;
    --bg3:        #18242a;
    --border:     rgba(255,255,255,0.07);
    --green:      #48d597;
    --green-dim:  rgba(0,166,103,0.12);
    --green-glow: rgba(0,166,103,0.3);
    --text:       #e8eef0;
    --muted:      #7a9199;
    --white:      #F5f5f7;
    --font-head:  'Syne', sans-serif;
    --font-body:  'DM Sans', sans-serif;
    --radius:     12px;
    --radius-lg:  18px;
    --t:          .25s ease;
  }

  *, *::before, *::after { box-sizing: border-box; }
  body { background: var(--bg); font-family: var(--font-body); color: var(--text); }

  /* ─── PAGE HEADER ─── */
  .page-header {
    position: relative;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 52px 0 44px;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: -100px; right: -60px;
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .page-header::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,166,103,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,166,103,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .ph-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.12em;
    color: var(--green); margin-bottom: 10px;
    position: relative; z-index: 1;
  }

  .ph-eyebrow::before {
    content: '';
    display: inline-block; width: 18px; height: 2px;
    background: var(--green); border-radius: 1px;
  }

  .page-header h1 {
    font-family: var(--font-head);
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    font-weight: 800; color: var(--white);
    letter-spacing: -0.03em; margin-bottom: 10px;
    position: relative; z-index: 1;
  }

  .page-header h1 .accent { color: var(--green); }

  .page-header p {
    color: var(--muted); font-size: 0.92rem;
    max-width: 480px; line-height: 1.7;
    position: relative; z-index: 1;
  }

  /* Breadcrumb */
  .ph-breadcrumb {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.78rem; color: var(--muted);
    margin-bottom: 16px;
    position: relative; z-index: 1;
  }

  .ph-breadcrumb a { color: var(--muted); text-decoration: none; transition: color var(--t); }
  .ph-breadcrumb a:hover { color: var(--green); }
  .ph-breadcrumb .sep { color: var(--border); }
  .ph-breadcrumb .current { color: var(--green); font-weight: 600; }

  /* ─── CATEGORY STRIP ─── */
  .cat-strip {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 14px 0;
  }

  .cat-scroll {
    display: flex; gap: 10px; overflow-x: auto;
    padding-bottom: 4px; scrollbar-width: none;
  }
  .cat-scroll::-webkit-scrollbar { display: none; }

  .cat-chip {
    flex-shrink: 0;
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: 50px; padding: 7px 16px;
    font-size: 0.78rem; font-weight: 500;
    color: var(--muted); text-decoration: none; white-space: nowrap;
    transition: var(--t);
  }
  .cat-chip:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }
  .cat-chip.active { border-color: var(--green); color: var(--green); background: var(--green-dim); }

  /* ─── BUTTONS ─── */
  .btn-green {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--green); color: #fff;
    font-family: var(--font-body); font-weight: 600; font-size: 0.85rem;
    padding: 10px 20px; border-radius: var(--radius);
    border: none; cursor: pointer; text-decoration: none;
    transition: var(--t);
  }
  .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

  /* ─── LAYOUT ─── */
  .listing-layout { padding: 48px 0 80px; }

  /* ─── FILTER BAR ─── */
  .filter-bar {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 14px 20px;
    display: flex; align-items: center; flex-wrap: wrap;
    gap: 10px; justify-content: space-between;
    margin-bottom: 28px;
  }

  .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }

  .filter-tab {
    padding: 7px 16px; border-radius: 50px;
    font-size: 0.78rem; font-weight: 600;
    border: 1px solid var(--border); background: transparent;
    color: var(--muted); cursor: pointer; transition: var(--t);
  }
  .filter-tab:hover { border-color: var(--green); color: var(--green); }
  .filter-tab.active {
    background: var(--green); border-color: var(--green);
    color: #fff; box-shadow: 0 0 10px var(--green-glow);
  }

  .result-count { font-size: 0.8rem; color: var(--muted); }
  .result-count strong { color: var(--green); font-family: var(--font-head); }

  /* ─── COURSE GRID ─── */
  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
  }

  .course-card {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: var(--radius-lg); overflow: hidden;
    display: flex; flex-direction: column;
    transition: transform var(--t), border-color var(--t), box-shadow var(--t);
  }

  .course-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0,166,103,0.35);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }

  /* Thumbnail */
  .course-thumb {
    position: relative; overflow: hidden; height: 190px;
  }

  .course-thumb img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s ease;
  }

  .course-card:hover .course-thumb img { transform: scale(1.06); }

  .course-thumb-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(14,22,24,0.7) 0%, transparent 50%);
  }

  .thumb-badge {
    position: absolute; top: 12px; left: 12px;
    background: var(--green); color: #fff;
    font-size: 0.7rem; font-weight: 700;
    padding: 4px 10px; border-radius: 50px;
    letter-spacing: 0.05em;
  }

  .thumb-price {
    position: absolute; bottom: 12px; right: 12px;
    background: var(--bg2); color: var(--green);
    font-family: var(--font-head); font-size: 0.88rem; font-weight: 800;
    padding: 4px 12px; border-radius: 50px;
    border: 1px solid rgba(0,166,103,0.3);
  }

  /* Body */
  .course-body { padding: 18px; flex: 1; display: flex; flex-direction: column; }

  .course-cat {
    font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--green); margin-bottom: 8px;
    text-decoration: none; display: inline-block;
  }

  .course-title {
    font-family: var(--font-head); font-size: 0.95rem; font-weight: 700;
    color: var(--white); margin-bottom: 12px; line-height: 1.4;
    text-decoration: none; display: block;
    overflow: hidden; display: -webkit-box;
    -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    transition: color var(--t);
  }
  .course-title:hover { color: var(--green); }

  /* Rating */
  .course-rating {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.78rem; color: var(--muted); margin-bottom: 14px;
  }
  .course-rating .stars { color: #f59e0b; font-size: 11px; }
  .course-rating .score { color: var(--text); font-weight: 600; }

  /* Delivery tag */
  .delivery-tag {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.72rem; color: var(--green);
    background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
    border-radius: 50px; padding: 3px 10px;
    margin-bottom: 14px;
  }

  /* Instructor row */
  .course-instructor {
    display: flex; align-items: center; gap: 10px;
    padding-top: 14px; margin-top: auto;
    border-top: 1px solid var(--border);
  }

  .inst-avatar {
    width: 30px; height: 30px;
    border-radius: 50%; object-fit: cover;
    border: 1px solid var(--border);
  }

  .inst-info { flex: 1; min-width: 0; }
  .inst-name { font-size: 0.78rem; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .inst-loc  { font-size: 0.7rem; color: var(--muted); }

  .course-view-btn {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
    color: var(--green); border-radius: 50px;
    padding: 6px 14px; font-size: 0.75rem; font-weight: 700;
    text-decoration: none; transition: var(--t); flex-shrink: 0;
  }
  .course-view-btn:hover { background: var(--green); color:#fff; border-color:var(--green); }

  /* Empty state */
  .empty-state {
    grid-column: 1/-1; text-align: center;
    padding: 80px 20px; color: var(--muted);
  }
  .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }
  .empty-state h4 { font-family: var(--font-head); color: var(--text); margin-bottom: 8px; }

  /* ─── SIDEBAR ─── */
  .sidebar-card {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 20px; margin-bottom: 16px;
  }

  .sidebar-title {
    font-family: var(--font-head); font-size: 0.82rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--muted); margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .sidebar-title i { color: var(--green); }

  .sidebar-cat-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 9px 0; border-bottom: 1px solid var(--border);
    text-decoration: none; color: var(--text); font-size: 0.85rem;
    transition: color var(--t);
  }
  .sidebar-cat-link:last-child { border-bottom: none; }
  .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

  .sidebar-count {
    font-size: 0.72rem; color: var(--muted);
    background: var(--bg3); border-radius: 50px; padding: 2px 8px;
  }

  /* ─── SECTION LABEL ─── */
  .section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.12em; color: var(--green); margin-bottom: 6px;
  }
  .section-label::before {
    content:''; display:inline-block;
    width:18px; height:2px; background:var(--green); border-radius:1px;
  }

  .section-title {
    font-family: var(--font-head);
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    font-weight: 800; color: var(--white);
    letter-spacing: -0.02em; margin-bottom: 4px;
  }

  .section-sub { color: var(--muted); font-size: 0.88rem; }

  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }
</style>


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