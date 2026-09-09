// resources/js/Pages/Admin/Users/Index.jsx

import { Head, Link, useForm, usePage } from "@inertiajs/react";
import {
    Activity,
    AlertCircle,
    ArrowLeft,
    Check,
    ChevronLeft,
    ChevronRight,
    CircleUserRound,
    Edit3,
    Eye,
    KeyRound,
    Mail,
    Plus,
    RefreshCw,
    Search,
    ShieldCheck,
    Trash2,
    UserCheck,
    UserPlus,
    Users as UsersIcon,
    UserX,
    X,
} from "lucide-react";
import { useMemo, useState } from "react";

import AppLayout from "@/Layouts/AppLayout";

export default function UsersIndex({ users, stats = {} }) {
    const { flash } = usePage().props;

    const userList = users?.data || users || [];

    const [search, setSearch] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalType, setModalType] = useState(null);

    const openModal = (type, user = null) => {
        setSelectedUser(user);
        setModalType(type);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setModalType(null);
    };

    const filteredUsers = useMemo(() => {
        const term = search.trim().toLowerCase();

        if (!term) return userList;

        return userList.filter((user) => {
            return (
                String(user.id || "")
                    .toLowerCase()
                    .includes(term) ||
                String(user.name || "")
                    .toLowerCase()
                    .includes(term) ||
                String(user.email || "")
                    .toLowerCase()
                    .includes(term) ||
                String(user.role || "")
                    .toLowerCase()
                    .includes(term)
            );
        });
    }, [userList, search]);

    const totalUsers =
        stats.total ??
        userList.filter((user) => ["admin", "user"].includes(user.role)).length;

    const activeUsers =
        stats.active ??
        userList.filter(
            (user) =>
                user.role === "user" &&
                (user.active === 1 ||
                    user.active === "1" ||
                    user.active === true)
        ).length;

    const admins =
        stats.admins ??
        userList.filter((user) => user.role === "admin").length;

    const inactiveUsers =
        stats.inactive ??
        userList.filter(
            (user) =>
                user.role === "user" &&
                (user.active === 0 ||
                    user.active === "0" ||
                    user.active === false)
        ).length;

    return (
        <AppLayout>
            <Head title="Users Management" />

            <div className="users-page">
                <div className="users-container">
                    {/* PAGE HEADER */}
                    <div className="page-header">
                        <div className="header-content">
                            <div className="breadcrumb">
                                <Link href={route("admin.dashboard")}>
                                    Dashboard
                                </Link>

                                <ChevronRight size={14} />

                                <span>Users</span>
                            </div>

                            <div className="header-main">
                                <div>
                                    <div className="title-row">
                                        <div className="title-icon">
                                            <UsersIcon size={25} />
                                        </div>

                                        <div>
                                            <h1>User Management</h1>
                                            <p>
                                                Manage administrators and
                                                platform users.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowAddModal(true)}
                                >
                                    <Plus size={18} />
                                    <span>Add User</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FLASH MESSAGES */}
                    {flash?.success && (
                        <div className="alert alert-success">
                            <div className="alert-icon">
                                <Check size={18} />
                            </div>

                            <div>
                                <strong>Success</strong>
                                <p>{flash.success}</p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {}}
                                className="alert-close"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}

                    {flash?.error && (
                        <div className="alert alert-danger">
                            <div className="alert-icon">
                                <AlertCircle size={18} />
                            </div>

                            <div>
                                <strong>Error</strong>
                                <p>{flash.error}</p>
                            </div>
                        </div>
                    )}

                    {/* STATISTICS */}
                    <div className="stats-grid">
                        <StatCard
                            title="Total Users"
                            value={totalUsers}
                            description="Registered accounts"
                            icon={<UsersIcon size={21} />}
                            type="primary"
                        />

                        <StatCard
                            title="Active Users"
                            value={activeUsers}
                            description="Currently active"
                            icon={<UserCheck size={21} />}
                            type="success"
                        />

                        <StatCard
                            title="Administrators"
                            value={admins}
                            description="Admin accounts"
                            icon={<ShieldCheck size={21} />}
                            type="dark"
                        />

                        <StatCard
                            title="Inactive"
                            value={inactiveUsers}
                            description="Currently disabled"
                            icon={<UserX size={21} />}
                            type="muted"
                        />
                    </div>

                    {/* MAIN CARD */}
                    <div className="users-card">
                        {/* TOOLBAR */}
                        <div className="users-toolbar">
                            <div className="toolbar-heading">
                                <div>
                                    <h2>All Users</h2>
                                    <p>
                                        {filteredUsers.length}{" "}
                                        {filteredUsers.length === 1
                                            ? "account"
                                            : "accounts"}{" "}
                                        displayed
                                    </p>
                                </div>
                            </div>

                            <div className="toolbar-actions">
                                <div className="search-box">
                                    <Search size={18} />

                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />

                                    {search && (
                                        <button
                                            type="button"
                                            onClick={() => setSearch("")}
                                            className="search-clear"
                                        >
                                            <X size={15} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* TABLE */}
                        <div className="table-wrapper">
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th className="id-column">ID</th>
                                        <th>User</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Joined</th>
                                        <th className="actions-column">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredUsers.length > 0 ? (
                                        filteredUsers.map((user) => (
                                            <UserRow
                                                key={user.id}
                                                user={user}
                                                onEdit={() =>
                                                    openModal("edit", user)
                                                }
                                                onDelete={() =>
                                                    openModal("delete", user)
                                                }
                                                onReset={() =>
                                                    openModal("reset", user)
                                                }
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="empty-cell"
                                            >
                                                <div className="empty-state">
                                                    <div className="empty-icon">
                                                        <UsersIcon size={27} />
                                                    </div>

                                                    <h3>
                                                        {search
                                                            ? "No users found"
                                                            : "No users available"}
                                                    </h3>

                                                    <p>
                                                        {search
                                                            ? "Try changing your search terms."
                                                            : "There are no users to display yet."}
                                                    </p>

                                                    {search && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline"
                                                            onClick={() =>
                                                                setSearch("")
                                                            }
                                                        >
                                                            Clear Search
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* PAGINATION */}
                        {users?.links && users.links.length > 3 && (
                            <Pagination links={users.links} />
                        )}
                    </div>
                </div>
            </div>

            {/* ADD USER MODAL */}
            {showAddModal && (
                <AddUserModal onClose={() => setShowAddModal(false)} />
            )}

            {/* EDIT USER MODAL */}
            {modalType === "edit" && selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    onClose={closeModal}
                />
            )}

            {/* RESET PASSWORD MODAL */}
            {modalType === "reset" && selectedUser && (
                <ResetPasswordModal
                    user={selectedUser}
                    onClose={closeModal}
                />
            )}

            {/* DELETE MODAL */}
            {modalType === "delete" && selectedUser && (
                <DeleteUserModal
                    user={selectedUser}
                    onClose={closeModal}
                />
            )}

            <UsersStyles />
        </AppLayout>
    );
}

/* -------------------------------------------------------------------------- */
/* STAT CARD */
/* -------------------------------------------------------------------------- */

function StatCard({
    title,
    value,
    description,
    icon,
    type = "primary",
}) {
    return (
        <div className={`stat-card stat-${type}`}>
            <div className="stat-top">
                <div className="stat-icon">{icon}</div>

                <div className="stat-label">{title}</div>
            </div>

            <div className="stat-value">{value}</div>

            <div className="stat-description">
                <Activity size={14} />
                {description}
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* USER ROW */
/* -------------------------------------------------------------------------- */

function UserRow({ user, onEdit, onDelete, onReset }) {
    const isAdmin = user.role === "admin";

    const isActive =
        user.active === 1 ||
        user.active === "1" ||
        user.active === true;

    const initials = getInitials(user.name);

    return (
        <tr>
            <td className="id-column">
                <span className="user-id">#{user.id}</span>
            </td>

            <td>
                <div className="user-cell">
                    <div
                        className={`avatar ${
                            isAdmin ? "avatar-admin" : ""
                        }`}
                    >
                        {initials}
                    </div>

                    <div className="user-info">
                        <Link
                            href={route("admin.users.show", user.id)}
                            className="user-name"
                        >
                            {user.name}
                        </Link>

                        <div className="user-email">
                            <Mail size={13} />
                            {user.email}
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <span
                    className={`role-badge ${
                        isAdmin ? "role-admin" : "role-user"
                    }`}
                >
                    {isAdmin ? (
                        <>
                            <ShieldCheck size={14} />
                            Administrator
                        </>
                    ) : (
                        <>
                            <CircleUserRound size={14} />
                            User
                        </>
                    )}
                </span>
            </td>

            <td>
                <span
                    className={`status-badge ${
                        isActive ? "status-active" : "status-inactive"
                    }`}
                >
                    <span className="status-dot"></span>
                    {isActive ? "Active" : "Inactive"}
                </span>
            </td>

            <td>
                <span className="joined-date">
                    {formatDate(user.created_at)}
                </span>
            </td>

            <td>
                <div className="row-actions">
                    <Link
                        href={route("admin.users.show", user.id)}
                        className="action-btn action-view"
                        title="View user"
                    >
                        <Eye size={16} />
                    </Link>

                    <button
                        type="button"
                        className="action-btn action-edit"
                        onClick={onEdit}
                        title="Edit user"
                    >
                        <Edit3 size={16} />
                    </button>

                    <button
                        type="button"
                        className="action-btn action-reset"
                        onClick={onReset}
                        title="Reset password"
                    >
                        <KeyRound size={16} />
                    </button>

                    <button
                        type="button"
                        className="action-btn action-delete"
                        onClick={onDelete}
                        title="Delete user"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

/* -------------------------------------------------------------------------- */
/* ADD USER MODAL */
/* -------------------------------------------------------------------------- */

function AddUserModal({ onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "user",
        active: "1",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.users.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <Modal
            title="Add New User"
            subtitle="Create a new platform account."
            icon={<UserPlus size={21} />}
            onClose={onClose}
        >
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="form-section">
                        <div className="section-heading">
                            <span>Account information</span>
                        </div>

                        <div className="form-grid">
                            <FormField
                                label="Full name"
                                required
                                error={errors.name}
                            >
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Enter full name"
                                    className={errors.name ? "input-error" : ""}
                                />
                            </FormField>

                            <FormField
                                label="Email address"
                                required
                                error={errors.email}
                            >
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="name@example.com"
                                    className={
                                        errors.email ? "input-error" : ""
                                    }
                                />
                            </FormField>

                            <FormField
                                label="Password"
                                required
                                error={errors.password}
                            >
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Create a password"
                                    className={
                                        errors.password ? "input-error" : ""
                                    }
                                />
                            </FormField>

                            <FormField
                                label="Confirm password"
                                required
                                error={errors.password_confirmation}
                            >
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm password"
                                    className={
                                        errors.password_confirmation
                                            ? "input-error"
                                            : ""
                                    }
                                />
                            </FormField>

                            <FormField
                                label="Role"
                                required
                                error={errors.role}
                            >
                                <select
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                >
                                    <option value="user">Talent</option>
                                    <option value="admin">
                                        Administrator
                                    </option>
                                </select>
                            </FormField>

                            <FormField
                                label="Account status"
                                required
                                error={errors.active}
                            >
                                <select
                                    value={data.active}
                                    onChange={(e) =>
                                        setData("active", e.target.value)
                                    }
                                >
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </FormField>
                        </div>
                    </div>

                    <div className="security-note">
                        <div className="security-icon">
                            <ShieldCheck size={18} />
                        </div>

                        <div>
                            <strong>Account security</strong>
                            <p>
                                Use a strong password with a combination of
                                letters, numbers and special characters.
                            </p>
                        </div>
                    </div>
                </div>

                <ModalFooter
                    onClose={onClose}
                    processing={processing}
                    submitText="Create User"
                    submitIcon={<UserPlus size={17} />}
                />
            </form>
        </Modal>
    );
}

/* -------------------------------------------------------------------------- */
/* EDIT USER MODAL */
/* -------------------------------------------------------------------------- */

function EditUserModal({ user, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "user",
        active:
            user.active === 1 ||
            user.active === "1" ||
            user.active === true
                ? "1"
                : "0",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.users.update", user.id), {
            preserveScroll: true,
            onSuccess: onClose,
        });
    };

    return (
        <Modal
            title="Edit User"
            subtitle={`Update account details for ${user.name}.`}
            icon={<Edit3 size={21} />}
            onClose={onClose}
        >
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="user-preview">
                        <div
                            className={`avatar avatar-large ${
                                user.role === "admin" ? "avatar-admin" : ""
                            }`}
                        >
                            {getInitials(user.name)}
                        </div>

                        <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                        </div>
                    </div>

                    <div className="form-grid">
                        <FormField
                            label="Full name"
                            required
                            error={errors.name}
                        >
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className={errors.name ? "input-error" : ""}
                            />
                        </FormField>

                        <FormField
                            label="Email address"
                            required
                            error={errors.email}
                        >
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className={errors.email ? "input-error" : ""}
                            />
                        </FormField>

                        <FormField
                            label="Role"
                            required
                            error={errors.role}
                        >
                            <select
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                            >
                                <option value="user">Talent</option>
                                <option value="admin">
                                    Administrator
                                </option>
                            </select>
                        </FormField>

                        <FormField
                            label="Account status"
                            required
                            error={errors.active}
                        >
                            <select
                                value={data.active}
                                onChange={(e) =>
                                    setData("active", e.target.value)
                                }
                            >
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </FormField>
                    </div>
                </div>

                <ModalFooter
                    onClose={onClose}
                    processing={processing}
                    submitText="Save Changes"
                    submitIcon={<Check size={17} />}
                />
            </form>
        </Modal>
    );
}

/* -------------------------------------------------------------------------- */
/* RESET PASSWORD MODAL */
/* -------------------------------------------------------------------------- */

function ResetPasswordModal({ user, onClose }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.users.password-reset", user.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <Modal
            title="Reset Password"
            subtitle={`Create a new password for ${user.name}.`}
            icon={<KeyRound size={21} />}
            onClose={onClose}
        >
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="reset-user-card">
                        <div className="avatar">
                            {getInitials(user.name)}
                        </div>

                        <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                        </div>
                    </div>

                    <div className="form-grid form-grid-single">
                        <FormField
                            label="New password"
                            required
                            error={errors.password}
                        >
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Enter new password"
                                className={
                                    errors.password ? "input-error" : ""
                                }
                            />
                        </FormField>

                        <FormField
                            label="Confirm new password"
                            required
                            error={errors.password_confirmation}
                        >
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                placeholder="Confirm new password"
                                className={
                                    errors.password_confirmation
                                        ? "input-error"
                                        : ""
                                }
                            />
                        </FormField>
                    </div>

                    <div className="warning-note">
                        <AlertCircle size={18} />

                        <p>
                            The user's current password will immediately stop
                            working after the password is changed.
                        </p>
                    </div>
                </div>

                <ModalFooter
                    onClose={onClose}
                    processing={processing}
                    submitText="Reset Password"
                    submitIcon={<RefreshCw size={17} />}
                />
            </form>
        </Modal>
    );
}

/* -------------------------------------------------------------------------- */
/* DELETE USER MODAL */
/* -------------------------------------------------------------------------- */

function DeleteUserModal({ user, onClose }) {
    const { delete: destroy, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        destroy(route("admin.users.destroy", user.id), {
            preserveScroll: true,
            onSuccess: onClose,
        });
    };

    return (
        <Modal
            title="Delete User"
            subtitle="This action cannot be undone."
            icon={<Trash2 size={21} />}
            onClose={onClose}
            danger
        >
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="delete-warning">
                        <div className="delete-icon">
                            <Trash2 size={25} />
                        </div>

                        <div>
                            <h3>Delete this account?</h3>

                            <p>
                                You are about to permanently delete{" "}
                                <strong>{user.name}</strong>. All associated
                                account information may be removed.
                            </p>
                        </div>
                    </div>

                    <div className="delete-user-summary">
                        <div className="avatar">
                            {getInitials(user.name)}
                        </div>

                        <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                        </div>

                        <span
                            className={`role-badge ${
                                user.role === "admin"
                                    ? "role-admin"
                                    : "role-user"
                            }`}
                        >
                            {user.role === "admin"
                                ? "Administrator"
                                : "Talent"}
                        </span>
                    </div>
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={onClose}
                        disabled={processing}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn btn-danger"
                        disabled={processing}
                    >
                        {processing ? (
                            <>
                                <span className="spinner"></span>
                                Deleting...
                            </>
                        ) : (
                            <>
                                <Trash2 size={17} />
                                Delete User
                            </>
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

/* -------------------------------------------------------------------------- */
/* GENERIC MODAL */
/* -------------------------------------------------------------------------- */

function Modal({
    title,
    subtitle,
    icon,
    children,
    onClose,
    danger = false,
}) {
    return (
        <div className="modal-backdrop">
            <div
                className={`custom-modal ${
                    danger ? "custom-modal-danger" : ""
                }`}
            >
                <div className="modal-header">
                    <div className="modal-title-area">
                        <div className="modal-icon">{icon}</div>

                        <div>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <X size={19} />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* MODAL FOOTER */
/* -------------------------------------------------------------------------- */

function ModalFooter({
    onClose,
    processing,
    submitText,
    submitIcon,
}) {
    return (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
                disabled={processing}
            >
                Cancel
            </button>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={processing}
            >
                {processing ? (
                    <>
                        <span className="spinner"></span>
                        Saving...
                    </>
                ) : (
                    <>
                        {submitIcon}
                        {submitText}
                    </>
                )}
            </button>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* FORM FIELD */
/* -------------------------------------------------------------------------- */

function FormField({
    label,
    required = false,
    error,
    children,
}) {
    return (
        <div className="form-field">
            <label>
                {label}

                {required && <span className="required">*</span>}
            </label>

            {children}

            {error && <div className="field-error">{error}</div>}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* PAGINATION */
/* -------------------------------------------------------------------------- */

function Pagination({ links }) {
    return (
        <div className="pagination-wrapper">
            <div className="pagination-info">
                Showing available user accounts
            </div>

            <div className="pagination">
                {links.map((link, index) => {
                    const label = link.label
                        .replace("&laquo;", "")
                        .replace("&raquo;", "")
                        .trim();

                    const isPrevious =
                        link.label.toLowerCase().includes("previous");

                    const isNext =
                        link.label.toLowerCase().includes("next");

                    return (
                        <Link
                            key={index}
                            href={link.url || "#"}
                            className={`pagination-link ${
                                link.active ? "active" : ""
                            } ${!link.url ? "disabled" : ""}`}
                            preserveScroll
                        >
                            {isPrevious ? (
                                <ChevronLeft size={16} />
                            ) : isNext ? (
                                <ChevronRight size={16} />
                            ) : (
                                label
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* HELPERS */
/* -------------------------------------------------------------------------- */

function getInitials(name = "") {
    const parts = name.trim().split(/\s+/).filter(Boolean);

    if (!parts.length) return "U";

    if (parts.length === 1) {
        return parts[0].substring(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatDate(date) {
    if (!date) return "—";

    try {
        return new Intl.DateTimeFormat("en", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(date));
    } catch {
        return date;
    }
}

/* -------------------------------------------------------------------------- */
/* STYLES */
/* -------------------------------------------------------------------------- */

function UsersStyles() {
    return (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

            :root {
                --primary: #00A667;
                --primary-dark: #008653;
                --primary-deep: #006E46;
                --primary-soft: #E8F8F1;
                --primary-softer: #F3FBF7;

                --black: #111111;
                --black-soft: #202522;

                --white: #FFFFFF;

                --text: #161B18;
                --text-secondary: #4C5752;
                --muted: #7A8580;

                --page: #F5F8F6;
                --surface: #FFFFFF;
                --surface-soft: #FAFCFB;

                --border: #E3EAE6;
                --border-light: #EDF1EF;

                --danger: #D92D20;
                --danger-dark: #B42318;
                --danger-soft: #FFF1F0;

                --shadow-sm:
                    0 1px 2px rgba(16, 24, 40, .04),
                    0 2px 8px rgba(16, 24, 40, .03);

                --shadow-md:
                    0 8px 24px rgba(16, 24, 40, .07);

                --radius-sm: 8px;
                --radius-md: 12px;
                --radius-lg: 16px;
                --radius-xl: 20px;
            }

            * {
                box-sizing: border-box;
            }

            .users-page {
                min-height: calc(100vh - 70px);
                background: var(--page);
                padding: 30px 24px 50px;
                color: var(--text);
                font-family: "DM Sans", sans-serif;
            }

            .users-container {
                width: 100%;
                max-width: 1480px;
                margin: 0 auto;
            }

            /* HEADER */

            .page-header {
                margin-bottom: 24px;
            }

            .breadcrumb {
                display: flex;
                align-items: center;
                gap: 7px;
                margin-bottom: 18px;
                color: var(--muted);
                font-size: 13px;
                font-weight: 500;
            }

            .breadcrumb a {
                color: var(--muted);
                text-decoration: none;
                transition: color .2s ease;
            }

            .breadcrumb a:hover {
                color: var(--primary);
            }

            .header-main {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
            }

            .title-row {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .title-icon {
                width: 50px;
                height: 50px;
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary);
                color: white;
                box-shadow: 0 8px 18px rgba(0, 166, 103, .18);
            }

            .title-row h1 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 28px;
                line-height: 1.2;
                font-weight: 800;
                color: var(--black);
                letter-spacing: -.5px;
            }

            .title-row p {
                margin: 6px 0 0;
                color: var(--muted);
                font-size: 14px;
            }

            /* BUTTONS */

            .btn {
                border: 0;
                min-height: 42px;
                padding: 0 16px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-family: "DM Sans", sans-serif;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                text-decoration: none;
                transition:
                    transform .18s ease,
                    background .18s ease,
                    border-color .18s ease,
                    box-shadow .18s ease;
            }

            .btn:hover:not(:disabled) {
                transform: translateY(-1px);
            }

            .btn:disabled {
                opacity: .6;
                cursor: not-allowed;
            }

            .btn-primary {
                color: white;
                background: var(--primary);
                box-shadow: 0 5px 14px rgba(0, 166, 103, .18);
            }

            .btn-primary:hover:not(:disabled) {
                background: var(--primary-dark);
                box-shadow: 0 7px 18px rgba(0, 166, 103, .24);
            }

            .btn-outline {
                color: var(--black);
                background: white;
                border: 1px solid var(--border);
            }

            .btn-outline:hover:not(:disabled) {
                border-color: var(--primary);
                color: var(--primary);
                background: var(--primary-softer);
            }

            .btn-danger {
                color: white;
                background: var(--danger);
                box-shadow: 0 5px 14px rgba(217, 45, 32, .14);
            }

            .btn-danger:hover:not(:disabled) {
                background: var(--danger-dark);
            }

            /* ALERTS */

            .alert {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 14px 16px;
                margin-bottom: 22px;
                border-radius: 12px;
                border: 1px solid;
                background: white;
            }

            .alert-success {
                color: #087443;
                border-color: #BFEAD6;
                background: #F2FCF7;
            }

            .alert-danger {
                color: var(--danger-dark);
                border-color: #F3C4BF;
                background: #FFF7F6;
            }

            .alert-icon {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 166, 103, .1);
                flex-shrink: 0;
            }

            .alert-danger .alert-icon {
                background: rgba(217, 45, 32, .08);
            }

            .alert strong {
                display: block;
                font-size: 13px;
                font-weight: 800;
                margin-bottom: 2px;
            }

            .alert p {
                margin: 0;
                font-size: 13px;
            }

            .alert-close {
                margin-left: auto;
                border: 0;
                background: transparent;
                cursor: pointer;
                color: currentColor;
                opacity: .6;
            }

            /* STATS */

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 16px;
                margin-bottom: 24px;
            }

            .stat-card {
                min-height: 145px;
                padding: 20px;
                border: 1px solid var(--border);
                border-radius: var(--radius-lg);
                background: var(--surface);
                box-shadow: var(--shadow-sm);
                position: relative;
                overflow: hidden;
            }

            .stat-card::after {
                content: "";
                position: absolute;
                width: 100px;
                height: 100px;
                right: -42px;
                bottom: -50px;
                border-radius: 50%;
                background: rgba(0, 166, 103, .055);
            }

            .stat-top {
                display: flex;
                align-items: center;
                gap: 11px;
            }

            .stat-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary);
            }

            .stat-label {
                font-size: 13px;
                font-weight: 700;
                color: var(--text-secondary);
            }

            .stat-value {
                margin-top: 16px;
                font-family: "Manrope", sans-serif;
                font-size: 31px;
                line-height: 1;
                font-weight: 800;
                color: var(--black);
            }

            .stat-description {
                margin-top: 10px;
                display: flex;
                align-items: center;
                gap: 6px;
                color: var(--muted);
                font-size: 12px;
            }

            .stat-success .stat-icon {
                background: #E8F8F1;
                color: #008653;
            }

            .stat-dark .stat-icon {
                background: #F0F1F1;
                color: var(--black);
            }

            .stat-muted .stat-icon {
                background: #F2F3F3;
                color: #68726E;
            }

            /* MAIN CARD */

            .users-card {
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: var(--radius-xl);
                box-shadow: var(--shadow-sm);
                overflow: hidden;
            }

            .users-toolbar {
                min-height: 82px;
                padding: 18px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                border-bottom: 1px solid var(--border-light);
            }

            .toolbar-heading h2 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 17px;
                font-weight: 800;
                color: var(--black);
            }

            .toolbar-heading p {
                margin: 4px 0 0;
                color: var(--muted);
                font-size: 12px;
            }

            .toolbar-actions {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .search-box {
                width: 290px;
                height: 40px;
                display: flex;
                align-items: center;
                gap: 9px;
                padding: 0 11px;
                border: 1px solid var(--border);
                border-radius: 9px;
                background: white;
                color: var(--muted);
                transition: border-color .2s ease, box-shadow .2s ease;
            }

            .search-box:focus-within {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(0, 166, 103, .09);
            }

            .search-box input {
                flex: 1;
                min-width: 0;
                border: 0;
                outline: 0;
                background: transparent;
                color: var(--text);
                font-family: inherit;
                font-size: 13px;
            }

            .search-box input::placeholder {
                color: #9BA39F;
            }

            .search-clear {
                width: 25px;
                height: 25px;
                padding: 0;
                border: 0;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F0F2F1;
                color: var(--muted);
                cursor: pointer;
            }

            .search-clear:hover {
                background: var(--primary-soft);
                color: var(--primary);
            }

            /* TABLE */

            .table-wrapper {
                width: 100%;
                overflow-x: auto;
            }

            .users-table {
                width: 100%;
                min-width: 900px;
                border-collapse: collapse;
            }

            .users-table th {
                padding: 13px 18px;
                background: #FAFBFA;
                border-bottom: 1px solid var(--border);
                color: #68726E;
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: .6px;
                text-align: left;
                white-space: nowrap;
            }

            .users-table td {
                padding: 16px 18px;
                border-bottom: 1px solid var(--border-light);
                vertical-align: middle;
                font-size: 13px;
            }

            .users-table tbody tr {
                transition: background .15s ease;
            }

            .users-table tbody tr:hover {
                background: #FCFDFC;
            }

            .users-table tbody tr:last-child td {
                border-bottom: 0;
            }

            .id-column {
                width: 70px;
            }

            .actions-column {
                width: 165px;
                text-align: right !important;
            }

            .user-id {
                color: #89938E;
                font-size: 12px;
                font-weight: 700;
            }

            .user-cell {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 240px;
            }

            .avatar {
                width: 40px;
                height: 40px;
                flex: 0 0 40px;
                border-radius: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary-deep);
                font-family: "Manrope", sans-serif;
                font-size: 12px;
                font-weight: 800;
                text-transform: uppercase;
            }

            .avatar-admin {
                background: var(--black);
                color: white;
            }

            .avatar-large {
                width: 48px;
                height: 48px;
                flex-basis: 48px;
            }

            .user-info {
                min-width: 0;
            }

            .user-name {
                display: block;
                width: fit-content;
                max-width: 100%;
                color: var(--black);
                font-size: 13px;
                font-weight: 800;
                text-decoration: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .user-name:hover {
                color: var(--primary);
            }

            .user-email {
                margin-top: 4px;
                display: flex;
                align-items: center;
                gap: 5px;
                color: var(--muted);
                font-size: 11px;
                white-space: nowrap;
            }

            .role-badge,
            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                min-height: 27px;
                padding: 0 9px;
                border-radius: 999px;
                font-size: 11px;
                font-weight: 800;
                white-space: nowrap;
            }

            .role-user {
                color: #087443;
                background: var(--primary-soft);
            }

            .role-admin {
                color: var(--black);
                background: #F0F1F1;
            }

            .status-active {
                color: #087443;
                background: #EAF9F2;
            }

            .status-inactive {
                color: #66706C;
                background: #F1F3F2;
            }

            .status-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: currentColor;
            }

            .joined-date {
                color: var(--text-secondary);
                font-size: 12px;
                white-space: nowrap;
            }

            /* ACTIONS */

            .row-actions {
                display: flex;
                justify-content: flex-end;
                gap: 6px;
            }

            .action-btn {
                width: 33px;
                height: 33px;
                border: 1px solid var(--border);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                cursor: pointer;
                text-decoration: none;
                transition:
                    color .18s ease,
                    background .18s ease,
                    border-color .18s ease,
                    transform .18s ease;
            }

            .action-btn:hover {
                transform: translateY(-1px);
            }

            .action-view {
                color: #4B5551;
            }

            .action-view:hover {
                color: var(--black);
                background: #F2F3F3;
                border-color: #D6DCDA;
            }

            .action-edit {
                color: var(--primary-dark);
            }

            .action-edit:hover {
                background: var(--primary-soft);
                border-color: #B7E5D2;
            }

            .action-reset {
                color: #695C20;
            }

            .action-reset:hover {
                background: #FBF8E9;
                border-color: #E9DFAD;
            }

            .action-delete {
                color: var(--danger);
            }

            .action-delete:hover {
                background: var(--danger-soft);
                border-color: #F3C4BF;
            }

            /* EMPTY */

            .empty-cell {
                padding: 0 !important;
            }

            .empty-state {
                min-height: 300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 50px 20px;
            }

            .empty-icon {
                width: 58px;
                height: 58px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary);
                margin-bottom: 15px;
            }

            .empty-state h3 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 16px;
                font-weight: 800;
                color: var(--black);
            }

            .empty-state p {
                max-width: 350px;
                margin: 7px 0 17px;
                color: var(--muted);
                font-size: 13px;
            }

            /* PAGINATION */

            .pagination-wrapper {
                min-height: 65px;
                padding: 12px 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                border-top: 1px solid var(--border-light);
            }

            .pagination-info {
                color: var(--muted);
                font-size: 12px;
            }

            .pagination {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .pagination-link {
                min-width: 32px;
                height: 32px;
                padding: 0 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--border);
                border-radius: 8px;
                background: white;
                color: var(--text-secondary);
                font-size: 12px;
                font-weight: 700;
                text-decoration: none;
                transition: .18s ease;
            }

            .pagination-link:hover:not(.disabled) {
                color: var(--primary);
                border-color: var(--primary);
            }

            .pagination-link.active {
                color: white;
                background: var(--primary);
                border-color: var(--primary);
            }

            .pagination-link.disabled {
                opacity: .4;
                pointer-events: none;
            }

            /* MODALS */

            .modal-backdrop {
                position: fixed;
                z-index: 9999;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(17, 17, 17, .58);
                backdrop-filter: blur(5px);
            }

            .custom-modal {
                width: 100%;
                max-width: 650px;
                max-height: calc(100vh - 40px);
                overflow-y: auto;
                border-radius: 18px;
                background: white;
                box-shadow:
                    0 24px 70px rgba(0, 0, 0, .2),
                    0 4px 18px rgba(0, 0, 0, .08);
                animation: modalIn .2s ease-out;
            }

            @keyframes modalIn {
                from {
                    opacity: 0;
                    transform: translateY(10px) scale(.985);
                }

                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .modal-header {
                min-height: 78px;
                padding: 16px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                border-bottom: 1px solid var(--border-light);
            }

            .modal-title-area {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .modal-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary-dark);
                flex-shrink: 0;
            }

            .custom-modal-danger .modal-icon {
                color: var(--danger);
                background: var(--danger-soft);
            }

            .modal-header h2 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 17px;
                font-weight: 800;
                color: var(--black);
            }

            .modal-header p {
                margin: 4px 0 0;
                color: var(--muted);
                font-size: 12px;
            }

            .modal-close {
                width: 34px;
                height: 34px;
                border: 0;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F4F6F5;
                color: var(--muted);
                cursor: pointer;
                transition: .18s ease;
            }

            .modal-close:hover {
                color: var(--black);
                background: #E9ECEB;
            }

            .modal-body {
                padding: 21px;
            }

            .modal-footer {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 9px;
                border-top: 1px solid var(--border-light);
                background: #FCFDFC;
            }

            /* FORMS */

            .form-section {
                margin-bottom: 18px;
            }

            .section-heading {
                margin-bottom: 14px;
                color: var(--black);
                font-family: "Manrope", sans-serif;
                font-size: 12px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: .5px;
            }

            .form-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 17px;
            }

            .form-grid-single {
                grid-template-columns: 1fr;
            }

            .form-field {
                min-width: 0;
            }

            .form-field label {
                display: block;
                margin-bottom: 7px;
                color: var(--text);
                font-size: 12px;
                font-weight: 700;
            }

            .required {
                color: var(--primary);
                margin-left: 3px;
            }

            .form-field input,
            .form-field select {
                width: 100%;
                height: 42px;
                padding: 0 12px;
                border: 1px solid var(--border);
                border-radius: 9px;
                outline: 0;
                background: white;
                color: var(--text);
                font-family: inherit;
                font-size: 13px;
                transition:
                    border-color .18s ease,
                    box-shadow .18s ease;
            }

            .form-field input::placeholder {
                color: #A2AAA7;
            }

            .form-field input:focus,
            .form-field select:focus {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(0, 166, 103, .09);
            }

            .form-field .input-error {
                border-color: var(--danger);
            }

            .field-error {
                margin-top: 5px;
                color: var(--danger);
                font-size: 11px;
                font-weight: 600;
            }

            /* SECURITY */

            .security-note,
            .warning-note {
                margin-top: 19px;
                padding: 13px;
                display: flex;
                align-items: flex-start;
                gap: 10px;
                border: 1px solid #CDEBDD;
                border-radius: 10px;
                background: var(--primary-softer);
                color: #31594A;
            }

            .security-icon {
                width: 28px;
                height: 28px;
                flex: 0 0 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--primary-soft);
                color: var(--primary-dark);
            }

            .security-note strong {
                display: block;
                margin-bottom: 2px;
                color: #174C39;
                font-size: 12px;
                font-weight: 800;
            }

            .security-note p {
                margin: 0;
                font-size: 11px;
                line-height: 1.5;
            }

            .warning-note {
                border-color: #F0E3AE;
                background: #FFFCED;
                color: #675B27;
            }

            .warning-note p {
                margin: 0;
                font-size: 11px;
                line-height: 1.5;
            }

            /* USER PREVIEW */

            .user-preview,
            .reset-user-card {
                margin-bottom: 19px;
                padding: 13px;
                display: flex;
                align-items: center;
                gap: 11px;
                border: 1px solid var(--border);
                border-radius: 11px;
                background: var(--surface-soft);
            }

            .user-preview strong,
            .reset-user-card strong {
                display: block;
                color: var(--black);
                font-size: 13px;
                font-weight: 800;
            }

            .user-preview span,
            .reset-user-card span {
                display: block;
                margin-top: 3px;
                color: var(--muted);
                font-size: 11px;
            }

            /* DELETE */

            .delete-warning {
                display: flex;
                gap: 14px;
                padding: 16px;
                border-radius: 12px;
                background: var(--danger-soft);
                border: 1px solid #F3C4BF;
            }

            .delete-icon {
                width: 43px;
                height: 43px;
                flex: 0 0 43px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 11px;
                background: white;
                color: var(--danger);
            }

            .delete-warning h3 {
                margin: 0 0 5px;
                color: var(--danger-dark);
                font-size: 14px;
                font-weight: 800;
            }

            .delete-warning p {
                margin: 0;
                color: #77443F;
                font-size: 12px;
                line-height: 1.55;
            }

            .delete-user-summary {
                margin-top: 14px;
                padding: 12px;
                display: flex;
                align-items: center;
                gap: 10px;
                border: 1px solid var(--border);
                border-radius: 10px;
            }

            .delete-user-summary > div:nth-child(2) {
                flex: 1;
                min-width: 0;
            }

            .delete-user-summary strong {
                display: block;
                font-size: 12px;
                color: var(--black);
            }

            .delete-user-summary span:not(.role-badge) {
                display: block;
                margin-top: 2px;
                color: var(--muted);
                font-size: 10px;
            }

            /* SPINNER */

            .spinner {
                width: 15px;
                height: 15px;
                border: 2px solid rgba(255,255,255,.4);
                border-top-color: white;
                border-radius: 50%;
                animation: spin .65s linear infinite;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }

            /* RESPONSIVE */

            @media (max-width: 1100px) {
                .stats-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }

            @media (max-width: 768px) {
                .users-page {
                    padding: 20px 14px 35px;
                }

                .header-main {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .header-main > .btn {
                    width: 100%;
                }

                .title-row h1 {
                    font-size: 23px;
                }

                .stats-grid {
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .stat-card {
                    padding: 15px;
                    min-height: 125px;
                }

                .stat-value {
                    font-size: 26px;
                }

                .users-toolbar {
                    align-items: stretch;
                    flex-direction: column;
                }

                .search-box {
                    width: 100%;
                }

                .toolbar-actions {
                    width: 100%;
                }

                .pagination-wrapper {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .pagination {
                    width: 100%;
                    overflow-x: auto;
                    padding-bottom: 2px;
                }

                .form-grid {
                    grid-template-columns: 1fr;
                }

                .modal-backdrop {
                    padding: 10px;
                    align-items: flex-end;
                }

                .custom-modal {
                    max-height: calc(100vh - 20px);
                    border-radius: 17px 17px 0 0;
                }
            }

            @media (max-width: 480px) {
                .stats-grid {
                    grid-template-columns: 1fr;
                }

                .title-icon {
                    width: 44px;
                    height: 44px;
                }

                .title-row {
                    gap: 11px;
                }

                .users-table {
                    min-width: 850px;
                }

                .modal-header {
                    padding: 14px;
                }

                .modal-body {
                    padding: 16px;
                }

                .modal-footer {
                    padding: 12px 14px;
                }

                .modal-footer .btn {
                    flex: 1;
                }

                .delete-user-summary {
                    align-items: flex-start;
                    flex-wrap: wrap;
                }

                .delete-user-summary .role-badge {
                    margin-left: 51px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: .01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: .01ms !important;
                }
            }
        `}</style>
    );
}