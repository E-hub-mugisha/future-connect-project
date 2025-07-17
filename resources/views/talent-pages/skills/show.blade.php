@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="main-title mb-4">
                    <h4>{{ $story->title }}</h4>
                </div>
                <div class="card profile-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <div class="d-flex align-items-center flex-shrink-0">
                                <span class="avatar avatar-lg"><img class="rounded-2" src="{{ $story->thumbnail ? asset($story->thumbnail) : asset('assets/img/user/profile.jpg') }}" alt="img"></span>
                                <div class="ms-3">
                                    <h6 class="mb-1 d-inline-flex flex-wrap align-items-center">{{ $story->title }}</h6>
                                    <p class="mb-2">{{ $story->category->name }}</p>
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-star-filled me-2 text-warning"></i>Ratings {{ number_format($story->comments->avg('rating'), 1) }} ({{ $story->comments->count() }} Comments)</p>
                                </div>
                            </div>
                            <a href="{{ route('admin.stories.edit', $story->id) }}" class="btn btn-lg btn-dark"><i class="ti ti-user-edit me-1"></i>Edit Story</a>
                        </div>
                    </div>
                </div>
                <div class="card profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Talent Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Name</h6>
                                <p class="mb-0">{{ $story->talent->name }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Email</h6>
                                <p class="mb-0">{{ $story->talent->email }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Phone</h6>
                                <p class="mb-0">{{ $story->talent->phone }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Date</h6>
                                <p class="mb-0">{{ $story->created_at->format('d M Y') }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Speaks</h6>
                                <p class="mb-0">English, Portugese</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Member Since</h6>
                                <p class="mb-0">{{ $story->talent->created_at->format('d M Y') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-details">
                    <div class="card-header">
                        <h5 class="mb-0">Other Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6>Category</h6>
                                <p class="mb-0">{{ $story->category->name }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Status</h6>
                                <p class="mb-0">{{ $story->status }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6>Tags</h6>
                                <p class="mb-0">{{ $story->tags }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-0">
                    <div class="card-header">
                        <h6 class="mb-0">About Me</h6>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">
                            {{ $story->content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection