@extends('layouts.app')
@section('title', 'Partners')
@section('content')

<style>
    * {
        box-sizing: border-box;
    }

    .partners-page {
        background: #f8f9fb;
        min-height: 100vh;
        /* padding: 32px 28px 48px; */
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    /* ── PAGE HEADER ── */
    .page-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 28px;
    }

    .page-header-left .eyebrow {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #6c7a8d;
        margin-bottom: 4px;
    }

    .page-header-left h1 {
        font-size: 22px;
        font-weight: 700;
        color: #111928;
        margin: 0;
        line-height: 1.2;
    }

    .page-header-left .sub {
        font-size: 13px;
        color: #9aa3b0;
        margin-top: 4px;
    }

    /* ── FLASH ── */
    .flash-success {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        border-radius: 10px;
        padding: 12px 16px;
        font-size: 13px;
        margin-bottom: 20px;
    }

    .flash-success svg {
        flex-shrink: 0;
    }

    /* ── ADD BUTTON ── */
    .btn-add {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: background 0.15s, transform 0.1s;
        white-space: nowrap;
    }

    .btn-add:hover {
        background: #1d4ed8;
        transform: translateY(-1px);
    }

    .btn-add svg {
        width: 16px;
        height: 16px;
    }

    /* ── CARD ── */
    .partners-card {
        background: #fff;
        border: 1px solid #e8ecf0;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    }

    .partners-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 24px;
        border-bottom: 1px solid #f1f3f6;
        gap: 12px;
        flex-wrap: wrap;
    }

    .partners-count {
        font-size: 12px;
        font-weight: 600;
        color: #6c7a8d;
        background: #f1f3f6;
        padding: 4px 10px;
        border-radius: 20px;
    }

    .search-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #f8f9fb;
        border: 1px solid #e8ecf0;
        border-radius: 8px;
        padding: 7px 12px;
        flex: 1;
        max-width: 260px;
    }

    .search-wrap svg {
        color: #9aa3b0;
        flex-shrink: 0;
    }

    .search-wrap input {
        border: none;
        background: transparent;
        outline: none;
        font-size: 13px;
        color: #111928;
        width: 100%;
    }

    .search-wrap input::placeholder {
        color: #b0b8c4;
    }

    /* ── TABLE ── */
    .partners-table {
        width: 100%;
        border-collapse: collapse;
    }

    .partners-table thead tr {
        background: #f8f9fb;
        border-bottom: 1px solid #edf0f3;
    }

    .partners-table thead th {
        padding: 11px 20px;
        font-size: 11px;
        font-weight: 700;
        color: #9aa3b0;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        text-align: left;
        white-space: nowrap;
    }

    .partners-table tbody tr {
        border-bottom: 1px solid #f5f6f8;
        transition: background 0.12s;
    }

    .partners-table tbody tr:last-child {
        border-bottom: none;
    }

    .partners-table tbody tr:hover {
        background: #fafbfc;
    }

    .partners-table td {
        padding: 14px 20px;
        font-size: 13px;
        color: #374151;
        vertical-align: middle;
    }

    /* ── ROW ELEMENTS ── */
    .partner-row-name {
        font-weight: 600;
        color: #111928;
        font-size: 13px;
    }

    .partner-row-num {
        font-size: 12px;
        color: #b0b8c4;
        font-weight: 500;
    }

    .logo-thumb {
        width: 48px;
        height: 36px;
        object-fit: contain;
        border-radius: 6px;
        border: 1px solid #edf0f3;
        padding: 3px;
        background: #fff;
    }

    .logo-placeholder {
        width: 48px;
        height: 36px;
        background: #f1f3f6;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-placeholder svg {
        color: #c8cdd5;
    }

    .link-cell a {
        color: #2563eb;
        font-size: 12px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .link-cell a:hover {
        text-decoration: underline;
    }

    .badge-active {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #bbf7d0;
        font-size: 11px;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: 20px;
    }

    .badge-active::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #22c55e;
    }

    .badge-inactive {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: #f8f9fb;
        color: #6c7a8d;
        border: 1px solid #e8ecf0;
        font-size: 11px;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: 20px;
    }

    .badge-inactive::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #c8cdd5;
    }

    /* ── ACTION BUTTONS ── */
    .actions-cell {
        display: flex;
        gap: 6px;
        align-items: center;
    }

    .btn-action {
        height: 30px;
        padding: 0 12px;
        border-radius: 7px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid transparent;
        cursor: pointer;
        transition: background 0.12s, border-color 0.12s, transform 0.1s;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .btn-action:hover {
        transform: translateY(-1px);
    }

    .btn-action svg {
        width: 13px;
        height: 13px;
    }

    .btn-view {
        background: #eff6ff;
        color: #2563eb;
        border-color: #bfdbfe;
    }

    .btn-view:hover {
        background: #dbeafe;
    }

    .btn-edit {
        background: #fffbeb;
        color: #b45309;
        border-color: #fde68a;
    }

    .btn-edit:hover {
        background: #fef3c7;
    }

    .btn-delete {
        background: #fef2f2;
        color: #dc2626;
        border-color: #fecaca;
    }

    .btn-delete:hover {
        background: #fee2e2;
    }

    /* ── EMPTY STATE ── */
    .empty-state {
        padding: 60px 20px;
        text-align: center;
    }

    .empty-icon {
        width: 56px;
        height: 56px;
        background: #f1f3f6;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
    }

    .empty-icon svg {
        color: #b0b8c4;
    }

    .empty-state h3 {
        font-size: 15px;
        font-weight: 600;
        color: #374151;
        margin: 0 0 6px;
    }

    .empty-state p {
        font-size: 13px;
        color: #9aa3b0;
        margin: 0 0 20px;
    }

    /* ── MODALS ── */
    .modal-content {
        background: #fff !important;
        border: 1px solid #e8ecf0 !important;
        border-radius: 16px !important;
        overflow: hidden;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12) !important;
    }

    .modal-header {
        background: #fff;
        border-bottom: 1px solid #f1f3f6 !important;
        padding: 18px 24px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal-header .modal-title {
        font-size: 15px !important;
        font-weight: 700 !important;
        color: #111928 !important;
        margin: 0;
    }

    .modal-header .btn-close {
        background: #f1f3f6;
        border-radius: 8px;
        width: 30px;
        height: 30px;
        opacity: 1;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.12s;
    }

    .modal-header .btn-close:hover {
        background: #e8ecf0;
    }

    .modal-body {
        background: #fff;
        padding: 20px 24px !important;
    }

    .modal-footer {
        background: #f8f9fb;
        border-top: 1px solid #f1f3f6 !important;
        padding: 14px 24px !important;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
    }

    /* ── MODAL DETAIL ROW ── */
    .detail-row {
        display: flex;
        gap: 12px;
        padding: 11px 0;
        border-bottom: 1px solid #f5f6f8;
        font-size: 13px;
    }

    .detail-row:last-child {
        border-bottom: none;
    }

    .detail-label {
        font-weight: 600;
        color: #6c7a8d;
        min-width: 100px;
    }

    .detail-value {
        color: #374151;
    }

    /* ── FORMS ── */
    .form-group {
        margin-bottom: 16px;
    }

    .form-label {
        font-size: 12px !important;
        font-weight: 600 !important;
        color: #374151 !important;
        margin-bottom: 6px !important;
        display: block;
    }

    .form-control,
    .form-select {
        background: #f8f9fb !important;
        border: 1px solid #e8ecf0 !important;
        border-radius: 9px !important;
        color: #111928 !important;
        font-size: 13px !important;
        padding: 9px 13px !important;
        width: 100%;
        transition: border-color 0.15s, box-shadow 0.15s;
    }

    .form-control:focus,
    .form-select:focus {
        outline: none !important;
        border-color: #2563eb !important;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
        background: #fff !important;
    }

    textarea.form-control {
        min-height: 80px;
        resize: vertical;
    }

    .form-check {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 4px;
    }

    .form-check-input {
        width: 16px;
        height: 16px;
        border: 1.5px solid #d1d5db;
        border-radius: 5px;
        accent-color: #2563eb;
        cursor: pointer;
    }

    .form-check-label {
        font-size: 13px;
        color: #374151;
        cursor: pointer;
    }

    .logo-preview-wrap {
        margin-top: 8px;
    }

    .logo-preview-wrap img {
        height: 52px;
        object-fit: contain;
        border-radius: 8px;
        border: 1px solid #e8ecf0;
        padding: 4px;
        background: #fff;
    }

    /* ── MODAL FOOTER BUTTONS ── */
    .btn-modal-primary {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 9px;
        padding: 9px 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.15s;
    }

    .btn-modal-primary:hover {
        background: #1d4ed8;
    }

    .btn-modal-secondary {
        background: #fff;
        color: #374151;
        border: 1px solid #e8ecf0;
        border-radius: 9px;
        padding: 9px 20px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s;
    }

    .btn-modal-secondary:hover {
        background: #f8f9fb;
    }

    .btn-modal-danger {
        background: #fef2f2;
        color: #dc2626;
        border: 1px solid #fecaca;
        border-radius: 9px;
        padding: 9px 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.15s;
    }

    .btn-modal-danger:hover {
        background: #dc2626;
        color: #fff;
    }

    /* ── DELETE CONFIRM ── */
    .delete-confirm-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 28px 24px !important;
    }

    .delete-icon {
        width: 52px;
        height: 52px;
        background: #fef2f2;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
    }

    .delete-icon svg {
        color: #dc2626;
    }

    .delete-confirm-body h5 {
        font-size: 16px;
        font-weight: 700;
        color: #111928;
        margin: 0 0 6px;
    }

    .delete-confirm-body p {
        font-size: 13px;
        color: #6c7a8d;
        margin: 0;
    }
</style>

    <div class="partners-page">

        {{-- PAGE HEADER --}}
        <div class="page-header">
            <div class="page-header-left">
                <div class="eyebrow">Management</div>
                <h1>Partners</h1>
                <div class="sub">Manage your partner and their visibility</div>
            </div>
            <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addPartnerModal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Partner
            </button>
        </div>

        {{-- FLASH --}}
        @if(session('success'))
        <div class="flash-success">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            {{ session('success') }}
        </div>
        @endif

        {{-- MAIN CARD --}}
        <div class="partners-card">
            <div class="partners-card-header">
                <span class="partners-count">{{ $partners->count() }} partner{{ $partners->count() !== 1 ? 's' : '' }}</span>
                <div class="search-wrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input type="text" id="partnerSearch" placeholder="Search partners…">
                </div>
            </div>

            @if($partners->isEmpty())
            <div class="empty-state">
                <div class="empty-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <h3>No partners yet</h3>
                <p>Add your first partner to get started.</p>
                <button class="btn-add" data-bs-toggle="modal" data-bs-target="#addPartnerModal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Partner
                </button>
            </div>
            @else
            <table class="partners-table" id="partnersTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Partner</th>
                        <th>Logo</th>
                        <th>Website</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($partners as $key => $partner)
                    <tr>
                        <td><span class="partner-row-num">{{ str_pad($key + 1, 2, '0', STR_PAD_LEFT) }}</span></td>
                        <td><span class="partner-row-name">{{ $partner->name }}</span></td>
                        <td>
                            @if($partner->logo)
                            <img src="{{ asset('image/partners/' . $partner->logo) }}" alt="{{ $partner->name }}" class="logo-thumb">
                            @else
                            <div class="logo-placeholder">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </div>
                            @endif
                        </td>
                        <td class="link-cell">
                            @if($partner->link)
                            <a href="{{ $partner->link }}" target="_blank">
                                {{ Str::limit($partner->link, 28) }}
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                            @else
                            <span style="color:#c8cdd5;font-size:12px">—</span>
                            @endif
                        </td>
                        <td>
                            @if($partner->status)
                            <span class="badge-active">Active</span>
                            @else
                            <span class="badge-inactive">Inactive</span>
                            @endif
                        </td>
                        <td>
                            <div class="actions-cell">
                                <button class="btn-action btn-view" data-bs-toggle="modal" data-bs-target="#showPartnerModal{{ $partner->id }}">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    View
                                </button>
                                <button class="btn-action btn-edit" data-bs-toggle="modal" data-bs-target="#editPartnerModal{{ $partner->id }}">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Edit
                                </button>
                                <button class="btn-action btn-delete" data-bs-toggle="modal" data-bs-target="#deletePartnerModal{{ $partner->id }}">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @endif
        </div>

    </div>

{{-- ═══════════ MODALS ═══════════ --}}

@foreach($partners as $key => $partner)

{{-- SHOW MODAL --}}
<div class="modal fade" id="showPartnerModal{{ $partner->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Partner details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                @if($partner->logo)
                <div style="text-align:center;margin-bottom:18px">
                    <img src="{{ asset('image/partners/' . $partner->logo) }}"
                        alt="{{ $partner->name }}"
                        style="max-height:72px;object-fit:contain;border-radius:10px;border:1px solid #e8ecf0;padding:6px;background:#fff">
                </div>
                @endif
                <div class="detail-row">
                    <span class="detail-label">Name</span>
                    <span class="detail-value">{{ $partner->name }}</span>
                </div>
                @if($partner->description)
                <div class="detail-row">
                    <span class="detail-label">Description</span>
                    <span class="detail-value">{{ $partner->description }}</span>
                </div>
                @endif
                <div class="detail-row">
                    <span class="detail-label">Website</span>
                    <span class="detail-value">
                        @if($partner->link)
                        <a href="{{ $partner->link }}" target="_blank" style="color:#2563eb;text-decoration:none;font-size:13px">{{ $partner->link }}</a>
                        @else
                        <span style="color:#c8cdd5">—</span>
                        @endif
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Status</span>
                    <span class="detail-value">
                        @if($partner->status)
                        <span class="badge-active">Active</span>
                        @else
                        <span class="badge-inactive">Inactive</span>
                        @endif
                    </span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

{{-- EDIT MODAL --}}
<div class="modal fade" id="editPartnerModal{{ $partner->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form action="{{ route('admin.partners.update', $partner->id) }}" method="POST" enctype="multipart/form-data" class="modal-content">
            @csrf @method('PUT')
            <div class="modal-header">
                <h5 class="modal-title">Edit partner</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Name <span style="color:#ef4444">*</span></label>
                    <input type="text" name="name" class="form-control" value="{{ $partner->name }}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea name="description" class="form-control">{{ $partner->description }}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Logo</label>
                    @if($partner->logo)
                    <div class="logo-preview-wrap">
                        <img src="{{ asset('image/partners/' . $partner->logo) }}" alt="{{ $partner->name }}">
                    </div>
                    @endif
                    <input type="file" name="logo" class="form-control" style="margin-top:8px">
                </div>
                <div class="form-group">
                    <label class="form-label">Website link</label>
                    <input type="url" name="link" class="form-control" value="{{ $partner->link }}" placeholder="https://…">
                </div>
                <div class="form-check">
                    <input type="checkbox" name="status" class="form-check-input" id="status_edit_{{ $partner->id }}" value="1" {{ $partner->status ? 'checked' : '' }}>
                    <label class="form-check-label" for="status_edit_{{ $partner->id }}">Mark as active</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-modal-primary">Save changes</button>
            </div>
        </form>
    </div>
</div>

{{-- DELETE MODAL --}}
<div class="modal fade" id="deletePartnerModal{{ $partner->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form action="{{ route('admin.partners.destroy', $partner->id) }}" method="POST" class="modal-content">
            @csrf @method('DELETE')
            <div class="modal-header" style="border-bottom:none!important">
                <h5 class="modal-title" style="visibility:hidden">Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body delete-confirm-body">
                <div class="delete-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                </div>
                <h5>Delete partner?</h5>
                <p>You're about to remove <strong style="color:#111928">{{ $partner->name }}</strong>.<br>This action cannot be undone.</p>
            </div>
            <div class="modal-footer" style="justify-content:center;background:#fff;border-top:1px solid #f1f3f6!important">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-modal-danger">Yes, delete</button>
            </div>
        </form>
    </div>
</div>

@endforeach

{{-- ADD MODAL --}}
<div class="modal fade" id="addPartnerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form action="{{ route('admin.partners.store') }}" method="POST" enctype="multipart/form-data" class="modal-content">
            @csrf
            <div class="modal-header">
                <h5 class="modal-title">Add partner</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Name <span style="color:#ef4444">*</span></label>
                    <input type="text" name="name" class="form-control" placeholder="Partner organisation name" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea name="description" class="form-control" placeholder="Brief description (optional)"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Logo</label>
                    <input type="file" name="logo" class="form-control" accept="image/*">
                </div>
                <div class="form-group">
                    <label class="form-label">Website link</label>
                    <input type="url" name="link" class="form-control" placeholder="https://partner-site.com">
                </div>
                <div class="form-check">
                    <input type="checkbox" name="status" class="form-check-input" id="status_add" value="1" checked>
                    <label class="form-check-label" for="status_add">Mark as active</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-modal-primary">Add partner</button>
            </div>
        </form>
    </div>
</div>

<script>
    document.getElementById('partnerSearch')?.addEventListener('input', function() {
        const q = this.value.toLowerCase();
        document.querySelectorAll('#partnersTable tbody tr').forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    });
</script>

@endsection