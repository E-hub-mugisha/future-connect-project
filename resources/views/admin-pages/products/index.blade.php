@extends('layouts.app')

@section('title', 'Seller Products Approval')

@section('content')
<div class="container py-4">
    <div class="card shadow-lg border-0 rounded-4">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top">
            <h4 class="mb-0"><i class="bi bi-box-seam me-2"></i>Seller Products Approval</h4>
        </div>
        <div class="card-body p-4">
            <div class="table-responsive">
                <table class="table table-hover datatable-init nowrap  align-middle text-center">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($products as $key => $product)
                        <tr>
                            <td>{{ $key + 1 }}</td>
                            <td>
                                <img src="{{ asset('storage/' . $product->image) }}" alt="Product" width="50" class="rounded me-2">
                                <strong>{{ $product->name }}</strong>
                            </td>
                            <td>{{ $product->seller->company_name ?? 'N/A' }}</td>
                            <td>${{ number_format($product->price, 2) }}</td>
                            <td>
                                <span class="badge 
                                    @if($product->status == 'approved') bg-success 
                                    @elseif($product->status == 'pending') bg-warning 
                                    @else bg-danger @endif">
                                    {{ ucfirst($product->status) }}
                                </span>
                            </td>
                            <td>{{ $product->created_at->format('Y-m-d') }}</td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $product->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                        Manage
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $product->id }}">
                                        <li>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#viewModal{{ $product->id }}">View</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#statusModal{{ $product->id }}">Update Status</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $product->id }}">Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>

                        <!-- 🔵 VIEW MODAL -->
                        <div class="modal fade" id="viewModal{{ $product->id }}" tabindex="-1" aria-labelledby="viewModalLabel{{ $product->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content border-0 rounded-4 shadow">
                                    <div class="modal-header bg-primary text-white">
                                        <h5 class="modal-title" id="viewModalLabel{{ $product->id }}"><i class="bi bi-info-circle me-2"></i>Product Details</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-5 text-center">
                                                <img src="{{ asset('storage/' . $product->image) }}" class="img-fluid rounded mb-3" alt="{{ $product->name }}">
                                            </div>
                                            <div class="col-md-7">
                                                <h5>{{ $product->name }}</h5>
                                                <p>{{ $product->description }}</p>
                                                <p><strong>Price:</strong> ${{ number_format($product->price, 2) }}</p>
                                                <p><strong>Status:</strong> {{ ucfirst($product->status) }}</p>
                                                <p><strong>Seller:</strong> {{ $product->seller->company_name ?? 'N/A' }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 🟢 STATUS MODAL -->
                        <div class="modal fade" id="statusModal{{ $product->id }}" tabindex="-1" aria-labelledby="statusModalLabel{{ $product->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-md">
                                <div class="modal-content border-0 rounded-4 shadow">
                                    <div class="modal-header bg-success text-white">
                                        <h5 class="modal-title" id="statusModalLabel{{ $product->id }}"><i class="bi bi-pencil-square me-2"></i>Update Product Status</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>
                                    <form action="{{ route('admin.products.updateStatus', $product->id) }}" method="POST">
                                        @csrf
                                        @method('PUT')
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <label class="form-label">Select Status</label>
                                                <select class="form-select" name="status" required>
                                                    <option value="pending" {{ $product->status == 'pending' ? 'selected' : '' }}>Pending</option>
                                                    <option value="approved" {{ $product->status == 'approved' ? 'selected' : '' }}>Approved</option>
                                                    <option value="rejected" {{ $product->status == 'rejected' ? 'selected' : '' }}>Rejected</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-success">Update Status</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <!-- 🔴 DELETE MODAL -->
                        <div class="modal fade" id="deleteModal{{ $product->id }}" tabindex="-1" aria-labelledby="deleteModalLabel{{ $product->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content border-0 rounded-4 shadow">
                                    <div class="modal-header bg-danger text-white">
                                        <h5 class="modal-title" id="deleteModalLabel{{ $product->id }}"><i class="bi bi-trash me-2"></i>Confirm Deletion</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body text-center">
                                        <p class="fs-5 text-muted">Are you sure you want to delete <strong>{{ $product->name }}</strong>?</p>
                                        <form action="{{ route('admin.products.destroy', $product->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-danger ms-2">Delete</button>
                                        </form>
                                    </div>
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
@endsection
