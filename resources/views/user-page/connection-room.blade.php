@extends('layouts.guest')
@section('title', 'Networking Hub – Connect with Skills & Opportunities')
@section('content')

@php
$categories = \App\Models\Category::all();
@endphp

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">



<div class="container">

    {{-- ── Hero ──────────────────────────────────────────────── --}}
    <div class="nh-hero">
        <div class="nh-hero-glow-1"></div>
        <div class="nh-hero-glow-2"></div>
        <div class="row align-items-center nh-hero-content">
            <div class="col-lg-7">
                <span class="nh-eyebrow">
                    <i class="fa-solid fa-network-wired"></i> Networking Hub
                </span>
                <h1 class="nh-hero-title">
                    Connect with <span>Skills</span><br>& Opportunities
                </h1>
                <p class="nh-hero-sub">
                    A large number of individuals use us to transform their thoughts into the real world and connect with like-minded professionals.
                </p>
                <a href="{{ route('user.talents') }}" class="nh-cta-btn">
                    Explore Skills <i class="feather-arrow-right"></i>
                </a>
                <div class="nh-popular">
                    <span class="nh-popular-label">Popular:</span>
                    @foreach($categories->take(6) as $cat)
                        <a href="{{ route('user.talents.category', $cat->slug) }}" class="nh-tag">{{ $cat->name }}</a>
                    @endforeach
                </div>
            </div>
            <div class="col-lg-5">
                <div class="nh-hero-img-wrap">
                    <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" class="nh-hero-img-main" alt="Networking Hub">
                    <div class="nh-hero-stat">
                        <div class="nh-stat-item">
                            <div class="nh-stat-num">10K+</div>
                            <div class="nh-stat-lbl">Skills</div>
                        </div>
                        <div style="width:1px;height:32px;background:var(--border);"></div>
                        <div class="nh-stat-item">
                            <div class="nh-stat-num">{{ $categories->count() }}</div>
                            <div class="nh-stat-lbl">Categories</div>
                        </div>
                        <div style="width:1px;height:32px;background:var(--border);"></div>
                        <div class="nh-stat-item">
                            <div class="nh-stat-num">98%</div>
                            <div class="nh-stat-lbl">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="nh-divider">

    {{-- ── About Section ─────────────────────────────────────── --}}
    <section class="nh-about">
        <div class="row align-items-center g-5">
            <div class="col-lg-5">
                <div class="nh-about-img-grid">
                    <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" alt="About">
                    <img src="{{ asset('assets/img/aboutus/about-us-02.jpg') }}" alt="About">
                    <img src="{{ asset('assets/img/aboutus/about-us-03.jpg') }}" alt="About">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="nh-about-text">
                    <div class="nh-section-head">
                        <div class="nh-section-eyebrow">About the Hub</div>
                        <h2 class="nh-section-title">
                            Your gateway to meaningful<br>professional connections.
                        </h2>
                        <p>
                            Whether you are a skill seeker looking for opportunities, a project owner looking for collaborators, or an entrepreneur looking to expand your network — this hub connects you with the right people.
                        </p>
                        <h5>Our Mission</h5>
                        <p>
                            At Future Connect, our mission is to empower individuals and businesses by facilitating easy access to a diverse range of high-quality services. We believe in creating a collaborative and inclusive marketplace that fosters growth, creativity, and mutual success.
                        </p>
                    </div>
                    <ul class="nh-feature-list">
                        <li>Diverse Network of Professionals</li>
                        <li>Trust and Transparency</li>
                        <li>User Friendly Platform</li>
                        <li>Innovation In Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <hr class="nh-divider">

    {{-- ── Trending Categories (mobile scroll) ──────────────── --}}
    <section class="nh-cats d-md-none">
        <div class="nh-section-head">
            <div class="nh-section-eyebrow">Explore</div>
            <h2 class="nh-section-title">Trending Categories</h2>
            <p class="nh-section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
        </div>
        <div class="nh-trend-scroll">
            @foreach($categories as $cat)
            <a href="{{ route('user.talents.category', $cat->slug) }}" class="nh-trend-chip">
                {{ $cat->name }}
                <span style="background:var(--bg-elevated);color:var(--text-muted);font-size:.65rem;padding:1px 7px;border-radius:50px;">
                    {{ optional($cat->talents)->count() ?? 0 }}
                </span>
            </a>
            @endforeach
        </div>
    </section>

    {{-- ── Trending Categories (desktop grid) ────────────────── --}}
    <section class="nh-cats d-none d-md-block">
        <div class="nh-section-head">
            <div class="nh-section-eyebrow">Explore</div>
            <h2 class="nh-section-title">Trending Categories of Skilled People</h2>
            <p class="nh-section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            @foreach($categories as $cat)
            <div class="col">
                <div class="nh-cat-card">
                    <div class="nh-cat-icon">
                        <i class="ti ti-speakerphone"></i>
                    </div>
                    <a href="{{ route('user.talents.category', $cat->slug) }}" class="nh-cat-name">
                        {{ $cat->name }}
                    </a>
                    <span class="nh-cat-count">{{ optional($cat->talents)->count() ?? 0 }} skills</span>
                    <a href="{{ route('user.talents.category', $cat->slug) }}" class="nh-cat-link">
                        View skills <i class="feather-arrow-right"></i>
                    </a>
                </div>
            </div>
            @endforeach
        </div>
    </section>

    <hr class="nh-divider">

    {{-- ── Key Benefits ───────────────────────────────────────── --}}
    <section class="nh-benefits">
        <div class="row align-items-end mb-4">
            <div class="col-lg-6">
                <div class="nh-section-eyebrow">Why Us</div>
                <h2 class="nh-section-title">Key Benefits</h2>
            </div>
            <div class="col-lg-6">
                <p class="nh-section-sub mb-0">
                    Find professionals across various fields and expand your network effortlessly.
                </p>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="nh-benefit-card">
                    <div class="nh-benefit-icon">
                        <i class="fa-solid fa-people-arrows"></i>
                    </div>
                    <div>
                        <h5 class="nh-benefit-title">Collaborate on Projects</h5>
                        <p class="nh-benefit-desc">Work together with skilled individuals to bring your ideas to life and create something remarkable.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="nh-benefit-card">
                    <div class="nh-benefit-icon">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div>
                        <h5 class="nh-benefit-title">Connect with Skills</h5>
                        <p class="nh-benefit-desc">Find professionals across various fields and expand your network effortlessly with verified profiles.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="nh-benefit-card">
                    <div class="nh-benefit-icon">
                        <i class="fa-solid fa-calendar-check"></i>
                    </div>
                    <div>
                        <h5 class="nh-benefit-title">Attend Networking Events</h5>
                        <p class="nh-benefit-desc">Discover and participate in events designed to foster professional relationships and career growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#talentTabs .nav-link');
    const items   = document.querySelectorAll('.talent-item');
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            items.forEach(item => {
                item.style.display = item.dataset.category === filter ? '' : 'none';
            });
        });
    });
});
</script>

@endsection