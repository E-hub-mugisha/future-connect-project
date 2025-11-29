@extends('layouts.app')
@section('title', 'Project Details')
@section('content')
<div class="container py-4">
    <div class="row">
        <!-- Project Info -->
        <div class="col-lg-7 mb-4">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-body">
                    <h3 class="fw-bold mb-3">{{ $project->title }}</h3>

                    <p class="text-muted mb-3">{{ $project->description }}</p>

                    <div class="mb-3">
                        <strong>Category:</strong> {{ $project->category }}<br>
                        <strong>Status:</strong> {{ ucfirst($project->status) }}<br>
                        <strong>Budget:</strong> {{ $project->budget }}<br>
                        <strong>Location:</strong> {{ $project->location ?? 'Remote' }}
                    </div>

                    <div class="mt-4">
                        @if(!$project->verified)
                        <form action="{{ route('admin.projects.verify', $project->id) }}" method="POST" class="d-inline">
                            @csrf
                            <button class="btn btn-success rounded-pill"><i class="bi bi-check-circle me-1"></i> Verify Project</button>
                        </form>
                        @else
                        <span class="badge bg-success p-2 rounded-pill">Verified</span>
                        @endif

                        <a href="{{ route('admin.projects.index') }}" class="btn btn-outline-secondary rounded-pill ms-2">
                            <i class="bi bi-arrow-left"></i> Back
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Applications List -->
        <div class="col-lg-5">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-header bg-primary text-white rounded-top-4 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 fw-semibold"><i class="bi bi-people me-2"></i>Project Applications</h5>
                    <span class="badge bg-light text-dark">{{ $project->applications->count() }}</span>
                </div>

                <div class="card-body">
                    @if($project->applications->isEmpty())
                    <p class="text-muted text-center my-4">No one has applied yet.</p>
                    @else
                    <div class="list-group list-group-flush">
                        @foreach($project->applications as $application)
                        <div class="list-group-item py-3 border-0 border-bottom">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <h6 class="fw-semibold mb-0">{{ $application->user->name ?? 'Unknown User' }}</h6>
                                    <small class="text-muted">{{ $application->created_at->diffForHumans() }}</small>
                                </div>
                                @if($application->status === 'accepted')
                                <span class="badge bg-success">Accepted</span>
                                @elseif($application->status === 'rejected')
                                <span class="badge bg-danger">Rejected</span>
                                @else
                                <span class="badge bg-warning text-dark">Pending</span>
                                @endif
                            </div>

                            <p class="mb-2 text-muted">{{ $application->message }}</p>

                            @if($application->portfolio_url)
                            <p class="mb-1">
                                <i class="bi bi-link-45deg"></i>
                                <a href="{{ $application->portfolio_url }}" target="_blank">View Portfolio</a>
                            </p>
                            @endif

                            @if($application->attachment)
                            <p class="mb-1">
                                <i class="bi bi-paperclip"></i>
                                <a href="{{ asset('storage/'.$application->attachment) }}" target="_blank">Download Attachment</a>
                            </p>
                            @endif

                            <div class="mt-3">
                                <!-- Accept Button -->
                                <button type="button" class="btn btn-sm btn-outline-success rounded-pill"
                                    data-bs-toggle="modal" data-bs-target="#acceptModal{{ $application->id }}">
                                    Accept
                                </button>

                                <!-- Reject Button -->
                                <button type="button" class="btn btn-sm btn-outline-danger rounded-pill"
                                    data-bs-toggle="modal" data-bs-target="#rejectModal{{ $application->id }}">
                                    Reject
                                </button>
                            </div>
                        </div>
                        <!-- Accept Modal -->
                        <div class="modal fade" id="acceptModal{{ $application->id }}" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content rounded-4">
                                    <div class="modal-header bg-success text-white rounded-top-4">
                                        <h5 class="modal-title">Accept Application</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div class="modal-body">
                                        <p class="mb-0">Are you sure you want to <strong class="text-success">ACCEPT</strong>
                                            this application from <strong>{{ $application->user->name }}</strong>?</p>
                                    </div>

                                    <div class="modal-footer">
                                        <button class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>

                                        <form action="{{ route('admin.applications.accept', $application->id) }}" method="POST" class="d-inline">
                                            @csrf
                                            <button type="submit" class="btn btn-success rounded-pill">
                                                Confirm Accept
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Reject Modal -->
                        <div class="modal fade" id="rejectModal{{ $application->id }}" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content rounded-4">
                                    <div class="modal-header bg-danger text-white rounded-top-4">
                                        <h5 class="modal-title">Reject Application</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div class="modal-body">
                                        <p>Are you sure you want to <strong class="text-danger">REJECT</strong>
                                            this application from <strong>{{ $application->user->name }}</strong>?</p>

                                        <label class="mb-1 fw-semibold">Reason (optional):</label>
                                        <textarea name="message" class="form-control rounded-3" rows="2"
                                            form="rejectForm{{ $application->id }}"></textarea>
                                    </div>

                                    <div class="modal-footer">
                                        <button class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>

                                        <form id="rejectForm{{ $application->id }}"
                                            action="{{ route('admin.applications.reject', $application->id) }}"
                                            method="POST" class="d-inline">
                                            @csrf
                                            <button type="submit" class="btn btn-danger rounded-pill">Confirm Reject</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

@endsection