@extends('layouts.app')
@section('content')

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

    /* ─── Page Header ─── */
    .form-header {
        background:var(--growth); padding:2.5rem 2rem;
        position:relative; overflow:hidden;
    }
    .form-header::before {
        content:''; position:absolute; top:-80px; right:-80px;
        width:280px; height:280px; border-radius:50%;
        background:rgba(245,200,66,.1);
    }
    .header-inner { max-width:860px; margin:0 auto; position:relative; z-index:1; }
    .breadcrumb {
        display:flex; align-items:center; gap:.4rem;
        font-size:.78rem; color:rgba(255,255,255,.6);
        margin-bottom:.75rem;
    }
    .breadcrumb a { color:rgba(255,255,255,.6); text-decoration:none; }
    .breadcrumb a:hover { color:#fff; }
    .breadcrumb-sep { opacity:.4; }
    .form-title {
        font-family:'Playfair Display',serif;
        font-size:2rem; font-weight:900; color:#fff; margin:0 0 .3rem;
    }
    .form-title span { color:var(--gold); }
    .form-subtitle { color:rgba(255,255,255,.6); font-size:.9rem; }

    /* ─── Steps Indicator ─── */
    .steps-wrap { max-width:860px; margin:0 auto; padding:0 2rem; }
    .steps {
        display:flex; align-items:center;
        background:#fff; border:1px solid var(--border);
        border-radius:12px; padding:1rem 1.5rem;
        margin-top:-1px; gap:0;
        box-shadow:0 2px 12px rgba(13,92,58,.06);
    }
    .step { display:flex; align-items:center; gap:.5rem; flex:1; }
    .step-num {
        width:28px; height:28px; border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        font-size:.78rem; font-weight:700; flex-shrink:0;
    }
    .step.active .step-num { background:var(--growth); color:#fff; }
    .step.done .step-num   { background:var(--gold); color:var(--ink); }
    .step:not(.active):not(.done) .step-num { background:var(--border); color:var(--muted); }
    .step-label { font-size:.78rem; font-weight:600; }
    .step.active .step-label { color:var(--growth); }
    .step.done .step-label   { color:var(--muted); }
    .step:not(.active):not(.done) .step-label { color:var(--muted); }
    .step-connector { flex:0 0 30px; height:1px; background:var(--border); margin:0 .5rem; }

    /* ─── Form Layout ─── */
    .form-wrap { max-width:860px; margin:1.5rem auto 3rem; padding:0 2rem; }

    .form-card {
        background:#fff; border:1px solid var(--border); border-radius:16px;
        overflow:hidden; box-shadow:0 2px 16px rgba(13,92,58,.06);
    }
    .form-section { padding:1.75rem 2rem; border-bottom:1px solid var(--border); }
    .form-section:last-of-type { border-bottom:none; }
    .section-head {
        display:flex; align-items:center; gap:.65rem;
        margin-bottom:1.25rem;
    }
    .section-dot {
        width:10px; height:10px; border-radius:50%; background:var(--opp); flex-shrink:0;
    }
    .section-heading {
        font-family:'Playfair Display',serif;
        font-size:1.1rem; font-weight:700; color:var(--ink);
    }

    /* ─── Fields ─── */
    .fields-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .field-full { grid-column:1 / -1; }
    @media(max-width:600px){ .fields-grid { grid-template-columns:1fr; } .field-full { grid-column:auto; } }

    .field-group { display:flex; flex-direction:column; gap:.4rem; }
    .field-label {
        font-size:.75rem; font-weight:700; letter-spacing:.06em;
        text-transform:uppercase; color:var(--ink);
    }
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
    .field-error { font-size:.75rem; color:var(--danger); display:flex; align-items:center; gap:.25rem; }
    textarea.field-control { resize:vertical; min-height:110px; }

    /* ─── Image Upload ─── */
    .upload-zone {
        border:2px dashed var(--border); border-radius:12px;
        padding:2rem; text-align:center; cursor:pointer;
        transition:all .25s; background:var(--cream);
        position:relative;
    }
    .upload-zone:hover, .upload-zone.drag-over {
        border-color:var(--growth); background:var(--growth-pale);
    }
    .upload-zone input[type=file] {
        position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; height:100%;
    }
    .upload-icon { font-size:2.5rem; margin-bottom:.5rem; }
    .upload-text { font-size:.88rem; color:var(--muted); }
    .upload-text strong { color:var(--growth); }
    .preview-img {
        max-width:100%; max-height:200px; border-radius:10px;
        margin-top:1rem; object-fit:cover; display:none;
    }

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
    .toggle-option:checked + .toggle-label {
        border-color:var(--growth); background:var(--growth); color:#fff;
    }

    /* Status specific checked colors */
    .toggle-option[value="inactive"]:checked + .toggle-label { background:var(--muted); border-color:var(--muted); color:#fff; }
    .toggle-option[value="pending"]:checked  + .toggle-label { background:var(--gold); border-color:var(--gold); color:var(--ink); }

    /* ─── Featured Switch ─── */
    .switch-wrap { display:flex; align-items:center; gap:.85rem; }
    .switch { position:relative; width:46px; height:26px; }
    .switch input { opacity:0; width:0; height:0; }
    .slider {
        position:absolute; cursor:pointer; inset:0;
        background:var(--border); border-radius:100px; transition:.3s;
    }
    .slider::before {
        content:''; position:absolute;
        height:20px; width:20px; border-radius:50%;
        left:3px; bottom:3px; background:#fff; transition:.3s;
    }
    .switch input:checked + .slider { background:var(--growth); }
    .switch input:checked + .slider::before { transform:translateX(20px); }
    .switch-text { font-size:.9rem; font-weight:500; color:var(--ink); }

    /* ─── Form Footer ─── */
    .form-footer {
        padding:1.25rem 2rem; background:var(--cream);
        border-top:1px solid var(--border);
        display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:.75rem;
    }
    .btn-submit {
        background:var(--opp); color:#fff;
        border:none; border-radius:10px; cursor:pointer;
        padding:.75rem 2rem; font-family:'Outfit',sans-serif;
        font-size:.95rem; font-weight:700;
        display:inline-flex; align-items:center; gap:.5rem;
        transition:background .2s, transform .15s;
    }
    .btn-submit:hover { background:var(--opp-light); transform:translateY(-1px); }
    .btn-cancel {
        background:transparent; color:var(--muted);
        border:1.5px solid var(--border); border-radius:10px;
        padding:.72rem 1.5rem; font-family:'Outfit',sans-serif;
        font-size:.9rem; font-weight:600; cursor:pointer;
        text-decoration:none; transition:color .2s, border-color .2s;
    }
    .btn-cancel:hover { color:var(--ink); border-color:var(--ink); }

    /* ─── Alert ─── */
    .form-alert {
        background:var(--danger-pale); border:1px solid rgba(220,38,38,.2);
        border-radius:10px; padding:1rem 1.25rem;
        color:var(--danger); font-size:.88rem; margin-bottom:1rem;
    }
</style>

<div class="form-header">
    <div class="header-inner">
        <div class="breadcrumb">
            <a href="{{ route('admin.talents.index') }}">Talents</a>
            <span class="breadcrumb-sep">›</span>
            <span>New Talent</span>
        </div>
        <h1 class="form-title">Add <span>New</span> Talent</h1>
        <p class="form-subtitle">Register a new talent in the FutureConnect platform</p>
    </div>
</div>

<div class="form-wrap">

    @if($errors->any())
    <div class="form-alert">
        ⚠ Please fix the following: {{ $errors->first() }}
    </div>
    @endif

    <form method="POST" action="{{ route('admin.talents.store') }}" enctype="multipart/form-data" id="talentForm">
        @csrf

        <div class="form-card">

            {{-- ─── Basic Information ─── --}}
            <div class="form-section">
                <div class="section-head">
                    <div class="section-dot"></div>
                    <h2 class="section-heading">Basic Information</h2>
                </div>
                <div class="fields-grid">

                    <div class="field-group field-full">
                        <label class="field-label">Full Name <span class="req">*</span></label>
                        <input type="text" name="name" class="field-control @error('name') is-error @enderror"
                            placeholder="e.g. Alice Uwimana"
                            value="{{ old('name') }}" required>
                        @error('name')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group">
                        <label class="field-label">Category <span class="req">*</span></label>
                        <select name="category_id" class="field-control @error('category_id') is-error @enderror" required>
                            <option value="">Select category…</option>
                            @foreach($categories ?? [] as $cat)
                                <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                            @endforeach
                        </select>
                        @error('category_id')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group">
                        <label class="field-label">Experience Level</label>
                        <select name="level" class="field-control @error('level') is-error @enderror">
                            <option value="">Select level…</option>
                            <option value="junior"  {{ old('level') == 'junior'  ? 'selected' : '' }}>Junior</option>
                            <option value="mid"     {{ old('level') == 'mid'     ? 'selected' : '' }}>Mid-Level</option>
                            <option value="senior"  {{ old('level') == 'senior'  ? 'selected' : '' }}>Senior</option>
                            <option value="expert"  {{ old('level') == 'expert'  ? 'selected' : '' }}>Expert</option>
                        </select>
                        @error('level')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group field-full">
                        <label class="field-label">Description <span class="req">*</span></label>
                        <textarea name="description" class="field-control @error('description') is-error @enderror"
                            placeholder="Describe this talent's background, expertise, and what makes them unique…" required>{{ old('description') }}</textarea>
                        @error('description')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                </div>
            </div>

            {{-- ─── Contact Details ─── --}}
            <div class="form-section">
                <div class="section-head">
                    <div class="section-dot" style="background:var(--growth);"></div>
                    <h2 class="section-heading">Contact Details</h2>
                </div>
                <div class="fields-grid">

                    <div class="field-group">
                        <label class="field-label">Email Address</label>
                        <input type="email" name="email" class="field-control @error('email') is-error @enderror"
                            placeholder="talent@example.com"
                            value="{{ old('email') }}">
                        @error('email')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group">
                        <label class="field-label">Phone Number</label>
                        <input type="text" name="phone" class="field-control @error('phone') is-error @enderror"
                            placeholder="+250 7XX XXX XXX"
                            value="{{ old('phone') }}">
                        @error('phone')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group field-full">
                        <label class="field-label">Address</label>
                        <input type="text" name="address" class="field-control @error('address') is-error @enderror"
                            placeholder="e.g. Kigali, Gasabo District"
                            value="{{ old('address') }}">
                        @error('address')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group">
                        <label class="field-label">Primary Language</label>
                        <select name="language" class="field-control @error('language') is-error @enderror">
                            <option value="">Select language…</option>
                            <option value="kinyarwanda" {{ old('language') == 'kinyarwanda' ? 'selected' : '' }}>Kinyarwanda</option>
                            <option value="english"     {{ old('language') == 'english'     ? 'selected' : '' }}>English</option>
                            <option value="french"      {{ old('language') == 'french'      ? 'selected' : '' }}>French</option>
                            <option value="swahili"     {{ old('language') == 'swahili'     ? 'selected' : '' }}>Swahili</option>
                        </select>
                        @error('language')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                </div>
            </div>

            {{-- ─── Profile Photo ─── --}}
            <div class="form-section">
                <div class="section-head">
                    <div class="section-dot" style="background:var(--gold);"></div>
                    <h2 class="section-heading">Profile Photo</h2>
                </div>
                <label class="upload-zone" id="uploadZone">
                    <input type="file" name="image" accept="image/*" onchange="previewImage(this)">
                    <div class="upload-icon">🖼️</div>
                    <p class="upload-text"><strong>Click to upload</strong> or drag & drop<br>PNG, JPG, WEBP — max 2MB</p>
                    <img id="previewImg" class="preview-img" alt="Preview">
                </label>
                @error('image')<span class="field-error" style="margin-top:.35rem;">⚠ {{ $message }}</span>@enderror
            </div>

            {{-- ─── Status & Settings ─── --}}
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
                            <input type="radio" name="status" id="status_{{ $val }}" value="{{ $val }}" class="toggle-option"
                                {{ old('status', 'active') == $val ? 'checked' : '' }}>
                            <label for="status_{{ $val }}" class="toggle-label">{{ $label }}</label>
                            @endforeach
                        </div>
                        @error('status')<span class="field-error">⚠ {{ $message }}</span>@enderror
                    </div>

                    <div class="field-group">
                        <label class="field-label">Featured</label>
                        <div class="switch-wrap" style="margin-top:.35rem;">
                            <label class="switch">
                                <input type="hidden" name="featured" value="0">
                                <input type="checkbox" name="featured" value="1" {{ old('featured') ? 'checked' : '' }}>
                                <span class="slider"></span>
                            </label>
                            <span class="switch-text">Mark as Featured Talent</span>
                        </div>
                        <span class="field-hint">Featured talents appear prominently on listings</span>
                    </div>

                </div>
            </div>

            {{-- ─── Footer ─── --}}
            <div class="form-footer">
                <a href="{{ route('admin.talents.index') }}" class="btn-cancel">Cancel</a>
                <button type="submit" class="btn-submit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14m-7-7 7 7 7-7"/></svg>
                    Save Talent
                </button>
            </div>

        </div>
    </form>
</div>

<script>
function previewImage(input) {
    const img = document.getElementById('previewImg');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => { img.src = e.target.result; img.style.display = 'block'; };
        reader.readAsDataURL(input.files[0]);
    }
}
// Drag-over effect
const zone = document.getElementById('uploadZone');
['dragenter','dragover'].forEach(e => zone.addEventListener(e, () => zone.classList.add('drag-over')));
['dragleave','drop'].forEach(e => zone.addEventListener(e, () => zone.classList.remove('drag-over')));
</script>

@endsection