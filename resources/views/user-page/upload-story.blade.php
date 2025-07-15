@extends('layouts.guest')
@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar breadcrumb-bar-info">

    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Upload Story</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title mb-0">
                    Share Your Story
                </h2>
            </div>
        </div>
    </div>

</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="page-content">
    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-10">
                <div class="marketing-section gig-post">
                    <div class="gigs-step position-relative z-1">
                        <ul>
                            <li>
                                <span><img src="{{ asset('assets/img/icons/book-01.svg') }}"
                                        alt="img"></span>
                                <p>Step 01</p>
                                <h6>Write Your Story</h6>
                            </li>
                            <li>
                                <span><img src="{{ asset('assets/img/icons/book-02.svg') }}"
                                        alt="img"></span>
                                <p>Step 02</p>
                                <h6>Upload Media</h6>
                            </li>
                            <li>
                                <span><img src="{{ asset('assets/img/icons/book-03.svg') }}"
                                        alt="img"></span>
                                <p>Step 03</p>
                                <h6>Select Skills</h6>
                            </li>
                            <li>
                                <span><img src="{{ asset('assets/img/icons/book-04.svg') }}"
                                        alt="img"></span>
                                <p>Step 04</p>
                                <h6>Submit for Review</h6>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- General -->
            <div class="col-lg-10">
                <div class="add-property-wrap" style="background: var(--white);">
                    <div class="property-info">
                        <h5 class="mb-1">Story Details</h5>
                        <p>Tell us your inspiring journey to be featured on Future Connect</p>
                    </div>

                    <form action="{{ route('user.upload-story.store') }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="row">

                            <div class="col-md-12">
                                <div class="form-wrap">
                                    <label class="col-form-label">Story Title<span
                                            class="text-danger ms-1">*</span></label>
                                    <input type="text" name="title" class="form-control mb-2"
                                        placeholder="E.g. From Village Roots to Tech Stars"
                                        value="{{ old('title') }}" required>
                                    <span><i class="ti ti-info-circle me-1"></i>Minimum 10 characters</span>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-wrap">
                                    <label class="col-form-label">Your Story<span
                                            class="text-danger ms-1">*</span></label>
                                    <textarea name="description" class="form-control mb-2" rows="6"
                                        placeholder="Describe your journey, struggles, breakthroughs, and achievements..."
                                        required>{{ old('description') }}</textarea>
                                    <span><i class="ti ti-info-circle me-1"></i>Minimum 180 characters</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Skills Highlighted</label>
                                    <div class="input-block input-block-tagsinput mb-1">
                                        <input type="text" data-role="tagsinput" class="input-tags form-control"
                                            name="skills" value="{{ old('skills') }}" id="skills">
                                    </div>
                                    <span>Enter comma-separated skills</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Story Category<span
                                            class="text-danger ms-1">*</span></label>
                                    <select name="category_id" class="select2 form-control" required>
                                        <option value="">Select</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}"
                                            {{ old('category_id') == $category->id ? 'selected' : '' }}>
                                            {{ $category->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-wrap">
                                    <label class="col-form-label">Upload Photo or Thumbnail</label>
                                    <input type="file" name="thumbnail" class="form-control">
                                    <span>Accepted formats: jpg, png (Max size: 50MB)</span>
                                </div>
                            </div>

                        </div>

                        <!-- Optional Section -->
                        <div class="col-md-12">
                            <div class="form-wrap">
                                <label class="col-form-label">Upload video link</label>
                                <input type="text" name="media" class="form-control">
                                <span>Accepted formats: mp4, avi (Max size: 50MB)</span>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-12 mt-3">
                                <button type="submit" class="btn btn-primary w-100">Submit Story</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /General -->

        </div>

    </div>
</div>
<!-- /Page Content -->


@endsection