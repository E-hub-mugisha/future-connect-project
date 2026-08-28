import{r as v,j as e,H as j,L as y,a as w}from"./app-CzHhKsxF.js";import{A as k}from"./AppLayout-CgsTf2Wf.js";const N={loginActivityIndex:"/admin/login-activity"},s={Search:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),Shield:r=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 3 4.5 6v6c0 4.6 3.2 8.4 7.5 9 4.3-.6 7.5-4.4 7.5-9V6L12 3Z"})}),Users:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),e.jsx("path",{d:"M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"}),e.jsx("path",{d:"M16.5 8.5a3.2 3.2 0 1 1 0 6.4M22 20c0-2.8-1.8-5.1-4.3-6"})]}),Globe:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9Z"})]}),Desktop:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("rect",{x:"2.5",y:"4",width:"19",height:"12",rx:"2"}),e.jsx("path",{d:"M8 20h8M12 16v4"})]}),Mobile:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("rect",{x:"6.5",y:"2.5",width:"11",height:"19",rx:"2.3"}),e.jsx("path",{d:"M11 18.5h2"})]}),Inbox:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("path",{d:"M22 12h-6l-2 3h-4l-2-3H2"}),e.jsx("path",{d:"M5.5 5h13l3.5 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7l3.5-7Z"})]})};function L(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(n=>{var t;return(t=n[0])==null?void 0:t.toUpperCase()}).join(""):"—"}function S(r){if(!r)return{browser:"Unknown",os:"Unknown",isMobile:!1};const n=r.match(/Edg\/([\d.]+)/)?"Edge":r.match(/OPR\/([\d.]+)/)?"Opera":r.match(/Chrome\/([\d.]+)/)&&!r.includes("Chromium")?"Chrome":r.match(/Firefox\/([\d.]+)/)?"Firefox":r.match(/Version\/([\d.]+).*Safari/)?"Safari":r.match(/MSIE|Trident/)?"Internet Explorer":"Unknown",t=r.match(/Windows NT 10/)?"Windows 10/11":r.match(/Windows NT/)?"Windows":r.match(/Mac OS X/)?"macOS":r.match(/Android/)?"Android":r.match(/iPhone|iPad|iPod/)?"iOS":r.match(/Linux/)?"Linux":"Unknown",o=/Android|iPhone|iPad|iPod|Mobile/.test(r);return{browser:n,os:t,isMobile:o}}function M(r){const n=Date.now()-new Date(r).getTime(),t=Math.floor(n/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const o=Math.floor(t/60);if(o<24)return`${o}h ago`;const d=Math.floor(o/24);return d<7?`${d}d ago`:null}function z(r){return r.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev")}function A({activities:r,filters:n={},stats:t}){const[o,d]=v.useState(n.search??""),l=(r==null?void 0:r.data)??[],h=(r==null?void 0:r.links)??[],c=t??{total:(r==null?void 0:r.total)??l.length,uniqueUsers:new Set(l.map(a=>{var i;return(i=a.user)==null?void 0:i.id}).filter(Boolean)).size,uniqueIps:new Set(l.map(a=>a.ip_address).filter(Boolean)).size},m=a=>{a.preventDefault(),w.get(N.loginActivityIndex,{search:o},{preserveState:!0,preserveScroll:!0,replace:!0})};return e.jsxs("div",{"data-h-scope":"login-activity",children:[e.jsx(j,{title:"Login Activity"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                [data-h-scope="login-activity"] {
                    --bg-page:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-soft:    rgba(0,100,60,0.035);
                    --bg-accent:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #839a92;
                    --border:     rgba(0,100,60,0.12);
                    --border-accent: rgba(0,166,103,0.35);
                    --radius-lg:  18px;
                    --radius-md:  12px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                }
                [data-h-scope="login-activity"] *,
                [data-h-scope="login-activity"] *::before,
                [data-h-scope="login-activity"] *::after { box-sizing: border-box; }

                [data-h-scope="login-activity"] {
                    background: var(--bg-page);
                    font-family: var(--font-body);
                    color: var(--text-primary);
                    min-height: 100%;
                    padding: 40px 32px;
                }
                @media(max-width: 768px) { [data-h-scope="login-activity"] { padding: 20px 16px; } }

                .la-wrap { max-width: 1080px; margin: 0 auto; }

                .la-header { margin-bottom: 24px; }
                .la-header h1 { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; margin: 0 0 4px; }
                .la-header p { color: var(--text-secondary); margin: 0; font-size: 0.88rem; }

                .la-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
                @media(max-width: 700px) { .la-stat-row { grid-template-columns: 1fr; } }
                .la-stat-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; padding: 18px 20px;
                    display: flex; align-items: center; gap: 14px;
                }
                .la-stat-icon {
                    width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
                    background: var(--bg-accent); color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                }
                .la-stat-icon svg { width: 19px; height: 19px; }
                .la-stat-meta p { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 3px; }
                .la-stat-meta h4 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; margin: 0; }

                .la-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: var(--radius-lg); overflow: hidden;
                    box-shadow: 0 1px 2px rgba(16,32,27,0.03), 0 12px 32px -18px rgba(16,32,27,0.12);
                }

                .la-toolbar { padding: 18px 22px; border-bottom: 1px solid var(--border); }
                .la-search {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    border-radius: var(--radius-pill); padding: 9px 16px; max-width: 340px;
                    transition: border-color 0.15s;
                }
                .la-search:focus-within { border-color: var(--border-accent); }
                .la-search svg { width: 16px; height: 16px; color: var(--text-muted); flex-shrink: 0; }
                .la-search input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%; font-family: var(--font-body);
                }
                .la-search input::placeholder { color: var(--text-muted); }

                .la-table { width: 100%; border-collapse: collapse; }
                .la-table th {
                    text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em;
                    color: var(--text-muted); font-weight: 700; padding: 14px 22px;
                    border-bottom: 1px solid var(--border); white-space: nowrap;
                }
                .la-table td {
                    padding: 15px 22px; border-bottom: 1px solid var(--border);
                    font-size: 0.86rem; color: var(--text-secondary); vertical-align: middle;
                }
                .la-table tbody tr:last-child td { border-bottom: none; }
                .la-table tbody tr:hover { background: var(--bg-soft); }

                .la-user-cell { display: flex; align-items: center; gap: 11px; }
                .la-avatar {
                    width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-accent); border: 1px solid var(--border-accent);
                    color: var(--accent); display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head); font-weight: 700; font-size: 0.72rem;
                }
                .la-user-cell h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0; }

                .la-ip {
                    font-family: 'SFMono-Regular', Consolas, monospace;
                    font-size: 0.8rem;
                    background: var(--bg-soft);
                    border: 1px solid var(--border);
                    border-radius: 7px;
                    padding: 3px 9px;
                    color: var(--text-primary);
                }

                .la-device-cell { display: flex; align-items: center; gap: 10px; }
                .la-device-icon {
                    width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    color: var(--text-secondary); display: flex; align-items: center; justify-content: center;
                }
                .la-device-icon svg { width: 14px; height: 14px; }
                .la-device-meta h6 { font-size: 0.83rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1px; }
                .la-device-meta p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .la-time-cell h6 { font-size: 0.83rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1px; }
                .la-time-cell p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }
                .la-time-recent { color: var(--accent) !important; font-weight: 700; }

                .la-empty { text-align: center; padding: 60px 24px; color: var(--text-muted); font-size: 0.88rem; }
                .la-empty svg { width: 34px; height: 34px; margin: 0 auto 12px; display: block; color: var(--text-muted); }

                .la-footer { padding: 16px 22px; display: flex; justify-content: flex-end; }
                .la-pagination { display: flex; gap: 6px; flex-wrap: wrap; }
                .la-page-link {
                    min-width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px; border-radius: 8px; border: 1px solid var(--border);
                    background: transparent; color: var(--text-secondary); font-size: 0.78rem; font-weight: 600;
                    text-decoration: none; transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .la-page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .la-page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .la-page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 760px) { .la-table { display: block; overflow-x: auto; white-space: nowrap; } }
            `}),e.jsxs("div",{className:"la-wrap",children:[e.jsxs("div",{className:"la-header",children:[e.jsx("h1",{children:"Login Activity"}),e.jsx("p",{children:"Track sign-ins across the platform, including device and location context."})]}),e.jsxs("div",{className:"la-stat-row",children:[e.jsxs("div",{className:"la-stat-card",children:[e.jsx("div",{className:"la-stat-icon",children:e.jsx(s.Shield,{})}),e.jsxs("div",{className:"la-stat-meta",children:[e.jsx("p",{children:"Total Logins"}),e.jsx("h4",{children:c.total})]})]}),e.jsxs("div",{className:"la-stat-card",children:[e.jsx("div",{className:"la-stat-icon",children:e.jsx(s.Users,{})}),e.jsxs("div",{className:"la-stat-meta",children:[e.jsx("p",{children:"Unique Users"}),e.jsx("h4",{children:c.uniqueUsers})]})]}),e.jsxs("div",{className:"la-stat-card",children:[e.jsx("div",{className:"la-stat-icon",children:e.jsx(s.Globe,{})}),e.jsxs("div",{className:"la-stat-meta",children:[e.jsx("p",{children:"Unique IPs"}),e.jsx("h4",{children:c.uniqueIps})]})]})]}),e.jsxs("div",{className:"la-card",children:[e.jsx("div",{className:"la-toolbar",children:e.jsxs("form",{onSubmit:m,className:"la-search",children:[e.jsx(s.Search,{}),e.jsx("input",{type:"text",placeholder:"Search by user or IP address…",value:o,onChange:a=>d(a.target.value)})]})}),l.length>0?e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"la-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"IP Address"}),e.jsx("th",{children:"Device / Browser"}),e.jsx("th",{children:"Logged In At"})]})}),e.jsx("tbody",{children:l.map((a,i)=>{var p,g;const{browser:f,os:u,isMobile:b}=S(a.user_agent),x=M(a.logged_in_at);return e.jsxs("tr",{children:[e.jsx("td",{children:(r.from??1)+i}),e.jsx("td",{children:e.jsxs("div",{className:"la-user-cell",children:[e.jsx("div",{className:"la-avatar",children:L((p=a.user)==null?void 0:p.name)}),e.jsx("h6",{children:((g=a.user)==null?void 0:g.name)??"N/A"})]})}),e.jsx("td",{children:e.jsx("span",{className:"la-ip",children:a.ip_address})}),e.jsx("td",{children:e.jsxs("div",{className:"la-device-cell",children:[e.jsx("div",{className:"la-device-icon",children:b?e.jsx(s.Mobile,{}):e.jsx(s.Desktop,{})}),e.jsxs("div",{className:"la-device-meta",children:[e.jsx("h6",{children:f}),e.jsx("p",{children:u})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"la-time-cell",children:[e.jsx("h6",{className:x&&x.includes("m ago")?"la-time-recent":"",children:x??new Date(a.logged_in_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}),e.jsx("p",{children:new Date(a.logged_in_at).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})})]})})]},a.id)})})]})}):e.jsxs("div",{className:"la-empty",children:[e.jsx(s.Inbox,{}),"No login activity found."]}),h.length>3&&e.jsx("div",{className:"la-footer",children:e.jsx("div",{className:"la-pagination",children:h.map((a,i)=>e.jsx(y,{href:a.url||"#",className:`la-page-link ${a.active?"active":""} ${a.url?"":"disabled"}`,preserveScroll:!0,children:z(a.label)},i))})})]})]})]})}A.layout=r=>e.jsx(k,{children:r,title:"Login Activity"});export{A as default};
