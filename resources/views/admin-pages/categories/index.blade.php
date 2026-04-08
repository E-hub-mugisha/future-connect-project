@extends('layouts.app')
@section('title', 'Categories')

@section('content')

<style>
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
        --radius-sm:     6px;
        --radius-md:     10px;
        --radius-lg:     16px;
        --shadow-card:   0 4px 24px rgba(0,0,0,0.35);
        --shadow-glow:   0 0 20px rgba(0,166,103,0.2);
    }

    /* ── Base ── */
    body,
    .nk-wrap,
    .nk-content,
    .container-fluid {
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
    }

    .page-header h2 {
        font-family: 'Sora', 'DM Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        margin: 0;
    }

    .page-header h2 span {
        color: var(--accent);
    }

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
        transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
    }

    .btn-accent:hover {
        background: #00bf76;
        box-shadow: var(--shadow-glow);
        transform: translateY(-1px);
        color: #fff;
    }

    .btn-accent i { font-size: 1rem; }

    /* ── Card ── */
    .data-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        overflow: hidden;
    }

    .data-card-inner { padding: 0; }

    /* ── Table ── */
    .categories-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
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
    }

    .categories-table tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background 0.18s;
    }

    .categories-table tbody tr:last-child { border-bottom: none; }

    .categories-table tbody tr:hover { background: var(--bg-hover); }

    .categories-table tbody td {
        padding: 15px 20px;
        color: var(--text-primary);
        vertical-align: middle;
    }

    /* ── Name cell ── */
    .cat-name {
        font-weight: 600;
        color: var(--text-primary);
    }

    /* ── Description ── */
    .cat-desc {
        color: var(--text-secondary);
        max-width: 260px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        transition: box-shadow 0.2s;
    }

    tr:hover .icon-wrap { box-shadow: var(--shadow-glow); }

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
        transition: background 0.18s, color 0.18s, border-color 0.18s;
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
        min-width: 140px;
        padding: 6px !important;
    }

    .dropdown-item {
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 8px 12px !important;
        font-size: 0.83rem !important;
        font-weight: 500;
        transition: background 0.15s, color 0.15s;
    }

    .dropdown-item:hover { background: var(--bg-hover) !important; color: var(--text-primary) !important; }
    .dropdown-item.text-danger { color: var(--danger) !important; }
    .dropdown-item.text-danger:hover { background: var(--danger-dim) !important; color: var(--danger) !important; }

    /* ── Modals ── */
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
    }

    .modal-title {
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: var(--text-primary) !important;
    }

    .modal-body {
        padding: 24px !important;
    }

    .modal-footer {
        border-top: 1px solid var(--border) !important;
        padding: 16px 24px !important;
    }

    .modal-backdrop.show { opacity: 0.7 !important; }

    .btn-close {
        filter: invert(1) brightness(0.6) !important;
        opacity: 0.7;
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
    }

    .form-control,
    .form-select {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-primary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 10px 14px !important;
        font-size: 0.875rem !important;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .form-control:focus,
    .form-select:focus {
        border-color: var(--accent) !important;
        box-shadow: 0 0 0 3px var(--accent-dim) !important;
        outline: none !important;
        background: var(--bg-hover) !important;
    }

    .form-control::placeholder { color: var(--text-muted) !important; }

    .form-select option {
        background: var(--bg-surface);
        color: var(--text-primary);
    }

    /* ── Checkbox ── */
    .form-check { margin-top: 4px; }

    .form-check-input {
        background-color: var(--bg-surface) !important;
        border-color: var(--border-accent) !important;
        width: 18px !important;
        height: 18px !important;
        cursor: pointer;
    }

    .form-check-input:checked {
        background-color: var(--accent) !important;
        border-color: var(--accent) !important;
    }

    .form-check-label {
        color: var(--text-secondary);
        font-size: 0.875rem;
        padding-left: 4px;
        cursor: pointer;
    }

    /* ── Validation errors ── */
    .text-danger { color: var(--danger) !important; font-size: 0.78rem; }

    /* ── Modal Buttons ── */
    .btn-modal-save {
        background: var(--accent);
        color: #fff;
        border: none;
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background 0.2s, box-shadow 0.2s;
    }

    .btn-modal-save:hover { background: #00bf76; box-shadow: var(--shadow-glow); }

    .btn-modal-cancel {
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid var(--border);
        padding: 9px 22px;
        border-radius: var(--radius-sm);
        font-weight: 500;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
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
        transition: background 0.2s;
    }

    .btn-modal-delete:hover { background: #cc4a4a; }

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
    }

    /* ── Empty state ── */
    .empty-state {
        text-align: center;
        padding: 56px 24px;
        color: var(--text-muted);
    }

    .empty-state i { font-size: 2.5rem; display: block; margin-bottom: 12px; }
    .empty-state p { margin: 0; font-size: 0.9rem; }

    /* ── DataTables overrides ── */
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

    .dataTables_wrapper .dataTables_paginate .paginate_button {
        background: var(--bg-surface) !important;
        border: 1px solid var(--border) !important;
        color: var(--text-secondary) !important;
        border-radius: var(--radius-sm) !important;
        margin: 0 2px;
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
                    <table class="nowrap categories-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Featured</th>
                                <th>Slug</th>
                                <th>Icon</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($categories as $cat)
                            <tr>
                                <td><span class="cat-name">{{ $cat->name }}</span></td>
                                <td><span class="cat-desc" title="{{ $cat->description }}">{{ $cat->description }}</span></td>
                                <td>
                                    @if($cat->featured)
                                        <span class="badge-featured yes">
                                            <i class="ti ti-check" style="font-size:0.75rem;"></i> Yes
                                        </span>
                                    @else
                                        <span class="badge-featured no">No</span>
                                    @endif
                                </td>
                                <td><code class="cat-slug">{{ $cat->slug }}</code></td>
                                <td>
                                    <span class="icon-wrap">
                                        <i class="{{ $cat->image ?? 'ti ti-star' }}"></i>
                                    </span>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn-actions dropdown-toggle"
                                                type="button"
                                                id="actionsDropdown{{ $cat->id }}"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <i class="ti ti-dots-vertical" style="font-size:0.9rem;"></i> Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $cat->id }}">
                                            <li>
                                                <a class="dropdown-item" href="#"
                                                   data-bs-toggle="modal"
                                                   data-bs-target="#editCategoryModal{{ $cat->id }}">
                                                    <i class="ti ti-pencil me-2" style="color:var(--accent)"></i> Edit
                                                </a>
                                            </li>
                                            <li><hr class="dropdown-divider" style="border-color:var(--border);margin:4px 0;"></li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#"
                                                   data-bs-toggle="modal"
                                                   data-bs-target="#deleteModal{{ $cat->id }}">
                                                    <i class="ti ti-trash me-2"></i> Delete
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
                                        <i class="ti ti-category"></i>
                                        <p>No categories found. Add your first one.</p>
                                    </div>
                                </td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>
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
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body" style="text-align:center; padding-top:8px !important;">
                            <div class="delete-icon-wrap">
                                <i class="ti ti-trash"></i>
                            </div>
                            <h5 style="font-weight:700; margin-bottom:8px; font-family:'Sora',sans-serif;">Delete Category</h5>
                            <p style="color:var(--text-secondary); font-size:0.875rem; margin:0;">
                                Are you sure you want to delete
                                <strong style="color:var(--text-primary);">{{ $cat->name }}</strong>?
                                This action cannot be undone.
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
            <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:480px;">
                    <form class="modal-content" method="POST" action="{{ route('admin.categories.store') }}">
                        @csrf

                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="ti ti-folder-plus me-2" style="color:var(--accent)"></i>
                                Add Category
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input name="name" class="form-control"
                                       placeholder="e.g. Web Development"
                                       value="{{ old('name') }}" required>
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input name="description" class="form-control"
                                       placeholder="Short description…"
                                       value="{{ old('description') }}" required>
                                @error('description')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Icon</label>
                                <select name="image" class="form-select" required>
                                    <option value="">— Select Icon —</option>
                                    @foreach($icons as $class => $label)
                                    <option value="{{ $class }}"
                                            {{ old('image') == $class ? 'selected' : '' }}>
                                        {{ $label }}
                                    </option>
                                    @endforeach
                                </select>
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
            <div class="modal fade" id="editCategoryModal{{ $category->id }}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width:480px;">
                    <form class="modal-content" method="POST"
                          action="{{ route('admin.categories.update', $category->id) }}">
                        @csrf
                        @method('PUT')

                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="ti ti-pencil me-2" style="color:var(--accent)"></i>
                                Edit Category
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input name="name" class="form-control"
                                       value="{{ old('name', $category->name) }}" required>
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <input name="description" class="form-control"
                                       value="{{ old('description', $category->description) }}" required>
                                @error('description')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Icon</label>
                                <select name="image" class="form-select icon-picker" required>
                                    <option value="">— Select Icon —</option>
                                    @foreach($icons as $class => $label)
                                    <option value="{{ $class }}"
                                            {{ (old('image', $category->image) == $class) ? 'selected' : '' }}>
                                        {{ $label }}
                                    </option>
                                    @endforeach
                                </select>
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
@endsection