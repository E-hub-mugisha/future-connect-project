@extends('layouts.guest')
@section('title', 'For Students')
@section('content')

<style>
    :root{
        --fc-bg:#0e1618;
        --fc-bg-alt:#141d20;
        --fc-card:#172124;
        --fc-border:#243033;
        --fc-accent:#48d597;
        --fc-accent-dark:#33a876;
        --fc-white:#F5f5f7;
        --fc-muted:#9fb0ae;
    }

    .fc-sol-page{ background:var(--fc-bg); color:var(--fc-white); }

    /* Hero */
    .fc-sol-hero{
        padding:90px 0 70px;
        background:
            radial-gradient(circle at 12% 15%, rgba(72,213,151,.14), transparent 45%),
            radial-gradient(circle at 88% 85%, rgba(72,213,151,.08), transparent 50%),
            var(--fc-bg);
        border-bottom:1px solid var(--fc-border);
    }
    .fc-sol-eyebrow{
        display:inline-flex;
        align-items:center;
        gap:8px;
        color:var(--fc-accent);
        font-weight:700;
        font-size:.82rem;
        text-transform:uppercase;
        letter-spacing:.08em;
        background:rgba(72,213,151,.1);
        padding:6px 16px;
        border-radius:30px;
        margin-bottom:18px;
    }
    .fc-sol-hero h1{
        font-weight:700;
        font-size:2.6rem;
        letter-spacing:-.5px;
        margin-bottom:18px;
    }
    .fc-sol-hero h1 span{ color:var(--fc-accent); }
    .fc-sol-hero p.lead{
        color:var(--fc-muted);
        font-size:1.1rem;
        max-width:520px;
        margin-bottom:28px;
    }
    .btn-fc-primary{
        background:var(--fc-accent);
        border:none;
        color:#06231a;
        font-weight:700;
        border-radius:30px;
        padding:.8rem 2rem;
        transition:.2s ease;
        display:inline-flex;
        align-items:center;
        gap:8px;
        text-decoration:none;
    }
    .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:#06231a; transform:translateY(-2px); }
    .btn-fc-ghost{
        background:transparent;
        border:1px solid var(--fc-border);
        color:var(--fc-white);
        font-weight:600;
        border-radius:30px;
        padding:.8rem 2rem;
        text-decoration:none;
        transition:.2s;
        display:inline-flex;
        align-items:center;
        gap:8px;
    }
    .btn-fc-ghost:hover{ border-color:var(--fc-accent); color:var(--fc-accent); }

    .fc-hero-visual{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:24px;
        padding:34px;
        position:relative;
        overflow:hidden;
    }
    .fc-hero-visual::before{
        content:"";
        position:absolute; top:-50px; right:-50px;
        width:180px; height:180px;
        background:radial-gradient(circle, rgba(72,213,151,.2), transparent 70%);
    }
    .fc-mini-stat{
        background:var(--fc-bg-alt);
        border:1px solid var(--fc-border);
        border-radius:14px;
        padding:16px 18px;
        margin-bottom:12px;
    }
    .fc-mini-stat strong{ color:var(--fc-accent); font-size:1.4rem; display:block; }
    .fc-mini-stat span{ color:var(--fc-muted); font-size:.82rem; }

    /* Benefit cards */
    .fc-sol-section{ padding:70px 0; }
    .fc-sol-section.alt{ background:var(--fc-bg-alt); border-top:1px solid var(--fc-border); border-bottom:1px solid var(--fc-border); }
    .fc-sol-header{ text-align:center; max-width:640px; margin:0 auto 46px; }
    .fc-sol-header h2{ font-weight:700; font-size:2rem; margin-bottom:10px; }
    .fc-sol-header h2 span{ color:var(--fc-accent); }
    .fc-sol-header p{ color:var(--fc-muted); }

    .fc-benefit-card{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:18px;
        padding:30px 26px;
        height:100%;
        transition:.25s;
    }
    .fc-benefit-card:hover{
        border-color:var(--fc-accent);
        transform:translateY(-4px);
        box-shadow:0 16px 32px rgba(72,213,151,.1);
    }
    .fc-benefit-icon{
        width:52px; height:52px;
        border-radius:14px;
        background:rgba(72,213,151,.12);
        color:var(--fc-accent);
        display:flex; align-items:center; justify-content:center;
        font-size:1.35rem;
        margin-bottom:18px;
    }
    .fc-benefit-card h5{ font-weight:700; margin-bottom:10px; }
    .fc-benefit-card p{ color:var(--fc-muted); font-size:.92rem; margin:0; }

    /* Steps */
    .fc-step{
        display:flex;
        gap:20px;
        padding:26px 0;
        border-bottom:1px solid var(--fc-border);
    }
    .fc-step:last-child{ border-bottom:none; }
    .fc-step-num{
        flex:0 0 auto;
        width:44px; height:44px;
        border-radius:50%;
        background:rgba(72,213,151,.12);
        color:var(--fc-accent);
        display:flex; align-items:center; justify-content:center;
        font-weight:700;
    }
    .fc-step h6{ font-weight:700; margin-bottom:6px; }
    .fc-step p{ color:var(--fc-muted); margin:0; font-size:.92rem; }

    /* Stats bar */
    .fc-stats-bar{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:20px;
        padding:36px;
    }
    .fc-stat-item{ text-align:center; }
    .fc-stat-item strong{ display:block; font-size:2rem; font-weight:700; color:var(--fc-accent); }
    .fc-stat-item span{ color:var(--fc-muted); font-size:.85rem; }

    /* Testimonial */
    .fc-testimonial{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:20px;
        padding:40px;
        position:relative;
    }
    .fc-testimonial .quote-mark{ font-size:3rem; color:var(--fc-accent); opacity:.3; line-height:1; }
    .fc-testimonial p.quote{ font-size:1.1rem; color:var(--fc-white); margin:10px 0 20px; }
    .fc-testimonial .author strong{ color:var(--fc-white); display:block; }
    .fc-testimonial .author span{ color:var(--fc-muted); font-size:.85rem; }

    /* Final CTA */
    .fc-final-cta{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:24px;
        padding:60px;
        text-align:center;
        position:relative;
        overflow:hidden;
        margin-bottom:80px;
    }
    .fc-final-cta::before{
        content:"";
        position:absolute; top:-70px; left:50%; transform:translateX(-50%);
        width:280px; height:280px;
        background:radial-gradient(circle, rgba(72,213,151,.16), transparent 70%);
    }
    .fc-final-cta h2{ font-weight:700; margin-bottom:12px; position:relative; }
    .fc-final-cta p{ color:var(--fc-muted); max-width:480px; margin:0 auto 26px; position:relative; }
</style>

<div class="fc-sol-page">

    <!-- Hero -->
    <section class="fc-sol-hero">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <span class="fc-sol-eyebrow"><i class="ti ti-school"></i> For Students</span>
                    <h1>Launch your career with <span>confidence</span></h1>
                    <p class="lead">Build a verified skills profile, learn from short affordable courses, connect with mentors, and land your first real opportunity — all in one platform designed for students entering the job market.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="#" class="btn-fc-primary"><i class="ti ti-rocket"></i> Create your profile</a>
                        <a href="#" class="btn-fc-ghost"><i class="ti ti-player-play"></i> See how it works</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="fc-hero-visual">
                        <div class="fc-mini-stat">
                            <strong>8K+</strong>
                            <span>Skills listed on the marketplace</span>
                        </div>
                        <div class="fc-mini-stat">
                            <strong>3×</strong>
                            <span>More employer reach with a verified profile</span>
                        </div>
                        <div class="fc-mini-stat mb-0">
                            <strong>1000s</strong>
                            <span>Of students building their first career step</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits -->
    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Everything you need to <span>get hired</span></h2>
                <p>From your first skill listing to your first paid gig — one connected path.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-certificate"></i></div>
                        <h5>Verified skills profile</h5>
                        <p>Showcase what you can actually do, get verified, and stand out to employers browsing the marketplace.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-book-2"></i></div>
                        <h5>Learning Center</h5>
                        <p>Short, affordable, high-quality courses taught by experts — built to close the gap between school and work.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-messages"></i></div>
                        <h5>Mentorship via Connect Room</h5>
                        <p>Message and meet verified professionals directly. Ask questions, get guidance, build real relationships.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-briefcase"></i></div>
                        <h5>Real opportunities</h5>
                        <p>Apply to freelance gigs, internships, and entry-level roles from companies actively hiring on the platform.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How it works -->
    <section class="fc-sol-section alt">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5">
                    <div class="fc-sol-header text-lg-start mx-lg-0">
                        <h2>How it <span>works</span></h2>
                        <p>Four simple steps from sign-up to your first opportunity.</p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="fc-step">
                        <div class="fc-step-num">1</div>
                        <div>
                            <h6>Create your profile</h6>
                            <p>Sign up and list your skills, experience, and aspirations — with text, images, or video.</p>
                        </div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">2</div>
                        <div>
                            <h6>Get verified</h6>
                            <p>Boost your credibility with a verification badge that helps you reach more employers.</p>
                        </div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">3</div>
                        <div>
                            <h6>Learn & connect</h6>
                            <p>Take a course in the Learning Center, or book time with a mentor in the Connect Room.</p>
                        </div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">4</div>
                        <div>
                            <h6>Apply & grow</h6>
                            <p>Browse the marketplace, set up alerts, and apply to gigs and jobs that match your goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats + testimonial -->
    <section class="fc-sol-section">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-lg-8">
                    <div class="fc-stats-bar h-100">
                        <div class="row">
                            <div class="col-4 fc-stat-item"><strong>8K+</strong><span>Skills available</span></div>
                            <div class="col-4 fc-stat-item"><strong>3×</strong><span>Employer reach</span></div>
                            <div class="col-4 fc-stat-item"><strong>100%</strong><span>Verified profiles</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="fc-final-cta h-100 d-flex flex-column justify-content-center mb-0 py-4">
                        <h2 class="h5 mb-2">Ready to start?</h2>
                        <a href="#" class="btn-fc-primary justify-content-center">Join for free</a>
                    </div>
                </div>
            </div>

            <div class="fc-testimonial">
                <div class="quote-mark">"</div>
                <p class="quote">Building my verified profile on Future Connect got me noticed by a company I never thought would reply to a student. Three weeks later I had my first freelance contract.</p>
                <div class="author">
                    <strong>A Future Connect student</strong>
                    <span>Computer Science, Class of 2026</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <div class="container">
        <div class="fc-final-cta">
            <h2>Your career starts with one profile</h2>
            <p>Join thousands of students already building their future on Future Connect.</p>
            <a href="#" class="btn-fc-primary">Create your free profile</a>
        </div>
    </div>

</div>
@endsection
