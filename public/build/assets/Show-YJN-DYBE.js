import{d as $,r as x,u as D,j as e,L as j}from"./app-CgjB0zLb.js";import{U as M}from"./UserPanelLayout-BEm1mDsY.js";function g(s,t){try{return route(s,t)}catch{return console.warn(`route("${s}") failed — check Ziggy config.`),"#"}}function y(s){if(!s||typeof s!="string")return"?";const t=s.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()}function N(s){return s?new Date(s).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"}):""}function w({value:s=0}){const t=Math.round(s);return e.jsx("span",{className:"td-stars","aria-label":`${s} out of 5`,children:[1,2,3,4,5].map(i=>e.jsx("i",{className:`ti ${i<=t?"ti-star-filled":"ti-star"}`},i))})}const T=[{key:"about",label:"About"},{key:"skills",label:"Skills"},{key:"stories",label:"Portfolio"},{key:"feedback",label:"Reviews"}];function F(){var f,u,b;const{props:s}=$(),t=(s==null?void 0:s.talent)||{},i=((f=s==null?void 0:s.auth)==null?void 0:f.user)||null,l=t.skills||[],o=t.stories||[],d=t.feedback||[],[n,k]=x.useState("about"),[z,c]=x.useState(!1),[S,m]=x.useState(!1),h=d.length?d.reduce((a,p)=>a+(Number(p.rating)||0),0)/d.length:0,r=D({name:(i==null?void 0:i.name)||"",email:(i==null?void 0:i.email)||"",message:""}),C=a=>{a.preventDefault(),r.post(g("user.talents.connect",t.id),{preserveScroll:!0,onSuccess:()=>{m(!0),r.reset("message")}})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .td-wrap * { box-sizing: border-box; }
        .td-wrap {
          --td-green: var(--up-green, #48d597);
          --td-surface: var(--up-surface, #141d20);
          --td-surface2: var(--up-surface2, #1a2428);
          --td-border: var(--up-border, rgba(0,166,103,0.16));
          --td-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --td-text: var(--up-text, #e8f0ed);
          --td-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--td-text);
        }

        .td-breadcrumb { font-size: 12.5px; color: var(--td-muted); margin-bottom: 18px; display: flex; align-items: center; gap: 6px; }
        .td-breadcrumb a { color: var(--td-muted); text-decoration: none; }
        .td-breadcrumb a:hover { color: var(--td-green); }
        .td-breadcrumb .cur { color: var(--td-text); }

        /* Hero */
        .td-hero {
          background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 18px;
          padding: 28px; display: flex; gap: 22px; align-items: flex-start; flex-wrap: wrap; margin-bottom: 20px;
          position: relative; overflow: hidden;
        }
        .td-hero::before {
          content: ""; position: absolute; top: -60px; right: -60px; width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(72,213,151,0.15), transparent 70%); pointer-events: none;
        }
        .td-avatar {
          width: 108px; height: 108px; border-radius: 20px; overflow: hidden; flex-shrink: 0;
          background: var(--td-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 34px; position: relative; z-index: 1;
        }
        .td-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .td-hero-info { flex: 1; min-width: 220px; position: relative; z-index: 1; }
        .td-name-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 6px; }
        .td-name { font-family: "Syne", sans-serif; font-weight: 700; font-size: 24px; margin: 0; }
        .td-featured {
          display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 999px;
          background: rgba(240,180,60,0.14); color: #f0b43c; font-size: 11px; font-weight: 700;
        }
        .td-meta { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; color: var(--td-muted); font-size: 13px; margin-bottom: 12px; }
        .td-meta span { display: flex; align-items: center; gap: 5px; }
        .td-meta i { color: var(--td-green); font-size: 15px; }
        .td-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .td-tag {
          padding: 4px 11px; border-radius: 999px; background: var(--td-surface2); border: 1px solid var(--td-border);
          font-size: 11.5px; color: var(--td-text); font-weight: 600;
        }
        .td-stars { display: inline-flex; gap: 2px; }
        .td-stars i { font-size: 14px; color: #f0b43c; }
        .td-rating-row { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .td-rating-num { font-size: 13px; color: var(--td-muted); }

        .td-hero-actions { display: flex; flex-direction: column; gap: 10px; position: relative; z-index: 1; }
        .td-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 20px; border-radius: 10px;
          border: none; background: var(--td-green); color: #06231a; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: opacity 0.15s; font-family: inherit; white-space: nowrap;
        }
        .td-btn:hover { opacity: 0.9; }
        .td-btn-ghost { background: transparent; border: 1px solid var(--td-border); color: var(--td-text); }
        .td-btn-ghost:hover { border-color: var(--td-border-h); }

        /* Layout */
        .td-grid { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
        @media (max-width: 900px) { .td-grid { grid-template-columns: 1fr; } }

        .td-panel { background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; padding: 24px; }

        .td-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--td-border); margin-bottom: 20px; }
        .td-tab {
          padding: 10px 16px; border: none; background: transparent; color: var(--td-muted); font-size: 13.5px;
          font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.15s;
        }
        .td-tab:hover { color: var(--td-text); }
        .td-tab.active { color: var(--td-green); border-color: var(--td-green); }

        .td-section-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 15px; margin: 0 0 12px; }
        .td-desc { font-size: 13.5px; line-height: 1.75; color: var(--td-text); }

        .td-skills-list { display: flex; flex-direction: column; gap: 12px; }
        .td-skill-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .td-skill-name { font-size: 13.5px; font-weight: 500; }
        .td-skill-bar { flex: 1; height: 6px; border-radius: 4px; background: var(--td-surface2); margin: 0 14px; overflow: hidden; }
        .td-skill-bar-fill { height: 100%; background: var(--td-green); border-radius: 4px; }
        .td-skill-level { font-size: 12px; color: var(--td-muted); width: 40px; text-align: right; }

        .td-stories-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        @media (max-width: 640px) { .td-stories-grid { grid-template-columns: 1fr; } }
        .td-story-card { border: 1px solid var(--td-border); border-radius: 12px; overflow: hidden; }
        .td-story-img { width: 100%; height: 130px; object-fit: cover; background: var(--td-surface2); }
        .td-story-body { padding: 12px 14px; }
        .td-story-title { font-size: 13.5px; font-weight: 600; margin: 0 0 4px; }
        .td-story-desc { font-size: 12px; color: var(--td-muted); margin: 0; line-height: 1.5; }

        .td-feedback-item { padding: 16px 0; border-bottom: 1px solid var(--td-border); }
        .td-feedback-item:last-child { border-bottom: none; padding-bottom: 0; }
        .td-feedback-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .td-fb-avatar {
          width: 32px; height: 32px; border-radius: 50%; background: var(--td-surface2); color: var(--td-text);
          display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; font-family: "Syne", sans-serif;
        }
        .td-fb-name { font-size: 13px; font-weight: 600; }
        .td-fb-date { font-size: 11.5px; color: var(--td-muted); margin-left: auto; }
        .td-fb-comment { font-size: 13px; color: var(--td-text); line-height: 1.6; margin: 0; }

        .td-empty { text-align: center; padding: 30px 10px; color: var(--td-muted); font-size: 13px; }

        /* Side card */
        .td-side-card { background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; padding: 20px; margin-bottom: 16px; }
        .td-side-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 13.5px; margin: 0 0 14px; }
        .td-contact-row { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--td-text); padding: 9px 0; border-bottom: 1px solid var(--td-border); }
        .td-contact-row:last-child { border-bottom: none; }
        .td-contact-row i { color: var(--td-green); font-size: 15px; width: 18px; }

        /* Modal */
        .td-modal-overlay {
          position: fixed; inset: 0; background: rgba(6,10,11,0.6); display: flex; align-items: center; justify-content: center;
          z-index: 200; padding: 20px; backdrop-filter: blur(2px);
        }
        .td-modal {
          background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; width: 100%; max-width: 440px;
          padding: 26px; max-height: 90vh; overflow-y: auto;
        }
        .td-modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .td-modal-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 17px; margin: 0; }
        .td-modal-close { background: none; border: none; color: var(--td-muted); font-size: 18px; cursor: pointer; }
        .td-modal-sub { font-size: 12.5px; color: var(--td-muted); margin: 0 0 18px; }

        .td-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .td-label { font-size: 12px; font-weight: 600; }
        .td-input {
          width: 100%; padding: 10px 12px; border-radius: 9px; border: 1px solid var(--td-border);
          background: var(--td-surface2); color: var(--td-text); font-size: 13px; font-family: inherit;
        }
        .td-input:focus { outline: none; border-color: var(--td-green); }
        textarea.td-input { resize: vertical; }
        .td-field-error { font-size: 11.5px; color: #ff6b6b; }

        .td-success { text-align: center; padding: 20px 10px; }
        .td-success i { font-size: 40px; color: var(--td-green); margin-bottom: 10px; display: block; }
        .td-success h6 { font-family: "Syne", sans-serif; margin: 0 0 6px; }
        .td-success p { font-size: 13px; color: var(--td-muted); margin: 0; }
      `}),e.jsxs("div",{className:"td-wrap",children:[e.jsxs("div",{className:"td-breadcrumb",children:[e.jsx(j,{href:g("user.dashboard"),children:"Dashboard"}),e.jsx("span",{children:"/"}),e.jsx(j,{href:g("user.talents.connected"),children:"Talents"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"cur",children:t.name})]}),e.jsxs("div",{className:"td-hero",children:[e.jsx("span",{className:"td-avatar",children:t.image?e.jsx("img",{src:`/image/talents/${t.image}`,alt:t.name}):y(t.name)}),e.jsxs("div",{className:"td-hero-info",children:[e.jsxs("div",{className:"td-name-row",children:[e.jsx("h1",{className:"td-name",children:t.name}),t.featured&&e.jsxs("span",{className:"td-featured",children:[e.jsx("i",{className:"ti ti-award"})," Featured"]})]}),e.jsxs("div",{className:"td-meta",children:[((u=t.category)==null?void 0:u.name)&&e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-briefcase"})," ",t.category.name]}),t.address&&e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-map-pin"})," ",t.address]}),t.language&&e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-language"})," ",t.language]}),t.level&&e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-stairs-up"})," ",t.level]})]}),d.length>0&&e.jsxs("div",{className:"td-rating-row",children:[e.jsx(w,{value:h}),e.jsxs("span",{className:"td-rating-num",children:[h.toFixed(1)," (",d.length," review",d.length!==1?"s":"",")"]})]})]}),e.jsxs("div",{className:"td-hero-actions",children:[e.jsxs("button",{className:"td-btn",onClick:()=>c(!0),type:"button",children:[e.jsx("i",{className:"ti ti-send"})," Connect"]}),t.phone&&e.jsxs("a",{className:"td-btn td-btn-ghost",href:`tel:${t.phone}`,children:[e.jsx("i",{className:"ti ti-phone"})," Call"]})]})]}),e.jsxs("div",{className:"td-grid",children:[e.jsxs("div",{className:"td-panel",children:[e.jsx("div",{className:"td-tabs",children:T.map(a=>e.jsxs("button",{className:`td-tab${n===a.key?" active":""}`,onClick:()=>k(a.key),type:"button",children:[a.label,a.key==="skills"&&l.length>0&&` (${l.length})`,a.key==="stories"&&o.length>0&&` (${o.length})`,a.key==="feedback"&&d.length>0&&` (${d.length})`]},a.key))}),n==="about"&&e.jsxs("div",{children:[e.jsxs("h6",{className:"td-section-title",children:["About ",t.name]}),e.jsx("p",{className:"td-desc",children:t.description||"No description provided yet."})]}),n==="skills"&&e.jsxs("div",{children:[e.jsx("h6",{className:"td-section-title",children:"Skills"}),l.length===0?e.jsx("div",{className:"td-empty",children:"No skills listed yet."}):e.jsx("div",{className:"td-skills-list",children:l.map(a=>e.jsxs("div",{className:"td-skill-row",children:[e.jsx("span",{className:"td-skill-name",children:a.name}),e.jsx("span",{className:"td-skill-bar",children:e.jsx("span",{className:"td-skill-bar-fill",style:{width:`${Math.min(100,Number(a.level)||60)}%`}})}),e.jsx("span",{className:"td-skill-level",children:a.level?`${a.level}%`:""})]},a.id))})]}),n==="stories"&&e.jsxs("div",{children:[e.jsx("h6",{className:"td-section-title",children:"Portfolio"}),o.length===0?e.jsx("div",{className:"td-empty",children:"No portfolio items yet."}):e.jsx("div",{className:"td-stories-grid",children:o.map(a=>e.jsxs("div",{className:"td-story-card",children:[a.image&&e.jsx("img",{className:"td-story-img",src:`/image/stories/${a.image}`,alt:a.title}),e.jsxs("div",{className:"td-story-body",children:[e.jsx("p",{className:"td-story-title",children:a.title}),e.jsx("p",{className:"td-story-desc",children:a.description})]})]},a.id))})]}),n==="feedback"&&e.jsxs("div",{children:[e.jsx("h6",{className:"td-section-title",children:"Reviews"}),d.length===0?e.jsx("div",{className:"td-empty",children:"No reviews yet."}):d.map(a=>{var p,v;return e.jsxs("div",{className:"td-feedback-item",children:[e.jsxs("div",{className:"td-feedback-head",children:[e.jsx("span",{className:"td-fb-avatar",children:y(a.name||((p=a.user)==null?void 0:p.name))}),e.jsx("span",{className:"td-fb-name",children:a.name||((v=a.user)==null?void 0:v.name)||"Anonymous"}),e.jsx("span",{className:"td-fb-date",children:N(a.created_at)})]}),e.jsx(w,{value:Number(a.rating)||0}),e.jsx("p",{className:"td-fb-comment",style:{marginTop:6},children:a.comment})]},a.id)})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"td-side-card",children:[e.jsx("h6",{className:"td-side-title",children:"Contact information"}),t.email&&e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-mail"})," ",t.email]}),t.phone&&e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-phone"})," ",t.phone]}),t.address&&e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-map-pin"})," ",t.address]})]}),e.jsxs("div",{className:"td-side-card",children:[e.jsx("h6",{className:"td-side-title",children:"Details"}),e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-category"})," ",((b=t.category)==null?void 0:b.name)||"Uncategorized"]}),e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-language"})," ",t.language||"—"]}),e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-stairs-up"})," ",t.level||"—"]}),e.jsxs("div",{className:"td-contact-row",children:[e.jsx("i",{className:"ti ti-calendar"})," Joined ",N(t.created_at)]})]})]})]})]}),z&&e.jsx("div",{className:"td-modal-overlay",onClick:a=>{a.target===a.currentTarget&&(c(!1),m(!1))},children:e.jsx("div",{className:"td-modal",children:S?e.jsxs("div",{className:"td-success",children:[e.jsx("i",{className:"ti ti-circle-check"}),e.jsx("h6",{children:"Request sent"}),e.jsxs("p",{children:[t.name," will receive your message and can respond via your connections page."]}),e.jsx("button",{className:"td-btn",style:{marginTop:18,width:"100%"},onClick:()=>{c(!1),m(!1)},type:"button",children:"Done"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"td-modal-head",children:[e.jsxs("h5",{className:"td-modal-title",children:["Connect with ",t.name]}),e.jsx("button",{className:"td-modal-close",onClick:()=>c(!1),type:"button",children:e.jsx("i",{className:"ti ti-x"})})]}),e.jsx("p",{className:"td-modal-sub",children:"Send a short message to introduce yourself and start the conversation."}),e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"td-field",children:[e.jsx("label",{className:"td-label",children:"Your name"}),e.jsx("input",{className:"td-input",value:r.data.name,onChange:a=>r.setData("name",a.target.value)}),r.errors.name&&e.jsx("span",{className:"td-field-error",children:r.errors.name})]}),e.jsxs("div",{className:"td-field",children:[e.jsx("label",{className:"td-label",children:"Your email"}),e.jsx("input",{type:"email",className:"td-input",value:r.data.email,onChange:a=>r.setData("email",a.target.value)}),r.errors.email&&e.jsx("span",{className:"td-field-error",children:r.errors.email})]}),e.jsxs("div",{className:"td-field",children:[e.jsx("label",{className:"td-label",children:"Message"}),e.jsx("textarea",{className:"td-input",rows:4,placeholder:`Hi ${t.name}, I'd like to discuss...`,value:r.data.message,onChange:a=>r.setData("message",a.target.value)}),r.errors.message&&e.jsx("span",{className:"td-field-error",children:r.errors.message})]}),e.jsx("button",{className:"td-btn",style:{width:"100%"},type:"submit",disabled:r.processing,children:r.processing?"Sending...":"Send request"})]})]})})})]})}F.layout=s=>e.jsx(M,{children:s});export{F as default};
