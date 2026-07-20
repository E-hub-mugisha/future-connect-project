import { useState, useRef } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/**
 * Platform Settings — Admin
 *
 * The original Blade view was a single flat Bootstrap card with h5
 * section dividers. Rebuilt as distinct sectioned cards (General,
 * Contact, Social, Feature Toggles) with a shared sticky-ish save bar,
 * consistent with the Talents/Categories admin pages elsewhere.
 */
export default function Settings({ settings, flash }) {
    const routes = {
        update: () => route('admin.settings.update'),
    };

    const { data, setData, post, processing, errors, transform } = useForm({
        site_name: settings?.site_name ?? '',
        logo: null,
        default_language: settings?.default_language ?? 'en',
        timezone: settings?.timezone ?? 'Africa/Kigali',
        contact_email: settings?.contact_email ?? '',
        contact_phone: settings?.contact_phone ?? '',
        contact_address: settings?.contact_address ?? '',
        facebook_link: settings?.facebook_link ?? '',
        twitter_link: settings?.twitter_link ?? '',
        instagram_link: settings?.instagram_link ?? '',
        linkedin_link: settings?.linkedin_link ?? '',
        registration_open: settings?.registration_open ?? true,
        enable_notifications: settings?.enable_notifications ?? true,
    });

    const [logoPreview, setLogoPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setData('logo', file);
        const reader = new FileReader();
        reader.onload = (ev) => setLogoPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const submit = (e) => {
        e.preventDefault();
        transform((d) => ({ ...d, _method: 'put' }));
        post(routes.update(), { forceFormData: true });
    };

    return (
        <AppLayout>
            <Head title="Settings" />
            <style>{css}</style>

            <div data-h-scope="settings" className="settings-page">
                {/* Header */}
                <div className="page-head">
                    <div>
                        <div className="eyebrow">Configuration</div>
                        <h1 className="page-title">Platform Settings</h1>
                        <p className="page-sub">Control how your platform looks, behaves, and is reached.</p>
                    </div>
                </div>

                {flash?.success && (
                    <div className="flash-success">
                        <CheckIcon />
                        {flash.success}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="settings-grid">
                        {/* General */}
                        <Section icon={<GlobeIcon />} title="General Settings" subtitle="Core identity of your platform">
                            <div className="row">
                                <Field label="Site Name" required error={errors.site_name}>
                                    <input
                                        type="text"
                                        className={errors.site_name ? 'err' : ''}
                                        value={data.site_name}
                                        onChange={(e) => setData('site_name', e.target.value)}
                                        required
                                    />
                                </Field>

                                <Field label="Site Logo" error={errors.logo}>
                                    <div className="logo-uploader">
                                        {(logoPreview || settings?.logo) && (
                                            <img
                                                src={logoPreview || settings.logo}
                                                alt="Site logo"
                                                className="logo-preview"
                                            />
                                        )}
                                        <button
                                            type="button"
                                            className="btn-file"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <UploadIcon /> {settings?.logo || logoPreview ? 'Replace logo' : 'Upload logo'}
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoChange}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                </Field>
                            </div>

                            <div className="row">
                                <Field label="Default Language">
                                    <select
                                        value={data.default_language}
                                        onChange={(e) => setData('default_language', e.target.value)}
                                    >
                                        <option value="en">English</option>
                                        <option value="rw">Kinyarwanda</option>
                                    </select>
                                </Field>
                                <Field label="Timezone">
                                    <input
                                        type="text"
                                        value={data.timezone}
                                        onChange={(e) => setData('timezone', e.target.value)}
                                        placeholder="Africa/Kigali"
                                    />
                                </Field>
                            </div>
                        </Section>

                        {/* Contact */}
                        <Section icon={<MailIcon />} title="Contact Settings" subtitle="How people reach your organization">
                            <div className="row">
                                <Field label="Email" error={errors.contact_email}>
                                    <input
                                        type="email"
                                        className={errors.contact_email ? 'err' : ''}
                                        value={data.contact_email}
                                        onChange={(e) => setData('contact_email', e.target.value)}
                                        placeholder="hello@example.com"
                                    />
                                </Field>
                                <Field label="Phone">
                                    <input
                                        type="text"
                                        value={data.contact_phone}
                                        onChange={(e) => setData('contact_phone', e.target.value)}
                                        placeholder="+250 7XX XXX XXX"
                                    />
                                </Field>
                            </div>
                            <div className="row-1">
                                <Field label="Address">
                                    <textarea
                                        value={data.contact_address}
                                        onChange={(e) => setData('contact_address', e.target.value)}
                                        placeholder="Street, city, country"
                                    />
                                </Field>
                            </div>
                        </Section>

                        {/* Social */}
                        <Section icon={<ShareIcon />} title="Social Links" subtitle="Profiles linked across the platform">
                            <div className="row">
                                <Field label="Facebook">
                                    <input
                                        type="text"
                                        value={data.facebook_link}
                                        onChange={(e) => setData('facebook_link', e.target.value)}
                                        placeholder="https://facebook.com/…"
                                    />
                                </Field>
                                <Field label="Twitter / X">
                                    <input
                                        type="text"
                                        value={data.twitter_link}
                                        onChange={(e) => setData('twitter_link', e.target.value)}
                                        placeholder="https://x.com/…"
                                    />
                                </Field>
                                <Field label="Instagram">
                                    <input
                                        type="text"
                                        value={data.instagram_link}
                                        onChange={(e) => setData('instagram_link', e.target.value)}
                                        placeholder="https://instagram.com/…"
                                    />
                                </Field>
                                <Field label="LinkedIn">
                                    <input
                                        type="text"
                                        value={data.linkedin_link}
                                        onChange={(e) => setData('linkedin_link', e.target.value)}
                                        placeholder="https://linkedin.com/…"
                                    />
                                </Field>
                            </div>
                        </Section>

                        {/* Toggles */}
                        <Section icon={<ToggleIcon />} title="Feature Toggles" subtitle="Switch platform behavior on or off">
                            <Toggle
                                title="Open Registration"
                                subtitle="Allow new users to sign up without an invite"
                                checked={data.registration_open}
                                onChange={(v) => setData('registration_open', v)}
                            />
                            <Toggle
                                title="Enable Notifications"
                                subtitle="Send platform notifications to users"
                                checked={data.enable_notifications}
                                onChange={(v) => setData('enable_notifications', v)}
                                last
                            />
                        </Section>
                    </div>

                    {/* Save bar */}
                    <div className="save-bar">
                        <p className="note">Changes apply platform-wide once saved.</p>
                        <button type="submit" className="btn-save" disabled={processing}>
                            <CheckIcon /> {processing ? 'Saving…' : 'Save Settings'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

/* ── Building blocks ── */
function Section({ icon, title, subtitle, children }) {
    return (
        <div className="settings-card">
            <div className="settings-card-head">
                <div className="settings-card-icon">{icon}</div>
                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className="settings-card-body">{children}</div>
        </div>
    );
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
function CheckIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>; }
function GlobeIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>; }
function MailIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>; }
function ShareIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>; }
function ToggleIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="10" rx="5" /><circle cx="16" cy="12" r="3" /></svg>; }
function UploadIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>; }

/* ── Styles ──
   Fresh design system for this page (the Blade version had no custom
   CSS of its own — pure Bootstrap defaults). Sectioned cards replace
   the flat h5-divided form; indigo accent matches the Talents admin
   tokens for cross-page consistency. */
const css = `
[data-h-scope="settings"] {
    --accent:        #4F46E5;
    --accent-light:  #EEF0FE;
    --accent-dark:   #4338CA;
    --surface:       #FFFFFF;
    --canvas:        #F6F7FB;
    --text-hi:       #101323;
    --text-mid:      #565D72;
    --text-lo:       #9AA0B4;
    --border:        #E9EBF3;
    --border-med:    #DCDFEC;
    --success:       #0EA96B;
    --success-bg:    #E9FAF2;
    --danger:        #E1493F;
    --danger-bg:     #FDEEEC;
    --radius-lg:     16px;
    --radius-md:     10px;
    --radius-sm:     7px;
    --shadow-card:   0 1px 2px rgba(16,19,35,.04), 0 1px 8px rgba(16,19,35,.04);
    font-family: inherit;
}

.settings-page { padding: 28px 32px 56px; background: var(--canvas); max-width: 980px; margin: 0 auto; }

.page-head { margin-bottom: 20px; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
.page-title { font-size: 24px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; margin: 0; }
.page-sub { font-size: 13px; color: var(--text-lo); margin-top: 4px; }

.flash-success { background: var(--success-bg); border: 1px solid rgba(14,169,107,.22); color: #085A3C; border-radius: var(--radius-md); padding: 12px 18px; font-size: 13px; display: flex; align-items: center; gap: 9px; margin-bottom: 20px; }

.settings-grid { display: flex; flex-direction: column; gap: 18px; }

.settings-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); overflow: hidden; }
.settings-card-head { display: flex; align-items: flex-start; gap: 12px; padding: 18px 22px; border-bottom: 1px solid var(--border); background: #FCFCFE; }
.settings-card-icon { width: 34px; height: 34px; border-radius: var(--radius-sm); background: var(--accent-light); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.settings-card-head h2 { font-size: 14.5px; font-weight: 700; color: var(--text-hi); margin: 0; }
.settings-card-head p { font-size: 12.5px; color: var(--text-lo); margin: 2px 0 0; }
.settings-card-body { padding: 22px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 16px; }
.row:last-child, .row-1:last-child { margin-bottom: 0; }
@media (max-width: 640px) { .row { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 12px; font-weight: 700; color: var(--text-mid); letter-spacing: .01em; }
.field label .req { color: var(--danger); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: #FBFBFE; border: 1px solid var(--border-med); border-radius: var(--radius-sm);
    color: var(--text-hi); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 9px 12px; transition: border-color .15s, box-shadow .15s, background .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { background: #fff; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,70,229,.1); }
.field select { cursor: pointer; }
.field textarea { min-height: 80px; resize: vertical; }
.field input.err { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(225,73,63,.1); }
.err-msg { font-size: 11.5px; color: var(--danger); font-weight: 600; }

.logo-uploader { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.logo-preview { height: 44px; max-width: 140px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border-med); padding: 4px; background: #fff; }
.btn-file { display: inline-flex; align-items: center; gap: 7px; background: #F1F2F8; border: 1px solid var(--border); color: var(--text-mid); border-radius: var(--radius-sm); padding: 9px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: background .15s, color .15s; }
.btn-file:hover { background: var(--accent-light); color: var(--accent); border-color: #C9CDF9; }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border); }
.toggle-row:last-child { border-bottom: none; padding-bottom: 0; }
.toggle-row:first-child { padding-top: 0; }
.toggle-label strong { font-size: 13.5px; font-weight: 600; color: var(--text-hi); }
.toggle-label small { display: block; font-size: 12px; color: var(--text-lo); margin-top: 2px; }
.switch { position: relative; width: 42px; height: 23px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: #D1D5DB; border-radius: 24px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 17px; height: 17px; left: 3px; top: 3px; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--accent); }
.switch input:checked + .switch-track::before { transform: translateX(19px); }

.save-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 20px; padding: 16px 22px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); flex-wrap: wrap; }
.save-bar .note { font-size: 12px; color: var(--text-lo); }
.btn-save { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 10px 22px; font-size: 13.5px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: background .15s, box-shadow .15s, transform .12s; }
.btn-save:hover { background: var(--accent-dark); box-shadow: 0 8px 20px rgba(79,70,229,.28); transform: translateY(-1px); }
.btn-save:disabled { opacity: .7; cursor: default; transform: none; }
`;
