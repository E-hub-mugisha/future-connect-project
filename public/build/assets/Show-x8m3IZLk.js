import{d as h,j as e,H as m,L as p,a}from"./app-CgjB0zLb.js";import{A as f}from"./AppLayout-BhRRfzUA.js";const x=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 19-7-7 7-7M5 12h14"})}),g=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"})});function u({demoRequest:r}){var n,d;const{flash:s}=h().props,o={pending:{bg:"rgba(245,158,11,.15)",color:"#f59e0b"},confirmed:{bg:"rgba(0,166,103,.15)",color:"#00a667"},completed:{bg:"rgba(59,130,246,.15)",color:"#3b82f6"},cancelled:{bg:"rgba(220,76,76,.12)",color:"#dc4c4c"}};function t(){a.patch(route("admin.demo-requests.confirm",r.id),{},{preserveScroll:!0})}function i(){a.patch(route("admin.demo-requests.cancel",r.id),{},{preserveScroll:!0})}function c(){a.patch(route("admin.demo-requests.complete",r.id),{},{preserveScroll:!0})}function l(){confirm(`Delete the demo request from ${r.full_name}? This cannot be undone.`)&&a.delete(route("admin.demo-requests.destroy",r.id))}return e.jsxs("div",{"data-h-scope":"demo-request-show",children:[e.jsx(m,{title:r.full_name}),e.jsx("style",{children:`
        [data-h-scope="demo-request-show"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="demo-request-show"] .ds-wrap { max-width: 1000px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="demo-request-show"] .ds-back {
          color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex;
          align-items: center; gap: .4rem; margin-bottom: 1.25rem;
        }
        [data-h-scope="demo-request-show"] .ds-back:hover { color: var(--accent); }

        [data-h-scope="demo-request-show"] .ds-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="demo-request-show"] .ds-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
        [data-h-scope="demo-request-show"] .ds-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); }
        [data-h-scope="demo-request-show"] .ds-sub { color: var(--muted); font-size: .82rem; margin-top: .3rem; }
        [data-h-scope="demo-request-show"] .badge { display: inline-block; padding: .35rem .9rem; border-radius: 50px; font-size: .78rem; font-weight: 700; text-transform: capitalize; }

        [data-h-scope="demo-request-show"] .ds-grid { display: grid; grid-template-columns: 1fr 300px; gap: 1.75rem; align-items: start; }
        @media (max-width: 900px) { [data-h-scope="demo-request-show"] .ds-grid { grid-template-columns: 1fr; } }

        [data-h-scope="demo-request-show"] .card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04);
        }
        [data-h-scope="demo-request-show"] .card h3 {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .95rem; color: var(--white);
          margin: 0 0 1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }

        [data-h-scope="demo-request-show"] .info-row { display: flex; justify-content: space-between; padding: .5rem 0; font-size: .85rem; border-bottom: 1px solid var(--border); gap: 1rem; }
        [data-h-scope="demo-request-show"] .info-row:last-child { border-bottom: none; }
        [data-h-scope="demo-request-show"] .info-row span:first-child { color: var(--muted); flex-shrink: 0; }
        [data-h-scope="demo-request-show"] .info-row span:last-child { color: var(--text); font-weight: 500; text-align: right; }

        [data-h-scope="demo-request-show"] .ds-message { font-size: .87rem; line-height: 1.6; color: var(--text); white-space: pre-wrap; }
        [data-h-scope="demo-request-show"] .ds-no-message { font-size: .85rem; color: var(--muted); }

        [data-h-scope="demo-request-show"] .btn-primary {
          width: 100%; background: var(--accent); color: #ffffff; border: none;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .9rem;
          padding: .85rem; border-radius: 10px; cursor: pointer; margin-bottom: .6rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: transform .25s;
        }
        [data-h-scope="demo-request-show"] .btn-primary:hover { transform: translateY(-2px); }
        [data-h-scope="demo-request-show"] .btn-secondary {
          width: 100%; background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
          padding: .75rem; border-radius: 10px; cursor: pointer; margin-bottom: .5rem; transition: all .2s;
        }
        [data-h-scope="demo-request-show"] .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="demo-request-show"] .btn-danger:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }
      `}),e.jsxs("div",{className:"ds-wrap",children:[e.jsxs(p,{href:route("admin.demo-requests.index"),className:"ds-back",children:[e.jsx(x,{})," Back to Demo Requests"]}),(s==null?void 0:s.success)&&e.jsx("div",{className:"ds-flash",children:s.success}),e.jsxs("div",{className:"ds-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ds-title",children:r.full_name}),e.jsxs("div",{className:"ds-sub",children:["Requested on ",new Date(r.created_at).toLocaleString()]})]}),e.jsx("span",{className:"badge",style:{background:(n=o[r.status])==null?void 0:n.bg,color:(d=o[r.status])==null?void 0:d.color},children:r.status})]}),e.jsxs("div",{className:"ds-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Contact"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Full Name"}),e.jsx("span",{children:r.full_name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Work Email"}),e.jsx("span",{children:r.work_email})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Phone"}),e.jsx("span",{children:r.phone||"—"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Role"}),e.jsx("span",{children:r.role||"—"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Company"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Company Name"}),e.jsx("span",{children:r.company_name||"—"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Company Size"}),e.jsx("span",{children:r.company_size||"—"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Requested Schedule"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Preferred Date"}),e.jsx("span",{children:r.preferred_date?new Date(r.preferred_date).toLocaleDateString():"—"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Preferred Time"}),e.jsx("span",{children:r.preferred_time||"—"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Message"}),r.message?e.jsx("div",{className:"ds-message",children:r.message}):e.jsx("div",{className:"ds-no-message",children:"No message provided."})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Actions"}),r.status==="pending"&&e.jsx("button",{className:"btn-primary",onClick:t,children:"✓ Confirm Demo"}),r.status==="confirmed"&&e.jsx("button",{className:"btn-secondary",onClick:c,children:"Mark as Completed"}),(r.status==="pending"||r.status==="confirmed")&&e.jsx("button",{className:"btn-secondary btn-danger",onClick:i,children:"Cancel Request"}),e.jsx("button",{className:"btn-secondary btn-danger",onClick:l,children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:".4rem",justifyContent:"center",width:"100%"},children:[e.jsx(g,{})," Delete"]})})]})})]})]})]})}u.layout=r=>e.jsx(f,{children:r,title:r.props.demoRequest.full_name});export{u as default};
