@extends('layouts.app')
@section('title', 'My Products')

@section('content')
<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold text-primary">🛍️ My Products</h2>
        <button class="btn btn-success shadow-sm" data-bs-toggle="modal" data-bs-target="#addProductModal">
            <i class="bi bi-plus-circle me-1"></i> Add New Product
        </button>
    </div>

    <!-- Products Grid -->
    <div class="row g-4">
        @forelse($products as $product)
        <div class="col-md-4 col-lg-3">
            <div class="card border-0 shadow-sm h-100 hover-card">
                <div class="position-relative">
                    <img src="{{ $product->image ? asset('storage/'.$product->image) : asset('assets/img/placeholder.jpg') }}"
                        class="card-img-top rounded-top"
                        alt="{{ $product->name }}" style="height: 180px; object-fit: cover;">
                    <span class="badge position-absolute top-0 end-0 m-2 {{ $product->status == 'active' ? 'bg-success' : 'bg-secondary' }}">
                        {{ ucfirst($product->status) }}
                    </span>
                </div>
                <div class="card-body">
                    <h5 class="fw-semibold">{{ $product->name }}</h5>
                    <p class="text-muted small mb-1">{{ Str::limit($product->description, 60) }}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fw-bold text-primary">${{ number_format($product->price, 2) }}</span>
                        <span class="text-muted small">Stock: {{ $product->stock }}</span>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 d-flex justify-content-around pb-3">
                    <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#showProductModal{{ $product->id }}">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editProductModal{{ $product->id }}">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteProductModal{{ $product->id }}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Show Modal -->
        <div class="modal fade" id="showProductModal{{ $product->id }}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content shadow-lg border-0">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">{{ $product->name }}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row g-4">
                            <div class="col-md-5">
                                <img src="{{ $product->image ? asset('storage/'.$product->image) : asset('assets/img/placeholder.jpg') }}"
                                    class="img-fluid rounded shadow-sm" alt="{{ $product->name }}">
                            </div>
                            <div class="col-md-7">
                                <h5>Description</h5>
                                <p>{{ $product->description ?? 'No description provided.' }}</p>
                                <p><strong>Category:</strong> {{ $product->category?->name ?? 'Uncategorized' }}</p>
                                <p><strong>Price:</strong> ${{ number_format($product->price, 2) }}</p>
                                <p><strong>Stock:</strong> {{ $product->stock }}</p>
                                <p><strong>Status:</strong>
                                    <span class="badge bg-{{ $product->status == 'active' ? 'success' : 'secondary' }}">
                                        {{ ucfirst($product->status) }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div class="modal fade" id="editProductModal{{ $product->id }}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content border-0 shadow-lg">
                    <form action="{{ route('seller.products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="modal-header bg-warning text-dark">
                            <h5 class="modal-title">Edit Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body row g-3 p-4">
                            <div class="col-md-6">
                                <label class="form-label">Name</label>
                                <input type="text" name="name" class="form-control" value="{{ $product->name }}" required>
                            </div>
                            <div class="col-md-6">
                                <label for="category_id" class="form-label">Category</label>
                                <select name="category_id" id="category_id" class="form-select" required>
                                    <option value="">Select Category</option>
                                    @foreach($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ old('category_id', $product->category_id ?? '') == $category->id ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Price</label>
                                <input type="number" name="price" step="0.01" class="form-control" value="{{ $product->price }}" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Stock</label>
                                <input type="number" name="stock" class="form-control" value="{{ $product->stock }}" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Status</label>
                                <select name="status" class="form-select">
                                    <option value="active" {{ $product->status == 'active' ? 'selected' : '' }}>Active</option>
                                    <option value="inactive" {{ $product->status == 'inactive' ? 'selected' : '' }}>Inactive</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Description</label>
                                <textarea name="description" rows="3" class="form-control">{{ $product->description }}</textarea>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Product Image</label>
                                <input type="file" name="image" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="submit" class="btn btn-warning">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <div class="modal fade" id="deleteProductModal{{ $product->id }}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title">Confirm Delete</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center p-4">
                        <p class="fs-5">Are you sure you want to delete <strong>{{ $product->name }}</strong>?</p>
                    </div>
                    <div class="modal-footer border-0 d-flex justify-content-center">
                        <form action="{{ route('seller.products.destroy', $product->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger px-4">Delete</button>
                        </form>
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        @empty
        <div class="text-center text-muted mt-5">
            <i class="bi bi-box-seam fs-1"></i>
            <p class="mt-2">No products added yet.</p>
        </div>
        @endforelse
    </div>
</div>

<!-- Add Product Modal -->
<div class="modal fade" id="addProductModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg">
            <form action="{{ route('seller.products.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">Add New Product</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body row g-3 p-4">
                    <div class="col-md-6">
                        <label class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label for="category_id" class="form-label">Category</label>
                        <select name="category_id" id="category_id" class="form-select" required>
                            <option value="">Select Category</option>
                            @foreach($categories as $category)
                            <option value="{{ $category->id }}">
                                {{ $category->name }}
                            </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Price</label>
                        <input type="number" name="price" step="0.01" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Stock</label>
                        <input type="number" name="stock" class="form-control" required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Product Image</label>
                        <input type="file" name="image" class="form-control">
                    </div>
                    <div class="col-12">
                        <label class="form-label">Description</label>
                        <textarea name="description" rows="3" class="form-control"></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="submit" class="btn btn-success px-4">Save Product</button>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    .hover-card {
        transition: transform 0.2s ease-in-out;
    }

    .hover-card:hover {
        transform: translateY(-5px);
    }
</style>
@endsection