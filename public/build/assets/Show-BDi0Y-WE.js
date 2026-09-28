import{j as e,H as d,L as r}from"./app-B2SIh33N.js";import{A as b}from"./AppLayout-CkTPU_ZW.js";function x(i){return i?i.split(" ").filter(Boolean).slice(0,2).map(o=>{var s;return(s=o[0])==null?void 0:s.toUpperCase()}).join(""):"—"}function f({type:i}){const o=(i??"").toLowerCase(),t={"full-time":{cls:"badge-success",label:"Full-Time"},"part-time":{cls:"badge-info",label:"Part-Time"},contract:{cls:"badge-warning",label:"Contract"},internship:{cls:"badge-neutral",label:"Internship"},remote:{cls:"badge-info",label:"Remote"}}[o]??{cls:"badge-neutral",label:i??"N/A"};return e.jsx("span",{className:`job-badge ${t.cls}`,children:t.label})}function m({status:i}){const o=(i??"pending").toLowerCase(),t={pending:{label:"Pending",className:"application-status pending"},reviewed:{label:"Reviewed",className:"application-status reviewed"},shortlisted:{label:"Shortlisted",className:"application-status shortlisted"},rejected:{label:"Rejected",className:"application-status rejected"},accepted:{label:"Accepted",className:"application-status accepted"}}[o]??{label:i,className:"application-status pending"};return e.jsx("span",{className:t.className,children:t.label})}function g(i){if(!i)return"—";try{return new Date(i).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return i}}function u({job:i}){var t;const o=Array.isArray(i.applications)?i.applications:[],s=Array.isArray(i.skills)?i.skills.map(a=>String(a).trim()).filter(Boolean):typeof i.skills=="string"?i.skills.split(",").map(a=>a.trim()).filter(Boolean):[];return e.jsxs(b,{children:[e.jsx(d,{title:`Job Details: ${i.title}`}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;600&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                :root {
                    --job-bg: #f5f5f7;
                    --job-card: #ffffff;
                    --job-surface: #f8f8fa;

                    --job-text: #1d1d1f;
                    --job-text-secondary: #6e6e73;
                    --job-text-muted: #86868b;

                    --job-border: #e5e5e7;
                    --job-border-soft: #ededee;

                    --job-green: #167c52;
                    --job-green-dark: #116440;
                    --job-green-light: #edf8f2;

                    --job-blue: #2878c8;
                    --job-blue-light: #eef6ff;

                    --job-orange: #a86d00;
                    --job-orange-light: #fff7e6;

                    --job-red: #c43d3d;
                    --job-red-light: #fff0f0;

                    --job-radius: 14px;
                    --job-radius-sm: 10px;

                    --job-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                .fc-job-show,
                .fc-job-show * {
                    box-sizing: border-box;
                }

                .fc-job-show {
                    min-height: 100%;
                    padding: 28px 30px 50px;
                    background: var(--job-bg);
                    color: var(--job-text);
                    font-family: var(--job-font);
                    font-size: 13px;
                    -webkit-font-smoothing: antialiased;
                }

                /* PAGE HEADER */

                .job-page-header {
                    max-width: 1320px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                }

                .job-page-heading {
                    min-width: 0;
                }

                .job-page-heading h1 {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 20px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }

                .job-page-heading p {
                    margin: 5px 0 0;
                    color: var(--job-text-secondary);
                    font-size: 12px;
                    line-height: 1.5;
                }

                /* BUTTONS */

                .job-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 36px;
                    padding: 0 14px;
                    border-radius: 9px;
                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;
                    cursor: pointer;
                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        color .18s ease;
                }

                .job-btn-secondary {
                    color: #424245;
                    background: #fff;
                    border: 1px solid #d9d9dc;
                }

                .job-btn-secondary:hover {
                    color: var(--job-text);
                    background: #f8f8f8;
                    border-color: #c8c8cc;
                }

                .job-btn-primary {
                    color: #fff;
                    background: var(--job-green);
                    border: 1px solid var(--job-green);
                }

                .job-btn-primary:hover {
                    color: #fff;
                    background: var(--job-green-dark);
                    border-color: var(--job-green-dark);
                }

                /* MAIN LAYOUT */

                .job-layout {
                    max-width: 1320px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 390px;
                    gap: 20px;
                    align-items: start;
                }

                /* JOB CARD */

                .job-card {
                    width: 100%;
                    overflow: hidden;
                    background: var(--job-card);
                    border: 1px solid var(--job-border);
                    border-radius: var(--job-radius);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .035);
                }

                /* JOB HERO */

                .job-hero {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    padding: 25px 27px 23px;
                }

                .job-avatar {
                    width: 48px;
                    height: 48px;
                    flex: 0 0 48px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 12px;
                    background: var(--job-green-light);
                    border: 1px solid #d7eee2;

                    color: var(--job-green);
                    font-size: 15px;
                    font-weight: 700;
                }

                .job-hero-content {
                    min-width: 0;
                    flex: 1;
                }

                .job-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 19px;
                    line-height: 1.3;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }

                .job-company {
                    margin: 4px 0 10px;
                    color: var(--job-text-secondary);
                    font-size: 12.5px;
                    font-weight: 500;
                }

                .job-badges {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .job-badge {
                    display: inline-flex;
                    align-items: center;
                    min-height: 24px;
                    padding: 0 9px;
                    border-radius: 7px;
                    font-size: 10.5px;
                    line-height: 1;
                    font-weight: 600;
                }

                .badge-success {
                    color: #167c52;
                    background: #edf8f2;
                }

                .badge-info {
                    color: #2878c8;
                    background: #eef6ff;
                }

                .badge-warning {
                    color: #a86d00;
                    background: #fff7e6;
                }

                .badge-neutral {
                    color: #6e6e73;
                    background: #f1f1f3;
                }

                .badge-outline {
                    color: #5f6368;
                    background: #fff;
                    border: 1px solid #e1e1e3;
                }

                .job-divider {
                    height: 1px;
                    background: var(--job-border-soft);
                }

                /* INFORMATION */

                .job-info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    padding: 18px 27px;
                }

                .job-info-item {
                    min-width: 0;
                    padding: 13px 14px;
                    background: var(--job-surface);
                    border: 1px solid var(--job-border-soft);
                    border-radius: var(--job-radius-sm);
                }

                .job-info-label {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin: 0 0 7px;
                    color: var(--job-text-muted);
                    font-size: 10px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: .045em;
                }

                .job-info-value {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12.5px;
                    line-height: 1.4;
                    font-weight: 600;
                    overflow-wrap: anywhere;
                }

                /* CONTENT */

                .job-section {
                    padding: 22px 27px;
                }

                .job-section + .job-section {
                    border-top: 1px solid var(--job-border-soft);
                }

                .job-section-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 11px;
                }

                .job-section-icon {
                    width: 25px;
                    height: 25px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 7px;
                    background: var(--job-green-light);
                    color: var(--job-green);
                    font-size: 11px;
                }

                .job-section-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 13px;
                    font-weight: 600;
                }

                .job-description {
                    margin: 0;
                    color: #515154;
                    font-size: 12.5px;
                    line-height: 1.75;
                    white-space: pre-line;
                }

                .job-empty {
                    margin: 0;
                    color: var(--job-text-muted);
                    font-size: 12px;
                    font-style: italic;
                }

                /* SKILLS */

                .job-skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .job-skill {
                    display: inline-flex;
                    align-items: center;
                    min-height: 28px;
                    padding: 0 10px;
                    border-radius: 7px;
                    border: 1px solid #dcebe3;
                    background: #f5faf7;
                    color: #34735a;
                    font-size: 11px;
                    font-weight: 500;
                }

                .job-footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 18px 27px;
                    background: #fafafa;
                    border-top: 1px solid var(--job-border-soft);
                }

                /* APPLICATIONS */

                .applications-card {
                    position: sticky;
                    top: 20px;
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid var(--job-border);
                    border-radius: var(--job-radius);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .035);
                }

                .applications-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 18px 18px 16px;
                    border-bottom: 1px solid var(--job-border-soft);
                }

                .applications-heading {
                    min-width: 0;
                }

                .applications-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: -.01em;
                }

                .applications-subtitle {
                    margin: 4px 0 0;
                    color: var(--job-text-muted);
                    font-size: 10.5px;
                }

                .applications-count {
                    min-width: 27px;
                    height: 27px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 8px;
                    border-radius: 8px;
                    background: var(--job-green-light);
                    color: var(--job-green);
                    font-size: 11px;
                    font-weight: 700;
                }

                .applications-list {
                    max-height: 650px;
                    overflow-y: auto;
                }

                .application-item {
                    display: block;
                    padding: 15px 18px;
                    text-decoration: none;
                    color: inherit;
                    border-bottom: 1px solid #f0f0f2;
                    transition: background .15s ease;
                }

                .application-item:hover {
                    background: #fafafa;
                }

                .application-item:last-child {
                    border-bottom: 0;
                }

                .application-top {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }

                .application-avatar {
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;
                    background: #f1f1f3;
                    color: #555;
                    font-size: 11px;
                    font-weight: 700;
                }

                .application-main {
                    min-width: 0;
                    flex: 1;
                }

                .application-name {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1.35;
                }

                .application-email {
                    margin: 3px 0 0;
                    color: var(--job-text-secondary);
                    font-size: 10.5px;
                    line-height: 1.35;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .application-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    margin-top: 11px;
                    padding-left: 44px;
                }

                .application-date {
                    color: var(--job-text-muted);
                    font-size: 10px;
                }

                .application-status {
                    display: inline-flex;
                    align-items: center;
                    min-height: 21px;
                    padding: 0 7px;
                    border-radius: 6px;
                    font-size: 9px;
                    font-weight: 600;
                }

                .application-status.pending {
                    color: #9a6800;
                    background: #fff7df;
                }

                .application-status.reviewed {
                    color: #2878c8;
                    background: #eef6ff;
                }

                .application-status.shortlisted {
                    color: #167c52;
                    background: #edf8f2;
                }

                .application-status.accepted {
                    color: #167c52;
                    background: #e6f6ed;
                }

                .application-status.rejected {
                    color: #c43d3d;
                    background: #fff0f0;
                }

                .application-resume {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 8px;
                    padding-left: 44px;
                    color: var(--job-green);
                    font-size: 10px;
                    font-weight: 500;
                }

                .application-resume:hover {
                    text-decoration: underline;
                }

                .applications-empty {
                    padding: 45px 20px;
                    text-align: center;
                }

                .applications-empty-icon {
                    width: 40px;
                    height: 40px;
                    margin: 0 auto 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;
                    background: #f4f4f5;
                    color: #8a8a8f;
                    font-size: 15px;
                }

                .applications-empty-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .applications-empty-text {
                    margin: 5px 0 0;
                    color: var(--job-text-muted);
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                .applications-footer {
                    padding: 12px 18px;
                    border-top: 1px solid var(--job-border-soft);
                    background: #fafafa;
                }

                .applications-footer .job-btn {
                    width: 100%;
                }

                /* RESPONSIVE */

                @media (max-width: 1100px) {
                    .job-layout {
                        grid-template-columns: minmax(0, 1fr) 340px;
                    }
                }

                @media (max-width: 900px) {
                    .job-layout {
                        grid-template-columns: 1fr;
                    }

                    .applications-card {
                        position: static;
                    }

                    .applications-list {
                        max-height: none;
                    }
                }

                @media (max-width: 760px) {
                    .fc-job-show {
                        padding: 20px 15px 40px;
                    }

                    .job-page-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .job-page-header .job-btn {
                        width: 100%;
                    }

                    .job-info-grid {
                        grid-template-columns: 1fr;
                    }

                    .job-hero,
                    .job-info-grid,
                    .job-section,
                    .job-footer {
                        padding-left: 19px;
                        padding-right: 19px;
                    }

                    .job-footer .job-btn {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    .job-hero {
                        gap: 11px;
                    }

                    .job-avatar {
                        width: 42px;
                        height: 42px;
                        flex-basis: 42px;
                        border-radius: 10px;
                        font-size: 13px;
                    }

                    .job-title {
                        font-size: 17px;
                    }

                    .job-company {
                        font-size: 11.5px;
                    }
                }
            `}),e.jsxs("div",{className:"fc-job-show",children:[e.jsxs("div",{className:"job-page-header",children:[e.jsxs("div",{className:"job-page-heading",children:[e.jsx("h1",{children:"Job Details"}),e.jsx("p",{children:"Review the job information and submitted applications."})]}),e.jsxs(r,{href:route("admin.jobs.index"),className:"job-btn job-btn-secondary",children:[e.jsx("i",{className:"bi bi-arrow-left"}),"Back to Jobs"]})]}),e.jsxs("div",{className:"job-layout",children:[e.jsxs("div",{className:"job-card",children:[e.jsxs("div",{className:"job-hero",children:[e.jsx("div",{className:"job-avatar",children:x(i.title)}),e.jsxs("div",{className:"job-hero-content",children:[e.jsx("h2",{className:"job-title",children:i.title}),((t=i.company)==null?void 0:t.name)&&e.jsx("p",{className:"job-company",children:i.company.name}),e.jsxs("div",{className:"job-badges",children:[e.jsx(f,{type:i.type}),i.experience_level&&e.jsxs("span",{className:"job-badge badge-outline",children:[e.jsx("i",{className:"bi bi-bar-chart me-1"}),i.experience_level]})]})]})]}),e.jsx("div",{className:"job-divider"}),e.jsxs("div",{className:"job-info-grid",children:[e.jsxs("div",{className:"job-info-item",children:[e.jsxs("p",{className:"job-info-label",children:[e.jsx("i",{className:"bi bi-geo-alt"}),"Location"]}),e.jsx("p",{className:"job-info-value",children:i.location||"Not specified"})]}),e.jsxs("div",{className:"job-info-item",children:[e.jsxs("p",{className:"job-info-label",children:[e.jsx("i",{className:"bi bi-briefcase"}),"Employment Type"]}),e.jsx("p",{className:"job-info-value",children:i.type||"Not specified"})]}),e.jsxs("div",{className:"job-info-item",children:[e.jsxs("p",{className:"job-info-label",children:[e.jsx("i",{className:"bi bi-cash-stack"}),"Salary Range"]}),e.jsx("p",{className:"job-info-value",children:i.salary_range||"Not specified"})]})]}),e.jsxs("div",{className:"job-section",children:[e.jsxs("div",{className:"job-section-header",children:[e.jsx("div",{className:"job-section-icon",children:e.jsx("i",{className:"bi bi-file-text"})}),e.jsx("h3",{className:"job-section-title",children:"Job Description"})]}),i.description?e.jsx("p",{className:"job-description",children:i.description}):e.jsx("p",{className:"job-empty",children:"No description provided."})]}),e.jsxs("div",{className:"job-section",children:[e.jsxs("div",{className:"job-section-header",children:[e.jsx("div",{className:"job-section-icon",children:e.jsx("i",{className:"bi bi-stars"})}),e.jsx("h3",{className:"job-section-title",children:"Skills Required"})]}),s.length>0?e.jsx("div",{className:"job-skills",children:s.map((a,n)=>e.jsx("span",{className:"job-skill",children:a},`${a}-${n}`))}):e.jsx("p",{className:"job-empty",children:"No specific skills listed."})]}),e.jsx("div",{className:"job-footer",children:e.jsxs(r,{href:route("admin.jobs.applications",i.id),className:"job-btn job-btn-primary",children:[e.jsx("i",{className:"bi bi-people"}),"View All Applications"]})})]}),e.jsxs("aside",{className:"applications-card",children:[e.jsxs("div",{className:"applications-header",children:[e.jsxs("div",{className:"applications-heading",children:[e.jsx("h2",{className:"applications-title",children:"Job Applications"}),e.jsx("p",{className:"applications-subtitle",children:"Applicants for this position"})]}),e.jsx("span",{className:"applications-count",children:o.length})]}),e.jsx("div",{className:"applications-list",children:o.length>0?o.map(a=>{var l;const n=((l=a.name)==null?void 0:l.split(" ").filter(Boolean).slice(0,2).map(c=>{var p;return(p=c[0])==null?void 0:p.toUpperCase()}).join(""))||"?";return e.jsxs("div",{className:"application-item",children:[e.jsxs("div",{className:"application-top",children:[e.jsx("div",{className:"application-avatar",children:n}),e.jsxs("div",{className:"application-main",children:[e.jsx("p",{className:"application-name",children:a.name||"Unnamed Applicant"}),e.jsx("p",{className:"application-email",children:a.email||"No email provided"})]})]}),e.jsxs("div",{className:"application-bottom",children:[e.jsxs("span",{className:"application-date",children:[e.jsx("i",{className:"bi bi-calendar3 me-1"}),g(a.created_at)]}),e.jsx(m,{status:a.status})]}),a.resume&&e.jsxs("a",{href:`/storage/${a.resume}`,target:"_blank",rel:"noopener noreferrer",className:"application-resume",children:[e.jsx("i",{className:"bi bi-file-earmark-pdf"}),"View Resume"]})]},a.id)}):e.jsxs("div",{className:"applications-empty",children:[e.jsx("div",{className:"applications-empty-icon",children:e.jsx("i",{className:"bi bi-people"})}),e.jsx("p",{className:"applications-empty-title",children:"No applications yet"}),e.jsx("p",{className:"applications-empty-text",children:"Applications submitted for this position will appear here."})]})}),o.length>0&&e.jsx("div",{className:"applications-footer",children:e.jsxs(r,{href:route("admin.jobs.applications",i.id),className:"job-btn job-btn-primary",children:[e.jsx("i",{className:"bi bi-list-ul"}),"Manage Applications"]})})]})]})]})]})}export{u as default};
