import { useMemo, useRef, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function UsersIndex({ users, stats = {} }) {
    const { flash } = usePage().props;

    const [search, setSearch] = useState("");
    const [resetUser, setResetUser] = useState(null);

    const isPaginated =
        users &&
        !Array.isArray(users) &&
        Array.isArray(users.data);

    const userList = isPaginated ? users.data : users || [];
    const pagination = isPaginated ? users : null;

    /*
    |--------------------------------------------------------------------------
    | Client-side filtering
    |--------------------------------------------------------------------------
    | This is useful when the controller returns a normal array.
    |
    | For large datasets, use the server-side search implementation
    | shown later in this answer.
    |--------------------------------------------------------------------------
    */

    const filtered = useMemo(() => {
        if (!search.trim()) {
            return userList;
        }

        const q = search.toLowerCase().trim();

        return userList.filter((user) =>
            [
                user.name,
                user.email,
                user.role,
                user.active ? "active" : "inactive",
            ]
                .filter(Boolean)
                .some((field) =>
                    String(field).toLowerCase().includes(q),
                ),
        );
    }, [search, userList]);

    const totalUsers =
        stats.total ??
        pagination?.meta?.total ??
        pagination?.total ??
        userList.length;

    const activeUsers =
        stats.active ??
        userList.filter((user) => user.active).length;

    const inactiveUsers =
        stats.inactive ??
        userList.filter((user) => !user.active).length;

    const adminUsers =
        stats.admins ??
        userList.filter((user) => user.role === "admin").length;

    return (
        <AppLayout title="Users Management">
            <Head title="Users Management" />

            <UsersStyles />

            <div className="users-page">

                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}

                <div className="users-header">

                    <div className="users-heading">

                        <div className="breadcrumb">
                            Administration
                            <span>/</span>
                            Users
                        </div>

                        <div className="heading-row">
                            <div className="heading-icon">
                                <UsersIcon />
                            </div>

                            <div>
                                <h1>
                                    User Management
                                </h1>

                                <p>
                                    Manage talent accounts, roles,
                                    access and security.
                                </p>
                            </div>
                        </div>

                    </div>

                    <button
                        type="button"
                        className="primary-button"
                        data-bs-toggle="modal"
                        data-bs-target="#addUserModal"
                    >
                        <PlusIcon />
                        Add User
                    </button>

                </div>


                {/* =====================================================
                    FLASH MESSAGE
                ====================================================== */}

                {flash?.success && (
                    <div className="success-message">

                        <div className="success-icon">
                            <CheckIcon />
                        </div>

                        <div>
                            <strong>Success</strong>
                            <span>{flash.success}</span>
                        </div>

                    </div>
                )}

                {flash?.error && (
                    <div className="error-message">

                        <div className="error-icon">
                            <AlertIcon />
                        </div>

                        <div>
                            <strong>Something went wrong</strong>
                            <span>{flash.error}</span>
                        </div>

                    </div>
                )}


                {/* =====================================================
                    STATS
                ====================================================== */}

                <div className="stats-grid">

                    <StatCard
                        icon={<UsersIcon />}
                        label="Total users"
                        value={totalUsers}
                        description="Registered accounts"
                    />

                    <StatCard
                        icon={<ActiveIcon />}
                        label="Active users"
                        value={activeUsers}
                        description="Currently active"
                        positive
                    />

                    <StatCard
                        icon={<ShieldIcon />}
                        label="Administrators"
                        value={adminUsers}
                        description="Admin accounts"
                    />

                    <StatCard
                        icon={<InactiveIcon />}
                        label="Inactive"
                        value={inactiveUsers}
                        description="Restricted accounts"
                    />

                </div>


                {/* =====================================================
                    USERS CARD
                ====================================================== */}

                <div className="users-card">

                    {/* Toolbar */}

                    <div className="users-toolbar">

                        <div className="toolbar-left">

                            <div>
                                <h2>
                                    Platform users
                                </h2>

                                <p>
                                    View and manage all registered
                                    talent accounts.
                                </p>
                            </div>

                            <span className="users-count">
                                {totalUsers}
                            </span>

                        </div>


                        <div className="toolbar-right">

                            <div className="search-box">

                                <SearchIcon />

                                <input
                                    type="search"
                                    placeholder="Search users..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />

                                {search && (
                                    <button
                                        type="button"
                                        className="clear-search"
                                        onClick={() => setSearch("")}
                                        aria-label="Clear search"
                                    >
                                        ×
                                    </button>
                                )}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        TABLE
                    ================================================== */}

                    <div className="table-container">

                        <table className="users-table">

                            <thead>

                                <tr>
                                    <th className="id-column">
                                        ID
                                    </th>

                                    <th>
                                        User
                                    </th>

                                    <th>
                                        Role
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Joined
                                    </th>

                                    <th className="actions-column">
                                        Actions
                                    </th>
                                </tr>

                            </thead>

                            <tbody>

                                {filtered.length === 0 ? (

                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="empty-state"
                                        >

                                            <div className="empty-icon">
                                                <UsersIcon />
                                            </div>

                                            <h3>
                                                No users found
                                            </h3>

                                            <p>
                                                Try changing your search
                                                or add a new user.
                                            </p>

                                            {search && (
                                                <button
                                                    type="button"
                                                    className="secondary-button"
                                                    onClick={() =>
                                                        setSearch("")
                                                    }
                                                >
                                                    Clear search
                                                </button>
                                            )}

                                        </td>
                                    </tr>

                                ) : (

                                    filtered.map((user, index) => (
                                        <UserRow
                                            key={user.id}
                                            user={user}
                                            index={index}
                                            onReset={() =>
                                                setResetUser(user)
                                            }
                                        />
                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>


                    {/* =================================================
                        PAGINATION
                    ================================================== */}

                    {pagination && (
                        <Pagination pagination={pagination} />
                    )}

                </div>

            </div>


            {/* =========================================================
                MODALS
            ========================================================== */}

            {userList.map((user) => (
                <EditUserModal
                    key={`edit-${user.id}`}
                    user={user}
                />
            ))}

            {userList.map((user) => (
                <DeleteUserModal
                    key={`delete-${user.id}`}
                    user={user}
                />
            ))}

            <AddUserModal />

            {resetUser && (
                <ResetPasswordModal
                    user={resetUser}
                    onClose={() => setResetUser(null)}
                />
            )}

        </AppLayout>
    );
}


/* ================================================================
   STAT CARD
================================================================ */

function StatCard({
    icon,
    label,
    value,
    description,
    positive = false,
}) {
    return (
        <div className="stat-card">

            <div className="stat-card-top">

                <div className="stat-icon">
                    {icon}
                </div>

                {positive && (
                    <span className="stat-live">
                        <span />
                        Live
                    </span>
                )}

            </div>

            <div className="stat-value">
                {value}
            </div>

            <div className="stat-label">
                {label}
            </div>

            <div className="stat-description">
                {description}
            </div>

        </div>
    );
}


/* ================================================================
   USER ROW
================================================================ */

function UserRow({
    user,
    index,
    onReset,
}) {
    const initials = getInitials(user.name);

    const joined = user.created_at
        ? new Date(user.created_at).toLocaleDateString(
              "en-GB",
              {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
              },
          )
        : "—";

    return (
        <tr>

            <td>
                <span className="user-id">
                    #{String(user.id).padStart(4, "0")}
                </span>
            </td>


            <td>

                <div className="user-profile">

                    <div
                        className={`user-avatar avatar-${index % 4}`}
                    >
                        {initials}
                    </div>

                    <div className="user-details">

                        <div className="user-name">
                            {user.name}
                        </div>

                        <div className="user-email">
                            {user.email}
                        </div>

                    </div>

                </div>

            </td>


            <td>

                <span
                    className={`role-badge ${
                        user.role === "admin"
                            ? "role-admin"
                            : "role-user"
                    }`}
                >

                    {user.role === "admin" ? (
                        <>
                            <ShieldIcon />
                            Administrator
                        </>
                    ) : (
                        <>
                            <TalentIcon />
                            Talent
                        </>
                    )}

                </span>

            </td>


            <td>

                <span
                    className={`status-badge ${
                        user.active
                            ? "status-active"
                            : "status-inactive"
                    }`}
                >
                    <span className="status-indicator" />

                    {user.active
                        ? "Active"
                        : "Inactive"}
                </span>

            </td>


            <td>
                <span className="joined-date">
                    {joined}
                </span>
            </td>


            <td>

                <div className="action-buttons">

                    <Link
                        href={route(
                            "admin.users.show",
                            user.id,
                        )}
                        className="table-action view-action"
                    >
                        <EyeIcon />
                        <span>View</span>
                    </Link>


                    <button
                        type="button"
                        className="table-action edit-action"
                        data-bs-toggle="modal"
                        data-bs-target={`#editModal${user.id}`}
                    >
                        <EditIcon />
                        <span>Edit</span>
                    </button>


                    <button
                        type="button"
                        className="table-action reset-action"
                        onClick={onReset}
                    >
                        <KeyIcon />
                        <span>Reset</span>
                    </button>


                    <button
                        type="button"
                        className="table-action delete-action"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteModal${user.id}`}
                    >
                        <TrashIcon />
                    </button>

                </div>

            </td>

        </tr>
    );
}


/* ================================================================
   PAGINATION
================================================================ */

function Pagination({ pagination }) {
    const links =
        pagination.meta?.links ??
        pagination.links ??
        [];

    const from =
        pagination.meta?.from ??
        pagination.from ??
        0;

    const to =
        pagination.meta?.to ??
        pagination.to ??
        0;

    const total =
        pagination.meta?.total ??
        pagination.total ??
        0;

    if (!links.length) {
        return null;
    }

    return (
        <div className="pagination-container">

            <div className="pagination-info">

                Showing{" "}
                <strong>{from}</strong>
                {" "}to{" "}
                <strong>{to}</strong>
                {" "}of{" "}
                <strong>{total}</strong>
                {" "}users

            </div>


            <div className="pagination-links">

                {links.map((link, index) => (

                    <Link
                        key={index}
                        href={link.url || "#"}
                        preserveScroll
                        preserveState
                        className={`
                            pagination-link
                            ${link.active ? "active" : ""}
                            ${!link.url ? "disabled" : ""}
                        `}
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />

                ))}

            </div>

        </div>
    );
}


/* ================================================================
   ADD USER MODAL
================================================================ */

function AddUserModal() {
    const modalRef = useRef(null);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        email: "",
        password: "",
        role: "user",
        active: "1",
    });

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current,
            );

        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.users.store"), {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                closeModal();
            },
        });
    };

    return (
        <div
            className="modal fade"
            id="addUserModal"
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
                                Add new user
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="modal-close"
                            data-bs-dismiss="modal"
                        >
                            ×
                        </button>

                    </div>


                    <div className="modal-body">

                        <div className="form-group">

                            <label>
                                Full name
                            </label>

                            <input
                                type="text"
                                className="modern-input"
                                placeholder="e.g. Alice Bennett"
                                value={data.name}
                                onChange={(e) =>
                                    setData(
                                        "name",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <FieldError error={errors.name} />

                        </div>


                        <div className="form-group">

                            <label>
                                Email address
                            </label>

                            <input
                                type="email"
                                className="modern-input"
                                placeholder="alice@example.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData(
                                        "email",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <FieldError error={errors.email} />

                        </div>


                        <div className="form-group">

                            <label>
                                Temporary password
                            </label>

                            <input
                                type="password"
                                className="modern-input"
                                placeholder="Enter temporary password"
                                value={data.password}
                                onChange={(e) =>
                                    setData(
                                        "password",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <div className="field-hint">
                                The user can change this password
                                after signing in.
                            </div>

                            <FieldError error={errors.password} />

                        </div>


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Role
                                </label>

                                <select
                                    className="modern-input"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData(
                                            "role",
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="user">
                                        Talent
                                    </option>

                                    <option value="admin">
                                        Administrator
                                    </option>
                                </select>

                            </div>


                            <div className="form-group">

                                <label>
                                    Account status
                                </label>

                                <select
                                    className="modern-input"
                                    value={data.active}
                                    onChange={(e) =>
                                        setData(
                                            "active",
                                            e.target.value,
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

                            </div>

                        </div>

                    </div>


                    <div className="modal-footer">

                        <button
                            type="button"
                            className="secondary-button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="primary-button"
                            disabled={processing}
                        >
                            <PlusIcon />

                            {processing
                                ? "Creating..."
                                : "Create user"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


/* ================================================================
   EDIT USER MODAL
================================================================ */

function EditUserModal({ user }) {
    const modalRef = useRef(null);

    /*
     * IMPORTANT:
     * Password has intentionally been removed.
     *
     * Password reset is now handled separately through the
     * Reset Password modal.
     */

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        name: user.name ?? "",
        email: user.email ?? "",
        role: user.role ?? "user",
        active: user.active ? "1" : "0",
    });

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current,
            );

        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();

        put(
            route(
                "admin.users.update",
                user.id,
            ),
            {
                preserveScroll: true,

                onSuccess: closeModal,
            },
        );
    };

    return (
        <div
            className="modal fade"
            id={`editModal${user.id}`}
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
                                Edit user
                            </h5>

                        </div>

                        <button
                            type="button"
                            className="modal-close"
                            data-bs-dismiss="modal"
                        >
                            ×
                        </button>

                    </div>


                    <div className="modal-body">

                        <div className="edit-user-preview">

                            <div className="preview-avatar">
                                {getInitials(user.name)}
                            </div>

                            <div>
                                <strong>
                                    {user.name}
                                </strong>

                                <span>
                                    {user.email}
                                </span>
                            </div>

                        </div>


                        <div className="form-group">

                            <label>
                                Full name
                            </label>

                            <input
                                type="text"
                                className="modern-input"
                                value={data.name}
                                onChange={(e) =>
                                    setData(
                                        "name",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <FieldError
                                error={errors.name}
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                Email address
                            </label>

                            <input
                                type="email"
                                className="modern-input"
                                value={data.email}
                                onChange={(e) =>
                                    setData(
                                        "email",
                                        e.target.value,
                                    )
                                }
                                required
                            />

                            <FieldError
                                error={errors.email}
                            />

                        </div>


                        {/* PASSWORD REMOVED */}


                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Role
                                </label>

                                <select
                                    className="modern-input"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData(
                                            "role",
                                            e.target.value,
                                        )
                                    }
                                >

                                    <option value="user">
                                        Talent
                                    </option>

                                    <option value="admin">
                                        Administrator
                                    </option>

                                </select>

                                <FieldError
                                    error={errors.role}
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Account status
                                </label>

                                <select
                                    className="modern-input"
                                    value={data.active}
                                    onChange={(e) =>
                                        setData(
                                            "active",
                                            e.target.value,
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

                                <FieldError
                                    error={errors.active}
                                />

                            </div>

                        </div>


                        <div className="security-note">

                            <div className="security-note-icon">
                                <ShieldIcon />
                            </div>

                            <div>

                                <strong>
                                    Password security
                                </strong>

                                <span>
                                    Passwords are managed separately.
                                    Use the Reset Password action to
                                    send this user a secure password
                                    reset link.
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="modal-footer">

                        <button
                            type="button"
                            className="secondary-button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="primary-button"
                            disabled={processing}
                        >

                            <CheckIcon />

                            {processing
                                ? "Saving..."
                                : "Save changes"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


/* ================================================================
   RESET PASSWORD MODAL
================================================================ */

function ResetPasswordModal({
    user,
    onClose,
}) {
    const modalRef = useRef(null);

    const {
        post,
        processing,
    } = useForm({});

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current,
            );

        instance?.hide();

        onClose();
    };

    const submit = (e) => {
        e.preventDefault();

        post(
            route(
                "admin.users.password-reset",
                user.id,
            ),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeModal();
                },
            },
        );
    };

    return (
        <div
            className="modal fade show"
            ref={modalRef}
            style={{
                display: "block",
                background: "rgba(15, 23, 42, .38)",
            }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
        >

            <div className="modal-dialog modal-dialog-centered modal-sm">

                <form
                    className="modal-content modern-modal"
                    onSubmit={submit}
                >

                    <div className="reset-modal-content">

                        <div className="reset-icon">
                            <KeyIcon />
                        </div>

                        <h3>
                            Send password reset?
                        </h3>

                        <p>
                            We'll send a secure password reset
                            link to:
                        </p>

                        <div className="reset-user-card">

                            <div className="preview-avatar">
                                {getInitials(user.name)}
                            </div>

                            <div>
                                <strong>
                                    {user.name}
                                </strong>

                                <span>
                                    {user.email}
                                </span>
                            </div>

                        </div>

                        <div className="reset-warning">

                            <ShieldIcon />

                            <span>
                                The existing password will not be
                                shown or changed by the administrator.
                                The user will create a new password
                                using the secure link.
                            </span>

                        </div>

                    </div>


                    <div className="modal-footer">

                        <button
                            type="button"
                            className="secondary-button"
                            onClick={closeModal}
                            disabled={processing}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="primary-button"
                            disabled={processing}
                        >

                            <KeyIcon />

                            {processing
                                ? "Sending..."
                                : "Send reset link"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


/* ================================================================
   DELETE USER MODAL
================================================================ */

function DeleteUserModal({ user }) {
    const modalRef = useRef(null);

    const {
        delete: destroy,
        processing,
    } = useForm({});

    const closeModal = () => {
        const instance =
            window.bootstrap?.Modal.getInstance(
                modalRef.current,
            );

        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();

        destroy(
            route(
                "admin.users.destroy",
                user.id,
            ),
            {
                preserveScroll: true,

                onSuccess: closeModal,
            },
        );
    };

    return (
        <div
            className="modal fade"
            id={`deleteModal${user.id}`}
            ref={modalRef}
            tabIndex="-1"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-dialog-centered modal-sm">

                <form
                    className="modal-content modern-modal"
                    onSubmit={submit}
                >

                    <div className="delete-modal-body">

                        <div className="delete-icon">
                            <TrashIcon />
                        </div>

                        <h3>
                            Delete user?
                        </h3>

                        <p>
                            You are about to permanently delete
                            <strong> {user.name}</strong>.
                        </p>

                        <div className="delete-warning">
                            This action cannot be undone and may
                            remove associated account data.
                        </div>

                    </div>


                    <div className="modal-footer">

                        <button
                            type="button"
                            className="secondary-button"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="danger-button"
                            disabled={processing}
                        >

                            <TrashIcon />

                            {processing
                                ? "Deleting..."
                                : "Delete user"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


/* ================================================================
   FIELD ERROR
================================================================ */

function FieldError({ error }) {
    if (!error) {
        return null;
    }

    return (
        <small className="field-error">
            {error}
        </small>
    );
}


/* ================================================================
   HELPERS
================================================================ */

function getInitials(name = "") {
    const parts = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (!parts.length) {
        return "U";
    }

    if (parts.length === 1) {
        return parts[0]
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        parts[0][0] +
        parts[parts.length - 1][0]
    ).toUpperCase();
}


/* ================================================================
   ICONS
================================================================ */

function PlusIcon(props) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}

function CheckIcon(props) {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function SearchIcon(props) {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ActiveIcon(props) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function InactiveIcon(props) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
        </svg>
    );
}

function ShieldIcon(props) {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

function TalentIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
    );
}

function EyeIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            {...props}
        >
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function EditIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            {...props}
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
    );
}

function KeyIcon(props) {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="7.5" cy="15.5" r="4.5" />
            <path d="m11 12 8-8" />
            <path d="m15 8 2 2" />
            <path d="m18 5 2 2" />
        </svg>
    );
}

function TrashIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            {...props}
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
    );
}

function AlertIcon(props) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    );
}


/* ================================================================
   STYLES
================================================================ */

function UsersStyles() {
    return (
        <style>{`

            @import url(
                'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap'
            );

            :root {
                --talent-blue: #5D89C8;
                --talent-blue-dark: #426FAE;
                --talent-blue-soft: #EEF5FD;

                --green: #22A06B;
                --green-soft: #EAF8F1;

                --red: #D94C4C;
                --red-soft: #FFF1F1;

                --ink: #172033;
                --ink-2: #465166;
                --muted: #7C8799;
                --muted-light: #A2ACBB;

                --line: #E7EBF1;
                --line-soft: #F0F2F5;

                --page: #F7F9FC;
                --surface: #FFFFFF;
                --surface-soft: #FAFBFD;

                --display:
                    'Manrope',
                    sans-serif;

                --body:
                    'DM Sans',
                    -apple-system,
                    BlinkMacSystemFont,
                    sans-serif;
            }


            /* =========================================================
               PAGE
            ========================================================== */

            .users-page {
                min-height: calc(100vh - 80px);
                padding: 32px 32px 48px;
                background: var(--page);
                color: var(--ink);
                font-family: var(--body);
            }


            /* =========================================================
               HEADER
            ========================================================== */

            .users-header {
                max-width: 1500px;
                margin: 0 auto 28px;

                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 25px;
            }

            .breadcrumb {
                display: flex;
                gap: 8px;
                align-items: center;

                color: var(--muted);
                font-size: 12px;
                font-weight: 500;

                margin-bottom: 10px;
            }

            .breadcrumb span {
                color: #C5CBD5;
            }

            .heading-row {
                display: flex;
                align-items: center;
                gap: 13px;
            }

            .heading-icon {
                width: 44px;
                height: 44px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 13px;

                color: var(--talent-blue);
                background: var(--talent-blue-soft);

                border: 1px solid #DCEAF9;
            }

            .heading-row h1 {
                margin: 0;

                font-family: var(--display);
                font-size: 25px;
                font-weight: 800;
                letter-spacing: -.5px;

                color: var(--ink);
            }

            .heading-row p {
                margin: 3px 0 0;

                color: var(--muted);
                font-size: 13px;
            }


            /* =========================================================
               BUTTONS
            ========================================================== */

            .primary-button {
                border: none;

                min-height: 40px;

                padding: 0 17px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;

                border-radius: 9px;

                background: var(--talent-blue);
                color: white;

                font-size: 13px;
                font-weight: 600;

                cursor: pointer;
                text-decoration: none;

                transition:
                    background .18s ease,
                    transform .18s ease,
                    box-shadow .18s ease;
            }

            .primary-button:hover {
                color: white;
                background: var(--talent-blue-dark);

                transform: translateY(-1px);

                box-shadow:
                    0 7px 18px rgba(93, 137, 200, .22);
            }

            .primary-button:disabled {
                opacity: .55;
                cursor: not-allowed;
                transform: none;
            }

            .secondary-button {
                min-height: 40px;

                padding: 0 16px;

                border: 1px solid var(--line);
                border-radius: 9px;

                background: white;
                color: var(--ink-2);

                font-size: 13px;
                font-weight: 600;

                cursor: pointer;

                transition: all .15s ease;
            }

            .secondary-button:hover {
                border-color: #CDD5E0;
                background: #F8FAFC;
                color: var(--ink);
            }

            .danger-button {
                min-height: 40px;

                padding: 0 16px;

                border: none;
                border-radius: 9px;

                background: var(--red);
                color: white;

                font-size: 13px;
                font-weight: 600;

                display: inline-flex;
                align-items: center;
                gap: 7px;

                cursor: pointer;
            }

            .danger-button:hover {
                background: #BE3E3E;
            }


            /* =========================================================
               ALERTS
            ========================================================== */

            .success-message,
            .error-message {
                max-width: 1500px;
                margin: 0 auto 20px;

                display: flex;
                align-items: center;
                gap: 12px;

                padding: 13px 15px;

                border-radius: 11px;

                background: white;

                border: 1px solid var(--line);
            }

            .success-icon,
            .error-icon {
                width: 34px;
                height: 34px;

                flex-shrink: 0;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 9px;
            }

            .success-icon {
                background: var(--green-soft);
                color: var(--green);
            }

            .error-icon {
                background: var(--red-soft);
                color: var(--red);
            }

            .success-message strong,
            .error-message strong {
                display: block;

                font-size: 12px;
                font-weight: 700;

                margin-bottom: 2px;
            }

            .success-message span,
            .error-message span {
                display: block;

                color: var(--muted);
                font-size: 12.5px;
            }


            /* =========================================================
               STATS
            ========================================================== */

            .stats-grid {
                max-width: 1500px;
                margin: 0 auto 22px;

                display: grid;
                grid-template-columns: repeat(4, 1fr);

                gap: 14px;
            }

            .stat-card {
                padding: 18px;

                background: var(--surface);

                border: 1px solid var(--line);
                border-radius: 13px;

                box-shadow:
                    0 2px 7px rgba(27, 39, 57, .025);
            }

            .stat-card-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .stat-icon {
                width: 36px;
                height: 36px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 10px;

                background: var(--talent-blue-soft);
                color: var(--talent-blue);
            }

            .stat-live {
                display: flex;
                align-items: center;
                gap: 5px;

                color: var(--green);

                font-size: 10px;
                font-weight: 700;
            }

            .stat-live span {
                width: 6px;
                height: 6px;

                border-radius: 50%;

                background: var(--green);
            }

            .stat-value {
                margin-top: 15px;

                color: var(--ink);

                font-family: var(--display);
                font-size: 25px;
                font-weight: 800;
            }

            .stat-label {
                margin-top: 1px;

                color: var(--ink-2);

                font-size: 13px;
                font-weight: 700;
            }

            .stat-description {
                margin-top: 3px;

                color: var(--muted);

                font-size: 11.5px;
            }


            /* =========================================================
               MAIN CARD
            ========================================================== */

            .users-card {
                max-width: 1500px;
                margin: 0 auto;

                overflow: hidden;

                background: var(--surface);

                border: 1px solid var(--line);
                border-radius: 14px;

                box-shadow:
                    0 4px 16px rgba(27, 39, 57, .035);
            }


            /* =========================================================
               TOOLBAR
            ========================================================== */

            .users-toolbar {
                min-height: 76px;

                padding: 15px 20px;

                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;

                border-bottom: 1px solid var(--line);
            }

            .toolbar-left {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .toolbar-left h2 {
                margin: 0;

                font-family: var(--display);
                font-size: 14px;
                font-weight: 800;

                color: var(--ink);
            }

            .toolbar-left p {
                margin: 2px 0 0;

                color: var(--muted);

                font-size: 11.5px;
            }

            .users-count {
                padding: 4px 9px;

                border-radius: 7px;

                color: var(--talent-blue-dark);
                background: var(--talent-blue-soft);

                font-size: 11px;
                font-weight: 700;
            }

            .search-box {
                width: 245px;
                height: 38px;

                position: relative;

                display: flex;
                align-items: center;
            }

            .search-box > svg {
                position: absolute;
                left: 12px;

                color: var(--muted-light);
            }

            .search-box input {
                width: 100%;
                height: 100%;

                padding: 0 35px 0 36px;

                border: 1px solid var(--line);
                border-radius: 9px;

                outline: none;

                color: var(--ink);
                background: #FBFCFD;

                font-family: var(--body);
                font-size: 12.5px;

                transition:
                    border-color .15s ease,
                    box-shadow .15s ease,
                    background .15s ease;
            }

            .search-box input:focus {
                border-color: var(--talent-blue);
                background: white;

                box-shadow:
                    0 0 0 3px rgba(93, 137, 200, .11);
            }

            .search-box input::placeholder {
                color: #A6AFBD;
            }

            .clear-search {
                position: absolute;
                right: 8px;

                width: 24px;
                height: 24px;

                border: none;
                background: transparent;

                color: var(--muted);

                cursor: pointer;

                font-size: 18px;
                line-height: 1;
            }


            /* =========================================================
               TABLE
            ========================================================== */

            .table-container {
                width: 100%;
                overflow-x: auto;
            }

            .users-table {
                width: 100%;
                min-width: 950px;

                border-collapse: collapse;
            }

            .users-table thead {
                background: #FBFCFD;
            }

            .users-table th {
                padding: 12px 20px;

                border-bottom: 1px solid var(--line);

                color: #8993A3;

                text-align: left;

                font-size: 10px;
                font-weight: 700;

                text-transform: uppercase;
                letter-spacing: .075em;

                white-space: nowrap;
            }

            .users-table td {
                padding: 14px 20px;

                border-bottom: 1px solid var(--line-soft);

                vertical-align: middle;
            }

            .users-table tbody tr {
                transition: background .15s ease;
            }

            .users-table tbody tr:hover {
                background: #FCFDFE;
            }

            .users-table tbody tr:last-child td {
                border-bottom: none;
            }

            .id-column {
                width: 85px;
            }

            .actions-column {
                width: 280px;
            }


            /* =========================================================
               USER
            ========================================================== */

            .user-id {
                padding: 5px 8px;

                border-radius: 6px;

                background: #F7F8FA;
                border: 1px solid var(--line);

                color: var(--muted);

                font-size: 10.5px;
                font-weight: 600;
            }

            .user-profile {
                display: flex;
                align-items: center;
                gap: 11px;
            }

            .user-avatar,
            .preview-avatar {
                width: 38px;
                height: 38px;

                flex-shrink: 0;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 11px;

                font-size: 11px;
                font-weight: 800;
            }

            .avatar-0 {
                background: #EDF4FC;
                color: #4B79B7;
            }

            .avatar-1 {
                background: #F2EEFC;
                color: #7459A8;
            }

            .avatar-2 {
                background: #EEF8F3;
                color: #36865F;
            }

            .avatar-3 {
                background: #FFF3EA;
                color: #B46B38;
            }

            .user-name {
                color: var(--ink);

                font-size: 13px;
                font-weight: 700;
            }

            .user-email {
                margin-top: 2px;

                color: var(--muted);

                font-size: 11.5px;
            }


            /* =========================================================
               ROLE
            ========================================================== */

            .role-badge {
                display: inline-flex;
                align-items: center;
                gap: 5px;

                padding: 5px 9px;

                border-radius: 7px;

                font-size: 10.5px;
                font-weight: 700;
            }

            .role-admin {
                color: #536A89;
                background: #EEF3F9;
                border: 1px solid #DCE5F0;
            }

            .role-user {
                color: #596475;
                background: #F7F8FA;
                border: 1px solid #E7EAF0;
            }


            /* =========================================================
               STATUS
            ========================================================== */

            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 7px;

                font-size: 11.5px;
                font-weight: 600;
            }

            .status-indicator {
                width: 7px;
                height: 7px;

                border-radius: 50%;
            }

            .status-active {
                color: #24835A;
            }

            .status-active .status-indicator {
                background: #38B879;
                box-shadow:
                    0 0 0 3px rgba(56, 184, 121, .11);
            }

            .status-inactive {
                color: #8993A3;
            }

            .status-inactive .status-indicator {
                background: #B7BEC9;
            }

            .joined-date {
                color: var(--muted);

                font-size: 12px;
            }


            /* =========================================================
               ACTIONS
            ========================================================== */

            .action-buttons {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .table-action {
                height: 31px;

                padding: 0 9px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 5px;

                border-radius: 7px;

                border: 1px solid var(--line);

                background: white;

                color: var(--ink-2);

                font-family: var(--body);
                font-size: 11px;
                font-weight: 600;

                text-decoration: none;

                cursor: pointer;

                transition:
                    background .15s ease,
                    border-color .15s ease,
                    color .15s ease;
            }

            .table-action:hover {
                background: #F7F9FC;
            }

            .view-action:hover {
                color: var(--talent-blue-dark);
                border-color: #C9DCF1;
                background: var(--talent-blue-soft);
            }

            .edit-action:hover {
                color: var(--ink);
                border-color: #CDD4DE;
            }

            .reset-action {
                color: #5D78A0;
            }

            .reset-action:hover {
                color: var(--talent-blue-dark);
                border-color: #C9DCF1;
                background: var(--talent-blue-soft);
            }

            .delete-action {
                width: 32px;
                padding: 0;

                color: #9A6A6A;
            }

            .delete-action:hover {
                color: var(--red);
                border-color: #F1CCCC;
                background: var(--red-soft);
            }


            /* =========================================================
               PAGINATION
            ========================================================== */

            .pagination-container {
                min-height: 64px;

                padding: 12px 20px;

                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;

                border-top: 1px solid var(--line);
            }

            .pagination-info {
                color: var(--muted);
                font-size: 11.5px;
            }

            .pagination-info strong {
                color: var(--ink-2);
            }

            .pagination-links {
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .pagination-link {
                min-width: 31px;
                height: 31px;

                padding: 0 8px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--line);
                border-radius: 7px;

                background: white;

                color: var(--ink-2);

                text-decoration: none;

                font-size: 11.5px;
                font-weight: 600;

                transition: all .15s ease;
            }

            .pagination-link:hover {
                color: var(--talent-blue-dark);
                background: var(--talent-blue-soft);
                border-color: #C9DCF1;
            }

            .pagination-link.active {
                color: white;
                background: var(--talent-blue);
                border-color: var(--talent-blue);
            }

            .pagination-link.disabled {
                opacity: .4;
                pointer-events: none;
            }


            /* =========================================================
               EMPTY
            ========================================================== */

            .empty-state {
                padding: 65px 20px !important;

                text-align: center;
            }

            .empty-icon {
                width: 52px;
                height: 52px;

                margin: 0 auto 12px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 14px;

                background: #F4F6F9;
                color: #9BA5B4;
            }

            .empty-state h3 {
                margin: 0;

                font-family: var(--display);
                font-size: 14px;
                font-weight: 700;

                color: var(--ink);
            }

            .empty-state p {
                margin: 5px 0 15px;

                color: var(--muted);
                font-size: 12px;
            }


            /* =========================================================
               MODAL
            ========================================================== */

            .modern-modal {
                overflow: hidden;

                border: 1px solid var(--line) !important;
                border-radius: 16px !important;

                background: white !important;

                box-shadow:
                    0 30px 80px rgba(25, 39, 58, .15);

                font-family: var(--body);
            }

            .modern-modal .modal-header {
                padding: 20px 22px 17px;

                border-bottom: 1px solid var(--line);

                background: #FCFDFE;
            }

            .modal-kicker {
                margin-bottom: 3px;

                color: var(--talent-blue);

                font-size: 9px;
                font-weight: 800;

                letter-spacing: .12em;
            }

            .modern-modal .modal-title {
                margin: 0;

                color: var(--ink);

                font-family: var(--display);
                font-size: 17px;
                font-weight: 800;
            }

            .modal-close {
                width: 31px;
                height: 31px;

                border: 1px solid var(--line);
                border-radius: 8px;

                background: white;

                color: var(--muted);

                font-size: 20px;
                line-height: 1;

                cursor: pointer;
            }

            .modal-close:hover {
                color: var(--ink);
                background: #F5F7FA;
            }

            .modern-modal .modal-body {
                padding: 21px 22px;
            }

            .modern-modal .modal-footer {
                padding: 14px 22px;

                border-top: 1px solid var(--line);

                background: #FCFDFE;
            }


            /* =========================================================
               FORMS
            ========================================================== */

            .form-group {
                margin-bottom: 16px;
            }

            .form-group:last-child {
                margin-bottom: 0;
            }

            .form-group label {
                display: block;

                margin-bottom: 6px;

                color: var(--ink-2);

                font-size: 11.5px;
                font-weight: 700;
            }

            .modern-input {
                width: 100%;
                min-height: 40px;

                padding: 8px 11px;

                border: 1px solid var(--line);
                border-radius: 9px;

                outline: none;

                background: #FBFCFD;
                color: var(--ink);

                font-family: var(--body);
                font-size: 13px;

                transition:
                    border-color .15s ease,
                    box-shadow .15s ease,
                    background .15s ease;
            }

            .modern-input:focus {
                border-color: var(--talent-blue);
                background: white;

                box-shadow:
                    0 0 0 3px rgba(93, 137, 200, .11);
            }

            .modern-input::placeholder {
                color: #A5AEBC;
            }

            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 13px;
            }

            .field-hint {
                margin-top: 5px;

                color: var(--muted);

                font-size: 10.5px;
                line-height: 1.5;
            }

            .field-error {
                display: block;

                margin-top: 5px;

                color: var(--red);

                font-size: 10.5px;
                font-weight: 600;
            }


            /* =========================================================
               EDIT PREVIEW
            ========================================================== */

            .edit-user-preview,
            .reset-user-card {
                display: flex;
                align-items: center;
                gap: 11px;

                margin-bottom: 19px;

                padding: 11px;

                border: 1px solid var(--line);
                border-radius: 11px;

                background: #FBFCFD;
            }

            .edit-user-preview strong,
            .reset-user-card strong {
                display: block;

                color: var(--ink);

                font-size: 12.5px;
                font-weight: 700;
            }

            .edit-user-preview span,
            .reset-user-card span {
                display: block;

                margin-top: 2px;

                color: var(--muted);

                font-size: 11px;
            }

            .preview-avatar {
                background: var(--talent-blue-soft);
                color: var(--talent-blue-dark);
            }


            /* =========================================================
               SECURITY NOTE
            ========================================================== */

            .security-note {
                margin-top: 4px;

                display: flex;
                gap: 10px;

                padding: 12px;

                border: 1px solid #DCEAF9;
                border-radius: 10px;

                background: var(--talent-blue-soft);
            }

            .security-note-icon {
                width: 28px;
                height: 28px;

                flex-shrink: 0;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 8px;

                background: white;
                color: var(--talent-blue);
            }

            .security-note strong {
                display: block;

                color: #3F628E;

                font-size: 11.5px;
                font-weight: 700;
            }

            .security-note span {
                display: block;

                margin-top: 2px;

                color: #7088A5;

                font-size: 10.5px;
                line-height: 1.5;
            }


            /* =========================================================
               RESET MODAL
            ========================================================== */

            .reset-modal-content {
                padding: 25px 22px 10px;

                text-align: center;
            }

            .reset-icon {
                width: 48px;
                height: 48px;

                margin: 0 auto 13px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 14px;

                background: var(--talent-blue-soft);
                color: var(--talent-blue);
            }

            .reset-modal-content h3,
            .delete-modal-body h3 {
                margin: 0;

                color: var(--ink);

                font-family: var(--display);
                font-size: 17px;
                font-weight: 800;
            }

            .reset-modal-content > p {
                margin: 7px 0 13px;

                color: var(--muted);

                font-size: 12px;
                line-height: 1.55;
            }

            .reset-user-card {
                text-align: left;
                margin-bottom: 12px;
            }

            .reset-warning {
                display: flex;
                align-items: flex-start;
                gap: 8px;

                padding: 10px;

                text-align: left;

                border-radius: 9px;

                background: #F8FAFC;

                color: var(--muted);

                font-size: 10.5px;
                line-height: 1.5;
            }

            .reset-warning svg {
                flex-shrink: 0;
                margin-top: 1px;

                color: var(--talent-blue);
            }


            /* =========================================================
               DELETE MODAL
            ========================================================== */

            .delete-modal-body {
                padding: 26px 22px 15px;

                text-align: center;
            }

            .delete-icon {
                width: 48px;
                height: 48px;

                margin: 0 auto 13px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 14px;

                background: var(--red-soft);
                color: var(--red);
            }

            .delete-modal-body p {
                margin: 8px 0 12px;

                color: var(--muted);

                font-size: 12px;
                line-height: 1.6;
            }

            .delete-modal-body strong {
                color: var(--ink);
            }

            .delete-warning {
                padding: 10px;

                border-radius: 9px;

                background: #FFF8F8;

                color: #9A6A6A;

                font-size: 10.5px;
                line-height: 1.5;
            }


            /* =========================================================
               RESPONSIVE
            ========================================================== */

            @media (max-width: 1100px) {

                .users-page {
                    padding: 25px 22px 40px;
                }

                .stats-grid {
                    grid-template-columns:
                        repeat(2, 1fr);
                }

            }


            @media (max-width: 760px) {

                .users-page {
                    padding: 20px 15px 35px;
                }

                .users-header {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .users-header .primary-button {
                    width: 100%;
                }

                .heading-row h1 {
                    font-size: 21px;
                }

                .heading-row p {
                    font-size: 12px;
                }

                .stats-grid {
                    grid-template-columns:
                        repeat(2, 1fr);

                    gap: 10px;
                }

                .stat-card {
                    padding: 14px;
                }

                .stat-value {
                    font-size: 22px;
                }

                .users-toolbar {
                    align-items: stretch;
                    flex-direction: column;
                }

                .toolbar-right,
                .search-box {
                    width: 100%;
                }

                .pagination-container {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .pagination-links {
                    width: 100%;
                    overflow-x: auto;
                    padding-bottom: 2px;
                }

            }


            @media (max-width: 480px) {

                .stats-grid {
                    grid-template-columns: 1fr 1fr;
                }

                .stat-description {
                    display: none;
                }

                .form-row {
                    grid-template-columns: 1fr;
                    gap: 0;
                }

                .modern-modal .modal-body {
                    padding: 18px;
                }

                .modern-modal .modal-footer {
                    padding: 12px 18px;
                }

                .action-buttons {
                    flex-wrap: wrap;
                }

                .table-action span {
                    display: none;
                }

                .table-action {
                    width: 32px;
                    padding: 0;
                }

            }

        `}</style>
    );
}