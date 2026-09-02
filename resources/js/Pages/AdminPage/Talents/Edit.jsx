import { useState, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';

/**
 * Edit Skill — Admin
 *
 * File uploads + PUT don't mix reliably across multipart boundaries in
 * some server stacks, so we follow the standard Inertia workaround:
 * transform the payload to include `_method: 'put'` and submit via POST
 * with forceFormData. Laravel's method-spoofing middleware picks this up
 * and routes it to the PUT/update controller as normal.
 */
export default function Edit({ talent, categories }) {
    const routes = {
        index:  () => route('admin.talents.index'),
        show:   (id) => route('admin.talents.show', id),
        update: (id) => route('admin.talents.update', id),
    };

    const { data, setData, post, processing, errors, transform } = useForm({
        name: talent.name ?? '',
        email: talent.email ?? '',
        phone: talent.phone ?? '',
        address: talent.address ?? '',
        category_id: talent.category_id ?? '',
        level: talent.level ?? '',
        language: talent.language ?? '',
        description: talent.description ?? '',
        image: null,
        status: talent.status ?? 'active',
        featured: !!talent.featured,
        matched: !!talent.matched,
    });

    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setData('image', file);
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const submit = (e) => {
        e.preventDefault();
        transform((d) => ({ ...d, _method: 'put' }));
        post(routes.update(talent.id), { forceFormData: true });
    };

    const errorCount = Object.keys(errors).length;
    const status = (talent.status || 'inactive').toLowerCase();

    return (
        <AdminLayout>
            <Head title={`Edit Skill — ${talent.name}`} />
            <style>{css}</style>

            <div data-h-scope="skill-form" className="page-shell">
                {/* Top bar */}
                <div className="top-bar">
                    <nav className="breadcrumb">
                        <Link href={routes.index()}>Skills</Link>
                        <span className="sep">›</span>
                        <Link href={routes.show(talent.id)}>{talent.name}</Link>
                        <span className="sep">›</span>
                        <span className="current">Edit</span>
                    </nav>
                    <div className="header-btns">
                        <Link href={routes.show(talent.id)} className="btn-icon view">
                            <EyeIcon /> View profile
                        </Link>
                        <Link href={routes.index()} className="btn-icon back">
                            <BackIcon /> Back
                        </Link>
                    </div>
                </div>

                {/* Page heading card */}
                <div className="page-heading">
                    {talent.image ? (
                        <img src={talent.image} alt={talent.name} className="talent-avatar" />
                    ) : (
                        <div className="talent-avatar-placeholder">{talent.name?.charAt(0)?.toUpperCase()}</div>
                    )}
                    <div className="heading-text">
                        <div className="eyebrow">Editing record</div>
                        <h1>{talent.name}</h1>
                        <div className="meta">
                            <span>ID #{talent.id}</span>
                            <span className="dot">·</span>
                            <span>Created {formatDate(talent.created_at)}</span>
                            <span className="dot">·</span>
                            <span className={`status-chip ${status}`}>
                                <span className="dot-indicator" />
                                {cap(status)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Edit notice */}
                <div className="edit-notice">
                    <InfoCircleIcon />
                    Changes won't be applied until you click&nbsp;<strong>"Update skill"</strong>.
                </div>

                {/* Error banner */}
                {errorCount > 0 && (
                    <div className="error-banner">
                        <AlertIcon />
                        {errorCount} error{errorCount > 1 ? 's' : ''} need your attention.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="form-layout">
                        {/* LEFT */}
                        <div>
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><UserIcon /></div>
                                    <h2>Basic Information</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-1">
                                        <Field label="Full Name" required error={errors.name}>
                                            <input
                                                type="text"
                                                placeholder="e.g. Amara Nkosi"
                                                className={errors.name ? 'err' : ''}
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                    <div className="row">
                                        <Field label="Email Address" error={errors.email}>
                                            <input
                                                type="email"
                                                placeholder="email@example.com"
                                                className={errors.email ? 'err' : ''}
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                        </Field>
                                        <Field label="Phone Number">
                                            <input
                                                type="text"
                                                placeholder="+250 7XX XXX XXX"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                    <div className="row-1">
                                        <Field label="Address / Location">
                                            <input
                                                type="text"
                                                placeholder="City, Country"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><DocIcon /></div>
                                    <h2>Profile Details</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-3">
                                        <Field label="Category" required error={errors.category_id}>
                                            <select
                                                className={errors.category_id ? 'err' : ''}
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                            >
                                                <option value="">Select…</option>
                                                {categories.map((cat) => (
                                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </Field>
                                        <Field label="Level">
                                            <select value={data.level} onChange={(e) => setData('level', e.target.value)}>
                                                <option value="">Select…</option>
                                                {['beginner', 'intermediate', 'advanced', 'expert'].map((lv) => (
                                                    <option key={lv} value={lv}>{cap(lv)}</option>
                                                ))}
                                            </select>
                                        </Field>
                                        <Field label="Language">
                                            <input
                                                type="text"
                                                placeholder="English, French…"
                                                value={data.language}
                                                onChange={(e) => setData('language', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                    <div className="row-1">
                                        <Field label="Bio / Description">
                                            <textarea
                                                value={data.description}
                                                onChange={(e) => setData('description', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div>
                            {/* Image */}
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><ImageIcon /></div>
                                    <h2>Profile Photo</h2>
                                </div>
                                <div className="card-body">
                                    {talent.image && !preview && (
                                        <div className="current-img">
                                            <img src={talent.image} alt={talent.name} />
                                            <div className="img-info">
                                                <div className="img-label">Current photo</div>
                                                <div className="img-name">{basename(talent.image)}</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="upload-zone" onClick={() => fileInputRef.current?.click()}>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                                        />
                                        <div className="upload-icon"><UploadIcon /></div>
                                        <p>{talent.image ? 'Replace photo' : 'Upload photo'}</p>
                                        <small>PNG · JPG · WEBP — max 2 MB</small>
                                    </div>
                                    {preview && <img id="imagePreview" src={preview} alt="New preview" style={{ display: 'block' }} />}
                                    {errors.image && <span className="err-msg" style={{ marginTop: 8, display: 'block' }}>{errors.image}</span>}
                                </div>
                            </div>

                            {/* Settings */}
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><GearIcon /></div>
                                    <h2>Settings</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-1" style={{ marginBottom: 16 }}>
                                        <Field label="Status">
                                            <select value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="pending">Pending review</option>
                                            </select>
                                        </Field>
                                    </div>
                                    <Toggle
                                        title="Featured"
                                        subtitle="Show on homepage & top of listings"
                                        checked={data.featured}
                                        onChange={(v) => setData('featured', v)}
                                    />
                                    <Toggle
                                        title="Matched"
                                        subtitle="Successfully placed"
                                        checked={data.matched}
                                        onChange={(v) => setData('matched', v)}
                                        last
                                    />
                                </div>
                            </div>

                            {/* Activity overview */}
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><ChartIcon /></div>
                                    <h2>Activity Overview</h2>
                                </div>
                                <div className="card-body">
                                    <div className="stats-grid">
                                        <StatTile value={talent.skills?.length ?? 0} label="Skills" />
                                        <StatTile value={talent.stories?.length ?? 0} label="Stories" />
                                        <StatTile value={talent.feedback?.length ?? 0} label="Feedback" />
                                        <StatTile value={talent.connections?.length ?? 0} label="Connections" />
                                    </div>
                                </div>
                                <div className="section-note">
                                    <InfoCircleIcon />
                                    Read-only — managed from within each section.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit bar */}
                    <div className="submit-bar">
                        <div className="timestamps">
                            Last updated: <strong>{timeAgo(talent.updated_at)}</strong><br />
                            Created: <strong>{formatDate(talent.created_at, true)}</strong>
                        </div>
                        <div className="actions">
                            <Link href={routes.index()} className="btn-ghost">Cancel</Link>
                            <button type="submit" className="btn-primary" disabled={processing}>
                                <CheckIcon /> {processing ? 'Updating…' : 'Update skill'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

/* ── Helpers ── */
function cap(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
function basename(path) {
    if (!path) return '';
    return path.split('/').pop();
}
function formatDate(value, withTime = false) {
    if (!value) return 'N/A';
    const d = new Date(value);
    if (isNaN(d)) return 'N/A';
    const opts = withTime
        ? { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }
        : { day: '2-digit', month: 'short', year: 'numeric' };
    return d.toLocaleDateString('en-GB', opts);
}
function timeAgo(value) {
    if (!value) return 'N/A';
    const d = new Date(value);
    if (isNaN(d)) return 'N/A';
    const secs = Math.floor((Date.now() - d.getTime()) / 1000);
    const units = [
        ['year', 31536000], ['month', 2592000], ['week', 604800],
        ['day', 86400], ['hour', 3600], ['minute', 60],
    ];
    for (const [label, secInUnit] of units) {
        const val = Math.floor(secs / secInUnit);
        if (val >= 1) return `${val} ${label}${val > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

/* ── Small building blocks ── */
function Field({ label, required, error, children }) {
    return (
        <div className="field">
            <label>
                {label} {required && <span className="req">*</span>}
            </label>
            {children}
            {error && <span className="err-msg">{error}</span>}
        </div>
    );
}

function Toggle({ title, subtitle, checked, onChange, last = false }) {
    return (
        <div className="toggle-row" style={last ? { borderBottom: 'none', paddingBottom: 0 } : undefined}>
            <div className="toggle-label">
                <strong>{title}</strong>
                <small>{subtitle}</small>
            </div>
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
                <span className="switch-track" />
            </label>
        </div>
    );
}

function StatTile({ value, label }) {
    return (
        <div className="stat-tile">
            <div className="val">{value}</div>
            <div className="lbl">{label}</div>
        </div>
    );
}

/* ── Inline icons ── */
function EyeIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function BackIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>; }
function InfoCircleIcon() { return <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>; }
function AlertIcon() { return <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" /></svg>; }
function UserIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>; }
function DocIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>; }
function ImageIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>; }
function UploadIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>; }
function GearIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function ChartIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>; }
function CheckIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>; }

/* ── Styles: monochrome + single green accent, shared tokens with the rest of the admin ── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

[data-h-scope="skill-form"] {
    --ink:          #0A0A0A;
    --ink-2:        #45474A;
    --ink-faint:    #90928F;
    --line:         #E2E2DF;
    --line-soft:    #EEEEEB;
    --canvas:       #F5F5F3;
    --surface:      #FFFFFF;
    --surface-alt:  #FAFAF8;

    --accent:       #00A667;
    --accent-ink:   #00814F;
    --accent-soft:  #E3F5EC;

    --radius: 8px;
    --radius-lg: 12px;

    font-family: 'Inter', sans-serif;
}

.page-shell { max-width: 1080px; margin: 0 auto; padding: 32px 24px 56px; background: var(--canvas); }

.top-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; gap: 12px; flex-wrap: wrap; }
.breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--ink-faint); }
.breadcrumb a { color: var(--accent-ink); text-decoration: none; font-weight: 500; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb .sep { color: var(--line); font-size: 11px; }
.breadcrumb .current { color: var(--ink); font-weight: 500; }
.header-btns { display: flex; gap: 8px; flex-wrap: wrap; }
.btn-icon { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; text-decoration: none; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 7px 14px; transition: all .15s; }
.btn-icon.view { color: var(--accent-ink); }
.btn-icon.view:hover { border-color: var(--accent); background: var(--accent-soft); }
.btn-icon.back { color: var(--ink-2); }
.btn-icon.back:hover { border-color: var(--ink); color: var(--ink); }

.page-heading { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 20px 24px; display: flex; align-items: center; gap: 18px; margin-bottom: 18px; flex-wrap: wrap; }
.talent-avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 1px solid var(--line); flex-shrink: 0; }
.talent-avatar-placeholder { width: 56px; height: 56px; border-radius: 50%; background: var(--ink); border: 1px solid var(--ink); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; }
.heading-text { flex: 1; }
.heading-text .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 3px; }
.heading-text h1 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; color: var(--ink); letter-spacing: -.2px; line-height: 1.2; }
.heading-text .meta { font-size: 12px; color: var(--ink-faint); margin-top: 3px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.heading-text .meta .dot { color: var(--line); }

.status-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
.status-chip.active { background: var(--accent-soft); color: var(--accent-ink); }
.status-chip.inactive { background: var(--surface-alt); color: var(--ink-faint); border: 1px solid var(--line); }
.status-chip.pending { background: var(--surface-alt); color: var(--ink-2); border: 1px dashed var(--ink-2); }
.status-chip .dot-indicator { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.edit-notice { background: var(--surface-alt); border: 1px solid var(--line); border-left: 3px solid var(--ink); border-radius: var(--radius); padding: 11px 16px; font-size: 12.5px; color: var(--ink-2); display: flex; align-items: center; gap: 9px; margin-bottom: 18px; font-weight: 500; }
.edit-notice svg { flex-shrink: 0; color: var(--ink); }
.edit-notice strong { color: var(--ink); }

.error-banner { background: var(--ink); border: none; border-radius: var(--radius); padding: 12px 16px; font-size: 13px; color: #fff; display: flex; align-items: center; gap: 10px; margin-bottom: 18px; font-weight: 600; }

.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
@media (max-width: 840px) { .form-layout { grid-template-columns: 1fr; } }

.card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 18px; }
.card:last-child { margin-bottom: 0; }
.card-head { padding: 14px 20px; border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 10px; background: var(--surface-alt); }
.card-head-icon { width: 30px; height: 30px; background: var(--surface); border: 1px solid var(--line); border-radius: 7px; display: flex; align-items: center; justify-content: center; color: var(--ink-2); flex-shrink: 0; }
.card-head h2 { font-size: 13px; font-weight: 600; color: var(--ink); margin: 0; }
.card-body { padding: 20px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
.row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row:last-child, .row-1:last-child, .row-3:last-child { margin-bottom: 0; }
@media (max-width: 580px) { .row, .row-3 { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 5px; }
.field label { font-size: 12px; font-weight: 600; color: var(--ink-faint); letter-spacing: .01em; }
.field label .req { color: var(--ink); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: var(--surface-alt); border: 1px solid var(--line); border-radius: var(--radius);
    color: var(--ink); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 9px 12px; transition: border-color .15s, box-shadow .15s, background .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { background: var(--surface); border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0,166,103,.12); }
.field input::placeholder, .field textarea::placeholder { color: var(--ink-faint); }
.field select { cursor: pointer; }
.field textarea { resize: vertical; min-height: 100px; }
.field .err-msg { font-size: 11.5px; color: var(--ink); font-weight: 700; }
.field input.err, .field select.err, .field textarea.err { border: 1px dashed var(--ink); }

.current-img { display: flex; align-items: center; gap: 14px; background: var(--surface-alt); border: 1px solid var(--line); border-radius: var(--radius); padding: 12px 14px; margin-bottom: 14px; }
.current-img img { width: 52px; height: 52px; border-radius: var(--radius); object-fit: cover; border: 1px solid var(--line); flex-shrink: 0; }
.current-img .img-label { font-size: 10.5px; font-weight: 600; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 2px; }
.current-img .img-name { font-size: 12.5px; color: var(--ink); word-break: break-all; font-weight: 500; }

.upload-zone { border: 2px dashed var(--line); border-radius: var(--radius); padding: 22px 16px; text-align: center; cursor: pointer; position: relative; overflow: hidden; transition: border-color .2s, background .2s; }
.upload-zone:hover { border-color: var(--accent); background: var(--accent-soft); }
.upload-icon { width: 38px; height: 38px; background: var(--surface-alt); border: 1px solid var(--line); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--ink-2); margin-bottom: 8px; }
.upload-zone p { font-size: 13px; color: var(--ink-2); font-weight: 500; margin: 0; }
.upload-zone small { font-size: 11.5px; color: var(--ink-faint); display: block; margin-top: 3px; }
#imagePreview { width: 100%; border-radius: var(--radius); margin-top: 10px; max-height: 180px; object-fit: cover; border: 1px solid var(--line); }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid var(--line); }
.toggle-label strong { font-size: 13px; font-weight: 500; color: var(--ink); }
.toggle-label small { display: block; font-size: 11.5px; color: var(--ink-faint); margin-top: 2px; }
.switch { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: var(--line); border-radius: 22px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: var(--surface); border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.15); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--accent); }
.switch input:checked + .switch-track::before { transform: translateX(18px); }

.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.stat-tile { background: var(--surface-alt); border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; text-align: center; }
.stat-tile .val { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 700; color: var(--ink); line-height: 1; font-variant-numeric: tabular-nums; }
.stat-tile .lbl { font-size: 11px; font-weight: 600; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .07em; margin-top: 5px; }

.section-note { font-size: 11.5px; color: var(--ink-faint); padding: 10px 20px; border-top: 1px solid var(--line); background: var(--surface-alt); display: flex; align-items: center; gap: 6px; }
.section-note svg { flex-shrink: 0; }

.submit-bar { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 16px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
.submit-bar .timestamps { font-size: 12px; color: var(--ink-faint); line-height: 1.7; }
.submit-bar .timestamps strong { color: var(--ink-2); }
.actions { display: flex; gap: 10px; }

.btn-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius); padding: 10px 24px; font-size: 13.5px; font-weight: 600; font-family: inherit; cursor: pointer; transition: background .15s; display: inline-flex; align-items: center; gap: 7px; }
.btn-primary:hover { background: var(--accent-ink); }
.btn-primary:disabled { opacity: .7; cursor: default; }
.btn-ghost { background: transparent; color: var(--ink-2); border: 1px solid var(--line); border-radius: var(--radius); padding: 10px 20px; font-size: 13.5px; font-weight: 500; font-family: inherit; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; transition: all .15s; }
.btn-ghost:hover { border-color: var(--ink); color: var(--ink); }
`;