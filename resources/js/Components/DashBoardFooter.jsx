import { useState } from 'react';

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <>
            <style>{`
                /* =========================================================
                   TALENTHUB LIGHT FOOTER
                ========================================================= */

                .talent-footer {
                    position: relative;
                    margin-left: 250px;
                    background: #ffffff;
                    color: #172033;
                    font-family: 'DM Sans', sans-serif;
                    border-top: 1px solid #e8edf4;
                }

                .talent-footer-inner {
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 0 36px;
                }

                /* =========================================================
                   BOTTOM BAR
                ========================================================= */

                .footer-bottom {
                    min-height: 70px;
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .footer-copyright {
                    margin: 0;
                    color: #7a8496;
                    font-size: 12px;
                    line-height: 1.6;
                }

                .footer-copyright button {
                    border: 0;
                    padding: 0;
                    background: none;
                    color: #5d89c8;
                    font: inherit;
                    font-weight: 700;
                    cursor: pointer;
                    transition: color 0.18s ease;
                }

                .footer-copyright button:hover {
                    color: #3f6fae;
                }

                /* =========================================================
                   BOTTOM LINKS
                ========================================================= */

                .footer-bottom-links {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .footer-bottom-links a {
                    color: #7a8496;
                    text-decoration: none;
                    font-size: 12px;
                    transition:
                        color 0.18s ease,
                        transform 0.18s ease;
                }

                .footer-bottom-links a:hover {
                    color: #5d89c8;
                }

                /* =========================================================
                   STATUS
                ========================================================= */

                .footer-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: #7a8496;
                    font-size: 11.5px;
                }

                .footer-status-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #46c88a;
                    box-shadow: 0 0 0 4px rgba(70, 200, 138, 0.10);
                }

                /* =========================================================
                   MODAL OVERLAY
                ========================================================= */

                .developer-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(15, 23, 42, 0.38);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }

                /* =========================================================
                   MODAL
                ========================================================= */

                .developer-modal {
                    width: 100%;
                    max-width: 470px;
                    overflow: hidden;
                    position: relative;

                    border: 1px solid #e5eaf1;
                    border-radius: 20px;

                    background: #ffffff;

                    box-shadow:
                        0 30px 80px rgba(31, 45, 61, 0.18),
                        0 10px 30px rgba(31, 45, 61, 0.08);

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

                /* =========================================================
                   MODAL HEADER
                ========================================================= */

                .developer-modal-header {
                    padding: 25px;

                    background:
                        radial-gradient(
                            circle at top right,
                            rgba(93, 137, 200, 0.14),
                            transparent 45%
                        ),
                        #f8fafc;

                    border-bottom: 1px solid #e8edf4;
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

                    background: linear-gradient(
                        135deg,
                        #5d89c8,
                        #416fa8
                    );

                    color: #ffffff;

                    font-weight: 800;
                    font-size: 16px;

                    box-shadow:
                        0 8px 25px rgba(93, 137, 200, 0.24);
                }

                .developer-name {
                    margin: 0;
                    color: #172033;
                    font-size: 16px;
                    font-weight: 700;
                }

                .developer-role {
                    margin: 4px 0 0;
                    color: #7a8496;
                    font-size: 12px;
                }

                /* =========================================================
                   CLOSE BUTTON
                ========================================================= */

                .developer-close {
                    position: absolute;
                    top: 18px;
                    right: 18px;

                    width: 32px;
                    height: 32px;

                    border: 1px solid #e3e8ef;
                    border-radius: 9px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: #ffffff;
                    color: #7a8496;

                    cursor: pointer;

                    transition:
                        background 0.18s ease,
                        color 0.18s ease,
                        border-color 0.18s ease,
                        transform 0.18s ease;
                }

                .developer-close:hover {
                    background: #f1f5f9;
                    border-color: #d6deea;
                    color: #172033;
                    transform: rotate(3deg);
                }

                /* =========================================================
                   MODAL BODY
                ========================================================= */

                .developer-body {
                    padding: 22px;
                }

                .developer-intro {
                    margin: 0 0 18px;

                    color: #6f7b8f;

                    font-size: 12.5px;
                    line-height: 1.65;
                }

                /* =========================================================
                   CONTACT LIST
                ========================================================= */

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

                    border: 1px solid #e7ecf2;
                    border-radius: 12px;

                    background: #ffffff;

                    color: #172033;
                    text-decoration: none;

                    transition:
                        background 0.18s ease,
                        border-color 0.18s ease,
                        transform 0.18s ease,
                        box-shadow 0.18s ease;
                }

                .developer-contact:hover {
                    background: #f8fbff;
                    border-color: rgba(93, 137, 200, 0.35);

                    transform: translateY(-1px);

                    box-shadow:
                        0 6px 18px rgba(31, 45, 61, 0.06);
                }

                /* =========================================================
                   CONTACT ICON
                ========================================================= */

                .developer-contact-icon {
                    width: 36px;
                    height: 36px;
                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background: rgba(93, 137, 200, 0.10);
                    color: #5d89c8;
                }

                .developer-contact-label {
                    margin: 0 0 2px;

                    color: #98a2b3;

                    font-size: 10.5px;
                    font-weight: 500;
                }

                .developer-contact-value {
                    margin: 0;

                    color: #263247;

                    font-size: 12.5px;
                    font-weight: 600;
                }

                /* =========================================================
                   TABLET
                ========================================================= */

                @media (max-width: 1100px) {
                    .talent-footer {
                        margin-left: 0;
                    }

                    .talent-footer-inner {
                        padding-left: 30px;
                        padding-right: 30px;
                    }
                }

                /* =========================================================
                   MOBILE
                ========================================================= */

                @media (max-width: 760px) {
                    .talent-footer-inner {
                        padding: 0 22px;
                    }

                    .footer-bottom {
                        min-height: auto;
                        padding: 25px 0;
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
                    .footer-bottom {
                        gap: 13px;
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

            {/* =========================================================
                DEVELOPER MODAL
            ========================================================= */}

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
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
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