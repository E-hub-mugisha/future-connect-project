@extends('layouts.app')
@section('title', 'Categories')

@section('content')

<style>
    /* ── CSS Variables & Theme ── */
    :root {
        --bg-deep:       #071b2e;
        --bg-card:       #0c2540;
        --bg-surface:    #0f2d4a;
        --bg-hover:      #163558;
        --accent:        #00a667;
        --accent-dim:    rgba(0, 166, 103, 0.15);
        --accent-glow:   rgba(0, 166, 103, 0.35);
        --text-primary:  #ffffff;
        --text-secondary:#94afc5;
        --text-muted:    #4d7495;
        --border:        rgba(255,255,255,0.07);
        --border-accent: rgba(0,166,103,0.3);
        --danger:        #e05c5c;
        --danger-dim:    rgba(224, 92, 92, 0.12);
        --warning:       #f59e0b;
        --warning-dim:   rgba(245, 158, 11, 0.12);
        --radius-sm:     6px;
        --radius-md:     10px;
        --radius-lg:     16px;
        --shadow-card:   0 4px 24px rgba(0,0,0,0.35);
        --shadow-glow:   0 0 20px rgba(0,166,103,0.2);
        --focus-ring:    0 0 0 3px rgba(0, 166, 103, 0.5);
        --transition-fast: 150ms ease;
        --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* ── Base & Accessibility ── */
    body, .nk-wrap, .nk-content, .container-fluid {
        background-color: var(--bg-deep) !important;
        color: var(--text-primary) !important;
    }

    *:focus-visible {
        outline: none;
        box-shadow: var(--focus-ring) !important;
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

    /* ── Primary Button ── */
    .btn-accent {
        background: var(--accent);
        color: #fff;
        border: none;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
    }

    .btn-accent:hover {
        background: #00bf76;
        box-shadow: var(--shadow-glow);
        transform: translateY(-1px);
        color: #fff;
    }

    .btn-accent:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        position: relative;
    }

    .btn-accent:disabled::after {
        content: "";
        position: absolute;
        width: 16px; height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        right: 12px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .btn-accent i { font-size: 1rem; }

    /* ── Card ── */
    .data-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        overflow: hidden;
        margin-bottom: 24px;
    }

    .data-card-inner { padding: 0; }

    /* ── Table ── */
    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .categories-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
        min-width: 720px;
    }

    .categories-table thead tr {
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-accent);
    }

    .categories-table thead th {
        padding: 14px 20px;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--accent);
        white-space: nowrap;
        text-align: left;
    }

    .categories-table tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background var(--transition-fast);
    }

    .categories-table tbody tr:last-child { border-bottom: none; }
    .categories-table tbody tr:hover { background: var(--bg-hover); }

    .categories-table tbody td {
        padding: 15px 20px;
        color: var(--text-primary);
        vertical-align: middle;
        text-align: left;
    }

    /* ── Mobile Responsive Table ── */
    @media (max-width: 991px) {
        .categories-table thead { display: none; }
        .categories-table,
        .categories-table tbody,
        .categories-table tr,
        .categories-table td {
            display: block;
            width: 100%;
        }
        .categories-table tbody tr {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            margin-bottom: 12px;
            background: var(--bg-surface);
            padding: 8px;
        }
        .categories-table tbody td {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
            text-align: right;
        }
        .categories-table tbody td:last-child { border-bottom: none; }
        .categories-table tbody td::before {
            content: attr(data-label);
            font-weight: 600;
            color: var(--accent);
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.05em;
            margin-right: auto;
            padding-right: 12px;
        }
        .cat-desc { max-width: 100%; white-space: normal; }
        .text-end { text-align: right !important; }
    }

    /* ── Name cell ── */
    .cat-name {
        font-weight: 600;
        color: var(--text-primary);
        display: block;
    }

    /* ── Description ── */
    .cat-desc {
        color: var(--text-secondary);
        max-width: 260px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
    }

    /* ── Slug ── */
    .cat-slug {
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.78rem;
        color: var(--text-muted);
        background: rgba(0,0,0,0.2);
        padding: 3px 8px;
        border-radius: 4px;
        border: 1px solid var(--border);
        display: inline-block;
    }

    /* ── Featured badge ── */
    .badge-featured {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.04em;
    }

    .badge-featured.yes {
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid var(--border-accent);
    }

    .badge-featured.no {
        background: rgba(255,255,255,0.05);
        color: var(--text-muted);
        border: 1px solid var(--border);
    }

    /* ── Icon cell ── */
    .icon-wrap {
        width: 34px;
        height: 34px;
        border-radius: var(--radius-sm);
        background: var(--accent-dim);
        border: 1px solid var(--border-accent);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        font-size: 1rem;
        transition: box-shadow var(--transition-fast), transform var(--transition-fast);
    }

    tr:hover .icon-wrap {
        box-shadow: var(--shadow-glow);
        transform: scale(1.05);
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

    .btn-actions:hover,
    .btn-actions:focus {
        background: var(--bg-hover);
        border-color: var(--accent);
        color: var(--text-primary);
    }

    .dropdown-menu {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border-accent) !important;
        border-radius: var(--radius-md) !important;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5) !important;
        min-width: 160px;
        padding: 6px !important;
        transform-origin: top right;
        animation: dropdownSlide 0.15s ease-out;
    }

    @keyframes dropdownSlide {
        from { opacity: 0; transform: scale(0.95) translateY(-8px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .dropdown-item {
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 8px 12px !important;
        font-size: 0.83rem !important;
        font-weight: 500;
        transition: background var(--transition-fast), color var(--transition-fast);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .dropdown-item:hover {
        background: var(--bg-hover) !important;
        color: var(--text-primary) !important;
    }

    .dropdown-item.text-danger { color: var(--danger) !important; }
    .dropdown-item.text-danger:hover {
        background: var(--danger-dim) !important;
        color: var(--danger) !important;
    }

    .dropdown-divider {
        border-color: var(--border) !important;
        margin: 4px 0 !important;
    }

    /* ── Modals ── */
    .modal.fade .modal-dialog {
        transform: translateY(20px);
        transition: transform var(--transition-smooth);
    }
    .modal.show .modal-dialog {
        transform: translateY(0);
    }

    .modal-content {
        background: var(--bg-card) !important;
        border: 1px solid var(--border-accent) !important;
        border-radius: var(--radius-lg) !important;
        box-shadow: 0 20px 60px rgba(0,0,0,0.7) !important;
        color: var(--text-primary) !important;
    }

    .modal-header {
        border-bottom: 1px solid var(--border) !important;
        padding: 20px 24px !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    .modal-body {
        padding: 24px !important;
    }

    .modal-footer {
        border-top: 1px solid var(--border) !important;
        padding: 16px 24px !important;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .modal-backdrop.show { opacity: 0.7 !important; }

    .btn-close {
        filter: invert(1) brightness(0.6) !important;
        opacity: 0.7;
        padding: 0.5rem;
    }

    .btn-close:hover { opacity: 1; }

    /* ── Form Elements ── */
    .form-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 7px;
        display: block;
    }

    .form-control,
    .form-select {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-primary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 10px 14px !important;
        font-size: 0.875rem !important;
        transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
        width: 100%;
    }

    .form-control:focus,
    .form-select:focus {
        border-color: var(--accent) !important;
        box-shadow: var(--focus-ring) !important;
        outline: none !important;
        background: var(--bg-hover) !important;
    }

    .form-control::placeholder { color: var(--text-muted) !important; }

    .form-select option {
        background: var(--bg-surface);
        color: var(--text-primary);
    }

    .slug-hint {
        color: var(--text-muted);
        display: block;
        margin-top: 4px;
        font-size: 0.75rem;
        min-height: 1.2em;
    }

    /* ── Checkbox ── */
    .form-check {
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .form-check-input {
        background-color: var(--bg-surface) !important;
        border-color: var(--border-accent) !important;
        width: 18px !important;
        height: 18px !important;
        cursor: pointer;
        margin-top: 0 !important;
    }

    .form-check-input:checked {
        background-color: var(--accent) !important;
        border-color: var(--accent) !important;
    }

    .form-check-label {
        color: var(--text-secondary);
        font-size: 0.875rem;
        cursor: pointer;
        margin: 0;
    }

    /* ── Validation errors ── */
    .text-danger {
        color: var(--danger) !important;
        font-size: 0.78rem;
        display: block;
        margin-top: 4px;
    }

    /* ── Modal Buttons ── */
    .btn-modal-save,
    .btn-modal-delete {
        color: #fff;
        border: none;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background var(--transition-fast), box-shadow var(--transition-fast);
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .btn-modal-save {
        background: var(--accent);
    }
    .btn-modal-save:hover {
        background: #00bf76;
        box-shadow: var(--shadow-glow);
    }

    .btn-modal-delete {
        background: var(--danger);
    }
    .btn-modal-delete:hover {
        background: #cc4a4a;
    }

    .btn-modal-cancel {
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid var(--border);
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 500;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background var(--transition-fast), color var(--transition-fast);
    }

    .btn-modal-cancel:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
    }

    /* ── Delete modal warning icon ── */
    .delete-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: var(--danger-dim);
        border: 1px solid rgba(224,92,92,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        font-size: 1.4rem;
        color: var(--danger);
        flex-shrink: 0;
    }

    /* ── Empty state ── */
    .empty-state {
        text-align: center;
        padding: 56px 24px;
        color: var(--text-muted);
    }

    .empty-state i {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 12px;
        opacity: 0.6;
    }

    .empty-state h5 {
        color: var(--text-primary);
        margin-bottom: 8px;
        font-weight: 600;
    }

    .empty-state p {
        margin: 0 0 20px;
        font-size: 0.9rem;
    }

    /* ── Toast Notifications ── */
    .toast-container {
        pointer-events: none;
    }
    .toast {
        pointer-events: auto;
        background: var(--bg-card) !important;
        border: 1px solid var(--border-accent) !important;
        border-radius: var(--radius-md) !important;
        box-shadow: var(--shadow-card) !important;
    }
    .toast-header {
        background: transparent !important;
        border-bottom: 1px solid var(--border) !important;
        color: var(--text-secondary) !important;
    }
    .toast-body {
        color: var(--text-primary) !important;
    }
    .toast .btn-close {
        filter: invert(1) brightness(0.8) !important;
    }

    /* ── Icon Preview ── */
    .icon-preview {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 8px;
    }
    .icon-preview .icon-wrap {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
    }
    .icon-preview small {
        color: var(--text-muted);
        font-size: 0.75rem;
    }

    /* ── DataTables overrides ── */
    .dataTables_wrapper {
        padding: 0 20px 20px !important;
    }
    .dataTables_wrapper .dataTables_length select,
    .dataTables_wrapper .dataTables_filter input {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border) !important;
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
    .dataTables_wrapper .dataTables_filter {
        text-align: right !important;
    }
    .dataTables_wrapper .dataTables_filter input {
        margin-left: 8px;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        margin: 0 2px;
        padding: 4px 10px !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        background: var(--bg-hover) !important;
        color: var(--text-primary) !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button.current,
    .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
        background: var(--accent) !important;
        border-color: var(--accent) !important;
        color: #fff !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* ── Utility Classes ── */
    .text-end { text-align: right; }
    .me-1 { margin-right: 4px !important; }
    .me-2 { margin-right: 8px !important; }
    .mb-3 { margin-bottom: 16px !important; }
    .mt-2 { margin-top: 8px !important; }
    .d-inline-block { display: inline-block !important; }
    .d-flex { display: flex !important; }
    .align-items-center { align-items: center !important; }
    .justify-content-end { justify-content: flex-end !important; }
</style>

@php
$icons = [
    'ti ti-star'             => 'Star',
    'ti ti-movie'            => 'Movie',
    'ti ti-music'            => 'Music',
    'ti ti-camera'           => 'Camera',
    'ti ti-briefcase'        => 'Briefcase',
    'ti ti-book'             => 'Book',
    'ti ti-heart'            => 'Heart',
    'ti ti-crown'            => 'Crown',
    'ti ti-code'             => 'Code',
    'ti ti-palette'          => 'Graphic Design',
    'fa-solid fa-bullhorn'   => 'Digital Marketing',
];
@endphp

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- Toast Notifications --}}
            @if(session('success'))
            <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:1100">
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
                    <div class="toast-header">
                        <i class="ti ti-check-circle me-2" style="color:var(--accent)"></i>
                        <strong class="me-auto" style="color:var(--text-primary)">Success</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">{{ session('success') }}</div>
                </div>
            </div>
            @endif

            @if(session('error'))
            <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:1100">
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="7000">
                    <div class="toast-header">
                        <i class="ti ti-alert-circle me-2" style="color:var(--danger)"></i>
                        <strong class="me-auto" style="color:var(--text-primary)">Error</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">{{ session('error') }}</div>
                </div>
            </div>
            @endif

            @if($errors->any())
            <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:1100">
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="8000">
                    <div class="toast-header">
                        <i class="ti ti-alert-triangle me-2" style="color:var(--warning)"></i>
                        <strong class="me-auto" style="color:var(--text-primary)">Validation Error</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        <ul class="mb-0" style="padding-left:16px">
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
            @endif

            <!-- Page Header -->
            <div class="page-header">
                <h2>Categories <span>Management</span></h2>
                <button type="button" class="btn-accent" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    <i class="ti ti-plus"></i> Add Category
                </button>
            </div>

            <!-- Table Card -->
            <div class="data-card">
                <div class="data-card-inner">
                    <div class="table-responsive">
                        <table class="nowrap categories-table" role="table" aria-label="Categories list">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Featured</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col" class="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($categories as $cat)
                                <tr role="row">
                                    <td data-label="Name"><span class="cat-name">{{ $cat->name }}</span></td>
                                    <td data-label="Description">
                                        <span class="cat-desc" title="{{ $cat->description }}">
                                            {{ \Illuminate\Support\Str::limit($cat->description, 50) }}
                                        </span>
                                    </td>
                                    <td data-label="Featured">
                                        @if($cat->featured)
                                            <span class="badge-featured yes" role="status" aria-label="Featured">
                                                <i class="ti ti-check" style="font-size:0.75rem;"></i> Yes
                                            </span>
                                        @else
                                            <span class="badge-featured no" role="status" aria-label="Not featured">No</span>
                                        @endif
                                    </td>
                                    <td data-label="Slug"><code class="cat-slug">{{ $cat->slug }}</code></td>
                                    <td data-label="Icon">
                                        <span class="icon-wrap" title="{{ $cat->image ?? 'Default icon' }}" aria-hidden="true">
                                            <i class="{{ $cat->image ?? 'ti ti-star' }}"></i>
                                        </span>
                                    </td>
                                    <td data-label="Actions" class="text-end">
                                        <div class="dropdown d-inline-block">
                                            <button class="btn-actions dropdown-toggle"
                                                    type="button"
                                                    id="actionsDropdown{{ $cat->id }}"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    aria-label="Actions for {{ $cat->name }}">
                                                <i class="ti ti-dots-vertical" style="font-size:0.9rem;"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="actionsDropdown{{ $cat->id }}">
                                                <li>
                                                    <a class="dropdown-item" href="#"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#editCategoryModal{{ $cat->id }}">
                                                        <i class="ti ti-pencil" style="color:var(--accent)"></i> Edit
                                                    </a>
                                                </li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li>
                                                    <a class="dropdown-item text-danger" href="#"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#deleteModal{{ $cat->id }}">
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
                                            <i class="ti ti-folder-off"></i>
                                            <h5>No categories yet</h5>
                                            <p>Get started by creating your first category.</p>
                                            <button class="btn-accent" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                                                <i class="ti ti-plus"></i> Add First Category
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {{-- ════ DELETE MODALS ════ --}}
            @foreach($categories as $cat)
            <div class="modal fade" id="deleteModal{{ $cat->id }}" tabindex="-1"
                 aria-labelledby="deleteModalLabel{{ $cat->id }}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:420px;">
                    <form action="{{ route('admin.categories.destroy', $cat->id) }}"
                          method="POST" class="modal-content">
                        @csrf
                        @method('DELETE')

                        <div class="modal-header" style="border-bottom:none !important; padding-bottom:0 !important;">
                            <h5 class="modal-title" id="deleteModalLabel{{ $cat->id }}">
                                <i class="ti ti-alert-triangle" style="color:var(--danger)"></i>
                                Delete Category
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body" style="text-align:center; padding-top:8px !important;">
                            <div class="delete-icon-wrap">
                                <i class="ti ti-trash"></i>
                            </div>
                            <h5 style="font-weight:700; margin-bottom:8px; font-family:'Sora',sans-serif; color:var(--text-primary)">
                                Delete "{{ $cat->name }}"?
                            </h5>
                            <p style="color:var(--text-secondary); font-size:0.875rem; margin:0;">
                                This action cannot be undone. All associated data may be affected.
                            </p>
                        </div>

                        <div class="modal-footer" style="justify-content:center; gap:10px; border-top:none !important; padding-top:0 !important;">
                            <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn-modal-delete">
                                <i class="ti ti-trash me-1"></i> Yes, Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            {{-- ════ ADD CATEGORY MODAL ════ --}}
            <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:480px;">
                    <form class="modal-content" method="POST" action="{{ route('admin.categories.store') }}">
                        @csrf

                        <div class="modal-header">
                            <h5 class="modal-title" id="addCategoryModalLabel">
                                <i class="ti ti-folder-plus" style="color:var(--accent)"></i>
                                Add Category
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label" for="addName">Name</label>
                                <input name="name" id="addName" class="form-control"
                                       placeholder="e.g. Web Development"
                                       value="{{ old('name') }}" required
                                       autocomplete="off">
                                <small class="slug-hint"></small>
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="addDescription">Description</label>
                                <input name="description" id="addDescription" class="form-control"
                                       placeholder="Short description…"
                                       value="{{ old('description') }}" required
                                       autocomplete="off">
                                @error('description')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="addIcon">Icon</label>
                                <select name="image" id="addIcon" class="form-select icon-picker" required>
                                    <option value="">— Select Icon —</option>
                                    @foreach($icons as $class => $label)
                                    <option value="{{ $class }}"
                                            {{ old('image') == $class ? 'selected' : '' }}>
                                        {{ $label }}
                                    </option>
                                    @endforeach
                                </select>
                                <div class="icon-preview" aria-hidden="true">
                                    <span class="icon-wrap"><i class="ti ti-star"></i></span>
                                    <small>Preview</small>
                                </div>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                       name="featured" value="1"
                                       id="addFeatured"
                                       {{ old('featured') ? 'checked' : '' }}>
                                <label class="form-check-label" for="addFeatured">
                                    Mark as Featured
                                </label>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn-modal-save" type="submit">
                                <i class="ti ti-check me-1"></i> Save Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {{-- ════ EDIT CATEGORY MODALS ════ --}}
            @foreach($categories as $category)
            <div class="modal fade" id="editCategoryModal{{ $category->id }}" tabindex="-1" 
                 aria-labelledby="editCategoryModalLabel{{ $category->id }}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:480px;">
                    <form class="modal-content" method="POST"
                          action="{{ route('admin.categories.update', $category->id) }}">
                        @csrf
                        @method('PUT')

                        <div class="modal-header">
                            <h5 class="modal-title" id="editCategoryModalLabel{{ $category->id }}">
                                <i class="ti ti-pencil" style="color:var(--accent)"></i>
                                Edit Category
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label" for="editName{{ $category->id }}">Name</label>
                                <input name="name" id="editName{{ $category->id }}" class="form-control"
                                       value="{{ old('name', $category->name) }}" required
                                       autocomplete="off">
                                <small class="slug-hint"></small>
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="editDescription{{ $category->id }}">Description</label>
                                <input name="description" id="editDescription{{ $category->id }}" class="form-control"
                                       value="{{ old('description', $category->description) }}" required
                                       autocomplete="off">
                                @error('description')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="editIcon{{ $category->id }}">Icon</label>
                                <select name="image" id="editIcon{{ $category->id }}" class="form-select icon-picker" required>
                                    <option value="">— Select Icon —</option>
                                    @foreach($icons as $class => $label)
                                    <option value="{{ $class }}"
                                            {{ (old('image', $category->image) == $class) ? 'selected' : '' }}>
                                        {{ $label }}
                                    </option>
                                    @endforeach
                                </select>
                                <div class="icon-preview" aria-hidden="true">
                                    <span class="icon-wrap"><i class="{{ $category->image ?? 'ti ti-star' }}"></i></span>
                                    <small>Preview</small>
                                </div>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                       name="featured" value="1"
                                       id="editFeatured{{ $category->id }}"
                                       {{ old('featured', $category->featured) ? 'checked' : '' }}>
                                <label class="form-check-label" for="editFeatured{{ $category->id }}">
                                    Mark as Featured
                                </label>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn-modal-cancel" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn-modal-save" type="submit">
                                <i class="ti ti-refresh me-1"></i> Update Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

        </div>
    </div>
</div>

{{-- JavaScript Enhancements --}}
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap toasts
    const toastElList = document.querySelectorAll('.toast');
    toastElList.forEach(toastEl => {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    });

    // Icon preview functionality
    const iconPickers = document.querySelectorAll('.icon-picker');
    iconPickers.forEach(select => {
        const preview = select.closest('.mb-3')?.querySelector('.icon-preview');
        if (!preview) return;
        
        const previewIcon = preview.querySelector('.icon-wrap i');
        
        // Set initial preview
        if (select.value) {
            previewIcon.className = select.value;
        }
        
        select.addEventListener('change', (e) => {
            previewIcon.className = e.target.value || 'ti ti-star';
        });
    });

    // Auto-slug hint generator
    const nameInputs = document.querySelectorAll('input[name="name"]');
    nameInputs.forEach(input => {
        const hint = input.closest('.mb-3')?.querySelector('.slug-hint');
        if (!hint) return;
        
        input.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            if (value.length < 2) {
                hint.textContent = '';
                return;
            }
            const slug = value
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '-')
                .replace(/^-+|-+$/g, '');
            hint.textContent = `Suggested slug: ${slug}`;
        });
    });

    // Prevent form submission on Enter in dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    // Close dropdowns when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 992) {
            document.querySelectorAll('.dropdown.show').forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (toggle && !toggle.contains(e.target) && !dropdown.contains(e.target)) {
                    bootstrap.Dropdown.getInstance(toggle)?.hide();
                }
            });
        }
    });
});
</script>

@endsection