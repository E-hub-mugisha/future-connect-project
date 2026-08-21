import{d as f,r as g,j as e,H as v,L as p,a as o}from"./app-C-Atdk99.js";import{A as j}from"./AppLayout-3QMuWNNg.js";const y=()=>e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})});function w({demoRequests:t,filters:s,statusCounts:h}){var l;const{flash:d}=f().props,[n,x]=g.useState(s.search??"");function i(r){o.get(route("admin.demo-requests.index"),{status:r,search:s.search},{preserveState:!0})}function u(r){r.preventDefault(),o.get(route("admin.demo-requests.index"),{status:s.status,search:n},{preserveState:!0})}function b(r){o.patch(route("admin.demo-requests.confirm",r.id),{},{preserveState:!0,preserveScroll:!0})}const c={pending:{bg:"rgba(245,158,11,.15)",color:"#f59e0b"},confirmed:{bg:"rgba(0,166,103,.15)",color:"#00a667"},completed:{bg:"rgba(59,130,246,.15)",color:"#3b82f6"},cancelled:{bg:"rgba(220,76,76,.12)",color:"#dc4c4c"}};return e.jsxs("div",{"data-h-scope":"demo-requests-index",children:[e.jsx(v,{title:"Demo Requests"}),e.jsx("style",{children:`
        [data-h-scope="demo-requests-index"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-scope="demo-requests-index"] .di-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="demo-requests-index"] .di-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); margin-bottom: 1.5rem; }

        [data-h-scope="demo-requests-index"] .di-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="demo-requests-index"] .status-tabs { display: flex; gap: .6rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        [data-h-scope="demo-requests-index"] .status-tab {
          border: 1px solid var(--border); border-radius: 10px; padding: .6rem 1.1rem;
          font-size: .82rem; font-weight: 600; color: var(--muted); cursor: pointer;
          background: var(--bg-card); transition: all .2s; display: flex; align-items: center; gap: .5rem;
        }
        [data-h-scope="demo-requests-index"] .status-tab.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
        [data-h-scope="demo-requests-index"] .status-tab .count { background: var(--bg-raised); border-radius: 50px; padding: .1rem .55rem; font-size: .72rem; }

        [data-h-scope="demo-requests-index"] .search-row { margin-bottom: 1.5rem; }
        [data-h-scope="demo-requests-index"] .search-row input {
          width: 100%; max-width: 360px; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .85rem; outline: none;
        }
        [data-h-scope="demo-requests-index"] .search-row input:focus { border-color: var(--accent); }

        [data-h-scope="demo-requests-index"] .dr-table { width: 100%; border-collapse: collapse; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        [data-h-scope="demo-requests-index"] .dr-table th {
          text-align: left; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em;
          color: var(--muted); padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-weight: 600;
          background: var(--bg-raised);
        }
        [data-h-scope="demo-requests-index"] .dr-table td { padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-size: .85rem; vertical-align: middle; }
        [data-h-scope="demo-requests-index"] .dr-table tr:last-child td { border-bottom: none; }
        [data-h-scope="demo-requests-index"] .dr-table tr:hover td { background: var(--bg-raised); }
        [data-h-scope="demo-requests-index"] .dr-name { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
        [data-h-scope="demo-requests-index"] .dr-name a { color: inherit; text-decoration: none; }
        [data-h-scope="demo-requests-index"] .dr-name a:hover { color: var(--accent); }
        [data-h-scope="demo-requests-index"] .dr-sub { font-size: .72rem; color: var(--muted); margin-top: .15rem; }
        [data-h-scope="demo-requests-index"] .badge { display: inline-block; padding: .25rem .7rem; border-radius: 50px; font-size: .72rem; font-weight: 700; text-transform: capitalize; }

        [data-h-scope="demo-requests-index"] .dr-confirm {
          display: inline-flex; align-items: center; gap: .35rem; background: var(--accent); color: #ffffff;
          border: none; font-family: 'Syne', sans-serif; font-weight: 700; font-size: .75rem;
          padding: .4rem .75rem; border-radius: 7px; cursor: pointer; transition: transform .15s;
        }
        [data-h-scope="demo-requests-index"] .dr-confirm:hover { transform: translateY(-1px); }

        [data-h-scope="demo-requests-index"] .pagination { display: flex; gap: .4rem; margin-top: 1.5rem; flex-wrap: wrap; }
        [data-h-scope="demo-requests-index"] .pagination a, [data-h-scope="demo-requests-index"] .pagination span {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 32px; height: 32px; border-radius: 8px; font-size: .8rem;
          border: 1px solid var(--border); color: var(--muted); text-decoration: none;
        }
        [data-h-scope="demo-requests-index"] .pagination a:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="demo-requests-index"] .pagination .current { background: var(--accent); color: #ffffff; border-color: var(--accent); }
      `}),e.jsxs("div",{className:"di-wrap",children:[e.jsx("h1",{className:"di-title",children:"Demo Requests"}),(d==null?void 0:d.success)&&e.jsx("div",{className:"di-flash",children:d.success}),e.jsxs("div",{className:"status-tabs",children:[e.jsx("div",{className:`status-tab${s.status?"":" active"}`,onClick:()=>i(null),children:"All"}),Object.entries(h).map(([r,a])=>e.jsxs("div",{className:`status-tab${s.status===r?" active":""}`,onClick:()=>i(r),children:[e.jsx("span",{style:{textTransform:"capitalize"},children:r}),e.jsx("span",{className:"count",children:a})]},r))]}),e.jsx("form",{className:"search-row",onSubmit:u,children:e.jsx("input",{type:"text",placeholder:"Search by name, email, company, or phone...",value:n,onChange:r=>x(r.target.value)})}),e.jsxs("table",{className:"dr-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Requester"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Preferred Time"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Submitted"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[t.data.map(r=>{var a,m;return e.jsxs("tr",{children:[e.jsxs("td",{className:"dr-name",children:[e.jsx(p,{href:route("admin.demo-requests.show",r.id),children:r.full_name}),e.jsx("div",{className:"dr-sub",children:r.work_email})]}),e.jsxs("td",{children:[r.company_name,e.jsxs("div",{className:"dr-sub",children:[r.role,r.company_size?` · ${r.company_size}`:""]})]}),e.jsxs("td",{children:[r.preferred_date?new Date(r.preferred_date).toLocaleDateString():"—",e.jsx("div",{className:"dr-sub",children:r.preferred_time??""})]}),e.jsx("td",{children:e.jsx("span",{className:"badge",style:{background:(a=c[r.status])==null?void 0:a.bg,color:(m=c[r.status])==null?void 0:m.color},children:r.status})}),e.jsx("td",{style:{color:"var(--muted)"},children:new Date(r.created_at).toLocaleDateString()}),e.jsx("td",{children:r.status==="pending"&&e.jsxs("button",{className:"dr-confirm",onClick:()=>b(r),children:[e.jsx(y,{})," Confirm"]})})]},r.id)}),t.data.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",color:"var(--muted)",padding:"2rem"},children:"No demo requests found."})})]})]}),((l=t.links)==null?void 0:l.length)>3&&e.jsx("div",{className:"pagination",children:t.links.map((r,a)=>r.url?e.jsx(p,{href:r.url,className:r.active?"current":"",dangerouslySetInnerHTML:{__html:r.label}},a):e.jsx("span",{style:{opacity:.4},dangerouslySetInnerHTML:{__html:r.label}},a))})]})]})}w.layout=t=>e.jsx(j,{children:t,title:"Demo Requests"});export{w as default};
