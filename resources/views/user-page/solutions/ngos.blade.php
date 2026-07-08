@extends('layouts.guest')
@section('title', 'For NGOs')
@section('content')

<style>
    :root{
        --fc-bg:#0e1618; --fc-bg-alt:#141d20; --fc-card:#172124; --fc-border:#243033;
        --fc-accent:#48d597; --fc-accent-dark:#33a876; --fc-white:#ffffff; --fc-muted:#9fb0ae;
    }
    .fc-sol-page{ background:var(--fc-bg); color:var(--fc-white); }
    .fc-sol-hero{ padding:90px 0 70px; background:radial-gradient(circle at 12% 15%, rgba(72,213,151,.14), transparent 45%), radial-gradient(circle at 88% 85%, rgba(72,213,151,.08), transparent 50%), var(--fc-bg); border-bottom:1px solid var(--fc-border); }
    .fc-sol-eyebrow{ display:inline-flex; align-items:center; gap:8px; color:var(--fc-accent); font-weight:700; font-size:.82rem; text-transform:uppercase; letter-spacing:.08em; background:rgba(72,213,151,.1); padding:6px 16px; border-radius:30px; margin-bottom:18px; }
    .fc-sol-hero h1{ font-weight:700; font-size:2.6rem; letter-spacing:-.5px; margin-bottom:18px; }
    .fc-sol-hero h1 span{ color:var(--fc-accent); }
    .fc-sol-hero p.lead{ color:var(--fc-muted); font-size:1.1rem; max-width:520px; margin-bottom:28px; }
    .btn-fc-primary{ background:var(--fc-accent); border:none; color:#06231a; font-weight:700; border-radius:30px; padding:.8rem 2rem; transition:.2s ease; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
    .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:#06231a; transform:translateY(-2px); }
    .btn-fc-ghost{ background:transparent; border:1px solid var(--fc-border); color:var(--fc-white); font-weight:600; border-radius:30px; padding:.8rem 2rem; text-decoration:none; transition:.2s; display:inline-flex; align-items:center; gap:8px; }
    .btn-fc-ghost:hover{ border-color:var(--fc-accent); color:var(--fc-accent); }
    .fc-hero-visual{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:24px; padding:34px; position:relative; overflow:hidden; }
    .fc-hero-visual::before{ content:""; position:absolute; top:-50px; right:-50px; width:180px; height:180px; background:radial-gradient(circle, rgba(72,213,151,.2), transparent 70%); }
    .fc-mini-stat{ background:var(--fc-bg-alt); border:1px solid var(--fc-border); border-radius:14px; padding:16px 18px; margin-bottom:12px; }
    .fc-mini-stat strong{ color:var(--fc-accent); font-size:1.4rem; display:block; }
    .fc-mini-stat span{ color:var(--fc-muted); font-size:.82rem; }
    .fc-sol-section{ padding:70px 0; }
    .fc-sol-section.alt{ background:var(--fc-bg-alt); border-top:1px solid var(--fc-border); border-bottom:1px solid var(--fc-border); }
    .fc-sol-header{ text-align:center; max-width:640px; margin:0 auto 46px; }
    .fc-sol-header h2{ font-weight:700; font-size:2rem; margin-bottom:10px; }
    .fc-sol-header h2 span{ color:var(--fc-accent); }
    .fc-sol-header p{ color:var(--fc-muted); }
    .fc-benefit-card{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:18px; padding:30px 26px; height:100%; transition:.25s; }
    .fc-benefit-card:hover{ border-color:var(--fc-accent); transform:translateY(-4px); box-shadow:0 16px 32px rgba(72,213,151,.1); }
    .fc-benefit-icon{ width:52px; height:52px; border-radius:14px; background:rgba(72,213,151,.12); color:var(--fc-accent); display:flex; align-items:center; justify-content:center; font-size:1.35rem; margin-bottom:18px; }
    .fc-benefit-card h5{ font-weight:700; margin-bottom:10px; }
    .fc-benefit-card p{ color:var(--fc-muted); font-size:.92rem; margin:0; }
    .fc-step{ display:flex; gap:20px; padding:26px 0; border-bottom:1px solid var(--fc-border); }
    .fc-step:last-child{ border-bottom:none; }
    .fc-step-num{ flex:0 0 auto; width:44px; height:44px; border-radius:50%; background:rgba(72,213,151,.12); color:var(--fc-accent); display:flex; align-items:center; justify-content:center; font-weight:700; }
    .fc-step h6{ font-weight:700; margin-bottom:6px; }
    .fc-step p{ color:var(--fc-muted); margin:0; font-size:.92rem; }
    .fc-stats-bar{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:20px; padding:36px; }
    .fc-stat-item{ text-align:center; }
    .fc-stat-item strong{ display:block; font-size:2rem; font-weight:700; color:var(--fc-accent); }
    .fc-stat-item span{ color:var(--fc-muted); font-size:.85rem; }
    .fc-testimonial{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:20px; padding:40px; position:relative; }
    .fc-testimonial .quote-mark{ font-size:3rem; color:var(--fc-accent); opacity:.3; line-height:1; }
    .fc-testimonial p.quote{ font-size:1.1rem; color:var(--fc-white); margin:10px 0 20px; }
    .fc-testimonial .author strong{ color:var(--fc-white); display:block; }
    .fc-testimonial .author span{ color:var(--fc-muted); font-size:.85rem; }
    .fc-final-cta{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:24px; padding:60px; text-align:center; position:relative; overflow:hidden; margin-bottom:80px; }
    .fc-final-cta::before{ content:""; position:absolute; top:-70px; left:50%; transform:translateX(-50%); width:280px; height:280px; background:radial-gradient(circle, rgba(72,213,151,.16), transparent 70%); }
    .fc-final-cta h2{ font-weight:700; margin-bottom:12px; position:relative; }
    .fc-final-cta p{ color:var(--fc-muted); max-width:480px; margin:0 auto 26px; position:relative; }
</style>

<div class="fc-sol-page">

    <section class="fc-sol-hero">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <span class="fc-sol-eyebrow"><i class="ti ti-heart-handshake"></i> For NGOs</span>
                    <h1>Partner with skilled <span>local talent</span></h1>
                    <p class="lead">Post projects, find verified local consultants and freelancers, and get transparent, secure sponsorship tools — everything you need to execute your programs faster.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="#" class="btn-fc-primary"><i class="ti ti-briefcase"></i> Post a project</a>
                        <a href="#" class="btn-fc-ghost"><i class="ti ti-users"></i> Browse talent</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="fc-hero-visual">
                        <div class="fc-mini-stat">
                            <strong>Verified</strong>
                            <span>Consultants and local professionals</span>
                        </div>
                        <div class="fc-mini-stat">
                            <strong>Secure</strong>
                            <span>Payment protection for every engagement</span>
                        </div>
                        <div class="fc-mini-stat mb-0">
                            <strong>Fast</strong>
                            <span>From posted project to first applicant</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Built for <span>program delivery</span></h2>
                <p>Everything an NGO needs to find and manage local talent for a project or initiative.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-file-text"></i></div>
                        <h5>Post a project</h5>
                        <p>Describe your initiative, budget, and location — reach verified professionals actively looking for work.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-shield-check"></i></div>
                        <h5>Verified consultants</h5>
                        <p>Filter by skill, category, and location to find local talent that's been checked and verified.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-hand-heart"></i></div>
                        <h5>Sponsor projects</h5>
                        <p>Fund community-driven initiatives directly through the platform with full transparency.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-lock"></i></div>
                        <h5>Secure payments</h5>
                        <p>Every transaction is protected — no chasing invoices or worrying about accountability.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section alt">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5">
                    <div class="fc-sol-header text-lg-start mx-lg-0">
                        <h2>How it <span>works</span></h2>
                        <p>From posting a need to closing out a project.</p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="fc-step">
                        <div class="fc-step-num">1</div>
                        <div><h6>Post your project</h6><p>Add a title, category, location, and budget — it's live on the marketplace immediately.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">2</div>
                        <div><h6>Review applicants</h6><p>Verified professionals apply directly, with portfolios and proposals attached.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">3</div>
                        <div><h6>Collaborate securely</h6><p>Message through the Connect Room and manage the engagement end-to-end.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">4</div>
                        <div><h6>Pay with confidence</h6><p>Release payment through the platform's protected payment flow.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-lg-8">
                    <div class="fc-stats-bar h-100">
                        <div class="row">
                            <div class="col-4 fc-stat-item"><strong>100%</strong><span>Verified partners</span></div>
                            <div class="col-4 fc-stat-item"><strong>Local</strong><span>Talent, local context</span></div>
                            <div class="col-4 fc-stat-item"><strong>Secure</strong><span>Every payment protected</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="fc-final-cta h-100 d-flex flex-column justify-content-center mb-0 py-4">
                        <h2 class="h5 mb-2">Have a project?</h2>
                        <a href="#" class="btn-fc-primary justify-content-center">Post it now</a>
                    </div>
                </div>
            </div>

            <div class="fc-testimonial">
                <div class="quote-mark">"</div>
                <p class="quote">We needed a local consultant who understood the community, fast. Future Connect got us three qualified applicants within days.</p>
                <div class="author"><strong>NGO program lead</strong><span>Kigali, Rwanda</span></div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="fc-final-cta">
            <h2>Find the talent your program needs</h2>
            <p>Post a project or browse verified local professionals today.</p>
            <a href="#" class="btn-fc-primary">Get started</a>
        </div>
    </div>

</div>
@endsection
