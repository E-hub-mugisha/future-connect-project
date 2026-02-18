@extends('layouts.guest')
@section('title', 'Share Your Story')
@section('content')

<style>
    .story-card {
        border-radius: 1.3rem;
        background: #afafaf;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        transition: .3s ease;
        border: 1px solid #f0f3f7;
    }

    .story-card:hover {
        box-shadow: 0 14px 40px rgba(0,0,0,0.08);
    }

    .section-heading h5 {
        font-weight: 700;
        color: #1a2537;
    }

    .section-heading p {
        color: #6c7a8a;
        margin-top: -3px;
    }

    .form-wrap label {
        font-weight: 600;
        margin-bottom: .3rem;
        color: #1f2d3d;
    }

    .form-control, select, textarea {
        border-radius: 0.7rem !important;
        border: 1px solid #d8e1eb;
        box-shadow: none !important;
        padding: .75rem .9rem;
    }

    .form-control:focus {
        border-color: #4b8df7;
        box-shadow: 0 0 0 2px rgba(75, 141, 247, 0.2) !important;
    }

    .action-btn {
        border-radius: 0.8rem;
        font-size: 1rem;
        padding: .75rem;
        font-weight: 600;
    }

    .subtext {
        font-size: .85rem;
        color: #8694a6;
    }
</style>

<div class="page-content">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-lg-10">

                <div class="story-card">

                    <!-- Section Title -->
                    <div class="section-heading mb-4">
                        <h5>Share Your Story</h5>
                        <p>Inspire others by telling your journey to success on Future Connect.</p>
                    </div>

                    <!-- Form -->
                    <form action="{{ route('user.upload-story.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="row">

                            <!-- Story Title -->
                            <div class="col-md-12 mb-3">
                                <div class="form-wrap">
                                    <label>Story Title <span class="text-danger">*</span></label>
                                    <input type="text" name="title" class="form-control"
                                        placeholder="E.g. From Village Roots to Tech Innovator"
                                        value="{{ old('title') }}" required>
                                    <span class="subtext"><i class="ti ti-info-circle me-1"></i>Minimum 10 characters</span>
                                </div>
                            </div>

                            <!-- Story Description -->
                            <div class="col-md-12 mb-3">
                                <div class="form-wrap">
                                    <label>Your Story <span class="text-danger">*</span></label>
                                    <textarea name="description" class="form-control" rows="6"
                                        placeholder="Describe your journey, challenges, turning points, and achievements..."
                                        required>{{ old('description') }}</textarea>
                                    <span class="subtext"><i class="ti ti-info-circle me-1"></i>Minimum 180 characters</span>
                                </div>
                            </div>

                            <!-- Skills -->
                            <div class="col-md-6 mb-3">
                                <div class="form-wrap">
                                    <label>Skills Highlighted</label>
                                    <input type="text" data-role="tagsinput" class="form-control"
                                        name="skills" value="{{ old('skills') }}" id="skills">
                                    <span class="subtext">Enter comma-separated skills</span>
                                </div>
                            </div>

                            <!-- Category -->
                            <div class="col-md-6 mb-3">
                                <div class="form-wrap">
                                    <label>Story Category <span class="text-danger">*</span></label>
                                    <select name="category_id" class="select2 form-control" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}" {{ old('category_id') == $category->id ? 'selected' : '' }}>
                                            {{ $category->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <!-- Thumbnail -->
                            <div class="col-md-12 mb-3">
                                <div class="form-wrap">
                                    <label>Upload Thumbnail Image</label>
                                    <input type="file" name="thumbnail" class="form-control">
                                    <span class="subtext">Formats: jpg, png – Max 50MB</span>
                                </div>
                            </div>

                            <!-- Video Link -->
                            <div class="col-md-12 mb-3">
                                <div class="form-wrap">
                                    <label>Video Link (Optional)</label>
                                    <input type="text" name="media" class="form-control"
                                           placeholder="Paste video link (e.g. YouTube)">
                                    <span class="subtext">Supported: YouTube, Vimeo, mp4, avi</span>
                                </div>
                            </div>

                        </div>

                        <!-- Submit -->
                        <div class="mt-3">
                            <button type="submit" class="btn btn-primary w-100 action-btn">
                                Submit Your Story
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    </div>
</div>

@endsection
