@extends('layouts.app')

@section('content')
<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h3 class="nk-block-title mb-4">Announcement Details</h3>

            <div class="row">
                <!-- Main Content -->
                <div class="col-lg-8">
                    <div class="card card-bordered mb-4">
                        <div class="card-header">
                            <h5 class="card-title mb-0">{{ $announcement->title }}</h5>
                        </div>
                        <div class="card-inner">
                            <div class="mb-3">
                                <strong>Category:</strong> {{ $announcement->category->name ?? 'N/A' }}
                            </div>

                            <div class="mb-3">
                                <strong>Content:</strong>
                                <p class="text-muted">{{ $announcement->content }}</p>
                            </div>

                            @if($announcement->image)
                                <div class="mb-3">
                                    <strong>Image:</strong><br>
                                    <img src="{{ asset('image/announcements/' . $announcement->image) }}" 
                                         alt="Announcement Image" class="img-fluid rounded shadow-sm" style="max-height:250px;">
                                </div>
                            @endif

                            @if($announcement->link)
                                <div class="mb-3">
                                    <strong>Link:</strong>
                                    <a href="{{ $announcement->link }}" target="_blank" class="text-primary">{{ $announcement->link }}</a>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Sidebar Info -->
                <div class="col-lg-4">
                    <div class="card card-bordered mb-4">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Meta Info</h5>
                        </div>
                        <div class="card-inner">
                            <div class="mb-3">
                                <strong>Status:</strong>
                                <span class="badge {{ $announcement->is_active ? 'bg-success' : 'bg-secondary' }}">
                                    {{ $announcement->is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </div>

                            <div class="mb-3">
                                <strong>Created By:</strong>
                                <p class="text-muted mb-0">{{ $announcement->user->name ?? 'N/A' }}</p>
                            </div>

                            <div class="mb-3">
                                <strong>Created At:</strong>
                                <p class="text-muted mb-0">{{ $announcement->created_at->format('d M Y, H:i') }}</p>
                            </div>

                            <div class="d-grid">
                                <a href="{{ route('admin.announcements.index') }}" class="btn btn-outline-secondary btn-lg">
                                    <em class="icon ni ni-arrow-left"></em> Back to List
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection
