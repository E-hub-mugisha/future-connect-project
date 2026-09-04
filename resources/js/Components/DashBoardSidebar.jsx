import { useEffect, useMemo, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";

export default function Sidebar({
    mobileOpen = false,
    onClose = () => {},
}) {
    const { auth, url } = usePage().props;

    const user = auth?.user;
    const role = user?.role;

    const current =
        typeof window !== "undefined"
            ? window.location.pathname
            : url || "";

    const [openMenus, setOpenMenus] = useState({
        courses: current.startsWith("/talent/courses"),
        products: current.startsWith("/talent/products"),
        connections: current.startsWith("/talent/connections"),
    });

    const isActive = (pattern) => {
        if (!pattern) return false;

        if (pattern.endsWith("*")) {
            return current.startsWith(pattern.slice(0, -1));
        }

        return (
            current === pattern ||
            current.startsWith(pattern + "/")
        );
    };

    const toggleMenu = (key) => {
        setOpenMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route("logout"));
    };

    const initials = useMemo(() => {
        const name =
            user?.name ||
            `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
            "User";

        return name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
    }, [user]);

    const displayName =
        user?.name ||
        `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
        "User";

    const roleLabel =
        role === "admin"
            ? "Administrator"
            : role === "talent"
            ? "Talent"
            : "Member";

    /*
     * Close mobile drawer whenever navigation changes.
     */
    useEffect(() => {
        onClose?.();
    }, [current]);

    /*
     * Prevent body scrolling while mobile sidebar is open.
     */
    useEffect(() => {
        if (!mobileOpen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [mobileOpen]);

    return (
        <>
            <style>{`
                .tp-sidebar {
                    --tp-primary: #5D89C8;
                    --tp-primary-dark: #4675B7;
                    --tp-primary-soft: rgba(93, 137, 200, .10);
                    --tp-primary-soft-2: rgba(93, 137, 200, .16);

                    --tp-bg: #ffffff;
                    --tp-surface: #f8fafc;
                    --tp-border: #e8edf3;

                    --tp-text: #172033;
                    --tp-text-secondary: #667085;
                    --tp-text-muted: #98a2b3;

                    position: fixed;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 270px;

                    display: flex;
                    flex-direction: column;

                    background:
                        linear-gradient(
                            180deg,
                            #ffffff 0%,
                            #fbfcfe 100%
                        );

                    border-right: 1px solid var(--tp-border);

                    z-index: 1050;

                    transition:
                        transform .28s ease,
                        box-shadow .28s ease;

                    overflow: hidden;
                }

                /* -----------------------------------------
                   MOBILE OVERLAY
                ----------------------------------------- */

                .tp-sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, .42);
                    backdrop-filter: blur(3px);
                    z-index: 1040;

                    opacity: 0;
                    visibility: hidden;

                    transition:
                        opacity .25s ease,
                        visibility .25s ease;
                }

                .tp-sidebar-overlay.show {
                    opacity: 1;
                    visibility: visible;
                }

                /* -----------------------------------------
                   HEADER / BRAND
                ----------------------------------------- */

                .tp-sidebar-header {
                    min-height: 74px;
                    padding: 0 18px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    border-bottom: 1px solid var(--tp-border);

                    flex-shrink: 0;
                }

                .tp-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    text-decoration: none;
                    color: var(--tp-text);
                }

                .tp-brand-logo {
                    width: auto;
                    height: 34px;
                    max-width: 155px;
                    object-fit: contain;
                }

                .tp-brand-fallback {
                    width: 36px;
                    height: 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background:
                        linear-gradient(
                            135deg,
                            var(--tp-primary),
                            #7ca5db
                        );

                    color: #fff;
                    font-size: 14px;
                    font-weight: 800;

                    box-shadow:
                        0 8px 20px rgba(93, 137, 200, .22);
                }

                .tp-mobile-close {
                    width: 36px;
                    height: 36px;

                    display: none;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--tp-border);
                    background: #fff;

                    color: var(--tp-text-secondary);

                    border-radius: 10px;

                    cursor: pointer;

                    transition: all .18s ease;
                }

                .tp-mobile-close:hover {
                    color: var(--tp-primary);
                    background: var(--tp-primary-soft);
                    border-color: rgba(93, 137, 200, .2);
                }

                /* -----------------------------------------
                   PROFILE CARD
                ----------------------------------------- */

                .tp-profile {
                    margin: 14px 14px 8px;
                    padding: 13px;

                    background:
                        linear-gradient(
                            135deg,
                            #f8fbff,
                            #f5f8fc
                        );

                    border: 1px solid #e7eef7;

                    border-radius: 16px;

                    flex-shrink: 0;
                }

                .tp-profile-top {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .tp-avatar-wrapper {
                    position: relative;
                    flex-shrink: 0;
                }

                .tp-avatar {
                    width: 42px;
                    height: 42px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 13px;

                    background:
                        linear-gradient(
                            135deg,
                            #5D89C8,
                            #7ba4d7
                        );

                    color: #fff;

                    font-size: 13px;
                    font-weight: 800;

                    box-shadow:
                        0 6px 14px rgba(93, 137, 200, .20);
                }

                .tp-online {
                    position: absolute;
                    right: -2px;
                    bottom: -2px;

                    width: 11px;
                    height: 11px;

                    border-radius: 50%;

                    background: #22c55e;

                    border: 2px solid #fff;
                }

                .tp-profile-info {
                    min-width: 0;
                    flex: 1;
                }

                .tp-profile-name {
                    display: block;

                    color: var(--tp-text);

                    font-size: 13px;
                    font-weight: 700;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tp-profile-role {
                    margin-top: 2px;

                    color: var(--tp-text-muted);

                    font-size: 10px;
                    font-weight: 600;

                    text-transform: uppercase;
                    letter-spacing: .7px;
                }

                .tp-profile-arrow {
                    width: 28px;
                    height: 28px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    color: var(--tp-text-muted);

                    transition: all .18s ease;
                }

                .tp-profile:hover .tp-profile-arrow {
                    color: var(--tp-primary);
                    background: #fff;
                }

                /* -----------------------------------------
                   PROFILE COMPLETION
                ----------------------------------------- */

                .tp-completion {
                    margin-top: 12px;
                }

                .tp-completion-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin-bottom: 6px;
                }

                .tp-completion-title {
                    color: var(--tp-text-secondary);

                    font-size: 10px;
                    font-weight: 600;
                }

                .tp-completion-value {
                    color: var(--tp-primary);

                    font-size: 10px;
                    font-weight: 800;
                }

                .tp-progress {
                    height: 5px;

                    overflow: hidden;

                    background: #e7edf4;

                    border-radius: 999px;
                }

                .tp-progress-bar {
                    width: 75%;
                    height: 100%;

                    background:
                        linear-gradient(
                            90deg,
                            var(--tp-primary),
                            #82a9dc
                        );

                    border-radius: inherit;
                }

                .tp-completion-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;

                    margin-top: 7px;

                    color: var(--tp-primary);

                    font-size: 10px;
                    font-weight: 700;

                    text-decoration: none;
                }

                .tp-completion-link:hover {
                    color: var(--tp-primary-dark);
                }

                /* -----------------------------------------
                   QUICK INFO
                ----------------------------------------- */

                .tp-quick-info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;

                    gap: 7px;

                    padding: 4px 14px 7px;
                }

                .tp-quick-card {
                    padding: 8px 9px;

                    border: 1px solid var(--tp-border);
                    border-radius: 11px;

                    background: #fff;

                    text-decoration: none;

                    transition: all .18s ease;
                }

                .tp-quick-card:hover {
                    transform: translateY(-1px);
                    border-color: rgba(93, 137, 200, .25);
                    box-shadow: 0 5px 14px rgba(15, 23, 42, .05);
                }

                .tp-quick-label {
                    display: block;

                    color: var(--tp-text-muted);

                    font-size: 9px;
                    font-weight: 600;
                }

                .tp-quick-value {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    margin-top: 2px;

                    color: var(--tp-text);

                    font-size: 11px;
                    font-weight: 800;
                }

                .tp-coin {
                    width: 15px;
                    height: 15px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;

                    background: #f3c969;

                    color: #735600;

                    font-size: 8px;
                    font-weight: 900;
                }

                /* -----------------------------------------
                   NAVIGATION
                ----------------------------------------- */

                .tp-nav {
                    flex: 1;

                    overflow-y: auto;

                    padding: 6px 10px 20px;

                    scrollbar-width: thin;
                    scrollbar-color: #dce3eb transparent;
                }

                .tp-nav::-webkit-scrollbar {
                    width: 4px;
                }

                .tp-nav::-webkit-scrollbar-track {
                    background: transparent;
                }

                .tp-nav::-webkit-scrollbar-thumb {
                    background: #dce3eb;
                    border-radius: 999px;
                }

                .tp-section {
                    padding: 15px 9px 7px;

                    color: #a0a9b7;

                    font-size: 9px;
                    font-weight: 800;

                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                }

                .tp-nav-item {
                    position: relative;

                    display: flex;
                    align-items: center;

                    width: 100%;

                    min-height: 43px;

                    padding: 0 11px;
                    margin: 2px 0;

                    gap: 11px;

                    color: #667085;

                    background: transparent;

                    border: 0;
                    border-radius: 11px;

                    text-decoration: none;

                    font-size: 12.5px;
                    font-weight: 550;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        color .18s ease,
                        transform .18s ease;
                }

                .tp-nav-item:hover {
                    color: var(--tp-text);

                    background: #f5f8fc;

                    transform: translateX(2px);
                }

                .tp-nav-item.active {
                    color: var(--tp-primary);

                    background:
                        linear-gradient(
                            90deg,
                            rgba(93, 137, 200, .13),
                            rgba(93, 137, 200, .06)
                        );

                    font-weight: 700;
                }

                .tp-nav-item.active::before {
                    content: "";

                    position: absolute;

                    left: -10px;
                    top: 9px;
                    bottom: 9px;

                    width: 3px;

                    border-radius: 0 5px 5px 0;

                    background: var(--tp-primary);
                }

                .tp-icon {
                    width: 20px;
                    height: 20px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    color: currentColor;
                }

                .tp-icon svg {
                    width: 17px;
                    height: 17px;
                }

                .tp-nav-label {
                    flex: 1;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .tp-chevron {
                    display: flex;
                    align-items: center;

                    color: #aab3c0;

                    transition: transform .2s ease;
                }

                .tp-nav-item[aria-expanded="true"] .tp-chevron {
                    transform: rotate(90deg);
                }

                /* -----------------------------------------
                   BADGES
                ----------------------------------------- */

                .tp-badge {
                    min-width: 18px;
                    height: 18px;

                    padding: 0 5px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 999px;

                    background: #eef3f9;

                    color: var(--tp-primary);

                    font-size: 9px;
                    font-weight: 800;
                }

                .tp-badge.hot {
                    background: #fff0f0;
                    color: #e05252;
                }

                /* -----------------------------------------
                   SUB NAVIGATION
                ----------------------------------------- */

                .tp-subnav {
                    margin: 0 0 4px 30px;

                    padding: 3px 0 4px 10px;

                    border-left: 1px solid #e6ebf1;
                }

                .tp-subnav .tp-nav-item {
                    min-height: 35px;

                    padding-left: 10px;

                    font-size: 11.5px;

                    border-radius: 8px;
                }

                .tp-subnav .tp-nav-item.active::before {
                    left: -11px;
                    top: 8px;
                    bottom: 8px;
                }

                /* -----------------------------------------
                   BOTTOM
                ----------------------------------------- */

                .tp-sidebar-bottom {
                    flex-shrink: 0;

                    padding: 9px 10px 12px;

                    border-top: 1px solid var(--tp-border);

                    background: rgba(255,255,255,.96);
                }

                .tp-help {
                    display: flex;
                    align-items: center;
                    gap: 9px;

                    padding: 9px 10px;

                    margin-bottom: 5px;

                    border-radius: 10px;

                    color: var(--tp-text-secondary);

                    text-decoration: none;

                    font-size: 11px;
                    font-weight: 600;

                    transition: all .18s ease;
                }

                .tp-help:hover {
                    background: var(--tp-primary-soft);
                    color: var(--tp-primary);
                }

                .tp-help-icon {
                    width: 28px;
                    height: 28px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    background: #f3f6fa;

                    color: var(--tp-primary);
                }

                .tp-logout {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    width: 100%;

                    padding: 10px;

                    border: 0;
                    border-radius: 10px;

                    background: transparent;

                    color: #667085;

                    font-size: 11.5px;
                    font-weight: 600;

                    cursor: pointer;

                    transition: all .18s ease;
                }

                .tp-logout:hover {
                    background: #fff2f2;
                    color: #dc4d4d;
                }

                /* -----------------------------------------
                   TABLET / MOBILE
                ----------------------------------------- */

                @media (max-width: 991.98px) {
                    .tp-sidebar {
                        width: 285px;

                        transform: translateX(-105%);

                        box-shadow:
                            12px 0 40px rgba(15, 23, 42, .14);
                    }

                    .tp-sidebar.mobile-open {
                        transform: translateX(0);
                    }

                    .tp-mobile-close {
                        display: flex;
                    }
                }

                @media (min-width: 992px) {
                    .tp-sidebar-overlay {
                        display: none;
                    }
                }

                @media (max-width: 575.98px) {
                    .tp-sidebar {
                        width: min(88vw, 300px);
                    }

                    .tp-profile {
                        margin-left: 12px;
                        margin-right: 12px;
                    }
                }
            `}</style>

            {/* Mobile backdrop */}
            <div
                className={`tp-sidebar-overlay ${
                    mobileOpen ? "show" : ""
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                className={`tp-sidebar ${
                    mobileOpen ? "mobile-open" : ""
                }`}
                aria-label="Main navigation"
            >
                {/* BRAND */}
                <div className="tp-sidebar-header">
                    <Link
                        href={
                            role === "admin"
                                ? "/admin/dashboard"
                                : role === "talent"
                                ? route("talent.dashboard")
                                : route("user.dashboard")
                        }
                        className="tp-brand"
                    >
                        <img
                            className="tp-brand-logo"
                            src="/assets/img/WORDMARK.png"
                            alt="Talent Platform"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling.style.display =
                                    "flex";
                            }}
                        />

                        <span
                            className="tp-brand-fallback"
                            style={{ display: "none" }}
                        >
                            TP
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="tp-mobile-close"
                        onClick={onClose}
                        aria-label="Close navigation"
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* PROFILE */}
                <div className="tp-profile">
                    <div className="tp-profile-top">
                        <div className="tp-avatar-wrapper">
                            <div className="tp-avatar">
                                {initials}
                            </div>

                            {role !== "admin" && (
                                <span className="tp-online" />
                            )}
                        </div>

                        <div className="tp-profile-info">
                            <span className="tp-profile-name">
                                {displayName}
                            </span>

                            <span className="tp-profile-role">
                                {roleLabel}
                            </span>
                        </div>

                        {role === "talent" && (
                            <Link
                                href={route("talent.get.profile")}
                                className="tp-profile-arrow"
                                aria-label="View profile"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </Link>
                        )}
                    </div>

                    {role === "talent" && (
                        <div className="tp-completion">
                            <div className="tp-completion-header">
                                <span className="tp-completion-title">
                                    Profile strength
                                </span>

                                <span className="tp-completion-value">
                                    75%
                                </span>
                            </div>

                            <div className="tp-progress">
                                <div className="tp-progress-bar" />
                            </div>

                            <Link
                                href={route("talent.get.profile")}
                                className="tp-completion-link"
                            >
                                Complete profile
                                <span>→</span>
                            </Link>
                        </div>
                    )}
                </div>

                {/* QUICK CARDS */}
                {role === "talent" && (
                    <div className="tp-quick-info">
                        <Link
                            href={route("talent.products.index")}
                            className="tp-quick-card"
                        >
                            <span className="tp-quick-label">
                                Marketplace
                            </span>

                            <span className="tp-quick-value">
                                Explore
                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </span>
                        </Link>

                        <div className="tp-quick-card">
                            <span className="tp-quick-label">
                                Balance
                            </span>

                            <span className="tp-quick-value">
                                <span className="tp-coin">
                                    C
                                </span>
                                0 Coins
                            </span>
                        </div>
                    </div>
                )}

                {/* NAVIGATION */}
                <div className="tp-nav">
                    {role === "admin" && (
                        <AdminNav isActive={isActive} />
                    )}

                    {role === "talent" && (
                        <TalentNav
                            isActive={isActive}
                            openMenus={openMenus}
                            toggleMenu={toggleMenu}
                            user={user}
                        />
                    )}

                    {role === "user" && (
                        <UserNav isActive={isActive} />
                    )}
                </div>

                {/* BOTTOM */}
                <div className="tp-sidebar-bottom">
                    <Link
                        href={
                            role === "admin"
                                ? "/admin/settings"
                                : role === "talent"
                                ? route("talent.get.profile")
                                : "/user/subscription"
                        }
                        className="tp-help"
                    >
                        <span className="tp-help-icon">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
                                <line
                                    x1="12"
                                    y1="17"
                                    x2="12.01"
                                    y2="17"
                                />
                            </svg>
                        </span>

                        Help & Support
                    </Link>

                    <button
                        type="button"
                        className="tp-logout"
                        onClick={handleLogout}
                    >
                        <span className="tp-icon">
                            <LogoutIcon />
                        </span>

                        <span className="tp-nav-label">
                            Sign out
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
}

/* =========================================================
   NAVIGATION COMPONENTS
========================================================= */

function NavItem({
    href,
    active,
    icon,
    children,
    badge,
    badgeHot = false,
}) {
    return (
        <Link
            href={href}
            className={`tp-nav-item ${
                active ? "active" : ""
            }`}
        >
            <span className="tp-icon">
                {icon}
            </span>

            <span className="tp-nav-label">
                {children}
            </span>

            {badge && (
                <span
                    className={`tp-badge ${
                        badgeHot ? "hot" : ""
                    }`}
                >
                    {badge}
                </span>
            )}
        </Link>
    );
}

function NavSection({ children }) {
    return (
        <div className="tp-section">
            {children}
        </div>
    );
}

function Collapsible({
    label,
    icon,
    open,
    onToggle,
    active,
    children,
}) {
    return (
        <>
            <button
                type="button"
                className={`tp-nav-item ${
                    active ? "active" : ""
                }`}
                onClick={onToggle}
                aria-expanded={open ? "true" : "false"}
            >
                <span className="tp-icon">
                    {icon}
                </span>

                <span className="tp-nav-label">
                    {label}
                </span>

                <span className="tp-chevron">
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </span>
            </button>

            {open && (
                <div className="tp-subnav">
                    {children}
                </div>
            )}
        </>
    );
}

/* =========================================================
   ADMIN
========================================================= */

function AdminNav({ isActive }) {
    return (
        <>
            <NavSection>Overview</NavSection>

            <NavItem
                href="/admin/dashboard"
                active={isActive("/admin/dashboard")}
                icon={icons.dashboard}
            >
                Dashboard
            </NavItem>

            <NavSection>Users & Access</NavSection>

            <NavItem
                href="/admin/users"
                active={isActive("/admin/users")}
                icon={icons.users}
            >
                Users
            </NavItem>

            <NavItem
                href="/admin/talents"
                active={isActive("/admin/talents")}
                icon={icons.star}
            >
                Talents
            </NavItem>

            <NavItem
                href="/admin/partners"
                active={isActive("/admin/partners")}
                icon={icons.users}
            >
                Partners
            </NavItem>

            <NavSection>Content</NavSection>

            <NavItem
                href="/admin/categories"
                active={isActive("/admin/categories")}
                icon={icons.grid}
            >
                Categories
            </NavItem>

            <NavItem
                href="/admin/courses"
                active={isActive("/admin/courses")}
                icon={icons.book}
            >
                Courses
            </NavItem>

            <NavItem
                href="/admin/stories"
                active={isActive("/admin/stories")}
                icon={icons.story}
            >
                Stories
            </NavItem>

            <NavItem
                href="/admin/testimonials"
                active={isActive("/admin/testimonials")}
                icon={icons.testimonial}
            >
                Testimonials
            </NavItem>

            <NavItem
                href="/admin/announcements"
                active={isActive("/admin/announcements")}
                icon={icons.announce}
            >
                Announcements
            </NavItem>

            <NavSection>Platform</NavSection>

            <NavItem
                href="/admin/jobs"
                active={isActive("/admin/jobs")}
                icon={icons.job}
            >
                Jobs
            </NavItem>

            <NavItem
                href="/admin/projects"
                active={isActive("/admin/projects")}
                icon={icons.project}
            >
                Projects
            </NavItem>

            <NavItem
                href="/admin/events"
                active={isActive("/admin/events")}
                icon={icons.event}
            >
                Events
            </NavItem>

            <NavItem
                href="/admin/connections"
                active={isActive("/admin/connections")}
                icon={icons.connection}
            >
                Connections
            </NavItem>

            <NavSection>Commerce</NavSection>

            <NavItem
                href="/admin/products"
                active={isActive("/admin/products")}
                icon={icons.product}
            >
                Products
            </NavItem>

            <NavItem
                href="/admin/product-categories"
                active={isActive("/admin/product-categories")}
                icon={icons.grid}
            >
                Product Categories
            </NavItem>

            <NavItem
                href="/admin/sellers"
                active={isActive("/admin/sellers")}
                icon={icons.seller}
            >
                Sellers
            </NavItem>

            <NavItem
                href="/admin/orders"
                active={isActive("/admin/orders")}
                icon={icons.payment}
            >
                Orders
            </NavItem>

            <NavItem
                href="/admin/pricing-plans"
                active={isActive("/admin/pricing-plans")}
                icon={icons.subscription}
            >
                Pricing Plans
            </NavItem>

            <NavSection>System</NavSection>

            <NavItem
                href="/admin/demo-requests"
                active={isActive("/admin/demo-requests")}
                icon={icons.demo}
            >
                Demo Requests
            </NavItem>

            <NavItem
                href="/admin/login-activity"
                active={isActive("/admin/login-activity")}
                icon={icons.activity}
            >
                Login Activity
            </NavItem>

            <NavItem
                href="/admin/settings"
                active={isActive("/admin/settings")}
                icon={icons.settings}
            >
                Settings
            </NavItem>
        </>
    );
}

/* =========================================================
   TALENT
========================================================= */

function TalentNav({
    isActive,
    openMenus,
    toggleMenu,
    user,
}) {
    return (
        <>
            <NavSection>Workspace</NavSection>

            <NavItem
                href={route("talent.dashboard")}
                active={route().current("talent.dashboard")}
                icon={icons.dashboard}
            >
                Dashboard
            </NavItem>

            <NavItem
                href={route("talent.get.profile")}
                active={route().current("talent.get.profile")}
                icon={icons.profile}
            >
                My Profile
            </NavItem>

            <NavSection>Career & Learning</NavSection>

            <NavItem
                href={route("talent.courses.index")}
                active={route().current("talent.courses.index")}
                icon={icons.course}
            >
                My Courses
            </NavItem>

            <NavItem
                href="/talent/jobs"
                active={isActive("/talent/jobs")}
                icon={icons.job}
                badge="New"
            >
                Find Opportunities
            </NavItem>

            <NavItem
                href="/talent/projects"
                active={isActive("/talent/projects")}
                icon={icons.project}
            >
                Projects
            </NavItem>

            <NavSection>Professional Network</NavSection>

            <NavItem
                href={route(
                    "talent.connections.requests.index"
                )}
                active={route().current(
                    "talent.connections.requests*"
                )}
                icon={icons.connection}
                badge="3"
                badgeHot
            >
                Connections
            </NavItem>

            <NavItem
                href={route("talent.testimonials.index")}
                active={route().current(
                    "talent.testimonials*"
                )}
                icon={icons.testimonial}
            >
                Testimonials
            </NavItem>

            <NavItem
                href="/talent/events"
                active={isActive("/talent/events")}
                icon={icons.event}
            >
                Events
            </NavItem>

            <NavSection>Marketplace</NavSection>

            <Collapsible
                label="My Products"
                icon={icons.product}
                open={openMenus.products}
                active={isActive("/talent/products")}
                onToggle={() =>
                    toggleMenu("products")
                }
            >
                <NavItem
                    href={route("talent.products.index")}
                    active={route().current(
                        "talent.products.index"
                    )}
                    icon={icons.grid}
                >
                    All Products
                </NavItem>

                {!user?.seller && (
                    <NavItem
                        href={route(
                            "talent.products.seller"
                        )}
                        active={route().current(
                            "talent.products.seller"
                        )}
                        icon={icons.seller}
                    >
                        Become a Seller
                    </NavItem>
                )}
            </Collapsible>

            <NavItem
                href="/talent/orders"
                active={isActive("/talent/orders")}
                icon={icons.payment}
            >
                Orders
            </NavItem>

            <NavSection>Account</NavSection>

            <NavItem
                href="/talent/wallet"
                active={isActive("/talent/wallet")}
                icon={icons.wallet}
            >
                Wallet
            </NavItem>

            <NavItem
                href="/talent/settings"
                active={isActive("/talent/settings")}
                icon={icons.settings}
            >
                Settings
            </NavItem>
        </>
    );
}

/* =========================================================
   USER
========================================================= */

function UserNav({ isActive }) {
    return (
        <>
            <NavSection>Workspace</NavSection>

            <NavItem
                href={route("user.dashboard")}
                active={route().current("user.dashboard")}
                icon={icons.dashboard}
            >
                Dashboard
            </NavItem>

            <NavSection>Talent Network</NavSection>

            <NavItem
                href={route("user.talents.connected")}
                active={route().current(
                    "user.talents.connected"
                )}
                icon={icons.star}
            >
                Talents Connected
            </NavItem>

            <NavItem
                href={route("user.connections")}
                active={route().current(
                    "user.connections"
                )}
                icon={icons.users}
                badge="New"
            >
                Connection Requests
            </NavItem>

            <NavSection>Learning</NavSection>

            <NavItem
                href="/user/courses"
                active={isActive("/user/courses")}
                icon={icons.book}
            >
                Courses
            </NavItem>

            <NavSection>Discover</NavSection>

            <NavItem
                href="/announcements"
                active={isActive("/announcements")}
                icon={icons.announce}
            >
                Announcements
            </NavItem>

            <NavItem
                href="/partners"
                active={isActive("/partners")}
                icon={icons.users}
            >
                Partners
            </NavItem>

            <NavItem
                href="/testimonials"
                active={isActive("/testimonials")}
                icon={icons.testimonial}
            >
                Testimonials
            </NavItem>

            <NavSection>Account</NavSection>

            <NavItem
                href="/user/payments"
                active={isActive("/user/payments")}
                icon={icons.payment}
            >
                Payments
            </NavItem>

            <NavItem
                href="/user/subscription"
                active={isActive("/user/subscription")}
                icon={icons.subscription}
            >
                Subscriptions
            </NavItem>

            <NavItem
                href="/user/settings"
                active={isActive("/user/settings")}
                icon={icons.settings}
            >
                Settings
            </NavItem>
        </>
    );
}

/* =========================================================
   ICONS
========================================================= */

const makeIcon = (children) => (
    <svg
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

const icons = {
    dashboard: makeIcon(
        <>
            <rect x="3" y="3" width="7" height="8" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="15" width="7" height="6" rx="1" />
        </>
    ),

    profile: makeIcon(
        <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.2-7 8-7s8 3 8 7" />
        </>
    ),

    users: makeIcon(
        <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
    ),

    star: makeIcon(
        <>
            <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z" />
        </>
    ),

    grid: makeIcon(
        <>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
        </>
    ),

    book: makeIcon(
        <>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </>
    ),

    course: makeIcon(
        <>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </>
    ),

    story: makeIcon(
        <>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </>
    ),

    testimonial: makeIcon(
        <>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </>
    ),

    announce: makeIcon(
        <>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
        </>
    ),

    job: makeIcon(
        <>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M2 12h20" />
        </>
    ),

    project: makeIcon(
        <>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </>
    ),

    event: makeIcon(
        <>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </>
    ),

    connection: makeIcon(
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M19 5a10 10 0 0 1 0 14" />
            <path d="M5 5a10 10 0 0 0 0 14" />
        </>
    ),

    product: makeIcon(
        <>
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </>
    ),

    seller: makeIcon(
        <>
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </>
    ),

    payment: makeIcon(
        <>
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
            <path d="M6 15h4" />
        </>
    ),

    wallet: makeIcon(
        <>
            <path d="M20 7H5a3 3 0 0 1 0-6h14a2 2 0 0 1 2 2v15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5" />
            <path d="M16 14h.01" />
        </>
    ),

    activity: makeIcon(
        <>
            <polyline points="3 12 7 12 10 4 14 20 17 12 21 12" />
        </>
    ),

    settings: makeIcon(
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5v.2h-4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1-2.8-2.8.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3v-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1 2.8-2.8.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3h4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1 2.8 2.8-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1h.2v4h-.2a1.7 1.7 0 0 0-1.5 1z" />
        </>
    ),

    subscription: makeIcon(
        <>
            <path d="M20 12v9H4v-9" />
            <path d="M22 7H2v5h20V7z" />
            <path d="M12 22V7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </>
    ),

    demo: makeIcon(
        <>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </>
    ),
};

function LogoutIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
    );
}