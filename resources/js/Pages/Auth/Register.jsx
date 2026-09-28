import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { Head, Link, useForm } from "@inertiajs/react";

const THEME_KEY = "fc-theme";

const roleOptions = [
    {
        value: "talent",
        title: "I’m a Talent",
        description: "Showcase your skills and get discovered.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        value: "seller",
        title: "I’m a Seller",
        description: "List products or services and reach buyers.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="m4 9 2-5h12l2 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 9h16v10H4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M9 19v-5h6v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
            </svg>
        ),
    },
    {
        value: "user",
        title: "I’m a Member",
        description: "Browse, connect, and explore the platform.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M8 8h8M8 12h8M8 16h5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
];

function initTheme() {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
    }

    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function FieldIcon({ children }) {
    return <span className="fc-field-icon">{children}</span>;
}

function EyeIcon({ visible }) {
    return visible ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <circle
                cx="12"
                cy="12"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
            />
        </svg>
    ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 3l18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M10.6 6.2A10.6 10.6 0 0 1 12 6c6 0 9.5 6 9.5 6a17.8 17.8 0 0 1-3.1 3.7M6.1 6.9C3.8 8.4 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.5-.3 3.5-.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="m5 12 4 4L19 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Register({ categories = [] }) {
    const [theme, setTheme] = useState(initTheme);
    const [step, setStep] = useState("role");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        role: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        terms: false,

        talent_address: "",
        talent_language: "",
        category_id: "",
        talent_description: "",

        company_name: "",
        seller_address: "",
        seller_description: "",
    });

    useEffect(() => {
        document.documentElement.dataset.fcTheme = theme;
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const selectedRole = useMemo(
        () => roleOptions.find((item) => item.value === data.role),
        [data.role]
    );

    const passwordScore = useMemo(() => {
        const password = data.password || "";

        if (!password) return 0;

        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score;
    }, [data.password]);

    const passwordLabel = useMemo(() => {
        if (!data.password) return "";
        if (passwordScore <= 1) return "Weak";
        if (passwordScore === 2) return "Fair";
        if (passwordScore === 3) return "Good";
        return "Strong";
    }, [data.password, passwordScore]);

    const chooseRole = useCallback(
        (role) => {
            setData("role", role);
            setStep("form");
        },
        [setData]
    );

    const submit = (event) => {
        event.preventDefault();

        post(route("register"), {
            onFinish: () => {
                reset("password", "password_confirmation");
            },
        });
    };

    const goBack = () => {
        setStep("role");
    };

    return (
        <>
            <Head title="Create your account | Future Connect" />

            <div className="fc-register">
                <div className="fc-background">
                    <span className="fc-orb fc-orb-one" />
                    <span className="fc-orb fc-orb-two" />
                    <span className="fc-grid" />
                </div>

                <header className="fc-topbar">
                    <Link
                        href={route("user.home")}
                        className="fc-logo"
                        aria-label="Future Connect home"
                    >
                        <span className="fc-logo-mark">
                            <span />
                            <span />
                            <span />
                        </span>

                        <span className="fc-logo-text">
                            <strong>Future</strong>
                            <b>Connect</b>
                        </span>
                    </Link>

                    <div className="fc-topbar-right">
                        <span className="fc-login-copy">
                            Already have an account?
                        </span>

                        <Link
                            href={route("login")}
                            className="fc-login-link"
                        >
                            Sign in
                        </Link>

                        <button
                            type="button"
                            className="fc-theme-button"
                            onClick={() =>
                                setTheme((current) =>
                                    current === "dark" ? "light" : "dark"
                                )
                            }
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    />
                                    <path
                                        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </header>

                <main className="fc-register-shell">
                    <section className="fc-register-card">
                        <aside className="fc-brand-panel">
                            <div className="fc-brand-inner">
                                <div className="fc-brand-badge">
                                    <span className="fc-status-dot" />
                                    A platform built for growth
                                </div>

                                <div className="fc-brand-content">
                                    <p className="fc-eyebrow">
                                        FUTURE CONNECT
                                    </p>

                                    <h1>
                                        Your talent.
                                        <br />
                                        Your future.
                                        <br />
                                        <span>Connected.</span>
                                    </h1>

                                    <p className="fc-brand-description">
                                        Discover inspiring stories, impactful
                                        skills, and creative talent across
                                        Africa.
                                    </p>
                                </div>

                                <div className="fc-brand-features">
                                    <div className="fc-brand-feature">
                                        <span className="fc-feature-icon">
                                            <CheckIcon />
                                        </span>

                                        <div>
                                            <strong>Showcase your skills</strong>
                                            <span>
                                                Create a profile that gets
                                                noticed.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="fc-brand-feature">
                                        <span className="fc-feature-icon">
                                            <CheckIcon />
                                        </span>

                                        <div>
                                            <strong>Build connections</strong>
                                            <span>
                                                Connect with people and
                                                opportunities.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="fc-brand-feature">
                                        <span className="fc-feature-icon">
                                            <CheckIcon />
                                        </span>

                                        <div>
                                            <strong>Grow your opportunities</strong>
                                            <span>
                                                Turn your skills into new
                                                possibilities.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="fc-brand-footer">
                                    <div className="fc-mini-avatars">
                                        <span>F</span>
                                        <span>C</span>
                                        <span>A</span>
                                        <span>+</span>
                                    </div>

                                    <p>
                                        One platform.
                                        <br />
                                        Many possibilities.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        <section className="fc-form-panel">
                            <div className="fc-form-container">
                                <div className="fc-mobile-logo">
                                    <span className="fc-logo-mark">
                                        <span />
                                        <span />
                                        <span />
                                    </span>

                                    <span className="fc-logo-text">
                                        <strong>Future</strong>
                                        <b>Connect</b>
                                    </span>
                                </div>

                                <div className="fc-progress">
                                    <div
                                        className={`fc-progress-item ${
                                            step === "role" ? "active" : "done"
                                        }`}
                                    >
                                        <span className="fc-progress-number">
                                            {step === "form" ? (
                                                <CheckIcon />
                                            ) : (
                                                "01"
                                            )}
                                        </span>

                                        <span>Account type</span>
                                    </div>

                                    <div className="fc-progress-line">
                                        <span
                                            className={
                                                step === "form"
                                                    ? "filled"
                                                    : ""
                                            }
                                        />
                                    </div>

                                    <div
                                        className={`fc-progress-item ${
                                            step === "form" ? "active" : ""
                                        }`}
                                    >
                                        <span className="fc-progress-number">
                                            02
                                        </span>

                                        <span>Your details</span>
                                    </div>
                                </div>

                                {step === "role" ? (
                                    <div className="fc-step-content">
                                        <div className="fc-heading">
                                            <span className="fc-heading-label">
                                                GET STARTED
                                            </span>

                                            <h2>
                                                How will you use
                                                <br />
                                                Future Connect?
                                            </h2>

                                            <p>
                                                Select the account type that
                                                best describes you.
                                            </p>
                                        </div>

                                        <div className="fc-role-list">
                                            {roleOptions.map((role) => (
                                                <button
                                                    type="button"
                                                    key={role.value}
                                                    className={`fc-role-card ${
                                                        data.role ===
                                                        role.value
                                                            ? "selected"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        chooseRole(
                                                            role.value
                                                        )
                                                    }
                                                >
                                                    <span className="fc-role-icon">
                                                        {role.icon}
                                                    </span>

                                                    <span className="fc-role-copy">
                                                        <strong>
                                                            {role.title}
                                                        </strong>

                                                        <span>
                                                            {role.description}
                                                        </span>
                                                    </span>

                                                    <span className="fc-role-arrow">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M5 12h14M13 6l6 6-6 6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.8"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>

                                        <p className="fc-security-note">
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M7 10V7a5 5 0 0 1 10 0v3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                />
                                                <rect
                                                    x="5"
                                                    y="10"
                                                    width="14"
                                                    height="10"
                                                    rx="2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                />
                                            </svg>

                                            Your information is securely
                                            handled.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={submit}
                                        className="fc-step-content"
                                    >
                                        <div className="fc-form-heading-row">
                                            <div className="fc-heading">
                                                <span className="fc-heading-label">
                                                    CREATE ACCOUNT
                                                </span>

                                                <h2>
                                                    Tell us about
                                                    <br />
                                                    yourself.
                                                </h2>

                                                <p>
                                                    You’re joining as{" "}
                                                    <strong>
                                                        {selectedRole?.title ||
                                                            data.role}
                                                    </strong>
                                                    .
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                className="fc-change-role"
                                                onClick={goBack}
                                            >
                                                Change
                                            </button>
                                        </div>

                                        {Object.keys(errors).length > 0 && (
                                            <div className="fc-error-summary">
                                                <strong>
                                                    Please check your details
                                                </strong>

                                                <span>
                                                    Some fields need your
                                                    attention before you can
                                                    continue.
                                                </span>
                                            </div>
                                        )}

                                        <div className="fc-form-section">
                                            <div className="fc-section-title">
                                                <span>01</span>
                                                Account information
                                            </div>

                                            <div className="fc-form-grid">
                                                <div className="fc-field">
                                                    <label htmlFor="name">
                                                        Full name
                                                    </label>

                                                    <div className="fc-input-wrap">
                                                        <FieldIcon>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <circle
                                                                    cx="12"
                                                                    cy="8"
                                                                    r="3.5"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                />
                                                                <path
                                                                    d="M5 20a7 7 0 0 1 14 0"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                    strokeLinecap="round"
                                                                />
                                                            </svg>
                                                        </FieldIcon>

                                                        <input
                                                            id="name"
                                                            type="text"
                                                            value={data.name}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "name",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Your full name"
                                                            autoComplete="name"
                                                            required
                                                        />
                                                    </div>

                                                    {errors.name && (
                                                        <span className="fc-field-error">
                                                            {errors.name}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="fc-field">
                                                    <label htmlFor="phone">
                                                        Phone number
                                                    </label>

                                                    <div className="fc-input-wrap">
                                                        <FieldIcon>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="M7 3h3l1.2 4-2 1.5a15 15 0 0 0 6.3 6.3L17 13l4 1.2v3a3 3 0 0 1-3 3C10.3 20.2 3.8 13.7 3.8 6A3 3 0 0 1 7 3Z"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </FieldIcon>

                                                        <input
                                                            id="phone"
                                                            type="tel"
                                                            value={data.phone}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "phone",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="+250 7XX XXX XXX"
                                                            autoComplete="tel"
                                                            required
                                                        />
                                                    </div>

                                                    {errors.phone && (
                                                        <span className="fc-field-error">
                                                            {errors.phone}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="fc-field fc-field-full">
                                                    <label htmlFor="email">
                                                        Email address
                                                    </label>

                                                    <div className="fc-input-wrap">
                                                        <FieldIcon>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <rect
                                                                    x="3"
                                                                    y="5"
                                                                    width="18"
                                                                    height="14"
                                                                    rx="2"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                />
                                                                <path
                                                                    d="m4 7 8 6 8-6"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </FieldIcon>

                                                        <input
                                                            id="email"
                                                            type="email"
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "email",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="you@example.com"
                                                            autoComplete="email"
                                                            required
                                                        />
                                                    </div>

                                                    {errors.email && (
                                                        <span className="fc-field-error">
                                                            {errors.email}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="fc-field">
                                                    <label htmlFor="password">
                                                        Password
                                                    </label>

                                                    <div className="fc-input-wrap">
                                                        <FieldIcon>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <rect
                                                                    x="5"
                                                                    y="10"
                                                                    width="14"
                                                                    height="10"
                                                                    rx="2"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                />
                                                                <path
                                                                    d="M8 10V7a4 4 0 0 1 8 0v3"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.7"
                                                                />
                                                            </svg>
                                                        </FieldIcon>

                                                        <input
                                                            id="password"
                                                            type={
                                                                showPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            value={
                                                                data.password
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "password",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Create a password"
                                                            autoComplete="new-password"
                                                            required
                                                        />

                                                        <button
                                                            type="button"
                                                            className="fc-password-toggle"
                                                            onClick={() =>
                                                                setShowPassword(
                                                                    (current) =>
                                                                        !current
                                                                )
                                                            }
                                                            aria-label={
                                                                showPassword
                                                                    ? "Hide password"
                                                                    : "Show password"
                                                            }
                                                        >
                                                            <EyeIcon
                                                                visible={
                                                                    showPassword
                                                                }
                                                            />
                                                        </button>
                                                    </div>

                                                    {data.password && (
                                                        <div className="fc-password-strength">
                                                            <div className="fc-strength-bars">
                                                                {[1, 2, 3, 4].map(
                                                                    (bar) => (
                                                                        <span
                                                                            key={
                                                                                bar
                                                                            }
                                                                            className={
                                                                                bar <=
                                                                                passwordScore
                                                                                    ? `active strength-${passwordScore}`
                                                                                    : ""
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </div>

                                                            <span>
                                                                {passwordLabel}
                                                            </span>
                                                        </div>
                                                    )}

                                                    {errors.password && (
                                                        <span className="fc-field-error">
                                                            {errors.password}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="fc-field">
                                                    <label htmlFor="password_confirmation">
                                                        Confirm password
                                                    </label>

                                                    <div className="fc-input-wrap">
                                                        <FieldIcon>
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="m5 12 4 4L19 6"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.8"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </FieldIcon>

                                                        <input
                                                            id="password_confirmation"
                                                            type={
                                                                showConfirmation
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            value={
                                                                data.password_confirmation
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "password_confirmation",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Repeat your password"
                                                            autoComplete="new-password"
                                                            required
                                                        />

                                                        <button
                                                            type="button"
                                                            className="fc-password-toggle"
                                                            onClick={() =>
                                                                setShowConfirmation(
                                                                    (current) =>
                                                                        !current
                                                                )
                                                            }
                                                            aria-label={
                                                                showConfirmation
                                                                    ? "Hide confirmation password"
                                                                    : "Show confirmation password"
                                                            }
                                                        >
                                                            <EyeIcon
                                                                visible={
                                                                    showConfirmation
                                                                }
                                                            />
                                                        </button>
                                                    </div>

                                                    {errors.password_confirmation && (
                                                        <span className="fc-field-error">
                                                            {
                                                                errors.password_confirmation
                                                            }
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {data.role === "talent" && (
                                            <div className="fc-form-section">
                                                <div className="fc-section-title">
                                                    <span>02</span>
                                                    Talent profile
                                                </div>

                                                <div className="fc-form-grid">
                                                    <div className="fc-field">
                                                        <label htmlFor="talent_address">
                                                            Location
                                                        </label>

                                                        <div className="fc-input-wrap">
                                                            <FieldIcon>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                    <circle
                                                                        cx="12"
                                                                        cy="9"
                                                                        r="2.2"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                </svg>
                                                            </FieldIcon>

                                                            <input
                                                                id="talent_address"
                                                                type="text"
                                                                value={
                                                                    data.talent_address
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "talent_address",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="City / District"
                                                            />
                                                        </div>

                                                        {errors.talent_address && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.talent_address
                                                                }
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="fc-field">
                                                        <label htmlFor="talent_language">
                                                            Preferred language
                                                        </label>

                                                        <div className="fc-input-wrap fc-select-wrap">
                                                            <FieldIcon>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M4 5h10M9 5c0 5-2 8-5 10M6 10c2 2 4 3 7 4M15 12h6M18 8l-4 10M16 15h5"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </FieldIcon>

                                                            <select
                                                                id="talent_language"
                                                                value={
                                                                    data.talent_language
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "talent_language",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select language
                                                                </option>
                                                                <option value="English">
                                                                    English
                                                                </option>
                                                                <option value="Kinyarwanda">
                                                                    Kinyarwanda
                                                                </option>
                                                                <option value="French">
                                                                    French
                                                                </option>
                                                                <option value="Other">
                                                                    Other
                                                                </option>
                                                            </select>

                                                            <span className="fc-select-arrow">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="m6 9 6 6 6-6"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>

                                                        {errors.talent_language && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.talent_language
                                                                }
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="fc-field fc-field-full">
                                                        <label htmlFor="category_id">
                                                            Skill category
                                                        </label>

                                                        <div className="fc-input-wrap fc-select-wrap">
                                                            <FieldIcon>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                </svg>
                                                            </FieldIcon>

                                                            <select
                                                                id="category_id"
                                                                value={
                                                                    data.category_id
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "category_id",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select your main
                                                                    category
                                                                </option>

                                                                {categories.map(
                                                                    (
                                                                        category
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                category.id
                                                                            }
                                                                            value={
                                                                                category.id
                                                                            }
                                                                        >
                                                                            {
                                                                                category.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>

                                                            <span className="fc-select-arrow">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="m6 9 6 6 6-6"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>

                                                        {errors.category_id && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.category_id
                                                                }
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="fc-field fc-field-full">
                                                        <label htmlFor="talent_description">
                                                            Short bio
                                                        </label>

                                                        <textarea
                                                            id="talent_description"
                                                            value={
                                                                data.talent_description
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "talent_description",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Tell people briefly about your skills, experience, or what you do..."
                                                            rows="4"
                                                        />

                                                        {errors.talent_description && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.talent_description
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {data.role === "seller" && (
                                            <div className="fc-form-section">
                                                <div className="fc-section-title">
                                                    <span>02</span>
                                                    Business information
                                                </div>

                                                <div className="fc-form-grid">
                                                    <div className="fc-field fc-field-full">
                                                        <label htmlFor="company_name">
                                                            Business / company
                                                            name
                                                        </label>

                                                        <div className="fc-input-wrap">
                                                            <FieldIcon>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M4 20V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                    <path
                                                                        d="M2 20h20M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </FieldIcon>

                                                            <input
                                                                id="company_name"
                                                                type="text"
                                                                value={
                                                                    data.company_name
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "company_name",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Business or company name"
                                                            />
                                                        </div>

                                                        {errors.company_name && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.company_name
                                                                }
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="fc-field fc-field-full">
                                                        <label htmlFor="seller_address">
                                                            Business location
                                                        </label>

                                                        <div className="fc-input-wrap">
                                                            <FieldIcon>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                    <circle
                                                                        cx="12"
                                                                        cy="9"
                                                                        r="2.2"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.7"
                                                                    />
                                                                </svg>
                                                            </FieldIcon>

                                                            <input
                                                                id="seller_address"
                                                                type="text"
                                                                value={
                                                                    data.seller_address
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "seller_address",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="City / District"
                                                            />
                                                        </div>

                                                        {errors.seller_address && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.seller_address
                                                                }
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="fc-field fc-field-full">
                                                        <label htmlFor="seller_description">
                                                            Business description
                                                        </label>

                                                        <textarea
                                                            id="seller_description"
                                                            value={
                                                                data.seller_description
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "seller_description",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Tell us about the products or services you offer..."
                                                            rows="4"
                                                        />

                                                        {errors.seller_description && (
                                                            <span className="fc-field-error">
                                                                {
                                                                    errors.seller_description
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="fc-terms">
                                            <label className="fc-checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={data.terms}
                                                    onChange={(e) =>
                                                        setData(
                                                            "terms",
                                                            e.target.checked
                                                        )
                                                    }
                                                    required
                                                />

                                                <span className="fc-checkmark">
                                                    <CheckIcon />
                                                </span>

                                                <span>
                                                    I agree to the{" "}
                                                    <a href="#">
                                                        Terms of Service
                                                    </a>{" "}
                                                    and{" "}
                                                    <a href="#">
                                                        Privacy Policy
                                                    </a>
                                                    .
                                                </span>
                                            </label>

                                            {errors.terms && (
                                                <span className="fc-field-error">
                                                    {errors.terms}
                                                </span>
                                            )}
                                        </div>

                                        <div className="fc-form-actions">
                                            <button
                                                type="button"
                                                className="fc-back-button"
                                                onClick={goBack}
                                                disabled={processing}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M19 12H5M11 18l-6-6 6-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>

                                                Back
                                            </button>

                                            <button
                                                type="submit"
                                                className="fc-submit-button"
                                                disabled={processing}
                                            >
                                                {processing ? (
                                                    <>
                                                        <span className="fc-spinner" />
                                                        Creating account...
                                                    </>
                                                ) : (
                                                    <>
                                                        Create account

                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M5 12h14M13 6l6 6-6 6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.8"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </section>
                    </section>
                </main>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap');

                :root {
                    --fc-primary: #48d597;
                    --fc-primary-dark: #2fba7b;
                    --fc-primary-soft: rgba(72, 213, 151, .10);
                    --fc-black: #101714;
                    --fc-text: #18211d;
                    --fc-muted: #718078;
                    --fc-border: #e3e9e5;
                    --fc-background: #f5f8f6;
                    --fc-card: #ffffff;
                    --fc-input: #fbfcfb;
                    --fc-danger: #dc4f5c;
                    --fc-shadow: 0 24px 80px rgba(18, 39, 29, .10);
                }

                [data-fc-theme="dark"] {
                    --fc-black: #f4faf7;
                    --fc-text: #eef7f2;
                    --fc-muted: #91a39a;
                    --fc-border: #26352e;
                    --fc-background: #0d1310;
                    --fc-card: #131b17;
                    --fc-input: #101814;
                    --fc-shadow: 0 24px 80px rgba(0, 0, 0, .35);
                }

                * {
                    box-sizing: border-box;
                }

                .fc-register {
                    min-height: 100vh;
                    background: var(--fc-background);
                    color: var(--fc-text);
                    font-family: "DM Sans", sans-serif;
                    position: relative;
                    overflow-x: hidden;
                }

                .fc-background {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                }

                .fc-grid {
                    position: absolute;
                    inset: 0;
                    opacity: .35;
                    background-image:
                        linear-gradient(
                            rgba(72, 213, 151, .04) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(72, 213, 151, .04) 1px,
                            transparent 1px
                        );
                    background-size: 44px 44px;
                }

                .fc-orb {
                    position: absolute;
                    width: 480px;
                    height: 480px;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: .12;
                }

                .fc-orb-one {
                    background: var(--fc-primary);
                    top: -250px;
                    right: -100px;
                }

                .fc-orb-two {
                    background: #5a8cff;
                    bottom: -300px;
                    left: -160px;
                    opacity: .06;
                }

                .fc-topbar {
                    position: relative;
                    z-index: 2;
                    width: min(1440px, calc(100% - 56px));
                    margin: 0 auto;
                    height: 88px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .fc-logo {
                    display: inline-flex;
                    align-items: center;
                    gap: 11px;
                    color: var(--fc-black);
                    text-decoration: none;
                }

                .fc-logo-mark {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    background: var(--fc-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                    box-shadow: 0 7px 20px rgba(72, 213, 151, .20);
                }

                .fc-logo-mark span {
                    display: block;
                    width: 4px;
                    border-radius: 5px;
                    background: #0d1712;
                }

                .fc-logo-mark span:nth-child(1) {
                    height: 10px;
                }

                .fc-logo-mark span:nth-child(2) {
                    height: 17px;
                }

                .fc-logo-mark span:nth-child(3) {
                    height: 13px;
                }

                .fc-logo-text {
                    display: flex;
                    align-items: baseline;
                    gap: 4px;
                    font-family: "Syne", sans-serif;
                    font-size: 20px;
                    letter-spacing: -.7px;
                }

                .fc-logo-text strong {
                    font-weight: 700;
                }

                .fc-logo-text b {
                    color: var(--fc-primary-dark);
                    font-weight: 700;
                }

                .fc-topbar-right {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .fc-login-copy {
                    color: var(--fc-muted);
                    font-size: 13px;
                }

                .fc-login-link {
                    color: var(--fc-text);
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    padding-bottom: 2px;
                    border-bottom: 1px solid currentColor;
                }

                .fc-login-link:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-theme-button {
                    width: 38px;
                    height: 38px;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-card);
                    color: var(--fc-muted);
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .fc-theme-button:hover {
                    color: var(--fc-primary-dark);
                    border-color: rgba(72, 213, 151, .5);
                    transform: translateY(-1px);
                }

                .fc-theme-button svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-register-shell {
                    position: relative;
                    z-index: 1;
                    width: min(1180px, calc(100% - 40px));
                    margin: 10px auto 50px;
                }

                .fc-register-card {
                    min-height: 720px;
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    border-radius: 26px;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 38% 62%;
                    box-shadow: var(--fc-shadow);
                }

                .fc-brand-panel {
                    background:
                        radial-gradient(
                            circle at 80% 15%,
                            rgba(72, 213, 151, .18),
                            transparent 28%
                        ),
                        linear-gradient(
                            150deg,
                            #102019 0%,
                            #0b1410 100%
                        );
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .fc-brand-panel::after {
                    content: "";
                    position: absolute;
                    width: 360px;
                    height: 360px;
                    border: 1px solid rgba(72, 213, 151, .13);
                    border-radius: 50%;
                    right: -190px;
                    bottom: -100px;
                    box-shadow:
                        0 0 0 55px rgba(72, 213, 151, .025),
                        0 0 0 110px rgba(72, 213, 151, .018);
                }

                .fc-brand-inner {
                    position: relative;
                    z-index: 1;
                    min-height: 100%;
                    padding: 46px 42px 40px;
                    display: flex;
                    flex-direction: column;
                }

                .fc-brand-badge {
                    align-self: flex-start;
                    border: 1px solid rgba(255,255,255,.12);
                    background: rgba(255,255,255,.045);
                    border-radius: 999px;
                    padding: 8px 12px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .6px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,.78);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .fc-status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--fc-primary);
                    box-shadow: 0 0 0 4px rgba(72, 213, 151, .08);
                }

                .fc-brand-content {
                    margin-top: 74px;
                }

                .fc-eyebrow,
                .fc-heading-label {
                    margin: 0 0 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    color: var(--fc-primary);
                }

                .fc-brand-content h1 {
                    margin: 0;
                    font-family: "Syne", sans-serif;
                    font-size: clamp(38px, 4vw, 53px);
                    line-height: 1.02;
                    letter-spacing: -2.8px;
                    font-weight: 700;
                }

                .fc-brand-content h1 span {
                    color: var(--fc-primary);
                }

                .fc-brand-description {
                    max-width: 360px;
                    margin: 25px 0 0;
                    color: rgba(255,255,255,.59);
                    font-size: 14px;
                    line-height: 1.75;
                }

                .fc-brand-features {
                    margin-top: auto;
                    display: grid;
                    gap: 18px;
                    padding-top: 50px;
                }

                .fc-brand-feature {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }

                .fc-feature-icon {
                    flex: 0 0 25px;
                    width: 25px;
                    height: 25px;
                    border-radius: 8px;
                    background: rgba(72, 213, 151, .12);
                    color: var(--fc-primary);
                    display: grid;
                    place-items: center;
                }

                .fc-feature-icon svg {
                    width: 14px;
                    height: 14px;
                }

                .fc-brand-feature div {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .fc-brand-feature strong {
                    font-size: 12px;
                    font-weight: 700;
                    color: rgba(255,255,255,.92);
                }

                .fc-brand-feature span {
                    font-size: 11px;
                    color: rgba(255,255,255,.42);
                    line-height: 1.45;
                }

                .fc-brand-footer {
                    margin-top: 35px;
                    padding-top: 22px;
                    border-top: 1px solid rgba(255,255,255,.08);
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .fc-mini-avatars {
                    display: flex;
                    padding-left: 5px;
                }

                .fc-mini-avatars span {
                    width: 27px;
                    height: 27px;
                    margin-left: -5px;
                    border: 2px solid #101b15;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background: #1e3027;
                    color: rgba(255,255,255,.7);
                    font-size: 9px;
                    font-weight: 800;
                }

                .fc-mini-avatars span:nth-child(2) {
                    background: #274238;
                }

                .fc-mini-avatars span:nth-child(3) {
                    background: #345446;
                }

                .fc-mini-avatars span:last-child {
                    background: var(--fc-primary);
                    color: #0d1712;
                }

                .fc-brand-footer p {
                    margin: 0;
                    font-size: 10px;
                    line-height: 1.45;
                    color: rgba(255,255,255,.42);
                }

                .fc-form-panel {
                    background: var(--fc-card);
                    min-width: 0;
                }

                .fc-form-container {
                    width: min(100%, 690px);
                    margin: 0 auto;
                    padding: 52px 58px 50px;
                }

                .fc-mobile-logo {
                    display: none;
                }

                .fc-progress {
                    display: flex;
                    align-items: center;
                    margin-bottom: 48px;
                }

                .fc-progress-item {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--fc-muted);
                    font-size: 10px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .fc-progress-item.active {
                    color: var(--fc-text);
                }

                .fc-progress-item.done {
                    color: var(--fc-primary-dark);
                }

                .fc-progress-number {
                    width: 27px;
                    height: 27px;
                    border: 1px solid var(--fc-border);
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    font-size: 8px;
                    font-weight: 800;
                }

                .fc-progress-item.active .fc-progress-number {
                    border-color: var(--fc-primary);
                    background: var(--fc-primary-soft);
                    color: var(--fc-primary-dark);
                }

                .fc-progress-item.done .fc-progress-number {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0c1812;
                }

                .fc-progress-number svg {
                    width: 12px;
                    height: 12px;
                }

                .fc-progress-line {
                    flex: 1;
                    height: 1px;
                    margin: 0 14px;
                    background: var(--fc-border);
                    position: relative;
                }

                .fc-progress-line span {
                    position: absolute;
                    inset: 0;
                    width: 0;
                    background: var(--fc-primary);
                    transition: width .35s ease;
                }

                .fc-progress-line span.filled {
                    width: 100%;
                }

                .fc-heading-label {
                    color: var(--fc-primary-dark);
                }

                .fc-heading h2 {
                    margin: 0;
                    font-family: "Syne", sans-serif;
                    font-size: 31px;
                    line-height: 1.08;
                    letter-spacing: -1.4px;
                    color: var(--fc-black);
                }

                .fc-heading p {
                    margin: 12px 0 0;
                    color: var(--fc-muted);
                    font-size: 13px;
                    line-height: 1.65;
                }

                .fc-heading p strong {
                    color: var(--fc-text);
                }

                .fc-role-list {
                    margin-top: 35px;
                    display: grid;
                    gap: 11px;
                }

                .fc-role-card {
                    width: 100%;
                    min-height: 94px;
                    padding: 17px 18px;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-input);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    text-align: left;
                    cursor: pointer;
                    color: var(--fc-text);
                    transition: .2s ease;
                }

                .fc-role-card:hover {
                    border-color: rgba(72, 213, 151, .55);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(20, 45, 33, .06);
                }

                .fc-role-card.selected {
                    border-color: var(--fc-primary);
                    background: var(--fc-primary-soft);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .07);
                }

                .fc-role-icon {
                    flex: 0 0 52px;
                    width: 52px;
                    height: 52px;
                    border-radius: 13px;
                    display: grid;
                    place-items: center;
                    background: var(--fc-card);
                    border: 1px solid var(--fc-border);
                    color: var(--fc-primary-dark);
                }

                .fc-role-card.selected .fc-role-icon {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0b1812;
                }

                .fc-role-icon svg {
                    width: 23px;
                    height: 23px;
                }

                .fc-role-copy {
                    min-width: 0;
                    flex: 1;
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .fc-role-copy strong {
                    color: var(--fc-black);
                    font-family: "Syne", sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                }

                .fc-role-copy span {
                    color: var(--fc-muted);
                    font-size: 11px;
                }

                .fc-role-arrow {
                    color: var(--fc-muted);
                    margin-left: 12px;
                }

                .fc-role-card:hover .fc-role-arrow,
                .fc-role-card.selected .fc-role-arrow {
                    color: var(--fc-primary-dark);
                }

                .fc-role-arrow svg {
                    width: 19px;
                    height: 19px;
                }

                .fc-security-note {
                    margin: 25px 0 0;
                    color: var(--fc-muted);
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 10px;
                }

                .fc-security-note svg {
                    width: 14px;
                    height: 14px;
                    color: var(--fc-primary-dark);
                }

                .fc-form-heading-row {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                }

                .fc-change-role {
                    border: 0;
                    background: transparent;
                    color: var(--fc-muted);
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    padding: 5px 0;
                }

                .fc-change-role:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-error-summary {
                    margin-top: 24px;
                    padding: 12px 14px;
                    border: 1px solid rgba(220, 79, 92, .22);
                    background: rgba(220, 79, 92, .06);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .fc-error-summary strong {
                    color: var(--fc-danger);
                    font-size: 11px;
                }

                .fc-error-summary span {
                    color: var(--fc-muted);
                    font-size: 10px;
                }

                .fc-form-section {
                    margin-top: 35px;
                    padding-top: 28px;
                    border-top: 1px solid var(--fc-border);
                }

                .fc-section-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 18px;
                    color: var(--fc-text);
                    font-size: 11px;
                    font-weight: 800;
                }

                .fc-section-title span {
                    color: var(--fc-primary-dark);
                    font-family: "Syne", sans-serif;
                    font-size: 10px;
                }

                .fc-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 17px 14px;
                }

                .fc-field {
                    min-width: 0;
                }

                .fc-field-full {
                    grid-column: 1 / -1;
                }

                .fc-field label {
                    display: block;
                    margin-bottom: 7px;
                    color: var(--fc-text);
                    font-size: 10px;
                    font-weight: 700;
                }

                .fc-input-wrap {
                    min-height: 46px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--fc-border);
                    background: var(--fc-input);
                    border-radius: 10px;
                    transition: .2s ease;
                }

                .fc-input-wrap:focus-within {
                    border-color: var(--fc-primary);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .08);
                }

                .fc-field-icon {
                    width: 44px;
                    flex: 0 0 44px;
                    display: grid;
                    place-items: center;
                    color: #91a099;
                }

                .fc-field-icon svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-input-wrap input,
                .fc-input-wrap select {
                    width: 100%;
                    height: 44px;
                    min-width: 0;
                    padding: 0 13px 0 0;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: var(--fc-text);
                    font: inherit;
                    font-size: 12px;
                }

                .fc-input-wrap input::placeholder,
                .fc-field textarea::placeholder {
                    color: #a3aea8;
                }

                .fc-input-wrap select {
                    cursor: pointer;
                    appearance: none;
                    padding-right: 40px;
                }

                .fc-select-arrow {
                    position: absolute;
                    right: 13px;
                    pointer-events: none;
                    color: var(--fc-muted);
                }

                .fc-select-arrow svg {
                    width: 15px;
                    height: 15px;
                }

                .fc-field textarea {
                    width: 100%;
                    resize: vertical;
                    min-height: 100px;
                    border: 1px solid var(--fc-border);
                    border-radius: 10px;
                    background: var(--fc-input);
                    color: var(--fc-text);
                    padding: 12px 13px;
                    outline: 0;
                    font: inherit;
                    font-size: 12px;
                    line-height: 1.6;
                    transition: .2s ease;
                }

                .fc-field textarea:focus {
                    border-color: var(--fc-primary);
                    box-shadow: 0 0 0 3px rgba(72, 213, 151, .08);
                }

                .fc-password-toggle {
                    width: 40px;
                    height: 40px;
                    margin-right: 3px;
                    border: 0;
                    background: transparent;
                    color: var(--fc-muted);
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                }

                .fc-password-toggle:hover {
                    color: var(--fc-primary-dark);
                }

                .fc-password-toggle svg {
                    width: 17px;
                    height: 17px;
                }

                .fc-password-strength {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 7px;
                }

                .fc-strength-bars {
                    flex: 1;
                    display: flex;
                    gap: 3px;
                }

                .fc-strength-bars span {
                    height: 3px;
                    flex: 1;
                    border-radius: 10px;
                    background: var(--fc-border);
                }

                .fc-strength-bars span.active {
                    background: var(--fc-primary);
                }

                .fc-password-strength > span {
                    min-width: 35px;
                    text-align: right;
                    color: var(--fc-muted);
                    font-size: 9px;
                    font-weight: 700;
                }

                .fc-field-error {
                    display: block;
                    margin-top: 5px;
                    color: var(--fc-danger);
                    font-size: 10px;
                    line-height: 1.4;
                }

                .fc-terms {
                    margin-top: 26px;
                }

                .fc-checkbox {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    cursor: pointer;
                    color: var(--fc-muted);
                    font-size: 10px;
                    line-height: 1.5;
                }

                .fc-checkbox input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                }

                .fc-checkmark {
                    flex: 0 0 17px;
                    width: 17px;
                    height: 17px;
                    margin-top: -1px;
                    border: 1px solid var(--fc-border);
                    border-radius: 5px;
                    display: grid;
                    place-items: center;
                    color: transparent;
                    transition: .2s ease;
                }

                .fc-checkbox input:checked + .fc-checkmark {
                    background: var(--fc-primary);
                    border-color: var(--fc-primary);
                    color: #0b1711;
                }

                .fc-checkmark svg {
                    width: 11px;
                    height: 11px;
                }

                .fc-checkbox a {
                    color: var(--fc-text);
                    font-weight: 700;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }

                .fc-form-actions {
                    margin-top: 27px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .fc-back-button,
                .fc-submit-button {
                    min-height: 45px;
                    border-radius: 10px;
                    font-family: "DM Sans", sans-serif;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: .2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .fc-back-button {
                    padding: 0 15px;
                    color: var(--fc-muted);
                    background: transparent;
                    border: 1px solid var(--fc-border);
                }

                .fc-back-button:hover:not(:disabled) {
                    color: var(--fc-text);
                    border-color: var(--fc-muted);
                }

                .fc-back-button svg,
                .fc-submit-button svg {
                    width: 15px;
                    height: 15px;
                }

                .fc-submit-button {
                    flex: 1;
                    max-width: 260px;
                    margin-left: auto;
                    padding: 0 22px;
                    color: #0a1710;
                    border: 1px solid var(--fc-primary);
                    background: var(--fc-primary);
                    box-shadow: 0 9px 24px rgba(72, 213, 151, .18);
                }

                .fc-submit-button:hover:not(:disabled) {
                    background: #61dda6;
                    border-color: #61dda6;
                    transform: translateY(-1px);
                    box-shadow: 0 12px 28px rgba(72, 213, 151, .25);
                }

                .fc-back-button:disabled,
                .fc-submit-button:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                    transform: none;
                }

                .fc-spinner {
                    width: 13px;
                    height: 13px;
                    border: 2px solid rgba(10,23,16,.25);
                    border-top-color: #0a1710;
                    border-radius: 50%;
                    animation: fc-spin .7s linear infinite;
                }

                @keyframes fc-spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (max-width: 1000px) {
                    .fc-register-card {
                        grid-template-columns: 1fr;
                    }

                    .fc-brand-panel {
                        display: none;
                    }

                    .fc-form-container {
                        max-width: 700px;
                    }

                    .fc-mobile-logo {
                        display: inline-flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 36px;
                    }
                }

                @media (max-width: 700px) {
                    .fc-topbar {
                        width: calc(100% - 30px);
                        height: 72px;
                    }

                    .fc-login-copy {
                        display: none;
                    }

                    .fc-topbar-right {
                        gap: 12px;
                    }

                    .fc-register-shell {
                        width: calc(100% - 24px);
                        margin-top: 8px;
                        margin-bottom: 25px;
                    }

                    .fc-register-card {
                        border-radius: 20px;
                    }

                    .fc-form-container {
                        padding: 30px 22px 32px;
                    }

                    .fc-progress {
                        margin-bottom: 36px;
                    }

                    .fc-progress-item span:last-child {
                        display: none;
                    }

                    .fc-progress-line {
                        margin: 0 10px;
                    }

                    .fc-heading h2 {
                        font-size: 27px;
                    }

                    .fc-form-grid {
                        grid-template-columns: 1fr;
                    }

                    .fc-field-full {
                        grid-column: auto;
                    }

                    .fc-form-section {
                        margin-top: 28px;
                        padding-top: 24px;
                    }

                    .fc-form-actions {
                        flex-direction: column-reverse;
                        align-items: stretch;
                    }

                    .fc-submit-button {
                        width: 100%;
                        max-width: none;
                    }

                    .fc-back-button {
                        width: 100%;
                    }

                    .fc-form-heading-row {
                        gap: 12px;
                    }
                }

                @media (max-width: 430px) {
                    .fc-logo-text {
                        font-size: 18px;
                    }

                    .fc-theme-button {
                        width: 35px;
                        height: 35px;
                    }

                    .fc-role-card {
                        min-height: 84px;
                        padding: 13px;
                    }

                    .fc-role-icon {
                        width: 45px;
                        height: 45px;
                        flex-basis: 45px;
                    }

                    .fc-role-copy {
                        margin-left: 11px;
                    }

                    .fc-role-copy strong {
                        font-size: 12px;
                    }

                    .fc-role-copy span {
                        font-size: 10px;
                    }

                    .fc-role-arrow {
                        margin-left: 6px;
                    }
                }
            `}</style>
        </>
    );
}