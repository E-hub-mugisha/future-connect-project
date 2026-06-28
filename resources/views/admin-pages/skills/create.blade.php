@extends('layouts.app')
@section('title', 'Create Skill')
@section('content')

<style>
    :root {
        --bg-deep:       #f0f4f8;
        --bg-card:       #ffffff;
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
        --radius-sm:     6px;
        --radius-md:     10px;
        --radius-lg:     16px;
        --shadow-card:   0 1px 4px rgba(15,28,46,0.07), 0 4px 16px rgba(15,28,46,0.05);
        --shadow-glow:   0 0 18px rgba(0,166,103,0.18);
        --focus-ring:    0 0 0 3px rgba(0, 166, 103, 0.22);
        --transition-fast: 150ms ease;
    }

    body, .nk-wrap, .nk-content, .container-fluid, .container {
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
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        letter-spacing: -0.02em;
        margin: 0;
    }

    .page-header h2 span { color: var(--accent); }

    /* ── Back button ── */
    .btn-back {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        border-radius: var(--radius-sm);
        border: 1px solid #dae2ec;
        background: var(--bg-card);
        color: var(--text-secondary);
        font-size: 0.85rem;
        font-weight: 500;
        text-decoration: none;
        transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
    }

    .btn-back:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
        border-color: #b0c4d8;
    }

    /* ── Alerts ── */
    .alert-light-danger {
        background: rgba(220,53,69,0.07);
        border: 1px solid rgba(220,53,69,0.2);
        border-radius: var(--radius-md);
        color: #b02a37;
        padding: 14px 18px;
        font-size: 0.875rem;
        margin-bottom: 20px;
    }

    .alert-light-danger ul { margin: 0; padding-left: 18px; }

    .alert-light-success {
        background: var(--accent-dim);
        border: 1px solid var(--border-accent);
        border-radius: var(--radius-md);
        color: #007a4d;
        padding: 14px 18px;
        font-size: 0.875rem;
        margin-bottom: 20px;
    }

    /* ── Section Cards ── */
    .section-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        margin-bottom: 20px;
        overflow: hidden;
    }

    .section-card-header {
        padding: 16px 24px;
        border-bottom: 1px solid var(--border);
        background: var(--bg-surface);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .section-card-header h5 {
        font-family: 'Sora', sans-serif;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0;
        letter-spacing: -0.01em;
    }

    .section-card-header i { color: var(--accent); font-size: 1rem; }

    .section-card-body { padding: 24px; }

    /* ── Form Elements ── */
    .form-label {
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 7px;
        display: block;
    }

    .form-control,
    .form-select {
        background: var(--bg-card) !important;
        border: 1px solid #dae2ec !important;
        color: var(--text-primary) !important;
        border-radius: var(--radius-sm) !important;
        padding: 10px 14px !important;
        font-size: 0.875rem !important;
        transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        width: 100%;
    }

    .form-control:focus,
    .form-select:focus {
        border-color: var(--accent) !important;
        box-shadow: var(--focus-ring) !important;
        outline: none !important;
        background: #ffffff !important;
    }

    .form-control::placeholder { color: var(--text-muted) !important; }

    textarea.form-control { resize: vertical; min-height: 110px; }

    .form-select option { background: var(--bg-card); color: var(--text-primary); }

    /* ── Image upload zone ── */
    .upload-zone {
        border: 2px dashed #dae2ec;
        border-radius: var(--radius-md);
        padding: 24px;
        text-align: center;
        background: var(--bg-surface);
        cursor: pointer;
        transition: border-color var(--transition-fast), background var(--transition-fast);
        position: relative;
    }

    .upload-zone:hover, .upload-zone:focus-within {
        border-color: var(--accent);
        background: #f6fdf9;
    }

    .upload-zone input[type="file"] {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .upload-zone i { font-size: 1.8rem; color: var(--text-muted); display: block; margin-bottom: 8px; }
    .upload-zone p { color: var(--text-secondary); font-size: 0.85rem; margin: 0; }
    .upload-zone small { color: var(--text-muted); font-size: 0.75rem; }

    /* ── Tags hint ── */
    .field-hint {
        display: block;
        margin-top: 5px;
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    /* ── Submit card ── */
    .submit-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-card);
        padding: 20px;
    }

    .btn-submit {
        width: 100%;
        background: var(--accent);
        color: #fff;
        border: none;
        padding: 11px 22px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
    }

    .btn-submit:hover {
        background: #008f57;
        box-shadow: var(--shadow-glow);
        transform: translateY(-1px);
    }

    .submit-note {
        font-size: 0.78rem;
        color: var(--text-muted);
        text-align: center;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
</style>

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            <!-- Page Header -->
            <div class="page-header">
                <h2>Add New <span>Skill</span></h2>
                <a href="{{ route('admin.skills.index') }}" class="btn-back">
                    <i class="ti ti-arrow-left"></i> Back to Skills
                </a>
            </div>

            <!-- Validation Errors -->
            @if($errors->any())
            <div class="alert-light-danger">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            @if(session('success'))
            <div class="alert-light-success">
                <i class="ti ti-check-circle me-1"></i> {{ session('success') }}
            </div>
            @endif

            <form action="{{ route('admin.skills.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="row">
                    <!-- ── Left Column ── -->
                    <div class="col-lg-8">

                        <!-- Basic Information -->
                        <div class="section-card">
                            <div class="section-card-header">
                                <i class="ti ti-info-circle"></i>
                                <h5>Basic Information</h5>
                            </div>
                            <div class="section-card-body">
                                <div class="mb-3">
                                    <label class="form-label">Skill Name</label>
                                    <input type="text" name="name" class="form-control"
                                           placeholder="Enter skill name"
                                           value="{{ old('name') }}" required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" class="form-control"
                                              rows="4"
                                              placeholder="Write a short description…">{{ old('description') }}</textarea>
                                </div>

                                <div class="mb-0">
                                    <label class="form-label">Skill Image</label>
                                    <div class="upload-zone">
                                        <input type="file" name="image" accept="image/*">
                                        <i class="ti ti-cloud-upload"></i>
                                        <p>Click to upload or drag & drop</p>
                                        <small>PNG, JPG, WEBP — max 2MB</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Settings -->
                        <div class="section-card">
                            <div class="section-card-header">
                                <i class="ti ti-adjustments-horizontal"></i>
                                <h5>Settings</h5>
                            </div>
                            <div class="section-card-body">
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">Tags</label>
                                        <input type="text" name="tags" class="form-control"
                                               placeholder="php, laravel…"
                                               value="{{ old('tags') }}">
                                        <small class="field-hint">Separate with commas</small>
                                    </div>

                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">Status</label>
                                        <select name="status" class="form-select">
                                            <option value="draft"      {{ old('status') == 'draft'      ? 'selected' : '' }}>Draft</option>
                                            <option value="published"  {{ old('status') == 'published'  ? 'selected' : '' }}>Published</option>
                                            <option value="archived"   {{ old('status') == 'archived'   ? 'selected' : '' }}>Archived</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4 mb-0">
                                        <label class="form-label">Level</label>
                                        <select name="level" class="form-select">
                                            <option value="Beginner"     {{ old('level') == 'Beginner'     ? 'selected' : '' }}>Beginner</option>
                                            <option value="Intermediate" {{ old('level') == 'Intermediate' ? 'selected' : '' }}>Intermediate</option>
                                            <option value="Advanced"     {{ old('level') == 'Advanced'     ? 'selected' : '' }}>Advanced</option>
                                            <option value="Expert"       {{ old('level') == 'Expert'       ? 'selected' : '' }}>Expert</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- ── Right Column ── -->
                    <div class="col-lg-4">

                        <!-- Associations -->
                        <div class="section-card">
                            <div class="section-card-header">
                                <i class="ti ti-link"></i>
                                <h5>Associations</h5>
                            </div>
                            <div class="section-card-body">
                                <div class="mb-3">
                                    <label class="form-label">Talent</label>
                                    <select name="talent_id" class="form-select" required>
                                        <option value="">Select Talent</option>
                                        @foreach($talents as $talent)
                                        <option value="{{ $talent->id }}" {{ old('talent_id') == $talent->id ? 'selected' : '' }}>
                                            {{ $talent->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="mb-0">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $cat)
                                        <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>
                                            {{ $cat->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Submit -->
                        <div class="submit-card">
                            <button type="submit" class="btn-submit">
                                <i class="ti ti-check"></i> Create Skill
                            </button>
                            <p class="submit-note">
                                <i class="ti ti-lock" style="font-size:0.8rem;"></i>
                                Changes are saved immediately
                            </p>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    </div>
</div>

@endsection