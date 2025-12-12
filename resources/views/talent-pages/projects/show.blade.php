@extends('layouts.talents')
@section('title', 'Project Details')

@section('content')

<div class="container py-4">
    <div class="az-content-body az-content-body-profile">

        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs az-nav-line mb-4 gap-3" id="projectTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab">
                    <i class="bi bi-card-text me-1"></i> Project Overview
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id="applications-tab" data-bs-toggle="tab" href="#applications" role="tab">
                    <i class="bi bi-people me-1"></i> Applications
                    <span class="badge bg-primary">{{ $project->applications->count() }}</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id="owner-tab" data-bs-toggle="tab" href="#owner" role="tab">
                    <i class="bi bi-person-badge me-1"></i> Project Owner
                </a>
            </li>
        </ul>

        <div class="tab-content" id="projectTabContent">

            <div class="tab-pane fade show active" id="overview" role="tabpanel">

                <div class="card border-0 shadow-sm rounded-4 mb-4">
                    <div class="card-body">

                        <h3 class="fw-bold mb-3">{{ $project->title }}</h3>

                        <p class="text-muted">{{ $project->description }}</p>

                        <div class="mt-3">
                            <p><strong>Category:</strong> {{ $project->category }}</p>
                            <p><strong>Status:</strong> {{ ucfirst($project->status) }}</p>
                            <p><strong>Budget:</strong> {{ $project->budget }}</p>
                            <p><strong>Location:</strong> {{ $project->location ?? 'Remote' }}</p>
                        </div>

                        <div class="mt-4">
                            @if(!$project->verified)
                            <form action="{{ route('talent.projects.verify', $project->id) }}" method="POST" class="d-inline">
                                @csrf
                                <button class="btn btn-success rounded-pill">
                                    <i class="bi bi-check-circle me-1"></i> Verify Project
                                </button>
                            </form>
                            @else
                            <span class="badge bg-success p-2 rounded-pill">Verified</span>
                            @endif

                            <a href="{{ route('talent.projects.index') }}" class="btn btn-outline-secondary rounded-pill ms-2">
                                <i class="bi bi-arrow-left"></i> Back
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="applications" role="tabpanel">

                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mb-0 fw-semibold"><i class="bi bi-people me-2"></i> Project Applications</h5>
                        <span class="badge bg-light text-dark">{{ $project->applications->count() }}</span>
                    </div>

                    <div class="card-body">
                        @if($project->applications->isEmpty())
                        <p class="text-muted text-center my-4">No applications yet.</p>
                        @else
                        <div class="list-group list-group-flush">
                            @foreach($project->applications as $application)
                            <div class="list-group-item py-3">

                                <div class="d-flex justify-content-between mb-2">
                                    <div>
                                        <h6 class="fw-semibold mb-0">{{ $application->user->name }}</h6>
                                        <small class="text-muted">{{ $application->created_at->diffForHumans() }}</small>
                                    </div>

                                    <span class="badge 
                                            @if($application->status=='accepted') bg-success 
                                            @elseif($application->status=='rejected') bg-danger 
                                            @else bg-warning text-dark @endif">
                                        {{ ucfirst($application->status) }}
                                    </span>
                                </div>

                                <p class="text-muted mb-2">{{ $application->message }}</p>

                                @if($application->portfolio_url)
                                <p><i class="bi bi-link-45deg"></i>
                                    <a href="{{ $application->portfolio_url }}" target="_blank">Portfolio</a>
                                </p>
                                @endif

                                @if($application->attachment)
                                <p><i class="bi bi-paperclip"></i>
                                    <a href="{{ asset('storage/'.$application->attachment) }}" target="_blank">Download</a>
                                </p>
                                @endif

                                <!-- Action Buttons -->
                                <div class="mt-3">
                                    <button class="btn btn-sm btn-outline-success rounded-pill"
                                        data-bs-toggle="modal" data-bs-target="#acceptModal{{ $application->id }}">
                                        Accept
                                    </button>

                                    <button class="btn btn-sm btn-outline-danger rounded-pill"
                                        data-bs-toggle="modal" data-bs-target="#rejectModal{{ $application->id }}">
                                        Reject
                                    </button>
                                </div>
                            </div>

                            @endforeach
                        </div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="owner" role="tabpanel">
                <div class="card border-0 shadow-sm rounded-4 p-4">

                    <h4 class="fw-bold mb-3">Project Owner</h4>

                    <div class="d-flex align-items-center mb-3">
                        <div class="avatar bg-primary text-white rounded-circle me-3" style="width:50px;height:50px;">
                            <i class="bi bi-person fs-3"></i>
                        </div>
                        <div>
                            <h5 class="mb-0">{{ $project->user->name }}</h5>
                            <small class="text-muted">{{ $project->user->email }}</small>
                        </div>
                    </div>

                    <div class="mt-3">
                        <p><strong>Email:</strong> {{ $project->user->email }}</p>
                        <p><strong>Phone:</strong> {{ $project->user->phone ?? 'N/A' }}</p>
                        <p><strong>Address:</strong> {{ $project->user->address ?? 'N/A' }}</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
<!-- accept application modal -->
@foreach($project->applications as $application)
<div class="modal fade" id="acceptModal{{ $application->id }}" tabindex="-1" aria-labelledby="acceptModalLabel{{ $application->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="acceptModalLabel{{ $application->id }}">Accept Application</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to accept the application from <strong>{{ $application->user->name }}</strong>?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action="{{ route('talent.applications.accept', $application->id) }}" method="POST" class="d-inline">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="status" value="accepted">
                    <button type="submit" class="btn btn-success">Accept</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!-- accept application modal end -->
<!-- reject application modal -->
@foreach($project->applications as $application)
<div class="modal fade" id="rejectModal{{ $application->id }}" tabindex="-1" aria-labelledby="rejectModalLabel{{ $application->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="rejectModalLabel{{ $application->id }}">Reject Application</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to reject the application from <strong>{{ $application->user->name }}</strong>?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action="{{ route('talent.applications.reject', $application->id) }}" method="POST" class="d-inline">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="status" value="rejected">
                    <button type="submit" class="btn btn-danger">Reject</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!-- reject application modal end -->
@endsection