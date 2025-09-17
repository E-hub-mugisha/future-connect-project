@extends('layouts.app')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Announcements</h2>
                <div class="d-flex justify-content-between align-items-center mb-4">

                    <a href="{{ route('admin.announcements.create') }}" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Create Announcement
                    </a>
                </div>
            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($announcements as $announcement)
                            <tr>
                                <td>{{ $announcement->id }}</td>
                                <td>{{ Str::limit($announcement->title, 50) }}</td>
                                <td>{{ $announcement->category->name }}</td>
                                <td>{{ $announcement->user->name ?? 'N/A' }}</td>
                                <td>{{ $announcement->created_at->format('Y-m-d') }}
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $announcement->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $announcement->id }}">
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.announcements.show', $announcement->id) }}">Quick View</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.announcements.edit', $announcement->id) }}">Edit</a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $announcement->id }}">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    @foreach($announcements as $announcement)
                    <!-- Delete Modal -->
                    <div class="modal fade" id="deleteModal{{ $announcement->id }}" tabindex="-1"
                        aria-labelledby="deleteModalLabel{{ $announcement->id }}" aria-hidden="true">
                        <div class="modal-dialog">
                            <form action="{{ route('admin.announcements.destroy', $announcement->id) }}"
                                method="POST" class="modal-content">
                                @csrf
                                @method('DELETE')

                                <div class="modal-header">
                                    <h5 class="modal-title" id="deleteModalLabel{{ $announcement->id }}">
                                        Confirm Delete
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete this announcement? This action cannot be undone.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection