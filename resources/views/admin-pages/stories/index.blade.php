@extends('layouts.app')
@section('title', 'Stories')
@section('content')

<style>
    :root {
        --bg-deep: #0e1618;
        --bg-card: #131d1f;
        --bg-card-hover: #172023;
        --bg-surface: #1a2628;
        --accent: #00a667;
        --accent-dim: rgba(0, 166, 103, 0.12);
        --accent-glow: rgba(0, 166, 103, 0.25);
        --text-primary: #e8f0ef;
        --text-secondary: #7a9a96;
        --text-muted: #4a6560;
        --border: rgba(0, 166, 103, 0.12);
        --border-hover: rgba(0, 166, 103, 0.35);
        --danger: #e05757;
        --warning: #e0a230;
        --font-display: 'Sora', sans-serif;
        --font-body: 'DM Sans', sans-serif;
    }

    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    .stories-wrapper {
        background: var(--bg-deep);
        min-height: 100vh;
        padding: 2rem 1.5rem;
        font-family: var(--font-body);
    }

    /* Header */
    .stories-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border);
    }

    .stories-header-left h2 {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.25rem;
        letter-spacing: -0.02em;
    }

    .stories-header-left p {
        font-size: 0.82rem;
        color: var(--text-muted);
        margin: 0;
    }

    .stories-header-actions {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .btn-create {
        background: var(--accent);
        color: #fff;
        border: none;
        padding: 0.55rem 1.4rem;
        border-radius: 50px;
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        transition: all 0.2s ease;
        box-shadow: 0 0 18px var(--accent-glow);
    }

    .btn-create:hover {
        background: #00bf75;
        color: #fff;
        transform: translateY(-1px);
        box-shadow: 0 0 28px var(--accent-glow);
    }

    .btn-payments {
        background: transparent;
        color: var(--warning);
        border: 1px solid rgba(224, 162, 48, 0.3);
        padding: 0.55rem 1.4rem;
        border-radius: 50px;
        font-family: var(--font-body);
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
    }

    .btn-payments:hover {
        background: rgba(224, 162, 48, 0.1);
        color: var(--warning);
        border-color: rgba(224, 162, 48, 0.6);
    }

    /* Stats Row */
    .stats-strip {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .stat-chip {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 0.75rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .stat-chip-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 8px var(--accent-glow);
    }

    .stat-chip-dot.pending { background: var(--warning); box-shadow: 0 0 8px rgba(224,162,48,0.3); }
    .stat-chip-dot.rejected { background: var(--danger); box-shadow: 0 0 8px rgba(224,87,87,0.3); }

    .stat-chip span {
        font-size: 0.8rem;
        color: var(--text-secondary);
        font-weight: 500;
    }

    .stat-chip strong {
        font-size: 0.8rem;
        color: var(--text-primary);
        font-weight: 600;
    }

    /* Table Card */
    .table-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 8px 40px rgba(0,0,0,0.4);
    }

    .table-card-inner {
        overflow-x: auto;
    }

    .stories-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
    }

    .stories-table thead tr {
        background: rgba(0, 166, 103, 0.05);
        border-bottom: 1px solid var(--border);
    }

    .stories-table thead th {
        padding: 1rem 1.25rem;
        font-family: var(--font-display);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-muted);
        text-align: left;
        white-space: nowrap;
    }

    .stories-table thead th:first-child { padding-left: 1.75rem; }
    .stories-table thead th:last-child { padding-right: 1.75rem; text-align: right; }

    .stories-table tbody tr {
        border-bottom: 1px solid rgba(0, 166, 103, 0.06);
        transition: background 0.15s ease;
    }

    .stories-table tbody tr:last-child { border-bottom: none; }

    .stories-table tbody tr:hover {
        background: var(--bg-card-hover);
    }

    .stories-table tbody td {
        padding: 1.1rem 1.25rem;
        color: var(--text-secondary);
        vertical-align: middle;
    }

    .stories-table tbody td:first-child { padding-left: 1.75rem; }
    .stories-table tbody td:last-child { padding-right: 1.75rem; text-align: right; }

    .story-title-cell {
        font-weight: 600;
        color: var(--text-primary);
        font-size: 0.9rem;
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .talent-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.82rem;
        color: var(--text-secondary);
    }

    .talent-avatar {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--accent-dim);
        border: 1px solid var(--border-hover);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.65rem;
        font-weight: 700;
        color: var(--accent);
        text-transform: uppercase;
    }

    .category-tag {
        display: inline-block;
        padding: 0.2rem 0.65rem;
        border-radius: 20px;
        background: rgba(0, 166, 103, 0.08);
        border: 1px solid rgba(0, 166, 103, 0.2);
        font-size: 0.75rem;
        color: var(--accent);
        font-weight: 500;
    }

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.03em;
    }

    .status-badge::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .status-approved { background: rgba(0,166,103,0.12); color: #00a667; border: 1px solid rgba(0,166,103,0.25); }
    .status-approved::before { background: #00a667; box-shadow: 0 0 5px rgba(0,166,103,0.6); }

    .status-pending { background: rgba(224,162,48,0.1); color: #e0a230; border: 1px solid rgba(224,162,48,0.25); }
    .status-pending::before { background: #e0a230; }

    .status-rejected { background: rgba(224,87,87,0.1); color: #e05757; border: 1px solid rgba(224,87,87,0.25); }
    .status-rejected::before { background: #e05757; }

    .status-published { background: rgba(90,140,255,0.1); color: #5a8cff; border: 1px solid rgba(90,140,255,0.25); }
    .status-published::before { background: #5a8cff; }

    /* Actions Dropdown */
    .actions-dropdown .dropdown-toggle {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        color: var(--text-secondary);
        font-size: 0.78rem;
        padding: 0.35rem 0.9rem;
        border-radius: 8px;
        font-family: var(--font-body);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .actions-dropdown .dropdown-toggle:hover {
        border-color: var(--border-hover);
        color: var(--text-primary);
        background: var(--bg-card-hover);
    }

    .actions-dropdown .dropdown-menu {
        background: #1c2a2d;
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 0.4rem;
        box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        min-width: 150px;
    }

    .actions-dropdown .dropdown-item {
        color: var(--text-secondary);
        font-size: 0.82rem;
        padding: 0.5rem 0.85rem;
        border-radius: 8px;
        font-family: var(--font-body);
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .actions-dropdown .dropdown-item:hover {
        background: var(--accent-dim);
        color: var(--text-primary);
    }

    .actions-dropdown .dropdown-item.text-danger {
        color: var(--danger) !important;
    }

    .actions-dropdown .dropdown-item.text-danger:hover {
        background: rgba(224,87,87,0.1);
        color: var(--danger) !important;
    }

    /* Delete Modal */
    .modal-content {
        background: #131d1f;
        border: 1px solid var(--border);
        border-radius: 18px;
        overflow: hidden;
    }

    .modal-header {
        background: rgba(0, 166, 103, 0.04);
        border-bottom: 1px solid var(--border);
        padding: 1.25rem 1.5rem;
    }

    .modal-header .modal-title {
        color: var(--text-primary);
        font-family: var(--font-display);
        font-size: 1rem;
        font-weight: 600;
    }

    .modal-header .btn-close {
        filter: invert(1) opacity(0.4);
    }

    .modal-body {
        padding: 1.5rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .modal-footer {
        border-top: 1px solid var(--border);
        padding: 1rem 1.5rem;
        gap: 0.5rem;
    }

    .btn-modal-cancel {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        color: var(--text-secondary);
        padding: 0.5rem 1.2rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-family: var(--font-body);
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .btn-modal-cancel:hover {
        color: var(--text-primary);
        border-color: var(--border-hover);
    }

    .btn-modal-delete {
        background: var(--danger);
        border: none;
        color: #fff;
        padding: 0.5rem 1.2rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-family: var(--font-body);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .btn-modal-delete:hover {
        background: #c94a4a;
    }

    /* Empty state */
    .empty-state {
        text-align: center;
        padding: 4rem 2rem;
    }

    .empty-icon {
        width: 64px;
        height: 64px;
        background: var(--accent-dim);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.5rem;
        color: var(--accent);
    }

    .empty-state h5 {
        color: var(--text-primary);
        font-family: var(--font-display);
        margin-bottom: 0.5rem;
    }

    .empty-state p {
        color: var(--text-muted);
        font-size: 0.875rem;
    }

    /* Scrollbar */
    .table-card-inner::-webkit-scrollbar { height: 4px; }
    .table-card-inner::-webkit-scrollbar-track { background: transparent; }
    .table-card-inner::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 2px; }
</style>

<div class="stories-wrapper">

    <!-- Header -->
    <div class="stories-header">
        <div class="stories-header-left">
            <h2>Stories</h2>
            <p>Manage and moderate talent stories</p>
        </div>
        <div class="stories-header-actions">
            <a href="/admin/payments" class="btn-payments">
                <i class="ti ti-cash"></i> Story Payments
            </a>
            <a href="{{ route('admin.stories.create') }}" class="btn-create">
                <i class="ti ti-plus"></i> Create Story
            </a>
        </div>
    </div>

    <!-- Table -->
    <div class="table-card">
        <div class="table-card-inner">
            <table class="stories-table datatable-init nowrap">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Talent</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($stories as $story)
                    <tr>
                        <td>
                            <div class="story-title-cell">{{ $story->title }}</div>
                        </td>
                        <td>
                            <div class="talent-badge">
                                <div class="talent-avatar">{{ substr($story->talent?->name ?? 'N', 0, 1) }}</div>
                                {{ $story->talent?->name ?? 'N/A' }}
                            </div>
                        </td>
                        <td>
                            <span class="category-tag">{{ $story->category?->name ?? 'N/A' }}</span>
                        </td>
                        <td>
                            @php $s = strtolower($story->status); @endphp
                            <span class="status-badge status-{{ $s }}">{{ ucfirst($story->status) }}</span>
                        </td>
                        <td>
                            <div class="dropdown actions-dropdown">
                                <button class="dropdown-toggle" type="button" id="actionsDropdown{{ $story->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actions <i class="ti ti-chevron-down" style="font-size:0.7rem"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="actionsDropdown{{ $story->id }}">
                                    <li>
                                        <a class="dropdown-item" href="{{ route('admin.stories.show', $story->id) }}">
                                            <i class="ti ti-eye"></i> Quick View
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="{{ route('admin.stories.edit', $story->id) }}">
                                            <i class="ti ti-pencil"></i> Edit
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $story->id }}">
                                            <i class="ti ti-trash"></i> Delete
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5">
                            <div class="empty-state">
                                <div class="empty-icon"><i class="ti ti-news"></i></div>
                                <h5>No stories yet</h5>
                                <p>Create your first story to get started.</p>
                            </div>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

</div>

{{-- Delete Modals --}}
@foreach($stories as $story)
<div class="modal fade" id="deleteModal{{ $story->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form action="{{ route('admin.stories.destroy', $story->id) }}" method="POST" class="modal-content">
            @csrf
            @method('DELETE')
            <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete <strong style="color: var(--text-primary)">{{ $story->title }}</strong>? This action cannot be undone.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-modal-delete">Yes, Delete</button>
            </div>
        </form>
    </div>
</div>
@endforeach

@endsection