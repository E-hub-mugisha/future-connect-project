@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Partners</h2>
                <div class="d-flex align-items-center">
                    <button class="btn btn-primary mb-3 btn-md" data-bs-toggle="modal" data-bs-target="#addPartnerModal">
                        <i class="bi bi-plus-lg"></i> Add Partner
                    </button>
                </div>
            </div>
            @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
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
                                        alt="Logo" style="height:50px; object-fit:contain;">
                                    @endif
                                </td>
                                <td>
                                    @if($partner->link)
                                    <a href="{{ $partner->link }}" target="_blank">{{ Str::limit($partner->link, 30) }}</a>
                                    @endif
                                </td>
                                <td>
                                    <span class="badge {{ $partner->status ? 'bg-success' : 'bg-secondary' }}">
                                        {{ $partner->status ? 'Active' : 'Inactive' }}
                                    </span>
                                </td>
                                <td class="d-flex flex-wrap gap-1">
                                    <button class="btn btn-info btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#showPartnerModal{{ $partner->id }}">Show</button>
                                    <button class="btn btn-warning btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#editPartnerModal{{ $partner->id }}">Edit</button>
                                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#deletePartnerModal{{ $partner->id }}">Delete</button>
                                </td>
                            </tr>

                            <!-- Show Modal -->
                            <div class="modal fade" id="showPartnerModal{{ $partner->id }}" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Partner Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p><strong>Name:</strong> {{ $partner->name }}</p>
                                            <p><strong>Description:</strong> {{ $partner->description }}</p>
                                            @if($partner->logo)
                                            <p><strong>Logo:</strong><br>
                                                <img src="{{ asset('image/partners/' . $partner->logo) }}" width="200">
                                            </p>
                                            @endif
                                            <p><strong>Link:</strong> <a href="{{ $partner->link }}" target="_blank">{{ $partner->link }}</a></p>
                                            <p><strong>Status:</strong>
                                                <span class="badge {{ $partner->status ? 'bg-success' : 'bg-secondary' }}">
                                                    {{ $partner->status ? 'Active' : 'Inactive' }}
                                                </span>
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            @endforeach
                        </tbody>
                    </table>

                    <!-- Edit Modal -->
                    @foreach($partners as $key => $partner)
                    <div class="modal fade" id="editPartnerModal{{ $partner->id }}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <form action="{{ route('admin.partners.update', $partner->id) }}" method="POST" enctype="multipart/form-data" class="modal-content">
                                @csrf
                                @method('PUT')
                                <div class="modal-header">
                                    <h5 class="modal-title">Edit Partner</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" name="name" class="form-control" value="{{ $partner->name }}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control">{{ $partner->description }}</textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Logo</label>
                                        @if($partner->logo)
                                        <img src="{{ asset('image/partners/' . $partner->logo) }}" width="100" class="d-block mb-2">
                                        @endif
                                        <input type="file" name="logo" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Link</label>
                                        <input type="text" name="link" class="form-control" value="{{ $partner->link }}">
                                    </div>
                                    <div class="form-check mb-3">
                                        <input type="checkbox" name="status" class="form-check-input" value="1" {{ $partner->status ? 'checked' : '' }}>
                                        <label class="form-check-label">Active</label>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary">Update</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    @endforeach
                    @foreach($partners as $key => $partner)
                    <!-- Delete Modal -->
                    <div class="modal fade" id="deletePartnerModal{{ $partner->id }}" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <form action="{{ route('admin.partners.destroy', $partner->id) }}" method="POST" class="modal-content">
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
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Add Partner Modal -->
            <div class="modal fade" id="addPartnerModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <form action="{{ route('admin.partners.store') }}" method="POST" enctype="multipart/form-data" class="modal-content">
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
</div>
@endsection