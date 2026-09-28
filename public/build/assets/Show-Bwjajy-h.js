import{r as v,u as L,j as e,c as U,H as Z,L as P}from"./app-B2SIh33N.js";import{A as $}from"./AppLayout-CkTPU_ZW.js";function d({name:a,size:s=18,strokeWidth:o=1.8}){const c={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},r={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m11 18-6-6 6-6"})]}),refresh:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4"}),e.jsx("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),star:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"}),play:e.jsx("path",{d:"m9 6 10 6-10 6Z"}),message:e.jsx("path",{d:"M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.8L3 21l1.8-4A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]})};return e.jsx("svg",{...c,children:r[a]})}function k(a){if(!a)return"—";const s=new Date(a);if(Number.isNaN(s.getTime()))return String(a);const o=Date.now()-s.getTime();if(o<0)return s.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"});const c=Math.floor(o/1e3);if(c<60)return"just now";const r=Math.floor(c/60);if(r<60)return`${r}m ago`;const m=Math.floor(r/60);if(m<24)return`${m}h ago`;const h=Math.floor(m/24);return h<30?`${h}d ago`:s.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function G(a){if(!a)return"/images/placeholder-story.png";const s=String(a);return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("//")||s.startsWith("/")?s:`/${s}`}function Q({story:a={}}){var C,A,E,D,R,T;const[s,o]=v.useState(!1),[c,r]=v.useState(!1),{data:m,setData:h,put:O,processing:x,errors:j}=L({status:a.status||"pending"}),{data:g,setData:p,post:_,processing:u,errors:i,reset:I}=L({story_id:a.id||"",name:"",email:"",rating:5,comment:""}),n=Array.isArray(a.comments)?a.comments:[],S=v.useMemo(()=>n.length===0?0:n.reduce((l,f)=>l+Number(f.rating||0),0)/n.length,[n]),B=Math.round(S),z=v.useMemo(()=>a.tags?String(a.tags).split(",").map(t=>t.trim()).filter(Boolean):[],[a.tags]),w=String(a.status||"pending").toLowerCase(),q=["approved","pending","rejected","published"].includes(w)?w:"pending",M=G(a.thumbnail),b=a.media||"",W=t=>{const l=String(t||"pending");return l.charAt(0).toUpperCase()+l.slice(1)},H=t=>{t.preventDefault(),O(route("admin.stories.updateStatus",a.id),{preserveScroll:!0,onSuccess:()=>{o(!1)}})},V=t=>{t.preventDefault(),_(route("admin.reviews.store"),{preserveScroll:!0,onSuccess:()=>{r(!1),I(),p("story_id",a.id)}})},y=()=>{x||o(!1)},N=()=>{u||r(!1)};return e.jsxs($,{children:[e.jsx(Z,{title:a.title||"Story Details"}),e.jsxs("div",{"data-h-scope":"story-show",className:"story-show",children:[e.jsxs("header",{className:"page-header",children:[e.jsxs("div",{children:[e.jsxs(P,{href:route("admin.stories.index"),className:"back-link",children:[e.jsx(d,{name:"arrowLeft",size:14}),"All stories"]}),e.jsx("h1",{children:a.title||"Untitled story"}),e.jsxs("p",{className:"dek",children:["By"," ",((C=a.talent)==null?void 0:C.name)||"Unknown talent"," ","·"," ",k(a.created_at)]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("button",{type:"button",className:"btn btn-outline",onClick:()=>o(!0),children:[e.jsx(d,{name:"refresh",size:14}),"Update status"]}),e.jsxs(P,{href:route("admin.stories.edit",a.id),className:"btn btn-outline",children:[e.jsx(d,{name:"edit",size:14}),"Edit"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>r(!0),children:[e.jsx(d,{name:"star",size:14}),"Add review"]})]})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx("div",{className:"panel thumb-panel",children:e.jsxs("div",{className:"thumb-hero",children:[e.jsx("img",{src:M,alt:a.title||"Story",onError:t=>{t.currentTarget.src="/images/placeholder-story.png"}}),e.jsxs("span",{className:"status-pill "+q,children:[e.jsx("span",{className:"status-dot"}),W(w)]})]})}),e.jsx("div",{className:"panel",children:e.jsxs("div",{className:"panel-body",children:[e.jsxs("span",{className:"category-tag",children:[e.jsx(d,{name:"tag",size:12}),((A=a.category)==null?void 0:A.name)||"Uncategorized"]}),e.jsx("h2",{className:"story-title",children:a.title||"Untitled story"}),e.jsxs("div",{className:"rating-row",children:[e.jsx("div",{className:"stars",children:[1,2,3,4,5].map(t=>e.jsx("span",{className:t<=B?"star":"star empty",children:"★"},t))}),e.jsxs("span",{className:"rating-text",children:[S.toFixed(1)," ","· ",n.length," ",n.length===1?"review":"reviews"]})]}),e.jsx("blockquote",{className:"excerpt",children:a.content?String(a.content).length>200?String(a.content).substring(0,200)+"…":String(a.content):"No story content available."}),e.jsxs("div",{className:"meta-grid",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Author"}),e.jsx("span",{className:"meta-value",children:((E=a.talent)==null?void 0:E.name)||"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Phone"}),e.jsx("span",{className:"meta-value",children:((D=a.talent)==null?void 0:D.phone)||"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Email"}),e.jsx("span",{className:"meta-value",children:(R=a.talent)!=null&&R.email?e.jsx("a",{href:"mailto:"+a.talent.email,children:a.talent.email}):"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Created"}),e.jsx("span",{className:"meta-value",children:k(a.created_at)})]}),e.jsxs("div",{className:"meta-item meta-item--wide",children:[e.jsx("span",{className:"meta-label",children:"Tags"}),e.jsx("div",{className:"tag-row",children:z.length>0?z.map((t,l)=>e.jsx("span",{className:"tag-chip",children:t},t+l)):e.jsx("span",{className:"meta-value",children:"No tags"})})]})]})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsxs("h2",{children:["Full story",(T=a.talent)!=null&&T.name?" of "+a.talent.name:""]}),e.jsx("p",{children:"The complete content and any linked media."})]}),e.jsxs("div",{className:"media-grid",children:[e.jsxs("div",{className:"media-preview",children:[e.jsx("img",{src:M,alt:a.title||"Story media",onError:t=>{t.currentTarget.src="/images/placeholder-story.png"}}),b&&e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"play-btn","aria-label":"Open media",children:e.jsx(d,{name:"play",size:20,strokeWidth:2})})]}),e.jsxs("div",{className:"full-content",children:[e.jsx("p",{children:a.content||"No story content available."}),b&&e.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary open-media",children:[e.jsx(d,{name:"play",size:13}),"Open media"]})]})]})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head panel-head-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Comments"}),e.jsx("p",{children:"Reviews and feedback from visitors."})]}),e.jsx("span",{className:"comment-count",children:n.length})]}),e.jsx("div",{className:"comments-body",children:n.length>0?n.map(t=>{const l=Number(t.rating||0),f=t.name||"Anonymous";return e.jsxs("div",{className:"comment-item",children:[e.jsx("span",{className:"byline-avatar",children:f.charAt(0).toUpperCase()}),e.jsxs("div",{className:"comment-body",children:[e.jsxs("div",{className:"comment-top",children:[e.jsx("span",{className:"comment-author",children:f}),e.jsx("span",{className:"comment-time",children:k(t.created_at)})]}),e.jsx("p",{className:"comment-text",children:t.comment||"No comment provided."}),e.jsx("div",{className:"stars small",children:[1,2,3,4,5].map(F=>e.jsx("span",{className:F<=l?"star":"star empty",children:"★"},F))})]})]},t.id)}):e.jsxs("div",{className:"empty-comments",children:[e.jsx(d,{name:"message",size:20}),e.jsx("strong",{children:"No reviews yet"}),e.jsx("span",{children:"Be the first to add a review to this story."})]})})]})]}),s&&U.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"statusModalTitle",style:{backgroundColor:"rgba(0, 0, 0, 0.45)"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content border-0 shadow",children:[e.jsxs("div",{className:"modal-header px-4 py-3",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title mb-1",id:"statusModalTitle",children:"Update status"}),e.jsx("small",{className:"text-muted",children:"Change the status of this story."})]}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:y})]}),e.jsxs("form",{onSubmit:H,children:[e.jsx("div",{className:"modal-body p-4",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"story-status",className:"form-label fw-semibold",children:"New status"}),e.jsxs("select",{id:"story-status",className:"form-select "+(j.status?"is-invalid":""),value:m.status,onChange:t=>h("status",t.target.value),required:!0,children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"}),e.jsx("option",{value:"published",children:"Published"})]}),j.status&&e.jsx("div",{className:"invalid-feedback",children:j.status})]})}),e.jsxs("div",{className:"modal-footer px-4 py-3",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:y,disabled:x,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-dark",disabled:x,children:x?"Updating...":"Update status"})]})]})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:y})]}),document.body),c&&U.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"reviewModalTitle",style:{backgroundColor:"rgba(0, 0, 0, 0.45)"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content border-0 shadow",children:[e.jsxs("div",{className:"modal-header px-4 py-3",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title mb-1",id:"reviewModalTitle",children:"Add review"}),e.jsx("small",{className:"text-muted",children:"Add feedback and rating for this story."})]}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:N})]}),e.jsxs("form",{onSubmit:V,children:[e.jsx("div",{className:"modal-body p-4",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"review-name",className:"form-label fw-semibold",children:"Name"}),e.jsx("input",{id:"review-name",type:"text",className:"form-control "+(i.name?"is-invalid":""),placeholder:"Jane Doe",value:g.name,onChange:t=>p("name",t.target.value),required:!0}),i.name&&e.jsx("div",{className:"invalid-feedback",children:i.name})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"review-email",className:"form-label fw-semibold",children:"Email"}),e.jsx("input",{id:"review-email",type:"email",className:"form-control "+(i.email?"is-invalid":""),placeholder:"jane@example.com",value:g.email,onChange:t=>p("email",t.target.value),required:!0}),i.email&&e.jsx("div",{className:"invalid-feedback",children:i.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"review-rating",className:"form-label fw-semibold",children:"Rating"}),e.jsxs("select",{id:"review-rating",className:"form-select "+(i.rating?"is-invalid":""),value:g.rating,onChange:t=>p("rating",Number(t.target.value)),required:!0,children:[e.jsx("option",{value:5,children:"★★★★★ Excellent"}),e.jsx("option",{value:4,children:"★★★★ Good"}),e.jsx("option",{value:3,children:"★★★ Average"}),e.jsx("option",{value:2,children:"★★ Poor"}),e.jsx("option",{value:1,children:"★ Terrible"})]}),i.rating&&e.jsx("div",{className:"invalid-feedback",children:i.rating})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"review-comment",className:"form-label fw-semibold",children:"Comment"}),e.jsx("textarea",{id:"review-comment",className:"form-control "+(i.comment?"is-invalid":""),rows:"5",placeholder:"Share your thoughts...",value:g.comment,onChange:t=>p("comment",t.target.value),required:!0}),i.comment&&e.jsx("div",{className:"invalid-feedback",children:i.comment})]})]})}),e.jsxs("div",{className:"modal-footer px-4 py-3",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:N,disabled:u,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-dark",disabled:u,children:u?"Submitting...":"Submit review"})]})]})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:N})]}),document.body),e.jsx("style",{children:`
                [data-h-scope="story-show"] {
                    --ink: #1d1d1f;
                    --ink-soft: #6e6e73;
                    --ink-faint: #a1a1a6;
                    --paper: #ffffff;
                    --surface: #ffffff;
                    --line: #e5e5e7;
                    --brand: #48d597;
                    --brand-ink: #157a4e;
                    --brand-wash: #eaf9f1;
                    --amber: #b8790f;
                    --amber-wash: #fbf1de;
                    --clay: #b5433a;
                    --clay-wash: #faeae8;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    color: var(--ink);
                }

                [data-h-scope="story-show"] * {
                    box-sizing: border-box;
                }

                .story-show {
                    background: var(--paper);
                    min-height: 100vh;
                    padding: 32px clamp(18px, 4vw, 48px) 64px;
                }

                .story-show > * {
                    max-width: 1080px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .story-show > * + * {
                    margin-top: 16px;
                }

                /* HEADER */

                .page-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                    border-bottom: 2px solid var(--ink);
                    padding-bottom: 20px !important;
                    margin-bottom: 24px !important;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--ink-soft);
                    text-decoration: none;
                    margin-bottom: 10px;
                }

                .back-link:hover {
                    color: var(--brand-ink);
                }

                .page-header h1 {
                    margin: 0;
                    font-weight: 700;
                    font-size: clamp(20px, 2.4vw, 26px);
                    letter-spacing: -0.01em;
                }

                .dek {
                    margin: 6px 0 0;
                    font-size: 12.5px;
                    color: var(--ink-soft);
                }

                .header-actions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                /* BUTTONS */

                .story-show .btn {
                    height: 36px;
                    padding: 0 14px;
                    border-radius: 7px;
                    border: 1.5px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    font-family: inherit;
                    font-size: 12.5px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    white-space: nowrap;
                }

                .story-show .btn-outline {
                    background: var(--surface);
                    color: var(--ink);
                    border-color: var(--line);
                }

                .story-show .btn-outline:hover {
                    border-color: var(--ink-faint);
                }

                .story-show .btn-primary {
                    background: var(--ink);
                    color: #fff;
                    border-color: var(--ink);
                }

                .story-show .btn-primary:hover {
                    background: var(--brand-ink);
                    border-color: var(--brand-ink);
                }

                /* PANELS */

                .panel {
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    background: var(--surface);
                    overflow: hidden;
                }

                .panel-head {
                    padding: 14px 16px;
                    border-bottom: 1px solid var(--line);
                }

                .panel-head-row {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                }

                .panel-head h2 {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 600;
                }

                .panel-head p {
                    margin: 3px 0 0;
                    font-size: 11.5px;
                    color: var(--ink-soft);
                }

                .panel-body {
                    padding: 16px;
                }

                /* OVERVIEW */

                .overview-grid {
                    display: grid;
                    grid-template-columns: 280px minmax(0, 1fr);
                    gap: 14px;
                    align-items: start;
                }

                .thumb-panel {
                    padding: 0;
                }

                .thumb-hero {
                    position: relative;
                    aspect-ratio: 4 / 3;
                    background: var(--brand-wash);
                }

                .thumb-hero img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .thumb-hero .status-pill {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                }

                .category-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 3px 9px;
                    border-radius: 999px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 10.5px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .story-title {
                    margin: 0 0 10px;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.3;
                }

                .rating-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 14px;
                }

                .stars {
                    display: flex;
                    gap: 1px;
                }

                .stars .star {
                    color: var(--amber);
                    font-size: 14px;
                }

                .stars.small .star {
                    font-size: 11px;
                }

                .stars .star.empty {
                    color: var(--line);
                }

                .rating-text {
                    font-size: 11.5px;
                    color: var(--ink-soft);
                }

                .excerpt {
                    margin: 0 0 16px;
                    padding: 10px 12px;
                    border-left: 2px solid var(--brand);
                    background: var(--paper);
                    color: var(--ink-soft);
                    font-size: 12.5px;
                    line-height: 1.6;
                    font-style: normal;
                }

                .meta-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 16px;
                    padding-top: 14px;
                    border-top: 1px solid var(--line);
                }

                .meta-item--wide {
                    grid-column: 1 / -1;
                }

                .meta-label {
                    display: block;
                    font-size: 10px;
                    color: var(--ink-faint);
                    margin-bottom: 3px;
                }

                .meta-value {
                    display: block;
                    font-size: 12.5px;
                    font-weight: 600;
                    color: var(--ink);
                    word-break: break-word;
                }

                .meta-value a {
                    color: var(--brand-ink);
                    text-decoration: none;
                }

                .meta-value a:hover {
                    text-decoration: underline;
                }

                .tag-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }

                .tag-chip {
                    padding: 3px 8px;
                    border-radius: 999px;
                    background: var(--paper);
                    border: 1px solid var(--line);
                    color: var(--ink-soft);
                    font-size: 10.5px;
                    font-weight: 600;
                }

                /* STATUS */

                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 3px 8px;
                    border-radius: 999px;
                    font-size: 9.5px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-pill.approved,
                .status-pill.published {
                    color: var(--brand-ink);
                    background: var(--brand-wash);
                }

                .status-pill.approved .status-dot,
                .status-pill.published .status-dot {
                    background: var(--brand);
                }

                .status-pill.pending {
                    color: var(--amber);
                    background: var(--amber-wash);
                }

                .status-pill.pending .status-dot {
                    background: var(--amber);
                }

                .status-pill.rejected {
                    color: var(--clay);
                    background: var(--clay-wash);
                }

                .status-pill.rejected .status-dot {
                    background: var(--clay);
                }

                /* MEDIA */

                .media-grid {
                    display: grid;
                    grid-template-columns:
                        minmax(0, 1fr)
                        minmax(0, 1fr);
                }

                .media-preview {
                    position: relative;
                    min-height: 220px;
                    background: var(--ink);
                }

                .media-preview img {
                    width: 100%;
                    height: 100%;
                    min-height: 220px;
                    object-fit: cover;
                    opacity: 0.85;
                    display: block;
                }

                .play-btn {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    text-decoration: none;
                }

                .play-btn::before {
                    content: '';
                    position: absolute;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(
                        255,
                        255,
                        255,
                        0.16
                    );
                    backdrop-filter: blur(2px);
                }

                .full-content {
                    padding: 20px;
                }

                .full-content p {
                    margin: 0 0 16px;
                    color: var(--ink-soft);
                    font-size: 13px;
                    line-height: 1.7;
                    white-space: pre-line;
                }

                .open-media {
                    width: fit-content;
                }

                /* COMMENTS */

                .comment-count {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 20px;
                    height: 20px;
                    padding: 0 6px;
                    border-radius: 999px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 10.5px;
                    font-weight: 700;
                }

                .comments-body {
                    padding: 4px 16px;
                }

                .comment-item {
                    display: flex;
                    gap: 10px;
                    padding: 14px 0;
                    border-bottom: 1px solid var(--line);
                }

                .comment-item:last-child {
                    border-bottom: none;
                }

                .byline-avatar {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 11px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .comment-body {
                    flex: 1;
                    min-width: 0;
                }

                .comment-top {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 8px;
                    margin-bottom: 3px;
                }

                .comment-author {
                    font-size: 12.5px;
                    font-weight: 600;
                }

                .comment-time {
                    font-size: 10.5px;
                    color: var(--ink-faint);
                    white-space: nowrap;
                }

                .comment-text {
                    margin: 0 0 5px;
                    font-size: 12px;
                    color: var(--ink-soft);
                    line-height: 1.55;
                }

                .empty-comments {
                    text-align: center;
                    padding: 44px 16px;
                    color: var(--ink-faint);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                }

                .empty-comments strong {
                    color: var(--ink-soft);
                    font-size: 13px;
                    font-weight: 600;
                }

                .empty-comments span {
                    font-size: 11.5px;
                }

                /* BOOTSTRAP MODAL OVERRIDES */

                body:has(.story-show .modal.show) {
                    overflow: hidden;
                }

                .story-show .modal {
                    z-index: 1060;
                }

                .story-show .modal-backdrop {
                    z-index: 1050;
                }

                .story-show .modal-content {
                    border-radius: 12px;
                    overflow: hidden;
                }

                .story-show .modal-header {
                    border-bottom: 1px solid #e5e5e7;
                }

                .story-show .modal-footer {
                    border-top: 1px solid #e5e5e7;
                }

                .story-show .modal-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #1d1d1f;
                }

                .story-show .modal-body {
                    color: #1d1d1f;
                }

                .story-show .form-label {
                    font-size: 12px;
                    margin-bottom: 6px;
                }

                .story-show .form-control,
                .story-show .form-select {
                    min-height: 38px;
                    border-color: #e5e5e7;
                    border-radius: 8px;
                    font-size: 13px;
                    box-shadow: none;
                }

                .story-show .form-control:focus,
                .story-show .form-select:focus {
                    border-color: #48d597;
                    box-shadow:
                        0 0 0 3px
                        rgba(72, 213, 151, 0.15);
                }

                .story-show textarea.form-control {
                    min-height: 110px;
                    resize: vertical;
                }

                .story-show .modal .btn {
                    height: 36px;
                    min-height: 36px;
                }

                /* RESPONSIVE */

                @media (max-width: 800px) {
                    .overview-grid {
                        grid-template-columns: 1fr;
                    }

                    .thumb-hero {
                        aspect-ratio: 16 / 9;
                    }

                    .media-grid {
                        grid-template-columns: 1fr;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        flex: 1;
                    }
                }

                @media (max-width: 480px) {
                    .meta-grid {
                        grid-template-columns: 1fr;
                    }

                    .comment-top {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2px;
                    }

                    .story-show {
                        padding-left: 14px;
                        padding-right: 14px;
                    }

                    .story-show .modal-dialog {
                        margin: 12px;
                    }

                    .story-show .modal-footer {
                        flex-wrap: wrap;
                    }
                }
            `})]})}export{Q as default};
