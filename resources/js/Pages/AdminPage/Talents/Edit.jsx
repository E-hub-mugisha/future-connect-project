import { useEffect, useMemo, useRef, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Edit({ talent, categories = [] }) {
    const routes = {
        index: () => route("admin.talents.index"),
        show: (id) => route("admin.talents.show", id),
        update: (id) => route("admin.talents.update", id),
    };

    const initialValues = useMemo(
        () => ({
            name: talent?.name ?? "",
            email: talent?.email ?? "",
            phone: talent?.phone ?? "",
            address: talent?.address ?? "",
            category_id: talent?.category_id ?? "",
            level: talent?.level ?? "",
            language: talent?.language ?? "",
            description: talent?.description ?? "",
            image: null,
            status: talent?.status ?? "active",
            featured: Boolean(talent?.featured),
            matched: Boolean(talent?.matched),
        }),
        [talent],
    );

    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform,
        isDirty,
    } = useForm(initialValues);

    const [preview, setPreview] = useState(null);
    const [dragging, setDragging] = useState(false);

    const fileInputRef = useRef(null);

    const errorCount = Object.keys(errors || {}).length;

    useEffect(() => {
        return () => {
            if (preview?.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleImage = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            return;
        }

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

    const removeNewImage = (event) => {
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

        transform((formData) => ({
            ...formData,
            _method: "put",
        }));

        post(routes.update(talent.id), {
            forceFormData: true,
            preserveScroll: true,
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

    const selectedCategory = categories.find(
        (category) =>
            String(category.id) === String(data.category_id),
    );

    const completionFields = [
        data.name,
        data.email,
        data.phone,
        data.address,
        data.category_id,
        data.level,
        data.language,
        data.description,
        talent.image || data.image,
    ];

    const completion = Math.round(
        (completionFields.filter(Boolean).length /
            completionFields.length) *
            100,
    );

    const currentStatus = String(data.status || "inactive").toLowerCase();

    return (
        <AdminLayout>
            <Head title={`Edit ${talent?.name || "Talent"}`} />

            <style>{css}</style>

            <div className="talent-edit-page">
                <div className="page-container">

                    {/* =====================================================
                        HEADER
                    ====================================================== */}

                    <header className="page-header">
                        <div className="header-main">
                            <div className="breadcrumb">
                                <Link href={routes.index()}>
                                    Talents
                                </Link>

                                <span>/</span>

                                <Link href={routes.show(talent.id)}>
                                    {talent?.name || "Profile"}
                                </Link>

                                <span>/</span>

                                <strong>Edit</strong>
                            </div>

                            <div className="title-row">
                                <div>
                                    <div className="eyebrow">
                                        Talent management
                                    </div>

                                    <h1>
                                        Edit talent profile
                                    </h1>

                                    <p>
                                        Update professional information,
                                        visibility and profile presentation.
                                    </p>
                                </div>

                                <div className={`header-status ${currentStatus}`}>
                                    <span className="status-dot" />

                                    {cap(currentStatus)}

                                    <span className="status-divider" />

                                    ID #{talent.id}
                                </div>
                            </div>
                        </div>

                        <div className="header-actions">
                            <Link
                                href={routes.show(talent.id)}
                                className="secondary-header-button"
                            >
                                <EyeIcon />
                                View profile
                            </Link>

                            <Link
                                href={routes.index()}
                                className="back-button"
                            >
                                <ArrowLeftIcon />
                                Back to talents
                            </Link>
                        </div>
                    </header>

                    {/* =====================================================
                        UPDATE NOTICE
                    ====================================================== */}

                    <div className="edit-context">
                        <div className="edit-context-icon">
                            <EditIcon />
                        </div>

                        <div>
                            <strong>
                                You are editing an existing talent profile
                            </strong>

                            <span>
                                Changes are saved only after you select
                                <b> Update talent profile</b>.
                            </span>
                        </div>

                        <div className="edit-context-meta">
                            Last updated{" "}
                            <strong>
                                {timeAgo(talent.updated_at)}
                            </strong>
                        </div>
                    </div>

                    {/* =====================================================
                        ERRORS
                    ====================================================== */}

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
                                    Review the highlighted fields before
                                    updating this profile.
                                </span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={submit}>

                        <div className="workspace">

                            {/* =================================================
                                MAIN COLUMN
                            ================================================== */}

                            <main className="main-column">

                                {/* PERSONAL INFORMATION */}

                                <section className="panel">
                                    <PanelHeader
                                        number="01"
                                        title="Personal information"
                                        description="Core contact details for this talent."
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
                                                        errors.name
                                                            ? "invalid"
                                                            : ""
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
                                                        errors.email
                                                            ? "invalid"
                                                            : ""
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
                                                        errors.phone
                                                            ? "invalid"
                                                            : ""
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
                                                        errors.address
                                                            ? "invalid"
                                                            : ""
                                                    }
                                                />
                                            </Field>

                                        </div>
                                    </div>
                                </section>

                                {/* PROFESSIONAL PROFILE */}

                                <section className="panel">
                                    <PanelHeader
                                        number="02"
                                        title="Professional profile"
                                        description="Manage expertise, experience level and professional identity."
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

                                                    {categories.map(
                                                        (category) => (
                                                            <option
                                                                key={category.id}
                                                                value={
                                                                    category.id
                                                                }
                                                            >
                                                                {category.name}
                                                            </option>
                                                        ),
                                                    )}
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
                                                        errors.level
                                                            ? "invalid"
                                                            : ""
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
                                                hint="Keep the description concise and professional."
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
                                                    {
                                                        data.description
                                                            .length
                                                    }{" "}
                                                    characters
                                                </div>
                                            </Field>

                                        </div>
                                    </div>
                                </section>

                                {/* VISIBILITY */}

                                <section className="panel">
                                    <PanelHeader
                                        number="03"
                                        title="Visibility & placement"
                                        description="Control how this profile is presented across the platform."
                                    />

                                    <div className="panel-body settings-body">

                                        <div className="setting-item">

                                            <div className="setting-icon blue">
                                                <EyeIcon />
                                            </div>

                                            <div className="setting-copy">
                                                <strong>
                                                    Profile status
                                                </strong>

                                                <span>
                                                    Decide whether this profile
                                                    is available in the talent
                                                    directory.
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
                                                setData(
                                                    "featured",
                                                    value,
                                                )
                                            }
                                        />

                                        <div className="setting-divider" />

                                        <Toggle
                                            icon={<MatchIcon />}
                                            title="Matched"
                                            subtitle="Mark this talent as successfully matched or placed."
                                            checked={data.matched}
                                            onChange={(value) =>
                                                setData(
                                                    "matched",
                                                    value,
                                                )
                                            }
                                            last
                                        />

                                    </div>
                                </section>

                                {/* ACTIVITY */}

                                <section className="panel">
                                    <PanelHeader
                                        number="04"
                                        title="Profile activity"
                                        description="Read-only activity associated with this talent."
                                    />

                                    <div className="activity-grid">

                                        <ActivityStat
                                            icon={<SkillIcon />}
                                            value={
                                                talent.skills?.length ?? 0
                                            }
                                            label="Skills"
                                        />

                                        <ActivityStat
                                            icon={<StoryIcon />}
                                            value={
                                                talent.stories?.length ?? 0
                                            }
                                            label="Stories"
                                        />

                                        <ActivityStat
                                            icon={<FeedbackIcon />}
                                            value={
                                                talent.feedback?.length ?? 0
                                            }
                                            label="Feedback"
                                        />

                                        <ActivityStat
                                            icon={<ConnectionIcon />}
                                            value={
                                                talent.connections?.length ?? 0
                                            }
                                            label="Connections"
                                        />

                                    </div>

                                    <div className="activity-note">
                                        <InfoIcon />
                                        Activity is managed from the
                                        corresponding talent sections.
                                    </div>
                                </section>

                                {/* ACTIONS */}

                                <div className="bottom-actions">

                                    <div className="save-state">
                                        {isDirty ? (
                                            <>
                                                <span className="unsaved-dot" />
                                                Unsaved changes
                                            </>
                                        ) : (
                                            <>
                                                <CheckSmallIcon />
                                                All changes saved
                                            </>
                                        )}
                                    </div>

                                    <div className="action-buttons">

                                        <Link
                                            href={routes.show(talent.id)}
                                            className="cancel-button"
                                        >
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
                                                    Updating profile…
                                                </>
                                            ) : (
                                                <>
                                                    <CheckIcon />
                                                    Update talent profile
                                                </>
                                            )}
                                        </button>

                                    </div>
                                </div>

                            </main>

                            {/* =================================================
                                SIDEBAR
                            ================================================== */}

                            <aside className="side-column">

                                {/* PROFILE PREVIEW */}

                                <section className="profile-preview panel">

                                    <PanelHeader
                                        number="PREVIEW"
                                        title="Profile preview"
                                        description="Live representation of this talent record."
                                    />

                                    <div className="preview-body">

                                        <div className="avatar-wrap">

                                            {preview ? (
                                                <img
                                                    src={preview}
                                                    alt="New profile preview"
                                                    className="avatar-image"
                                                />
                                            ) : talent.image ? (
                                                <img
                                                    src={talent.image}
                                                    alt={talent.name}
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
                                                aria-label="Change profile photo"
                                            >
                                                <CameraIcon />
                                            </button>

                                        </div>

                                        <h2>
                                            {data.name || "Talent name"}
                                        </h2>

                                        <p className="preview-role">
                                            {selectedCategory?.name ||
                                                "Professional category"}
                                        </p>

                                        <div className="preview-status">
                                            <span
                                                className={`preview-status-dot ${currentStatus}`}
                                            />

                                            {cap(currentStatus)}
                                        </div>

                                        <div className="preview-tags">

                                            {data.level && (
                                                <span>
                                                    {cap(data.level)}
                                                </span>
                                            )}

                                            {data.language && (
                                                <span>
                                                    {data.language}
                                                </span>
                                            )}

                                            {data.featured && (
                                                <span className="featured-tag">
                                                    Featured
                                                </span>
                                            )}

                                            {!data.level &&
                                                !data.language && (
                                                    <span>
                                                        Profile details
                                                        pending
                                                    </span>
                                                )}

                                        </div>

                                        <div className="preview-contact">

                                            {data.email && (
                                                <div>
                                                    <MailIcon />
                                                    <span>
                                                        {data.email}
                                                    </span>
                                                </div>
                                            )}

                                            {data.phone && (
                                                <div>
                                                    <PhoneIcon />
                                                    <span>
                                                        {data.phone}
                                                    </span>
                                                </div>
                                            )}

                                            {data.address && (
                                                <div>
                                                    <PinIcon />
                                                    <span>
                                                        {data.address}
                                                    </span>
                                                </div>
                                            )}

                                        </div>

                                    </div>
                                </section>

                                {/* READINESS */}

                                <section className="completion-card">

                                    <div className="completion-top">

                                        <div>
                                            <span>
                                                Profile readiness
                                            </span>

                                            <strong>
                                                {completion}%
                                            </strong>
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
                                                            (100.5 *
                                                                completion) /
                                                                100,
                                                    }}
                                                />

                                            </svg>
                                        </div>
                                    </div>

                                    <div className="progress-track">
                                        <span
                                            style={{
                                                width: `${completion}%`,
                                            }}
                                        />
                                    </div>

                                    <p>
                                        Keep important profile information
                                        complete to improve the quality of the
                                        talent record.
                                    </p>

                                </section>

                                {/* PHOTO */}

                                <section className="panel upload-panel">

                                    <PanelHeader
                                        number="PHOTO"
                                        title="Profile photo"
                                        description="Replace the current image with a new professional photo."
                                    />

                                    <div className="upload-body">

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp"
                                            onChange={handleImageChange}
                                            hidden
                                        />

                                        {/* Current image */}

                                        {!preview && talent.image && (
                                            <div className="current-photo">

                                                <img
                                                    src={talent.image}
                                                    alt={talent.name}
                                                />

                                                <div>
                                                    <strong>
                                                        Current photo
                                                    </strong>

                                                    <span>
                                                        {basename(
                                                            talent.image,
                                                        )}
                                                    </span>
                                                </div>

                                            </div>
                                        )}

                                        <div
                                            className={`drop-zone ${
                                                dragging
                                                    ? "dragging"
                                                    : ""
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
                                                        Replace photo
                                                    </div>

                                                </div>
                                            ) : (
                                                <>
                                                    <div className="upload-symbol">
                                                        <UploadIcon />
                                                    </div>

                                                    <strong>
                                                        Drop new image here
                                                    </strong>

                                                    <span>
                                                        or click to browse
                                                    </span>

                                                    <small>
                                                        JPG, PNG or WEBP ·
                                                        Max 2 MB
                                                    </small>
                                                </>
                                            )}

                                        </div>

                                        {preview && (
                                            <button
                                                type="button"
                                                className="remove-photo"
                                                onClick={removeNewImage}
                                            >
                                                Remove new photo
                                            </button>
                                        )}

                                        {errors.image && (
                                            <span className="field-error image-error">
                                                {errors.image}
                                            </span>
                                        )}

                                    </div>
                                </section>

                                {/* RECORD DETAILS */}

                                <section className="panel record-panel">

                                    <PanelHeader
                                        number="RECORD"
                                        title="Record information"
                                        description="System information for this profile."
                                    />

                                    <div className="record-body">

                                        <RecordRow
                                            label="Profile ID"
                                            value={`#${talent.id}`}
                                        />

                                        <RecordRow
                                            label="Created"
                                            value={formatDate(
                                                talent.created_at,
                                            )}
                                        />

                                        <RecordRow
                                            label="Last updated"
                                            value={timeAgo(
                                                talent.updated_at,
                                            )}
                                        />

                                    </div>
                                </section>

                                {/* SECURITY / INFO */}

                                <section className="info-card">

                                    <div className="info-card-icon">
                                        <ShieldIcon />
                                    </div>

                                    <div>
                                        <strong>
                                            Admin-managed profile
                                        </strong>

                                        <p>
                                            This record is managed by platform
                                            administrators. Profile activity,
                                            connections and feedback remain
                                            available independently from these
                                            editable details.
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

/* ============================================================
   COMPONENTS
============================================================ */

function PanelHeader({
    number,
    title,
    description,
}) {
    return (
        <div className="panel-header">
            <div className="section-number">
                {number}
            </div>

            <div>
                <h2>{title}</h2>

                <p>{description}</p>
            </div>
        </div>
    );
}

function Field({
    label,
    required,
    error,
    hint,
    children,
}) {
    return (
        <div className="field">

            <div className="field-label-row">
                <label>
                    {label}

                    {required && (
                        <span className="required">
                            *
                        </span>
                    )}
                </label>

                {hint && (
                    <span className="field-hint">
                        {hint}
                    </span>
                )}
            </div>

            {children}

            {error && (
                <span className="field-error">
                    {error}
                </span>
            )}

        </div>
    );
}

function Toggle({
    icon,
    title,
    subtitle,
    checked,
    onChange,
    last = false,
}) {
    return (
        <div
            className={`toggle-setting ${
                last ? "last" : ""
            }`}
        >
            <div className="toggle-icon">
                {icon}
            </div>

            <div className="setting-copy">
                <strong>{title}</strong>

                <span>{subtitle}</span>
            </div>

            <label className="switch">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) =>
                        onChange(
                            event.target.checked,
                        )
                    }
                />

                <span className="switch-track">
                    <span />
                </span>
            </label>
        </div>
    );
}

function ActivityStat({
    icon,
    value,
    label,
}) {
    return (
        <div className="activity-stat">

            <div className="activity-icon">
                {icon}
            </div>

            <strong>{value}</strong>

            <span>{label}</span>

        </div>
    );
}

function RecordRow({
    label,
    value,
}) {
    return (
        <div className="record-row">

            <span>{label}</span>

            <strong>{value}</strong>

        </div>
    );
}

/* ============================================================
   HELPERS
============================================================ */

function cap(value = "") {
    return value
        ? value.charAt(0).toUpperCase() +
              value.slice(1)
        : value;
}

function basename(path) {
    if (!path) return "";

    return path.split("/").pop();
}

function formatDate(
    value,
    withTime = false,
) {
    if (!value) return "N/A";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "N/A";
    }

    const options = withTime
        ? {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          }
        : {
              day: "2-digit",
              month: "short",
              year: "numeric",
          };

    return date.toLocaleDateString(
        "en-GB",
        options,
    );
}

function timeAgo(value) {
    if (!value) return "N/A";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "N/A";
    }

    const seconds = Math.max(
        0,
        Math.floor(
            (Date.now() - date.getTime()) /
                1000,
        ),
    );

    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];

    for (const [label, secondsPerUnit] of units) {
        const valueInUnit = Math.floor(
            seconds / secondsPerUnit,
        );

        if (valueInUnit >= 1) {
            return `${valueInUnit} ${label}${
                valueInUnit > 1 ? "s" : ""
            } ago`;
        }
    }

    return "just now";
}

/* ============================================================
   ICONS
============================================================ */

function ArrowLeftIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    );
}

function EditIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        </svg>
    );
}

function EyeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
            <circle cx="12" cy="12" r="2.5" />
        </svg>
    );
}

function AlertIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16h.01" />
        </svg>
    );
}

function UploadIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M12 16V4M7 9l5-5 5 5" />
            <path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
    );
}

function CameraIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
            <circle cx="12" cy="13" r="3.2" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
            />
            <path d="m4 7 8 6 8-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M6.5 3.5 9 3l2 5-2 1.5a13 13 0 0 0 5.5 5.5L16 13l5 2-.5 2.5A3 3 0 0 1 17.5 20C10 19.5 4.5 14 4 6.5A3 3 0 0 1 6.5 3.5Z" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
    );
}

function MatchIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="m8.5 12 2.2 2.2 4.8-5.1" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M12 3 20 6v5c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6l8-3Z" />
            <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="m5 12 4.5 4.5L19 7" />
        </svg>
    );
}

function CheckSmallIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="m5 12 4 4 10-10" />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="spinner"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                opacity=".25"
            />
            <path d="M21 12a9 9 0 0 0-9-9" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 10v6M12 7h.01" />
        </svg>
    );
}

function SkillIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M4 19V9l8-4 8 4v10" />
            <path d="M8 19v-6h8v6" />
        </svg>
    );
}

function StoryIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M5 4h14v16H5z" />
            <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
    );
}

function FeedbackIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z" />
            <path d="M8 11h.01M12 11h.01M16 11h.01" />
        </svg>
    );
}

function ConnectionIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <circle cx="8" cy="8" r="3" />
            <circle cx="16" cy="16" r="3" />
            <path d="m10.5 10.5 3 3" />
        </svg>
    );
}

const css = `
.talent-edit-page {
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

    min-height: calc(100vh - 60px);
    background: var(--page);
    color: var(--ink);
}

.talent-edit-page *,
.talent-edit-page *::before,
.talent-edit-page *::after {
    box-sizing: border-box;
}

.talent-edit-page button,
.talent-edit-page input,
.talent-edit-page select,
.talent-edit-page textarea {
    font: inherit;
}

/* ============================================================
   PAGE
============================================================ */

.page-container {
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 30px 0 60px;
}

/* ============================================================
   HEADER
============================================================ */

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 20px;
}

.header-main {
    min-width: 0;
}

.breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
    color: var(--muted);
    font-size: 12px;
}

.breadcrumb a {
    color: var(--blue-dark);
    text-decoration: none;
    font-weight: 650;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.breadcrumb strong {
    color: var(--ink-2);
    font-weight: 650;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 18px;
}

.eyebrow {
    margin-bottom: 4px;
    color: var(--blue-dark);
    font-size: 9.5px;
    text-transform: uppercase;
    letter-spacing: .09em;
    font-weight: 800;
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
    padding: 7px 11px;
    font-size: 10.5px;
    font-weight: 750;
    white-space: nowrap;
}

.header-status.inactive {
    background: #f2f4f7;
    border-color: var(--line);
    color: var(--muted);
}

.header-status.pending {
    background: #fffaeb;
    border-color: #fedf89;
    color: #b54708;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
}

.status-divider {
    width: 1px;
    height: 12px;
    background: currentColor;
    opacity: .2;
}

.header-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.secondary-header-button,
.back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink-2);
    text-decoration: none;
    border-radius: 9px;
    padding: 0 13px;
    font-size: 12px;
    font-weight: 650;
    transition: .16s ease;
}

.secondary-header-button:hover {
    border-color: #c7d5e7;
    background: var(--blue-soft);
    color: var(--blue-dark);
}

.back-button:hover {
    border-color: #c7d5e7;
    background: #fbfdff;
    color: var(--blue-dark);
}

.secondary-header-button svg,
.back-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.8;
}

/* ============================================================
   EDIT CONTEXT
============================================================ */

.edit-context {
    display: flex;
    align-items: center;
    gap: 11px;
    border: 1px solid #dce6f2;
    background: #f8fbff;
    border-radius: 10px;
    padding: 11px 13px;
    margin-bottom: 18px;
}

.edit-context-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
    flex: 0 0 32px;
}

.edit-context-icon svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.8;
}

.edit-context > div:nth-child(2) {
    min-width: 0;
    flex: 1;
}

.edit-context strong,
.edit-context span {
    display: block;
}

.edit-context strong {
    font-size: 11.5px;
    font-weight: 750;
    color: var(--ink);
}

.edit-context span {
    margin-top: 2px;
    color: var(--muted);
    font-size: 10.5px;
}

.edit-context span b {
    color: var(--blue-dark);
}

.edit-context-meta {
    color: var(--muted);
    font-size: 10px;
    white-space: nowrap;
}

.edit-context-meta strong {
    display: inline;
    color: var(--ink-2);
}

/* ============================================================
   ERRORS
============================================================ */

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

/* ============================================================
   WORKSPACE
============================================================ */

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

/* ============================================================
   PANELS
============================================================ */

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
    min-width: 34px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--blue-soft);
    color: var(--blue-dark);
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: .4px;
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

/* ============================================================
   FORM
============================================================ */

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
    transition:
        border-color .15s ease,
        box-shadow .15s ease,
        background .15s ease;
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

.field input:hover,
.field select:hover,
.field textarea:hover {
    border-color: #c5ccd6;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(93,137,200,.12);
}

.field input.invalid,
.field select.invalid,
.field textarea.invalid {
    border-color: #e18a83;
    box-shadow: 0 0 0 3px rgba(217,45,32,.07);
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

/* ============================================================
   SETTINGS
============================================================ */

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

/* ============================================================
   SWITCH
============================================================ */

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
    box-shadow: 0 1px 3px rgba(16,24,40,.2);
    transition: .2s ease;
}

.switch input:checked + .switch-track {
    background: var(--blue);
}

.switch input:checked + .switch-track span {
    transform: translateX(17px);
}

/* ============================================================
   PROFILE PREVIEW
============================================================ */

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
    background: linear-gradient(
        145deg,
        #eef4fb,
        #dce8f6
    );
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

.camera-button:hover {
    background: var(--blue-dark);
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
    margin: 4px 0 8px;
    color: var(--muted);
    font-size: 11.5px;
}

.preview-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 9px;
    border-radius: 999px;
    background: #f2f4f7;
    color: var(--ink-2);
    font-size: 9.5px;
    font-weight: 700;
    margin-bottom: 12px;
}

.preview-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #98a2b3;
}

.preview-status-dot.active {
    background: var(--green);
}

.preview-status-dot.pending {
    background: #f79009;
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

.preview-tags .featured-tag {
    border-color: #d9e3f2;
    background: var(--blue-soft);
    color: var(--blue-dark);
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

/* ============================================================
   COMPLETION
============================================================ */

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
    transition: stroke-dashoffset .3s ease;
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
    transition: width .25s ease;
}

.completion-card p {
    margin: 10px 0 0;
    color: #98a2b3;
    font-size: 10.5px;
    line-height: 1.5;
}

/* ============================================================
   PHOTO UPLOAD
============================================================ */

.upload-body {
    padding: 18px;
}

.current-photo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    margin-bottom: 10px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #fafbfc;
}

.current-photo img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 7px;
    flex: 0 0 48px;
}

.current-photo strong,
.current-photo span {
    display: block;
}

.current-photo strong {
    color: var(--ink-2);
    font-size: 10.5px;
}

.current-photo span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 9.5px;
    word-break: break-all;
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
    background: linear-gradient(
        transparent,
        rgba(16,24,40,.78)
    );
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

/* ============================================================
   RECORD
============================================================ */

.record-body {
    padding: 7px 18px;
}

.record-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 11px 0;
    border-bottom: 1px solid var(--line-soft);
}

.record-row:last-child {
    border-bottom: 0;
}

.record-row span {
    color: var(--muted);
    font-size: 10.5px;
}

.record-row strong {
    color: var(--ink-2);
    font-size: 10.5px;
    text-align: right;
}

/* ============================================================
   ACTIVITY
============================================================ */

.activity-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 18px;
}

.activity-stat {
    text-align: center;
    padding: 14px 8px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #fafbfc;
}

.activity-icon {
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
}

.activity-icon svg {
    width: 14px;
    height: 14px;
}

.activity-stat strong,
.activity-stat span {
    display: block;
}

.activity-stat strong {
    font-size: 20px;
    line-height: 1;
    font-weight: 800;
}

.activity-stat span {
    margin-top: 5px;
    color: var(--muted);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .05em;
    font-weight: 700;
}

.activity-note {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-top: 1px solid var(--line-soft);
    background: #fafbfc;
    color: var(--muted);
    font-size: 10px;
}

.activity-note svg {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
}

/* ============================================================
   INFO
============================================================ */

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

/* ============================================================
   BOTTOM ACTIONS
============================================================ */

.bottom-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 3px 0 0;
}

.save-state {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 600;
}

.unsaved-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f79009;
}

.save-state svg {
    width: 13px;
    height: 13px;
    color: var(--green);
}

.action-buttons {
    display: flex;
    gap: 9px;
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
    box-shadow: 0 2px 4px rgba(71,117,179,.16);
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

.save-button svg,
.cancel-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 2;
}

/* ============================================================
   SPINNER
============================================================ */

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* ============================================================
   RESPONSIVE
============================================================ */

@media (max-width: 1050px) {
    .workspace {
        grid-template-columns:
            minmax(0, 1fr)
            300px;
    }

    .field-grid.three {
        grid-template-columns:
            1fr 1fr;
    }

    .activity-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }
}

@media (max-width: 850px) {
    .page-container {
        width: min(100% - 28px, 720px);
        padding-top: 22px;
    }

    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .header-actions {
        width: 100%;
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
    .record-panel,
    .info-card {
        margin-bottom: 0;
    }

    .info-card {
        grid-column: 1 / -1;
    }
}

@media (max-width: 650px) {
    .page-container {
        width: calc(100% - 20px);
        padding-bottom: 35px;
    }

    .title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }

    .title-row h1 {
        font-size: 24px;
    }

    .header-status {
        display: none;
    }

    .edit-context {
        align-items: flex-start;
    }

    .edit-context-meta {
        display: none;
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
    .record-panel,
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

    .activity-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .bottom-actions {
        position: sticky;
        bottom: 10px;
        z-index: 20;
        padding: 9px;
        background: rgba(247,248,250,.94);
        backdrop-filter: blur(10px);
        border: 1px solid var(--line);
        border-radius: 11px;
    }

    .save-state {
        display: none;
    }

    .action-buttons {
        width: 100%;
    }

    .cancel-button,
    .save-button {
        flex: 1;
    }
}

@media (max-width: 430px) {
    .header-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .secondary-header-button,
    .back-button {
        justify-content: center;
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

    .activity-grid {
        gap: 7px;
        padding: 13px;
    }

    .activity-stat {
        padding: 11px 5px;
    }
}
`;