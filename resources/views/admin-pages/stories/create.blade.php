@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="main-title mb-4">
                    <h2>{{ 'Add' }}
                        Story</h2>
                </div>

                <div class="settings-info bg-white">
                    <div class="settings-card">
                        <div class="settings-card-head">
                            <form method="POST"
                                action="{{ route('admin.stories.store') }}" enctype="multipart/form-data">
                                @csrf

                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input name="title" class="form-control"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Talent</label>
                                    <select name="talent_id" class="form-select" required>
                                        <option value="">Select Talent</option>
                                        @foreach($talents as $t)
                                        <option value="{{ $t->id }}">
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
                                        <option value="{{ $c->id }}">
                                            {{ $c->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Content</label>
                                    <textarea name="content" class="form-control" rows="4"
                                        required></textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Thumbnail</label>
                                    <input type="file" name="thumbnail" class="form-control">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Media URL</label>
                                    <input type="url" name="media" class="form-control"
                                        placeholder="https://youtube.com/media-url">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Tags</label>
                                    <input name="tags" class="form-control">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select">
                                        <option value="pending">
                                            Pending</option>
                                        <option value="approved">
                                            Approved</option>
                                        <option value="rejected">
                                            Rejected</option>
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-success">
                                    {{ 'Create' }}
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
@endsection