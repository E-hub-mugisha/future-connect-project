@extends('layouts.guest')

@section('content')
<div class="container py-5">
    <div class="card shadow-lg border-0 rounded-4">
        <div class="card-body p-4 p-md-5" id="formContainer">

            <div class="text-center mb-4">
                <h2 class="fw-bold text-primary mb-2">🌍 Create Your Diaspora Account</h2>
                <p class="text-muted mb-0">Join the global Future Connect community and make an impact.</p>
            </div>

            <!-- Progress Bar -->
            <div class="progress mb-4" style="height: 8px;">
                <div id="progressBar" class="progress-bar bg-primary" style="width: 20%;"></div>
            </div>
            @if ($errors->any())
            <div class="alert alert-danger">
                <h6 class="mb-2 fw-bold">❗ Please fix the following errors:</h6>
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif


            <form id="diasporaForm" method="POST" action="{{ route('diaspora.store') }}" enctype="multipart/form-data">
                @csrf

                <!-- Step 1: Personal Info -->
                <div class="form-step active">
                    <h5 class="mb-3">👤 Personal Information</h5>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">First Name</label>
                            <input type="text" name="first_name" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Last Name</label>
                            <input type="text" name="last_name" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Display Name</label>
                            <input type="text" name="display_name" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone</label>
                            <input type="text" name="phone" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Country</label>
                            <input type="text" name="country" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">City</label>
                            <input type="text" name="city" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Passport Number</label>
                            <input type="text" name="passport_number" class="form-control">
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary next-step">Next</button>
                    </div>
                </div>

                <!-- Step 2: Professional -->
                <div class="form-step">
                    <h5 class="mb-3">💼 Professional Details</h5>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Occupation</label>
                            <input type="text" name="occupation" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Purpose</label>
                            <select name="purpose" class="form-select">
                                <option value="">Select...</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="investor">Investor</option>
                                <option value="mentor">Mentor</option>
                                <option value="partner">Partner</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Bio</label>
                            <textarea name="bio" rows="4" class="form-control" placeholder="Tell us a bit about yourself..."></textarea>
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-secondary prev-step">Back</button>
                        <button type="button" class="btn btn-primary next-step">Next</button>
                    </div>
                </div>

                <!-- Step 3: Documents -->
                <div class="form-step">
                    <h5 class="mb-3">📄 Upload Verification Documents</h5>
                    <div class="row g-4">
                        <div class="col-md-6 text-center">
                            <label class="form-label">ID Document</label>
                            <input type="file" name="id_document_path" id="id_document" class="form-control" accept=".jpg,.jpeg,.png,.pdf">
                            <img id="idPreview" class="img-fluid mt-3 d-none rounded-3 shadow-sm" style="max-height: 200px;">
                        </div>
                        <div class="col-md-6 text-center">
                            <label class="form-label">Proof of Address</label>
                            <input type="file" name="address_proof_path" id="address_proof" class="form-control" accept=".jpg,.jpeg,.png,.pdf">
                            <img id="addressPreview" class="img-fluid mt-3 d-none rounded-3 shadow-sm" style="max-height: 200px;">
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-secondary prev-step">Back</button>
                        <button type="button" class="btn btn-primary next-step">Next</button>
                    </div>
                </div>

                <!-- Step 4: Preferences -->
                <div class="form-step">
                    <h5 class="mb-3">🌟 Preferences</h5>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Preferred Currency</label>
                            <select name="preferred_currency" class="form-select">
                                <option value="">Select...</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="RWF">RWF</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Preferred Contact</label>
                            <select name="preferred_contact" class="form-select">
                                <option value="">Select...</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Sponsorship Preferences</label>
                            <textarea name="sponsorship_preferences" rows="4" class="form-control" placeholder="Type your sponsorship preferences..."></textarea>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Links</label>
                            <input type="text" name="links[]" class="form-control mb-2" placeholder="Add link">
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="newsletter_opt_in" value="1" id="newsletter_opt_in">
                                <label class="form-check-label" for="newsletter_opt_in">
                                    Subscribe to updates
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-secondary prev-step">Back</button>
                        <button type="button" class="btn btn-primary next-step">Next</button>
                    </div>
                </div>

                <!-- Step 5: Security -->
                <div class="form-step">
                    <h5 class="mb-3">🔒 Account Security</h5>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" required>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Confirm Password</label>
                            <input type="password" name="password_confirmation" class="form-control" required>
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-secondary prev-step">Back</button>
                        <button type="submit" class="btn btn-success">Submit Registration</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>

<!-- JavaScript for Multi-step Wizard -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const steps = document.querySelectorAll('.form-step');
        const nextBtns = document.querySelectorAll('.next-step');
        const prevBtns = document.querySelectorAll('.prev-step');
        const progress = document.getElementById('progressBar');
        let step = 0;

        function showStep() {
            steps.forEach((s, i) => s.classList.toggle('active', i === step));
            progress.style.width = ((step + 1) / steps.length) * 100 + '%';
        }

        nextBtns.forEach(btn => btn.addEventListener('click', () => {
            if (step < steps.length - 1) step++;
            showStep();
        }));

        prevBtns.forEach(btn => btn.addEventListener('click', () => {
            if (step > 0) step--;
            showStep();
        }));

        // File previews
        function previewFile(inputId, imgId) {
            const input = document.getElementById(inputId);
            const img = document.getElementById(imgId);
            input?.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        img.src = reader.result;
                        img.classList.remove('d-none');
                    };
                    reader.readAsDataURL(file);
                } else {
                    img.classList.add('d-none');
                }
            });
        }

        previewFile('id_document', 'idPreview');
        previewFile('address_proof', 'addressPreview');
    });
</script>

<style>
    .form-step {
        display: none;
    }

    .form-step.active {
        display: block;
        animation: fadeIn 0.4s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .progress-bar {
        transition: width 0.4s ease;
    }
</style>
@endsection