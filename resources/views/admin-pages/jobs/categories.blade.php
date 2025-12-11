@extends('layouts.app')

@section('title', 'Job Categories')

@section('content')
<div class="container-fluid">

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold mb-0">Job Categories</h2>
        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#createCategoryModal">
            <i class="bi bi-plus-circle"></i> Add Category
        </button>
    </div>

    <!-- Table Card -->
    <div class="card shadow-sm border-0">
        <div class="card-body">
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Parent</th>
                        <th class="text-end">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($categories as $category)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $category->name }}</td>
                        <td>{{ $category->slug }}</td>
                        <td>{{ $category->parent?->name ?? '-' }}</td>
                        <td class="text-end">
                            <!-- Edit Button -->
                            <button class="btn btn-md btn-outline-primary" 
                                data-bs-toggle="modal" 
                                data-bs-target="#editCategoryModal{{ $category->id }}">
                                Edit
                            </button>

                            <!-- Delete Button -->
                            <button class="btn btn-md btn-outline-danger" 
                                data-bs-toggle="modal" 
                                data-bs-target="#deleteCategoryModal{{ $category->id }}">
                                Delete
                            </button>
                        </td>
                    </tr>

                    <!-- Edit Modal -->
                    <div class="modal fade" id="editCategoryModal{{ $category->id }}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form action="{{ route('admin.job-categories.update', $category->id) }}" method="POST">
                                    @csrf
                                    @method('PUT')

                                    <div class="modal-header">
                                        <h5 class="modal-title">Edit Category</h5>
                                        <button class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label class="form-label">Category Name</label>
                                            <input type="text" name="name" class="form-control" value="{{ $category->name }}" required>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Parent Category</label>
                                            <select name="parent_id" class="form-select">
                                                <option value="">-- None --</option>
                                                @foreach($categories as $parent)
                                                    @if($parent->id != $category->id)
                                                        <option value="{{ $parent->id }}" 
                                                            {{ $category->parent_id == $parent->id ? 'selected' : '' }}>
                                                            {{ $parent->name }}
                                                        </option>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        <button class="btn btn-primary">Update</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Delete Modal -->
                    <div class="modal fade" id="deleteCategoryModal{{ $category->id }}">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content text-center">
                                <form action="{{ route('admin.job-categories.destroy', $category->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')

                                    <div class="modal-header border-0">
                                        <h5 class="modal-title w-100 text-danger">Delete Category</h5>
                                    </div>

                                    <div class="modal-body">
                                        Are you sure you want to delete <strong>{{ $category->name }}</strong>?
                                    </div>

                                    <div class="modal-footer d-flex justify-content-center">
                                        <button class="btn btn-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                        <button class="btn btn-danger btn-sm">Delete</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Create Modal -->
<div class="modal fade" id="createCategoryModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{ route('admin.job-categories.store') }}" method="POST">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title">Add New Category</h5>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Category Name</label>
                        <input type="text" name="name" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Parent Category</label>
                        <select name="parent_id" class="form-select">
                            <option value="">-- None --</option>
                            @foreach($categories as $parent)
                                <option value="{{ $parent->id }}">{{ $parent->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    </div>
</div>

@endsection
