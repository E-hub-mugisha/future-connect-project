import { useState, useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const PARTNERSHIP_TYPES = [
    { value: 'corporate', label: 'Corporate' },
    { value: 'ngo', label: 'NGO / Development Partner' },
    { value: 'academic', label: 'Academic / Training Institution' },
    { value: 'government', label: 'Government Agency' },
    { value: 'other', label: 'Other' },
];

const INTERESTS = [
    { value: 'hiring', label: 'Talent Hiring' },
    { value: 'training', label: 'Training Programs' },
    { value: 'funding', label: 'Program Funding' },
    { value: 'internships', label: 'Internships' },
    { value: 'events', label: 'Joint Events' },
    { value: 'other_interest', label: 'Other' },
];

const PLACEHOLDER_PARTNERS = ['Partner One', 'Partner Two', 'Partner Three', 'Partner Four', 'Partner Five'];

export default function Partnerships() {
    const { flash } = usePage().props;
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const stored = localStorage.getItem('fc-theme');
        if (stored) setTheme(stored);
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        organization_name: '',
        partnership_type: '',
        contact_name: '',
        contact_role: '',
        email: '',
        phone: '',
        website: '',
        interests: [],
        message: '',
    });

    const toggleInterest = (value) => {
        setData(
            'interests',
            data.interests.includes(value)
                ? data.interests.filter((i) => i !== value)
                : [...data.interests, value]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/partnerships/apply', {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="partnerships-page" data-theme={theme}>
            <Head title="Partnerships — Future Connect" />
            <style>{`
                .partnerships-page {
                    --p-bg-primary: #0e1618;
                    --p-bg-secondary: #131d20;
                    --p-bg-card: #172226;
                    --p-bg-elevated: #1c2a2e;
                    --p-border-color: rgba(255, 255, 255, 0.08);
                    --p-border-hover: rgba(0, 166, 103, 0.4);
                    --p-text-primary: #f2f5f4;
                    --p-text-secondary: #9fb0ae;
                    --p-text-muted: #6b7c7a;
                    --p-accent: #00a667;
                    --p-accent-hover: #00c278;
                    --p-accent-soft: rgba(0, 166, 103, 0.12);
                    --p-accent-border: rgba(0, 166, 103, 0.35);
                    --p-danger: #e5484d;
                    --p-radius-sm: 8px;
                    --p-radius-md: 14px;
                    --p-radius-lg: 20px;
                    --p-shadow-card: 0 10px 30px rgba(0, 0, 0, 0.35);
                    --p-font-system: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

                    font-family: var(--p-font-system);
                    background: var(--p-bg-primary);
                    color: var(--p-text-primary);
                    -webkit-font-smoothing: antialiased;
                    line-height: 1.6;
                    transition: background 0.25s ease, color 0.25s ease;
                }

                .partnerships-page[data-theme="light"] {
                    --p-bg-primary: #f6f9f8;
                    --p-bg-secondary: #F5f5f7;
                    --p-bg-card: #F5f5f7;
                    --p-bg-elevated: #eef3f1;
                    --p-border-color: rgba(14, 22, 24, 0.08);
                    --p-border-hover: rgba(0, 166, 103, 0.35);
                    --p-text-primary: #0e1618;
                    --p-text-secondary: #4b5b58;
                    --p-text-muted: #7c8b89;
                    --p-accent: #00a667;
                    --p-accent-hover: #00915b;
                    --p-accent-soft: rgba(0, 166, 103, 0.08);
                    --p-accent-border: rgba(0, 166, 103, 0.3);
                    --p-shadow-card: 0 10px 30px rgba(14, 22, 24, 0.08);
                }

                .partnerships-page * { box-sizing: border-box; }
                .partnerships-page a { color: inherit; text-decoration: none; }

                .partnerships-page .container {
                    max-width: 1160px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* HERO */
                .partnerships-page .hero {
                    padding: 88px 0 64px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .partnerships-page .hero::before {
                    content: "";
                    position: absolute;
                    top: -120px; left: 50%;
                    transform: translateX(-50%);
                    width: 600px; height: 320px;
                    background: radial-gradient(circle, rgba(0,166,103,0.18), transparent 70%);
                    pointer-events: none;
                }
                .partnerships-page .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    border-radius: 999px;
                    background: var(--p-accent-soft);
                    border: 1px solid var(--p-accent-border);
                    color: var(--p-accent);
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .partnerships-page .hero h1 {
                    font-size: 44px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin: 0 0 16px;
                    position: relative;
                }
                .partnerships-page .hero h1 span { color: var(--p-accent); }
                .partnerships-page .hero p {
                    max-width: 620px;
                    margin: 0 auto;
                    color: var(--p-text-secondary);
                    font-size: 17px;
                    position: relative;
                }
                .partnerships-page .hero-cta { margin-top: 32px; display: flex; gap: 14px; justify-content: center; position: relative; }

                .partnerships-page .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 13px 26px;
                    border-radius: var(--p-radius-sm);
                    font-weight: 600;
                    font-size: 14.5px;
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: all 0.2s ease;
                }
                .partnerships-page .btn-primary { background: var(--p-accent); color: #061410; }
                .partnerships-page .btn-primary:hover { background: var(--p-accent-hover); transform: translateY(-1px); }
                .partnerships-page .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
                .partnerships-page .btn-ghost { background: transparent; border-color: var(--p-border-color); color: var(--p-text-primary); }
                .partnerships-page .btn-ghost:hover { border-color: var(--p-border-hover); }

                /* SECTION HEADER */
                .partnerships-page section { padding: 72px 0; }
                .partnerships-page .section-head { text-align: center; max-width: 620px; margin: 0 auto 44px; }
                .partnerships-page .section-head .tag {
                    color: var(--p-accent); font-size: 13px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; display: block;
                }
                .partnerships-page .section-head h2 { font-size: 30px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px; }
                .partnerships-page .section-head p { color: var(--p-text-secondary); font-size: 15.5px; margin: 0; }

                /* PARTNER TYPE CARDS */
                .partnerships-page .type-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .partnerships-page .type-card {
                    background: var(--p-bg-card);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 30px 26px;
                    transition: border-color 0.2s ease, transform 0.2s ease;
                }
                .partnerships-page .type-card:hover { border-color: var(--p-border-hover); transform: translateY(-3px); }
                .partnerships-page .type-icon {
                    width: 46px; height: 46px;
                    border-radius: 12px;
                    background: var(--p-accent-soft);
                    border: 1px solid var(--p-accent-border);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 20px;
                    margin-bottom: 18px;
                    color: var(--p-accent);
                }
                .partnerships-page .type-card h3 { font-size: 18px; margin: 0 0 10px; font-weight: 650; }
                .partnerships-page .type-card p { color: var(--p-text-secondary); font-size: 14.5px; margin: 0 0 14px; }
                .partnerships-page .type-card ul { margin: 0; padding-left: 18px; color: var(--p-text-secondary); font-size: 14px; }
                .partnerships-page .type-card li { margin-bottom: 6px; }

                /* BENEFITS */
                .partnerships-page .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 18px;
                }
                .partnerships-page .benefit-card {
                    background: var(--p-bg-secondary);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-md);
                    padding: 22px;
                    text-align: left;
                }
                .partnerships-page .benefit-card .num {
                    font-size: 13px; font-weight: 700; color: var(--p-accent);
                    margin-bottom: 10px; display: block;
                }
                .partnerships-page .benefit-card h4 { font-size: 15.5px; margin: 0 0 6px; font-weight: 650; }
                .partnerships-page .benefit-card p { font-size: 13.5px; color: var(--p-text-secondary); margin: 0; }

                /* PARTNER LOGOS */
                .partnerships-page .logos-wrap {
                    background: var(--p-bg-secondary);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 40px;
                }
                .partnerships-page .logos-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    align-items: center;
                }
                .partnerships-page .logo-slot {
                    aspect-ratio: 3 / 1.4;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--p-text-muted);
                    font-size: 12.5px;
                    font-weight: 600;
                    text-align: center;
                    padding: 8px;
                }

                /* FORM */
                .partnerships-page .form-wrap {
                    display: grid;
                    grid-template-columns: 0.9fr 1.4fr;
                    gap: 40px;
                    align-items: start;
                }
                .partnerships-page .form-aside h2 { font-size: 28px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
                .partnerships-page .form-aside p { color: var(--p-text-secondary); font-size: 15px; margin-bottom: 24px; }
                .partnerships-page .aside-item {
                    display: flex; gap: 12px; align-items: flex-start;
                    margin-bottom: 18px; font-size: 14px; color: var(--p-text-secondary);
                }
                .partnerships-page .aside-icon {
                    width: 30px; height: 30px; border-radius: 8px;
                    background: var(--p-accent-soft); border: 1px solid var(--p-accent-border);
                    display: flex; align-items: center; justify-content: center;
                    color: var(--p-accent); font-size: 14px; flex-shrink: 0;
                }

                .partnerships-page .card-form {
                    background: var(--p-bg-card);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-lg);
                    padding: 34px;
                    box-shadow: var(--p-shadow-card);
                }
                .partnerships-page .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .partnerships-page .field { margin-bottom: 18px; }
                .partnerships-page .field label {
                    display: block; font-size: 13.5px; font-weight: 600;
                    color: var(--p-text-secondary); margin-bottom: 7px;
                }
                .partnerships-page .field label .req { color: var(--p-accent); }
                .partnerships-page .field input,
                .partnerships-page .field select,
                .partnerships-page .field textarea {
                    width: 100%;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    padding: 11px 14px;
                    color: var(--p-text-primary);
                    font-family: var(--p-font-system);
                    font-size: 14.5px;
                    outline: none;
                    transition: border-color 0.2s ease;
                }
                .partnerships-page .field input:focus,
                .partnerships-page .field select:focus,
                .partnerships-page .field textarea:focus { border-color: var(--p-accent); }
                .partnerships-page .field textarea { resize: vertical; min-height: 100px; }
                .partnerships-page .field small.error { color: var(--p-danger); font-size: 12.5px; display: block; margin-top: 6px; }

                .partnerships-page .checkbox-group {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-top: 6px;
                }
                .partnerships-page .checkbox-item {
                    display: flex; align-items: center; gap: 9px;
                    background: var(--p-bg-elevated);
                    border: 1px solid var(--p-border-color);
                    border-radius: var(--p-radius-sm);
                    padding: 10px 12px;
                    font-size: 13.5px;
                    color: var(--p-text-secondary);
                    cursor: pointer;
                }
                .partnerships-page .checkbox-item input { width: auto; accent-color: var(--p-accent); }

                .partnerships-page .form-submit {
                    display: flex; align-items: center; justify-content: space-between;
                    margin-top: 24px;
                }
                .partnerships-page .form-note { font-size: 12.5px; color: var(--p-text-muted); max-width: 260px; }

                .partnerships-page .status-banner {
                    padding: 14px 18px;
                    border-radius: var(--p-radius-sm);
                    font-size: 14px;
                    margin-bottom: 24px;
                    border: 1px solid;
                }
                .partnerships-page .status-banner.success {
                    background: var(--p-accent-soft); border-color: var(--p-accent-border); color: var(--p-accent);
                }
                .partnerships-page .status-banner.error {
                    background: rgba(229, 72, 77, 0.1); border-color: rgba(229, 72, 77, 0.35); color: var(--p-danger);
                }

                .partnerships-page footer {
                    border-top: 1px solid var(--p-border-color);
                    padding: 32px 0;
                    text-align: center;
                    color: var(--p-text-muted);
                    font-size: 13px;
                }

                @media (max-width: 860px) {
                    .partnerships-page .type-grid { grid-template-columns: 1fr; }
                    .partnerships-page .benefits-grid { grid-template-columns: 1fr 1fr; }
                    .partnerships-page .logos-grid { grid-template-columns: repeat(2, 1fr); }
                    .partnerships-page .form-wrap { grid-template-columns: 1fr; }
                    .partnerships-page .form-row, .partnerships-page .checkbox-group { grid-template-columns: 1fr; }
                    .partnerships-page .hero h1 { font-size: 32px; }
                }
            `}</style>

            <header className="hero">
                <div className="container">
                    <span className="eyebrow">🤝 Partner With Future Connect</span>
                    <h1>Build Rwanda's talent<br />ecosystem <span>with us</span></h1>
                    <p>We collaborate with corporates, NGOs, and institutions to connect skilled talent with real opportunity — through hiring pipelines, training programs, and shared initiatives across Rwanda.</p>
                    <div className="hero-cta">
                        <a href="#apply" className="btn btn-primary">Become a Partner</a>
                        <a href="#types" className="btn btn-ghost">Explore Partnership Types</a>
                    </div>
                </div>
            </header>

            <section id="types">
                <div className="container">
                    <div className="section-head">
                        <span className="tag">Partnership Tracks</span>
                        <h2>Ways to work with us</h2>
                        <p>Whether you're a business, a development partner, or a training institution, there's a track built for your goals.</p>
                    </div>
                    <div className="type-grid">
                        <div className="type-card">
                            <div className="type-icon">🏢</div>
                            <h3>Corporate Partners</h3>
                            <p>For companies looking to hire verified talent, sponsor programs, or co-brand initiatives.</p>
                            <ul>
                                <li>Priority access to vetted talent pools</li>
                                <li>Co-branded hiring campaigns</li>
                                <li>Internship &amp; apprenticeship pipelines</li>
                            </ul>
                        </div>
                        <div className="type-card">
                            <div className="type-icon">🌍</div>
                            <h3>NGOs &amp; Development Partners</h3>
                            <p>For organizations funding skills development, employment access, or youth economic inclusion.</p>
                            <ul>
                                <li>Joint program design &amp; delivery</li>
                                <li>Shared monitoring &amp; reporting</li>
                                <li>Community-level outreach support</li>
                            </ul>
                        </div>
                        <div className="type-card">
                            <div className="type-icon">🎓</div>
                            <h3>Academic &amp; Training Institutions</h3>
                            <p>For universities, TVET schools, and training providers building career pathways for graduates.</p>
                            <ul>
                                <li>Graduate placement partnerships</li>
                                <li>Curriculum &amp; industry feedback loops</li>
                                <li>Joint certification programs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="section-head">
                        <span className="tag">Why Partner With Us</span>
                        <h2>What partners get</h2>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <span className="num">01</span>
                            <h4>Verified Talent Network</h4>
                            <p>Access a growing pool of vetted, skills-assessed candidates across sectors.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="num">02</span>
                            <h4>Local Reach</h4>
                            <p>Tap into our presence across Rwanda's districts, from Kigali to rural communities.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="num">03</span>
                            <h4>Impact Reporting</h4>
                            <p>Transparent placement and outcome data for your CSR or donor reporting needs.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="num">04</span>
                            <h4>Co-Branded Visibility</h4>
                            <p>Featured placement on our platform and joint communications on shared initiatives.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="section-head">
                        <span className="tag">Our Network</span>
                        <h2>Trusted by organizations across Rwanda</h2>
                    </div>
                    <div className="logos-wrap">
                        <div className="logos-grid">
                            {/* Replace each slot below with an <img> once partner logos are supplied */}
                            {PLACEHOLDER_PARTNERS.map((partner) => (
                                <div className="logo-slot" key={partner}>{partner}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="apply">
                <div className="container">
                    <div className="form-wrap">
                        <div className="form-aside">
                            <span className="eyebrow" style={{ marginBottom: 16 }}>Application</span>
                            <h2>Let's build something together</h2>
                            <p>Tell us about your organization and how you'd like to collaborate. Our partnerships team typically responds within 3–5 business days.</p>

                            <div className="aside-item">
                                <div className="aside-icon">✓</div>
                                <div><strong style={{ color: 'var(--p-text-primary)' }}>Quick review</strong><br />We assess every application against our active program priorities.</div>
                            </div>
                            <div className="aside-item">
                                <div className="aside-icon">✓</div>
                                <div><strong style={{ color: 'var(--p-text-primary)' }}>No obligation</strong><br />Submitting an application starts a conversation — not a commitment.</div>
                            </div>
                            <div className="aside-item">
                                <div className="aside-icon">✓</div>
                                <div><strong style={{ color: 'var(--p-text-primary)' }}>Direct contact</strong><br />A member of our partnerships team will reach out personally.</div>
                            </div>
                        </div>

                        <div className="card-form">
                            {flash?.success && (
                                <div className="status-banner success">{flash.success}</div>
                            )}
                            {Object.keys(errors).length > 0 && (
                                <div className="status-banner error">Please fix the errors below and resubmit.</div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="field">
                                        <label>Organization Name <span className="req">*</span></label>
                                        <input
                                            type="text"
                                            value={data.organization_name}
                                            onChange={(e) => setData('organization_name', e.target.value)}
                                            required
                                        />
                                        {errors.organization_name && <small className="error">{errors.organization_name}</small>}
                                    </div>
                                    <div className="field">
                                        <label>Partnership Type <span className="req">*</span></label>
                                        <select
                                            value={data.partnership_type}
                                            onChange={(e) => setData('partnership_type', e.target.value)}
                                            required
                                        >
                                            <option value="" disabled>Select type</option>
                                            {PARTNERSHIP_TYPES.map((type) => (
                                                <option key={type.value} value={type.value}>{type.label}</option>
                                            ))}
                                        </select>
                                        {errors.partnership_type && <small className="error">{errors.partnership_type}</small>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="field">
                                        <label>Contact Person <span className="req">*</span></label>
                                        <input
                                            type="text"
                                            value={data.contact_name}
                                            onChange={(e) => setData('contact_name', e.target.value)}
                                            required
                                        />
                                        {errors.contact_name && <small className="error">{errors.contact_name}</small>}
                                    </div>
                                    <div className="field">
                                        <label>Role / Title</label>
                                        <input
                                            type="text"
                                            value={data.contact_role}
                                            onChange={(e) => setData('contact_role', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="field">
                                        <label>Email Address <span className="req">*</span></label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />
                                        {errors.email && <small className="error">{errors.email}</small>}
                                    </div>
                                    <div className="field">
                                        <label>Phone Number <span className="req">*</span></label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="+250 7__ ___ ___"
                                            required
                                        />
                                        {errors.phone && <small className="error">{errors.phone}</small>}
                                    </div>
                                </div>

                                <div className="field">
                                    <label>Organization Website</label>
                                    <input
                                        type="url"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        placeholder="https://"
                                    />
                                </div>

                                <div className="field">
                                    <label>Areas of Interest</label>
                                    <div className="checkbox-group">
                                        {INTERESTS.map((interest) => (
                                            <label className="checkbox-item" key={interest.value}>
                                                <input
                                                    type="checkbox"
                                                    checked={data.interests.includes(interest.value)}
                                                    onChange={() => toggleInterest(interest.value)}
                                                />
                                                {interest.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="field">
                                    <label>Tell us about your proposal <span className="req">*</span></label>
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="What would you like to achieve through this partnership?"
                                        required
                                    />
                                    {errors.message && <small className="error">{errors.message}</small>}
                                </div>

                                <div className="form-submit">
                                    <div className="form-note">By submitting, you agree to be contacted by our partnerships team regarding this application.</div>
                                    <button type="submit" className="btn btn-primary" disabled={processing}>
                                        {processing ? 'Submitting…' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    &copy; {new Date().getFullYear()} Future Connect. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

Partnerships.layout = (page) => <GuestLayout>{page}</GuestLayout>;