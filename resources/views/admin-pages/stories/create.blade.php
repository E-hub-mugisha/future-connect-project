@extends('layouts.app')
@section('title', 'Create Story')
@section('content')

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
        --bg-deep: #0e1618;
        --bg-card: #131d1f;
        --bg-surface: #1a2628;
        --bg-input: #0f1c1e;
        --accent: #48d597;
        --accent-dim: rgba(0, 166, 103, 0.1);
        --accent-glow: rgba(0, 166, 103, 0.25);
        --text-primary: #e8f0ef;
        --text-secondary: #7a9a96;
        --text-muted: #4a6560;
        --border: rgba(0, 166, 103, 0.12);
        --border-focus: rgba(0, 166, 103, 0.5);
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

    /* Form Card */
    .form-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 12px 50px rgba(0,0,0,0.45);
    }

    .form-card-header {
        background: linear-gradient(135deg, rgba(0,166,103,0.08), transparent);
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .form-card-icon {
        width: 36px;
        height: 36px;
        background: var(--accent-dim);
        border: 1px solid rgba(0,166,103,0.25);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        font-size: 1rem;
    }

    .form-card-title {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
    }

    .form-card-body {
        padding: 2rem;
    }

    /* Form Sections */
    .form-section {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(0,166,103,0.07);
    }

    .form-section:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

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

    .section-label::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--border);
    }

    /* Custom Form Controls */
    .field-label {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        letter-spacing: 0.02em;
    }

    .field-label .required {
        color: var(--accent);
        margin-left: 2px;
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
    .form-textarea::placeholder {
        color: var(--text-muted);
    }

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

    .form-select-custom option {
        background: #131d1f;
        color: var(--text-primary);
    }

    .form-textarea {
        resize: vertical;
        min-height: 140px;
    }

    .form-file-wrap {
        position: relative;
    }

    .form-file-input {
        width: 100%;
        background: var(--bg-input);
        border: 1.5px dashed rgba(0,166,103,0.2);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text-muted);
        font-size: 0.82rem;
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

    .file-icon {
        font-size: 1.5rem;
        color: var(--accent);
        margin-bottom: 0.4rem;
        display: block;
    }

    .field-hint {
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-top: 0.4rem;
    }

    .mb-field { margin-bottom: 1.25rem; }

    /* Submit Footer */
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

    .btn-cancel:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }

    .btn-submit {
        background: var(--accent);
        border: none;
        color: #fff;
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
        box-shadow: 0 0 20px var(--accent-glow);
        letter-spacing: 0.01em;
    }

    .btn-submit:hover {
        background: #00bf75;
        transform: translateY(-1px);
        box-shadow: 0 0 30px var(--accent-glow);
    }

    /* Grid */
    .field-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
    }

    @media (max-width: 640px) {
        .field-row { grid-template-columns: 1fr; }
        .form-card-body { padding: 1.25rem; }
    }

    /* Summernote override */
    .note-editor.note-frame {
        background: var(--bg-input) !important;
        border: 1px solid var(--border) !important;
        border-radius: 12px !important;
        overflow: hidden;
    }

    .note-toolbar {
        background: rgba(0,166,103,0.06) !important;
        border-bottom: 1px solid var(--border) !important;
    }

    .note-editable {
        background: var(--bg-input) !important;
        color: var(--text-primary) !important;
        font-family: var(--font-body) !important;
    }
</style>

<div class="form-wrapper">

    <div class="form-header">
        <div>
            <h3>Add New Story</h3>
            <p>Fill in the details below to create and publish a story.</p>
        </div>
        <a href="{{ route('admin.stories.index') }}" class="back-btn">
            <i class="ti ti-arrow-left"></i> Back
        </a>
    </div>

    <div class="form-card">
        <div class="form-card-header">
            <div class="form-card-icon"><i class="ti ti-news"></i></div>
            <h5 class="form-card-title">Story Details</h5>
        </div>
        <div class="form-card-body">
            <form method="POST" action="{{ route('admin.stories.store') }}" enctype="multipart/form-data">
                @csrf

                <!-- Basic Info -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-info-circle"></i> Basic Info</div>

                    <div class="mb-field">
                        <label class="field-label">Story Title <span class="required">*</span></label>
                        <input type="text" name="title" class="form-input" placeholder="Enter a compelling story title" required>
                    </div>

                    <div class="field-row">
                        <div>
                            <label class="field-label">Talent <span class="required">*</span></label>
                            <select name="talent_id" class="form-select-custom" required>
                                <option value="">Select Talent</option>
                                @foreach($talents as $t)
                                    <option value="{{ $t->id }}">{{ $t->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div>
                            <label class="field-label">Category <span class="required">*</span></label>
                            <select name="category_id" class="form-select-custom" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $c)
                                    <option value="{{ $c->id }}">{{ $c->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-writing"></i> Content</div>
                    <div class="mb-field">
                        <label class="field-label">Story Content <span class="required">*</span></label>
                        <textarea name="content" class="form-control summernote" rows="6" required></textarea>
                    </div>
                </div>

                <!-- Media -->
                <div class="form-section">
                    <div class="section-label"><i class="ti ti-photo-video"></i> Media</div>
                    <div class="field-row">
                        <div>
                            <label class="field-label">Thumbnail</label>
                            <div class="form-file-wrap">
                                <div class="form-file-input">
                                    <input type="file" name="thumbnail" accept="image/*">
                                    <i class="ti ti-upload file-icon"></i>
                                    <div>Click to upload thumbnail</div>
                                </div>
                            </div>
                            <p class="field-hint">JPG, PNG up to 5MB</p>
                        </div>
                        <div>
                            <label class="field-label">Media URL</label>
                            <input type="url" name="media" class="form-input" placeholder="https://youtube.com/watch?v=...">
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
                            <input type="text" name="tags" class="form-input" placeholder="motivation, art, music...">
                        </div>
                        <div>
                            <label class="field-label">Status</label>
                            <select name="status" class="form-select-custom">
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="form-footer">
                    <a href="{{ route('admin.stories.index') }}" class="btn-cancel">Cancel</a>
                    <button type="submit" class="btn-submit">
                        <i class="ti ti-send"></i> Create Story
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>

@endsection

@push('styles')
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-lite.min.css" rel="stylesheet">
@endpush

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-lite.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.summernote').summernote({
                placeholder: 'Write the full story here...',
                tabsize: 2,
                height: 250,
                toolbar: [
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['fontsize', 'color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ]
            });

            // File input label update
            $('input[type="file"]').on('change', function() {
                const name = this.files[0]?.name || 'Click to upload thumbnail';
                $(this).closest('.form-file-input').find('div').text(name);
            });
        });
    </script>
@endpush