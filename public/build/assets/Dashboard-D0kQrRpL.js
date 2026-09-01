import{d as u,j as e,L as m}from"./app-DQcVR1sC.js";import{U as v}from"./UserPanelLayout-DPdEbeWh.js";function h(s,d){try{return route(s,d)}catch{return console.warn(`route("${s}") failed — check Ziggy config.`),"#"}}function g(s){if(!s||typeof s!="string")return"?";const d=s.trim().split(/\s+/).filter(Boolean);return d.length===0?"?":d.length===1?d[0].slice(0,2).toUpperCase():(d[0][0]+d[d.length-1][0]).toUpperCase()}function f(s){if(!s)return"";const d=new Date(s),r=Date.now()-d.getTime(),t=Math.floor(r/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const n=Math.floor(t/60);if(n<24)return`${n}h ago`;const i=Math.floor(n/24);return i<7?`${i}d ago`:d.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function o({icon:s,label:d,value:r}){return e.jsxs("div",{className:"db-stat-card",children:[e.jsx("div",{className:"db-stat-icon",children:e.jsx("i",{className:`ti ${s}`})}),e.jsxs("div",{className:"db-stat-body",children:[e.jsx("span",{className:"db-stat-value",children:r}),e.jsx("span",{className:"db-stat-label",children:d})]})]})}function j({status:s}){const d=(s||"").toLowerCase(),r=d==="approved"||d==="active"?"success":d==="rejected"||d==="declined"?"danger":"warning";return e.jsx("span",{className:`db-badge db-badge-${r}`,children:s||"pending"})}function y(){var p;const{props:s}=u(),{totalTestimonials:d=0,totalStories:r=0,totalTalents:t=0,totalUsers:n=0,users:i=[],talents:c=[],announcements:b=[]}=s,l=((p=s==null?void 0:s.auth)==null?void 0:p.user)||null;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .db-wrap * { box-sizing: border-box; }
        .db-wrap {
          --db-green: var(--up-green, #48d597);
          --db-surface: var(--up-surface, #141d20);
          --db-surface2: var(--up-surface2, #1a2428);
          --db-border: var(--up-border, rgba(0,166,103,0.16));
          --db-text: var(--up-text, #e8f0ed);
          --db-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--db-text);
        }

        /* Header */
        .db-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 28px; }
        .db-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--db-green); margin: 0 0 6px; }
        .db-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .db-subtitle { font-size: 13.5px; color: var(--db-muted); margin: 6px 0 0; }
        .db-head-right { font-size: 13px; color: var(--db-muted); }

        /* Stat cards */
        .db-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
        .db-stat-card {
          display: flex; align-items: center; gap: 14px; padding: 18px;
          background: var(--db-surface); border: 1px solid var(--db-border); border-radius: 14px;
          transition: border-color 0.2s;
        }
        .db-stat-card:hover { border-color: var(--up-border-h, rgba(0,166,103,0.34)); }
        .db-stat-icon {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          background: rgba(72,213,151,0.12); color: var(--db-green);
          display: flex; align-items: center; justify-content: center; font-size: 19px;
        }
        .db-stat-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .db-stat-value { font-family: "Syne", sans-serif; font-weight: 700; font-size: 22px; line-height: 1.1; }
        .db-stat-label { font-size: 12.5px; color: var(--db-muted); }

        /* Panel */
        .db-panel {
          background: var(--db-surface); border: 1px solid var(--db-border); border-radius: 14px;
          overflow: hidden; display: flex; flex-direction: column; height: 100%;
        }
        .db-panel-head {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 16px 18px; border-bottom: 1px solid var(--db-border);
        }
        .db-panel-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 14.5px; margin: 0; }
        .db-panel-link { font-size: 12.5px; color: var(--db-green); text-decoration: none; }
        .db-panel-link:hover { text-decoration: underline; }
        .db-panel-body { padding: 8px; flex: 1; }
        .db-empty { padding: 24px 12px; text-align: center; color: var(--db-muted); font-size: 13px; }

        /* Grid layout */
        .db-main-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; margin-bottom: 20px; }
        .db-side-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        /* Talents table */
        .db-table { width: 100%; border-collapse: collapse; }
        .db-table th {
          text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--db-muted); font-weight: 600; padding: 10px 12px; border-bottom: 1px solid var(--db-border);
        }
        .db-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid var(--db-border); vertical-align: middle; }
        .db-table tr:last-child td { border-bottom: none; }
        .db-person { display: flex; align-items: center; gap: 10px; }
        .db-avatar {
          width: 30px; height: 30px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
          background: var(--db-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 11px;
        }
        .db-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .db-person-name { font-weight: 500; }
        .db-muted-sm { color: var(--db-muted); font-size: 12px; }

        .db-badge {
          display: inline-flex; align-items: center; padding: 3px 9px; border-radius: 999px;
          font-size: 11px; font-weight: 600; text-transform: capitalize;
        }
        .db-badge-success { background: rgba(72,213,151,0.14); color: var(--db-green); }
        .db-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .db-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        /* Users list */
        .db-user-row { display: flex; align-items: center; gap: 12px; padding: 10px 10px; border-radius: 10px; }
        .db-user-row:hover { background: rgba(72,213,151,0.06); }
        .db-user-info { display: flex; flex-direction: column; min-width: 0; gap: 1px; }
        .db-user-info .name { font-size: 13.5px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .db-user-info .email { font-size: 12px; color: var(--db-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .db-user-row .time { margin-left: auto; font-size: 11.5px; color: var(--db-muted); white-space: nowrap; }

        /* Announcements */
        .db-annc-item { display: flex; gap: 12px; padding: 12px 10px; border-radius: 10px; }
        .db-annc-item:hover { background: rgba(72,213,151,0.06); }
        .db-annc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--db-green); margin-top: 6px; flex-shrink: 0; }
        .db-annc-body { min-width: 0; }
        .db-annc-title { font-size: 13.5px; font-weight: 500; margin: 0 0 2px; }
        .db-annc-time { font-size: 11.5px; color: var(--db-muted); }

        @media (max-width: 1080px) {
          .db-main-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .db-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .db-side-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .db-stats-grid { grid-template-columns: 1fr; }
        }
      `}),e.jsxs("div",{className:"db-wrap",children:[e.jsxs("div",{className:"db-head",children:[e.jsxs("div",{children:[e.jsx("p",{className:"db-eyebrow",children:"Overview"}),e.jsxs("h1",{className:"db-title",children:["Welcome back",l!=null&&l.name?`, ${l.name.split(" ")[0]}`:""]}),e.jsx("p",{className:"db-subtitle",children:"Here's what's happening across Future Connect today."})]}),e.jsx("div",{className:"db-head-right",children:new Date().toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"db-stats-grid",children:[e.jsx(o,{icon:"ti-quote",label:"Testimonials",value:d}),e.jsx(o,{icon:"ti-book-2",label:"Stories",value:r}),e.jsx(o,{icon:"ti-briefcase",label:"Talents",value:t}),e.jsx(o,{icon:"ti-users",label:"Users",value:n})]}),e.jsxs("div",{className:"db-main-grid",children:[e.jsxs("div",{className:"db-panel",children:[e.jsxs("div",{className:"db-panel-head",children:[e.jsx("h6",{className:"db-panel-title",children:"Recent talents"}),e.jsx(m,{href:h("user.talents.connected"),className:"db-panel-link",children:"View all"})]}),e.jsx("div",{className:"db-panel-body",children:c.length===0?e.jsx("div",{className:"db-empty",children:"No talents yet."}):e.jsxs("table",{className:"db-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:c.map(a=>{var x;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"db-person",children:[e.jsx("span",{className:"db-avatar",children:a.image?e.jsx("img",{src:`/image/talents/${a.image}`,alt:a.name}):g(a.name)}),e.jsx("span",{className:"db-person-name",children:a.name})]})}),e.jsx("td",{children:e.jsx("span",{className:"db-muted-sm",children:((x=a.category)==null?void 0:x.name)||"Uncategorized"})}),e.jsx("td",{children:e.jsx("span",{className:"db-muted-sm",children:a.phone||"—"})}),e.jsx("td",{children:e.jsx(j,{status:a.status})})]},a.id)})})]})})]}),e.jsxs("div",{className:"db-panel",children:[e.jsxs("div",{className:"db-panel-head",children:[e.jsx("h6",{className:"db-panel-title",children:"New users"}),e.jsx(m,{href:h("admin.users.index"),className:"db-panel-link",children:"View all"})]}),e.jsx("div",{className:"db-panel-body",children:i.length===0?e.jsx("div",{className:"db-empty",children:"No users yet."}):i.map(a=>e.jsxs("div",{className:"db-user-row",children:[e.jsx("span",{className:"db-avatar",children:a.avatar?e.jsx("img",{src:a.avatar,alt:a.name}):g(a.name)}),e.jsxs("div",{className:"db-user-info",children:[e.jsx("span",{className:"name",children:a.name}),e.jsx("span",{className:"email",children:a.email})]}),e.jsx("span",{className:"time",children:f(a.created_at)})]},a.id))})]})]}),e.jsxs("div",{className:"db-side-grid",children:[e.jsxs("div",{className:"db-panel",children:[e.jsx("div",{className:"db-panel-head",children:e.jsx("h6",{className:"db-panel-title",children:"Recent announcements"})}),e.jsx("div",{className:"db-panel-body",children:b.length===0?e.jsx("div",{className:"db-empty",children:"No announcements yet."}):b.map(a=>e.jsxs("div",{className:"db-annc-item",children:[e.jsx("span",{className:"db-annc-dot"}),e.jsxs("div",{className:"db-annc-body",children:[e.jsx("p",{className:"db-annc-title",children:a.title}),e.jsx("span",{className:"db-annc-time",children:f(a.created_at)})]})]},a.id))})]}),e.jsxs("div",{className:"db-panel",children:[e.jsx("div",{className:"db-panel-head",children:e.jsx("h6",{className:"db-panel-title",children:"Quick summary"})}),e.jsx("div",{className:"db-panel-body",style:{padding:"18px 14px"},children:e.jsxs("p",{style:{fontSize:13.5,color:"var(--db-muted)",lineHeight:1.6,margin:0},children:["You currently have"," ",e.jsx("strong",{style:{color:"var(--db-text)"},children:t})," ","talents,"," ",e.jsx("strong",{style:{color:"var(--db-text)"},children:r})," ","stories and"," ",e.jsx("strong",{style:{color:"var(--db-text)"},children:d})," ","testimonials published across the platform, serving"," ",e.jsx("strong",{style:{color:"var(--db-text)"},children:n})," ","registered users."]})})]})]})]})]})}y.layout=s=>e.jsx(v,{children:s});export{y as default};
