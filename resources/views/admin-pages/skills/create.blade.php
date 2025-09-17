@extends('layouts.app')

@section('content')
<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h3 class="nk-block-title mb-4">Add New Skill</h3>

            <form action="{{ route('admin.skills.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="row">
                    <!-- Left Column -->
                    <div class="col-lg-8">

                        <!-- Basic Information -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Basic Information</h5>
                            </div>
                            <div class="card-inner">
                                <!-- Name -->
                                <div class="mb-3">
                                    <label class="form-label">Skill Name</label>
                                    <input type="text" name="name" class="form-control" placeholder="Enter skill name" required>
                                </div>

                                <!-- Description -->
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" class="form-control" rows="4" placeholder="Write a short description..."></textarea>
                                </div>

                                <!-- Image -->
                                <div class="mb-3">
                                    <label class="form-label">Skill Image</label>
                                    <input type="file" name="image" class="form-control">
                                </div>
                            </div>
                        </div>

                        <!-- Associations -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Settings</h5>
                            </div>
                            <div class="row card-inner">
                                <!-- Tags -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Tags</label>
                                    <input type="text" name="tags" class="form-control" placeholder="e.g. php, laravel, javascript">
                                </div>

                                <!-- Status -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select">
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                        <option value="archived">Archived</option>
                                    </select>
                                </div>

                                <!-- Level -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Level</label>
                                    <select name="level" class="form-select">
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="col-lg-4">
                        <!-- Settings -->
                        <div class="card card-bordered mb-4">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Associations</h5>
                            </div>
                            <div class="card-inner">
                                <!-- Talent -->
                                <div class="mb-3">
                                    <label class="form-label">Talent</label>
                                    <select name="talent_id" class="form-select" required>
                                        <option value="">Select Talent</option>
                                        @foreach($talents as $talent)
                                        <option value="{{ $talent->id }}">{{ $talent->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <!-- Category -->
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $cat)
                                        <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                        </div>

                        <!-- Submit -->
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-lg">Create Skill</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>
@endsection