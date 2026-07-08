@extends('layouts.guest')
@section('title', 'For Investors')
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

    /* Trend list - investors specific */
    .fc-trend-list{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:18px; overflow:hidden; }
    .fc-trend-row{ display:flex; align-items:center; justify-content:space-between; padding:18px 24px; border-bottom:1px solid var(--fc-border); }
    .fc-trend-row:last-child{ border-bottom:none; }
    .fc-trend-name{ font-weight:600; }
    .fc-trend-badge{
        background:rgba(72,213,151,.12);
        color:var(--fc-accent);
        font-weight:700;
        font-size:.8rem;
        padding:5px 12px;
        border-radius:20px;
        display:inline-flex;
        align-items:center;
        gap:4px;
    }
    .fc-trend-bar-wrap{ width:140px; height:8px; background:var(--fc-bg-alt); border-radius:6px; overflow:hidden; margin-left:20px; }
    .fc-trend-bar-fill{ height:100%; background:var(--fc-accent); }
</style>

<div class="fc-sol-page">

    <section class="fc-sol-hero">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <span class="fc-sol-eyebrow"><i class="ti ti-chart-line"></i> For Investors</span>
                    <h1>Discover skills <span>worth investing in</span></h1>
                    <p class="lead">Get visibility into a growing talent marketplace — emerging skill trends, platform traction, and where real economic opportunity is forming.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="#" class="btn-fc-primary"><i class="ti ti-mail"></i> Get in touch</a>
                        <a href="#" class="btn-fc-ghost"><i class="ti ti-chart-bar"></i> View platform metrics</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="fc-hero-visual">
                        <div class="fc-mini-stat">
                            <strong>8K+</strong>
                            <span>Skills listed and growing</span>
                        </div>
                        <div class="fc-mini-stat">
                            <strong>Active</strong>
                            <span>Marketplace with real transactions</span>
                        </div>
                        <div class="fc-mini-stat mb-0">
                            <strong>Rwanda</strong>
                            <span>& expanding regional footprint</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Signal, not <span>guesswork</span></h2>
                <p>Real platform data on where talent and demand are moving.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-chart-bar"></i></div>
                        <h5>Platform metrics</h5>
                        <p>Skills listed, active users, and verified professionals — transparent platform traction.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-trending-up"></i></div>
                        <h5>Emerging skill trends</h5>
                        <p>See which skills and sectors are gaining traction by region in near real time.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-bulb"></i></div>
                        <h5>Marketplace signals</h5>
                        <p>Identify which sellers and creators are gaining early traction in the products marketplace.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-handshake"></i></div>
                        <h5>Partnership access</h5>
                        <p>Direct line to the Future Connect team for investment and partnership conversations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section alt">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Trending <span>skill categories</span></h2>
                <p>A snapshot of demand growth across the platform.</p>
            </div>
            <div class="fc-trend-list">
                <div class="fc-trend-row">
                    <span class="fc-trend-name">Digital Marketing</span>
                    <div class="d-flex align-items-center">
                        <span class="fc-trend-badge"><i class="ti ti-arrow-up"></i> +38%</span>
                        <div class="fc-trend-bar-wrap"><div class="fc-trend-bar-fill" style="width:80%"></div></div>
                    </div>
                </div>
                <div class="fc-trend-row">
                    <span class="fc-trend-name">Software Development</span>
                    <div class="d-flex align-items-center">
                        <span class="fc-trend-badge"><i class="ti ti-arrow-up"></i> +31%</span>
                        <div class="fc-trend-bar-wrap"><div class="fc-trend-bar-fill" style="width:70%"></div></div>
                    </div>
                </div>
                <div class="fc-trend-row">
                    <span class="fc-trend-name">Writing & Content</span>
                    <div class="d-flex align-items-center">
                        <span class="fc-trend-badge"><i class="ti ti-arrow-up"></i> +22%</span>
                        <div class="fc-trend-bar-wrap"><div class="fc-trend-bar-fill" style="width:55%"></div></div>
                    </div>
                </div>
                <div class="fc-trend-row">
                    <span class="fc-trend-name">Design & Creative</span>
                    <div class="d-flex align-items-center">
                        <span class="fc-trend-badge"><i class="ti ti-arrow-up"></i> +19%</span>
                        <div class="fc-trend-bar-wrap"><div class="fc-trend-bar-fill" style="width:48%"></div></div>
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
                            <div class="col-4 fc-stat-item"><strong>8K+</strong><span>Skills tracked</span></div>
                            <div class="col-4 fc-stat-item"><strong>Growing</strong><span>Monthly active users</span></div>
                            <div class="col-4 fc-stat-item"><strong>Live</strong><span>Marketplace transactions</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="fc-final-cta h-100 d-flex flex-column justify-content-center mb-0 py-4">
                        <h2 class="h5 mb-2">Let's talk</h2>
                        <a href="#" class="btn-fc-primary justify-content-center">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="fc-final-cta">
            <h2>Invest where the talent is moving</h2>
            <p>Get access to platform data and partnership opportunities with Future Connect.</p>
            <a href="#" class="btn-fc-primary">Get in touch</a>
        </div>
    </div>

</div>
@endsection
