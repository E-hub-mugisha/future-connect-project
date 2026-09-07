import { useEffect, useRef, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Create({ categories = [] }) {
    const routes = {
        index: () => route("admin.talents.index"),
        store: () => route("admin.talents.store"),
    };

    const { data, setData, post, processing, errors, reset } = useForm({
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
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef(null);

    const errorCount = Object.keys(errors || {}).length;

    useEffect(() => {
        return () => {
            if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleImage = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) return;

        setData("image", file);

        if (preview?.startsWith("blob:")) {
            URL.revokeObjectURL(preview);
        }

        setPreview(URL.createObjectURL(file));
    };

    const handleImageChange = (event) => {
        handleImage(event.target.files?.[0]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        handleImage(event.dataTransfer.files?.[0]);
    };

    const removeImage = (event) => {
        event?.stopPropagation();

        if (preview?.startsWith("blob:")) {
            URL.revokeObjectURL(preview);
        }

        setPreview(null);
        setData("image", null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const submit = (event) => {
        event.preventDefault();

        post(routes.store(), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                setPreview(null);
            },
        });
    };

    const initials = data.name
        ? data.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join("")
              .toUpperCase()
        : "TP";

    const completionFields = [
        data.name,
        data.email,
        data.phone,
        data.address,
        data.category_id,
        data.level,
        data.language,
        data.description,
        data.image,
    ];

    const completion = Math.round(
        (completionFields.filter(Boolean).length / completionFields.length) * 100,
    );

    return (
        <AdminLayout>
            <Head title="Add New Talent" />
            <style>{css}</style>

            <div className="talent-create-page">
                <div className="page-container">
                    {/* Header */}
                    <header className="page-header">
                        <div>
                            <div className="breadcrumb">
                                <Link href={routes.index()}>Talents</Link>
                                <span>/</span>
                                <strong>Add new</strong>
                            </div>

                            <div className="title-row">
                                <div>
                                    <h1>Create talent profile</h1>
                                    <p>
                                        Add a professional profile to your talent
                                        directory.
                                    </p>
                                </div>

                                <div className="header-status">
                                    <span className="status-dot" />
                                    New profile
                                </div>
                            </div>
                        </div>

                        <Link href={routes.index()} className="back-button">
                            <ArrowLeftIcon />
                            Back to talents
                        </Link>
                    </header>

                    {errorCount > 0 && (
                        <div className="error-alert">
                            <div className="alert-icon">
                                <AlertIcon />
                            </div>
                            <div>
                                <strong>
                                    {errorCount} field
                                    {errorCount > 1 ? "s" : ""} need
                                    {errorCount > 1 ? "" : "s"} attention
                                </strong>
                                <span>
                                    Review the highlighted fields before saving
                                    this profile.
                                </span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="workspace">
                            {/* Main column */}
                            <main className="main-column">
                                <section className="panel">
                                    <PanelHeader
                                        number="01"
                                        title="Personal information"
                                        description="Core contact details for the talent."
                                    />

                                    <div className="panel-body">
                                        <div className="field-grid two">
                                            <Field
                                                label="Full name"
                                                required
                                                error={errors.name}
                                            >
                                                <input
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="e.g. Amara Nkosi"
                                                    className={
                                                        errors.name ? "invalid" : ""
                                                    }
                                                    autoComplete="name"
                                                />
                                            </Field>

                                            <Field
                                                label="Email address"
                                                error={errors.email}
                                            >
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="email@example.com"
                                                    className={
                                                        errors.email ? "invalid" : ""
                                                    }
                                                    autoComplete="email"
                                                />
                                            </Field>

                                            <Field
                                                label="Phone number"
                                                error={errors.phone}
                                            >
                                                <input
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="+250 7XX XXX XXX"
                                                    className={
                                                        errors.phone ? "invalid" : ""
                                                    }
                                                    autoComplete="tel"
                                                />
                                            </Field>

                                            <Field
                                                label="Address / location"
                                                error={errors.address}
                                            >
                                                <input
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData(
                                                            "address",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="City, Country"
                                                    className={
                                                        errors.address ? "invalid" : ""
                                                    }
                                                />
                                            </Field>
                                        </div>
                                    </div>
                                </section>

                                <section className="panel">
                                    <PanelHeader
                                        number="02"
                                        title="Professional profile"
                                        description="Define the talent's area of expertise and profile identity."
                                    />

                                    <div className="panel-body">
                                        <div className="field-grid three">
                                            <Field
                                                label="Category"
                                                required
                                                error={errors.category_id}
                                            >
                                                <select
                                                    value={data.category_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "category_id",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={
                                                        errors.category_id
                                                            ? "invalid"
                                                            : ""
                                                    }
                                                >
                                                    <option value="">
                                                        Select category
                                                    </option>
                                                    {categories.map((category) => (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                        >
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </Field>

                                            <Field
                                                label="Experience level"
                                                error={errors.level}
                                            >
                                                <select
                                                    value={data.level}
                                                    onChange={(e) =>
                                                        setData(
                                                            "level",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={
                                                        errors.level ? "invalid" : ""
                                                    }
                                                >
                                                    <option value="">
                                                        Select level
                                                    </option>
                                                    {[
                                                        "beginner",
                                                        "intermediate",
                                                        "advanced",
                                                        "expert",
                                                    ].map((level) => (
                                                        <option
                                                            key={level}
                                                            value={level}
                                                        >
                                                            {cap(level)}
                                                        </option>
                                                    ))}
                                                </select>
                                            </Field>

                                            <Field
                                                label="Primary language"
                                                error={errors.language}
                                            >
                                                <input
                                                    value={data.language}
                                                    onChange={(e) =>
                                                        setData(
                                                            "language",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="English, French…"
                                                    className={
                                                        errors.language
                                                            ? "invalid"
                                                            : ""
                                                    }
                                                />
                                            </Field>
                                        </div>

                                        <div className="field-grid one">
                                            <Field
                                                label="Bio / professional summary"
                                                error={errors.description}
                                                hint="A short introduction helps employers understand the talent quickly."
                                            >
                                                <textarea
                                                    value={data.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="Describe the talent's experience, strengths, interests and professional background…"
                                                    className={
                                                        errors.description
                                                            ? "invalid"
                                                            : ""
                                                    }
                                                    rows={7}
                                                />
                                                <div className="character-count">
                                                    {data.description.length} characters
                                                </div>
                                            </Field>
                                        </div>
                                    </div>
                                </section>

                                <section className="panel">
                                    <PanelHeader
                                        number="03"
                                        title="Visibility & placement"
                                        description="Control how this profile is presented in the platform."
                                    />

                                    <div className="panel-body settings-body">
                                        <div className="setting-item">
                                            <div className="setting-icon blue">
                                                <EyeIcon />
                                            </div>
                                            <div className="setting-copy">
                                                <strong>Profile status</strong>
                                                <span>
                                                    Decide whether this profile is
                                                    available in the directory.
                                                </span>
                                            </div>

                                            <select
                                                className="compact-select"
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
                                        </div>

                                        <div className="setting-divider" />

                                        <Toggle
                                            icon={<StarIcon />}
                                            title="Featured profile"
                                            subtitle="Highlight this talent in featured listings and discovery areas."
                                            checked={data.featured}
                                            onChange={(value) =>
                                                setData("featured", value)
                                            }
                                        />

                                        <div className="setting-divider" />

                                        <Toggle
                                            icon={<MatchIcon />}
                                            title="Matched"
                                            subtitle="Mark this talent as successfully matched or placed."
                                            checked={data.matched}
                                            onChange={(value) =>
                                                setData("matched", value)
                                            }
                                            last
                                        />
                                    </div>
                                </section>

                                <div className="bottom-actions">
                                    <Link href={routes.index()} className="cancel-button">
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        className="save-button"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <SpinnerIcon />
                                                Creating profile…
                                            </>
                                        ) : (
                                            <>
                                                <CheckIcon />
                                                Create talent profile
                                            </>
                                        )}
                                    </button>
                                </div>
                            </main>

                            {/* Sidebar */}
                            <aside className="side-column">
                                <section className="profile-preview panel">
                                    <PanelHeader
                                        number="PREVIEW"
                                        title="Profile preview"
                                        description="A quick view of how the record starts to take shape."
                                    />

                                    <div className="preview-body">
                                        <div className="avatar-wrap">
                                            {preview ? (
                                                <img
                                                    src={preview}
                                                    alt="Profile preview"
                                                    className="avatar-image"
                                                />
                                            ) : (
                                                <div className="avatar-placeholder">
                                                    {initials}
                                                </div>
                                            )}

                                            <button
                                                type="button"
                                                className="camera-button"
                                                onClick={() =>
                                                    fileInputRef.current?.click()
                                                }
                                                aria-label="Upload profile photo"
                                            >
                                                <CameraIcon />
                                            </button>
                                        </div>

                                        <h2>{data.name || "Talent name"}</h2>
                                        <p className="preview-role">
                                            {selectedCategoryName(
                                                categories,
                                                data.category_id,
                                            ) || "Professional category"}
                                        </p>

                                        <div className="preview-tags">
                                            {data.level && (
                                                <span>
                                                    {cap(data.level)}
                                                </span>
                                            )}
                                            {data.language && (
                                                <span>{data.language}</span>
                                            )}
                                            {!data.level && !data.language && (
                                                <span>Profile details pending</span>
                                            )}
                                        </div>

                                        <div className="preview-contact">
                                            {data.email && (
                                                <div>
                                                    <MailIcon />
                                                    <span>{data.email}</span>
                                                </div>
                                            )}
                                            {data.phone && (
                                                <div>
                                                    <PhoneIcon />
                                                    <span>{data.phone}</span>
                                                </div>
                                            )}
                                            {data.address && (
                                                <div>
                                                    <PinIcon />
                                                    <span>{data.address}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>

                                <section className="completion-card">
                                    <div className="completion-top">
                                        <div>
                                            <span>Profile readiness</span>
                                            <strong>{completion}%</strong>
                                        </div>
                                        <div className="completion-ring">
                                            <svg viewBox="0 0 40 40">
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="16"
                                                    className="ring-bg"
                                                />
                                                <circle
                                                    cx="20"
                                                    cy="20"
                                                    r="16"
                                                    className="ring-progress"
                                                    style={{
                                                        strokeDashoffset:
                                                            100.5 -
                                                            (100.5 * completion) /
                                                                100,
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="progress-track">
                                        <span
                                            style={{ width: `${completion}%` }}
                                        />
                                    </div>

                                    <p>
                                        Complete the important profile fields to
                                        create a stronger talent record.
                                    </p>
                                </section>

                                <section className="panel upload-panel">
                                    <PanelHeader
                                        number="PHOTO"
                                        title="Profile photo"
                                        description="Use a clear professional image."
                                    />

                                    <div className="upload-body">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp"
                                            onChange={handleImageChange}
                                            hidden
                                        />

                                        <div
                                            className={`drop-zone ${
                                                dragging ? "dragging" : ""
                                            }`}
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                            onDragOver={(event) => {
                                                event.preventDefault();
                                                setDragging(true);
                                            }}
                                            onDragLeave={() =>
                                                setDragging(false)
                                            }
                                            onDrop={handleDrop}
                                        >
                                            {preview ? (
                                                <div className="uploaded-preview">
                                                    <img
                                                        src={preview}
                                                        alt="Selected profile"
                                                    />
                                                    <div className="image-overlay">
                                                        <UploadIcon />
                                                        Change photo
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="upload-symbol">
                                                        <UploadIcon />
                                                    </div>
                                                    <strong>
                                                        Drop image here
                                                    </strong>
                                                    <span>
                                                        or click to browse
                                                    </span>
                                                    <small>
                                                        JPG, PNG or WEBP · Max 2
                                                        MB
                                                    </small>
                                                </>
                                            )}
                                        </div>

                                        {preview && (
                                            <button
                                                type="button"
                                                className="remove-photo"
                                                onClick={removeImage}
                                            >
                                                Remove selected photo
                                            </button>
                                        )}

                                        {errors.image && (
                                            <span className="field-error image-error">
                                                {errors.image}
                                            </span>
                                        )}
                                    </div>
                                </section>

                                <section className="info-card">
                                    <div className="info-card-icon">
                                        <ShieldIcon />
                                    </div>
                                    <div>
                                        <strong>Admin-managed profile</strong>
                                        <p>
                                            You can update contact information,
                                            placement settings and the profile
                                            photo later from the talent record.
                                        </p>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}

function PanelHeader({ number, title, description }) {
    return (
        <div className="panel-header">
            <div className="section-number">{number}</div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

function Field({ label, required, error, hint, children }) {
    return (
        <div className="field">
            <div className="field-label-row">
                <label>
                    {label}
                    {required && <span className="required">*</span>}
                </label>
                {hint && <span className="field-hint">{hint}</span>}
            </div>

            {children}

            {error && <span className="field-error">{error}</span>}
        </div>
    );
}

function Toggle({ icon, title, subtitle, checked, onChange, last = false }) {
    return (
        <div className={`toggle-setting ${last ? "last" : ""}`}>
            <div className="toggle-icon">{icon}</div>

            <div className="setting-copy">
                <strong>{title}</strong>
                <span>{subtitle}</span>
            </div>

            <label className="switch">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => onChange(event.target.checked)}
                />
                <span className="switch-track">
                    <span />
                </span>
            </label>
        </div>
    );
}

function selectedCategoryName(categories, id) {
    const category = categories.find(
        (item) => String(item.id) === String(id),
    );

    return category?.name || "";
}

function cap(value = "") {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function ArrowLeftIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    );
}

function AlertIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16h.01" />
        </svg>
    );
}

function UploadIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 16V4M7 9l5-5 5 5" />
            <path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
    );
}

function CameraIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
            <circle cx="12" cy="13" r="3.2" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6.5 3.5 9 3l2 5-2 1.5a13 13 0 0 0 5.5 5.5L16 13l5 2-.5 2.5A3 3 0 0 1 17.5 20C10 19.5 4.5 14 4 6.5A3 3 0 0 1 6.5 3.5Z" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function EyeIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
            <circle cx="12" cy="12" r="2.5" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
    );
}

function MatchIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m8.5 12 2.2 2.2 4.8-5.1" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3 20 6v5c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6l8-3Z" />
            <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m5 12 4.5 4.5L19 7" />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="spinner">
            <circle cx="12" cy="12" r="9" opacity=".25" />
            <path d="M21 12a9 9 0 0 0-9-9" />
        </svg>
    );
}

const css = `
.talent-create-page {
    --ink: #101828;
    --ink-2: #344054;
    --muted: #667085;
    --muted-2: #98a2b3;
    --line: #e4e7ec;
    --line-soft: #eef0f3;
    --surface: #ffffff;
    --page: #f7f8fa;
    --soft: #f2f4f7;
    --blue: #5d89c8;
    --blue-dark: #4775b3;
    --blue-soft: #eef4fb;
    --green: #12a36a;
    --danger: #d92d20;
    --danger-soft: #fef3f2;
    --radius: 12px;
    background: var(--page);
    min-height: calc(100vh - 60px);
    color: var(--ink);
}

.talent-create-page * {
    box-sizing: border-box;
}

.talent-create-page button,
.talent-create-page input,
.talent-create-page select,
.talent-create-page textarea {
    font: inherit;
}

.page-container {
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 30px 0 60px;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 25px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 13px;
    color: var(--muted);
    font-size: 12px;
}

.breadcrumb a {
    color: var(--blue-dark);
    text-decoration: none;
    font-weight: 650;
}

.breadcrumb strong {
    color: var(--ink-2);
    font-weight: 600;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 18px;
}

.title-row h1 {
    margin: 0;
    font-size: 29px;
    line-height: 1.15;
    letter-spacing: -.7px;
    font-weight: 760;
}

.title-row p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 13.5px;
}

.header-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #d9e3f2;
    background: var(--blue-soft);
    color: var(--blue-dark);
    border-radius: 999px;
    padding: 7px 10px;
    font-size: 11.5px;
    font-weight: 700;
    white-space: nowrap;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--blue);
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink-2);
    text-decoration: none;
    border-radius: 9px;
    padding: 9px 13px;
    font-size: 12.5px;
    font-weight: 650;
    transition: .16s ease;
}

.back-button:hover {
    border-color: #c7d5e7;
    background: #fbfdff;
    color: var(--blue-dark);
}

.back-button svg,
.save-button svg,
.cancel-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 2;
}

.error-alert {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #f5c9c5;
    background: var(--danger-soft);
    color: var(--danger);
    padding: 12px 14px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.alert-icon {
    display: flex;
    width: 31px;
    height: 31px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff;
    flex-shrink: 0;
}

.alert-icon svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
}

.error-alert strong,
.error-alert span {
    display: block;
}

.error-alert strong {
    font-size: 12.5px;
}

.error-alert span {
    margin-top: 2px;
    font-size: 11.5px;
    opacity: .85;
}

.workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 20px;
    align-items: start;
}

.main-column,
.side-column {
    min-width: 0;
}

.panel {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 18px;
}

.panel-header {
    display: flex;
    gap: 13px;
    align-items: flex-start;
    padding: 17px 19px;
    border-bottom: 1px solid var(--line-soft);
}

.section-number {
    min-width: 31px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--blue-soft);
    color: var(--blue-dark);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .5px;
}

.panel-header h2 {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.3;
    font-weight: 750;
    color: var(--ink);
}

.panel-header p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 11.5px;
    line-height: 1.45;
}

.panel-body {
    padding: 20px;
}

.field-grid {
    display: grid;
    gap: 16px;
}

.field-grid.two {
    grid-template-columns: 1fr 1fr;
}

.field-grid.three {
    grid-template-columns: 1fr 1fr 1fr;
}

.field-grid.one {
    grid-template-columns: 1fr;
    margin-top: 17px;
}

.field {
    min-width: 0;
}

.field-label-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 7px;
}

.field label {
    color: var(--ink-2);
    font-size: 11.5px;
    font-weight: 700;
}

.required {
    color: var(--danger);
    margin-left: 3px;
}

.field-hint {
    color: var(--muted-2);
    font-size: 9.5px;
    text-align: right;
}

.field input,
.field select,
.field textarea {
    width: 100%;
    border: 1px solid #d8dde5;
    background: #fff;
    color: var(--ink);
    border-radius: 8px;
    outline: none;
    padding: 10px 11px;
    font-size: 12.5px;
    transition: border-color .15s ease, box-shadow .15s ease;
}

.field input,
.field select {
    height: 40px;
}

.field textarea {
    min-height: 145px;
    resize: vertical;
    line-height: 1.55;
}

.field input::placeholder,
.field textarea::placeholder {
    color: #b2b8c2;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .12);
}

.field input.invalid,
.field select.invalid,
.field textarea.invalid {
    border-color: #e18a83;
    box-shadow: 0 0 0 3px rgba(217, 45, 32, .07);
}

.field-error {
    display: block;
    margin-top: 5px;
    color: var(--danger);
    font-size: 10.5px;
    line-height: 1.35;
}

.character-count {
    text-align: right;
    margin-top: 5px;
    color: var(--muted-2);
    font-size: 9.5px;
}

.settings-body {
    padding-top: 4px;
    padding-bottom: 4px;
}

.setting-item,
.toggle-setting {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px 0;
}

.setting-icon,
.toggle-icon {
    width: 35px;
    height: 35px;
    flex: 0 0 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: var(--soft);
    color: var(--ink-2);
}

.setting-icon.blue {
    color: var(--blue-dark);
    background: var(--blue-soft);
}

.setting-icon svg,
.toggle-icon svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.8;
}

.setting-copy {
    min-width: 0;
    flex: 1;
}

.setting-copy strong,
.setting-copy span {
    display: block;
}

.setting-copy strong {
    color: var(--ink);
    font-size: 12px;
    font-weight: 700;
}

.setting-copy span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 10.5px;
    line-height: 1.45;
}

.compact-select {
    min-width: 130px;
    height: 37px;
    border: 1px solid var(--line);
    background: #fff;
    border-radius: 8px;
    padding: 0 9px;
    color: var(--ink-2);
    font-size: 11.5px;
    outline: none;
}

.compact-select:focus {
    border-color: var(--blue);
}

.setting-divider {
    height: 1px;
    background: var(--line-soft);
}

.toggle-setting.last {
    padding-bottom: 16px;
}

.switch {
    position: relative;
    width: 40px;
    height: 23px;
    flex: 0 0 40px;
}

.switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.switch-track {
    position: absolute;
    inset: 0;
    cursor: pointer;
    border-radius: 999px;
    background: #d0d5dd;
    transition: .2s ease;
}

.switch-track span {
    position: absolute;
    width: 17px;
    height: 17px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(16, 24, 40, .2);
    transition: .2s ease;
}

.switch input:checked + .switch-track {
    background: var(--blue);
}

.switch input:checked + .switch-track span {
    transform: translateX(17px);
}

.profile-preview .panel-header {
    padding-bottom: 14px;
}

.preview-body {
    padding: 22px 20px 20px;
    text-align: center;
}

.avatar-wrap {
    width: 94px;
    height: 94px;
    margin: 0 auto 13px;
    position: relative;
}

.avatar-placeholder,
.avatar-image {
    width: 94px;
    height: 94px;
    border-radius: 50%;
}

.avatar-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #eef4fb, #dce8f6);
    color: var(--blue-dark);
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -.5px;
    border: 4px solid #fff;
    box-shadow: 0 0 0 1px #dbe3ee;
}

.avatar-image {
    object-fit: cover;
    display: block;
    border: 4px solid #fff;
    box-shadow: 0 0 0 1px #dbe3ee;
}

.camera-button {
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: var(--blue);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.camera-button svg {
    width: 13px;
    height: 13px;
    stroke-width: 1.9;
}

.preview-body h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 760;
    letter-spacing: -.2px;
}

.preview-role {
    margin: 4px 0 11px;
    color: var(--muted);
    font-size: 11.5px;
}

.preview-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 17px;
}

.preview-tags span {
    border: 1px solid #dfe5ec;
    background: #fafbfc;
    color: var(--ink-2);
    border-radius: 999px;
    padding: 5px 8px;
    font-size: 9.5px;
    font-weight: 650;
}

.preview-contact {
    border-top: 1px solid var(--line-soft);
    padding-top: 13px;
    text-align: left;
}

.preview-contact div {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 6px 0;
}

.preview-contact svg {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
    color: var(--muted-2);
    stroke-width: 1.7;
}

.preview-contact span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--ink-2);
    font-size: 10.5px;
}

.completion-card {
    background: #101828;
    color: #fff;
    border-radius: var(--radius);
    padding: 17px;
    margin-bottom: 18px;
}

.completion-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.completion-top span,
.completion-top strong {
    display: block;
}

.completion-top span {
    color: #98a2b3;
    font-size: 10px;
    font-weight: 600;
}

.completion-top strong {
    margin-top: 3px;
    font-size: 23px;
    letter-spacing: -.6px;
}

.completion-ring {
    width: 42px;
    height: 42px;
}

.completion-ring svg {
    width: 42px;
    height: 42px;
    transform: rotate(-90deg);
}

.ring-bg,
.ring-progress {
    fill: none;
    stroke-width: 3;
}

.ring-bg {
    stroke: #344054;
}

.ring-progress {
    stroke: var(--blue);
    stroke-linecap: round;
    stroke-dasharray: 100.5;
}

.progress-track {
    height: 5px;
    margin-top: 15px;
    background: #344054;
    border-radius: 999px;
    overflow: hidden;
}

.progress-track span {
    display: block;
    height: 100%;
    background: var(--blue);
    border-radius: inherit;
    transition: width .2s ease;
}

.completion-card p {
    margin: 10px 0 0;
    color: #98a2b3;
    font-size: 10.5px;
    line-height: 1.5;
}

.upload-body {
    padding: 18px;
}

.drop-zone {
    min-height: 178px;
    border: 1.5px dashed #cfd5dd;
    border-radius: 10px;
    background: #fbfcfd;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: .18s ease;
    overflow: hidden;
}

.drop-zone:hover,
.drop-zone.dragging {
    border-color: var(--blue);
    background: var(--blue-soft);
}

.upload-symbol {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #fff;
    color: var(--blue-dark);
    border: 1px solid #dfe7f1;
    margin-bottom: 9px;
}

.upload-symbol svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.7;
}

.drop-zone strong {
    font-size: 11.5px;
    color: var(--ink-2);
}

.drop-zone > span {
    color: var(--muted);
    font-size: 10px;
    margin-top: 3px;
}

.drop-zone small {
    color: var(--muted-2);
    font-size: 9px;
    margin-top: 9px;
}

.uploaded-preview {
    position: relative;
    width: 100%;
    height: 178px;
}

.uploaded-preview img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    inset: auto 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    color: #fff;
    background: linear-gradient(transparent, rgba(16, 24, 40, .78));
    font-size: 10.5px;
    font-weight: 700;
}

.image-overlay svg {
    width: 13px;
    height: 13px;
}

.remove-photo {
    border: 0;
    background: transparent;
    color: var(--danger);
    font-size: 10.5px;
    font-weight: 650;
    cursor: pointer;
    padding: 9px 0 0;
}

.remove-photo:hover {
    text-decoration: underline;
}

.image-error {
    margin-top: 9px;
}

.info-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #dce6f2;
    background: #f7faff;
    border-radius: var(--radius);
    padding: 14px;
}

.info-card-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
    flex: 0 0 30px;
}

.info-card-icon svg {
    width: 15px;
    height: 15px;
}

.info-card strong {
    display: block;
    color: var(--ink);
    font-size: 11.5px;
}

.info-card p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
}

.bottom-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    padding: 3px 0 0;
}

.cancel-button,
.save-button {
    min-height: 41px;
    border-radius: 9px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
}

.cancel-button {
    border: 1px solid var(--line);
    background: #fff;
    color: var(--ink-2);
}

.cancel-button:hover {
    background: #fafafa;
}

.save-button {
    border: 1px solid var(--blue);
    background: var(--blue);
    color: #fff;
    box-shadow: 0 2px 4px rgba(71, 117, 179, .16);
    transition: .15s ease;
}

.save-button:hover {
    background: var(--blue-dark);
    border-color: var(--blue-dark);
}

.save-button:disabled {
    cursor: not-allowed;
    opacity: .65;
}

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@media (max-width: 1000px) {
    .workspace {
        grid-template-columns: minmax(0, 1fr) 290px;
    }

    .field-grid.three {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 820px) {
    .page-container {
        width: min(100% - 28px, 700px);
        padding-top: 22px;
    }

    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .back-button {
        align-self: flex-start;
    }

    .workspace {
        grid-template-columns: 1fr;
    }

    .side-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
    }

    .profile-preview,
    .completion-card,
    .upload-panel,
    .info-card {
        margin-bottom: 0;
    }

    .info-card {
        grid-column: 1 / -1;
    }
}

@media (max-width: 600px) {
    .page-container {
        width: calc(100% - 20px);
        padding-bottom: 35px;
    }

    .title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 9px;
    }

    .title-row h1 {
        font-size: 24px;
    }

    .field-grid.two,
    .field-grid.three {
        grid-template-columns: 1fr;
    }

    .panel-header {
        padding: 15px;
    }

    .panel-body {
        padding: 16px 15px;
    }

    .side-column {
        display: flex;
        flex-direction: column;
    }

    .profile-preview,
    .completion-card,
    .upload-panel,
    .info-card {
        margin-bottom: 18px;
    }

    .setting-item,
    .toggle-setting {
        align-items: flex-start;
    }

    .compact-select {
        min-width: 110px;
    }

    .bottom-actions {
        position: sticky;
        bottom: 10px;
        z-index: 10;
        padding: 9px;
        background: rgba(247, 248, 250, .94);
        backdrop-filter: blur(10px);
        border: 1px solid var(--line);
        border-radius: 11px;
    }

    .cancel-button,
    .save-button {
        flex: 1;
    }
}

@media (max-width: 420px) {
    .header-status {
        display: none;
    }

    .field-hint {
        display: none;
    }

    .compact-select {
        min-width: 0;
        width: 112px;
    }

    .setting-copy span {
        max-width: 180px;
    }
}
`;

