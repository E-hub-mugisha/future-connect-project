import { useEffect, useRef, useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { useTheme } from '@/Components/ThemeContext';

/**
 * Terra-style topbar. Pass `notifications` (array) and `onToggleSidebar`
 * as props, or wire them up to your own data source / Inertia props.
 */
export default function Topbar({ notifications = [], onToggleSidebar }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const { isDark, toggleTheme } = useTheme();

    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const notifRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(e) {
            if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
            if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
        }
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    const initials = user?.name ? user.name.slice(0, 2).toUpperCase() : 'U';
    const hasUnread = notifications.some((n) => !n.read);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

                .t-topbar {
                    position: fixed; top: 0; left: 250px; right: 0; height: 60px;
                    background: var(--t-bg, #fff); border-bottom: 1px solid var(--t-border, rgba(25, 38, 93, 0.08));
                    display: flex; align-items: center; padding: 0 24px; gap: 12px; z-index: 900;
                    font-family: 'DM Sans', sans-serif;
                }
                [data-bs-theme="dark"] .t-topbar { --t-bg: #12172b; --t-border: rgba(255,255,255,0.08); --t-text: #eef1fb; --t-text-dim: rgba(238,241,251,0.5); }
                .t-topbar-toggle {
                    display: none; width: 36px; height: 36px; border-radius: 8px; background: transparent;
                    border: none; cursor: pointer; align-items: center; justify-content: center;
                    color: var(--t-text, #19265d); transition: background 0.15s; flex-shrink: 0;
                }
                .t-topbar-toggle:hover { background: rgba(25, 38, 93, 0.06); }
                @media (max-width: 991px) { .t-topbar { left: 0; } .t-topbar-toggle { display: flex; } }
                .t-search-wrap { position: relative; flex: 1; max-width: 340px; }
                .t-search-wrap svg { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: rgba(25, 38, 93, 0.35); pointer-events: none; }
                .t-search-input {
                    width: 100%; height: 36px; background: rgba(25, 38, 93, 0.04); border: 1px solid rgba(25, 38, 93, 0.08);
                    border-radius: 8px; padding: 0 14px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 13px;
                    color: var(--t-text, #19265d); outline: none; transition: border-color 0.15s, background 0.15s;
                }
                .t-search-input::placeholder { color: rgba(25, 38, 93, 0.35); }
                .t-search-input:focus { background: #fff; border-color: rgba(208, 82, 8, 0.35); }
                .t-topbar-actions { display: flex; align-items: center; gap: 4px; margin-left: auto; }
                .t-icon-btn {
                    position: relative; width: 36px; height: 36px; border-radius: 8px; background: transparent;
                    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
                    color: rgba(25, 38, 93, 0.55); transition: background 0.15s, color 0.15s; flex-shrink: 0;
                }
                .t-icon-btn:hover { background: rgba(25, 38, 93, 0.06); color: var(--t-text, #19265d); }
                .t-icon-btn svg { width: 17px; height: 17px; }
                .t-badge-dot { position: absolute; top: 7px; right: 7px; width: 7px; height: 7px; border-radius: 50%; border: 1.5px solid #fff; }
                .t-badge-dot.gold { background: #D05208; }
                .t-dropdown {
                    position: absolute; top: calc(100% + 10px); right: 0; width: 340px; background: #fff;
                    border: 1px solid rgba(25, 38, 93, 0.08); border-radius: 12px; box-shadow: 0 8px 32px rgba(25, 38, 93, 0.1);
                    display: none; z-index: 1000; overflow: hidden;
                }
                .t-dropdown.show { display: block; }
                .t-dropdown-head { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px 12px; border-bottom: 1px solid rgba(25, 38, 93, 0.06); }
                .t-dropdown-title { font-family: 'Cormorant Garamond', serif; font-size: 15px; color: #19265d; letter-spacing: 0.01em; }
                .t-dropdown-link { font-size: 11.5px; color: #D05208; text-decoration: none; font-weight: 500; }
                .t-dropdown-link:hover { text-decoration: underline; }
                .t-dropdown-body { max-height: 340px; overflow-y: auto; scrollbar-width: none; padding: 8px 0; }
                .t-dropdown-body::-webkit-scrollbar { display: none; }
                .t-notif-item { display: flex; align-items: flex-start; gap: 12px; padding: 10px 18px; text-decoration: none; transition: background 0.12s; cursor: pointer; }
                .t-notif-item:hover { background: rgba(25, 38, 93, 0.03); }
                .t-notif-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(208, 82, 8, 0.1); color: #D05208; }
                .t-notif-icon svg { width: 15px; height: 15px; }
                .t-notif-title { font-size: 13px; font-weight: 500; color: #19265d; line-height: 1.3; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px; }
                .t-notif-meta { display: flex; align-items: center; gap: 6px; }
                .t-notif-type { font-size: 10.5px; font-weight: 500; padding: 2px 7px; border-radius: 20px; letter-spacing: 0.03em; background: rgba(208, 82, 8, 0.08); color: #D05208; }
                .t-notif-time { font-size: 11px; color: rgba(25, 38, 93, 0.35); }
                .t-topbar-divider { width: 1px; height: 20px; background: rgba(25, 38, 93, 0.1); margin: 0 4px; flex-shrink: 0; }
                .t-profile-btn { display: flex; align-items: center; gap: 10px; padding: 5px 10px 5px 5px; border-radius: 10px; border: none; background: transparent; cursor: pointer; transition: background 0.15s; }
                .t-profile-btn:hover { background: rgba(25, 38, 93, 0.05); }
                .t-profile-avatar { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #19265d, #2e3f8a); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; color: #fff; flex-shrink: 0; letter-spacing: 0.04em; }
                .t-profile-info { text-align: left; }
                .t-profile-name { font-size: 13px; font-weight: 500; color: var(--t-text, #19265d); line-height: 1.2; }
                .t-profile-role { font-size: 11px; color: var(--t-text-dim, rgba(25, 38, 93, 0.45)); }
                .t-profile-menu { width: 220px; }
                .t-profile-menu .t-dropdown-head { flex-direction: column; align-items: flex-start; gap: 2px; padding: 16px 18px; }
                .t-profile-menu-name { font-size: 14px; font-weight: 500; color: #19265d; }
                .t-profile-menu-email { font-size: 11.5px; color: rgba(25, 38, 93, 0.45); }
                .t-profile-link { display: flex; align-items: center; gap: 10px; padding: 9px 18px; font-size: 13px; color: rgba(25, 38, 93, 0.65); text-decoration: none; transition: background 0.12s, color 0.12s; cursor: pointer; border: none; background: transparent; width: 100%; }
                .t-profile-link:hover { background: rgba(25, 38, 93, 0.04); color: #19265d; }
                .t-profile-link svg { width: 15px; height: 15px; flex-shrink: 0; }
                .t-profile-link.danger { color: rgba(217, 79, 79, 0.75); }
                .t-profile-link.danger:hover { background: rgba(217, 79, 79, 0.06); color: #d94f4f; }
                .t-profile-menu-divider { height: 1px; background: rgba(25, 38, 93, 0.06); margin: 4px 0; }
                .t-dd-wrap { position: relative; }
                @media (max-width: 767px) {
                    .t-search-wrap { display: none; }
                    .t-topbar-hide-sm { display: none !important; }
                    .t-dropdown { width: calc(100vw - 20px); right: 0; left: auto; }
                    #notifDropdown { right: -40px; }
                    .t-topbar { left: 0; padding: 0 12px; }
                    .t-search-mobile-btn { display: flex; }
                }
                .t-search-mobile-btn { display: none; width: 36px; height: 36px; border-radius: 8px; border: none; background: transparent; align-items: center; justify-content: center; color: rgba(25, 38, 93, 0.55); cursor: pointer; }
            `}</style>

            <header className="t-topbar" id="main-topbar">
                {/* Sidebar toggle (mobile) */}
                <button className="t-topbar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="18" rx="1" />
                        <path d="M14 7h7M14 12h7M14 17h7" />
                    </svg>
                </button>

                {/* Mobile search trigger */}
                <button className="t-search-mobile-btn t-icon-btn" onClick={() => setMobileSearchOpen(true)} aria-label="Search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </button>

                {/* Full-screen search overlay (mobile only) */}
                {mobileSearchOpen && (
                    <div style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 1100, background: '#fff', padding: 14, flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: 'rgba(25,38,93,0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <input
                                    type="search"
                                    autoFocus
                                    placeholder="Search Terra…"
                                    style={{ width: '100%', height: 40, background: 'rgba(25,38,93,0.04)', border: '1px solid rgba(25,38,93,0.12)', borderRadius: 9, padding: '0 14px 0 36px', fontSize: 14, outline: 'none' }}
                                />
                            </div>
                            <button onClick={() => setMobileSearchOpen(false)} style={{ fontSize: 13, color: '#D05208', border: 'none', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap', padding: 4 }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                {/* Search */}
                <div className="t-search-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input type="search" className="t-search-input" placeholder="Search Terra…" />
                </div>

                {/* Actions */}
                <div className="t-topbar-actions">
                    {/* Notifications */}
                    <div className="t-dd-wrap" ref={notifRef}>
                        <button
                            className="t-icon-btn"
                            aria-label="Notifications"
                            onClick={(e) => { e.stopPropagation(); setProfileOpen(false); setNotifOpen((o) => !o); }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            {hasUnread && <span className="t-badge-dot gold" />}
                        </button>

                        <div className={`t-dropdown ${notifOpen ? 'show' : ''}`} id="notifDropdown">
                            <div className="t-dropdown-head">
                                <span className="t-dropdown-title">Notifications</span>
                                <a href="#!" className="t-dropdown-link">Mark all read</a>
                            </div>
                            <div className="t-dropdown-body">
                                {notifications.length === 0 ? (
                                    <div style={{ padding: '24px 18px', textAlign: 'center', fontSize: 13, color: 'rgba(25,38,93,0.4)' }}>
                                        No new notifications
                                    </div>
                                ) : (
                                    notifications.map((n) => (
                                        <div className="t-notif-item" key={n.id}>
                                            <div className="t-notif-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 20h9" />
                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                                </svg>
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div className="t-notif-title">{n.title}</div>
                                                <div className="t-notif-meta">
                                                    <span className="t-notif-type">{n.type}</span>
                                                    <span className="t-notif-time">{n.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div style={{ padding: '10px 18px', borderTop: '1px solid rgba(25,38,93,0.06)', textAlign: 'center' }}>
                                <a href="#!" className="t-dropdown-link" style={{ fontSize: 12.5 }}>View all notifications</a>
                            </div>
                        </div>
                    </div>

                    {/* Dark mode toggle */}
                    <button className="t-icon-btn t-theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
                        {isDark ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    <div className="t-topbar-divider" />

                    {/* Profile */}
                    <div className="t-dd-wrap" ref={profileRef}>
                        <button
                            className="t-profile-btn"
                            aria-label="Profile menu"
                            onClick={(e) => { e.stopPropagation(); setNotifOpen(false); setProfileOpen((o) => !o); }}
                        >
                            <div className="t-profile-avatar">{initials}</div>
                            <div className="t-profile-info t-topbar-hide-sm">
                                <div className="t-profile-name">{(user?.name || 'Admin').slice(0, 16)}</div>
                                <div className="t-profile-role">{user?.role || 'Administrator'}</div>
                            </div>
                            <svg className="t-topbar-hide-sm" style={{ width: 12, height: 12, color: 'rgba(25,38,93,0.35)', marginLeft: 2 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        <div className={`t-dropdown t-profile-menu ${profileOpen ? 'show' : ''}`}>
                            <div className="t-dropdown-head">
                                <div className="t-profile-menu-name">{user?.name || 'Admin'}</div>
                                <div className="t-profile-menu-email">{user?.email || ''}</div>
                            </div>
                            <div style={{ padding: '6px 0' }}>
                                <Link href="/profile" className="t-profile-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    My Profile
                                </Link>
                                <div className="t-profile-menu-divider" />
                                <button type="button" className="t-profile-link danger" onClick={handleLogout}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
