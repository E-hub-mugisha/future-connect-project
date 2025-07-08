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
<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2>Categories Management</h2>
            </div>

            <div class="wallet-wrap">
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Talents</p>
                        <h5>{{ $totalTalents }}</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Stories</p>
                        <h5>{{ $totalStories }}</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Skills</p>
                        <h5>{{ $totalSkills }}</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#addCategoryModal">
                        Add Category
                    </button>
                </div>
            </div>

            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">
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
                                <button class="btn btn-sm btn-warning me-2" data-bs-toggle="modal"
                                    data-bs-target="#editCategoryModal{{ $cat->id }}">
                                    Edit
                                </button>
                                <form action="{{ route('categories.destroy', $cat->id) }}" method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm"
                                        onclick="return confirm('Are you sure?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>

                <!-- Add Category Modal -->
                <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <form class="modal-content" method="POST" action="{{ route('categories.store') }}">
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
                        <form class="modal-content" method="POST" action="{{ route('categories.update', $category->id) }}">
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

@endsection
