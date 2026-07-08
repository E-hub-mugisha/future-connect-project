@extends('layouts.guest')
@section('title', 'For Universities')
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

    /* Dashboard preview mock - universities specific */
    .fc-dash-mock{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:20px; padding:24px; }
    .fc-dash-row{ display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid var(--fc-border); }
    .fc-dash-row:last-child{ border-bottom:none; }
    .fc-dash-row span.label{ color:var(--fc-muted); font-size:.85rem; }
    .fc-dash-row span.val{ color:var(--fc-white); font-weight:700; }
    .fc-dash-bar{ height:8px; background:var(--fc-bg-alt); border-radius:6px; overflow:hidden; width:120px; }
    .fc-dash-bar-fill{ height:100%; background:var(--fc-accent); }
</style>

<div class="fc-sol-page">

    <section class="fc-sol-hero">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <span class="fc-sol-eyebrow"><i class="ti ti-building-bank"></i> For Universities</span>
                    <h1>Empower students <span>beyond graduation</span></h1>
                    <p class="lead">Give your graduating classes a head start with verified profiles, employer pipelines, and outcome tracking — extending your career services beyond the classroom.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="#" class="btn-fc-primary"><i class="ti ti-handshake"></i> Partner with us</a>
                        <a href="#" class="btn-fc-ghost"><i class="ti ti-chart-bar"></i> See outcomes</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="fc-dash-mock">
                        <div class="fc-dash-row">
                            <span class="label">Students onboarded</span>
                            <span class="val">1,240</span>
                        </div>
                        <div class="fc-dash-row">
                            <span class="label">Verified profiles</span>
                            <div class="fc-dash-bar"><div class="fc-dash-bar-fill" style="width:82%"></div></div>
                        </div>
                        <div class="fc-dash-row">
                            <span class="label">Placement rate</span>
                            <div class="fc-dash-bar"><div class="fc-dash-bar-fill" style="width:68%"></div></div>
                        </div>
                        <div class="fc-dash-row">
                            <span class="label">Active employer partners</span>
                            <span class="val">54</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Career services that <span>don't end at graduation</span></h2>
                <p>Give your institution and its students a lasting bridge into the job market.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-users-group"></i></div>
                        <h5>Bulk onboarding</h5>
                        <p>Onboard entire graduating classes onto verified profiles in a single coordinated rollout.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-book-2"></i></div>
                        <h5>Co-branded learning</h5>
                        <p>Offer Learning Center tracks alongside your curriculum, tailored to your programs.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-building-store"></i></div>
                        <h5>Employer pipeline</h5>
                        <p>Connect your students directly to the companies actively hiring on the platform.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-chart-bar"></i></div>
                        <h5>Outcomes dashboard</h5>
                        <p>Track placement rates, in-demand skills, and program impact from an admin dashboard.</p>
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
                        <h2>Partnership <span>process</span></h2>
                        <p>From agreement to measurable outcomes.</p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="fc-step">
                        <div class="fc-step-num">1</div>
                        <div><h6>Set up your partnership</h6><p>We work with your career services office to define scope and rollout timeline.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">2</div>
                        <div><h6>Onboard students</h6><p>Graduating classes get verified profiles and access to the Learning Center.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">3</div>
                        <div><h6>Connect to employers</h6><p>Students plug into a live pipeline of companies hiring on the platform.</p></div>
                    </div>
                    <div class="fc-step">
                        <div class="fc-step-num">4</div>
                        <div><h6>Track outcomes</h6><p>Your institution gets a dashboard showing placement rates and skill trends.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-testimonial">
                <div class="quote-mark">"</div>
                <p class="quote">Partnering with Future Connect gave our career office real visibility into where our graduates were landing — and helped more of them land somewhere at all.</p>
                <div class="author"><strong>Career services director</strong><span>Partner university</span></div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="fc-final-cta">
            <h2>Extend your impact past graduation day</h2>
            <p>Partner with Future Connect to support your students long after they leave campus.</p>
            <a href="#" class="btn-fc-primary">Start a partnership</a>
        </div>
    </div>

</div>
@endsection
