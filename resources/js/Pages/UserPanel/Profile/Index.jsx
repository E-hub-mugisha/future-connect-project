import React, { useRef, useState, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/react";
import UserPanelLayout from "@/Layouts/UserPanelLayout";

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

function Toast({ message, type = "success", onDone }) {
    useEffect(() => {
        const t = setTimeout(onDone, 3500);
        return () => clearTimeout(t);
    }, [onDone]);
    return (
        <div className={`pf-toast pf-toast-${type}`}>
            <i className={`ti ${type === "success" ? "ti-circle-check" : "ti-alert-circle"}`} />
            {message}
        </div>
    );
}

function Field({ label, name, type = "text", form, textarea, placeholder, hint, half }) {
    const { data, setData, errors } = form;
    const Comp = textarea ? "textarea" : "input";
    return (
        <div className={`pf-field${half ? " pf-field-half" : ""}`}>
            <label className="pf-label" htmlFor={name}>
                {label}
            </label>
            <Comp
                id={name}
                type={textarea ? undefined : type}
                rows={textarea ? 4 : undefined}
                value={data[name] ?? ""}
                placeholder={placeholder}
                onChange={(e) => setData(name, e.target.value)}
                className={`pf-input${errors[name] ? " pf-input-error" : ""}`}
            />
            {hint && !errors[name] && <span className="pf-hint">{hint}</span>}
            {errors[name] && <span className="pf-error">{errors[name]}</span>}
        </div>
    );
}

export default function Profile() {
    const { props } = usePage();
    const currentUser = props?.auth?.user || {};
    // bio / address / phone / photo live on the related UserDetail record,
    // matching what updateProfile() actually reads and saves.
    const detail = currentUser.detail || {};
    const [tab, setTab] = useState("info");
    const [toast, setToast] = useState(null);
    const fileInputRef = useRef(null);
    const [photoPreview, setPhotoPreview] = useState(detail.photo ? `/image/users/${detail.photo}` : null);

    // ── Profile info form ──
    // updateProfile() only accepts name, bio, photo, address, phone — email is
    // intentionally left out since the controller doesn't validate/save it.
    const infoForm = useForm({
        _method: "put",
        name: currentUser.name || "",
        phone: detail.phone || "",
        address: detail.address || "",
        bio: detail.bio || "",
        photo: null,
    });

    const handlePhotoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        infoForm.setData("photo", file);
        setPhotoPreview(URL.createObjectURL(file));
    };

    const submitInfo = (e) => {
        e.preventDefault();
        infoForm.post(r("user.profile.update", currentUser.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => setToast({ type: "success", message: "Profile updated successfully." }),
            onError: () => setToast({ type: "error", message: "Please check the form for errors." }),
        });
    };

    // ── Password form ──
    const passwordForm = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const submitPassword = (e) => {
        e.preventDefault();
        passwordForm.put(r("user.profile.password"), {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
                setToast({ type: "success", message: "Password changed successfully." });
            },
            onError: () => setToast({ type: "error", message: "Please check the form for errors." }),
        });
    };

    const memberSince = currentUser.created_at
        ? new Date(currentUser.created_at).toLocaleDateString(undefined, { month: "long", year: "numeric" })
        : null;

    return (
        <>
            <style>{`
        .pf-wrap * { box-sizing: border-box; }
        .pf-wrap {
          --pf-green: var(--up-green, #48d597);
          --pf-surface: var(--up-surface, #141d20);
          --pf-surface2: var(--up-surface2, #1a2428);
          --pf-border: var(--up-border, rgba(0,166,103,0.16));
          --pf-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --pf-text: var(--up-text, #e8f0ed);
          --pf-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--pf-text);
          position: relative;
        }

        .pf-head { margin-bottom: 24px; }
        .pf-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--pf-green); margin: 0 0 6px; }
        .pf-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .pf-subtitle { font-size: 13.5px; color: var(--pf-muted); margin: 6px 0 0; }

        .pf-grid { display: grid; grid-template-columns: 300px 1fr; gap: 20px; align-items: start; }

        /* ── Left card ── */
        .pf-card {
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 16px;
          padding: 26px 22px; text-align: center;
        }
        .pf-avatar-wrap { position: relative; width: 96px; height: 96px; margin: 0 auto 16px; }
        .pf-avatar {
          width: 96px; height: 96px; border-radius: 50%; overflow: hidden;
          background: var(--pf-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 30px;
          border: 3px solid var(--pf-surface); box-shadow: 0 0 0 1px var(--pf-border);
        }
        .pf-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .pf-avatar-edit {
          position: absolute; bottom: 0; right: 0; width: 30px; height: 30px; border-radius: 50%;
          background: var(--pf-green); color: #06231a; border: 3px solid var(--pf-surface);
          display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 13px;
        }
        .pf-name { font-family: "Syne", sans-serif; font-weight: 700; font-size: 17px; margin: 0 0 2px; }
        .pf-email { font-size: 12.5px; color: var(--pf-muted); margin: 0 0 16px; word-break: break-all; }
        .pf-meta-row {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12px; color: var(--pf-muted); padding-top: 14px; border-top: 1px solid var(--pf-border);
        }
        .pf-meta-row i { color: var(--pf-green); font-size: 14px; }

        .pf-nav { margin-top: 16px; display: flex; flex-direction: column; gap: 4px; }
        .pf-nav button {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px;
          border: none; background: transparent; color: var(--pf-muted); font-size: 13.5px; font-weight: 500;
          text-align: left; cursor: pointer; transition: all 0.15s; width: 100%;
        }
        .pf-nav button:hover { background: rgba(72,213,151,0.08); color: var(--pf-text); }
        .pf-nav button.active { background: rgba(72,213,151,0.12); color: var(--pf-text); }
        .pf-nav button.active i { color: var(--pf-green); }
        .pf-nav button i { font-size: 15px; width: 18px; text-align: center; }

        /* ── Right panel ── */
        .pf-panel {
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 16px;
          padding: 26px 28px;
        }
        .pf-panel-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 16px; margin: 0 0 4px; }
        .pf-panel-desc { font-size: 13px; color: var(--pf-muted); margin: 0 0 22px; }

        .pf-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 18px; }
        .pf-field { display: flex; flex-direction: column; gap: 6px; grid-column: span 2; }
        .pf-field-half { grid-column: span 1; }
        @media (max-width: 640px) { .pf-field-half { grid-column: span 2; } }

        .pf-label { font-size: 12.5px; font-weight: 600; color: var(--pf-text); }
        .pf-input {
          width: 100%; padding: 11px 13px; border-radius: 10px; border: 1px solid var(--pf-border);
          background: var(--pf-surface2); color: var(--pf-text); font-size: 13.5px; font-family: inherit;
          transition: border-color 0.15s;
        }
        .pf-input::placeholder { color: var(--pf-muted); }
        .pf-input:focus { outline: none; border-color: var(--pf-green); }
        .pf-input-error { border-color: #ff6b6b; }
        textarea.pf-input { resize: vertical; }
        .pf-hint { font-size: 11.5px; color: var(--pf-muted); }
        .pf-error { font-size: 11.5px; color: #ff6b6b; }

        .pf-actions { display: flex; align-items: center; gap: 12px; margin-top: 24px; grid-column: span 2; }
        .pf-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 10px;
          border: none; background: var(--pf-green); color: #06231a; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: opacity 0.15s; font-family: inherit;
        }
        .pf-btn:hover { opacity: 0.9; }
        .pf-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .pf-btn-ghost {
          background: transparent; border: 1px solid var(--pf-border); color: var(--pf-text); font-weight: 500;
        }
        .pf-btn-ghost:hover { border-color: var(--pf-border-h); }

        .pf-divider { height: 1px; background: var(--pf-border); margin: 26px 0; }

        .pf-danger-box {
          border: 1px solid rgba(255,107,107,0.3); background: rgba(255,107,107,0.05);
          border-radius: 12px; padding: 16px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
        }
        .pf-danger-box h6 { margin: 0 0 3px; font-size: 13.5px; font-family: "Syne", sans-serif; }
        .pf-danger-box p { margin: 0; font-size: 12px; color: var(--pf-muted); }
        .pf-btn-danger { background: transparent; border: 1px solid #ff6b6b; color: #ff6b6b; }
        .pf-btn-danger:hover { background: rgba(255,107,107,0.1); }

        /* ── Toast ── */
        .pf-toast {
          position: fixed; top: 20px; right: 20px; z-index: 100;
          display: flex; align-items: center; gap: 10px; padding: 13px 18px; border-radius: 12px;
          background: var(--pf-surface); border: 1px solid var(--pf-border); font-size: 13.5px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          animation: pf-slide-in 0.25s ease;
        }
        .pf-toast-success i { color: var(--pf-green); }
        .pf-toast-error i { color: #ff6b6b; }
        @keyframes pf-slide-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .pf-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="pf-wrap">
                {toast && <Toast {...toast} onDone={() => setToast(null)} />}

                <div className="pf-head">
                    <p className="pf-eyebrow">Account</p>
                    <h1 className="pf-title">Profile settings</h1>
                    <p className="pf-subtitle">Manage your personal information and account security.</p>
                </div>

                <div className="pf-grid">
                    {/* Left summary card */}
                    <div className="pf-card">
                        <div className="pf-avatar-wrap">
                            <span className="pf-avatar">
                                {photoPreview ? (
                                    <img src={photoPreview} alt={currentUser.name} />
                                ) : (
                                    getInitials(currentUser.name)
                                )}
                            </span>
                            <label className="pf-avatar-edit" htmlFor="photo-upload">
                                <i className="ti ti-camera" />
                            </label>
                            <input
                                ref={fileInputRef}
                                id="photo-upload"
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                style={{ display: "none" }}
                                onChange={handlePhotoChange}
                            />
                        </div>
                        <h4 className="pf-name">{currentUser.name || "Your name"}</h4>
                        <p className="pf-email">{currentUser.email}</p>
                        {memberSince && (
                            <div className="pf-meta-row">
                                <i className="ti ti-calendar" /> Member since {memberSince}
                            </div>
                        )}

                        <nav className="pf-nav">
                            <button
                                className={tab === "info" ? "active" : ""}
                                onClick={() => setTab("info")}
                                type="button"
                            >
                                <i className="ti ti-user" /> Personal info
                            </button>
                            <button
                                className={tab === "security" ? "active" : ""}
                                onClick={() => setTab("security")}
                                type="button"
                            >
                                <i className="ti ti-lock" /> Security
                            </button>
                        </nav>
                    </div>

                    {/* Right content */}
                    {tab === "info" ? (
                        <div className="pf-panel">
                            <h6 className="pf-panel-title">Personal information</h6>
                            <p className="pf-panel-desc">
                                Update your name, contact details and a short bio visible on your account.
                            </p>

                            <form onSubmit={submitInfo}>
                                <div className="pf-form-grid">
                                    <Field label="Full name" name="name" form={infoForm} half placeholder="e.g. Jean d'Amour" />
                                    <div className="pf-field pf-field-half">
                                        <label className="pf-label" htmlFor="email-readonly">
                                            Email address
                                        </label>
                                        <input
                                            id="email-readonly"
                                            className="pf-input"
                                            value={currentUser.email || ""}
                                            disabled
                                            style={{ opacity: 0.6, cursor: "not-allowed" }}
                                        />
                                        <span className="pf-hint">Email can't be changed here — contact support to update it.</span>
                                    </div>
                                    <Field label="Phone number" name="phone" form={infoForm} half placeholder="078XXXXXXX" />
                                    <Field label="Address" name="address" form={infoForm} half placeholder="District, City" />
                                    <Field
                                        label="Bio"
                                        name="bio"
                                        form={infoForm}
                                        textarea
                                        placeholder="A short introduction about yourself"
                                        hint="Max 500 characters."
                                    />

                                    <div className="pf-actions">
                                        <button type="submit" className="pf-btn" disabled={infoForm.processing}>
                                            {infoForm.processing ? (
                                                <>
                                                    <i className="ti ti-loader-2" /> Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="ti ti-device-floppy" /> Save changes
                                                </>
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            className="pf-btn pf-btn-ghost"
                                            onClick={() => {
                                                infoForm.reset();
                                                setPhotoPreview(detail.photo ? `/image/users/${detail.photo}` : null);
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="pf-panel">
                            <h6 className="pf-panel-title">Security</h6>
                            <p className="pf-panel-desc">Change your password to keep your account secure.</p>

                            <form onSubmit={submitPassword}>
                                <div className="pf-form-grid">
                                    <Field
                                        label="Current password"
                                        name="current_password"
                                        type="password"
                                        form={passwordForm}
                                        placeholder="Enter current password"
                                    />
                                    <Field
                                        label="New password"
                                        name="password"
                                        type="password"
                                        form={passwordForm}
                                        half
                                        placeholder="At least 8 characters"
                                    />
                                    <Field
                                        label="Confirm new password"
                                        name="password_confirmation"
                                        type="password"
                                        form={passwordForm}
                                        half
                                        placeholder="Repeat new password"
                                    />

                                    <div className="pf-actions">
                                        <button type="submit" className="pf-btn" disabled={passwordForm.processing}>
                                            {passwordForm.processing ? (
                                                <>
                                                    <i className="ti ti-loader-2" /> Updating...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="ti ti-shield-check" /> Update password
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="pf-divider" />

                            <div className="pf-danger-box">
                                <div>
                                    <h6>Sign out everywhere</h6>
                                    <p>Log out of all other sessions on other devices and browsers.</p>
                                </div>
                                <button type="button" className="pf-btn pf-btn-danger">
                                    <i className="ti ti-logout-2" /> Sign out other sessions
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Profile.layout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;