@extends('layouts.app')
@section('title', isset($announcement) ? 'Edit' : 'Create')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h3 class="nk-block-title mb-4">{{ isset($announcement) ? 'Edit' : 'Create' }} Announcement</h3>

            <div class="nk-block nk-block-lg">
                <div class="card card-bordered shadow-sm">
                    <div class="card-inner">
                        <form action="{{ isset($announcement) ? route('admin.announcements.update', $announcement->id) : route('admin.announcements.store') }}"
                            method="POST" enctype="multipart/form-data">
                            @csrf
                            @if(isset($announcement))
                            @method('PUT')
                            @endif

                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" name="title" class="form-control"
                                    value="{{ old('title', $announcement->title ?? '') }}" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Content</label>
                                <textarea name="content" class="form-control" rows="5" required>{{ old('content', $announcement->content ?? '') }}</textarea>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Image</label>
                                    @if(isset($announcement) && $announcement->image)
                                    <div class="mb-2">
                                        <img src="{{ asset('storage/' . $announcement->image) }}"
                                            alt="Announcement Image" class="img-fluid rounded" style="max-height:120px;">
                                    </div>
                                    @endif
                                    <input type="file" name="image" class="form-control">
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Link</label>
                                    <input type="text" name="link" class="form-control"
                                        value="{{ old('link', $announcement->link ?? '') }}" placeholder="https://example.com">
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">-- Select Category --</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}"
                                            {{ old('category_id', $announcement->category_id ?? '') == $category->id ? 'selected' : '' }}>
                                            {{ $category->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-check mb-3">
                                <input type="checkbox" name="is_active" value="1" class="form-check-input"
                                    id="is_active" {{ old('is_active', $announcement->is_active ?? false) ? 'checked' : '' }}>
                                <label class="form-check-label" for="is_active">Active</label>
                            </div>

                            <!-- Submit -->
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    {{ isset($announcement) ? 'Update' : 'Create' }} Announcement
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