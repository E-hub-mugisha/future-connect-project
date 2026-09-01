import { useState, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';

/**
 * Add Skill Profile — Admin (create)
 *
 * Uses Inertia's useForm with forceFormData so the image file uploads
 * correctly alongside the rest of the payload. Ziggy routes are wrapped
 * in a `routes` object per the project convention.
 */
export default function Create({ categories }) {
    const routes = {
        index: () => route('admin.talents.index'),
        store: () => route('admin.talents.store'),
    };

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        category_id: '',
        level: '',
        language: '',
        description: '',
        image: null,
        status: 'active',
        featured: false,
        matched: false,
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
        post(routes.store(), { forceFormData: true });
    };

    const errorCount = Object.keys(errors).length;

    return (
        <AdminLayout>
            <Head title="Add New Skill" />
            <style>{css}</style>

            <div data-h-scope="skill-form" className="page-shell">
                {/* Top bar */}
                <div className="top-bar">
                    <nav className="breadcrumb">
                        <Link href={routes.index()}>Skills</Link>
                        <span className="sep">›</span>
                        <span className="current">Add new</span>
                    </nav>
                    <Link href={routes.index()} className="btn-back">
                        <BackIcon /> Back to list
                    </Link>
                </div>

                {/* Heading */}
                <div className="page-heading">
                    <div>
                        <div className="eyebrow">New record</div>
                        <h1>Add Skill Profile</h1>
                        <p className="sub">Fill in the details below to register a new skill entry.</p>
                    </div>
                </div>

                {/* Error banner */}
                {errorCount > 0 && (
                    <div className="error-banner">
                        <AlertIcon />
                        {errorCount} error{errorCount > 1 ? 's' : ''} need your attention before saving.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="form-layout">
                        {/* LEFT */}
                        <div>
                            {/* Basic Info */}
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
                                        <Field label="Phone Number" error={errors.phone}>
                                            <input
                                                type="text"
                                                placeholder="+250 7XX XXX XXX"
                                                className={errors.phone ? 'err' : ''}
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

                            {/* Profile Details */}
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
                                                placeholder="Write a short profile description…"
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
                            {/* Image upload */}
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><ImageIcon /></div>
                                    <h2>Profile Photo</h2>
                                </div>
                                <div className="card-body">
                                    <div className="upload-zone" onClick={() => fileInputRef.current?.click()}>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                                        />
                                        <div className="upload-icon"><UploadIcon /></div>
                                        <p>Click to upload</p>
                                        <small>PNG · JPG · WEBP — max 2 MB</small>
                                    </div>
                                    {preview && <img id="imagePreview" src={preview} alt="Preview" style={{ display: 'block' }} />}
                                    {errors.image && <span className="err-msg" style={{ marginTop: 8, display: 'block' }}>{errors.image}</span>}
                                </div>
                            </div>

                            {/* Status & Settings */}
                            <div className="card">
                                <div className="card-head">
                                    <div className="card-head-icon"><GearIcon /></div>
                                    <h2>Settings</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-1" style={{ marginBottom: 16 }}>
                                        <Field label="Status" required>
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
                                        subtitle="Mark as successfully placed"
                                        checked={data.matched}
                                        onChange={(v) => setData('matched', v)}
                                        last
                                    />
                                </div>
                                <div className="section-note">
                                    <InfoIcon />
                                    Status defaults to Active on save.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit bar */}
                    <div className="submit-bar">
                        <p className="note">Fields marked <span className="req-mark">*</span> are required</p>
                        <div className="actions">
                            <Link href={routes.index()} className="btn-ghost">Cancel</Link>
                            <button type="submit" className="btn-primary" disabled={processing}>
                                <CheckIcon /> {processing ? 'Saving…' : 'Save skill'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

function cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

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

/* ── Inline icons ── */
function BackIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>; }
function AlertIcon() { return <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" /></svg>; }
function UserIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>; }
function DocIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>; }
function ImageIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>; }
function UploadIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>; }
function GearIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function InfoIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>; }
function CheckIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>; }

/* ── Styles ──
   Retains this page's distinct softer/lighter form palette rather than
   forcing it onto the indigo admin-table tokens, since forms benefit
   from a calmer, less saturated surface. Modernized: refined shadows,
   slightly larger radii, consistent focus rings, tidier toggle rows. */
const css = `
[data-h-scope="skill-form"] {
    --bg-base: #F5F6F8;
    --bg-surface: #F5f5f7;
    --bg-muted: #F0F2F5;
    --bg-input: #F8F9FB;
    --border: #E2E6EC;
    --border-focus: #3B6EF5;
    --text-label: #6B7280;
    --text-body: #1F2937;
    --text-head: #111827;
    --text-placeholder: #9CA3AF;
    --accent: #3B6EF5;
    --accent-light: #EEF2FF;
    --accent-hover: #2952D9;
    --danger: #DC2626;
    --danger-light: #FEF2F2;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
    --shadow-md: 0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04);
    font-family: inherit;
}

.page-shell { max-width: 1080px; margin: 0 auto; padding: 32px 24px 56px; background: var(--bg-base); }

.top-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; gap: 12px; flex-wrap: wrap; }
.breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--text-label); }
.breadcrumb a { color: var(--accent); text-decoration: none; font-weight: 500; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb .sep { color: #CBD5E1; font-size: 11px; }
.breadcrumb .current { color: var(--text-body); font-weight: 500; }

.btn-back { display: inline-flex; align-items: center; gap: 6px; color: var(--text-label); font-size: 13px; font-weight: 500; text-decoration: none; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 7px 14px; box-shadow: var(--shadow-sm); transition: border-color .15s, color .15s, box-shadow .15s; }
.btn-back:hover { border-color: #C4CDD8; color: var(--text-body); box-shadow: var(--shadow-md); }

.page-heading { margin-bottom: 28px; padding-bottom: 22px; border-bottom: 1px solid var(--border); display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.page-heading .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
.page-heading h1 { font-size: 22px; font-weight: 700; color: var(--text-head); letter-spacing: -.3px; line-height: 1.2; }
.page-heading .sub { font-size: 13px; color: var(--text-label); margin-top: 4px; }

.error-banner { background: var(--danger-light); border: 1px solid #FECACA; border-left: 3px solid var(--danger); border-radius: var(--radius); padding: 12px 16px; font-size: 13px; color: var(--danger); display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
.error-banner svg { flex-shrink: 0; }

.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
@media (max-width: 840px) { .form-layout { grid-template-columns: 1fr; } }

.card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 18px; }
.card:last-child { margin-bottom: 0; }
.card-head { padding: 14px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; background: #FCFCFD; }
.card-head-icon { width: 30px; height: 30px; background: var(--accent-light); border-radius: 7px; display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
.card-head h2 { font-size: 13px; font-weight: 600; color: var(--text-head); margin: 0; }
.card-body { padding: 20px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
.row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row:last-child, .row-1:last-child, .row-3:last-child { margin-bottom: 0; }
@media (max-width: 580px) { .row, .row-3 { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 5px; }
.field label { font-size: 12px; font-weight: 600; color: var(--text-label); letter-spacing: .01em; }
.field label .req { color: var(--danger); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius);
    color: var(--text-body); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 9px 12px; transition: border-color .15s, box-shadow .15s, background .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { background: #fff; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(59,110,245,.12); }
.field input::placeholder, .field textarea::placeholder { color: var(--text-placeholder); }
.field select { cursor: pointer; }
.field textarea { resize: vertical; min-height: 100px; }
.field .err-msg { font-size: 11.5px; color: var(--danger); font-weight: 500; }
.field input.err, .field select.err, .field textarea.err { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(220,38,38,.1); }

.upload-zone { border: 2px dashed var(--border); border-radius: var(--radius); padding: 28px 16px; text-align: center; cursor: pointer; position: relative; overflow: hidden; transition: border-color .2s, background .2s; }
.upload-zone:hover { border-color: var(--accent); background: var(--accent-light); }
.upload-icon { width: 44px; height: 44px; background: var(--bg-muted); border: 1px solid var(--border); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--text-label); margin-bottom: 10px; }
.upload-zone p { font-size: 13px; color: var(--text-label); font-weight: 500; margin: 0; }
.upload-zone small { font-size: 11.5px; color: var(--text-placeholder); display: block; margin-top: 4px; }
#imagePreview { width: 100%; border-radius: var(--radius); margin-top: 12px; max-height: 200px; object-fit: cover; border: 1px solid var(--border); }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid var(--border); }
.toggle-label { line-height: 1.3; }
.toggle-label strong { font-size: 13px; font-weight: 500; color: var(--text-body); }
.toggle-label small { display: block; font-size: 11.5px; color: var(--text-label); margin-top: 2px; }
.switch { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: #D1D5DB; border-radius: 22px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--accent); }
.switch input:checked + .switch-track::before { transform: translateX(18px); }

.submit-bar { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: 16px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
.submit-bar .note { font-size: 12px; color: var(--text-placeholder); }
.submit-bar .note .req-mark { color: var(--danger); }
.actions { display: flex; gap: 10px; }

.btn-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius); padding: 10px 24px; font-size: 13.5px; font-weight: 600; font-family: inherit; cursor: pointer; transition: background .15s, box-shadow .15s, transform .1s; display: inline-flex; align-items: center; gap: 7px; }
.btn-primary:hover { background: var(--accent-hover); box-shadow: 0 4px 14px rgba(59,110,245,.35); transform: translateY(-1px); }
.btn-primary:disabled { opacity: .7; cursor: default; transform: none; }
.btn-ghost { background: transparent; color: var(--text-label); border: 1px solid var(--border); border-radius: var(--radius); padding: 10px 20px; font-size: 13.5px; font-weight: 500; font-family: inherit; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; transition: border-color .15s, color .15s; }
.btn-ghost:hover { border-color: #C4CDD8; color: var(--text-body); }

.section-note { font-size: 11.5px; color: var(--text-placeholder); padding: 10px 20px; border-top: 1px solid var(--border); background: #FAFAFA; display: flex; align-items: center; gap: 6px; }
.section-note svg { flex-shrink: 0; color: var(--text-placeholder); }
`;
