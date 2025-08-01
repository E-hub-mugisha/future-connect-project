@extends('layouts.guest')

@section('content')

<style>
    .postLists.cards {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        /* text-align: center; */
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }
</style>

<div class="talent-section-two page-content" style="background: #aac2e1a8;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <!-- Category Section -->
                <div class="marketing-section">
                    <div class="marketing-content">
                        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
                            <h2 class="mb-2"><span class="title-bg"></span>Talent Registration<span
                                    class="title-bg2"></span></h2>
                            <p style="color: #319BF9;">Register as talent and Connect with the next wave of talents, guiding you with fresh perspectives</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="postLists cards p-4">
                    <div class="mb-4">
                        <h5 class="mb-1">Talent Details</h5>
                        <p class="text-muted">Share your talent details to get featured on Future Connect.</p>
                    </div>

                    <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="row g-3">
                            <div class="col-md-4">
                                <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
                            </div>

                            <div class="col-md-4">
                                <label class="form-label">Phone Number</label>
                                <input type="text" name="phone" class="form-control" value="{{ old('phone') }}">
                            </div>

                            <div class="col-md-4">
                                <label class="form-label">Email <span class="text-danger">*</span></label>
                                <input type="email" name="email" class="form-control" value="{{ old('email') }}" required>
                            </div>

                            <div class="col-md-4">
                                <label class="form-label">Address <span class="text-danger">*</span></label>
                                <input type="text" name="address" class="form-control" value="{{ old('address') }}" required>
                            </div>

                            <div class="col-md-4">
                                <label class="form-label">Skill <span class="text-danger">*</span></label>
                                <input type="text" name="skill" class="form-control" value="{{ old('skill') }}" required>
                            </div>

                            <div class="col-md-4">
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

                            <div class="col-md-6">
                                <label class="form-label">Short Story</label>
                                <textarea name="story" class="form-control" rows="3">{{ old('Short story') }}</textarea>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Description</label>
                                <textarea name="description" class="form-control" rows="3">{{ old('description') }}</textarea>
                            </div>

                            <div class="col-md-12">
                                <label class="form-label">Upload Photo</label>
                                <input type="file" name="image" class="form-control" value="{{ old('image') }}">
                            </div>

                            <div class="col-md-3">
                                <button type="submit" class="btn btn-primary w-100">Save Talent</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>


@endsection