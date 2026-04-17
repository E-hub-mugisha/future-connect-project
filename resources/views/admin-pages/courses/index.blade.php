@extends('layouts.app')

@section('title', 'Courses — CourseHub')
@section('topbar-title', 'Courses')

@section('content')
<style>
    /* ── Filter bar ── */
    .filter-bar {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 20px 24px;
        margin-bottom: 24px;
    }

    .filter-bar-top {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .filter-search-wrap {
        position: relative;
        flex: 1;
        min-width: 220px;
    }

    .filter-search-wrap svg {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--muted2);
        pointer-events: none;
    }

    .filter-search-wrap .form-control {
        padding-left: 38px;
    }

    .filter-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    }

    .filter-select {
        background: var(--surface2);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 9px 32px 9px 12px;
        color: var(--text);
        font-family: var(--font-body);
        font-size: .85rem;
        outline: none;
        appearance: none;
        cursor: pointer;
        transition: border-color .2s;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237a9098'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 14px;
    }

    .filter-select:focus {
        border-color: var(--accent);
    }

    .filter-select option {
        background: var(--surface2);
    }

    .filter-divider {
        width: 1px;
        height: 24px;
        background: var(--border);
        flex-shrink: 0;
    }

    .filter-count {
        font-size: .8rem;
        color: var(--text-dim);
        white-space: nowrap;
    }

    .filter-count strong {
        color: var(--accent);
        font-family: var(--font-head);
    }

    /* ── Table ── */
    .table-wrap {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }

    .table-header {
        padding: 18px 24px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead th {
        padding: 12px 16px;
        text-align: left;
        font-size: .72rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: var(--text-dim);
        font-family: var(--font-head);
        background: var(--surface2);
        border-bottom: 1px solid var(--border);
        white-space: nowrap;
    }

    thead th:first-child {
        padding-left: 24px;
    }

    thead th:last-child {
        padding-right: 24px;
        text-align: right;
    }

    tbody tr {
        border-bottom: 1px solid rgba(26, 48, 56, .6);
        transition: background .15s;
    }

    tbody tr:last-child {
        border-bottom: none;
    }

    tbody tr:hover {
        background: rgba(45, 212, 191, .035);
    }

    tbody td {
        padding: 14px 16px;
        font-size: .875rem;
        vertical-align: middle;
    }

    tbody td:first-child {
        padding-left: 24px;
    }

    tbody td:last-child {
        padding-right: 24px;
    }

    /* ── Course thumb cell ── */
    .course-cell {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .course-thumb {
        width: 52px;
        height: 38px;
        border-radius: 6px;
        object-fit: cover;
        background: var(--surface2);
        flex-shrink: 0;
        border: 1px solid var(--border);
    }

    .course-thumb-placeholder {
        width: 52px;
        height: 38px;
        border-radius: 6px;
        background: var(--surface2);
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--muted);
    }

    .course-thumb-placeholder svg {
        width: 18px;
        height: 18px;
    }

    .course-title {
        font-weight: 500;
        color: var(--text);
        font-size: .875rem;
        line-height: 1.35;
        max-width: 240px;
    }

    .course-title a {
        color: inherit;
        text-decoration: none;
    }

    .course-title a:hover {
        color: var(--accent);
    }

    .course-meta {
        font-size: .75rem;
        color: var(--text-dim);
        margin-top: 2px;
    }

    /* ── Price cell ── */
    .price-cell .price-free {
        color: #38bdf8;
        font-weight: 600;
        font-size: .8rem;
    }

    .price-cell .price-val {
        color: var(--text);
        font-weight: 600;
        font-family: var(--font-head);
    }

    .price-cell .price-cur {
        color: var(--text-dim);
        font-size: .75rem;
    }

    /* ── Actions cell ── */
    .actions-cell {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
    }

    .icon-btn {
        width: 32px;
        height: 32px;
        border-radius: 7px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--surface2);
        border: 1px solid var(--border);
        color: var(--text-dim);
        cursor: pointer;
        text-decoration: none;
        transition: all .15s;
        flex-shrink: 0;
    }

    .icon-btn svg {
        width: 14px;
        height: 14px;
    }

    .icon-btn:hover {
        color: var(--text);
        border-color: var(--muted2);
    }

    .icon-btn.view:hover {
        color: var(--accent);
        border-color: var(--accent);
        background: var(--accent-glow);
    }

    .icon-btn.edit:hover {
        color: #60a5fa;
        border-color: #60a5fa;
        background: rgba(96, 165, 250, .1);
    }

    .icon-btn.delete:hover {
        color: var(--danger);
        border-color: var(--danger);
        background: rgba(244, 63, 94, .1);
    }

    /* ── Stats row ── */
    .stats-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 24px;
    }

    .stat-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 18px 20px;
        position: relative;
        overflow: hidden;
    }

    .stat-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--accent-color, var(--accent));
    }

    .stat-card-icon {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: var(--accent-bg, var(--accent-glow));
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-color, var(--accent));
        margin-bottom: 12px;
    }

    .stat-card-icon svg {
        width: 18px;
        height: 18px;
    }

    .stat-val {
        font-family: var(--font-head);
        font-size: 1.6rem;
        font-weight: 800;
        color: var(--text);
        line-height: 1;
    }

    .stat-label {
        font-size: .78rem;
        color: var(--text-dim);
        margin-top: 4px;
    }

    /* ── Empty state ── */
    .empty-state {
        padding: 60px 24px;
        text-align: center;
    }

    .empty-icon {
        width: 56px;
        height: 56px;
        border-radius: 14px;
        background: var(--surface2);
        border: 1px solid var(--border);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--muted2);
        margin-bottom: 16px;
    }

    .empty-icon svg {
        width: 26px;
        height: 26px;
    }

    .empty-state h3 {
        font-family: var(--font-head);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 6px;
    }

    .empty-state p {
        color: var(--text-dim);
        font-size: .875rem;
    }

    /* ── Pagination ── */
    .pagination-wrap {
        padding: 16px 24px;
        border-top: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .82rem;
        color: var(--text-dim);
    }

    .pagination {
        display: flex;
        gap: 4px;
        list-style: none;
    }

    .pagination .page-item .page-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 7px;
        background: var(--surface2);
        border: 1px solid var(--border);
        color: var(--text-dim);
        font-size: .8rem;
        text-decoration: none;
        transition: all .15s;
    }

    .pagination .page-item.active .page-link {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--bg);
        font-weight: 600;
    }

    .pagination .page-item .page-link:hover:not(.active) {
        border-color: var(--muted2);
        color: var(--text);
    }

    @media (max-width: 900px) {
        .stats-row {
            grid-template-columns: 1fr 1fr;
        }

        .course-title {
            max-width: 160px;
        }
    }
</style>

<!-- Breadcrumb -->
<nav class="breadcrumb">
    <a href="#">Dashboard</a>
    <span class="breadcrumb-sep">›</span>
    <span class="breadcrumb-current">Courses</span>
</nav>

<!-- Page header -->
<div class="page-header">
    <div class="page-header-text">
        <h1>Courses</h1>
        <p>Manage your course catalog, content, and publishing status.</p>
    </div>
    <a href="{{ route('admin.courses.create') }}" class="btn btn-primary">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        New Course
    </a>
</div>

<!-- Stats -->
<div class="stats-row">
    <div class="stat-card" style="--accent-color:#2dd4bf;--accent-bg:rgba(45,212,191,.12)">
        <div class="stat-card-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
        <div class="stat-val">{{ $stats['total'] ?? 0 }}</div>
        <div class="stat-label">Total Courses</div>
    </div>

    <div class="stat-card" style="--accent-color:#34d399;--accent-bg:rgba(52,211,153,.12)">
        <div class="stat-card-icon" style="color:#34d399">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div class="stat-val">{{ $stats['published'] ?? 0 }}</div>
        <div class="stat-label">Published</div>
    </div>

    <div class="stat-card" style="--accent-color:#fbbf24;--accent-bg:rgba(251,191,36,.1)">
        <div class="stat-card-icon" style="color:#fbbf24">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </div>
        <div class="stat-val">{{ $stats['draft'] ?? 0 }}</div>
        <div class="stat-label">Drafts</div>
    </div>

    <div class="stat-card" style="--accent-color:#c4b5fd;--accent-bg:rgba(196,181,253,.1)">
        <div class="stat-card-icon" style="color:#c4b5fd">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <div class="stat-val">{{ $stats['enrollments'] ?? 0 }}</div>
        <div class="stat-label">Total Enrollments</div>
    </div>
</div>

<!-- Filter bar -->
<div class="filter-bar">
    <form method="GET" action="{{ route('admin.courses.index') }}">
        <div class="filter-bar-top">
            <div class="filter-search-wrap">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    name="search"
                    class="form-control"
                    placeholder="Search courses by title…"
                    value="{{ request('search') }}">
            </div>

            <div class="filter-row">
                <select name="status" class="filter-select" onchange="this.form.submit()">
                    <option value="">All Status</option>
                    <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
                    <option value="draft" {{ request('status') === 'draft'     ? 'selected' : '' }}>Draft</option>
                    <option value="archived" {{ request('status') === 'archived'  ? 'selected' : '' }}>Archived</option>
                </select>

                <select name="level" class="filter-select" onchange="this.form.submit()">
                    <option value="">All Levels</option>
                    <option value="beginner" {{ request('level') === 'beginner'     ? 'selected' : '' }}>Beginner</option>
                    <option value="intermediate" {{ request('level') === 'intermediate' ? 'selected' : '' }}>Intermediate</option>
                    <option value="advanced" {{ request('level') === 'advanced'     ? 'selected' : '' }}>Advanced</option>
                </select>

                <select name="is_free" class="filter-select" onchange="this.form.submit()">
                    <option value="">All Pricing</option>
                    <option value="1" {{ request('is_free') === '1' ? 'selected' : '' }}>Free</option>
                    <option value="0" {{ request('is_free') === '0' ? 'selected' : '' }}>Paid</option>
                </select>

                <select name="category_id" class="filter-select" onchange="this.form.submit()">
                    <option value="">All Categories</option>
                    @foreach($categories ?? [] as $cat)
                    <option value="{{ $cat->id }}" {{ request('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                    @endforeach
                </select>

                <div class="filter-divider"></div>

                <select name="per_page" class="filter-select" onchange="this.form.submit()">
                    <option value="15" {{ request('per_page', 15) == 15 ? 'selected' : '' }}>15 / page</option>
                    <option value="30" {{ request('per_page', 15) == 30 ? 'selected' : '' }}>30 / page</option>
                    <option value="50" {{ request('per_page', 15) == 50 ? 'selected' : '' }}>50 / page</option>
                </select>

                <button type="submit" class="btn btn-secondary btn-sm">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm3 4a1 1 0 011-1h10a1 1 0 010 2H7a1 1 0 01-1-1zm3 4a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z" />
                    </svg>
                    Filter
                </button>

                @if(request()->hasAny(['search','status','level','is_free','category_id']))
                <a href="{{ route('admin.courses.index') }}" class="btn btn-ghost btn-sm">Clear</a>
                @endif
            </div>
        </div>
    </form>
</div>

<!-- Table -->
<div class="table-wrap">
    <div class="table-header">
        <span class="card-title">
            Course List
        </span>
        <span class="filter-count">
            Showing <strong>{{ $courses->count() }}</strong> of <strong>{{ $courses->total() }}</strong> results
        </span>
    </div>

    @if($courses->count())
    <table>
        <thead>
            <tr>
                <th>Course</th>
                <th>Category</th>
                <th>Level</th>
                <th>Pricing</th>
                <th>Enrollments</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($courses as $course)
            <tr>
                <td>
                    <div class="course-cell">
                        @if($course->thumbnail)
                        <img src="{{ asset('storage/'.$course->thumbnail) }}" alt="" class="course-thumb">
                        @else
                        <div class="course-thumb-placeholder">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                        </div>
                        @endif
                        <div>
                            <div class="course-title">
                                <a href="{{ route('admin.courses.show', $course) }}">{{ $course->title }}</a>
                            </div>
                            <div class="course-meta">{{ $course->talent->name ?? 'No Talent' }}</div>
                        </div>
                    </div>
                </td>
                <td class="text-sm text-dim">{{ $course->category->name ?? '—' }}</td>
                <td>
                    @if($course->level)
                    <span class="badge badge-{{ $course->level }}">{{ ucfirst($course->level) }}</span>
                    @else
                    <span class="text-dim text-sm">—</span>
                    @endif
                </td>
                <td class="price-cell">
                    @if($course->is_free)
                    <span class="badge badge-free">Free</span>
                    @else
                    <span class="badge badge-paid">
                        ${{ number_format($course->price, 2) }}
                    </span>
                    @endif
                </td>
                <td class="text-sm" style="color:var(--text);">
                    {{ $course->enrollments_count ?? $course->enrollments->count() }}
                </td>
                <td>
                    <span class="badge badge-{{ $course->status ?? 'draft' }}">
                        <span class="badge-dot"></span>
                        {{ ucfirst($course->status ?? 'draft') }}
                    </span>
                </td>
                <td>
                    <div class="actions-cell">
                        <a href="{{ route('admin.courses.show', $course) }}" class="icon-btn view" title="View">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </a>
                        <a href="{{ route('admin.courses.edit', $course) }}" class="icon-btn edit" title="Edit">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </a>
                        <form method="POST" action="{{ route('admin.courses.destroy', $course) }}" onsubmit="return confirm('Delete this course?')">
                            @csrf @method('DELETE')
                            <button type="submit" class="icon-btn delete" title="Delete">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination-wrap">
        <span>Page {{ $courses->currentPage() }} of {{ $courses->lastPage() }}</span>
        {{ $courses->withQueryString()->links('pagination::bootstrap-4') }}
    </div>

    @else
    <div class="empty-state">
        <div class="empty-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
        <h3>No courses found</h3>
        <p>Try adjusting your filters or <a href="{{ route('admin.courses.create') }}" style="color:var(--accent)">create a new course</a>.</p>
    </div>
    @endif
</div>

@endsection