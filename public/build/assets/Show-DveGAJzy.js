import{r as c,j as e,H as g,L as x,a as d,u as b}from"./app-CgjB0zLb.js";import{A as f}from"./AppLayout-BhRRfzUA.js";function h(a){return a?a.split(" ").filter(Boolean).slice(0,2).map(s=>{var r;return(r=s[0])==null?void 0:r.toUpperCase()}).join(""):"—"}function u(a){if(a.budget_amount==null)return"—";const s=a.budget_currency??"",r=Number(a.budget_amount).toLocaleString();return s?`${s} ${r}`:r}function v(a){const s=Math.floor((new Date-new Date(a))/1e3),r=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];for(const[n,t]of r){const o=Math.floor(s/t);if(o>=1)return`${o} ${n}${o>1?"s":""} ago`}return"just now"}function j({status:a}){const s=(a??"pending").toLowerCase(),n={pending:{cls:"badge-warn",label:"Pending"},accepted:{cls:"badge-success",label:"Accepted"},rejected:{cls:"badge-danger",label:"Rejected"}}[s]??{cls:"badge-muted",label:a??"Pending"};return e.jsx("span",{className:`badge ${n.cls}`,children:n.label})}function y({application:a}){const[s,r]=c.useState(null),{data:n,setData:t,post:o,processing:i}=b({message:""});function p(){d.post(route("admin.applications.accept",a.id),{},{onSuccess:()=>r(null)})}function m(l){l.preventDefault(),o(route("admin.applications.reject",a.id),{onSuccess:()=>r(null)})}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"app-item",children:[e.jsxs("div",{className:"app-item-top",children:[e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"cell-avatar",children:h(a.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:a.name??"Unknown Applicant"}),e.jsx("p",{children:v(a.created_at)})]})]}),e.jsx(j,{status:a.status})]}),a.message&&e.jsx("p",{className:"app-message",children:a.message}),a.portfolio_url&&e.jsxs("a",{href:a.portfolio_url,target:"_blank",rel:"noreferrer",className:"app-link",children:[e.jsx("i",{className:"bi bi-link-45deg"})," View Portfolio"]}),e.jsxs("div",{className:"app-actions",children:[e.jsx("button",{type:"button",className:"btn-pill success-outline",onClick:()=>r("accept"),children:"Accept"}),e.jsx("button",{type:"button",className:"btn-pill danger-outline",onClick:()=>r("reject"),children:"Reject"})]})]}),s==="accept"&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>r(null),children:e.jsxs("div",{className:"fc-modal",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"fc-modal-header accent-success",children:[e.jsx("h5",{children:"Accept Application"}),e.jsx("button",{className:"btn-close",onClick:()=>r(null),children:"✕"})]}),e.jsx("div",{className:"fc-modal-body",children:e.jsxs("p",{children:["Are you sure you want to ",e.jsx("strong",{className:"text-success",children:"accept"})," this application from ",e.jsx("strong",{children:a.name}),"?"]})}),e.jsxs("div",{className:"fc-modal-footer",children:[e.jsx("button",{className:"btn-pill",onClick:()=>r(null),children:"Cancel"}),e.jsx("button",{className:"btn-pill success",onClick:p,children:"Confirm Accept"})]})]})}),s==="reject"&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>r(null),children:e.jsx("div",{className:"fc-modal",onClick:l=>l.stopPropagation(),children:e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"fc-modal-header accent-danger",children:[e.jsx("h5",{children:"Reject Application"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>r(null),children:"✕"})]}),e.jsxs("div",{className:"fc-modal-body",children:[e.jsxs("p",{children:["Are you sure you want to ",e.jsx("strong",{className:"text-danger",children:"reject"})," this application from ",e.jsx("strong",{children:a.name}),"?"]}),e.jsx("label",{className:"form-label",children:"Reason (optional)"}),e.jsx("textarea",{value:n.message,onChange:l=>t("message",l.target.value),className:"form-control-dark",rows:"3"})]}),e.jsxs("div",{className:"fc-modal-footer",children:[e.jsx("button",{type:"button",className:"btn-pill",onClick:()=>r(null),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-pill danger",disabled:i,children:i?"Rejecting…":"Confirm Reject"})]})]})})})]})}function C({project:a}){const s=a.applications??[],[r,n]=c.useState(!1);function t(){n(!0),d.post(route("admin.projects.verify",a.id),{},{onFinish:()=>n(!1)})}return e.jsxs(f,{children:[e.jsx(g,{title:"Project Details"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #b3820f;
                    --danger:     #c94a3f;
                }

                .fc-proj-show, .fc-proj-show * { box-sizing: border-box; }
                .fc-proj-show { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); padding: 32px; min-height: 100%; }
                @media(max-width: 768px) { .fc-proj-show { padding: 20px 16px; } }

                .show-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; align-items: start; max-width: 1100px; margin: 0 auto; }
                @media(max-width: 900px) { .show-grid { grid-template-columns: 1fr; } }

                .panel { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 1px 3px rgba(0,0,0,0.04); overflow: hidden; }

                .panel-header { padding: 22px 26px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
                .panel-header h3 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; margin: 0; }
                .panel-header h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; margin: 0; display: flex; align-items: center; gap: 8px; }
                .panel-header h5 i { color: var(--accent); }

                .panel-body { padding: 22px 26px; }
                .proj-description { font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary); margin: 0 0 20px; }

                .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 22px; }
                .info-item { background: var(--bg-glass); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; }
                .info-item p { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 5px; }
                .info-item h6 { font-size: 0.88rem; font-weight: 700; margin: 0; }

                .badge { display: inline-flex; align-items: center; gap: 5px; border-radius: var(--radius-pill); padding: 5px 13px; font-size: 0.74rem; font-weight: 700; white-space: nowrap; }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }
                .badge-count { background: rgba(255,255,255,0.25); color: #fff; }

                .btn-pill { display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-pill); padding: 10px 20px; font-family: var(--font-head); font-size: 0.82rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s; white-space: nowrap; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); }
                .btn-pill:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .btn-pill:disabled { opacity: 0.6; cursor: not-allowed; }
                .btn-pill.success { background: var(--accent); color: #fff; border: none; box-shadow: 0 4px 18px var(--accent-glow); }
                .btn-pill.success:hover { background: var(--accent-dim); color: #fff; }
                .btn-pill.success-outline { border-color: var(--border-accent); color: var(--accent); }
                .btn-pill.success-outline:hover { background: var(--bg-glass2); }
                .btn-pill.danger { background: var(--danger); color: #fff; border: none; }
                .btn-pill.danger:hover { background: #a8382e; color: #fff; }
                .btn-pill.danger-outline { border-color: rgba(201,74,63,0.3); color: var(--danger); }
                .btn-pill.danger-outline:hover { background: rgba(201,74,63,0.08); }

                .verify-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }

                /* ── Applications list ── */
                .app-list { display: flex; flex-direction: column; gap: 14px; padding: 22px 26px; }
                .app-item { border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; background: var(--bg-glass); }
                .app-item-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
                .cell-person { display: flex; align-items: center; gap: 10px; }
                .cell-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: var(--bg-glass2); border: 1px solid var(--border-accent); color: var(--accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-weight: 700; font-size: 0.74rem; }
                .cell-person h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-person p { font-size: 0.72rem; color: var(--text-muted); margin: 0; }
                .app-message { font-size: 0.83rem; color: var(--text-secondary); margin: 0 0 10px; line-height: 1.55; }
                .app-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--accent); text-decoration: none; margin-bottom: 10px; }
                .app-link:hover { text-decoration: underline; }
                .app-actions { display: flex; gap: 8px; margin-top: 4px; }
                .empty-apps { text-align: center; padding: 40px 20px; color: var(--text-muted); font-size: 0.88rem; }
                .empty-apps i { font-size: 1.8rem; display: block; margin-bottom: 10px; }

                /* ── Modal ── */
                .fc-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; z-index: 1050; padding: 1.5rem; }
                .fc-modal { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; width: 100%; max-width: 420px; box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
                .fc-modal-header { padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); }
                .fc-modal-header h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin: 0; }
                .fc-modal-header.accent-success { background: rgba(0,166,103,0.06); }
                .fc-modal-header.accent-danger { background: rgba(201,74,63,0.06); }
                .fc-modal-header .btn-close { background: transparent; border: none; font-size: 1rem; cursor: pointer; color: var(--text-secondary); }
                .fc-modal-body { padding: 20px 22px; font-size: 0.87rem; color: var(--text-secondary); line-height: 1.6; }
                .fc-modal-body .text-success { color: var(--accent); }
                .fc-modal-body .text-danger { color: var(--danger); }
                .fc-modal-footer { padding: 16px 22px 20px; display: flex; justify-content: flex-end; gap: 10px; }
                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin: 14px 0 6px; display: block; }
                .form-control-dark { width: 100%; background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 10px; color: var(--text-primary); padding: 10px 12px; font-family: var(--font-body); font-size: 0.85rem; outline: none; resize: vertical; }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
            `}),e.jsx("div",{className:"fc-proj-show",children:e.jsxs("div",{className:"show-grid",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsx("h3",{children:a.title}),e.jsx(w,{status:a.status})]}),e.jsxs("div",{className:"panel-body",children:[a.description&&e.jsx("p",{className:"proj-description",children:a.description}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("p",{children:"Category"}),e.jsx("h6",{children:a.category??"—"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("p",{children:"Location"}),e.jsx("h6",{children:a.location??"Remote"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("p",{children:"Budget"}),e.jsx("h6",{children:u(a)})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("p",{children:"Verified"}),e.jsx("h6",{children:a.verified?"Yes":"No"})]})]}),e.jsxs("div",{className:"verify-row",children:[a.verified?e.jsxs("span",{className:"badge badge-success",children:[e.jsx("i",{className:"bi bi-patch-check-fill"})," Verified"]}):e.jsxs("button",{type:"button",className:"btn-pill success",onClick:t,disabled:r,children:[e.jsx("i",{className:"bi bi-check-circle"})," ",r?"Verifying…":"Verify Project"]}),e.jsxs(x,{href:route("admin.projects.index"),className:"btn-pill",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Back to Projects"]})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("h5",{children:[e.jsx("i",{className:"bi bi-people"})," Project Applications"]}),e.jsx("span",{className:"badge badge-muted",children:s.length})]}),s.length===0?e.jsxs("div",{className:"empty-apps",children:[e.jsx("i",{className:"bi bi-inbox"}),"No one has applied yet."]}):e.jsx("div",{className:"app-list",children:s.map(o=>e.jsx(y,{application:o},o.id))})]})]})})]})}function w({status:a}){const s=(a??"").toLowerCase(),n={open:{cls:"badge-success",label:"Open"},in_progress:{cls:"badge-warn",label:"In Progress"},completed:{cls:"badge-muted",label:"Completed"},cancelled:{cls:"badge-danger",label:"Cancelled"},closed:{cls:"badge-danger",label:"Closed"}}[s]??{cls:"badge-muted",label:a?a.charAt(0).toUpperCase()+a.slice(1):"—"};return e.jsx("span",{className:`badge ${n.cls}`,children:n.label})}export{C as default};
