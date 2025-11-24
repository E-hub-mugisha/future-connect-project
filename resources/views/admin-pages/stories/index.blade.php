@extends('layouts.app')
@section('title', 'Stories')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Stories Management</h2>

                <div class="d-flex align-items-center gap-2">

                    <a href="{{ route('admin.stories.create') }}"
                        class="btn btn-primary rounded-pill btn-md">Create</a>
                        <a href="/admin/payments" class="btn btn-warning rounded-pill btn-md"> 
                            <i class="ti ti-transition-top me-2"></i> <span>Story Payments</span> 
                        </a> 
                </div>
            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Talent</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($stories as $story)
                            <tr>
                                <td>{{ $story->title }}</td>
                                <td>{{ $story->talent?->name ?? 'N/A' }}</td>
                                <td>{{ $story->category?->name ?? 'N/A' }}</td>
                                <td>{{ ucfirst($story->status) }}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $story->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $story->id }}">
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.stories.show', $story->id) }}">Quick View</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="{{ route('admin.stories.edit', $story->id) }}">Edit</a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $story->id }}">Delete</a>
                                            </li>
                                        </ul>
                                    </div>

                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    @foreach($stories as $story)
                    <!-- Delete Modal -->
                    <div class="modal fade" id="deleteModal{{ $story->id }}" tabindex="-1"
                        aria-labelledby="deleteModalLabel{{ $story->id }}" aria-hidden="true">
                        <div class="modal-dialog">
                            <form action="{{ route('admin.stories.destroy', $story->id) }}"
                                method="POST" class="modal-content">
                                @csrf
                                @method('DELETE')

                                <div class="modal-header">
                                    <h5 class="modal-title" id="deleteModalLabel{{ $story->id }}">
                                        Confirm Delete
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete this story? This action cannot be undone.
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