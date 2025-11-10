@extends('layouts.guest')
@section('title', 'Register as Talent')
@section('content')

<style>
    /* Smooth card */
    .wizard-wrapper {
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1.2rem;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    .progress {
        height: 10px;
        border-radius: 50px;
        overflow: hidden;
        background: #e9ecef;
    }

    .progress-bar {
        transition: width .4s ease-in-out;
    }

    /* Step titles */
    .step-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #34495e;
        margin-bottom: .7rem;
    }

    /* Wizard step section */
    .step-section {
        display: none;
    }

    .step-section.active {
        display: block;
        animation: fadeStep .35s ease;
    }

    @keyframes fadeStep {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Button styles */
    .btn-primary,
    .btn-success,
    .btn-danger {
        padding: .6rem 1.5rem;
        font-weight: 600;
        border-radius: .5rem;
        transition: all 0.25s ease-in-out;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
    }

    .btn-success:hover {
        transform: translateY(-2px);
    }

    .wizard-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .wizard-header h2 {
        font-weight: 800;
        color: #2d3436;
        letter-spacing: -.5px;
    }

    .wizard-header p {
        font-size: 1rem;
        color: #6c757d;
    }

    .info-note {
        background: rgba(13, 110, 253, 0.1);
        border-left: 4px solid #0d6efd;
        padding: 1rem 1.2rem;
        border-radius: .5rem;
        margin-bottom: 1.3rem;
        font-size: .95rem;
    }

    /* Modal glass style */
    .modal-glass .modal-content {
        background: rgba(255, 255, 255, 0.69);
        backdrop-filter: blur(15px) saturate(180%);
        -webkit-backdrop-filter: blur(15px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
    }
</style>

<section class="start-seller-sec">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-flex">
                <div class="seller-inner-img w-100">
                    <img src="assets/img/aboutus/about-us-04.jpg" class="img-fluid" alt="img">
                </div>
            </div>
            <div class="col-lg-6 d-flex">
                <div class="seller-info-content w-100">
                    <div class="seller-head">
                        <h3>Join Our Talent Hub</h3>
                        <p>Showcase your skills, get verified, and connect with clients globally.
                            Our platform helps talents like you grow professionally and gain exposure.</p>
                    </div>
                    <div class="seller-feature-list d-flex w-100">
                        <div class="sllers-list">
                            <ul>
                                <li><span><i class="feather-check-square"></i></span>Network with companies and clients seeking your expertise.</li>
                                <li><span><i class="feather-check-square"></i></span>Display your skills, experience, and achievements professionally.</li>
                                <li><span><i class="feather-check-square"></i></span>Earn trust and credibility with verified profiles.</li>
                            </ul>
                            <button class="btn btn-primary w-auto" data-bs-toggle="modal" data-bs-target="#talentModal">Register as a Talent</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Talent Modal -->
<div class="modal fade modal-glass" id="talentModal" tabindex="-1" aria-labelledby="talentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="modal-header border-0 bg-gradient text-white" style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title fw-bold" id="talentModalLabel">Talent Registration</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">

                <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <!-- Step 1 -->
                    <div class="step-section active" id="step-1">
                        <div class="step-title"><i class="fas fa-user"></i> Personal Info</div>
                        <div class="info-note">Fill your basic information for profile setup.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Names</label>
                                <input type="text" name="name" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g John Doe" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Address</label>
                                <input type="text" name="address" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g Kigali, Rwanda" required>
                            </div>
                        </div>
                        <div class="text-end mt-4">
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="step-section" id="step-2">
                        <div class="step-title"><i class="fas fa-phone"></i> Contact Info</div>
                        <div class="info-note">Provide your contact details for clients to reach you.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Phone</label>
                                <input type="text" name="phone" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g +250 788 123 456" required >
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" name="email" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g john.doe@example.com" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="step-section" id="step-3">
                        <div class="step-title"><i class="fas fa-star"></i> Talent Info</div>
                        <div class="info-note">Define your skills and expertise.</div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Languages Spoken</label>
                                <input type="text" name="language" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g English, Kinyarwanda" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Talent Category</label>
                                <select name="category_id" class="form-select" required>
                                    <option value="">Select Talent Category</option>
                                    @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold">Description</label>
                                <textarea name="description" class="form-control rounded-3 border-0 shadow-sm" rows="3" placeholder="Describe your talent..."></textarea>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="button" class="btn btn-primary btn-next">Next</button>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="step-section" id="step-4">
                        <div class="step-title"><i class="fas fa-camera"></i> Upload Photo & Submit</div>
                        <div class="info-note">Add a professional photo for your profile.</div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Profile Image</label>
                            <input type="file" name="image" class="form-control rounded-3 border-0 shadow-sm" accept="image/*" required>
                            <div class="invalid-feedback">Please upload a valid image file. Accepts: .jpg, .jpeg, .png</div>
                        </div>
                        <div class="form-check mt-3 mb-3">
                            <input type="checkbox" class="form-check-input" id="terms" required>
                            <label class="form-check-label" for="terms">
                                I accept the <a href="{{ route('user.terms-condition') }}" class="text-primary">Terms & Conditions</a>
                            </label>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-danger btn-prev">Back</button>
                            <button type="submit" class="btn btn-success">Submit Registration</button>
                        </div>
                    </div>
                </form>

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
        }

        nextBtns.forEach(btn => btn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) currentStep++;
            showStep(currentStep);
        }));

        prevBtns.forEach(btn => btn.addEventListener("click", () => {
            if (currentStep > 0) currentStep--;
            showStep(currentStep);
        }));

        showStep(currentStep);
    });
</script>

@endsection