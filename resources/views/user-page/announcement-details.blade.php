@extends('layouts.guest')

@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar">

    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Announcement</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    {{ $announcement->title }}
                </h2>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Announcement Content -->
<section class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div class="card shadow-sm border-0 rounded-4 p-4">
                    <div class="mb-3">
                        <span class="badge {{ $announcement->is_active ? 'bg-success' : 'bg-secondary' }}">
                            {{ $announcement->is_active ? 'Active' : 'Inactive' }}
                        </span>
                        <span class="badge bg-info text-dark ms-2">
                            {{ $announcement->category->name }}
                        </span>
                        <span class="text-muted float-end small">By {{ $announcement->user->name }}</span>
                    </div>

                    <h3 class="fw-semibold mb-3">{{ $announcement->title }}</h3>

                    @if($announcement->image)
                        <img src="{{ asset('storage/' . $announcement->image) }}" alt="Announcement Image" class="img-fluid rounded mb-4 shadow-sm" style="max-height: 400px; object-fit: cover;">
                    @else
                        <img src="{{ asset('assets/img/announcement/image.jpg') }}" alt="Default Image" class="img-fluid rounded mb-4 shadow-sm">
                    @endif

                    <div class="announcement-content">
                        <p>{!! nl2br(e($announcement->content)) !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Announcement Content -->

@endsection
