@extends('layouts.app')
@section('title', 'Edit Story')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg-deep: #0e1618;
        --bg-card: #131d1f;
        --bg-surface: #1a2628;
        --bg-input: #0f1c1e;
        --accent: #00a667;
        --accent-dim: rgba(0, 166, 103, 0.1);
        --accent-glow: rgba(0, 166, 103, 0.25);
        --text-primary: #e8f0ef;
        --text-secondary: #7a9a96;
        --text-muted: #4a6560;
        --border: rgba(0, 166, 103, 0.12);
        --border-focus: rgba(0, 166, 103, 0.5);
        --warning: #e0a230;
        --font-display: 'Sora', sans-serif;
        --font-body: 'DM Sans', sans-serif;
    }

    .form-wrapper {
        background: var(--bg-deep);
        min-height: 100vh;
        padding: 2rem 1.5rem;
        font-family: var(--font-body);
    }

    .form-header {
        margin-bottom: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .form-header h3 {
        font-family: var(--font-display);
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 0.3rem;
        letter-spacing: -0.02em;
    }

    .form-header p {
        color: var(--text-muted);
        font-size: 0.83rem;
        margin: 0;
    }

    .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.82rem;
        color: var(--text-secondary);
        text-decoration: none;
        padding: 0.45rem 1rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        transition: all 0.15s ease;
        white-space: nowrap;
    }

    .back-btn:hover {
        color: var(--text-primary);
        border-color: var(--border-focus);
    }

    /* Edit indicator */
    .edit-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.3rem 0.9rem;
        background: rgba(224,162,48,0.1);
        border: 1px solid rgba(224,162,48,0.25);
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--warning);
        margin-bottom: 0.5rem;
    }

    /* Form Card */
    .form-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 12px 50px rgba(0,0,0,0.45);
    }

    .form-card-header {
        background: linear-gradient(135deg, rgba(224,162,48,0.07), transparent);
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .form-card-icon {
        width: 36px;
        height: 36px;
        background: rgba(224,162,48,0.1);
        border: 1px solid rgba(224,162,48,0.25);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--warning);
        font-size: 1rem;
    }

    .form-card-title {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
    }

    .form-card-subtitle {
        font-size: 0.78rem;
        color: var(--text-muted);
        margin: 0;
    }

    .form-card-body { padding: 2rem; }

    /* Form Sections */
    .form-section {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(0,166,103,0.07);
    }

    .form-section:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

    .section-label {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }

    /* Form Controls */
    .field-label {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        letter-spacing: 0.02em;
    }

    .form-input,
    .form-select-custom,
    .form-textarea {
        width: 100%;
        background: var(--bg-input);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 0.75rem 1rem;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-size: 0.875rem;
        transition: all 0.2s ease;
        outline: none;
        -webkit-appearance: none;
    }

    .form-input::placeholder,
    .form-textarea::placeholder { color: var(--text-muted); }

    .form-input:focus,
    .form-select-custom:focus,
    .form-textarea:focus {
        border-color: var(--border-focus);
        background: rgba(0, 166, 103, 0.04);
        box-shadow: 0 0 0 3px rgba(0,166,103,0.08);
    }

    .form-select-custom {
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a6560' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        padding-right: 2.5rem;
    }

    .form-select-custom option { background: #131d1f; color: var(--text-primary); }
    .form-textarea { resize: vertical; min-height: 140px; }

    /* Thumbnail preview */
    .thumbnail-preview {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--bg-input);
        margin-bottom: 0.75rem;
        position: relative;
    }

    .thumbnail-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .thumbnail-preview-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--text-muted);
        font-size: 0.8rem;
        gap: 0.4rem;
    }

    .form-file-wrap { position: relative; }

    .form-file-input {
        width: 100%;
        background: var(--bg-input);
        border: 1.5px dashed rgba(0,166,103,0.2);
        border-radius: 12px;
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text-muted);
        font-size: 0.82rem;
        position: relative;
    }

    .form-file-input:hover {
        border-color: var(--border-focus);
        background: var(--accent-dim);
        color: var(--text-secondary);
    }

    .form-file-input input[type="file"] {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .field-hint { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.4rem; }
    .mb-field { margin-bottom: 1.25rem; }

    /* Footer */
    .form-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.75rem;
        padding-top: 1.75rem;
        border-top: 1px solid var(--border);
        margin-top: 2rem;
    }

    .btn-cancel {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-secondary);
        padding: 0.65rem 1.5rem;
        border-radius: 12px;
        font-size: 0.875rem;
        font-family: var(--font-body);
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.15s ease;
    }

    .btn-cancel:hover { border-color: var(--border-focus); color: var(--text-primary); }

    .btn-submit {
        background: var(--warning);
        border: none;
        color: #0e1618;
        padding: 0.65rem 2rem;
        border-radius: 12px;
        font-size: 0.875rem;
        font-family: var(--font-body);
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
        box-shadow: 0 0 20px rgba(224,162,48,0.25);
        letter-spacing: 0.01em;
    }

    .btn-submit:hover {
        background: #f0b233;
        transform: translateY(-1px);
    }

    .field-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
    }

    @media (max-width: 640px) {
        .field-row { grid-template-columns: 1fr; }
        .form-card-body { padding: 1.25rem; }
    }
</style>

<div class="form-wrapper">

    <div class="form-header">
        <div>
            <div class="edit-badge"><i class="ti ti-pencil"></i> Edit Mode</div>
            <h3>Edit Story</h3>
            <p>Update the details below to modify this story.</p>
        </div>
        <a href="{{ route('admin.stories.index') }}" class="back-btn">
            <i class="ti ti-arrow-left"></i> Back
        </a>
    </div>

    <div class="form-card">
        <div class="form-card-header">
            <div class="form-card-icon"><i class="ti ti-edit"></i></div>
            <div>
                <h5 class="form-card-title">{{ $story->title }}</h5>
                <p class="form-card-subtitle">Editing story #{{ $story->id }}</p>
            </div>
        </div>
        <div class="form-card-body">
            <form method="POST" action="{{ route('admin.stories.update', $story->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <!-- Basic Info -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-info-circle"></i> Basic Info</div>

                    <div class="mb-field">
                        <label class="field-label">Story Title</label>
                        <input type="text" name="title" class="form-input"
                            value="{{ old('title', $story->title ?? '') }}" required>
                    </div>

                    <div class="field-row">
                        <div>
                            <label class="field-label">Talent</label>
                            <select name="talent_id" class="form-select-custom" required>
                                <option value="">Select Talent</option>
                                @foreach($talents as $t)
                                <option value="{{ $t->id }}"
                                    {{ old('talent_id', $story->talent_id ?? '') == $t->id ? 'selected' : '' }}>
                                    {{ $t->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <label class="field-label">Category</label>
                            <select name="category_id" class="form-select-custom" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $c)
                                <option value="{{ $c->id }}"
                                    {{ old('category_id', $story->category_id ?? '') == $c->id ? 'selected' : '' }}>
                                    {{ $c->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-writing"></i> Content</div>
                    <div class="mb-field">
                        <label class="field-label">Story Content</label>
                        <textarea name="content" class="form-textarea" rows="6" required>{{ old('content', $story->content ?? '') }}</textarea>
                    </div>
                </div>

                <!-- Media -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-photo-video"></i> Media</div>
                    <div class="field-row">
                        <div>
                            <label class="field-label">Thumbnail</label>
                            @if($story->thumbnail)
                            <div class="thumbnail-preview">
                                <img src="{{ asset($story->thumbnail) }}" alt="Current thumbnail" id="thumb-preview">
                            </div>
                            @else
                            <div class="thumbnail-preview">
                                <div class="thumbnail-preview-placeholder">
                                    <i class="ti ti-photo" style="font-size:1.5rem"></i>
                                    <span>No thumbnail</span>
                                </div>
                            </div>
                            @endif
                            <div class="form-file-wrap">
                                <div class="form-file-input" id="file-label">
                                    <input type="file" name="thumbnail" accept="image/*" id="thumb-input">
                                    <i class="ti ti-upload" style="font-size:1rem; display:block; margin-bottom:3px; color:var(--accent)"></i>
                                    Replace thumbnail
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="field-label">Media URL</label>
                            <input type="url" name="media" class="form-input"
                                value="{{ old('media', $story->media ?? '') }}"
                                placeholder="https://youtube.com/watch?v=...">
                            <p class="field-hint">Optional: YouTube or external video link</p>
                        </div>
                    </div>
                </div>

                <!-- Meta -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-tags"></i> Tags & Status</div>
                    <div class="field-row">
                        <div>
                            <label class="field-label">Tags</label>
                            <input type="text" name="tags" class="form-input"
                                value="{{ old('tags', $story->tags ?? '') }}"
                                placeholder="motivation, art, music...">
                        </div>
                        <div>
                            <label class="field-label">Status</label>
                            <select name="status" class="form-select-custom">
                                @foreach(['pending','approved','rejected','published'] as $statusOption)
                                <option value="{{ $statusOption }}"
                                    {{ old('status', $story->status ?? '') == $statusOption ? 'selected' : '' }}>
                                    {{ ucfirst($statusOption) }}
                                </option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="form-footer">
                    <a href="{{ route('admin.stories.index') }}" class="btn-cancel">Cancel</a>
                    <button type="submit" class="btn-submit">
                        <i class="ti ti-device-floppy"></i> Update Story
                    </button>
                </div>

            </form>
        </div>
    </div>

</div>

<script>
document.getElementById('thumb-input')?.addEventListener('change', function() {
    if (this.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            const existing = document.getElementById('thumb-preview');
            if (existing) existing.src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
        document.getElementById('file-label').querySelector('span') &&
            (document.getElementById('file-label').lastChild.textContent = this.files[0].name);
    }
});
</script>

@endsection