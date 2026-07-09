@extends('layouts.guest')
@section('title', $categoryName . ' Talents')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">




<!-- ═══ PAGE HEADER ═══ -->
<div class="page-header">
  <div class="container">
    <div class="page-header-eyebrow">Category</div>
    <h1>
      Explore <span class="accent">{{ $categoryName }}</span> Skilled People
    </h1>
    <p>Connect with the next wave of skilled professionals — fresh perspectives, verified talent.</p>
  </div>
</div>

<!-- ═══ CATEGORY STRIP ═══ -->
<div class="cat-strip">
  <div class="container">
    <div class="cat-scroll">
      @foreach($categories as $cat)
        <a href="{{ route('user.talents.category', $cat->slug) }}"
           class="cat-chip {{ $cat->name === $categoryName ? 'active' : '' }}">
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
               class="sidebar-cat-link {{ $cat->name === $categoryName ? 'active' : '' }}">
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
            <h4>No skills found</h4>
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
         class="sidebar-cat-link {{ $cat->name === $categoryName ? 'active' : '' }}">
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