import{r as u,j as e,H as x,L as l,a as m}from"./app-BO26Fp_i.js";import{A as g}from"./AppLayout-Do3g3cSn.js";function f({orders:t,filters:o,statusCounts:b}){var i;const[s,p]=u.useState(o.search??"");function n(r){m.get(route("admin.orders.index"),{status:r,search:o.search},{preserveState:!0})}function h(r){r.preventDefault(),m.get(route("admin.orders.index"),{status:o.status,search:s},{preserveState:!0})}const d={pending:{bg:"rgba(245,158,11,.15)",color:"#f59e0b"},processing:{bg:"rgba(0,166,103,.15)",color:"#48d597"},completed:{bg:"rgba(59,130,246,.15)",color:"#3b82f6"},cancelled:{bg:"rgba(248,113,113,.15)",color:"#f87171"}};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Orders"}),e.jsx("style",{children:`
        :root {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-theme="dark"] {
          --bg-deep: #0e1618; --bg-card: #121d1f; --bg-raised: #172224;
          --accent: #48d597; --accent-dim: rgba(0,166,103,.15);
          --border: rgba(255,255,255,.07); --text: #f0f4f3; --muted: #7a9490; --white: #ffffff;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .oi-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; }
        .oi-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); margin-bottom: 1.5rem; }

        .status-tabs { display: flex; gap: .6rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .status-tab {
          border: 1px solid var(--border); border-radius: 10px; padding: .6rem 1.1rem;
          font-size: .82rem; font-weight: 600; color: var(--muted); cursor: pointer;
          background: var(--bg-card); transition: all .2s; display: flex; align-items: center; gap: .5rem;
        }
        .status-tab.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
        .status-tab .count { background: var(--bg-raised); border-radius: 50px; padding: .1rem .55rem; font-size: .72rem; }

        .search-row { margin-bottom: 1.5rem; }
        .search-row input {
          width: 100%; max-width: 360px; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .85rem; outline: none;
        }
        .search-row input:focus { border-color: var(--accent); }

        .orders-table { width: 100%; border-collapse: collapse; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        .orders-table th {
          text-align: left; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em;
          color: var(--muted); padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-weight: 600;
          background: var(--bg-raised);
        }
        .orders-table td { padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-size: .85rem; }
        .orders-table tr:last-child td { border-bottom: none; }
        .orders-table tr:hover td { background: var(--bg-raised); }
        .order-no { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
        .order-no a { color: inherit; text-decoration: none; }
        .order-no a:hover { color: var(--accent); }
        .badge { display: inline-block; padding: .25rem .7rem; border-radius: 50px; font-size: .72rem; font-weight: 700; text-transform: capitalize; }
        .cust-type { font-size: .72rem; color: var(--muted); }

        .pagination { display: flex; gap: .4rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .pagination a, .pagination span {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 32px; height: 32px; border-radius: 8px; font-size: .8rem;
          border: 1px solid var(--border); color: var(--muted); text-decoration: none;
        }
        .pagination a:hover { border-color: var(--accent); color: var(--accent); }
        .pagination .current { background: var(--accent); color: #ffffff; border-color: var(--accent); }
      `}),e.jsxs("div",{className:"oi-wrap",children:[e.jsx("h1",{className:"oi-title",children:"Orders"}),e.jsxs("div",{className:"status-tabs",children:[e.jsx("div",{className:`status-tab${o.status?"":" active"}`,onClick:()=>n(null),children:"All"}),Object.entries(b).map(([r,a])=>e.jsxs("div",{className:`status-tab${o.status===r?" active":""}`,onClick:()=>n(r),children:[e.jsx("span",{style:{textTransform:"capitalize"},children:r}),e.jsx("span",{className:"count",children:a})]},r))]}),e.jsx("form",{className:"search-row",onSubmit:h,children:e.jsx("input",{type:"text",placeholder:"Search by order #, name, email, or phone...",value:s,onChange:r=>p(r.target.value)})}),e.jsxs("table",{className:"orders-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order #"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Total"}),e.jsx("th",{children:"Payment"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Date"})]})}),e.jsxs("tbody",{children:[t.data.map(r=>{var a,c;return e.jsxs("tr",{children:[e.jsx("td",{className:"order-no",children:e.jsx(l,{href:route("admin.orders.show",r.id),children:r.order_number})}),e.jsxs("td",{children:[r.customer_name,e.jsx("div",{className:"cust-type",children:r.user?"Account":"Guest"})]}),e.jsx("td",{children:r.items_count}),e.jsxs("td",{children:[Number(r.total_amount).toLocaleString()," RWF"]}),e.jsx("td",{style:{textTransform:"uppercase",fontSize:".75rem",color:"var(--muted)"},children:r.payment_method}),e.jsx("td",{children:e.jsx("span",{className:"badge",style:{background:(a=d[r.status])==null?void 0:a.bg,color:(c=d[r.status])==null?void 0:c.color},children:r.status})}),e.jsx("td",{style:{color:"var(--muted)"},children:new Date(r.created_at).toLocaleDateString()})]},r.id)}),t.data.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",color:"var(--muted)",padding:"2rem"},children:"No orders found."})})]})]}),((i=t.links)==null?void 0:i.length)>3&&e.jsx("div",{className:"pagination",children:t.links.map((r,a)=>r.url?e.jsx(l,{href:r.url,className:r.active?"current":"",dangerouslySetInnerHTML:{__html:r.label}},a):e.jsx("span",{style:{opacity:.4},dangerouslySetInnerHTML:{__html:r.label}},a))})]})]})}f.layout=t=>e.jsx(g,{children:t,title:"Orders"});export{f as default};
