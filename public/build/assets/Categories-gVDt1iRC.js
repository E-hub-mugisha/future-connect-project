import{r as f,j as e,H as C,R as M,u as h}from"./app-B2SIh33N.js";import{A as S}from"./AppLayout-CkTPU_ZW.js";import{P as g,U as E,S as j,X as b,C as A}from"./x-Ct87uIPC.js";import{c as y,T as N}from"./trash-BnfvNXot.js";import{P as w}from"./pencil-B4jxSHgI.js";/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={name:"briefcase-business",size:24,node:[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};k.node;const T=y(k);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};z.node;const v=y(z);function D({categories:r}){const{data:s,setData:i,post:o,processing:l,errors:c,reset:n}=h({name:"",parent_id:""});function t(a){a.preventDefault(),o(route("admin.job-categories.store"),{onSuccess:()=>{var p,x;n();const d=document.getElementById("createCategoryModal");(x=(p=window.bootstrap)==null?void 0:p.Modal.getInstance(d))==null||x.hide()}})}return e.jsx("div",{className:"modal fade",id:"createCategoryModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsx("div",{className:"modal-content apple-modal",children:e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"modal-kicker",children:"JOB MANAGEMENT"}),e.jsx("h5",{className:"modal-title",children:"Add category"})]}),e.jsx("button",{type:"button",className:"modal-close","data-bs-dismiss":"modal",children:e.jsx(b,{size:16})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"field-group",children:[e.jsx("label",{children:"Category name"}),e.jsx("input",{type:"text",value:s.name,onChange:a=>i("name",a.target.value),className:`apple-input ${c.name?"input-error":""}`,placeholder:"e.g. Software Development",autoFocus:!0,required:!0}),c.name&&e.jsx("div",{className:"field-error",children:c.name})]}),e.jsxs("div",{className:"field-group",children:[e.jsx("label",{children:"Parent category"}),e.jsxs("select",{value:s.parent_id,onChange:a=>i("parent_id",a.target.value),className:"apple-input",children:[e.jsx("option",{value:"",children:"No parent category"}),r.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn-light-apple","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary-apple",disabled:l,children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(g,{size:15}),"Create category"]})})]})]})})})})}function _({category:r,categories:s}){const{data:i,setData:o,put:l,processing:c,errors:n}=h({name:r.name,parent_id:r.parent_id??""});function t(a){a.preventDefault(),l(route("admin.job-categories.update",r.id),{onSuccess:()=>{var p,x;const d=document.getElementById(`editCategoryModal${r.id}`);(x=(p=window.bootstrap)==null?void 0:p.Modal.getInstance(d))==null||x.hide()}})}return e.jsx("div",{className:"modal fade",id:`editCategoryModal${r.id}`,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsx("div",{className:"modal-content apple-modal",children:e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"modal-kicker",children:"JOB MANAGEMENT"}),e.jsx("h5",{className:"modal-title",children:"Edit category"})]}),e.jsx("button",{type:"button",className:"modal-close","data-bs-dismiss":"modal",children:e.jsx(b,{size:16})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"field-group",children:[e.jsx("label",{children:"Category name"}),e.jsx("input",{type:"text",value:i.name,onChange:a=>o("name",a.target.value),className:`apple-input ${n.name?"input-error":""}`,required:!0}),n.name&&e.jsx("div",{className:"field-error",children:n.name})]}),e.jsxs("div",{className:"field-group",children:[e.jsx("label",{children:"Parent category"}),e.jsxs("select",{value:i.parent_id,onChange:a=>o("parent_id",a.target.value),className:"apple-input",children:[e.jsx("option",{value:"",children:"No parent category"}),s.filter(a=>a.id!==r.id).map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),n.parent_id&&e.jsx("div",{className:"field-error",children:n.parent_id})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn-light-apple","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary-apple",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Updating..."]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{size:14}),"Save changes"]})})]})]})})})})}function O({category:r}){const{delete:s,processing:i}=h();function o(l){l.preventDefault(),s(route("admin.job-categories.destroy",r.id))}return e.jsx("div",{className:"modal fade",id:`deleteCategoryModal${r.id}`,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:e.jsx("div",{className:"modal-content apple-modal",children:e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"delete-modal-body",children:[e.jsx("div",{className:"delete-icon",children:e.jsx(N,{size:19})}),e.jsx("h5",{children:"Delete category?"}),e.jsxs("p",{children:["This will remove"," ",e.jsx("strong",{children:r.name}),". Make sure there are no dependent records before continuing."]})]}),e.jsxs("div",{className:"delete-actions",children:[e.jsx("button",{type:"button",className:"btn-light-apple","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-danger-apple",disabled:i,children:i?"Deleting...":"Delete"})]})]})})})})}function m({icon:r,label:s,value:i,description:o}){return e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:r}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:s}),e.jsx("div",{className:"stat-value",children:i}),e.jsx("div",{className:"stat-description",children:o})]})]})}function B({categories:r=[]}){const[s,i]=f.useState(""),o=f.useMemo(()=>{const t=s.toLowerCase().trim();return t?r.filter(a=>{var d,p,x,u;return((d=a.name)==null?void 0:d.toLowerCase().includes(t))||((p=a.slug)==null?void 0:p.toLowerCase().includes(t))||((u=(x=a.parent)==null?void 0:x.name)==null?void 0:u.toLowerCase().includes(t))}):r},[r,s]),l=r.length,c=r.reduce((t,a)=>t+Number(a.job_sections_count??0),0),n=r.filter(t=>!t.parent_id).length;return e.jsxs(S,{children:[e.jsx(C,{title:"Job Categories"}),e.jsxs("div",{className:"categories-page",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"page-eyebrow",children:"JOB MANAGEMENT"}),e.jsx("h1",{children:"Job categories"}),e.jsx("p",{children:"Organize and manage the categories used across your job listings."})]}),e.jsxs("button",{className:"add-category-button","data-bs-toggle":"modal","data-bs-target":"#createCategoryModal",children:[e.jsx(g,{size:16}),e.jsx("span",{children:"Add category"})]})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(m,{icon:e.jsx(v,{size:17}),label:"Categories",value:l,description:"Total job categories"}),e.jsx(m,{icon:e.jsx(T,{size:17}),label:"Jobs",value:c,description:"Jobs across categories"}),e.jsx(m,{icon:e.jsx(E,{size:17}),label:"Parent categories",value:n,description:"Top-level categories"})]}),e.jsxs("div",{className:"categories-card",children:[e.jsxs("div",{className:"categories-toolbar",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:"All categories"}),e.jsxs("div",{className:"section-subtitle",children:[o.length," ",o.length===1?"category":"categories"," ","displayed"]})]}),e.jsxs("div",{className:"search-wrapper",children:[e.jsx(j,{size:15}),e.jsx("input",{type:"search",value:s,onChange:t=>i(t.target.value),placeholder:"Search categories..."}),s&&e.jsx("button",{type:"button",onClick:()=>i(""),className:"clear-search",children:e.jsx(b,{size:14})})]})]}),o.length>0?e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"categories-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"number-column",children:"#"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Slug"}),e.jsx("th",{children:"Parent"}),e.jsx("th",{children:"Jobs"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:o.map((t,a)=>{const d=Number(t.job_sections_count??0);return e.jsxs(M.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"row-number",children:String(a+1).padStart(2,"0")}),e.jsx("td",{children:e.jsxs("div",{className:"category-cell",children:[e.jsx("div",{className:"category-avatar",children:e.jsx(v,{size:15})}),e.jsxs("div",{children:[e.jsx("div",{className:"category-name",children:t.name}),e.jsxs("div",{className:"category-id",children:["ID #",t.id]})]})]})}),e.jsx("td",{children:e.jsxs("span",{className:"slug",children:["/",t.slug]})}),e.jsx("td",{children:t.parent?e.jsxs("div",{className:"parent-cell",children:[e.jsx(A,{size:13}),e.jsx("span",{children:t.parent.name})]}):e.jsx("span",{className:"root-badge",children:"Root"})}),e.jsx("td",{children:e.jsxs("div",{className:"job-count",children:[e.jsx("span",{className:"job-count-number",children:d}),e.jsx("span",{children:d===1?"job":"jobs"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{type:"button",className:"table-action edit","data-bs-toggle":"modal","data-bs-target":`#editCategoryModal${t.id}`,title:"Edit category",children:[e.jsx(w,{size:14}),e.jsx("span",{children:"Edit"})]}),e.jsx("button",{type:"button",className:"table-action delete","data-bs-toggle":"modal","data-bs-target":`#deleteCategoryModal${t.id}`,title:"Delete category",children:e.jsx(N,{size:14})})]})})]}),e.jsx(_,{category:t,categories:r}),e.jsx(O,{category:t})]},t.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(j,{size:20})}),e.jsx("h3",{children:"No categories found"}),e.jsx("p",{children:s?`No category matches "${s}".`:"Create your first job category to get started."}),s?e.jsx("button",{type:"button",className:"btn-light-apple",onClick:()=>i(""),children:"Clear search"}):e.jsxs("button",{type:"button",className:"btn-primary-apple","data-bs-toggle":"modal","data-bs-target":"#createCategoryModal",children:[e.jsx(g,{size:15}),"Add category"]})]})]})]}),e.jsx(D,{categories:r}),e.jsx("style",{children:`

                /* ==================================================
                   LIGHT / APPLE FONT
                ================================================== */

                .categories-page {

                    --apple-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    --page-bg: #f7f7f9;
                    --card: #ffffff;
                    --text: #1d1d1f;
                    --muted: #86868b;
                    --muted-dark: #5f6368;
                    --border: #e8e8ed;
                    --border-light: #f0f0f3;

                    --green: #16834b;
                    --green-soft: #edf8f2;

                    --red: #d92d20;
                    --red-soft: #fff1f0;

                    font-family: var(--apple-font);
                    color: var(--text);
                    background: var(--page-bg);

                    min-height: calc(100vh - 60px);

                    padding: 28px 30px 45px;

                    -webkit-font-smoothing: antialiased;

                    color-scheme: light !important;
                }


                .categories-page *,
                .categories-page *::before,
                .categories-page *::after {

                    box-sizing: border-box;

                }


                /* ==================================================
                   HEADER
                ================================================== */

                .page-header {

                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;

                    margin-bottom: 24px;

                }


                .page-eyebrow {

                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    color: var(--green);

                    margin-bottom: 6px;

                }


                .page-header h1 {

                    margin: 0;

                    font-size: 23px;
                    line-height: 1.2;

                    font-weight: 700;
                    letter-spacing: -.035em;

                }


                .page-header p {

                    margin: 6px 0 0;

                    font-size: 12px;
                    line-height: 1.5;

                    color: var(--muted);

                }


                .add-category-button {

                    border: 0;
                    border-radius: 9px;

                    background: #1d1d1f;
                    color: white;

                    height: 36px;
                    padding: 0 14px;

                    display: inline-flex;
                    align-items: center;
                    gap: 7px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 600;

                    white-space: nowrap;

                    transition:
                        transform .15s ease,
                        background .15s ease;

                }


                .add-category-button:hover {

                    background: #000;
                    transform: translateY(-1px);

                }


                /* ==================================================
                   STATS
                ================================================== */

                .stats-grid {

                    display: grid;

                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 12px;

                    margin-bottom: 18px;

                }


                .stat-card {

                    background: var(--card);

                    border: 1px solid var(--border);

                    border-radius: 13px;

                    padding: 15px 16px;

                    display: flex;
                    align-items: center;

                    gap: 12px;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);

                }


                .stat-icon {

                    width: 34px;
                    height: 34px;

                    border-radius: 9px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: var(--green-soft);
                    color: var(--green);

                    flex-shrink: 0;

                }


                .stat-label {

                    font-size: 10px;
                    font-weight: 600;

                    text-transform: uppercase;
                    letter-spacing: .04em;

                    color: var(--muted);

                }


                .stat-value {

                    font-size: 19px;
                    line-height: 1.15;

                    font-weight: 700;

                    margin-top: 2px;

                    letter-spacing: -.02em;

                }


                .stat-description {

                    font-size: 10px;
                    color: var(--muted);

                    margin-top: 2px;

                }


                /* ==================================================
                   MAIN CARD
                ================================================== */

                .categories-card {

                    background: var(--card);

                    border: 1px solid var(--border);

                    border-radius: 14px;

                    overflow: hidden;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);

                }


                /* ==================================================
                   TOOLBAR
                ================================================== */

                .categories-toolbar {

                    min-height: 68px;

                    padding: 14px 17px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 20px;

                    border-bottom: 1px solid var(--border-light);

                }


                .section-title {

                    font-size: 13px;
                    font-weight: 650;

                    letter-spacing: -.01em;

                }


                .section-subtitle {

                    font-size: 10px;

                    color: var(--muted);

                    margin-top: 3px;

                }


                .search-wrapper {

                    width: 245px;
                    height: 33px;

                    display: flex;
                    align-items: center;

                    gap: 7px;

                    padding: 0 10px;

                    border: 1px solid var(--border);

                    border-radius: 8px;

                    background: #fafafa;

                    color: var(--muted);

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;

                }


                .search-wrapper:focus-within {

                    background: white;

                    border-color: #b9cfc3;

                    box-shadow:
                        0 0 0 3px rgba(22,131,75,.07);

                }


                .search-wrapper input {

                    border: 0;
                    outline: 0;

                    background: transparent;

                    width: 100%;

                    font-family: inherit;
                    font-size: 11px;

                    color: var(--text);

                }


                .search-wrapper input::placeholder {

                    color: #a1a1a6;

                }


                .clear-search {

                    border: 0;
                    background: transparent;

                    padding: 2px;

                    display: flex;

                    color: var(--muted);

                }


                /* ==================================================
                   TABLE
                ================================================== */

                .categories-table {

                    width: 100%;
                    border-collapse: collapse;

                }


                .categories-table thead th {

                    height: 39px;

                    padding: 0 17px;

                    background: #fafafa;

                    border-bottom: 1px solid var(--border);

                    color: #737373;

                    font-size: 9px;
                    font-weight: 700;

                    letter-spacing: .055em;

                    text-transform: uppercase;

                    text-align: left;

                    white-space: nowrap;

                }


                .categories-table tbody td {

                    padding: 11px 17px;

                    border-bottom: 1px solid var(--border-light);

                    vertical-align: middle;

                    font-size: 11px;

                }


                .categories-table tbody tr:last-child td {

                    border-bottom: 0;

                }


                .categories-table tbody tr {

                    transition:
                        background .12s ease;

                }


                .categories-table tbody tr:hover {

                    background: #fbfbfc;

                }


                .number-column {

                    width: 55px;

                }


                .row-number {

                    color: #a1a1a6;

                    font-size: 10px !important;

                    font-variant-numeric: tabular-nums;

                }


                /* ==================================================
                   CATEGORY
                ================================================== */

                .category-cell {

                    display: flex;
                    align-items: center;

                    gap: 10px;

                }


                .category-avatar {

                    width: 31px;
                    height: 31px;

                    border-radius: 8px;

                    background: #f1f8f4;

                    color: var(--green);

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                }


                .category-name {

                    font-size: 11px;
                    font-weight: 650;

                    color: var(--text);

                }


                .category-id {

                    margin-top: 2px;

                    font-size: 9px;

                    color: #a1a1a6;

                }


                /* ==================================================
                   SLUG
                ================================================== */

                .slug {

                    display: inline-block;

                    padding: 4px 7px;

                    border-radius: 6px;

                    background: #f7f7f8;

                    color: #68686c;

                    font-family:
                        ui-monospace,
                        SFMono-Regular,
                        Menlo,
                        Monaco,
                        Consolas,
                        monospace;

                    font-size: 9px;

                }


                /* ==================================================
                   PARENT
                ================================================== */

                .parent-cell {

                    display: inline-flex;
                    align-items: center;

                    gap: 4px;

                    color: var(--muted-dark);

                    font-size: 10px;

                }


                .parent-cell svg {

                    color: #b0b0b5;

                }


                .root-badge {

                    display: inline-flex;

                    padding: 4px 7px;

                    border-radius: 6px;

                    background: #f5f5f7;

                    color: #77777c;

                    font-size: 9px;
                    font-weight: 600;

                }


                /* ==================================================
                   JOB COUNT
                ================================================== */

                .job-count {

                    display: inline-flex;
                    align-items: baseline;

                    gap: 4px;

                }


                .job-count-number {

                    font-size: 13px;

                    font-weight: 700;

                    color: var(--text);

                }


                .job-count span:last-child {

                    color: var(--muted);

                    font-size: 9px;

                }


                /* ==================================================
                   ACTIONS
                ================================================== */

                .actions-column {

                    width: 105px;

                    text-align: right !important;

                }


                .row-actions {

                    display: flex;

                    align-items: center;
                    justify-content: flex-end;

                    gap: 5px;

                }


                .table-action {

                    height: 28px;

                    border: 1px solid var(--border);

                    background: white;

                    border-radius: 7px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    gap: 5px;

                    padding: 0 8px;

                    font-family: inherit;

                    font-size: 10px;
                    font-weight: 600;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;

                }


                .table-action.edit {

                    color: #52525a;

                }


                .table-action.edit:hover {

                    background: #f5f5f7;
                    border-color: #d7d7dc;

                    color: var(--text);

                }


                .table-action.delete {

                    width: 28px;
                    padding: 0;

                    color: #9b9ba0;

                }


                .table-action.delete:hover {

                    color: var(--red);

                    background: var(--red-soft);

                    border-color: #f2c8c4;

                }


                /* ==================================================
                   EMPTY STATE
                ================================================== */

                .empty-state {

                    min-height: 260px;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    padding: 40px 20px;

                    text-align: center;

                }


                .empty-icon {

                    width: 42px;
                    height: 42px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background: #f4f4f6;

                    color: #88888d;

                    margin-bottom: 11px;

                }


                .empty-state h3 {

                    margin: 0;

                    font-size: 13px;
                    font-weight: 650;

                }


                .empty-state p {

                    max-width: 350px;

                    margin: 5px 0 15px;

                    font-size: 10px;
                    line-height: 1.5;

                    color: var(--muted);

                }


                /* ==================================================
                   MODALS
                ================================================== */

                .apple-modal {

                    border: 1px solid #e6e6ea;

                    border-radius: 14px;

                    overflow: hidden;

                    box-shadow:
                        0 18px 50px rgba(0,0,0,.12);

                    font-family: var(--apple-font);

                    color: var(--text);

                    background: white;

                }


                .apple-modal .modal-header {

                    padding: 18px 20px 13px;

                    border-bottom: 1px solid var(--border-light);

                }


                .modal-kicker {

                    font-size: 8px;

                    font-weight: 700;

                    letter-spacing: .08em;

                    color: var(--green);

                    margin-bottom: 4px;

                }


                .apple-modal .modal-title {

                    font-size: 15px;

                    font-weight: 700;

                    letter-spacing: -.02em;

                    margin: 0;

                }


                .modal-close {

                    width: 27px;
                    height: 27px;

                    border: 0;

                    border-radius: 50%;

                    background: #f3f3f5;

                    color: #666;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                }


                .apple-modal .modal-body {

                    padding: 18px 20px;

                }


                .field-group {

                    margin-bottom: 16px;

                }


                .field-group:last-child {

                    margin-bottom: 0;

                }


                .field-group label {

                    display: block;

                    margin-bottom: 6px;

                    font-size: 10px;

                    font-weight: 650;

                    color: #4c4c51;

                }


                .apple-input {

                    width: 100%;

                    height: 36px;

                    border: 1px solid #dedee3;

                    border-radius: 8px;

                    background: #fbfbfc;

                    padding: 0 10px;

                    outline: none;

                    font-family: inherit;

                    font-size: 11px;

                    color: var(--text);

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;

                }


                .apple-input:focus {

                    background: white;

                    border-color: #a7cbb7;

                    box-shadow:
                        0 0 0 3px rgba(22,131,75,.07);

                }


                .input-error {

                    border-color: #e0aaa5;

                }


                .field-error {

                    margin-top: 5px;

                    color: var(--red);

                    font-size: 9px;

                }


                .apple-modal .modal-footer {

                    padding: 12px 20px;

                    border-top: 1px solid var(--border-light);

                    display: flex;

                    justify-content: flex-end;

                    gap: 7px;

                }


                .btn-light-apple,
                .btn-primary-apple,
                .btn-danger-apple {

                    min-height: 32px;

                    border-radius: 8px;

                    padding: 0 11px;

                    border: 1px solid transparent;

                    font-family: inherit;

                    font-size: 10px;

                    font-weight: 600;

                    display: inline-flex;

                    align-items: center;

                    justify-content: center;

                    gap: 6px;

                    transition: .15s ease;

                }


                .btn-light-apple {

                    background: #f4f4f6;

                    border-color: #e6e6ea;

                    color: #55555b;

                }


                .btn-light-apple:hover {

                    background: #ebebee;

                }


                .btn-primary-apple {

                    background: #1d1d1f;

                    color: white;

                }


                .btn-primary-apple:hover {

                    background: #000;

                }


                .btn-danger-apple {

                    background: var(--red);

                    color: white;

                }


                .btn-danger-apple:hover {

                    background: #bb2118;

                }


                /* ==================================================
                   DELETE
                ================================================== */

                .delete-modal-body {

                    text-align: center;

                    padding: 26px 22px 18px;

                }


                .delete-icon {

                    width: 40px;
                    height: 40px;

                    margin: 0 auto 11px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background: var(--red-soft);

                    color: var(--red);

                }


                .delete-modal-body h5 {

                    font-size: 14px;

                    font-weight: 700;

                    margin: 0;

                }


                .delete-modal-body p {

                    margin: 7px 0 0;

                    font-size: 10px;

                    line-height: 1.55;

                    color: var(--muted);

                }


                .delete-actions {

                    display: flex;

                    justify-content: center;

                    gap: 7px;

                    padding: 0 22px 20px;

                }


                /* ==================================================
                   RESPONSIVE
                ================================================== */

                @media (max-width: 900px) {

                    .categories-page {

                        padding: 22px 18px 35px;

                    }

                    .stats-grid {

                        grid-template-columns:
                            repeat(3, minmax(0, 1fr));

                    }

                }


                @media (max-width: 700px) {

                    .page-header {

                        align-items: flex-start;

                        flex-direction: column;

                    }


                    .add-category-button {

                        width: 100%;

                        justify-content: center;

                    }


                    .stats-grid {

                        grid-template-columns: 1fr;

                    }


                    .categories-toolbar {

                        align-items: stretch;

                        flex-direction: column;

                    }


                    .search-wrapper {

                        width: 100%;

                    }


                    .categories-table {

                        min-width: 720px;

                    }

                }


                @media (max-width: 480px) {

                    .categories-page {

                        padding: 18px 12px 30px;

                    }


                    .page-header h1 {

                        font-size: 21px;

                    }

                }


                /* ==================================================
                   FORCE LIGHT MODE
                ================================================== */

                @media (prefers-color-scheme: dark) {

                    .categories-page {

                        background: #f7f7f9 !important;
                        color: #1d1d1f !important;

                    }

                    .categories-card,
                    .stat-card,
                    .apple-modal {

                        background: #ffffff !important;
                        color: #1d1d1f !important;

                    }

                    .categories-table thead th {

                        background: #fafafa !important;
                        color: #737373 !important;

                    }

                    .categories-table tbody tr:hover {

                        background: #fbfbfc !important;

                    }

                    .apple-input {

                        background: #fbfbfc !important;
                        color: #1d1d1f !important;

                    }

                }

            `})]})}export{B as default};
