import { Head, Link, router, useForm } from "@inertiajs/react";
import { useMemo, useRef, useState } from "react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Show({
    talent,
    flash,
    categories = [],
}) {
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [actionMenuOpen, setActionMenuOpen] = useState(false);

    const status = (talent.status || "inactive").toLowerCase();

    const routes = {
        index: () => route("admin.talents.index"),
        edit: (id) => route("admin.talents.edit", id),
        destroy: (id) => route("admin.talents.destroy", id),

        update: (id) => route("admin.talents.update", id),

        toggleStatus: (id) =>
            route("admin.talents.toggle-status", id),

        toggleFeatured: (id) =>
            route("admin.talents.toggle-featured", id),

        approve: (id) =>
            route("admin.talents.approve", id),
    };

    const stats = {
        skills: talent.skills?.length ?? 0,
        stories: talent.stories?.length ?? 0,
        feedback: talent.feedback?.length ?? 0,
        connections: talent.connections?.length ?? 0,
        courses: talent.courses?.length ?? 0,
        supports: talent.supports?.length ?? 0,
    };

    const averageRating = useMemo(() => {
        const ratings = (talent.feedback || [])
            .map((item) => Number(item.rating))
            .filter((rating) => rating > 0);

        if (!ratings.length) return 0;

        return (
            ratings.reduce((sum, rating) => sum + rating, 0) /
            ratings.length
        ).toFixed(1);
    }, [talent.feedback]);

    const completeness = useMemo(() => {
        const fields = [
            talent.name,
            talent.email,
            talent.phone,
            talent.address,
            talent.language,
            talent.category_id || talent.category?.id,
            talent.level,
            talent.description,
            talent.image,
        ];

        return Math.round(
            (fields.filter(Boolean).length / fields.length) * 100,
        );
    }, [talent]);

    const destroyTalent = () => {
        router.delete(routes.destroy(talent.id), {
            preserveScroll: true,
        });
    };

    const toggleStatus = () => {
        router.patch(
            routes.toggleStatus(talent.id),
            {},
            {
                preserveScroll: true,
            },
        );
    };

    const toggleFeatured = () => {
        router.patch(
            routes.toggleFeatured(talent.id),
            {},
            {
                preserveScroll: true,
            },
        );
    };

    const approveTalent = () => {
        router.post(
            routes.approve(talent.id),
            {},
            {
                preserveScroll: true,
            },
        );
    };

    return (
        <AdminLayout>
            <Head title={`${talent.name} — Talent Profile`} />

            <style>{css}</style>

            <div className="talent-profile-page">
                {/* Flash */}
                {flash?.success && (
                    <div className="flash-message flash-success">
                        <CheckIcon />
                        <span>{flash.success}</span>
                    </div>
                )}

                {flash?.error && (
                    <div className="flash-message flash-error">
                        <AlertIcon />
                        <span>{flash.error}</span>
                    </div>
                )}

                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link href={routes.index()}>
                        Talent
                    </Link>

                    <ChevronIcon />

                    <span>{talent.name}</span>
                </div>

                {/* Main Hero */}
                <section className="profile-hero">
                    <div className="hero-cover" />

                    <div className="hero-content">
                        <div className="profile-image-wrapper">
                            {talent.image ? (
                                <img
                                    src={talent.image}
                                    alt={talent.name}
                                    className="profile-image"
                                />
                            ) : (
                                <div className="profile-image profile-image-placeholder">
                                    {initials(talent.name)}
                                </div>
                            )}

                            <button
                                type="button"
                                className="image-edit-button"
                                onClick={() => setEditOpen(true)}
                                title="Change profile photo"
                            >
                                <CameraIcon />
                            </button>
                        </div>

                        <div className="hero-main">
                            <div className="status-row">
                                <StatusBadge status={status} />

                                {talent.featured && (
                                    <span className="featured-badge">
                                        <StarIcon />
                                        Featured
                                    </span>
                                )}

                                {talent.matched && (
                                    <span className="matched-badge">
                                        <CheckIcon />
                                        Matched
                                    </span>
                                )}

                                {talent.level && (
                                    <span className="level-badge">
                                        {cap(talent.level)}
                                    </span>
                                )}
                            </div>

                            <h1>{talent.name}</h1>

                            <div className="hero-subtitle">
                                <span>
                                    {talent.category?.name ||
                                        "Professional Talent"}
                                </span>

                                {talent.language && (
                                    <>
                                        <Dot />
                                        <span>{talent.language}</span>
                                    </>
                                )}
                            </div>

                            <div className="hero-contact">
                                {talent.email && (
                                    <span>
                                        <MailIcon />
                                        {talent.email}
                                    </span>
                                )}

                                {talent.phone && (
                                    <span>
                                        <PhoneIcon />
                                        {talent.phone}
                                    </span>
                                )}

                                {talent.address && (
                                    <span>
                                        <PinIcon />
                                        {talent.address}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="hero-actions">
                            <button
                                type="button"
                                className="primary-action"
                                onClick={() => setEditOpen(true)}
                            >
                                <PencilIcon />
                                Edit Profile
                            </button>

                            <div className="action-row">
                                <button
                                    type="button"
                                    className="secondary-action"
                                    onClick={toggleStatus}
                                >
                                    {status === "active" ? (
                                        <>
                                            <PauseIcon />
                                            Deactivate
                                        </>
                                    ) : (
                                        <>
                                            <PlayIcon />
                                            Activate
                                        </>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    className="secondary-action"
                                    onClick={toggleFeatured}
                                >
                                    <StarIcon />
                                    {talent.featured
                                        ? "Unfeature"
                                        : "Feature"}
                                </button>

                                <div className="more-wrapper">
                                    <button
                                        type="button"
                                        className="icon-action"
                                        onClick={() =>
                                            setActionMenuOpen(
                                                !actionMenuOpen,
                                            )
                                        }
                                    >
                                        <MoreIcon />
                                    </button>

                                    {actionMenuOpen && (
                                        <div className="action-menu">
                                            <Link
                                                href={routes.edit(
                                                    talent.id,
                                                )}
                                            >
                                                <PencilIcon />
                                                Open full editor
                                            </Link>

                                            {!talent.user_id &&
                                                talent.email && (
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            approveTalent
                                                        }
                                                    >
                                                        <CheckIcon />
                                                        Approve talent
                                                    </button>
                                                )}

                                            <button
                                                type="button"
                                                className="danger-menu-item"
                                                onClick={() => {
                                                    setActionMenuOpen(
                                                        false,
                                                    );
                                                    setDeleteOpen(
                                                        true,
                                                    );
                                                }}
                                            >
                                                <TrashIcon />
                                                Delete profile
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profile overview strip */}
                <section className="overview-strip">
                    <div className="overview-item">
                        <span className="overview-label">
                            Profile completeness
                        </span>

                        <div className="completion">
                            <div className="completion-track">
                                <div
                                    className="completion-fill"
                                    style={{
                                        width: `${completeness}%`,
                                    }}
                                />
                            </div>

                            <strong>{completeness}%</strong>
                        </div>
                    </div>

                    <div className="overview-divider" />

                    <OverviewItem
                        icon={<CalendarIcon />}
                        label="Member since"
                        value={formatDate(talent.created_at)}
                    />

                    <div className="overview-divider" />

                    <OverviewItem
                        icon={<StarIcon />}
                        label="Average rating"
                        value={
                            averageRating > 0
                                ? `${averageRating} / 5`
                                : "No ratings"
                        }
                    />

                    <div className="overview-divider" />

                    <OverviewItem
                        icon={<ClockIcon />}
                        label="Last updated"
                        value={timeAgo(talent.updated_at)}
                    />
                </section>

                {/* Statistics */}
                <section className="stats-grid">
                    <StatCard
                        label="Skills"
                        value={stats.skills}
                        icon={<SkillIcon />}
                        accent
                    />

                    <StatCard
                        label="Stories"
                        value={stats.stories}
                        icon={<BookIcon />}
                    />

                    <StatCard
                        label="Feedback"
                        value={stats.feedback}
                        icon={<ChatIcon />}
                    />

                    <StatCard
                        label="Connections"
                        value={stats.connections}
                        icon={<UsersIcon />}
                    />

                    <StatCard
                        label="Courses"
                        value={stats.courses}
                        icon={<CapIcon />}
                    />

                    <StatCard
                        label="Supports"
                        value={stats.supports}
                        icon={<HeartIcon />}
                    />
                </section>

                {/* Main Content */}
                <div className="content-layout">
                    {/* LEFT */}
                    <main className="main-column">
                        <SectionCard
                            icon={<UserIcon />}
                            title="Professional Profile"
                            subtitle="Personal and professional information"
                            action={
                                <button
                                    className="card-action"
                                    onClick={() =>
                                        setEditOpen(true)
                                    }
                                >
                                    <PencilIcon />
                                    Edit
                                </button>
                            }
                        >
                            <div className="profile-information-grid">
                                <DetailItem
                                    label="Full name"
                                    value={talent.name}
                                    icon={<UserIcon />}
                                />

                                <DetailItem
                                    label="Email address"
                                    value={talent.email}
                                    empty="Not provided"
                                    icon={<MailIcon />}
                                />

                                <DetailItem
                                    label="Phone number"
                                    value={talent.phone}
                                    empty="Not provided"
                                    icon={<PhoneIcon />}
                                />

                                <DetailItem
                                    label="Location"
                                    value={talent.address}
                                    empty="Not provided"
                                    icon={<PinIcon />}
                                />

                                <DetailItem
                                    label="Language"
                                    value={talent.language}
                                    empty="Not specified"
                                    icon={<GlobeIcon />}
                                />

                                <DetailItem
                                    label="Category"
                                    value={
                                        talent.category?.name
                                    }
                                    empty="Not assigned"
                                    icon={<FolderIcon />}
                                />

                                <DetailItem
                                    label="Experience level"
                                    value={
                                        talent.level
                                            ? cap(talent.level)
                                            : null
                                    }
                                    empty="Not specified"
                                    icon={<AwardIcon />}
                                />

                                <DetailItem
                                    label="Account status"
                                    value={
                                        <StatusBadge
                                            status={status}
                                        />
                                    }
                                    icon={<ShieldIcon />}
                                />
                            </div>
                        </SectionCard>

                        {/* Bio */}
                        <SectionCard
                            icon={<TextIcon />}
                            title="About"
                            subtitle="Professional biography and description"
                        >
                            {talent.description ? (
                                <div className="bio-content">
                                    {talent.description}
                                </div>
                            ) : (
                                <EmptyState
                                    icon={<TextIcon />}
                                    title="No biography added"
                                    text="Add a professional biography to help this talent stand out."
                                    action="Add biography"
                                    onClick={() =>
                                        setEditOpen(true)
                                    }
                                />
                            )}
                        </SectionCard>

                        {/* Skills */}
                        <SectionCard
                            icon={<SkillIcon />}
                            title="Skills & Expertise"
                            subtitle="Professional capabilities and areas of expertise"
                            badge={stats.skills}
                        >
                            {stats.skills > 0 ? (
                                <div className="skills-container">
                                    {talent.skills.map(
                                        (skill, index) => (
                                            <div
                                                className="skill-card"
                                                key={
                                                    skill.id ??
                                                    index
                                                }
                                            >
                                                <div className="skill-icon">
                                                    <SkillIcon />
                                                </div>

                                                <div>
                                                    <strong>
                                                        {
                                                            skill.name
                                                        }
                                                    </strong>

                                                    {skill.level && (
                                                        <span>
                                                            {cap(
                                                                skill.level,
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            ) : (
                                <EmptyState
                                    icon={<SkillIcon />}
                                    title="No skills added"
                                    text="This talent has not added any skills yet."
                                    action="Edit profile"
                                    onClick={() =>
                                        setEditOpen(true)
                                    }
                                />
                            )}
                        </SectionCard>

                        {/* Stories */}
                        <SectionCard
                            icon={<BookIcon />}
                            title="Portfolio & Stories"
                            subtitle="Published stories and professional work"
                            badge={stats.stories}
                        >
                            {stats.stories > 0 ? (
                                <div className="story-list">
                                    {talent.stories
                                        .slice(0, 6)
                                        .map((story) => (
                                            <div
                                                className="story-card"
                                                key={story.id}
                                            >
                                                <div className="story-image">
                                                    {story.image ? (
                                                        <img
                                                            src={
                                                                story.image
                                                            }
                                                            alt=""
                                                        />
                                                    ) : (
                                                        <BookIcon />
                                                    )}
                                                </div>

                                                <div className="story-content">
                                                    <h3>
                                                        {story.title ||
                                                            "Untitled story"}
                                                    </h3>

                                                    <p>
                                                        {story.description
                                                            ? limit(
                                                                  story.description,
                                                                  110,
                                                              )
                                                            : "Professional story"}
                                                    </p>

                                                    <span>
                                                        {formatDate(
                                                            story.created_at,
                                                        )}
                                                    </span>
                                                </div>

                                                <ChevronRightIcon />
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <EmptyState
                                    icon={<BookIcon />}
                                    title="No stories yet"
                                    text="Published stories will appear here."
                                />
                            )}
                        </SectionCard>
                    </main>

                    {/* RIGHT */}
                    <aside className="side-column">
                        {/* Rating */}
                        <div className="rating-card">
                            <div className="rating-header">
                                <div>
                                    <span>
                                        Talent rating
                                    </span>

                                    <strong>
                                        {averageRating || "—"}
                                    </strong>
                                </div>

                                <div className="rating-stars">
                                    {Array.from(
                                        { length: 5 },
                                        (_, index) => (
                                            <span
                                                key={index}
                                                className={
                                                    index <
                                                    Math.round(
                                                        averageRating ||
                                                            0,
                                                    )
                                                        ? "star-active"
                                                        : ""
                                                }
                                            >
                                                ★
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div className="rating-footer">
                                Based on {stats.feedback}{" "}
                                feedback{" "}
                                {stats.feedback === 1
                                    ? "response"
                                    : "responses"}
                            </div>
                        </div>

                        {/* Feedback */}
                        <SectionCard
                            icon={<ChatIcon />}
                            title="Recent Feedback"
                            subtitle="Latest reviews and comments"
                            badge={stats.feedback}
                        >
                            {stats.feedback > 0 ? (
                                <div className="feedback-list">
                                    {talent.feedback
                                        .slice(0, 5)
                                        .map((feedback) => (
                                            <div
                                                className="feedback-card"
                                                key={
                                                    feedback.id
                                                }
                                            >
                                                <div className="feedback-top">
                                                    <div className="feedback-avatar">
                                                        {initials(
                                                            feedback.name ||
                                                                "A",
                                                        )}
                                                    </div>

                                                    <div>
                                                        <strong>
                                                            {feedback.name ||
                                                                "Anonymous"}
                                                        </strong>

                                                        <span>
                                                            {formatDate(
                                                                feedback.created_at,
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>

                                                {feedback.rating !=
                                                    null && (
                                                    <div className="small-stars">
                                                        {Array.from(
                                                            {
                                                                length: 5,
                                                            },
                                                            (
                                                                _,
                                                                index,
                                                            ) =>
                                                                index <
                                                                Number(
                                                                    feedback.rating,
                                                                )
                                                                    ? "★"
                                                                    : "☆",
                                                        ).join(
                                                            "",
                                                        )}
                                                    </div>
                                                )}

                                                <p>
                                                    {limit(
                                                        feedback.message ??
                                                            feedback.comment ??
                                                            "No comment provided.",
                                                        160,
                                                    )}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <EmptyState
                                    icon={<ChatIcon />}
                                    title="No feedback yet"
                                    text="Feedback from the community will appear here."
                                />
                            )}
                        </SectionCard>

                        {/* Connections */}
                        <SectionCard
                            icon={<UsersIcon />}
                            title="Connections"
                            subtitle="Professional network"
                            badge={stats.connections}
                        >
                            {stats.connections > 0 ? (
                                <div className="connection-list">
                                    {talent.connections
                                        .slice(0, 6)
                                        .map((connection) => (
                                            <div
                                                className="connection-card"
                                                key={
                                                    connection.id
                                                }
                                            >
                                                <div className="connection-avatar">
                                                    {initials(
                                                        connection.name ||
                                                            "C",
                                                    )}
                                                </div>

                                                <div className="connection-info">
                                                    <strong>
                                                        {connection.name ||
                                                            `Connection #${connection.id}`}
                                                    </strong>

                                                    <span>
                                                        {connection.type ||
                                                            "Professional"}
                                                    </span>
                                                </div>

                                                <span
                                                    className={`connection-status ${
                                                        connection.status ===
                                                        "active"
                                                            ? "active"
                                                            : "pending"
                                                    }`}
                                                >
                                                    {cap(
                                                        connection.status ||
                                                            "pending",
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <EmptyState
                                    icon={<UsersIcon />}
                                    title="No connections"
                                    text="Professional connections will appear here."
                                />
                            )}
                        </SectionCard>

                        {/* Account */}
                        <SectionCard
                            icon={<ShieldIcon />}
                            title="Account"
                            subtitle="Account and record details"
                        >
                            <div className="account-details">
                                <AccountDetail
                                    label="Profile ID"
                                    value={`#${talent.id}`}
                                    mono
                                />

                                <AccountDetail
                                    label="Account owner"
                                    value={
                                        talent.user?.name ||
                                        "No linked account"
                                    }
                                />

                                <AccountDetail
                                    label="Account email"
                                    value={
                                        talent.user?.email ||
                                        talent.email ||
                                        "Not available"
                                    }
                                />

                                <AccountDetail
                                    label="Created"
                                    value={formatDate(
                                        talent.created_at,
                                        true,
                                    )}
                                />

                                <AccountDetail
                                    label="Last updated"
                                    value={formatDate(
                                        talent.updated_at,
                                        true,
                                    )}
                                />
                            </div>
                        </SectionCard>

                        {/* Danger */}
                        <div className="danger-card">
                            <div className="danger-icon">
                                <AlertIcon />
                            </div>

                            <div>
                                <strong>Danger zone</strong>

                                <p>
                                    Permanently remove this talent
                                    profile and its associated
                                    record.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setDeleteOpen(true)
                                }
                            >
                                Delete
                            </button>
                        </div>
                    </aside>
                </div>

                {/* Bottom navigation */}
                <div className="bottom-navigation">
                    <Link href={routes.index()}>
                        <ArrowLeftIcon />
                        Back to talent directory
                    </Link>

                    <div>
                        <span>
                            Last updated{" "}
                            {timeAgo(talent.updated_at)}
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                setEditOpen(true)
                            }
                        >
                            <PencilIcon />
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            <EditProfileModal
                open={editOpen}
                onClose={() => setEditOpen(false)}
                talent={talent}
                categories={categories}
                updateRoute={routes.update(talent.id)}
            />

            {/* Delete Modal */}
            <DeleteModal
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                talent={talent}
                onConfirm={destroyTalent}
            />
        </AdminLayout>
    );
}

/* =========================================================
   EDIT PROFILE MODAL
========================================================= */

function EditProfileModal({
    open,
    onClose,
    talent,
    categories,
    updateRoute,
}) {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(
        talent.image || null,
    );

    const { data, setData, post, processing, errors, reset } =
        useForm({
            _method: "PUT",
            name: talent.name || "",
            email: talent.email || "",
            phone: talent.phone || "",
            address: talent.address || "",
            language: talent.language || "",
            category_id: talent.category_id || "",
            level: talent.level || "",
            description: talent.description || "",
            featured: talent.featured ? 1 : 0,
            image: null,
        });

    if (!open) return null;

    const selectImage = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setData("image", file);

        const reader = new FileReader();

        reader.onload = (e) => {
            setPreview(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const submit = (event) => {
        event.preventDefault();

        post(updateRoute, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <div className="modal-overlay">
            <div className="edit-modal">
                <div className="modal-header">
                    <div>
                        <span className="modal-eyebrow">
                            Talent profile
                        </span>

                        <h2>Change profile</h2>

                        <p>
                            Update this talent's public profile
                            information.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="modal-close"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>
                </div>

                <form onSubmit={submit}>
                    <div className="modal-body">
                        {/* Photo */}
                        <div className="photo-editor">
                            <div className="photo-preview">
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt=""
                                    />
                                ) : (
                                    <span>
                                        {initials(
                                            talent.name,
                                        )}
                                    </span>
                                )}
                            </div>

                            <div className="photo-editor-content">
                                <strong>
                                    Profile photo
                                </strong>

                                <p>
                                    Use a professional square
                                    image. JPG, PNG or WebP,
                                    maximum 2MB.
                                </p>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={
                                        selectImage
                                    }
                                    hidden
                                />

                                <button
                                    type="button"
                                    className="upload-button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                >
                                    <CameraIcon />
                                    Change photo
                                </button>
                            </div>
                        </div>

                        {errors.image && (
                            <div className="field-error">
                                {errors.image}
                            </div>
                        )}

                        {/* Form */}
                        <div className="form-section">
                            <div className="form-section-title">
                                Basic information
                            </div>

                            <div className="form-grid">
                                <FormField
                                    label="Full name"
                                    required
                                    error={errors.name}
                                >
                                    <input
                                        value={data.name}
                                        onChange={(e) =>
                                            setData(
                                                "name",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Email"
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        value={
                                            data.email
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "email",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Phone"
                                    error={errors.phone}
                                >
                                    <input
                                        value={
                                            data.phone
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "phone",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Language"
                                    error={
                                        errors.language
                                    }
                                >
                                    <input
                                        value={
                                            data.language
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "language",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Location"
                                    error={
                                        errors.address
                                    }
                                >
                                    <input
                                        value={
                                            data.address
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "address",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    />
                                </FormField>

                                <FormField
                                    label="Category"
                                    error={
                                        errors.category_id
                                    }
                                >
                                    <select
                                        value={
                                            data.category_id
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select category
                                        </option>

                                        {categories.map(
                                            (category) => (
                                                <option
                                                    key={
                                                        category.id
                                                    }
                                                    value={
                                                        category.id
                                                    }
                                                >
                                                    {
                                                        category.name
                                                    }
                                                </option>
                                            ),
                                        )}
                                    </select>
                                </FormField>

                                <FormField
                                    label="Experience level"
                                    error={errors.level}
                                >
                                    <select
                                        value={
                                            data.level
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "level",
                                                e.target
                                                    .value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select level
                                        </option>
                                        <option value="beginner">
                                            Beginner
                                        </option>
                                        <option value="intermediate">
                                            Intermediate
                                        </option>
                                        <option value="advanced">
                                            Advanced
                                        </option>
                                        <option value="expert">
                                            Expert
                                        </option>
                                    </select>
                                </FormField>

                                <FormField
                                    label="Featured profile"
                                >
                                    <label className="switch-row">
                                        <input
                                            type="checkbox"
                                            checked={
                                                Boolean(
                                                    data.featured,
                                                )
                                            }
                                            onChange={(
                                                e,
                                            ) =>
                                                setData(
                                                    "featured",
                                                    e
                                                        .target
                                                        .checked
                                                        ? 1
                                                        : 0,
                                                )
                                            }
                                        />

                                        <span className="switch-ui" />

                                        <span>
                                            Show this talent
                                            as featured
                                        </span>
                                    </label>
                                </FormField>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-section-title">
                                Professional biography
                            </div>

                            <textarea
                                rows="6"
                                value={
                                    data.description
                                }
                                onChange={(e) =>
                                    setData(
                                        "description",
                                        e.target.value,
                                    )
                                }
                                placeholder="Write a short professional biography..."
                            />

                            {errors.description && (
                                <div className="field-error">
                                    {
                                        errors.description
                                    }
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="modal-cancel"
                            onClick={() => {
                                reset();
                                onClose();
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="modal-save"
                            disabled={processing}
                        >
                            {processing ? (
                                <>
                                    <Spinner />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <CheckIcon />
                                    Save changes
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function DeleteModal({
    open,
    onClose,
    talent,
    onConfirm,
}) {
    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="delete-modal">
                <div className="delete-icon">
                    <TrashIcon />
                </div>

                <h2>Delete talent profile?</h2>

                <p>
                    You are about to permanently delete{" "}
                    <strong>{talent.name}</strong>. This action
                    cannot be undone.
                </p>

                <div className="delete-warning">
                    <AlertIcon />
                    Associated profile information may also
                    become unavailable.
                </div>

                <div className="delete-actions">
                    <button
                        type="button"
                        className="modal-cancel"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="delete-confirm"
                        onClick={onConfirm}
                    >
                        <TrashIcon />
                        Delete permanently
                    </button>
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   COMPONENTS
========================================================= */

function StatusBadge({ status }) {
    return (
        <span className={`status-badge status-${status}`}>
            <span className="status-dot" />
            {cap(status)}
        </span>
    );
}

function OverviewItem({ icon, label, value }) {
    return (
        <div className="overview-item-simple">
            <div className="overview-icon">{icon}</div>

            <div>
                <span>{label}</span>
                <strong>{value}</strong>
            </div>
        </div>
    );
}

function StatCard({
    icon,
    value,
    label,
    accent = false,
}) {
    return (
        <div className={`stat-card ${accent ? "accent" : ""}`}>
            <div className="stat-icon">{icon}</div>

            <div className="stat-value">
                {value}
            </div>

            <div className="stat-label">
                {label}
            </div>
        </div>
    );
}

function SectionCard({
    icon,
    title,
    subtitle,
    badge,
    action,
    children,
}) {
    return (
        <section className="section-card">
            <div className="section-header">
                <div className="section-heading">
                    <div className="section-icon">
                        {icon}
                    </div>

                    <div>
                        <h2>{title}</h2>

                        {subtitle && (
                            <p>{subtitle}</p>
                        )}
                    </div>
                </div>

                <div className="section-header-right">
                    {badge !== undefined && (
                        <span className="section-badge">
                            {badge}
                        </span>
                    )}

                    {action}
                </div>
            </div>

            <div className="section-body">
                {children}
            </div>
        </section>
    );
}

function DetailItem({
    icon,
    label,
    value,
    empty = "Not provided",
}) {
    const isEmpty =
        value === null ||
        value === undefined ||
        value === "";

    return (
        <div className="detail-item">
            <div className="detail-icon">
                {icon}
            </div>

            <div>
                <span>{label}</span>

                <strong
                    className={
                        isEmpty ? "detail-empty" : ""
                    }
                >
                    {isEmpty ? empty : value}
                </strong>
            </div>
        </div>
    );
}

function AccountDetail({
    label,
    value,
    mono = false,
}) {
    return (
        <div className="account-row">
            <span>{label}</span>

            <strong className={mono ? "mono" : ""}>
                {value}
            </strong>
        </div>
    );
}

function EmptyState({
    icon,
    title,
    text,
    action,
    onClick,
}) {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                {icon}
            </div>

            <strong>{title}</strong>

            <p>{text}</p>

            {action && (
                <button
                    type="button"
                    onClick={onClick}
                >
                    {action}
                </button>
            )}
        </div>
    );
}

function FormField({
    label,
    children,
    required,
    error,
}) {
    return (
        <div className="form-field">
            <label>
                {label}

                {required && (
                    <span className="required">*</span>
                )}
            </label>

            {children}

            {error && (
                <div className="field-error">
                    {error}
                </div>
            )}
        </div>
    );
}

function Dot() {
    return <span className="dot-separator">·</span>;
}

function Spinner() {
    return <span className="spinner" />;
}

/* =========================================================
   HELPERS
========================================================= */

function cap(value) {
    if (!value) return "";

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}

function initials(name) {
    if (!name) return "T";

    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();
}

function limit(value, length) {
    if (!value) return "";

    return value.length > length
        ? value.slice(0, length).trim() + "…"
        : value;
}

function formatDate(value, withTime = false) {
    if (!value) return "N/A";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "N/A";
    }

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        ...(withTime
            ? {
                  hour: "2-digit",
                  minute: "2-digit",
              }
            : {}),
    }).format(date);
}

function timeAgo(value) {
    if (!value) return "N/A";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "N/A";
    }

    const seconds = Math.floor(
        (Date.now() - date.getTime()) / 1000,
    );

    if (seconds < 60) return "Just now";

    const units = [
        ["year", 31536000],
        ["month", 2592000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
    ];

    for (const [label, secondsPerUnit] of units) {
        const amount = Math.floor(
            seconds / secondsPerUnit,
        );

        if (amount >= 1) {
            return `${amount} ${label}${
                amount > 1 ? "s" : ""
            } ago`;
        }
    }

    return "Just now";
}

/* =========================================================
   ICONS
========================================================= */

const Icon = ({
    children,
    size = 16,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

function CheckIcon() {
    return (
        <Icon>
            <path d="M20 6 9 17l-5-5" />
        </Icon>
    );
}

function AlertIcon() {
    return (
        <Icon>
            <path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </Icon>
    );
}

function MailIcon() {
    return (
        <Icon>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </Icon>
    );
}

function PhoneIcon() {
    return (
        <Icon>
            <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1-1 2-2 2C10.3 21 3 13.7 3 5c0-1 1-1 2-1Z" />
        </Icon>
    );
}

function PinIcon() {
    return (
        <Icon>
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </Icon>
    );
}

function CalendarIcon() {
    return (
        <Icon>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
        </Icon>
    );
}

function ClockIcon() {
    return (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </Icon>
    );
}

function PencilIcon() {
    return (
        <Icon>
            <path d="m14 6 4 4" />
            <path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z" />
        </Icon>
    );
}

function TrashIcon() {
    return (
        <Icon>
            <path d="M4 7h16M10 11v6M14 11v6" />
            <path d="M6 7l1 14h10l1-14M9 7V4h6v3" />
        </Icon>
    );
}

function CameraIcon() {
    return (
        <Icon>
            <path d="M4 7h3l1.5-2h7L17 7h3v12H4V7Z" />
            <circle cx="12" cy="13" r="3.5" />
        </Icon>
    );
}

function UserIcon() {
    return (
        <Icon>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20a7 7 0 0 1 14 0" />
        </Icon>
    );
}

function UsersIcon() {
    return (
        <Icon>
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20a6 6 0 0 1 12 0" />
            <path d="M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 6" />
        </Icon>
    );
}

function SkillIcon() {
    return (
        <Icon>
            <path d="m14.5 6.5 3-3a3 3 0 0 1 4 4l-3 3" />
            <path d="m9.5 17.5-3 3a3 3 0 1 1-4-4l3-3" />
            <path d="m8 16 8-8" />
        </Icon>
    );
}

function BookIcon() {
    return (
        <Icon>
            <path d="M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2V5Z" />
            <path d="M11 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
        </Icon>
    );
}

function ChatIcon() {
    return (
        <Icon>
            <path d="M4 5h16v11H8l-4 4V5Z" />
        </Icon>
    );
}

function CapIcon() {
    return (
        <Icon>
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 11v5c3 2 7 2 10 0v-5" />
        </Icon>
    );
}

function HeartIcon() {
    return (
        <Icon>
            <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.4Z" />
        </Icon>
    );
}

function TextIcon() {
    return (
        <Icon>
            <path d="M5 6h14M5 12h14M5 18h8" />
        </Icon>
    );
}

function FolderIcon() {
    return (
        <Icon>
            <path d="M3 6h7l2 2h9v10H3V6Z" />
        </Icon>
    );
}

function GlobeIcon() {
    return (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </Icon>
    );
}

function AwardIcon() {
    return (
        <Icon>
            <circle cx="12" cy="8" r="4" />
            <path d="m9 12-2 9 5-3 5 3-2-9" />
        </Icon>
    );
}

function ShieldIcon() {
    return (
        <Icon>
            <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" />
            <path d="m9 12 2 2 4-4" />
        </Icon>
    );
}

function StarIcon() {
    return (
        <Icon>
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </Icon>
    );
}

function PauseIcon() {
    return (
        <Icon>
            <path d="M8 5v14M16 5v14" />
        </Icon>
    );
}

function PlayIcon() {
    return (
        <Icon>
            <path d="m8 5 11 7-11 7V5Z" />
        </Icon>
    );
}

function MoreIcon() {
    return (
        <Icon>
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
        </Icon>
    );
}

function ChevronIcon() {
    return (
        <Icon size={13}>
            <path d="m9 18 6-6-6-6" />
        </Icon>
    );
}

function ChevronRightIcon() {
    return (
        <Icon size={15}>
            <path d="m9 18 6-6-6-6" />
        </Icon>
    );
}

function ArrowLeftIcon() {
    return (
        <Icon>
            <path d="M19 12H5M11 18l-6-6 6-6" />
        </Icon>
    );
}

function CloseIcon() {
    return (
        <Icon>
            <path d="m6 6 12 12M18 6 6 18" />
        </Icon>
    );
}

/* =========================================================
   CSS
========================================================= */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.talent-profile-page {
    --brand: #5D89C8;
    --brand-dark: #4775B3;
    --brand-soft: #EEF4FB;
    --brand-soft-2: #F5F8FD;

    --ink: #18212F;
    --ink-2: #465365;
    --muted: #7B8797;
    --muted-2: #A2ACB9;

    --line: #E6EAF0;
    --line-soft: #F0F2F5;

    --canvas: #F6F8FB;
    --white: #FFFFFF;

    --green: #159A68;
    --green-soft: #EAF8F2;

    --red: #D84A4A;
    --red-soft: #FFF0F0;

    font-family: Inter, sans-serif;
    background: var(--canvas);
    color: var(--ink);
    min-height: 100vh;
    padding: 28px 32px 50px;
}

/* Flash */

.flash-message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 10px;
    margin-bottom: 18px;
    font-size: 13px;
    font-weight: 500;
}

.flash-success {
    background: var(--green-soft);
    color: var(--green);
    border: 1px solid #CFEDE0;
}

.flash-error {
    background: var(--red-soft);
    color: var(--red);
    border: 1px solid #F3D0D0;
}

/* Breadcrumb */

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: var(--muted);
    font-size: 12.5px;
}

.breadcrumb a {
    color: var(--brand);
    text-decoration: none;
    font-weight: 600;
}

.breadcrumb svg {
    color: var(--muted-2);
}

/* Hero */

.profile-hero {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 14px;
    box-shadow: 0 2px 8px rgba(25, 42, 70, .025);
}

.hero-cover {
    height: 94px;
    background:
        linear-gradient(
            110deg,
            #EDF3FA 0%,
            #F7F9FC 55%,
            #EAF1FA 100%
        );
    border-bottom: 1px solid var(--line);
    position: relative;
}

.hero-cover::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(
            circle at 82% 25%,
            rgba(93,137,200,.12),
            transparent 28%
        );
}

.hero-content {
    padding: 0 28px 25px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
    position: relative;
}

.profile-image-wrapper {
    margin-top: -54px;
    position: relative;
    flex-shrink: 0;
}

.profile-image {
    width: 112px;
    height: 112px;
    border-radius: 18px;
    object-fit: cover;
    background: var(--brand-soft);
    border: 5px solid white;
    box-shadow: 0 5px 18px rgba(24,33,47,.12);
}

.profile-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,#5D89C8,#789DD0);
    color: white;
    font-family: Space Grotesk, sans-serif;
    font-size: 35px;
    font-weight: 700;
}

.image-edit-button {
    position: absolute;
    right: -4px;
    bottom: 2px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 3px solid white;
    background: var(--brand);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease;
}

.image-edit-button:hover {
    background: var(--brand-dark);
    transform: scale(1.05);
}

.hero-main {
    min-width: 0;
    flex: 1;
    padding-top: 18px;
}

.status-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 8px;
}

.status-badge,
.featured-badge,
.matched-badge,
.level-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    padding: 5px 9px;
    font-size: 10.5px;
    font-weight: 700;
}

.status-badge {
    background: var(--brand-soft);
    color: var(--brand-dark);
}

.status-active {
    background: var(--green-soft);
    color: var(--green);
}

.status-inactive {
    background: #F1F3F6;
    color: var(--muted);
}

.status-pending {
    background: #FFF7E6;
    color: #A76B00;
}

.status-approved {
    background: var(--green-soft);
    color: var(--green);
}

.status-rejected {
    background: var(--red-soft);
    color: var(--red);
}

.status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
}

.featured-badge {
    background: #FFF7E6;
    color: #9B6700;
}

.matched-badge {
    background: var(--brand-soft);
    color: var(--brand-dark);
}

.level-badge {
    border: 1px solid var(--line);
    background: white;
    color: var(--ink-2);
}

.hero-main h1 {
    font-family: Space Grotesk, sans-serif;
    font-size: 25px;
    letter-spacing: -.5px;
    margin: 0 0 4px;
    line-height: 1.2;
}

.hero-subtitle {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 13px;
}

.dot-separator {
    color: var(--muted-2);
}

.hero-contact {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 12px;
}

.hero-contact span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--ink-2);
    font-size: 11.5px;
}

.hero-contact svg {
    color: var(--muted);
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 205px;
    padding-top: 20px;
}

.primary-action,
.secondary-action,
.icon-action {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    transition: .18s ease;
}

.primary-action {
    height: 39px;
    border-radius: 8px;
    background: var(--brand);
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 3px 9px rgba(93,137,200,.18);
}

.primary-action:hover {
    background: var(--brand-dark);
}

.action-row {
    display: flex;
    gap: 7px;
}

.secondary-action {
    flex: 1;
    height: 36px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: white;
    color: var(--ink-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 10.5px;
    font-weight: 600;
}

.secondary-action:hover {
    border-color: #C8D6E8;
    color: var(--brand-dark);
    background: var(--brand-soft-2);
}

.icon-action {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--line);
    background: white;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-action:hover {
    color: var(--ink);
}

.more-wrapper {
    position: relative;
}

.action-menu {
    position: absolute;
    right: 0;
    top: calc(100% + 7px);
    width: 190px;
    padding: 6px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(20,30,45,.12);
    z-index: 20;
}

.action-menu button,
.action-menu a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    background: transparent;
    padding: 9px 10px;
    border-radius: 7px;
    color: var(--ink-2);
    font-size: 11.5px;
    text-decoration: none;
    cursor: pointer;
    text-align: left;
}

.action-menu button:hover,
.action-menu a:hover {
    background: var(--canvas);
    color: var(--ink);
}

.action-menu .danger-menu-item {
    color: var(--red);
}

/* Overview */

.overview-strip {
    background: white;
    border: 1px solid var(--line);
    border-radius: 13px;
    min-height: 76px;
    display: flex;
    align-items: center;
    padding: 13px 20px;
    margin-bottom: 14px;
}

.overview-item {
    flex: 1.4;
}

.overview-label {
    display: block;
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 7px;
}

.completion {
    display: flex;
    align-items: center;
    gap: 9px;
}

.completion-track {
    width: 115px;
    height: 6px;
    border-radius: 10px;
    background: #EDF0F4;
    overflow: hidden;
}

.completion-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--brand);
}

.completion strong {
    color: var(--ink);
    font-size: 11px;
}

.overview-divider {
    width: 1px;
    height: 36px;
    background: var(--line);
    margin: 0 20px;
}

.overview-item-simple {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 9px;
}

.overview-icon {
    width: 31px;
    height: 31px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand);
    background: var(--brand-soft);
}

.overview-item-simple span {
    display: block;
    color: var(--muted);
    font-size: 9.5px;
    margin-bottom: 2px;
}

.overview-item-simple strong {
    display: block;
    color: var(--ink);
    font-size: 11.5px;
}

/* Stats */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-bottom: 18px;
}

.stat-card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 14px;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: #DDE2E9;
}

.stat-card.accent::before {
    background: var(--brand);
}

.stat-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #F3F5F7;
    color: var(--ink-2);
    margin-bottom: 9px;
}

.stat-card.accent .stat-icon {
    background: var(--brand-soft);
    color: var(--brand);
}

.stat-value {
    font-family: Space Grotesk, sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 1;
}

.stat-label {
    margin-top: 5px;
    color: var(--muted);
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
}

/* Layout */

.content-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(320px, .9fr);
    gap: 18px;
    align-items: start;
}

.main-column,
.side-column {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

/* Cards */

.section-card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 13px;
    overflow: hidden;
}

.section-header {
    min-height: 65px;
    padding: 12px 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--line);
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-icon {
    width: 31px;
    height: 31px;
    border-radius: 8px;
    background: var(--brand-soft);
    color: var(--brand-dark);
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-heading h2 {
    margin: 0;
    font-family: Space Grotesk, sans-serif;
    font-size: 13px;
    font-weight: 600;
}

.section-heading p {
    margin: 3px 0 0;
    color: var(--muted);
    font-size: 10px;
}

.section-header-right {
    display: flex;
    align-items: center;
    gap: 7px;
}

.section-badge {
    min-width: 25px;
    height: 22px;
    padding: 0 7px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--canvas);
    color: var(--muted);
    font-size: 10px;
    font-weight: 700;
}

.card-action {
    border: 1px solid var(--line);
    background: white;
    color: var(--brand-dark);
    border-radius: 7px;
    height: 29px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}

.card-action:hover {
    background: var(--brand-soft);
}

.section-body {
    padding: 17px;
}

/* Profile details */

.profile-information-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
}

.detail-item {
    display: flex;
    gap: 10px;
    padding: 13px 10px;
    border-bottom: 1px solid var(--line-soft);
}

.detail-item:nth-child(odd) {
    border-right: 1px solid var(--line-soft);
    padding-left: 0;
}

.detail-item:nth-last-child(-n+2) {
    border-bottom: 0;
}

.detail-icon {
    width: 27px;
    height: 27px;
    flex-shrink: 0;
    border-radius: 7px;
    background: #F5F7F9;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.detail-item span {
    display: block;
    color: var(--muted);
    font-size: 9.5px;
    margin-bottom: 3px;
}

.detail-item strong {
    display: block;
    font-size: 12px;
    color: var(--ink);
    font-weight: 600;
}

.detail-empty {
    color: var(--muted-2) !important;
    font-weight: 400 !important;
}

/* Bio */

.bio-content {
    color: var(--ink-2);
    font-size: 12.5px;
    line-height: 1.8;
    white-space: pre-line;
}

/* Skills */

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
}

.skill-card {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 11px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #FCFDFE;
    min-width: 145px;
}

.skill-card:hover {
    border-color: #C7D7EB;
    background: var(--brand-soft-2);
}

.skill-icon {
    width: 27px;
    height: 27px;
    border-radius: 7px;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
}

.skill-card strong {
    display: block;
    font-size: 11.5px;
    color: var(--ink);
}

.skill-card span {
    display: block;
    color: var(--muted);
    font-size: 9px;
    margin-top: 2px;
}

/* Stories */

.story-list {
    display: flex;
    flex-direction: column;
}

.story-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--line-soft);
}

.story-card:first-child {
    padding-top: 0;
}

.story-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.story-image {
    width: 62px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.story-content {
    flex: 1;
    min-width: 0;
}

.story-content h3 {
    font-size: 12px;
    margin: 0 0 3px;
}

.story-content p {
    color: var(--muted);
    font-size: 10.5px;
    margin: 0 0 4px;
}

.story-content span {
    color: var(--muted-2);
    font-size: 9px;
}

/* Rating */

.rating-card {
    background: linear-gradient(
        135deg,
        #5D89C8,
        #6F98CC
    );
    color: white;
    border-radius: 13px;
    overflow: hidden;
    box-shadow: 0 7px 18px rgba(93,137,200,.16);
}

.rating-header {
    padding: 17px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating-header span {
    display: block;
    opacity: .82;
    font-size: 10px;
    margin-bottom: 3px;
}

.rating-header strong {
    font-family: Space Grotesk, sans-serif;
    font-size: 30px;
}

.rating-stars {
    font-size: 17px;
    letter-spacing: 1px;
}

.rating-stars span {
    display: inline;
    color: rgba(255,255,255,.35);
}

.rating-stars .star-active {
    color: #fff;
}

.rating-footer {
    padding: 9px 18px;
    border-top: 1px solid rgba(255,255,255,.16);
    background: rgba(0,0,0,.06);
    font-size: 9.5px;
    opacity: .9;
}

/* Feedback */

.feedback-card {
    padding: 12px 0;
    border-bottom: 1px solid var(--line-soft);
}

.feedback-card:first-child {
    padding-top: 0;
}

.feedback-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.feedback-top {
    display: flex;
    gap: 8px;
    align-items: center;
}

.feedback-avatar,
.connection-avatar {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--brand-soft);
    color: var(--brand-dark);
    font-size: 9px;
    font-weight: 700;
}

.feedback-top strong {
    display: block;
    font-size: 10.5px;
}

.feedback-top span {
    display: block;
    color: var(--muted-2);
    font-size: 8.5px;
    margin-top: 2px;
}

.small-stars {
    color: #E3A72F;
    font-size: 10px;
    margin-top: 6px;
    letter-spacing: 1px;
}

.feedback-card p {
    margin: 5px 0 0;
    color: var(--ink-2);
    font-size: 10.5px;
    line-height: 1.55;
}

/* Connections */

.connection-card {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 0;
    border-bottom: 1px solid var(--line-soft);
}

.connection-card:first-child {
    padding-top: 0;
}

.connection-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.connection-info {
    flex: 1;
    min-width: 0;
}

.connection-info strong {
    display: block;
    font-size: 10.5px;
}

.connection-info span {
    display: block;
    font-size: 8.5px;
    color: var(--muted);
    margin-top: 2px;
}

.connection-status {
    font-size: 8.5px;
    padding: 4px 7px;
    border-radius: 999px;
    font-weight: 700;
}

.connection-status.active {
    background: var(--green-soft);
    color: var(--green);
}

.connection-status.pending {
    background: #FFF7E6;
    color: #A76B00;
}

/* Account */

.account-details {
    display: flex;
    flex-direction: column;
}

.account-row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 0;
    border-bottom: 1px solid var(--line-soft);
}

.account-row:first-child {
    padding-top: 0;
}

.account-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.account-row span {
    color: var(--muted);
    font-size: 9.5px;
}

.account-row strong {
    text-align: right;
    color: var(--ink);
    font-size: 10px;
    font-weight: 600;
}

.account-row .mono {
    font-family: monospace;
    color: var(--brand-dark);
}

/* Empty */

.empty-state {
    padding: 22px 10px;
    text-align: center;
}

.empty-icon {
    width: 38px;
    height: 38px;
    margin: 0 auto 9px;
    border-radius: 10px;
    background: #F5F7F9;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.empty-state strong {
    display: block;
    font-size: 11.5px;
}

.empty-state p {
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
    margin: 4px auto 10px;
    max-width: 300px;
}

.empty-state button {
    border: 1px solid var(--line);
    background: white;
    color: var(--brand-dark);
    border-radius: 7px;
    padding: 7px 10px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}

/* Danger */

.danger-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 14px;
    background: var(--red-soft);
    border: 1px solid #F3D8D8;
    border-radius: 12px;
}

.danger-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 7px;
    background: white;
    color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
}

.danger-card strong {
    display: block;
    font-size: 11px;
    color: #A83838;
}

.danger-card p {
    margin: 3px 0 8px;
    color: #9B5B5B;
    font-size: 9px;
    line-height: 1.45;
}

.danger-card button {
    border: 0;
    background: transparent;
    color: var(--red);
    font-size: 9.5px;
    font-weight: 700;
    padding: 0;
    cursor: pointer;
}

/* Bottom */

.bottom-navigation {
    margin-top: 20px;
    padding: 14px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--muted);
    font-size: 10px;
}

.bottom-navigation a,
.bottom-navigation button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--brand-dark);
    text-decoration: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 10.5px;
    font-weight: 600;
}

.bottom-navigation > div {
    display: flex;
    align-items: center;
    gap: 16px;
}

/* Modal */

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 25, 40, .46);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
}

.edit-modal {
    width: min(760px, 100%);
    max-height: calc(100vh - 40px);
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 70px rgba(15,25,40,.2);
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 20px 22px;
    border-bottom: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.modal-eyebrow {
    display: block;
    color: var(--brand);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .08em;
    font-weight: 700;
    margin-bottom: 3px;
}

.modal-header h2 {
    font-family: Space Grotesk, sans-serif;
    margin: 0;
    font-size: 19px;
}

.modal-header p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 10.5px;
}

.modal-close {
    width: 31px;
    height: 31px;
    border: 1px solid var(--line);
    background: white;
    color: var(--muted);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.modal-body {
    overflow-y: auto;
    padding: 20px 22px;
}

.photo-editor {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px;
    border: 1px solid var(--line);
    background: #FBFCFD;
    border-radius: 11px;
    margin-bottom: 20px;
}

.photo-preview {
    width: 76px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Space Grotesk, sans-serif;
    font-size: 25px;
    font-weight: 700;
}

.photo-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.photo-editor-content strong {
    display: block;
    font-size: 11.5px;
}

.photo-editor-content p {
    margin: 4px 0 9px;
    color: var(--muted);
    font-size: 9.5px;
    line-height: 1.5;
}

.upload-button {
    height: 30px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #C8D6E8;
    border-radius: 7px;
    background: white;
    color: var(--brand-dark);
    font-size: 9.5px;
    font-weight: 700;
    cursor: pointer;
}

.form-section {
    margin-top: 19px;
}

.form-section-title {
    font-size: 10.5px;
    font-weight: 700;
    color: var(--ink);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--line);
    margin-bottom: 13px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px;
}

.form-field label {
    display: block;
    margin-bottom: 5px;
    font-size: 9.5px;
    font-weight: 700;
    color: var(--ink-2);
}

.required {
    color: var(--red);
    margin-left: 3px;
}

.form-field input,
.form-field select,
.form-section textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: white;
    color: var(--ink);
    padding: 9px 10px;
    font: inherit;
    font-size: 11px;
    outline: none;
    transition: .15s;
}

.form-field input:focus,
.form-field select:focus,
.form-section textarea:focus {
    border-color: #AFC4DE;
    box-shadow: 0 0 0 3px var(--brand-soft);
}

.form-section textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
}

.switch-row {
    display: flex !important;
    align-items: center;
    gap: 8px;
    height: 37px;
    margin: 0 !important;
    cursor: pointer;
}

.switch-row input {
    display: none;
}

.switch-ui {
    width: 34px;
    height: 19px;
    background: #D8DEE7;
    border-radius: 20px;
    position: relative;
    transition: .2s;
    flex-shrink: 0;
}

.switch-ui::after {
    content: "";
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.15);
    transition: .2s;
}

.switch-row input:checked + .switch-ui {
    background: var(--brand);
}

.switch-row input:checked + .switch-ui::after {
    left: 17px;
}

.switch-row > span:last-child {
    font-size: 9.5px;
    color: var(--muted);
}

.field-error {
    color: var(--red);
    font-size: 9px;
    margin-top: 4px;
}

.modal-footer {
    padding: 13px 22px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.modal-cancel,
.modal-save {
    height: 35px;
    padding: 0 14px;
    border-radius: 7px;
    font-size: 10.5px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.modal-cancel {
    border: 1px solid var(--line);
    background: white;
    color: var(--ink-2);
}

.modal-save {
    border: 0;
    background: var(--brand);
    color: white;
}

.modal-save:hover {
    background: var(--brand-dark);
}

.modal-save:disabled {
    opacity: .6;
    cursor: not-allowed;
}

.spinner {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255,255,255,.4);
    border-top-color: white;
    border-radius: 50%;
    animation: spin .7s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Delete modal */

.delete-modal {
    width: min(420px, 100%);
    background: white;
    border-radius: 15px;
    padding: 24px;
    box-shadow: 0 25px 70px rgba(15,25,40,.2);
}

.delete-icon {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    background: var(--red-soft);
    color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
}

.delete-modal h2 {
    font-family: Space Grotesk, sans-serif;
    font-size: 18px;
    margin: 0 0 7px;
}

.delete-modal > p {
    color: var(--muted);
    font-size: 11px;
    line-height: 1.6;
    margin: 0;
}

.delete-warning {
    margin-top: 13px;
    display: flex;
    gap: 7px;
    padding: 10px;
    border-radius: 8px;
    background: #FFF7E6;
    color: #966600;
    font-size: 9.5px;
    line-height: 1.5;
}

.delete-actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.delete-confirm {
    height: 35px;
    padding: 0 12px;
    border: 0;
    border-radius: 7px;
    background: var(--red);
    color: white;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}

/* Responsive */

@media (max-width: 1250px) {
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .content-layout {
        grid-template-columns: minmax(0, 1.5fr) minmax(300px, .9fr);
    }
}

@media (max-width: 1050px) {
    .profile-hero .hero-content {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .hero-main {
        padding-top: 15px;
    }

    .hero-actions {
        width: 100%;
        flex-direction: row;
        padding-top: 0;
    }

    .primary-action {
        flex: 1;
    }

    .content-layout {
        grid-template-columns: 1fr;
    }

    .side-column {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
    }

    .rating-card {
        grid-column: span 2;
    }
}

@media (max-width: 760px) {
    .talent-profile-page {
        padding: 18px 14px 35px;
    }

    .hero-content {
        padding: 0 16px 18px;
    }

    .profile-image {
        width: 88px;
        height: 88px;
    }

    .profile-image-wrapper {
        margin-top: -42px;
    }

    .hero-main h1 {
        font-size: 21px;
    }

    .overview-strip {
        flex-wrap: wrap;
        gap: 14px;
        padding: 14px;
    }

    .overview-divider {
        display: none;
    }

    .overview-item,
    .overview-item-simple {
        flex: 1 1 45%;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .profile-information-grid {
        grid-template-columns: 1fr;
    }

    .detail-item:nth-child(odd) {
        border-right: 0;
        padding-left: 10px;
    }

    .detail-item:nth-last-child(-n+2) {
        border-bottom: 1px solid var(--line-soft);
    }

    .detail-item:last-child {
        border-bottom: 0;
    }

    .side-column {
        display: flex;
    }

    .rating-card {
        grid-column: auto;
    }

    .bottom-navigation {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .bottom-navigation > div {
        width: 100%;
        justify-content: space-between;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 520px) {
    .hero-actions {
        flex-wrap: wrap;
    }

    .primary-action {
        width: 100%;
        flex: auto;
    }

    .action-row {
        width: 100%;
    }

    .overview-item,
    .overview-item-simple {
        flex-basis: 100%;
    }

    .stats-grid {
        gap: 8px;
    }

    .stat-card {
        padding: 12px;
    }

    .section-header {
        padding: 11px 13px;
    }

    .section-body {
        padding: 14px;
    }

    .modal-overlay {
        padding: 10px;
    }

    .edit-modal {
        max-height: calc(100vh - 20px);
    }

    .modal-body,
    .modal-header,
    .modal-footer {
        padding-left: 15px;
        padding-right: 15px;
    }

    .photo-editor {
        align-items: flex-start;
    }
}
`;