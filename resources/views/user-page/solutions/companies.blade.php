@extends('layouts.guest')
@section('title', 'For Companies')
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

    /* Table (companies-specific: verification comparison) */
    .fc-compare{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:18px; overflow:hidden; }
    .fc-compare table{ width:100%; border-collapse:collapse; color:var(--fc-white); margin:0; }
    .fc-compare th{ text-align:left; padding:16px 20px; background:var(--fc-bg-alt); color:var(--fc-muted); font-size:.8rem; text-transform:uppercase; letter-spacing:.04em; }
    .fc-compare td{ padding:16px 20px; border-top:1px solid var(--fc-border); font-size:.92rem; }
    .fc-compare td.yes{ color:var(--fc-accent); font-weight:700; }
</style>

<div class="fc-sol-page">

    <section class="fc-sol-hero">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <span class="fc-sol-eyebrow"><i class="ti ti-building-skyscraper"></i> For Companies</span>
                    <h1>Find verified and <span>sharp skills</span> faster</h1>
                    <p class="lead">Skip the guesswork. Search a marketplace of verified professionals, hire for a project or full-time, and cut your time-to-hire dramatically.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="#" class="btn-fc-primary"><i class="ti ti-search"></i> Search talent</a>
                        <a href="#" class="btn-fc-ghost"><i class="ti ti-file-plus"></i> Post a job</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="fc-hero-visual">
                        <div class="fc-mini-stat">
                            <strong>8K+</strong>
                            <span>Verified skills to search from</span>
                        </div>
                        <div class="fc-mini-stat">
                            <strong>Faster</strong>
                            <span>Time-to-hire vs traditional recruiting</span>
                        </div>
                        <div class="fc-mini-stat mb-0">
                            <strong>Flexible</strong>
                            <span>Freelance, contract, or full-time hires</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Hiring, <span>simplified</span></h2>
                <p>Everything a hiring team needs to find real skill, fast.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-filter"></i></div>
                        <h5>Skill-based search</h5>
                        <p>Search by skill, category, and location instead of sorting through résumés one by one.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-badge"></i></div>
                        <h5>Verification badges</h5>
                        <p>Every verified profile has been checked — hire with confidence, not guesswork.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-adjustments"></i></div>
                        <h5>Flexible engagement</h5>
                        <p>Hire for a one-off project, ongoing freelance work, or a full-time role — your choice.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="fc-benefit-card">
                        <div class="fc-benefit-icon"><i class="ti ti-users-group"></i></div>
                        <h5>Team & bulk hiring</h5>
                        <p>Post multiple roles for a project at once and manage applicants from a single dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="fc-sol-section alt">
        <div class="container">
            <div class="fc-sol-header">
                <h2>Why hire on <span>Future Connect</span></h2>
                <p>See the difference verified skill search makes.</p>
            </div>
            <div class="fc-compare">
                <table>
                    <thead>
                        <tr>
                            <th>Capability</th>
                            <th>Traditional hiring</th>
                            <th>Future Connect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Verified skill profiles</td>
                            <td>Rarely</td>
                            <td class="yes">Always</td>
                        </tr>
                        <tr>
                            <td>Search by exact skill</td>
                            <td>Limited</td>
                            <td class="yes">Built-in</td>
                        </tr>
                        <tr>
                            <td>Direct messaging with candidates</td>
                            <td>Through recruiters</td>
                            <td class="yes">Connect Room</td>
                        </tr>
                        <tr>
                            <td>Local talent focus</td>
                            <td>Varies</td>
                            <td class="yes">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="fc-sol-section">
        <div class="container">
            <div class="fc-testimonial">
                <div class="quote-mark">"</div>
                <p class="quote">We filled a specialised design role in under a week — something that would normally take us over a month through traditional recruiting.</p>
                <div class="author"><strong>Hiring manager</strong><span>Tech company, Kigali</span></div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="fc-final-cta">
            <h2>Hire sharper, hire faster</h2>
            <p>Search verified talent or post your next role today.</p>
            <a href="#" class="btn-fc-primary">Start hiring</a>
        </div>
    </div>

</div>
@endsection
