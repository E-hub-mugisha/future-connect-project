import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function Icon({ name, size = 18 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
    };

    const icons = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
            </>
        ),

        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        folder: (
            <>
                <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
            </>
        ),

        tag: (
            <>
                <path d="M20 13 13 20 4 11V4h7l9 9Z" />
                <circle cx="8" cy="8" r="1.2" />
            </>
        ),

        wallet: (
            <>
                <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19" />
                <path d="M4 7.5V18a2 2 0 0 0 2 2h13V8H6.5A2.5 2.5 0 0 1 4 5v2.5Z" />
                <path d="M15 14h3" />
            </>
        ),

        location: (
            <>
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </>
        ),

        document: (
            <>
                <path d="M6 3.5h8l4 4V20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
                <path d="M14 3.5v4h4" />
                <path d="M8 12h8M8 16h6" />
            </>
        ),

        settings: (
            <>
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.02 1.55V20h-2.4v-.09a1.7 1.7 0 0 0-1.02-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.02H6.8v-2.4h.05A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.66 5.2v-.1h2.4v.1a1.7 1.7 0 0 0 1.02 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10c.23.62.82 1.02 1.55 1.02H21v2.4h-.05c-.73 0-1.32.4-1.55 1.02Z" />
            </>
        ),

        check: (
            <path d="m5 12 4 4L19 6" />
        ),

        save: (
            <>
                <path d="M5 3.5h12l2 2V20.5H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5Z" />
                <path d="M8 3.5v5h7v-5" />
                <path d="M8 20.5v-6h8v6" />
            </>
        ),

        chevronDown: (
            <path d="m7 10 5 5 5-5" />
        ),

        info: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5" />
                <path d="M12 8h.01" />
            </>
        ),
    };

    return <svg {...common}>{icons[name]}</svg>;
}

function Field({
    label,
    required = false,
    error,
    hint,
    icon,
    children,
}) {
    return (
        <div className="pm-form-field">
            <div className="pm-field-heading">
                <label className="pm-label">
                    {label}
                    {required && (
                        <span className="pm-required">*</span>
                    )}
                </label>

                {hint && (
                    <span className="pm-field-hint">
                        {hint}
                    </span>
                )}
            </div>

            <div className={`pm-input-wrap ${error ? 'has-error' : ''}`}>
                {icon && (
                    <span className="pm-input-icon">
                        <Icon name={icon} size={16} />
                    </span>
                )}

                {children}
            </div>

            {error && (
                <div className="pm-error">
                    {error}
                </div>
            )}
        </div>
    );
}

// `categories` is expected to be passed from AdminProjectController@create,
// e.g. Category::select('id', 'name')->get()
export default function Create({ categories = [] }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        title: '',
        category_id: '',
        budget_amount: '',
        budget_currency: 'RWF',
        location: '',
        description: '',
        status: 'pending',
        verified: '0',
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route('admin.projects.store'));
    }

    const selectedCategoryName =
        categories.find(
            (cat) => String(cat.id) === String(data.category_id)
        )?.name ?? 'Project category';

    const formattedBudget = data.budget_amount
        ? `${Number(data.budget_amount).toLocaleString()} ${data.budget_currency}`
        : 'Budget not specified';

    return (
        <AppLayout>
            <Head title="Create New Project" />

            <style>{`
                .pm-create-page,
                .pm-create-page * {
                    box-sizing: border-box;
                }

                .pm-create-page {
                    --pm-bg: #f7f8fa;
                    --pm-card: #ffffff;
                    --pm-text: #1d1d1f;
                    --pm-secondary: #6e6e73;
                    --pm-muted: #8e8e93;
                    --pm-border: #e5e5ea;
                    --pm-primary: #1677ff;
                    --pm-primary-dark: #0d63d8;
                    --pm-green: #16845b;
                    --pm-red: #d9485f;

                    min-height: 100%;
                    padding: 28px;
                    background: var(--pm-bg);
                    color: var(--pm-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                }

                .pm-create-container {
                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                }

                /* Header */

                .pm-create-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 23px;
                }

                .pm-back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 12px;
                    color: var(--pm-secondary);
                    font-size: 12px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color .15s ease;
                }

                .pm-back-link:hover {
                    color: var(--pm-primary);
                }

                .pm-create-title {
                    margin: 0;
                    font-size: 25px;
                    line-height: 1.2;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .pm-create-subtitle {
                    max-width: 650px;
                    margin: 7px 0 0;
                    color: var(--pm-secondary);
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* Layout */

                .pm-form-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 310px;
                    align-items: start;
                    gap: 18px;
                }

                .pm-main-card,
                .pm-side-card {
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 14px;
                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025),
                        0 5px 18px rgba(0,0,0,.025);
                }

                .pm-main-card {
                    overflow: hidden;
                }

                .pm-card-header {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    padding: 17px 20px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-card-icon {
                    width: 35px;
                    height: 35px;
                    flex: 0 0 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-card-title {
                    margin: 0;
                    color: var(--pm-text);
                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .pm-card-description {
                    margin: 2px 0 0;
                    color: var(--pm-muted);
                    font-size: 11px;
                }

                .pm-card-body {
                    padding: 21px;
                }

                /* Form grid */

                .pm-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                }

                .pm-full {
                    grid-column: 1 / -1;
                }

                .pm-form-field {
                    min-width: 0;
                }

                .pm-field-heading {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-bottom: 7px;
                }

                .pm-label {
                    display: block;
                    color: #38383a;
                    font-size: 11.5px;
                    font-weight: 600;
                }

                .pm-required {
                    margin-left: 3px;
                    color: var(--pm-red);
                }

                .pm-field-hint {
                    color: var(--pm-muted);
                    font-size: 10px;
                }

                .pm-input-wrap {
                    position: relative;
                }

                .pm-input-icon {
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    z-index: 1;
                    display: flex;
                    color: #9b9ba0;
                    transform: translateY(-50%);
                    pointer-events: none;
                }

                .pm-input,
                .pm-textarea,
                .pm-select {
                    width: 100%;
                    border: 1px solid var(--pm-border);
                    outline: none;
                    background: #fff;
                    color: var(--pm-text);
                    font-family: inherit;
                    font-size: 12.5px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease,
                        background .15s ease;
                }

                .pm-input,
                .pm-select {
                    height: 42px;
                    border-radius: 9px;
                    padding: 0 12px;
                }

                .pm-input.has-icon,
                .pm-select.has-icon {
                    padding-left: 37px;
                }

                .pm-textarea {
                    min-height: 160px;
                    resize: vertical;
                    border-radius: 9px;
                    padding: 12px;
                    line-height: 1.55;
                }

                .pm-input::placeholder,
                .pm-textarea::placeholder {
                    color: #b0b0b5;
                }

                .pm-input:focus,
                .pm-textarea:focus,
                .pm-select:focus {
                    border-color: #9ec5ff;
                    box-shadow: 0 0 0 3px rgba(22,119,255,.09);
                }

                .pm-input-wrap.has-error .pm-input,
                .pm-input-wrap.has-error .pm-textarea,
                .pm-input-wrap.has-error .pm-select {
                    border-color: #e7a2ad;
                }

                .pm-error {
                    margin-top: 5px;
                    color: var(--pm-red);
                    font-size: 10.5px;
                    line-height: 1.4;
                }

                /* Select */

                .pm-select {
                    appearance: none;
                    cursor: pointer;
                    padding-right: 36px;
                }

                .pm-select-chevron {
                    position: absolute;
                    top: 50%;
                    right: 12px;
                    display: flex;
                    color: #8e8e93;
                    pointer-events: none;
                    transform: translateY(-50%);
                }

                /* Budget group */

                .pm-budget-group {
                    display: flex;
                    gap: 8px;
                }

                .pm-budget-group .pm-input-wrap {
                    flex: 1 1 auto;
                }

                .pm-budget-group .pm-currency-wrap {
                    flex: 0 0 92px;
                }

                /* Sidebar */

                .pm-side-column {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .pm-side-card {
                    overflow: hidden;
                }

                .pm-side-header {
                    padding: 16px 17px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-side-title {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 650;
                }

                .pm-side-subtitle {
                    margin: 4px 0 0;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                    line-height: 1.45;
                }

                .pm-side-body {
                    padding: 16px 17px;
                }

                /* Publish preview */

                .pm-preview {
                    padding: 14px;
                    border: 1px solid var(--pm-border);
                    border-radius: 10px;
                    background: #fafafa;
                }

                .pm-preview-label {
                    margin: 0 0 6px;
                    color: var(--pm-muted);
                    font-size: 9.5px;
                    font-weight: 600;
                    letter-spacing: .04em;
                    text-transform: uppercase;
                }

                .pm-preview-title {
                    margin: 0 0 7px;
                    color: var(--pm-text);
                    font-size: 13px;
                    line-height: 1.35;
                    font-weight: 650;
                }

                .pm-preview-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-top: 7px;
                    color: var(--pm-secondary);
                    font-size: 10.5px;
                }

                .pm-preview-row svg {
                    color: var(--pm-muted);
                    flex-shrink: 0;
                }

                /* Info box */

                .pm-info-box {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    padding: 12px;
                    border-radius: 9px;
                    background: #f4f8ff;
                    color: #49627e;
                }

                .pm-info-box svg {
                    flex: 0 0 auto;
                    margin-top: 1px;
                    color: var(--pm-primary);
                }

                .pm-info-box p {
                    margin: 0;
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                /* Footer */

                .pm-form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-top: 18px;
                    padding: 15px 20px;
                    border-top: 1px solid var(--pm-border);
                    background: #fafafa;
                }

                .pm-footer-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                }

                .pm-footer-note svg {
                    color: var(--pm-green);
                }

                .pm-footer-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .pm-cancel-button,
                .pm-submit-button {
                    height: 38px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    padding: 0 15px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 11.5px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all .15s ease;
                }

                .pm-cancel-button {
                    border: 1px solid var(--pm-border);
                    background: #fff;
                    color: var(--pm-secondary);
                }

                .pm-cancel-button:hover {
                    border-color: #cfd0d4;
                    background: #f7f7f8;
                    color: var(--pm-text);
                }

                .pm-submit-button {
                    border: 1px solid var(--pm-primary);
                    background: var(--pm-primary);
                    color: #fff;
                    box-shadow: 0 3px 10px rgba(22,119,255,.16);
                }

                .pm-submit-button:hover {
                    border-color: var(--pm-primary-dark);
                    background: var(--pm-primary-dark);
                    transform: translateY(-1px);
                }

                .pm-submit-button:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                    transform: none;
                }

                /* Responsive */

                @media (max-width: 950px) {
                    .pm-form-layout {
                        grid-template-columns: 1fr;
                    }

                    .pm-side-column {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 700px) {
                    .pm-create-page {
                        padding: 20px 14px;
                    }

                    .pm-create-header {
                        display: block;
                    }

                    .pm-create-title {
                        font-size: 22px;
                    }

                    .pm-create-subtitle {
                        font-size: 12px;
                    }

                    .pm-form-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }

                    .pm-full {
                        grid-column: auto;
                    }

                    .pm-card-body {
                        padding: 16px;
                    }

                    .pm-form-footer {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .pm-footer-actions {
                        width: 100%;
                    }

                    .pm-cancel-button,
                    .pm-submit-button {
                        flex: 1;
                    }

                    .pm-side-column {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 430px) {
                    .pm-card-header {
                        padding: 15px;
                    }

                    .pm-form-footer {
                        padding: 14px 15px;
                    }

                    .pm-footer-actions {
                        flex-direction: column-reverse;
                    }

                    .pm-cancel-button,
                    .pm-submit-button {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="pm-create-page">
                <div className="pm-create-container">

                    {/* Header */}
                    <header className="pm-create-header">
                        <div>
                            <Link
                                href={route('admin.projects.index')}
                                className="pm-back-link"
                            >
                                <Icon name="arrowLeft" size={15} />
                                Back to Projects
                            </Link>

                            <h1 className="pm-create-title">
                                Create New Project
                            </h1>

                            <p className="pm-create-subtitle">
                                Add a new project to the talent platform and
                                provide the information talent needs to
                                understand the opportunity.
                            </p>
                        </div>
                    </header>

                    <form onSubmit={handleSubmit}>
                        <div className="pm-form-layout">

                            {/* Main form */}
                            <div className="pm-main-card">

                                <div className="pm-card-header">
                                    <div className="pm-card-icon">
                                        <Icon name="folder" size={17} />
                                    </div>

                                    <div>
                                        <h2 className="pm-card-title">
                                            Project Information
                                        </h2>

                                        <p className="pm-card-description">
                                            Basic information about the project.
                                        </p>
                                    </div>
                                </div>

                                <div className="pm-card-body">
                                    <div className="pm-form-grid">

                                        {/* Title */}
                                        <Field
                                            label="Project Title"
                                            required
                                            error={errors.title}
                                            icon="document"
                                        >
                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value
                                                    )
                                                }
                                                className="pm-input has-icon"
                                                placeholder="e.g. Build a modern company website"
                                                required
                                            />
                                        </Field>

                                        {/* Category — real select bound to category_id */}
                                        <Field
                                            label="Project Category"
                                            required
                                            error={errors.category_id}
                                            icon="tag"
                                        >
                                            <select
                                                value={data.category_id}
                                                onChange={(e) =>
                                                    setData(
                                                        'category_id',
                                                        e.target.value
                                                    )
                                                }
                                                className="pm-select has-icon"
                                                required
                                            >
                                                <option value="">
                                                    Select a category
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

                                        {/* Budget — amount + currency, matching the Project model's real columns */}
                                        <Field
                                            label="Budget"
                                            required
                                            error={errors.budget_amount}
                                            hint="Project budget"
                                        >
                                            <div className="pm-budget-group">
                                                <div className="pm-input-wrap">
                                                    <span className="pm-input-icon">
                                                        <Icon
                                                            name="wallet"
                                                            size={16}
                                                        />
                                                    </span>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                        value={
                                                            data.budget_amount
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'budget_amount',
                                                                e.target.value
                                                            )
                                                        }
                                                        className="pm-input has-icon"
                                                        placeholder="e.g. 500,000"
                                                        required
                                                    />
                                                </div>

                                                <div className="pm-currency-wrap">
                                                    <select
                                                        value={
                                                            data.budget_currency
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'budget_currency',
                                                                e.target.value
                                                            )
                                                        }
                                                        className="pm-select"
                                                    >
                                                        <option value="RWF">
                                                            RWF
                                                        </option>
                                                        <option value="USD">
                                                            USD
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </Field>

                                        {/* Location */}
                                        <Field
                                            label="Location"
                                            error={errors.location}
                                            icon="location"
                                        >
                                            <input
                                                type="text"
                                                value={data.location}
                                                onChange={(e) =>
                                                    setData(
                                                        'location',
                                                        e.target.value
                                                    )
                                                }
                                                className="pm-input has-icon"
                                                placeholder="e.g. Kigali or Remote"
                                            />
                                        </Field>

                                        {/* Description */}
                                        <div className="pm-form-field pm-full">
                                            <div className="pm-field-heading">
                                                <label className="pm-label">
                                                    Project Description
                                                    <span className="pm-required">
                                                        *
                                                    </span>
                                                </label>

                                                <span className="pm-field-hint">
                                                    Describe the opportunity
                                                </span>
                                            </div>

                                            <div
                                                className={`pm-input-wrap ${
                                                    errors.description
                                                        ? 'has-error'
                                                        : ''
                                                }`}
                                            >
                                                <textarea
                                                    value={data.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            'description',
                                                            e.target.value
                                                        )
                                                    }
                                                    rows={7}
                                                    className="pm-textarea"
                                                    placeholder="Describe the project, goals, expected deliverables, required skills and any important details talent should know..."
                                                />
                                            </div>

                                            {errors.description && (
                                                <div className="pm-error">
                                                    {errors.description}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="pm-form-footer">
                                    <div className="pm-footer-note">
                                        <Icon name="check" size={14} />
                                        All changes will be saved securely.
                                    </div>

                                    <div className="pm-footer-actions">
                                        <Link
                                            href={route(
                                                'admin.projects.index'
                                            )}
                                            className="pm-cancel-button"
                                        >
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            className="pm-submit-button"
                                            disabled={processing}
                                        >
                                            <Icon name="save" size={15} />

                                            {processing
                                                ? 'Publishing…'
                                                : 'Publish Project'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="pm-side-column">

                                {/* Publishing */}
                                <div className="pm-side-card">
                                    <div className="pm-side-header">
                                        <h2 className="pm-side-title">
                                            Publishing Settings
                                        </h2>

                                        <p className="pm-side-subtitle">
                                            Control how this project appears
                                            on the platform.
                                        </p>
                                    </div>

                                    <div className="pm-side-body">

                                        {/* Status */}
                                        <Field
                                            label="Project Status"
                                            error={errors.status}
                                        >
                                            <select
                                                value={data.status}
                                                onChange={(e) =>
                                                    setData(
                                                        'status',
                                                        e.target.value
                                                    )
                                                }
                                                className="pm-select"
                                            >
                                                <option value="pending">
                                                    Pending
                                                </option>

                                                <option value="approved">
                                                    Approved
                                                </option>

                                                <option value="closed">
                                                    Closed
                                                </option>
                                            </select>

                                            <span className="pm-select-chevron">
                                                <Icon
                                                    name="chevronDown"
                                                    size={15}
                                                />
                                            </span>
                                        </Field>

                                        <div style={{ height: 16 }} />

                                        {/* Verification */}
                                        <Field
                                            label="Verification"
                                            error={errors.verified}
                                        >
                                            <select
                                                value={data.verified}
                                                onChange={(e) =>
                                                    setData(
                                                        'verified',
                                                        e.target.value
                                                    )
                                                }
                                                className="pm-select"
                                            >
                                                <option value="1">
                                                    Verified
                                                </option>

                                                <option value="0">
                                                    Not Verified
                                                </option>
                                            </select>

                                            <span className="pm-select-chevron">
                                                <Icon
                                                    name="chevronDown"
                                                    size={15}
                                                />
                                            </span>
                                        </Field>
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="pm-side-card">
                                    <div className="pm-side-header">
                                        <h2 className="pm-side-title">
                                            Project Preview
                                        </h2>

                                        <p className="pm-side-subtitle">
                                            A quick look at the project details.
                                        </p>
                                    </div>

                                    <div className="pm-side-body">
                                        <div className="pm-preview">
                                            <p className="pm-preview-label">
                                                Project
                                            </p>

                                            <h3 className="pm-preview-title">
                                                {data.title ||
                                                    'Your project title'}
                                            </h3>

                                            <div className="pm-preview-row">
                                                <Icon
                                                    name="tag"
                                                    size={12}
                                                />

                                                {selectedCategoryName}
                                            </div>

                                            <div className="pm-preview-row">
                                                <Icon
                                                    name="wallet"
                                                    size={12}
                                                />

                                                {formattedBudget}
                                            </div>

                                            <div className="pm-preview-row">
                                                <Icon
                                                    name="location"
                                                    size={12}
                                                />

                                                {data.location ||
                                                    'Remote'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Guidance */}
                                <div className="pm-info-box">
                                    <Icon name="info" size={16} />

                                    <p>
                                        Clear project descriptions help
                                        talent understand the scope, required
                                        skills and expected outcome before
                                        applying.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}