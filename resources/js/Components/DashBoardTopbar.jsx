import { useEffect, useMemo, useRef, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";

export default function Topbar({
    notifications = [],
    onToggleSidebar = () => {},
}) {
    const { auth } = usePage().props;

    const user = auth?.user;
    const role = user?.role;

    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [quickOpen, setQuickOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [search, setSearch] = useState("");

    const notifRef = useRef(null);
    const profileRef = useRef(null);
    const quickRef = useRef(null);
    const searchInputRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | User information
    |--------------------------------------------------------------------------
    */

    const displayName = useMemo(() => {
        return (
            user?.name ||
            `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
            "User"
        );
    }, [user]);

    const initials = useMemo(() => {
        return displayName
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
    }, [displayName]);

    const roleLabel =
        role === "admin"
            ? "Administrator"
            : role === "talent"
            ? "Talent"
            : "Member";

    const unreadCount = notifications.filter((n) => !n.read).length;

    /*
    |--------------------------------------------------------------------------
    | Close dropdowns when clicking outside
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                notifRef.current &&
                !notifRef.current.contains(event.target)
            ) {
                setNotifOpen(false);
            }

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }

            if (
                quickRef.current &&
                !quickRef.current.contains(event.target)
            ) {
                setQuickOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Keyboard shortcut
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleKeyboard = (event) => {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {
                event.preventDefault();

                if (window.innerWidth <= 767) {
                    setMobileSearchOpen(true);
                } else {
                    searchInputRef.current?.focus();
                }
            }

            if (event.key === "Escape") {
                setNotifOpen(false);
                setProfileOpen(false);
                setQuickOpen(false);
                setMobileSearchOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    const handleLogout = (event) => {
        event.preventDefault();

        setProfileOpen(false);

        router.post(route("logout"));
    };

    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        if (!search.trim()) return;

        /*
         * Keep this UI-only for now.
         *
         * You can later connect this to:
         * /search?q=
         * or a dedicated global search route.
         */
        console.log("Global search:", search);

        setMobileSearchOpen(false);
    };

    /*
    |--------------------------------------------------------------------------
    | Profile destination
    |--------------------------------------------------------------------------
    */

    const profileHref =
        role === "talent"
            ? route("talent.get.profile")
            : "/profile";

    return (
        <>
            <style>{`
                /* =========================================================
                   TALENT PLATFORM TOPBAR
                ========================================================= */

                .tp-topbar {
                    --tp-primary: #5D89C8;
                    --tp-primary-dark: #4675B7;
                    --tp-primary-soft: rgba(93, 137, 200, .09);
                    --tp-primary-soft-2: rgba(93, 137, 200, .15);

                    --tp-bg: #ffffff;
                    --tp-surface: #ffffff;
                    --tp-page: #f7f9fc;

                    --tp-border: #e7ebf1;
                    --tp-divider: #edf0f4;

                    --tp-text: #172033;
                    --tp-text-secondary: #667085;
                    --tp-text-muted: #98a2b3;

                    position: fixed;
                    top: 0;
                    left: 270px;
                    right: 0;

                    height: 72px;

                    display: flex;
                    align-items: center;

                    padding: 0 24px;

                    background: rgba(255, 255, 255, .96);

                    border-bottom: 1px solid var(--tp-border);

                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);

                    z-index: 1000;

                    font-family:
                        Inter,
                        ui-sans-serif,
                        system-ui,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif;
                }

                /* =========================================================
                   LEFT SIDE
                ========================================================= */

                .tp-topbar-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    min-width: 0;
                    flex: 1;
                }

                .tp-menu-button {
                    width: 40px;
                    height: 40px;

                    display: none;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--tp-border);
                    background: #fff;

                    border-radius: 11px;

                    color: var(--tp-text-secondary);

                    cursor: pointer;

                    transition: all .18s ease;
                }

                .tp-menu-button:hover {
                    color: var(--tp-primary);
                    background: var(--tp-primary-soft);
                    border-color: rgba(93, 137, 200, .25);
                }

                /* =========================================================
                   SEARCH
                ========================================================= */

                .tp-global-search {
                    position: relative;

                    width: min(430px, 42vw);

                    flex-shrink: 1;
                }

                .tp-search-box {
                    height: 42px;
                    width: 100%;

                    display: flex;
                    align-items: center;

                    position: relative;
                }

                .tp-search-icon {
                    position: absolute;
                    left: 14px;

                    width: 17px;
                    height: 17px;

                    color: #98a2b3;

                    pointer-events: none;
                }

                .tp-search-input {
                    width: 100%;
                    height: 42px;

                    padding:
                        0 76px 0 42px;

                    border-radius: 12px;

                    border: 1px solid #e7ebf1;

                    background: #f7f9fc;

                    color: var(--tp-text);

                    outline: none;

                    font-size: 12.5px;
                    font-weight: 500;

                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        box-shadow .18s ease;
                }

                .tp-search-input::placeholder {
                    color: #a1a9b6;
                }

                .tp-search-input:hover {
                    background: #fff;
                    border-color: #dce3ec;
                }

                .tp-search-input:focus {
                    background: #fff;

                    border-color:
                        rgba(93, 137, 200, .45);

                    box-shadow:
                        0 0 0 4px
                        rgba(93, 137, 200, .08);
                }

                .tp-search-shortcut {
                    position: absolute;
                    right: 9px;

                    display: flex;
                    align-items: center;
                    gap: 3px;

                    pointer-events: none;
                }

                .tp-key {
                    min-width: 21px;
                    height: 20px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 0 5px;

                    border: 1px solid #dfe4ea;
                    border-bottom-width: 2px;

                    border-radius: 5px;

                    background: #fff;

                    color: #98a2b3;

                    font-size: 9px;
                    font-weight: 700;
                }

                /* =========================================================
                   RIGHT ACTIONS
                ========================================================= */

                .tp-topbar-actions {
                    display: flex;
                    align-items: center;

                    gap: 5px;

                    margin-left: auto;
                }

                .tp-action-wrap {
                    position: relative;
                }

                .tp-action {
                    position: relative;

                    width: 40px;
                    height: 40px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;
                    border-radius: 11px;

                    background: transparent;

                    color: #667085;

                    cursor: pointer;

                    transition:
                        background .18s ease,
                        color .18s ease,
                        transform .18s ease;
                }

                .tp-action:hover {
                    background: var(--tp-primary-soft);
                    color: var(--tp-primary);

                    transform: translateY(-1px);
                }

                .tp-action svg {
                    width: 18px;
                    height: 18px;
                }

                .tp-notification-badge {
                    position: absolute;

                    top: 5px;
                    right: 4px;

                    min-width: 16px;
                    height: 16px;

                    padding: 0 4px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 999px;

                    background: #ef5b68;

                    color: #fff;

                    border: 2px solid #fff;

                    font-size: 8px;
                    font-weight: 800;
                }

                /* =========================================================
                   QUICK ACTION
                ========================================================= */

                .tp-quick-button {
                    height: 40px;

                    display: flex;
                    align-items: center;
                    gap: 7px;

                    padding: 0 13px;

                    border: 1px solid
                        rgba(93, 137, 200, .20);

                    border-radius: 11px;

                    background:
                        linear-gradient(
                            135deg,
                            rgba(93, 137, 200, .10),
                            rgba(93, 137, 200, .05)
                        );

                    color: var(--tp-primary);

                    font-size: 11.5px;
                    font-weight: 700;

                    cursor: pointer;

                    transition: all .18s ease;
                }

                .tp-quick-button:hover {
                    background:
                        linear-gradient(
                            135deg,
                            rgba(93, 137, 200, .16),
                            rgba(93, 137, 200, .09)
                        );

                    border-color:
                        rgba(93, 137, 200, .30);

                    transform: translateY(-1px);
                }

                .tp-quick-button svg {
                    width: 16px;
                    height: 16px;
                }

                /* =========================================================
                   DIVIDER
                ========================================================= */

                .tp-topbar-divider {
                    width: 1px;
                    height: 30px;

                    background: var(--tp-divider);

                    margin: 0 7px;
                }

                /* =========================================================
                   PROFILE BUTTON
                ========================================================= */

                .tp-user-button {
                    height: 48px;

                    display: flex;
                    align-items: center;

                    gap: 9px;

                    padding: 4px 7px 4px 5px;

                    border: 0;
                    border-radius: 13px;

                    background: transparent;

                    cursor: pointer;

                    transition: background .18s ease;
                }

                .tp-user-button:hover {
                    background: #f7f9fc;
                }

                .tp-user-avatar-wrap {
                    position: relative;
                }

                .tp-user-avatar {
                    width: 37px;
                    height: 37px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background:
                        linear-gradient(
                            135deg,
                            #5D89C8,
                            #83a9d9
                        );

                    color: #fff;

                    font-size: 11px;
                    font-weight: 800;

                    box-shadow:
                        0 5px 13px
                        rgba(93, 137, 200, .18);
                }

                .tp-user-online {
                    position: absolute;

                    right: -1px;
                    bottom: -1px;

                    width: 10px;
                    height: 10px;

                    border-radius: 50%;

                    background: #22c55e;

                    border: 2px solid #fff;
                }

                .tp-user-details {
                    display: flex;
                    flex-direction: column;

                    align-items: flex-start;

                    min-width: 0;

                    max-width: 125px;
                }

                .tp-user-name {
                    max-width: 125px;

                    color: var(--tp-text);

                    font-size: 11.5px;
                    font-weight: 700;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tp-user-role {
                    margin-top: 2px;

                    color: #98a2b3;

                    font-size: 9px;
                    font-weight: 700;

                    text-transform: uppercase;

                    letter-spacing: .7px;
                }

                .tp-user-chevron {
                    color: #98a2b3;

                    margin-left: 1px;
                }

                /* =========================================================
                   DROPDOWN BASE
                ========================================================= */

                .tp-dropdown {
                    position: absolute;

                    top: calc(100% + 11px);
                    right: 0;

                    background: #fff;

                    border: 1px solid var(--tp-border);

                    border-radius: 16px;

                    box-shadow:
                        0 20px 55px
                        rgba(15, 23, 42, .12),
                        0 3px 12px
                        rgba(15, 23, 42, .04);

                    overflow: hidden;

                    opacity: 0;
                    visibility: hidden;

                    transform:
                        translateY(-5px)
                        scale(.98);

                    transform-origin: top right;

                    transition:
                        opacity .16s ease,
                        visibility .16s ease,
                        transform .16s ease;

                    z-index: 1200;
                }

                .tp-dropdown.show {
                    opacity: 1;
                    visibility: visible;

                    transform:
                        translateY(0)
                        scale(1);
                }

                /* =========================================================
                   NOTIFICATIONS
                ========================================================= */

                .tp-notification-dropdown {
                    width: 365px;
                }

                .tp-dropdown-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 16px 17px 13px;

                    border-bottom: 1px solid var(--tp-divider);
                }

                .tp-dropdown-heading {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .tp-dropdown-title {
                    color: var(--tp-text);

                    font-size: 13px;
                    font-weight: 800;
                }

                .tp-dropdown-subtitle {
                    color: #98a2b3;

                    font-size: 9.5px;
                    font-weight: 500;
                }

                .tp-dropdown-action {
                    border: 0;
                    background: transparent;

                    color: var(--tp-primary);

                    font-size: 10px;
                    font-weight: 700;

                    cursor: pointer;
                }

                .tp-dropdown-action:hover {
                    text-decoration: underline;
                }

                .tp-notification-list {
                    max-height: 350px;

                    overflow-y: auto;

                    padding: 7px 0;
                }

                .tp-notification-list::-webkit-scrollbar {
                    width: 4px;
                }

                .tp-notification-list::-webkit-scrollbar-thumb {
                    background: #dce3eb;
                    border-radius: 99px;
                }

                .tp-notification-item {
                    display: flex;

                    gap: 11px;

                    padding: 11px 16px;

                    text-decoration: none;

                    transition: background .15s ease;
                }

                .tp-notification-item:hover {
                    background: #f8fafc;
                }

                .tp-notification-item.unread {
                    background:
                        rgba(93, 137, 200, .045);
                }

                .tp-notification-icon {
                    width: 35px;
                    height: 35px;

                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background:
                        rgba(93, 137, 200, .10);

                    color: var(--tp-primary);
                }

                .tp-notification-icon svg {
                    width: 15px;
                    height: 15px;
                }

                .tp-notification-content {
                    min-width: 0;
                    flex: 1;
                }

                .tp-notification-title {
                    color: var(--tp-text);

                    font-size: 11.5px;
                    font-weight: 700;

                    line-height: 1.4;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tp-notification-text {
                    margin-top: 2px;

                    color: #8b95a5;

                    font-size: 10px;
                    line-height: 1.4;

                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;

                    overflow: hidden;
                }

                .tp-notification-meta {
                    display: flex;
                    align-items: center;

                    gap: 7px;

                    margin-top: 5px;
                }

                .tp-notification-type {
                    padding: 2px 6px;

                    border-radius: 999px;

                    background:
                        rgba(93, 137, 200, .10);

                    color: var(--tp-primary);

                    font-size: 8px;
                    font-weight: 800;
                }

                .tp-notification-time {
                    color: #aab2bf;

                    font-size: 8.5px;
                }

                .tp-unread-dot {
                    width: 6px;
                    height: 6px;

                    margin-top: 5px;

                    border-radius: 50%;

                    background: var(--tp-primary);

                    flex-shrink: 0;
                }

                .tp-empty {
                    padding: 40px 20px;

                    text-align: center;

                    color: #98a2b3;

                    font-size: 11px;
                }

                .tp-notification-footer {
                    padding: 10px 16px;

                    border-top: 1px solid var(--tp-divider);

                    text-align: center;
                }

                /* =========================================================
                   QUICK MENU
                ========================================================= */

                .tp-quick-dropdown {
                    width: 300px;

                    padding: 8px;
                }

                .tp-quick-heading {
                    padding: 10px 9px 8px;

                    color: #98a2b3;

                    font-size: 9px;
                    font-weight: 800;

                    text-transform: uppercase;

                    letter-spacing: 1px;
                }

                .tp-quick-grid {
                    display: grid;

                    grid-template-columns: 1fr 1fr;

                    gap: 6px;
                }

                .tp-quick-item {
                    display: flex;
                    align-items: center;

                    gap: 9px;

                    min-height: 57px;

                    padding: 8px;

                    border-radius: 11px;

                    color: var(--tp-text);

                    text-decoration: none;

                    transition: all .16s ease;
                }

                .tp-quick-item:hover {
                    background: var(--tp-primary-soft);

                    color: var(--tp-primary);
                }

                .tp-quick-icon {
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    background: #f4f7fb;

                    color: var(--tp-primary);

                    flex-shrink: 0;
                }

                .tp-quick-icon svg {
                    width: 15px;
                    height: 15px;
                }

                .tp-quick-item-text {
                    display: flex;
                    flex-direction: column;

                    min-width: 0;
                }

                .tp-quick-item-title {
                    font-size: 10.5px;
                    font-weight: 700;
                }

                .tp-quick-item-desc {
                    margin-top: 2px;

                    color: #98a2b3;

                    font-size: 8.5px;
                }

                /* =========================================================
                   PROFILE MENU
                ========================================================= */

                .tp-profile-dropdown {
                    width: 285px;
                }

                .tp-profile-header {
                    padding: 17px;

                    background:
                        linear-gradient(
                            135deg,
                            #f7faff,
                            #f4f7fb
                        );

                    border-bottom: 1px solid var(--tp-divider);
                }

                .tp-profile-main {
                    display: flex;
                    align-items: center;

                    gap: 11px;
                }

                .tp-profile-large-avatar {
                    width: 43px;
                    height: 43px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 13px;

                    background:
                        linear-gradient(
                            135deg,
                            #5D89C8,
                            #82a7d8
                        );

                    color: #fff;

                    font-size: 12px;
                    font-weight: 800;
                }

                .tp-profile-header-info {
                    min-width: 0;
                    flex: 1;
                }

                .tp-profile-header-name {
                    color: var(--tp-text);

                    font-size: 12px;
                    font-weight: 800;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tp-profile-header-email {
                    margin-top: 3px;

                    color: #98a2b3;

                    font-size: 9.5px;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .tp-profile-strength {
                    margin-top: 13px;
                }

                .tp-profile-strength-top {
                    display: flex;
                    justify-content: space-between;

                    margin-bottom: 6px;

                    font-size: 9px;
                    font-weight: 700;
                }

                .tp-profile-strength-label {
                    color: #667085;
                }

                .tp-profile-strength-value {
                    color: var(--tp-primary);
                }

                .tp-profile-progress {
                    height: 5px;

                    overflow: hidden;

                    background: #e4eaf1;

                    border-radius: 999px;
                }

                .tp-profile-progress-bar {
                    width: 75%;
                    height: 100%;

                    background:
                        linear-gradient(
                            90deg,
                            #5D89C8,
                            #83a8d8
                        );

                    border-radius: inherit;
                }

                .tp-profile-links {
                    padding: 7px 0;
                }

                .tp-profile-link {
                    width: 100%;

                    min-height: 39px;

                    display: flex;
                    align-items: center;

                    gap: 10px;

                    padding: 0 17px;

                    border: 0;
                    background: transparent;

                    color: #667085;

                    text-decoration: none;

                    font-size: 11px;
                    font-weight: 600;

                    cursor: pointer;

                    text-align: left;

                    transition: all .15s ease;
                }

                .tp-profile-link:hover {
                    background: #f7f9fc;

                    color: var(--tp-primary);
                }

                .tp-profile-link svg {
                    width: 16px;
                    height: 16px;

                    flex-shrink: 0;
                }

                .tp-profile-link-danger:hover {
                    background: #fff4f4;

                    color: #dc4d4d;
                }

                .tp-profile-divider {
                    height: 1px;

                    margin: 5px 0;

                    background: var(--tp-divider);
                }

                /* =========================================================
                   MOBILE SEARCH
                ========================================================= */

                .tp-mobile-search {
                    position: fixed;

                    inset: 0;

                    z-index: 2000;

                    background: rgba(255,255,255,.98);

                    backdrop-filter: blur(15px);

                    padding: 16px;
                }

                .tp-mobile-search-header {
                    display: flex;
                    align-items: center;

                    gap: 10px;
                }

                .tp-mobile-search-box {
                    position: relative;

                    flex: 1;
                }

                .tp-mobile-search-input {
                    width: 100%;
                    height: 46px;

                    border: 1px solid #dfe5ed;

                    border-radius: 12px;

                    background: #f7f9fc;

                    padding: 0 14px 0 42px;

                    outline: none;

                    color: var(--tp-text);

                    font-size: 13px;
                }

                .tp-mobile-search-input:focus {
                    background: #fff;

                    border-color:
                        rgba(93, 137, 200, .4);

                    box-shadow:
                        0 0 0 4px
                        rgba(93, 137, 200, .08);
                }

                .tp-mobile-search-icon {
                    position: absolute;

                    left: 14px;
                    top: 50%;

                    transform: translateY(-50%);

                    width: 17px;
                    height: 17px;

                    color: #98a2b3;
                }

                .tp-mobile-search-cancel {
                    height: 40px;

                    padding: 0 5px;

                    border: 0;
                    background: transparent;

                    color: var(--tp-primary);

                    font-size: 11px;
                    font-weight: 700;

                    cursor: pointer;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 1199px) {
                    .tp-topbar {
                        left: 270px;

                        padding: 0 18px;
                    }

                    .tp-global-search {
                        width: min(350px, 38vw);
                    }

                    .tp-user-details {
                        display: none;
                    }

                    .tp-user-button {
                        padding-right: 5px;
                    }
                }

                @media (max-width: 991.98px) {
                    .tp-topbar {
                        left: 0;

                        height: 68px;

                        padding:
                            0 16px;
                    }

                    .tp-menu-button {
                        display: flex;
                    }

                    .tp-global-search {
                        display: none;
                    }

                    .tp-topbar-left {
                        flex: 1;
                    }

                    .tp-quick-button {
                        display: none;
                    }

                    .tp-topbar-divider {
                        margin: 0 3px;
                    }
                }

                @media (max-width: 767px) {
                    .tp-topbar {
                        padding: 0 11px;
                    }

                    .tp-mobile-search-button {
                        display: flex !important;
                    }

                    .tp-topbar-actions {
                        gap: 2px;
                    }

                    .tp-action {
                        width: 38px;
                        height: 38px;
                    }

                    .tp-user-avatar {
                        width: 36px;
                        height: 36px;
                    }

                    .tp-notification-dropdown {
                        position: fixed;

                        top: 64px;
                        left: 10px;
                        right: 10px;

                        width: auto;
                    }

                    .tp-profile-dropdown {
                        right: 4px;
                        width: min(285px, calc(100vw - 20px));
                    }
                }

                @media (max-width: 480px) {
                    .tp-topbar {
                        height: 64px;
                    }

                    .tp-menu-button {
                        width: 37px;
                        height: 37px;
                    }

                    .tp-mobile-search-button {
                        width: 37px !important;
                        height: 37px !important;
                    }

                    .tp-user-button {
                        padding: 4px 2px;
                    }

                    .tp-user-avatar {
                        width: 35px;
                        height: 35px;
                    }

                    .tp-topbar-divider {
                        display: none;
                    }
                }

                @media (min-width: 768px) {
                    .tp-mobile-search-button {
                        display: none !important;
                    }
                }
            `}</style>

            {/* =========================================================
               HEADER
            ========================================================= */}

            <header className="tp-topbar">
                {/* LEFT */}
                <div className="tp-topbar-left">
                    {/* MOBILE SIDEBAR */}
                    <button
                        type="button"
                        className="tp-menu-button"
                        onClick={onToggleSidebar}
                        aria-label="Open navigation"
                    >
                        <MenuIcon />
                    </button>

                    {/* MOBILE SEARCH */}
                    <button
                        type="button"
                        className="tp-action tp-mobile-search-button"
                        onClick={() =>
                            setMobileSearchOpen(true)
                        }
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </button>

                    {/* DESKTOP SEARCH */}
                    <form
                        className="tp-global-search"
                        onSubmit={handleSearchSubmit}
                    >
                        <div className="tp-search-box">
                            <SearchIcon className="tp-search-icon" />

                            <input
                                ref={searchInputRef}
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="tp-search-input"
                                placeholder="Search talents, jobs, courses..."
                                aria-label="Global search"
                            />

                            <div className="tp-search-shortcut">
                                <span className="tp-key">
                                    Ctrl
                                </span>

                                <span className="tp-key">
                                    K
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                {/* RIGHT */}
                <div className="tp-topbar-actions">
                    {/* QUICK ACTIONS */}
                    {role === "talent" && (
                        <div
                            className="tp-action-wrap"
                            ref={quickRef}
                        >
                            <button
                                type="button"
                                className="tp-quick-button"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    setNotifOpen(false);
                                    setProfileOpen(false);
                                    setQuickOpen(
                                        (value) => !value
                                    );
                                }}
                            >
                                <PlusIcon />
                                <span>Quick action</span>
                            </button>

                            <div
                                className={`tp-dropdown tp-quick-dropdown ${
                                    quickOpen ? "show" : ""
                                }`}
                            >
                                <div className="tp-quick-heading">
                                    Quick actions
                                </div>

                                <div className="tp-quick-grid">
                                    <Link
                                        href={profileHref}
                                        className="tp-quick-item"
                                        onClick={() =>
                                            setQuickOpen(false)
                                        }
                                    >
                                        <span className="tp-quick-icon">
                                            <ProfileIcon />
                                        </span>

                                        <span className="tp-quick-item-text">
                                            <span className="tp-quick-item-title">
                                                Update profile
                                            </span>

                                            <span className="tp-quick-item-desc">
                                                Improve your profile
                                            </span>
                                        </span>
                                    </Link>

                                    <Link
                                        href="/talent/jobs"
                                        className="tp-quick-item"
                                        onClick={() =>
                                            setQuickOpen(false)
                                        }
                                    >
                                        <span className="tp-quick-icon">
                                            <BriefcaseIcon />
                                        </span>

                                        <span className="tp-quick-item-text">
                                            <span className="tp-quick-item-title">
                                                Find opportunities
                                            </span>

                                            <span className="tp-quick-item-desc">
                                                Explore new jobs
                                            </span>
                                        </span>
                                    </Link>

                                    <Link
                                        href="/talent/projects"
                                        className="tp-quick-item"
                                        onClick={() =>
                                            setQuickOpen(false)
                                        }
                                    >
                                        <span className="tp-quick-icon">
                                            <FolderIcon />
                                        </span>

                                        <span className="tp-quick-item-text">
                                            <span className="tp-quick-item-title">
                                                Projects
                                            </span>

                                            <span className="tp-quick-item-desc">
                                                Manage projects
                                            </span>
                                        </span>
                                    </Link>

                                    <Link
                                        href="/talent/wallet"
                                        className="tp-quick-item"
                                        onClick={() =>
                                            setQuickOpen(false)
                                        }
                                    >
                                        <span className="tp-quick-icon">
                                            <WalletIcon />
                                        </span>

                                        <span className="tp-quick-item-text">
                                            <span className="tp-quick-item-title">
                                                Wallet
                                            </span>

                                            <span className="tp-quick-item-desc">
                                                Manage your balance
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* MESSAGES */}
                    <button
                        type="button"
                        className="tp-action"
                        aria-label="Messages"
                        title="Messages"
                    >
                        <MessageIcon />
                    </button>

                    {/* NOTIFICATIONS */}
                    <div
                        className="tp-action-wrap"
                        ref={notifRef}
                    >
                        <button
                            type="button"
                            className="tp-action"
                            aria-label="Notifications"
                            onClick={(e) => {
                                e.stopPropagation();

                                setProfileOpen(false);
                                setQuickOpen(false);

                                setNotifOpen(
                                    (value) => !value
                                );
                            }}
                        >
                            <BellIcon />

                            {unreadCount > 0 && (
                                <span className="tp-notification-badge">
                                    {unreadCount > 9
                                        ? "9+"
                                        : unreadCount}
                                </span>
                            )}
                        </button>

                        <div
                            className={`tp-dropdown tp-notification-dropdown ${
                                notifOpen ? "show" : ""
                            }`}
                        >
                            <div className="tp-dropdown-header">
                                <div className="tp-dropdown-heading">
                                    <span className="tp-dropdown-title">
                                        Notifications
                                    </span>

                                    <span className="tp-dropdown-subtitle">
                                        Stay updated with your activity
                                    </span>
                                </div>

                                {unreadCount > 0 && (
                                    <button
                                        type="button"
                                        className="tp-dropdown-action"
                                    >
                                        Mark all read
                                    </button>
                                )}
                            </div>

                            <div className="tp-notification-list">
                                {notifications.length === 0 ? (
                                    <div className="tp-empty">
                                        <BellIcon />

                                        <div
                                            style={{
                                                marginTop: 10,
                                            }}
                                        >
                                            You're all caught up
                                        </div>
                                    </div>
                                ) : (
                                    notifications.map(
                                        (notification) => (
                                            <div
                                                className={`tp-notification-item ${
                                                    !notification.read
                                                        ? "unread"
                                                        : ""
                                                }`}
                                                key={
                                                    notification.id
                                                }
                                            >
                                                <div className="tp-notification-icon">
                                                    <NotificationIcon
                                                        type={
                                                            notification.type
                                                        }
                                                    />
                                                </div>

                                                <div className="tp-notification-content">
                                                    <div className="tp-notification-title">
                                                        {
                                                            notification.title
                                                        }
                                                    </div>

                                                    {notification.message && (
                                                        <div className="tp-notification-text">
                                                            {
                                                                notification.message
                                                            }
                                                        </div>
                                                    )}

                                                    <div className="tp-notification-meta">
                                                        {notification.type && (
                                                            <span className="tp-notification-type">
                                                                {
                                                                    notification.type
                                                                }
                                                            </span>
                                                        )}

                                                        <span className="tp-notification-time">
                                                            {
                                                                notification.time
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                {!notification.read && (
                                                    <span className="tp-unread-dot" />
                                                )}
                                            </div>
                                        )
                                    )
                                )}
                            </div>

                            <div className="tp-notification-footer">
                                <Link
                                    href="/notifications"
                                    className="tp-dropdown-action"
                                >
                                    View all notifications
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tp-topbar-divider" />

                    {/* PROFILE */}
                    <div
                        className="tp-action-wrap"
                        ref={profileRef}
                    >
                        <button
                            type="button"
                            className="tp-user-button"
                            onClick={(e) => {
                                e.stopPropagation();

                                setNotifOpen(false);
                                setQuickOpen(false);

                                setProfileOpen(
                                    (value) => !value
                                );
                            }}
                            aria-label="Account menu"
                        >
                            <span className="tp-user-avatar-wrap">
                                <span className="tp-user-avatar">
                                    {initials}
                                </span>

                                <span className="tp-user-online" />
                            </span>

                            <span className="tp-user-details">
                                <span className="tp-user-name">
                                    {displayName}
                                </span>

                                <span className="tp-user-role">
                                    {roleLabel}
                                </span>
                            </span>

                            <ChevronDownIcon className="tp-user-chevron" />
                        </button>

                        <div
                            className={`tp-dropdown tp-profile-dropdown ${
                                profileOpen ? "show" : ""
                            }`}
                        >
                            {/* PROFILE HEADER */}
                            <div className="tp-profile-header">
                                <div className="tp-profile-main">
                                    <div className="tp-profile-large-avatar">
                                        {initials}
                                    </div>

                                    <div className="tp-profile-header-info">
                                        <div className="tp-profile-header-name">
                                            {displayName}
                                        </div>

                                        <div className="tp-profile-header-email">
                                            {user?.email || ""}
                                        </div>
                                    </div>
                                </div>

                                {role === "talent" && (
                                    <div className="tp-profile-strength">
                                        <div className="tp-profile-strength-top">
                                            <span className="tp-profile-strength-label">
                                                Profile strength
                                            </span>

                                            <span className="tp-profile-strength-value">
                                                75%
                                            </span>
                                        </div>

                                        <div className="tp-profile-progress">
                                            <div className="tp-profile-progress-bar" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* LINKS */}
                            <div className="tp-profile-links">
                                <Link
                                    href={profileHref}
                                    className="tp-profile-link"
                                    onClick={() =>
                                        setProfileOpen(false)
                                    }
                                >
                                    <ProfileIcon />

                                    <span>
                                        My Profile
                                    </span>
                                </Link>

                                {role === "talent" && (
                                    <>
                                        <Link
                                            href="/talent/wallet"
                                            className="tp-profile-link"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                        >
                                            <WalletIcon />

                                            <span>
                                                Wallet & Balance
                                            </span>
                                        </Link>

                                        <Link
                                            href="/talent/settings"
                                            className="tp-profile-link"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                        >
                                            <SettingsIcon />

                                            <span>
                                                Account Settings
                                            </span>
                                        </Link>
                                    </>
                                )}

                                {role === "admin" && (
                                    <Link
                                        href="/admin/settings"
                                        className="tp-profile-link"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                    >
                                        <SettingsIcon />

                                        <span>
                                            Platform Settings
                                        </span>
                                    </Link>
                                )}

                                <div className="tp-profile-divider" />

                                <button
                                    type="button"
                                    className="tp-profile-link tp-profile-link-danger"
                                    onClick={handleLogout}
                                >
                                    <LogoutIcon />

                                    <span>
                                        Sign out
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* =========================================================
               MOBILE SEARCH OVERLAY
            ========================================================= */}

            {mobileSearchOpen && (
                <div className="tp-mobile-search">
                    <form
                        className="tp-mobile-search-header"
                        onSubmit={handleSearchSubmit}
                    >
                        <div className="tp-mobile-search-box">
                            <SearchIcon className="tp-mobile-search-icon" />

                            <input
                                autoFocus
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="tp-mobile-search-input"
                                placeholder="Search talents, jobs, courses..."
                            />
                        </div>

                        <button
                            type="button"
                            className="tp-mobile-search-cancel"
                            onClick={() =>
                                setMobileSearchOpen(false)
                            }
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

/* =========================================================
   ICONS
========================================================= */

function Icon({
    children,
    className = "",
    size = 18,
}) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
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
}

function SearchIcon({ className = "" }) {
    return (
        <Icon className={className}>
            <circle cx="11" cy="11" r="7.5" />
            <path d="m20 20-3.7-3.7" />
        </Icon>
    );
}

function MenuIcon() {
    return (
        <Icon>
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
        </Icon>
    );
}

function BellIcon() {
    return (
        <Icon>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
        </Icon>
    );
}

function MessageIcon() {
    return (
        <Icon>
            <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.5-.8L4 20l1.4-3.4A7.3 7.3 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7Z" />
            <path d="M8 12h.01M12 12h.01M16 12h.01" />
        </Icon>
    );
}

function PlusIcon() {
    return (
        <Icon size={16}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </Icon>
    );
}

function ChevronDownIcon({ className = "" }) {
    return (
        <Icon className={className} size={14}>
            <polyline points="6 9 12 15 18 9" />
        </Icon>
    );
}

function ProfileIcon() {
    return (
        <Icon>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.2-7 8-7s8 3 8 7" />
        </Icon>
    );
}

function BriefcaseIcon() {
    return (
        <Icon>
            <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
            />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
            <path d="M10 12v2h4v-2" />
        </Icon>
    );
}

function FolderIcon() {
    return (
        <Icon>
            <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
        </Icon>
    );
}

function WalletIcon() {
    return (
        <Icon>
            <path d="M4 6a3 3 0 0 1 3-3h12v18H6a3 3 0 0 1-3-3V6Z" />
            <path d="M3 7h16" />
            <path d="M16 13h3" />
            <circle cx="16" cy="13" r=".5" />
        </Icon>
    );
}

function SettingsIcon() {
    return (
        <Icon>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5v.2h-4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1-2.8-2.8.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3v-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1 2.8-2.8.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3h4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1 2.8 2.8-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 .5.8" />
        </Icon>
    );
}

function LogoutIcon() {
    return (
        <Icon>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
        </Icon>
    );
}

function NotificationIcon({ type }) {
    const value = String(type || "").toLowerCase();

    if (
        value.includes("job") ||
        value.includes("opportunity")
    ) {
        return <BriefcaseIcon />;
    }

    if (
        value.includes("connection") ||
        value.includes("network")
    ) {
        return <ProfileIcon />;
    }

    if (
        value.includes("message") ||
        value.includes("chat")
    ) {
        return <MessageIcon />;
    }

    return <BellIcon />;
}