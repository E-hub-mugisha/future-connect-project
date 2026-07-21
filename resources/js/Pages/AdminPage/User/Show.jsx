import { useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const TABS = [
    { key: 'personal', label: 'Personal Info', icon: 'user' },
    { key: 'notifications', label: 'Notifications', icon: 'bell' },
    { key: 'activity', label: 'Account Activity', icon: 'activity' },
    { key: 'security', label: 'Security Settings', icon: 'lock' },
    { key: 'social', label: 'Connected Accounts', icon: 'grid' },
];

/**
 * User profile page — converted from the Blade `admin.users.show` view.
 *
 * Expects an Inertia prop `user`:
 *   { id, name, email, phone, role: 'admin'|'user', active: boolean, created_at }
 */
export default function UserShow({ user, appName = 'App' }) {
    const [activeTab, setActiveTab] = useState('personal');

    const fmtYear = user.created_at ? new Date(user.created_at).getFullYear() : '';
    const fmtFull = user.created_at
        ? new Date(user.created_at).toLocaleString('en-GB', {
              day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
          })
        : '';
    const initials = (user.name || '').slice(0, 2).toUpperCase();

    return (
        <AppLayout title={`${user.name} — Profile`}>
            <Head title={`${user.name} — Profile`} />
            <ProfileStyles />

            <div className="container-fluid px-4 py-4">
                <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="back-link">
                    <BackIcon /> Back to Users
                </a>

                <div className="row g-4 align-items-start">
                    {/* ── Sidebar ── */}
                    <div className="col-12 col-lg-3">
                        <div className="ui-card">
                            <div className="avatar-block">
                                <div className="top-actions">
                                    <button
                                        type="button"
                                        className="action-btn btn-edit"
                                        title="Edit profile"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editUserModal"
                                    >
                                        <EditIcon />
                                    </button>
                                    <button type="button" className="action-btn" title="Change photo">
                                        <CameraIcon />
                                    </button>
                                    <button
                                        type="button"
                                        className="action-btn btn-delete"
                                        title="Delete user"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteUserModal"
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                                <div className="avatar-lg">{initials}</div>
                                <div className="sb-name">{user.name}</div>
                                <div className="sb-email">{user.email}</div>
                                <span className="sb-role">{user.role ? user.role[0].toUpperCase() + user.role.slice(1) : ''}</span>
                            </div>

                            <div className="stats-row">
                                <div className="stat">
                                    <div className="stat-val">{fmtYear}</div>
                                    <div className="stat-lbl">Since</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-val" style={{ color: user.active ? 'var(--success)' : 'var(--danger)' }}>
                                        {user.active ? 'Active' : 'Inactive'}
                                    </div>
                                    <div className="stat-lbl">Status</div>
                                </div>
                            </div>

                            <nav className="sidebar-nav">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        className={`nav-tab ${activeTab === tab.key ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        <TabIcon name={tab.icon} /> {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* ── Main ── */}
                    <div className="col-12 col-lg-9">
                        <div className="ui-card">
                            {activeTab === 'personal' && (
                                <div className="tab-pane">
                                    <div className="panel-header">
                                        <div>
                                            <div className="panel-title">Personal Information</div>
                                            <div className="panel-sub">Basic info used on {appName}</div>
                                        </div>
                                        <button className="edit-inline-btn" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                            <EditIcon size={14} /> Edit
                                        </button>
                                    </div>
                                    <div className="section-head">Basics</div>
                                    <div className="data-row">
                                        <div className="data-label"><UserIcon /> Full Name</div>
                                        <div className="data-value">{user.name}</div>
                                    </div>
                                    <div className="data-row">
                                        <div className="data-label"><MailIcon /> Email</div>
                                        <div className="data-value">{user.email}</div>
                                    </div>
                                    <div className="data-row">
                                        <div className="data-label"><PhoneIcon /> Phone</div>
                                        <div className="data-value" style={!user.phone ? { color: 'var(--text-lo)' } : undefined}>
                                            {user.phone ?? '—'}
                                        </div>
                                    </div>
                                    <div className="section-head">Access</div>
                                    <div className="data-row">
                                        <div className="data-label"><ShieldIcon /> Role</div>
                                        <div className="data-value">
                                            <span className="role-chip">{user.role ? user.role[0].toUpperCase() + user.role.slice(1) : ''}</span>
                                        </div>
                                    </div>
                                    <div className="data-row">
                                        <div className="data-label"><ToggleIcon /> Status</div>
                                        <div className="data-value">
                                            <span className={`status-chip ${user.active ? 'chip-active' : 'chip-inactive'}`}>
                                                {user.active ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="data-row">
                                        <div className="data-label"><CalendarIcon /> Registered</div>
                                        <div className="data-value">{fmtFull}</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <EmptyTab
                                    icon={<BellOffIcon />}
                                    title="Notifications"
                                    sub="Manage notification preferences"
                                    emptyTitle="No preferences configured"
                                    emptyText="Notification settings will appear here once configured."
                                />
                            )}

                            {activeTab === 'activity' && (
                                <EmptyTab
                                    icon={<ActivityIcon />}
                                    title="Account Activity"
                                    sub="Recent login sessions and actions"
                                    emptyTitle="No recent activity"
                                    emptyText="Login sessions and activity logs will appear here."
                                />
                            )}

                            {activeTab === 'security' && (
                                <EmptyTab
                                    icon={<LockIcon />}
                                    title="Security Settings"
                                    sub="Password, 2FA, and access controls"
                                    emptyTitle="Security options coming soon"
                                    emptyText="Configure 2FA, password resets, and session management here."
                                />
                            )}

                            {activeTab === 'social' && (
                                <EmptyTab
                                    icon={<GridIcon />}
                                    title="Connected Accounts"
                                    sub="Social and third-party integrations"
                                    emptyTitle="No connected accounts"
                                    emptyText="Social accounts will appear here once linked."
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <EditUserModal user={user} />
            <DeleteUserModal user={user} />
        </AppLayout>
    );
}

function EmptyTab({ icon, title, sub, emptyTitle, emptyText }) {
    return (
        <div className="tab-pane">
            <div className="panel-header">
                <div>
                    <div className="panel-title">{title}</div>
                    <div className="panel-sub">{sub}</div>
                </div>
            </div>
            <div className="empty-tab">
                <span className="empty-icon">{icon}</span>
                <h5>{emptyTitle}</h5>
                <p>{emptyText}</p>
            </div>
        </div>
    );
}

/* ── Edit modal ── */
function EditUserModal({ user }) {
    const modalRef = useRef(null);
    const { data, setData, put, processing, errors } = useForm({
        name: user.name ?? '',
        email: user.email ?? '',
        password: '',
        role: user.role ?? 'user',
        active: user.active ? '1' : '0',
    });

    const closeModal = () => {
        const instance = window.bootstrap?.Modal.getInstance(modalRef.current);
        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.users.update', user.id), {
            preserveScroll: true,
            onSuccess: closeModal,
        });
    };

    return (
        <div className="modal fade" id="editUserModal" ref={modalRef} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <form className="modal-content" onSubmit={submit}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <EditIcon style={{ color: 'var(--warning)', marginRight: 8 }} /> Edit User
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body d-grid gap-3">
                        <div>
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div>
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div>
                            <label className="form-label">
                                New Password <small className="text-muted fw-normal">(leave blank to keep current)</small>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            {errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="row g-3">
                            <div className="col-6">
                                <label className="form-label">Role</label>
                                <select className="form-select" value={data.role} onChange={(e) => setData('role', e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                {errors.role && <small className="text-danger">{errors.role}</small>}
                            </div>
                            <div className="col-6">
                                <label className="form-label">Status</label>
                                <select className="form-select" value={data.active} onChange={(e) => setData('active', e.target.value)}>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                {errors.active && <small className="text-danger">{errors.active}</small>}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer gap-2">
                        <button type="button" className="btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn-primary-sm" disabled={processing}>
                            {processing ? 'Saving…' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ── Delete modal ── */
function DeleteUserModal({ user }) {
    const modalRef = useRef(null);
    const { delete: destroy, processing } = useForm({});

    const closeModal = () => {
        const instance = window.bootstrap?.Modal.getInstance(modalRef.current);
        instance?.hide();
    };

    const submit = (e) => {
        e.preventDefault();
        destroy(route('admin.users.destroy', user.id), {
            onSuccess: closeModal,
        });
    };

    return (
        <div className="modal fade" id="deleteUserModal" ref={modalRef} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <form className="modal-content" onSubmit={submit}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <TrashIcon style={{ color: 'var(--danger)', marginRight: 8 }} /> Delete User
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <div className="warn-box">
                            <AlertIcon />
                            <div>
                                <span className="warn-name">{user.name}</span>
                                Permanently deletes this user and all associated data. This cannot be undone.
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer gap-2">
                        <button type="button" className="btn-cancel" data-bs-dismiss="modal">Keep User</button>
                        <button type="submit" className="btn-danger-sm" disabled={processing}>
                            <TrashIcon size={14} style={{ marginRight: 4 }} /> {processing ? 'Deleting…' : 'Delete'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ── Icons (replacing the old `ni` font-icon classes) ── */
function svgProps({ size = 15, style, ...rest }) {
    return { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', style, ...rest };
}
function BackIcon(p) { return <svg {...svgProps(p)}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>; }
function EditIcon(p) { return <svg {...svgProps(p)}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>; }
function CameraIcon(p) { return <svg {...svgProps(p)}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>; }
function TrashIcon(p) { return <svg {...svgProps(p)}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>; }
function UserIcon(p) { return <svg {...svgProps(p)}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>; }
function MailIcon(p) { return <svg {...svgProps(p)}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>; }
function PhoneIcon(p) { return <svg {...svgProps(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function ShieldIcon(p) { return <svg {...svgProps(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>; }
function ToggleIcon(p) { return <svg {...svgProps(p)}><rect x="1" y="6" width="22" height="12" rx="6" /><circle cx="16" cy="12" r="4" /></svg>; }
function CalendarIcon(p) { return <svg {...svgProps(p)}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>; }
function AlertIcon(p) { return <svg {...svgProps({ size: 18, ...p })}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>; }
function BellOffIcon(p) { return <svg {...svgProps({ size: 32, ...p })}><path d="M13.73 21a2 2 0 0 1-3.46 0" /><path d="M18.63 13A17.89 17.89 0 0 1 18 8" /><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" /><path d="M18 8a6 6 0 0 0-9.33-5" /><line x1="1" y1="1" x2="23" y2="23" /></svg>; }
function ActivityIcon(p) { return <svg {...svgProps({ size: 32, ...p })}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>; }
function LockIcon(p) { return <svg {...svgProps({ size: 32, ...p })}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>; }
function GridIcon(p) { return <svg {...svgProps({ size: 32, ...p })}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>; }
function BellIcon(p) { return <svg {...svgProps(p)}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>; }

function TabIcon({ name }) {
    const map = {
        user: <UserIcon size={16} />,
        bell: <BellIcon size={16} />,
        activity: <ActivityIcon size={16} />,
        lock: <LockIcon size={16} />,
        grid: <GridIcon size={16} />,
    };
    return map[name] ?? null;
}

/* ── Styles: light tokens on :root, dark tokens under [data-bs-theme="dark"] ── */
function ProfileStyles() {
    return (
        <style>{`
            :root {
                --accent:       #4361EE;
                --accent-light: #EEF1FD;
                --accent-dark:  #3451D1;
                --text-hi:      #111827;
                --text-mid:     #4B5563;
                --text-lo:      #9CA3AF;
                --border:       #E4E8F0;
                --border-med:   #D0D7E5;
                --success:      #10B981;
                --danger:       #EF4444;
                --warning:      #F59E0B;
                --surface:      #F8F9FC;
                --surface-2:    #fff;
                --surface-3:    #F9FAFB;
                --surface-4:    #FAFAFA;
                --hair:         #F3F4F6;
            }

            [data-bs-theme="dark"] {
                --accent:       #6d84f7;
                --accent-light: rgba(109, 132, 247, 0.14);
                --accent-dark:  #8494f9;
                --text-hi:      #f1f4fb;
                --text-mid:     #b9c1d6;
                --text-lo:      #7c8499;
                --border:       rgba(241, 244, 251, 0.10);
                --border-med:   rgba(241, 244, 251, 0.16);
                --success:      #34d399;
                --danger:       #f87171;
                --warning:      #fbbf24;
                --surface:      #0e141f;
                --surface-2:    #151c29;
                --surface-3:    #1b2332;
                --surface-4:    #171f2c;
                --hair:         rgba(241, 244, 251, 0.06);
            }

            body { background: var(--surface); }

            .back-link {
                display: inline-flex; align-items: center; gap: 6px;
                color: var(--text-lo); font-size: 13px;
                text-decoration: none; margin-bottom: 20px; transition: color .15s;
            }
            .back-link:hover { color: var(--accent); }

            .action-btn {
                width: 32px; height: 32px; border-radius: 7px;
                border: 1px solid var(--border); background: transparent;
                color: var(--text-lo);
                display: inline-flex; align-items: center; justify-content: center;
                cursor: pointer; transition: all .15s; text-decoration: none; font-size: 15px;
            }
            .action-btn:hover           { background: var(--accent-light); color: var(--accent); border-color: #C7D2FB; }
            .action-btn.btn-edit:hover  { background: #FFFBEB; color: var(--warning); border-color: #FDE68A; }
            .action-btn.btn-delete:hover{ background: #FEF2F2; color: var(--danger);  border-color: #FCA5A5; }

            .ui-card {
                background: var(--surface-2); border: 1px solid var(--border);
                border-radius: 14px; overflow: hidden;
                box-shadow: 0 1px 4px rgba(0,0,0,.04);
            }

            .avatar-block {
                padding: 28px 16px 20px;
                display: flex; flex-direction: column; align-items: center; gap: 8px;
                border-bottom: 1px solid var(--border); position: relative;
            }
            .top-actions { position: absolute; top: 12px; right: 12px; display: flex; gap: 4px; }
            .avatar-lg {
                width: 72px; height: 72px; border-radius: 50%;
                background: var(--accent-light); color: var(--accent);
                font-size: 24px; font-weight: 700;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid #C7D2FB;
            }
            .sb-name  { color: var(--text-hi); font-size: 15px; font-weight: 700; text-align: center; }
            .sb-email { color: var(--text-lo); font-size: 12px; text-align: center; }
            .sb-role  {
                background: var(--accent-light); color: var(--accent);
                border-radius: 6px; font-size: 11px; font-weight: 600; padding: 3px 11px;
            }

            .stats-row { display: grid; grid-template-columns: 1fr 1fr; }
            .stat { padding: 14px 12px; text-align: center; }
            .stat:first-child { border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
            .stat:last-child  { border-bottom: 1px solid var(--border); }
            .stat-val { color: var(--text-hi); font-size: 14px; font-weight: 700; }
            .stat-lbl { color: var(--text-lo); font-size: 11px; text-transform: uppercase; letter-spacing: .5px; margin-top: 2px; }

            .sidebar-nav { padding: 6px 0; }
            .nav-tab {
                display: flex; align-items: center; gap: 10px;
                padding: 10px 16px; color: var(--text-mid);
                font-size: 13px; font-weight: 500; text-decoration: none; cursor: pointer;
                border-left: 3px solid transparent; transition: all .12s;
                background: none; border-top: none; border-right: none; border-bottom: none;
                width: 100%; text-align: left;
            }
            .nav-tab:hover  { background: var(--surface-3); color: var(--accent); }
            .nav-tab.active { background: var(--accent-light); color: var(--accent); border-left-color: var(--accent); font-weight: 600; }

            .panel-header {
                padding: 20px 28px 16px; border-bottom: 1px solid var(--border);
                display: flex; align-items: center; justify-content: space-between;
            }
            .panel-title { font-size: 15px; font-weight: 700; color: var(--text-hi); }
            .panel-sub   { color: var(--text-lo); font-size: 12.5px; margin-top: 3px; }

            .edit-inline-btn {
                display: inline-flex; align-items: center; gap: 6px;
                background: transparent; border: 1px solid var(--border-med);
                border-radius: 7px; color: var(--text-mid);
                font-size: 12.5px; font-weight: 500; padding: 7px 14px; cursor: pointer;
                transition: all .15s;
            }
            .edit-inline-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

            .section-head {
                padding: 10px 28px; font-size: 11px; font-weight: 700;
                text-transform: uppercase; letter-spacing: .8px;
                color: var(--text-lo); background: var(--surface-4);
                border-bottom: 1px solid var(--hair);
            }
            .data-row {
                display: flex; align-items: center; padding: 13px 28px;
                border-bottom: 1px solid var(--hair); gap: 12px;
            }
            .data-row:last-child { border-bottom: none; }
            .data-label {
                width: 180px; flex-shrink: 0;
                color: var(--text-lo); font-size: 12.5px; font-weight: 500;
                display: flex; align-items: center; gap: 7px;
            }
            .data-value { color: var(--text-hi); font-size: 13.5px; flex: 1; }

            .role-chip { background: var(--accent-light); color: var(--accent); border-radius: 6px; font-size: 12px; font-weight: 600; padding: 3px 10px; }
            .status-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; font-weight: 500; }
            .status-chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
            .chip-active   { color: var(--success); } .chip-active::before   { background: var(--success); }
            .chip-inactive { color: var(--danger);  } .chip-inactive::before { background: var(--danger); }

            .empty-tab { padding: 60px 28px; text-align: center; }
            .empty-tab .empty-icon { display: block; margin: 0 auto 12px; color: var(--border-med); }
            .empty-tab h5 { font-size: 14px; font-weight: 600; color: var(--text-mid); margin-bottom: 6px; }
            .empty-tab p  { font-size: 13px; color: var(--text-lo); margin: 0; }

            .modal-content { background: var(--surface-2) !important; border: 1px solid var(--border) !important; border-radius: 14px !important; color: var(--text-mid); }
            .modal-header { border-bottom: 1px solid var(--border) !important; padding: 20px 24px 16px !important; }
            .modal-title  { font-weight: 700; font-size: 15px; color: var(--text-hi); display: flex; align-items: center; }
            .modal-footer { border-top: 1px solid var(--border) !important; padding: 14px 24px !important; }
            .modal-body   { padding: 20px 24px !important; }
            [data-bs-theme="dark"] .btn-close { filter: invert(1) grayscale(100%); }

            .form-label { color: var(--text-mid); font-size: 12px; font-weight: 600; margin-bottom: 5px; display: block; }
            .form-control, .form-select {
                background: var(--surface-3); border: 1px solid var(--border-med);
                border-radius: 8px; color: var(--text-hi); font-size: 13.5px; padding: 9px 12px;
                transition: border-color .15s; width: 100%;
            }
            .form-control:focus, .form-select:focus {
                border-color: var(--accent); background: var(--surface-2);
                box-shadow: 0 0 0 3px rgba(67,97,238,.08); outline: none;
            }
            .form-control::placeholder { color: var(--text-lo); }

            .btn-cancel {
                background: var(--surface-3); border: 1px solid var(--border);
                color: var(--text-mid); border-radius: 7px;
                font-size: 13px; font-weight: 500; padding: 8px 18px; cursor: pointer;
            }
            .btn-cancel:hover { background: var(--border); }
            .btn-primary-sm {
                background: var(--accent); border: none; color: #fff;
                border-radius: 7px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
            }
            .btn-primary-sm:hover { background: var(--accent-dark); }
            .btn-primary-sm:disabled { opacity: .6; cursor: not-allowed; }
            .btn-danger-sm {
                background: var(--danger); border: none; color: #fff;
                border-radius: 7px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center;
            }
            .btn-danger-sm:hover { background: #DC2626; }
            .btn-danger-sm:disabled { opacity: .6; cursor: not-allowed; }

            .warn-box {
                background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 9px;
                padding: 14px 16px; display: flex; gap: 12px;
                color: var(--danger); font-size: 13.5px; align-items: flex-start;
            }
            [data-bs-theme="dark"] .warn-box { background: rgba(248, 113, 113, 0.10); border-color: rgba(248, 113, 113, 0.35); }
            .warn-name { font-weight: 700; color: #DC2626; margin-bottom: 3px; display: block; }
            [data-bs-theme="dark"] .warn-name { color: #f87171; }
        `}</style>
    );
}
