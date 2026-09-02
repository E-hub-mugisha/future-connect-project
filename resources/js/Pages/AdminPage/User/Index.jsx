import { useEffect, useMemo, useRef, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const AVATAR_CLASSES = ["av-solid", "av-outline"];

export default function UsersIndex({ users }) {
    const { flash } = usePage().props;
    const [search, setSearch] = useState("");

    const isPaginated =
        users && !Array.isArray(users) && Array.isArray(users.data);
    const userList = isPaginated ? users.data : users || [];
    const pagination = isPaginated ? users : null;

    const filtered = useMemo(() => {
        if (!search.trim()) return userList;
        const q = search.toLowerCase();
        return userList.filter((u) =>
            [u.name, u.email, u.role, u.active ? "active" : "inactive"]
                .filter(Boolean)
                .some((field) => String(field).toLowerCase().includes(q)),
        );
    }, [search, userList]);

    return (
        <AppLayout title="Users Management">
            <Head title="Users Management" />
            <UsersStyles />

            <div className="container-fluid px-4 py-4">
                {/* Page header */}
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <div>
                        <div className="page-crumb">Admin / Users</div>
                        <div className="page-title">
                            <span className="title-mark" />
                            Platform User Management
                        </div>
                        <div className="page-sub mt-1">
                            Manage platform users, roles, and access
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn-accent"
                        data-bs-toggle="modal"
                        data-bs-target="#addUserModal"
                    >
                        <PlusIcon /> Add User
                    </button>
                </div>

                {/* Flash message */}
                {flash?.success && (
                    <div
                        className="alert border-0 rounded-3 d-flex align-items-center gap-2 mb-4 py-3"
                        role="alert"
                        style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent-ink)",
                            fontSize: 13.5,
                        }}
                    >
                        <CheckIcon /> {flash.success}
                    </div>
                )}

                {/* Table card */}
                <div className="ui-card">
                    <div className="card-bar">
                        <span className="card-bar-label">
                            All Users
                            <span className="count-badge">
                                {userList.length}
                            </span>
                        </span>
                        <div className="search-wrap">
                            <SearchIcon className="ni" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search users…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="ui-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Joined</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 ? (
                                    <tr className="empty-row">
                                        <td colSpan={6}>
                                            <UsersEmptyIcon />
                                            No users found.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((user, index) => (
                                        <UserRow
                                            key={user.id}
                                            user={user}
                                            avatarClass={
                                                AVATAR_CLASSES[index % 2]
                                            }
                                        />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {pagination && (
                        <div className="pg-bar">
                            <span className="pg-info">
                                Showing{" "}
                                {pagination.meta?.from ?? pagination.from} –{" "}
                                {pagination.meta?.to ?? pagination.to} of{" "}
                                {pagination.meta?.total ?? pagination.total}{" "}
                                users
                            </span>
                            <div className="d-flex gap-1">
                                {(
                                    pagination.meta?.links ??
                                    pagination.links ??
                                    []
                                ).map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || "#"}
                                        preserveScroll
                                        className={`pg-link ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            {userList.map((user) => (
                <EditUserModal key={`edit-${user.id}`} user={user} />
            ))}
            {userList.map((user) => (
                <DeleteUserModal key={`delete-${user.id}`} user={user} />
            ))}
            <AddUserModal />
        </AppLayout>
    );
}

/* ── Table row ── */
function UserRow({ user, avatarClass }) {
    const initials = (user.name || "").slice(0, 2).toUpperCase();
    const joined = user.created_at
        ? new Date(user.created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
          })
        : "";

    return (
        <tr>
            <td>
                <span className="id-pill">
                    #{String(user.id).padStart(3, "0")}
                </span>
            </td>
            <td>
                <div className="user-cell">
                    <div className={`avatar ${avatarClass}`}>{initials}</div>
                    <div>
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                    </div>
                </div>
            </td>
            <td>
                <span
                    className={`role-badge ${user.role === "admin" ? "role-admin" : "role-user"}`}
                >
                    {user.role
                        ? user.role[0].toUpperCase() + user.role.slice(1)
                        : ""}
                </span>
            </td>
            <td>
                <span
                    className={`status-dot ${user.active ? "status-active" : "status-inactive"}`}
                >
                    {user.active ? "Active" : "Inactive"}
                </span>
            </td>
            <td style={{ fontSize: 13, color: "var(--ink-faint)" }}>
                {joined}
            </td>
            <td>
                <div className="action-icons">
                    <Link
                        href={route("admin.users.show", user.id)}
                        className="action-btn btn-view"
                        title="View profile"
                    >
                        View
                    </Link>
                    <button
                        type="button"
                        className="action-btn btn-edit"
                        title="Edit"
                        data-bs-toggle="modal"
                        data-bs-target={`#editModal${user.id}`}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="action-btn btn-delete"
                        title="Delete"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteModal${user.id}`}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}

/* ── Add user modal ── */
function AddUserModal() {
    const modalRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        role: "user",
        active: "1",
    });

    const closeModal = () => {
        const instance = window.bootstrap?.Modal.getInstance(modalRef.current);
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
                <form className="modal-content" onSubmit={submit}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <PlusIcon
                                style={{
                                    color: "var(--accent)",
                                    marginRight: 8,
                                }}
                            />{" "}
                            Add New User
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>
                    <div className="modal-body d-grid gap-3">
                        <div>
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Alice Bennett"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {errors.name && (
                                <small className="text-error">
                                    {errors.name}
                                </small>
                            )}
                        </div>
                        <div>
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="alice@example.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {errors.email && (
                                <small className="text-error">
                                    {errors.email}
                                </small>
                            )}
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            {errors.password && (
                                <small className="text-error">
                                    {errors.password}
                                </small>
                            )}
                        </div>
                        <div className="row g-3">
                            <div className="col-6">
                                <label className="form-label">Role</label>
                                <select
                                    className="form-select"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-select"
                                    value={data.active}
                                    onChange={(e) =>
                                        setData("active", e.target.value)
                                    }
                                >
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer gap-2">
                        <button
                            type="button"
                            className="btn-cancel"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary-sm"
                            disabled={processing}
                        >
                            <CheckIcon style={{ marginRight: 4 }} />{" "}
                            {processing ? "Creating…" : "Create User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ── Edit user modal ── */
function EditUserModal({ user }) {
    const modalRef = useRef(null);
    const { data, setData, put, processing, errors } = useForm({
        name: user.name ?? "",
        email: user.email ?? "",
        password: "",
        role: user.role ?? "user",
        active: user.active ? "1" : "0",
    });

    const closeModal = () => {
        const instance = window.bootstrap?.Modal.getInstance(modalRef.current);
        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("admin.users.update", user.id), {
            preserveScroll: true,
            onSuccess: closeModal,
        });
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
                <form className="modal-content" onSubmit={submit}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <EditIcon
                                style={{ color: "var(--ink)", marginRight: 8 }}
                            />{" "}
                            Edit User
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>
                    <div className="modal-body d-grid gap-3">
                        <div>
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {errors.name && (
                                <small className="text-error">
                                    {errors.name}
                                </small>
                            )}
                        </div>
                        <div>
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {errors.email && (
                                <small className="text-error">
                                    {errors.email}
                                </small>
                            )}
                        </div>
                        <div>
                            <label className="form-label">
                                New Password{" "}
                                <small className="text-muted-hint fw-normal">
                                    (leave blank to keep current)
                                </small>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <small className="text-error">
                                    {errors.password}
                                </small>
                            )}
                        </div>
                        <div className="row g-3">
                            <div className="col-6">
                                <label className="form-label">Role</label>
                                <select
                                    className="form-select"
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                {errors.role && (
                                    <small className="text-error">
                                        {errors.role}
                                    </small>
                                )}
                            </div>
                            <div className="col-6">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-select"
                                    value={data.active}
                                    onChange={(e) =>
                                        setData("active", e.target.value)
                                    }
                                >
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                {errors.active && (
                                    <small className="text-error">
                                        {errors.active}
                                    </small>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer gap-2">
                        <button
                            type="button"
                            className="btn-cancel"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary-sm"
                            disabled={processing}
                        >
                            {processing ? "Saving…" : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ── Delete user modal ── */
function DeleteUserModal({ user }) {
    const modalRef = useRef(null);
    const { delete: destroy, processing } = useForm({});

    const closeModal = () => {
        const instance = window.bootstrap?.Modal.getInstance(modalRef.current);
        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();
        destroy(route("admin.users.destroy", user.id), {
            preserveScroll: true,
            onSuccess: closeModal,
        });
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
                <form className="modal-content" onSubmit={submit}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <TrashIcon
                                style={{ color: "var(--ink)", marginRight: 8 }}
                            />{" "}
                            Delete User
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="warn-box">
                            <AlertIcon className="ni" />
                            <div>
                                <span className="warn-name">{user.name}</span>
                                Permanently deletes this user and all associated
                                data. This cannot be undone.
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer gap-2">
                        <button
                            type="button"
                            className="btn-cancel"
                            data-bs-dismiss="modal"
                        >
                            Keep User
                        </button>
                        <button
                            type="submit"
                            className="btn-danger-sm"
                            disabled={processing}
                        >
                            <TrashIcon style={{ marginRight: 4 }} />{" "}
                            {processing ? "Deleting…" : "Delete"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ── Inline icon components ── */
function PlusIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
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
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            {...props}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
function SearchIcon(props) {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
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
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
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
            strokeWidth="2"
            strokeLinecap="round"
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}
function UsersEmptyIcon() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            style={{ display: "block", margin: "0 auto 10px", opacity: 0.3 }}
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

/* ── Styles: monochrome + single green accent, flat/bordered, no dark mode ── */
function UsersStyles() {
    return (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

            :root {
                --ink:          #0A0A0A;
                --ink-2:        #45474A;
                --ink-faint:    #90928F;
                --line:         #E2E2DF;
                --line-soft:    #EEEEEB;
                --canvas:       #F5F5F3;
                --surface:      #FFFFFF;
                --surface-alt:  #FAFAF8;

                --accent:       #00A667;
                --accent-ink:   #00814F;
                --accent-soft:  #E3F5EC;

                --font-display: 'Space Grotesk', sans-serif;
                --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            }

            body { background: var(--canvas); font-family: var(--font-sans); }

            .page-crumb {
                font-size: 12px; font-weight: 500; color: var(--ink-faint);
            }
            .page-title {
                font-family: var(--font-display); font-size: 24px; font-weight: 600; color: var(--ink);
                display: flex; align-items: center; gap: 10px; margin-top: 2px;
            }
            .title-mark { width: 8px; height: 8px; background: var(--accent); flex-shrink: 0; transform: rotate(45deg); }
            .page-sub   { font-size: 13px; color: var(--ink-faint); }

            .btn-accent {
                background: var(--accent); color: #fff; border: none;
                border-radius: 8px; font-size: 13px; font-weight: 500;
                padding: 9px 18px; display: inline-flex; align-items: center; gap: 7px;
                transition: background .18s; text-decoration: none; cursor: pointer;
            }
            .btn-accent:hover { background: var(--accent-ink); color: #fff; }

            .ui-card {
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 10px; overflow: hidden;
            }
            .card-bar {
                padding: 14px 20px; border-bottom: 1px solid var(--line);
                display: flex; align-items: center; justify-content: space-between;
            }
            .card-bar-label { font-size: 13px; font-weight: 600; color: var(--ink-2); }
            .count-badge {
                background: var(--accent-soft); color: var(--accent-ink);
                border-radius: 5px; font-size: 11px; font-weight: 600; font-variant-numeric: tabular-nums;
                padding: 2px 8px; margin-left: 8px;
            }

            .search-wrap { position: relative; display: flex; align-items: center; }
            .search-wrap .ni { position: absolute; left: 10px; color: var(--ink-faint); }
            .search-input {
                border: 1px solid var(--line); border-radius: 8px;
                padding: 7px 12px 7px 32px; font-size: 13px; color: var(--ink);
                background: var(--surface-alt); outline: none; width: 210px;
                transition: border-color .15s, background .15s;
            }
            .search-input:focus { border-color: var(--accent); background: var(--surface); box-shadow: 0 0 0 3px rgba(0,166,103,.12); }

            .ui-table { width: 100%; border-collapse: collapse; }
            .ui-table thead tr { background: var(--surface-alt); border-bottom: 1px solid var(--line); }
            .ui-table thead th {
                padding: 11px 20px; font-size: 10.5px; font-weight: 600;
                text-transform: uppercase; letter-spacing: .08em; color: var(--ink-faint);
                white-space: nowrap; text-align: left;
            }
            .ui-table tbody tr { border-bottom: 1px solid var(--line-soft); transition: background .12s; }
            .ui-table tbody tr:last-child { border-bottom: none; }
            .ui-table tbody tr:hover { background: var(--surface-alt); }
            .ui-table tbody td { padding: 13px 20px; font-size: 13.5px; color: var(--ink-2); vertical-align: middle; }

            .user-cell { display: flex; align-items: center; gap: 11px; }
            .avatar {
                width: 34px; height: 34px; border-radius: 10px;
                font-size: 11.5px; font-weight: 600; font-variant-numeric: tabular-nums;
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0; border: 1px solid;
            }
            .av-solid   { background: var(--ink); color: #fff; border-color: var(--ink); }
            .av-outline { background: var(--surface); color: var(--ink); border-color: var(--ink); }

            .user-name  { color: var(--ink); font-weight: 600; font-size: 13.5px; }
            .user-email { color: var(--ink-faint); font-size: 12px; margin-top: 1px; }

            .id-pill {
                background: var(--surface-alt); color: var(--ink-faint);
                border-radius: 5px; font-size: 11.5px; font-variant-numeric: tabular-nums;
                font-weight: 600; padding: 2px 7px; border: 1px solid var(--line);
            }
            .role-badge { border-radius: 6px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; text-transform: uppercase; letter-spacing: .03em; }
            .role-admin { background: var(--ink); color: #fff; }
            .role-user  { background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); }

            .status-dot { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 500; }
            .status-dot::before { content: ''; width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; box-sizing: border-box; }
            .status-active   { color: var(--accent-ink); } .status-active::before   { background: var(--accent); }
            .status-inactive { color: var(--ink-faint); }  .status-inactive::before { background: transparent; border: 1.5px solid var(--ink-faint); }

            .action-icons { display: flex; align-items: center; gap: 4px; }
            .action-btn {
                border-radius: 7px;
                border: 1px solid var(--line); background: var(--surface);
                color: var(--ink-2);
                display: inline-flex; align-items: center; justify-content: center;
                cursor: pointer; transition: all .15s; text-decoration: none;
                font-size: 12px; font-weight: 500; padding: 5px 10px;
            }
            .action-btn.btn-view:hover { background: var(--accent-soft); color: var(--accent-ink); border-color: var(--accent); }
            .action-btn.btn-edit:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
            .action-btn.btn-delete { border-style: dashed; }
            .action-btn.btn-delete:hover { background: var(--ink); color: #fff; border-color: var(--ink); border-style: solid; }

            .pg-bar { padding: 13px 20px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
            .pg-info { font-size: 12.5px; color: var(--ink-faint); }
            .pg-link {
                display: inline-flex; align-items: center; justify-content: center;
                min-width: 30px; height: 30px; padding: 0 8px; border-radius: 7px;
                border: 1px solid var(--line); color: var(--ink-2); font-size: 12.5px;
                font-variant-numeric: tabular-nums;
                text-decoration: none; transition: background .12s, color .12s;
            }
            .pg-link:hover { background: var(--accent-soft); color: var(--accent-ink); }
            .pg-link.active { background: var(--accent); color: #fff; border-color: var(--accent); }
            .pg-link.disabled { opacity: .4; pointer-events: none; }

            .modal-content { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 12px !important; color: var(--ink-2); font-family: var(--font-sans); }
            .modal-header { border-bottom: 1px solid var(--line) !important; padding: 20px 24px 16px !important; }
            .modal-title  { font-family: var(--font-display); font-weight: 600; font-size: 16px; color: var(--ink); display: flex; align-items: center; }
            .modal-footer { border-top: 1px solid var(--line) !important; padding: 14px 24px !important; }
            .modal-body   { padding: 20px 24px !important; }

            .form-label { color: var(--ink-2); font-size: 12px; font-weight: 600; margin-bottom: 5px; letter-spacing: .2px; display: block; }
            .text-muted-hint { color: var(--ink-faint); }
            .text-error { color: var(--ink); font-weight: 600; }
            .form-control, .form-select {
                background: var(--surface-alt); border: 1px solid var(--line);
                border-radius: 8px; color: var(--ink); font-size: 13.5px; padding: 9px 12px;
                transition: border-color .15s, box-shadow .15s; width: 100%;
            }
            .form-control:focus, .form-select:focus {
                border-color: var(--accent); background: var(--surface);
                box-shadow: 0 0 0 3px rgba(0,166,103,.12); outline: none;
            }
            .form-control::placeholder { color: var(--ink-faint); }

            .btn-cancel {
                background: var(--surface-alt); border: 1px solid var(--line);
                color: var(--ink-2); border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 18px; cursor: pointer;
                transition: background .15s;
            }
            .btn-cancel:hover { background: var(--line-soft); }
            .btn-primary-sm {
                background: var(--ink); border: none;
                color: #fff; border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-primary-sm:hover { background: #000; }
            .btn-primary-sm:disabled { opacity: .6; cursor: not-allowed; }
            .btn-danger-sm {
                background: var(--ink); border: none;
                color: #fff; border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-danger-sm:hover { background: #000; }
            .btn-danger-sm:disabled { opacity: .6; cursor: not-allowed; }

            .warn-box {
                background: var(--surface-alt); border: 1px dashed var(--ink); border-radius: 10px;
                padding: 14px 16px; display: flex; align-items: flex-start; gap: 12px;
                color: var(--ink-2); font-size: 13.5px;
            }
            .warn-box .ni { flex-shrink: 0; margin-top: 1px; color: var(--ink); }
            .warn-name { font-weight: 700; color: var(--ink); margin-bottom: 3px; display: block; }

            .empty-row td { text-align: center; padding: 52px 20px; color: var(--ink-faint); }
        `}</style>
    );
}
