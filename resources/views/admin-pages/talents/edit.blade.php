@extends('layouts.app')
@section('title', 'Edit Skill — ' . $talent->name)
@section('content')
<style>
    :root {
        --bg-base: #f5f6f8;
        --bg-surface: #ffffff;
        --bg-muted: #f0f2f5;
        --bg-input: #f8f9fb;
        --border: #e2e6ec;
        --border-focus: #3b6ef5;
        --text-label: #6b7280;
        --text-body: #1f2937;
        --text-head: #111827;
        --text-placeholder: #9ca3af;
        --accent: #3b6ef5;
        --accent-light: #eef2ff;
        --accent-hover: #2952d9;
        --danger: #dc2626;
        --danger-light: #fef2f2;
        --warning: #d97706;
        --warning-light: #fffbeb;
        --gold: #b45309;
        --gold-light: #fef3c7;
        --success: #059669;
        --radius: 8px;
        --radius-lg: 12px;
        --shadow-sm: 0 1px 3px rgba(0, 0, 0, .06), 0 1px 2px rgba(0, 0, 0, .04);
        --shadow-md: 0 4px 12px rgba(0, 0, 0, .08), 0 2px 4px rgba(0, 0, 0, .04);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--bg-base);
        color: var(--text-body);
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        min-height: 100vh;
    }

    /* ── Page shell ── */
    .page-shell {
        max-width: 1080px;
        margin: 0 auto;
        padding: 32px 24px 56px;
    }

    /* ── Top bar ── */
    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        gap: 12px;
        flex-wrap: wrap;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12.5px;
        color: var(--text-label);
    }

    .breadcrumb a {
        color: var(--accent);
        text-decoration: none;
        font-weight: 500;
    }

    .breadcrumb a:hover {
        text-decoration: underline;
    }

    .breadcrumb .sep {
        color: #cbd5e1;
        font-size: 11px;
    }

    .breadcrumb .current {
        color: var(--text-body);
        font-weight: 500;
    }

    .header-btns {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .btn-icon {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 7px 14px;
        box-shadow: var(--shadow-sm);
        transition: border-color .15s, color .15s, box-shadow .15s;
    }

    .btn-icon.view {
        color: var(--accent);
    }

    .btn-icon.view:hover {
        border-color: var(--accent);
        box-shadow: var(--shadow-md);
    }

    .btn-icon.back {
        color: var(--text-label);
    }

    .btn-icon.back:hover {
        border-color: #c4cdd8;
        color: var(--text-body);
        box-shadow: var(--shadow-md);
    }

    /* ── Page heading ── */
    .page-heading {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: 20px 24px;
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 18px;
        flex-wrap: wrap;
    }

    .talent-avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--border);
        flex-shrink: 0;
    }

    .talent-avatar-placeholder {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--accent-light);
        border: 2px solid var(--border);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        font-size: 20px;
        font-weight: 700;
    }

    .heading-text {
        flex: 1;
    }

    .heading-text .eyebrow {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: var(--warning);
        margin-bottom: 3px;
    }

    .heading-text h1 {
        font-size: 20px;
        font-weight: 700;
        color: var(--text-head);
        letter-spacing: -.3px;
        line-height: 1.2;
    }

    .heading-text .meta {
        font-size: 12px;
        color: var(--text-label);
        margin-top: 3px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .heading-text .meta .dot {
        color: var(--border);
    }

    .status-chip {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 11.5px;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: 20px;
    }

    .status-chip.active {
        background: #dcfce7;
        color: #166534;
    }

    .status-chip.inactive {
        background: #f3f4f6;
        color: #6b7280;
    }

    .status-chip.pending {
        background: var(--warning-light);
        color: var(--warning);
    }

    .status-chip .dot-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }

    /* ── Edit notice ── */
    .edit-notice {
        background: var(--warning-light);
        border: 1px solid #fde68a;
        border-left: 3px solid var(--warning);
        border-radius: var(--radius);
        padding: 11px 16px;
        font-size: 12.5px;
        color: var(--warning);
        display: flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 18px;
        font-weight: 500;
    }

    .edit-notice svg {
        flex-shrink: 0;
    }

    /* ── Error banner ── */
    .error-banner {
        background: var(--danger-light);
        border: 1px solid #fecaca;
        border-left: 3px solid var(--danger);
        border-radius: var(--radius);
        padding: 12px 16px;
        font-size: 13px;
        color: var(--danger);
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
        font-weight: 500;
    }

    /* ── Layout ── */
    .form-layout {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 20px;
        align-items: start;
    }

    @media (max-width: 840px) {
        .form-layout {
            grid-template-columns: 1fr;
        }
    }

    /* ── Cards ── */
    .card {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        margin-bottom: 18px;
    }

    .card:last-child {
        margin-bottom: 0;
    }

    .card-head {
        padding: 14px 20px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 10px;
        background: #fcfcfd;
    }

    .card-head-icon {
        width: 30px;
        height: 30px;
        background: var(--accent-light);
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        flex-shrink: 0;
    }

    .card-head-icon.gold {
        background: var(--gold-light);
        color: var(--gold);
    }

    .card-head-icon svg {
        width: 15px;
        height: 15px;
    }

    .card-head h2 {
        font-size: 13px;
        font-weight: 600;
        color: var(--text-head);
    }

    .card-body {
        padding: 20px;
    }

    /* ── Form fields ── */
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 14px;
    }

    .row-1 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
        margin-bottom: 14px;
    }

    .row-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 14px;
        margin-bottom: 14px;
    }

    .row:last-child,
    .row-1:last-child,
    .row-3:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 580px) {

        .row,
        .row-3 {
            grid-template-columns: 1fr;
        }
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .field label {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-label);
        letter-spacing: .01em;
    }

    .field label .req {
        color: var(--danger);
        margin-left: 2px;
    }

    .field input,
    .field select,
    .field textarea {
        background: var(--bg-input);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        color: var(--text-body);
        font-family: inherit;
        font-size: 13.5px;
        line-height: 1.4;
        outline: none;
        padding: 9px 12px;
        transition: border-color .15s, box-shadow .15s, background .15s;
        width: 100%;
    }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
        background: #fff;
        border-color: var(--border-focus);
        box-shadow: 0 0 0 3px rgba(59, 110, 245, .12);
    }

    .field input::placeholder,
    .field textarea::placeholder {
        color: var(--text-placeholder);
    }

    .field select {
        cursor: pointer;
    }

    .field textarea {
        resize: vertical;
        min-height: 100px;
    }

    .field .err-msg {
        font-size: 11.5px;
        color: var(--danger);
        font-weight: 500;
    }

    .field input.err,
    .field select.err,
    .field textarea.err {
        border-color: var(--danger);
        box-shadow: 0 0 0 3px rgba(220, 38, 38, .1);
    }

    /* ── Current image block ── */
    .current-img {
        display: flex;
        align-items: center;
        gap: 14px;
        background: var(--bg-muted);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 12px 14px;
        margin-bottom: 14px;
    }

    .current-img img {
        width: 52px;
        height: 52px;
        border-radius: var(--radius);
        object-fit: cover;
        border: 1px solid var(--border);
        flex-shrink: 0;
    }

    .current-img .img-info {}

    .current-img .img-label {
        font-size: 10.5px;
        font-weight: 600;
        color: var(--text-placeholder);
        text-transform: uppercase;
        letter-spacing: .07em;
        margin-bottom: 2px;
    }

    .current-img .img-name {
        font-size: 12.5px;
        color: var(--text-body);
        word-break: break-all;
        font-weight: 500;
    }

    /* ── Upload zone ── */
    .upload-zone {
        border: 2px dashed var(--border);
        border-radius: var(--radius);
        padding: 22px 16px;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: border-color .2s, background .2s;
    }

    .upload-zone:hover {
        border-color: var(--accent);
        background: var(--accent-light);
    }

    .upload-zone input[type="file"] {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .upload-icon {
        width: 38px;
        height: 38px;
        background: var(--bg-muted);
        border: 1px solid var(--border);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--text-label);
        margin-bottom: 8px;
    }

    .upload-zone p {
        font-size: 13px;
        color: var(--text-label);
        font-weight: 500;
    }

    .upload-zone small {
        font-size: 11.5px;
        color: var(--text-placeholder);
        display: block;
        margin-top: 3px;
    }

    #imagePreview {
        width: 100%;
        border-radius: var(--radius);
        margin-top: 10px;
        display: none;
        max-height: 180px;
        object-fit: cover;
        border: 1px solid var(--border);
    }

    /* ── Toggles ── */
    .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 13px 0;
        border-bottom: 1px solid var(--border);
    }

    .toggle-row:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .toggle-label strong {
        font-size: 13px;
        font-weight: 500;
        color: var(--text-body);
    }

    .toggle-label small {
        display: block;
        font-size: 11.5px;
        color: var(--text-label);
        margin-top: 2px;
    }

    .switch {
        position: relative;
        width: 40px;
        height: 22px;
        flex-shrink: 0;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-track {
        position: absolute;
        inset: 0;
        background: #d1d5db;
        border-radius: 22px;
        cursor: pointer;
        transition: background .2s;
    }

    .switch-track::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        left: 3px;
        top: 3px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
        transition: transform .2s;
    }

    .switch input:checked+.switch-track {
        background: var(--accent);
    }

    .switch input:checked+.switch-track::before {
        transform: translateX(18px);
    }

    /* ── Stats grid ── */
    .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .stat-tile {
        background: var(--bg-muted);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 14px;
        text-align: center;
    }

    .stat-tile .val {
        font-size: 24px;
        font-weight: 800;
        color: var(--text-head);
        line-height: 1;
    }

    .stat-tile .lbl {
        font-size: 11px;
        font-weight: 600;
        color: var(--text-label);
        text-transform: uppercase;
        letter-spacing: .07em;
        margin-top: 5px;
    }

    /* ── Section note ── */
    .section-note {
        font-size: 11.5px;
        color: var(--text-placeholder);
        padding: 10px 20px;
        border-top: 1px solid var(--border);
        background: #fafafa;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .section-note svg {
        flex-shrink: 0;
    }

    /* ── Submit bar ── */
    .submit-bar {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: 16px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .submit-bar .timestamps {
        font-size: 12px;
        color: var(--text-placeholder);
        line-height: 1.7;
    }

    .submit-bar .timestamps strong {
        color: var(--text-label);
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .btn-primary {
        background: var(--accent);
        color: #fff;
        border: none;
        border-radius: var(--radius);
        padding: 10px 24px;
        font-size: 13.5px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        transition: background .15s, box-shadow .15s, transform .1s;
        display: inline-flex;
        align-items: center;
        gap: 7px;
    }

    .btn-primary:hover {
        background: var(--accent-hover);
        box-shadow: 0 4px 14px rgba(59, 110, 245, .35);
        transform: translateY(-1px);
    }

    .btn-primary:active {
        transform: none;
    }

    .btn-ghost {
        background: transparent;
        color: var(--text-label);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 10px 20px;
        font-size: 13.5px;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: border-color .15s, color .15s;
    }

    .btn-ghost:hover {
        border-color: #c4cdd8;
        color: var(--text-body);
    }
</style>

<div class="page-shell">

    {{-- Top bar --}}
    <div class="top-bar">
        <nav class="breadcrumb">
            <a href="{{ route('admin.talents.index') }}">Skills</a>
            <span class="sep">›</span>
            <a href="{{ route('admin.talents.show', $talent) }}">{{ $talent->name }}</a>
            <span class="sep">›</span>
            <span class="current">Edit</span>
        </nav>
        <div class="header-btns">
            <a href="{{ route('admin.talents.show', $talent) }}" class="btn-icon view">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View profile
            </a>
            <a href="{{ route('admin.talents.index') }}" class="btn-icon back">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
            </a>
        </div>
    </div>

    {{-- Page heading card --}}
    <div class="page-heading">
        @if($talent->image)
        <img src="{{ asset($talent->image) }}" alt="{{ $talent->name }}" class="talent-avatar">
        @else
        <div class="talent-avatar-placeholder">{{ strtoupper(substr($talent->name, 0, 1)) }}</div>
        @endif
        <div class="heading-text">
            <div class="eyebrow">Editing record</div>
            <h1>{{ $talent->name }}</h1>
            <div class="meta">
                <span>ID #{{ $talent->id }}</span>
                <span class="dot">·</span>
                <span>Created {{ $talent->created_at->format('d M Y') }}</span>
                <span class="dot">·</span>
                <span class="status-chip {{ $talent->status }}">
                    <span class="dot-indicator"></span>
                    {{ ucfirst($talent->status) }}
                </span>
            </div>
        </div>
    </div>

    {{-- Edit notice --}}
    <div class="edit-notice">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        Changes won't be applied until you click <strong>&nbsp;"Update skill"</strong>.
    </div>

    {{-- Validation errors --}}
    @if($errors->any())
    <div class="error-banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
        {{ $errors->count() }} error{{ $errors->count() > 1 ? 's' : '' }} need your attention.
    </div>
    @endif

    <form method="POST" action="{{ route('admin.talents.update', $talent) }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="form-layout">

            {{-- LEFT --}}
            <div>

                {{-- Basic Info --}}
                <div class="card">
                    <div class="card-head">
                        <div class="card-head-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <h2>Basic Information</h2>
                    </div>
                    <div class="card-body">
                        <div class="row-1">
                            <div class="field">
                                <label>Full Name <span class="req">*</span></label>
                                <input type="text" name="name" value="{{ old('name', $talent->name) }}" placeholder="e.g. Amara Nkosi"
                                    class="{{ $errors->has('name') ? 'err' : '' }}">
                                @error('name') <span class="err-msg">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="field">
                                <label>Email Address</label>
                                <input type="email" name="email" value="{{ old('email', $talent->email) }}" placeholder="email@example.com"
                                    class="{{ $errors->has('email') ? 'err' : '' }}">
                                @error('email') <span class="err-msg">{{ $message }}</span> @enderror
                            </div>
                            <div class="field">
                                <label>Phone Number</label>
                                <input type="text" name="phone" value="{{ old('phone', $talent->phone) }}" placeholder="+250 7XX XXX XXX">
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="field">
                                <label>Address / Location</label>
                                <input type="text" name="address" value="{{ old('address', $talent->address) }}" placeholder="City, Country">
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Profile Details --}}
                <div class="card">
                    <div class="card-head">
                        <div class="card-head-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                            </svg>
                        </div>
                        <h2>Profile Details</h2>
                    </div>
                    <div class="card-body">
                        <div class="row-3">
                            <div class="field">
                                <label>Category <span class="req">*</span></label>
                                <select name="category_id" class="{{ $errors->has('category_id') ? 'err' : '' }}">
                                    <option value="">Select…</option>
                                    @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}"
                                        {{ old('category_id', $talent->category_id) == $cat->id ? 'selected' : '' }}>
                                        {{ $cat->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('category_id') <span class="err-msg">{{ $message }}</span> @enderror
                            </div>
                            <div class="field">
                                <label>Level</label>
                                <select name="level">
                                    <option value="">Select…</option>
                                    @foreach(['beginner','intermediate','advanced','expert'] as $lv)
                                    <option value="{{ $lv }}"
                                        {{ old('level', $talent->level) == $lv ? 'selected' : '' }}>
                                        {{ ucfirst($lv) }}
                                    </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="field">
                                <label>Language</label>
                                <input type="text" name="language" value="{{ old('language', $talent->language) }}" placeholder="English, French…">
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="field">
                                <label>Bio / Description</label>
                                <textarea name="description">{{ old('description', $talent->description) }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {{-- RIGHT --}}
            <div>

                {{-- Image --}}
                <div class="card">
                    <div class="card-head">
                        <div class="card-head-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <h2>Profile Photo</h2>
                    </div>
                    <div class="card-body">
                        @if($talent->image)
                        <div class="current-img">
                            <img src="{{ asset($talent->image) }}" alt="{{ $talent->name }}">
                            <div class="img-info">
                                <div class="img-label">Current photo</div>
                                <div class="img-name">{{ basename($talent->image) }}</div>
                            </div>
                        </div>
                        @endif
                        <div class="upload-zone">
                            <input type="file" name="image" accept="image/*" onchange="previewImage(this)">
                            <div class="upload-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                            <p>{{ $talent->image ? 'Replace photo' : 'Upload photo' }}</p>
                            <small>PNG · JPG · WEBP — max 2 MB</small>
                        </div>
                        <img id="imagePreview" src="#" alt="New preview">
                    </div>
                </div>

                {{-- Settings --}}
                <div class="card">
                    <div class="card-head">
                        <div class="card-head-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h2>Settings</h2>
                    </div>
                    <div class="card-body">
                        <div class="row-1" style="margin-bottom: 16px;">
                            <div class="field">
                                <label>Status</label>
                                <select name="status">
                                    <option value="active" {{ old('status', $talent->status) == 'active'   ? 'selected' : '' }}>Active</option>
                                    <option value="inactive" {{ old('status', $talent->status) == 'inactive' ? 'selected' : '' }}>Inactive</option>
                                    <option value="pending" {{ old('status', $talent->status) == 'pending'  ? 'selected' : '' }}>Pending review</option>
                                </select>
                            </div>
                        </div>
                        <div class="toggle-row">
                            <div class="toggle-label">
                                <strong>Featured</strong>
                                <small>Show on homepage &amp; top of listings</small>
                            </div>
                            <label class="switch">
                                <input type="checkbox" name="featured" value="1"
                                    {{ old('featured', $talent->featured) ? 'checked' : '' }}>
                                <span class="switch-track"></span>
                            </label>
                        </div>
                        <div class="toggle-row">
                            <div class="toggle-label">
                                <strong>Matched</strong>
                                <small>Successfully placed</small>
                            </div>
                            <label class="switch">
                                <input type="checkbox" name="matched" value="1"
                                    {{ old('matched', $talent->matched) ? 'checked' : '' }}>
                                <span class="switch-track"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {{-- Activity overview --}}
                <div class="card">
                    <div class="card-head">
                        <div class="card-head-icon gold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                        </div>
                        <h2>Activity Overview</h2>
                    </div>
                    <div class="card-body">
                        <div class="stats-grid">
                            <div class="stat-tile">
                                <div class="val">{{ $talent->skills->count() }}</div>
                                <div class="lbl">Skills</div>
                            </div>
                            <div class="stat-tile">
                                <div class="val">{{ $talent->stories->count() }}</div>
                                <div class="lbl">Stories</div>
                            </div>
                            <div class="stat-tile">
                                <div class="val">{{ $talent->feedback->count() }}</div>
                                <div class="lbl">Feedback</div>
                            </div>
                            <div class="stat-tile">
                                <div class="val">{{ $talent->connections->count() }}</div>
                                <div class="lbl">Connections</div>
                            </div>
                        </div>
                    </div>
                    <div class="section-note">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        Read-only — managed from within each section.
                    </div>
                </div>

            </div>
        </div>

        {{-- Submit bar --}}
        <div class="submit-bar">
            <div class="timestamps">
                Last updated: <strong>{{ $talent->updated_at->diffForHumans() }}</strong><br>
                Created: <strong>{{ $talent->created_at->format('d M Y, H:i') }}</strong>
            </div>
            <div class="actions">
                <a href="{{ route('admin.talents.index') }}" class="btn-ghost">Cancel</a>
                <button type="submit" class="btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Update skill
                </button>
            </div>
        </div>

    </form>
</div>

<script>
    function previewImage(input) {
        const preview = document.getElementById('imagePreview');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
@endsection