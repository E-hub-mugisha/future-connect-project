@extends('layouts.app')

@section('content')

<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2 class="card-title">Banners</h2>
            </div>

            @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <!-- Add Button -->
            <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addBannerModal">Add Banner</button>

            <!-- Banner Table -->
            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($banners as $key => $banner)
                        <tr>
                            <td>{{ $key + 1 }}</td>
                            <td>{{ $banner->title }}</td>
                            <td>
                                @if($banner->image)
                                <img src="{{ asset('image/banners/' . $banner->image) }}" alt="Banner" width="100">
                                @endif
                            </td>
                            <td>{{ $banner->link }}</td>
                            <td>{{ $banner->status ? 'Active' : 'Inactive' }}</td>
                            <td>
                                <!-- Show Button -->
                                <button class="btn btn-info btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#showBannerModal{{ $banner->id }}">Show</button>

                                <!-- Edit Button -->
                                <button class="btn btn-warning btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#editBannerModal{{ $banner->id }}">Edit</button>

                                <!-- Delete Button -->
                                <button class="btn btn-danger btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#deleteBannerModal{{ $banner->id }}">Delete</button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            @foreach($banners as $key => $banner)
            <!-- Show Modal -->
            <div class="modal fade" id="showBannerModal{{ $banner->id }}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Banner Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <strong>Title:</strong> {{ $banner->title }} <br>
                            <strong>Description:</strong> {{ $banner->description }} <br>
                            @if($banner->image)
                            <strong>Image:</strong><br>
                            <img src="{{ asset('image/banners/' . $banner->image) }}" alt="Banner" width="200"><br>
                            @endif
                            <strong>Link:</strong> {{ $banner->link }} <br>
                            <strong>Status:</strong> {{ $banner->status ? 'Active' : 'Inactive' }}
                        </div>
                    </div>
                </div>
            </div>
            @endforeach

            @foreach($banners as $key => $banner)
            <!-- Edit Modal -->
            <div class="modal fade" id="editBannerModal{{ $banner->id }}" tabindex="-1">
                <div class="modal-dialog">
                    <form action="{{ route('admin.banners.update', $banner->id) }}" method="POST" enctype="multipart/form-data" class="modal-content">
                        @csrf
                        @method('PUT')
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Banner</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" value="{{ $banner->title }}" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea name="description" class="form-control" required>{{ $banner->description }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Image</label>
                                @if($banner->image)
                                <img src="{{ asset('image/banners/' . $banner->image) }}" alt="Banner" width="100" class="d-block mb-2">
                                @endif
                                <input type="file" name="image" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Link</label>
                                <input type="text" name="link" class="form-control" value="{{ $banner->link }}">
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" name="status" value="1" {{ $banner->status ? 'checked' : '' }}>
                                <label class="form-check-label">Active</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            @foreach($banners as $key => $banner)
            <!-- Delete Confirmation Modal -->
            <div class="modal fade" id="deleteBannerModal{{ $banner->id }}" tabindex="-1">
                <div class="modal-dialog">
                    <form action="{{ route('admin.banners.destroy', $banner->id) }}" method="POST" class="modal-content">
                        @csrf
                        @method('DELETE')
                        <div class="modal-header">
                            <h5 class="modal-title">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this banner?
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Yes, Delete</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            @endforeach
            <!-- Add Modal -->
            <div class="modal fade" id="addBannerModal" tabindex="-1" aria-labelledby="addBannerModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form action="{{ route('admin.banners.store') }}" method="POST" enctype="multipart/form-data" class="modal-content">
                        @csrf
                        <div class="modal-header">
                            <h5 class="modal-title" id="addBannerModalLabel">Add Banner</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            {{-- Title --}}
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" value="{{ old('title') }}">
                            </div>

                            {{-- Description --}}
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea name="description" class="form-control">{{ old('description') }}</textarea>
                            </div>

                            {{-- Image --}}
                            <div class="mb-3">
                                <label class="form-label">Image</label>
                                <input type="file" name="image" class="form-control">
                            </div>

                            {{-- Link --}}
                            <div class="mb-3">
                                <label class="form-label">Link</label>
                                <input type="url" name="link" class="form-control" value="{{ old('link') }}">
                            </div>

                            {{-- Status --}}
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" name="status" value="active" {{ old('status') ? 'checked' : '' }}>
                                <label class="form-check-label">Active</label>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Add Banner</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection