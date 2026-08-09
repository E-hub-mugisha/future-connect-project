import React, { useEffect, useRef, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";

const NAV_ITEMS = [
    {
        route: "user.dashboard",
        label: "Dashboard",
        icon: "ti-layout-dashboard",
    },
    { route: "user.profile", label: "Profile", icon: "ti-user" },
    { route: "user.connections", label: "Connections", icon: "ti-messages" },
    { route: "user-panel.courses", label: "Courses", icon: "ti-book-2" },
];

function r(name, params) {
    try {
        return route(name, params);
    } catch (e) {
        console.warn(`route("${name}") failed — check Ziggy config.`);
        return "#";
    }
}

function getInitials(name) {
    if (!name || typeof name !== "string") return "?";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function UserPanelLayout({ children }) {
    const { url, props } = usePage();
    const currentPath = (url || "/").split("?")[0];
    const currentUser = props?.auth?.user || null;

    const isActive = (routeName) => {
        const path = r(routeName);
        if (path === "#") return false;
        return currentPath === path || currentPath.startsWith(path + "/");
    };

    // ── sliding underline indicator ──
    const navRef = useRef(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeEl = navRef.current?.querySelector("a.active");
        if (activeEl) {
            setIndicator({
                left: activeEl.offsetLeft,
                width: activeEl.offsetWidth,
            });
        }
    }, [currentPath]);

    // ── mobile nav drawer ──
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    // ── user menu ──
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
    const userBtnRef = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (
                userMenuOpen &&
                userMenuRef.current &&
                !userMenuRef.current.contains(e.target) &&
                !userBtnRef.current?.contains(e.target)
            ) {
                setUserMenuOpen(false);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [userMenuOpen]);

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(r("logout"));
    };

    return (
        <>
            <style>{`
        .up-shell * { box-sizing: border-box; }
        .up-shell {
          --up-bg: #0e1618;
          --up-surface: #141d20;
          --up-surface2: #1a2428;
          --up-border: rgba(0, 166, 103, 0.16);
          --up-border-h: rgba(0, 166, 103, 0.34);
          --up-green: #48d597;
          --up-text: #e8f0ed;
          --up-muted: #7a9a8e;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--up-bg);
          color: var(--up-text);
          font-family: "IBM Plex Sans", sans-serif;
        }
        [data-h-theme="light"] .up-shell {
          --up-bg: #f6faf8;
          --up-surface: #ffffff;
          --up-surface2: #eef4f1;
          --up-border: rgba(0, 100, 60, 0.12);
          --up-border-h: rgba(0, 100, 60, 0.28);
          --up-green: #00a667;
          --up-text: #10201b;
          --up-muted: #5b7a70;
        }

        /* ── Header ── */
        .up-header {
          position: sticky; top: 0; z-index: 40;
          background: var(--up-surface);
          border-bottom: 1px solid var(--up-border);
        }
        .up-header-bar {
          max-width: 1280px; margin: 0 auto; padding: 0 24px; height: 64px;
          display: flex; align-items: center; gap: 32px;
        }
        .up-logo { display: flex; align-items: center; gap: 8px; flex-shrink: 0; text-decoration: none; }
        .up-logo-mark {
          width: 30px; height: 30px; border-radius: 8px; background: var(--up-green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .up-logo-mark svg { width: 15px; height: 15px; fill: #06231a; }
        .up-logo-name {
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 14px; color: var(--up-text);
        }
        .up-logo-name span { color: var(--up-green); }

        .up-nav {
          position: relative; display: flex; align-items: center; gap: 4px;
          flex: 1; overflow-x: auto; scrollbar-width: none; height: 100%;
        }
        .up-nav::-webkit-scrollbar { display: none; }
        .up-nav a {
          position: relative; display: flex; align-items: center; gap: 6px;
          padding: 0 14px; height: 100%; font-size: 13.5px; font-weight: 500;
          color: var(--up-muted); text-decoration: none; white-space: nowrap;
          transition: color 0.2s;
        }
        .up-nav a:hover { color: var(--up-text); }
        .up-nav a.active { color: var(--up-text); }
        .up-nav a i { font-size: 15px; }
        .up-nav-indicator {
          position: absolute; bottom: 0; height: 2px; background: var(--up-green);
          border-radius: 2px 2px 0 0; transition: left 0.25s ease, width 0.25s ease;
        }

        .up-header-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .up-home-link {
          display: none; align-items: center; gap: 6px; font-size: 13px; color: var(--up-muted);
          text-decoration: none; padding: 7px 12px; border: 1px solid var(--up-border); border-radius: 8px;
          transition: all 0.2s;
        }
        .up-home-link:hover { color: var(--up-text); border-color: var(--up-border-h); }

        .up-user-btn {
          display: flex; align-items: center; gap: 8px; padding: 5px 10px 5px 5px;
          border: 1px solid var(--up-border); border-radius: 999px; background: transparent;
          cursor: pointer; color: var(--up-text); transition: all 0.2s;
        }
        .up-user-btn:hover, .up-user-btn.open { border-color: var(--up-border-h); }
        .up-user-avatar {
          width: 26px; height: 26px; border-radius: 50%; background: var(--up-green); color: #06231a;
          display: flex; align-items: center; justify-content: center; font-family: "Syne", sans-serif;
          font-weight: 700; font-size: 10px; flex-shrink: 0; overflow: hidden;
        }
        .up-user-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .up-user-btn-name {
          font-size: 12.5px; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .up-user-panel {
          position: absolute; top: calc(100% + 10px); right: 24px; width: 220px;
          background: var(--up-surface); border: 1px solid var(--up-border); border-radius: 14px;
          padding: 8px; opacity: 0; visibility: hidden; transform: translateY(6px);
          transition: all 0.2s; box-shadow: 0 20px 50px rgba(0,0,0,0.4); z-index: 50;
        }
        .up-user-panel.open { opacity: 1; visibility: visible; transform: translateY(0); }
        .up-user-panel-item {
          display: flex; align-items: center; gap: 9px; width: 100%; padding: 9px 10px; border: none;
          background: transparent; border-radius: 8px; font-size: 13px; color: var(--up-text);
          text-align: left; cursor: pointer; text-decoration: none;
        }
        .up-user-panel-item:hover { background: rgba(72,213,151,0.1); }
        .up-user-panel-item.logout { color: #ff6b6b; }
        .up-user-panel-item.logout:hover { background: rgba(255,107,107,0.1); }

        .up-mobile-toggle {
          display: none; width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--up-border);
          background: transparent; color: var(--up-text); align-items: center; justify-content: center;
          font-size: 18px; cursor: pointer; flex-shrink: 0;
        }

        .up-mobile-nav {
          display: none; flex-direction: column; background: var(--up-surface);
          border-top: 1px solid var(--up-border); padding: 8px;
        }
        .up-mobile-nav.open { display: flex; }
        .up-mobile-nav a {
          display: flex; align-items: center; gap: 10px; padding: 11px 10px; border-radius: 8px;
          font-size: 14px; color: var(--up-muted); text-decoration: none;
        }
        .up-mobile-nav a.active { color: var(--up-text); background: rgba(72,213,151,0.1); }

        @media (max-width: 860px) {
          .up-nav { display: none; }
          .up-mobile-toggle { display: flex; }
        }

        /* ── Content ── */
        .up-main { flex: 1; }
        .up-content { max-width: 1280px; margin: 0 auto; padding: 32px 24px 64px; }

        /* ── Footer ── */
        .up-footer { border-top: 1px solid var(--up-border); background: var(--up-surface); }
        .up-footer-inner {
          max-width: 1280px; margin: 0 auto; padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
        }
        .up-footer-left { display: flex; align-items: center; gap: 10px; }
        .up-footer-left .up-logo-mark { width: 22px; height: 22px; }
        .up-footer-left span { font-size: 12.5px; color: var(--up-muted); }
        .up-footer-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .up-footer-links a {
          font-size: 12.5px; color: var(--up-muted); text-decoration: none; transition: color 0.2s;
        }
        .up-footer-links a:hover { color: var(--up-green); }

        @media (max-width: 640px) {
          .up-footer-inner { flex-direction: column; align-items: flex-start; }
          .up-content { padding: 24px 16px 48px; }
          .up-header-bar { padding: 0 16px; gap: 12px; }
        }
      `}</style>

            <div className="up-shell">
                <header className="up-header">
                    <div className="up-header-bar">
                        <Link href={r("user.dashboard")} className="up-logo">
                            <div className="up-logo-mark">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="up-logo-name">
                                Future<span>Connect</span>
                            </div>
                        </Link>

                        <nav className="up-nav" ref={navRef}>
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.route}
                                    href={r(item.route)}
                                    className={
                                        isActive(item.route) ? "active" : ""
                                    }
                                >
                                    <i className={`ti ${item.icon}`} />
                                    {item.label}
                                </Link>
                            ))}
                            <span
                                className="up-nav-indicator"
                                style={{
                                    left: indicator.left,
                                    width: indicator.width,
                                }}
                            />
                        </nav>

                        <div className="up-header-right">
                            <Link
                                href={r("user.home")}
                                className="up-home-link"
                            >
                                <i className="ti ti-arrow-left" /> Back to site
                            </Link>

                            {currentUser && (
                                <div style={{ position: "relative" }}>
                                    <button
                                        ref={userBtnRef}
                                        className={`up-user-btn${userMenuOpen ? " open" : ""}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setUserMenuOpen((o) => !o);
                                        }}
                                    >
                                        <span className="up-user-avatar">
                                            {currentUser.avatar ? (
                                                <img
                                                    src={currentUser.avatar}
                                                    alt={currentUser.name}
                                                />
                                            ) : (
                                                getInitials(currentUser.name)
                                            )}
                                        </span>
                                        <span className="up-user-btn-name">
                                            {currentUser.name}
                                        </span>
                                        <i
                                            className="ti ti-chevron-down"
                                            style={{ fontSize: 12 }}
                                        />
                                    </button>

                                    <div
                                        ref={userMenuRef}
                                        className={`up-user-panel${userMenuOpen ? " open" : ""}`}
                                    >
                                        <Link
                                            href={r("user.profile")}
                                            className="up-user-panel-item"
                                        >
                                            <i className="ti ti-user" /> Profile
                                        </Link>
                                        <Link
                                            href={r("user.home")}
                                            className="up-user-panel-item"
                                        >
                                            <i className="ti ti-external-link" />{" "}
                                            View site
                                        </Link>
                                        <button
                                            type="button"
                                            className="up-user-panel-item logout"
                                            onClick={handleLogout}
                                        >
                                            <i className="ti ti-logout" /> Log
                                            out
                                        </button>
                                    </div>
                                </div>
                            )}

                            <button
                                className="up-mobile-toggle"
                                aria-label="Menu"
                                onClick={() => setMobileNavOpen((o) => !o)}
                            >
                                <i
                                    className={`ti ${mobileNavOpen ? "ti-x" : "ti-menu-2"}`}
                                />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`up-mobile-nav${mobileNavOpen ? " open" : ""}`}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.route}
                                href={r(item.route)}
                                className={isActive(item.route) ? "active" : ""}
                                onClick={() => setMobileNavOpen(false)}
                            >
                                <i className={`ti ${item.icon}`} />
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </header>

                <main className="up-main">
                    <div className="up-content">{children}</div>
                </main>

                <footer className="up-footer">
                    <div className="up-footer-inner">
                        <div className="up-footer-left">
                            <div className="up-logo-mark">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <span>
                                &copy; {new Date().getFullYear()} Future Connect
                            </span>
                        </div>
                        <div className="up-footer-links">
                            <Link href={r("user.faq")}>Help</Link>
                            <Link href={r("user.contact")}>Contact</Link>
                            <Link href={r("user.privacy-policy")}>Privacy</Link>
                            <Link href={r("user.terms-condition")}>Terms</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
