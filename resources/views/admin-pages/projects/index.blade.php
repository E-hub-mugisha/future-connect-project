@extends('layouts.app')
@section('title', 'Manage Projects')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold">Manage Projects</h2>
                <a href="{{ route('admin.projects.create') }}" class="btn btn-primary btn-sm rounded-pill">
                    <i class="bi bi-plus-circle"></i> Add Project
                </a>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
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
                                                <a href="{{ route('admin.projects.show', $project->id) }}" class="dropdown-item">View</a>
                                            </li>
                                            <li>
                                                <a href="{{ route('admin.projects.edit', $project->id) }}" class="dropdown-item">Edit</a>
                                            </li>
                                            <li>
                                                @if(!$project->verified)
                                                <form action="{{ route('admin.projects.verify', $project->id) }}" method="POST" class="d-inline">
                                                    @csrf
                                                    <button class="dropdown-item">Verify</button>
                                                </form>
                                                @endif
                                            </li>
                                            <li>
                                                <form action="{{ route('admin.projects.destroy', $project->id) }}" method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button class="dropdown-item" onclick="return confirm('Delete this project?')">Delete</button>
                                                </form>
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
</div>
@endsection