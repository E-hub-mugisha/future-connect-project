@extends('layouts.app')

@section('content')
<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="main-title mb-4">
                    <h2>Announcement Details</h2>
                </div>

                <div class="card mb-4">
                    <div class="card-body">

                        <h5 class="card-title">{{ $announcement->title }}</h5>

                        <div class="mb-3">
                            <strong>Category:</strong>
                            {{ $announcement->category->name ?? 'N/A' }}
                        </div>

                        <div class="mb-3">
                            <strong>Content:</strong>
                            <p>{{ $announcement->content }}</p>
                        </div>

                        @if($announcement->image)
                            <div class="mb-3">
                                <strong>Image:</strong><br>
                                <img src="{{ asset('image/announcements/' . $announcement->image) }}"
                                    alt="Announcement Image" width="250">
                            </div>
                        @endif

                        @if($announcement->link)
                            <div class="mb-3">
                                <strong>Link:</strong>
                                <a href="{{ $announcement->link }}" target="_blank">{{ $announcement->link }}</a>
                            </div>
                        @endif

                        <div class="mb-3">
                            <strong>Status:</strong>
                            {{ $announcement->is_active ? 'Active' : 'Inactive' }}
                        </div>

                        <div class="mb-3">
                            <strong>Created By:</strong>
                            {{ $announcement->user->name ?? 'N/A' }}
                        </div>

                        <div class="mb-3">
                            <strong>Created At:</strong>
                            {{ $announcement->created_at->format('d M Y, H:i') }}
                        </div>

                    </div>
                </div>

                <a href="{{ route('admin.announcements.index') }}" class="btn btn-secondary">Back to
                    List</a>
            </div>
        </div>
    </div>
</div>
@endsection
