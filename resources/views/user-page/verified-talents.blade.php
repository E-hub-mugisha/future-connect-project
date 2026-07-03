@extends('layouts.guest')
@section('title', 'Verified Skills | Future Connect')
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
    --white:      #ffffff;
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
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 48px 0 40px;
    position: relative;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .page-header-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--green);
    margin-bottom: 10px;
  }

  .page-header-eyebrow::before {
    content: '';
    display: inline-block;
    width: 18px; height: 2px;
    background: var(--green);
    border-radius: 1px;
  }

  .page-header h1 {
    font-family: var(--font-head);
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.03em;
    margin-bottom: 8px;
  }

  .page-header h1 .accent { color: var(--green); }

  .page-header p {
    color: var(--muted);
    font-size: 0.92rem;
    max-width: 480px;
  }

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

  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--text);
    font-family: var(--font-body); font-weight: 500; font-size: 0.85rem;
    padding: 10px 20px; border-radius: var(--radius);
    border: 1px solid var(--border); cursor: pointer; text-decoration: none;
    transition: var(--t);
  }
  .btn-outline:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }

  /* ─── CATEGORY STRIP ─── */
  .cat-strip {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 16px 0;
  }

  .cat-scroll {
    display: flex; gap: 10px;
    overflow-x: auto; padding-bottom: 4px;
    scrollbar-width: none;
  }
  .cat-scroll::-webkit-scrollbar { display: none; }

  .cat-chip {
    flex-shrink: 0;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 50px;
    padding: 7px 16px;
    font-size: 0.78rem; font-weight: 500;
    color: var(--muted); text-decoration: none;
    white-space: nowrap;
    transition: var(--t);
  }
  .cat-chip:hover, .cat-chip.active {
    border-color: var(--green);
    color: var(--green);
    background: var(--green-dim);
  }

  /* ─── LAYOUT ─── */
  .listing-layout {
    padding: 48px 0 80px;
  }

  /* ─── FILTER BAR ─── */
  .filter-bar {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px 20px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }

  .filter-tabs {
    display: flex; gap: 6px; flex-wrap: wrap;
  }

  .filter-tab {
    padding: 7px 16px;
    border-radius: 50px;
    font-size: 0.8rem; font-weight: 600;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: var(--t);
  }

  .filter-tab:hover { border-color: var(--green); color: var(--green); }

  .filter-tab.active {
    background: var(--green);
    border-color: var(--green);
    color: #fff;
    box-shadow: 0 0 10px var(--green-glow);
  }

  .sort-select {
    background: var(--bg3);
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: var(--radius);
    padding: 8px 14px;
    font-size: 0.8rem;
    font-family: var(--font-body);
    cursor: pointer;
    transition: border-color var(--t);
    min-width: 160px;
  }
  .sort-select:focus { border-color: var(--green); outline: none; }

  /* ─── TALENT CARDS ─── */
  .talent-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }

  .talent-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px 20px 20px;
    display: flex; flex-direction: column; align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform var(--t), border-color var(--t), box-shadow var(--t);
    text-decoration: none;
  }

  .talent-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--green), transparent);
    opacity: 0; transition: opacity var(--t);
  }

  .talent-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0,166,103,0.35);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  }

  .talent-card:hover::before { opacity: 1; }

  /* Avatar */
  .talent-avatar-wrap {
    position: relative;
    width: 84px; height: 84px;
    margin-bottom: 16px;
  }

  .talent-avatar {
    width: 84px; height: 84px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
    transition: border-color var(--t);
  }

  .talent-card:hover .talent-avatar { border-color: var(--green); }

  .verify-badge {
    position: absolute; bottom: 2px; right: 2px;
    width: 22px; height: 22px;
    background: var(--bg2);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; color: var(--green);
    border: 1px solid var(--border);
  }

  /* Info */
  .talent-name {
    font-family: var(--font-head);
    font-size: 0.95rem; font-weight: 700;
    color: var(--white);
    margin-bottom: 4px;
    text-decoration: none;
    transition: color var(--t);
  }

  .talent-card:hover .talent-name { color: var(--green); }

  .talent-cat {
    font-size: 0.75rem;
    color: var(--green);
    background: var(--green-dim);
    border: 1px solid rgba(0,166,103,0.2);
    border-radius: 50px;
    padding: 3px 10px;
    margin-bottom: 14px;
    display: inline-block;
  }

  /* Badges */
  .talent-badges {
    display: flex; gap: 8px; justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .tbadge {
    display: inline-flex; align-items: center; gap: 5px;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 50px;
    padding: 4px 12px;
    font-size: 0.75rem;
    color: var(--muted);
  }

  .tbadge i { color: var(--green); font-size: 11px; }

  .talent-card:hover .tbadge-hover { display: inline-flex !important; }
  .talent-card:not(:hover) .tbadge-hover { display: none !important; }

  /* CTA button */
  .talent-view-btn {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--green-dim);
    border: 1px solid rgba(0,166,103,0.25);
    color: var(--green);
    border-radius: 50px;
    padding: 9px 22px;
    font-size: 0.8rem; font-weight: 700;
    text-decoration: none;
    transition: var(--t);
    margin-top: auto;
    width: 100%; justify-content: center;
  }

  .talent-view-btn:hover {
    background: var(--green);
    color: #fff;
    border-color: var(--green);
    box-shadow: 0 0 14px var(--green-glow);
  }

  /* Empty state */
  .empty-state {
    grid-column: 1/-1;
    text-align: center;
    padding: 80px 20px;
    color: var(--muted);
  }

  .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }

  .empty-state h4 {
    font-family: var(--font-head);
    color: var(--text);
    margin-bottom: 8px;
  }

  /* ─── SIDEBAR (desktop) ─── */
  .sidebar-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    margin-bottom: 18px;
  }

  .sidebar-title {
    font-family: var(--font-head);
    font-size: 0.85rem; font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }

  .sidebar-title i { color: var(--green); }

  .sidebar-cat-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 9px 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: var(--text);
    font-size: 0.85rem;
    transition: color var(--t);
  }

  .sidebar-cat-link:last-child { border-bottom: none; }
  .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

  .sidebar-cat-link .count {
    font-size: 0.72rem;
    color: var(--muted);
    background: var(--bg3);
    border-radius: 50px;
    padding: 2px 8px;
  }

  /* Search input (sidebar) */
  .sidebar-search {
    background: var(--bg3);
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: var(--radius);
    padding: 10px 14px;
    font-family: var(--font-body);
    font-size: 0.85rem;
    width: 100%;
    transition: border-color var(--t);
  }
  .sidebar-search::placeholder { color: var(--muted); }
  .sidebar-search:focus { border-color: var(--green); outline: none; }

  /* ─── OFFCANVAS ─── */
  #mobileFilters .offcanvas-body,
  #mobileFilters .offcanvas-header {
    background: var(--bg2);
    color: var(--white);
    border-right: 1px solid var(--border);
  }

  #mobileFilters .btn-close { filter: invert(1); }

  /* ─── MOBILE CAROUSEL ─── */
  .carousel-indicators [data-bs-target] {
    background-color: var(--green);
    border-radius: 2px;
    width: 18px; height: 3px;
    border: none;
    opacity: 0.4;
  }
  .carousel-indicators .active { opacity: 1; width: 28px; }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: none;
    background-color: var(--green-dim);
    border-radius: 50%;
    padding: 18px;
  }

  /* ─── PAGINATION ─── */
  .pagination-wrap {
    display: flex; justify-content: center;
    gap: 8px; margin-top: 48px;
  }

  .page-btn {
    width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--bg2);
    color: var(--text);
    font-size: 0.85rem;
    cursor: pointer;
    text-decoration: none;
    transition: var(--t);
  }

  .page-btn:hover, .page-btn.active {
    border-color: var(--green);
    color: var(--green);
    background: var(--green-dim);
  }

  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }
</style>


<!-- ═══ PAGE HEADER ═══ -->
<div class="page-header">
  <div class="container">
    <div class="page-header-eyebrow">Verified</div>
    <h1>
      Explore <span class="accent">Verified</span> Skilled People
    </h1>
    <p>Connect with the next wave of skilled professionals — fresh perspectives, verified skills.</p>
  </div>
</div>

<!-- ═══ CATEGORY STRIP ═══ -->
<div class="cat-strip">
  <div class="container">
    <div class="cat-scroll">
      @foreach($categories as $cat)
        <a href="{{ route('user.talents.category', $cat->slug) }}"
           class="cat-chip">
          {{ $cat->name }}
        </a>
      @endforeach
    </div>
  </div>
</div>

<div class="section-divider"></div>

<!-- ═══ MAIN LISTING ═══ -->
<div class="listing-layout">
  <div class="container">

    <!-- Mobile filter toggle -->
    <div class="d-lg-none mb-4 d-flex gap-3 align-items-center">
      <button class="btn-outline" data-bs-toggle="offcanvas" data-bs-target="#mobileFilters">
        <i class="ti ti-filter"></i> Filters &amp; Categories
      </button>
      <button class="btn-outline" data-bs-toggle="modal" data-bs-target="#searchModal">
        <i class="ti ti-search"></i> Search
      </button>
    </div>

    <div class="row g-4">

      <!-- ── SIDEBAR (desktop) ── -->
      <div class="col-lg-3 d-none d-lg-block">

        <!-- Search -->
        <div class="sidebar-card">
          <div class="sidebar-title"><i class="ti ti-search"></i> Search</div>
          <input type="text" class="sidebar-search" id="sidebarSearch" placeholder="Search talents...">
        </div>

        <!-- Categories -->
        <div class="sidebar-card">
          <div class="sidebar-title"><i class="ti ti-layout-grid"></i> Categories</div>
          @foreach($categories as $cat)
            <a href="{{ route('user.talents.category', $cat->slug) }}"
               class="sidebar-cat-link">
              {{ $cat->name }}
              <span class="count">{{ optional($cat->talents)->count() ?? 0 }}</span>
            </a>
          @endforeach
        </div>

      </div>
      <!-- /Sidebar -->

      <!-- ── CONTENT ── -->
      <div class="col-lg-9">

        <!-- Filter bar -->
        <div class="filter-bar">
          <div class="filter-tabs">
            <button class="filter-tab active" data-filter="all">All</button>
            <button class="filter-tab" data-filter="latest">Latest</button>
            <button class="filter-tab" data-filter="popular">Popular</button>
            <button class="filter-tab" data-filter="featured">Featured</button>
            <button class="filter-tab" data-filter="recommended">Recommended</button>
          </div>
          <div class="d-flex align-items-center gap-3">
            <button class="btn-green d-none d-md-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i class="ti ti-search"></i> Search Skills
            </button>
          </div>
        </div>

        <!-- Desktop grid -->
        <div class="talent-grid d-none d-md-grid" id="talentGrid">
          @forelse($talents as $talent)
          <div class="talent-card-wrap talent-item" data-category="{{ strtolower($talent->tag ?? 'featured') }}">
            <div class="talent-card">

              <div class="talent-avatar-wrap">
                <img
                  class="talent-avatar"
                  src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                  alt="{{ $talent->name }}">
                <span class="verify-badge"><i class="ti ti-discount-check-filled"></i></span>
              </div>

              <a href="{{ route('user.talent.details', $talent->id) }}" class="talent-name">
                {{ $talent->name }}
              </a>

              <span class="talent-cat">{{ $talent->category->name ?? 'Uncategorized' }}</span>

              <!-- Default badges -->
              <div class="talent-badges">
                <span class="tbadge">
                  <i class="ti ti-star"></i>
                  {{ number_format($talent->feedback->avg('rating'), 1) }}
                </span>
                <span class="tbadge">
                  <i class="ti ti-message-2"></i>
                  {{ $talent->feedback->count() }}
                </span>
              </div>

              <!-- Hover badges -->
              <div class="talent-badges" style="display:none;" data-hover-badges>
                <span class="tbadge">{{ $talent->skill }}</span>
                <span class="tbadge">{{ $talent->language }}</span>
              </div>

              <a href="{{ route('user.talent.details', $talent->id) }}" class="talent-view-btn">
                <i class="feather-arrow-right"></i> View Profile
              </a>

            </div>
          </div>
          @empty
          <div class="empty-state">
            <i class="ti ti-users-off"></i>
            <h4>No talents found</h4>
            <p>Try a different category or search keyword.</p>
          </div>
          @endforelse
        </div>

        <!-- Mobile carousel -->
        <div id="talentsCarousel" class="carousel slide d-md-none" data-bs-ride="carousel">
          <div class="carousel-inner">
            @forelse($talents as $index => $talent)
            <div class="carousel-item {{ $index == 0 ? 'active' : '' }}">
              <div class="talent-card mx-auto" style="max-width:320px;">

                <div class="talent-avatar-wrap">
                  <img
                    class="talent-avatar"
                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                    alt="{{ $talent->name }}">
                  <span class="verify-badge"><i class="ti ti-discount-check-filled"></i></span>
                </div>

                <a href="{{ route('user.talent.details', $talent->id) }}" class="talent-name">
                  {{ $talent->name }}
                </a>

                <span class="talent-cat">{{ $talent->category->name ?? 'Uncategorized' }}</span>

                <div class="talent-badges">
                  <span class="tbadge"><i class="ti ti-star"></i> {{ number_format($talent->feedback->avg('rating'), 1) }}</span>
                  <span class="tbadge"><i class="ti ti-message-2"></i> {{ $talent->feedback->count() }}</span>
                  <span class="tbadge">{{ $talent->language }}</span>
                </div>

                <a href="{{ route('user.talent.details', $talent->id) }}" class="talent-view-btn">
                  <i class="feather-arrow-right"></i> View Profile
                </a>

              </div>
            </div>
            @empty
            <div class="carousel-item active">
              <div class="empty-state"><i class="ti ti-users-off"></i><h4>No talents found</h4></div>
            </div>
            @endforelse
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#talentsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#talentsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>

          <div class="carousel-indicators" style="bottom:-32px;">
            @foreach($talents as $index => $talent)
            <button type="button" data-bs-target="#talentsCarousel" data-bs-slide-to="{{ $index }}" class="{{ $index == 0 ? 'active' : '' }}"></button>
            @endforeach
          </div>
        </div>

      </div>
      <!-- /Content -->

    </div>
  </div>
</div>

<!-- ═══ OFFCANVAS (Mobile Filters) ═══ -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="mobileFilters">
  <div class="offcanvas-header" style="background:var(--bg2); border-bottom:1px solid var(--border);">
    <h5 class="offcanvas-title" style="font-family:var(--font-head); color:var(--white);">Filters &amp; Categories</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" style="filter:invert(1);"></button>
  </div>
  <div class="offcanvas-body" style="background:var(--bg2);">

    <input type="text" class="sidebar-search mb-4" placeholder="Search talents...">

    <div class="sidebar-title mb-3"><i class="ti ti-layout-grid"></i> Categories</div>
    @foreach($categories as $cat)
      <a href="{{ route('user.talents.category', $cat->slug) }}"
         class="sidebar-cat-link">
        {{ $cat->name }}
        <span class="count">{{ optional($cat->talents)->count() ?? 0 }}</span>
      </a>
    @endforeach

  </div>
</div>

<!-- ═══ SEARCH MODAL ═══ -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content" style="background:var(--bg2); border:1px solid var(--border); border-radius:var(--radius-lg);">
      <div class="modal-header" style="background:var(--bg3); border-bottom:1px solid var(--border); padding:20px 28px;">
        <h5 class="modal-title" style="font-family:var(--font-head); color:var(--white);">
          <i class="ti ti-search me-2" style="color:var(--green);"></i>Find Skills
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body" style="padding:28px;">
        <form method="GET" action="{{ route('user.talents') }}" class="row g-4">
          <div class="col-md-6">
            <label style="font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:6px;display:block;">Keyword</label>
            <input type="text" name="keyword" class="sidebar-search" style="border-radius:var(--radius);"
              placeholder="Search talents, skills, or names..." value="{{ request('keyword') }}">
          </div>
          <div class="col-md-6">
            <label style="font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:6px;display:block;">Category</label>
            <select name="category" class="sidebar-search" style="border-radius:var(--radius); cursor:pointer;">
              <option value="">All Categories</option>
              @foreach($categories as $cat)
              <option value="{{ $cat->id }}" {{ request('category') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
              @endforeach
            </select>
          </div>
          <div class="col-12 d-flex justify-content-end gap-3">
            <button type="button" class="btn-outline" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn-green"><i class="ti ti-search"></i> Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<script>
document.addEventListener("DOMContentLoaded", () => {

  /* ── Filter tabs ── */
  const tabs  = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.talent-item');

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

  /* ── Sidebar live search ── */
  const searchInput = document.getElementById('sidebarSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      items.forEach(item => {
        const name = item.querySelector('.talent-name')?.textContent?.toLowerCase() ?? '';
        const cat  = item.querySelector('.talent-cat')?.textContent?.toLowerCase() ?? '';
        item.style.display = (name.includes(q) || cat.includes(q)) ? '' : 'none';
      });
    });
  }

  /* ── Hover badge swap on talent cards ── */
  document.querySelectorAll('.talent-card').forEach(card => {
    const defaultB = card.querySelectorAll('.talent-badges')[0];
    const hoverB   = card.querySelector('[data-hover-badges]');
    if (!hoverB) return;

    card.addEventListener('mouseenter', () => {
      defaultB.style.display = 'none';
      hoverB.style.display   = 'flex';
    });
    card.addEventListener('mouseleave', () => {
      defaultB.style.display = 'flex';
      hoverB.style.display   = 'none';
    });
  });

});
</script>

@endsection