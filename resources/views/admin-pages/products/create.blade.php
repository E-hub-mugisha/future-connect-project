@extends('layouts.app')

@section('title', 'Add New Product')

@section('content')
<div class="container py-5">

    <div class="card border-0 shadow-lg"
        style="
            border-radius: 1.4rem;
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(14px) saturate(180%);
        "
    >
        <div class="card-header border-0 py-4"
            style="background: transparent;"
        >
            <h3 class="fw-bold mb-0 text-dark">
                <i class="icon ni ni-shopping-bag-plus me-2 text-primary"></i>
                Create New Product
            </h3>
            <p class="mt-1 text-muted">Add a new item to your shop catalog</p>
        </div>

        <div class="card-body px-4 py-4">

            <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="row g-4">

                    {{-- Name --}}
                    <div class="col-md-4">
                        <label class="form-label fw-semibold">Product Name</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-package"></i>
                            </span>
                            <input type="text" name="name" class="form-control" required>
                        </div>
                    </div>

                    {{-- Seller --}}
                    <div class="col-md-4">
                        <label class="form-label fw-semibold">Seller</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-user"></i>
                            </span>
                            <select name="seller_id" class="form-select" required>
                                <option value="">Select Seller</option>
                                @foreach($sellers as $seller)
                                <option value="{{ $seller->id }}">{{ $seller->company_name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    {{-- Category --}}
                    <div class="col-md-4">
                        <label class="form-label fw-semibold">Category</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-category"></i>
                            </span>
                            <select name="product_category_id" class="form-select" required>
                                <option value="">Select Category</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    {{-- Price --}}
                    <div class="col-md-4">
                        <label class="form-label fw-semibold">Price (RWF)</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-currency-krw"></i>
                            </span>
                            <input type="number" name="price" class="form-control" step="100" required>
                        </div>
                    </div>

                    {{-- Stock --}}
                    <div class="col-md-4">
                        <label class="form-label fw-semibold">Stock Quantity</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-stack-3"></i>
                            </span>
                            <input type="number" name="stock" class="form-control" required>
                        </div>
                    </div>

                    {{-- Description --}}
                    <div class="col-12">
                        <label class="form-label fw-semibold">Description</label>
                        <textarea name="description" rows="4"
                            class="form-control form-control-lg"
                            placeholder="Write a clear, detailed description..."
                        ></textarea>
                    </div>

                    {{-- Image --}}
                    <div class="col-6">
                        <label class="form-label fw-semibold">Product Image</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-photo"></i>
                            </span>
                            <input type="file" name="image" class="form-control" accept="image/*">
                        </div>
                    </div>

                    {{-- Status --}}
                    <div class="col-6">
                        <label class="form-label fw-semibold">Status</label>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text bg-white">
                                <i class="icon ni ni-check"></i>
                            </span>
                            <select name="status" class="form-select">
                                <option value="active">Active</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>
                    </div>

                </div>

                <button
                    class="btn btn-primary btn-lg mt-4"
                    style="border-radius: 0.8rem; font-size: 1.1rem;"
                >
                    <i class="icon ni ni-device-floppy me-2"></i> Save Product
                </button>
            </form>

        </div>
    </div>
</div>

@endsection
