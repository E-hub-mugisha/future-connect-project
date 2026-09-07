import { useEffect, useRef, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const TABS = [
    {
        key: "personal",
        label: "Personal Info",
        icon: "user",
    },
    {
        key: "notifications",
        label: "Notifications",
        icon: "bell",
    },
    {
        key: "activity",
        label: "Account Activity",
        icon: "activity",
    },
    {
        key: "security",
        label: "Security Settings",
        icon: "lock",
    },
    {
        key: "social",
        label: "Connected Accounts",
        icon: "grid",
    },
];

export default function UserShow({
    user,
    activities,
    appName = "App",
}) {
    const [activeTab, setActiveTab] = useState("personal");

    const initials = getInitials(user?.name);
    const recordNo = String(user?.id ?? 0).padStart(5, "0");

    const fmtYear = user?.created_at
        ? new Date(user.created_at).getFullYear()
        : "—";

    const fmtFull = user?.created_at
        ? new Date(user.created_at).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "—";

    const setTab = (tab) => {
        setActiveTab(tab);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AppLayout title={`${user?.name ?? "User"} — Profile`}>
            <Head title={`${user?.name ?? "User"} — Profile`} />

            <ProfileStyles />

            <div className="user-profile-page">
                {/* ───────────────── Header ───────────────── */}
                <div className="profile-page-header">
                    <div>
                        <Link
                            href={route("admin.users.index")}
                            className="back-link"
                        >
                            <BackIcon size={15} />
                            Back to Users
                        </Link>

                        <div className="page-heading">
                            <div>
                                <div className="eyebrow">
                                    USER PROFILE
                                </div>

                                <h1>
                                    {user?.name ?? "User"}
                                </h1>

                                <p>
                                    Manage profile information,
                                    access and account activity.
                                </p>
                            </div>

                            <div className="header-status">
                                <span
                                    className={`status-chip ${
                                        user?.active
                                            ? "chip-active"
                                            : "chip-inactive"
                                    }`}
                                >
                                    {user?.active
                                        ? "Active account"
                                        : "Inactive account"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ───────────────── Main ───────────────── */}
                <div className="profile-grid">
                    {/* Sidebar */}
                    <aside className="profile-sidebar">
                        <div className="profile-card">
                            <div className="record-tag">
                                FILE № {recordNo}
                            </div>

                            <div className="profile-avatar-section">
                                <div className="profile-avatar">
                                    {initials}
                                </div>

                                <div className="profile-name">
                                    {user?.name}
                                </div>

                                <div className="profile-email">
                                    {user?.email}
                                </div>

                                <span className="role-badge">
                                    {formatRole(user?.role)}
                                </span>
                            </div>

                            <div className="profile-stats">
                                <div className="profile-stat">
                                    <strong>{fmtYear}</strong>
                                    <span>Member Since</span>
                                </div>

                                <div className="profile-stat">
                                    <strong
                                        className={
                                            user?.active
                                                ? "active-text"
                                                : "inactive-text"
                                        }
                                    >
                                        {user?.active
                                            ? "Active"
                                            : "Inactive"}
                                    </strong>

                                    <span>Status</span>
                                </div>
                            </div>

                            <div className="sidebar-navigation">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        className={`profile-nav-item ${
                                            activeTab === tab.key
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setTab(tab.key)
                                        }
                                    >
                                        <span className="profile-nav-icon">
                                            <TabIcon
                                                name={tab.icon}
                                            />
                                        </span>

                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick access */}
                        <div className="quick-card">
                            <div className="quick-title">
                                Quick Actions
                            </div>

                            <button
                                type="button"
                                className="quick-action"
                                data-bs-toggle="modal"
                                data-bs-target="#editUserModal"
                            >
                                <span>
                                    <EditIcon size={15} />
                                </span>

                                Edit profile
                            </button>

                            <button
                                type="button"
                                className="quick-action"
                                data-bs-toggle="modal"
                                data-bs-target="#resetPasswordModal"
                            >
                                <span>
                                    <KeyIcon size={15} />
                                </span>

                                Reset password
                            </button>

                            <button
                                type="button"
                                className="quick-action"
                                onClick={() =>
                                    setTab("activity")
                                }
                            >
                                <span>
                                    <ActivityIcon size={15} />
                                </span>

                                View activity
                            </button>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="profile-main">
                        {activeTab === "personal" && (
                            <PersonalTab
                                user={user}
                                fmtFull={fmtFull}
                            />
                        )}

                        {activeTab === "notifications" && (
                            <NotificationsTab />
                        )}

                        {activeTab === "activity" && (
                            <ActivityTab
                                activities={activities}
                            />
                        )}

                        {activeTab === "security" && (
                            <SecurityTab
                                user={user}
                                onViewActivity={() =>
                                    setTab("activity")
                                }
                            />
                        )}

                        {activeTab === "social" && (
                            <ConnectedAccountsTab />
                        )}
                    </main>
                </div>
            </div>

            <EditUserModal user={user} />

            <ResetPasswordModal user={user} />

            <DeleteUserModal user={user} />
        </AppLayout>
    );
}

/* =========================================================
   PERSONAL TAB
========================================================= */

function PersonalTab({ user, fmtFull }) {
    return (
        <div className="content-card">
            <div className="content-header">
                <div>
                    <div className="section-kicker">
                        PROFILE
                    </div>

                    <h2>Personal Information</h2>

                    <p>
                        Basic information and access details for
                        this account.
                    </p>
                </div>

                <button
                    type="button"
                    className="outline-button"
                    data-bs-toggle="modal"
                    data-bs-target="#editUserModal"
                >
                    <EditIcon size={14} />
                    Edit
                </button>
            </div>

            <div className="section-title">
                Basic Information
            </div>

            <DataRow
                icon={<UserIcon />}
                label="Full Name"
                value={user?.name}
            />

            <DataRow
                icon={<MailIcon />}
                label="Email Address"
                value={user?.email}
            />

            <DataRow
                icon={<PhoneIcon />}
                label="Phone Number"
                value={user?.phone || "Not provided"}
                muted={!user?.phone}
            />

            <div className="section-title">
                Account Access
            </div>

            <DataRow
                icon={<ShieldIcon />}
                label="Role"
                value={
                    <span className="role-chip">
                        {formatRole(user?.role)}
                    </span>
                }
            />

            <DataRow
                icon={<ToggleIcon />}
                label="Account Status"
                value={
                    <span
                        className={`status-chip ${
                            user?.active
                                ? "chip-active"
                                : "chip-inactive"
                        }`}
                    >
                        {user?.active
                            ? "Active"
                            : "Inactive"}
                    </span>
                }
            />

            <DataRow
                icon={<CalendarIcon />}
                label="Registered"
                value={fmtFull}
            />

            <div className="profile-summary">
                <div className="summary-icon">
                    <ShieldIcon size={18} />
                </div>

                <div>
                    <strong>Account access</strong>

                    <p>
                        This account is currently{" "}
                        {user?.active
                            ? "allowed to access"
                            : "restricted from accessing"}{" "}
                        {user?.active ? appNameSafe() : appNameSafe()}.
                    </p>
                </div>
            </div>
        </div>
    );
}

function appNameSafe() {
    return "the platform";
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function NotificationsTab() {
    const [settings, setSettings] = useState({
        account: true,
        security: true,
        updates: true,
        marketing: false,
    });

    const toggle = (key) => {
        setSettings((current) => ({
            ...current,
            [key]: !current[key],
        }));
    };

    return (
        <div className="content-card">
            <div className="content-header">
                <div>
                    <div className="section-kicker">
                        PREFERENCES
                    </div>

                    <h2>Notifications</h2>

                    <p>
                        Control which notifications this user
                        receives.
                    </p>
                </div>
            </div>

            <div className="notification-list">
                <NotificationRow
                    title="Account notifications"
                    description="Important account and profile updates."
                    checked={settings.account}
                    onChange={() => toggle("account")}
                />

                <NotificationRow
                    title="Security alerts"
                    description="Login alerts, password resets and security events."
                    checked={settings.security}
                    onChange={() => toggle("security")}
                />

                <NotificationRow
                    title="Platform updates"
                    description="New features, announcements and platform changes."
                    checked={settings.updates}
                    onChange={() => toggle("updates")}
                />

                <NotificationRow
                    title="Marketing communications"
                    description="Optional promotional and marketing messages."
                    checked={settings.marketing}
                    onChange={() => toggle("marketing")}
                />
            </div>

            <div className="info-banner">
                <BellIcon size={17} />

                <div>
                    <strong>Notification preferences</strong>

                    <p>
                        These controls are currently displayed as
                        account-level preferences. Connect them to
                        your notification settings endpoint when
                        available.
                    </p>
                </div>
            </div>
        </div>
    );
}

function NotificationRow({
    title,
    description,
    checked,
    onChange,
}) {
    return (
        <div className="notification-row">
            <div className="notification-icon">
                <BellIcon size={16} />
            </div>

            <div className="notification-content">
                <strong>{title}</strong>
                <span>{description}</span>
            </div>

            <button
                type="button"
                className={`toggle-switch ${
                    checked ? "checked" : ""
                }`}
                onClick={onChange}
                aria-pressed={checked}
            >
                <span />
            </button>
        </div>
    );
}

/* =========================================================
   ACTIVITY TAB
========================================================= */

function ActivityTab({ activities }) {
    const items = activities?.data ?? [];

    return (
        <div className="content-card">
            <div className="content-header">
                <div>
                    <div className="section-kicker">
                        AUDIT TRAIL
                    </div>

                    <h2>Account Activity</h2>

                    <p>
                        Recent login sessions and important account
                        events.
                    </p>
                </div>

                <div className="event-count">
                    {activities?.total ?? items.length} events
                </div>
            </div>

            {items.length === 0 ? (
                <EmptyActivity />
            ) : (
                <>
                    <div className="activity-list">
                        {items.map((activity) => (
                            <ActivityItem
                                key={activity.id}
                                activity={activity}
                            />
                        ))}
                    </div>

                    {activities?.links?.length > 3 && (
                        <ActivityPagination
                            activities={activities}
                        />
                    )}
                </>
            )}
        </div>
    );
}

function ActivityItem({ activity }) {
    const type = activity?.type ?? "activity";

    const iconMap = {
        login: <LoginIcon size={17} />,
        logout: <LogoutIcon size={17} />,
        password_reset: <KeyIcon size={17} />,
        password_changed: <LockIcon size={17} />,
        profile_updated: <EditIcon size={17} />,
        account_activated: <CheckIcon size={17} />,
        account_deactivated: <AlertIcon size={17} />,
    };

    const date = activity?.created_at
        ? new Date(
              activity.created_at
          ).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "Unknown date";

    return (
        <div className="activity-item">
            <div
                className={`activity-icon activity-${type}`}
            >
                {iconMap[type] ?? (
                    <ActivityIcon size={17} />
                )}
            </div>

            <div className="activity-body">
                <div className="activity-title">
                    {formatActivityTitle(type)}
                </div>

                <div className="activity-description">
                    {activity?.description ||
                        "Account activity recorded."}
                </div>

                <div className="activity-meta">
                    <span>{date}</span>

                    {activity?.ip_address && (
                        <>
                            <span>•</span>
                            <span>
                                IP {activity.ip_address}
                            </span>
                        </>
                    )}

                    {activity?.device && (
                        <>
                            <span>•</span>
                            <span>
                                {activity.device}
                            </span>
                        </>
                    )}

                    {activity?.browser && (
                        <>
                            <span>•</span>
                            <span>
                                {activity.browser}
                            </span>
                        </>
                    )}

                    {activity?.platform && (
                        <>
                            <span>•</span>
                            <span>
                                {activity.platform}
                            </span>
                        </>
                    )}
                </div>
            </div>

            <div className="activity-result">
                {type === "login" && (
                    <span className="success-label">
                        Successful
                    </span>
                )}
            </div>
        </div>
    );
}

function EmptyActivity() {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <ActivityIcon size={28} />
            </div>

            <h3>No activity yet</h3>

            <p>
                Login sessions and important account events will
                appear here.
            </p>
        </div>
    );
}

function ActivityPagination({ activities }) {
    return (
        <div className="pagination-container">
            <div className="pagination-info">
                Showing{" "}
                <strong>{activities.from ?? 0}</strong>
                {" – "}
                <strong>{activities.to ?? 0}</strong>
                {" of "}
                <strong>{activities.total ?? 0}</strong>
            </div>

            <div className="pagination-links">
                {(activities.links ?? []).map(
                    (link, index) => {
                        const label = cleanPaginationLabel(
                            link.label
                        );

                        if (!link.url) {
                            return (
                                <span
                                    key={index}
                                    className="page-button disabled"
                                >
                                    {label}
                                </span>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                href={link.url}
                                preserveScroll
                                preserveState
                                className={`page-button ${
                                    link.active
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    }
                )}
            </div>
        </div>
    );
}

/* =========================================================
   SECURITY TAB
========================================================= */

function SecurityTab({
    user,
    onViewActivity,
}) {
    return (
        <div className="content-card">
            <div className="content-header">
                <div>
                    <div className="section-kicker">
                        SECURITY
                    </div>

                    <h2>Security Settings</h2>

                    <p>
                        Manage password and account security
                        controls.
                    </p>
                </div>

                <div className="security-status">
                    <ShieldIcon size={14} />
                    Protected
                </div>
            </div>

            <div className="security-list">
                <SecurityItem
                    icon={<LockIcon size={18} />}
                    title="Password"
                    description="Send a secure password reset link to the user's email address."
                    action={
                        <button
                            type="button"
                            className="security-button"
                            data-bs-toggle="modal"
                            data-bs-target="#resetPasswordModal"
                        >
                            Reset Password
                        </button>
                    }
                />

                <SecurityItem
                    icon={<ShieldIcon size={18} />}
                    title="Two-Factor Authentication"
                    description="Add an additional verification step when signing in."
                    action={
                        <span className="coming-badge">
                            Not configured
                        </span>
                    }
                />

                <SecurityItem
                    icon={<ActivityIcon size={18} />}
                    title="Login Activity"
                    description="Review recent devices, IP addresses and sign-in events."
                    action={
                        <button
                            type="button"
                            className="security-button"
                            onClick={onViewActivity}
                        >
                            View Activity
                        </button>
                    }
                />

                <SecurityItem
                    icon={<MonitorIcon size={18} />}
                    title="Active Sessions"
                    description="Review and revoke active sessions for this account."
                    action={
                        <span className="coming-badge">
                            Coming soon
                        </span>
                    }
                />
            </div>

            <div className="security-note">
                <div className="security-note-icon">
                    <ShieldIcon size={17} />
                </div>

                <div>
                    <strong>Security recommendation</strong>

                    <p>
                        Encourage users to maintain a unique
                        password and enable two-factor
                        authentication where available.
                    </p>
                </div>
            </div>
        </div>
    );
}

function SecurityItem({
    icon,
    title,
    description,
    action,
}) {
    return (
        <div className="security-item">
            <div className="security-item-icon">
                {icon}
            </div>

            <div className="security-item-content">
                <strong>{title}</strong>
                <span>{description}</span>
            </div>

            <div className="security-item-action">
                {action}
            </div>
        </div>
    );
}

/* =========================================================
   CONNECTED ACCOUNTS
========================================================= */

function ConnectedAccountsTab() {
    return (
        <div className="content-card">
            <div className="content-header">
                <div>
                    <div className="section-kicker">
                        INTEGRATIONS
                    </div>

                    <h2>Connected Accounts</h2>

                    <p>
                        Social and third-party accounts connected
                        to this profile.
                    </p>
                </div>
            </div>

            <div className="connected-empty">
                <div className="connected-icon">
                    <GridIcon size={27} />
                </div>

                <h3>No connected accounts</h3>

                <p>
                    No external accounts are currently linked to
                    this user profile.
                </p>

                <button
                    type="button"
                    className="outline-button"
                    disabled
                >
                    Connect Account
                </button>
            </div>
        </div>
    );
}

/* =========================================================
   DATA ROW
========================================================= */

function DataRow({
    icon,
    label,
    value,
    muted = false,
}) {
    return (
        <div className="data-row">
            <div className="data-label">
                <span className="data-label-icon">
                    {icon}
                </span>

                {label}
            </div>

            <div
                className={`data-value ${
                    muted ? "muted-value" : ""
                }`}
            >
                {value}
            </div>
        </div>
    );
}

/* =========================================================
   EDIT MODAL
========================================================= */

function EditUserModal({ user }) {
    const modalRef = useRef(null);

    const { data, setData, put, processing, errors } =
        useForm({
            name: user?.name ?? "",
            email: user?.email ?? "",
            role: user?.role ?? "user",
            active: user?.active ? "1" : "0",
        });

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current
            );

        instance?.hide();
    };

    const submit = (event) => {
        event.preventDefault();

        put(
            route("admin.users.update", user.id),
            {
                preserveScroll: true,
                onSuccess: closeModal,
            }
        );
    };

    return (
        <div
            className="modal fade"
            id="editUserModal"
            ref={modalRef}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <form
                    className="modal-content modern-modal"
                    onSubmit={submit}
                >
                    <div className="modal-header">
                        <div>
                            <div className="modal-kicker">
                                USER MANAGEMENT
                            </div>

                            <h5 className="modal-title">
                                Edit User
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div className="modal-body">
                        <div className="modal-user-preview">
                            <div className="modal-avatar">
                                {getInitials(user?.name)}
                            </div>

                            <div>
                                <strong>
                                    {user?.name}
                                </strong>

                                <span>
                                    {user?.email}
                                </span>
                            </div>
                        </div>

                        <div className="form-grid">
                            <FormField
                                label="Full Name"
                                error={errors.name}
                            >
                                <input
                                    type="text"
                                    className="form-control modern-input"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                            </FormField>

                            <FormField
                                label="Email Address"
                                error={errors.email}
                            >
                                <input
                                    type="email"
                                    className="form-control modern-input"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                            </FormField>

                            <div className="form-grid-two">
                                <FormField
                                    label="Role"
                                    error={errors.role}
                                >
                                    <select
                                        className="form-select modern-input"
                                        value={data.role}
                                        onChange={(e) =>
                                            setData(
                                                "role",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="admin">
                                            Admin
                                        </option>

                                        <option value="user">
                                            User
                                        </option>
                                    </select>
                                </FormField>

                                <FormField
                                    label="Account Status"
                                    error={errors.active}
                                >
                                    <select
                                        className="form-select modern-input"
                                        value={data.active}
                                        onChange={(e) =>
                                            setData(
                                                "active",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="1">
                                            Active
                                        </option>

                                        <option value="0">
                                            Inactive
                                        </option>
                                    </select>
                                </FormField>
                            </div>
                        </div>

                        <div className="password-separation-note">
                            <KeyIcon size={16} />

                            <span>
                                Password changes are handled
                                separately through the secure
                                password reset process.
                            </span>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="cancel-button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="primary-button"
                            disabled={processing}
                        >
                            {processing
                                ? "Saving..."
                                : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* =========================================================
   RESET PASSWORD MODAL
========================================================= */

function ResetPasswordModal({ user }) {
    const modalRef = useRef(null);

    const { post, processing } = useForm({});

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current
            );

        instance?.hide();
    };

    const submit = (event) => {
        event.preventDefault();

        post(
            route(
                "admin.users.send-password-reset",
                user.id
            ),
            {
                preserveScroll: true,
                onSuccess: closeModal,
            }
        );
    };

    return (
        <div
            className="modal fade"
            id="resetPasswordModal"
            ref={modalRef}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <form
                    className="modal-content modern-modal"
                    onSubmit={submit}
                >
                    <div className="modal-header">
                        <div>
                            <div className="modal-kicker">
                                SECURITY
                            </div>

                            <h5 className="modal-title">
                                Reset Password
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div className="modal-body">
                        <div className="reset-profile">
                            <div className="reset-avatar">
                                {getInitials(user?.name)}
                            </div>

                            <div>
                                <strong>
                                    {user?.name}
                                </strong>

                                <span>
                                    {user?.email}
                                </span>
                            </div>
                        </div>

                        <div className="reset-message">
                            <div className="reset-message-icon">
                                <MailIcon size={18} />
                            </div>

                            <div>
                                <strong>
                                    Send secure reset link
                                </strong>

                                <p>
                                    A password reset link will
                                    be sent to this user's email
                                    address. The user will
                                    create a new password through
                                    the secure reset page.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="cancel-button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="primary-button"
                            disabled={processing}
                        >
                            {processing
                                ? "Sending..."
                                : "Send Reset Link"}
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

function DeleteUserModal({ user }) {
    const modalRef = useRef(null);

    const {
        delete: destroy,
        processing,
    } = useForm({});

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current
            );

        instance?.hide();
    };

    const submit = (event) => {
        event.preventDefault();

        destroy(
            route("admin.users.destroy", user.id),
            {
                preserveScroll: true,
                onSuccess: closeModal,
            }
        );
    };

    return (
        <div
            className="modal fade"
            id="deleteUserModal"
            ref={modalRef}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <form
                    className="modal-content modern-modal"
                    onSubmit={submit}
                >
                    <div className="modal-header">
                        <div>
                            <div className="modal-kicker">
                                DANGER ZONE
                            </div>

                            <h5 className="modal-title">
                                Delete User
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>

                    <div className="modal-body">
                        <div className="delete-warning">
                            <div className="delete-warning-icon">
                                <AlertIcon size={19} />
                            </div>

                            <div>
                                <strong>
                                    Delete {user?.name}?
                                </strong>

                                <p>
                                    This permanently removes the
                                    user account and associated
                                    data. This action cannot be
                                    undone.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="cancel-button"
                            data-bs-dismiss="modal"
                        >
                            Keep User
                        </button>

                        <button
                            type="submit"
                            className="danger-button"
                            disabled={processing}
                        >
                            <TrashIcon size={14} />

                            {processing
                                ? "Deleting..."
                                : "Delete User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* =========================================================
   FORM COMPONENTS
========================================================= */

function FormField({
    label,
    error,
    children,
}) {
    return (
        <div className="form-field">
            <label>{label}</label>

            {children}

            {error && (
                <div className="form-error">
                    {error}
                </div>
            )}
        </div>
    );
}

/* =========================================================
   HELPERS
========================================================= */

function getInitials(name = "") {
    const words = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (!words.length) {
        return "U";
    }

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return (
        words[0][0] + words[words.length - 1][0]
    ).toUpperCase();
}

function formatRole(role) {
    if (!role) {
        return "User";
    }

    return role
        .charAt(0)
        .toUpperCase() + role.slice(1);
}

function formatActivityTitle(type) {
    const titles = {
        login: "User login",
        logout: "User logout",
        password_reset:
            "Password reset requested",
        password_changed:
            "Password changed",
        profile_updated:
            "Profile updated",
        account_activated:
            "Account activated",
        account_deactivated:
            "Account deactivated",
    };

    return titles[type] ?? "Account activity";
}

function cleanPaginationLabel(label = "") {
    return label
        .replace(/<[^>]+>/g, "")
        .replace(/&laquo;/g, "‹")
        .replace(/&raquo;/g, "›")
        .replace(/&amp;/g, "&");
}

/* =========================================================
   ICONS
========================================================= */

function svgProps({
    size = 15,
    style,
    className,
    ...rest
} = {}) {
    return {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style,
        className,
        ...rest,
    };
}

function BackIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
        </svg>
    );
}

function EditIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
    );
}

function TrashIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
    );
}

function UserIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function MailIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
            />
            <polyline points="3 7 12 13 21 7" />
        </svg>
    );
}

function PhoneIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.63a2 2 0 0 1-.45 2.11L8.0 9.73a16 16 0 0 0 6.27 6.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.32 1.73.54 2.63.66A2 2 0 0 1 22 16.92Z" />
        </svg>
    );
}

function ShieldIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

function ToggleIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect
                x="2"
                y="6"
                width="20"
                height="12"
                rx="6"
            />
            <circle cx="16" cy="12" r="3" />
        </svg>
    );
}

function CalendarIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
            />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function BellIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
    );
}

function ActivityIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
}

function LockIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
            />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

function GridIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
    );
}

function LoginIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
            <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
        </svg>
    );
}

function LogoutIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
    );
}

function KeyIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <circle cx="7.5" cy="15.5" r="3.5" />
            <path d="m10 13 8-8" />
            <path d="m17 5 2 2" />
            <path d="m14 8 2 2" />
        </svg>
    );
}

function CheckIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function AlertIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}

function MonitorIcon(p) {
    return (
        <svg {...svgProps(p)}>
            <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
            />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    );
}

function TabIcon({ name }) {
    const icons = {
        user: <UserIcon size={16} />,
        bell: <BellIcon size={16} />,
        activity: <ActivityIcon size={16} />,
        lock: <LockIcon size={16} />,
        grid: <GridIcon size={16} />,
    };

    return icons[name] ?? null;
}

/* =========================================================
   STYLES
========================================================= */

function ProfileStyles() {
    return (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

            :root {
                --profile-bg: #f6f8fb;
                --profile-surface: #ffffff;
                --profile-surface-soft: #f9fafc;

                --profile-ink: #172033;
                --profile-ink-2: #465166;
                --profile-muted: #8993a5;

                --profile-border: #e5e9ef;
                --profile-border-soft: #edf0f4;

                --profile-blue: #5d89c8;
                --profile-blue-dark: #456fae;
                --profile-blue-soft: #edf4fc;

                --profile-green: #1e9b67;
                --profile-green-soft: #eaf8f1;

                --profile-danger: #d65353;
                --profile-danger-soft: #fff1f1;

                --profile-purple: #775bb5;
                --profile-purple-soft: #f4f0fb;

                --profile-font:
                    'Inter',
                    -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    sans-serif;

                --profile-display:
                    'Space Grotesk',
                    'Inter',
                    sans-serif;
            }

            .user-profile-page {
                min-height: 100vh;
                background: var(--profile-bg);
                padding: 26px 28px 50px;
                color: var(--profile-ink);
                font-family: var(--profile-font);
            }

            .profile-page-header {
                max-width: 1440px;
                margin: 0 auto 24px;
            }

            .back-link {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                color: var(--profile-muted);
                text-decoration: none;
                font-size: 12.5px;
                font-weight: 500;
                margin-bottom: 17px;
                transition: all .15s ease;
            }

            .back-link:hover {
                color: var(--profile-blue-dark);
                transform: translateX(-2px);
            }

            .page-heading {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 20px;
            }

            .eyebrow,
            .section-kicker,
            .modal-kicker {
                color: var(--profile-blue);
                font-size: 10px;
                font-weight: 700;
                letter-spacing: .12em;
                text-transform: uppercase;
                margin-bottom: 6px;
            }

            .page-heading h1 {
                margin: 0;
                font-family: var(--profile-display);
                font-size: 28px;
                line-height: 1.15;
                letter-spacing: -.025em;
                font-weight: 600;
            }

            .page-heading p {
                margin: 7px 0 0;
                color: var(--profile-muted);
                font-size: 13px;
            }

            .header-status {
                flex-shrink: 0;
            }

            .profile-grid {
                max-width: 1440px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 300px minmax(0, 1fr);
                gap: 22px;
                align-items: start;
            }

            .profile-sidebar {
                min-width: 0;
            }

            .profile-card,
            .quick-card,
            .content-card {
                background: var(--profile-surface);
                border: 1px solid var(--profile-border);
                border-radius: 14px;
                box-shadow: 0 2px 8px rgba(23, 32, 51, .025);
            }

            .profile-card {
                position: relative;
                overflow: hidden;
            }

            .record-tag {
                position: absolute;
                top: 0;
                left: 0;
                padding: 6px 12px;
                background: var(--profile-ink);
                color: #fff;
                border-bottom-right-radius: 9px;
                font-size: 9px;
                font-weight: 700;
                letter-spacing: .08em;
            }

            .profile-avatar-section {
                padding: 46px 20px 23px;
                text-align: center;
                border-bottom: 1px solid var(--profile-border);
            }

            .profile-avatar {
                width: 76px;
                height: 76px;
                margin: 0 auto 13px;
                border-radius: 19px;
                background:
                    linear-gradient(
                        135deg,
                        var(--profile-blue),
                        var(--profile-blue-dark)
                    );
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: var(--profile-display);
                font-size: 24px;
                font-weight: 600;
                box-shadow: 0 8px 20px rgba(93, 137, 200, .2);
            }

            .profile-name {
                font-family: var(--profile-display);
                font-size: 18px;
                font-weight: 600;
                color: var(--profile-ink);
            }

            .profile-email {
                margin-top: 4px;
                color: var(--profile-muted);
                font-size: 11.5px;
                word-break: break-word;
            }

            .role-badge {
                display: inline-flex;
                margin-top: 11px;
                padding: 5px 10px;
                border-radius: 6px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                font-size: 9.5px;
                font-weight: 700;
                letter-spacing: .07em;
                text-transform: uppercase;
            }

            .profile-stats {
                display: grid;
                grid-template-columns: 1fr 1fr;
                border-bottom: 1px solid var(--profile-border);
            }

            .profile-stat {
                padding: 15px 10px;
                text-align: center;
            }

            .profile-stat:first-child {
                border-right: 1px solid var(--profile-border);
            }

            .profile-stat strong {
                display: block;
                color: var(--profile-ink);
                font-size: 13px;
                font-weight: 700;
            }

            .profile-stat span {
                display: block;
                margin-top: 4px;
                color: var(--profile-muted);
                font-size: 9px;
                text-transform: uppercase;
                letter-spacing: .07em;
            }

            .active-text {
                color: var(--profile-green) !important;
            }

            .inactive-text {
                color: var(--profile-muted) !important;
            }

            .sidebar-navigation {
                padding: 9px;
            }

            .profile-nav-item {
                width: 100%;
                border: 0;
                background: transparent;
                border-radius: 9px;
                padding: 9px 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--profile-ink-2);
                font-size: 12.5px;
                font-weight: 500;
                text-align: left;
                cursor: pointer;
                transition: all .15s ease;
            }

            .profile-nav-item:hover {
                background: var(--profile-surface-soft);
                color: var(--profile-ink);
            }

            .profile-nav-item.active {
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                font-weight: 600;
            }

            .profile-nav-icon {
                width: 29px;
                height: 29px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
                flex-shrink: 0;
            }

            .profile-nav-item.active .profile-nav-icon {
                background: var(--profile-blue);
                color: #fff;
            }

            .quick-card {
                margin-top: 14px;
                padding: 14px;
            }

            .quick-title {
                padding: 0 5px 8px;
                color: var(--profile-muted);
                font-size: 9.5px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: .09em;
            }

            .quick-action {
                width: 100%;
                border: 0;
                background: transparent;
                display: flex;
                align-items: center;
                gap: 9px;
                padding: 8px 5px;
                color: var(--profile-ink-2);
                font-size: 12px;
                text-align: left;
                border-radius: 7px;
                cursor: pointer;
            }

            .quick-action:hover {
                background: var(--profile-surface-soft);
                color: var(--profile-blue-dark);
            }

            .quick-action span {
                width: 27px;
                height: 27px;
                border: 1px solid var(--profile-border);
                background: #fff;
                border-radius: 7px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .content-card {
                min-width: 0;
                overflow: hidden;
            }

            .content-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 20px;
                padding: 25px 28px 21px;
                border-bottom: 1px solid var(--profile-border);
            }

            .content-header h2 {
                margin: 0;
                font-family: var(--profile-display);
                color: var(--profile-ink);
                font-size: 19px;
                font-weight: 600;
                letter-spacing: -.015em;
            }

            .content-header p {
                margin: 5px 0 0;
                color: var(--profile-muted);
                font-size: 12px;
            }

            .outline-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 8px 13px;
                border: 1px solid var(--profile-border);
                border-radius: 8px;
                background: #fff;
                color: var(--profile-ink-2);
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all .15s ease;
                white-space: nowrap;
            }

            .outline-button:hover:not(:disabled) {
                border-color: var(--profile-blue);
                color: var(--profile-blue-dark);
                background: var(--profile-blue-soft);
            }

            .outline-button:disabled {
                opacity: .5;
                cursor: not-allowed;
            }

            .section-title {
                padding: 11px 28px;
                background: var(--profile-surface-soft);
                border-bottom: 1px solid var(--profile-border-soft);
                color: var(--profile-muted);
                font-size: 9.5px;
                font-weight: 700;
                letter-spacing: .1em;
                text-transform: uppercase;
            }

            .data-row {
                min-height: 57px;
                display: flex;
                align-items: center;
                gap: 18px;
                padding: 12px 28px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .data-label {
                width: 185px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 9px;
                color: var(--profile-muted);
                font-size: 10px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: .04em;
            }

            .data-label-icon {
                width: 27px;
                height: 27px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .data-value {
                color: var(--profile-ink);
                font-size: 13px;
                font-weight: 500;
                flex: 1;
            }

            .muted-value {
                color: var(--profile-muted);
            }

            .role-chip {
                display: inline-flex;
                padding: 5px 9px;
                border-radius: 6px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                font-size: 10px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: .04em;
            }

            .status-chip {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                font-size: 11.5px;
                font-weight: 600;
            }

            .status-chip::before {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 50%;
            }

            .chip-active {
                color: var(--profile-green);
            }

            .chip-active::before {
                background: var(--profile-green);
                box-shadow: 0 0 0 3px var(--profile-green-soft);
            }

            .chip-inactive {
                color: var(--profile-muted);
            }

            .chip-inactive::before {
                background: transparent;
                border: 1.5px solid var(--profile-muted);
            }

            .profile-summary {
                margin: 22px 28px;
                padding: 14px;
                border: 1px solid var(--profile-border);
                border-radius: 10px;
                background: var(--profile-blue-soft);
                display: flex;
                align-items: flex-start;
                gap: 11px;
            }

            .summary-icon {
                width: 31px;
                height: 31px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--profile-blue);
                color: #fff;
                flex-shrink: 0;
            }

            .profile-summary strong {
                color: var(--profile-ink);
                font-size: 12px;
            }

            .profile-summary p {
                margin: 3px 0 0;
                color: var(--profile-ink-2);
                font-size: 11.5px;
                line-height: 1.55;
            }

            /* Activity */

            .event-count {
                padding: 6px 10px;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                color: var(--profile-muted);
                font-size: 10.5px;
                font-weight: 600;
                white-space: nowrap;
            }

            .activity-list {
                width: 100%;
            }

            .activity-item {
                display: flex;
                align-items: flex-start;
                gap: 13px;
                padding: 18px 28px;
                border-bottom: 1px solid var(--profile-border-soft);
                transition: background .15s ease;
            }

            .activity-item:hover {
                background: var(--profile-surface-soft);
            }

            .activity-icon {
                width: 37px;
                height: 37px;
                flex: 0 0 37px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9px;
            }

            .activity-login {
                background: var(--profile-green-soft);
                color: var(--profile-green);
            }

            .activity-logout {
                background: var(--profile-surface-soft);
                color: var(--profile-ink-2);
            }

            .activity-password_reset,
            .activity-password_changed {
                background: var(--profile-purple-soft);
                color: var(--profile-purple);
            }

            .activity-profile_updated {
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
            }

            .activity-account_activated {
                background: var(--profile-green-soft);
                color: var(--profile-green);
            }

            .activity-account_deactivated {
                background: #f2f3f5;
                color: var(--profile-muted);
            }

            .activity-body {
                flex: 1;
                min-width: 0;
            }

            .activity-title {
                color: var(--profile-ink);
                font-size: 13px;
                font-weight: 600;
            }

            .activity-description {
                margin-top: 3px;
                color: var(--profile-ink-2);
                font-size: 11.5px;
            }

            .activity-meta {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 7px;
                color: var(--profile-muted);
                font-size: 10.5px;
            }

            .activity-result {
                flex-shrink: 0;
            }

            .success-label {
                padding: 4px 7px;
                border-radius: 5px;
                background: var(--profile-green-soft);
                color: var(--profile-green);
                font-size: 9px;
                font-weight: 700;
            }

            .empty-state {
                padding: 75px 25px;
                text-align: center;
            }

            .empty-state-icon {
                width: 64px;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 14px;
                border-radius: 50%;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .empty-state h3 {
                margin: 0;
                color: var(--profile-ink-2);
                font-family: var(--profile-display);
                font-size: 15px;
                font-weight: 600;
            }

            .empty-state p {
                margin: 6px auto 0;
                max-width: 390px;
                color: var(--profile-muted);
                font-size: 12px;
            }

            .pagination-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                padding: 15px 28px;
                border-top: 1px solid var(--profile-border);
            }

            .pagination-info {
                color: var(--profile-muted);
                font-size: 10.5px;
            }

            .pagination-info strong {
                color: var(--profile-ink-2);
            }

            .pagination-links {
                display: flex;
                gap: 4px;
            }

            .page-button {
                min-width: 29px;
                height: 29px;
                padding: 0 7px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--profile-border);
                border-radius: 6px;
                background: #fff;
                color: var(--profile-ink-2);
                text-decoration: none;
                font-size: 10.5px;
                transition: all .15s ease;
            }

            .page-button:hover {
                border-color: var(--profile-blue);
                color: var(--profile-blue-dark);
                background: var(--profile-blue-soft);
            }

            .page-button.active {
                border-color: var(--profile-blue);
                background: var(--profile-blue);
                color: #fff;
            }

            .page-button.disabled {
                opacity: .4;
                cursor: not-allowed;
            }

            /* Security */

            .security-status {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 6px 9px;
                border-radius: 6px;
                background: var(--profile-green-soft);
                color: var(--profile-green);
                font-size: 10px;
                font-weight: 600;
            }

            .security-list {
                padding: 5px 0;
            }

            .security-item {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 18px 28px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .security-item-icon {
                width: 38px;
                height: 38px;
                flex: 0 0 38px;
                border-radius: 9px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
            }

            .security-item-content {
                flex: 1;
                min-width: 0;
            }

            .security-item-content strong {
                display: block;
                color: var(--profile-ink);
                font-size: 12.5px;
            }

            .security-item-content span {
                display: block;
                margin-top: 3px;
                color: var(--profile-muted);
                font-size: 11px;
                line-height: 1.45;
            }

            .security-item-action {
                flex-shrink: 0;
            }

            .security-button {
                border: 1px solid var(--profile-border);
                background: #fff;
                color: var(--profile-ink-2);
                border-radius: 7px;
                padding: 7px 11px;
                font-size: 10.5px;
                font-weight: 600;
                cursor: pointer;
            }

            .security-button:hover {
                background: var(--profile-blue-soft);
                border-color: var(--profile-blue);
                color: var(--profile-blue-dark);
            }

            .coming-badge {
                padding: 5px 8px;
                border-radius: 5px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                color: var(--profile-muted);
                font-size: 9px;
                font-weight: 600;
            }

            .security-note {
                margin: 22px 28px;
                padding: 14px;
                border: 1px solid var(--profile-border);
                border-radius: 10px;
                display: flex;
                gap: 11px;
                background: var(--profile-surface-soft);
            }

            .security-note-icon {
                width: 31px;
                height: 31px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                flex-shrink: 0;
            }

            .security-note strong {
                color: var(--profile-ink);
                font-size: 11.5px;
            }

            .security-note p {
                margin: 3px 0 0;
                color: var(--profile-muted);
                font-size: 10.5px;
                line-height: 1.5;
            }

            /* Notifications */

            .notification-list {
                padding: 4px 0;
            }

            .notification-row {
                display: flex;
                align-items: center;
                gap: 13px;
                padding: 18px 28px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .notification-icon {
                width: 37px;
                height: 37px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                flex-shrink: 0;
            }

            .notification-content {
                flex: 1;
                min-width: 0;
            }

            .notification-content strong {
                display: block;
                color: var(--profile-ink);
                font-size: 12.5px;
            }

            .notification-content span {
                display: block;
                margin-top: 3px;
                color: var(--profile-muted);
                font-size: 11px;
            }

            .toggle-switch {
                width: 40px;
                height: 23px;
                padding: 2px;
                border: 0;
                border-radius: 20px;
                background: #d9dee6;
                cursor: pointer;
                transition: background .15s ease;
                flex-shrink: 0;
            }

            .toggle-switch span {
                width: 19px;
                height: 19px;
                display: block;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,.15);
                transition: transform .15s ease;
            }

            .toggle-switch.checked {
                background: var(--profile-blue);
            }

            .toggle-switch.checked span {
                transform: translateX(17px);
            }

            .info-banner {
                display: flex;
                gap: 10px;
                margin: 22px 28px;
                padding: 13px;
                border-radius: 9px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
            }

            .info-banner strong {
                display: block;
                color: var(--profile-ink);
                font-size: 11.5px;
            }

            .info-banner p {
                margin: 3px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.5;
            }

            /* Connected */

            .connected-empty {
                padding: 75px 25px;
                text-align: center;
            }

            .connected-icon {
                width: 65px;
                height: 65px;
                margin: 0 auto 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .connected-empty h3 {
                margin: 0;
                font-family: var(--profile-display);
                font-size: 15px;
                font-weight: 600;
                color: var(--profile-ink-2);
            }

            .connected-empty p {
                max-width: 400px;
                margin: 6px auto 18px;
                color: var(--profile-muted);
                font-size: 11.5px;
                line-height: 1.55;
            }

            /* Modals */

            .modern-modal {
                border: 1px solid var(--profile-border) !important;
                border-radius: 14px !important;
                overflow: hidden;
                color: var(--profile-ink);
                box-shadow: 0 20px 60px rgba(23, 32, 51, .15);
            }

            .modern-modal .modal-header {
                padding: 20px 24px 16px !important;
                border-bottom: 1px solid var(--profile-border) !important;
            }

            .modern-modal .modal-body {
                padding: 20px 24px !important;
            }

            .modern-modal .modal-footer {
                padding: 14px 24px !important;
                border-top: 1px solid var(--profile-border) !important;
            }

            .modal-kicker {
                margin-bottom: 3px;
            }

            .modal-title {
                margin: 0;
                color: var(--profile-ink);
                font-family: var(--profile-display);
                font-size: 17px;
                font-weight: 600;
            }

            .modal-user-preview,
            .reset-profile {
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 11px;
                margin-bottom: 18px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                border-radius: 9px;
            }

            .modal-avatar,
            .reset-avatar {
                width: 40px;
                height: 40px;
                flex: 0 0 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9px;
                background: var(--profile-blue);
                color: #fff;
                font-family: var(--profile-display);
                font-size: 12px;
                font-weight: 600;
            }

            .modal-user-preview strong,
            .reset-profile strong {
                display: block;
                color: var(--profile-ink);
                font-size: 12px;
            }

            .modal-user-preview span,
            .reset-profile span {
                display: block;
                margin-top: 2px;
                color: var(--profile-muted);
                font-size: 10.5px;
                word-break: break-word;
            }

            .form-grid {
                display: grid;
                gap: 15px;
            }

            .form-grid-two {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }

            .form-field label {
                display: block;
                margin-bottom: 5px;
                color: var(--profile-ink-2);
                font-size: 11px;
                font-weight: 600;
            }

            .modern-input {
                min-height: 39px;
                border: 1px solid var(--profile-border) !important;
                border-radius: 8px !important;
                background: var(--profile-surface-soft) !important;
                color: var(--profile-ink) !important;
                font-size: 12px !important;
                box-shadow: none !important;
            }

            .modern-input:focus {
                border-color: var(--profile-blue) !important;
                background: #fff !important;
                box-shadow: 0 0 0 3px rgba(93, 137, 200, .11) !important;
            }

            .form-error {
                margin-top: 4px;
                color: var(--profile-danger);
                font-size: 10.5px;
                font-weight: 500;
            }

            .password-separation-note {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                margin-top: 17px;
                padding: 10px;
                border-radius: 8px;
                background: var(--profile-blue-soft);
                color: var(--profile-blue-dark);
                font-size: 10.5px;
                line-height: 1.45;
            }

            .reset-message {
                display: flex;
                gap: 10px;
                padding: 13px;
                background: var(--profile-blue-soft);
                border-radius: 9px;
            }

            .reset-message-icon {
                width: 31px;
                height: 31px;
                flex: 0 0 31px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--profile-blue);
                color: #fff;
            }

            .reset-message strong {
                display: block;
                color: var(--profile-ink);
                font-size: 11.5px;
            }

            .reset-message p {
                margin: 4px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.55;
            }

            .delete-warning {
                display: flex;
                gap: 11px;
                padding: 13px;
                border-radius: 9px;
                background: var(--profile-danger-soft);
                border: 1px solid #f5d8d8;
            }

            .delete-warning-icon {
                width: 32px;
                height: 32px;
                flex: 0 0 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: #fff;
                color: var(--profile-danger);
            }

            .delete-warning strong {
                display: block;
                color: var(--profile-ink);
                font-size: 12px;
            }

            .delete-warning p {
                margin: 4px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.5;
            }

            .cancel-button,
            .primary-button,
            .danger-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                min-height: 36px;
                padding: 0 15px;
                border-radius: 8px;
                font-size: 11.5px;
                font-weight: 600;
                cursor: pointer;
                transition: all .15s ease;
            }

            .cancel-button {
                border: 1px solid var(--profile-border);
                background: var(--profile-surface-soft);
                color: var(--profile-ink-2);
            }

            .cancel-button:hover {
                background: #eef1f5;
            }

            .primary-button {
                border: 1px solid var(--profile-blue);
                background: var(--profile-blue);
                color: #fff;
            }

            .primary-button:hover {
                background: var(--profile-blue-dark);
                border-color: var(--profile-blue-dark);
            }

            .danger-button {
                border: 1px solid var(--profile-danger);
                background: var(--profile-danger);
                color: #fff;
            }

            .danger-button:hover {
                background: #bd4444;
                border-color: #bd4444;
            }

            .primary-button:disabled,
            .danger-button:disabled {
                opacity: .6;
                cursor: not-allowed;
            }

            @media (max-width: 991px) {
                .user-profile-page {
                    padding: 20px 18px 40px;
                }

                .profile-grid {
                    grid-template-columns: 1fr;
                }

                .profile-sidebar {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 250px;
                    gap: 14px;
                }

                .quick-card {
                    margin-top: 0;
                    align-self: start;
                }
            }

            @media (max-width: 767px) {
                .user-profile-page {
                    padding: 17px 12px 35px;
                }

                .page-heading {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .page-heading h1 {
                    font-size: 23px;
                }

                .profile-sidebar {
                    display: block;
                }

                .quick-card {
                    margin-top: 12px;
                }

                .content-header {
                    padding: 20px 17px 17px;
                }

                .data-row {
                    align-items: flex-start;
                    flex-direction: column;
                    gap: 7px;
                    padding: 14px 17px;
                }

                .data-label {
                    width: auto;
                }

                .data-value {
                    padding-left: 36px;
                }

                .profile-summary {
                    margin: 18px 17px;
                }

                .activity-item,
                .security-item,
                .notification-row {
                    padding: 15px 17px;
                }

                .activity-result {
                    display: none;
                }

                .activity-meta {
                    line-height: 1.7;
                }

                .pagination-container {
                    padding: 14px 17px;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .pagination-links {
                    width: 100%;
                    overflow-x: auto;
                    padding-bottom: 2px;
                }

                .security-item {
                    align-items: flex-start;
                    flex-wrap: wrap;
                }

                .security-item-content {
                    width: calc(100% - 55px);
                }

                .security-item-action {
                    margin-left: 52px;
                }

                .security-note,
                .info-banner {
                    margin-left: 17px;
                    margin-right: 17px;
                }

                .form-grid-two {
                    grid-template-columns: 1fr;
                }

                .modal-dialog {
                    margin: 10px;
                }
            }

            @media (max-width: 480px) {
                .profile-avatar-section {
                    padding-top: 48px;
                }

                .content-header {
                    flex-direction: column;
                }

                .outline-button,
                .event-count,
                .security-status {
                    align-self: flex-start;
                }

                .profile-nav-item {
                    padding: 10px;
                }
            }
        `}</style>
    );
}