@extends('layouts.guest')

@section('content')

<style>
    .wizard-card {
        border: 1px solid #e6e6e6;
        border-radius: 1em;
        background: #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        transition: 0.3s;
        padding: 2rem;
    }

    .progress {
        height: 8px;
        margin-bottom: 2rem;
    }

    .step-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #2c3e50;
    }

    .step-section {
        display: none;
    }

    .step-section.active {
        display: block;
    }

    .btn-next, .btn-prev {
        min-width: 120px;
    }
</style>

<div class="talent-section-two page-content" style="background: #f2f6fa;">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">

                <!-- Header -->
                <div class="text-center mb-4">
                    <h2 class="fw-bold">Talent Registration Wizard</h2>
                    <p class="text-primary">
                        Complete each step to register and showcase your talent.
                    </p>
                </div>

                <!-- Progress Bar -->
                <div class="progress">
                    <div id="progressBar" class="progress-bar bg-primary" role="progressbar" style="width: 25%"></div>
                </div>

                <!-- Form Card -->
                <div class="wizard-card">
                    <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <!-- Step 1 -->
                        <div class="step-section active" id="step-1">
                            <div class="step-title">👤 Personal Information</div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                    <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Address <span class="text-danger">*</span></label>
                                    <input type="text" name="address" class="form-control" value="{{ old('address') }}" required>
                                </div>
                            </div>
                            <div class="text-end mt-3">
                                <button type="button" class="btn btn-primary btn-next">Next</button>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="step-section" id="step-2">
                            <div class="step-title">📞 Contact Information</div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" name="phone" class="form-control" value="{{ old('phone') }}">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" class="form-control" value="{{ old('email') }}" required>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <button type="button" class="btn btn-secondary btn-prev">Previous</button>
                                <button type="button" class="btn btn-primary btn-next">Next</button>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="step-section" id="step-3">
                            <div class="step-title">⭐ Talent Information</div>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Language <span class="text-danger">*</span></label>
                                    <input type="text" name="language" class="form-control" value="{{ old('language') }}" required>
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
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <button type="button" class="btn btn-secondary btn-prev">Previous</button>
                                <button type="button" class="btn btn-primary btn-next">Next</button>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="step-section" id="step-4">
                            <div class="step-title">📸 Upload & Submit</div>
                            <div class="mb-3">
                                <label class="form-label">Upload Photo</label>
                                <input type="file" name="image" class="form-control">
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <button type="button" class="btn btn-secondary btn-prev">Previous</button>
                                <button type="submit" class="btn btn-success">
                                    <i class="bi bi-check-circle me-1"></i> Submit Talent
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
                <!-- End Card -->

            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        const steps = document.querySelectorAll(".step-section");
        const nextBtns = document.querySelectorAll(".btn-next");
        const prevBtns = document.querySelectorAll(".btn-prev");
        const progressBar = document.getElementById("progressBar");
        let currentStep = 0;

        function showStep(step) {
            steps.forEach((s, i) => s.classList.toggle("active", i === step));
            progressBar.style.width = ((step + 1) / steps.length) * 100 + "%";
        }

        nextBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });
        });

        showStep(currentStep);
    });
</script>

@endsection
