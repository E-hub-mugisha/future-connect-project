import{d as f,r as i,j as e,L as h}from"./app-CZoN4D26.js";import{U as v}from"./UserPanelLayout-Cet3NqlF.js";function y(n,c){try{return route(n,c)}catch{return console.warn(`route("${n}") failed — check Ziggy config.`),"#"}}function j(n){if(!n||typeof n!="string")return"?";const c=n.trim().split(/\s+/).filter(Boolean);return c.length===0?"?":c.length===1?c[0].slice(0,2).toUpperCase():(c[0][0]+c[c.length-1][0]).toUpperCase()}function w(n){return n?new Date(n).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"}):""}const x={pending:{label:"Pending",cls:"warning"},accepted:{label:"Accepted",cls:"success"},approved:{label:"Accepted",cls:"success"},declined:{label:"Declined",cls:"danger"},rejected:{label:"Declined",cls:"danger"}};function N({status:n}){const c=x[(n||"").toLowerCase()]||{label:n||"Pending",cls:"warning"};return e.jsx("span",{className:`cn-badge cn-badge-${c.cls}`,children:c.label})}const k=[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"accepted",label:"Accepted"},{key:"declined",label:"Declined"}];function z(){var l,d;const{props:n}=f(),c=(n==null?void 0:n.connections)||[],[s,g]=i.useState("all"),[u,m]=i.useState(null),b=i.useMemo(()=>{const r={all:c.length,pending:0,accepted:0,declined:0};return c.forEach(a=>{const t=(a.status||"pending").toLowerCase();t==="accepted"||t==="approved"?r.accepted++:t==="declined"||t==="rejected"?r.declined++:r.pending++}),r},[c]),o=i.useMemo(()=>s==="all"?c:c.filter(r=>{const a=(r.status||"pending").toLowerCase();return s==="accepted"?a==="accepted"||a==="approved":s==="declined"?a==="declined"||a==="rejected":a==="pending"||!x[a]}),[c,s]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .cn-wrap * { box-sizing: border-box; }
        .cn-wrap {
          --cn-green: var(--up-green, #48d597);
          --cn-surface: var(--up-surface, #141d20);
          --cn-surface2: var(--up-surface2, #1a2428);
          --cn-border: var(--up-border, rgba(0,166,103,0.16));
          --cn-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --cn-text: var(--up-text, #e8f0ed);
          --cn-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--cn-text);
        }

        .cn-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
        .cn-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cn-green); margin: 0 0 6px; }
        .cn-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .cn-subtitle { font-size: 13.5px; color: var(--cn-muted); margin: 6px 0 0; }

        .cn-tabs { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
        .cn-tab {
          display: flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px;
          border: 1px solid var(--cn-border); background: var(--cn-surface); color: var(--cn-muted);
          font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s;
        }
        .cn-tab:hover { border-color: var(--cn-border-h); color: var(--cn-text); }
        .cn-tab.active { background: var(--cn-green); color: #06231a; border-color: var(--cn-green); }
        .cn-tab .n { font-size: 11px; opacity: 0.8; }

        .cn-list { display: flex; flex-direction: column; gap: 12px; }

        .cn-card {
          background: var(--cn-surface); border: 1px solid var(--cn-border); border-radius: 14px;
          overflow: hidden; transition: border-color 0.15s;
        }
        .cn-card:hover { border-color: var(--cn-border-h); }
        .cn-card-main {
          display: flex; align-items: center; gap: 14px; padding: 16px 18px; cursor: pointer;
        }
        .cn-avatar {
          width: 44px; height: 44px; border-radius: 12px; overflow: hidden; flex-shrink: 0;
          background: var(--cn-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 14px;
        }
        .cn-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .cn-card-info { min-width: 0; flex: 1; }
        .cn-card-name { font-size: 14.5px; font-weight: 600; margin: 0 0 2px; }
        .cn-card-sub { font-size: 12px; color: var(--cn-muted); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .cn-card-sub .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--cn-muted); }
        .cn-card-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .cn-card-date { font-size: 11.5px; color: var(--cn-muted); white-space: nowrap; }
        .cn-chevron { font-size: 16px; color: var(--cn-muted); transition: transform 0.2s; }
        .cn-chevron.open { transform: rotate(180deg); }

        .cn-badge {
          display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px;
          font-size: 11px; font-weight: 700; white-space: nowrap;
        }
        .cn-badge-success { background: rgba(72,213,151,0.14); color: var(--cn-green); }
        .cn-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .cn-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        .cn-card-body { padding: 0 18px 18px; border-top: 1px solid var(--cn-border); }
        .cn-msg-block { padding-top: 14px; }
        .cn-msg-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cn-muted); margin: 0 0 6px; }
        .cn-msg-text {
          font-size: 13px; line-height: 1.6; color: var(--cn-text); margin: 0 0 16px;
          background: var(--cn-surface2); border: 1px solid var(--cn-border); border-radius: 10px; padding: 12px 14px;
        }
        .cn-response {
          background: rgba(72,213,151,0.06); border: 1px solid var(--cn-border); border-radius: 10px; padding: 12px 14px;
        }
        .cn-response .cn-msg-label { color: var(--cn-green); }
        .cn-card-actions { display: flex; gap: 10px; margin-top: 14px; }
        .cn-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 9px;
          border: 1px solid var(--cn-border); background: transparent; color: var(--cn-text);
          font-size: 12.5px; font-weight: 600; text-decoration: none; cursor: pointer; transition: all 0.15s;
        }
        .cn-btn:hover { border-color: var(--cn-border-h); }
        .cn-btn-primary { background: var(--cn-green); color: #06231a; border-color: var(--cn-green); }
        .cn-btn-primary:hover { opacity: 0.9; }

        .cn-empty {
          text-align: center; padding: 60px 20px; background: var(--cn-surface); border: 1px solid var(--cn-border);
          border-radius: 16px; color: var(--cn-muted);
        }
        .cn-empty i { font-size: 34px; color: var(--cn-green); margin-bottom: 12px; display: block; }
        .cn-empty h6 { font-family: "Syne", sans-serif; color: var(--cn-text); font-size: 15px; margin: 0 0 6px; }
        .cn-empty p { font-size: 13px; margin: 0; }
      `}),e.jsxs("div",{className:"cn-wrap",children:[e.jsx("div",{className:"cn-head",children:e.jsxs("div",{children:[e.jsx("p",{className:"cn-eyebrow",children:"Network"}),e.jsx("h1",{className:"cn-title",children:"My connections"}),e.jsxs("p",{className:"cn-subtitle",children:["Requests you've sent to talents using"," ",((d=(l=n==null?void 0:n.auth)==null?void 0:l.user)==null?void 0:d.email)&&e.jsx("strong",{children:n.auth.user.email}),"."]})]})}),e.jsx("div",{className:"cn-tabs",children:k.map(r=>e.jsxs("button",{className:`cn-tab${s===r.key?" active":""}`,onClick:()=>g(r.key),type:"button",children:[r.label," ",e.jsxs("span",{className:"n",children:["(",b[r.key],")"]})]},r.key))}),o.length===0?e.jsxs("div",{className:"cn-empty",children:[e.jsx("i",{className:"ti ti-plug-connected"}),e.jsxs("h6",{children:["No connections"," ",s!=="all"?`(${s})`:""," yet"]}),e.jsx("p",{children:"Reach out to a talent from their profile to start a conversation."})]}):e.jsx("div",{className:"cn-list",children:o.map(r=>{var p;const a=r.talent||{},t=u===r.id;return e.jsxs("div",{className:"cn-card",children:[e.jsxs("div",{className:"cn-card-main",onClick:()=>m(t?null:r.id),children:[e.jsx("span",{className:"cn-avatar",children:a.image?e.jsx("img",{src:`/image/talents/${a.image}`,alt:a.name}):j(a.name)}),e.jsxs("div",{className:"cn-card-info",children:[e.jsx("p",{className:"cn-card-name",children:a.name||"Talent"}),e.jsxs("div",{className:"cn-card-sub",children:[e.jsx("span",{children:((p=a.category)==null?void 0:p.name)||"Uncategorized"}),e.jsx("span",{className:"dot"}),e.jsx("span",{children:w(r.created_at)})]})]}),e.jsxs("div",{className:"cn-card-right",children:[e.jsx(N,{status:r.status}),e.jsx("i",{className:`ti ti-chevron-down cn-chevron${t?" open":""}`})]})]}),t&&e.jsx("div",{className:"cn-card-body",children:e.jsxs("div",{className:"cn-msg-block",children:[e.jsx("p",{className:"cn-msg-label",children:"Your message"}),e.jsx("p",{className:"cn-msg-text",children:r.message||"No message was included with this request."}),r.response&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"cn-msg-label",children:"Response from talent"}),e.jsx("div",{className:"cn-response",children:e.jsx("p",{className:"cn-msg-text",style:{margin:0,background:"transparent",border:"none",padding:0},children:r.response})})]}),e.jsxs("div",{className:"cn-card-actions",children:[a.id&&e.jsxs(h,{href:y("user.connections.show",a.id),className:"cn-btn cn-btn-primary",children:[e.jsx("i",{className:"ti ti-user"})," ","View profile"]}),a.phone&&e.jsxs("a",{href:`tel:${a.phone}`,className:"cn-btn",children:[e.jsx("i",{className:"ti ti-phone"})," ","Call"]})]})]})})]},r.id)})})]})]})}z.layout=n=>e.jsx(v,{children:n});export{z as default};
