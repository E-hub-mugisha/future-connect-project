@extends('layouts.app')
@section('content')

@php
$icons = [
'ti ti-star' => 'Star',
'ti ti-movie' => 'Movie',
'ti ti-music' => 'Music',
'ti ti-camera' => 'Camera',
'ti ti-briefcase' => 'Briefcase',
'ti ti-book' => 'Book',
'ti ti-heart' => 'Heart',
'ti ti-crown' => 'Crown',
'ti ti-code' => 'Code',
'ti ti-palette' => 'Graphic Design',
'fa-solid fa-bullhorn' => 'Digital Marketing',
];
@endphp


<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Categories Management</h2>
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#addCategoryModal">
                        Add Category
                    </button>
                </div>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Featured</th>
                                <th>Slug</th>
                                <th>Icon</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($categories as $cat)
                            <tr>
                                <td>{{ $cat->name }}</td>
                                <td>{{ $cat->description }}</td>
                                <td>{{ $cat->featured ? 'Yes' : 'No' }}</td>
                                <td>{{ $cat->slug }}</td>
                                <td><span><i class="{{ $cat->image ?? 'ti ti-star' }}"></i></span></td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $cat->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $cat->id }}">
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editCategoryModal{{ $cat->id }}">Edit</a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $cat->id }}">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    @foreach($categories as $cat)
                    <!-- Delete Modal -->
                    <div class="modal fade" id="deleteModal{{ $cat->id }}" tabindex="-1"
                        aria-labelledby="deleteModalLabel{{ $cat->id }}" aria-hidden="true">
                        <div class="modal-dialog">
                            <form action="{{ route('admin.categories.destroy', $cat->id) }}"
                                method="POST" class="modal-content">
                                @csrf
                                @method('DELETE')

                                <div class="modal-header">
                                    <h5 class="modal-title" id="deleteModalLabel{{ $cat->id }}">
                                        Confirm Delete
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete this cat? This action cannot be undone.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    @endforeach
                    <!-- Add Category Modal -->
                    <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <form class="modal-content" method="POST" action="{{ route('admin.categories.store') }}">
                                @csrf
                                <div class="modal-header">
                                    <h5 class="modal-title">Add Category</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input name="name" class="form-control" value="{{ old('name') }}" required>
                                        @error('name')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <input name="description" class="form-control" value="{{ old('description') }}" required>
                                        @error('description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Icon</label>
                                        <select name="image" class="form-select" required>
                                            <option value="">Select Icon</option>
                                            @foreach($icons as $class => $label)
                                            <option value="{{ $class }}" {{ old('image') == $class ? 'selected' : '' }}>
                                                {{ $label }}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="featured" value="1"
                                            {{ old('featured') ? 'checked' : '' }}>
                                        <label class="form-check-label">Featured</label>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button class="btn btn-success" type="submit">Save</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Edit Category Modals -->
                    @foreach($categories as $category)
                    <div class="modal fade" id="editCategoryModal{{ $category->id }}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <form class="modal-content" method="POST" action="{{ route('admin.categories.update', $category->id) }}">
                                @csrf
                                @method('PUT')

                                <div class="modal-header">
                                    <h5 class="modal-title">Edit Category</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input name="name" class="form-control" value="{{ old('name', $category->name) }}" required>
                                        @error('name')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <input name="description" class="form-control" value="{{ old('description', $category->description) }}" required>
                                        @error('description')
                                        <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Icon</label>
                                        <select name="image" class="form-select icon-picker" required>
                                            <option value="">Select Icon</option>
                                            @foreach($icons as $class => $label)
                                            <option value="{{ $class }}" {{ (old('image', $category->image) == $class) ? 'selected' : '' }}>
                                                {{ $label }}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="featured" value="1"
                                            {{ old('featured', $category->featured) ? 'checked' : '' }}>
                                        <label class="form-check-label">Featured</label>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button class="btn btn-success" type="submit">Update</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
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