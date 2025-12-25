@extends('layouts.talents')

@section('title', 'Edit Product: ' . $product->name)

@section('content')
<div class="container py-5">

    <div class="card shadow-lg border-0"
         style="border-radius: 1.2rem; backdrop-filter: blur(12px); background: rgba(255,255,255,0.85);">
        <div class="card-header bg-white border-0 py-4">
            <h3 class="fw-bold mb-0">
                <i class="ti ti-edit me-2 text-info"></i> Edit Product
            </h3>
        </div>

        <div class="card-body">
            <form action="{{ route('talent.products.update', $product->id) }}" method="POST"
                  enctype="multipart/form-data">
                @csrf
                @method('PUT')

                {{-- Name --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Product Name</label>
                    <input type="text" name="name" class="form-control form-control-lg"
                           value="{{ $product->name }}" required>
                </div>

                {{-- Category --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Category</label>
                    <select name="product_category_id" class="form-select form-select-lg" required>
                        @foreach($categories as $cat)
                        <option value="{{ $cat->id }}" {{ $product->product_category_id == $cat->id ? 'selected' : '' }}>
                            {{ $cat->name }}
                        </option>
                        @endforeach
                    </select>
                </div>

                {{-- Price --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Price (RWF)</label>
                    <input type="number" name="price" class="form-control form-control-lg"
                           step="100" value="{{ $product->price }}" required>
                </div>

                {{-- Stock --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Stock Quantity</label>
                    <input type="number" name="stock" class="form-control form-control-lg"
                           value="{{ $product->stock }}" required>
                </div>

                {{-- Description --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Description</label>
                    <textarea name="description" rows="4" class="form-control">{{ $product->description }}</textarea>
                </div>

                {{-- Image --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Product Image</label>
                    <input type="file" class="form-control" name="image" accept="image/*">

                    @if($product->image)
                        <div class="mt-3">
                            <img src="{{ asset('storage/' . $product->image) }}" 
                                 alt="Product Image" 
                                 class="img-fluid rounded shadow-sm" width="160">
                        </div>
                    @endif
                </div>

                {{-- Status --}}
                <div class="mb-3">
                    <label class="form-label fw-semibold">Status</label>
                    <select name="status" class="form-select">
                        <option value="active" {{ $product->status == 'active' ? 'selected' : '' }}>Active</option>
                        <option value="draft" {{ $product->status == 'draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>

                <button class="btn btn-info btn-lg w-100">
                    <i class="ti ti-device-floppy me-1"></i> Update Product
                </button>
            </form>
        </div>
    </div>

</div>
@endsection
