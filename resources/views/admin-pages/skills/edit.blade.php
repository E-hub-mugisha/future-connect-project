@extends('layouts.app')

@section('content')
<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h3 class="nk-block-title mb-4">Edit Skill</h3>
            
            <form action="{{ route('admin.skills.update', $skill->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

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
                                    <input type="text" name="name" class="form-control" 
                                           value="{{ old('name', $skill->name) }}" required>
                                </div>

                                <!-- Description -->
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" class="form-control" rows="4">{{ old('description', $skill->description) }}</textarea>
                                </div>

                                <!-- Image -->
                                <div class="mb-3">
                                    <label class="form-label">Skill Image</label>
                                    <input type="file" name="image" class="form-control">
                                    @if($skill->image)
                                        <div class="mt-2">
                                            <img src="{{ asset('storage/' . $skill->image) }}" 
                                                 alt="Current Image" class="img-fluid rounded" style="max-height:120px;">
                                        </div>
                                    @endif
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
                                    <input type="text" name="tags" class="form-control" 
                                           value="{{ old('tags', $skill->tags) }}" 
                                           placeholder="e.g. php, laravel, javascript">
                                </div>

                                <!-- Status -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Status</label>
                                    <select name="status" class="form-select">
                                        <option value="draft" {{ $skill->status == 'draft' ? 'selected' : '' }}>Draft</option>
                                        <option value="published" {{ $skill->status == 'published' ? 'selected' : '' }}>Published</option>
                                        <option value="archived" {{ $skill->status == 'archived' ? 'selected' : '' }}>Archived</option>
                                    </select>
                                </div>

                                <!-- Level -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Level</label>
                                    <select name="level" class="form-select">
                                        <option value="Beginner" {{ $skill->level == 'Beginner' ? 'selected' : '' }}>Beginner</option>
                                        <option value="Intermediate" {{ $skill->level == 'Intermediate' ? 'selected' : '' }}>Intermediate</option>
                                        <option value="Advanced" {{ $skill->level == 'Advanced' ? 'selected' : '' }}>Advanced</option>
                                        <option value="Expert" {{ $skill->level == 'Expert' ? 'selected' : '' }}>Expert</option>
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
                                            <option value="{{ $talent->id }}" {{ $skill->talent_id == $talent->id ? 'selected' : '' }}>
                                                {{ $talent->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>

                                <!-- Category -->
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $cat)
                                            <option value="{{ $cat->id }}" {{ $skill->category_id == $cat->id ? 'selected' : '' }}>
                                                {{ $cat->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Submit -->
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-lg">Update Skill</button>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
</div>
@endsection
