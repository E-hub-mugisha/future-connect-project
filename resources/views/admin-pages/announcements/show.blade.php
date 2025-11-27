@extends('layouts.app')
@section('title', $announcement->title)
@section('content')

<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- ===================== PAGE HEADER ===================== --}}
            <div class="d-flex justify-content-between align-items-start mb-4">

                <div>
                    <h3 class="nk-block-title mb-1">📢 Announcement Details</h3>
                    <span class="text-muted small">View full announcement information</span>
                </div>

                <div class="d-flex gap-2">

                    {{-- Back --}}
                    <a href="{{ route('admin.announcements.index') }}"
                        class="btn btn-outline-primary btn-sm">
                        <em class="icon ni ni-arrow-left"></em> Back
                    </a>

                    {{-- Edit --}}
                    <a href="{{ route('admin.announcements.edit', $announcement->id) }}"
                        class="btn btn-outline-primary btn-sm">
                        <em class="icon ni ni-edit"></em> Edit
                    </a>

                    {{-- Activate / Deactivate --}}
                    @if(!$announcement->is_active)
                        <form action="{{ route('admin.announcements.activate', $announcement->id) }}" method="POST">
                            @csrf @method('PUT')
                            <button type="submit" class="btn btn-success btn-sm">
                                <em class="icon ni ni-check-circle"></em> Activate
                            </button>
                        </form>
                    @else
                        <form action="{{ route('admin.announcements.deactivate', $announcement->id) }}" method="POST">
                            @csrf @method('PUT')
                            <button type="submit" class="btn btn-secondary btn-sm">
                                <em class="icon ni ni-minus-circle"></em> Deactivate
                            </button>
                        </form>
                    @endif

                    {{-- Delete --}}
                    <button class="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteAnnouncementModal">
                        <em class="icon ni ni-trash"></em>
                    </button>

                </div>
            </div>


            {{-- ===================== MAIN CARD ===================== --}}
            <div class="card shadow-sm border-0">
                <div class="card-header bg-white border-bottom">
                    <h5 class="card-title mb-0 text-primary fw-bold">
                        {{ $announcement->title }}
                    </h5>
                </div>

                <div class="card-body">

                    {{-- ======== META INFORMATION ======== --}}
                    <div class="row g-4 mb-4">

                        <div class="col-md-4">
                            <div class="border rounded p-3 bg-light">
                                <strong class="text-dark">🧑 Created By:</strong>
                                <p class="text-muted small mb-0">{{ $announcement->user->name ?? 'N/A' }}</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="border rounded p-3 bg-light">
                                <strong class="text-dark">📂 Category:</strong>
                                <p class="text-muted small mb-0">{{ $announcement->category->name ?? 'N/A' }}</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="border rounded p-3 bg-light">
                                <strong class="text-dark">📅 Created At:</strong>
                                <p class="text-muted small mb-0">
                                    {{ $announcement->created_at->format('d M Y, H:i') }}
                                </p>
                            </div>
                        </div>

                    </div>

                    {{-- ======== STATUS BADGE ======== --}}
                    <div class="mb-4">
                        <strong>Status:</strong>
                        <span class="badge rounded-pill px-3 py-2
                            {{ $announcement->is_active ? 'bg-success' : 'bg-secondary' }}">
                            {{ $announcement->is_active ? 'Active' : 'Inactive' }}
                        </span>
                    </div>

                    {{-- ======== CONTENT ======== --}}
                    <div class="mb-4">
                        <strong>📝 Content:</strong>
                        <div class="alert alert-secondary mt-2">
                            {!! nl2br(e($announcement->content)) !!}
                        </div>
                    </div>

                    {{-- ======== IMAGE ======== --}}
                    @if($announcement->image)
                    <div class="mb-4">
                        <strong>🖼 Image:</strong>
                        <div class="mt-2">
                            <img src="{{ asset('image/announcements/' . $announcement->image) }}"
                                class="img-thumbnail"
                                alt="Announcement Image"
                                style="max-height:260px;">
                        </div>
                    </div>
                    @endif

                    {{-- ======== LINK ======== --}}
                    @if($announcement->link)
                    <div class="mb-4">
                        <strong>🔗 External Link:</strong>
                        <p class="mt-2 mb-0">
                            <a href="{{ $announcement->link }}" target="_blank"
                                class="btn btn-outline-info btn-sm">
                                Visit Link <em class="icon ni ni-arrow-right"></em>
                            </a>
                        </p>
                    </div>
                    @endif

                </div>
            </div>

        </div>
    </div>
</div>



{{-- ===================== DELETE MODAL ===================== --}}
<div class="modal fade" id="deleteAnnouncementModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title">Delete Announcement</h5>
                <button type="button" class="btn-close btn-close-white"
                    data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <p class="text-muted">
                    Are you sure you want to delete this announcement?
                    <br><strong>This action cannot be undone.</strong>
                </p>
            </div>

            <div class="modal-footer">
                <button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>

                <form action="{{ route('admin.announcements.destroy', $announcement->id) }}" method="POST">
                    @csrf @method('DELETE')
                    <button class="btn btn-danger">
                        <em class="icon ni ni-trash"></em> Confirm Delete
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>

@endsection
