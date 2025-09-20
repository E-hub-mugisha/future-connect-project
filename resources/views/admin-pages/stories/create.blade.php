@extends('layouts.app')
@section('title', 'Create story')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="main-title mb-4">
                <h3>Add New Story</h3>
                <p class="text-muted">Fill in the details below to create and publish a story.</p>
            </div>

            <div class="nk-block nk-block-lg">
                <div class="card card-bordered shadow-sm">
                    <div class="card-inner">
                        <form method="POST" action="{{ route('admin.stories.store') }}" enctype="multipart/form-data">
                            @csrf

                            <!-- Title -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold">Story Title</label>
                                <input name="title" class="form-control form-control-lg" placeholder="Enter story title" required>
                            </div>

                            <!-- Talent & Category -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Talent</label>
                                    <select name="talent_id" class="form-select" required>
                                        <option value="">Select Talent</option>
                                        @foreach($talents as $t)
                                            <option value="{{ $t->id }}">{{ $t->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $c)
                                            <option value="{{ $c->id }}">{{ $c->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold">Content</label>
                                <textarea name="content" class="form-control summernote" rows="6" required></textarea>
                            </div>

                            <!-- Media -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Thumbnail</label>
                                    <input type="file" name="thumbnail" class="form-control">
                                    <small class="text-muted">Upload an image to represent the story.</small>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Media URL</label>
                                    <input type="url" name="media" class="form-control" placeholder="https://youtube.com/media-url">
                                    <small class="text-muted">Optional: Add a video or external media link.</small>
                                </div>
                            </div>

                            <!-- Tags & Status -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Tags</label>
                                    <input name="tags" class="form-control" placeholder="e.g. motivation, art, music">
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label class="form-label fw-semibold">Status</label>
                                    <select name="status" class="form-select">
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Submit -->
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success btn-lg">
                                    <em class="icon ni ni-send"></em> Create Story
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@push('styles')
    <!-- Summernote CSS -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-lite.min.css" rel="stylesheet">
@endpush

@push('scripts')
    <!-- Summernote JS -->
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
        });
    </script>
@endpush
