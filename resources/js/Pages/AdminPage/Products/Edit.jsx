import React, { useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    productUpdate: (id) => `/seller/products/${id}`,
};

/* ── Inline icon set (replaces Tabler `ti` icon classes) ── */
const Icon = {
    Edit: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
        </svg>
    ),
    Package: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M21 8l-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" />
        </svg>
    ),
    Tag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0l-6.4-6.4a1.5 1.5 0 0 1 0-2.1L11.5 4H19a1 1 0 0 1 1 1v7.5Z" />
            <circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none" />
        </svg>
    ),
    Cash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="6" width="19" height="12" rx="2.5" /><circle cx="12" cy="12" r="2.6" />
            <path d="M6.5 9v.01M17.5 15v.01" />
        </svg>
    ),
    Stack: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" /><path d="M2.5 12 12 17l9.5-5" /><path d="M2.5 16 12 21l9.5-5" />
        </svg>
    ),
    Upload: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 16V4M12 4 7 9M12 4l5 5" /><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        </svg>
    ),
    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 7h16M9 7V4.8c0-.4.4-.8.9-.8h4.2c.5 0 .9.4.9.8V7M6 7l1 13.2c0 .9.8 1.8 1.8 1.8h6.4c1 0 1.8-.9 1.8-1.8L18 7" />
        </svg>
    ),
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),
    Save: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M5 4h11l3 3v13H5V4Z" /><path d="M8 4v5h7V4" /><path d="M8 14h8v6H8v-6Z" />
        </svg>
    ),
};

function Field({ label, icon, children, span }) {
    return (
        <div className={`p-field ${span ? `p-field--${span}` : ''}`}>
            <label className="p-label">{label}</label>
            <div className="p-input-wrap">
                <span className="p-input-icon">{icon}</span>
                {children}
            </div>
        </div>
    );
}

export default function Edit({ product, categories = [] }) {
    const fileRef = useRef(null);
    const [preview, setPreview] = useState(product.image ? `/storage/${product.image}` : null);
    const [dragActive, setDragActive] = useState(false);
    const [imageCleared, setImageCleared] = useState(false);

    const { data, setData, post, processing, errors, transform } = useForm({
        name: product.name ?? '',
        product_category_id: product.product_category_id ?? '',
        price: product.price ?? '',
        stock: product.stock ?? '',
        description: product.description ?? '',
        image: null,
        status: product.status ?? 'active',
    });

    transform((formData) => ({ ...formData, _method: 'PUT' }));

    const submit = (e) => {
        e.preventDefault();
        post(routes.productUpdate(product.id), { forceFormData: true });
    };

    const handleFile = (file) => {
        if (!file) return;
        setData('image', file);
        setImageCleared(false);
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        handleFile(e.dataTransfer.files?.[0]);
    };

    const clearImage = () => {
        setData('image', null);
        setPreview(null);
        setImageCleared(true);
        if (fileRef.current) fileRef.current.value = '';
    };

    return (
        <div data-h-scope="product-edit">
            <Head title={`Edit Product: ${product.name}`} />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                [data-h-scope="product-edit"] {
                    --bg-page:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-soft:    rgba(0,100,60,0.035);
                    --bg-accent:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #839a92;
                    --border:     rgba(0,100,60,0.12);
                    --border-accent: rgba(0,166,103,0.35);
                    --danger:     #c94a3f;
                    --radius-lg:  18px;
                    --radius-md:  12px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    box-sizing: border-box;
                }
                [data-h-scope="product-edit"] *,
                [data-h-scope="product-edit"] *::before,
                [data-h-scope="product-edit"] *::after { box-sizing: border-box; }

                [data-h-scope="product-edit"] {
                    background: var(--bg-page);
                    font-family: var(--font-body);
                    color: var(--text-primary);
                    min-height: 100%;
                    padding: 40px 32px;
                }
                @media(max-width: 768px) { [data-h-scope="product-edit"] { padding: 24px 16px; } }

                .p-wrap { max-width: 920px; margin: 0 auto; }

                .p-eyebrow {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-head);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--accent);
                    background: var(--bg-accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 5px 14px;
                    margin-bottom: 14px;
                }
                .p-header h1 {
                    font-family: var(--font-head);
                    font-size: 1.85rem;
                    font-weight: 800;
                    margin: 0 0 6px;
                    letter-spacing: -0.01em;
                }
                .p-header p { color: var(--text-secondary); margin: 0 0 28px; font-size: 0.92rem; }
                .p-header p strong { color: var(--text-primary); font-weight: 700; }

                .p-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 30px;
                    box-shadow: 0 1px 2px rgba(16,32,27,0.03), 0 12px 32px -18px rgba(16,32,27,0.12);
                }
                @media(max-width: 600px) { .p-card { padding: 22px; } }

                .p-section + .p-section { margin-top: 30px; padding-top: 30px; border-top: 1px dashed var(--border); }
                .p-section-title {
                    display: flex; align-items: center; gap: 10px;
                    font-family: var(--font-head);
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: var(--text-muted);
                    margin: 0 0 18px;
                }
                .p-section-title .p-count {
                    width: 20px; height: 20px; border-radius: 50%;
                    background: var(--bg-accent); color: var(--accent);
                    display: inline-flex; align-items: center; justify-content: center;
                    font-size: 0.68rem; font-weight: 800;
                }

                .p-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
                @media(max-width: 820px) { .p-grid { grid-template-columns: repeat(2, 1fr); } }
                @media(max-width: 560px) { .p-grid { grid-template-columns: 1fr; } }

                .p-field--full { grid-column: 1 / -1; }

                .p-label {
                    display: block;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-bottom: 7px;
                }

                .p-input-wrap { position: relative; }
                .p-input-icon {
                    position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
                    color: var(--text-muted); width: 18px; height: 18px;
                    display: flex; pointer-events: none;
                }
                .p-input-icon svg { width: 100%; height: 100%; }

                .p-input, .p-select, .p-textarea {
                    width: 100%;
                    background: var(--bg-soft);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    padding: 12px 14px 12px 42px;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
                }
                .p-input:focus, .p-select:focus, .p-textarea:focus {
                    border-color: var(--border-accent);
                    box-shadow: 0 0 0 3px var(--accent-glow);
                    background: var(--bg-card);
                }
                .p-input::placeholder, .p-textarea::placeholder { color: var(--text-muted); }
                .p-select { appearance: none; cursor: pointer; }
                .p-select-wrap { position: relative; }
                .p-select-caret {
                    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
                    width: 14px; height: 14px; color: var(--text-muted); pointer-events: none;
                }
                .p-textarea { padding-left: 14px; resize: vertical; min-height: 110px; line-height: 1.55; }

                .p-error { color: var(--danger); font-size: 0.76rem; margin-top: 6px; font-weight: 500; }

                /* status pills */
                .p-status-group { display: flex; gap: 10px; }
                .p-status-pill {
                    flex: 1;
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg-soft);
                    border-radius: var(--radius-md);
                    padding: 12px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: border-color 0.15s, background 0.15s, color 0.15s;
                }
                .p-status-pill svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s; }
                .p-status-pill.is-active {
                    border-color: var(--border-accent);
                    background: var(--bg-accent);
                    color: var(--accent);
                }
                .p-status-pill.is-active svg { opacity: 1; }
                .p-status-pill input { position: absolute; opacity: 0; pointer-events: none; }

                /* image dropzone */
                .p-drop {
                    border: 1.5px dashed var(--border-accent);
                    border-radius: var(--radius-md);
                    background: var(--bg-soft);
                    padding: 28px;
                    text-align: center;
                    cursor: pointer;
                    transition: border-color 0.15s, background 0.15s;
                }
                .p-drop:hover, .p-drop.is-active { background: var(--bg-accent); border-color: var(--accent); }
                .p-drop-icon {
                    width: 38px; height: 38px; margin: 0 auto 12px;
                    color: var(--accent);
                    background: var(--bg-card);
                    border: 1px solid var(--border-accent);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                }
                .p-drop-icon svg { width: 18px; height: 18px; }
                .p-drop-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin: 0 0 3px; }
                .p-drop-hint { font-size: 0.76rem; color: var(--text-muted); margin: 0; }

                .p-preview {
                    display: flex; align-items: center; gap: 14px;
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    padding: 12px;
                    background: var(--bg-soft);
                }
                .p-preview img {
                    width: 64px; height: 64px; object-fit: cover;
                    border-radius: 10px; border: 1px solid var(--border);
                    flex-shrink: 0;
                }
                .p-preview-meta { flex: 1; min-width: 0; }
                .p-preview-name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin: 0 0 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                .p-preview-size { font-size: 0.75rem; color: var(--text-muted); margin: 0; }
                .p-preview-remove {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 32px; height: 32px; border-radius: 50%;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--danger);
                    cursor: pointer;
                    flex-shrink: 0;
                }
                .p-preview-remove svg { width: 15px; height: 15px; }
                .p-preview-remove:hover { border-color: var(--danger); background: rgba(201,74,63,0.08); }

                .p-footer {
                    display: flex; align-items: center; justify-content: flex-end; gap: 12px;
                    margin-top: 30px; padding-top: 24px;
                    border-top: 1px solid var(--border);
                }
                .p-btn-ghost {
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 12px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: border-color 0.15s, color 0.15s;
                }
                .p-btn-ghost:hover { border-color: var(--border-accent); color: var(--accent); }
                .p-btn-primary {
                    display: inline-flex; align-items: center; gap: 9px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 12px 26px;
                    font-family: var(--font-head);
                    font-size: 0.9rem;
                    font-weight: 700;
                    cursor: pointer;
                    box-shadow: 0 6px 20px var(--accent-glow);
                    transition: background 0.15s, transform 0.15s;
                }
                .p-btn-primary svg { width: 17px; height: 17px; }
                .p-btn-primary:hover { background: var(--accent-dim); transform: translateY(-1px); }
                .p-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
            `}</style>

            <div className="p-wrap">
                <div className="p-header">
                    <span className="p-eyebrow"><Icon.Edit style={{ width: 13, height: 13 }} /> Catalog</span>
                    <h1>Edit product</h1>
                    <p>Updating <strong>{product.name}</strong></p>
                </div>

                <form onSubmit={submit}>
                    <div className="p-card">

                        {/* ── Basics ── */}
                        <div className="p-section">
                            <h3 className="p-section-title"><span className="p-count">1</span> Basics</h3>
                            <div className="p-grid">
                                <Field label="Product name" icon={<Icon.Package />} span="full">
                                    <input
                                        type="text"
                                        className="p-input"
                                        placeholder="e.g. Handwoven Basket"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && <p className="p-error">{errors.name}</p>}
                                </Field>

                                <Field label="Category" icon={<Icon.Tag />} span="full">
                                    <div className="p-select-wrap">
                                        <select
                                            className="p-select"
                                            value={data.product_category_id}
                                            onChange={(e) => setData('product_category_id', e.target.value)}
                                            required
                                        >
                                            <option value="">Select category</option>
                                            {categories.map((c) => (
                                                <option value={c.id} key={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                        <svg className="p-select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                    {errors.product_category_id && <p className="p-error">{errors.product_category_id}</p>}
                                </Field>
                            </div>
                        </div>

                        {/* ── Pricing & inventory ── */}
                        <div className="p-section">
                            <h3 className="p-section-title"><span className="p-count">2</span> Pricing &amp; inventory</h3>
                            <div className="p-grid">
                                <Field label="Price (RWF)" icon={<Icon.Cash />}>
                                    <input
                                        type="number"
                                        step="100"
                                        min="0"
                                        className="p-input"
                                        placeholder="0"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        required
                                    />
                                    {errors.price && <p className="p-error">{errors.price}</p>}
                                </Field>

                                <Field label="Stock quantity" icon={<Icon.Stack />}>
                                    <input
                                        type="number"
                                        min="0"
                                        className="p-input"
                                        placeholder="0"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        required
                                    />
                                    {errors.stock && <p className="p-error">{errors.stock}</p>}
                                </Field>

                                <div className="p-field">
                                    <label className="p-label">Status</label>
                                    <div className="p-status-group">
                                        {[
                                            { value: 'active', label: 'Active' },
                                            { value: 'draft', label: 'Draft' },
                                        ].map((opt) => (
                                            <label
                                                key={opt.value}
                                                className={`p-status-pill ${data.status === opt.value ? 'is-active' : ''}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value={opt.value}
                                                    checked={data.status === opt.value}
                                                    onChange={(e) => setData('status', e.target.value)}
                                                />
                                                <Icon.Check /> {opt.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Description ── */}
                        <div className="p-section">
                            <h3 className="p-section-title"><span className="p-count">3</span> Description</h3>
                            <div className="p-field p-field--full">
                                <label className="p-label">Product description</label>
                                <textarea
                                    className="p-textarea"
                                    rows={4}
                                    placeholder="Write a clear, detailed description of the product — materials, size, condition, what makes it worth buying…"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                {errors.description && <p className="p-error">{errors.description}</p>}
                            </div>
                        </div>

                        {/* ── Image ── */}
                        <div className="p-section">
                            <h3 className="p-section-title"><span className="p-count">4</span> Product image</h3>
                            <div className="p-field p-field--full">
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFile(e.target.files?.[0])}
                                />
                                {!preview ? (
                                    <div
                                        className={`p-drop ${dragActive ? 'is-active' : ''}`}
                                        onClick={() => fileRef.current?.click()}
                                        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                                        onDragLeave={() => setDragActive(false)}
                                        onDrop={onDrop}
                                    >
                                        <div className="p-drop-icon"><Icon.Upload /></div>
                                        <p className="p-drop-title">Click to upload or drag an image here</p>
                                        <p className="p-drop-hint">PNG or JPG, up to 5MB</p>
                                    </div>
                                ) : (
                                    <div className="p-preview">
                                        <img src={preview} alt="Product preview" />
                                        <div className="p-preview-meta">
                                            <p className="p-preview-name">
                                                {data.image?.name ?? (imageCleared ? '' : 'Current image')}
                                            </p>
                                            <p className="p-preview-size">
                                                {data.image
                                                    ? `${(data.image.size / 1024).toFixed(0)} KB`
                                                    : 'Uploaded previously — pick a new file to replace it'}
                                            </p>
                                        </div>
                                        <button type="button" className="p-preview-remove" onClick={clearImage}>
                                            <Icon.Trash />
                                        </button>
                                    </div>
                                )}
                                {errors.image && <p className="p-error">{errors.image}</p>}
                            </div>
                        </div>

                    </div>

                    <div className="p-footer">
                        <button type="button" className="p-btn-ghost" onClick={() => window.history.back()}>
                            Cancel
                        </button>
                        <button type="submit" className="p-btn-primary" disabled={processing}>
                            <Icon.Save /> {processing ? 'Saving…' : 'Update product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Edit.layout = (page) => <AppLayout children={page} title="Edit Product" />;
