import{j as e,H as c,L as x,a as m}from"./app-B2SIh33N.js";import{A as h}from"./AppLayout-CkTPU_ZW.js";function g(t){return t?t.split(" ").filter(Boolean).slice(0,2).map(r=>{var s;return(s=r[0])==null?void 0:s.toUpperCase()}).join(""):"—"}function f({status:t}){const r=(t??"pending").toLowerCase(),p={pending:{cls:"status-pending",label:"Pending"},accepted:{cls:"status-accepted",label:"Accepted"},rejected:{cls:"status-rejected",label:"Rejected"}}[r]??{cls:"status-default",label:t??"Pending"};return e.jsxs("span",{className:`status-badge ${p.cls}`,children:[e.jsx("span",{className:"status-dot"}),p.label]})}function v({job:t,applications:r}){const s=r??[];function p(a,i){m.patch(route("admin.jobs.updateApplicationStatus",a.id),{status:i},{preserveScroll:!0})}const n=s.filter(a=>(a.status??"pending").toLowerCase()==="pending").length,o=s.filter(a=>(a.status??"").toLowerCase()==="accepted").length,l=s.filter(a=>(a.status??"").toLowerCase()==="rejected").length;return e.jsxs(h,{children:[e.jsx(c,{title:`Applications · ${t.title}`}),e.jsx("style",{children:`
                :root {
                    --apps-bg: #f5f5f7;
                    --apps-card: #ffffff;
                    --apps-text: #1d1d1f;
                    --apps-secondary: #6e6e73;
                    --apps-muted: #86868b;
                    --apps-border: #e5e5e7;
                    --apps-border-soft: #ededee;

                    --apps-green: #167c52;
                    --apps-green-light: #edf8f2;

                    --apps-blue: #2878c8;
                    --apps-blue-light: #eef6ff;

                    --apps-orange: #a86d00;
                    --apps-orange-light: #fff7e6;

                    --apps-red: #c43d3d;
                    --apps-red-light: #fff0f0;

                    --apps-radius: 14px;

                    --apps-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                .fc-apps-page,
                .fc-apps-page * {
                    box-sizing: border-box;
                }

                .fc-apps-page {
                    min-height: 100%;
                    padding: 28px 30px 50px;
                    background: var(--apps-bg);
                    color: var(--apps-text);
                    font-family: var(--apps-font);
                    font-size: 13px;
                    -webkit-font-smoothing: antialiased;
                }

                .apps-container {
                    max-width: 1320px;
                    margin: 0 auto;
                }

                /* HEADER */

                .apps-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 22px;
                }

                .apps-heading {
                    min-width: 0;
                }

                .apps-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 7px;
                    color: var(--apps-green);
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                .apps-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--apps-green);
                }

                .apps-heading h1 {
                    margin: 0;
                    color: var(--apps-text);
                    font-size: 21px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: -.025em;
                }

                .apps-heading p {
                    margin: 5px 0 0;
                    color: var(--apps-secondary);
                    font-size: 12px;
                    line-height: 1.5;
                }

                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 36px;
                    padding: 0 14px;

                    border: 1px solid #d9d9dc;
                    border-radius: 9px;

                    background: #fff;
                    color: #424245;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;

                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        color .18s ease;
                }

                .back-btn:hover {
                    background: #f8f8f8;
                    border-color: #c7c7ca;
                    color: var(--apps-text);
                }

                /* SUMMARY */

                .apps-summary {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    margin-bottom: 18px;
                }

                .summary-card {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    padding: 15px 16px;

                    background: var(--apps-card);
                    border: 1px solid var(--apps-border);
                    border-radius: 12px;

                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .015);
                }

                .summary-icon {
                    width: 36px;
                    height: 36px;
                    flex: 0 0 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    font-size: 13px;
                }

                .summary-icon.total {
                    background: #f1f1f3;
                    color: #555;
                }

                .summary-icon.pending {
                    background: var(--apps-orange-light);
                    color: var(--apps-orange);
                }

                .summary-icon.accepted {
                    background: var(--apps-green-light);
                    color: var(--apps-green);
                }

                .summary-content {
                    min-width: 0;
                }

                .summary-value {
                    margin: 0;
                    color: var(--apps-text);
                    font-size: 17px;
                    line-height: 1.2;
                    font-weight: 600;
                    letter-spacing: -.02em;
                }

                .summary-label {
                    margin: 3px 0 0;
                    color: var(--apps-muted);
                    font-size: 10.5px;
                    font-weight: 500;
                }

                /* TABLE CARD */

                .table-card {
                    overflow: hidden;

                    background: var(--apps-card);
                    border: 1px solid var(--apps-border);
                    border-radius: var(--apps-radius);

                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .025);
                }

                .table-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;

                    padding: 16px 20px;

                    border-bottom: 1px solid var(--apps-border-soft);
                }

                .table-title {
                    margin: 0;
                    color: var(--apps-text);
                    font-size: 13px;
                    font-weight: 600;
                }

                .table-count {
                    margin-left: 7px;
                    color: var(--apps-muted);
                    font-size: 11px;
                    font-weight: 500;
                }

                .table-caption {
                    margin: 3px 0 0;
                    color: var(--apps-muted);
                    font-size: 10.5px;
                }

                .apps-table-wrap {
                    width: 100%;
                    overflow-x: auto;
                }

                .apps-table {
                    width: 100%;
                    min-width: 850px;
                    border-collapse: collapse;
                }

                .apps-table thead th {
                    height: 43px;

                    padding: 0 20px;

                    text-align: left;

                    background: #fafafa;
                    border-bottom: 1px solid var(--apps-border-soft);

                    color: var(--apps-muted);

                    font-size: 9.5px;
                    font-weight: 600;

                    letter-spacing: .055em;
                    text-transform: uppercase;

                    white-space: nowrap;
                }

                .apps-table tbody td {
                    height: 69px;

                    padding: 10px 20px;

                    border-bottom: 1px solid #f0f0f2;

                    color: var(--apps-secondary);
                    font-size: 11.5px;

                    vertical-align: middle;
                }

                .apps-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .apps-table tbody tr {
                    transition: background .15s ease;
                }

                .apps-table tbody tr:hover {
                    background: #fafafa;
                }

                .row-number {
                    color: #99999e;
                    font-size: 10.5px;
                    font-weight: 500;
                }

                /* APPLICANT */

                .applicant {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 190px;
                }

                .applicant-avatar {
                    width: 36px;
                    height: 36px;
                    flex: 0 0 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background: var(--apps-green-light);
                    border: 1px solid #d7eee2;

                    color: var(--apps-green);

                    font-size: 10.5px;
                    font-weight: 700;
                }

                .applicant-info {
                    min-width: 0;
                }

                .applicant-name {
                    margin: 0;

                    color: var(--apps-text);

                    font-size: 11.5px;
                    line-height: 1.35;
                    font-weight: 600;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .applicant-label {
                    margin: 3px 0 0;

                    color: var(--apps-muted);

                    font-size: 9.5px;
                }

                /* EMAIL */

                .email-cell {
                    max-width: 230px;
                    overflow: hidden;

                    color: var(--apps-secondary);
                    font-size: 11px;

                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* STATUS */

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;

                    min-height: 23px;
                    padding: 0 8px;

                    border-radius: 7px;

                    font-size: 9.5px;
                    font-weight: 600;

                    white-space: nowrap;
                }

                .status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                }

                .status-pending {
                    background: var(--apps-orange-light);
                    color: var(--apps-orange);
                }

                .status-pending .status-dot {
                    background: var(--apps-orange);
                }

                .status-accepted {
                    background: var(--apps-green-light);
                    color: var(--apps-green);
                }

                .status-accepted .status-dot {
                    background: var(--apps-green);
                }

                .status-rejected {
                    background: var(--apps-red-light);
                    color: var(--apps-red);
                }

                .status-rejected .status-dot {
                    background: var(--apps-red);
                }

                .status-default {
                    background: #f1f1f3;
                    color: var(--apps-muted);
                }

                .status-default .status-dot {
                    background: var(--apps-muted);
                }

                /* RESUME */

                .resume-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;

                    min-height: 29px;
                    padding: 0 10px;

                    border: 1px solid var(--apps-border);
                    border-radius: 7px;

                    background: #fff;
                    color: #4b4b4f;

                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 500;

                    text-decoration: none;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;
                }

                .resume-btn:hover {
                    background: var(--apps-green-light);
                    border-color: #cde6d8;
                    color: var(--apps-green);
                }

                .no-resume {
                    color: var(--apps-muted);
                    font-size: 10.5px;
                }

                /* STATUS SELECT */

                .status-select {
                    min-width: 115px;
                    height: 31px;

                    padding: 0 28px 0 10px;

                    border: 1px solid var(--apps-border);
                    border-radius: 7px;

                    background-color: #fff;
                    color: var(--apps-text);

                    font-family: inherit;
                    font-size: 10.5px;
                    font-weight: 500;

                    outline: none;
                    cursor: pointer;

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .status-select:hover {
                    border-color: #cfcfd2;
                }

                .status-select:focus {
                    border-color: var(--apps-green);
                    box-shadow: 0 0 0 3px rgba(22,124,82,.08);
                }

                /* EMPTY */

                .empty-state {
                    padding: 70px 25px;
                    text-align: center;
                }

                .empty-icon {
                    width: 46px;
                    height: 46px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin: 0 auto 12px;

                    border-radius: 12px;

                    background: #f3f3f5;
                    color: #8a8a8f;

                    font-size: 17px;
                }

                .empty-title {
                    margin: 0;

                    color: var(--apps-text);

                    font-size: 12px;
                    font-weight: 600;
                }

                .empty-text {
                    max-width: 330px;
                    margin: 5px auto 0;

                    color: var(--apps-muted);

                    font-size: 10.5px;
                    line-height: 1.5;
                }

                /* FOOTER */

                .table-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 12px 20px;

                    background: #fafafa;
                    border-top: 1px solid var(--apps-border-soft);

                    color: var(--apps-muted);
                    font-size: 10px;
                }

                .footer-stat {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .footer-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--apps-green);
                }

                @media (max-width: 800px) {
                    .fc-apps-page {
                        padding: 20px 15px 40px;
                    }

                    .apps-header {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .back-btn {
                        width: 100%;
                    }

                    .apps-summary {
                        grid-template-columns: 1fr;
                    }

                    .summary-card {
                        padding: 13px 14px;
                    }
                }
            `}),e.jsx("div",{className:"fc-apps-page",children:e.jsxs("div",{className:"apps-container",children:[e.jsxs("div",{className:"apps-header",children:[e.jsxs("div",{className:"apps-heading",children:[e.jsxs("div",{className:"apps-eyebrow",children:[e.jsx("span",{className:"apps-eyebrow-dot"}),"Recruitment"]}),e.jsx("h1",{children:"Job Applications"}),e.jsxs("p",{children:["Review applicants and manage their application status for"," ",e.jsx("strong",{children:t.title}),"."]})]}),e.jsxs(x,{href:route("admin.jobs.show",t.id),className:"back-btn",children:[e.jsx("i",{className:"bi bi-arrow-left"}),"Back to Job"]})]}),e.jsxs("div",{className:"apps-summary",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-icon total",children:e.jsx("i",{className:"bi bi-people"})}),e.jsxs("div",{className:"summary-content",children:[e.jsx("p",{className:"summary-value",children:s.length}),e.jsx("p",{className:"summary-label",children:"Total Applications"})]})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-icon pending",children:e.jsx("i",{className:"bi bi-clock"})}),e.jsxs("div",{className:"summary-content",children:[e.jsx("p",{className:"summary-value",children:n}),e.jsx("p",{className:"summary-label",children:"Pending Review"})]})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-icon accepted",children:e.jsx("i",{className:"bi bi-check2"})}),e.jsxs("div",{className:"summary-content",children:[e.jsx("p",{className:"summary-value",children:o}),e.jsx("p",{className:"summary-label",children:"Accepted"})]})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"table-toolbar",children:e.jsxs("div",{children:[e.jsxs("h2",{className:"table-title",children:["Applicants",e.jsxs("span",{className:"table-count",children:[s.length," ",s.length===1?"application":"applications"]})]}),e.jsx("p",{className:"table-caption",children:"Manage submitted applications and candidate status."})]})}),e.jsx("div",{className:"apps-table-wrap",children:e.jsxs("table",{className:"apps-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Applicant"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Resume"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Update Status"})]})}),e.jsx("tbody",{children:s.length>0?s.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"row-number",children:String(i+1).padStart(2,"0")})}),e.jsx("td",{children:e.jsxs("div",{className:"applicant",children:[e.jsx("div",{className:"applicant-avatar",children:g(a.name)}),e.jsxs("div",{className:"applicant-info",children:[e.jsx("p",{className:"applicant-name",children:a.name||"Unnamed Applicant"}),e.jsx("p",{className:"applicant-label",children:"Job Applicant"})]})]})}),e.jsx("td",{children:e.jsx("div",{className:"email-cell",children:a.email||"—"})}),e.jsx("td",{children:a.resume?e.jsxs("a",{href:`/storage/${a.resume}`,target:"_blank",rel:"noopener noreferrer",className:"resume-btn",children:[e.jsx("i",{className:"bi bi-file-earmark-pdf"}),"View Resume"]}):e.jsx("span",{className:"no-resume",children:"No resume"})}),e.jsx("td",{children:e.jsx(f,{status:a.status})}),e.jsx("td",{children:e.jsxs("select",{value:a.status??"pending",onChange:d=>p(a,d.target.value),className:"status-select",children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"accepted",children:"Accepted"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:"bi bi-inbox"})}),e.jsx("p",{className:"empty-title",children:"No applications yet"}),e.jsx("p",{className:"empty-text",children:"Applications submitted for this job will appear here."})]})})})})]})}),s.length>0&&e.jsxs("div",{className:"table-footer",children:[e.jsxs("div",{className:"footer-stat",children:[e.jsx("span",{className:"footer-dot"}),s.length," ",s.length===1?"application":"applications"," ","received"]}),e.jsxs("span",{children:[l," rejected"]})]})]})]})})]})}export{v as default};
