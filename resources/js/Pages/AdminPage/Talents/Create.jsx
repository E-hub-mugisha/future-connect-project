import { useState, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

/**
 * Add Skill Profile — Admin (create)
 *
 * Uses Inertia's useForm with forceFormData so the image file uploads
 * correctly alongside the rest of the payload. Ziggy routes are wrapped
 * in a `routes` object per the project convention.
 */
export default function Create({ categories }) {
    const routes = {
        index: () => route("admin.talents.index"),
        store: () => route("admin.talents.store"),
    };

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        category_id: "",
        level: "",
        language: "",
        description: "",
        image: null,
        status: "active",
        featured: false,
        matched: false,
    });

    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setData("image", file);
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
                        <span className="sep">/</span>
                        <span className="current">Add new</span>
                    </nav>
                    <Link href={routes.index()} className="btn-back">
                        <BackIcon /> Back to list
                    </Link>
                </div>

                {/* Heading */}
                <div className="page-heading">
                    <div>
                        <h1>Add skill profile</h1>
                        <p className="sub">
                            Register a new talent record in the directory.
                        </p>
                    </div>
                    <div className="heading-mark" aria-hidden="true" />
                </div>

                {/* Error banner */}
                {errorCount > 0 && (
                    <div className="error-banner">
                        <AlertIcon />
                        {errorCount} field{errorCount > 1 ? "s need" : " needs"}{" "}
                        your attention before saving.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="form-layout">
                        {/* LEFT */}
                        <div>
                            {/* Basic Info */}
                            <div className="card">
                                <div className="card-head">
                                    <h2>Basic information</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-1">
                                        <Field
                                            label="Full name"
                                            required
                                            error={errors.name}
                                        >
                                            <input
                                                type="text"
                                                placeholder="e.g. Amara Nkosi"
                                                className={
                                                    errors.name ? "err" : ""
                                                }
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </Field>
                                    </div>
                                    <div className="row">
                                        <Field
                                            label="Email address"
                                            error={errors.email}
                                        >
                                            <input
                                                type="email"
                                                placeholder="email@example.com"
                                                className={
                                                    errors.email ? "err" : ""
                                                }
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </Field>
                                        <Field
                                            label="Phone number"
                                            error={errors.phone}
                                        >
                                            <input
                                                type="text"
                                                placeholder="+250 7XX XXX XXX"
                                                className={
                                                    errors.phone ? "err" : ""
                                                }
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </Field>
                                    </div>
                                    <div className="row-1">
                                        <Field label="Address / location">
                                            <input
                                                type="text"
                                                placeholder="City, Country"
                                                value={data.address}
                                                onChange={(e) =>
                                                    setData(
                                                        "address",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="card">
                                <div className="card-head">
                                    <h2>Profile details</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row-3">
                                        <Field
                                            label="Category"
                                            required
                                            error={errors.category_id}
                                        >
                                            <select
                                                className={
                                                    errors.category_id
                                                        ? "err"
                                                        : ""
                                                }
                                                value={data.category_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "category_id",
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select…
                                                </option>
                                                {categories.map((cat) => (
                                                    <option
                                                        key={cat.id}
                                                        value={cat.id}
                                                    >
                                                        {cat.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>
                                        <Field label="Level">
                                            <select
                                                value={data.level}
                                                onChange={(e) =>
                                                    setData(
                                                        "level",
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select…
                                                </option>
                                                {[
                                                    "beginner",
                                                    "intermediate",
                                                    "advanced",
                                                    "expert",
                                                ].map((lv) => (
                                                    <option key={lv} value={lv}>
                                                        {cap(lv)}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>
                                        <Field label="Language">
                                            <input
                                                type="text"
                                                placeholder="English, French…"
                                                value={data.language}
                                                onChange={(e) =>
                                                    setData(
                                                        "language",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </Field>
                                    </div>
                                    <div className="row-1">
                                        <Field label="Bio / description">
                                            <textarea
                                                placeholder="Write a short profile description…"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value,
                                                    )
                                                }
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
                                    <h2>Profile photo</h2>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="upload-zone"
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                    >
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                opacity: 0,
                                                cursor: "pointer",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                        <div className="upload-icon">
                                            <UploadIcon />
                                        </div>
                                        <p>Click to upload</p>
                                        <small>
                                            PNG · JPG · WEBP — max 2 MB
                                        </small>
                                    </div>
                                    {preview && (
                                        <img
                                            id="imagePreview"
                                            src={preview}
                                            alt="Preview"
                                            style={{ display: "block" }}
                                        />
                                    )}
                                    {errors.image && (
                                        <span
                                            className="err-msg"
                                            style={{
                                                marginTop: 8,
                                                display: "block",
                                            }}
                                        >
                                            {errors.image}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Status & Settings */}
                            <div className="card">
                                <div className="card-head">
                                    <h2>Settings</h2>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="row-1"
                                        style={{ marginBottom: 16 }}
                                    >
                                        <Field label="Status" required>
                                            <select
                                                value={data.status}
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="active">
                                                    Active
                                                </option>
                                                <option value="inactive">
                                                    Inactive
                                                </option>
                                                <option value="pending">
                                                    Pending review
                                                </option>
                                            </select>
                                        </Field>
                                    </div>

                                    <Toggle
                                        title="Featured"
                                        subtitle="Show on homepage & top of listings"
                                        checked={data.featured}
                                        onChange={(v) => setData("featured", v)}
                                    />
                                    <Toggle
                                        title="Matched"
                                        subtitle="Mark as successfully placed"
                                        checked={data.matched}
                                        onChange={(v) => setData("matched", v)}
                                        last
                                    />
                                </div>
                                <div className="section-note">
                                    Status defaults to Active on save.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit bar */}
                    <div className="submit-bar">
                        <p className="note">
                            Fields marked <span className="req-mark">*</span>{" "}
                            are required
                        </p>
                        <div className="actions">
                            <Link href={routes.index()} className="btn-ghost">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={processing}
                            >
                                <CheckIcon />{" "}
                                {processing ? "Saving…" : "Save skill"}
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
        <div
            className="toggle-row"
            style={
                last ? { borderBottom: "none", paddingBottom: 0 } : undefined
            }
        >
            <div className="toggle-label">
                <strong>{title}</strong>
                <small>{subtitle}</small>
            </div>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className="switch-track" />
            </label>
        </div>
    );
}

/* ── Inline icons ── */
function BackIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
        </svg>
    );
}
function AlertIcon() {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
    );
}
function UploadIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
        </svg>
    );
}
function CheckIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

/* ── Styles ──
   Palette: near-black ink, white surfaces, #00A667 green as the single
   accent (focus rings, active states, primary action, one heading
   accent bar). No icon badges, no soft grey card shadows repeated on
   every block — hierarchy comes from a green rule on card headers and
   generous whitespace instead. */
const css = `
[data-h-scope="skill-form"] {
    --ink: #0A0A0A;
    --ink-soft: #3A3A3A;
    --bg-base: #FAFAFA;
    --bg-surface: #FFFFFF;
    --bg-input: #FFFFFF;
    --bg-muted: #F2F2F2;
    --border: #E1E1E1;
    --border-strong: #0A0A0A;
    --text-label: #5C5C5C;
    --text-body: #0A0A0A;
    --text-placeholder: #A3A3A3;
    --green: #00A667;
    --green-dark: #00854F;
    --green-tint: #E6F7EF;
    --danger: #C0362C;
    --danger-light: #FBEDEC;
    --radius: 6px;
    --radius-lg: 4px;
    font-family: inherit;
}

.page-shell { max-width: 1080px; margin: 0 auto; padding: 40px 24px 64px; background: var(--bg-base); }

.top-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; gap: 12px; flex-wrap: wrap; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-label); }
.breadcrumb a { color: var(--ink); text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; }
.breadcrumb a:hover { border-color: var(--green); }
.breadcrumb .sep { color: #C7C7C7; }
.breadcrumb .current { color: var(--text-label); }

.btn-back { display: inline-flex; align-items: center; gap: 7px; color: var(--ink); font-size: 13px; font-weight: 600; text-decoration: none; background: var(--bg-surface); border: 1px solid var(--border-strong); border-radius: var(--radius); padding: 8px 16px; transition: background .15s, color .15s; }
.btn-back:hover { background: var(--ink); color: #fff; }

.page-heading { margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid var(--ink); display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; }
.page-heading h1 { font-size: 26px; font-weight: 700; color: var(--ink); letter-spacing: -.4px; line-height: 1.15; margin: 0; }
.page-heading .sub { font-size: 13.5px; color: var(--text-label); margin-top: 6px; }
.page-heading .heading-mark { width: 34px; height: 34px; background: var(--green); flex-shrink: 0; }

.error-banner { background: var(--danger-light); border: 1px solid var(--danger); border-radius: var(--radius); padding: 12px 16px; font-size: 13px; color: var(--danger); display: flex; align-items: center; gap: 10px; margin-bottom: 24px; font-weight: 500; }
.error-banner svg { flex-shrink: 0; }

.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
@media (max-width: 840px) { .form-layout { grid-template-columns: 1fr; } }

.card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 18px; }
.card:last-child { margin-bottom: 0; }
.card-head { padding: 14px 20px; border-bottom: 1px solid var(--border); border-left: 3px solid var(--green); background: var(--bg-surface); }
.card-head h2 { font-size: 13px; font-weight: 700; color: var(--ink); margin: 0; text-transform: none; }
.card-body { padding: 22px 20px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 16px; }
.row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 16px; }
.row:last-child, .row-1:last-child, .row-3:last-child { margin-bottom: 0; }
@media (max-width: 580px) { .row, .row-3 { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 12px; font-weight: 600; color: var(--text-label); }
.field label .req { color: var(--danger); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius);
    color: var(--text-body); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 10px 12px; transition: border-color .15s, box-shadow .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--green); box-shadow: 0 0 0 3px var(--green-tint); }
.field input::placeholder, .field textarea::placeholder { color: var(--text-placeholder); }
.field select { cursor: pointer; }
.field textarea { resize: vertical; min-height: 100px; }
.field .err-msg { font-size: 11.5px; color: var(--danger); font-weight: 500; }
.field input.err, .field select.err, .field textarea.err { border-color: var(--danger); box-shadow: 0 0 0 3px var(--danger-light); }

.upload-zone { border: 1.5px dashed var(--border); border-radius: var(--radius); padding: 30px 16px; text-align: center; cursor: pointer; position: relative; overflow: hidden; transition: border-color .2s, background .2s; }
.upload-zone:hover { border-color: var(--green); background: var(--green-tint); }
.upload-icon { width: 40px; height: 40px; background: var(--bg-muted); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--ink); margin-bottom: 10px; }
.upload-zone p { font-size: 13px; color: var(--ink); font-weight: 600; margin: 0; }
.upload-zone small { font-size: 11.5px; color: var(--text-placeholder); display: block; margin-top: 4px; }
#imagePreview { width: 100%; border-radius: var(--radius); margin-top: 12px; max-height: 200px; object-fit: cover; border: 1px solid var(--border); }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border); }
.toggle-label { line-height: 1.3; }
.toggle-label strong { font-size: 13px; font-weight: 600; color: var(--ink); }
.toggle-label small { display: block; font-size: 11.5px; color: var(--text-label); margin-top: 2px; }
.switch { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: #D1D1D1; border-radius: 22px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: #fff; border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,.25); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--green); }
.switch input:checked + .switch-track::before { transform: translateX(18px); }

.submit-bar { background: var(--ink); border-radius: var(--radius-lg); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
.submit-bar .note { font-size: 12px; color: #B8B8B8; }
.submit-bar .note .req-mark { color: var(--green); font-weight: 700; }
.actions { display: flex; gap: 10px; }

.btn-primary { background: var(--green); color: #fff; border: none; border-radius: var(--radius); padding: 11px 26px; font-size: 13.5px; font-weight: 700; font-family: inherit; cursor: pointer; transition: background .15s; display: inline-flex; align-items: center; gap: 7px; }
.btn-primary:hover { background: var(--green-dark); }
.btn-primary:disabled { opacity: .6; cursor: default; }
.btn-ghost { background: transparent; color: #fff; border: 1px solid #3D3D3D; border-radius: var(--radius); padding: 11px 22px; font-size: 13.5px; font-weight: 600; font-family: inherit; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; transition: border-color .15s, background .15s; }
.btn-ghost:hover { border-color: #7A7A7A; background: #171717; }

.section-note { font-size: 11.5px; color: var(--text-label); padding: 12px 20px; border-top: 1px solid var(--border); background: var(--bg-muted); }
`;
