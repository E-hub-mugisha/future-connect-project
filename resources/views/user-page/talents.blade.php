@extends('layouts.guest')
@section('title', 'Talent Marketplace – Discover Skilled Professionals')
@section('content')

<!-- SwiperJS for carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

@php

$categories = \App\Models\Category::all();

@endphp

<style>
    #tranding {
        position: relative;
        overflow: hidden;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 1rem 0;
        border-radius: 2rem;
        margin-top: 2rem;
        box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
        z-index: 1;
        height: 22rem;
    }

    .tranding-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        align-items: center;
        gap: 2rem;
        width: 80%;
        margin: 0 auto;
    }

    .tranding-image-slider {
        width: 100%;
        height: 20rem;
        perspective: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tranding-image-slider .swiper-slide {
        height: 15rem;
        width: 15rem;
        transition: transform 0.5s ease, opacity 0.5s ease;
        transform: scale(0.9);
        z-index: 1;
        opacity: 0.6;
    }

    .tranding-image-slider .swiper-slide.swiper-slide-active {
        transform: scale(1.1);
        z-index: 3;
        opacity: 1;
        margin: 0 auto;
    }

    .tranding-image-slider .swiper-slide img {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .tranding-caption-slider {
        width: 80%;
        text-align: left;
    }

    .tranding-caption-slider .swiper-slide {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .tranding-caption-slider .swiper-slide-active {
        opacity: 1;
        transform: translateY(0);
    }

    .tranding-slide-caption p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .tranding-line-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        border: 2px solid #fff;
        border-radius: 30px;
        padding: 0.5rem 1.2rem;
        transition: all 0.3s ease;
    }

    .tranding-line-btn:hover {
        background-color: #fff;
        color: #319BF9;
    }

    .tranding-slider-control {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4 ease;
    }

    .tranding-slider-control .slider-arrow {
        background: var(--white);
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        left: 3%;
        transform: translateX(-42%);
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-arrow {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .slider-arrow:hover {
        background: #fff;
        color: #319BF9;
    }

    /* Bubbles */
    .bubbles {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 0;
    }

    .bubbles span {
        position: absolute;
        bottom: -150px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: bubbleUp 15s infinite;
        opacity: 0.6;
    }

    .bubbles span:nth-child(1) {
        left: 10%;
        width: 60px;
        height: 60px;
        animation-duration: 20s;
    }

    .bubbles span:nth-child(2) {
        left: 30%;
        animation-delay: 2s;
    }

    .bubbles span:nth-child(3) {
        left: 50%;
        width: 80px;
        height: 80px;
        animation-duration: 25s;
    }

    .bubbles span:nth-child(4) {
        left: 70%;
        animation-delay: 1s;
        width: 30px;
        height: 30px;
    }

    .bubbles span:nth-child(5) {
        left: 90%;
        animation-duration: 18s;
    }

    @keyframes bubbleUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
        }

        50% {
            opacity: 0.8;
        }

        100% {
            transform: translateY(-1000px) scale(1.3);
            opacity: 0;
        }
    }
</style>

<!-- Modern UI Styling -->
<style>
    .modern-tabs .nav-link {
        border: none !important;
        background: #f8f9fa;
        margin-right: 8px;
        padding: 10px 18px;
        border-radius: 10px;
        font-weight: 500;
        transition: all 0.2s ease;
        color: #555;
    }

    .modern-tabs .nav-link:hover {
        background: #e9ecef;
        color: #000;
    }

    .modern-tabs .nav-link.active {
        background: #0d6efd;
        color: #fff !important;
        box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
    }

    .modern-tab-content {
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        color: #fff;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        border: 1px solid #eee;
    }
</style>

<!-- Modern Tabs Section -->
<section class="container py-5">

    <!-- <h2 class="mb-4 fw-bold text-dark">Explore Opportunities</h2> -->

    <!-- Tabs -->
    <ul class="nav nav-tabs modern-tabs mb-4 justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active rounded-pill btn-outline-primary" id="marketplace-tab" data-bs-toggle="tab" data-bs-target="#marketplace" type="button" role="tab">
                Talent Marketplace
            </button>
        </li>

        <li class="nav-item" role="presentation">
            <button class="nav-link rounded-pill btn-outline-primary" id="become-tab" data-bs-toggle="tab" data-bs-target="#become" type="button" role="tab">
                Become a Talent
            </button>
        </li>

        <li class="nav-item" role="presentation">
            <button class="nav-link rounded-pill btn-outline-primary" id="categories-tab" data-bs-toggle="tab" data-bs-target="#categories" type="button" role="tab">
                Talent Categories
            </button>
        </li>

        <li class="nav-item" role="presentation">
            <button class="nav-link rounded-pill btn-outline-primary" id="networking-tab" data-bs-toggle="tab" data-bs-target="#networking" type="button" role="tab">
                Networking Hub
            </button>
        </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content modern-tab-content" id="myTabContent">

        <div class="tab-pane fade show active" id="marketplace" role="tabpanel">
            <section id="tranding">
                <div class="bubbles">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>

                <div class="tranding-grid">
                    <!-- Caption Slider -->
                    <div class="swiper tranding-caption-slider" id="captionSwiper">
                        <div class="swiper-wrapper">
                            @foreach ($featuredTalents as $talent)
                            <div class="swiper-slide">
                                <div class="tranding-slide-caption">
                                    <h3 class="text-2xl text-white font-bold mb-2">{{ $talent->name }}</h3>
                                    <p>
                                        Passionate {{ $talent->skill ?? 'creative' }} blending
                                        {{ $talent->category->name ?? 'various disciplines' }} into meaningful art and innovation.
                                    </p>
                                    <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn">
                                        <i class="feather-arrow-right"></i> Read More
                                    </a>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <!-- Image Slider -->
                    <div class="swiper tranding-image-slider" id="imageSwiper">
                        <div class="swiper-wrapper">
                            @foreach ($featuredTalents as $talent)
                            <div class="swiper-slide">
                                <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/home/banner-image.svg') }}"
                                    alt="{{ $talent->name }}">
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="tranding-slider-control">
                    <div class="swiper-button-prev slider-arrow"><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <div class="swiper-button-next slider-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></div>
                </div>
            </section>
        </div>

        <div class="tab-pane fade" id="become" role="tabpanel">
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

                .seller-info-content {
                    background: #319bf970;
                    backdrop-filter: blur(15px) saturate(180%);
                    /* box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36); */
                    border-radius: 10px;
                    padding: 40px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    margin: auto 0 auto -100px;
                    height: 420px;
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
                                        <button class="btn btn-outline-primary rounded-pill w-auto" data-bs-toggle="modal" data-bs-target="#talentModal">Register as a Talent</button>
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
                                            <input type="text" name="phone" class="form-control rounded-3 border-0 shadow-sm" placeholder="e.g +250 788 123 456" required>
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
        </div>

        <div class="tab-pane fade" id="categories" role="tabpanel">
            <div class="popular-section-two">
                <div class="container">
                    <div class="section-header-two text-center aos-init aos-animate" data-aos="fade-up">
                        <h2 class="mb-2"><span class="title-bg"></span>Popular Categories<span class="title-bg2"></span></h2>
                        <p>Unlock a world of opportunities and take control of your future</p>
                    </div>
                    <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-speakerphone"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Digital Marketing</a></h6>
                                <p>100 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-code-circle"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Programming &amp; Tech</a></h6>
                                <p>120 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-pencil-star"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Digital Marketing</a></h6>
                                <p>130 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-camera-heart"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Photography</a></h6>
                                <p>68 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-robot"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Artificial Intelligence</a></h6>
                                <p>148 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-music"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Music &amp; Audio</a></h6>
                                <p>90 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-file-typography"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Design</a></h6>
                                <p>63 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-briefcase"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Business</a></h6>
                                <p>145 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-camera-heart"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Marketing &amp; Sales</a></h6>
                                <p>90 Service</p>
                            </div>
                        </div>
                        <div class="col d-flex">
                            <div class="pop-category flex-fill aos-init aos-animate" data-aos="flip-left">
                                <span><i class="ti ti-social"></i></span>
                                <h6 class="mb-1"><a href="javascript:void(0);">Social Media</a></h6>
                                <p>125 Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-pane fade" id="networking" role="tabpanel">
            <section class="hero-section">
                <div class="banner-bg-imgs">
                    <img src="http://localhost:8000/assets/img/bg/banner-bg-01.png" class="banner-bg-one" alt="img">
                    <img src="http://localhost:8000/assets/img/bg/banner-bg-02.png" class="banner-bg-two" alt="img">
                    <!-- <img src="http://localhost:8000/assets/img/bg/banner-bg-04.png" class="banner-bg-four" alt="img"> -->
                </div>
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="banner-content aos-init aos-animate" data-aos="fade-up">
                                <div class="banner-head">
                                    <h1 class="mb-2">Networking Hub – Connect with Talents &amp; Opportunities</h1>
                                    <p class="d-inline-flex">A large number of individuals use us to transform their thoughts into the real world and connect with like-minded professionals.</p>
                                </div>
                                <div class="banner-form">
                                    <form action="#">
                                        <div class="banner-search-list">
                                            <div class="input-block">
                                                <label>Category</label>
                                                <select class="select select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="6">Select</option>
                                                    <option>Digital Marketing</option>
                                                    <option>Writing</option>
                                                    <option>Social Media</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false" aria-labelledby="select2-tkto-container"><span class="select2-selection__rendered" id="select2-tkto-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span><span class="select2 select2-container select2-container--default select2-hidden-accessible" dir="ltr" data-select2-id="5" style="width: 100%;" tabindex="-1" aria-hidden="true"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-one5-container"><span class="select2-selection__rendered" id="select2-one5-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ywkf-container"><span class="select2-selection__rendered" id="select2-ywkf-container" role="textbox" aria-readonly="true"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                            <div class="input-block">
                                                <label>Location</label>
                                                <div class="input-locaion">
                                                    <input type="text" class="form-control" placeholder="Miami, USA">
                                                    <img src="assets/img/icons/map-pin-heart.svg" alt="Icon">
                                                </div>
                                            </div>
                                            <div class="input-block border-0">
                                                <label>Keyword</label>
                                                <input type="text" class="form-control" placeholder="Need Graphic Designer">
                                            </div>
                                        </div>
                                        <div class="input-block-btn">
                                            <button class="btn btn-lg btn-primary d-inline-flex align-items-center" type="submit">
                                                <i class="ti ti-search"></i> Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="popular-search">
                                    <h5>Popular Searches : </h5>
                                    <ul>
                                        <li><a href="service-grid-sidebar.html">Online Mockup</a></li>
                                        <li><a href="service-grid-sidebar.html">Carpentering</a></li>
                                        <li><a href="service-grid-sidebar.html">Event Organiser</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="banner-img">
                                <!-- <div class="banner-img-right">
                        <img src="http://localhost:8000/assets/img/bg/provide-bg.jpg" class="img-fluid" alt="img">
                    </div> -->
                                <img src="http://localhost:8000/assets/img/bg/banner-small-bg-01.svg" class="banner-small-bg-one" alt="img">
                                <img src="http://localhost:8000/assets/img/bg/banner-small-bg-02.png" class="banner-small-bg-two" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-us-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="row me-4">
                                <div class="col-sm-6">
                                    <div class="about-inner-img">
                                        <img src="http://localhost:8000/assets/img/bg/provide-bg.jpg" class="img-fluid" alt="img">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="about-inner-img">
                                                <img src="http://localhost:8000/assets/img/aboutus/about-us-02.jpg" class="img-fluid" alt="img">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="about-inner-img">
                                                <img src="http://localhost:8000/assets/img/aboutus/about-us-03.jpg" class="img-fluid" alt="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-us-info">
                                <div class="about-us-head">
                                    <h6>About the Networking Hub</h6>
                                    <h2>The <strong>Networking Hub</strong> gateway to meaningful professional connections.</h2>
                                    <p>
                                        your gateway to meaningful professional connections.
                                        Whether you are a talent seeking opportunities, a project owner looking for collaborators, or an entrepreneur looking to expand your network, this hub connects you with the right people.
                                    </p>
                                    <h5>Our Mission</h5>
                                    <p>At Future Connect, our mission is to empower individuals and businesses by facilitating easy access to a diverse range of high-quality services. We believe in creating a collaborative and inclusive marketplace that fosters growth,
                                        creativity, and mutual success.
                                    </p>
                                </div>
                                <div class="about-features">
                                    <ul class="list-one">
                                        <li><span><img src="http://localhost:8000/assets/img/icons/target-arrow-icon.svg" alt="img"></span>Diverse Network of Professionals</li>
                                        <li><span><img src="http://localhost:8000/assets/img/icons/target-arrow-icon.svg" alt="img"></span>Trust and Transparency</li>
                                    </ul>
                                    <ul class="list-two">
                                        <li><span><img src="http://localhost:8000/assets/img/icons/target-arrow-icon.svg" alt="img"></span>User Friendly Platform</li>
                                        <li><span><img src="http://localhost:8000/assets/img/icons/target-arrow-icon.svg" alt="img"></span>Innovation In Technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>

</section>




<div class="container p-4">
    <section id="tranding">
        <div class="bubbles">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="tranding-grid">
            <!-- Caption Slider -->
            <div class="swiper tranding-caption-slider" id="captionSwiper">
                <div class="swiper-wrapper">
                    @foreach ($featuredTalents as $talent)
                    <div class="swiper-slide">
                        <div class="tranding-slide-caption">
                            <h3 class="text-2xl text-white font-bold mb-2">{{ $talent->name }}</h3>
                            <p>
                                Passionate {{ $talent->skill ?? 'creative' }} blending
                                {{ $talent->category->name ?? 'various disciplines' }} into meaningful art and innovation.
                            </p>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="tranding-line-btn">
                                <i class="feather-arrow-right"></i> Read More
                            </a>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            <!-- Image Slider -->
            <div class="swiper tranding-image-slider" id="imageSwiper">
                <div class="swiper-wrapper">
                    @foreach ($featuredTalents as $talent)
                    <div class="swiper-slide">
                        <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/home/banner-image.svg') }}"
                            alt="{{ $talent->name }}">
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Controls -->
        <div class="tranding-slider-control">
            <div class="swiper-button-prev slider-arrow"><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div class="swiper-button-next slider-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></div>
        </div>
    </section>
</div>


<div class="container" style="margin-top: 4.5rem;">
    <div class="trend-section ">
        <div class="row align-items-center">
            <div class="col-sm-10">
                <h5 data-aos="fade-up"><span class="title-bg"></span>Trending Categories of talents<span class="title-bg2"></span></h5>
                <p data-aos="fade-up">Discover inspiring stories, impactful skills, and creative talent across Africa</p>
            </div>
            <div class="col-sm-2 text-sm-end">
                <div class="owl-nav trend-nav nav-control nav-top"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="trend-items owl-carousel owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-1977px, 0px, 0px); transition: 2s; width: 4284px;">
                            @foreach($categories as $cat)
                            <div class="owl-item cloned" style="width: 307.5px; margin-right: 22px;">
                                <div class="trend-box">
                                    <div class="trend-info">

                                        <h6><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></h6>
                                        @if(isset($cat->talents_count))
                                        <p>{{ $cat->talents_count }} talents</p>
                                        @else
                                        <p>0 talents</p>
                                        @endif
                                    </div>
                                    <style>
                                        .slide-line-btn {
                                            position: relative;
                                            display: inline-flex;
                                            align-items: center;
                                            gap: 6px;
                                            padding: 6px 16px;
                                            color: #fff;
                                            background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
                                            border-radius: 30px;
                                            text-decoration: none;
                                            overflow: hidden;
                                            z-index: 1;
                                        }

                                        .slide-line {
                                            position: absolute;
                                            top: 100%;
                                            left: -100%;
                                            width: 200%;
                                            height: 100%;
                                            background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%);
                                            transform: rotate(45deg);
                                            animation: slideRightUp 2s ease-in-out infinite;
                                            z-index: 0;
                                        }

                                        .slide-line:nth-child(2) {
                                            animation-delay: 0s;
                                            opacity: 0;
                                            width: 50%;
                                        }

                                        .slide-line:nth-child(3) {
                                            animation-delay: 0s;
                                            opacity: 0.5;
                                            width: 150%;
                                        }

                                        .slide-line:nth-child(4) {
                                            animation-delay: 0.8s;
                                            opacity: 0.7;
                                            width: 200%;
                                        }

                                        @keyframes slideRightUp {
                                            0% {
                                                top: 100%;
                                                left: -100%;
                                            }

                                            50% {
                                                top: 0%;
                                                left: 0%;
                                            }

                                            100% {
                                                top: -100%;
                                                left: 100%;
                                            }
                                        }

                                        .slide-line-btn span {
                                            pointer-events: none;
                                        }
                                    </style>

                                    <a href="{{ route('user.talents.category', $cat->slug) }}" class="slide-line-btn">
                                        <i class="feather-arrow-right"></i>Read More
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                        <span class="slide-line"></span>
                                    </a>

                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="owl-dots disabled"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Trending Categories -->

<style>
    .postLists.cards .post-item.m-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-align: center;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }

    .postLists.cards .post-item.m-card .img {
        position: relative;
        display: block;
        margin-top: -1.75em;
        width: calc(100% - .85em);
        /* padding-top: calc(89.45% - .67em); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .75em;
        box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        -webkit-box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        transform: translateZ(0);
        transition: .25s;
        margin-bottom: 1em;
    }

    .postLists.cards .post-item.m-card .infos {
        width: 100%;
    }

    .postLists.cards .post-item.m-card .title {
        font-size: 16px;
        /* padding: 0 .5em; */
        margin: 1em 0 .5em;
        overflow: hidden;
        max-width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        text-shadow: 0 1px #fff;
        transition: .25s;
        white-space: normal;
    }

    /* .postLists.cards .post-card-wrapper {
        width: 20%;
    } */

    .postLists .post-card-wrapper {
        z-index: 1;
    }

    .postLists.cards .post-item.m-card .go {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 16px 16px;
        color: #fff;
        background: linear-gradient(165deg, #011E34 15%, #319BF9 100%);
        border-radius: 30px;
        text-decoration: none;
        overflow: hidden;
        z-index: 1;
        justify-content: center;
        min-width: 50%;
        /* Green to navy */
        box-shadow: 0 0.5em 1.2em rgba(1, 30, 52, 0.6);
        font-size: 14px;
        margin: 1em auto;
        text-shadow: 0 2px 3px rgba(1, 30, 52, 0.5);
        height: auto;
        line-height: 1.5em;
        transition: all 0.3s ease;
    }

    .postLists.cards .post-item.m-card .go-text,
    .postLists.cards .post-item.m-card .go::after {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: transform 0.4s ease, opacity 0.4s ease;
        white-space: nowrap;
    }

    .postLists.cards .post-item.m-card .go-text {
        top: 0;
        opacity: 1;
    }

    .postLists.cards .post-item.m-card .go::after {
        content: "profile detail";
        top: 100%;
        opacity: 0;
        color: #fff;
        font-weight: 600;
    }

    .postLists.cards .post-item.m-card .go:hover .go-text {
        transform: translate(-50%, -100%);
        opacity: 0;
    }

    .postLists.cards .post-item.m-card .go:hover::after {
        top: 0;
        opacity: 1;
        transform: translateX(-50%);
    }


    .card.post-item.m-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
        position: relative;
        display: block;
        /* margin-top: -1.75em; */
        width: calc(100% - .85em);
        /* padding-top: calc(28.45% - 1.67em); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .75em;
        box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        -webkit-box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        transform: translateZ(0);
        transition: .25s;
        margin-bottom: 1em;
    }

    .talent-hover-box {
        display: inline-block;
        position: relative;
    }

    .default-badges,
    .hover-badges {
        transition: opacity 0.3s ease;
    }

    .hover-badges {
        display: none;
    }

    .talent-hover-box:hover .default-badges {
        display: none;
    }

    .talent-hover-box:hover .hover-badges {
        display: inline-block;
    }
</style>

<!-- next gen -->
<div class="talent-section-two next-gen-section" style="background: #aac2e1a8;">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>Meet the Next Generation of talents<span
                    class="title-bg2"></span></h2>
            <p style="color: #319BF9;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>
        <div class="row seller-list postLists cards">
            <!-- Filter -->
            <div class="filters-section">
                <div class="listing-tab ">
                    <ul class="nav nav-tabs justify-content-center flex-wrap gap-2" id="talentTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-filter="latest" type="button">Latest</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="popular" type="button">Popular</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="featured" type="button">Featured</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-filter="recommended" type="button">Recommended</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <!-- Search Modal Trigger -->
                            <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <i class="ti ti-search me-1"></i> Search Talents
                            </a>
                        </li>

                    </ul>

                </div>

                <!-- /Filter -->

                <!-- Sort By -->
                <div class="filters-wrap sort-categories">
                    <div class="collapse-card float-lg-end">
                        <div class="filter-header">
                            <a href="javascript:void(0);" class="sorts-list">
                                <i class="ti ti-sort-ascending"></i>Sorts by: <span>Categories</span>
                            </a>
                        </div>
                        <div id="categories2" class="collapse-body" style="display: none;">
                            <div class="form-group search-group">
                                <span class="search-icon"><i class="feather-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search Category">
                            </div>
                            <ul class="checkbox-list categories-lists">
                                @foreach($categories as $cat)
                                <li class="active">
                                    <label class="custom_check">
                                        <span class="checked-title">{{ $cat->name }}</span>
                                    </label>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Sort By -->

            </div>
            <!-- /Filter -->
            <div class="row" id="talentGrid">
                @foreach($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6 post-card-wrapper talent-item" data-category="{{ strtolower($talent->tag ?? 'featured') }}">
                    <div class="card post-item m-card">
                        <div class="card-body text-center">

                            <!-- Image -->
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img
                                    class="img rounded-3"
                                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" style="height: 120px; object-fit: cover; transition: transform 0.3s ease;" />
                            </a>

                            <!-- Name -->
                            <h6 class="mb-1">
                                <a href="{{ route('user.talent.details', $talent->id) }}">
                                    {{ $talent->name }}
                                    <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                                </a>
                            </h6>

                            <!-- Category -->
                            <p>{{ $talent->category->name ?? 'Uncategorized' }}
                                @php
                                // Pick a color class based on the level
                                $badgeClass = match($talent->level) {
                                'advanced' => 'bg-success', // Green
                                'intermediate' => 'bg-warning text-dark', // Yellow/Orange
                                default => 'bg-secondary', // Gray for Beginner
                                };
                                @endphp

                                <span class="badge {{ $badgeClass }}">
                                    {{ ucfirst($talent->level) }}
                                </span>
                            </p>

                            <!-- Location -->
                            <p class="mb-0 location-text d-inline-flex align-items-center">
                                <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                                Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                            </p>

                            <!-- Ratings -->
                            <div class="d-flex gap-2 align-items-center flex-wrap mt-3 mb-3 justify-content-center">
                                <div class="talent-hover-box">
                                    <div class="default-badges">
                                        <span class="badge bg-light">
                                            {{ number_format($talent->feedback->avg('rating'), 1) }} <i class="ti ti-star"></i>
                                        </span>
                                        <span class="badge bg-light">
                                            {{ $talent->feedback->count() }} <i class="ti ti-message-2"></i>
                                        </span>
                                    </div>
                                    <div class="hover-badges">
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->skill }}
                                        </a>
                                        <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                            {{ $talent->language }}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- View Button -->
                            <div class="text-center d-flex justify-content-center">
                                <a href="{{ route('user.talent.details', $talent->id) }}" class="slide-line-btn">
                                    <i class="feather-arrow-right"></i>View Profile
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                    <span class="slide-line"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                @endforeach
            </div>
        </div>
    </div>
</div>
<!-- next gen -->

<section class="explore-services-sec">
    <div class="section-bg">
        <img src="{{ asset('assets/img/bg/section-bg-06.png') }}" class="explore-bg1" alt="img">
    </div>
    <div class="container">
        <div class="faq-sec">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="faq-heading aos" data-aos="fade-up">
                        <div class="section-header mb-2">
                            <h2><span>Talent</span> Frequently Asked Questions</h2>
                        </div>
                        <p>Don’t see your question? We’re here to help you connect with the right talent.</p>
                        <a href="{{ route('user.contact') }}" class="btn btn-primary">Ask a Question <i class="ti ti-arrow-badge-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="faq-wrapper faq-lists">

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">
                                    How can I find the right talent for my project?
                                </a>
                            </h4>
                            <div id="faqone" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p>Our Talent Marketplace allows you to filter professionals by skills, categories, experience, and location, making it easy to find the perfect match for your project.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faqtwo" aria-expanded="false">
                                    How do I hire a talent?
                                </a>
                            </h4>
                            <div id="faqtwo" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p>After browsing profiles, you can contact talents directly through the platform or request a proposal. Our messaging system ensures smooth communication and collaboration.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faqthree" aria-expanded="false">
                                    Can talents showcase their past projects?
                                </a>
                            </h4>
                            <div id="faqthree" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p>Yes! Talents can upload portfolios, project samples, and certifications to highlight their skills and achievements, helping you make informed hiring decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faqfour" aria-expanded="false">
                                    Is there a verification process for talents?
                                </a>
                            </h4>
                            <div id="faqfour" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p>We verify all registered talents to ensure authenticity. Verified talents are marked with a badge on their profiles, giving you confidence in your collaboration.</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-card aos" data-aos="fade-up">
                            <h4 class="faq-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#faqfive" aria-expanded="false">
                                    How much does it cost to hire a talent?
                                </a>
                            </h4>
                            <div id="faqfive" class="card-collapse collapse">
                                <div class="faq-content">
                                    <p>Costs vary depending on the talent’s experience, skills, and project scope. The platform provides transparent pricing or allows you to negotiate directly with the talent.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="trusted-customers-sec">
            <div class="trusted-customers">
                <div class="section-bg">
                    <img src="{{ asset('assets/img/bg/section-bg-03.png') }}" class="trusted-bg-one" alt="img">
                    <img src="{{ asset('assets/img/bg/section-bg-03.png') }}" class="trusted-bg-two" alt="img">
                </div>
                <div class="section-header mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <h2>Want to Showcase Your Talent?</h2>
                    <p>Over 74K talents on the platform - available today for you.</p>
                    <p>Join our community and take the first step towards your dream career.</p>
                </div>
                <div class="more-btn text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <a href="{{ url('/register_as_talent') }}" class="btn btn-lg btn-primary">Join Us a talent<i class="ti ti-chevron-right me-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Glassmorphic Search Modal -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 rounded-4 shadow-lg overflow-hidden">

            <!-- Modal Header -->
            <div class="modal-header border-0 bg-gradient text-white"
                style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title fw-bold" id="searchModalLabel">
                    🔎 Find Your Talent
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body py-4 px-4">
                <form method="GET" action="{{ route('user.talents') }}" class="row g-3">

                    <div class="col-md-6">
                        <div class="input-group input-group-lg glass-input shadow-sm">
                            <span class="input-group-text bg-transparent border-0">
                                <i class="ti ti-search text-primary"></i>
                            </span>
                            <input type="text" name="keyword" class="form-control rounded-3 border-0 shadow-sm"
                                placeholder="Search talents, skills, or names..." value="{{ request('keyword') }}">
                        </div>
                    </div>

                    <div class="col-md-6">
                        <select name="category" class="form-select form-select-lg rounded-3 border-0 shadow-sm">
                            <option value="">All Categories</option>
                            @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" {{ request('category') == $cat->id ? 'selected' : '' }}>
                                {{ $cat->name }}
                            </option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Footer -->
                    <div class="modal-footer border-0 d-flex justify-content-between px-4 py-3">
                        <button type="button" class="btn btn-light border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">
                            Search Talents
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

<!-- SwiperJS Scripts -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    new Swiper('.talentSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        },
    });
</script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('#talentTabs .nav-link');
        const items = document.querySelectorAll('.talent-item');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Activate clicked tab
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.dataset.filter;

                items.forEach(item => {
                    const category = item.dataset.category;
                    if (filter === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
</script>
@endsection