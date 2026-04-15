@extends('layouts.app')

@section('title', 'Talents — Future Connect Admin')

@section('content')

@include('admin-pages.talents._layout')
<style>
  /* Stats bar */
  .fc-stat-card {
    background: var(--fc-card); border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius); padding: 1.25rem 1.5rem;
    display: flex; flex-direction: column; gap: 0.25rem; position: relative; overflow: hidden;
  }
  .fc-stat-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  }
  .fc-stat-card.accent-green::before  { background: var(--fc-accent); }
  .fc-stat-card.accent-blue::before   { background: var(--fc-accent2); }
  .fc-stat-card.accent-yellow::before { background: var(--fc-warn); }
  .fc-stat-card.accent-purple::before { background: #a78bfa; }
  .fc-stat-value { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 700; line-height: 1; }
  .fc-stat-label { font-size: 0.8rem; color: var(--fc-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }

  /* Filters bar */
  .fc-filters {
    background: var(--fc-card); border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius); padding: 1rem 1.25rem;
    display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem;
  }
  .fc-search-wrap { position: relative; flex: 1; min-width: 200px; }
  .fc-search-wrap svg { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: var(--fc-muted); pointer-events: none; }
  .fc-search-wrap input { padding-left: 2.2rem; }
  .fc-filter-select { min-width: 140px; }

  /* Table */
  .fc-table-wrap { background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: var(--fc-radius); overflow: hidden; }
  .fc-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
  .fc-table thead th {
    background: var(--fc-surface); padding: 0.75rem 1rem; text-align: left;
    font-size: 0.75rem; font-weight: 600; color: var(--fc-muted);
    text-transform: uppercase; letter-spacing: 0.06em; border-bottom: 1px solid var(--fc-border);
  }
  .fc-table tbody tr { border-bottom: 1px solid var(--fc-border); transition: background .1s; }
  .fc-table tbody tr:last-child { border-bottom: none; }
  .fc-table tbody tr:hover { background: rgba(255,255,255,.02); }
  .fc-table td { padding: 0.9rem 1rem; vertical-align: middle; }

  /* Talent cell */
  .fc-talent-cell { display: flex; align-items: center; gap: 0.75rem; }
  .fc-avatar {
    width: 38px; height: 38px; border-radius: 50%; object-fit: cover;
    background: var(--fc-border); flex-shrink: 0; font-size: 0.85rem;
    display: flex; align-items: center; justify-content: center;
    color: var(--fc-text-dim); font-weight: 600; border: 1px solid var(--fc-border);
  }
  .fc-talent-name { font-weight: 500; color: var(--fc-text); }
  .fc-talent-email { font-size: 0.78rem; color: var(--fc-muted); }

  /* Actions */
  .fc-actions { display: flex; align-items: center; gap: 0.35rem; }

  /* Bulk bar */
  .fc-bulk-bar {
    background: var(--fc-surface); border: 1px solid var(--fc-accent);
    border-radius: var(--fc-radius-sm); padding: 0.6rem 1rem;
    display: none; align-items: center; gap: 1rem; margin-bottom: 1rem;
    font-size: 0.875rem;
  }
  .fc-bulk-bar.visible { display: flex; }
  .fc-bulk-count { color: var(--fc-accent); font-weight: 600; }

  /* Pagination */
  .fc-pagination { display: flex; align-items: center; justify-content: between; gap: 0.5rem; padding: 1rem 1.25rem; border-top: 1px solid var(--fc-border); }
  .fc-pagination a, .fc-pagination span {
    padding: 0.4rem 0.75rem; border-radius: var(--fc-radius-sm); font-size: 0.85rem;
    text-decoration: none; color: var(--fc-text-dim); border: 1px solid transparent;
  }
  .fc-pagination a:hover { background: var(--fc-border); color: var(--fc-text); }
  .fc-pagination .active { background: var(--fc-accent); color: #0d0f14; font-weight: 600; }

  /* Check all */
  .fc-checkbox {
    width: 16px; height: 16px; accent-color: var(--fc-accent); cursor: pointer;
  }

  /* Empty state */
  .fc-empty { text-align: center; padding: 4rem 2rem; color: var(--fc-muted); }
  .fc-empty-icon { font-size: 3rem; margin-bottom: 1rem; opacity: 0.4; }
</style>

<div class="fc-wrap">

  {{-- Header --}}
  <div class="fc-header">
    <div class="fc-header-left">
      <div class="fc-breadcrumb">
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
        <span>›</span>
        <span>Talents</span>
      </div>
      <h1>Talents</h1>
      <p>Manage all registered talent profiles on the platform.</p>
    </div>
    <div style="display:flex;gap:0.75rem;align-items:center;">
      <a href="{{ route('admin.talents.create') }}" class="fc-btn fc-btn-primary">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
        Add talent
      </a>
    </div>
  </div>

  {{-- Alert --}}
  @if(session('success'))
    <div class="fc-alert fc-alert-success">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
      {{ session('success') }}
    </div>
  @endif

  {{-- Stats --}}
  <div class="fc-grid-4" style="margin-bottom:1.5rem;">
    <div class="fc-stat-card accent-green">
      <div class="fc-stat-value">{{ number_format($stats['total']) }}</div>
      <div class="fc-stat-label">Total talents</div>
    </div>
    <div class="fc-stat-card accent-blue">
      <div class="fc-stat-value">{{ number_format($stats['active']) }}</div>
      <div class="fc-stat-label">Active</div>
    </div>
    <div class="fc-stat-card accent-yellow">
      <div class="fc-stat-value">{{ number_format($stats['featured']) }}</div>
      <div class="fc-stat-label">Featured</div>
    </div>
    <div class="fc-stat-card accent-purple">
      <div class="fc-stat-value">{{ number_format($stats['matched']) }}</div>
      <div class="fc-stat-label">Matched</div>
    </div>
  </div>

  {{-- Filters --}}
  <form method="GET" action="{{ route('admin.talents.index') }}">
    <div class="fc-filters">
      <div class="fc-search-wrap">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" name="search" value="{{ request('search') }}" placeholder="Search name, email, phone…" class="fc-input">
      </div>
      <select name="status" class="fc-select fc-filter-select">
        <option value="">All statuses</option>
        <option value="active"   {{ request('status') === 'active'   ? 'selected' : '' }}>Active</option>
        <option value="inactive" {{ request('status') === 'inactive' ? 'selected' : '' }}>Inactive</option>
        <option value="pending"  {{ request('status') === 'pending'  ? 'selected' : '' }}>Pending</option>
      </select>
      <select name="category_id" class="fc-select fc-filter-select">
        <option value="">All categories</option>
        @foreach($categories as $cat)
          <option value="{{ $cat->id }}" {{ request('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
        @endforeach
      </select>
      <select name="level" class="fc-select fc-filter-select">
        <option value="">All levels</option>
        <option value="beginner"     {{ request('level') === 'beginner'     ? 'selected' : '' }}>Beginner</option>
        <option value="intermediate" {{ request('level') === 'intermediate' ? 'selected' : '' }}>Intermediate</option>
        <option value="expert"       {{ request('level') === 'expert'       ? 'selected' : '' }}>Expert</option>
      </select>
      <select name="featured" class="fc-select" style="min-width:120px;">
        <option value="">Featured?</option>
        <option value="1" {{ request('featured') === '1' ? 'selected' : '' }}>Featured</option>
        <option value="0" {{ request('featured') === '0' ? 'selected' : '' }}>Not featured</option>
      </select>
      <button type="submit" class="fc-btn fc-btn-secondary">Filter</button>
      @if(request()->hasAny(['search','status','category_id','level','featured']))
        <a href="{{ route('admin.talents.index') }}" class="fc-btn fc-btn-ghost">Clear</a>
      @endif
    </div>
  </form>

  {{-- Bulk action bar --}}
  <form id="bulk-form" method="POST" action="{{ route('admin.talents.bulk') }}">
    @csrf
    <div class="fc-bulk-bar" id="bulk-bar">
      <span class="fc-bulk-count" id="bulk-count">0 selected</span>
      <select name="action" class="fc-select" style="width:auto;min-width:160px;">
        <option value="">Choose action…</option>
        <option value="activate">Activate</option>
        <option value="deactivate">Deactivate</option>
        <option value="feature">Mark featured</option>
        <option value="unfeature">Remove featured</option>
        <option value="delete">Delete</option>
      </select>
      <button type="submit" class="fc-btn fc-btn-secondary fc-btn-sm" onclick="return confirm('Apply bulk action?')">Apply</button>
      <button type="button" class="fc-btn fc-btn-ghost fc-btn-sm" onclick="clearSelection()">Cancel</button>
    </div>

    {{-- Table --}}
    <div class="fc-table-wrap">
      <table class="fc-table">
        <thead>
          <tr>
            <th style="width:40px;"><input type="checkbox" class="fc-checkbox" id="check-all" onchange="toggleAll(this)"></th>
            <th>Talent</th>
            <th>Category</th>
            <th>Level</th>
            <th>Status</th>
            <th>Skills</th>
            <th>Featured</th>
            <th>Joined</th>
            <th style="width:120px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          @forelse($talents as $talent)
            <tr>
              <td>
                <input type="checkbox" class="fc-checkbox row-check" name="ids[]" value="{{ $talent->id }}" onchange="updateBulkBar()">
              </td>
              <td>
                <div class="fc-talent-cell">
                  @if($talent->image)
                    <img src="{{ Storage::url($talent->image) }}" alt="{{ $talent->name }}" class="fc-avatar">
                  @else
                    <div class="fc-avatar">{{ strtoupper(substr($talent->name, 0, 2)) }}</div>
                  @endif
                  <div>
                    <div class="fc-talent-name">{{ $talent->name }}</div>
                    <div class="fc-talent-email">{{ $talent->email }}</div>
                  </div>
                </div>
              </td>
              <td>
                @if($talent->category)
                  <span class="fc-badge fc-badge-blue">{{ $talent->category->name }}</span>
                @else
                  <span style="color:var(--fc-muted);font-size:.8rem;">—</span>
                @endif
              </td>
              <td>
                @php $lvl = $talent->level; @endphp
                <span class="fc-badge {{ $lvl === 'expert' ? 'fc-badge-green' : ($lvl === 'intermediate' ? 'fc-badge-yellow' : 'fc-badge-gray') }}">
                  {{ ucfirst($lvl) }}
                </span>
              </td>
              <td>
                @php $s = $talent->status; @endphp
                <span class="fc-badge {{ $s === 'active' ? 'fc-badge-green' : ($s === 'pending' ? 'fc-badge-yellow' : 'fc-badge-red') }}">
                  {{ ucfirst($s) }}
                </span>
              </td>
              <td style="color:var(--fc-text-dim);font-size:.85rem;">{{ $talent->skills_count }}</td>
              <td>
                @if($talent->featured)
                  <span style="color:var(--fc-warn);font-size:.85rem;">★ Yes</span>
                @else
                  <span style="color:var(--fc-muted);font-size:.85rem;">—</span>
                @endif
              </td>
              <td style="color:var(--fc-text-dim);font-size:.8rem;white-space:nowrap;">
                {{ $talent->created_at->format('d M Y') }}
              </td>
              <td>
                <div class="fc-actions">
                  <a href="{{ route('admin.talents.show', $talent) }}" class="fc-btn fc-btn-ghost fc-btn-icon" title="View">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </a>
                  <a href="{{ route('admin.talents.edit', $talent) }}" class="fc-btn fc-btn-ghost fc-btn-icon" title="Edit">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </a>
                  <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}" onsubmit="return confirm('Delete {{ addslashes($talent->name) }}?')">
                    @csrf @method('DELETE')
                    <button type="submit" class="fc-btn fc-btn-ghost fc-btn-icon" title="Delete" style="color:var(--fc-danger);">
                      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          @empty
            <tr>
              <td colspan="9">
                <div class="fc-empty">
                  <div class="fc-empty-icon">◎</div>
                  <p style="font-weight:500;color:var(--fc-text-dim);">No talents found</p>
                  <p style="font-size:.85rem;margin-top:.4rem;">Try adjusting your filters or <a href="{{ route('admin.talents.create') }}" style="color:var(--fc-accent);">add a new talent</a>.</p>
                </div>
              </td>
            </tr>
          @endforelse
        </tbody>
      </table>

      {{-- Pagination --}}
      @if($talents->hasPages())
        <div class="fc-pagination">
          <span style="font-size:.8rem;color:var(--fc-muted);flex:1;">
            Showing {{ $talents->firstItem() }}–{{ $talents->lastItem() }} of {{ $talents->total() }} talents
          </span>
          {{ $talents->links('admin.talents._pagination') }}
        </div>
      @endif
    </div>
  </form>

</div>

<script>
function toggleAll(master) {
  document.querySelectorAll('.row-check').forEach(cb => cb.checked = master.checked);
  updateBulkBar();
}
function updateBulkBar() {
  const checked = document.querySelectorAll('.row-check:checked');
  const bar = document.getElementById('bulk-bar');
  document.getElementById('bulk-count').textContent = checked.length + ' selected';
  bar.classList.toggle('visible', checked.length > 0);
}
function clearSelection() {
  document.querySelectorAll('.row-check, #check-all').forEach(cb => cb.checked = false);
  document.getElementById('bulk-bar').classList.remove('visible');
}
</script>
@endsection