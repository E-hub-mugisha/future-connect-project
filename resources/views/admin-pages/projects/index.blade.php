@extends('layouts.app')
@section('title', 'Manage Projects')
@section('content')
<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Manage Projects</h2>
        <a href="{{ route('admin.projects.create') }}" class="btn btn-primary btn-sm rounded-pill">
            <i class="bi bi-plus-circle"></i> Add Project
        </a>
    </div>

    <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body">
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Verified</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($projects as $project)
                    <tr>
                        <td>{{ $project->title }}</td>
                        <td>{{ $project->user->name ?? 'Unknown' }}</td>
                        <td>{{ $project->category }}</td>
                        <td>{{ ucfirst($project->status) }}</td>
                        <td>
                            @if($project->verified)
                                <span class="badge bg-success">Yes</span>
                            @else
                                <span class="badge bg-warning text-dark">No</span>
                            @endif
                        </td>
                        <td>
                            <a href="{{ route('admin.projects.show', $project->id) }}" class="btn btn-sm btn-outline-primary">View</a>
                            <a href="{{ route('admin.projects.edit', $project->id) }}" class="btn btn-sm btn-outline-warning">Edit</a>
                            @if(!$project->verified)
                                <form action="{{ route('admin.projects.verify', $project->id) }}" method="POST" class="d-inline">
                                    @csrf
                                    <button class="btn btn-sm btn-success">Verify</button>
                                </form>
                            @endif
                            <form action="{{ route('admin.projects.destroy', $project->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-sm btn-danger" onclick="return confirm('Delete this project?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="mt-3">
                {{ $projects->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
