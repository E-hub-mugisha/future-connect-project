@extends('layouts.app')
@section('title', 'Skills lists')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
    :root {
        --growth:       #0D5C3A;
        --growth-light: #1A7A4E;
        --growth-pale:  #E8F5EE;
        --opp:          #E8630A;
        --opp-light:    #FF7A20;
        --opp-pale:     #FEF0E6;
        --gold:         #F5C842;
        --cream:        #FAF7F2;
        --ink:          #1A1A1A;
        --muted:        #6B7280;
        --border:       #E5DDD0;
    }

    body { background: var(--cream); font-family: 'Outfit', sans-serif; }

    /* ─── Page Header ─── */
    .page-header {
        background: var(--growth);
        position: relative;
        overflow: hidden;
        padding: 3rem 2rem 2.5rem;
    }
    .page-header::before {
        content: '';
        position: absolute;
        top: -60px; right: -60px;
        width: 260px; height: 260px;
        border-radius: 50%;
        background: rgba(245,200,66,.12);
    }
    .page-header::after {
        content: '';
        position: absolute;
        bottom: -40px; left: 30%;
        width: 160px; height: 160px;
        border-radius: 50%;
        background: rgba(232,99,10,.15);
    }
    .header-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }
    .header-badge {
        display: inline-block;
        background: rgba(245,200,66,.2);
        border: 1px solid var(--gold);
        color: var(--gold);
        font-size: .72rem;
        font-weight: 600;
        letter-spacing: .12em;
        text-transform: uppercase;
        padding: .25rem .75rem;
        border-radius: 100px;
        margin-bottom: .75rem;
    }
    .page-title {
        font-family: 'Playfair Display', Georgia, serif;
        color: #fff;
        font-size: 2.6rem;
        font-weight: 900;
        line-height: 1.1;
        margin: 0 0 .4rem;
    }
    .page-title span { color: var(--gold); }
    .page-subtitle { color: rgba(255,255,255,.65); font-size: .95rem; font-weight: 300; }
    .header-actions { margin-top: 1.75rem; display: flex; gap: .75rem; }
    .btn-create {
        display: inline-flex; align-items: center; gap: .45rem;
        background: var(--opp); color: #fff;
        font-weight: 600; font-size: .9rem;
        padding: .65rem 1.4rem; border-radius: 8px;
        text-decoration: none; border: none; cursor: pointer;
        transition: background .2s, transform .15s;
    }
    .btn-create:hover { background: var(--opp-light); transform: translateY(-1px); }
    .stat-chips { display: flex; gap: .75rem; flex-wrap: wrap; }
    .stat-chip {
        background: rgba(255,255,255,.1);
        border: 1px solid rgba(255,255,255,.18);
        color: #fff; border-radius: 100px;
        padding: .3rem .9rem;
        font-size: .82rem; font-weight: 500;
    }
    .stat-chip strong { color: var(--gold); margin-right: .3em; }

    /* ─── Filter Bar ─── */
    .filter-wrapper { max-width: 1200px; margin: -1.25rem auto 0; padding: 0 2rem; position: relative; z-index: 10; }
    .filter-card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 14px;
        box-shadow: 0 4px 24px rgba(13,92,58,.08);
        padding: 1.25rem 1.5rem;
        display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;
    }
    .filter-group { display: flex; flex-direction: column; gap: .35rem; flex: 1; min-width: 160px; }
    .filter-group label {
        font-size: .72rem; font-weight: 600; letter-spacing: .08em;
        text-transform: uppercase; color: var(--muted);
    }
    .filter-control {
        border: 1.5px solid var(--border); border-radius: 8px;
        padding: .55rem .85rem; font-family: 'Outfit', sans-serif;
        font-size: .88rem; color: var(--ink); background: var(--cream);
        outline: none; transition: border-color .2s;
        appearance: none; -webkit-appearance: none;
    }
    .filter-control:focus { border-color: var(--growth); background: #fff; }
    .search-wrap { position: relative; }
    .search-wrap .filter-control { padding-left: 2.4rem; width: 100%; }
    .search-icon {
        position: absolute; left: .8rem; top: 50%; transform: translateY(-50%);
        color: var(--muted); pointer-events: none;
    }
    .btn-filter {
        background: var(--growth); color: #fff;
        border: none; border-radius: 8px;
        padding: .58rem 1.3rem; font-family: 'Outfit', sans-serif;
        font-size: .88rem; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; gap: .4rem;
        transition: background .2s; white-space: nowrap;
    }
    .btn-filter:hover { background: var(--growth-light); }
    .btn-reset {
        background: transparent; color: var(--muted);
        border: 1.5px solid var(--border); border-radius: 8px;
        padding: .55rem 1rem; font-family: 'Outfit', sans-serif;
        font-size: .85rem; cursor: pointer; transition: color .2s, border-color .2s;
        white-space: nowrap;
    }
    .btn-reset:hover { color: var(--opp); border-color: var(--opp); }

    /* Active filters pills */
    .active-filters { display: flex; gap: .5rem; flex-wrap: wrap; margin-top: .75rem; }
    .filter-pill {
        display: inline-flex; align-items: center; gap: .35rem;
        background: var(--growth-pale); border: 1px solid rgba(13,92,58,.2);
        color: var(--growth); font-size: .78rem; font-weight: 500;
        padding: .2rem .65rem; border-radius: 100px;
    }
    .filter-pill a { color: var(--growth); opacity: .6; text-decoration: none; margin-left: .15rem; }
    .filter-pill a:hover { opacity: 1; }

    /* ─── Main Content ─── */
    .content-wrapper { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; }

    /* ─── Sort / View bar ─── */
    .toolbar {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 1.25rem; flex-wrap: wrap; gap: .75rem;
    }
    .result-count { font-size: .88rem; color: var(--muted); }
    .result-count strong { color: var(--ink); }
    .view-toggle { display: flex; gap: .3rem; }
    .view-btn {
        padding: .4rem .55rem; border: 1.5px solid var(--border);
        border-radius: 6px; background: #fff; cursor: pointer; color: var(--muted);
        transition: all .2s;
    }
    .view-btn.active { border-color: var(--growth); color: var(--growth); background: var(--growth-pale); }

    /* ─── Talent Grid ─── */
    .talent-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; }

    .talent-card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 14px;
        overflow: hidden;
        transition: box-shadow .25s, transform .2s;
        display: flex; flex-direction: column;
    }
    .talent-card:hover {
        box-shadow: 0 8px 32px rgba(13,92,58,.12);
        transform: translateY(-3px);
    }
    .card-img-wrap { position: relative; height: 180px; overflow: hidden; background: var(--growth-pale); }
    .card-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
    .talent-card:hover .card-img-wrap img { transform: scale(1.04); }
    .card-badge {
        position: absolute; top: .75rem; left: .75rem;
        font-size: .7rem; font-weight: 700; letter-spacing: .06em;
        text-transform: uppercase; padding: .2rem .6rem; border-radius: 100px;
    }
    .badge-active   { background: var(--growth); color: #fff; }
    .badge-inactive { background: var(--muted); color: #fff; }
    .badge-pending  { background: var(--gold); color: var(--ink); }
    .featured-star {
        position: absolute; top: .75rem; right: .75rem;
        background: var(--gold); color: var(--ink);
        width: 28px; height: 28px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: .8rem;
    }
    .no-img {
        width: 100%; height: 100%; display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: .5rem;
        color: var(--growth); opacity: .4;
    }
    .no-img-icon { font-size: 2.5rem; }
    .no-img-text { font-size: .75rem; font-weight: 500; }

    .card-body { padding: 1.1rem 1.25rem; flex: 1; display: flex; flex-direction: column; }
    .card-category {
        font-size: .72rem; font-weight: 600; letter-spacing: .08em;
        text-transform: uppercase; color: var(--opp); margin-bottom: .3rem;
    }
    .card-name {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem; font-weight: 700;
        color: var(--ink); margin: 0 0 .5rem;
        text-decoration: none; display: block;
    }
    .card-name:hover { color: var(--growth); }
    .card-desc {
        font-size: .85rem; color: var(--muted); line-height: 1.55;
        display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
        overflow: hidden; flex: 1;
    }
    .card-meta { display: flex; flex-wrap: wrap; gap: .4rem .75rem; margin-top: .85rem; }
    .meta-item {
        display: flex; align-items: center; gap: .3rem;
        font-size: .78rem; color: var(--muted);
    }
    .meta-item svg { width: 13px; height: 13px; }
    .card-level {
        display: inline-flex; align-items: center; gap: .3rem;
        background: var(--opp-pale); color: var(--opp);
        font-size: .72rem; font-weight: 600;
        padding: .18rem .55rem; border-radius: 100px; margin-top: .6rem;
    }
    .card-footer {
        border-top: 1px solid var(--border);
        padding: .75rem 1.25rem;
        display: flex; gap: .5rem; justify-content: flex-end;
    }
    .btn-sm {
        font-family: 'Outfit', sans-serif; font-size: .78rem; font-weight: 600;
        padding: .35rem .85rem; border-radius: 6px; border: none; cursor: pointer;
        text-decoration: none; display: inline-flex; align-items: center; gap: .3rem;
        transition: all .2s;
    }
    .btn-view { background: var(--growth-pale); color: var(--growth); }
    .btn-view:hover { background: var(--growth); color: #fff; }
    .btn-edit { background: var(--opp-pale); color: var(--opp); }
    .btn-edit:hover { background: var(--opp); color: #fff; }
    .btn-delete { background: #FEE2E2; color: #DC2626; }
    .btn-delete:hover { background: #DC2626; color: #fff; }

    /* ─── Talent Table (list view) ─── */
    .talent-table { display: none; }
    .talent-table.visible { display: block; }
    .talent-table table { width: 100%; border-collapse: collapse; }
    .talent-table th {
        font-size: .72rem; font-weight: 600; letter-spacing: .08em;
        text-transform: uppercase; color: var(--muted);
        padding: .75rem 1rem; text-align: left;
        background: var(--cream); border-bottom: 2px solid var(--border);
    }
    .talent-table td {
        padding: .9rem 1rem; border-bottom: 1px solid var(--border);
        font-size: .88rem; vertical-align: middle;
    }
    .talent-table tr:hover td { background: var(--growth-pale); }
    .td-name { display: flex; align-items: center; gap: .75rem; }
    .td-avatar {
        width: 42px; height: 42px; border-radius: 8px; object-fit: cover;
        background: var(--growth-pale); flex-shrink: 0;
    }
    .td-name-text strong { display: block; font-weight: 600; color: var(--ink); }
    .td-name-text span { font-size: .78rem; color: var(--muted); }

    /* ─── Empty State ─── */
    .empty-state {
        text-align: center; padding: 4rem 2rem;
        background: #fff; border-radius: 14px; border: 1px solid var(--border);
    }
    .empty-icon { font-size: 3.5rem; margin-bottom: 1rem; }
    .empty-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--ink); margin: 0 0 .5rem; }
    .empty-sub { color: var(--muted); font-size: .9rem; }

    /* ─── Pagination ─── */
    .pagination-wrap { margin-top: 2rem; display: flex; justify-content: center; }
    .pagination { display: flex; gap: .3rem; }
    .page-link {
        padding: .45rem .75rem; border-radius: 7px; border: 1.5px solid var(--border);
        background: #fff; color: var(--ink); text-decoration: none; font-size: .85rem;
        transition: all .2s;
    }
    .page-link:hover, .page-link.active { background: var(--growth); color: #fff; border-color: var(--growth); }
    .page-link.disabled { opacity: .4; pointer-events: none; }

    /* ─── Responsive ─── */
    @media (max-width: 768px) {
        .page-title { font-size: 1.8rem; }
        .filter-card { flex-direction: column; }
        .filter-group { min-width: 100%; }
        .talent-grid { grid-template-columns: 1fr; }
    }
</style>


{{-- Page Header --}}
<div class="page-header">
    <div class="header-inner">
        <div class="header-badge">✦ Talent Directory</div>
        <h1 class="page-title">Empowering <span>Talent</span><br>& Opportunities</h1>
        <p class="page-subtitle">Discover, connect, and grow with Rwanda's finest professionals</p>

        <div class="header-actions">
            <a href="{{ route('admin.talents.create') }}" class="btn-create">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add Talent
            </a>
            <div class="stat-chips">
                <div class="stat-chip"><strong>9</strong> Total</div>
                <div class="stat-chip"><strong>9</strong> Active</div>
                <div class="stat-chip"><strong>0</strong> Featured</div>
            </div>
        </div>
    </div>
</div>

{{-- Filter Card --}}
<div class="filter-wrapper">
    <form method="GET" action="{{ route('admin.talents.index') }}" id="filterForm">
        <div class="filter-card">
            {{-- Search --}}
            <div class="filter-group" style="flex:2; min-width:220px;">
                <label>Search</label>
                <div class="search-wrap">
                    <span class="search-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    </span>
                    <input type="text" name="search" class="filter-control" placeholder="Name, email, address…" value="{{ request('search') }}">
                </div>
            </div>

            {{-- Category --}}
            <div class="filter-group">
                <label>Category</label>
                <select name="category_id" class="filter-control">
                    <option value="">All Categories</option>
                    @foreach($categories ?? [] as $cat)
                        <option value="{{ $cat->id }}" {{ request('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                    @endforeach
                </select>
            </div>

            {{-- Status --}}
            <div class="filter-group">
                <label>Status</label>
                <select name="status" class="filter-control">
                    <option value="">All Status</option>
                    <option value="active"   {{ request('status') == 'active'   ? 'selected' : '' }}>Active</option>
                    <option value="inactive" {{ request('status') == 'inactive' ? 'selected' : '' }}>Inactive</option>
                    <option value="pending"  {{ request('status') == 'pending'  ? 'selected' : '' }}>Pending</option>
                </select>
            </div>

            {{-- Level --}}
            <div class="filter-group">
                <label>Level</label>
                <select name="level" class="filter-control">
                    <option value="">All Levels</option>
                    <option value="junior"   {{ request('level') == 'junior'   ? 'selected' : '' }}>Junior</option>
                    <option value="mid"      {{ request('level') == 'mid'      ? 'selected' : '' }}>Mid-Level</option>
                    <option value="senior"   {{ request('level') == 'senior'   ? 'selected' : '' }}>Senior</option>
                    <option value="expert"   {{ request('level') == 'expert'   ? 'selected' : '' }}>Expert</option>
                </select>
            </div>

            {{-- Featured --}}
            <div class="filter-group">
                <label>Featured</label>
                <select name="featured" class="filter-control">
                    <option value="">All</option>
                    <option value="1" {{ request('featured') == '1' ? 'selected' : '' }}>Featured Only</option>
                    <option value="0" {{ request('featured') == '0' ? 'selected' : '' }}>Not Featured</option>
                </select>
            </div>

            {{-- Language --}}
            <div class="filter-group">
                <label>Language</label>
                <select name="language" class="filter-control">
                    <option value="">All Languages</option>
                    <option value="kinyarwanda" {{ request('language') == 'kinyarwanda' ? 'selected' : '' }}>Kinyarwanda</option>
                    <option value="english"     {{ request('language') == 'english'     ? 'selected' : '' }}>English</option>
                    <option value="french"      {{ request('language') == 'french'      ? 'selected' : '' }}>French</option>
                    <option value="swahili"     {{ request('language') == 'swahili'     ? 'selected' : '' }}>Swahili</option>
                </select>
            </div>

            {{-- Actions --}}
            <button type="submit" class="btn-filter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Filter
            </button>
            @if(request()->hasAny(['search','category_id','status','level','featured','language']))
                <a href="{{ route('admin.talents.index') }}" class="btn-reset">✕ Clear</a>
            @endif
        </div>

        {{-- Active filter pills --}}
        @if(request()->hasAny(['search','category_id','status','level','featured','language']))
        <div class="active-filters">
            @if(request('search'))
                <span class="filter-pill">Search: "{{ request('search') }}" <a href="{{ request()->fullUrlWithoutQuery(['search']) }}">×</a></span>
            @endif
            @if(request('status'))
                <span class="filter-pill">Status: {{ ucfirst(request('status')) }} <a href="{{ request()->fullUrlWithoutQuery(['status']) }}">×</a></span>
            @endif
            @if(request('level'))
                <span class="filter-pill">Level: {{ ucfirst(request('level')) }} <a href="{{ request()->fullUrlWithoutQuery(['level']) }}">×</a></span>
            @endif
            @if(request('featured') !== null && request('featured') !== '')
                <span class="filter-pill">{{ request('featured') == '1' ? '⭐ Featured' : 'Not Featured' }} <a href="{{ request()->fullUrlWithoutQuery(['featured']) }}">×</a></span>
            @endif
            @if(request('language'))
                <span class="filter-pill">🌐 {{ ucfirst(request('language')) }} <a href="{{ request()->fullUrlWithoutQuery(['language']) }}">×</a></span>
            @endif
        </div>
        @endif
    </form>
</div>

{{-- Main Content --}}
<div class="content-wrapper">

    {{-- Toolbar --}}
    <div class="toolbar">
        <div class="result-count">
            Showing <strong>1–12</strong>
            of <strong>2</strong> talents
        </div>
        <div style="display:flex;align-items:center;gap:1rem;">
            <select name="sort" class="filter-control" style="padding:.4rem .75rem;font-size:.82rem;" onchange="applySort(this.value)">
                <option value="latest"  {{ request('sort') == 'latest'  ? 'selected' : '' }}>Newest First</option>
                <option value="oldest"  {{ request('sort') == 'oldest'  ? 'selected' : '' }}>Oldest First</option>
                <option value="name"    {{ request('sort') == 'name'    ? 'selected' : '' }}>Name A–Z</option>
                <option value="matched" {{ request('sort') == 'matched' ? 'selected' : '' }}>Most Matched</option>
            </select>
            <div class="view-toggle">
                <button class="view-btn active" id="gridBtn" onclick="setView('grid')" title="Grid">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </button>
                <button class="view-btn" id="listBtn" onclick="setView('list')" title="List">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </button>
            </div>
        </div>
    </div>

    @if($talents->isEmpty())
        <div class="empty-state">
            <div class="empty-icon">🌱</div>
            <h3 class="empty-title">No Talents Found</h3>
            <p class="empty-sub">Try adjusting your filters or <a href="{{ route('admin.talents.create') }}" style="color:var(--opp);">add the first talent</a>.</p>
        </div>
    @else

    {{-- Grid View --}}
    <div class="talent-grid" id="gridView">
        @foreach($talents as $talent)
        <div class="talent-card">
            <div class="card-img-wrap">
                @if($talent->image)
                    <img src="{{ asset('image/' . $talent->image) }}" alt="{{ $talent->name }}">
                @else
                    <div class="no-img">
                        <div class="no-img-icon">👤</div>
                        <div class="no-img-text">No Photo</div>
                    </div>
                @endif
                <span class="card-badge badge-{{ $talent->status ?? 'active' }}">{{ ucfirst($talent->status ?? 'Active') }}</span>
                @if($talent->featured)
                    <span class="featured-star" title="Featured">⭐</span>
                @endif
            </div>
            <div class="card-body">
                <div class="card-category">{{ $talent->category->name ?? 'Uncategorized' }}</div>
                <a href="{{ route('admin.talents.show', $talent) }}" class="card-name">{{ $talent->name }}</a>
                <p class="card-desc">{{ $talent->description }}</p>
                <div class="card-meta">
                    @if($talent->address)
                    <span class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ $talent->address }}
                    </span>
                    @endif
                    @if($talent->language)
                    <span class="meta-item">🌐 {{ ucfirst($talent->language) }}</span>
                    @endif
                    @if($talent->matched)
                    <span class="meta-item">🤝 {{ $talent->matched }} matched</span>
                    @endif
                </div>
                @if($talent->level)
                    <span class="card-level">⚡ {{ ucfirst($talent->level) }}</span>
                @endif
            </div>
            <div class="card-footer">
                <a href="{{ route('admin.talents.show', $talent) }}" class="btn-sm btn-view">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View
                </a>
                <a href="{{ route('admin.talents.edit', $talent) }}" class="btn-sm btn-edit">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Edit
                </a>
                <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}" style="display:inline;" onsubmit="return confirm('Delete {{ $talent->name }}?')">
                    @csrf @method('DELETE')
                    <button type="submit" class="btn-sm btn-delete">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                    </button>
                </form>
            </div>
        </div>
        @endforeach
    </div>

    {{-- List View --}}
    <div class="talent-table" id="listView">
        <div style="background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden;">
            <table>
                <thead>
                    <tr>
                        <th>Talent</th>
                        <th>Category</th>
                        <th>Level</th>
                        <th>Status</th>
                        <th>Language</th>
                        <th>Matched</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($talents as $talent)
                    <tr>
                        <td>
                            <div class="td-name">
                                @if($talent->image)
                                    <img src="{{ asset('image/' . $talent->image) }}" alt="{{ $talent->name }}" class="td-avatar">
                                @else
                                    <div class="td-avatar" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;">👤</div>
                                @endif
                                <div class="td-name-text">
                                    <strong>{{ $talent->name }}</strong>
                                    <span>{{ $talent->email }}</span>
                                </div>
                            </div>
                        </td>
                        <td>{{ $talent->category->name ?? '—' }}</td>
                        <td>{{ $talent->level ? ucfirst($talent->level) : '—' }}</td>
                        <td><span class="card-badge badge-{{ $talent->status ?? 'active' }}" style="position:static;">{{ ucfirst($talent->status ?? 'active') }}</span></td>
                        <td>{{ $talent->language ? ucfirst($talent->language) : '—' }}</td>
                        <td>{{ $talent->matched ?? 0 }}</td>
                        <td>
                            <div style="display:flex;gap:.4rem;">
                                <a href="{{ route('admin.talents.show', $talent) }}" class="btn-sm btn-view">View</a>
                                <a href="{{ route('admin.talents.edit', $talent) }}" class="btn-sm btn-edit">Edit</a>
                                <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}" onsubmit="return confirm('Delete?')">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="btn-sm btn-delete">Del</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    {{-- Pagination --}}
    <div class="pagination-wrap">
        
    </div>

    @endif
</div>


<script>
function setView(view) {
    const grid = document.getElementById('gridView');
    const list = document.getElementById('listView');
    const gBtn = document.getElementById('gridBtn');
    const lBtn = document.getElementById('listBtn');
    if (view === 'grid') {
        grid.style.display = 'grid'; list.classList.remove('visible');
        gBtn.classList.add('active'); lBtn.classList.remove('active');
        localStorage.setItem('talentView', 'grid');
    } else {
        grid.style.display = 'none'; list.classList.add('visible');
        lBtn.classList.add('active'); gBtn.classList.remove('active');
        localStorage.setItem('talentView', 'list');
    }
}
function applySort(val) {
    const url = new URL(window.location.href);
    url.searchParams.set('sort', val);
    window.location.href = url.toString();
}
// Restore view preference
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('talentView');
    if (saved === 'list') setView('list');
});
</script>

@endsection