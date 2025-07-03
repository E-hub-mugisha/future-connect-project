@extends('layouts.app')

@section('content')
<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <h3>Partners</h3>

            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addPartnerModal">Add
                Partner</button>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Link</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($partners as $key => $partner)
                        <tr>
                            <td>{{ $key + 1 }}</td>
                            <td>{{ $partner->name }}</td>
                            <td>
                                @if($partner->logo)
                                    <img src="{{ asset('image/partners/' . $partner->logo) }}"
                                        width="100">
                                @endif
                            </td>
                            <td>{{ $partner->link }}</td>
                            <td>{{ $partner->status ? 'Active' : 'Inactive' }}
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm mb-1" data-bs-toggle="modal"
                                    data-bs-target="#showPartnerModal{{ $partner->id }}">Show</button>
                                <button class="btn btn-warning btn-sm mb-1" data-bs-toggle="modal"
                                    data-bs-target="#editPartnerModal{{ $partner->id }}">Edit</button>
                                <button class="btn btn-danger btn-sm mb-1" data-bs-toggle="modal"
                                    data-bs-target="#deletePartnerModal{{ $partner->id }}">Delete</button>
                            </td>
                        </tr>

                        <!-- Show Modal -->
                        <div class="modal fade" id="showPartnerModal{{ $partner->id }}" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Partner Details</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <strong>Name:</strong> {{ $partner->name }}<br>
                                        <strong>Description:</strong> {{ $partner->description }}<br>
                                        @if($partner->logo)
                                            <strong>Logo:</strong><br>
                                            <img src="{{ asset('image/partners/' . $partner->logo) }}"
                                                width="200"><br>
                                        @endif
                                        <strong>Link:</strong> {{ $partner->link }}<br>
                                        <strong>Status:</strong>
                                        {{ $partner->status ? 'Active' : 'Inactive' }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Edit Modal -->
                        <div class="modal fade" id="editPartnerModal{{ $partner->id }}" tabindex="-1">
                            <div class="modal-dialog">
                                <form
                                    action="{{ route('admin.partners.update', $partner->id) }}"
                                    method="POST" enctype="multipart/form-data" class="modal-content">
                                    @csrf
                                    @method('PUT')
                                    <div class="modal-header">
                                        <h5 class="modal-title">Edit Partner</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label class="form-label">Name</label>
                                            <input type="text" name="name" class="form-control"
                                                value="{{ $partner->name }}" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="description"
                                                class="form-control">{{ $partner->description }}</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Logo</label>
                                            @if($partner->logo)
                                                <img src="{{ asset('image/partners/' . $partner->logo) }}"
                                                    width="100" class="d-block mb-2">
                                            @endif
                                            <input type="file" name="logo" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Link</label>
                                            <input type="text" name="link" class="form-control"
                                                value="{{ $partner->link }}">
                                        </div>
                                        <div class="form-check mb-3">
                                            <input type="checkbox" name="status" class="form-check-input" value="1"
                                                {{ $partner->status ? 'checked' : '' }}>
                                            <label class="form-check-label">Active</label>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary">Update</button>
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <!-- Delete Modal -->
                        <div class="modal fade" id="deletePartnerModal{{ $partner->id }}" tabindex="-1">
                            <div class="modal-dialog">
                                <form
                                    action="{{ route('admin.partners.destroy', $partner->id) }}"
                                    method="POST" class="modal-content">
                                    @csrf
                                    @method('DELETE')
                                    <div class="modal-header">
                                        <h5 class="modal-title">Confirm Delete</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        Are you sure you want to delete this partner?
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-danger">Yes, Delete</button>
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- Add Modal -->
        <div class="modal fade" id="addPartnerModal" tabindex="-1">
            <div class="modal-dialog">
                <form action="{{ route('admin.partners.store') }}" method="POST"
                    enctype="multipart/form-data" class="modal-content">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title">Add Partner</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea name="description" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Logo</label>
                            <input type="file" name="logo" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Link</label>
                            <input type="text" name="link" class="form-control">
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" name="status" class="form-check-input" value="1">
                            <label class="form-check-label">Active</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
