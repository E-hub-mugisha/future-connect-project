import React, { useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";


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
  "talent.dashboard": "/talent/dashboard",
  "seller.dashboard": "/seller/dashboard",
  "user.dashboard": "/dashboard",
  "seller.store": "/seller/apply",
  "user.jobs.store": "/jobs",
};

const DASHBOARD_ROUTE_BY_ROLE = {
  admin: "admin.dashboard",
  agent: "agent.dashboard",
  talent: "talent.dashboard",
  seller: "seller.dashboard",
  user: "user.dashboard",
};

const SCROLL_THRESHOLD = 60;

export default function UserHeader({
  categories = [],
  currentUser = null,
  routes = {},
  csrfToken = "",
  onLoginSubmit,
  onApplySellerSubmit,
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
    return path === "/" ? currentPath === "/" : currentPath.startsWith(path);
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
    // Topbar height animates on scroll toggle; resync once that settles.
    const topbarEl = topbarRef.current;
    if (!topbarEl) return;
    const handle = () => syncSpacerHeight();
    topbarEl.addEventListener("transitionend", handle);
    return () => topbarEl.removeEventListener("transitionend", handle);
  }, []);

  useEffect(() => {
    // scrolled toggled -> layout may change -> resync after animation frame
    const id = requestAnimationFrame(syncSpacerHeight);
    return () => cancelAnimationFrame(id);
  }, [scrolled]);

  // ── Theme toggle ──
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("fc-theme");
    const systemPrefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
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

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // ── Login panel ──
  const [loginOpen, setLoginOpen] = useState(false);
  const loginPanelRef = useRef(null);
  const signInBtnRef = useRef(null);

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
      signInBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 350);
  };

  const dashboardRoute = currentUser
    ? r(DASHBOARD_ROUTE_BY_ROLE[currentUser.role] || "user.dashboard")
    : null;

  const isPlatformActive = [
    "talent.connections-room",
    "user.projects.index",
    "user.jobs.index",
    "user.courses",
    "user.talents",
    "user.products.index",
  ].some((name) => isActive(name));

  const isSolutionsActive = [
    "solutions.students",
    "solutions.ngos",
    "solutions.companies",
    "solutions.professionals",
    "solutions.universities",
    "solutions.investors",
  ].some((name) => isActive(name));

  const isCompanyActive = [
    "user.how-it-works",
    "user.contact",
    "user.success-stories",
    "user.faq",
  ].some((name) => isActive(name));

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
        .fc-topbar .fc-tb-social { display: flex; gap: 12px; }
        .fc-topbar .fc-tb-social a { color: var(--h-muted); font-size: 13px; transition: color 0.2s; }
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
        .fc-nav > li > a:hover, .fc-nav > li:hover > a { color: #fff; background: rgba(255, 255, 255, 0.05); }
        .fc-nav > li > a.active { color: #fff; background: var(--h-green-d); }
        .fc-nav > li > a.active::after {
          content: ''; position: absolute; left: 11px; right: 11px; bottom: 2px; height: 2px;
          background: var(--h-green); border-radius: 2px;
        }
        .fc-mega a.fc-card.active { background: var(--h-green-d); }
        .fc-mega a.fc-card.active .fc-card-title { color: var(--h-green); }
        .fc-drawer-nav > li > a.active, .fc-drawer-sub li a.active { color: #fff; background: var(--h-green-d); }
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
        .fc-mega a.fc-card:hover .fc-card-title { color: #fff; }
        .fc-mega a.fc-card .fc-card-desc { font-size: 11.5px; color: var(--h-muted); margin: 0; line-height: 1.4; }

        .fc-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; justify-self: end; }

        .fc-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
          border: 1px solid var(--h-border); border-radius: 8px; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400; color: var(--h-muted); background: transparent;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-ghost:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-btn-green {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px;
          background: var(--h-green); border: 1px solid var(--h-green); border-radius: 8px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #fff;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-green:hover { background: #00c07a; border-color: #00c07a; transform: translateY(-1px); }

        .fc-btn-search, .fc-theme-toggle {
          width: 38px; height: 38px; border: 1px solid var(--h-border); border-radius: 8px;
          background: transparent; color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 15px;
          flex-shrink: 0; position: relative;
        }
        .fc-btn-search:hover, .fc-theme-toggle:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

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
        .fc-lp-close:hover { color: #fff; border-color: var(--h-border-h); }

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

        .fc-lp-footer {
          text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--h-border);
          font-size: 12.5px; color: var(--h-muted);
        }
        .fc-lp-footer a { color: var(--h-green); font-weight: 500; }
        .fc-lp-footer a:hover { text-decoration: underline; }

        .fc-hamburger {
          display: none; width: 38px; height: 38px; align-items: center; justify-content: center;
          cursor: pointer; border-radius: 8px; border: 1px solid var(--h-border); background: transparent;
          color: var(--h-muted); font-size: 22px; flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .fc-hamburger:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-drawer { display: none; position: fixed; inset: 0; z-index: 1050; pointer-events: none; }
        .fc-drawer.open { pointer-events: auto; }
        .fc-drawer-bg { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.7); opacity: 0; transition: opacity 0.3s; }
        .fc-drawer.open .fc-drawer-bg { opacity: 1; }
        .fc-drawer-panel {
          position: absolute; left: 0; top: 0; bottom: 0; width: 300px; background: var(--h-surface);
          border-right: 1px solid var(--h-border); padding: 24px 20px; transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow-y: auto;
        }
        .fc-drawer.open .fc-drawer-panel { transform: translateX(0); }
        .fc-drawer-logo {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;
          padding-bottom: 16px; border-bottom: 1px solid var(--h-border);
        }
        .fc-drawer-close {
          width: 30px; height: 30px; border-radius: 7px; background: var(--h-surface2);
          border: 1px solid var(--h-border); color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; font-size: 14px; transition: all 0.2s;
        }
        .fc-drawer-close:hover { color: #fff; }
        .fc-drawer-nav { list-style: none; margin: 0; padding: 0; }
        .fc-drawer-nav > li > a {
          display: flex; align-items: center; justify-content: space-between; padding: 10px 12px;
          font-size: 14px; color: var(--h-muted); border-radius: 8px; transition: color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .fc-drawer-nav > li > a:hover { color: #fff; background: var(--h-green-d); }
        .fc-drawer-nav > li > a .chevron { font-size: 10px; opacity: 0.6; transition: transform 0.2s; }
        .fc-drawer-nav > li > a.sub-open .chevron { transform: rotate(180deg); opacity: 1; }
        .fc-drawer-sub { list-style: none; margin: 0; padding: 0 0 4px 12px; display: none; }
        .fc-drawer-sub.open { display: block; }
        .fc-drawer-sub li a { display: block; padding: 7px 12px; font-size: 13px; color: var(--h-muted); border-radius: 7px; transition: color 0.18s, background 0.18s; }
        .fc-drawer-sub li a:hover { color: #fff; background: var(--h-green-d); }
        .fc-drawer-ctas { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--h-border); display: flex; flex-direction: column; gap: 10px; }
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
          position: absolute; top: 24px; right: 24px; width: 36px; height: 36px; border-radius: 9px;
          background: var(--h-surface); border: 1px solid var(--h-border); color: var(--h-muted); cursor: pointer;
          display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;
        }
        .fc-search-close:hover { color: #fff; border-color: var(--h-border-h); }

        @media (max-width: 1150px) {
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
        }
        @media (max-width: 480px) {
          .fc-header-inner { padding: 0 16px; }
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
          --h-bg: #f6faf8; --h-surface: #ffffff; --h-surface2: #eef4f1; --h-green: #00a667;
          --h-green-d: rgba(0, 166, 103, 0.08); --h-green-b: rgba(0, 166, 103, 0.18);
          --h-text: #10201b; --h-muted: #5b7a70; --h-border: rgba(0, 100, 60, 0.12); --h-border-h: rgba(0, 100, 60, 0.3);
        }
        [data-h-theme="light"] .fc-topbar { background: #eef4f1; border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .fc-header.scrolled { background: rgba(246, 250, 248, 0.95); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); }
        [data-h-theme="light"] .fc-logo-mark, [data-h-theme="light"] .fc-btn-green,
        [data-h-theme="light"] .fc-lp-submit, [data-h-theme="light"] .fc-btn-register-mobile { color: #fff; }
        [data-h-theme="light"] .fc-logo-name { color: #10201b; }
        [data-h-theme="light"] .fc-nav > li > a:hover, [data-h-theme="light"] .fc-nav > li:hover > a { color: #10201b; background: rgba(0, 100, 60, 0.06); }
        [data-h-theme="light"] .fc-card-title { color: #10201b; }
        [data-h-theme="light"] .fc-card:hover .fc-card-title { color: #00a667; }
        [data-h-theme="light"] .fc-lp-field input::placeholder, [data-h-theme="light"] .fc-search-input-wrap input::placeholder { color: #a9c2b8; }
        [data-h-theme="light"] .fc-search-overlay { background: rgba(246, 250, 248, 0.92); }

        .fc-theme-toggle .ti-sun { display: none; }
        .fc-theme-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .ti-moon { display: none; }
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
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
            </div>
          </div>
        </div>

        <header className={`fc-header${scrolled ? " scrolled" : ""}`}>
          <div className="fc-header-inner">
            <Link href={r("user.home")} className="fc-logo-wrap">
              <div className="fc-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="fc-logo-name">Future<span>Connect</span></div>
            </Link>

            <ul className="fc-nav">
              <li>
                <a role="button" tabIndex={0} className={isPlatformActive ? "active" : ""}>
                  Platform <span className="chevron">▾</span>
                </a>
                <div className="fc-mega">
                  <Link className={`fc-card${isActive("talent.connections-room") ? " active" : ""}`} href={r("talent.connections-room")}>
                    <p className="fc-card-title">Professional Connections</p>
                    <p className="fc-card-desc">Connect with experts and peers in your field.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.projects.index") ? " active" : ""}`} href={r("user.projects.index")}>
                    <p className="fc-card-title">Project Collaboration</p>
                    <p className="fc-card-desc">Build projects with talented people.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.jobs.index") ? " active" : ""}`} href={r("user.jobs.index")}>
                    <p className="fc-card-title">Job Opportunities</p>
                    <p className="fc-card-desc">Find jobs, internships, and career opportunities.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.courses") ? " active" : ""}`} href={r("user.courses")}>
                    <p className="fc-card-title">Learning</p>
                    <p className="fc-card-desc">Learn, grow, and earn new certifications.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.talents") ? " active" : ""}`} href={r("user.talents")}>
                    <p className="fc-card-title">Skills Hub</p>
                    <p className="fc-card-desc">Showcase your skills and portfolio.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.products.index") ? " active" : ""}`} href={r("user.products.index")}>
                    <p className="fc-card-title">Marketplace</p>
                    <p className="fc-card-desc">Buy and sell technology solutions.</p>
                  </Link>
                </div>
              </li>

              <li>
                <a role="button" tabIndex={0} className={isSolutionsActive ? "active" : ""}>
                  Solutions <span className="chevron">▾</span>
                </a>
                <div className="fc-mega">
                  <Link className={`fc-card${isActive("solutions.students") ? " active" : ""}`} href={r("solutions.students")}>
                    <p className="fc-card-title">For Students</p>
                    <p className="fc-card-desc">Launch your career with confidence.</p>
                  </Link>
                  <Link className={`fc-card${isActive("solutions.ngos") ? " active" : ""}`} href={r("solutions.ngos")}>
                    <p className="fc-card-title">For NGOs</p>
                    <p className="fc-card-desc">Partner with skilled local talent.</p>
                  </Link>
                  <Link className={`fc-card${isActive("solutions.companies") ? " active" : ""}`} href={r("solutions.companies")}>
                    <p className="fc-card-title">For Companies</p>
                    <p className="fc-card-desc">Find verified and sharp skills faster.</p>
                  </Link>
                  <Link className={`fc-card${isActive("solutions.professionals") ? " active" : ""}`} href={r("solutions.professionals")}>
                    <p className="fc-card-title">For Professionals</p>
                    <p className="fc-card-desc">Grow your network and opportunities.</p>
                  </Link>
                  <Link className={`fc-card${isActive("solutions.universities") ? " active" : ""}`} href={r("solutions.universities")}>
                    <p className="fc-card-title">For Universities</p>
                    <p className="fc-card-desc">Empower students beyond graduation.</p>
                  </Link>
                  {/* TODO: no dedicated investors route exists yet — swap once it's built */}
                  <Link className={`fc-card${isActive("solutions.investors") ? " active" : ""}`} href={r("solutions.investors")}>
                    <p className="fc-card-title">For Investors</p>
                    <p className="fc-card-desc">Discover skills worth investing in.</p>
                  </Link>
                </div>
              </li>

              <li>
                <Link href={r("user.trending.index")} className={isActive("user.trending.index") ? "active" : ""}>
                  Trending
                </Link>
              </li>

              <li>
                <a role="button" tabIndex={0} className={isCompanyActive ? "active" : ""}>
                  Company <span className="chevron">▾</span>
                </a>
                <div className="fc-mega">
                  <Link className={`fc-card${isActive("user.how-it-works") ? " active" : ""}`} href={r("user.how-it-works")}>
                    <p className="fc-card-title">How It Works</p>
                    <p className="fc-card-desc">See the platform in action.</p>
                  </Link>
                  <Link className="fc-card" href={r("user.contact")}>
                    <p className="fc-card-title">Contact</p>
                    <p className="fc-card-desc">Get in touch with our team.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.success-stories") ? " active" : ""}`} href={r("user.success-stories")}>
                    <p className="fc-card-title">Customer Stories</p>
                    <p className="fc-card-desc">Real outcomes from real talent.</p>
                  </Link>
                  <Link className="fc-card" href={r("user.contact")}>
                    <p className="fc-card-title">Partnerships</p>
                    <p className="fc-card-desc">Team up with FutureConnect.</p>
                  </Link>
                  <Link className={`fc-card${isActive("user.faq") ? " active" : ""}`} href={r("user.faq")}>
                    <p className="fc-card-title">FAQ</p>
                    <p className="fc-card-desc">Answers to common questions.</p>
                  </Link>
                  <Link className="fc-card" href={r("user.contact")}>
                    <p className="fc-card-title">Help &amp; Support</p>
                    <p className="fc-card-desc">Get help when you need it.</p>
                  </Link>
                </div>
              </li>

              <li>
                <Link href={r("pricing")} className={isActive("pricing", { exact: true }) ? "active" : ""}>
                  Pricing
                </Link>
              </li>
            </ul>

            <div className="fc-actions">
              <Link href={r("demo.request")} className="fc-btn-ghost fc-btn-request-demo">Request Demo</Link>

              <button className="fc-theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
                <i className="ti ti-sun" />
                <i className="ti ti-moon" />
              </button>

              <button className="fc-btn-search" aria-label="Search" onClick={() => setSearchOpen(true)}>
                <i className="ti ti-search" />
              </button>

              {currentUser ? (
                <Link href={dashboardRoute} className="fc-btn-green">
                  <i className="ti ti-layout-dashboard" /> Dashboard
                </Link>
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
                      <i className="ti ti-user" /> Sign In
                    </button>

                    <div
                      className={`fc-login-panel${loginOpen ? " open" : ""}`}
                      ref={loginPanelRef}
                    >
                      <div className="fc-lp-head">
                        <div className="fc-lp-head-left">
                          <h4>Welcome Back</h4>
                          <p>Sign in to your account</p>
                        </div>
                        <button className="fc-lp-close" onClick={() => setLoginOpen(false)}>✕</button>
                      </div>

                      <form action={r("login")} method="POST" onSubmit={onLoginSubmit}>
                        {csrfToken && <input type="hidden" name="_token" value={csrfToken} />}

                        <div className="fc-lp-field">
                          <label htmlFor="lp_email">Email</label>
                          <div className="fc-lp-input-wrap">
                            <i className="ti ti-mail fc-lp-icon" />
                            <input type="email" id="lp_email" name="email" placeholder="you@example.com" required />
                          </div>
                        </div>

                        <div className="fc-lp-field">
                          <label htmlFor="lp_password">Password</label>
                          <div className="fc-lp-input-wrap">
                            <i className="ti ti-lock fc-lp-icon" />
                            <input type="password" id="lp_password" name="password" placeholder="••••••••" required />
                          </div>
                        </div>

                        <div className="fc-lp-row">
                          <label className="fc-lp-remember">
                            <input type="checkbox" name="remember" />
                            <span>Remember me</span>
                          </label>
                          <Link href={r("password.request")} className="fc-lp-forgot">Forgot password?</Link>
                        </div>

                        <button type="submit" className="fc-lp-submit">Sign In →</button>
                      </form>

                      <div className="fc-lp-footer">
                        No account yet? <Link href={r("register")}>Create one →</Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={r("user.register_skills")}
                    className="fc-btn-register-mobile"
                    aria-label="Register Skills"
                    title="Register Skills"
                  >
                    <i className="ti ti-plus" />
                  </Link>

                  <Link href={r("user.register_skills")} className="fc-btn-green fc-register-desktop">
                    Register Skills
                  </Link>
                </>
              )}

              <button className="fc-hamburger" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
                <i className="ti ti-menu-2" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="fc-header-spacer" ref={spacerRef} />

      {/* ════════════════════ MOBILE DRAWER ════════════════════ */}
      <div className={`fc-drawer${drawerOpen ? " open" : ""}`}>
        <div className="fc-drawer-bg" onClick={() => setDrawerOpen(false)} />
        <div className="fc-drawer-panel">
          <div className="fc-drawer-logo">
            <Link href={r("user.home")} className="fc-logo-wrap">
              <div className="fc-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="fc-logo-name">Future<span>Connect</span></div>
            </Link>
            <button className="fc-drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
          </div>

          <ul className="fc-drawer-nav">
            <li>
              <a
                className={`${drawerSubOpen.platform ? "sub-open" : ""}${isPlatformActive ? " active" : ""}`}
                onClick={() => toggleDrawerSub("platform")}
              >
                Platform <span className="chevron">▾</span>
              </a>
              <ul className={`fc-drawer-sub${drawerSubOpen.platform ? " open" : ""}`}>
                <li><Link href={r("talent.connections-room")} className={isActive("talent.connections-room") ? "active" : ""}>Professional Connections</Link></li>
                <li><Link href={r("user.talents")} className={isActive("user.talents") ? "active" : ""}>Project Collaboration</Link></li>
                <li><Link href={r("user.jobs.index")} className={isActive("user.jobs.index") ? "active" : ""}>Job Opportunities</Link></li>
                <li><Link href={r("user.courses")} className={isActive("user.courses") ? "active" : ""}>Learning</Link></li>
                <li><Link href={r("user.register_skills")} className={isActive("user.register_skills") ? "active" : ""}>Skills Hub</Link></li>
                <li><Link href={r("user.products.index")} className={isActive("user.products.index") ? "active" : ""}>Marketplace</Link></li>
              </ul>
            </li>
            <li>
              <a
                className={`${drawerSubOpen.solutions ? "sub-open" : ""}${isSolutionsActive ? " active" : ""}`}
                onClick={() => toggleDrawerSub("solutions")}
              >
                Solutions <span className="chevron">▾</span>
              </a>
              <ul className={`fc-drawer-sub${drawerSubOpen.solutions ? " open" : ""}`}>
                <li><Link href={r("solutions.students")} className={isActive("solutions.students") ? "active" : ""}>For Students</Link></li>
                <li><Link href={r("solutions.ngos")} className={isActive("solutions.ngos") ? "active" : ""}>For NGOs</Link></li>
                <li><Link href={r("solutions.companies")} className={isActive("solutions.companies") ? "active" : ""}>For Companies</Link></li>
                <li><Link href={r("solutions.professionals")} className={isActive("solutions.professionals") ? "active" : ""}>For Professionals</Link></li>
                <li><Link href={r("solutions.universities")} className={isActive("solutions.universities") ? "active" : ""}>For Universities</Link></li>
                <li><Link href={r("solutions.investors")} className={isActive("solutions.investors") ? "active" : ""}>For Investors</Link></li>
              </ul>
            </li>
            <li><Link href={r("user.trending.index")} className={isActive("user.trending.index") ? "active" : ""}>Trending</Link></li>
            <li>
              <a
                className={`${drawerSubOpen.company ? "sub-open" : ""}${isCompanyActive ? " active" : ""}`}
                onClick={() => toggleDrawerSub("company")}
              >
                Company <span className="chevron">▾</span>
              </a>
              <ul className={`fc-drawer-sub${drawerSubOpen.company ? " open" : ""}`}>
                <li><Link href={r("user.how-it-works")} className={isActive("user.how-it-works") ? "active" : ""}>How It Works</Link></li>
                <li><Link href={r("user.contact")}>Contact</Link></li>
                <li><Link href={r("user.success-stories")} className={isActive("user.success-stories") ? "active" : ""}>Customer Stories</Link></li>
                <li><Link href={r("user.contact")}>Partnerships</Link></li>
                <li><Link href={r("user.faq")} className={isActive("user.faq") ? "active" : ""}>FAQ</Link></li>
                <li><Link href={r("user.contact")}>Help &amp; Support</Link></li>
              </ul>
            </li>
            <li><Link href={r("pricing")} className={isActive("pricing", { exact: true }) ? "active" : ""}>Pricing</Link></li>
          </ul>

          <div className="fc-drawer-ctas">
            {currentUser ? (
              <Link href={dashboardRoute} className="fc-btn-green">Dashboard</Link>
            ) : (
              <>
                <button className="fc-btn-ghost" onClick={openMobileLogin}>Sign In</button>
                <Link href={r("user.register_skills")} className="fc-btn-green">Register Skills</Link>
              </>
            )}
            <Link href={r("demo.request")} className="fc-btn-ghost">Request Demo</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════ SEARCH OVERLAY ════════════════════ */}
      <div className={`fc-search-overlay${searchOpen ? " open" : ""}`}>
        <button className="fc-search-close" onClick={() => setSearchOpen(false)}>✕</button>
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
              <button type="submit" className="fc-search-submit"><i className="ti ti-search" /></button>
            </div>
          </form>
        </div>
      </div>

      {/* ════════════════════ SELLER MODAL ════════════════════ */}
      <div className="modal fade" id="applySellerModal" tabIndex="-1" aria-hidden="true">
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
            <form action={r("seller.store")} method="POST" onSubmit={onApplySellerSubmit}>
              {csrfToken && <input type="hidden" name="_token" value={csrfToken} />}
              <div
                className="modal-header border-0"
                style={{ background: "linear-gradient(135deg,#071a10,#0e1618)", padding: "20px 24px" }}
              >
                <h5 className="modal-title fw-bold" style={{ color: "#fff", fontFamily: "'Syne',sans-serif" }}>
                  Apply to Become a Seller
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" />
              </div>
              <div className="modal-body py-4 px-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--h-muted)" }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      className="form-control mt-1"
                      placeholder="e.g. Creative Minds Ltd"
                      style={{ background: "var(--h-surface2)", border: "1px solid var(--h-border)", color: "var(--h-text)", borderRadius: 10 }}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--h-muted)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control mt-1"
                      placeholder="example@domain.com"
                      style={{ background: "var(--h-surface2)", border: "1px solid var(--h-border)", color: "var(--h-text)", borderRadius: 10 }}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--h-muted)" }}>
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control mt-1"
                      placeholder="+250 700 123 456"
                      style={{ background: "var(--h-surface2)", border: "1px solid var(--h-border)", color: "var(--h-text)", borderRadius: 10 }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--h-muted)" }}>
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="form-control mt-1"
                      placeholder="Kigali, Rwanda"
                      style={{ background: "var(--h-surface2)", border: "1px solid var(--h-border)", color: "var(--h-text)", borderRadius: 10 }}
                    />
                  </div>
                  <div className="col-12">
                    <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--h-muted)" }}>
                      Company Description
                    </label>
                    <textarea
                      name="description"
                      rows="3"
                      className="form-control mt-1"
                      placeholder="Tell us about your company..."
                      style={{ background: "var(--h-surface2)", border: "1px solid var(--h-border)", color: "var(--h-text)", borderRadius: 10, resize: "vertical" }}
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
                  style={{ background: "transparent", border: "1px solid var(--h-border)", color: "var(--h-muted)", borderRadius: 9, padding: "9px 22px", fontFamily: "'DM Sans',sans-serif" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{ background: "var(--h-green)", color: "#fff", border: "none", borderRadius: 9, padding: "9px 28px", fontFamily: "'Syne',sans-serif", fontWeight: 700 }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </>
  );
}