@extends('layouts.app')

@push('styles')
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
    :root {
        --growth:       #0D5C3A;
        --growth-light: #1A7A4E;
        --growth-pale:  #E8F5EE;
        --opp:          #E8630A;
        --opp-light:    #FF7A20;
        --opp-pale:     #FEF0E6;
        --gold:         #F5C842;
        --cream:        #FAF7F2;
        --ink:          #1A1A1A;
        --muted:        #6B7280;
        --border:       #E5DDD0;
        --danger:       #DC2626;
        --danger-pale:  #FEF2F2;
    }
    body { background: var(--cream); font-family: 'Outfit', sans-serif; }

    /* ─── Header ─── */
    .form-header {
        background:var(--ink); padding:2.5rem 2rem;
        position:relative; overflow:hidden;
    }
    .form-header::before {
        content:''; position:absolute; top:-80px; right:-80px;
        width:300px; height:300px; border-radius:50%;
        background:rgba(13,92,58,.25);
    }
    .form-header::after {
        content:''; position:absolute; bottom:-60px; left:15%;
        width:180px; height:180px; border-radius:50%;
        background:rgba(232,99,10,.15);
    }
    .header-inner { max-width:960px; margin:0 auto; position:relative; z-index:1; display:flex; align-items:flex-start; gap:1.5rem; }

    /* Avatar beside title */
    .header-avatar {
        width:72px; height:72px; border-radius:12px;
        object-fit:cover; border:3px solid rgba(255,255,255,.15);
        flex-shrink:0;
    }
    .avatar-placeholder-sm {
        width:72px; height:72px; border-radius:12px;
        background:rgba(255,255,255,.08); border:3px solid rgba(255,255,255,.15);
        display:flex; align-items:center; justify-content:center;
        font-size:2rem; flex-shrink:0;
    }
    .header-text { flex:1; }
    .breadcrumb {
        display:flex; align-items:center; gap:.4rem;
        font-size:.78rem; color:rgba(255,255,255,.5);
        margin-bottom:.6rem;
    }
    .breadcrumb a { color:rgba(255,255,255,.5); text-decoration:none; }
    .breadcrumb a:hover { color:#fff; }
    .edit-badge {
        display:inline-block;
        background:rgba(232,99,10,.2); border:1px solid rgba(232,99,10,.4);
        color:var(--opp-light); font-size:.7rem; font-weight:700;
        letter-spacing:.1em; text-transform:uppercase;
        padding:.2rem .65rem; border-radius:100px; margin-bottom:.5rem;
    }
    .form-title {
        font-family:'Playfair Display',serif;
        font-size:1.8rem; font-weight:900; color:#fff; margin:0 0 .25rem;
    }
    .form-subtitle { color:rgba(255,255,255,.5); font-size:.85rem; }
    .header-meta { display:flex; gap:.75rem; flex-wrap:wrap; margin-top:.85rem; }
    .meta-tag {
        font-size:.75rem; font-weight:600; padding:.2rem .65rem;
        border-radius:100px;
        background:rgba(255,255,255,.08); color:rgba(255,255,255,.7);
        border:1px solid rgba(255,255,255,.1);
    }

    /* ─── Tabs ─── */
    .tabs-wrap { max-width:960px; margin:0 auto; padding:0 2rem; }
    .tabs {
        display:flex; gap:0;
        border-bottom:2px solid var(--border);
        margin-top:0; background:#fff;
        border-radius:0; overflow-x:auto;
    }
    .tab-btn {
        padding:.75rem 1.25rem; border:none; background:transparent; cursor:pointer;
        font-family:'Outfit',sans-serif; font-size:.85rem; font-weight:600;
        color:var(--muted); border-bottom:2px solid transparent; margin-bottom:-2px;
        display:inline-flex; align-items:center; gap:.4rem; white-space:nowrap;
        transition:color .2s;
    }
    .tab-btn.active { color:var(--growth); border-bottom-color:var(--growth); }
    .tab-btn:hover:not(.active) { color:var(--ink); }

    /* ─── Form Layout ─── */
    .form-wrap { max-width:960px; margin:1.5rem auto 3rem; padding:0 2rem; }
    .tab-panel { display:none; }
    .tab-panel.active { display:block; }

    .form-card {
        background:#fff; border:1px solid var(--border); border-radius:16px;
        overflow:hidden; box-shadow:0 2px 16px rgba(13,92,58,.06);
    }
    .form-section { padding:1.75rem 2rem; border-bottom:1px solid var(--border); }
    .form-section:last-of-type { border-bottom:none; }
    .section-head { display:flex; align-items:center; gap:.65rem; margin-bottom:1.25rem; }
    .section-dot { width:10px; height:10px; border-radius:50%; background:var(--opp); flex-shrink:0; }
    .section-heading { font-family:'Playfair Display',serif; font-size:1.1rem; font-weight:700; color:var(--ink); }

    /* ─── Fields ─── */
    .fields-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .field-full { grid-column:1 / -1; }
    @media(max-width:600px){ .fields-grid { grid-template-columns:1fr; } .field-full { grid-column:auto; } }

    .field-group { display:flex; flex-direction:column; gap:.4rem; }
    .field-label { font-size:.75rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--ink); }
    .field-label .req { color:var(--opp); margin-left:.15em; }
    .field-hint { font-size:.75rem; color:var(--muted); }
    .field-control {
        border:1.5px solid var(--border); border-radius:9px;
        padding:.65rem .9rem; font-family:'Outfit',sans-serif;
        font-size:.9rem; color:var(--ink); background:var(--cream);
        outline:none; transition:border-color .2s,background .2s;
        width:100%; box-sizing:border-box;
        appearance:none; -webkit-appearance:none;
    }
    .field-control:focus { border-color:var(--growth); background:#fff; box-shadow:0 0 0 3px rgba(13,92,58,.08); }
    .field-control.is-error { border-color:var(--danger); background:var(--danger-pale); }
    .field-error { font-size:.75rem; color:var(--danger); }
    textarea.field-control { resize:vertical; min-height:110px; }

    /* ─── Current Image + Upload ─── */
    .image-panel { display:grid; grid-template-columns:auto 1fr; gap:1.25rem; align-items:start; }
    @media(max-width:500px) { .image-panel { grid-template-columns:1fr; } }
    .current-img-wrap { text-align:center; }
    .current-img {
        width:120px; height:120px; object-fit:cover; border-radius:12px;
        border:3px solid var(--border); display:block; margin-bottom:.5rem;
    }
    .current-img-placeholder {
        width:120px; height:120px; border-radius:12px;
        background:var(--growth-pale); border:3px solid var(--border);
        display:flex; align-items:center; justify-content:center; font-size:3rem;
    }
    .current-label { font-size:.72rem; color:var(--muted); font-weight:600; }
    .upload-zone {
        border:2px dashed var(--border); border-radius:12px;
        padding:1.5rem; text-align:center; cursor:pointer;
        transition:all .25s; background:var(--cream); position:relative;
    }
    .upload-zone:hover { border-color:var(--growth); background:var(--growth-pale); }
    .upload-zone input[type=file] { position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; height:100%; }
    .upload-text { font-size:.85rem; color:var(--muted); }
    .upload-text strong { color:var(--growth); }
    .new-preview { max-width:100%; max-height:160px; border-radius:8px; margin-top:.75rem; display:none; }

    /* ─── Toggle Group ─── */
    .toggle-group { display:flex; gap:.5rem; flex-wrap:wrap; }
    .toggle-option { display:none; }
    .toggle-label {
        display:inline-flex; align-items:center; gap:.4rem;
        padding:.5rem 1.1rem; border-radius:100px;
        border:1.5px solid var(--border); cursor:pointer;
        font-size:.85rem; font-weight:500; color:var(--muted);
        transition:all .2s; background:#fff;
    }
    .toggle-option:checked + .toggle-label { border-color:var(--growth); background:var(--growth); color:#fff; }
    .toggle-option[value="inactive"]:checked + .toggle-label { background:var(--muted); border-color:var(--muted); }
    .toggle-option[value="pending"]:checked  + .toggle-label { background:var(--gold); border-color:var(--gold); color:var(--ink); }

    /* ─── Switch ─── */
    .switch-wrap { display:flex; align-items:center; gap:.85rem; }
    .switch { position:relative; width:46px; height:26px; }
    .switch input { opacity:0; width:0; height:0; }
    .slider { position:absolute; cursor:pointer; inset:0; background:var(--border); border-radius:100px; transition:.3s; }
    .slider::before { content:''; position:absolute; height:20px; width:20px; border-radius:50%; left:3px; bottom:3px; background:#fff; transition:.3s; }
    .switch input:checked + .slider { background:var(--growth); }
    .switch input:checked + .slider::before { transform:translateX(20px); }

    /* ─── Change indicator ─── */
    .changed-indicator {
        display:none; position:fixed; bottom:1.5rem; right:1.5rem; z-index:100;
        background:var(--ink); color:#fff; border-radius:12px;
        padding:.75rem 1.25rem; font-size:.85rem; font-weight:500;
        box-shadow:0 8px 24px rgba(0,0,0,.2); animation:slideUp .3s ease;
        align-items:center; gap:.6rem;
    }
    .changed-indicator.show { display:flex; }
    @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }

    /* ─── Form Footer ─── */
    .form-footer {
        padding:1.25rem 2rem; background:var(--cream);
        border-top:1px solid var(--border);
        display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:.75rem;
    }
    .btn-group { display:flex; gap:.6rem; flex-wrap:wrap; }
    .btn-submit {
        background:var(--growth); color:#fff;
        border:none; border-radius:10px; cursor:pointer;
        padding:.75rem 2rem; font-family:'Outfit',sans-serif;
        font-size:.95rem; font-weight:700;
        display:inline-flex; align-items:center; gap:.5rem;
        transition:background .2s, transform .15s;
    }
    .btn-submit:hover { background:var(--growth-light); transform:translateY(-1px); }
    .btn-view {
        background:var(--opp-pale); color:var(--opp);
        border:1.5px solid rgba(232,99,10,.2); border-radius:10px;
        padding:.72rem 1.25rem; font-family:'Outfit',sans-serif;
        font-size:.88rem; font-weight:600; text-decoration:none;
        display:inline-flex; align-items:center; gap:.4rem; cursor:pointer;
        transition:all .2s;
    }
    .btn-view:hover { background:var(--opp); color:#fff; }
    .btn-cancel {
        background:transparent; color:var(--muted);
        border:1.5px solid var(--border); border-radius:10px;
        padding:.72rem 1.25rem; font-family:'Outfit',sans-serif;
        font-size:.9rem; font-weight:600; cursor:pointer;
        text-decoration:none; transition:color .2s, border-color .2s;
    }
    .btn-cancel:hover { color:var(--ink); border-color:var(--ink); }
    .btn-danger {
        background:var(--danger-pale); color:var(--danger);
        border:1.5px solid rgba(220,38,38,.15); border-radius:10px;
        padding:.72rem 1.25rem; font-family:'Outfit',sans-serif;
        font-size:.88rem; font-weight:600; cursor:pointer;
        display:inline-flex; align-items:center; gap:.4rem; transition:all .2s;
    }
    .btn-danger:hover { background:var(--danger); color:#fff; }

    .form-alert {
        background:var(--danger-pale); border:1px solid rgba(220,38,38,.2);
        border-radius:10px; padding:1rem 1.25rem;
        color:var(--danger); font-size:.88rem; margin-bottom:1rem;
    }
    .form-success {
        background:var(--growth-pale); border:1px solid rgba(13,92,58,.2);
        border-radius:10px; padding:1rem 1.25rem;
        color:var(--growth); font-size:.88rem; margin-bottom:1rem;
    }
</style>
@endpush

@section('content')

{{-- Header --}}
<div class="form-header">
    <div class="header-inner">
        @if($talent->image)
            <img src="{{ asset('image/' . $talent->image) }}" alt="{{ $talent->name }}" class="header-avatar">
        @else
            <div class="avatar-placeholder-sm">👤</div>
        @endif
        <div class="header-text">
            <div class="breadcrumb">
                <a href="{{ route('talents.index') }}">Talents</a>
                <span>›</span>
                <a href="{{ route('talents.show', $talent) }}">{{ $talent->name }}</a>
                <span>›</span>
                <span>Edit</span>
            </div>
            <span class="edit-badge">✏ Editing</span>
            <h1 class="form-title">{{ $talent->name }}</h1>
            <p class="form-subtitle">Last updated {{ $talent->updated_at?->diffForHumans() ?? 'never' }}</p>
            <div class="header-meta">
                <span class="meta-tag">{{ $talent->category->name ?? 'Uncategorized' }}</span>
                @if($talent->level)<span class="meta-tag">⚡ {{ ucfirst($talent->level) }}</span>@endif
                <span class="meta-tag">{{ ucfirst($talent->status ?? 'active') }}</span>
            </div>
        </div>
    </div>
</div>

{{-- Tabs --}}
<div style="background:#fff;border-bottom:1px solid var(--border);">
    <div class="tabs-wrap">
        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('basic', this)">📋 Basic Info</button>
            <button class="tab-btn" onclick="switchTab('contact', this)">📞 Contact</button>
            <button class="tab-btn" onclick="switchTab('photo', this)">🖼️ Photo</button>
            <button class="tab-btn" onclick="switchTab('settings', this)">⚙️ Status & Settings</button>
        </div>
    </div>
</div>

<div class="form-wrap">

    @if($errors->any())
    <div class="form-alert">⚠ {{ $errors->first() }}</div>
    @endif

    @if(session('success'))
    <div class="form-success">✓ {{ session('success') }}</div>
    @endif

    <form method="POST" action="{{ route('talents.update', $talent) }}" enctype="multipart/form-data" id="editForm">
        @csrf @method('PUT')

        {{-- ─── Tab: Basic ─── --}}
        <div id="panel-basic" class="tab-panel active">
            <div class="form-card">
                <div class="form-section">
                    <div class="section-head">
                        <div class="section-dot"></div>
                        <h2 class="section-heading">Basic Information</h2>
                    </div>
                    <div class="fields-grid">

                        <div class="field-group field-full">
                            <label class="field-label">Full Name <span class="req">*</span></label>
                            <input type="text" name="name" class="field-control @error('name') is-error @enderror"
                                value="{{ old('name', $talent->name) }}" required>
                            @error('name')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>

                        <div class="field-group">
                            <label class="field-label">Category <span class="req">*</span></label>
                            <select name="category_id" class="field-control @error('category_id') is-error @enderror" required>
                                <option value="">Select category…</option>
                                @foreach($categories ?? [] as $cat)
                                    <option value="{{ $cat->id }}" {{ old('category_id', $talent->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                                @endforeach
                            </select>
                            @error('category_id')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>

                        <div class="field-group">
                            <label class="field-label">Experience Level</label>
                            <select name="level" class="field-control">
                                <option value="">Select level…</option>
                                @foreach(['junior','mid','senior','expert'] as $lvl)
                                <option value="{{ $lvl }}" {{ old('level', $talent->level) == $lvl ? 'selected' : '' }}>{{ ucfirst($lvl) }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="field-group field-full">
                            <label class="field-label">Description <span class="req">*</span></label>
                            <textarea name="description" class="field-control @error('description') is-error @enderror" required>{{ old('description', $talent->description) }}</textarea>
                            @error('description')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>

                    </div>
                </div>
                <div class="form-footer">
                    <a href="{{ route('talents.show', $talent) }}" class="btn-cancel">Cancel</a>
                    <div class="btn-group">
                        <a href="{{ route('talents.show', $talent) }}" class="btn-view">View Profile</a>
                        <button type="submit" class="btn-submit">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {{-- ─── Tab: Contact ─── --}}
        <div id="panel-contact" class="tab-panel">
            <div class="form-card">
                <div class="form-section">
                    <div class="section-head">
                        <div class="section-dot" style="background:var(--growth);"></div>
                        <h2 class="section-heading">Contact Details</h2>
                    </div>
                    <div class="fields-grid">

                        <div class="field-group">
                            <label class="field-label">Email Address</label>
                            <input type="email" name="email" class="field-control @error('email') is-error @enderror"
                                value="{{ old('email', $talent->email) }}">
                            @error('email')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>

                        <div class="field-group">
                            <label class="field-label">Phone Number</label>
                            <input type="text" name="phone" class="field-control @error('phone') is-error @enderror"
                                value="{{ old('phone', $talent->phone) }}" placeholder="+250 7XX XXX XXX">
                            @error('phone')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>

                        <div class="field-group field-full">
                            <label class="field-label">Address</label>
                            <input type="text" name="address" class="field-control"
                                value="{{ old('address', $talent->address) }}" placeholder="e.g. Kigali, Gasabo District">
                        </div>

                        <div class="field-group">
                            <label class="field-label">Primary Language</label>
                            <select name="language" class="field-control">
                                <option value="">Select language…</option>
                                @foreach(['kinyarwanda','english','french','swahili'] as $lang)
                                <option value="{{ $lang }}" {{ old('language', $talent->language) == $lang ? 'selected' : '' }}>{{ ucfirst($lang) }}</option>
                                @endforeach
                            </select>
                        </div>

                    </div>
                </div>
                <div class="form-footer">
                    <a href="{{ route('talents.show', $talent) }}" class="btn-cancel">Cancel</a>
                    <button type="submit" class="btn-submit">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>

        {{-- ─── Tab: Photo ─── --}}
        <div id="panel-photo" class="tab-panel">
            <div class="form-card">
                <div class="form-section">
                    <div class="section-head">
                        <div class="section-dot" style="background:var(--gold);"></div>
                        <h2 class="section-heading">Profile Photo</h2>
                    </div>
                    <div class="image-panel">
                        <div class="current-img-wrap">
                            @if($talent->image)
                                <img src="{{ asset('image/' . $talent->image) }}" alt="Current photo" class="current-img" id="currentImg">
                            @else
                                <div class="current-img-placeholder">👤</div>
                            @endif
                            <div class="current-label">Current Photo</div>
                        </div>
                        <div>
                            <label class="upload-zone">
                                <input type="file" name="image" accept="image/*" onchange="previewNew(this)">
                                <div style="font-size:1.75rem;margin-bottom:.4rem;">📤</div>
                                <p class="upload-text"><strong>Click to upload new photo</strong><br>PNG, JPG, WEBP — max 2MB</p>
                                <img id="newPreview" class="new-preview" alt="New preview">
                            </label>
                            <p class="field-hint" style="margin-top:.5rem;">Leave empty to keep the current photo</p>
                            @error('image')<span class="field-error">⚠ {{ $message }}</span>@enderror
                        </div>
                    </div>
                </div>
                <div class="form-footer">
                    <a href="{{ route('talents.show', $talent) }}" class="btn-cancel">Cancel</a>
                    <button type="submit" class="btn-submit">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                        Save Photo
                    </button>
                </div>
            </div>
        </div>

        {{-- ─── Tab: Settings ─── --}}
        <div id="panel-settings" class="tab-panel">
            <div class="form-card">
                <div class="form-section">
                    <div class="section-head">
                        <div class="section-dot" style="background:var(--growth-light);"></div>
                        <h2 class="section-heading">Status & Visibility</h2>
                    </div>
                    <div class="fields-grid">

                        <div class="field-group">
                            <label class="field-label">Status <span class="req">*</span></label>
                            <div class="toggle-group" style="margin-top:.2rem;">
                                @foreach(['active' => '● Active', 'inactive' => '○ Inactive', 'pending' => '◌ Pending'] as $val => $label)
                                <input type="radio" name="status" id="e_status_{{ $val }}" value="{{ $val }}" class="toggle-option"
                                    {{ old('status', $talent->status) == $val ? 'checked' : '' }}>
                                <label for="e_status_{{ $val }}" class="toggle-label">{{ $label }}</label>
                                @endforeach
                            </div>
                        </div>

                        <div class="field-group">
                            <label class="field-label">Featured</label>
                            <div class="switch-wrap" style="margin-top:.35rem;">
                                <label class="switch">
                                    <input type="hidden" name="featured" value="0">
                                    <input type="checkbox" name="featured" value="1" {{ old('featured', $talent->featured) ? 'checked' : '' }}>
                                    <span class="slider"></span>
                                </label>
                                <span style="font-size:.9rem;font-weight:500;color:var(--ink);">Mark as Featured Talent</span>
                            </div>
                        </div>

                    </div>
                </div>

                {{-- Danger Zone --}}
                <div class="form-section" style="background:#fff8f8;">
                    <div class="section-head">
                        <div class="section-dot" style="background:var(--danger);"></div>
                        <h2 class="section-heading" style="color:var(--danger);">Danger Zone</h2>
                    </div>
                    <p style="font-size:.88rem;color:var(--muted);margin-bottom:1rem;">
                        Permanently delete this talent and all associated data. This action cannot be undone.
                    </p>
                    <form method="POST" action="{{ route('talents.destroy', $talent) }}"
                        onsubmit="return confirm('⚠ Delete {{ addslashes($talent->name) }}? All data will be permanently removed.')">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn-danger">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                            Delete Talent Permanently
                        </button>
                    </form>
                </div>

                <div class="form-footer">
                    <a href="{{ route('talents.show', $talent) }}" class="btn-cancel">Cancel</a>
                    <button type="submit" class="btn-submit">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                        Save Settings
                    </button>
                </div>
            </div>
        </div>

    </form>
</div>

{{-- Unsaved changes indicator --}}
<div class="changed-indicator" id="changedBadge">
    ● Unsaved changes
    <button onclick="document.getElementById('editForm').requestSubmit()" style="background:var(--opp);color:#fff;border:none;border-radius:6px;padding:.3rem .75rem;font-size:.8rem;font-weight:600;cursor:pointer;font-family:'Outfit',sans-serif;">Save</button>
</div>

@push('scripts')
<script>
function switchTab(name, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + name).classList.add('active');
    btn.classList.add('active');
}

function previewNew(input) {
    const img = document.getElementById('newPreview');
    const cur = document.getElementById('currentImg');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            img.src = e.target.result;
            img.style.display = 'block';
            if (cur) cur.style.opacity = '.5';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Unsaved changes indicator
let changed = false;
document.getElementById('editForm').addEventListener('change', () => {
    if (!changed) {
        changed = true;
        document.getElementById('changedBadge').classList.add('show');
    }
});
window.addEventListener('beforeunload', e => {
    if (changed) { e.preventDefault(); e.returnValue = ''; }
});
document.getElementById('editForm').addEventListener('submit', () => { changed = false; });
</script>
@endpush
@endsection