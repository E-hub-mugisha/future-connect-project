import { useState, useEffect, useCallback, useMemo } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

const THEME_KEY = "fc-theme";

function initTheme() {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)",
    ).matches;
    return prefersLight ? "light" : "dark";
}

const STRENGTH_LABELS = [
    "Use 8+ chars, numbers & symbols",
    "Weak — keep going",
    "Fair — add numbers or symbols",
    "Good — add a special character",
    "Strong password ✓",
];
const STRENGTH_CLASSES = ["", "weak", "fair", "good", "strong"];

function scorePassword(val) {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    return score;
}

const ROLES = [
    {
        key: "talent",
        title: "Talent",
        subtitle: "Showcase your skills & get discovered",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2L12 2z" />
            </svg>
        ),
    },
    {
        key: "seller",
        title: "Seller",
        subtitle: "List products or services & reach buyers",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 3h18l-1.5 9h-15L3 3z" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="17" cy="20" r="1.5" />
            </svg>
        ),
    },
    {
        key: "user",
        title: "Regular User",
        subtitle: "Browse, connect, and explore the platform",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

export default function Register({ categories = [] }) {
    const [theme, setTheme] = useState(initTheme);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [step, setStep] = useState("role"); // 'role' | 'form'

    const { data, setData, post, processing, errors, reset } = useForm({
        role: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        terms: false,

        // talent-only
        talent_address: "",
        talent_language: "",
        category_id: "",
        talent_description: "",

        // seller-only
        company_name: "",
        seller_address: "",
        seller_description: "",
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const fcToggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    const strength = useMemo(
        () => scorePassword(data.password),
        [data.password],
    );
    const strengthLabel =
        data.password.length === 0
            ? STRENGTH_LABELS[0]
            : STRENGTH_LABELS[strength];

    const selectRole = (roleKey) => {
        setData("role", roleKey);
        setStep("form");
    };

    const backToRoles = () => setStep("role");

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const selectedRole = ROLES.find((r) => r.key === data.role);

    return (
        <>
            <Head title="Register | Future Connect" />

            <div className="page">
                <div className="orb orb-1" />
                <div className="orb orb-2" />

                <div className="top-nav">
                    <button
                        type="button"
                        className="theme-btn"
                        onClick={fcToggleTheme}
                        aria-label="Toggle light / dark theme"
                        title={
                            theme === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        {theme === "dark" ? (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line
                                    x1="18.36"
                                    y1="18.36"
                                    x2="19.78"
                                    y2="19.78"
                                />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line
                                    x1="4.22"
                                    y1="19.78"
                                    x2="5.64"
                                    y2="18.36"
                                />
                                <line
                                    x1="18.36"
                                    y1="5.64"
                                    x2="19.78"
                                    y2="4.22"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="back-nav">
                    {step === "form" ? (
                        <button
                            type="button"
                            className="back-btn"
                            onClick={backToRoles}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            <span>Change role</span>
                        </button>
                    ) : (
                        <Link href="/" className="back-btn">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            <span>Back</span>
                        </Link>
                    )}
                </div>

                <div className="card">
                    {/* ── Left Branding Panel ── */}
                    <div className="panel-left">
                        <div className="dots">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <span key={i} />
                            ))}
                        </div>

                        <Link
                            href={route("user.home")}
                            className="fc-logo-lockup"
                        >
                            <div className="fc-logo-mark">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="fc-logo-wordmark">
                                    Future Connect
                                </p>
                                <p className="fc-logo-tagline">
                                    Empowering Stories. Real Impact.
                                </p>
                            </div>
                        </Link>

                        <div>
                            <div className="pill">Join 8K+ Professionals</div>
                            <div className="tagline">
                                <h2>
                                    Start your
                                    <br />
                                    <em>journey</em>
                                    <br />
                                    today.
                                </h2>
                                <p>
                                    Create your free account and get discovered
                                    by verified employers across Rwanda.
                                </p>
                            </div>
                        </div>

                        <div className="features">
                            <div className="feat">
                                <div className="feat-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <div className="feat-text">
                                    <strong>Verified Profiles</strong>
                                    <span>Stand out to employers</span>
                                </div>
                            </div>
                            <div className="feat">
                                <div className="feat-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div className="feat-text">
                                    <strong>Rwanda-Wide</strong>
                                    <span>Opportunities nationwide</span>
                                </div>
                            </div>
                            <div className="feat">
                                <div className="feat-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="feat-text">
                                    <strong>Secure Platform</strong>
                                    <span>Your data, protected</span>
                                </div>
                            </div>
                            <div className="feat">
                                <div className="feat-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        <polyline points="17 6 23 6 23 12" />
                                    </svg>
                                </div>
                                <div className="feat-text">
                                    <strong>Career Growth</strong>
                                    <span>Courses &amp; mentorship</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Panel ── */}
                    <div className="panel-right">
                        {step === "role" ? (
                            <>
                                <div className="form-head">
                                    <div className="eyebrow">
                                        Create Account
                                    </div>
                                    <h1>How will you use Future Connect?</h1>
                                    <p>
                                        Pick the option that fits you best — you
                                        can always update this later.
                                    </p>
                                </div>

                                <div className="role-grid">
                                    {ROLES.map((r) => (
                                        <button
                                            type="button"
                                            key={r.key}
                                            className="role-card"
                                            onClick={() => selectRole(r.key)}
                                        >
                                            <div className="role-icon">
                                                {r.icon}
                                            </div>
                                            <div className="role-text">
                                                <strong>{r.title}</strong>
                                                <span>{r.subtitle}</span>
                                            </div>
                                            <svg
                                                className="role-arrow"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line
                                                    x1="5"
                                                    y1="12"
                                                    x2="19"
                                                    y2="12"
                                                />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>

                                <div className="role-note">
                                    Not a talent or seller? Apart from those two
                                    options, everyone else registers as a{" "}
                                    <strong>Regular User</strong> — you can
                                    browse, connect, and use the platform
                                    freely.
                                </div>

                                <div className="login-row">
                                    Already have an account?{" "}
                                    <Link href={route("login")}>Sign In</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="form-head">
                                    <div className="eyebrow">
                                        {selectedRole?.title} Account
                                    </div>
                                    <h1>
                                        {data.role === "talent" &&
                                            "Set up your Talent profile"}
                                        {data.role === "seller" &&
                                            "Set up your Seller account"}
                                        {data.role === "user" &&
                                            "Create your account"}
                                    </h1>
                                    <p>
                                        Fill in your details to get started for
                                        free
                                    </p>
                                </div>

                                <form onSubmit={submit}>
                                    <div className="fields-grid">
                                        {/* Name */}
                                        <div className="field field-full">
                                            <label htmlFor="name">
                                                Your Name
                                            </label>
                                            <div className="input-wrap">
                                                <svg
                                                    className="ico"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle
                                                        cx="12"
                                                        cy="7"
                                                        r="4"
                                                    />
                                                </svg>
                                                <input
                                                    id="name"
                                                    className={`fc-input ${errors.name ? "is-invalid" : ""}`}
                                                    type="text"
                                                    name="name"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="Jean Mugisha"
                                                    required
                                                    autoComplete="given-name"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="field-error">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="field">
                                            <label htmlFor="email">
                                                Email Address
                                            </label>
                                            <div className="input-wrap">
                                                <svg
                                                    className="ico"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                                <input
                                                    id="email"
                                                    className={`fc-input ${errors.email ? "is-invalid" : ""}`}
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="you@example.com"
                                                    required
                                                    autoComplete="email"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="field-error">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div className="field">
                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <div className="input-wrap">
                                                <svg
                                                    className="ico"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                                <input
                                                    id="phone"
                                                    className={`fc-input ${errors.phone ? "is-invalid" : ""}`}
                                                    type="tel"
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={(e) =>
                                                        setData(
                                                            "phone",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="+250 7XX XXX XXX"
                                                    autoComplete="tel"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <div className="field-error">
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>

                                        {/* Password */}
                                        <div className="field">
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <div className="input-wrap">
                                                <svg
                                                    className="ico"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="11"
                                                        width="18"
                                                        height="11"
                                                        rx="2"
                                                        ry="2"
                                                    />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                                <input
                                                    id="password"
                                                    className={`fc-input ${errors.password ? "is-invalid" : ""}`}
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    name="password"
                                                    value={data.password}
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="••••••••"
                                                    required
                                                    autoComplete="new-password"
                                                />
                                                <button
                                                    type="button"
                                                    className="eye-btn"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            (s) => !s,
                                                        )
                                                    }
                                                    aria-label="Toggle password"
                                                >
                                                    {showPassword ? (
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                            <circle
                                                                cx="12"
                                                                cy="12"
                                                                r="3"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                            <line
                                                                x1="1"
                                                                y1="1"
                                                                x2="23"
                                                                y2="23"
                                                            />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>

                                            <div className="strength-bar">
                                                {[0, 1, 2, 3].map((i) => (
                                                    <span
                                                        key={i}
                                                        className={`strength-seg ${i < strength ? STRENGTH_CLASSES[strength] : ""}`}
                                                    />
                                                ))}
                                            </div>
                                            <div
                                                className="strength-label"
                                                style={{
                                                    color:
                                                        data.password.length ===
                                                        0
                                                            ? "var(--muted)"
                                                            : [
                                                                  "",
                                                                  "#e07070",
                                                                  "#e0a045",
                                                                  "#5ab4e0",
                                                                  "var(--green)",
                                                              ][strength],
                                                }}
                                            >
                                                {strengthLabel}
                                            </div>
                                            {errors.password && (
                                                <div className="field-error">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="field">
                                            <label htmlFor="password_confirmation">
                                                Confirm Password
                                            </label>
                                            <div className="input-wrap">
                                                <svg
                                                    className="ico"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="11"
                                                        width="18"
                                                        height="11"
                                                        rx="2"
                                                        ry="2"
                                                    />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                                <input
                                                    id="password_confirmation"
                                                    className="fc-input"
                                                    type={
                                                        showConfirm
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    name="password_confirmation"
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "password_confirmation",
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="••••••••"
                                                    required
                                                    autoComplete="new-password"
                                                />
                                                <button
                                                    type="button"
                                                    className="eye-btn"
                                                    onClick={() =>
                                                        setShowConfirm(
                                                            (s) => !s,
                                                        )
                                                    }
                                                    aria-label="Toggle confirm password"
                                                >
                                                    {showConfirm ? (
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                            <circle
                                                                cx="12"
                                                                cy="12"
                                                                r="3"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                            <line
                                                                x1="1"
                                                                y1="1"
                                                                x2="23"
                                                                y2="23"
                                                            />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {errors.password_confirmation && (
                                                <div className="field-error">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        {/* ── Talent-only fields ── */}
                                        {data.role === "talent" && (
                                            <>
                                                <div className="field-full role-section-label">
                                                    Talent Details
                                                </div>

                                                <div className="field">
                                                    <label htmlFor="talent_address">
                                                        Address
                                                    </label>
                                                    <input
                                                        id="talent_address"
                                                        className={`fc-input fc-input--plain ${errors.talent_address ? "is-invalid" : ""}`}
                                                        type="text"
                                                        value={
                                                            data.talent_address
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "talent_address",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="Kigali, Gasabo"
                                                        required
                                                    />
                                                    {errors.talent_address && (
                                                        <div className="field-error">
                                                            {
                                                                errors.talent_address
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="field">
                                                    <label htmlFor="talent_language">
                                                        Language
                                                    </label>
                                                    <input
                                                        id="talent_language"
                                                        className={`fc-input fc-input--plain ${errors.talent_language ? "is-invalid" : ""}`}
                                                        type="text"
                                                        value={
                                                            data.talent_language
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "talent_language",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="Kinyarwanda, English"
                                                        required
                                                    />
                                                    {errors.talent_language && (
                                                        <div className="field-error">
                                                            {
                                                                errors.talent_language
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="field field-full">
                                                    <label htmlFor="category_id">
                                                        Category
                                                    </label>
                                                    <select
                                                        id="category_id"
                                                        className={`fc-input fc-input--plain ${errors.category_id ? "is-invalid" : ""}`}
                                                        value={data.category_id}
                                                        onChange={(e) =>
                                                            setData(
                                                                "category_id",
                                                                e.target.value,
                                                            )
                                                        }
                                                        required
                                                    >
                                                        <option value="">
                                                            Select a category
                                                        </option>
                                                        {categories.map((c) => (
                                                            <option
                                                                key={c.id}
                                                                value={c.id}
                                                            >
                                                                {c.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.category_id && (
                                                        <div className="field-error">
                                                            {errors.category_id}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="field field-full">
                                                    <label htmlFor="talent_description">
                                                        Short Bio
                                                    </label>
                                                    <textarea
                                                        id="talent_description"
                                                        className={`fc-input fc-input--plain fc-textarea ${errors.talent_description ? "is-invalid" : ""}`}
                                                        value={
                                                            data.talent_description
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "talent_description",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="Tell employers a bit about your skills and experience..."
                                                        rows={3}
                                                    />
                                                    {errors.talent_description && (
                                                        <div className="field-error">
                                                            {
                                                                errors.talent_description
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {/* ── Seller-only fields ── */}
                                        {data.role === "seller" && (
                                            <>
                                                <div className="field-full role-section-label">
                                                    Seller Details
                                                </div>

                                                <div className="field field-full">
                                                    <label htmlFor="company_name">
                                                        Company / Business Name
                                                    </label>
                                                    <input
                                                        id="company_name"
                                                        className={`fc-input fc-input--plain ${errors.company_name ? "is-invalid" : ""}`}
                                                        type="text"
                                                        value={
                                                            data.company_name
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "company_name",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="Terra Real Estate Ltd"
                                                        required
                                                    />
                                                    {errors.company_name && (
                                                        <div className="field-error">
                                                            {
                                                                errors.company_name
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="field field-full">
                                                    <label htmlFor="seller_address">
                                                        Business Address
                                                    </label>
                                                    <input
                                                        id="seller_address"
                                                        className={`fc-input fc-input--plain ${errors.seller_address ? "is-invalid" : ""}`}
                                                        type="text"
                                                        value={
                                                            data.seller_address
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "seller_address",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="Kigali, Nyarugenge"
                                                        required
                                                    />
                                                    {errors.seller_address && (
                                                        <div className="field-error">
                                                            {
                                                                errors.seller_address
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="field field-full">
                                                    <label htmlFor="seller_description">
                                                        Business Description
                                                    </label>
                                                    <textarea
                                                        id="seller_description"
                                                        className={`fc-input fc-input--plain fc-textarea ${errors.seller_description ? "is-invalid" : ""}`}
                                                        value={
                                                            data.seller_description
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "seller_description",
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="What does your business sell or offer?"
                                                        rows={3}
                                                    />
                                                    {errors.seller_description && (
                                                        <div className="field-error">
                                                            {
                                                                errors.seller_description
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {/* Terms */}
                                        <div className="field field-full">
                                            <div className="terms-row">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    name="terms"
                                                    checked={data.terms}
                                                    onChange={(e) =>
                                                        setData(
                                                            "terms",
                                                            e.target.checked,
                                                        )
                                                    }
                                                    required
                                                />
                                                <label htmlFor="terms">
                                                    I agree to the{" "}
                                                    <a href="#">
                                                        Terms of Service
                                                    </a>{" "}
                                                    and{" "}
                                                    <a href="#">
                                                        Privacy Policy
                                                    </a>{" "}
                                                    of Future Connect
                                                </label>
                                            </div>
                                            {errors.terms && (
                                                <div className="field-error">
                                                    {errors.terms}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className="btn"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        <span className="btn-inner">
                                            {processing
                                                ? "Creating account…"
                                                : "Create Account"}
                                            {!processing && (
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line
                                                        x1="5"
                                                        y1="12"
                                                        x2="19"
                                                        y2="12"
                                                    />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                </form>

                                <div className="login-row">
                                    Already have an account?{" "}
                                    <Link href={route("login")}>Sign In</Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                :root, [data-theme="dark"] {
                    --bg: #0e1618; --surface: #131e21; --border: #1f2f33;
                    --green: #48d597; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 103, .12); --green-glow: rgba(0, 166, 103, .28);
                    --text: #e8f0ef; --muted: #6a8a85; --input-bg: #0b1315;
                    --card-shadow: rgba(0, 0, 0, .4);
                    --grid-line: rgba(0, 166, 103, .04);
                    --orb-1: rgba(0,166,103,.1);
                    --orb-2: rgba(0,166,103,.07);
                    --left-grad: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
                    --panel-white-overlay: rgba(255,255,255,.09);
                    --field-error: #e07070;
                }

                [data-theme="light"] {
                    --bg: #f4f9f7; --surface: #F5f5f7; --border: #dde8e4;
                    --green: #00a65e; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 94, .10); --green-glow: rgba(0, 166, 94, .22);
                    --text: #0e1618; --muted: #5c7570; --input-bg: #f3f8f6;
                    --card-shadow: rgba(20, 50, 40, .12);
                    --grid-line: rgba(0, 166, 94, .05);
                    --orb-1: rgba(0,166,94,.08);
                    --orb-2: rgba(0,166,94,.06);
                    --left-grad: linear-gradient(145deg, #e6f5ef 0%, #d9f0e6 55%, #eefaf5 100%);
                    --panel-white-overlay: rgba(255,255,255,.4);
                    --field-error: #c9463f;
                }

                html, body { min-height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); transition: background .25s, color .25s; }

                .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; position: relative; overflow: hidden; }

                .page::before {
                    content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
                    background-image:
                        linear-gradient(var(--grid-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
                    background-size: 40px 40px;
                }

                .orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
                .orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, var(--orb-1) 0%, transparent 70%); top: -120px; right: -120px; }
                .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--orb-2) 0%, transparent 70%); bottom: -100px; left: -80px; }

                .top-nav { position: fixed; top: 24px; right: 24px; z-index: 5; }
                .theme-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: rgba(19, 30, 33, .1); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 50%;
                    color: var(--muted); cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .theme-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: rotate(15deg); }

                .back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
                .back-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(19, 30, 33, .07); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 99px;
                    padding: 9px 16px 9px 12px;
                    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
                    color: var(--muted); text-decoration: none; cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
                .back-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: translateX(-2px); }
                .back-btn:hover svg { transform: translateX(-2px); }

                @media (max-width: 480px) {
                    .back-nav { top: 14px; left: 14px; }
                    .top-nav { top: 14px; right: 14px; }
                    .back-btn span { display: none; }
                    .back-btn { padding: 10px; }
                }

                .card {
                    display: grid; grid-template-columns: 450px minmax(0, 1fr);
                    width: 100%; max-width: 1020px;
                    border-radius: 20px; overflow: hidden;
                    border: 1px solid var(--border); position: relative; z-index: 1;
                    animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
                    box-shadow: 0 40px 80px var(--card-shadow);
                }

                @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

                .panel-left {
                    background: var(--left-grad); padding: 52px 40px;
                    display: flex; flex-direction: column; justify-content: space-between;
                    position: relative; overflow-y: auto; min-height: 0;
                    border-right: 1px solid var(--border);
                }

                .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
                .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
                .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

                .dots { position: absolute; top: 44px; right: 32px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
                .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

                .fc-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
                .fc-logo-mark { width: 36px; height: 36px; background: var(--green); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fc-logo-mark svg { width: 18px; height: 18px; fill: var(--bg); }
                .fc-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
                .fc-logo-tagline { font-size: 11px; color: var(--muted); letter-spacing: .3px; margin: 0; line-height: 1; }

                .pill { display: inline-flex; align-items: center; gap: 6px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); border-radius: 99px; padding: 5px 12px; font-size: 11px; color: var(--green); font-weight: 500; margin-bottom: 22px; margin-top: 24px; width: fit-content; position: relative; z-index: 1; }
                .pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; animation: pulse 2s ease infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

                .tagline { position: relative; z-index: 1; }
                .tagline h2 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
                .tagline h2 em { font-style: normal; color: var(--green); }
                .tagline p { color: var(--muted); font-size: 13.5px; line-height: 1.65; }

                .features { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }
                .feat { display: flex; align-items: flex-start; gap: 12px; }
                .feat-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; }
                .feat-icon svg { width: 15px; height: 15px; color: var(--green); }
                .feat-text strong { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
                .feat-text span { font-size: 12px; color: var(--muted); }

                .panel-right {
                    background: var(--surface); padding: 48px 48px;
                    display: flex; flex-direction: column; justify-content: center;
                    position: relative; overflow-y: auto; min-height: 0; min-width: 0;
                }
                .panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--green), transparent); opacity: .6; }

                .form-head { margin-bottom: 28px; }
                .eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 10px; }
                .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
                .form-head h1 { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -.8px; line-height: 1.1; }
                .form-head p { margin-top: 8px; font-size: 13px; color: var(--muted); }

                /* Role selection */
                .role-grid { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
                .role-card {
                    display: flex; align-items: center; gap: 14px; text-align: left;
                    background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 14px;
                    padding: 16px 18px; cursor: pointer; font-family: 'DM Sans', sans-serif;
                    transition: border-color .2s, box-shadow .2s, transform .15s;
                }
                .role-card:hover { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); transform: translateY(-1px); }
                .role-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; color: var(--green); }
                .role-icon svg { width: 19px; height: 19px; }
                .role-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
                .role-text strong { font-size: 14.5px; font-weight: 700; color: var(--text); }
                .role-text span { font-size: 12px; color: var(--muted); }
                .role-arrow { width: 16px; height: 16px; color: var(--muted); flex-shrink: 0; transition: transform .2s, color .2s; }
                .role-card:hover .role-arrow { color: var(--green); transform: translateX(3px); }

                .role-note {
                    font-size: 12.5px; color: var(--muted); line-height: 1.6;
                    background: var(--green-dim); border: 1px solid rgba(0,166,103,.18);
                    border-radius: 10px; padding: 12px 14px; margin-bottom: 24px;
                }
                .role-note strong { color: var(--green); }

                .role-section-label {
                    font-size: 11px; font-weight: 700; color: var(--green); text-transform: uppercase;
                    letter-spacing: 1px; margin-top: 6px; padding-top: 14px; border-top: 1px dashed var(--border);
                }

                .fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .field-full { grid-column: 1 / -1; }

                .field { display: flex; flex-direction: column; }
                .field label { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 7px; }

                .input-wrap { position: relative; }
                .input-wrap .ico { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--muted); pointer-events: none; transition: color .2s; }
                .input-wrap:focus-within .ico { color: var(--green); }

                .fc-input {
                    width: 100%; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 10px;
                    padding: 12px 14px 12px 42px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--text); outline: none;
                    transition: border-color .2s, box-shadow .2s, background .2s;
                }
                .fc-input--plain { padding: 12px 14px; }
                .fc-textarea { resize: vertical; min-height: 80px; }
                select.fc-input { appearance: none; cursor: pointer; }
                .fc-input::placeholder { color: var(--muted); opacity: .5; }
                .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); }
                .fc-input.is-invalid { border-color: var(--field-error); }

                .field-error { font-size: 11.5px; color: var(--field-error); margin-top: 5px; }

                .strength-bar { display: flex; gap: 4px; margin-top: 8px; }
                .strength-seg { height: 3px; flex: 1; border-radius: 2px; background: var(--border); transition: background .3s; }
                .strength-seg.weak   { background: #e05a5a; }
                .strength-seg.fair   { background: #e0a045; }
                .strength-seg.good   { background: #5ab4e0; }
                .strength-seg.strong { background: var(--green); }
                .strength-label { font-size: 11px; color: var(--muted); margin-top: 5px; }

                .eye-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; border-radius: 4px; transition: color .2s, background .2s; }
                .eye-btn:hover { color: var(--green); background: var(--green-dim); }

                .terms-row { display: flex; align-items: flex-start; gap: 10px; }
                .terms-row input[type="checkbox"] { appearance: none; width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer; display: grid; place-items: center; flex-shrink: 0; margin-top: 1px; transition: border-color .2s, background .2s; }
                .terms-row input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
                .terms-row input[type="checkbox"]:checked::after { content: ''; display: block; width: 9px; height: 5px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
                .terms-row label { font-size: 12.5px; color: var(--muted); line-height: 1.5; cursor: pointer; }
                .terms-row label a { color: var(--green); text-decoration: none; font-weight: 500; }
                .terms-row label a:hover { text-decoration: underline; }

                .btn {
                    width: 100%; padding: 14px; background: linear-gradient(135deg, var(--green), #009a5e);
                    color: #fff; border: none; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
                    letter-spacing: .2px; cursor: pointer; position: relative; overflow: hidden;
                    transition: transform .15s, box-shadow .2s, background .2s; margin-top: 20px;
                }
                .btn:disabled { opacity: .7; cursor: not-allowed; }
                .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, var(--panel-white-overlay), transparent); pointer-events: none; }
                .btn:hover:not(:disabled) { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
                .btn:active:not(:disabled) { transform: translateY(0); }
                .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

                .login-row { text-align: center; margin-top: 20px; font-size: 13px; color: var(--muted); }
                .login-row a { color: var(--green); text-decoration: none; font-weight: 600; }
                .login-row a:hover { text-decoration: underline; }

                @media (max-width: 880px) {
                    .card { grid-template-columns: 1fr; max-width: 560px; max-height: none; overflow: visible; }
                    .panel-left { border-right: none; border-bottom: 1px solid var(--border); padding: 32px 28px 28px; overflow: visible; }
                    .dots { display: none; }
                    .tagline h2 { font-size: 22px; }
                    .tagline p { display: none; }
                    .features { flex-direction: row; flex-wrap: wrap; gap: 10px; }
                    .feat { flex: 1; min-width: 140px; }
                    .panel-right { padding: 36px 32px 40px; overflow: visible; }
                }

                @media (max-width: 600px) {
                    .fields-grid { grid-template-columns: 1fr; }
                    .field-full { grid-column: unset; }
                }

                @media (max-width: 480px) {
                    .page { padding: 16px; }
                    .panel-left { padding: 24px 20px; }
                    .panel-right { padding: 28px 20px 36px; }
                    .form-head h1 { font-size: 22px; }
                    .features { display: none; }
                }
            `}</style>
        </>
    );
}
