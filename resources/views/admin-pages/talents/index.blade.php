@extends('layouts.app')

@section('content')
<style>
  :root {
    --bg-base: #060f11;
    --bg-surface: #0b1a1e;
    --bg-elevated: #0f2228;
    --bg-card: #122630;
    --border: #1a3340;
    --border-light: #1f3d4d;
    --text-muted: #3d4648;
    --text-mid: #6b8a90;
    --text-body: #a8c5cb;
    --text-head: #d6eaed;
    --accent: #00c9a7;
    --accent-dim: #009e84;
    --accent-glow: rgba(0, 201, 167, 0.15);
    --gold: #e8a838;
    --gold-dim: rgba(232, 168, 56, 0.12);
    --danger: #e05a6b;
    --warning: #f0a830;
    --info: #3bb8d8;
    --radius: 10px;
    --radius-lg: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--bg-base);
    color: var(--text-body);
    font-family: 'Sora', 'DM Sans', sans-serif;
    min-height: 100vh;
  }

  /* ── Page shell ── */
  .page-wrap {
    max-width: 1440px;
    margin: 0 auto;
    padding: 36px 32px;
  }

  /* ── Page header ── */
  .page-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .page-title-group small {
    display: block;
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
    font-weight: 600;
  }

  .page-title-group h1 {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-head);
    letter-spacing: -.5px;
  }

  .btn-create {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent);
    color: #060f11;
    font-size: 13px;
    font-weight: 700;
    padding: 11px 22px;
    border-radius: var(--radius);
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background .2s, transform .15s, box-shadow .2s;
    letter-spacing: .02em;
  }

  .btn-create:hover {
    background: #00e8c2;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 201, 167, .35);
  }

  .btn-create svg {
    width: 15px;
    height: 15px;
  }

  /* ── Summary cards ── */
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .summary-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px 22px;
    position: relative;
    overflow: hidden;
    transition: border-color .2s, transform .2s;
  }

  .summary-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--card-accent, var(--accent));
    opacity: .8;
  }

  .summary-card:hover {
    border-color: var(--border-light);
    transform: translateY(-2px);
  }

  .summary-card .label {
    font-size: 11px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 10px;
    font-weight: 600;
  }

  .summary-card .value {
    font-size: 32px;
    font-weight: 800;
    color: var(--text-head);
    letter-spacing: -1px;
    line-height: 1;
  }

  .summary-card .sub {
    font-size: 12px;
    color: var(--text-mid);
    margin-top: 6px;
  }

  .summary-card .icon-bg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .07;
    font-size: 52px;
    pointer-events: none;
  }

  .card-accent-green {
    --card-accent: var(--accent);
  }

  .card-accent-gold {
    --card-accent: var(--gold);
  }

  .card-accent-info {
    --card-accent: var(--info);
  }

  .card-accent-danger {
    --card-accent: var(--danger);
  }

  /* ── Filter bar ── */
  .filter-bar {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 18px 22px;
    margin-bottom: 28px;
    display: flex;
    gap: 14px;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    min-width: 140px;
  }

  .filter-group label {
    font-size: 11px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
  }

  .filter-group input,
  .filter-group select {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-body);
    border-radius: 8px;
    padding: 9px 13px;
    font-size: 13px;
    font-family: inherit;
    outline: none;
    transition: border-color .2s, box-shadow .2s;
    width: 100%;
  }

  .filter-group input:focus,
  .filter-group select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }

  .filter-group select option {
    background: #0d1e22;
  }

  .filter-group input::placeholder {
    color: var(--text-muted);
  }

  .filter-actions {
    display: flex;
    gap: 10px;
    padding-bottom: 1px;
  }

  .btn-filter {
    background: var(--accent);
    color: #060f11;
    border: none;
    border-radius: 8px;
    padding: 9px 20px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background .2s;
    white-space: nowrap;
  }

  .btn-filter:hover {
    background: #00e8c2;
  }

  .btn-reset {
    background: transparent;
    color: var(--text-mid);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 9px 16px;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
    transition: border-color .2s, color .2s;
    white-space: nowrap;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  .btn-reset:hover {
    border-color: var(--border-light);
    color: var(--text-body);
  }

  /* ── Table ── */
  .table-wrap {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .table-head-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    border-bottom: 1px solid var(--border);
    gap: 12px;
    flex-wrap: wrap;
  }

  .table-head-bar .count {
    font-size: 13px;
    color: var(--text-mid);
  }

  .table-head-bar .count strong {
    color: var(--text-head);
    font-weight: 700;
  }

  .bulk-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .bulk-select {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-body);
    border-radius: 7px;
    padding: 7px 12px;
    font-size: 12px;
    font-family: inherit;
    outline: none;
    cursor: pointer;
  }

  .btn-bulk-apply {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    color: var(--text-body);
    border-radius: 7px;
    padding: 7px 14px;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    transition: border-color .2s;
  }

  .btn-bulk-apply:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead th {
    background: var(--bg-elevated);
    padding: 11px 20px;
    text-align: left;
    font-size: 11px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 700;
    white-space: nowrap;
    border-bottom: 1px solid var(--border);
  }

  thead th:first-child {
    padding-left: 24px;
  }

  thead th:last-child {
    padding-right: 24px;
    text-align: right;
  }

  thead th.sortable {
    cursor: pointer;
    user-select: none;
  }

  thead th.sortable:hover {
    color: var(--text-body);
  }

  thead th .sort-icon {
    opacity: .4;
    margin-left: 4px;
  }

  thead th.sorted .sort-icon {
    opacity: 1;
    color: var(--accent);
  }

  tbody tr {
    border-bottom: 1px solid var(--border);
    transition: background .15s;
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--bg-elevated);
  }

  tbody td {
    padding: 14px 20px;
    font-size: 13.5px;
    vertical-align: middle;
  }

  tbody td:first-child {
    padding-left: 24px;
  }

  tbody td:last-child {
    padding-right: 24px;
  }

  /* Talent avatar + name cell */
  .talent-cell {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 200px;
  }

  .talent-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border-light);
    flex-shrink: 0;
    background: var(--bg-card);
  }

  .talent-avatar-placeholder {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--bg-card);
    border: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--accent);
    font-weight: 700;
    flex-shrink: 0;
  }

  .talent-name {
    font-weight: 600;
    color: var(--text-head);
    font-size: 13.5px;
    white-space: nowrap;
  }

  .talent-email {
    font-size: 11.5px;
    color: var(--text-muted);
    margin-top: 2px;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .04em;
    white-space: nowrap;
  }

  .badge-active {
    background: rgba(0, 201, 167, .12);
    color: #00c9a7;
    border: 1px solid rgba(0, 201, 167, .25);
  }

  .badge-inactive {
    background: rgba(61, 70, 72, .18);
    color: #5a7278;
    border: 1px solid rgba(61, 70, 72, .3);
  }

  .badge-pending {
    background: rgba(240, 168, 48, .12);
    color: #f0a830;
    border: 1px solid rgba(240, 168, 48, .25);
  }

  .badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
  }

  .badge-featured {
    background: var(--gold-dim);
    color: var(--gold);
    border: 1px solid rgba(232, 168, 56, .3);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .06em;
  }

  .level-pill {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .05em;
    background: rgba(59, 184, 216, .1);
    color: var(--info);
    border: 1px solid rgba(59, 184, 216, .2);
  }

  /* Checkbox */
  .cb-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: var(--accent);
    cursor: pointer;
    border-radius: 3px;
  }

  /* Action buttons */
  .action-group {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-mid);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background .2s, border-color .2s, color .2s;
    cursor: pointer;
  }

  .btn-icon svg {
    width: 14px;
    height: 14px;
  }

  .btn-icon:hover {
    background: var(--bg-elevated);
    border-color: var(--border-light);
    color: var(--text-head);
  }

  .btn-icon.edit:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .btn-icon.view:hover {
    border-color: var(--info);
    color: var(--info);
  }

  .btn-icon.del:hover {
    border-color: var(--danger);
    color: var(--danger);
  }

  /* Pagination */
  .pagination-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
    gap: 12px;
  }

  .pagination-info {
    font-size: 12px;
    color: var(--text-muted);
  }

  .pagination-links {
    display: flex;
    gap: 4px;
  }

  .page-btn {
    width: 32px;
    height: 32px;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-mid);
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all .15s;
  }

  .page-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-glow);
  }

  .page-btn.active {
    background: var(--accent);
    color: #060f11;
    border-color: var(--accent);
    font-weight: 700;
  }

  .page-btn:disabled,
  .page-btn.disabled {
    opacity: .35;
    pointer-events: none;
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 80px 24px;
  }

  .empty-icon {
    width: 56px;
    height: 56px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    color: var(--text-muted);
  }

  .empty-state h3 {
    color: var(--text-mid);
    font-size: 15px;
    margin-bottom: 6px;
  }

  .empty-state p {
    color: var(--text-muted);
    font-size: 13px;
  }

  /* Alert flash */
  .alert {
    padding: 13px 18px;
    border-radius: var(--radius);
    font-size: 13px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .alert-success {
    background: rgba(0, 201, 167, .1);
    border: 1px solid rgba(0, 201, 167, .25);
    color: var(--accent);
  }

  .alert-error {
    background: rgba(224, 90, 107, .1);
    border: 1px solid rgba(224, 90, 107, .25);
    color: var(--danger);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .page-wrap {
      padding: 24px 16px;
    }

    .filter-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .filter-actions {
      justify-content: flex-start;
    }

    thead th:nth-child(4),
    thead th:nth-child(5),
    tbody td:nth-child(4),
    tbody td:nth-child(5) {
      display: none;
    }
  }
</style>


<div class="page-wrap">

  {{-- Flash messages --}}
  @if(session('success'))
  <div class="alert alert-success">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>
    {{ session('success') }}
  </div>
  @endif

  {{-- Page header --}}
  <div class="page-header">
    <div class="page-title-group">
      <small>Management</small>
      <h1>Talent Registry</h1>
    </div>
    <a href="{{ route('admin.talents.create') }}" class="btn-create">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Add Talent
    </a>
  </div>

  {{-- Summary cards --}}
  <div class="summary-grid">
    <div class="summary-card card-accent-green">
      <div class="label">Total Talents</div>
      <div class="value">{{ number_format($stats['total'] ?? 0) }}</div>
      <div class="sub">All registered</div>
      <div class="icon-bg">✦</div>
    </div>
    <div class="summary-card card-accent-info">
      <div class="label">Active</div>
      <div class="value">{{ number_format($stats['active'] ?? 0) }}</div>
      <div class="sub">Currently live</div>
      <div class="icon-bg">◉</div>
    </div>
    <div class="summary-card card-accent-gold">
      <div class="label">Featured</div>
      <div class="value">{{ number_format($stats['featured'] ?? 0) }}</div>
      <div class="sub">Highlighted profiles</div>
      <div class="icon-bg">★</div>
    </div>
    <div class="summary-card card-accent-danger">
      <div class="label">Matched</div>
      <div class="value">{{ number_format($stats['matched'] ?? 0) }}</div>
      <div class="sub">Successfully placed</div>
      <div class="icon-bg">⟳</div>
    </div>
    <div class="summary-card" style="--card-accent:#a78bfa;">
      <div class="label">Categories</div>
      <div class="value">{{ number_format($stats['categories'] ?? 0) }}</div>
      <div class="sub">Talent types</div>
      <div class="icon-bg">⊞</div>
    </div>
  </div>

  {{-- Filter bar --}}
  <form method="GET" action="{{ route('admin.talents.index') }}" id="filterForm">
    <div class="filter-bar">
      <div class="filter-group" style="flex:2; min-width:200px;">
        <label>Search</label>
        <input type="text" name="search" value="{{ request('search') }}" placeholder="Name, email, phone…">
      </div>
      <div class="filter-group">
        <label>Status</label>
        <select name="status">
          <option value="">All Status</option>
          <option value="active" {{ request('status') == 'active'   ? 'selected' : '' }}>Active</option>
          <option value="inactive" {{ request('status') == 'inactive' ? 'selected' : '' }}>Inactive</option>
          <option value="pending" {{ request('status') == 'pending'  ? 'selected' : '' }}>Pending</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Category</label>
        <select name="category_id">
          <option value="">All Categories</option>
          @foreach($categories as $cat)
          <option value="{{ $cat->id }}" {{ request('category_id') == $cat->id ? 'selected' : '' }}>
            {{ $cat->name }}
          </option>
          @endforeach
        </select>
      </div>
      <div class="filter-group">
        <label>Level</label>
        <select name="level">
          <option value="">All Levels</option>
          <option value="beginner" {{ request('level') == 'beginner'      ? 'selected' : '' }}>Beginner</option>
          <option value="intermediate" {{ request('level') == 'intermediate'  ? 'selected' : '' }}>Intermediate</option>
          <option value="advanced" {{ request('level') == 'advanced'      ? 'selected' : '' }}>Advanced</option>
          <option value="expert" {{ request('level') == 'expert'        ? 'selected' : '' }}>Expert</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Featured</label>
        <select name="featured">
          <option value="">All</option>
          <option value="1" {{ request('featured') == '1' ? 'selected' : '' }}>Featured</option>
          <option value="0" {{ request('featured') == '0' ? 'selected' : '' }}>Not Featured</option>
        </select>
      </div>
      <div class="filter-actions">
        <button type="submit" class="btn-filter">Filter</button>
        <a href="{{ route('admin.talents.index') }}" class="btn-reset">Reset</a>
      </div>
    </div>
  </form>

  {{-- Table --}}
  <div class="table-wrap">
    <div class="table-head-bar">
      <span class="count">
        Showing <strong>{{ $talents->firstItem() ?? 0 }}–{{ $talents->lastItem() ?? 0 }}</strong>
        of <strong>{{ $talents->total() }}</strong> talents
      </span>
      <div class="bulk-actions">
        <select class="bulk-select" id="bulkAction">
          <option value="">Bulk action</option>
          <option value="activate">Activate</option>
          <option value="deactivate">Deactivate</option>
          <option value="feature">Mark Featured</option>
          <option value="delete">Delete</option>
        </select>
        <button class="btn-bulk-apply" onclick="applyBulk()">Apply</button>
      </div>
    </div>

    <form id="bulkForm" method="POST" action="{{ route('admin.talents.bulk') }}">
      @csrf
      <input type="hidden" name="action" id="bulkActionInput">

      @if($talents->count() > 0)
      <table>
        <thead>
          <tr>
            <th style="width:44px;">
              <div class="cb-wrap">
                <input type="checkbox" id="selectAll" onclick="toggleAll(this)">
              </div>
            </th>
            <th>Talent</th>
            <th>Category</th>
            <th>Level</th>
            <th>Language</th>
            <th>Status</th>
            <th>Matched</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @foreach($talents as $talent)
          <tr>
            <td>
              <div class="cb-wrap">
                <input type="checkbox" name="ids[]" value="{{ $talent->id }}" class="row-cb">
              </div>
            </td>
            <td>
              <div class="talent-cell">
                @if($talent->image)
                <img src="{{ asset($talent->image) }}" alt="{{ $talent->name }}" class="talent-avatar">
                @else
                <div class="talent-avatar-placeholder">
                  {{ strtoupper(substr($talent->name, 0, 1)) }}
                </div>
                @endif
                <div>
                  <div class="talent-name">
                    {{ $talent->name }}
                    @if($talent->featured)
                    <span class="badge-featured" style="vertical-align:middle; margin-left:4px;">FEATURED</span>
                    @endif
                  </div>
                  <div class="talent-email">{{ $talent->email ?? $talent->phone }}</div>
                </div>
              </div>
            </td>
            <td style="color: var(--text-mid); font-size:13px;">
              {{ $talent->category->name ?? '—' }}
            </td>
            <td>
              @if($talent->level)
              <span class="level-pill">{{ ucfirst($talent->level) }}</span>
              @else
              <span style="color:var(--text-muted);">—</span>
              @endif
            </td>
            <td style="color:var(--text-mid); font-size:13px;">
              {{ $talent->language ?? '—' }}
            </td>
            <td>
              @php
              $status = strtolower($talent->status ?? 'inactive');
              @endphp
              <span class="badge badge-{{ $status }}">
                <span class="badge-dot"></span>
                {{ ucfirst($status) }}
              </span>
            </td>
            <td style="font-size:13px; color:var(--text-mid);">
              @if($talent->matched)
              <span style="color:var(--accent);">✓ Yes</span>
              @else
              <span style="color:var(--text-muted);">—</span>
              @endif
            </td>
            <td>
              <div class="action-group">
                <a href="{{ route('admin.talents.show', $talent) }}" class="btn-icon view" title="View">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
                <a href="{{ route('admin.talents.edit', $talent) }}" class="btn-icon edit" title="Edit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                  </svg>
                </a>
                <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}" onsubmit="return confirm('Delete this talent?')" style="display:inline;">
                  @csrf @method('DELETE')
                  <button type="submit" class="btn-icon del" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </form>
              </div>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      @else
      <div class="empty-state">
        <div class="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <h3>No talents found</h3>
        <p>Try adjusting your filters or add a new talent.</p>
      </div>
      @endif
    </form>

    {{-- Pagination --}}
    @if($talents->hasPages())
    <div class="pagination-bar">
      <span class="pagination-info">
        Page {{ $talents->currentPage() }} of {{ $talents->lastPage() }}
      </span>
      <div class="pagination-links">
        @if($talents->onFirstPage())
        <span class="page-btn disabled">‹</span>
        @else
        <a href="{{ $talents->previousPageUrl() }}&{{ http_build_query(request()->except('page')) }}" class="page-btn">‹</a>
        @endif

        @foreach(range(max(1, $talents->currentPage()-2), min($talents->lastPage(), $talents->currentPage()+2)) as $page)
        <a href="{{ $talents->url($page) }}&{{ http_build_query(request()->except('page')) }}"
          class="page-btn {{ $page == $talents->currentPage() ? 'active' : '' }}">
          {{ $page }}
        </a>
        @endforeach

        @if($talents->hasMorePages())
        <a href="{{ $talents->nextPageUrl() }}&{{ http_build_query(request()->except('page')) }}" class="page-btn">›</a>
        @else
        <span class="page-btn disabled">›</span>
        @endif
      </div>
    </div>
    @endif
  </div>

</div>

<script>
  function toggleAll(master) {
    document.querySelectorAll('.row-cb').forEach(cb => cb.checked = master.checked);
  }

  function applyBulk() {
    const action = document.getElementById('bulkAction').value;
    const checked = document.querySelectorAll('.row-cb:checked');
    if (!action) {
      alert('Please select a bulk action.');
      return;
    }
    if (!checked.length) {
      alert('Please select at least one talent.');
      return;
    }
    if (action === 'delete' && !confirm('Delete selected talents?')) return;
    document.getElementById('bulkActionInput').value = action;
    document.getElementById('bulkForm').submit();
  }
</script>
@endsection