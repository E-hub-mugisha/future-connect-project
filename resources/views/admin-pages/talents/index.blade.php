@extends('layouts.app')
@section('title', 'Skills Management')
@section('content')
<style>
    :root {
        --accent:       #4361EE;
        --accent-light: #EEF1FD;
        --accent-dark:  #3451D1;
        --text-hi:      #111827;
        --text-mid:     #4B5563;
        --text-lo:      #9CA3AF;
        --border:       #E4E8F0;
        --border-med:   #D0D7E5;
        --success:      #10B981;
        --success-bg:   #ECFDF5;
        --danger:       #EF4444;
        --danger-bg:    #FEF2F2;
        --warning:      #F59E0B;
        --warning-bg:   #FFFBEB;
        --info:         #3B82F6;
        --info-bg:      #EFF6FF;
        --gold:         #D97706;
        --gold-bg:      #FEF3C7;
        --purple:       #7C3AED;
        --purple-bg:    #F5F3FF;
    }

    body { background: #F8F9FC; }

    /* ── Page header ── */
    .page-title { font-size: 22px; font-weight: 700; color: var(--text-hi); letter-spacing: -.4px; }
    .page-sub   { font-size: 13px; color: var(--text-lo); margin-top: 3px; }
    .eyebrow    { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 4px; }

    .btn-accent {
        background: var(--accent); color: #fff; border: none;
        border-radius: 9px; font-size: 13px; font-weight: 600;
        padding: 10px 20px; display: inline-flex; align-items: center; gap: 7px;
        transition: background .18s, box-shadow .18s; text-decoration: none; cursor: pointer;
    }
    .btn-accent:hover { background: var(--accent-dark); color: #fff; box-shadow: 0 6px 20px rgba(67,97,238,.25); }

    /* ── Summary cards ── */
    .stat-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; padding: 20px 22px;
        position: relative; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
        transition: box-shadow .2s, transform .2s;
    }
    .stat-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.08); transform: translateY(-2px); }
    .stat-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: var(--card-top, var(--accent)); border-radius: 14px 14px 0 0;
    }
    .stat-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .09em; color: var(--text-lo); margin-bottom: 10px; }
    .stat-value { font-size: 30px; font-weight: 800; color: var(--text-hi); letter-spacing: -1px; line-height: 1; }
    .stat-sub   { font-size: 12px; color: var(--text-lo); margin-top: 6px; }
    .stat-icon  {
        position: absolute; right: 18px; top: 50%; transform: translateY(-50%);
        width: 40px; height: 40px; border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        background: var(--card-icon-bg, var(--accent-light));
        color: var(--card-icon-color, var(--accent)); font-size: 18px;
    }

    /* ── Filter bar ── */
    .filter-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; padding: 18px 22px;
        box-shadow: 0 1px 4px rgba(0,0,0,.03);
    }
    .filter-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-lo); margin-bottom: 6px; display: block; }
    .filter-input {
        border: 1px solid var(--border-med); border-radius: 8px;
        padding: 8px 12px; font-size: 13px; color: var(--text-hi);
        background: #F9FAFB; outline: none; width: 100%;
        font-family: inherit; transition: border-color .15s, background .15s;
    }
    .filter-input:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(67,97,238,.08); }
    .filter-input::placeholder { color: var(--text-lo); }

    .btn-filter {
        background: var(--accent); color: #fff; border: none;
        border-radius: 8px; padding: 9px 20px; font-size: 13px;
        font-weight: 600; cursor: pointer; font-family: inherit;
        transition: background .18s; white-space: nowrap;
    }
    .btn-filter:hover { background: var(--accent-dark); }
    .btn-reset {
        background: #F3F4F6; color: var(--text-mid); border: 1px solid var(--border);
        border-radius: 8px; padding: 9px 16px; font-size: 13px;
        cursor: pointer; font-family: inherit; text-decoration: none;
        display: inline-flex; align-items: center; transition: background .15s;
        white-space: nowrap;
    }
    .btn-reset:hover { background: #E5E7EB; color: var(--text-hi); }

    /* ── Table card ── */
    .ui-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }
    .card-bar {
        padding: 14px 22px; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
    }
    .card-bar-label { font-size: 13px; font-weight: 600; color: var(--text-mid); }
    .count-badge {
        background: var(--accent-light); color: var(--accent);
        border-radius: 5px; font-size: 11px; font-weight: 700; padding: 2px 8px; margin-left: 6px;
    }

    /* Bulk actions */
    .bulk-select {
        background: #F9FAFB; border: 1px solid var(--border-med);
        color: var(--text-mid); border-radius: 7px;
        padding: 7px 12px; font-size: 12.5px; font-family: inherit;
        outline: none; cursor: pointer;
        transition: border-color .15s;
    }
    .bulk-select:focus { border-color: var(--accent); }
    .btn-bulk-apply {
        background: #F3F4F6; border: 1px solid var(--border);
        color: var(--text-mid); border-radius: 7px;
        padding: 7px 14px; font-size: 12.5px; font-weight: 500;
        font-family: inherit; cursor: pointer; transition: all .15s;
    }
    .btn-bulk-apply:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

    /* ── Table ── */
    .ui-table { width: 100%; border-collapse: collapse; }
    .ui-table thead tr { background: #F9FAFB; border-bottom: 1px solid var(--border); }
    .ui-table thead th {
        padding: 11px 18px; font-size: 11px; font-weight: 700;
        text-transform: uppercase; letter-spacing: .07em;
        color: var(--text-lo); white-space: nowrap; text-align: left;
    }
    .ui-table thead th:first-child { padding-left: 22px; }
    .ui-table thead th:last-child  { padding-right: 22px; text-align: right; }
    .ui-table thead th.sortable { cursor: pointer; }
    .ui-table thead th.sortable:hover { color: var(--text-mid); }
    .ui-table thead th.sorted { color: var(--accent); }

    .ui-table tbody tr { border-bottom: 1px solid #F3F4F6; transition: background .12s; }
    .ui-table tbody tr:last-child { border-bottom: none; }
    .ui-table tbody tr:hover { background: #F9FAFB; }
    .ui-table tbody td { padding: 13px 18px; font-size: 13.5px; color: var(--text-mid); vertical-align: middle; }
    .ui-table tbody td:first-child { padding-left: 22px; }
    .ui-table tbody td:last-child  { padding-right: 22px; }

    /* Skill cell */
    .skill-cell { display: flex; align-items: center; gap: 11px; }
    .skill-avatar {
        width: 38px; height: 38px; border-radius: 9px;
        object-fit: cover; border: 1.5px solid var(--border); flex-shrink: 0;
    }
    .skill-avatar-placeholder {
        width: 38px; height: 38px; border-radius: 9px;
        background: var(--accent-light); color: var(--accent);
        font-size: 14px; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; border: 1.5px solid #C7D2FB;
    }
    .skill-name  { font-weight: 600; color: var(--text-hi); font-size: 13.5px; }
    .skill-meta  { font-size: 11.5px; color: var(--text-lo); margin-top: 2px; }

    /* Badges */
    .badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 700; white-space: nowrap; }
    .badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
    .badge-active   { background: var(--success-bg); color: var(--success); border: 1px solid rgba(16,185,129,.2); }
    .badge-inactive { background: #F3F4F6; color: var(--text-lo); border: 1px solid var(--border); }
    .badge-pending  { background: var(--warning-bg); color: var(--warning); border: 1px solid rgba(245,158,11,.2); }
    .badge-featured {
        background: var(--gold-bg); color: var(--gold);
        border: 1px solid rgba(217,119,6,.2); border-radius: 5px;
        font-size: 10px; font-weight: 700; letter-spacing: .05em;
        padding: 2px 7px; vertical-align: middle; margin-left: 5px;
    }
    .level-pill {
        display: inline-block; padding: 3px 9px; border-radius: 5px;
        font-size: 11px; font-weight: 700;
        background: var(--info-bg); color: var(--info);
        border: 1px solid rgba(59,130,246,.2);
    }

    /* Checkbox */
    input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--accent); cursor: pointer; }

    /* Action buttons */
    .action-group { display: flex; gap: 5px; justify-content: flex-end; align-items: center; }
    .action-btn {
        width: 32px; height: 32px; border-radius: 7px;
        border: 1px solid var(--border); background: transparent;
        color: var(--text-lo);
        display: inline-flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all .15s; text-decoration: none; font-size: 14px;
    }
    .action-btn svg { width: 14px; height: 14px; }
    .action-btn:hover        { background: var(--accent-light); color: var(--accent); border-color: #C7D2FB; }
    .action-btn.btn-edit:hover { background: var(--warning-bg); color: var(--warning); border-color: #FDE68A; }
    .action-btn.btn-del:hover  { background: var(--danger-bg);  color: var(--danger);  border-color: #FCA5A5; }

    /* Pagination */
    .pg-bar {
        padding: 13px 22px; border-top: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
    }
    .pg-info { font-size: 12.5px; color: var(--text-lo); }
    .pg-links { display: flex; gap: 4px; }
    .pg-btn {
        width: 32px; height: 32px; border-radius: 7px;
        border: 1px solid var(--border); background: #fff;
        color: var(--text-mid); font-size: 12.5px;
        display: inline-flex; align-items: center; justify-content: center;
        text-decoration: none; transition: all .15s; cursor: pointer; font-family: inherit;
    }
    .pg-btn:hover  { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }
    .pg-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); font-weight: 700; }
    .pg-btn.disabled { opacity: .35; pointer-events: none; }

    /* Empty */
    .empty-state { text-align: center; padding: 72px 24px; }
    .empty-icon  {
        width: 56px; height: 56px; border-radius: 50%;
        background: #F3F4F6; border: 1px solid var(--border);
        display: inline-flex; align-items: center; justify-content: center;
        margin-bottom: 14px; color: var(--text-lo); font-size: 22px;
    }
    .empty-state h3 { font-size: 14px; font-weight: 600; color: var(--text-mid); margin-bottom: 5px; }
    .empty-state p  { font-size: 13px; color: var(--text-lo); }

    /* Flash */
    .flash-success {
        background: var(--success-bg); border: 1px solid rgba(16,185,129,.25);
        color: #065F46; border-radius: 10px; padding: 12px 18px;
        font-size: 13px; display: flex; align-items: center; gap: 9px;
    }

    @media (max-width: 900px) {
        .ui-table thead th:nth-child(4),
        .ui-table thead th:nth-child(5),
        .ui-table tbody td:nth-child(4),
        .ui-table tbody td:nth-child(5) { display: none; }
    }
</style>

<div class="container-fluid px-4 py-4">

    {{-- Flash --}}
    @if(session('success'))
    <div class="flash-success mb-4">
        <em class="icon ni ni-check-circle-fill" style="font-size:16px"></em>
        {{ session('success') }}
    </div>
    @endif

    {{-- Page header --}}
    <div class="d-flex justify-content-between align-items-end mb-4 gap-3 flex-wrap">
        <div>
            <div class="eyebrow">Management</div>
            <div class="page-title">Skills Registry</div>
            <div class="page-sub">Manage talent skills, categories, and levels</div>
        </div>
        <a href="{{ route('admin.talents.create') }}" class="btn-accent">
            <em class="icon ni ni-plus"></em> Add Skill
        </a>
    </div>

    {{-- Summary cards --}}
    <div class="row g-3 mb-4">
        <div class="col-6 col-md-4 col-xl">
            <div class="stat-card" style="--card-top:var(--accent);--card-icon-bg:var(--accent-light);--card-icon-color:var(--accent)">
                <div class="stat-label">Total Skills</div>
                <div class="stat-value">{{ number_format($stats['total'] ?? 0) }}</div>
                <div class="stat-sub">All registered</div>
                <div class="stat-icon"><em class="icon ni ni-grid-fill-c"></em></div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl">
            <div class="stat-card" style="--card-top:var(--success);--card-icon-bg:var(--success-bg);--card-icon-color:var(--success)">
                <div class="stat-label">Active</div>
                <div class="stat-value">{{ number_format($stats['active'] ?? 0) }}</div>
                <div class="stat-sub">Currently live</div>
                <div class="stat-icon"><em class="icon ni ni-check-circle-fill"></em></div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl">
            <div class="stat-card" style="--card-top:var(--gold);--card-icon-bg:var(--gold-bg);--card-icon-color:var(--gold)">
                <div class="stat-label">Featured</div>
                <div class="stat-value">{{ number_format($stats['featured'] ?? 0) }}</div>
                <div class="stat-sub">Highlighted profiles</div>
                <div class="stat-icon"><em class="icon ni ni-star-fill"></em></div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl">
            <div class="stat-card" style="--card-top:var(--info);--card-icon-bg:var(--info-bg);--card-icon-color:var(--info)">
                <div class="stat-label">Matched</div>
                <div class="stat-value">{{ number_format($stats['matched'] ?? 0) }}</div>
                <div class="stat-sub">Successfully placed</div>
                <div class="stat-icon"><em class="icon ni ni-repeat-fill"></em></div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl">
            <div class="stat-card" style="--card-top:var(--purple);--card-icon-bg:var(--purple-bg);--card-icon-color:var(--purple)">
                <div class="stat-label">Categories</div>
                <div class="stat-value">{{ number_format($stats['categories'] ?? 0) }}</div>
                <div class="stat-sub">Skill types</div>
                <div class="stat-icon"><em class="icon ni ni-layers-fill"></em></div>
            </div>
        </div>
    </div>

    {{-- Filter bar --}}
    <form method="GET" action="{{ route('admin.talents.index') }}" id="filterForm">
        <div class="filter-card mb-4">
            <div class="row g-3 align-items-end">
                <div class="col-12 col-md-3">
                    <label class="filter-label">Search</label>
                    <input type="text" name="search" class="filter-input"
                           value="{{ request('search') }}" placeholder="Name, email, phone…">
                </div>
                <div class="col-6 col-md-2">
                    <label class="filter-label">Status</label>
                    <select name="status" class="filter-input">
                        <option value="">All Status</option>
                        <option value="active"   {{ request('status') == 'active'   ? 'selected' : '' }}>Active</option>
                        <option value="inactive" {{ request('status') == 'inactive' ? 'selected' : '' }}>Inactive</option>
                        <option value="pending"  {{ request('status') == 'pending'  ? 'selected' : '' }}>Pending</option>
                    </select>
                </div>
                <div class="col-6 col-md-2">
                    <label class="filter-label">Category</label>
                    <select name="category_id" class="filter-input">
                        <option value="">All Categories</option>
                        @foreach($categories as $cat)
                        <option value="{{ $cat->id }}" {{ request('category_id') == $cat->id ? 'selected' : '' }}>
                            {{ $cat->name }}
                        </option>
                        @endforeach
                    </select>
                </div>
                <div class="col-6 col-md-2">
                    <label class="filter-label">Level</label>
                    <select name="level" class="filter-input">
                        <option value="">All Levels</option>
                        <option value="beginner"     {{ request('level') == 'beginner'     ? 'selected' : '' }}>Beginner</option>
                        <option value="intermediate" {{ request('level') == 'intermediate' ? 'selected' : '' }}>Intermediate</option>
                        <option value="advanced"     {{ request('level') == 'advanced'     ? 'selected' : '' }}>Advanced</option>
                        <option value="expert"       {{ request('level') == 'expert'       ? 'selected' : '' }}>Expert</option>
                    </select>
                </div>
                <div class="col-6 col-md-1">
                    <label class="filter-label">Featured</label>
                    <select name="featured" class="filter-input">
                        <option value="">All</option>
                        <option value="1" {{ request('featured') == '1' ? 'selected' : '' }}>Yes</option>
                        <option value="0" {{ request('featured') == '0' ? 'selected' : '' }}>No</option>
                    </select>
                </div>
                <div class="col-12 col-md-2 d-flex gap-2">
                    <button type="submit" class="btn-filter">Filter</button>
                    <a href="{{ route('admin.talents.index') }}" class="btn-reset">Reset</a>
                </div>
            </div>
        </div>
    </form>

    {{-- Table --}}
    <div class="ui-card">
        <div class="card-bar">
            <span class="card-bar-label">
                All Skills
                <span class="count-badge">{{ $talents->total() }}</span>
            </span>
            <div class="d-flex align-items-center gap-2">
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
            <div class="table-responsive">
                <table class="ui-table">
                    <thead>
                        <tr>
                            <th style="width:44px">
                                <input type="checkbox" id="selectAll" onclick="toggleAll(this)">
                            </th>
                            <th class="sortable">Skill</th>
                            <th>Category</th>
                            <th>Level</th>
                            <th>Language</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($talents as $talent)
                        <tr>
                            <td>
                                <input type="checkbox" name="ids[]" value="{{ $talent->id }}" class="row-cb">
                            </td>
                            <td>
                                <div class="skill-cell">
                                    @if($talent->image)
                                        <img src="{{ asset($talent->image) }}" alt="{{ $talent->name }}" class="skill-avatar">
                                    @else
                                        <div class="skill-avatar-placeholder">{{ strtoupper(substr($talent->name, 0, 1)) }}</div>
                                    @endif
                                    <div>
                                        <div class="skill-name">
                                            {{ $talent->name }}
                                            @if($talent->featured)
                                                <span class="badge-featured">FEATURED</span>
                                            @endif
                                        </div>
                                        <div class="skill-meta">{{ $talent->email ?? $talent->phone }}</div>
                                    </div>
                                </div>
                            </td>
                            <td style="font-size:13px">{{ $talent->category->name ?? '—' }}</td>
                            <td>
                                @if($talent->level)
                                    <span class="level-pill">{{ ucfirst($talent->level) }}</span>
                                @else
                                    <span style="color:var(--text-lo)">—</span>
                                @endif
                            </td>
                            <td style="font-size:13px;color:var(--text-lo)">{{ $talent->language ?? '—' }}</td>
                            <td>
                                @php $status = strtolower($talent->status ?? 'inactive'); @endphp
                                <span class="badge badge-{{ $status }}">
                                    <span class="badge-dot"></span>{{ ucfirst($status) }}
                                </span>
                            </td>
                            <td>
                                <div class="action-group">
                                    <a href="{{ route('admin.talents.show', $talent) }}" class="action-btn" title="View">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </a>
                                    <a href="{{ route('admin.talents.edit', $talent) }}" class="action-btn btn-edit" title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"/>
                                        </svg>
                                    </a>
                                    <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}"
                                          onsubmit="return confirm('Delete this skill?')" style="display:inline">
                                        @csrf @method('DELETE')
                                        <button type="submit" class="action-btn btn-del" title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            @else
            <div class="empty-state">
                <div class="empty-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="22" height="22">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                    </svg>
                </div>
                <h3>No skills found</h3>
                <p>Try adjusting your filters or add a new skill.</p>
            </div>
            @endif
        </form>

        {{-- Pagination --}}
        @if($talents->hasPages())
        <div class="pg-bar">
            <span class="pg-info">
                Showing {{ $talents->firstItem() }}–{{ $talents->lastItem() }} of {{ $talents->total() }} skills
            </span>
            <div class="pg-links">
                @if($talents->onFirstPage())
                    <span class="pg-btn disabled">‹</span>
                @else
                    <a href="{{ $talents->previousPageUrl() }}&{{ http_build_query(request()->except('page')) }}" class="pg-btn">‹</a>
                @endif

                @foreach(range(max(1, $talents->currentPage()-2), min($talents->lastPage(), $talents->currentPage()+2)) as $pg)
                    <a href="{{ $talents->url($pg) }}&{{ http_build_query(request()->except('page')) }}"
                       class="pg-btn {{ $pg == $talents->currentPage() ? 'active' : '' }}">{{ $pg }}</a>
                @endforeach

                @if($talents->hasMorePages())
                    <a href="{{ $talents->nextPageUrl() }}&{{ http_build_query(request()->except('page')) }}" class="pg-btn">›</a>
                @else
                    <span class="pg-btn disabled">›</span>
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
        const action  = document.getElementById('bulkAction').value;
        const checked = document.querySelectorAll('.row-cb:checked');
        if (!action)        { alert('Please select a bulk action.'); return; }
        if (!checked.length){ alert('Please select at least one skill.'); return; }
        if (action === 'delete' && !confirm('Delete selected skills?')) return;
        document.getElementById('bulkActionInput').value = action;
        document.getElementById('bulkForm').submit();
    }
</script>

@endsection