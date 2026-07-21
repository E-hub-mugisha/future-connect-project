import { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import DashBoardSidebar from "@/Components/DashBoardSidebar";
import DashBoardTopbar from "@/Components/DashBoardTopbar";
import DashBoardFooter from "@/Components/DashBoardFooter";
import "../../adminator/assets/style.css";
import "../../adminator/assets/runtime.js";
import "../../adminator/assets/vendor-fullcalendar.js";
import "../../adminator/assets/vendor-chartjs.js";
import "../../adminator/assets/vendors.js";
import "../../adminator/assets/2026.js";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

/**
 * Drop-in replacement for the old Blade master layout.
 * Usage in a page component:
 *
 *   export default function SomePage() {
 *       return (
 *           <AppLayout title="Dashboard">
 *               ...page content...
 *           </AppLayout>
 *       );
 *   }
 */
export default function AppLayout({ title, children, notifications = [] }) {
    const { flash } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const appName = import.meta.env.VITE_APP_NAME || "App";

    // Flash message toasts — same behavior as the old Blade @if(session('success')) blocks
    useEffect(() => {
        if (!flash) return;

        if (flash.success) {
            Toast.fire({ icon: "success", title: flash.success });
        }
        if (flash.error) {
            Toast.fire({ icon: "error", title: flash.error });
            Swal.fire({
                icon: "error",
                title: "Access Denied",
                text: flash.error,
                html: `
                    <p class="mt-2">
                        Please contact the administrator if you believe this is a mistake.<br>
                        <strong>Tip:</strong> Make sure you're logged in with the correct account.
                    </p>
                `,
                showConfirmButton: true,
            });
        }
        if (flash.warning) {
            Toast.fire({ icon: "warning", title: flash.warning });
        }
        if (flash.info) {
            Toast.fire({ icon: "info", title: flash.info });
        }
    }, [flash]);

    return (
        <>
            <Head title={title ? `${title} - ${appName}` : appName} />

            <div
                id="sidebar-backdrop"
                className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
                onClick={() => setSidebarOpen(false)}
            />

            <div id="new-sidebar" className={sidebarOpen ? "open" : ""}>
                <DashBoardSidebar />
            </div>

            <DashBoardTopbar
                notifications={notifications}
                onToggleSidebar={() => setSidebarOpen((o) => !o)}
            />

            <div className="min-vh-100 position-relative">
                <div
                    className="page-wrapper"
                    style={{ paddingTop: 60, marginLeft: 250 }}
                >
                    {children}
                </div>
                <DashBoardFooter />
            </div>

            <style>{`
                .sidebar-backdrop {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.45);
                    z-index: 1030;
                }
                .sidebar-backdrop.show { display: block; }
                @media (max-width: 991px) {
                    #new-sidebar {
                        transform: translateX(-100%);
                        transition: transform 0.2s ease;
                    }
                    #new-sidebar.open { transform: translateX(0); }
                    .page-wrapper { margin-left: 0 !important; }
                }
            `}</style>
        </>
    );
}
