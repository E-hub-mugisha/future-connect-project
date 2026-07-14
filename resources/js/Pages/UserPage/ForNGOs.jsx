import React from 'react';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ForNGOs() {
    return (
        <>
            <Head title="For NGOs" />

            <div className="fc-sol-page">
                {/* Hero Section */}
                <section className="fc-sol-hero">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <span className="fc-sol-eyebrow">
                                    <i className="ti ti-heart-handshake"></i> For NGOs
                                </span>
                                <h1>Partner with skilled <span>local talent</span></h1>
                                <p className="lead">
                                    Post projects, find verified local consultants and freelancers, and get transparent, secure sponsorship tools — everything you need to execute your programs faster.
                                </p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="#" className="btn-fc-primary">
                                        <i className="ti ti-briefcase"></i> Post a project
                                    </Link>
                                    <Link href="#" className="btn-fc-ghost">
                                        <i className="ti ti-users"></i> Browse talent
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="fc-hero-visual">
                                    <div className="fc-mini-stat">
                                        <strong>Verified</strong>
                                        <span>Consultants and local professionals</span>
                                    </div>
                                    <div className="fc-mini-stat">
                                        <strong>Secure</strong>
                                        <span>Payment protection for every engagement</span>
                                    </div>
                                    <div className="fc-mini-stat mb-0">
                                        <strong>Fast</strong>
                                        <span>From posted project to first applicant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="fc-sol-section">
                    <div className="container">
                        <div className="fc-sol-header">
                            <h2>Built for <span>program delivery</span></h2>
                            <p>Everything an NGO needs to find and manage local talent for a project or initiative.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="fc-benefit-card">
                                    <div className="fc-benefit-icon">
                                        <i className="ti ti-file-text"></i>
                                    </div>
                                    <h5>Post a project</h5>
                                    <p>Describe your initiative, budget, and location — reach verified professionals actively looking for work.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fc-benefit-card">
                                    <div className="fc-benefit-icon">
                                        <i className="ti ti-shield-check"></i>
                                    </div>
                                    <h5>Verified consultants</h5>
                                    <p>Filter by skill, category, and location to find local talent that's been checked and verified.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fc-benefit-card">
                                    <div className="fc-benefit-icon">
                                        <i className="ti ti-hand-heart"></i>
                                    </div>
                                    <h5>Sponsor projects</h5>
                                    <p>Fund community-driven initiatives directly through the platform with full transparency.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="fc-benefit-card">
                                    <div className="fc-benefit-icon">
                                        <i className="ti ti-lock"></i>
                                    </div>
                                    <h5>Secure payments</h5>
                                    <p>Every transaction is protected — no chasing invoices or worrying about accountability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="fc-sol-section alt">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="fc-sol-header text-lg-start mx-lg-0">
                                    <h2>How it <span>works</span></h2>
                                    <p>From posting a need to closing out a project.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="fc-step">
                                    <div className="fc-step-num">1</div>
                                    <div>
                                        <h6>Post your project</h6>
                                        <p>Add a title, category, location, and budget — it's live on the marketplace immediately.</p>
                                    </div>
                                </div>
                                <div className="fc-step">
                                    <div className="fc-step-num">2</div>
                                    <div>
                                        <h6>Review applicants</h6>
                                        <p>Verified professionals apply directly, with portfolios and proposals attached.</p>
                                    </div>
                                </div>
                                <div className="fc-step">
                                    <div className="fc-step-num">3</div>
                                    <div>
                                        <h6>Collaborate securely</h6>
                                        <p>Message through the Connect Room and manage the engagement end-to-end.</p>
                                    </div>
                                </div>
                                <div className="fc-step">
                                    <div className="fc-step-num">4</div>
                                    <div>
                                        <h6>Pay with confidence</h6>
                                        <p>Release payment through the platform's protected payment flow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats & CTA Section */}
                <section className="fc-sol-section">
                    <div className="container">
                        <div className="row g-4 mb-5">
                            <div className="col-lg-8">
                                <div className="fc-stats-bar h-100">
                                    <div className="row">
                                        <div className="col-4 fc-stat-item">
                                            <strong>100%</strong>
                                            <span>Verified partners</span>
                                        </div>
                                        <div className="col-4 fc-stat-item">
                                            <strong>Local</strong>
                                            <span>Talent, local context</span>
                                        </div>
                                        <div className="col-4 fc-stat-item">
                                            <strong>Secure</strong>
                                            <span>Every payment protected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fc-final-cta h-100 d-flex flex-column justify-content-center mb-0 py-4">
                                    <h2 className="h5 mb-2">Have a project?</h2>
                                    <Link href="#" className="btn-fc-primary justify-content-center">Post it now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="fc-testimonial">
                            <div className="quote-mark">"</div>
                            <p className="quote">
                                We needed a local consultant who understood the community, fast. Future Connect got us three qualified applicants within days.
                            </p>
                            <div className="author">
                                <strong>NGO program lead</strong>
                                <span>Kigali, Rwanda</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="container">
                    <div className="fc-final-cta">
                        <h2>Find the talent your program needs</h2>
                        <p>Post a project or browse verified local professionals today.</p>
                        <Link href="#" className="btn-fc-primary">Get started</Link>
                    </div>
                </div>
            </div>

            <style>{`
                :root {
                    --fc-bg: #f8fafb;
                    --fc-bg-alt: #f0f4f5;
                    --fc-card: #ffffff;
                    --fc-border: #e1e8ea;
                    --fc-accent: #2a9d6a;
                    --fc-accent-dark: #1f7a52;
                    --fc-white: #1a2e33;
                    --fc-muted: #5a7a7a;
                }

                .fc-sol-page {
                    background: var(--fc-bg);
                    color: var(--fc-white);
                    min-height: 100vh;
                }

                .fc-sol-hero {
                    padding: 90px 0 70px;
                    background: radial-gradient(circle at 12% 15%, rgba(42, 157, 106, 0.08), transparent 45%),
                                radial-gradient(circle at 88% 85%, rgba(42, 157, 106, 0.05), transparent 50%),
                                var(--fc-bg);
                    border-bottom: 1px solid var(--fc-border);
                }

                .fc-sol-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--fc-accent);
                    font-weight: 700;
                    font-size: 0.82rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    background: rgba(42, 157, 106, 0.1);
                    padding: 6px 16px;
                    border-radius: 30px;
                    margin-bottom: 18px;
                }

                .fc-sol-hero h1 {
                    font-weight: 700;
                    font-size: 2.6rem;
                    letter-spacing: -0.5px;
                    margin-bottom: 18px;
                    color: var(--fc-white);
                }

                .fc-sol-hero h1 span {
                    color: var(--fc-accent);
                }

                .fc-sol-hero p.lead {
                    color: var(--fc-muted);
                    font-size: 1.1rem;
                    max-width: 520px;
                    margin-bottom: 28px;
                }

                .btn-fc-primary {
                    background: var(--fc-accent);
                    border: none;
                    color: #ffffff;
                    font-weight: 700;
                    border-radius: 30px;
                    padding: 0.8rem 2rem;
                    transition: 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                }

                .btn-fc-primary:hover {
                    background: var(--fc-accent-dark);
                    color: #ffffff;
                    transform: translateY(-2px);
                }

                .btn-fc-ghost {
                    background: transparent;
                    border: 1px solid var(--fc-border);
                    color: var(--fc-white);
                    font-weight: 600;
                    border-radius: 30px;
                    padding: 0.8rem 2rem;
                    text-decoration: none;
                    transition: 0.2s;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .btn-fc-ghost:hover {
                    border-color: var(--fc-accent);
                    color: var(--fc-accent);
                }

                .fc-hero-visual {
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 24px;
                    padding: 34px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
                }

                .fc-hero-visual::before {
                    content: "";
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 180px;
                    height: 180px;
                    background: radial-gradient(circle, rgba(42, 157, 106, 0.15), transparent 70%);
                }

                .fc-mini-stat {
                    background: var(--fc-bg-alt);
                    border: 1px solid var(--fc-border);
                    border-radius: 14px;
                    padding: 16px 18px;
                    margin-bottom: 12px;
                }

                .fc-mini-stat strong {
                    color: var(--fc-accent);
                    font-size: 1.4rem;
                    display: block;
                }

                .fc-mini-stat span {
                    color: var(--fc-muted);
                    font-size: 0.82rem;
                }

                .fc-sol-section {
                    padding: 70px 0;
                }

                .fc-sol-section.alt {
                    background: var(--fc-bg-alt);
                    border-top: 1px solid var(--fc-border);
                    border-bottom: 1px solid var(--fc-border);
                }

                .fc-sol-header {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto 46px;
                }

                .fc-sol-header h2 {
                    font-weight: 700;
                    font-size: 2rem;
                    margin-bottom: 10px;
                    color: var(--fc-white);
                }

                .fc-sol-header h2 span {
                    color: var(--fc-accent);
                }

                .fc-sol-header p {
                    color: var(--fc-muted);
                }

                .fc-benefit-card {
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 18px;
                    padding: 30px 26px;
                    height: 100%;
                    transition: 0.25s;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                }

                .fc-benefit-card:hover {
                    border-color: var(--fc-accent);
                    transform: translateY(-4px);
                    box-shadow: 0 16px 32px rgba(42, 157, 106, 0.1);
                }

                .fc-benefit-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    background: rgba(42, 157, 106, 0.1);
                    color: var(--fc-accent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.35rem;
                    margin-bottom: 18px;
                }

                .fc-benefit-card h5 {
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--fc-white);
                }

                .fc-benefit-card p {
                    color: var(--fc-muted);
                    font-size: 0.92rem;
                    margin: 0;
                }

                .fc-step {
                    display: flex;
                    gap: 20px;
                    padding: 26px 0;
                    border-bottom: 1px solid var(--fc-border);
                }

                .fc-step:last-child {
                    border-bottom: none;
                }

                .fc-step-num {
                    flex: 0 0 auto;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(42, 157, 106, 0.1);
                    color: var(--fc-accent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }

                .fc-step h6 {
                    font-weight: 700;
                    margin-bottom: 6px;
                    color: var(--fc-white);
                }

                .fc-step p {
                    color: var(--fc-muted);
                    margin: 0;
                    font-size: 0.92rem;
                }

                .fc-stats-bar {
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 20px;
                    padding: 36px;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                }

                .fc-stat-item {
                    text-align: center;
                }

                .fc-stat-item strong {
                    display: block;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--fc-accent);
                }

                .fc-stat-item span {
                    color: var(--fc-muted);
                    font-size: 0.85rem;
                }

                .fc-testimonial {
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 20px;
                    padding: 40px;
                    position: relative;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                }

                .fc-testimonial .quote-mark {
                    font-size: 3rem;
                    color: var(--fc-accent);
                    opacity: 0.3;
                    line-height: 1;
                }

                .fc-testimonial p.quote {
                    font-size: 1.1rem;
                    color: var(--fc-white);
                    margin: 10px 0 20px;
                }

                .fc-testimonial .author strong {
                    color: var(--fc-white);
                    display: block;
                }

                .fc-testimonial .author span {
                    color: var(--fc-muted);
                    font-size: 0.85rem;
                }

                .fc-final-cta {
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 24px;
                    padding: 60px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 80px;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                }

                .fc-final-cta::before {
                    content: "";
                    position: absolute;
                    top: -70px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 280px;
                    height: 280px;
                    background: radial-gradient(circle, rgba(42, 157, 106, 0.12), transparent 70%);
                }

                .fc-final-cta h2 {
                    font-weight: 700;
                    margin-bottom: 12px;
                    position: relative;
                    color: var(--fc-white);
                }

                .fc-final-cta p {
                    color: var(--fc-muted);
                    max-width: 480px;
                    margin: 0 auto 26px;
                    position: relative;
                }
            `}</style>
        </>
    );
}

ForNGOs.layout = (page) => <GuestLayout children={page} />;
