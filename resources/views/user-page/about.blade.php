@extends('layouts.guest')
@section('content')

<style>
  /* ===== GLOBAL ===== */
  * { box-sizing: border-box; }

  /* ===== BREADCRUMB ===== */
  .breadcrumb-bar {
    background: #0a1214;
    border-bottom: 1px solid #1a2a2e;
    padding: 16px 0;
  }
  .breadcrumb-bar .page-breadcrumb .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0 0 6px;
    font-size: 12px;
  }
  .breadcrumb-bar .breadcrumb-item a {
    color: #48d597;
    text-decoration: none;
  }
  .breadcrumb-bar .breadcrumb-item.active {
    color: #c8dde0;
  }
  .breadcrumb-bar .breadcrumb-item + .breadcrumb-item::before {
    content: '/';
    color: #4a6670;
    padding-right: 8px;
  }
  .breadcrumb-title {
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
  }
  .breadcrumb-title span {
    color: #48d597;
  }

  /* ===== ABOUT SECTION ===== */
  .about-us-section {
    background: #0e1618;
    padding: 60px 0;
  }
  .about-inner-img {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }
  .about-inner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.9;
    transition: opacity 0.3s;
  }
  .about-inner-img img:hover {
    opacity: 1;
  }
  .about-us-info {
    padding-left: 16px;
  }
  .about-badge {
    display: inline-block;
    background: rgba(0, 166, 103, 0.1);
    color: #48d597;
    border: 1px solid rgba(0, 166, 103, 0.3);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 14px;
    margin-bottom: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .about-us-head h2 {
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.35;
    margin-bottom: 14px;
  }
  .about-us-head p {
    font-size: 14px;
    color: #8aa4aa;
    line-height: 1.8;
    margin-bottom: 14px;
  }
  .about-us-head h5 {
    font-size: 14px;
    font-weight: 600;
    color: #48d597;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }
  .about-features {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
  .about-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .about-features ul li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #c8dde0;
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 8px;
    padding: 9px 12px;
    transition: border-color 0.2s;
  }
  .about-features ul li:hover {
    border-color: rgba(0, 166, 103, 0.4);
  }
  .about-features ul li span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #48d597;
    flex-shrink: 0;
    display: inline-block;
  }
  .about-features ul li img {
    display: none; /* hide original SVG icons, use dot instead */
  }

  /* Stats Strip */
  .stats-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #1a2a2e;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 48px;
  }
  .stats-strip .stat-item {
    background: #0f1e21;
    padding: 20px;
    text-align: center;
  }
  .stats-strip .stat-num {
    font-size: 26px;
    font-weight: 700;
    color: #48d597;
    line-height: 1;
  }
  .stats-strip .stat-label {
    font-size: 12px;
    color: #6b8a90;
    margin-top: 4px;
  }

  /* ===== WHY CHOOSE SECTION ===== */
  .why-choose-sec {
    background: #0b1416;
    padding: 60px 0;
    border-top: 1px solid #1a2a2e;
    border-bottom: 1px solid #1a2a2e;
  }
  .about-us-header {
    text-align: center;
    margin-bottom: 36px;
  }
  .about-us-header h2 {
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
  }
  .about-us-header h2 span {
    color: #48d597;
  }
  .about-us-header p {
    font-size: 14px;
    color: #6b8a90;
  }
  .why-choose-card {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 14px;
    padding: 24px 20px;
    margin-bottom: 20px;
    transition: border-color 0.25s, transform 0.25s;
  }
  .why-choose-card:hover {
    border-color: rgba(0, 166, 103, 0.5);
    transform: translateY(-3px);
  }
  .why-choose-card .card-icon {
    width: 44px;
    height: 44px;
    background: rgba(0, 166, 103, 0.1);
    border: 1px solid rgba(0, 166, 103, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  }
  .why-choose-card .card-icon img {
    width: 22px;
    height: 22px;
    filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%);
  }
  .why-choose-card h4 {
    font-size: 15px;
    font-weight: 600;
    color: #e0f0f0;
    margin-bottom: 8px;
  }
  .why-choose-card p {
    font-size: 13px;
    color: #6b8a90;
    line-height: 1.7;
    margin: 0;
  }

  /* ===== FAQ SECTION ===== */
  .faq-section {
    background: #0e1618;
    padding: 60px 0;
  }
  .faq-section .section-title h2 {
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 6px;
  }
  .faq-section .section-title p {
    font-size: 14px;
    color: #6b8a90;
  }
  .faq-card {
    background: #0f1e21;
    border: 1px solid #1e3035;
    border-radius: 12px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .faq-card:hover {
    border-color: rgba(0, 166, 103, 0.35);
  }
  .faq-title {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
  .faq-title a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    color: #c8dde0;
    text-decoration: none;
    transition: color 0.2s;
  }
  .faq-title a:hover,
  .faq-title a[aria-expanded="true"] {
    color: #48d597;
  }
  .faq-title a::after {
    content: '\203A';
    font-size: 20px;
    color: rgba(0, 166, 103, 0.5);
    transform: rotate(90deg);
    transition: transform 0.25s, color 0.2s;
    flex-shrink: 0;
    margin-left: 12px;
  }
  .faq-title a.collapsed::after {
    transform: rotate(0deg);
    color: rgba(0, 166, 103, 0.4);
  }
  .faq-title a[aria-expanded="true"] {
    color: #48d597;
  }
  .faq-title a[aria-expanded="true"]::after {
    color: #48d597;
  }
  .card-collapse {
    border-top: 1px solid #1a2a2e;
  }
  .faq-content {
    padding: 14px 18px 16px;
  }
  .faq-content p {
    font-size: 13px;
    color: #6b8a90;
    line-height: 1.8;
    margin: 0;
  }

  /* ══════════════════════════════════════
   LIGHT THEME OVERRIDES
   Toggled via data-h-theme="light" on <html>
══════════════════════════════════════ */

/* Breadcrumb */
[data-h-theme="light"] .breadcrumb-bar {
    background: #eef4f1;
    border-bottom-color: rgba(0, 100, 60, 0.1);
}
[data-h-theme="light"] .breadcrumb-bar .breadcrumb-item.active {
    color: #3d5a52;
}
[data-h-theme="light"] .breadcrumb-bar .breadcrumb-item + .breadcrumb-item::before {
    color: #8ba59d;
}
[data-h-theme="light"] .breadcrumb-title {
    color: #10201b;
}

/* About Section */
[data-h-theme="light"] .about-us-section {
    background: #f6faf8;
}
[data-h-theme="light"] .about-inner-img {
    background: #ffffff;
    border-color: rgba(0, 100, 60, 0.12);
}
[data-h-theme="light"] .about-us-head h2 {
    color: #10201b;
}
[data-h-theme="light"] .about-us-head p {
    color: #4f6b65;
}
[data-h-theme="light"] .about-badge {
    background: rgba(0, 166, 103, 0.08);
    border-color: rgba(0, 166, 103, 0.28);
    color: #00a667;
}
[data-h-theme="light"] .about-us-head h5 {
    color: #00a667;
}
[data-h-theme="light"] .about-features ul li {
    color: #2d453f;
    background: #ffffff;
    border-color: rgba(0, 100, 60, 0.12);
}
[data-h-theme="light"] .about-features ul li:hover {
    border-color: rgba(0, 166, 103, 0.4);
}
[data-h-theme="light"] .about-features ul li span {
    background: #00a667;
}

/* Stats strip */
[data-h-theme="light"] .stats-strip {
    background: rgba(0, 100, 60, 0.1);
}
[data-h-theme="light"] .stats-strip .stat-item {
    background: #ffffff;
}
[data-h-theme="light"] .stats-strip .stat-num {
    color: #00a667;
}
[data-h-theme="light"] .stats-strip .stat-label {
    color: #6f8a85;
}

/* Why Choose Section */
[data-h-theme="light"] .why-choose-sec {
    background: #eef4f1;
    border-top-color: rgba(0, 100, 60, 0.1);
    border-bottom-color: rgba(0, 100, 60, 0.1);
}
[data-h-theme="light"] .about-us-header h2 {
    color: #10201b;
}
[data-h-theme="light"] .about-us-header p {
    color: #6f8a85;
}
[data-h-theme="light"] .why-choose-card {
    background: #ffffff;
    border-color: rgba(0, 100, 60, 0.12);
}
[data-h-theme="light"] .why-choose-card:hover {
    border-color: rgba(0, 166, 103, 0.45);
}
[data-h-theme="light"] .why-choose-card .card-icon {
    background: rgba(0, 166, 103, 0.08);
    border-color: rgba(0, 166, 103, 0.25);
}
[data-h-theme="light"] .why-choose-card .card-icon img {
    filter: invert(38%) sepia(90%) saturate(900%) hue-rotate(115deg) brightness(90%);
}
[data-h-theme="light"] .why-choose-card h4 {
    color: #10201b;
}
[data-h-theme="light"] .why-choose-card p {
    color: #6f8a85;
}

/* FAQ Section */
[data-h-theme="light"] .faq-section {
    background: #f6faf8;
}
[data-h-theme="light"] .faq-section .section-title h2 {
    color: #10201b;
}
[data-h-theme="light"] .faq-section .section-title p {
    color: #6f8a85;
}
[data-h-theme="light"] .faq-card {
    background: #ffffff;
    border-color: rgba(0, 100, 60, 0.12);
}
[data-h-theme="light"] .faq-card:hover {
    border-color: rgba(0, 166, 103, 0.35);
}
[data-h-theme="light"] .faq-title a {
    color: #2d453f;
}
[data-h-theme="light"] .faq-title a:hover,
[data-h-theme="light"] .faq-title a[aria-expanded="true"] {
    color: #00a667;
}
[data-h-theme="light"] .faq-title a::after {
    color: rgba(0, 166, 103, 0.45);
}
[data-h-theme="light"] .faq-title a.collapsed::after {
    color: rgba(0, 166, 103, 0.35);
}
[data-h-theme="light"] .faq-title a[aria-expanded="true"]::after {
    color: #00a667;
}
[data-h-theme="light"] .card-collapse {
    border-top-color: rgba(0, 100, 60, 0.1);
}
[data-h-theme="light"] .faq-content p {
    color: #6f8a85;
}
</style>

{{-- BREADCRUMB --}}
<div class="breadcrumb-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">
                    About <span>Future Connect</span>
                </h2>
            </div>
        </div>
    </div>
</div>

{{-- ABOUT SECTION --}}
<section class="about-us-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="row me-4">
                    <div class="col-sm-6">
                        <div class="about-inner-img" style="height:290px;">
                            <img src="assets/img/aboutus/Future Connect-01.jpg" class="img-fluid" alt="Future Connect" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="about-inner-img" style="height:138px;">
                                    <img src="assets/img/aboutus/Future Connect-02.jpg" class="img-fluid" alt="Future Connect" />
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="about-inner-img" style="height:138px;">
                                    <img src="assets/img/aboutus/Future Connect-03.jpg" class="img-fluid" alt="Future Connect" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-us-info">
                    <span class="about-badge">About Future Connect</span>
                    <div class="about-us-head">
                        <h2>Empowering Young Talents Through Stories & Skills</h2>
                        <p>
                            Future Connect is a digital hub where emerging talents shine. We connect youth with
                            opportunities to showcase their stories, share unique skills, and grow through
                            meaningful exposure and community support.
                        </p>
                        <h5>Our Mission</h5>
                        <p>
                            To ignite the potential in every young dreamer by offering a space to inspire,
                            learn, and thrive. We believe in storytelling as a catalyst for connection and
                            skills as the bridge to brighter futures.
                        </p>
                    </div>
                    <div class="about-features">
                        <ul class="list-one">
                            <li><span></span>Talent-Powered Stories</li>
                            <li><span></span>Inclusive & Empowering Platform</li>
                        </ul>
                        <ul class="list-two">
                            <li><span></span>Mentorship & Opportunities</li>
                            <li><span></span>Skill Sharing & Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {{-- Stats Strip --}}
        <div class="stats-strip">
            <div class="stat-item">
                <div class="stat-num">10K+</div>
                <div class="stat-label">Young Talents</div>
            </div>
            <div class="stat-item">
                <div class="stat-num">150+</div>
                <div class="stat-label">Opportunities</div>
            </div>
            <div class="stat-item">
                <div class="stat-num">50+</div>
                <div class="stat-label">Mentors & Volunteers</div>
            </div>
        </div>
    </div>
</section>

{{-- WHY CHOOSE SECTION --}}
<section class="why-choose-sec">
    <div class="container">
        <div class="about-us-header">
            <h2>Why Choose <span>Future Connect</span></h2>
            <p>Because every story matters and every skill deserves a stage.</p>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-01.svg" alt="" />
                    </div>
                    <h4>Real Impact</h4>
                    <p>Our platform helps youth turn passion into purpose, with real results and community support.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-02.svg" alt="" />
                    </div>
                    <h4>Inspiring Stories</h4>
                    <p>Every Future Connect profile tells a powerful story. Be heard. Be seen. Be remembered.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-03.svg" alt="" />
                    </div>
                    <h4>Skill Marketplace</h4>
                    <p>Discover, hire, or support skilled youth who are ready to deliver excellence.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-04.svg" alt="" />
                    </div>
                    <h4>Safe & Supportive</h4>
                    <p>Your content and data are protected as you grow in a nurturing community.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-05.svg" alt="" />
                    </div>
                    <h4>Easy Donations</h4>
                    <p>Support talents with secure, transparent donation tools and reward systems.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="why-choose-card">
                    <div class="card-icon">
                        <img src="assets/img/icons/why-choose-icon-06.svg" alt="" />
                    </div>
                    <h4>Community First</h4>
                    <p>Our agents, mentors, and volunteers uplift every talent's journey to success.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- FAQ SECTION --}}
<section class="faq-section">
    <div class="container">
        <div class="section-title mb-4">
            <h2 class="mb-1">Most frequently asked questions</h2>
            <p>Here are the most frequently asked questions you may check before getting started.</p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="faq-wrapper faq-lists">
                    @foreach ($faqs as $index => $faq)
                    <div class="faq-card">
                        <h4 class="faq-title">
                            <a class="collapsed"
                               data-bs-toggle="collapse"
                               href="#faq{{ $index }}"
                               aria-expanded="false"
                               aria-controls="faq{{ $index }}">
                                {{ $faq->question }}
                            </a>
                        </h4>
                        <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent=".faq-lists">
                            <div class="faq-content">
                                <p>{!! nl2br(e($faq->answer)) !!}</p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

@endsection