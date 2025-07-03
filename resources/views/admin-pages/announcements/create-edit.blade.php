@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="main-title mb-4">
                    <h2>{{ isset($announcement) ? 'Edit' : 'Create' }}
                        Announcement</h2>
                </div>
                <div class="settings-info bg-white">
                    <div class="settings-card">
                        <div class="settings-card-head">
                            <form
                                action="{{ isset($announcement) ? route('admin.announcements.update', $announcement->id) : route('admin.announcements.store') }}"
                                method="POST" enctype="multipart/form-data">
                                @csrf
                                @if(isset($announcement))
                                    @method('PUT')
                                @endif

                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" name="title" class="form-control"
                                        value="{{ old('title', $announcement->title ?? '') }}"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label for="content" class="form-label">Content</label>
                                    <textarea name="content" class="form-control" rows="4"
                                        required>{{ old('content', $announcement->content ?? '') }}</textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="image" class="form-label">Image</label>
                                    @if(isset($announcement) && $announcement->image)
                                        <div class="mb-2">
                                            <img src="{{ asset('storage/' . $announcement->image) }}"
                                                alt="Image" width="150">
                                        </div>
                                    @endif
                                    <input type="file" name="image" class="form-control">
                                </div>

                                <div class="mb-3">
                                    <label for="link" class="form-label">Link</label>
                                    <input type="text" name="link" class="form-control"
                                        value="{{ old('link', $announcement->link ?? '') }}">
                                </div>

                                <div class="form-check mb-3">
                                    <input type="checkbox" name="is_active" value="1" class="form-check-input"
                                        id="is_active"
                                        {{ old('is_active', $announcement->is_active ?? false) ? 'checked' : '' }}>
                                    <label class="form-check-label" for="is_active">Active</label>
                                </div>

                                <div class="mb-3">
                                    <label for="category_id" class="form-label">Category</label>
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

                                <button type="submit" class="btn btn-primary">
                                    {{ isset($announcement) ? 'Update' : 'Create' }}
                                    Announcement
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
