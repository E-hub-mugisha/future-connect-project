import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/**
 * Dashboard page — converted from the Blade `admin.dashboard` view.
 *
 * Expects these Inertia props from the controller (same data the Blade
 * view used):
 *   totalCourses, totalUsers, totalTestimonials, totalTalents: number
 *   talents: [{ id, name, image, phone, email, language, address, description,
 *               created_at, status, category: { name } }]
 *   users: [{ id, name, email }]
 *   announcements: [{ id, title, created_at }]
 *   payments: [{ id, email, amount, currency, tx_ref, status, created_at,
 *                story: { title } }]
 *
 * Bootstrap's JS bundle (dropdowns / modals) is assumed to still be loaded
 * globally, same as the old Blade layout — the data-bs-* attributes below
 * rely on it exactly as before.
 */
export default function Dashboard({
    totalCourses = 0,
    totalUsers = 0,
    totalTestimonials = 0,
    totalTalents = 0,
    talents = [],
    users = [],
    announcements = [],
    payments = [],
    appName = 'App',
}) {
    const fmtDate = (d) =>
        d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

    return (
        <AppLayout title="Dashboard">
            <Head title={`Dashboard - ${appName}`} />

            <DashboardStyles />

            <div className="content-wrapper">
                {/* ── PAGE HEADER ── */}
                <div className="page-header d-flex align-items-start justify-content-between flex-wrap gap-3">
                    <div>
                        <h3>{appName} Overview</h3>
                        <p>Welcome back — here's what's happening today.</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <div className="dropdown">
                            <a href="#" className="btn-outline-dim dropdown-toggle" data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                Last 30 Days
                            </a>
                            <ul className="dropdown-menu dash-dropdown">
                                <li><a className="dropdown-item" href="#">Last 30 Days</a></li>
                                <li><a className="dropdown-item" href="#">Last 6 Months</a></li>
                                <li><a className="dropdown-item" href="#">Last 1 Year</a></li>
                            </ul>
                        </div>
                        <a href="#" className="btn-green">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                            Reports
                        </a>
                    </div>
                </div>

                {/* ── STAT CARDS ── */}
                <div className="row g-3 mb-4">
                    <StatCard color="green" value={totalCourses} label="Total Courses" delta="4.26%"
                        icon={<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />} />
                    <StatCard color="blue" value={totalUsers} label="Total Users" delta="2.1%"
                        icon={<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />}
                        extraCircle />
                    <StatCard color="warning" value={totalTestimonials} label="Testimonials" delta="1.8%"
                        icon={<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />} />
                    <StatCard color="danger" value={totalTalents} label="Skills" delta="3.5%"
                        icon={<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />} />
                </div>

                {/* ── CHARTS ROW ── */}
                <div className="row g-3 mb-4">
                    <div className="col-lg-4">
                        <div className="dash-card">
                            <div className="dash-card-body">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <div>
                                        <p className="dash-card-sub mb-1">Course Enrollment</p>
                                        <div className="stat-value" style={{ fontSize: 22 }}>{totalCourses}</div>
                                    </div>
                                    <span className="stat-badge up mt-1">↑ 4.26%</span>
                                </div>
                                <div className="chart-area chart-area-lg">
                                    <canvas id="salesRevenue" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="dash-card">
                            <div className="dash-card-header">
                                <div>
                                    <p className="dash-card-title">Skills Overview</p>
                                    <p className="dash-card-sub mb-0">
                                        30-day activity · <Link href="/admin/talents" className="link-green">See all Skills</Link>
                                    </p>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="btn-ghost-green dropdown-toggle" data-bs-toggle="dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="8 17 12 21 16 17" />
                                            <line x1="12" y1="3" x2="12" y2="21" />
                                        </svg>
                                        Download Report
                                    </a>
                                    <ul className="dropdown-menu dash-dropdown">
                                        <li><a className="dropdown-item" href="#">Mini Version</a></li>
                                        <li><a className="dropdown-item" href="#">Full Version</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">More Options</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dash-card-body">
                                <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--ink)' }}>{totalTalents}</span>
                                <span style={{ fontSize: 12, color: 'var(--ink-40)', marginLeft: 6 }}>Registered Skills</span>
                                <div className="chart-area chart-area-lg mt-3">
                                    <canvas id="salesOverview" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TALENTS TABLE + ANNOUNCEMENTS ── */}
                <div className="row g-3 mb-4">
                    <div className="col-md-12">
                        <div className="dash-card">
                            <div className="dash-card-header">
                                <div>
                                    <p className="dash-card-title">
                                        Skills
                                        <Link href={route('admin.talents.index')} className="link-green ms-2">See all</Link>
                                    </p>
                                </div>
                                <div className="card-tabs">
                                    <a href="#" className="card-tab">Pending</a>
                                    <a href="#" className="card-tab">Approved</a>
                                    <a href="#" className="card-tab active">All</a>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="dash-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th className="d-none d-md-table-cell">Joined</th>
                                            <th className="d-none d-lg-table-cell">Phone</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {talents.map((talent) => (
                                            <tr key={talent.id}>
                                                <td><span className="tb-sub">{talent.id}</span></td>
                                                <td>
                                                    <div className="user-cell">
                                                        <img
                                                            src={talent.image ? `/image/talents/${talent.image}` : '/assets/img/user/profile.jpg'}
                                                            className="user-avatar-sm"
                                                            alt={talent.name}
                                                        />
                                                        <span className="tb-lead">{talent.name}</span>
                                                    </div>
                                                </td>
                                                <td className="d-none d-md-table-cell">
                                                    <span className="tb-sub">{fmtDate(talent.created_at)}</span>
                                                </td>
                                                <td className="d-none d-lg-table-cell">
                                                    <span className="tb-phone">{talent.phone}</span>
                                                </td>
                                                <td>
                                                    <span className="cat-pill">{talent.category?.name ?? 'Uncategorized'}</span>
                                                </td>
                                                <td>
                                                    <span className={`status-badge ${(talent.status || '').toLowerCase()}`}>
                                                        {talent.status ? talent.status[0].toUpperCase() + talent.status.slice(1) : ''}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="action-btn" data-bs-toggle="dropdown" aria-label="Actions">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                                <circle cx="12" cy="5" r="1.5" />
                                                                <circle cx="12" cy="12" r="1.5" />
                                                                <circle cx="12" cy="19" r="1.5" />
                                                            </svg>
                                                        </button>
                                                        <ul className="dropdown-menu dash-dropdown">
                                                            <li>
                                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target={`#quickViewModal${talent.id}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                                        <circle cx="12" cy="12" r="3" />
                                                                    </svg>
                                                                    Quick View
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target={`#statusModal${talent.id}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                    Update Status
                                                                </a>
                                                            </li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li>
                                                                <a className="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target={`#deleteModal${talent.id}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                                                                        <polyline points="3 6 5 6 21 6" />
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                                    </svg>
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <UsersCard users={users} />
                    </div>

                    <div className="col-md-6">
                        <div className="dash-card">
                            <div className="dash-card-header">
                                <p className="dash-card-title">Recent Announcements</p>
                                <div className="card-tabs">
                                    <a href="#" className="card-tab">Published</a>
                                    <a href="#" className="card-tab active">All</a>
                                </div>
                            </div>
                            <ul className="activity-list">
                                {announcements.map((a) => (
                                    <li className="activity-item" key={a.id}>
                                        <div className="activity-dot">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="activity-title">{(a.title || '').slice(0, 50)}{(a.title || '').length > 50 ? '…' : ''}</p>
                                            <span className="activity-time">{fmtDate(a.created_at)}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM ROW ── */}
                <div className="row g-3">
                    <div className="col-md-6">
                        <UsersCard users={users} />
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        <div className="dash-card">
                            <div className="dash-card-header">
                                <p className="dash-card-title">Recent Payments</p>
                                <Link href={route('admin.payments.index')} className="link-green">All payments</Link>
                            </div>
                            {payments.map((payment) => (
                                <div className="payment-row" key={payment.id}>
                                    <div className="pay-avatar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                            <line x1="1" y1="10" x2="23" y2="10" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <div className="pay-title text-truncate">{payment.email ?? 'User'}</div>
                                        <div className="pay-sub text-truncate">{payment.story?.title ?? '—'}</div>
                                        <div className="pay-sub">{fmtDate(payment.created_at)}</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end gap-1 flex-shrink-0">
                                        <span className={`status-badge ${payment.status === 'completed' ? 'approved' : 'pending'}`}>
                                            {payment.status ? payment.status[0].toUpperCase() + payment.status.slice(1) : ''}
                                        </span>
                                        <a href="#" className="btn-view" data-bs-toggle="modal" data-bs-target={`#transaction_details${payment.id}`}>View</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════ MODALS ══════════════════════════════════ */}

            <WithdrawModal />

            {talents.map((talent) => (
                <TalentModals key={talent.id} talent={talent} />
            ))}

            {payments.map((payment) => (
                <TransactionModal key={payment.id} payment={payment} />
            ))}
        </AppLayout>
    );
}

/* ── Stat card ── */
function StatCard({ color, value, label, delta, icon }) {
    return (
        <div className="col-6 col-lg-3">
            <div className={`stat-card ${color}`}>
                <div className={`stat-icon ${color}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {icon}
                    </svg>
                </div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
                <div className="stat-badge up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    {delta}
                </div>
            </div>
        </div>
    );
}

/* ── New users card (reused twice, like the original Blade) ── */
function UsersCard({ users }) {
    return (
        <div className="dash-card">
            <div className="dash-card-header">
                <p className="dash-card-title">New Users</p>
                <Link href={route('admin.users.index')} className="link-green">View all</Link>
            </div>
            {users.map((user) => (
                <div className="user-row" key={user.id}>
                    <div className="user-initials-md">{(user.name || '').slice(0, 2).toUpperCase()}</div>
                    <div className="flex-grow-1 overflow-hidden">
                        <div className="user-lead text-truncate">{user.name}</div>
                        <div className="user-sub text-truncate">{user.email}</div>
                    </div>
                    <div className="dropdown flex-shrink-0">
                        <button className="action-btn" data-bs-toggle="dropdown" aria-label="User actions">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="19" r="1.5" />
                            </svg>
                        </button>
                        <ul className="dropdown-menu dash-dropdown">
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Push Notification</a></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ── Withdraw modal ── */
function WithdrawModal() {
    const handleShortcut = (e) => {
        const input = e.currentTarget.closest('.modal-body')?.querySelector('input[type="text"]');
        if (input) input.value = e.currentTarget.textContent.trim();
    };

    return (
        <div className="modal fade" id="withdraw" tabIndex="-1" data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Withdraw Payment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Enter Amount ($) <span style={{ color: 'var(--danger)' }}>*</span></label>
                            <input type="text" className="form-control" placeholder="0.00" />
                            <div className="amt-shortcuts mt-2">
                                <span className="amt-shortcut" onClick={handleShortcut}>$50</span>
                                <span className="amt-shortcut" onClick={handleShortcut}>$100</span>
                                <span className="amt-shortcut" onClick={handleShortcut}>$150</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Payment Gateway <span style={{ color: 'var(--danger)' }}>*</span></label>
                            <div className="radio-group">
                                <label className="radio-option"><input type="radio" name="payment" value="paypal" /> PayPal</label>
                                <label className="radio-option"><input type="radio" name="payment" value="stripe" /> Stripe</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email <span style={{ color: 'var(--danger)' }}>*</span></label>
                            <input type="email" className="form-control" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password <span style={{ color: 'var(--danger)' }}>*</span></label>
                            <input type="password" className="form-control" placeholder="••••••••" />
                        </div>
                        <button type="button" className="btn-modal-primary w-100" data-bs-toggle="modal" data-bs-target="#success_credit" data-bs-dismiss="modal">
                            Withdraw Funds
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Per-talent modals: status update / quick view / delete ── */
function TalentModals({ talent }) {
    return (
        <>
            <div className="modal fade" id={`statusModal${talent.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form method="POST" action={route('admin.talents.updateStatus', talent.id)}>
                        <input type="hidden" name="_token" value={window.Laravel?.csrfToken ?? document.querySelector('meta[name="csrf-token"]')?.content} />
                        <input type="hidden" name="_method" value="PUT" />
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Status</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <label className="form-label">Select Status</label>
                                <select name="status" className="form-select" defaultValue={talent.status} required>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn-modal-primary">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal fade" id={`quickViewModal${talent.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Talent Quick View</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <img
                                        src={`/image/talents/${talent.image}`}
                                        alt={talent.name}
                                        className="img-fluid rounded-3 w-100"
                                        style={{ objectFit: 'cover', maxHeight: 240, border: '1px solid var(--border)' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h5 style={{ color: 'var(--ink)', marginBottom: 16 }}>{talent.name}</h5>
                                    <div className="summary-grid">
                                        <div className="summary-cell"><h6>Phone</h6><p>{talent.phone}</p></div>
                                        <div className="summary-cell"><h6>Email</h6><p className="text-truncate">{talent.email}</p></div>
                                        <div className="summary-cell"><h6>Category</h6><p>{talent.category?.name ?? 'N/A'}</p></div>
                                        <div className="summary-cell"><h6>Language</h6><p>{talent.language}</p></div>
                                        <div className="summary-cell" style={{ gridColumn: 'span 2' }}><h6>Address</h6><p>{talent.address}</p></div>
                                        <div className="summary-cell" style={{ gridColumn: 'span 2' }}><h6>Description</h6><p style={{ whiteSpace: 'pre-line' }}>{talent.description}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-modal-secondary" data-bs-dismiss="modal">Close</button>
                            <Link href={route('admin.talents.show', talent.id)} className="btn-modal-primary">View Full Profile</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id={`deleteModal${talent.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form action={route('admin.talents.destroy', talent.id)} method="POST" className="modal-content">
                        <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]')?.content} />
                        <input type="hidden" name="_method" value="DELETE" />
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
                                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(224,92,106,0.12)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: 22 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                    </svg>
                                </div>
                                <p style={{ color: 'var(--ink)', fontSize: 14, marginBottom: 6 }}>
                                    Delete <strong>{talent.name}</strong>?
                                </p>
                                <p style={{ fontSize: 12, color: 'var(--ink-40)', margin: 0 }}>This action is permanent and cannot be undone.</p>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn-modal-danger">Yes, Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

/* ── Transaction detail modal ── */
function TransactionModal({ payment }) {
    return (
        <div className="modal fade" id={`transaction_details${payment.id}`} tabIndex="-1" data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Transaction Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-40)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 12 }}>
                            Transaction Summary
                        </p>
                        <div className="summary-grid">
                            <div className="summary-cell"><h6>Transaction ID</h6><p>#{payment.tx_ref}</p></div>
                            <div className="summary-cell"><h6>Type</h6><p>Purchase</p></div>
                            <div className="summary-cell"><h6>Amount</h6><p>${payment.amount}</p></div>
                            <div className="summary-cell"><h6>Currency</h6><p>{payment.currency}</p></div>
                            <div className="summary-cell"><h6>Processing Fee</h6><p>$20</p></div>
                            <div className="summary-cell"><h6>Method</h6><p>Credit Card</p></div>
                            <div className="summary-cell"><h6>Sender</h6><p className="text-truncate">{payment.email}</p></div>
                            <div className="summary-cell"><h6>Receiver</h6><p className="text-truncate">kabosierik@gmail.com</p></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-modal-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Styles: light tokens on :root, dark tokens applied when the
   ThemeContext sets data-bs-theme="dark" on <html>. ── */
function DashboardStyles() {
    return (
        <style>{`
            :root {
                --bg: #f0f4f5;
                --bg-2: #ffffff;
                --bg-3: #f5f8f9;
                --bg-4: #e8eef0;
                --green: #1da870;
                --green-dim: rgba(29, 168, 112, 0.09);
                --green-bd: rgba(29, 168, 112, 0.25);
                --ink: #0f2027;
                --ink-70: rgba(15, 32, 39, 0.70);
                --ink-40: rgba(15, 32, 39, 0.40);
                --ink-12: rgba(15, 32, 39, 0.07);
                --border: rgba(15, 32, 39, 0.09);
                --danger: #d63b4b;
                --warning: #d9820a;
                --info: #2b7fbe;
            }

            [data-bs-theme="dark"] {
                --bg: #0b1416;
                --bg-2: #121e21;
                --bg-3: #172427;
                --bg-4: #1f2f33;
                --green: #2ecf94;
                --green-dim: rgba(46, 207, 148, 0.12);
                --green-bd: rgba(46, 207, 148, 0.30);
                --ink: #eef6f4;
                --ink-70: rgba(238, 246, 244, 0.72);
                --ink-40: rgba(238, 246, 244, 0.45);
                --ink-12: rgba(238, 246, 244, 0.08);
                --border: rgba(238, 246, 244, 0.09);
                --danger: #ef6b78;
                --warning: #eda23e;
                --info: #5aa8e0;
            }

            body { background: var(--bg); color: var(--ink-70); font-family: 'Inter', sans-serif; }

            .content-wrapper { background: var(--bg); min-height: 100vh; padding: 28px 24px; }

            .page-header { margin-bottom: 28px; }
            .page-header h3 { font-size: 20px; font-weight: 600; color: var(--ink); margin-bottom: 4px; letter-spacing: -0.2px; }
            .page-header p { font-size: 13px; color: var(--ink-40); margin: 0; }

            .dash-card { background: var(--bg-2); border: 1px solid var(--border); border-radius: 14px; height: 100%; overflow: hidden; transition: border-color 0.18s, box-shadow 0.18s; }
            .dash-card:hover { border-color: var(--green-bd); box-shadow: 0 4px 20px rgba(15, 32, 39, 0.07); }
            .dash-card-body { padding: 20px 22px; }
            .dash-card-header { padding: 16px 22px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
            .dash-card-title { font-size: 13px; font-weight: 600; color: var(--ink); margin: 0; letter-spacing: 0.1px; }
            .dash-card-sub { font-size: 11px; color: var(--ink-40); margin: 2px 0 0; }

            .stat-card { background: var(--bg-2); border: 1px solid var(--border); border-radius: 14px; padding: 20px 22px; position: relative; overflow: hidden; transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s; }
            .stat-card:hover { border-color: var(--green-bd); box-shadow: 0 6px 24px rgba(15, 32, 39, 0.08); transform: translateY(-2px); }
            .stat-card::before { content: ''; position: absolute; top: 0; right: 0; width: 80px; height: 80px; border-radius: 50%; opacity: 0.06; transform: translate(20px, -20px); }
            .stat-card.green::before { background: var(--green); }
            .stat-card.blue::before { background: var(--info); }
            .stat-card.danger::before { background: var(--danger); }
            .stat-card.warning::before { background: var(--warning); }

            .stat-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 14px; flex-shrink: 0; }
            .stat-icon.green { background: var(--green-dim); color: var(--green); }
            .stat-icon.blue { background: rgba(43, 127, 190, 0.10); color: var(--info); }
            .stat-icon.danger { background: rgba(214, 59, 75, 0.10); color: var(--danger); }
            .stat-icon.warning { background: rgba(217, 130, 10, 0.10); color: var(--warning); }

            .stat-value { font-size: 28px; font-weight: 700; color: var(--ink); line-height: 1; margin-bottom: 6px; letter-spacing: -0.5px; }
            .stat-label { font-size: 12px; color: var(--ink-40); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
            .stat-badge { display: inline-flex; align-items: center; gap: 3px; font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 20px; margin-top: 8px; }
            .stat-badge.up { background: rgba(29, 168, 112, 0.10); color: var(--green); }
            .stat-badge.down { background: rgba(214, 59, 75, 0.10); color: var(--danger); }

            .chart-area { height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: var(--bg-3); border: 1px solid var(--border); margin-top: 16px; position: relative; overflow: hidden; }
            .chart-area canvas { width: 100% !important; height: 100% !important; }
            .chart-area-lg { height: 240px; }
            .chart-area-sm { height: 60px; background: transparent; border: none; margin-top: 8px; }

            .card-tabs { display: flex; gap: 2px; background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; padding: 3px; }
            .card-tab { font-size: 12px; font-weight: 500; color: var(--ink-40); padding: 4px 12px; border-radius: 6px; text-decoration: none; transition: background 0.15s, color 0.15s; white-space: nowrap; }
            .card-tab:hover { color: var(--ink-70); background: var(--bg-4); }
            .card-tab.active { background: var(--bg-2); color: var(--ink); box-shadow: 0 1px 4px rgba(15, 32, 39, 0.10); }

            .dash-table { width: 100%; border-collapse: collapse; }
            .dash-table thead tr { border-bottom: 1px solid var(--border); background: var(--bg-3); }
            .dash-table thead th { font-size: 11px; font-weight: 600; color: var(--ink-40); text-transform: uppercase; letter-spacing: 0.6px; padding: 10px 22px; white-space: nowrap; }
            .dash-table tbody tr { border-bottom: 1px solid var(--border); transition: background 0.12s; }
            .dash-table tbody tr:last-child { border-bottom: none; }
            .dash-table tbody tr:hover { background: var(--bg-3); }
            .dash-table tbody td { padding: 13px 22px; font-size: 13px; color: var(--ink-70); vertical-align: middle; }

            .tb-lead { font-size: 13px; font-weight: 500; color: var(--ink); text-decoration: none; }
            .tb-lead:hover { color: var(--green); }
            .tb-sub { font-size: 12px; color: var(--ink-40); }
            .tb-phone { font-size: 12px; color: var(--info); }

            .user-cell { display: flex; align-items: center; gap: 10px; }
            .user-avatar-sm { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; }
            .user-initials-sm { width: 34px; height: 34px; border-radius: 8px; background: var(--green-dim); color: var(--green); font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

            .status-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; white-space: nowrap; }
            .status-badge::before { content: ''; width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
            .status-badge.approved { background: rgba(29, 168, 112, 0.12); color: #1a8a5e; }
            .status-badge.approved::before { background: var(--green); }
            .status-badge.pending { background: rgba(217, 130, 10, 0.12); color: var(--warning); }
            .status-badge.pending::before { background: var(--warning); }
            .status-badge.rejected { background: rgba(214, 59, 75, 0.12); color: var(--danger); }
            .status-badge.rejected::before { background: var(--danger); }

            .cat-pill { display: inline-block; font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 6px; background: var(--bg-3); color: var(--ink-70); border: 1px solid var(--border); }

            .action-btn { width: 30px; height: 30px; border: 1px solid var(--border); border-radius: 7px; background: var(--bg-3); color: var(--ink-40); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.12s, color 0.12s, border-color 0.12s; font-size: 16px; }
            .action-btn:hover { background: var(--bg-4); color: var(--ink); border-color: var(--green-bd); }

            .dash-dropdown { background: var(--bg-2) !important; border: 1px solid var(--border) !important; border-radius: 10px !important; box-shadow: 0 8px 30px rgba(15, 32, 39, 0.12) !important; padding: 6px !important; min-width: 160px; }
            .dash-dropdown .dropdown-item { font-size: 12px; color: var(--ink-70); border-radius: 7px; padding: 8px 12px; transition: background 0.12s, color 0.12s; }
            .dash-dropdown .dropdown-item:hover { background: var(--bg-3); color: var(--ink); }
            .dash-dropdown .dropdown-item.text-danger { color: var(--danger) !important; }
            .dash-dropdown .dropdown-item.text-danger:hover { background: rgba(214, 59, 75, 0.07); }
            .dash-dropdown .dropdown-divider { border-color: var(--border); margin: 4px 0; }

            .activity-list { list-style: none; padding: 0; margin: 0; }
            .activity-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 22px; border-bottom: 1px solid var(--border); transition: background 0.12s; }
            .activity-item:last-child { border-bottom: none; }
            .activity-item:hover { background: var(--bg-3); }
            .activity-dot { width: 36px; height: 36px; border-radius: 9px; background: var(--green-dim); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; margin-top: 1px; }
            .activity-title { font-size: 13px; font-weight: 500; color: var(--ink); margin: 0 0 2px; line-height: 1.4; }
            .activity-time { font-size: 11px; color: var(--ink-40); }

            .user-row { display: flex; align-items: center; gap: 12px; padding: 13px 22px; border-bottom: 1px solid var(--border); transition: background 0.12s; }
            .user-row:last-child { border-bottom: none; }
            .user-row:hover { background: var(--bg-3); }
            .user-initials-md { width: 38px; height: 38px; border-radius: 10px; background: var(--green-dim); color: var(--green); font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            .user-lead { font-size: 13px; font-weight: 500; color: var(--ink); line-height: 1.2; }
            .user-sub { font-size: 11px; color: var(--ink-40); }

            .payment-row { display: flex; align-items: center; gap: 12px; padding: 14px 22px; border-bottom: 1px solid var(--border); transition: background 0.12s; }
            .payment-row:last-child { border-bottom: none; }
            .payment-row:hover { background: var(--bg-3); }
            .pay-avatar { width: 38px; height: 38px; border-radius: 10px; background: rgba(217, 130, 10, 0.10); color: var(--warning); font-size: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            .pay-title { font-size: 13px; font-weight: 500; color: var(--ink); line-height: 1.3; }
            .pay-sub { font-size: 11px; color: var(--ink-40); }

            .btn-green { background: var(--green); color: #ffffff; border: none; font-size: 12px; font-weight: 700; padding: 7px 16px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; transition: opacity 0.15s, transform 0.15s; }
            .btn-green:hover { color: #ffffff; opacity: 0.88; transform: translateY(-1px); }
            .btn-outline-dim { background: var(--bg-2); color: var(--ink-70); border: 1px solid var(--border); font-size: 12px; font-weight: 500; padding: 7px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; transition: background 0.15s, border-color 0.15s, color 0.15s; }
            .btn-outline-dim:hover { background: var(--bg-3); border-color: var(--green-bd); color: var(--ink); }
            .btn-ghost-green { background: var(--green-dim); color: var(--green); border: 1px solid var(--green-bd); font-size: 12px; font-weight: 600; padding: 5px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; transition: background 0.15s; }
            .btn-ghost-green:hover { background: rgba(29, 168, 112, 0.16); color: var(--green); }
            .btn-view { background: none; border: 1px solid var(--border); color: var(--ink-40); font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 6px; transition: all 0.12s; cursor: pointer; text-decoration: none; }
            .btn-view:hover { border-color: var(--green-bd); color: var(--green); background: var(--green-dim); }
            .link-green { color: var(--green); text-decoration: none; font-size: 12px; font-weight: 500; }
            .link-green:hover { color: var(--green); text-decoration: underline; }

            .modal-content { background: var(--bg-2) !important; border: 1px solid var(--border) !important; border-radius: 16px !important; color: var(--ink-70); box-shadow: 0 20px 60px rgba(15, 32, 39, 0.15) !important; }
            .modal-header { border-bottom: 1px solid var(--border) !important; padding: 18px 22px; background: var(--bg-3); border-radius: 16px 16px 0 0 !important; }
            .modal-title { font-size: 15px; font-weight: 600; color: var(--ink); }
            .modal-body { padding: 20px 22px; }
            .modal-footer { border-top: 1px solid var(--border) !important; padding: 14px 22px; gap: 8px; background: var(--bg-3); border-radius: 0 0 16px 16px !important; }
            .btn-close { filter: none; opacity: 0.5; }
            .btn-close:hover { opacity: 1; }
            [data-bs-theme="dark"] .btn-close { filter: invert(1) grayscale(100%); }

            .form-label { font-size: 12px; font-weight: 500; color: var(--ink-70); margin-bottom: 6px; }
            .form-control, .form-select { background: var(--bg-3) !important; border: 1px solid var(--border) !important; color: var(--ink) !important; border-radius: 8px; font-size: 13px; padding: 9px 14px; transition: border-color 0.15s; }
            .form-control:focus, .form-select:focus { border-color: var(--green-bd) !important; box-shadow: 0 0 0 3px rgba(29, 168, 112, 0.10) !important; outline: none; background: var(--bg-2) !important; }
            .form-control::placeholder { color: var(--ink-40) !important; }
            .form-select option { background: var(--bg-2); color: var(--ink); }

            .btn-modal-primary { background: var(--green); color: #ffffff; border: none; font-size: 13px; font-weight: 700; padding: 9px 20px; border-radius: 9px; transition: opacity 0.15s; }
            .btn-modal-primary:hover { opacity: 0.88; color: #ffffff; }
            .btn-modal-secondary { background: var(--bg-4); color: var(--ink-70); border: 1px solid var(--border); font-size: 13px; font-weight: 500; padding: 9px 20px; border-radius: 9px; transition: background 0.15s; }
            .btn-modal-secondary:hover { background: var(--bg-4); color: var(--ink); border-color: rgba(15, 32, 39, 0.18); }
            .btn-modal-danger { background: rgba(214, 59, 75, 0.10); color: var(--danger); border: 1px solid rgba(214, 59, 75, 0.25); font-size: 13px; font-weight: 600; padding: 9px 20px; border-radius: 9px; transition: background 0.15s; }
            .btn-modal-danger:hover { background: rgba(214, 59, 75, 0.18); }

            .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border-radius: 10px; overflow: hidden; }
            .summary-cell { background: var(--bg-3); padding: 14px 16px; }
            .summary-cell h6 { font-size: 11px; color: var(--ink-40); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 500; }
            .summary-cell p { font-size: 13px; color: var(--ink); font-weight: 500; margin: 0; }

            .radio-group { display: flex; gap: 10px; flex-wrap: wrap; }
            .radio-option { display: flex; align-items: center; gap: 8px; padding: 8px 14px; border: 1px solid var(--border); border-radius: 8px; cursor: pointer; transition: border-color 0.15s, background 0.15s; font-size: 13px; color: var(--ink-70); background: var(--bg-3); }
            .radio-option:has(input:checked) { border-color: var(--green-bd); background: var(--green-dim); color: var(--ink); }
            .radio-option input { accent-color: var(--green); }

            .amt-shortcuts { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
            .amt-shortcut { font-size: 12px; font-weight: 600; padding: 5px 14px; border: 1px solid var(--border); border-radius: 7px; background: var(--bg-3); color: var(--ink-70); cursor: pointer; transition: all 0.12s; }
            .amt-shortcut:hover { border-color: var(--green-bd); color: var(--green); background: var(--green-dim); }

            ::-webkit-scrollbar { width: 5px; }
            ::-webkit-scrollbar-track { background: var(--bg); }
            ::-webkit-scrollbar-thumb { background: var(--bg-4); border-radius: 4px; }

            @media (max-width: 768px) {
                .content-wrapper { padding: 18px 14px; }
                .stat-value { font-size: 22px; }
            }
        `}</style>
    );
}
