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
    const recordNo = String(user.id ?? 0).padStart(5, '0');

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
                        <div className="ui-card profile-card">
                            <div className="record-tag">FILE №&nbsp;{recordNo}</div>

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
                                    <div className="stat-lbl">Member Since</div>
                                </div>
                                <div className="stat">
                                    <div className={`stat-val ${user.active ? 'is-active' : 'is-inactive'}`}>
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
                                        <span className="nav-tab-icon"><TabIcon name={tab.icon} /></span>
                                        {tab.label}
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
                                            <div className="panel-eyebrow">Record Detail</div>
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
                                        <div className="data-value" style={!user.phone ? { color: 'var(--ink-faint)' } : undefined}>
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
                    <div className="panel-eyebrow">Record Detail</div>
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

/* ── Styles: institutional-record design system ── */
function ProfileStyles() {
    return (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

            :root {
                --ink:          #10141F;
                --ink-2:        #4A5268;
                --ink-faint:    #97A0B3;
                --line:         #E3E6EC;
                --line-soft:    #EEF0F4;
                --canvas:       #F5F6F9;
                --surface:      #F5f5f7;
                --surface-alt:  #FAFBFD;

                --accent:       #1E3A5F;
                --accent-ink:   #14273E;
                --accent-soft:  #E9EFF6;

                --success:      #0F7B4C;
                --success-soft: #E5F6EC;
                --danger:       #C0392B;
                --danger-soft:  #FBEAE8;
                --warning:      #B7791F;
                --warning-soft: #FBF1DF;

                --font-display: 'Fraunces', serif;
                --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                --font-mono: 'JetBrains Mono', ui-monospace, monospace;
            }

            body { background: var(--canvas); font-family: var(--font-sans); }

            .back-link {
                display: inline-flex; align-items: center; gap: 6px;
                color: var(--ink-faint); font-size: 13px; font-weight: 500;
                text-decoration: none; margin-bottom: 22px; transition: color .15s, gap .15s;
            }
            .back-link:hover { color: var(--accent); gap: 9px; }

            .action-btn {
                width: 30px; height: 30px; border-radius: 7px;
                border: 1px solid var(--line); background: var(--surface);
                color: var(--ink-faint);
                display: inline-flex; align-items: center; justify-content: center;
                cursor: pointer; transition: all .15s; text-decoration: none;
            }
            .action-btn:hover            { background: var(--accent-soft); color: var(--accent); border-color: #C7D5E6; }
            .action-btn.btn-edit:hover   { background: var(--warning-soft); color: var(--warning); border-color: #EAD3A3; }
            .action-btn.btn-delete:hover { background: var(--danger-soft); color: var(--danger); border-color: #EFC0B8; }

            .ui-card {
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 12px; overflow: hidden;
                box-shadow: 0 1px 2px rgba(16,20,31,.03);
            }

            .profile-card { position: relative; }
            .record-tag {
                position: absolute; top: 0; left: 0;
                font-family: var(--font-mono); font-size: 10px; font-weight: 600;
                letter-spacing: .06em; color: var(--accent);
                background: var(--accent-soft); padding: 5px 12px 5px 14px;
                border-bottom-right-radius: 10px;
            }

            .avatar-block {
                padding: 40px 16px 20px;
                display: flex; flex-direction: column; align-items: center; gap: 7px;
                border-bottom: 1px solid var(--line); position: relative;
            }
            .top-actions { position: absolute; top: 14px; right: 14px; display: flex; gap: 4px; }
            .avatar-lg {
                width: 68px; height: 68px; border-radius: 16px;
                background: var(--accent); color: #fff;
                font-family: var(--font-display); font-size: 24px; font-weight: 600;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 6px 16px rgba(30,58,95,.25);
            }
            .sb-name  { font-family: var(--font-display); color: var(--ink); font-size: 18px; font-weight: 600; text-align: center; margin-top: 4px; }
            .sb-email { color: var(--ink-faint); font-size: 12.5px; text-align: center; }
            .sb-role  {
                background: var(--accent-soft); color: var(--accent);
                border-radius: 5px; font-size: 10.5px; font-weight: 700; letter-spacing: .05em;
                text-transform: uppercase; padding: 4px 11px; margin-top: 4px;
            }

            .stats-row { display: grid; grid-template-columns: 1fr 1fr; }
            .stat { padding: 16px 12px; text-align: center; }
            .stat:first-child { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
            .stat:last-child  { border-bottom: 1px solid var(--line); }
            .stat-val { font-family: var(--font-mono); color: var(--ink); font-size: 14px; font-weight: 600; }
            .stat-val.is-active   { color: var(--success); }
            .stat-val.is-inactive { color: var(--danger); }
            .stat-lbl { color: var(--ink-faint); font-size: 10px; text-transform: uppercase; letter-spacing: .07em; margin-top: 3px; font-weight: 500; }

            .sidebar-nav { padding: 8px; }
            .nav-tab {
                display: flex; align-items: center; gap: 10px;
                padding: 9px 10px; color: var(--ink-2);
                font-size: 13px; font-weight: 500; text-decoration: none; cursor: pointer;
                border-radius: 8px; transition: all .12s;
                background: none; border: none;
                width: 100%; text-align: left; margin-bottom: 2px;
            }
            .nav-tab-icon {
                width: 26px; height: 26px; border-radius: 7px;
                display: inline-flex; align-items: center; justify-content: center;
                background: var(--surface-alt); color: var(--ink-faint); flex-shrink: 0;
                transition: all .12s;
            }
            .nav-tab:hover { background: var(--surface-alt); color: var(--ink); }
            .nav-tab.active { background: var(--accent-soft); color: var(--accent-ink); font-weight: 600; }
            .nav-tab.active .nav-tab-icon { background: var(--accent); color: #fff; }

            .panel-header {
                padding: 22px 28px 18px; border-bottom: 1px solid var(--line);
                display: flex; align-items: flex-start; justify-content: space-between;
            }
            .panel-eyebrow {
                font-family: var(--font-mono); font-size: 10px; font-weight: 600;
                letter-spacing: .09em; text-transform: uppercase; color: var(--ink-faint);
                margin-bottom: 6px;
            }
            .panel-title { font-family: var(--font-display); font-size: 19px; font-weight: 600; color: var(--ink); }
            .panel-sub   { color: var(--ink-faint); font-size: 12.5px; margin-top: 4px; }

            .edit-inline-btn {
                display: inline-flex; align-items: center; gap: 6px;
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 8px; color: var(--ink-2);
                font-size: 12.5px; font-weight: 500; padding: 7px 14px; cursor: pointer;
                transition: all .15s; flex-shrink: 0;
            }
            .edit-inline-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }

            .section-head {
                padding: 11px 28px; font-family: var(--font-mono); font-size: 10.5px; font-weight: 600;
                text-transform: uppercase; letter-spacing: .09em;
                color: var(--ink-faint); background: var(--surface-alt);
                border-bottom: 1px solid var(--line-soft);
            }
            .data-row {
                display: flex; align-items: center; padding: 14px 28px;
                border-bottom: 1px solid var(--line-soft); gap: 12px;
            }
            .data-row:last-child { border-bottom: none; }
            .data-label {
                width: 180px; flex-shrink: 0;
                color: var(--ink-faint); font-family: var(--font-mono); font-size: 11px; font-weight: 500;
                text-transform: uppercase; letter-spacing: .04em;
                display: flex; align-items: center; gap: 8px;
            }
            .data-value { color: var(--ink); font-size: 13.5px; flex: 1; }

            .role-chip {
                background: var(--accent-soft); color: var(--accent);
                border-radius: 5px; font-size: 11.5px; font-weight: 600; padding: 3px 10px;
                text-transform: uppercase; letter-spacing: .03em;
            }
            .status-chip { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; }
            .status-chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
            .chip-active   { color: var(--success); } .chip-active::before   { background: var(--success); }
            .chip-inactive { color: var(--danger);  } .chip-inactive::before { background: var(--danger); }

            .empty-tab { padding: 64px 28px; text-align: center; }
            .empty-tab .empty-icon {
                display: inline-flex; align-items: center; justify-content: center;
                width: 64px; height: 64px; border-radius: 50%;
                background: var(--surface-alt); color: var(--ink-faint); margin: 0 auto 14px;
            }
            .empty-tab h5 { font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--ink-2); margin-bottom: 6px; }
            .empty-tab p  { font-size: 13px; color: var(--ink-faint); margin: 0; }

            .modal-content { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 14px !important; color: var(--ink-2); font-family: var(--font-sans); }
            .modal-header { border-bottom: 1px solid var(--line) !important; padding: 20px 24px 16px !important; }
            .modal-title  { font-family: var(--font-display); font-weight: 600; font-size: 16px; color: var(--ink); display: flex; align-items: center; }
            .modal-footer { border-top: 1px solid var(--line) !important; padding: 14px 24px !important; }
            .modal-body   { padding: 20px 24px !important; }

            .form-label { color: var(--ink-2); font-size: 12px; font-weight: 600; margin-bottom: 5px; display: block; }
            .form-control, .form-select {
                background: var(--surface-alt); border: 1px solid var(--line);
                border-radius: 8px; color: var(--ink); font-size: 13.5px; padding: 9px 12px;
                transition: border-color .15s, box-shadow .15s; width: 100%;
            }
            .form-control:focus, .form-select:focus {
                border-color: var(--accent); background: var(--surface);
                box-shadow: 0 0 0 3px rgba(30,58,95,.10); outline: none;
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
                background: var(--accent); border: none; color: #fff;
                border-radius: 8px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                transition: background .15s;
            }
            .btn-primary-sm:hover { background: var(--accent-ink); }
            .btn-primary-sm:disabled { opacity: .6; cursor: not-allowed; }
            .btn-danger-sm {
                background: var(--danger); border: none; color: #fff;
                border-radius: 8px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-danger-sm:hover { background: #A5301F; }
            .btn-danger-sm:disabled { opacity: .6; cursor: not-allowed; }

            .warn-box {
                background: var(--danger-soft); border: 1px solid #EFC0B8; border-radius: 10px;
                padding: 14px 16px; display: flex; gap: 12px;
                color: var(--danger); font-size: 13.5px; align-items: flex-start;
            }
            .warn-name { font-weight: 700; color: #A5301F; margin-bottom: 3px; display: block; }
        `}</style>
    );
}