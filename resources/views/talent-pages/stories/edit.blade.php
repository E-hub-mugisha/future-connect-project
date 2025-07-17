@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="main-title mb-4">
                    <h2>{{ isset($story) ? 'Edit' : 'Add' }}
                        Story</h2>
                </div>

                <div class="settings-info bg-white">
                    <div class="settings-card">
                        <div class="settings-card-head">
                            <form method="POST"
                                action="{{ isset($story) ? route('admin.stories.update', $story->id) : route('admin.stories.store') }}" enctype="multipart/form-data">
                                @csrf
                                @if(isset($story))
                                    @method('PUT')
                                @endif

                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input name="title" class="form-control"
                                        value="{{ old('title', $story->title ?? '') }}"
                                        required>
                                </div>

                                <div class="mb-3">
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

                                <div class="mb-3">
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

                                <div class="mb-3">
                                    <label class="form-label">Content</label>
                                    <textarea name="content" class="form-control" rows="4"
                                        required>{{ old('content', $story->content ?? '') }}</textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Thumbnail</label>
                                    <input type="file" name="thumbnail" class="form-control"
                                        value="{{ old('thumbnail', $story->thumbnail ?? '') }}">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Media URL</label>
                                    <input type="url" name="media" class="form-control"
                                        value="{{ old('media', $story->media ?? '') }}"
                                        placeholder="https://example.com/media-url">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Tags</label>
                                    <input name="tags" class="form-control"
                                        value="{{ old('tags', $story->tags ?? '') }}">
                                </div>

                                <div class="mb-3">
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

                                <button type="submit" class="btn btn-success">
                                    {{ isset($story) ? 'Update' : 'Create' }}
                                    Story
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection
