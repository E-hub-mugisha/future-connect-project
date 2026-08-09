import{j as e,H as S,L as u,a as P}from"./app-CZoN4D26.js";import{A as V}from"./AppLayout-cgNkyb5j.js";function te({talent:r,flash:a}){var s,c,f,b,j,k,w,y,N,F,L,z,C,M,A,B,E,I;const n={index:()=>route("admin.talents.index"),edit:o=>route("admin.talents.edit",o),destroy:o=>route("admin.talents.destroy",o)},i=(r.status||"inactive").toLowerCase(),x=()=>{confirm(`Permanently delete ${r.name}?`)&&P.delete(n.destroy(r.id))};return e.jsxs(V,{children:[e.jsx(S,{title:"Skills Profile"}),e.jsx("style",{children:oe}),e.jsxs("div",{"data-h-scope":"profile",className:"profile-page",children:[(a==null?void 0:a.success)&&e.jsxs("div",{className:"flash-success mb-4",children:[e.jsx(U,{}),a.success]}),e.jsxs("div",{className:"breadcrumb-bar",children:[e.jsx(u,{href:n.index(),children:"Skills"}),e.jsx("span",{className:"sep",children:"›"}),e.jsx("span",{className:"current",children:r.name})]}),e.jsxs("div",{className:"hero-band",children:[r.image?e.jsx("img",{src:r.image,alt:r.name,className:"hero-avatar"}):e.jsx("div",{className:"hero-avatar-placeholder",children:(c=(s=r.name)==null?void 0:s.charAt(0))==null?void 0:c.toUpperCase()}),e.jsxs("div",{className:"hero-info",children:[e.jsxs("div",{className:"hero-badges",children:[e.jsxs("span",{className:`badge badge-${i}`,children:[e.jsx("span",{className:"badge-dot"}),p(i)]}),r.featured&&e.jsx("span",{className:"badge-featured",children:"★ Featured"}),r.level&&e.jsx("span",{className:"level-pill",children:p(r.level)}),r.matched&&e.jsx("span",{className:"badge-matched",children:"✓ Matched"})]}),e.jsx("div",{className:"hero-name",children:r.name}),e.jsxs("div",{className:"hero-category",children:[((f=r.category)==null?void 0:f.name)??"No Category",r.language?` · ${r.language}`:""]}),e.jsxs("div",{className:"hero-meta",children:[r.email&&e.jsxs("div",{className:"hero-meta-item",children:[e.jsx(R,{})," ",r.email]}),r.phone&&e.jsxs("div",{className:"hero-meta-item",children:[e.jsx(T,{})," ",r.phone]}),r.address&&e.jsxs("div",{className:"hero-meta-item",children:[e.jsx(G,{})," ",r.address]}),e.jsxs("div",{className:"hero-meta-item",children:[e.jsx(J,{})," Joined ",h(r.created_at)]})]})]}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs(u,{href:n.edit(r.id),className:"btn-accent",children:[e.jsx(O,{})," Edit"]}),e.jsx(u,{href:n.index(),className:"btn-secondary",children:"← Back"}),e.jsxs("button",{type:"button",className:"btn-danger-outline",onClick:x,children:[e.jsx(Q,{})," Delete"]})]})]}),e.jsxs("div",{className:"stat-grid",children:[e.jsx(l,{tone:"accent",icon:e.jsx(D,{}),value:((b=r.skills)==null?void 0:b.length)??0,label:"Skills"}),e.jsx(l,{tone:"info",icon:e.jsx(W,{}),value:((j=r.stories)==null?void 0:j.length)??0,label:"Stories"}),e.jsx(l,{tone:"gold",icon:e.jsx(m,{}),value:((k=r.feedback)==null?void 0:k.length)??0,label:"Feedback"}),e.jsx(l,{tone:"purple",icon:e.jsx(v,{}),value:((w=r.connections)==null?void 0:w.length)??0,label:"Connections"}),e.jsx(l,{tone:"danger",icon:e.jsx(Y,{}),value:((y=r.courses)==null?void 0:y.length)??0,label:"Courses"}),e.jsx(l,{tone:"warning",icon:e.jsx(q,{}),value:((N=r.supports)==null?void 0:N.length)??0,label:"Supports"})]}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("div",{className:"col-left",children:[e.jsxs(d,{icon:e.jsx(K,{}),title:"Profile Information",children:[e.jsx(t,{label:"Name",value:r.name}),e.jsx(t,{label:"Email",value:r.email,empty:"Not provided"}),e.jsx(t,{label:"Phone",value:r.phone,empty:"Not provided"}),e.jsx(t,{label:"Address",value:r.address,empty:"Not provided"}),e.jsx(t,{label:"Language",value:r.language,empty:"Not specified"}),e.jsx(t,{label:"Category",value:(F=r.category)==null?void 0:F.name,empty:"—"}),e.jsx(t,{label:"Level",value:r.level?e.jsx("span",{className:"level-pill",children:p(r.level)}):null,empty:"Not specified"})]}),r.description&&e.jsx(d,{icon:e.jsx(X,{}),title:"Bio / Description",noPadding:!0,children:e.jsx("div",{className:"description-text",children:r.description})}),e.jsx(d,{icon:e.jsx(D,{}),title:"Skills",count:((L=r.skills)==null?void 0:L.length)??0,noPadding:!0,children:((z=r.skills)==null?void 0:z.length)>0?e.jsx("div",{className:"skills-wrap",children:r.skills.map(o=>e.jsx("span",{className:"skill-tag",children:o.name},o.id))}):e.jsx(g,{icon:e.jsx(Z,{}),text:"No skills added yet"})}),e.jsx(d,{icon:e.jsx(W,{}),tone:"info",title:"Stories",count:((C=r.stories)==null?void 0:C.length)??0,noPadding:!0,children:((M=r.stories)==null?void 0:M.length)>0?r.stories.slice(0,5).map(o=>e.jsxs("div",{className:"story-item",children:[o.image&&e.jsx("img",{src:o.image,alt:"",className:"story-thumb"}),e.jsxs("div",{children:[e.jsx("div",{className:"story-title",children:o.title??"Untitled Story"}),e.jsx("div",{className:"story-date",children:h(o.created_at)})]})]},o.id)):e.jsx(g,{icon:e.jsx(ee,{}),text:"No stories yet"})})]}),e.jsxs("div",{className:"col-right",children:[e.jsx(d,{icon:e.jsx(m,{}),tone:"gold",title:"Feedback",count:((A=r.feedback)==null?void 0:A.length)??0,noPadding:!0,children:((B=r.feedback)==null?void 0:B.length)>0?r.feedback.slice(0,4).map(o=>e.jsxs("div",{className:"feedback-item",children:[e.jsxs("div",{className:"feedback-header",children:[e.jsx("span",{className:"feedback-author",children:o.name??"Anonymous"}),e.jsx("span",{className:"feedback-date",children:h(o.created_at)})]}),o.rating!=null&&e.jsx("div",{className:"stars",children:Array.from({length:5},(ae,H)=>H<o.rating?"★":"☆").join("")}),e.jsx("div",{className:"feedback-text",children:$(o.message??o.comment??"",120)})]},o.id)):e.jsx(g,{icon:e.jsx(m,{}),text:"No feedback yet"})}),e.jsx(d,{icon:e.jsx(v,{}),tone:"purple",title:"Connections",count:((E=r.connections)==null?void 0:E.length)??0,noPadding:!0,children:((I=r.connections)==null?void 0:I.length)>0?r.connections.slice(0,6).map(o=>e.jsxs("div",{className:"connection-item",children:[e.jsxs("div",{children:[e.jsx("div",{className:"conn-name",children:o.name??`Connection #${o.id}`}),e.jsx("div",{className:"conn-type",children:o.type??"General"})]}),e.jsx("span",{className:`conn-status ${o.status==="active"?"conn-active":"conn-pending"}`,children:p(o.status??"pending")})]},o.id)):e.jsx(g,{icon:e.jsx(v,{}),text:"No connections yet"})}),e.jsxs(d,{icon:e.jsx(re,{}),tone:"muted",title:"Record Info",children:[e.jsx(t,{label:"Record ID",value:e.jsxs("span",{className:"mono",children:["#",r.id]})}),e.jsx(t,{label:"Created",value:e.jsx("span",{className:"sm",children:h(r.created_at,!0)})}),e.jsx(t,{label:"Updated",value:e.jsx("span",{className:"sm",children:_(r.updated_at)})}),r.user&&e.jsx(t,{label:"Owner",value:r.user.name})]})]})]})]})]})}function p(r){return r&&r.charAt(0).toUpperCase()+r.slice(1)}function $(r,a){return r?r.length>a?r.slice(0,a).trim()+"…":r:""}function h(r,a=!1){if(!r)return"N/A";const n=new Date(r);if(isNaN(n))return"N/A";const i=a?{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}:{day:"2-digit",month:"short",year:"numeric"};return n.toLocaleDateString("en-GB",i).replace(",",",")}function _(r){if(!r)return"N/A";const a=new Date(r);if(isNaN(a))return"N/A";const n=Math.floor((Date.now()-a.getTime())/1e3),i=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];for(const[x,s]of i){const c=Math.floor(n/s);if(c>=1)return`${c} ${x}${c>1?"s":""} ago`}return"just now"}function l({tone:r,icon:a,value:n,label:i}){return e.jsxs("div",{className:"stat-card","data-tone":r,children:[e.jsx("div",{className:"s-icon",children:a}),e.jsx("div",{className:"s-value",children:n}),e.jsx("div",{className:"s-label",children:i})]})}function d({icon:r,tone:a="accent",title:n,count:i,noPadding:x=!1,children:s}){return e.jsxs("div",{className:"ui-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"card-header-left",children:[e.jsx("div",{className:"card-header-icon","data-tone":a,children:r}),e.jsx("h2",{children:n})]}),i!==void 0&&e.jsx("span",{className:"count-pill",children:i})]}),x?s:e.jsx("div",{className:"card-body",children:s})]})}function t({label:r,value:a,empty:n="—"}){const i=a==null||a==="";return e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:r}),e.jsx("span",{className:`info-value ${i?"empty":""}`,children:i?n:a})]})}function g({icon:r,text:a}){return e.jsxs("div",{className:"sub-empty",children:[r,a]})}function U(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function R(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})})}function T(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})})}function G(){return e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]})}function J(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}function O(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"})})}function Q(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function D(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"})})}function W(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})})}function m(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}function v(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})})}function Y(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})})}function q(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})}function K(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})}function X(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})})}function Z(){return e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}function ee(){return e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}function re(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}const oe=`
[data-h-scope="profile"] {
    --accent:        #4F46E5;
    --accent-light:  #EEF0FE;
    --accent-dark:   #4338CA;
    --surface:       #FFFFFF;
    --canvas:        #F6F7FB;
    --text-hi:       #101323;
    --text-mid:      #565D72;
    --text-lo:       #9AA0B4;
    --border:        #E9EBF3;
    --border-med:    #DCDFEC;
    --success:       #0EA96B;
    --success-bg:    #E9FAF2;
    --danger:        #E1493F;
    --danger-bg:     #FDEEEC;
    --warning:       #D48806;
    --warning-bg:    #FFF6E5;
    --info:          #2F80ED;
    --info-bg:       #EBF3FE;
    --gold:          #C07A05;
    --gold-bg:       #FCF2DD;
    --purple:        #7C4DE0;
    --purple-bg:     #F3EEFC;
    --radius-lg:     16px;
    --radius-md:     10px;
    --radius-sm:     7px;
    --shadow-card:   0 1px 2px rgba(16,19,35,.04), 0 1px 8px rgba(16,19,35,.04);
    --shadow-hover:  0 8px 24px rgba(16,19,35,.08);
    font-family: inherit;
}

.profile-page { padding: 28px 32px; background: var(--canvas); }

.flash-success { background: var(--success-bg); border: 1px solid rgba(14,169,107,.22); color: #085A3C; border-radius: var(--radius-md); padding: 12px 18px; font-size: 13px; display: flex; align-items: center; gap: 9px; }

.breadcrumb-bar { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--text-lo); margin-bottom: 20px; }
.breadcrumb-bar a { color: var(--text-lo); text-decoration: none; transition: color .15s; }
.breadcrumb-bar a:hover { color: var(--accent); }
.breadcrumb-bar .sep { font-size: 10px; }
.breadcrumb-bar .current { color: var(--text-mid); font-weight: 600; }

.hero-band {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
    padding: 26px 28px; display: flex; gap: 24px; align-items: flex-start; position: relative;
    overflow: hidden; box-shadow: var(--shadow-card); margin-bottom: 20px;
}
.hero-band::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--accent), #8B7CF0); }
.hero-avatar { width: 92px; height: 92px; border-radius: 50%; object-fit: cover; border: 3px solid var(--border-med); flex-shrink: 0; }
.hero-avatar-placeholder { width: 92px; height: 92px; border-radius: 50%; background: var(--accent-light); color: var(--accent); font-size: 34px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 3px solid #D2D6FA; }
.hero-info { flex: 1; min-width: 0; }
.hero-badges { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; margin-bottom: 9px; }
.hero-name { font-size: 23px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; line-height: 1.2; margin-bottom: 4px; }
.hero-category { font-size: 13px; color: var(--text-lo); margin-bottom: 14px; }
.hero-meta { display: flex; gap: 18px; flex-wrap: wrap; }
.hero-meta-item { display: flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--text-mid); }
.hero-meta-item svg { color: var(--text-lo); flex-shrink: 0; }
.hero-actions { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; min-width: 140px; }

.btn-accent { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: none; transition: background .18s, box-shadow .18s; white-space: nowrap; }
.btn-accent:hover { background: var(--accent-dark); color: #fff; box-shadow: 0 8px 18px rgba(79,70,229,.25); }
.btn-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: #F1F2F8; color: var(--text-mid); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 500; cursor: pointer; text-decoration: none; transition: all .15s; white-space: nowrap; }
.btn-secondary:hover { background: #E7E9F2; color: var(--text-hi); }
.btn-danger-outline { display: inline-flex; align-items: center; justify-content: center; gap: 6px; background: transparent; color: var(--danger); border: 1px solid rgba(225,73,63,.3); border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; cursor: pointer; transition: all .15s; white-space: nowrap; width: 100%; }
.btn-danger-outline:hover { background: var(--danger-bg); border-color: var(--danger); }

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 700; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-active { background: var(--success-bg); color: var(--success); }
.badge-inactive { background: #F1F2F7; color: var(--text-lo); }
.badge-pending { background: var(--warning-bg); color: var(--warning); }
.badge-featured { background: var(--gold-bg); color: var(--gold); border-radius: 20px; font-size: 11px; font-weight: 700; padding: 3px 9px; display: inline-flex; align-items: center; gap: 4px; }
.badge-matched { background: var(--accent-light); color: var(--accent); border-radius: 20px; font-size: 11px; font-weight: 700; padding: 3px 9px; display: inline-flex; align-items: center; gap: 4px; }
.level-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 700; background: var(--info-bg); color: var(--info); }

.stat-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 20px; }
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px)  { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
.stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 16px 18px; position: relative; overflow: hidden; box-shadow: var(--shadow-card); transition: box-shadow .2s, transform .2s; }
.stat-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.stat-card[data-tone="accent"] { --tone: var(--accent); --tone-bg: var(--accent-light); }
.stat-card[data-tone="info"] { --tone: var(--info); --tone-bg: var(--info-bg); }
.stat-card[data-tone="gold"] { --tone: var(--gold); --tone-bg: var(--gold-bg); }
.stat-card[data-tone="purple"] { --tone: var(--purple); --tone-bg: var(--purple-bg); }
.stat-card[data-tone="danger"] { --tone: var(--danger); --tone-bg: var(--danger-bg); }
.stat-card[data-tone="warning"] { --tone: var(--warning); --tone-bg: var(--warning-bg); }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--tone); }
.s-icon { width: 30px; height: 30px; border-radius: 9px; display: flex; align-items: center; justify-content: center; background: var(--tone-bg); color: var(--tone); margin-bottom: 10px; }
.s-value { font-size: 26px; font-weight: 800; color: var(--text-hi); letter-spacing: -.8px; line-height: 1; }
.s-label { font-size: 11px; color: var(--text-lo); text-transform: uppercase; letter-spacing: .08em; margin-top: 5px; font-weight: 700; }

.content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; align-items: start; }
@media (max-width: 1000px) { .content-grid { grid-template-columns: 1fr; } }
.col-left, .col-right { display: flex; flex-direction: column; gap: 20px; }

.ui-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); }
.card-header { padding: 13px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.card-header-left { display: flex; align-items: center; gap: 9px; }
.card-header-icon { width: 28px; height: 28px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; background: var(--accent-light); color: var(--accent); flex-shrink: 0; }
.card-header-icon[data-tone="info"] { background: var(--info-bg); color: var(--info); }
.card-header-icon[data-tone="gold"] { background: var(--gold-bg); color: var(--gold); }
.card-header-icon[data-tone="purple"] { background: var(--purple-bg); color: var(--purple); }
.card-header-icon[data-tone="muted"] { background: #F1F2F7; color: var(--text-lo); }
.card-header h2 { font-size: 13px; font-weight: 700; color: var(--text-hi); margin: 0; }
.count-pill { background: #F1F2F7; color: var(--text-lo); border-radius: 20px; font-size: 11px; font-weight: 700; padding: 2px 9px; }
.card-body { padding: 18px 20px; }

.info-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #F1F2F7; }
.info-row:last-child { border-bottom: none; padding-bottom: 0; }
.info-row:first-child { padding-top: 0; }
.info-label { font-size: 11px; color: var(--text-lo); text-transform: uppercase; letter-spacing: .07em; font-weight: 700; min-width: 110px; padding-top: 1px; flex-shrink: 0; }
.info-value { font-size: 13.5px; color: var(--text-hi); flex: 1; line-height: 1.5; }
.info-value.empty { color: var(--text-lo); font-style: italic; }
.info-value .mono { font-family: monospace; font-size: 12.5px; color: var(--text-lo); }
.info-value .sm { font-size: 12.5px; }

.description-text { font-size: 13.5px; color: var(--text-mid); line-height: 1.75; padding: 18px 20px; }

.skills-wrap { padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { background: #F1F2F7; color: var(--text-mid); border: 1px solid var(--border); font-size: 12px; padding: 4px 12px; border-radius: 20px; transition: all .15s; }
.skill-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.feedback-item { padding: 14px 20px; border-bottom: 1px solid #F1F2F7; }
.feedback-item:last-child { border-bottom: none; }
.feedback-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.feedback-author { font-size: 13px; font-weight: 600; color: var(--text-hi); }
.feedback-date { font-size: 11px; color: var(--text-lo); }
.feedback-text { font-size: 12.5px; color: var(--text-mid); line-height: 1.55; margin-top: 4px; }
.stars { color: var(--gold); font-size: 12px; margin-bottom: 4px; }

.story-item { display: flex; align-items: center; gap: 12px; padding: 13px 20px; border-bottom: 1px solid #F1F2F7; }
.story-item:last-child { border-bottom: none; }
.story-thumb { width: 52px; height: 40px; border-radius: var(--radius-sm); object-fit: cover; border: 1px solid var(--border); background: #F1F2F7; flex-shrink: 0; }
.story-title { font-size: 13px; font-weight: 600; color: var(--text-hi); margin-bottom: 2px; }
.story-date { font-size: 11px; color: var(--text-lo); }

.connection-item { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border-bottom: 1px solid #F1F2F7; gap: 12px; }
.connection-item:last-child { border-bottom: none; }
.conn-name { font-size: 13px; font-weight: 600; color: var(--text-hi); }
.conn-type { font-size: 11px; color: var(--text-lo); margin-top: 1px; }
.conn-status { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
.conn-active { background: var(--success-bg); color: var(--success); }
.conn-pending { background: var(--warning-bg); color: var(--warning); }

.sub-empty { padding: 28px 20px; text-align: center; font-size: 12.5px; color: var(--text-lo); }
.sub-empty svg { margin: 0 auto 8px; display: block; opacity: .4; }

@media (max-width: 700px) {
    .hero-band { flex-wrap: wrap; }
    .hero-actions { flex-direction: row; flex-wrap: wrap; min-width: 0; }
}
@media (max-width: 480px) {
    .hero-name { font-size: 20px; }
}
`;export{te as default};
