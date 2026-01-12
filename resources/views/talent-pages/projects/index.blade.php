@extends('layouts.talents')
@section('title', 'Manage Projects')
@section('content')

<!-- Page Content -->
<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold">Manage Projects</h2>
            <a href="{{ route('talent.projects.create') }}" class="btn btn-primary btn-sm ">
                <i class="bi bi-plus-circle"></i> Add Project
            </a>
        </div>

        <div class="card card-bordered card-preview p-4 shadow-sm">
            <div class="card-inner">
                <table class="table" id="example2">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Owner</th>
                            <th>Category</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th>Verified</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($projects as $project)
                        <tr>
                            <td>
                                <span class="fw-bold">{{ $project->title }}</span><br>
                                <small class="text-muted">
                                    {{ \Illuminate\Support\Str::limit($project->description, 40) }}
                                </small>
                            </td>
                            <td>
                                <div class="fw-bold text-dark">
                                    {{ $project->user->name }}
                                </div>
                                <div class="small text-muted mt-1">
                                    {{ $project->user->email }}
                                </div>
                            </td>
                            <td>
                                <div class="fw-bold text-dark">
                                    {{ $project->category }}
                                </div>
                                <div class="small text-muted mt-1">
                                    {{ $project->location }}
                                </div>
                            </td>
                            <td>{{ $project->budget }}</td>
                            <td>{{ ucfirst($project->status) }}</td>
                            <td>
                                @if($project->verified)
                                <span class="badge bg-success">Yes</span>
                                @else
                                <span class="badge bg-warning text-dark">No</span>
                                @endif
                            </td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $project->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                        Actions
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $project->id }}">
                                        <li>
                                            <a href="{{ route('talent.projects.show', $project->id) }}" class="dropdown-item">View</a>
                                        </li>
                                        <li>
                                            <a href="{{ route('talent.projects.edit', $project->id) }}" class="dropdown-item">Edit</a>
                                        </li>
                                        <li>
                                            @if(!$project->verified)
                                            <!-- verify button modal -->
                                            <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#verifyModal{{ $project->id }}">Verify</button>
                                            <!-- verify button modal end -->

                                            @endif
                                        </li>
                                        <li>
                                            <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $project->id }}">
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@foreach($projects as $project)
<!-- Verify Modal -->
<div class="modal fade" id="verifyModal{{ $project->id }}" tabindex="-1" aria-labelledby="verifyModalLabel{{ $project->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="verifyModalLabel{{ $project->id }}">Verify Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to verify this project?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action="{{ route('talent.projects.update', $project->id) }}" method="POST" class="d-inline">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="verified" value="1">
                    <button type="submit" class="btn btn-primary">Verify</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- verify button modal end -->
@endforeach
<!-- Delete Project Modal -->
@foreach($projects as $project)

<!-- Delete Modal -->
<div class="modal fade" id="deleteModal{{ $project->id }}" tabindex="-1" aria-labelledby="deleteModalLabel{{ $project->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel{{ $project->id }}">Delete Project</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete the project "<strong>{{ $project->title }}</strong>"?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <form action="{{ route('talent.projects.destroy', $project->id) }}" method="POST" class="d-inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Delete Modal End -->
@endforeach
@endsection