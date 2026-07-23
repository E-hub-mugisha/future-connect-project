import React, { useEffect, useRef, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const TOTAL_STEPS = 4;

// Maps each form field to the step it lives on, used to jump back to the
// first step containing a validation error after a failed submit.
const FIELD_STEP = {
    title: 1,
    category_id: 1,
    description: 1,
    budget_min: 2,
    budget_max: 2,
    timeline: 2,
    experience_level: 2,
    skills: 2,
    talent_id: 3,
    client_name: 4,
    company_name: 4,
    client_email: 4,
    client_phone: 4,
};

export default function Create({ categories, timelines, experienceLevels }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category_id: '',
        description: '',
        budget_type: 'fixed',
        budget_min: '',
        budget_max: '',
        timeline: '',
        experience_level: '',
        skills: '',
        talent_id: '',
        client_name: '',
        company_name: '',
        client_email: '',
        client_phone: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [talents, setTalents] = useState([]);
    const [talentLoading, setTalentLoading] = useState(false);
    const [talentEmptyMessage, setTalentEmptyMessage] = useState('');
    const lastFetchedCategory = useRef(null);
    const stepRef = useRef(null);

    const selectedCategory = categories.find(c => String(c.id) === String(data.category_id));
    const selectedTimeline = timelines[data.timeline];
    const selectedTalent = talents.find(t => String(t.id) === String(data.talent_id));

    // Jump back to the first step with a validation error after a failed submit.
    useEffect(() => {
        const errorKeys = Object.keys(errors);
        if (errorKeys.length === 0) return;
        const steps = errorKeys.map(key => FIELD_STEP[key]).filter(Boolean);
        if (steps.length > 0) {
            setCurrentStep(Math.min(...steps));
        }
    }, [errors]);

    useEffect(() => {
        if (currentStep === 3) {
            loadTalents();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    function loadTalents() {
        if (!data.category_id) {
            setTalents([]);
            setTalentEmptyMessage('Please choose a category in step 1 first.');
            return;
        }

        if (lastFetchedCategory.current === data.category_id) return;

        setTalentLoading(true);
        setTalentEmptyMessage('');

        fetch(`/quick-hire/talents-by-category/${data.category_id}`, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
            .then(res => res.json())
            .then(result => {
                lastFetchedCategory.current = data.category_id;
                setTalentLoading(false);
                setTalents(result.talents ?? []);
                if (!result.talents || result.talents.length === 0) {
                    setTalentEmptyMessage(
                        "No available talent found in this category yet — that's okay, we'll manually match you after you submit."
                    );
                }
            })
            .catch(() => {
                setTalentLoading(false);
                setTalents([]);
                setTalentEmptyMessage(
                    "Could not load suggestions right now — you can still submit and we'll match you manually."
                );
            });
    }

    function handleCategoryChange(e) {
        setData('category_id', e.target.value);
        lastFetchedCategory.current = null;
        setData('talent_id', '');
    }

    function selectTalent(talent) {
        setData('talent_id', String(data.talent_id) === String(talent.id) ? '' : talent.id);
    }

    function validateStep() {
        const el = stepRef.current;
        if (!el) return true;
        const invalid = el.querySelector(':invalid');
        if (invalid) {
            invalid.reportValidity();
            return false;
        }
        return true;
    }

    function goNext() {
        if (!validateStep()) return;
        if (currentStep < TOTAL_STEPS) setCurrentStep(currentStep + 1);
    }

    function goPrev() {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateStep()) return;
        post(route('quick-hire.store'));
    }

    const budgetSummary = data.budget_min || data.budget_max
        ? `${data.budget_type} — ${data.budget_min || '0'} to ${data.budget_max || '—'} RWF`
        : data.budget_type;

    return (
        <>
            <Head title="Quick Hire - Post a project, get matched fast" />

            <style>{`
                :root {
                    --qh-bg: #0e1618;
                    --qh-surface: #141d20;
                    --qh-surface2: #1a2428;
                    --qh-green: #48d597;
                    --qh-green-dim: rgba(0, 166, 103, .14);
                    --qh-green-glow: rgba(0, 166, 103, .28);
                    --qh-text: #e8f0ed;
                    --qh-muted: #7a9a8e;
                    --qh-border: rgba(0, 166, 103, .16);
                    --qh-border-h: rgba(0, 166, 103, .38);
                    --qh-radius: 14px;
                }

                .qh-page, .qh-page *, .qh-page *::before, .qh-page *::after {
                    box-sizing: border-box;
                }

                .qh-page {
                    background: var(--qh-bg);
                    font-family: 'DM Sans', sans-serif;
                    color: var(--qh-text);
                    padding: 50px 0 80px;
                }

                .qh-header {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto 36px;
                }

                .qh-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(0, 166, 103, .1);
                    border: 1px solid rgba(0, 166, 103, .2);
                    border-radius: 99px;
                    padding: 5px 14px;
                    font-size: 11.5px;
                    color: var(--qh-green);
                    font-weight: 500;
                    margin-bottom: 16px;
                }

                .qh-pill::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--qh-green);
                    display: inline-block;
                }

                .qh-header h1 {
                    font-family: 'Syne', sans-serif;
                    font-weight: 800;
                    font-size: clamp(26px, 3.4vw, 36px);
                    letter-spacing: -1px;
                    color: #fff;
                    margin: 0 0 10px;
                }

                .qh-header p {
                    color: var(--qh-muted);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }

                .qh-wrap {
                    max-width: 760px;
                    margin: 0 auto;
                }

                .qh-progress {
                    display: flex;
                    align-items: center;
                    margin-bottom: 36px;
                }

                .qh-progress-step {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                }

                .qh-progress-circle {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    color: var(--qh-muted);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 700;
                    z-index: 1;
                    transition: all .25s;
                }

                .qh-progress-label {
                    font-size: 11px;
                    color: var(--qh-muted);
                    margin-top: 8px;
                    text-align: center;
                    white-space: nowrap;
                }

                .qh-progress-line {
                    position: absolute;
                    top: 17px;
                    left: -50%;
                    width: 100%;
                    height: 2px;
                    background: var(--qh-border);
                    z-index: 0;
                }

                .qh-progress-step:first-child .qh-progress-line {
                    display: none;
                }

                .qh-progress-step.active .qh-progress-circle,
                .qh-progress-step.done .qh-progress-circle {
                    background: var(--qh-green);
                    border-color: var(--qh-green);
                    color: #06120d;
                }

                .qh-progress-step.active .qh-progress-label,
                .qh-progress-step.done .qh-progress-label {
                    color: var(--qh-text);
                }

                .qh-progress-step.done .qh-progress-line,
                .qh-progress-step.active .qh-progress-line {
                    background: var(--qh-green);
                }

                .qh-card {
                    background: var(--qh-surface);
                    border: 1px solid var(--qh-border);
                    border-radius: var(--qh-radius);
                    padding: 32px;
                }

                .qh-step { display: none; }
                .qh-step.active { display: block; animation: qhFade .25s ease; }

                @keyframes qhFade {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .qh-step-title {
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    font-size: 20px;
                    color: #fff;
                    margin: 0 0 4px;
                }

                .qh-step-sub {
                    color: var(--qh-muted);
                    font-size: 13px;
                    margin: 0 0 24px;
                }

                .qh-form-group { margin-bottom: 18px; }

                .qh-form-label {
                    font-size: 12.5px;
                    font-weight: 600;
                    color: var(--qh-muted);
                    margin-bottom: 6px;
                    display: block;
                }

                .qh-form-control, select.qh-form-control {
                    width: 100%;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 9px;
                    color: var(--qh-text);
                    font-size: 13.5px;
                    padding: 12px 14px;
                    outline: none;
                    transition: border-color .2s, background .2s;
                }

                .qh-form-control::placeholder { color: #3d5a52; }

                .qh-form-control:focus {
                    border-color: var(--qh-green);
                    background: rgba(0, 166, 103, .06);
                }

                textarea.qh-form-control { resize: vertical; min-height: 110px; }

                .qh-form-error {
                    color: #ff8a8a;
                    font-size: 11.5px;
                    margin-top: 5px;
                }

                .qh-row { display: flex; gap: 16px; flex-wrap: wrap; }
                .qh-row > div { flex: 1; min-width: 180px; }

                .qh-toggle-group {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 18px;
                }

                .qh-toggle {
                    flex: 1;
                    text-align: center;
                    padding: 12px;
                    border-radius: 9px;
                    border: 1px solid var(--qh-border);
                    background: var(--qh-surface2);
                    color: var(--qh-muted);
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-toggle input { display: none; }

                .qh-toggle.active {
                    background: var(--qh-green-dim);
                    border-color: var(--qh-border-h);
                    color: #fff;
                }

                .qh-talent-loading {
                    text-align: center;
                    color: var(--qh-muted);
                    font-size: 13px;
                    padding: 30px 0;
                }

                .qh-talent-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 14px;
                }

                .qh-talent-card {
                    position: relative;
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 12px;
                    padding: 16px;
                    display: flex;
                    gap: 12px;
                    align-items: flex-start;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-talent-card:hover { border-color: var(--qh-border-h); }

                .qh-talent-card.selected {
                    border-color: var(--qh-green);
                    background: var(--qh-green-dim);
                }

                .qh-talent-card img {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    object-fit: cover;
                    flex-shrink: 0;
                    background: var(--qh-surface);
                }

                .qh-talent-name {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 2px;
                }

                .qh-talent-meta {
                    font-size: 10.5px;
                    color: var(--qh-green);
                    font-weight: 600;
                    margin-bottom: 4px;
                    display: flex;
                    gap: 6px;
                    align-items: center;
                }

                .qh-talent-excerpt {
                    font-size: 11.5px;
                    color: var(--qh-muted);
                    line-height: 1.5;
                }

                .qh-talent-check {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 1px solid var(--qh-border-h);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: transparent;
                    font-size: 10px;
                    background: var(--qh-surface);
                    transition: all .2s;
                }

                .qh-talent-card.selected .qh-talent-check {
                    background: var(--qh-green);
                    color: #06120d;
                }

                .qh-skip-note {
                    text-align: center;
                    margin-top: 16px;
                    font-size: 12px;
                    color: var(--qh-muted);
                }

                .qh-empty-talents {
                    text-align: center;
                    padding: 30px;
                    color: var(--qh-muted);
                    font-size: 13px;
                    border: 1px dashed var(--qh-border);
                    border-radius: 10px;
                }

                .qh-review {
                    background: var(--qh-surface2);
                    border: 1px solid var(--qh-border);
                    border-radius: 10px;
                    padding: 16px 18px;
                    margin-bottom: 22px;
                    font-size: 12.5px;
                    color: var(--qh-muted);
                }

                .qh-review div { margin-bottom: 6px; }
                .qh-review strong { color: var(--qh-text); }
                .qh-review div:last-child { margin-bottom: 0; }

                .qh-nav {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 28px;
                    gap: 12px;
                }

                .qh-btn-primary {
                    background: var(--qh-green);
                    color: #06120d;
                    font-weight: 700;
                    font-size: 13.5px;
                    border: none;
                    border-radius: 9px;
                    padding: 13px 26px;
                    cursor: pointer;
                    transition: background .2s;
                }

                .qh-btn-primary:hover { background: #00c07a; }
                .qh-btn-primary:disabled { opacity: .6; cursor: not-allowed; }

                .qh-btn-secondary {
                    background: transparent;
                    color: var(--qh-muted);
                    font-weight: 600;
                    font-size: 13.5px;
                    border: 1px solid var(--qh-border);
                    border-radius: 9px;
                    padding: 13px 26px;
                    cursor: pointer;
                    transition: all .2s;
                }

                .qh-btn-secondary:hover { color: var(--qh-text); border-color: var(--qh-border-h); }
                .qh-btn-secondary:disabled { opacity: .35; cursor: not-allowed; }

                @media (max-width: 640px) {
                    .qh-card { padding: 22px; }
                    .qh-talent-grid { grid-template-columns: 1fr; }
                    .qh-progress-label { display: none; }
                }
            `}</style>

            <div className="qh-page">
                <div className="container">

                    <div className="qh-header">
                        <div className="qh-pill">Quick Hire</div>
                        <h1>Post a project, get matched fast</h1>
                        <p>Tell us what you need and we'll suggest talent from the right category — no lengthy job posting required.</p>
                    </div>

                    <div className="qh-wrap">

                        {/* Progress */}
                        <div className="qh-progress">
                            {['Project', 'Budget', 'Talent', 'Contact'].map((label, i) => {
                                const step = i + 1;
                                return (
                                    <div
                                        key={step}
                                        className={`qh-progress-step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'done' : ''}`}
                                    >
                                        <div className="qh-progress-line"></div>
                                        <div className="qh-progress-circle">{step}</div>
                                        <div className="qh-progress-label">{label}</div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* /Progress */}

                        <div className="qh-card">
                            <form onSubmit={handleSubmit}>

                                {/* STEP 1: Project basics */}
                                <div className={`qh-step ${currentStep === 1 ? 'active' : ''}`} ref={currentStep === 1 ? stepRef : null}>
                                    <h3 className="qh-step-title">What do you need done?</h3>
                                    <p className="qh-step-sub">Give us the essentials — we'll use the category to find matching talent.</p>

                                    <div className="qh-form-group">
                                        <label className="qh-form-label" htmlFor="qh_title">Project Title</label>
                                        <input
                                            type="text"
                                            id="qh_title"
                                            className="qh-form-control"
                                            placeholder="e.g. Build a landing page for our NGO"
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            required
                                        />
                                        {errors.title && <div className="qh-form-error">{errors.title}</div>}
                                    </div>

                                    <div className="qh-form-group">
                                        <label className="qh-form-label" htmlFor="qh_category">Category</label>
                                        <select
                                            id="qh_category"
                                            className="qh-form-control"
                                            value={data.category_id}
                                            onChange={handleCategoryChange}
                                            required
                                        >
                                            <option value="" disabled>Select a category</option>
                                            {categories.map(category => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}
                                        </select>
                                        {errors.category_id && <div className="qh-form-error">{errors.category_id}</div>}
                                    </div>

                                    <div className="qh-form-group">
                                        <label className="qh-form-label" htmlFor="qh_description">Project Description</label>
                                        <textarea
                                            id="qh_description"
                                            className="qh-form-control"
                                            rows="5"
                                            placeholder="Describe the work, goals, and any specifics the talent should know..."
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            required
                                        />
                                        {errors.description && <div className="qh-form-error">{errors.description}</div>}
                                    </div>
                                </div>

                                {/* STEP 2: Budget & timeline */}
                                <div className={`qh-step ${currentStep === 2 ? 'active' : ''}`} ref={currentStep === 2 ? stepRef : null}>
                                    <h3 className="qh-step-title">Budget & timeline</h3>
                                    <p className="qh-step-sub">This helps us match you with talent in the right range and availability.</p>

                                    <div className="qh-form-group">
                                        <label className="qh-form-label">Budget Type</label>
                                        <div className="qh-toggle-group">
                                            <label className={`qh-toggle ${data.budget_type === 'fixed' ? 'active' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="budget_type"
                                                    value="fixed"
                                                    checked={data.budget_type === 'fixed'}
                                                    onChange={() => setData('budget_type', 'fixed')}
                                                /> Fixed Price
                                            </label>
                                            <label className={`qh-toggle ${data.budget_type === 'hourly' ? 'active' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="budget_type"
                                                    value="hourly"
                                                    checked={data.budget_type === 'hourly'}
                                                    onChange={() => setData('budget_type', 'hourly')}
                                                /> Hourly Rate
                                            </label>
                                        </div>
                                    </div>

                                    <div className="qh-row">
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_budget_min">Min Budget (RWF)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="1000"
                                                id="qh_budget_min"
                                                className="qh-form-control"
                                                placeholder="e.g. 100000"
                                                value={data.budget_min}
                                                onChange={e => setData('budget_min', e.target.value)}
                                            />
                                            {errors.budget_min && <div className="qh-form-error">{errors.budget_min}</div>}
                                        </div>
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_budget_max">Max Budget (RWF)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="1000"
                                                id="qh_budget_max"
                                                className="qh-form-control"
                                                placeholder="e.g. 300000"
                                                value={data.budget_max}
                                                onChange={e => setData('budget_max', e.target.value)}
                                            />
                                            {errors.budget_max && <div className="qh-form-error">{errors.budget_max}</div>}
                                        </div>
                                    </div>

                                    <div className="qh-row">
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_timeline">Timeline</label>
                                            <select
                                                id="qh_timeline"
                                                className="qh-form-control"
                                                value={data.timeline}
                                                onChange={e => setData('timeline', e.target.value)}
                                            >
                                                <option value="">Select timeline</option>
                                                {Object.entries(timelines).map(([value, label]) => (
                                                    <option key={value} value={value}>{label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_experience">Experience Level</label>
                                            <select
                                                id="qh_experience"
                                                className="qh-form-control"
                                                value={data.experience_level}
                                                onChange={e => setData('experience_level', e.target.value)}
                                            >
                                                <option value="">Select level</option>
                                                {Object.entries(experienceLevels).map(([value, label]) => (
                                                    <option key={value} value={value}>{label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="qh-form-group">
                                        <label className="qh-form-label" htmlFor="qh_skills">Skills Needed (comma separated)</label>
                                        <input
                                            type="text"
                                            id="qh_skills"
                                            className="qh-form-control"
                                            placeholder="e.g. Laravel, React, UI Design"
                                            value={data.skills}
                                            onChange={e => setData('skills', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* STEP 3: Talent suggestions */}
                                <div className={`qh-step ${currentStep === 3 ? 'active' : ''}`} ref={currentStep === 3 ? stepRef : null}>
                                    <h3 className="qh-step-title">Suggested talent for you</h3>
                                    <p className="qh-step-sub">
                                        {selectedCategory
                                            ? `Based on "${selectedCategory.name}", here's who's available.`
                                            : "Based on the category you selected, here's who's available."}
                                    </p>

                                    {talentLoading && (
                                        <div className="qh-talent-loading">Loading suggestions…</div>
                                    )}

                                    {!talentLoading && talents.length > 0 && (
                                        <div className="qh-talent-grid">
                                            {talents.map(talent => (
                                                <div
                                                    key={talent.id}
                                                    className={`qh-talent-card ${String(data.talent_id) === String(talent.id) ? 'selected' : ''}`}
                                                    onClick={() => selectTalent(talent)}
                                                >
                                                    <img src={talent.image} alt={talent.name} />
                                                    <div>
                                                        <div className="qh-talent-name">{talent.name}</div>
                                                        <div className="qh-talent-meta">
                                                            {talent.featured && <span>⭐ Featured</span>}
                                                            <span>Level {talent.level}</span>
                                                            {!talent.available && <span style={{ color: '#7a9a8e' }}>Busy</span>}
                                                        </div>
                                                        <div className="qh-talent-excerpt">{talent.excerpt || ''}</div>
                                                    </div>
                                                    <div className="qh-talent-check">✓</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {!talentLoading && talents.length === 0 && talentEmptyMessage && (
                                        <div className="qh-empty-talents">{talentEmptyMessage}</div>
                                    )}

                                    <p className="qh-skip-note">Selecting a talent is optional — you can skip this step and we'll match you manually.</p>
                                </div>

                                {/* STEP 4: Contact + review */}
                                <div className={`qh-step ${currentStep === 4 ? 'active' : ''}`} ref={currentStep === 4 ? stepRef : null}>
                                    <h3 className="qh-step-title">Your contact details</h3>
                                    <p className="qh-step-sub">So we can send your matches and next steps.</p>

                                    <div className="qh-row">
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_client_name">Full Name</label>
                                            <input
                                                type="text"
                                                id="qh_client_name"
                                                className="qh-form-control"
                                                placeholder="Your name"
                                                value={data.client_name}
                                                onChange={e => setData('client_name', e.target.value)}
                                                required
                                            />
                                            {errors.client_name && <div className="qh-form-error">{errors.client_name}</div>}
                                        </div>
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_company_name">Company (optional)</label>
                                            <input
                                                type="text"
                                                id="qh_company_name"
                                                className="qh-form-control"
                                                placeholder="Organization name"
                                                value={data.company_name}
                                                onChange={e => setData('company_name', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="qh-row">
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_client_email">Email</label>
                                            <input
                                                type="email"
                                                id="qh_client_email"
                                                className="qh-form-control"
                                                placeholder="you@example.com"
                                                value={data.client_email}
                                                onChange={e => setData('client_email', e.target.value)}
                                                required
                                            />
                                            {errors.client_email && <div className="qh-form-error">{errors.client_email}</div>}
                                        </div>
                                        <div className="qh-form-group">
                                            <label className="qh-form-label" htmlFor="qh_client_phone">Phone (optional)</label>
                                            <input
                                                type="text"
                                                id="qh_client_phone"
                                                className="qh-form-control"
                                                placeholder="+250 7xx xxx xxx"
                                                value={data.client_phone}
                                                onChange={e => setData('client_phone', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="qh-review">
                                        <div><strong>Project:</strong> {data.title || '—'}</div>
                                        <div><strong>Category:</strong> {selectedCategory ? selectedCategory.name : '—'}</div>
                                        <div><strong>Budget:</strong> {budgetSummary}</div>
                                        <div><strong>Timeline:</strong> {selectedTimeline || '—'}</div>
                                        <div>
                                            <strong>Preferred talent:</strong>{' '}
                                            {selectedTalent ? selectedTalent.name : "Not selected — we'll match you manually"}
                                        </div>
                                    </div>
                                </div>

                                {/* Nav */}
                                <div className="qh-nav">
                                    <button
                                        type="button"
                                        className="qh-btn-secondary"
                                        onClick={goPrev}
                                        disabled={currentStep === 1}
                                    >
                                        Back
                                    </button>

                                    {currentStep < TOTAL_STEPS ? (
                                        <button type="button" className="qh-btn-primary" onClick={goNext}>
                                            Continue
                                        </button>
                                    ) : (
                                        <button type="submit" className="qh-btn-primary" disabled={processing}>
                                            Submit Request
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

Create.layout = (page) => (
    <GuestLayout children={page} title="Quick Hire - Post a project, get matched fast" />
);
