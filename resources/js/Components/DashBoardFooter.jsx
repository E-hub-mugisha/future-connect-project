import { useState } from 'react';

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <>
            <style>{`
                .talent-footer {
                    position: relative;
                    margin-left: 250px;
                    background: #0b1220;
                    color: #fff;
                    font-family: 'DM Sans', sans-serif;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }

                .talent-footer-inner {
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 52px 36px 28px;
                }

                /* =========================
                   TOP FOOTER
                ========================= */

                .footer-main {
                    display: grid;
                    grid-template-columns: minmax(250px, 1.8fr) repeat(3, minmax(130px, 1fr));
                    gap: 50px;
                    padding-bottom: 42px;
                }

                .footer-brand {
                    max-width: 340px;
                }

                .footer-brand-logo {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 18px;
                    text-decoration: none;
                    color: #fff;
                }

                .footer-logo-mark {
                    width: 42px;
                    height: 42px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #5d89c8, #3d6fae);
                    color: #fff;
                    font-weight: 800;
                    font-size: 17px;
                    box-shadow: 0 8px 22px rgba(93,137,200,0.25);
                }

                .footer-logo-text {
                    font-size: 19px;
                    font-weight: 700;
                    letter-spacing: -0.4px;
                }

                .footer-brand-description {
                    margin: 0;
                    color: rgba(255,255,255,0.58);
                    font-size: 13.5px;
                    line-height: 1.75;
                    max-width: 320px;
                }

                .footer-column-title {
                    margin: 4px 0 17px;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.2px;
                }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 11px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .footer-links a {
                    display: inline-flex;
                    align-items: center;
                    width: fit-content;
                    color: rgba(255,255,255,0.53);
                    text-decoration: none;
                    font-size: 13px;
                    transition:
                        color 0.18s ease,
                        transform 0.18s ease;
                }

                .footer-links a:hover {
                    color: #fff;
                    transform: translateX(3px);
                }

                /* =========================
                   CTA
                ========================= */

                .footer-cta {
                    margin-top: 28px;
                    padding: 18px;
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.035);
                    border-radius: 14px;
                }

                .footer-cta-title {
                    margin: 0 0 6px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                }

                .footer-cta-text {
                    margin: 0;
                    font-size: 12px;
                    line-height: 1.6;
                    color: rgba(255,255,255,0.48);
                }

                /* =========================
                   SOCIAL
                ========================= */

                .footer-socials {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 22px;
                }

                .footer-social {
                    width: 34px;
                    height: 34px;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.62);
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255,255,255,0.035);
                    text-decoration: none;
                    transition:
                        color 0.18s ease,
                        background 0.18s ease,
                        border-color 0.18s ease,
                        transform 0.18s ease;
                }

                .footer-social:hover {
                    color: #fff;
                    background: rgba(93,137,200,0.18);
                    border-color: rgba(93,137,200,0.4);
                    transform: translateY(-2px);
                }

                /* =========================
                   BOTTOM BAR
                ========================= */

                .footer-bottom {
                    min-height: 62px;
                    padding-top: 22px;
                    border-top: 1px solid rgba(255,255,255,0.07);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .footer-copyright {
                    margin: 0;
                    color: rgba(255,255,255,0.42);
                    font-size: 12px;
                }

                .footer-copyright button {
                    border: 0;
                    padding: 0;
                    background: none;
                    color: #82a9dc;
                    font: inherit;
                    font-weight: 600;
                    cursor: pointer;
                    transition: color 0.18s ease;
                }

                .footer-copyright button:hover {
                    color: #fff;
                }

                .footer-bottom-links {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .footer-bottom-links a {
                    color: rgba(255,255,255,0.42);
                    text-decoration: none;
                    font-size: 12px;
                    transition: color 0.18s ease;
                }

                .footer-bottom-links a:hover {
                    color: #fff;
                }

                /* =========================
                   STATUS
                ========================= */

                .footer-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: rgba(255,255,255,0.42);
                    font-size: 11.5px;
                }

                .footer-status-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #46c88a;
                    box-shadow: 0 0 0 4px rgba(70,200,138,0.10);
                }

                /* =========================
                   MODAL
                ========================= */

                .developer-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(4,9,17,0.72);
                    backdrop-filter: blur(8px);
                }

                .developer-modal {
                    width: 100%;
                    max-width: 470px;
                    overflow: hidden;
                    position: relative;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    background: #111a2a;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.35);
                    animation: developerModalIn 0.2s ease-out;
                }

                @keyframes developerModalIn {
                    from {
                        opacity: 0;
                        transform: translateY(12px) scale(0.98);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .developer-modal-header {
                    padding: 25px;
                    background:
                        radial-gradient(
                            circle at top right,
                            rgba(93,137,200,0.22),
                            transparent 45%
                        );
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }

                .developer-profile {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .developer-avatar {
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #5d89c8, #416fa8);
                    color: #fff;
                    font-weight: 800;
                    font-size: 16px;
                    box-shadow: 0 8px 25px rgba(93,137,200,0.25);
                }

                .developer-name {
                    margin: 0;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 700;
                }

                .developer-role {
                    margin: 4px 0 0;
                    color: rgba(255,255,255,0.48);
                    font-size: 12px;
                }

                .developer-close {
                    position: absolute;
                    top: 18px;
                    right: 18px;
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.04);
                    color: rgba(255,255,255,0.6);
                    cursor: pointer;
                    transition: all 0.18s ease;
                }

                .developer-close:hover {
                    background: rgba(255,255,255,0.09);
                    color: #fff;
                }

                .developer-body {
                    padding: 22px;
                }

                .developer-intro {
                    margin: 0 0 18px;
                    color: rgba(255,255,255,0.5);
                    font-size: 12.5px;
                    line-height: 1.65;
                }

                .developer-contact-list {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }

                .developer-contact {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 12px;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 12px;
                    background: rgba(255,255,255,0.025);
                    color: #fff;
                    text-decoration: none;
                    transition:
                        background 0.18s ease,
                        border-color 0.18s ease,
                        transform 0.18s ease;
                }

                .developer-contact:hover {
                    background: rgba(93,137,200,0.09);
                    border-color: rgba(93,137,200,0.28);
                    transform: translateY(-1px);
                }

                .developer-contact-icon {
                    width: 36px;
                    height: 36px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: rgba(93,137,200,0.14);
                    color: #82a9dc;
                }

                .developer-contact-label {
                    margin: 0 0 2px;
                    color: rgba(255,255,255,0.4);
                    font-size: 10.5px;
                }

                .developer-contact-value {
                    margin: 0;
                    color: #fff;
                    font-size: 12.5px;
                    font-weight: 600;
                }

                /* =========================
                   TABLET
                ========================= */

                @media (max-width: 1100px) {
                    .talent-footer {
                        margin-left: 0;
                    }

                    .footer-main {
                        grid-template-columns: 1.5fr repeat(3, 1fr);
                        gap: 30px;
                    }
                }

                /* =========================
                   MOBILE
                ========================= */

                @media (max-width: 760px) {
                    .talent-footer-inner {
                        padding: 38px 22px 22px;
                    }

                    .footer-main {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 34px 25px;
                    }

                    .footer-brand {
                        grid-column: 1 / -1;
                        max-width: 100%;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                    }

                    .footer-bottom-links {
                        gap: 15px;
                        flex-wrap: wrap;
                    }
                }

                @media (max-width: 480px) {
                    .footer-main {
                        grid-template-columns: 1fr 1fr;
                    }

                    .footer-brand {
                        grid-column: 1 / -1;
                    }

                    .footer-bottom-links {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .footer-status {
                        display: none;
                    }

                    .developer-overlay {
                        padding: 14px;
                    }

                    .developer-modal {
                        border-radius: 17px;
                    }

                    .developer-modal-header {
                        padding: 21px;
                    }

                    .developer-body {
                        padding: 18px;
                    }
                }
            `}</style>

            <footer className="talent-footer">
                <div className="talent-footer-inner">
                    {/* =========================
                        BOTTOM
                    ========================= */}

                    <div className="footer-bottom">

                        <p className="footer-copyright">
                            © {year} TalentHub. All rights reserved.
                            {' '}
                            <span>Crafted by </span>

                            <button
                                type="button"
                                onClick={() => setModalOpen(true)}
                            >
                                HOMIEZ
                            </button>
                        </p>

                        <div className="footer-bottom-links">

                            <a href="#!">
                                Privacy
                            </a>

                            <a href="#!">
                                Terms
                            </a>

                            <a href="#!">
                                Cookies
                            </a>

                            <span className="footer-status">
                                <span className="footer-status-dot" />
                                Platform operational
                            </span>

                        </div>

                    </div>
                </div>
            </footer>

            {/* =========================
                DEVELOPER MODAL
            ========================= */}

            {modalOpen && (
                <div
                    className="developer-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setModalOpen(false);
                        }
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="developer-title"
                >

                    <div className="developer-modal">

                        <button
                            type="button"
                            className="developer-close"
                            onClick={() => setModalOpen(false)}
                            aria-label="Close"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6L18 18" />
                            </svg>
                        </button>

                        <div className="developer-modal-header">

                            <div className="developer-profile">

                                <div className="developer-avatar">
                                    ME
                                </div>

                                <div>
                                    <h3
                                        id="developer-title"
                                        className="developer-name"
                                    >
                                        Mugisha Eric
                                    </h3>

                                    <p className="developer-role">
                                        Full-Stack Developer · HOMIEZ
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="developer-body">

                            <p className="developer-intro">
                                Interested in building a digital product,
                                improving an existing platform, or discussing
                                a technical project? Get in touch directly.
                            </p>

                            <div className="developer-contact-list">

                                {/* Phone */}
                                <a
                                    href="tel:+250782390919"
                                    className="developer-contact"
                                >
                                    <span className="developer-contact-icon">
                                        <svg
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 11.5 19.79 19.79 0 01.0 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                                        </svg>
                                    </span>

                                    <div>
                                        <p className="developer-contact-label">
                                            Phone
                                        </p>

                                        <p className="developer-contact-value">
                                            +250 782 390 919
                                        </p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/250782390919"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="developer-contact"
                                >
                                    <span className="developer-contact-icon">
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        </svg>
                                    </span>

                                    <div>
                                        <p className="developer-contact-label">
                                            WhatsApp
                                        </p>

                                        <p className="developer-contact-value">
                                            +250 782 390 919
                                        </p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:kericmugisha@gmail.com"
                                    className="developer-contact"
                                >
                                    <span className="developer-contact-icon">
                                        <svg
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect
                                                x="3"
                                                y="5"
                                                width="18"
                                                height="14"
                                                rx="2"
                                            />

                                            <path d="M3 7l9 6 9-6" />
                                        </svg>
                                    </span>

                                    <div>
                                        <p className="developer-contact-label">
                                            Email
                                        </p>

                                        <p className="developer-contact-value">
                                            kericmugisha@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/mugisha-eric-411547135/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="developer-contact"
                                >
                                    <span className="developer-contact-icon">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle
                                                cx="4"
                                                cy="4"
                                                r="2"
                                            />
                                        </svg>
                                    </span>

                                    <div>
                                        <p className="developer-contact-label">
                                            LinkedIn
                                        </p>

                                        <p className="developer-contact-value">
                                            Mugisha Eric
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}