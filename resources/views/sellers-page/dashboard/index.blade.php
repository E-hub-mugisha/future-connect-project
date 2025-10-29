@extends('layouts.app')
@section('title', 'Seller Dashboard')

@section('content')
<div class="container py-4">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold text-primary">👩‍💼 Seller Dashboard</h2>
        <a href="{{ route('seller.products') }}" class="btn btn-success shadow-sm">
            <i class="bi bi-bag-plus me-1"></i> Manage Products
        </a>
    </div>

    <!-- Stats Overview -->
    <div class="row g-4 mb-4">
        <div class="col-md-3">
            <div class="card border-0 shadow-sm stat-card h-100">
                <div class="card-body text-center">
                    <i class="bi bi-box-seam fs-1 text-primary"></i>
                    <h5 class="mt-2">Total Products</h5>
                    <h3 class="fw-bold">{{ $stats['total_products'] }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-0 shadow-sm stat-card h-100">
                <div class="card-body text-center">
                    <i class="bi bi-check-circle fs-1 text-success"></i>
                    <h5 class="mt-2">Active Products</h5>
                    <h3 class="fw-bold">{{ $stats['active_products'] }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-0 shadow-sm stat-card h-100">
                <div class="card-body text-center">
                    <i class="bi bi-pause-circle fs-1 text-warning"></i>
                    <h5 class="mt-2">Inactive</h5>
                    <h3 class="fw-bold">{{ $stats['inactive_products'] }}</h3>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-0 shadow-sm stat-card h-100">
                <div class="card-body text-center">
                    <i class="bi bi-graph-up-arrow fs-1 text-danger"></i>
                    <h5 class="mt-2">Total Stock</h5>
                    <h3 class="fw-bold">{{ $stats['total_stock'] }}</h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Product List Preview -->
    <div class="card border-0 shadow-sm">
        <div class="card-header bg-light d-flex justify-content-between align-items-center">
            <h5 class="mb-0 fw-semibold">Recent Products</h5>
            <a href="{{ route('seller.products') }}" class="btn btn-outline-primary btn-sm">View All</a>
        </div>
        <div class="card-body">
            @if($products->count() > 0)
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr class="text-muted small">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($products->take(5) as $product)
                                <tr>
                                    <td>
                                        <img src="{{ $product->image ? asset('storage/'.$product->image) : asset('assets/img/placeholder.jpg') }}"
                                             width="50" height="50" class="rounded">
                                    </td>
                                    <td class="fw-semibold">{{ $product->name }}</td>
                                    <td>${{ number_format($product->price, 2) }}</td>
                                    <td>{{ $product->stock }}</td>
                                    <td>
                                        <span class="badge bg-{{ $product->status == 'active' ? 'success' : 'secondary' }}">
                                            {{ ucfirst($product->status) }}
                                        </span>
                                    </td>
                                    <td>{{ $product->created_at->format('M d, Y') }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @else
                <div class="text-center text-muted py-4">
                    <i class="bi bi-box-seam fs-1"></i>
                    <p class="mt-2">You have no products yet. <a href="{{ route('seller.products') }}">Add one now</a>.</p>
                </div>
            @endif
        </div>
    </div>
</div>

<style>
.stat-card {
    border-radius: 1rem;
    transition: transform 0.25s ease-in-out, box-shadow 0.25s;
}
.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
</style>
@endsection
