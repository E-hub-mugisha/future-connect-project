import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

function r(name, params) {
    try {
        return route(name, params);
    } catch (e) {
        console.warn(
            `route("${name}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`,
        );
        return "#";
    }
}

const BENEFITS = [
    {
        icon: "ti-certificate",
        title: "Verified skills profile",
        desc: "Showcase what you can actually do, get verified, and stand out to employers browsing the marketplace.",
    },
    {
        icon: "ti-book-2",
        title: "Learning Center",
        desc: "Short, affordable, high-quality courses taught by experts — built to close the gap between school and work.",
    },
    {
        icon: "ti-messages",
        title: "Mentorship via Connect Room",
        desc: "Message and meet verified professionals directly. Ask questions, get guidance, build real relationships.",
    },
    {
        icon: "ti-briefcase",
        title: "Real opportunities",
        desc: "Apply to freelance gigs, internships, and entry-level roles from companies actively hiring on the platform.",
    },
];

const STEPS = [
    {
        title: "Create your profile",
        desc: "Sign up and list your skills, experience, and aspirations — with text, images, or video.",
    },
    {
        title: "Get verified",
        desc: "Boost your credibility with a verification badge that helps you reach more employers.",
    },
    {
        title: "Learn & connect",
        desc: "Take a course in the Learning Center, or book time with a mentor in the Connect Room.",
    },
    {
        title: "Apply & grow",
        desc: "Browse the marketplace, set up alerts, and apply to gigs and jobs that match your goals.",
    },
];

export default function ForStudents() {
    return (
        <>
            <Head title="For Students" />

            <style>{`
        .fc-sol-page * { box-sizing: border-box; }

        /* Dark theme (default — matches the rest of the site's dark mode) */
        .fc-sol-page {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #F5f5f7;
          --fc-muted: #9fb0ae;
          background: var(--fc-bg);
          color: var(--fc-white);
        }

        /* Light theme override — toggled via data-h-theme="light" on <html>,
           the same attribute the header's theme switch sets. The original
           page had no light variant at all; this is new. */
        [data-h-theme="light"] .fc-sol-page {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #F5f5f7;
          --fc-border: rgba(0, 100, 60, 0.14);
          --fc-accent: #00a667;
          --fc-accent-dark: #00814f;
          --fc-white: #10201b;
          --fc-muted: #4f6b65;
        }

        /* Hero */
        .fc-sol-hero {
          padding: 90px 0 70px;
          background:
            radial-gradient(circle at 12% 15%, rgba(72,213,151,.14), transparent 45%),
            radial-gradient(circle at 88% 85%, rgba(72,213,151,.08), transparent 50%),
            var(--fc-bg);
          border-bottom: 1px solid var(--fc-border);
        }
        [data-h-theme="light"] .fc-sol-hero {
          background:
            radial-gradient(circle at 12% 15%, rgba(0,166,103,.08), transparent 45%),
            radial-gradient(circle at 88% 85%, rgba(0,166,103,.05), transparent 50%),
            var(--fc-bg);
        }
        .fc-sol-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; color: var(--fc-accent); font-weight: 700;
          font-size: .82rem; text-transform: uppercase; letter-spacing: .08em;
          background: rgba(72,213,151,.1); padding: 6px 16px; border-radius: 30px; margin-bottom: 18px;
        }
        [data-h-theme="light"] .fc-sol-eyebrow { background: rgba(0,166,103,.08); }
        .fc-sol-hero h1 { font-weight: 700; font-size: 2.6rem; letter-spacing: -.5px; margin-bottom: 18px; }
        .fc-sol-hero h1 span { color: var(--fc-accent); }
        .fc-sol-hero p.lead { color: var(--fc-muted); font-size: 1.1rem; max-width: 520px; margin-bottom: 28px; }

        .btn-fc-primary {
          background: var(--fc-accent); border: none; color: #06231a; font-weight: 700; border-radius: 30px;
          padding: .8rem 2rem; transition: .2s ease; display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; transform: translateY(-2px); }
        [data-h-theme="light"] .btn-fc-primary { color: #F5f5f7; }
        [data-h-theme="light"] .btn-fc-primary:hover { color: #F5f5f7; }

        .btn-fc-ghost {
          background: transparent; border: 1px solid var(--fc-border); color: var(--fc-white); font-weight: 600;
          border-radius: 30px; padding: .8rem 2rem; text-decoration: none; transition: .2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-fc-ghost:hover { border-color: var(--fc-accent); color: var(--fc-accent); }

        .fc-hero-visual {
          background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 24px; padding: 34px;
          position: relative; overflow: hidden;
        }
        .fc-hero-visual::before {
          content: ""; position: absolute; top: -50px; right: -50px; width: 180px; height: 180px;
          background: radial-gradient(circle, rgba(72,213,151,.2), transparent 70%);
        }
        [data-h-theme="light"] .fc-hero-visual::before {
          background: radial-gradient(circle, rgba(0,166,103,.14), transparent 70%);
        }
        .fc-mini-stat {
          background: var(--fc-bg-alt); border: 1px solid var(--fc-border); border-radius: 14px;
          padding: 16px 18px; margin-bottom: 12px;
        }
        .fc-mini-stat strong { color: var(--fc-accent); font-size: 1.4rem; display: block; }
        .fc-mini-stat span { color: var(--fc-muted); font-size: .82rem; }

        /* Benefit cards */
        .fc-sol-section { padding: 70px 0; }
        .fc-sol-section.alt { background: var(--fc-bg-alt); border-top: 1px solid var(--fc-border); border-bottom: 1px solid var(--fc-border); }
        .fc-sol-header { text-align: center; max-width: 640px; margin: 0 auto 46px; }
        .fc-sol-header h2 { font-weight: 700; font-size: 2rem; margin-bottom: 10px; }
        .fc-sol-header h2 span { color: var(--fc-accent); }
        .fc-sol-header p { color: var(--fc-muted); }

        .fc-benefit-card {
          background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 18px;
          padding: 30px 26px; height: 100%; transition: .25s;
        }
        .fc-benefit-card:hover {
          border-color: var(--fc-accent); transform: translateY(-4px); box-shadow: 0 16px 32px rgba(72,213,151,.1);
        }
        [data-h-theme="light"] .fc-benefit-card:hover { box-shadow: 0 16px 32px rgba(0,166,103,.1); }
        .fc-benefit-icon {
          width: 52px; height: 52px; border-radius: 14px; background: rgba(72,213,151,.12); color: var(--fc-accent);
          display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 18px;
        }
        [data-h-theme="light"] .fc-benefit-icon { background: rgba(0,166,103,.1); }
        .fc-benefit-card h5 { font-weight: 700; margin-bottom: 10px; }
        .fc-benefit-card p { color: var(--fc-muted); font-size: .92rem; margin: 0; }

        /* Steps */
        .fc-step { display: flex; gap: 20px; padding: 26px 0; border-bottom: 1px solid var(--fc-border); }
        .fc-step:last-child { border-bottom: none; }
        .fc-step-num {
          flex: 0 0 auto; width: 44px; height: 44px; border-radius: 50%; background: rgba(72,213,151,.12);
          color: var(--fc-accent); display: flex; align-items: center; justify-content: center; font-weight: 700;
        }
        [data-h-theme="light"] .fc-step-num { background: rgba(0,166,103,.1); }
        .fc-step h6 { font-weight: 700; margin-bottom: 6px; }
        .fc-step p { color: var(--fc-muted); margin: 0; font-size: .92rem; }

        /* Stats bar */
        .fc-stats-bar { background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 20px; padding: 36px; }
        .fc-stat-item { text-align: center; }
        .fc-stat-item strong { display: block; font-size: 2rem; font-weight: 700; color: var(--fc-accent); }
        .fc-stat-item span { color: var(--fc-muted); font-size: .85rem; }

        /* Testimonial */
        .fc-testimonial { background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 20px; padding: 40px; position: relative; }
        .fc-testimonial .quote-mark { font-size: 3rem; color: var(--fc-accent); opacity: .3; line-height: 1; }
        .fc-testimonial p.quote { font-size: 1.1rem; color: var(--fc-white); margin: 10px 0 20px; }
        .fc-testimonial .author strong { color: var(--fc-white); display: block; }
        .fc-testimonial .author span { color: var(--fc-muted); font-size: .85rem; }

        /* Final CTA */
        .fc-final-cta {
          background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 24px; padding: 60px;
          text-align: center; position: relative; overflow: hidden;
        }
        .fc-final-cta::before {
          content: ""; position: absolute; top: -70px; left: 50%; transform: translateX(-50%);
          width: 280px; height: 280px; background: radial-gradient(circle, rgba(72,213,151,.16), transparent 70%);
        }
        [data-h-theme="light"] .fc-final-cta::before {
          background: radial-gradient(circle, rgba(0,166,103,.1), transparent 70%);
        }
        .fc-final-cta h2 { font-weight: 700; margin-bottom: 12px; position: relative; }
        .fc-final-cta p { color: var(--fc-muted); max-width: 480px; margin: 0 auto 26px; position: relative; }
      `}</style>

            <div className="fc-sol-page">
                {/* Hero */}
                <section className="fc-sol-hero">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <span className="fc-sol-eyebrow">
                                    <i className="ti ti-school" /> For Students
                                </span>
                                <h1>
                                    Launch your career with{" "}
                                    <span>confidence</span>
                                </h1>
                                <p className="lead">
                                    Build a verified skills profile, learn from
                                    short affordable courses, connect with
                                    mentors, and land your first real
                                    opportunity — all in one platform designed
                                    for students entering the job market.
                                </p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link
                                        href={r("user.register_skills")}
                                        className="btn-fc-primary"
                                    >
                                        <i className="ti ti-rocket" /> Create
                                        your profile
                                    </Link>
                                    <Link
                                        href={r("user.how-it-works")}
                                        className="btn-fc-ghost"
                                    >
                                        <i className="ti ti-player-play" /> See
                                        how it works
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="fc-hero-visual">
                                    <div className="fc-mini-stat">
                                        <strong>8K+</strong>
                                        <span>
                                            Skills listed on the marketplace
                                        </span>
                                    </div>
                                    <div className="fc-mini-stat">
                                        <strong>3×</strong>
                                        <span>
                                            More employer reach with a verified
                                            profile
                                        </span>
                                    </div>
                                    <div className="fc-mini-stat mb-0">
                                        <strong>1000s</strong>
                                        <span>
                                            Of students building their first
                                            career step
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="fc-sol-section">
                    <div className="container">
                        <div className="fc-sol-header">
                            <h2>
                                Everything you need to <span>get hired</span>
                            </h2>
                            <p>
                                From your first skill listing to your first paid
                                gig — one connected path.
                            </p>
                        </div>
                        <div className="row g-4">
                            {BENEFITS.map((b) => (
                                <div
                                    className="col-md-6 col-lg-3"
                                    key={b.title}
                                >
                                    <div className="fc-benefit-card">
                                        <div className="fc-benefit-icon">
                                            <i className={`ti ${b.icon}`} />
                                        </div>
                                        <h5>{b.title}</h5>
                                        <p>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="fc-sol-section alt">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="fc-sol-header text-lg-start mx-lg-0">
                                    <h2>
                                        How it <span>works</span>
                                    </h2>
                                    <p>
                                        Four simple steps from sign-up to your
                                        first opportunity.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                {STEPS.map((step, i) => (
                                    <div className="fc-step" key={step.title}>
                                        <div className="fc-step-num">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h6>{step.title}</h6>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats + testimonial */}
                <section className="fc-sol-section">
                    <div className="container">
                        <div className="row g-4 mb-5">
                            <div className="col-lg-8">
                                <div className="fc-stats-bar h-100">
                                    <div className="row">
                                        <div className="col-4 fc-stat-item">
                                            <strong>8K+</strong>
                                            <span>Skills available</span>
                                        </div>
                                        <div className="col-4 fc-stat-item">
                                            <strong>3×</strong>
                                            <span>Employer reach</span>
                                        </div>
                                        <div className="col-4 fc-stat-item">
                                            <strong>100%</strong>
                                            <span>Verified profiles</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fc-final-cta h-100 d-flex flex-column justify-content-center mb-0 py-4">
                                    <h2 className="h5 mb-2">Ready to start?</h2>
                                    <Link
                                        href={r("user.register_skills")}
                                        className="btn-fc-primary justify-content-center"
                                    >
                                        Join for free
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="fc-testimonial">
                            <div className="quote-mark">"</div>
                            <p className="quote">
                                Building my verified profile on Future Connect
                                got me noticed by a company I never thought
                                would reply to a student. Three weeks later I
                                had my first freelance contract.
                            </p>
                            <div className="author">
                                <strong>A Future Connect student</strong>
                                <span>Computer Science, Class of 2026</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="container">
                    <div className="fc-final-cta">
                        <h2>Your career starts with one profile</h2>
                        <p>
                            Join thousands of students already building their
                            future on Future Connect.
                        </p>
                        <Link
                            href={r("user.register_skills")}
                            className="btn-fc-primary"
                        >
                            Create your free profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

ForStudents.layout = (page) => <GuestLayout children={page} />;
