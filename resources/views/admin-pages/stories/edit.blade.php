@extends('layouts.app')

@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="main-title mb-4">
                <h3>Edit Story</h3>
                <p class="text-muted">Fill in the details below to create and publish a story.</p>
            </div>

            <div class="nk-block nk-block-lg">
                <div class="card card-bordered shadow-sm">
                    <div class="card-inner">
                        <form method="POST"
                            action="{{ route('admin.stories.update', $story->id) }}" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            <div class="mb-4">
                                <label class="form-label">Title</label>
                                <input name="title" class="form-control"
                                    value="{{ old('title', $story->title ?? '') }}"
                                    required>
                            </div>

                            <!-- Talent & Category -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Talent</label>
                                    <select name="talent_id" class="form-select" required>
                                        <option value="">Select Talent</option>
                                        @foreach($talents as $t)
                                        <option value="{{ $t->id }}"
                                            {{ (old('talent_id', $story->talent_id ?? '') == $t->id) ? 'selected' : '' }}>
                                            {{ $t->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $c)
                                        <option value="{{ $c->id }}"
                                            {{ (old('category_id', $story->category_id ?? '') == $c->id) ? 'selected' : '' }}>
                                            {{ $c->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Content</label>
                                <textarea name="content" class="form-control" rows="4"
                                    required>{{ old('content', $story->content ?? '') }}</textarea>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Thumbnail</label>
                                    <input type="file" name="thumbnail" class="form-control"
                                        value="{{ old('thumbnail', $story->thumbnail ?? '') }}">
                                </div>

                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Media URL</label>
                                    <input type="url" name="media" class="form-control"
                                        value="{{ old('media', $story->media ?? '') }}"
                                        placeholder="https://example.com/media-url">
                                </div>
                            </div>
                            <!-- Tags & Status -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Tags</label>
                                    <input name="tags" class="form-control"
                                        value="{{ old('tags', $story->tags ?? '') }}">
                                </div>

                                <div class="col-md-6 mb-4">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select">
                                        <option value="pending"
                                            {{ (old('status', $story->status ?? '') == 'pending') ? 'selected' : '' }}>
                                            Pending</option>
                                        <option value="approved"
                                            {{ (old('status', $story->status ?? '') == 'approved') ? 'selected' : '' }}>
                                            Approved</option>
                                        <option value="rejected"
                                            {{ (old('status', $story->status ?? '') == 'rejected') ? 'selected' : '' }}>
                                            Rejected</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Submit -->
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">
                                    {{ isset($story) ? 'Update' : 'Create' }}
                                    Story
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