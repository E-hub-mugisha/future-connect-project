@extends('layouts.app')
@section('title', 'User Profile')
@section('content')

<!-- Page Content -->
<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="main-title mb-4">
                    <h4>My Profile</h4>
                </div>
                <div class="card profile-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <div class="d-flex align-items-center flex-shrink-0">
                                <span class="avatar avatar-lg"><img class="rounded-2" src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}" alt="img"></span>
                                <div class="ms-3">
                                    <h6 class="mb-1 d-inline-flex flex-wrap align-items-center">{{ $talent->name }}<span class="badge badge-success-transparent ms-3 rounded-pill">{{ $talent->stories_count ?? 0 }} Stories</span></h6>
                                    <p class="mb-2">{{ $talent->address }}</p>
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-star-filled me-2 text-warning"></i>Ratings {{ number_format($talent->feedback->avg('rating'), 1) }} ({{ $talent->feedback->count() }} Reviews)</p>
                                </div>
                            </div>
                            <div class="gap-2 d-flex">
                                <a role="button"
                                    tabIndex="0" class="btn btn-md btn-dark" data-bs-toggle="modal"
                                    data-bs-target="#talentEditModal{{ $talent->id }}"><i class="ti ti-user-edit me-1"></i>Edit Profile</a>
                                <a role="button"
                                    tabIndex="0" class="btn btn-md btn-primary"><i class="ti ti-phone me-1"></i>Contact Me</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card profile-details profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Personal Details</h5>
                    </div>
                    <div class="card-body personal-card">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Name</h6>
                                <p class="mb-0">{{ $talent->name }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Email</h6>
                                <p class="mb-0"><a href="mailto:{{ $talent->email }}">{{ $talent->email }}</a></p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Phone</h6>
                                <p class="mb-0">{{ $talent->phone }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Date</h6>
                                <p class="mb-0">{{ \Carbon\Carbon::parse($talent->created_at)->format('d M Y') }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Speaks</h6>
                                <p class="mb-0">{{ $talent->languages }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Member Since</h6>
                                <p class="mb-0">{{ \Carbon\Carbon::parse($talent->created_at)->format('d M Y') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-details profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Address Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Country</h6>
                                <p class="mb-0">United States</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">City</h6>
                                <p class="mb-0">California</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">State</h6>
                                <p class="mb-0">Los Angeles</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Address Line</h6>
                                <p class="mb-0">1234 Sunset Blvd, Apt 56B</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Postal Code</h6>
                                <p class="mb-0">90026</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">About Me</h5>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">
                            {{ $talent->description }}
                        </p>
                    </div>
                </div>
                <div class="card personal-card">
                    <div class="card-header">
                        <h5 class="mb-0">Skills</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap-wrap gap-2 ">
                            <div class="badge bg-light fw-medium fs-13 text-dark">
                                <i class="ti ti-point-filled me-1"></i> {{ $talent->skill }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card personal-card">
                    <div class="card-header">
                        <h5 class="mb-0">Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap-wrap gap-2 ">
                            <div class="badge bg-light fw-medium fs-13 text-dark">
                                <i class="ti ti-point-filled me-1"></i> {{ $talent->category->name ?? 'Uncategorized' }}
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="talentEditModal{{ $talent->id }}" tabindex="-1" aria-labelledby="talentEditModalLabel{{ $talent->id }}" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <form method="POST" action="{{ route('admin.talents.update', $talent->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="talentEditModalLabel{{ $talent->id }}">Edit Talent - {{ $talent->name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        {{-- Name --}}
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" class="form-control" value="{{ $talent->name }}" required>
                        </div>

                        {{-- Address --}}
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <input type="text" name="address" class="form-control" value="{{ $talent->address }}">
                        </div>

                        {{-- Phone --}}
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" name="phone" class="form-control" value="{{ $talent->phone }}">
                        </div>

                        {{-- Email --}}
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" value="{{ $talent->email }}">
                        </div>

                        {{-- Skill --}}
                        <div class="mb-3">
                            <label class="form-label">Skill</label>
                            <input type="text" name="skill" class="form-control" value="{{ $talent->skill }}" required>
                        </div>

                        {{-- Category --}}
                        <div class="mb-3">
                            <label class="form-label">Category</label>
                            <select name="category_id" class="form-select" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $category)
                                <option value="{{ $category->id }}" {{ $talent->category_id == $category->id ? 'selected' : '' }}>
                                    {{ $category->name }}
                                </option>
                                @endforeach
                            </select>
                        </div>

                        {{-- Story --}}
                        <div class="mb-3">
                            <label class="form-label">Story</label>
                            <textarea name="story" class="form-control" rows="3">{{ $talent->story }}</textarea>
                        </div>

                        {{-- Rating --}}
                        <div class="mb-3">
                            <label class="form-label">Rating (0–5)</label>
                            <input type="number" name="rating" min="0" max="5" class="form-control" value="{{ $talent->rating }}">
                        </div>

                        {{-- Language --}}
                        <div class="mb-3">
                            <label class="form-label">Language</label>
                            <input type="text" name="language" class="form-control" value="{{ $talent->language }}">
                        </div>

                        {{-- Image --}}
                        <div class="mb-3">
                            <label class="form-label">Image</label>
                            <input type="file" name="image" class="form-control">
                            @if($talent->image)
                            <img src="{{ asset('image/talents/' . $talent->image) }}" alt="Talent Image" class="img-thumbnail mt-2" width="100">
                            @endif
                        </div>

                        {{-- Description --}}
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea name="description" class="form-control" rows="3">{{ $talent->description }}</textarea>
                        </div>

                        {{-- Featured --}}
                        <div class="form-check mb-3">
                            <input type="checkbox" name="featured" class="form-check-input" id="featured{{ $talent->id }}" {{ $talent->featured ? 'checked' : '' }}>
                            <label class="form-check-label" for="featured{{ $talent->id }}">Featured</label>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Update Talent</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /Page Content -->
@endsection