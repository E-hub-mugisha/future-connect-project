@extends('layouts.guest')

@section('content')

<div>
    {{-- Breadcrumb --}}
    <div class="breadcrumb-bar breadcrumb-bar-info">
        <div class="breadcrumb-img">
            <div class="breadcrumb-left">
                <img src="{{ asset('assets/img/bg/breadcrump-bg-01.png') }}" alt="breadcrumb">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ url('/') }}">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Talent Registration</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title mb-0">Register as Talent</h2>
                </div>
            </div>
        </div>
        <div class="breadcrumb-img">
            <div class="breadcrumb-right">
                <img src="{{ asset('assets/img/bg/breadcrump-bg-02.png') }}" alt="breadcrumb">
            </div>
        </div>
    </div>

    {{-- Form Section --}}
    <div class="page-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="add-property-wrap shadow-sm p-4 rounded bg-white">
                        <div class="property-info mb-4">
                            <h5 class="mb-1">Talent Details</h5>
                            <p class="text-muted">Share your talent details to get featured on Future Connect.</p>
                        </div>

                        <form action="{{ route('talent.register') }}" method="POST">
                            @csrf

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                    <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" name="phone" class="form-control" value="{{ old('phone') }}">
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" class="form-control" value="{{ old('email') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Address <span class="text-danger">*</span></label>
                                    <input type="text" name="address" class="form-control" value="{{ old('address') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Skill <span class="text-danger">*</span></label>
                                    <input type="text" name="skill" class="form-control" value="{{ old('skill') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Talent Category <span class="text-danger">*</span></label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $cat)
                                            <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>
                                                {{ $cat->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="col-md-12">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" class="form-control" rows="3">{{ old('description') }}</textarea>
                                </div>

                                <div class="col-md-12">
                                    <label class="form-label">Upload Photo (URL)</label>
                                    <input type="text" name="image" class="form-control" value="{{ old('image') }}">
                                </div>

                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary w-100">Save Talent</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
