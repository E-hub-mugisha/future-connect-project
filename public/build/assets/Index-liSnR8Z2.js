import{d as j,r as o,j as e,L as d}from"./app-DQcVR1sC.js";import{U as N}from"./UserPanelLayout-DPdEbeWh.js";function p(r,c){try{return route(r,c)}catch{return console.warn(`route("${r}") failed — check Ziggy config.`),"#"}}function w(r){return r?new Date(r).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"}):""}const l={completed:{label:"Completed",cls:"success",icon:"ti-circle-check"},in_progress:{label:"In progress",cls:"warning",icon:"ti-player-play"},enrolled:{label:"Not started",cls:"muted",icon:"ti-player-play"},dropped:{label:"Dropped",cls:"danger",icon:"ti-circle-x"}};function k(r,c){const t=(r||"").toLowerCase();return l[t]?l[t]:Number(c)>=100?l.completed:Number(c)>0?l.in_progress:l.enrolled}const f=[{key:"all",label:"All"},{key:"in_progress",label:"In progress"},{key:"completed",label:"Completed"}];function z(){var g;const{props:r}=j(),c=(r==null?void 0:r.enrollments)||[],[t,v]=o.useState("all"),i=o.useMemo(()=>c.map(s=>({...s,_meta:k(s.status,s.progress)})),[c]),x=o.useMemo(()=>{const s={all:i.length,in_progress:0,completed:0};return i.forEach(a=>{a._meta.label==="Completed"?s.completed++:a._meta.label==="In progress"&&s.in_progress++}),s},[i]),m=o.useMemo(()=>t==="all"?i:t==="completed"?i.filter(s=>s._meta.label==="Completed"):t==="in_progress"?i.filter(s=>s._meta.label==="In progress"):i,[i,t]),y=c.length?Math.round(c.reduce((s,a)=>s+(Number(a.progress)||0),0)/c.length):0;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .cs-wrap * { box-sizing: border-box; }
        .cs-wrap {
          --cs-green: var(--up-green, #48d597);
          --cs-surface: var(--up-surface, #141d20);
          --cs-surface2: var(--up-surface2, #1a2428);
          --cs-border: var(--up-border, rgba(0,166,103,0.16));
          --cs-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --cs-text: var(--up-text, #e8f0ed);
          --cs-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--cs-text);
        }

        .cs-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
        .cs-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cs-green); margin: 0 0 6px; }
        .cs-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .cs-subtitle { font-size: 13.5px; color: var(--cs-muted); margin: 6px 0 0; }

        /* Stat strip */
        .cs-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 22px; }
        .cs-stat {
          background: var(--cs-surface); border: 1px solid var(--cs-border); border-radius: 14px; padding: 16px 18px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-stat-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0; background: rgba(72,213,151,0.12);
          color: var(--cs-green); display: flex; align-items: center; justify-content: center; font-size: 17px;
        }
        .cs-stat-value { font-family: "Syne", sans-serif; font-weight: 700; font-size: 19px; line-height: 1.1; }
        .cs-stat-label { font-size: 12px; color: var(--cs-muted); }
        @media (max-width: 640px) { .cs-stats { grid-template-columns: 1fr; } }

        .cs-tabs { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
        .cs-tab {
          display: flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px;
          border: 1px solid var(--cs-border); background: var(--cs-surface); color: var(--cs-muted);
          font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s;
        }
        .cs-tab:hover { border-color: var(--cs-border-h); color: var(--cs-text); }
        .cs-tab.active { background: var(--cs-green); color: #06231a; border-color: var(--cs-green); }
        .cs-tab .n { font-size: 11px; opacity: 0.8; }

        .cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1080px) { .cs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .cs-grid { grid-template-columns: 1fr; } }

        .cs-card {
          background: var(--cs-surface); border: 1px solid var(--cs-border); border-radius: 16px; overflow: hidden;
          display: flex; flex-direction: column; transition: border-color 0.15s;
        }
        .cs-card:hover { border-color: var(--cs-border-h); }
        .cs-thumb { width: 100%; height: 140px; object-fit: cover; background: var(--cs-surface2); display: block; }
        .cs-thumb-fallback {
          width: 100%; height: 140px; background: linear-gradient(135deg, rgba(72,213,151,0.18), rgba(72,213,151,0.04));
          display: flex; align-items: center; justify-content: center; color: var(--cs-green); font-size: 30px;
        }
        .cs-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .cs-card-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .cs-cat { font-size: 11px; color: var(--cs-muted); text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600; }
        .cs-badge {
          display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: 999px;
          font-size: 10.5px; font-weight: 700; white-space: nowrap;
        }
        .cs-badge-success { background: rgba(72,213,151,0.14); color: var(--cs-green); }
        .cs-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .cs-badge-muted { background: var(--cs-surface2); color: var(--cs-muted); }
        .cs-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        .cs-card-title { font-size: 14.5px; font-weight: 700; margin: 0; line-height: 1.35; }
        .cs-instructor { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--cs-muted); }
        .cs-instructor i { color: var(--cs-green); font-size: 13px; }

        .cs-progress-row { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: var(--cs-muted); }
        .cs-progress-bar { height: 6px; border-radius: 4px; background: var(--cs-surface2); overflow: hidden; }
        .cs-progress-fill { height: 100%; background: var(--cs-green); border-radius: 4px; transition: width 0.3s; }

        .cs-card-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 4px; }
        .cs-enrolled-date { font-size: 11px; color: var(--cs-muted); }
        .cs-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 9px;
          background: var(--cs-green); color: #06231a; font-size: 12.5px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: opacity 0.15s;
        }
        .cs-btn:hover { opacity: 0.9; }
        .cs-btn-outline { background: transparent; border: 1px solid var(--cs-border); color: var(--cs-text); }
        .cs-btn-outline:hover { border-color: var(--cs-border-h); }

        .cs-empty {
          text-align: center; padding: 60px 20px; background: var(--cs-surface); border: 1px solid var(--cs-border);
          border-radius: 16px; color: var(--cs-muted);
        }
        .cs-empty i { font-size: 34px; color: var(--cs-green); margin-bottom: 12px; display: block; }
        .cs-empty h6 { font-family: "Syne", sans-serif; color: var(--cs-text); font-size: 15px; margin: 0 0 6px; }
        .cs-empty p { font-size: 13px; margin: 0 0 18px; }
      `}),e.jsxs("div",{className:"cs-wrap",children:[e.jsxs("div",{className:"cs-head",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-eyebrow",children:"Learning"}),e.jsx("h1",{className:"cs-title",children:"My courses"}),e.jsx("p",{className:"cs-subtitle",children:"Track your progress across every course you're enrolled in."})]}),e.jsxs(d,{href:p("user.courses.browse"),className:"cs-btn cs-btn-outline",children:[e.jsx("i",{className:"ti ti-plus"})," Browse courses"]})]}),e.jsxs("div",{className:"cs-stats",children:[e.jsxs("div",{className:"cs-stat",children:[e.jsx("span",{className:"cs-stat-icon",children:e.jsx("i",{className:"ti ti-book-2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-stat-value",children:c.length}),e.jsx("div",{className:"cs-stat-label",children:"Enrolled courses"})]})]}),e.jsxs("div",{className:"cs-stat",children:[e.jsx("span",{className:"cs-stat-icon",children:e.jsx("i",{className:"ti ti-circle-check"})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-stat-value",children:x.completed}),e.jsx("div",{className:"cs-stat-label",children:"Completed"})]})]}),e.jsxs("div",{className:"cs-stat",children:[e.jsx("span",{className:"cs-stat-icon",children:e.jsx("i",{className:"ti ti-chart-arcs"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"cs-stat-value",children:[y,"%"]}),e.jsx("div",{className:"cs-stat-label",children:"Average progress"})]})]})]}),e.jsx("div",{className:"cs-tabs",children:f.map(s=>e.jsxs("button",{className:`cs-tab${t===s.key?" active":""}`,onClick:()=>v(s.key),type:"button",children:[s.label," ",e.jsxs("span",{className:"n",children:["(",x[s.key],")"]})]},s.key))}),m.length===0?e.jsxs("div",{className:"cs-empty",children:[e.jsx("i",{className:"ti ti-book-2"}),e.jsxs("h6",{children:["No courses ",t!=="all"?`(${(g=f.find(s=>s.key===t))==null?void 0:g.label.toLowerCase()})`:"yet"]}),e.jsx("p",{children:"Enroll in a course to start tracking your learning progress here."}),e.jsxs(d,{href:p("user.courses.browse"),className:"cs-btn",children:[e.jsx("i",{className:"ti ti-search"})," Browse courses"]})]}):e.jsx("div",{className:"cs-grid",children:m.map(s=>{var b,h;const a=s.course||{},n=s._meta,u=Math.min(100,Math.max(0,Number(s.progress)||0));return e.jsxs("div",{className:"cs-card",children:[a.thumbnail?e.jsx("img",{className:"cs-thumb",src:`/image/courses/${a.thumbnail}`,alt:a.title}):e.jsx("div",{className:"cs-thumb-fallback",children:e.jsx("i",{className:"ti ti-book-2"})}),e.jsxs("div",{className:"cs-card-body",children:[e.jsxs("div",{className:"cs-card-top",children:[e.jsx("span",{className:"cs-cat",children:((b=a.category)==null?void 0:b.name)||"General"}),e.jsxs("span",{className:`cs-badge cs-badge-${n.cls}`,children:[e.jsx("i",{className:`ti ${n.icon}`})," ",n.label]})]}),e.jsx("h6",{className:"cs-card-title",children:a.title}),((h=a.talent)==null?void 0:h.name)&&e.jsxs("div",{className:"cs-instructor",children:[e.jsx("i",{className:"ti ti-user"})," ",a.talent.name]}),e.jsxs("div",{children:[e.jsxs("div",{className:"cs-progress-row",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[u,"%"]})]}),e.jsx("div",{className:"cs-progress-bar",style:{marginTop:5},children:e.jsx("div",{className:"cs-progress-fill",style:{width:`${u}%`}})})]}),e.jsxs("div",{className:"cs-card-footer",children:[e.jsxs("span",{className:"cs-enrolled-date",children:["Enrolled ",w(s.created_at)]}),e.jsx(d,{href:p("user.courses.show",a.id),className:"cs-btn",children:n.label==="Completed"?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-eye"})," Review"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-player-play"})," Continue"]})})]})]})]},s.id)})})]})]})}z.layout=r=>e.jsx(N,{children:r});export{z as default};
