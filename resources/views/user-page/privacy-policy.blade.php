@extends('layouts.guest')
@section('content')

<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    Privacy Policy
                </h2>
            </div>
        </div>
    </div>
    
</div>
<!-- /Breadcrumb -->

<!-- Privacy Policy -->
<div class="page-content">
    <div class="privacy-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="terms-policy">
                        <p class="mb-3">At DreamsGigs, we are committed to protecting your privacy. This policy outlines how we handle your information:</p>
                        <h6 class="mb-2">Information We Collect</h6>
                        <ul>
                            <li class="mb-1"><span class="blue-dot"></span>Personal data, such as your name, email address, and payment details, collected during registration or purchases.</li>
                            <li class="mb-3"><span class="blue-dot"></span>Non-personal data, including device information, browser type, and usage patterns, to improve user experience.</li>
                        </ul>
                        <h6 class="mb-2">How We Use Your Information</h6>
                        <ul>
                            <li class="mb-1"><span class="blue-dot"></span>To provide access to courses and services.</li>
                            <li class="mb-1"><span class="blue-dot"></span>To process payments securely.</li>
                            <li class="mb-1"><span class="blue-dot"></span>To deliver personalized content and updates.</li>
                            <li class="mb-3"><span class="blue-dot"></span>For research, analytics, and marketing (with your consent when required).</li>
                        </ul>
                        <h6 class="mb-2">Data Protection</h6>
                        <ul>
                            <li class="mb-1"><span class="blue-dot"></span>We implement technical and organizational measures to safeguard your data.</li>
                            <li class="mb-3"><span class="blue-dot"></span>Your information is not sold or shared with third parties except for essential service providers (e.g., payment processors) or legal obligations.</li>
                        </ul>
                        <h6 class="mb-2">Third-Party Links</h6>
                        <ul>
                            <li class="mb-1"><span class="blue-dot"></span>Our platform may include links to external websites.</li>
                            <li class="mb-3"><span class="blue-dot"></span>We are not responsible for their privacy practices, and you should review their policies.</li>
                        </ul>
                        <h6 class="mb-2">Your Rights</h6>
                        <ul>
                            <li class="mb-3">Access, update, or delete your personal information by contacting us at [Insert Contact Information].</li>
                        </ul>
                        <h6 class="mb-2">Policy Updates</h6>
                        <ul>
                            <li class="mb-3">We may update this policy and notify you of significant changes through our platform or email.</li>
                            <li class="mb-0">For any questions or concerns about this Privacy Policy, contact us at <a href="https://dreamgigs.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8beff9eeeae6ece2ecf8cbeef3eae6fbe7eea5e8e4e6">[email&#160;protected]</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Privacy Policy -->
@endsection