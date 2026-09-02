import React, { useEffect, useRef, useState } from "react";
import { Link, usePage, useForm, router } from "@inertiajs/react";

const DEFAULT_ROUTES = {
    "user.home": "/",
    "talent.connections-room": "/connection-room",
    "user.projects.index": "/projects",
    "user.jobs.index": "/find_work",
    "user.courses": "/learning_center",
    "user.talents": "/skills-marketplace",
    "user.products.index": "/products",
    "solutions.students": "/solutions/students",
    "solutions.ngos": "/solutions/ngos",
    "solutions.companies": "/solutions/companies",
    "solutions.professionals": "/solutions/professionals",
    "solutions.universities": "/solutions/universities",
    "solutions.investors": "/solutions/investors",
    "user.trending.index": "/trending",
    "user.how-it-works": "/how-it-works",
    "user.contact": "/contact",
    "user.success-stories": "/success-stories",
    "user.partnerships": "/partnerships",
    "user.faq": "/faq",
    pricing: "/pricing",
    "demo.request": "/demo-request",
    "user.register_skills": "/register/skills",
    "talent.search": "/search",
    login: "/login",
    register: "/register",
    "password.request": "/forgot-password",
    "admin.dashboard": "/admin/dashboard",
    "agent.dashboard": "/agent/dashboard",
    "talent.dashboard": "/talent/page/dashboard",
    "seller.dashboard": "/seller/dashboard",
    "user.dashboard": "/user/dashboard",
    "seller.store": "/seller/apply",
    "user.jobs.store": "/jobs",
    logout: "/logout",
};

const DASHBOARD_ROUTE_BY_ROLE = {
    admin: "admin.dashboard",
    agent: "agent.dashboard",
    talent: "talent.dashboard",
    seller: "seller.dashboard",
    user: "user.dashboard",
};

const SCROLL_THRESHOLD = 60;

// ── Inline SVG icon set (replaces the ti-*/fa-brands icon-font classes). ──
// Each icon sizes itself to 1em so it inherits the font-size of its
// container, and uses currentColor so it inherits text color/theme.
function IconBase({ className = "", size = "1em", children, viewBox = "0 0 24 24", fill = "none", ...rest }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={viewBox}
            fill={fill}
            stroke={fill === "none" ? "currentColor" : undefined}
            strokeWidth={fill === "none" ? 2 : undefined}
            strokeLinecap={fill === "none" ? "round" : undefined}
            strokeLinejoin={fill === "none" ? "round" : undefined}
            aria-hidden="true"
            focusable="false"
            {...rest}
        >
            {children}
        </svg>
    );
}

function IconSun(props) {
    return (
        <IconBase {...props}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </IconBase>
    );
}

function IconMoon(props) {
    return (
        <IconBase {...props}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </IconBase>
    );
}

function IconSearch(props) {
    return (
        <IconBase {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
        </IconBase>
    );
}

function IconUser(props) {
    return (
        <IconBase {...props}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
        </IconBase>
    );
}

function IconDashboard(props) {
    return (
        <IconBase {...props}>
            <rect x="3" y="3" width="7" height="9" rx="1.5" />
            <rect x="14" y="3" width="7" height="5" rx="1.5" />
            <rect x="14" y="12" width="7" height="9" rx="1.5" />
            <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </IconBase>
    );
}

function IconLogout(props) {
    return (
        <IconBase {...props}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="M16 17l5-5-5-5" />
            <path d="M21 12H9" />
        </IconBase>
    );
}

function IconMail(props) {
    return (
        <IconBase {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </IconBase>
    );
}

function IconLock(props) {
    return (
        <IconBase {...props}>
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </IconBase>
    );
}

function IconPlus(props) {
    return (
        <IconBase {...props}>
            <path d="M12 5v14M5 12h14" />
        </IconBase>
    );
}

function IconMenu(props) {
    return (
        <IconBase {...props}>
            <path d="M4 6h16M4 12h16M4 18h16" />
        </IconBase>
    );
}

function IconFacebook(props) {
    return (
        <IconBase {...props} fill="currentColor">
            <path d="M14 9h3V6h-3c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.28.22-.5.5-.5Z" />
        </IconBase>
    );
}

function IconX(props) {
    return (
        <IconBase {...props} fill="currentColor">
            <path d="M4 4l7.2 9.4L4.4 20H7l5.4-5.8L17 20h3l-7.5-9.8L19.4 4H17l-5 5.4L8.9 4H4Z" />
        </IconBase>
    );
}

function IconLinkedin(props) {
    return (
        <IconBase {...props} fill="currentColor">
            <path d="M6.94 8.5H4.06V19h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4Z" />
            <path d="M9.5 8.5h2.76v1.43h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.92 3.45 4.41V19h-2.88v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H9.5V8.5Z" />
        </IconBase>
    );
}

// ── Shared nav data so desktop mega-menus and the mobile drawer
//    are always generated from the exact same source (no more drift). ──
const PLATFORM_LINKS = [
    {
        route: "talent.connections-room",
        title: "Professional Connections",
        desc: "Connect with experts and peers in your field.",
    },
    {
        route: "user.projects.index",
        title: "Project Collaboration",
        desc: "Build projects with talented people.",
    },
    {
        route: "user.jobs.index",
        title: "Job Opportunities",
        desc: "Find jobs, internships, and career opportunities.",
    },
    {
        route: "user.courses",
        title: "Learning",
        desc: "Learn, grow, and earn new certifications.",
    },
    {
        route: "user.talents",
        title: "Skills Hub",
        desc: "Showcase your skills and portfolio.",
    },
    {
        route: "user.products.index",
        title: "Marketplace",
        desc: "Buy and sell technology solutions.",
    },
];

const SOLUTIONS_LINKS = [
    {
        route: "solutions.students",
        title: "For Students",
        desc: "Launch your career with confidence.",
    },
    {
        route: "solutions.ngos",
        title: "For NGOs",
        desc: "Partner with skilled local talent.",
    },
    {
        route: "solutions.companies",
        title: "For Companies",
        desc: "Find verified and sharp skills faster.",
    },
    {
        route: "solutions.professionals",
        title: "For Professionals",
        desc: "Grow your network and opportunities.",
    },
    {
        route: "solutions.universities",
        title: "For Universities",
        desc: "Empower students beyond graduation.",
    },
    {
        route: "solutions.investors",
        title: "For Investors",
        desc: "Discover skills worth investing in.",
    },
];

// Company links: some reuse "user.contact" for multiple cards, same as your original.
const COMPANY_LINKS = [
    {
        route: "user.how-it-works",
        title: "How It Works",
        desc: "See the platform in action.",
    },
    {
        route: "user.contact",
        title: "Contact",
        desc: "Get in touch with our team.",
    },
    {
        route: "user.success-stories",
        title: "Customer Stories",
        desc: "Real outcomes from real talent.",
    },
    {
        route: "user.partnerships",
        title: "Partnerships",
        desc: "Team up with FutureConnect.",
    },
    { route: "user.faq", title: "FAQ", desc: "Answers to common questions." },
    {
        route: "user.contact",
        title: "Help & Support",
        desc: "Get help when you need it.",
    },
];

// ── Small helper: turn "Jane Doe" into "JD", "jane" into "JA" ──
function getInitials(name) {
    if (!name || typeof name !== "string") return "?";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function UserHeader({
    categories = [],
    currentUser = null,
    routes = {},
    csrfToken = "",
    onLoginSuccess,
    onApplySellerSuccess,
    onPostJobSubmit,
}) {
    const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";

    // ── Active route detection (Inertia) ──
    const { url: currentUrl } = usePage();
    const currentPath = (currentUrl || "/").split("?")[0];
    const isActive = (name, { exact = false } = {}) => {
        const path = r(name);
        if (path === "#") return false;
        if (exact) return currentPath === path;
        return path === "/"
            ? currentPath === "/"
            : currentPath.startsWith(path);
    };

    // ── Scroll state (topbar hide + header shadow) ──
    const [scrolled, setScrolled] = useState(false);
    const fixedWrapRef = useRef(null);
    const spacerRef = useRef(null);
    const topbarRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const syncSpacerHeight = () => {
        if (fixedWrapRef.current && spacerRef.current) {
            spacerRef.current.style.height = `${fixedWrapRef.current.offsetHeight}px`;
        }
    };

    useEffect(() => {
        syncSpacerHeight();
        window.addEventListener("resize", syncSpacerHeight, { passive: true });
        return () => window.removeEventListener("resize", syncSpacerHeight);
    }, []);

    useEffect(() => {
        const topbarEl = topbarRef.current;
        if (!topbarEl) return;
        const handle = () => syncSpacerHeight();
        topbarEl.addEventListener("transitionend", handle);
        return () => topbarEl.removeEventListener("transitionend", handle);
    }, []);

    useEffect(() => {
        const id = requestAnimationFrame(syncSpacerHeight);
        return () => cancelAnimationFrame(id);
    }, [scrolled]);

    // ── Theme toggle ──
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const stored = localStorage.getItem("fc-theme");
        const systemPrefersLight = window.matchMedia(
            "(prefers-color-scheme: light)",
        ).matches;
        setTheme(stored || (systemPrefersLight ? "light" : "dark"));
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") {
            root.setAttribute("data-h-theme", "light");
        } else {
            root.removeAttribute("data-h-theme");
        }
        localStorage.setItem("fc-theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((t) => (t === "light" ? "dark" : "light"));

    // ── Login panel + form (CSRF-safe via useForm) ──
    const [loginOpen, setLoginOpen] = useState(false);
    const loginPanelRef = useRef(null);
    const signInBtnRef = useRef(null);

    const loginForm = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submitLogin = (e) => {
        e.preventDefault();
        loginForm.post(r("login"), {
            preserveScroll: true,
            onSuccess: () => {
                loginForm.reset("password");
                setLoginOpen(false);
                onLoginSuccess && onLoginSuccess();
            },
            onError: (errors) => {
                console.log("Login errors:", errors); // TEMP: see what's actually coming back
                loginForm.reset("password");
            },
        });
    };

    useEffect(() => {
        function handleOutsideClick(e) {
            if (
                loginOpen &&
                loginPanelRef.current &&
                !loginPanelRef.current.contains(e.target) &&
                e.target !== signInBtnRef.current
            ) {
                setLoginOpen(false);
            }
        }
        function handleEscape(e) {
            if (e.key === "Escape") setLoginOpen(false);
        }
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [loginOpen]);

    // ── Logged-in user menu (avatar dropdown: name, dashboard, logout) ──
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuPanelRef = useRef(null);
    const userMenuBtnRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(e) {
            if (
                userMenuOpen &&
                userMenuPanelRef.current &&
                !userMenuPanelRef.current.contains(e.target) &&
                e.target !== userMenuBtnRef.current &&
                !userMenuBtnRef.current?.contains(e.target)
            ) {
                setUserMenuOpen(false);
            }
        }
        function handleEscape(e) {
            if (e.key === "Escape") setUserMenuOpen(false);
        }
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [userMenuOpen]);

    const handleLogout = (e) => {
        e.preventDefault();
        setUserMenuOpen(false);
        setDrawerOpen(false);
        router.post(r("logout"));
    };

    // ── Seller apply form (CSRF-safe via useForm) ──
    const sellerForm = useForm({
        company_name: "",
        email: "",
        phone: "",
        address: "",
        description: "",
    });

    const submitApplySeller = (e) => {
        e.preventDefault();
        sellerForm.post(r("seller.store"), {
            preserveScroll: true,
            onSuccess: () => {
                sellerForm.reset();
                onApplySellerSuccess && onApplySellerSuccess();
                // Bootstrap modal close — grab the instance and hide it.
                const modalEl = document.getElementById("applySellerModal");
                if (modalEl && window.bootstrap) {
                    const instance =
                        window.bootstrap.Modal.getInstance(modalEl);
                    instance && instance.hide();
                }
            },
        });
    };

    // ── Search overlay ──
    const [searchOpen, setSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchOpen) {
            const id = setTimeout(() => searchInputRef.current?.focus(), 100);
            return () => clearTimeout(id);
        }
    }, [searchOpen]);

    useEffect(() => {
        function handleEscape(e) {
            if (e.key === "Escape") setSearchOpen(false);
        }
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // ── Mobile drawer ──
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerSubOpen, setDrawerSubOpen] = useState({
        platform: false,
        solutions: false,
        company: false,
    });

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [drawerOpen]);

    const toggleDrawerSub = (key) =>
        setDrawerSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));

    const openMobileLogin = () => {
        setDrawerOpen(false);
        setTimeout(() => {
            setLoginOpen(true);
            signInBtnRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 350);
    };

    const dashboardRoute = currentUser
        ? r(DASHBOARD_ROUTE_BY_ROLE[currentUser.role] || "user.dashboard")
        : null;

    const isPlatformActive = PLATFORM_LINKS.some((l) => isActive(l.route));
    const isSolutionsActive = SOLUTIONS_LINKS.some((l) => isActive(l.route));
    const isCompanyActive = COMPANY_LINKS.some((l) => isActive(l.route));

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <style>{`
        :root {
          --h-bg: #0e1618;
          --h-surface: #141d20;
          --h-surface2: #1a2428;
          --h-green: #48d597;
          --h-green-d: rgba(0, 166, 103, 0.14);
          --h-green-b: rgba(0, 166, 103, 0.22);
          --h-text: #e8f0ed;
          --h-muted: #7a9a8e;
          --h-border: rgba(0, 166, 103, 0.16);
          --h-border-h: rgba(0, 166, 103, 0.38);
          --h-radius: 10px;
          --h-error: #ff6b6b;
          --h-hover: #fff;
        }

        .fc-header *, .fc-header *::before, .fc-header *::after { box-sizing: border-box; }
        .fc-header a { text-decoration: none; }

        .fc-header-fixed-wrap { position: fixed; top: 0; left: 0; right: 0; z-index: 999; }

        .fc-topbar {
          background: #080f11;
          border-bottom: 1px solid rgba(0, 166, 103, 0.1);
          padding: 6px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: var(--h-muted);
          max-height: 40px;
          overflow: hidden;
          opacity: 1;
          transition: max-height 0.32s ease, opacity 0.22s ease, padding 0.32s ease, border-color 0.32s ease;
        }
        .fc-topbar.fc-hide {
          max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0;
          border-bottom-color: transparent; pointer-events: none;
        }
        .fc-topbar .fc-tb-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 32px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .fc-topbar .fc-tb-contact { display: flex; align-items: center; gap: 16px; }
        .fc-topbar .fc-tb-contact span { display: flex; align-items: center; gap: 5px; }
        .fc-topbar .fc-tb-contact span::before {
          content: ''; display: inline-block; width: 5px; height: 5px;
          border-radius: 50%; background: var(--h-green);
        }
        .fc-topbar .fc-tb-social { display: flex; gap: 12px; align-items: center; }
        .fc-topbar .fc-tb-social a { color: var(--h-muted); font-size: 13px; display: flex; align-items: center; transition: color 0.2s; }
        .fc-topbar .fc-tb-social a:hover { color: var(--h-green); }

        .fc-header {
          background: var(--h-bg);
          border-bottom: 1px solid var(--h-border);
          transition: box-shadow 0.3s, background 0.3s;
        }
        .fc-header.scrolled {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
          background: rgba(14, 22, 24, 0.97);
          backdrop-filter: blur(12px);
        }
        .fc-header-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 32px; height: 66px;
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
          gap: 100px; font-family: 'DM Sans', sans-serif;
        }
        .fc-header-spacer { width: 100%; }

        .fc-logo-wrap {
          display: flex; align-items: center; gap: 9px; flex-shrink: 0;
          text-decoration: none; justify-self: start;
        }
        .fc-logo-mark {
          width: 32px; height: 32px; border-radius: 8px; background: var(--h-green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 13px; color: #fff;
        }
        .fc-logo-mark svg { width: 16px; height: 16px; fill: #fff; }
        .fc-logo-name {
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          color: #fff; line-height: 1.15; white-space: nowrap;
        }
        .fc-logo-name span { color: var(--h-green); }

        .fc-nav { display: flex; align-items: center; justify-content: center; gap: 2px; list-style: none; margin: 0; padding: 0; }
        .fc-nav > li { position: relative; }
        .fc-nav > li > a {
          position: relative; display: flex; align-items: center; gap: 4px; padding: 8px 11px;
          font-size: 13.5px; font-weight: 400; color: var(--h-muted); border-radius: 7px;
          transition: color 0.2s, background 0.2s; white-space: nowrap; cursor: pointer;
        }
        .fc-nav > li > a:hover, .fc-nav > li:hover > a { color: var(--h-hover); background: rgba(255, 255, 255, 0.05); }
        .fc-nav > li > a.active { color: var(--h-hover); background: var(--h-green-d); }
        .fc-nav > li > a.active::after {
          content: ''; position: absolute; left: 11px; right: 11px; bottom: 2px; height: 2px;
          background: var(--h-green); border-radius: 2px;
        }
        .fc-mega a.fc-card.active { background: var(--h-green-d); }
        .fc-mega a.fc-card.active .fc-card-title { color: var(--h-green); }
        .fc-drawer-nav > li > a.active, .fc-drawer-sub li a.active { color: var(--h-hover); background: var(--h-green-d); }
        .fc-nav > li > a .chevron { font-size: 10px; margin-top: 1px; transition: transform 0.2s; opacity: 0.6; }
        .fc-nav > li:hover > a .chevron { transform: rotate(180deg); opacity: 1; }

        .fc-mega {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: var(--h-surface); border: 1px solid var(--h-border); border-radius: 16px;
          padding: 14px; width: 460px; display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 6px; opacity: 0; visibility: hidden;
          transition: opacity 0.22s ease, visibility 0.22s ease, transform 0.22s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); z-index: 100;
        }
        .fc-nav > li:hover .fc-mega { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
        .fc-mega a.fc-card { display: block; padding: 12px 14px; border-radius: 10px; transition: background 0.18s; }
        .fc-mega a.fc-card:hover { background: var(--h-green-d); }
        .fc-mega a.fc-card .fc-card-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--h-text); margin: 0 0 3px; line-height: 1.3; }
        .fc-mega a.fc-card:hover .fc-card-title { color: var(--h-hover); }
        .fc-mega a.fc-card .fc-card-desc { font-size: 11.5px; color: var(--h-muted); margin: 0; line-height: 1.4; }

        .fc-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; justify-self: end; }

        .fc-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
          border: 1px solid var(--h-border); border-radius: 8px; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400; color: var(--h-muted); background: transparent;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-ghost:hover { color: var(--h-hover); border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }
        .fc-btn-ghost:disabled { opacity: 0.6; cursor: not-allowed; }

        .fc-btn-green {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px;
          background: var(--h-green); border: 1px solid var(--h-green); border-radius: 8px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #fff;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-green:hover { background: #00c07a; border-color: #00c07a; transform: translateY(-1px); }
        .fc-btn-green:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        .fc-btn-search, .fc-theme-toggle {
          width: 38px; height: 38px; border: 1px solid var(--h-border); border-radius: 8px;
          background: transparent; color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 15px;
          flex-shrink: 0; position: relative;
        }
        .fc-btn-search:hover, .fc-theme-toggle:hover { color: var(--h-hover); border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-btn-register-mobile {
          width: 38px; height: 38px; background: var(--h-green); border: none; border-radius: 8px;
          color: #fff; display: none; align-items: center; justify-content: center; font-size: 20px;
          text-decoration: none; flex-shrink: 0; cursor: pointer; transition: background 0.2s, transform 0.15s;
        }
        .fc-btn-register-mobile:hover { background: #00c07a; transform: translateY(-1px); }

        .fc-login-wrap { position: relative; }
        .fc-login-panel {
          position: absolute; top: calc(100% + 12px); right: 0; width: 360px;
          background: var(--h-surface); border: 1px solid var(--h-border); border-radius: 18px;
          padding: 28px; opacity: 0; visibility: hidden; transform: translateY(8px) scale(0.98);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55); z-index: 200; overflow: hidden;
          max-width: calc(100vw - 32px);
        }
        .fc-login-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--h-green), transparent); border-radius: 18px 18px 0 0;
        }
        .fc-login-panel.open { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }

        .fc-lp-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .fc-lp-head-left h4 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0 0 3px; }
        .fc-lp-head-left p { font-size: 12px; color: var(--h-muted); margin: 0; }
        .fc-lp-close {
          width: 30px; height: 30px; border-radius: 7px; background: var(--h-surface2);
          border: 1px solid var(--h-border); color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; font-size: 14px; transition: all 0.2s; flex-shrink: 0;
        }
        .fc-lp-close:hover { color: var(--h-hover); border-color: var(--h-border-h); }

        .fc-lp-field { margin-bottom: 14px; }
        .fc-lp-field label {
          display: block; font-size: 10px; font-weight: 500; letter-spacing: 0.8px;
          text-transform: uppercase; color: var(--h-muted); margin-bottom: 6px;
        }
        .fc-lp-input-wrap { position: relative; }
        .fc-lp-input-wrap .fc-lp-icon {
          position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
          color: var(--h-muted); font-size: 14px; pointer-events: none;
        }
        .fc-lp-field input {
          width: 100%; background: var(--h-surface2); border: 1px solid var(--h-border);
          border-radius: var(--h-radius); color: var(--h-text); font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; padding: 11px 14px 11px 38px; outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .fc-lp-field input::placeholder { color: #3d5a52; }
        .fc-lp-field input:focus { border-color: var(--h-green); background: rgba(0, 166, 103, 0.06); }
        .fc-lp-field input.has-error { border-color: var(--h-error); }
        .fc-lp-error { font-size: 11px; color: var(--h-error); margin-top: 5px; }

        .fc-lp-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .fc-lp-remember { display: flex; align-items: center; gap: 7px; cursor: pointer; }
        .fc-lp-remember input { accent-color: var(--h-green); cursor: pointer; }
        .fc-lp-remember span { font-size: 12px; color: var(--h-muted); }
        .fc-lp-forgot { font-size: 12px; color: var(--h-green); font-weight: 500; }
        .fc-lp-forgot:hover { text-decoration: underline; }

        .fc-lp-submit {
          width: 100%; padding: 12px; background: var(--h-green); border: none;
          border-radius: var(--h-radius); font-family: 'Syne', sans-serif; font-size: 14px;
          font-weight: 700; color: #fff; cursor: pointer; transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.2px;
        }
        .fc-lp-submit:hover { background: #00c07a; transform: translateY(-1px); }
        .fc-lp-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

        .fc-lp-footer {
          text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--h-border);
          font-size: 12.5px; color: var(--h-muted);
        }
        .fc-lp-footer a { color: var(--h-green); font-weight: 500; }
        .fc-lp-footer a:hover { text-decoration: underline; }

        /* ── Logged-in avatar + dropdown ── */
        .fc-user-menu-wrap { position: relative; }
        .fc-user-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px 5px 5px;
          border: 1px solid var(--h-border); border-radius: 999px; background: transparent;
          cursor: pointer; transition: all 0.2s; color: var(--h-text); font-family: 'DM Sans', sans-serif;
          max-width: 220px;
        }
        .fc-user-btn:hover, .fc-user-btn.open { border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }
        .fc-user-avatar {
          width: 28px; height: 28px; border-radius: 50%; background: var(--h-green); color: #fff;
          display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 11px; flex-shrink: 0; overflow: hidden;
        }
        .fc-user-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .fc-user-btn-name {
          font-size: 13px; font-weight: 500; max-width: 110px; overflow: hidden;
          text-overflow: ellipsis; white-space: nowrap;
        }
        .fc-user-btn .chevron { font-size: 10px; opacity: 0.6; transition: transform 0.2s; flex-shrink: 0; }
        .fc-user-btn.open .chevron { transform: rotate(180deg); opacity: 1; }

        .fc-user-panel {
          position: absolute; top: calc(100% + 12px); right: 0; width: 250px;
          background: var(--h-surface); border: 1px solid var(--h-border); border-radius: 16px;
          padding: 10px; opacity: 0; visibility: hidden; transform: translateY(8px) scale(0.98);
          transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55); z-index: 200; overflow: hidden;
        }
        .fc-user-panel.open { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
        .fc-user-panel-head {
          display: flex; align-items: center; gap: 10px; padding: 6px 8px 14px;
          border-bottom: 1px solid var(--h-border); margin-bottom: 6px;
        }
        .fc-user-panel-head .fc-user-avatar { width: 38px; height: 38px; font-size: 13px; }
        .fc-user-panel-head-info { min-width: 0; }
        .fc-user-panel-head-info .fc-upn-name {
          font-family: 'Syne', sans-serif; font-size: 13.5px; font-weight: 700; color: #fff;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .fc-user-panel-head-info .fc-upn-role { font-size: 11px; color: var(--h-muted); text-transform: capitalize; }
        .fc-user-panel-item {
          display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px 8px; border: none;
          background: transparent; border-radius: 9px; font-family: 'DM Sans', sans-serif; font-size: 13px;
          color: var(--h-text); text-align: left; cursor: pointer; transition: background 0.18s, color 0.18s;
        }
        .fc-user-panel-item:hover { background: var(--h-green-d); color: var(--h-hover); }
        .fc-user-panel-item.logout { color: var(--h-error); }
        .fc-user-panel-item.logout:hover { background: rgba(255, 107, 107, 0.1); color: var(--h-error); }
        .fc-user-panel-item svg { font-size: 14px; width: 16px; flex-shrink: 0; }

        .fc-drawer-user-card {
          display: flex; align-items: center; gap: 10px; padding: 10px;
          border: 1px solid var(--h-border); border-radius: 12px; margin-bottom: 4px;
        }
        .fc-drawer-user-card .fc-user-avatar { width: 38px; height: 38px; font-size: 13px; }
        .fc-drawer-user-card-info { min-width: 0; }
        .fc-drawer-user-card-info .fc-upn-name {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #fff;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .fc-drawer-user-card-info .fc-upn-role { font-size: 11px; color: var(--h-muted); text-transform: capitalize; }

        .fc-hamburger {
          display: none; width: 38px; height: 38px; align-items: center; justify-content: center;
          cursor: pointer; border-radius: 8px; border: 1px solid var(--h-border); background: transparent;
          color: var(--h-muted); font-size: 22px; flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .fc-hamburger:hover { color: var(--h-hover); border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-drawer { display: none; position: fixed; inset: 0; z-index: 1050; pointer-events: none; }
        .fc-drawer.open { pointer-events: auto; }
        .fc-drawer-bg { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.7); opacity: 0; transition: opacity 0.3s; }
        .fc-drawer.open .fc-drawer-bg { opacity: 1; }
        .fc-drawer-panel {
          position: absolute; left: 0; top: 0; bottom: 0; width: 300px; max-width: 86vw; background: var(--h-surface);
          border-right: 1px solid var(--h-border); padding: 20px 18px; transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow-y: auto;
          display: flex; flex-direction: column;
        }
        .fc-drawer.open .fc-drawer-panel { transform: translateX(0); }
        .fc-drawer-logo {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;
          padding-bottom: 14px; border-bottom: 1px solid var(--h-border);
        }
        .fc-drawer-logo-actions { display: flex; align-items: center; gap: 6px; }
        .fc-drawer-close, .fc-drawer-theme-toggle, .fc-drawer-search-btn {
          width: 30px; height: 30px; border-radius: 7px; background: var(--h-surface2);
          border: 1px solid var(--h-border); color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; font-size: 14px; transition: all 0.2s;
        }
        .fc-drawer-close:hover, .fc-drawer-theme-toggle:hover, .fc-drawer-search-btn:hover { color: var(--h-hover); }
        .fc-drawer-nav { list-style: none; margin: 0; padding: 0; flex: 1; }
        .fc-drawer-nav > li > a {
          display: flex; align-items: center; justify-content: space-between; padding: 10px 12px;
          font-size: 14px; color: var(--h-muted); border-radius: 8px; transition: color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .fc-drawer-nav > li > a:hover { color: var(--h-hover); background: var(--h-green-d); }
        .fc-drawer-nav > li > a .chevron { font-size: 10px; opacity: 0.6; transition: transform 0.2s; }
        .fc-drawer-nav > li > a.sub-open .chevron { transform: rotate(180deg); opacity: 1; }
        .fc-drawer-sub { list-style: none; margin: 0; padding: 0 0 4px 12px; display: none; }
        .fc-drawer-sub.open { display: block; }
        .fc-drawer-sub li a {
          display: flex; flex-direction: column; gap: 1px; padding: 7px 12px; border-radius: 7px;
          transition: color 0.18s, background 0.18s;
        }
        .fc-drawer-sub li a:hover { background: var(--h-green-d); }
        .fc-drawer-sub li a .fc-drawer-sub-title { font-size: 13px; color: var(--h-text); font-weight: 500; }
        .fc-drawer-sub li a:hover .fc-drawer-sub-title { color: var(--h-hover); }
        .fc-drawer-sub li a .fc-drawer-sub-desc { font-size: 11px; color: var(--h-muted); }
        .fc-drawer-sub li a.active .fc-drawer-sub-title { color: var(--h-green); }
        .fc-drawer-ctas { margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--h-border); display: flex; flex-direction: column; gap: 10px; }
        .fc-drawer-ctas .fc-btn-ghost, .fc-drawer-ctas .fc-btn-green { width: 100%; justify-content: center; }

        .fc-search-overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
          z-index: 1100; display: flex; align-items: center; justify-content: center;
          opacity: 0; visibility: hidden; transition: all 0.25s;
        }
        .fc-search-overlay.open { opacity: 1; visibility: visible; }
        .fc-search-box { width: 100%; max-width: 640px; padding: 0 24px; }
        .fc-search-box p { text-align: center; font-size: 13px; color: var(--h-muted); margin: 0 0 20px; font-family: 'DM Sans', sans-serif; }
        .fc-search-input-wrap { position: relative; }
        .fc-search-input-wrap input {
          width: 100%; background: var(--h-surface); border: 1px solid var(--h-border-h); border-radius: 14px;
          color: var(--h-text); font-family: 'DM Sans', sans-serif; font-size: 18px; padding: 18px 60px 18px 24px;
          outline: none; transition: border-color 0.2s;
        }
        .fc-search-input-wrap input::placeholder { color: #3d5a52; }
        .fc-search-input-wrap input:focus { border-color: var(--h-green); }
        .fc-search-submit {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px;
          background: var(--h-green); border: none; border-radius: 8px; color: #fff; font-size: 15px;
          cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .fc-search-submit:hover { background: #00c07a; }
        .fc-search-close {
          position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 9px;
          background: var(--h-surface); border: 1px solid var(--h-border); color: var(--h-muted); cursor: pointer;
          display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;
        }
        .fc-search-close:hover { color: var(--h-hover); border-color: var(--h-border-h); }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1150px) {
          .fc-header-inner { gap: 40px; }
          .fc-nav > li > a { padding: 8px 8px; font-size: 13px; }
          .fc-btn-request-demo { display: none; }
        }
        @media (max-width: 900px) {
          .fc-nav { display: none; }
          .fc-hamburger { display: flex; }
          .fc-drawer { display: block; }
          .fc-topbar { display: none; }
          .fc-btn-ghost.fc-sign-in-desktop { display: none; }
          .fc-btn-green.fc-register-desktop { display: none; }
          .fc-btn-register-mobile { display: flex; }
          .fc-user-menu-wrap { display: none; }
          .fc-header-inner { grid-template-columns: auto 1fr auto; gap: 12px; height: 60px; }
        }
        @media (max-width: 640px) {
          .fc-btn-search { display: none; } /* search moved into drawer on small screens */
          .fc-theme-toggle { display: none; } /* theme toggle moved into drawer on small screens */
          .fc-header-inner { padding: 0 16px; }
          .fc-search-box { padding: 0 16px; }
          .fc-search-input-wrap input { font-size: 15px; padding: 15px 52px 15px 18px; }
        }
        @media (max-width: 480px) {
          .fc-header-inner { padding: 0 12px; }
          .fc-logo-name { font-size: 13px; }
          .fc-drawer-panel { width: 280px; padding: 16px 14px; }
        }
        @media (max-width: 380px) {
          .fc-btn-register-mobile { width: 34px; height: 34px; font-size: 17px; }
          .fc-hamburger { width: 34px; height: 34px; font-size: 19px; }
        }

        .fc-modal .modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); color: var(--text-1); }
        .fc-modal .modal-header { border-bottom: 1px solid var(--border); padding: 22px 28px; }
        .fc-modal .modal-title { font-family: var(--font-head); font-weight: 700; font-size: 1.05rem; color: var(--text-1); }
        .fc-modal .modal-title small { display: block; font-size: 0.72rem; color: var(--text-3); font-weight: 400; margin-top: 3px; }
        .fc-modal .accent-line { display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 6px; }
        .fc-modal .btn-close { filter: invert(1) brightness(0.6); }
        .fc-modal .modal-body { padding: 28px; }
        .fc-modal .modal-footer { border-top: 1px solid var(--border); padding: 18px 28px; }

        .fc-form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-2); margin-bottom: 6px; display: block; }
        .fc-form-control {
          width: 100%; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); border-radius: var(--r-sm);
          color: var(--text-1); padding: 11px 14px; font-family: var(--font-body); font-size: 0.85rem; outline: none;
          transition: border-color .2s; margin-bottom: 0;
        }
        .fc-form-control:focus { border-color: var(--border-h); box-shadow: 0 0 0 3px var(--accent-glow); }
        .fc-form-control::placeholder { color: var(--text-3); }
        .fc-form-control.has-error { border-color: var(--h-error); }
        .fc-form-error { font-size: 11px; color: var(--h-error); margin-top: 5px; }
        textarea.fc-form-control { resize: vertical; min-height: 90px; }
        select.fc-form-control option { background: var(--bg-card); color: var(--text-1); }

        .btn-fc-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff; border: none;
          border-radius: var(--r-pill); padding: 11px 26px; font-family: var(--font-head); font-size: 0.875rem;
          font-weight: 700; text-decoration: none; cursor: pointer; transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 4px 20px var(--accent-glow);
        }
        .btn-fc-primary:hover { background: var(--accent-dim); transform: translateY(-2px); box-shadow: 0 6px 30px var(--accent-glow); color: #fff; }
        .btn-fc-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text-1);
          border: 1px solid var(--border); border-radius: var(--r-pill); padding: 10px 22px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 600; text-decoration: none; cursor: pointer;
          transition: border-color .2s, color .2s, background .2s;
        }
        .btn-fc-outline:hover { border-color: var(--border-h); color: var(--accent); background: var(--bg-glass2); }

        [data-h-theme="light"] {
          --h-bg: #f6faf8; --h-surface: #F5f5f7; --h-surface2: #eef4f1; --h-green: #00a667;
          --h-green-d: rgba(0, 166, 103, 0.08); --h-green-b: rgba(0, 166, 103, 0.18);
          --h-text: #10201b; --h-muted: #5b7a70; --h-border: rgba(0, 100, 60, 0.12); --h-border-h: rgba(0, 100, 60, 0.3);
          --h-hover: #10201b;
        }
        [data-h-theme="light"] .fc-topbar { background: #eef4f1; border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .fc-header.scrolled { background: rgba(246, 250, 248, 0.95); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); }
        [data-h-theme="light"] .fc-logo-mark, [data-h-theme="light"] .fc-btn-green,
        [data-h-theme="light"] .fc-lp-submit, [data-h-theme="light"] .fc-btn-register-mobile { color: #fff; }
        [data-h-theme="light"] .fc-logo-name { color: #10201b; }
        [data-h-theme="light"] .fc-nav > li > a:hover, [data-h-theme="light"] .fc-nav > li:hover > a { color: #10201b; background: rgba(0, 100, 60, 0.06); }
        [data-h-theme="light"] .fc-card-title { color: #10201b; }
        [data-h-theme="light"] .fc-mega a.fc-card:hover .fc-card-title { color: #00a667; }
        [data-h-theme="light"] .fc-lp-field input::placeholder, [data-h-theme="light"] .fc-search-input-wrap input::placeholder { color: #a9c2b8; }
        [data-h-theme="light"] .fc-search-overlay { background: rgba(246, 250, 248, 0.92); }

        .fc-theme-toggle .icon-sun, .fc-drawer-theme-toggle .icon-sun { display: none; }
        .fc-theme-toggle .icon-moon, .fc-drawer-theme-toggle .icon-moon { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .icon-sun,
        [data-h-theme="light"] .fc-drawer-theme-toggle .icon-sun { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .icon-moon,
        [data-h-theme="light"] .fc-drawer-theme-toggle .icon-moon { display: none; }
      `}</style>

            {/* ════════════════════ FIXED HEADER STACK ════════════════════ */}
            <div className="fc-header-fixed-wrap" ref={fixedWrapRef}>
                <div
                    className={`fc-topbar d-none d-lg-block${scrolled ? " fc-hide" : ""}`}
                    ref={topbarRef}
                >
                    <div className="fc-tb-inner">
                        <div className="fc-tb-contact">
                            <span>info@futureconnect.rw</span>
                            <span>+250 784 123 456</span>
                        </div>
                        <div className="fc-tb-social">
                            <a href="#" aria-label="Facebook">
                                <IconFacebook />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <IconX />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <IconLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <header className={`fc-header${scrolled ? " scrolled" : ""}`}>
                    <div className="fc-header-inner">
                        <Link href={r("user.home")} className="fc-logo-wrap">
                            <div className="fc-logo-mark">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="fc-logo-name">
                                Future<span>Connect</span>
                            </div>
                        </Link>

                        <ul className="fc-nav">
                            <li>
                                <a
                                    role="button"
                                    tabIndex={0}
                                    className={isPlatformActive ? "active" : ""}
                                >
                                    Platform <span className="chevron">▾</span>
                                </a>
                                <div className="fc-mega">
                                    {PLATFORM_LINKS.map((l) => (
                                        <Link
                                            key={l.route}
                                            className={`fc-card${isActive(l.route) ? " active" : ""}`}
                                            href={r(l.route)}
                                        >
                                            <p className="fc-card-title">
                                                {l.title}
                                            </p>
                                            <p className="fc-card-desc">
                                                {l.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            <li>
                                <a
                                    role="button"
                                    tabIndex={0}
                                    className={
                                        isSolutionsActive ? "active" : ""
                                    }
                                >
                                    Solutions <span className="chevron">▾</span>
                                </a>
                                <div className="fc-mega">
                                    {SOLUTIONS_LINKS.map((l) => (
                                        <Link
                                            key={l.route}
                                            className={`fc-card${isActive(l.route) ? " active" : ""}`}
                                            href={r(l.route)}
                                        >
                                            <p className="fc-card-title">
                                                {l.title}
                                            </p>
                                            <p className="fc-card-desc">
                                                {l.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            <li>
                                <Link
                                    href={r("user.trending.index")}
                                    className={
                                        isActive("user.trending.index")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Trending
                                </Link>
                            </li>

                            <li>
                                <a
                                    role="button"
                                    tabIndex={0}
                                    className={isCompanyActive ? "active" : ""}
                                >
                                    Company <span className="chevron">▾</span>
                                </a>
                                <div className="fc-mega">
                                    {COMPANY_LINKS.map((l, i) => (
                                        <Link
                                            key={`${l.route}-${i}`}
                                            className={`fc-card${isActive(l.route) ? " active" : ""}`}
                                            href={r(l.route)}
                                        >
                                            <p className="fc-card-title">
                                                {l.title}
                                            </p>
                                            <p className="fc-card-desc">
                                                {l.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            <li>
                                <Link
                                    href={r("pricing")}
                                    className={
                                        isActive("pricing", { exact: true })
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>

                        <div className="fc-actions">
                            <Link
                                href={r("demo.request")}
                                className="fc-btn-ghost fc-btn-request-demo"
                            >
                                Request Demo
                            </Link>

                            <button
                                className="fc-theme-toggle"
                                aria-label="Toggle theme"
                                onClick={toggleTheme}
                            >
                                <IconSun className="icon-sun" />
                                <IconMoon className="icon-moon" />
                            </button>

                            <button
                                className="fc-btn-search"
                                aria-label="Search"
                                onClick={() => setSearchOpen(true)}
                            >
                                <IconSearch />
                            </button>

                            {currentUser ? (
                                <div className="fc-user-menu-wrap">
                                    <button
                                        ref={userMenuBtnRef}
                                        className={`fc-user-btn${userMenuOpen ? " open" : ""}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setUserMenuOpen((o) => !o);
                                        }}
                                        aria-haspopup="true"
                                        aria-expanded={userMenuOpen}
                                    >
                                        <span className="fc-user-avatar">
                                            {currentUser.avatar ? (
                                                <img
                                                    src={currentUser.avatar}
                                                    alt={currentUser.name || "User"}
                                                />
                                            ) : (
                                                getInitials(currentUser.name)
                                            )}
                                        </span>
                                        <span className="fc-user-btn-name">
                                            {currentUser.name}
                                        </span>
                                        <span className="chevron">▾</span>
                                    </button>

                                    <div
                                        className={`fc-user-panel${userMenuOpen ? " open" : ""}`}
                                        ref={userMenuPanelRef}
                                    >
                                        <div className="fc-user-panel-head">
                                            <span className="fc-user-avatar">
                                                {currentUser.avatar ? (
                                                    <img
                                                        src={currentUser.avatar}
                                                        alt={currentUser.name || "User"}
                                                    />
                                                ) : (
                                                    getInitials(currentUser.name)
                                                )}
                                            </span>
                                            <div className="fc-user-panel-head-info">
                                                <div className="fc-upn-name">
                                                    {currentUser.name}
                                                </div>
                                                {currentUser.role && (
                                                    <div className="fc-upn-role">
                                                        {currentUser.role}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <Link
                                            href={dashboardRoute}
                                            className="fc-user-panel-item"
                                            onClick={() =>
                                                setUserMenuOpen(false)
                                            }
                                        >
                                            <IconDashboard />
                                            Dashboard
                                        </Link>

                                        <button
                                            type="button"
                                            className="fc-user-panel-item logout"
                                            onClick={handleLogout}
                                        >
                                            <IconLogout />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="fc-login-wrap">
                                        <button
                                            ref={signInBtnRef}
                                            className="fc-btn-ghost fc-sign-in-desktop"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoginOpen((o) => !o);
                                            }}
                                        >
                                            <IconUser /> Sign In
                                        </button>

                                        <div
                                            className={`fc-login-panel${loginOpen ? " open" : ""}`}
                                            ref={loginPanelRef}
                                        >
                                            <div className="fc-lp-head">
                                                <div className="fc-lp-head-left">
                                                    <h4>Welcome Back</h4>
                                                    <p>
                                                        Sign in to your account
                                                    </p>
                                                </div>
                                                <button
                                                    className="fc-lp-close"
                                                    onClick={() =>
                                                        setLoginOpen(false)
                                                    }
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            <form onSubmit={submitLogin}>
                                                <div className="fc-lp-field">
                                                    <label htmlFor="lp_email">
                                                        Email
                                                    </label>
                                                    <div className="fc-lp-input-wrap">
                                                        <IconMail className="fc-lp-icon" />
                                                        <input
                                                            type="email"
                                                            id="lp_email"
                                                            placeholder="you@example.com"
                                                            className={
                                                                loginForm.errors
                                                                    .email
                                                                    ? "has-error"
                                                                    : ""
                                                            }
                                                            value={
                                                                loginForm.data
                                                                    .email
                                                            }
                                                            onChange={(e) =>
                                                                loginForm.setData(
                                                                    "email",
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    {loginForm.errors.email && (
                                                        <div className="fc-lp-error">
                                                            {
                                                                loginForm.errors
                                                                    .email
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="fc-lp-field">
                                                    <label htmlFor="lp_password">
                                                        Password
                                                    </label>
                                                    <div className="fc-lp-input-wrap">
                                                        <IconLock className="fc-lp-icon" />
                                                        <input
                                                            type="password"
                                                            id="lp_password"
                                                            placeholder="••••••••"
                                                            className={
                                                                loginForm.errors
                                                                    .password
                                                                    ? "has-error"
                                                                    : ""
                                                            }
                                                            value={
                                                                loginForm.data
                                                                    .password
                                                            }
                                                            onChange={(e) =>
                                                                loginForm.setData(
                                                                    "password",
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    {loginForm.errors
                                                        .password && (
                                                        <div className="fc-lp-error">
                                                            {
                                                                loginForm.errors
                                                                    .password
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="fc-lp-row">
                                                    <label className="fc-lp-remember">
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                loginForm.data
                                                                    .remember
                                                            }
                                                            onChange={(e) =>
                                                                loginForm.setData(
                                                                    "remember",
                                                                    e.target
                                                                        .checked,
                                                                )
                                                            }
                                                        />
                                                        <span>Remember me</span>
                                                    </label>
                                                    <Link
                                                        href={r(
                                                            "password.request",
                                                        )}
                                                        className="fc-lp-forgot"
                                                    >
                                                        Forgot password?
                                                    </Link>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="fc-lp-submit"
                                                    disabled={
                                                        loginForm.processing
                                                    }
                                                >
                                                    {loginForm.processing
                                                        ? "Signing in…"
                                                        : "Sign In →"}
                                                </button>
                                            </form>

                                            <div className="fc-lp-footer">
                                                No account yet?{" "}
                                                <Link href={r("register")}>
                                                    Create one →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={r("register")}
                                        className="fc-btn-register-mobile"
                                        aria-label="Register"
                                        title="Register"
                                    >
                                        <IconPlus />
                                    </Link>

                                    <Link
                                        href={r("register")}
                                        className="fc-btn-green fc-register-desktop"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}

                            <button
                                className="fc-hamburger"
                                aria-label="Menu"
                                onClick={() => setDrawerOpen(true)}
                            >
                                <IconMenu />
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            <div className="fc-header-spacer" ref={spacerRef} />

            {/* ════════════════════ MOBILE DRAWER (mirrors desktop mega-menus) ════════════════════ */}
            <div className={`fc-drawer${drawerOpen ? " open" : ""}`}>
                <div
                    className="fc-drawer-bg"
                    onClick={() => setDrawerOpen(false)}
                />
                <div className="fc-drawer-panel">
                    <div className="fc-drawer-logo">
                        <Link
                            href={r("user.home")}
                            className="fc-logo-wrap"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <div className="fc-logo-mark">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="fc-logo-name">
                                Future<span>Connect</span>
                            </div>
                        </Link>
                        <div className="fc-drawer-logo-actions">
                            <button
                                className="fc-drawer-theme-toggle"
                                aria-label="Toggle theme"
                                onClick={toggleTheme}
                            >
                                <IconSun className="icon-sun" />
                                <IconMoon className="icon-moon" />
                            </button>
                            <button
                                className="fc-drawer-search-btn"
                                aria-label="Search"
                                onClick={() => {
                                    setDrawerOpen(false);
                                    setTimeout(() => setSearchOpen(true), 300);
                                }}
                            >
                                <IconSearch />
                            </button>
                            <button
                                className="fc-drawer-close"
                                onClick={() => setDrawerOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    <ul className="fc-drawer-nav">
                        <li>
                            <a
                                className={`${drawerSubOpen.platform ? "sub-open" : ""}${isPlatformActive ? " active" : ""}`}
                                onClick={() => toggleDrawerSub("platform")}
                            >
                                Platform <span className="chevron">▾</span>
                            </a>
                            <ul
                                className={`fc-drawer-sub${drawerSubOpen.platform ? " open" : ""}`}
                            >
                                {PLATFORM_LINKS.map((l) => (
                                    <li key={l.route}>
                                        <Link
                                            href={r(l.route)}
                                            className={
                                                isActive(l.route)
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() => setDrawerOpen(false)}
                                        >
                                            <span className="fc-drawer-sub-title">
                                                {l.title}
                                            </span>
                                            <span className="fc-drawer-sub-desc">
                                                {l.desc}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a
                                className={`${drawerSubOpen.solutions ? "sub-open" : ""}${isSolutionsActive ? " active" : ""}`}
                                onClick={() => toggleDrawerSub("solutions")}
                            >
                                Solutions <span className="chevron">▾</span>
                            </a>
                            <ul
                                className={`fc-drawer-sub${drawerSubOpen.solutions ? " open" : ""}`}
                            >
                                {SOLUTIONS_LINKS.map((l) => (
                                    <li key={l.route}>
                                        <Link
                                            href={r(l.route)}
                                            className={
                                                isActive(l.route)
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() => setDrawerOpen(false)}
                                        >
                                            <span className="fc-drawer-sub-title">
                                                {l.title}
                                            </span>
                                            <span className="fc-drawer-sub-desc">
                                                {l.desc}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link
                                href={r("user.trending.index")}
                                className={
                                    isActive("user.trending.index")
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setDrawerOpen(false)}
                            >
                                Trending
                            </Link>
                        </li>
                        <li>
                            <a
                                className={`${drawerSubOpen.company ? "sub-open" : ""}${isCompanyActive ? " active" : ""}`}
                                onClick={() => toggleDrawerSub("company")}
                            >
                                Company <span className="chevron">▾</span>
                            </a>
                            <ul
                                className={`fc-drawer-sub${drawerSubOpen.company ? " open" : ""}`}
                            >
                                {COMPANY_LINKS.map((l, i) => (
                                    <li key={`${l.route}-${i}`}>
                                        <Link
                                            href={r(l.route)}
                                            className={
                                                isActive(l.route)
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() => setDrawerOpen(false)}
                                        >
                                            <span className="fc-drawer-sub-title">
                                                {l.title}
                                            </span>
                                            <span className="fc-drawer-sub-desc">
                                                {l.desc}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link
                                href={r("pricing")}
                                className={
                                    isActive("pricing", { exact: true })
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setDrawerOpen(false)}
                            >
                                Pricing
                            </Link>
                        </li>
                    </ul>

                    <div className="fc-drawer-ctas">
                        {currentUser ? (
                            <>
                                <div className="fc-drawer-user-card">
                                    <span className="fc-user-avatar">
                                        {currentUser.avatar ? (
                                            <img
                                                src={currentUser.avatar}
                                                alt={currentUser.name || "User"}
                                            />
                                        ) : (
                                            getInitials(currentUser.name)
                                        )}
                                    </span>
                                    <div className="fc-drawer-user-card-info">
                                        <div className="fc-upn-name">
                                            {currentUser.name}
                                        </div>
                                        {currentUser.role && (
                                            <div className="fc-upn-role">
                                                {currentUser.role}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <Link
                                    href={dashboardRoute}
                                    className="fc-btn-green"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    type="button"
                                    className="fc-btn-ghost"
                                    onClick={handleLogout}
                                >
                                    <IconLogout /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="fc-btn-ghost"
                                    onClick={openMobileLogin}
                                >
                                    Sign In
                                </button>
                                <Link
                                    href={r("register")}
                                    className="fc-btn-green"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Register Skills
                                </Link>
                            </>
                        )}
                        <Link
                            href={r("demo.request")}
                            className="fc-btn-ghost"
                            onClick={() => setDrawerOpen(false)}
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </div>

            {/* ════════════════════ SEARCH OVERLAY ════════════════════ */}
            <div className={`fc-search-overlay${searchOpen ? " open" : ""}`}>
                <button
                    className="fc-search-close"
                    onClick={() => setSearchOpen(false)}
                >
                    ✕
                </button>
                <div className="fc-search-box">
                    <p>Search talents, skills, stories &amp; more</p>
                    <form action={r("talent.search")} method="GET">
                        <div className="fc-search-input-wrap">
                            <input
                                ref={searchInputRef}
                                type="text"
                                name="keyword"
                                placeholder="e.g. Photography, Coding, Dance..."
                                required
                            />
                            <button type="submit" className="fc-search-submit">
                                <IconSearch />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ════════════════════ SELLER MODAL (CSRF-safe via useForm) ════════════════════ */}
            <div
                className="modal fade"
                id="applySellerModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div
                        className="modal-content border-0 shadow-lg"
                        style={{
                            background: "var(--h-surface)",
                            border: "1px solid var(--h-border)",
                            borderRadius: 18,
                            overflow: "hidden",
                        }}
                    >
                        <form onSubmit={submitApplySeller}>
                            <div
                                className="modal-header border-0"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#071a10,#0e1618)",
                                    padding: "20px 24px",
                                }}
                            >
                                <h5
                                    className="modal-title fw-bold"
                                    style={{
                                        color: "#fff",
                                        fontFamily: "'Syne',sans-serif",
                                    }}
                                >
                                    Apply to Become a Seller
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                />
                            </div>
                            <div className="modal-body py-4 px-4">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: ".8px",
                                                color: "var(--h-muted)",
                                            }}
                                        >
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className={`fc-form-control mt-1${sellerForm.errors.company_name ? " has-error" : ""}`}
                                            placeholder="e.g. Creative Minds Ltd"
                                            value={sellerForm.data.company_name}
                                            onChange={(e) =>
                                                sellerForm.setData(
                                                    "company_name",
                                                    e.target.value,
                                                )
                                            }
                                            style={{
                                                background: "var(--h-surface2)",
                                                border: "1px solid var(--h-border)",
                                                color: "var(--h-text)",
                                                borderRadius: 10,
                                            }}
                                            required
                                        />
                                        {sellerForm.errors.company_name && (
                                            <div className="fc-form-error">
                                                {sellerForm.errors.company_name}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: ".8px",
                                                color: "var(--h-muted)",
                                            }}
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className={`fc-form-control mt-1${sellerForm.errors.email ? " has-error" : ""}`}
                                            placeholder="example@domain.com"
                                            value={sellerForm.data.email}
                                            onChange={(e) =>
                                                sellerForm.setData(
                                                    "email",
                                                    e.target.value,
                                                )
                                            }
                                            style={{
                                                background: "var(--h-surface2)",
                                                border: "1px solid var(--h-border)",
                                                color: "var(--h-text)",
                                                borderRadius: 10,
                                            }}
                                            required
                                        />
                                        {sellerForm.errors.email && (
                                            <div className="fc-form-error">
                                                {sellerForm.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: ".8px",
                                                color: "var(--h-muted)",
                                            }}
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="fc-form-control mt-1"
                                            placeholder="+250 700 123 456"
                                            value={sellerForm.data.phone}
                                            onChange={(e) =>
                                                sellerForm.setData(
                                                    "phone",
                                                    e.target.value,
                                                )
                                            }
                                            style={{
                                                background: "var(--h-surface2)",
                                                border: "1px solid var(--h-border)",
                                                color: "var(--h-text)",
                                                borderRadius: 10,
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: ".8px",
                                                color: "var(--h-muted)",
                                            }}
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="fc-form-control mt-1"
                                            placeholder="Kigali, Rwanda"
                                            value={sellerForm.data.address}
                                            onChange={(e) =>
                                                sellerForm.setData(
                                                    "address",
                                                    e.target.value,
                                                )
                                            }
                                            style={{
                                                background: "var(--h-surface2)",
                                                border: "1px solid var(--h-border)",
                                                color: "var(--h-text)",
                                                borderRadius: 10,
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            style={{
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: ".8px",
                                                color: "var(--h-muted)",
                                            }}
                                        >
                                            Company Description
                                        </label>
                                        <textarea
                                            rows="3"
                                            className="fc-form-control mt-1"
                                            placeholder="Tell us about your company..."
                                            value={sellerForm.data.description}
                                            onChange={(e) =>
                                                sellerForm.setData(
                                                    "description",
                                                    e.target.value,
                                                )
                                            }
                                            style={{
                                                background: "var(--h-surface2)",
                                                border: "1px solid var(--h-border)",
                                                color: "var(--h-text)",
                                                borderRadius: 10,
                                                resize: "vertical",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="modal-footer border-0 px-4 py-3 d-flex justify-content-between"
                                style={{ background: "var(--h-surface2)" }}
                            >
                                <button
                                    type="button"
                                    className="btn"
                                    data-bs-dismiss="modal"
                                    style={{
                                        background: "transparent",
                                        border: "1px solid var(--h-border)",
                                        color: "var(--h-muted)",
                                        borderRadius: 9,
                                        padding: "9px 22px",
                                        fontFamily: "'DM Sans',sans-serif",
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={sellerForm.processing}
                                    style={{
                                        background: "var(--h-green)",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 9,
                                        padding: "9px 28px",
                                        fontFamily: "'Syne',sans-serif",
                                        fontWeight: 700,
                                        opacity: sellerForm.processing
                                            ? 0.65
                                            : 1,
                                    }}
                                >
                                    {sellerForm.processing
                                        ? "Submitting…"
                                        : "Submit Application"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}