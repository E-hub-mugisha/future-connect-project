import{r as c,j as e,H as U,a as V,u as G}from"./app-CJlpfYPO.js";import{A as W}from"./AppLayout-WTBEreOn.js";const F={store:()=>route("admin.partners.store"),update:r=>route("admin.partners.update",r),destroy:r=>route("admin.partners.destroy",r)};function ie({partners:r=[],flash:a={}}){const[n,t]=c.useState(""),[s,d]=c.useState("all"),[p,x]=c.useState(null),[b,g]=c.useState(null),[o,l]=c.useState(null),h=c.useMemo(()=>Array.isArray(r)?r:r!=null&&r.data&&Array.isArray(r.data)?r.data:[],[r]),m=c.useMemo(()=>{const i=h.length,u=h.filter(w=>!!w.is_active).length,y=i-u;return{total:i,active:u,inactive:y}},[h]),f=c.useMemo(()=>{const i=n.trim().toLowerCase();return h.filter(u=>{var S,I,P;const y=!i||((S=u.name)==null?void 0:S.toLowerCase().includes(i))||((I=u.description)==null?void 0:I.toLowerCase().includes(i))||((P=u.link)==null?void 0:P.toLowerCase().includes(i)),w=s==="all"||s==="active"&&!!u.is_active||s==="inactive"&&!u.is_active;return y&&w})},[h,n,s]),B=!!(n||s!=="all"),M=()=>{t(""),d("all")},$=()=>{o&&V.delete(F.destroy(o.id),{preserveScroll:!0,onSuccess:()=>{l(null),(p==null?void 0:p.id)===o.id&&x(null)}})};return e.jsxs(W,{children:[e.jsx(U,{title:"Partners"}),e.jsxs("div",{className:"partners-page","data-h-scope":"partners",children:[e.jsx("style",{children:se}),e.jsxs("div",{className:"partners-container",children:[e.jsx("header",{className:"page-header",children:e.jsxs("div",{className:"page-header-content",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx("span",{children:"Administration"}),e.jsx("span",{className:"breadcrumb-separator",children:"/"}),e.jsx("span",{children:"Partners"})]}),e.jsxs("div",{className:"title-row",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx("span",{className:"eyebrow-dot"}),"PARTNERS & ORGANIZATIONS"]}),e.jsx("h1",{children:"Partners"}),e.jsx("p",{children:"Manage the organizations and partners represented across your platform."})]}),e.jsxs("button",{type:"button",className:"primary-button",onClick:()=>g({}),children:[e.jsx(L,{}),e.jsx("span",{children:"Add partner"})]})]})]})}),(a==null?void 0:a.success)&&e.jsxs("div",{className:"flash-success",children:[e.jsx("div",{className:"flash-icon",children:e.jsx(C,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Success"}),e.jsx("span",{children:a.success})]}),e.jsx("button",{type:"button",onClick:()=>{const i=document.querySelector(".flash-success");i&&(i.style.display="none")},"aria-label":"Dismiss notification",children:e.jsx(v,{})})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(k,{label:"Total partners",value:m.total,description:"Organizations in your directory",icon:e.jsx(D,{}),tone:"blue"}),e.jsx(k,{label:"Active partners",value:m.active,description:"Currently visible on the platform",icon:e.jsx(T,{}),tone:"green"}),e.jsx(k,{label:"Inactive partners",value:m.inactive,description:"Currently hidden from public areas",icon:e.jsx(X,{}),tone:"gray"})]}),e.jsxs("section",{className:"content-panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"panel-title",children:"Partner directory"}),e.jsx("div",{className:"panel-subtitle",children:"Review, update and manage your partner organizations."})]}),e.jsxs("div",{className:"panel-count",children:[e.jsx("span",{children:f.length}),f.length===1?"partner":"partners"]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(Q,{}),e.jsx("input",{type:"search",value:n,onChange:i=>t(i.target.value),placeholder:"Search partners...","aria-label":"Search partners"}),n&&e.jsx("button",{type:"button",className:"search-clear",onClick:()=>t(""),"aria-label":"Clear search",children:e.jsx(v,{})})]}),e.jsxs("div",{className:"toolbar-right",children:[e.jsxs("div",{className:"status-filter",role:"group","aria-label":"Filter partners",children:[e.jsx("button",{type:"button",className:s==="all"?"active":"",onClick:()=>d("all"),children:"All"}),e.jsx("button",{type:"button",className:s==="active"?"active":"",onClick:()=>d("active"),children:"Active"}),e.jsx("button",{type:"button",className:s==="inactive"?"active":"",onClick:()=>d("inactive"),children:"Inactive"})]}),B&&e.jsx("button",{type:"button",className:"clear-filter-button",onClick:M,children:"Clear filters"})]})]}),f.length>0?e.jsx("div",{className:"partners-grid",children:f.map(i=>e.jsx(Y,{partner:i,onView:()=>x(i),onEdit:()=>g(i),onDelete:()=>l(i)},i.id))}):e.jsx(H,{hasFilters:B,onClear:M,onAdd:()=>g({})})]})]}),p&&e.jsx(q,{partner:p,onClose:()=>x(null),onEdit:()=>{g(p),x(null)}}),b&&e.jsx(Z,{partner:Object.keys(b).length?b:null,onClose:()=>g(null)}),o&&e.jsx(K,{partner:o,onClose:()=>l(null),onConfirm:$})]})]})}function k({label:r,value:a,description:n,icon:t,tone:s}){return e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:`stat-icon stat-icon-${s}`,children:t}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:r}),e.jsx("strong",{className:"stat-value",children:Number(a||0).toLocaleString()}),e.jsx("span",{className:"stat-description",children:n})]})]})}function Y({partner:r,onView:a,onEdit:n,onDelete:t}){const s=R(r.link);return e.jsxs("article",{className:"partner-card",children:[e.jsxs("div",{className:"partner-card-top",children:[e.jsx("div",{className:"partner-logo",children:r.logo?e.jsx("img",{src:`/image/partners/${r.logo}`,alt:`${r.name} logo`}):e.jsx("span",{children:A(r.name)})}),e.jsxs("span",{className:`status-badge ${r.is_active?"status-active":"status-inactive"}`,children:[e.jsx("span",{className:"status-dot"}),r.is_active?"Active":"Inactive"]})]}),e.jsxs("div",{className:"partner-card-body",children:[e.jsx("h3",{children:r.name||"Unnamed partner"}),e.jsx("p",{className:"partner-description",children:r.description?J(r.description,125):"No description has been added for this partner yet."}),s?e.jsxs("div",{className:"partner-website",children:[e.jsx(j,{}),e.jsx("span",{children:s})]}):e.jsxs("div",{className:"partner-website muted",children:[e.jsx(j,{}),e.jsx("span",{children:"No website provided"})]})]}),e.jsxs("div",{className:"partner-card-footer",children:[e.jsxs("button",{type:"button",className:"secondary-action",onClick:a,children:[e.jsx(ee,{}),"View"]}),e.jsxs("div",{className:"card-actions",children:[r.link&&e.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"icon-action",title:"Open website","aria-label":`Open ${r.name} website`,children:e.jsx(_,{})}),e.jsx("button",{type:"button",className:"icon-action",onClick:n,title:"Edit partner","aria-label":`Edit ${r.name}`,children:e.jsx(O,{})}),e.jsx("button",{type:"button",className:"icon-action danger",onClick:t,title:"Delete partner","aria-label":`Delete ${r.name}`,children:e.jsx(z,{})})]})]})]})}function H({hasFilters:r,onClear:a,onAdd:n}){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(D,{})}),e.jsx("h3",{children:r?"No partners match your filters":"No partners yet"}),e.jsx("p",{children:r?"Try adjusting your search or status filter to find what you're looking for.":"Add your first partner organization to start building your directory."}),e.jsxs("div",{className:"empty-actions",children:[r&&e.jsx("button",{type:"button",className:"secondary-button",onClick:a,children:"Clear filters"}),!r&&e.jsxs("button",{type:"button",className:"primary-button",onClick:n,children:[e.jsx(L,{}),"Add first partner"]})]})]})}function q({partner:r,onClose:a,onEdit:n}){const t=R(r.link);return e.jsxs(E,{title:"Partner overview",subtitle:"Review the organization's public information.",onClose:a,size:"medium",children:[e.jsxs("div",{className:"partner-profile",children:[e.jsxs("div",{className:"partner-profile-head",children:[e.jsx("div",{className:"large-partner-logo",children:r.logo?e.jsx("img",{src:`/image/partners/${r.logo}`,alt:`${r.name} logo`}):e.jsx("span",{children:A(r.name)})}),e.jsxs("div",{className:"partner-profile-title",children:[e.jsxs("span",{className:`status-badge ${r.is_active?"status-active":"status-inactive"}`,children:[e.jsx("span",{className:"status-dot"}),r.is_active?"Active":"Inactive"]}),e.jsx("h2",{children:r.name}),t&&e.jsx("span",{className:"profile-domain",children:t})]})]}),e.jsxs("div",{className:"profile-section",children:[e.jsx("div",{className:"section-label",children:"About partner"}),e.jsx("div",{className:"profile-description",children:r.description||e.jsx("span",{className:"placeholder-text",children:"No description has been provided."})})]}),e.jsxs("div",{className:"profile-info-grid",children:[e.jsxs("div",{className:"info-box",children:[e.jsx("div",{className:"info-box-icon",children:e.jsx(j,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Website"}),r.link?e.jsxs("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:[t||r.link,e.jsx(_,{})]}):e.jsx("strong",{className:"placeholder-text",children:"Not provided"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("div",{className:"info-box-icon",children:e.jsx(T,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Visibility"}),e.jsx("strong",{children:r.is_active?"Publicly visible":"Hidden from public"})]})]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:a,children:"Close"}),e.jsxs("button",{type:"button",className:"primary-button",onClick:n,children:[e.jsx(O,{}),"Edit partner"]})]})]})}function Z({partner:r,onClose:a}){const n=!!(r!=null&&r.id),t=G({name:(r==null?void 0:r.name)||"",description:(r==null?void 0:r.description)||"",logo:null,link:(r==null?void 0:r.link)||"",is_active:typeof(r==null?void 0:r.is_active)=="boolean"?r.is_active:!0}),[s,d]=c.useState(r!=null&&r.logo?`/image/partners/${r.logo}`:null),p=c.useRef(null);c.useEffect(()=>()=>{s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s)},[s]);const x=o=>{var m;const l=(m=o.target.files)==null?void 0:m[0];if(!l)return;if(!l.type.startsWith("image/")){t.setError("logo","Please select a valid image file.");return}t.clearErrors("logo"),t.setData("logo",l),s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s);const h=URL.createObjectURL(l);d(h)},b=()=>{t.setData("logo",null),s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s),d(r!=null&&r.logo?`/image/partners/${r.logo}`:null),p.current&&(p.current.value="")},g=o=>{o.preventDefault();const l={forceFormData:!0,preserveScroll:!0,onSuccess:()=>{a()}};n?(t.transform(h=>({...h,_method:"put"})),t.post(F.update(r.id),l)):t.post(F.store(),l)};return e.jsx(E,{title:n?"Edit partner":"Add partner",subtitle:n?"Update the organization's information and visibility.":"Add a new organization to your partner directory.",onClose:a,size:"large",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"form-body",children:[e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"form-section-heading",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Partner identity"}),e.jsx("p",{children:"Add the organization name and visual identity."})]})}),e.jsxs("div",{className:"logo-upload-layout",children:[e.jsx("div",{className:"logo-preview-box",children:s?e.jsx("img",{src:s,alt:"Partner logo preview"}):e.jsx("span",{children:A(t.data.name)||e.jsx(D,{})})}),e.jsxs("div",{className:"upload-content",children:[e.jsxs("div",{className:"upload-dropzone",onClick:()=>{var o;return(o=p.current)==null?void 0:o.click()},role:"button",tabIndex:0,onKeyDown:o=>{var l;(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),(l=p.current)==null||l.click())},children:[e.jsx("div",{className:"upload-icon",children:e.jsx(re,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Upload partner logo"}),e.jsx("span",{children:"PNG, JPG or WebP recommended"})]}),e.jsx("span",{className:"upload-button",children:"Browse"})]}),e.jsx("input",{ref:p,type:"file",accept:"image/png,image/jpeg,image/webp",onChange:x,className:"hidden-file-input"}),t.data.logo&&e.jsxs("button",{type:"button",className:"remove-file",onClick:b,children:[e.jsx(v,{}),"Remove selected image"]}),t.errors.logo&&e.jsx("div",{className:"field-error",children:t.errors.logo})]})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"form-section-heading",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Organization details"}),e.jsx("p",{children:"Provide the information visitors will see."})]})}),e.jsxs("div",{className:"form-grid",children:[e.jsx(N,{label:"Partner name",required:!0,error:t.errors.name,className:"full-width",children:e.jsx("input",{type:"text",value:t.data.name,onChange:o=>t.setData("name",o.target.value),placeholder:"e.g. Rwanda NCD Alliance",autoFocus:!0})}),e.jsx(N,{label:"Website",error:t.errors.link,hint:"Include the full URL, such as https://example.org",className:"full-width",children:e.jsxs("div",{className:"input-with-icon",children:[e.jsx(j,{}),e.jsx("input",{type:"url",value:t.data.link,onChange:o=>t.setData("link",o.target.value),placeholder:"https://example.org"})]})}),e.jsx(N,{label:"Description",error:t.errors.description,className:"full-width",hint:"Keep this concise and useful for visitors.",children:e.jsx("textarea",{value:t.data.description,onChange:o=>t.setData("description",o.target.value),rows:5,placeholder:"Describe the organization, its role, or the partnership..."})})]})]}),e.jsxs("div",{className:"form-section last",children:[e.jsx("div",{className:"form-section-heading",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Visibility"}),e.jsx("p",{children:"Control whether this partner is displayed publicly."})]})}),e.jsxs("button",{type:"button",className:`visibility-option ${t.data.is_active?"selected":""}`,onClick:()=>t.setData("is_active",!t.data.is_active),children:[e.jsx("div",{className:`visibility-check ${t.data.is_active?"checked":""}`,children:t.data.is_active&&e.jsx(C,{})}),e.jsxs("div",{className:"visibility-content",children:[e.jsx("strong",{children:t.data.is_active?"Partner is active":"Partner is inactive"}),e.jsx("span",{children:t.data.is_active?"This partner can be displayed on public pages.":"This partner will remain hidden from public pages."})]})]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:a,disabled:t.processing,children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-button",disabled:t.processing,children:t.processing?e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{}),n?"Save changes":"Create partner"]})})]})]})})}function N({label:r,required:a=!1,error:n,hint:t,children:s,className:d=""}){return e.jsxs("div",{className:`field ${d}`,children:[e.jsxs("label",{children:[r,a&&e.jsx("span",{className:"required",children:"*"})]}),s,t&&!n&&e.jsx("span",{className:"field-hint",children:t}),n&&e.jsx("span",{className:"field-error",children:n})]})}function K({partner:r,onClose:a,onConfirm:n}){return e.jsxs(E,{title:"Delete partner",subtitle:"This action cannot be undone.",onClose:a,size:"small",children:[e.jsxs("div",{className:"delete-content",children:[e.jsx("div",{className:"delete-icon",children:e.jsx(z,{})}),e.jsx("h2",{children:"Remove this partner?"}),e.jsxs("p",{children:["You are about to permanently remove"," ",e.jsx("strong",{children:r.name})," from the partner directory."]}),e.jsxs("div",{className:"delete-warning",children:[e.jsx(te,{}),e.jsx("span",{children:"This will remove the partner from your management directory."})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:a,children:"Cancel"}),e.jsxs("button",{type:"button",className:"danger-button",onClick:n,children:[e.jsx(z,{}),"Delete partner"]})]})]})}function E({title:r,subtitle:a,onClose:n,children:t,size:s="medium"}){return c.useEffect(()=>{const d=document.body.style.overflow;document.body.style.overflow="hidden";const p=x=>{x.key==="Escape"&&n()};return document.addEventListener("keydown",p),()=>{document.body.style.overflow=d,document.removeEventListener("keydown",p)}},[n]),e.jsx("div",{className:"modal-overlay",onMouseDown:d=>{d.target===d.currentTarget&&n()},children:e.jsxs("div",{className:`modal modal-${s}`,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",onMouseDown:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("span",{className:"modal-eyebrow",children:"PARTNER MANAGEMENT"}),e.jsx("h2",{id:"modal-title",children:r}),a&&e.jsx("p",{children:a})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"Close modal",children:e.jsx(v,{})})]}),t]})})}function J(r,a){return r?r.length>a?`${r.substring(0,a).trim()}...`:r:""}function R(r){if(!r)return"";try{const a=/^https?:\/\//i.test(r)?r:`https://${r}`;return new URL(a).hostname.replace(/^www\./i,"")}catch{return r.replace(/^https?:\/\//i,"").replace(/^www\./i,"")}}function A(r=""){const a=r.trim().split(/\s+/).filter(Boolean);return a.length?a.length===1?a[0].substring(0,2).toUpperCase():`${a[0][0]}${a[a.length-1][0]}`.toUpperCase():""}function L(){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function Q(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 5 5"})]})}function v(){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m7 7 10 10M17 7 7 17"})})}function C(){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function T(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),e.jsx("path",{d:"m8.5 12 2.3 2.3 4.8-5"})]})}function D(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M4 20V6.5L12 3l8 3.5V20"}),e.jsx("path",{d:"M8 9h1M8 13h1M8 17h1M15 9h1M15 13h1M15 17h1"}),e.jsx("path",{d:"M10 20v-4h4v4"})]})}function X(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("rect",{x:"4",y:"5",width:"16",height:"15",rx:"2"}),e.jsx("path",{d:"M4 9h16M9 13h6"})]})}function ee(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M3.5 12s3.2-6 8.5-6 8.5 6 8.5 6-3.2 6-8.5 6-8.5-6-8.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.3"})]})}function O(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"m14 6 4 4"}),e.jsx("path",{d:"M5 19l1.2-4.8L15.8 4.6a2 2 0 0 1 2.8 0l.8.8a2 2 0 0 1 0 2.8L9.8 17.8 5 19Z"})]})}function z(){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"})})}function j(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),e.jsx("path",{d:"M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z"})]})}function _(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M14 5h5v5M19 5l-8 8"}),e.jsx("path",{d:"M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"})]})}function re(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),e.jsx("path",{d:"M5 14v5h14v-5"})]})}function te(){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{d:"M12 4 3.5 19h17L12 4Z"}),e.jsx("path",{d:"M12 9v4M12 16v.5"})]})}function ae(){return e.jsx("span",{className:"spinner"})}const se=`
/* ================================================================
   DESIGN TOKENS
================================================================ */

[data-h-scope="partners"] {
    --partner-blue: #5D89C8;
    --partner-blue-dark: #426FAE;
    --partner-blue-soft: #EEF4FB;
    --partner-blue-border: #D9E6F5;

    --partner-green: #16835A;
    --partner-green-soft: #EAF7F1;

    --partner-red: #C83C35;
    --partner-red-soft: #FEF0EF;

    --partner-text: #17202B;
    --partner-text-secondary: #667085;
    --partner-text-muted: #98A2B3;

    --partner-border: #E7EAF0;
    --partner-border-dark: #D9DEE7;

    --partner-background: #F6F8FB;
    --partner-white: #FFFFFF;

    --partner-radius: 14px;
    --partner-radius-small: 10px;

    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    color: var(--partner-text);
}

/* ================================================================
   PAGE
================================================================ */

[data-h-scope="partners"] .partners-page {
    min-height: 100%;
    background: var(--partner-background);
}

[data-h-scope="partners"] .partners-container {
    width: min(1440px, 100%);
    margin: 0 auto;
    padding: 28px 32px 48px;
}

/* ================================================================
   HEADER
================================================================ */

[data-h-scope="partners"] .page-header {
    margin-bottom: 26px;
}

[data-h-scope="partners"] .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: var(--partner-text-muted);
    font-size: 12px;
    font-weight: 600;
}

[data-h-scope="partners"] .breadcrumb-separator {
    color: #C6CBD4;
}

[data-h-scope="partners"] .title-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
}

[data-h-scope="partners"] .eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    color: var(--partner-blue-dark);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .11em;
}

[data-h-scope="partners"] .eyebrow-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--partner-blue);
}

[data-h-scope="partners"] .title-row h1 {
    margin: 0;
    color: var(--partner-text);
    font-size: 32px;
    line-height: 1.15;
    letter-spacing: -.035em;
    font-weight: 750;
}

[data-h-scope="partners"] .title-row p {
    max-width: 680px;
    margin: 9px 0 0;
    color: var(--partner-text-secondary);
    font-size: 14px;
    line-height: 1.6;
}

/* ================================================================
   BUTTONS
================================================================ */

[data-h-scope="partners"] button,
[data-h-scope="partners"] input,
[data-h-scope="partners"] textarea {
    font: inherit;
}

[data-h-scope="partners"] button {
    cursor: pointer;
}

[data-h-scope="partners"] button:disabled {
    cursor: not-allowed;
    opacity: .6;
}

[data-h-scope="partners"] .primary-button,
[data-h-scope="partners"] .secondary-button,
[data-h-scope="partners"] .danger-button {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 15px;
    border-radius: 9px;
    border: 1px solid transparent;
    font-size: 13px;
    font-weight: 700;
    transition:
        background .18s ease,
        border-color .18s ease,
        transform .18s ease,
        box-shadow .18s ease;
}

[data-h-scope="partners"] .primary-button {
    color: #fff;
    background: var(--partner-blue);
    box-shadow: 0 5px 14px rgba(93, 137, 200, .18);
}

[data-h-scope="partners"] .primary-button:hover {
    background: var(--partner-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 7px 18px rgba(93, 137, 200, .22);
}

[data-h-scope="partners"] .secondary-button {
    color: var(--partner-text);
    background: #fff;
    border-color: var(--partner-border-dark);
}

[data-h-scope="partners"] .secondary-button:hover {
    background: #F8FAFC;
    border-color: #C9D0DB;
}

[data-h-scope="partners"] .danger-button {
    color: #fff;
    background: var(--partner-red);
}

[data-h-scope="partners"] .danger-button:hover {
    background: #AE302A;
}

[data-h-scope="partners"] .primary-button svg,
[data-h-scope="partners"] .secondary-button svg,
[data-h-scope="partners"] .danger-button svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ================================================================
   FLASH
================================================================ */

[data-h-scope="partners"] .flash-success {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding: 13px 14px;
    border: 1px solid #CFE9DC;
    border-radius: 11px;
    background: #F4FBF7;
}

[data-h-scope="partners"] .flash-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    flex: 0 0 32px;
    border-radius: 9px;
    color: var(--partner-green);
    background: var(--partner-green-soft);
}

[data-h-scope="partners"] .flash-icon svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
}

[data-h-scope="partners"] .flash-success > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
}

[data-h-scope="partners"] .flash-success strong {
    color: #116343;
    font-size: 12px;
}

[data-h-scope="partners"] .flash-success span {
    color: #4B6F5E;
    font-size: 13px;
}

[data-h-scope="partners"] .flash-success > button {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 0;
    background: transparent;
    color: #719183;
    border-radius: 7px;
}

[data-h-scope="partners"] .flash-success > button:hover {
    background: #E5F4EB;
}

[data-h-scope="partners"] .flash-success > button svg {
    width: 15px;
    height: 15px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
}

/* ================================================================
   STATISTICS
================================================================ */

[data-h-scope="partners"] .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 22px;
}

[data-h-scope="partners"] .stat-card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    min-height: 126px;
    padding: 19px;
    border: 1px solid var(--partner-border);
    border-radius: var(--partner-radius);
    background: #fff;
    box-shadow: 0 2px 7px rgba(16, 24, 40, .025);
}

[data-h-scope="partners"] .stat-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    flex: 0 0 42px;
    border-radius: 11px;
}

[data-h-scope="partners"] .stat-icon-blue {
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .stat-icon-green {
    color: var(--partner-green);
    background: var(--partner-green-soft);
}

[data-h-scope="partners"] .stat-icon-gray {
    color: #687383;
    background: #F1F3F6;
}

[data-h-scope="partners"] .stat-icon svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.65;
    stroke-linecap: round;
    stroke-linejoin: round;
}

[data-h-scope="partners"] .stat-content {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

[data-h-scope="partners"] .stat-label {
    color: var(--partner-text-secondary);
    font-size: 12px;
    font-weight: 650;
}

[data-h-scope="partners"] .stat-value {
    margin-top: 3px;
    color: var(--partner-text);
    font-size: 27px;
    line-height: 1.1;
    letter-spacing: -.025em;
}

[data-h-scope="partners"] .stat-description {
    margin-top: 6px;
    color: var(--partner-text-muted);
    font-size: 11px;
    line-height: 1.4;
}

/* ================================================================
   CONTENT PANEL
================================================================ */

[data-h-scope="partners"] .content-panel {
    overflow: hidden;
    border: 1px solid var(--partner-border);
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 3px 10px rgba(16, 24, 40, .025);
}

[data-h-scope="partners"] .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 22px;
    border-bottom: 1px solid var(--partner-border);
}

[data-h-scope="partners"] .panel-title {
    color: var(--partner-text);
    font-size: 15px;
    font-weight: 750;
}

[data-h-scope="partners"] .panel-subtitle {
    margin-top: 4px;
    color: var(--partner-text-muted);
    font-size: 12px;
}

[data-h-scope="partners"] .panel-count {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 10px;
    border: 1px solid var(--partner-border);
    border-radius: 8px;
    color: var(--partner-text-secondary);
    background: #FAFBFC;
    font-size: 11px;
    font-weight: 650;
}

[data-h-scope="partners"] .panel-count span {
    color: var(--partner-text);
    font-weight: 800;
}

/* ================================================================
   TOOLBAR
================================================================ */

[data-h-scope="partners"] .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 16px 22px;
    border-bottom: 1px solid var(--partner-border);
    background: #FCFDFE;
}

[data-h-scope="partners"] .search-box {
    width: min(390px, 100%);
    height: 40px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 11px;
    border: 1px solid var(--partner-border-dark);
    border-radius: 9px;
    background: #fff;
    transition:
        border-color .18s ease,
        box-shadow .18s ease;
}

[data-h-scope="partners"] .search-box:focus-within {
    border-color: var(--partner-blue);
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .1);
}

[data-h-scope="partners"] .search-box > svg {
    width: 17px;
    height: 17px;
    flex: 0 0 17px;
    fill: none;
    stroke: #8993A2;
    stroke-width: 1.7;
}

[data-h-scope="partners"] .search-box input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    color: var(--partner-text);
    background: transparent;
    font-size: 12px;
}

[data-h-scope="partners"] .search-box input::placeholder {
    color: #A3ABB7;
}

[data-h-scope="partners"] .search-clear {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    flex: 0 0 25px;
    border: 0;
    border-radius: 6px;
    color: #8A94A3;
    background: transparent;
}

[data-h-scope="partners"] .search-clear:hover {
    background: #F1F3F6;
}

[data-h-scope="partners"] .search-clear svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
}

[data-h-scope="partners"] .toolbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

[data-h-scope="partners"] .status-filter {
    display: inline-flex;
    align-items: center;
    padding: 3px;
    border: 1px solid var(--partner-border);
    border-radius: 9px;
    background: #F7F8FA;
}

[data-h-scope="partners"] .status-filter button {
    min-height: 31px;
    padding: 0 11px;
    border: 0;
    border-radius: 7px;
    color: #737D8C;
    background: transparent;
    font-size: 11px;
    font-weight: 700;
}

[data-h-scope="partners"] .status-filter button:hover {
    color: var(--partner-text);
}

[data-h-scope="partners"] .status-filter button.active {
    color: var(--partner-blue-dark);
    background: #fff;
    box-shadow: 0 1px 4px rgba(16, 24, 40, .08);
}

[data-h-scope="partners"] .clear-filter-button {
    padding: 0;
    border: 0;
    color: var(--partner-blue-dark);
    background: transparent;
    font-size: 11px;
    font-weight: 700;
}

[data-h-scope="partners"] .clear-filter-button:hover {
    text-decoration: underline;
}

/* ================================================================
   PARTNER GRID
================================================================ */

[data-h-scope="partners"] .partners-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
    padding: 20px 22px 24px;
}

[data-h-scope="partners"] .partner-card {
    min-width: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--partner-border);
    border-radius: 13px;
    background: #fff;
    transition:
        border-color .18s ease,
        box-shadow .18s ease,
        transform .18s ease;
}

[data-h-scope="partners"] .partner-card:hover {
    border-color: #D4DFEC;
    box-shadow: 0 8px 22px rgba(16, 24, 40, .06);
    transform: translateY(-2px);
}

[data-h-scope="partners"] .partner-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding: 17px 17px 0;
}

[data-h-scope="partners"] .partner-logo,
[data-h-scope="partners"] .large-partner-logo {
    overflow: hidden;
    display: grid;
    place-items: center;
    border: 1px solid var(--partner-border);
    background: #F7F9FC;
}

[data-h-scope="partners"] .partner-logo {
    width: 56px;
    height: 56px;
    border-radius: 12px;
}

[data-h-scope="partners"] .partner-logo img,
[data-h-scope="partners"] .large-partner-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

[data-h-scope="partners"] .partner-logo span,
[data-h-scope="partners"] .large-partner-logo span {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
    font-size: 15px;
    font-weight: 800;
}

[data-h-scope="partners"] .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 10px;
    line-height: 1;
    font-weight: 750;
    white-space: nowrap;
}

[data-h-scope="partners"] .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

[data-h-scope="partners"] .status-active {
    color: #16714F;
    background: var(--partner-green-soft);
}

[data-h-scope="partners"] .status-active .status-dot {
    background: #23A06D;
}

[data-h-scope="partners"] .status-inactive {
    color: #667085;
    background: #F1F3F6;
}

[data-h-scope="partners"] .status-inactive .status-dot {
    background: #98A2B3;
}

[data-h-scope="partners"] .partner-card-body {
    padding: 15px 17px 17px;
    flex: 1;
}

[data-h-scope="partners"] .partner-card-body h3 {
    margin: 0;
    color: var(--partner-text);
    font-size: 15px;
    line-height: 1.35;
    font-weight: 750;
    letter-spacing: -.01em;
}

[data-h-scope="partners"] .partner-description {
    min-height: 50px;
    margin: 8px 0 14px;
    color: var(--partner-text-secondary);
    font-size: 12px;
    line-height: 1.55;
}

[data-h-scope="partners"] .partner-website {
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
    color: var(--partner-blue-dark);
    font-size: 11px;
    font-weight: 650;
}

[data-h-scope="partners"] .partner-website.muted {
    color: #A0A7B2;
    font-weight: 500;
}

[data-h-scope="partners"] .partner-website svg {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

[data-h-scope="partners"] .partner-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-top: 1px solid var(--partner-border);
    background: #FCFDFE;
    border-radius: 0 0 13px 13px;
}

[data-h-scope="partners"] .secondary-action {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 7px;
    border: 0;
    border-radius: 7px;
    color: var(--partner-text-secondary);
    background: transparent;
    font-size: 11px;
    font-weight: 700;
}

[data-h-scope="partners"] .secondary-action:hover {
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .secondary-action svg {
    width: 15px;
    height: 15px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

[data-h-scope="partners"] .card-actions {
    display: flex;
    align-items: center;
    gap: 3px;
}

[data-h-scope="partners"] .icon-action {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 7px;
    color: #7B8492;
    background: transparent;
    text-decoration: none;
}

[data-h-scope="partners"] .icon-action:hover {
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .icon-action.danger:hover {
    color: var(--partner-red);
    background: var(--partner-red-soft);
}

[data-h-scope="partners"] .icon-action svg {
    width: 15px;
    height: 15px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ================================================================
   EMPTY STATE
================================================================ */

[data-h-scope="partners"] .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 330px;
    padding: 45px 24px;
    text-align: center;
}

[data-h-scope="partners"] .empty-icon {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    margin-bottom: 15px;
    border: 1px solid var(--partner-blue-border);
    border-radius: 15px;
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .empty-icon svg {
    width: 25px;
    height: 25px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
}

[data-h-scope="partners"] .empty-state h3 {
    margin: 0;
    color: var(--partner-text);
    font-size: 16px;
    font-weight: 750;
}

[data-h-scope="partners"] .empty-state p {
    max-width: 410px;
    margin: 8px auto 18px;
    color: var(--partner-text-secondary);
    font-size: 12px;
    line-height: 1.6;
}

[data-h-scope="partners"] .empty-actions {
    display: flex;
    align-items: center;
    gap: 9px;
}

/* ================================================================
   MODAL
================================================================ */

[data-h-scope="partners"] .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(15, 23, 42, .48);
    backdrop-filter: blur(4px);
}

[data-h-scope="partners"] .modal {
    width: 100%;
    max-height: min(860px, calc(100vh - 40px));
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.7);
    border-radius: 17px;
    background: #fff;
    box-shadow: 0 25px 70px rgba(15, 23, 42, .2);
    animation: partnerModalIn .18s ease-out;
}

[data-h-scope="partners"] .modal-small {
    max-width: 470px;
}

[data-h-scope="partners"] .modal-medium {
    max-width: 650px;
}

[data-h-scope="partners"] .modal-large {
    max-width: 760px;
}

@keyframes partnerModalIn {
    from {
        opacity: 0;
        transform: translateY(8px) scale(.99);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

[data-h-scope="partners"] .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 22px 24px 19px;
    border-bottom: 1px solid var(--partner-border);
}

[data-h-scope="partners"] .modal-eyebrow {
    display: block;
    margin-bottom: 6px;
    color: var(--partner-blue-dark);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .12em;
}

[data-h-scope="partners"] .modal-header h2 {
    margin: 0;
    color: var(--partner-text);
    font-size: 19px;
    line-height: 1.3;
    font-weight: 760;
    letter-spacing: -.02em;
}

[data-h-scope="partners"] .modal-header p {
    margin: 5px 0 0;
    color: var(--partner-text-secondary);
    font-size: 12px;
    line-height: 1.5;
}

[data-h-scope="partners"] .modal-close {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    flex: 0 0 34px;
    border: 1px solid var(--partner-border);
    border-radius: 8px;
    color: #727C8B;
    background: #fff;
}

[data-h-scope="partners"] .modal-close:hover {
    color: var(--partner-text);
    background: #F7F8FA;
}

[data-h-scope="partners"] .modal-close svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

[data-h-scope="partners"] .modal > form,
[data-h-scope="partners"] .modal > .partner-profile,
[data-h-scope="partners"] .modal > .delete-content {
    min-height: 0;
    overflow-y: auto;
}

/* ================================================================
   FORM
================================================================ */

[data-h-scope="partners"] .form-body {
    overflow-y: auto;
}

[data-h-scope="partners"] .form-section {
    padding: 21px 24px;
    border-bottom: 1px solid var(--partner-border);
}

[data-h-scope="partners"] .form-section.last {
    border-bottom: 0;
}

[data-h-scope="partners"] .form-section-heading {
    margin-bottom: 15px;
}

[data-h-scope="partners"] .form-section-heading h3 {
    margin: 0;
    color: var(--partner-text);
    font-size: 13px;
    font-weight: 750;
}

[data-h-scope="partners"] .form-section-heading p {
    margin: 4px 0 0;
    color: var(--partner-text-muted);
    font-size: 11px;
}

[data-h-scope="partners"] .logo-upload-layout {
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 17px;
    align-items: center;
}

[data-h-scope="partners"] .logo-preview-box {
    width: 92px;
    height: 92px;
    overflow: hidden;
    display: grid;
    place-items: center;
    border: 1px solid var(--partner-border-dark);
    border-radius: 13px;
    background: #F8FAFC;
}

[data-h-scope="partners"] .logo-preview-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

[data-h-scope="partners"] .logo-preview-box span {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
    font-size: 22px;
    font-weight: 800;
}

[data-h-scope="partners"] .logo-preview-box svg {
    width: 28px;
    height: 28px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
}

[data-h-scope="partners"] .upload-dropzone {
    min-height: 88px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px dashed #C9D4E2;
    border-radius: 11px;
    background: #FBFCFE;
    cursor: pointer;
    transition:
        border-color .18s ease,
        background .18s ease;
}

[data-h-scope="partners"] .upload-dropzone:hover {
    border-color: var(--partner-blue);
    background: #F8FBFF;
}

[data-h-scope="partners"] .upload-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    flex: 0 0 38px;
    border-radius: 9px;
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .upload-icon svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
}

[data-h-scope="partners"] .upload-content {
    min-width: 0;
}

[data-h-scope="partners"] .upload-dropzone > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
    flex: 1;
}

[data-h-scope="partners"] .upload-dropzone strong {
    color: var(--partner-text);
    font-size: 12px;
}

[data-h-scope="partners"] .upload-dropzone span {
    color: var(--partner-text-muted);
    font-size: 10px;
}

[data-h-scope="partners"] .upload-button {
    padding: 7px 10px;
    border: 1px solid var(--partner-border-dark);
    border-radius: 7px;
    color: var(--partner-text);
    background: #fff;
    font-size: 10px !important;
    font-weight: 700;
}

[data-h-scope="partners"] .hidden-file-input {
    display: none;
}

[data-h-scope="partners"] .remove-file {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 7px;
    padding: 0;
    border: 0;
    color: var(--partner-red);
    background: transparent;
    font-size: 10px;
    font-weight: 650;
}

[data-h-scope="partners"] .remove-file svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
}

[data-h-scope="partners"] .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

[data-h-scope="partners"] .full-width {
    grid-column: 1 / -1;
}

[data-h-scope="partners"] .field {
    min-width: 0;
}

[data-h-scope="partners"] .field > label {
    display: block;
    margin-bottom: 7px;
    color: #46505E;
    font-size: 11px;
    font-weight: 750;
}

[data-h-scope="partners"] .required {
    margin-left: 3px;
    color: var(--partner-red);
}

[data-h-scope="partners"] .field input,
[data-h-scope="partners"] .field textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--partner-border-dark);
    border-radius: 9px;
    outline: 0;
    color: var(--partner-text);
    background: #fff;
    font-size: 12px;
    transition:
        border-color .18s ease,
        box-shadow .18s ease;
}

[data-h-scope="partners"] .field input {
    height: 42px;
    padding: 0 12px;
}

[data-h-scope="partners"] .field textarea {
    min-height: 110px;
    padding: 11px 12px;
    resize: vertical;
    line-height: 1.55;
}

[data-h-scope="partners"] .field input:focus,
[data-h-scope="partners"] .field textarea:focus {
    border-color: var(--partner-blue);
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .1);
}

[data-h-scope="partners"] .field input::placeholder,
[data-h-scope="partners"] .field textarea::placeholder {
    color: #ADB4BF;
}

[data-h-scope="partners"] .input-with-icon {
    position: relative;
}

[data-h-scope="partners"] .input-with-icon svg {
    position: absolute;
    left: 12px;
    top: 50%;
    width: 15px;
    height: 15px;
    transform: translateY(-50%);
    color: #929CAA;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    pointer-events: none;
}

[data-h-scope="partners"] .input-with-icon input {
    padding-left: 36px;
}

[data-h-scope="partners"] .field-hint {
    display: block;
    margin-top: 5px;
    color: var(--partner-text-muted);
    font-size: 10px;
    line-height: 1.4;
}

[data-h-scope="partners"] .field-error {
    display: block;
    margin-top: 5px;
    color: var(--partner-red);
    font-size: 10px;
    line-height: 1.4;
}

[data-h-scope="partners"] .visibility-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid var(--partner-border);
    border-radius: 11px;
    text-align: left;
    background: #FAFBFC;
}

[data-h-scope="partners"] .visibility-option:hover,
[data-h-scope="partners"] .visibility-option.selected {
    border-color: var(--partner-blue-border);
    background: #F8FBFF;
}

[data-h-scope="partners"] .visibility-check {
    width: 21px;
    height: 21px;
    display: grid;
    place-items: center;
    flex: 0 0 21px;
    border: 1px solid #C9D0DB;
    border-radius: 6px;
    color: #fff;
    background: #fff;
}

[data-h-scope="partners"] .visibility-check.checked {
    border-color: var(--partner-blue);
    background: var(--partner-blue);
}

[data-h-scope="partners"] .visibility-check svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.1;
}

[data-h-scope="partners"] .visibility-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

[data-h-scope="partners"] .visibility-content strong {
    color: var(--partner-text);
    font-size: 11px;
}

[data-h-scope="partners"] .visibility-content span {
    color: var(--partner-text-secondary);
    font-size: 10px;
}

/* ================================================================
   MODAL FOOTER
================================================================ */

[data-h-scope="partners"] .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    padding: 14px 24px;
    border-top: 1px solid var(--partner-border);
    background: #FCFDFE;
}

/* ================================================================
   VIEW PROFILE
================================================================ */

[data-h-scope="partners"] .partner-profile {
    padding: 23px 24px;
}

[data-h-scope="partners"] .partner-profile-head {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--partner-border);
}

[data-h-scope="partners"] .large-partner-logo {
    width: 82px;
    height: 82px;
    flex: 0 0 82px;
    border-radius: 15px;
}

[data-h-scope="partners"] .large-partner-logo span {
    font-size: 21px;
}

[data-h-scope="partners"] .partner-profile-title {
    min-width: 0;
}

[data-h-scope="partners"] .partner-profile-title h2 {
    margin: 8px 0 4px;
    color: var(--partner-text);
    font-size: 21px;
    line-height: 1.25;
    font-weight: 760;
    letter-spacing: -.025em;
}

[data-h-scope="partners"] .profile-domain {
    color: var(--partner-blue-dark);
    font-size: 11px;
    font-weight: 650;
}

[data-h-scope="partners"] .profile-section {
    padding: 21px 0;
    border-bottom: 1px solid var(--partner-border);
}

[data-h-scope="partners"] .section-label {
    margin-bottom: 8px;
    color: var(--partner-text);
    font-size: 11px;
    font-weight: 750;
}

[data-h-scope="partners"] .profile-description {
    color: var(--partner-text-secondary);
    font-size: 12px;
    line-height: 1.7;
}

[data-h-scope="partners"] .placeholder-text {
    color: #A2A9B3;
    font-weight: 500;
}

[data-h-scope="partners"] .profile-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding-top: 18px;
}

[data-h-scope="partners"] .info-box {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 13px;
    border: 1px solid var(--partner-border);
    border-radius: 10px;
    background: #FBFCFD;
}

[data-h-scope="partners"] .info-box-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    flex: 0 0 31px;
    border-radius: 8px;
    color: var(--partner-blue-dark);
    background: var(--partner-blue-soft);
}

[data-h-scope="partners"] .info-box-icon svg {
    width: 15px;
    height: 15px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

[data-h-scope="partners"] .info-box > div:last-child {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

[data-h-scope="partners"] .info-box span {
    color: var(--partner-text-muted);
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .04em;
}

[data-h-scope="partners"] .info-box strong,
[data-h-scope="partners"] .info-box a {
    color: var(--partner-text);
    font-size: 11px;
    font-weight: 650;
    overflow-wrap: anywhere;
}

[data-h-scope="partners"] .info-box a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--partner-blue-dark);
    text-decoration: none;
}

[data-h-scope="partners"] .info-box a:hover {
    text-decoration: underline;
}

[data-h-scope="partners"] .info-box a svg {
    width: 12px;
    height: 12px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

/* ================================================================
   DELETE
================================================================ */

[data-h-scope="partners"] .delete-content {
    padding: 28px 24px;
    text-align: center;
}

[data-h-scope="partners"] .delete-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    margin: 0 auto 15px;
    border-radius: 13px;
    color: var(--partner-red);
    background: var(--partner-red-soft);
}

[data-h-scope="partners"] .delete-icon svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
}

[data-h-scope="partners"] .delete-content h2 {
    margin: 0;
    color: var(--partner-text);
    font-size: 17px;
    font-weight: 750;
}

[data-h-scope="partners"] .delete-content > p {
    margin: 8px auto 18px;
    max-width: 360px;
    color: var(--partner-text-secondary);
    font-size: 12px;
    line-height: 1.6;
}

[data-h-scope="partners"] .delete-warning {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 11px;
    border: 1px solid #F2D4D1;
    border-radius: 9px;
    color: #8C4641;
    background: #FFF8F7;
    text-align: left;
    font-size: 10px;
    line-height: 1.5;
}

[data-h-scope="partners"] .delete-warning svg {
    width: 15px;
    height: 15px;
    flex: 0 0 15px;
    margin-top: 1px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
}

/* ================================================================
   SPINNER
================================================================ */

[data-h-scope="partners"] .spinner {
    width: 15px;
    height: 15px;
    border: 2px solid rgba(255,255,255,.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: partnerSpin .7s linear infinite;
}

@keyframes partnerSpin {
    to {
        transform: rotate(360deg);
    }
}

/* ================================================================
   RESPONSIVE
================================================================ */

@media (max-width: 1150px) {
    [data-h-scope="partners"] .partners-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 900px) {
    [data-h-scope="partners"] .partners-container {
        padding: 23px 20px 40px;
    }

    [data-h-scope="partners"] .stats-grid {
        grid-template-columns: 1fr;
    }

    [data-h-scope="partners"] .stat-card {
        min-height: auto;
    }

    [data-h-scope="partners"] .toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    [data-h-scope="partners"] .search-box {
        width: 100%;
    }

    [data-h-scope="partners"] .toolbar-right {
        justify-content: space-between;
    }
}

@media (max-width: 700px) {
    [data-h-scope="partners"] .partners-container {
        padding: 18px 14px 30px;
    }

    [data-h-scope="partners"] .title-row {
        align-items: stretch;
        flex-direction: column;
    }

    [data-h-scope="partners"] .title-row h1 {
        font-size: 27px;
    }

    [data-h-scope="partners"] .title-row .primary-button {
        width: 100%;
    }

    [data-h-scope="partners"] .partners-grid {
        grid-template-columns: 1fr;
        padding: 16px 14px 20px;
    }

    [data-h-scope="partners"] .panel-header {
        align-items: flex-start;
        padding: 17px 14px;
    }

    [data-h-scope="partners"] .toolbar {
        padding: 14px;
    }

    [data-h-scope="partners"] .toolbar-right {
        align-items: stretch;
        flex-direction: column;
    }

    [data-h-scope="partners"] .status-filter {
        width: 100%;
    }

    [data-h-scope="partners"] .status-filter button {
        flex: 1;
    }

    [data-h-scope="partners"] .clear-filter-button {
        align-self: flex-start;
    }

    [data-h-scope="partners"] .modal-overlay {
        align-items: flex-end;
        padding: 0;
    }

    [data-h-scope="partners"] .modal {
        max-height: calc(100vh - 15px);
        border-radius: 17px 17px 0 0;
    }

    [data-h-scope="partners"] .modal-header {
        padding: 19px 17px 16px;
    }

    [data-h-scope="partners"] .form-section,
    [data-h-scope="partners"] .partner-profile,
    [data-h-scope="partners"] .delete-content {
        padding-left: 17px;
        padding-right: 17px;
    }

    [data-h-scope="partners"] .modal-footer {
        padding: 13px 17px;
    }

    [data-h-scope="partners"] .form-grid,
    [data-h-scope="partners"] .profile-info-grid {
        grid-template-columns: 1fr;
    }

    [data-h-scope="partners"] .full-width {
        grid-column: auto;
    }

    [data-h-scope="partners"] .logo-upload-layout {
        grid-template-columns: 1fr;
    }

    [data-h-scope="partners"] .logo-preview-box {
        margin: 0 auto;
    }

    [data-h-scope="partners"] .upload-dropzone {
        flex-wrap: wrap;
    }

    [data-h-scope="partners"] .upload-button {
        margin-left: auto;
    }

    [data-h-scope="partners"] .modal-footer .primary-button,
    [data-h-scope="partners"] .modal-footer .secondary-button,
    [data-h-scope="partners"] .modal-footer .danger-button {
        flex: 1;
    }
}

@media (max-width: 450px) {
    [data-h-scope="partners"] .stats-grid {
        gap: 10px;
    }

    [data-h-scope="partners"] .stat-card {
        padding: 15px;
    }

    [data-h-scope="partners"] .stat-value {
        font-size: 24px;
    }

    [data-h-scope="partners"] .partner-card-top {
        padding: 14px 14px 0;
    }

    [data-h-scope="partners"] .partner-card-body {
        padding: 13px 14px 15px;
    }

    [data-h-scope="partners"] .partner-card-footer {
        padding: 10px;
    }

    [data-h-scope="partners"] .partner-profile-head {
        align-items: flex-start;
        flex-direction: column;
    }

    [data-h-scope="partners"] .modal-footer {
        flex-direction: column-reverse;
    }

    [data-h-scope="partners"] .modal-footer button {
        width: 100%;
    }
}
`;export{ie as default};
