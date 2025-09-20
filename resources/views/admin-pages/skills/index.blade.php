@extends('layouts.app')
@section('title', 'Skills')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Skills Management</h2>
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <!-- Add Skill Button -->
                    <a href="{{ route('admin.skills.create') }}"
                        class="btn btn-primary btn-md">Create</a>
                </div>
            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Talent</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Level</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($skills as $skill)
                            <tr>
                                <td>{{ $skill->name }}</td>
                                <td>{{ $skill->talent->name ?? 'N/A' }}
                                </td>
                                <td>{{ $skill->category->name ?? 'N/A' }}
                                </td>
                                <td>{{ ucfirst($skill->status) }}</td>
                                <td>{{ ucfirst($skill->level) }}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $skill->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $skill->id }}">
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.skills.show', $skill->id) }}">Quick View</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.skills.edit', $skill->id) }}">Edit</a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $skill->id }}">Delete</a>
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