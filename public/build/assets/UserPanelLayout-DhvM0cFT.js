import{d as z,r as i,j as e,L as n,a as C}from"./app-BO26Fp_i.js";const y=[{route:"user.dashboard",label:"Dashboard",icon:"ti-layout-dashboard"},{route:"user.profile",label:"Profile",icon:"ti-user"},{route:"user.connections",label:"Connections",icon:"ti-messages"},{route:"user-panel.courses",label:"Courses",icon:"ti-book-2"}];function a(o,s){try{return route(o,s)}catch{return console.warn(`route("${o}") failed — check Ziggy config.`),"#"}}function L(o){if(!o||typeof o!="string")return"?";const s=o.trim().split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}function S({children:o}){var j;const{url:s,props:p}=z(),c=(s||"/").split("?")[0],l=((j=p==null?void 0:p.auth)==null?void 0:j.user)||null,x=r=>{const t=a(r);return t==="#"?!1:c===t||c.startsWith(t+"/")},f=i.useRef(null),[h,k]=i.useState({left:0,width:0});i.useEffect(()=>{var t;const r=(t=f.current)==null?void 0:t.querySelector("a.active");r&&k({left:r.offsetLeft,width:r.offsetWidth})},[c]);const[g,m]=i.useState(!1),[u,b]=i.useState(!1),d=i.useRef(null),v=i.useRef(null);i.useEffect(()=>{function r(t){var w;u&&d.current&&!d.current.contains(t.target)&&!((w=v.current)!=null&&w.contains(t.target))&&b(!1)}return document.addEventListener("click",r),()=>document.removeEventListener("click",r)},[u]);const N=r=>{r.preventDefault(),C.post(a("logout"))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .up-shell * { box-sizing: border-box; }
        .up-shell {
          --up-bg: #0e1618;
          --up-surface: #141d20;
          --up-surface2: #1a2428;
          --up-border: rgba(0, 166, 103, 0.16);
          --up-border-h: rgba(0, 166, 103, 0.34);
          --up-green: #48d597;
          --up-text: #e8f0ed;
          --up-muted: #7a9a8e;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--up-bg);
          color: var(--up-text);
          font-family: "IBM Plex Sans", sans-serif;
        }
        [data-h-theme="light"] .up-shell {
          --up-bg: #f6faf8;
          --up-surface: #ffffff;
          --up-surface2: #eef4f1;
          --up-border: rgba(0, 100, 60, 0.12);
          --up-border-h: rgba(0, 100, 60, 0.28);
          --up-green: #00a667;
          --up-text: #10201b;
          --up-muted: #5b7a70;
        }

        /* ── Header ── */
        .up-header {
          position: sticky; top: 0; z-index: 40;
          background: var(--up-surface);
          border-bottom: 1px solid var(--up-border);
        }
        .up-header-bar {
          max-width: 1280px; margin: 0 auto; padding: 0 24px; height: 64px;
          display: flex; align-items: center; gap: 32px;
        }
        .up-logo { display: flex; align-items: center; gap: 8px; flex-shrink: 0; text-decoration: none; }
        .up-logo-mark {
          width: 30px; height: 30px; border-radius: 8px; background: var(--up-green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .up-logo-mark svg { width: 15px; height: 15px; fill: #06231a; }
        .up-logo-name {
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 14px; color: var(--up-text);
        }
        .up-logo-name span { color: var(--up-green); }

        .up-nav {
          position: relative; display: flex; align-items: center; gap: 4px;
          flex: 1; overflow-x: auto; scrollbar-width: none; height: 100%;
        }
        .up-nav::-webkit-scrollbar { display: none; }
        .up-nav a {
          position: relative; display: flex; align-items: center; gap: 6px;
          padding: 0 14px; height: 100%; font-size: 13.5px; font-weight: 500;
          color: var(--up-muted); text-decoration: none; white-space: nowrap;
          transition: color 0.2s;
        }
        .up-nav a:hover { color: var(--up-text); }
        .up-nav a.active { color: var(--up-text); }
        .up-nav a i { font-size: 15px; }
        .up-nav-indicator {
          position: absolute; bottom: 0; height: 2px; background: var(--up-green);
          border-radius: 2px 2px 0 0; transition: left 0.25s ease, width 0.25s ease;
        }

        .up-header-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .up-home-link {
          display: none; align-items: center; gap: 6px; font-size: 13px; color: var(--up-muted);
          text-decoration: none; padding: 7px 12px; border: 1px solid var(--up-border); border-radius: 8px;
          transition: all 0.2s;
        }
        .up-home-link:hover { color: var(--up-text); border-color: var(--up-border-h); }

        .up-user-btn {
          display: flex; align-items: center; gap: 8px; padding: 5px 10px 5px 5px;
          border: 1px solid var(--up-border); border-radius: 999px; background: transparent;
          cursor: pointer; color: var(--up-text); transition: all 0.2s;
        }
        .up-user-btn:hover, .up-user-btn.open { border-color: var(--up-border-h); }
        .up-user-avatar {
          width: 26px; height: 26px; border-radius: 50%; background: var(--up-green); color: #06231a;
          display: flex; align-items: center; justify-content: center; font-family: "Syne", sans-serif;
          font-weight: 700; font-size: 10px; flex-shrink: 0; overflow: hidden;
        }
        .up-user-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .up-user-btn-name {
          font-size: 12.5px; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .up-user-panel {
          position: absolute; top: calc(100% + 10px); right: 24px; width: 220px;
          background: var(--up-surface); border: 1px solid var(--up-border); border-radius: 14px;
          padding: 8px; opacity: 0; visibility: hidden; transform: translateY(6px);
          transition: all 0.2s; box-shadow: 0 20px 50px rgba(0,0,0,0.4); z-index: 50;
        }
        .up-user-panel.open { opacity: 1; visibility: visible; transform: translateY(0); }
        .up-user-panel-item {
          display: flex; align-items: center; gap: 9px; width: 100%; padding: 9px 10px; border: none;
          background: transparent; border-radius: 8px; font-size: 13px; color: var(--up-text);
          text-align: left; cursor: pointer; text-decoration: none;
        }
        .up-user-panel-item:hover { background: rgba(72,213,151,0.1); }
        .up-user-panel-item.logout { color: #ff6b6b; }
        .up-user-panel-item.logout:hover { background: rgba(255,107,107,0.1); }

        .up-mobile-toggle {
          display: none; width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--up-border);
          background: transparent; color: var(--up-text); align-items: center; justify-content: center;
          font-size: 18px; cursor: pointer; flex-shrink: 0;
        }

        .up-mobile-nav {
          display: none; flex-direction: column; background: var(--up-surface);
          border-top: 1px solid var(--up-border); padding: 8px;
        }
        .up-mobile-nav.open { display: flex; }
        .up-mobile-nav a {
          display: flex; align-items: center; gap: 10px; padding: 11px 10px; border-radius: 8px;
          font-size: 14px; color: var(--up-muted); text-decoration: none;
        }
        .up-mobile-nav a.active { color: var(--up-text); background: rgba(72,213,151,0.1); }

        @media (max-width: 860px) {
          .up-nav { display: none; }
          .up-mobile-toggle { display: flex; }
        }

        /* ── Content ── */
        .up-main { flex: 1; }
        .up-content { max-width: 1280px; margin: 0 auto; padding: 32px 24px 64px; }

        /* ── Footer ── */
        .up-footer { border-top: 1px solid var(--up-border); background: var(--up-surface); }
        .up-footer-inner {
          max-width: 1280px; margin: 0 auto; padding: 28px 24px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
        }
        .up-footer-left { display: flex; align-items: center; gap: 10px; }
        .up-footer-left .up-logo-mark { width: 22px; height: 22px; }
        .up-footer-left span { font-size: 12.5px; color: var(--up-muted); }
        .up-footer-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .up-footer-links a {
          font-size: 12.5px; color: var(--up-muted); text-decoration: none; transition: color 0.2s;
        }
        .up-footer-links a:hover { color: var(--up-green); }

        @media (max-width: 640px) {
          .up-footer-inner { flex-direction: column; align-items: flex-start; }
          .up-content { padding: 24px 16px 48px; }
          .up-header-bar { padding: 0 16px; gap: 12px; }
        }
      `}),e.jsxs("div",{className:"up-shell",children:[e.jsxs("header",{className:"up-header",children:[e.jsxs("div",{className:"up-header-bar",children:[e.jsxs(n,{href:a("user.dashboard"),className:"up-logo",children:[e.jsx("div",{className:"up-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{className:"up-logo-name",children:["Future",e.jsx("span",{children:"Connect"})]})]}),e.jsxs("nav",{className:"up-nav",ref:f,children:[y.map(r=>e.jsxs(n,{href:a(r.route),className:x(r.route)?"active":"",children:[e.jsx("i",{className:`ti ${r.icon}`}),r.label]},r.route)),e.jsx("span",{className:"up-nav-indicator",style:{left:h.left,width:h.width}})]}),e.jsxs("div",{className:"up-header-right",children:[e.jsxs(n,{href:a("user.home"),className:"up-home-link",children:[e.jsx("i",{className:"ti ti-arrow-left"})," Back to site"]}),l&&e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("button",{ref:v,className:`up-user-btn${u?" open":""}`,onClick:r=>{r.stopPropagation(),b(t=>!t)},children:[e.jsx("span",{className:"up-user-avatar",children:l.avatar?e.jsx("img",{src:l.avatar,alt:l.name}):L(l.name)}),e.jsx("span",{className:"up-user-btn-name",children:l.name}),e.jsx("i",{className:"ti ti-chevron-down",style:{fontSize:12}})]}),e.jsxs("div",{ref:d,className:`up-user-panel${u?" open":""}`,children:[e.jsxs(n,{href:a("user.profile"),className:"up-user-panel-item",children:[e.jsx("i",{className:"ti ti-user"})," Profile"]}),e.jsxs(n,{href:a("user.home"),className:"up-user-panel-item",children:[e.jsx("i",{className:"ti ti-external-link"})," ","View site"]}),e.jsxs("button",{type:"button",className:"up-user-panel-item logout",onClick:N,children:[e.jsx("i",{className:"ti ti-logout"})," Log out"]})]})]}),e.jsx("button",{className:"up-mobile-toggle","aria-label":"Menu",onClick:()=>m(r=>!r),children:e.jsx("i",{className:`ti ${g?"ti-x":"ti-menu-2"}`})})]})]}),e.jsx("div",{className:`up-mobile-nav${g?" open":""}`,children:y.map(r=>e.jsxs(n,{href:a(r.route),className:x(r.route)?"active":"",onClick:()=>m(!1),children:[e.jsx("i",{className:`ti ${r.icon}`}),r.label]},r.route))})]}),e.jsx("main",{className:"up-main",children:e.jsx("div",{className:"up-content",children:o})}),e.jsx("footer",{className:"up-footer",children:e.jsxs("div",{className:"up-footer-inner",children:[e.jsxs("div",{className:"up-footer-left",children:[e.jsx("div",{className:"up-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("span",{children:["© ",new Date().getFullYear()," Future Connect"]})]}),e.jsxs("div",{className:"up-footer-links",children:[e.jsx(n,{href:a("user.faq"),children:"Help"}),e.jsx(n,{href:a("user.contact"),children:"Contact"}),e.jsx(n,{href:a("user.privacy-policy"),children:"Privacy"}),e.jsx(n,{href:a("user.terms-condition"),children:"Terms"})]})]})})]})]})}export{S as U};
