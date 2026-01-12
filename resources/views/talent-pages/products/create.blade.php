@extends('layouts.talents')

@section('title', 'Add New Product')

@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-breadcrumb">
            <span>Talent</span>
            <span>products</span>
        </div>
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">Create New Product</h2>
            <div class="d-flex justify-content-end az-content-header-right">
                <a href="{{ route('talent.products.index') }}" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left"></i> Back
                </a>
            </div>
        </div>
        @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Please fix the following errors:</strong>
            <ul class="mb-0 mt-2">
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <div class="card card-bordered shadow-sm p-4">
            <p class="text-muted">Fill in the details below to create and publish a product.</p>
            <div class="card-inner">

                <form action="{{ route('talent.products.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="row g-4">

                        {{-- Name --}}
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Product Name</label>
                            <input type="text" name="name" class="form-control" required>

                        </div>

                        {{-- Seller --}}
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Seller</label>
                            <input type="text" name="seller_id" class="form-control" value="{{ Auth::user()->seller->id }}" required>
                        </div>

                        {{-- Category --}}
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Category</label>

                            <select name="product_category_id" class="form-select" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>

                        </div>

                        {{-- Price --}}
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Price (RWF)</label>
                            <input type="number" name="price" class="form-control" step="100" required>

                        </div>

                        {{-- Stock --}}
                        <div class="col-md-4">
                            <label class="form-label fw-semibold">Stock Quantity</label>
                            <input type="number" name="stock" class="form-control" required>

                        </div>

                        {{-- Description --}}
                        <div class="col-12">
                            <label class="form-label fw-semibold">Description</label>
                            <textarea name="description" rows="4"
                                class="form-control form-control-lg"
                                placeholder="Write a clear, detailed description..."></textarea>
                        </div>

                        {{-- Image --}}
                        <div class="col-6">
                            <label class="form-label fw-semibold">Product Image</label>
                            <input type="file" name="image" class="form-control" accept="image/*">

                        </div>

                        {{-- Status --}}
                        <div class="col-6">
                            <label class="form-label fw-semibold">Status</label>
                            <select name="status" class="form-select">
                                <option value="active">Active</option>
                                <option value="draft">Draft</option>
                            </select>

                        </div>

                    </div>

                    <button
                        class="btn btn-primary btn-lg mt-4">
                        <i class="icon ni ni-device-floppy me-2"></i> Save Product
                    </button>
                </form>

            </div>
        </div>
    </div>
</div>
@endsection