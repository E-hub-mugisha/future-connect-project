@extends('layouts.app')
@section('title', 'Sellers')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="mb-4">Seller Company</h3>
            </div>
            @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Company</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($sellers as $seller)
                            <tr>
                                <td>{{ $seller->id }}</td>
                                <td>
                                    <div class="fw-bold text-dark">
                                        {{ $seller->company_name }}
                                    </div>
                                    <div class="small text-muted mt-1">
                                        {{ $seller->address }}
                                    </div>
                                </td>
                                <td>
                                    <div class="fw-bold text-dark">
                                        {{ $seller->email }}
                                    </div>
                                    <div class="small text-muted mt-1">
                                        {{ $seller->phone }}
                                    </div>
                                </td>
                                <td>
                                    <small class="text-muted">
                                        {{ \Illuminate\Support\Str::limit($seller->description, 60) }}
                                    </small>
                                </td>
                                <td>
                                    <span class="badge
                            @if($seller->status=='approved') bg-success
                            @elseif($seller->status=='rejected') bg-danger
                            @else bg-warning text-dark @endif">
                                        {{ ucfirst($seller->status) }}
                                    </span>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $seller->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $seller->id }}">
                                            <li>
                                                <!-- View / Edit Modal Trigger -->
                                                <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#sellerModal{{ $seller->id }}">
                                                    Manage
                                                </button>
                                            </li>
                                            <li>
                                                <!-- Update Status Modal -->
                                                <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#statusModal{{ $seller->id }}">
                                                    Update Status
                                                </button>
                                            </li>
                                            <li>
                                                <!-- Delete -->
                                                <form action="{{ route('admin.sellers.destroy', $seller) }}" method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="dropdown-item" onclick="return confirm('Delete this seller?')">Delete</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <!-- Modal -->
                            <div class="modal fade" id="sellerModal{{ $seller->id }}" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content border-0 shadow-lg rounded-4">
                                        <form action="{{ route('admin.sellers.update', $seller) }}" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <div class="modal-header bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                                                <h5 class="modal-title">Manage Seller #{{ $seller->id }}</h5>
                                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body p-4">
                                                <div class="row g-3">
                                                    <div class="col-md-6">
                                                        <label class="form-label fw-semibold">Company Name</label>
                                                        <input type="text" name="company_name" class="form-control" value="{{ $seller->company_name }}">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label fw-semibold">Email</label>
                                                        <input type="email" name="email" class="form-control" value="{{ $seller->email }}">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label fw-semibold">Phone</label>
                                                        <input type="text" name="phone" class="form-control" value="{{ $seller->phone }}">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label fw-semibold">Address</label>
                                                        <input type="text" name="address" class="form-control" value="{{ $seller->address }}">
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label fw-semibold">Description</label>
                                                        <textarea name="description" class="form-control" rows="3">{{ $seller->description }}</textarea>
                                                    </div>
                                                    <div class="col-12 mt-2">
                                                        <label class="form-label fw-semibold">Status</label>
                                                        <select name="status" class="form-select">
                                                            <option value="pending" {{ $seller->status=='pending'?'selected':'' }}>Pending</option>
                                                            <option value="approved" {{ $seller->status=='approved'?'selected':'' }}>Approved</option>
                                                            <option value="rejected" {{ $seller->status=='rejected'?'selected':'' }}>Rejected</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer border-0 d-flex justify-content-between">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-success">Update Seller</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- End Modal -->

                            <!-- Update Status Modal -->
                            <div class="modal fade" id="statusModal{{ $seller->id }}" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered modal-md">
                                    <div class="modal-content border-0 shadow-lg rounded-4">
                                        <form action="{{ route('admin.sellers.updateStatus', $seller) }}" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <div class="modal-header bg-warning text-dark">
                                                <h5 class="modal-title">Update Seller Status</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body p-4">
                                                <label class="form-label">Status</label>
                                                <select name="status" class="form-select">
                                                    <option value="pending" {{ $seller->status=='pending'?'selected':'' }}>Pending</option>
                                                    <option value="approved" {{ $seller->status=='approved'?'selected':'' }}>Approved</option>
                                                    <option value="rejected" {{ $seller->status=='rejected'?'selected':'' }}>Rejected</option>
                                                </select>
                                                <small class="text-muted d-block mt-2">
                                                    Approving a seller will automatically create a user account and email the login credentials.
                                                </small>
                                            </div>
                                            <div class="modal-footer border-0">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-primary">Update Status</button>
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
    </div>
</div>
@endsection