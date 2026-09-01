@extends('layouts.app')
@section('title', 'Skills')
@section('content')

<style>
    :root {
        --bg-deep:       #f0f4f8;
        --bg-card:       #F5f5f7;
        --bg-surface:    #f8fafc;
        --bg-hover:      #f1f5f9;
        --accent:        #00a667;
        --accent-dim:    rgba(0, 166, 103, 0.10);
        --accent-glow:   rgba(0, 166, 103, 0.25);
        --text-primary:  #0f1c2e;
        --text-secondary:#4a6380;
        --text-muted:    #8ea5be;
        --border:        rgba(15, 28, 46, 0.09);
        --border-accent: rgba(0, 166, 103, 0.28);
        --danger:        #dc3545;
        --danger-dim:    rgba(220, 53, 69, 0.09);
        --warning:       #f59e0b;
        --radius-sm:     6px;
        --radius-md:     10px;
        --radius-lg:     16px;
        --shadow-card:   0 1px 4px rgba(15,28,46,0.07), 0 4px 16px rgba(15,28,46,0.05);
        --shadow-glow:   0 0 18px rgba(0,166,103,0.18);
        --focus-ring:    0 0 0 3px rgba(0, 166, 103, 0.22);
        --transition-fast: 150ms ease;
        --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    body, .nk-wrap, .nk-content, .container-fluid {
        background-color: var(--bg-deep) !important;
        color: var(--text-primary) !important;
    }

    /* ── Page Header ── */
    .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 28px 0 24px;
        border-bottom: 1px solid var(--border);
        margin-bottom: 28px;
        flex-wrap: wrap;
        gap: 16px;
    }

    .page-header h2 {
        font-family: 'Sora', 'DM Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        margin: 0;
    }

    .page-header h2 span { color: var(--accent); }

    /* ── Buttons ── */
    .btn-accent {
        background: var(--accent);
        color: #fff;
        border: none;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        text-decoration: none;
        transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
    }

    .btn-accent:hover {
        background: #008f57;
        box-shadow: var(--shadow-glow);
        transform: translateY(-1px);
        color: #fff;
    }

    /* ── Card ── */
    .data-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        overflow: hidden;
        margin-bottom: 24px;
    }

    /* ── Table ── */
    .table-responsive { overflow-x: auto; -webkit-overflow-scrolling: touch; }

    .skills-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
        min-width: 720px;
    }

    .skills-table thead tr {
        background: var(--bg-surface);
        border-bottom: 1.5px solid var(--border-accent);
    }

    .skills-table thead th {
        padding: 14px 20px;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--accent);
        white-space: nowrap;
        text-align: left;
    }

    .skills-table tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background var(--transition-fast);
    }

    .skills-table tbody tr:last-child { border-bottom: none; }
    .skills-table tbody tr:hover { background: #f6fdf9; }

    .skills-table tbody td {
        padding: 15px 20px;
        color: var(--text-primary);
        vertical-align: middle;
    }

    /* ── Skill name ── */
    .skill-name { font-weight: 600; color: var(--text-primary); }
    .skill-sub  { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }

    /* ── Status badges ── */
    .badge-status {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.04em;
    }

    .badge-status.published {
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid var(--border-accent);
    }

    .badge-status.draft {
        background: rgba(245,158,11,0.10);
        color: #b45309;
        border: 1px solid rgba(245,158,11,0.25);
    }

    .badge-status.archived {
        background: #f1f5f9;
        color: var(--text-muted);
        border: 1px solid var(--border);
    }

    /* ── Level badge ── */
    .badge-level {
        display: inline-block;
        padding: 3px 9px;
        border-radius: var(--radius-sm);
        font-size: 0.72rem;
        font-weight: 600;
        background: #eef2f7;
        color: var(--text-secondary);
        border: 1px solid var(--border);
    }

    /* ── Dropdown Actions ── */
    .btn-actions {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        color: var(--text-secondary);
        padding: 6px 14px;
        border-radius: var(--radius-sm);
        font-size: 0.8rem;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
    }

    .btn-actions:hover, .btn-actions:focus {
        background: #edf7f2;
        border-color: var(--accent);
        color: var(--accent);
    }

    .dropdown-menu {
        background: var(--bg-card) !important;
        border: 1px solid var(--border) !important;
        border-radius: var(--radius-md) !important;
        box-shadow: 0 8px 32px rgba(15,28,46,0.12) !important;
        min-width: 160px;
        padding: 6px !important;
        animation: dropdownSlide 0.15s ease-out;
    }

    @keyframes dropdownSlide {
        from { opacity: 0; transform: scale(0.95) translateY(-8px); }
        to   { opacity: 1; transform: scale(1) translateY(0); }
    }

    .dropdown-item {
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 8px 12px !important;
        font-size: 0.83rem !important;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background var(--transition-fast), color var(--transition-fast);
    }

    .dropdown-item:hover { background: var(--bg-hover) !important; color: var(--text-primary) !important; }
    .dropdown-item.text-danger { color: var(--danger) !important; }
    .dropdown-item.text-danger:hover { background: var(--danger-dim) !important; color: var(--danger) !important; }

    .dropdown-divider { border-color: var(--border) !important; margin: 4px 0 !important; }

    /* ── Delete Modal ── */
    .modal.fade .modal-dialog { transform: translateY(20px); transition: transform var(--transition-smooth); }
    .modal.show .modal-dialog { transform: translateY(0); }

    .modal-content {
        background: var(--bg-card) !important;
        border: 1px solid var(--border) !important;
        border-radius: var(--radius-lg) !important;
        box-shadow: 0 20px 60px rgba(15,28,46,0.14) !important;
        color: var(--text-primary) !important;
    }

    .modal-header {
        border-bottom: 1px solid var(--border) !important;
        padding: 20px 24px !important;
        background: var(--bg-surface);
        border-radius: var(--radius-lg) var(--radius-lg) 0 0 !important;
    }

    .modal-title {
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: var(--text-primary) !important;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
    }

    .modal-body  { padding: 24px !important; }

    .modal-footer {
        border-top: 1px solid var(--border) !important;
        padding: 16px 24px !important;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        background: var(--bg-surface);
        border-radius: 0 0 var(--radius-lg) var(--radius-lg) !important;
    }

    .modal-backdrop.show { opacity: 0.35 !important; }
    .btn-close { opacity: 0.45; }
    .btn-close:hover { opacity: 0.8; }

    .delete-icon-wrap {
        width: 52px; height: 52px;
        border-radius: 50%;
        background: var(--danger-dim);
        border: 1px solid rgba(220, 53, 69, 0.18);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        font-size: 1.4rem;
        color: var(--danger);
    }

    .btn-modal-cancel {
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid #dae2ec;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 500;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background var(--transition-fast), color var(--transition-fast);
    }

    .btn-modal-cancel:hover { background: var(--bg-hover); color: var(--text-primary); }

    .btn-modal-delete {
        background: var(--danger);
        color: #fff;
        border: none;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: background var(--transition-fast);
    }

    .btn-modal-delete:hover { background: #b02a37; }

    /* ── Empty state ── */
    .empty-state { text-align: center; padding: 56px 24px; color: var(--text-muted); }
    .empty-state i { font-size: 2.5rem; display: block; margin-bottom: 12px; opacity: 0.45; }
    .empty-state h5 { color: var(--text-primary); margin-bottom: 8px; font-weight: 600; }
    .empty-state p { margin: 0 0 20px; font-size: 0.9rem; }

    /* ── DataTables ── */
    .dataTables_wrapper { padding: 0 20px 20px !important; }
    .dataTables_wrapper .dataTables_length select,
    .dataTables_wrapper .dataTables_filter input {
        background: var(--bg-card) !important;
        border: 1px solid #dae2ec !important;
        color: var(--text-primary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 5px 10px !important;
    }
    .dataTables_wrapper .dataTables_length,
    .dataTables_wrapper .dataTables_filter,
    .dataTables_wrapper .dataTables_info,
    .dataTables_wrapper .dataTables_paginate {
        color: var(--text-secondary) !important;
        font-size: 0.82rem;
        padding: 14px 20px !important;
    }
    .dataTables_wrapper .dataTables_filter { text-align: right !important; }
    .dataTables_wrapper .dataTables_filter input { margin-left: 8px; }
    .dataTables_wrapper .dataTables_paginate .paginate_button {
        background: var(--bg-card) !important;
        border: 1px solid #dae2ec !important;
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        margin: 0 2px;
        padding: 4px 10px !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        background: var(--bg-hover) !important; color: var(--text-primary) !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button.current,
    .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
        background: var(--accent) !important; border-color: var(--accent) !important; color: #fff !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled { opacity: 0.4; cursor: not-allowed; }

    .text-end { text-align: right; }
    .d-inline-block { display: inline-block !important; }
</style>

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            <!-- Page Header -->
            <div class="page-header">
                <h2>Skills <span>Management</span></h2>
                <a href="{{ route('admin.skills.create') }}" class="btn-accent">
                    <i class="ti ti-plus"></i> Add Skill
                </a>
            </div>

            <!-- Table Card -->
            <div class="data-card">
                <div class="table-responsive">
                    <table class="datatable-init nowrap skills-table" role="table" aria-label="Skills list">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Talent</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Level</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($skills as $skill)
                            <tr>
                                <td>
                                    <span class="skill-name">{{ $skill->name }}</span>
                                </td>
                                <td style="color:var(--text-secondary)">{{ $skill->talent->name ?? 'N/A' }}</td>
                                <td style="color:var(--text-secondary)">{{ $skill->category->name ?? 'N/A' }}</td>
                                <td>
                                    <span class="badge-status {{ strtolower($skill->status) }}">
                                        {{ ucfirst($skill->status) }}
                                    </span>
                                </td>
                                <td><span class="badge-level">{{ ucfirst($skill->level) }}</span></td>
                                <td class="text-end">
                                    <div class="dropdown d-inline-block">
                                        <button class="btn-actions dropdown-toggle"
                                                type="button"
                                                id="actionsDropdown{{ $skill->id }}"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <i class="ti ti-dots-vertical" style="font-size:0.9rem;"></i> Actions
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="actionsDropdown{{ $skill->id }}">
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.skills.show', $skill->id) }}">
                                                    <i class="ti ti-eye" style="color:var(--accent)"></i> Quick View
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.skills.edit', $skill->id) }}">
                                                    <i class="ti ti-pencil" style="color:var(--accent)"></i> Edit
                                                </a>
                                            </li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#"
                                                   data-bs-toggle="modal"
                                                   data-bs-target="#deleteModal{{ $skill->id }}">
                                                    <i class="ti ti-trash"></i> Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @empty
                            <tr>
                                <td colspan="6">
                                    <div class="empty-state">
                                        <i class="ti ti-puzzle-off"></i>
                                        <h5>No skills yet</h5>
                                        <p>Get started by adding your first skill.</p>
                                        <a href="{{ route('admin.skills.create') }}" class="btn-accent">
                                            <i class="ti ti-plus"></i> Add First Skill
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            {{-- ════ DELETE MODALS ════ --}}
            @foreach($skills as $skill)
            <div class="modal fade" id="deleteModal{{ $skill->id }}" tabindex="-1"
                 aria-labelledby="deleteModalLabel{{ $skill->id }}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:420px;">
                    <form action="{{ route('admin.skills.destroy', $skill->id) }}"
                          method="POST" class="modal-content">
                        @csrf
                        @method('DELETE')

                        <div class="modal-header" style="border-bottom:none !important; padding-bottom:0 !important;">
                            <h5 class="modal-title" id="deleteModalLabel{{ $skill->id }}">
                                <i class="ti ti-alert-triangle" style="color:var(--danger)"></i>
                                Delete Skill
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body" style="text-align:center; padding-top:8px !important;">
                            <div class="delete-icon-wrap">
                                <i class="ti ti-trash"></i>
                            </div>
                            <h5 style="font-weight:700; margin-bottom:8px; font-family:'Sora',sans-serif; color:var(--text-primary)">
                                Delete "{{ $skill->name }}"?
                            </h5>
                            <p style="color:var(--text-secondary); font-size:0.875rem; margin:0;">
                                This action cannot be undone. All associated data may be affected.
                            </p>
                        </div>

                        <div class="modal-footer" style="justify-content:center; border-top:none !important; padding-top:0 !important;">
                            <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn-modal-delete">
                                <i class="ti ti-trash"></i> Yes, Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

        </div>
    </div>
</div>

@endsection