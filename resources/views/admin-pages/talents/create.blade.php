@extends('layouts.app')

@section('content')
<style>
    :root {
        --bg-base:      #060f11;
        --bg-surface:   #0b1a1e;
        --bg-elevated:  #0f2228;
        --bg-card:      #122630;
        --border:       #1a3340;
        --border-light: #1f3d4d;
        --text-muted:   #3d4648;
        --text-mid:     #6b8a90;
        --text-body:    #a8c5cb;
        --text-head:    #d6eaed;
        --accent:       #00c9a7;
        --accent-dim:   #009e84;
        --accent-glow:  rgba(0,201,167,0.15);
        --gold:         #e8a838;
        --danger:       #e05a6b;
        --radius:       10px;
        --radius-lg:    16px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg-base); color: var(--text-body); font-family: 'Sora','DM Sans',sans-serif; min-height: 100vh; }

    .page-wrap { max-width: 1100px; margin: 0 auto; padding: 36px 32px; }

    /* Breadcrumb */
    .breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: var(--text-muted);
        margin-bottom: 28px;
    }
    .breadcrumb a { color: var(--text-mid); text-decoration: none; transition: color .2s; }
    .breadcrumb a:hover { color: var(--accent); }
    .breadcrumb .sep { color: var(--text-muted); font-size: 10px; }
    .breadcrumb .current { color: var(--text-body); }

    /* Page header */
    .page-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 32px;
        flex-wrap: wrap;
        gap: 16px;
    }
    .page-title-group small {
        display: block;
        font-size: 11px;
        letter-spacing: .14em;
        text-transform: uppercase;
        color: var(--accent);
        margin-bottom: 6px;
        font-weight: 600;
    }
    .page-title-group h1 {
        font-size: 26px;
        font-weight: 700;
        color: var(--text-head);
        letter-spacing: -.4px;
    }
    .btn-back {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--text-mid);
        font-size: 13px;
        text-decoration: none;
        border: 1px solid var(--border);
        padding: 8px 16px;
        border-radius: var(--radius);
        transition: all .2s;
    }
    .btn-back:hover { border-color: var(--border-light); color: var(--text-body); }

    /* Form layout */
    .form-layout {
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: 24px;
        align-items: start;
    }
    @media (max-width: 860px) {
        .form-layout { grid-template-columns: 1fr; }
    }

    /* Cards */
    .form-card {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        margin-bottom: 24px;
    }
    .form-card:last-child { margin-bottom: 0; }
    .card-header {
        padding: 16px 22px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .card-header-icon {
        width: 28px; height: 28px;
        background: var(--accent-glow);
        border: 1px solid rgba(0,201,167,.2);
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        flex-shrink: 0;
    }
    .card-header-icon svg { width: 14px; height: 14px; }
    .card-header h2 {
        font-size: 13.5px;
        font-weight: 700;
        color: var(--text-head);
        letter-spacing: -.1px;
    }
    .card-body { padding: 22px; }

    /* Form rows */
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-bottom: 16px;
    }
    .form-row.single { grid-template-columns: 1fr; }
    .form-row.triple { grid-template-columns: 1fr 1fr 1fr; }
    @media (max-width: 600px) {
        .form-row, .form-row.triple { grid-template-columns: 1fr; }
    }

    .field { display: flex; flex-direction: column; gap: 6px; }
    .field label {
        font-size: 11px;
        letter-spacing: .09em;
        text-transform: uppercase;
        color: var(--text-muted);
        font-weight: 700;
    }
    .field label .req { color: var(--danger); margin-left: 2px; }

    .field input,
    .field select,
    .field textarea {
        background: var(--bg-card);
        border: 1px solid var(--border);
        color: var(--text-body);
        border-radius: 8px;
        padding: 10px 14px;
        font-size: 13.5px;
        font-family: inherit;
        outline: none;
        transition: border-color .2s, box-shadow .2s;
        width: 100%;
        line-height: 1.4;
    }
    .field input:focus,
    .field select:focus,
    .field textarea:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--accent-glow);
    }
    .field input::placeholder,
    .field textarea::placeholder { color: var(--text-muted); }
    .field select option { background: #0d1e22; }
    .field textarea { resize: vertical; min-height: 110px; }
    .field .hint { font-size: 11.5px; color: var(--text-muted); }

    .field .error-msg {
        font-size: 11.5px;
        color: var(--danger);
    }
    .field input.is-error,
    .field select.is-error,
    .field textarea.is-error {
        border-color: var(--danger);
        box-shadow: 0 0 0 3px rgba(224,90,107,.12);
    }

    /* Image upload */
    .img-upload-zone {
        border: 2px dashed var(--border);
        border-radius: var(--radius);
        padding: 28px 16px;
        text-align: center;
        cursor: pointer;
        transition: border-color .2s, background .2s;
        position: relative;
        overflow: hidden;
    }
    .img-upload-zone:hover { border-color: var(--accent); background: var(--accent-glow); }
    .img-upload-zone input[type="file"] {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }
    .img-upload-zone .upload-icon {
        width: 42px; height: 42px;
        background: var(--bg-elevated);
        border: 1px solid var(--border);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--text-mid);
        margin-bottom: 10px;
    }
    .img-upload-zone p { font-size: 12.5px; color: var(--text-mid); }
    .img-upload-zone small { font-size: 11px; color: var(--text-muted); margin-top: 4px; display: block; }
    #imagePreview {
        width: 100%;
        border-radius: 8px;
        margin-top: 12px;
        display: none;
        max-height: 200px;
        object-fit: cover;
        border: 1px solid var(--border);
    }

    /* Toggle switches */
    .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid var(--border);
    }
    .toggle-row:last-child { border-bottom: none; padding-bottom: 0; }
    .toggle-label { font-size: 13px; color: var(--text-body); }
    .toggle-label small { display: block; font-size: 11px; color: var(--text-muted); margin-top: 2px; }
    .toggle-switch { position: relative; width: 42px; height: 24px; flex-shrink: 0; }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .toggle-slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 24px;
        transition: .2s;
    }
    .toggle-slider::before {
        content: '';
        position: absolute;
        width: 16px; height: 16px;
        left: 3px; top: 3px;
        background: var(--text-muted);
        border-radius: 50%;
        transition: .2s;
    }
    .toggle-switch input:checked + .toggle-slider { background: var(--accent-glow); border-color: var(--accent); }
    .toggle-switch input:checked + .toggle-slider::before { transform: translateX(18px); background: var(--accent); }

    /* Submit bar */
    .submit-bar {
        background: var(--bg-surface);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 18px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
    }
    .submit-bar .hint { font-size: 12px; color: var(--text-muted); }
    .submit-actions { display: flex; gap: 10px; }
    .btn-save {
        background: var(--accent);
        color: #060f11;
        border: none;
        border-radius: 8px;
        padding: 11px 28px;
        font-size: 13.5px;
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        transition: background .2s, transform .15s, box-shadow .2s;
    }
    .btn-save:hover {
        background: #00e8c2;
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(0,201,167,.3);
    }
    .btn-cancel {
        background: transparent;
        color: var(--text-mid);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 11px 22px;
        font-size: 13.5px;
        font-family: inherit;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: border-color .2s, color .2s;
    }
    .btn-cancel:hover { border-color: var(--border-light); color: var(--text-body); }

    /* Validation error banner */
    .validation-banner {
        background: rgba(224,90,107,.1);
        border: 1px solid rgba(224,90,107,.25);
        color: var(--danger);
        padding: 12px 18px;
        border-radius: var(--radius);
        font-size: 13px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>


<div class="page-wrap">

    {{-- Breadcrumb --}}
    <div class="breadcrumb">
        <a href="{{ route('admin.talents.index') }}">Talents</a>
        <span class="sep">›</span>
        <span class="current">Add New Talent</span>
    </div>

    {{-- Header --}}
    <div class="page-header">
        <div class="page-title-group">
            <small>New Record</small>
            <h1>Add Talent</h1>
        </div>
        <a href="{{ route('admin.talents.index') }}" class="btn-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
            Back to List
        </a>
    </div>

    {{-- Validation errors --}}
    @if($errors->any())
    <div class="validation-banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
        Please fix the {{ $errors->count() }} error(s) below.
    </div>
    @endif

    <form method="POST" action="{{ route('admin.talents.store') }}" enctype="multipart/form-data">
        @csrf

        <div class="form-layout">

            {{-- LEFT COLUMN --}}
            <div>
                {{-- Basic Info --}}
                <div class="form-card">
                    <div class="card-header">
                        <div class="card-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
                        </div>
                        <h2>Basic Information</h2>
                    </div>
                    <div class="card-body">
                        <div class="form-row single" style="margin-bottom:16px;">
                            <div class="field">
                                <label>Full Name <span class="req">*</span></label>
                                <input type="text" name="name" value="{{ old('name') }}" placeholder="Enter talent name"
                                       class="{{ $errors->has('name') ? 'is-error' : '' }}">
                                @error('name') <span class="error-msg">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="field">
                                <label>Email Address</label>
                                <input type="email" name="email" value="{{ old('email') }}" placeholder="email@example.com"
                                       class="{{ $errors->has('email') ? 'is-error' : '' }}">
                                @error('email') <span class="error-msg">{{ $message }}</span> @enderror
                            </div>
                            <div class="field">
                                <label>Phone Number</label>
                                <input type="text" name="phone" value="{{ old('phone') }}" placeholder="+250 7XX XXX XXX"
                                       class="{{ $errors->has('phone') ? 'is-error' : '' }}">
                                @error('phone') <span class="error-msg">{{ $message }}</span> @enderror
                            </div>
                        </div>
                        <div class="form-row single" style="margin-bottom:0;">
                            <div class="field">
                                <label>Address / Location</label>
                                <input type="text" name="address" value="{{ old('address') }}" placeholder="City, Country">
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Profile Details --}}
                <div class="form-card">
                    <div class="card-header">
                        <div class="card-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/></svg>
                        </div>
                        <h2>Profile Details</h2>
                    </div>
                    <div class="card-body">
                        <div class="form-row triple" style="margin-bottom:16px;">
                            <div class="field">
                                <label>Category <span class="req">*</span></label>
                                <select name="category_id" class="{{ $errors->has('category_id') ? 'is-error' : '' }}">
                                    <option value="">Select category</option>
                                    @foreach($categories as $cat)
                                        <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>
                                            {{ $cat->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('category_id') <span class="error-msg">{{ $message }}</span> @enderror
                            </div>
                            <div class="field">
                                <label>Level</label>
                                <select name="level">
                                    <option value="">Select level</option>
                                    @foreach(['beginner','intermediate','advanced','expert'] as $lv)
                                        <option value="{{ $lv }}" {{ old('level') == $lv ? 'selected' : '' }}>{{ ucfirst($lv) }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="field">
                                <label>Language</label>
                                <input type="text" name="language" value="{{ old('language') }}" placeholder="English, French…">
                            </div>
                        </div>
                        <div class="form-row single" style="margin-bottom:0;">
                            <div class="field">
                                <label>Bio / Description</label>
                                <textarea name="description" placeholder="Write a short profile description…">{{ old('description') }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- RIGHT COLUMN --}}
            <div>
                {{-- Image upload --}}
                <div class="form-card">
                    <div class="card-header">
                        <div class="card-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                        </div>
                        <h2>Profile Image</h2>
                    </div>
                    <div class="card-body">
                        <div class="img-upload-zone" id="uploadZone">
                            <input type="file" name="image" accept="image/*" id="imageInput" onchange="previewImage(this)">
                            <div class="upload-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
                            </div>
                            <p>Click to upload or drag & drop</p>
                            <small>PNG, JPG, WEBP · Max 2MB</small>
                        </div>
                        <img id="imagePreview" src="#" alt="Preview">
                    </div>
                </div>

                {{-- Status & Settings --}}
                <div class="form-card">
                    <div class="card-header">
                        <div class="card-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <h2>Settings</h2>
                    </div>
                    <div class="card-body">
                        <div class="field" style="margin-bottom:16px;">
                            <label>Status <span class="req">*</span></label>
                            <select name="status">
                                <option value="active"   {{ old('status','active') == 'active'   ? 'selected' : '' }}>Active</option>
                                <option value="inactive" {{ old('status') == 'inactive' ? 'selected' : '' }}>Inactive</option>
                                <option value="pending"  {{ old('status') == 'pending'  ? 'selected' : '' }}>Pending</option>
                            </select>
                        </div>

                        <div class="toggle-row">
                            <div class="toggle-label">
                                Featured Profile
                                <small>Highlight on homepage & listings</small>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" name="featured" value="1" {{ old('featured') ? 'checked' : '' }}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>

                        <div class="toggle-row">
                            <div class="toggle-label">
                                Matched
                                <small>Mark as successfully placed</small>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" name="matched" value="1" {{ old('matched') ? 'checked' : '' }}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {{-- Submit bar --}}
        <div class="submit-bar" style="margin-top:24px;">
            <span class="hint">Fields marked <span style="color:var(--danger);">*</span> are required</span>
            <div class="submit-actions">
                <a href="{{ route('admin.talents.index') }}" class="btn-cancel">Cancel</a>
                <button type="submit" class="btn-save">Save Talent</button>
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