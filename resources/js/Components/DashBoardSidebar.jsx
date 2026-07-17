import { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';

/**
 * Role-based sidebar (converted from FutureConnect Blade partial).
 * Expects `route()` (Ziggy) to be globally available, and
 * `usePage().props.auth.user` to contain { name, role }.
 */
export default function Sidebar() {
    const { auth, url } = usePage().props;
    const user = auth?.user;
    const role = user?.role;

    // current path, used for "active" state instead of Blade's Route::currentRouteName()
    const current = typeof window !== 'undefined' ? window.location.pathname : (url || '');
    const isActive = (pattern) => {
        // supports simple trailing-wildcard patterns like "talent.courses*"
        if (pattern.endsWith('*')) {
            return current.startsWith(pattern.slice(0, -1));
        }
        return current === pattern || current.startsWith(pattern + '/');
    };

    const [openMenus, setOpenMenus] = useState({
        courses: isActive('/talent/courses'),
        jobs: isActive('/talent/jobs'),
        projects: isActive('/talent/projects'),
        products: isActive('/talent/products'),
    });

    const toggleMenu = (key) => setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    const initials = user?.name ? user.name.slice(0, 2).toUpperCase() : '';

    return (
        <>
            <style>{`
                :root {
                    --sb-bg:       #060f11;
                    --sb-surface:  #0d1e22;
                    --sb-border:   rgba(72, 213, 151, 0.10);
                    --accent:      #48d597;
                    --accent-dim:  rgba(72, 213, 151, 0.10);
                    --accent-glow: rgba(72, 213, 151, 0.18);
                    --text-hi:     #f0faf6;
                    --text-mid:    #7aa89f;
                    --text-lo:     #3e5e58;
                    --danger:      #e85c6a;
                }
                .fc-sidebar {
                    position: fixed; top: 0; left: 0; width: 248px; height: 100vh;
                    background: var(--sb-bg); border-right: 1px solid var(--sb-border);
                    display: flex; flex-direction: column; overflow: hidden; z-index: 1040;
                }
                .fc-sidebar-brand {
                    display: flex; align-items: center; gap: 10px;
                    padding: 20px 18px 16px; border-bottom: 1px solid var(--sb-border); flex-shrink: 0;
                }
                .fc-brand-logo { height: 30px; object-fit: contain; }
                .fc-brand-name { font-size: .88rem; font-weight: 800; color: var(--text-hi); letter-spacing: .3px; }
                .fc-profile-block {
                    display: flex; align-items: center; gap: 11px; padding: 14px 18px;
                    border-bottom: 1px solid var(--sb-border); flex-shrink: 0;
                }
                .fc-avatar {
                    width: 36px; height: 36px; border-radius: 50%; background: var(--accent-dim);
                    border: 1.5px solid rgba(72,213,151,.25); color: var(--accent); font-size: .72rem;
                    font-weight: 700; display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0; letter-spacing: .5px;
                }
                .fc-profile-info { flex: 1; min-width: 0; }
                .fc-profile-name { color: var(--text-hi); font-size: .82rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .fc-profile-role { color: var(--text-lo); font-size: .7rem; text-transform: uppercase; letter-spacing: .5px; }
                .fc-online-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; box-shadow: 0 0 0 2px rgba(72,213,151,.2); }
                .fc-nav-body { flex: 1; overflow-y: auto; padding: 10px 0 20px; scrollbar-width: thin; scrollbar-color: var(--sb-border) transparent; }
                .fc-nav-body::-webkit-scrollbar { width: 3px; }
                .fc-nav-body::-webkit-scrollbar-track { background: transparent; }
                .fc-nav-body::-webkit-scrollbar-thumb { background: var(--sb-border); border-radius: 3px; }
                .fc-nav-section { padding: 16px 18px 5px; font-size: .64rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-lo); }
                .fc-nav-item {
                    display: flex; align-items: center; gap: 10px; padding: 9px 18px; margin: 1px 8px;
                    border-radius: 8px; color: var(--text-mid); font-size: .82rem; font-weight: 500;
                    text-decoration: none; border: none; background: transparent; width: calc(100% - 16px);
                    text-align: left; cursor: pointer; transition: background .15s, color .15s; position: relative;
                }
                .fc-nav-item:hover { background: var(--accent-dim); color: var(--text-hi); text-decoration: none; }
                .fc-nav-item.active { background: var(--accent-glow); color: var(--accent); font-weight: 600; }
                .fc-nav-item.active::before {
                    content: ''; position: absolute; left: -8px; top: 50%; transform: translateY(-50%);
                    width: 3px; height: 60%; background: var(--accent); border-radius: 0 3px 3px 0;
                }
                .fc-nav-icon { width: 18px; height: 18px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
                .fc-nav-icon svg { width: 16px; height: 16px; }
                .fc-chevron { margin-left: auto; font-size: .65rem; transition: transform .2s; opacity: .5; width: auto; }
                .fc-nav-item[aria-expanded="true"] .fc-chevron { transform: rotate(90deg); }
                .fc-subnav { padding-left: 20px; margin: 0 8px; }
                .fc-subnav .fc-nav-item { font-size: .78rem; padding: 7px 14px; color: var(--text-mid); margin: 1px 0; }
                .fc-subnav .fc-nav-item::before { left: 0; }
                .fc-sidebar-footer { flex-shrink: 0; border-top: 1px solid var(--sb-border); padding: 10px 8px; }
                .fc-logout-btn {
                    display: flex; align-items: center; gap: 10px; padding: 9px 18px; border-radius: 8px;
                    color: var(--danger); font-size: .82rem; font-weight: 500; background: transparent;
                    border: none; width: 100%; text-align: left; cursor: pointer; transition: background .15s;
                }
                .fc-logout-btn:hover { background: rgba(232,92,106,.10); }
            `}</style>

            <nav className="fc-sidebar" id="sidebar">
                {/* Brand */}
                <div className="fc-sidebar-brand">
                    <img className="fc-brand-logo" src="/assets/img/WORDMARK.png" alt="logo" />
                </div>

                {/* Profile */}
                <div className="fc-profile-block">
                    <div className="fc-avatar">{initials}</div>
                    <div className="fc-profile-info">
                        <div className="fc-profile-name">{user?.name}</div>
                        <div className="fc-profile-role">{role ? role.charAt(0).toUpperCase() + role.slice(1) : ''}</div>
                    </div>
                    <div className="fc-online-dot" title="Online" />
                </div>

                {/* Nav body */}
                <div className="fc-nav-body">
                    {role === 'admin' && <AdminNav isActive={isActive} />}
                    {role === 'talent' && (
                        <TalentNav isActive={isActive} openMenus={openMenus} toggleMenu={toggleMenu} />
                    )}
                    {role === 'user' && <UserNav isActive={isActive} />}
                </div>

                {/* Footer: Sign out */}
                <div className="fc-sidebar-footer">
                    <button type="button" className="fc-logout-btn" onClick={handleLogout}>
                        <Icon path="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" />
                        Sign Out
                    </button>
                </div>
            </nav>
        </>
    );
}

/* ── Small icon helper (renders one or more path/polyline defs separated by " M" resets is fragile,
     so real icons are inlined per-item below instead). Kept here only for the logout button reuse. ── */
function Icon() {
    return (
        <span className="fc-nav-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
        </span>
    );
}

function NavItem({ href, active, icon, children }) {
    return (
        <Link href={href} className={`fc-nav-item ${active ? 'active' : ''}`}>
            <span className="fc-nav-icon">{icon}</span>
            {children}
        </Link>
    );
}

function NavSection({ children }) {
    return <div className="fc-nav-section">{children}</div>;
}

function Collapsible({ label, icon, open, onToggle, active, children }) {
    return (
        <>
            <button
                type="button"
                className="fc-nav-item"
                onClick={onToggle}
                aria-expanded={open ? 'true' : 'false'}
            >
                <span className="fc-nav-icon">{icon}</span>
                {label}
                <i className="bi bi-chevron-right fc-chevron" />
            </button>
            {open && <div className="fc-subnav">{children}</div>}
        </>
    );
}

/* ── Icon set (kept minimal, reused across nav groups) ── */
const icons = {
    dashboard: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>,
    users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>,
    skill: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    story: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    testimonial: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    announce: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    job: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
    project: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>,
    event: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    connection: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>,
    product: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
    seller: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    payment: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    wallet: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    activity: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    subscription: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>,
};

function AdminNav({ isActive }) {
    return (
        <>
            <NavSection>Overview</NavSection>
            <NavItem href="/admin/dashboard" active={isActive('/admin/dashboard')} icon={icons.dashboard}>Dashboard</NavItem>

            <NavSection>Users & Access</NavSection>
            <NavItem href="/admin/users" active={isActive('/admin/users')} icon={icons.users}>Users</NavItem>
            <NavItem href="/admin/talents" active={isActive('/admin/talents')} icon={icons.star}>Talents</NavItem>
            <NavItem href="/admin/partners" active={isActive('/admin/partners')} icon={icons.users}>Partners</NavItem>

            <NavSection>Content</NavSection>
            <NavItem href="/admin/categories" active={isActive('/admin/categories')} icon={icons.grid}>Categories</NavItem>
            <NavItem href="/admin/skills" active={isActive('/admin/skills')} icon={icons.skill}>Skills</NavItem>
            <NavItem href="/admin/courses" active={isActive('/admin/courses')} icon={icons.book}>Courses</NavItem>
            <NavItem href="/admin/stories" active={isActive('/admin/stories')} icon={icons.story}>Stories</NavItem>
            <NavItem href="/admin/testimonials" active={isActive('/admin/testimonials')} icon={icons.testimonial}>Testimonials</NavItem>
            <NavItem href="/admin/announcements" active={isActive('/admin/announcements')} icon={icons.announce}>Announcements</NavItem>

            <NavSection>Platform</NavSection>
            <NavItem href="/admin/jobs" active={isActive('/admin/jobs')} icon={icons.job}>Jobs</NavItem>
            <NavItem href="/admin/projects" active={isActive('/admin/projects')} icon={icons.project}>Projects</NavItem>
            <NavItem href="/admin/events" active={isActive('/admin/events')} icon={icons.event}>Events</NavItem>
            <NavItem href="/admin/connections" active={isActive('/admin/connections')} icon={icons.connection}>Connections</NavItem>

            <NavSection>Commerce</NavSection>
            <NavItem href="/admin/products" active={isActive('/admin/products')} icon={icons.product}>Products</NavItem>
            <NavItem href="/admin/sellers" active={isActive('/admin/sellers')} icon={icons.seller}>Sellers</NavItem>
            <NavItem href="/admin/payments" active={isActive('/admin/payments')} icon={icons.payment}>Payments</NavItem>
            <NavItem href="/admin/wallets" active={isActive('/admin/wallets')} icon={icons.wallet}>Wallets</NavItem>

            <NavSection>System</NavSection>
            <NavItem href="/admin/login-activity" active={isActive('/admin/login-activity')} icon={icons.activity}>Login Activity</NavItem>
            <NavItem href="/admin/settings" active={isActive('/admin/settings')} icon={icons.settings}>Settings</NavItem>
        </>
    );
}

function TalentNav({ isActive, openMenus, toggleMenu }) {
    return (
        <>
            <NavSection>Overview</NavSection>
            <NavItem href={route('talent.dashboard')} active={route().current('talent.dashboard')} icon={icons.dashboard}>Dashboard</NavItem>
            <NavItem href={route('talent.get.profile')} active={route().current('talent.get.profile')} icon={icons.seller}>My Profile</NavItem>

            <NavSection>Skills & Learning</NavSection>
            <NavItem href={route('talent.skills')} active={route().current('talent.skills*')} icon={icons.skill}>My Skills</NavItem>

            <Collapsible label="Courses" icon={icons.book} open={openMenus.courses} onToggle={() => toggleMenu('courses')}>
                <NavItem href={route('talent.courses.index')} active={route().current('talent.courses.index')}>All Courses</NavItem>
                <NavItem href={route('talent.courses.create')} active={route().current('talent.courses.create')}>Create Course</NavItem>
            </Collapsible>

            <NavSection>Work & Projects</NavSection>
            <Collapsible label="Jobs" icon={icons.job} open={openMenus.jobs} onToggle={() => toggleMenu('jobs')}>
                <NavItem href={route('talent.jobs.index')} active={route().current('talent.jobs.index')}>Browse Jobs</NavItem>
                <NavItem href={route('talent.jobs.create')} active={route().current('talent.jobs.create')}>Post a Job</NavItem>
            </Collapsible>
            <Collapsible label="Projects" icon={icons.project} open={openMenus.projects} onToggle={() => toggleMenu('projects')}>
                <NavItem href={route('talent.projects.index')} active={route().current('talent.projects.index')}>Browse Projects</NavItem>
                <NavItem href={route('talent.projects.create')} active={route().current('talent.projects.create')}>Post a Project</NavItem>
            </Collapsible>

            <NavSection>Network</NavSection>
            <NavItem href={route('talent.connections.index')} active={route().current('talent.connections*')} icon={icons.connection}>Connections</NavItem>
            <NavItem href={route('talent.announcements.index')} active={route().current('talent.announcements*')} icon={icons.announce}>Announcements</NavItem>
            <NavItem href={route('talent.events.index')} active={route().current('talent.events*')} icon={icons.event}>Events</NavItem>

            <NavSection>Content</NavSection>
            <NavItem href={route('talent.page.stories')} active={route().current('talent.page.stories*')} icon={icons.story}>My Stories</NavItem>
            <NavItem href={route('talent.testimonials.index')} active={route().current('talent.testimonials*')} icon={icons.testimonial}>Testimonials</NavItem>

            <NavSection>Commerce</NavSection>
            <Collapsible label="Products" icon={icons.product} open={openMenus.products} onToggle={() => toggleMenu('products')}>
                <NavItem href={route('talent.products.index')} active={route().current('talent.products.index')}>My Products</NavItem>
                <NavItem href={route('talent.products.create')} active={route().current('talent.products.create')}>Add Product</NavItem>
                <NavItem href={route('talent.products.seller')} active={route().current('talent.products.seller')}>Become a Seller</NavItem>
            </Collapsible>

            <NavSection>Finance</NavSection>
            <NavItem href={route('talent.wallets.index')} active={route().current('talent.wallets*')} icon={icons.wallet}>Wallet</NavItem>
            <NavItem href={route('talent.payments.index')} active={route().current('talent.payments*')} icon={icons.payment}>Payments</NavItem>
        </>
    );
}

function UserNav({ isActive }) {
    return (
        <>
            <NavSection>Overview</NavSection>
            <NavItem href={route('user.dashboard')} active={route().current('user.dashboard')} icon={icons.dashboard}>Dashboard</NavItem>

            <NavSection>Network</NavSection>
            <NavItem href={route('user.talents.connected')} active={route().current('user.talents.connected')} icon={icons.star}>Talents Connected</NavItem>
            <NavItem href={route('user.connections')} active={route().current('user.connections')} icon={icons.users}>Connection Requests</NavItem>

            <NavSection>Learning</NavSection>
            <NavItem href="/user/courses" active={isActive('/user/courses')} icon={icons.book}>Courses</NavItem>
            <NavItem href="/admin/skills" active={isActive('/admin/skills')} icon={icons.skill}>Skills</NavItem>

            <NavSection>Discover</NavSection>
            <NavItem href="/admin/announcements" active={isActive('/admin/announcements')} icon={icons.announce}>Announcements</NavItem>
            <NavItem href="/admin/partners" active={isActive('/admin/partners')} icon={icons.users}>Partners</NavItem>
            <NavItem href="/admin/testimonials" active={isActive('/admin/testimonials')} icon={icons.testimonial}>Testimonials</NavItem>

            <NavSection>Finance</NavSection>
            <NavItem href="/admin/payments" active={isActive('/admin/payments')} icon={icons.payment}>Payments</NavItem>
            <NavItem href="/user/subscription" active={isActive('/user/subscription')} icon={icons.subscription}>Subscriptions</NavItem>
            <NavItem href="/admin/users" active={isActive('/admin/users')} icon={icons.users}>Users</NavItem>
        </>
    );
}
