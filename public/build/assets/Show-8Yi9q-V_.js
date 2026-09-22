import{r as b,j as e,H as v,L as o,R as w,a as h}from"./app-CJlpfYPO.js";import{A as N}from"./AppLayout-WTBEreOn.js";function a({name:i,size:l=20,strokeWidth:c=1.8,className:t=""}){const n={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:c,strokeLinecap:"round",strokeLinejoin:"round",className:t,"aria-hidden":"true"},x={megaphone:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 11v2a2 2 0 0 0 2 2h2l4 5h2l-2-5h2l7 3V6l-7 3H5a2 2 0 0 0-2 2Z"}),e.jsx("path",{d:"M20 6v12"})]}),arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),arrowRight:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14"}),e.jsx("path",{d:"M9 7V4h6v3"})]}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]}),minusCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M8 12h8"})]}),user:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5"}),e.jsx("path",{d:"M5 21a7 7 0 0 1 14 0"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),calendar:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M3 10h18"})]}),link:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"9",r:"1.5"}),e.jsx("path",{d:"m21 15-4.5-4.5L7 20"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]}),alert:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M10.3 3.3 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})};return e.jsx("svg",{...n,children:x[i]||x.alert})}function C({announcement:i}){var g,m;const[l,c]=b.useState(!1),[t,n]=b.useState(!1),x=()=>{n(!0),h.put(route("admin.announcements.activate",i.id),{},{preserveScroll:!0,onFinish:()=>n(!1)})},j=()=>{n(!0),h.put(route("admin.announcements.deactivate",i.id),{},{preserveScroll:!0,onFinish:()=>n(!1)})},u=()=>{n(!0),h.delete(route("admin.announcements.destroy",i.id),{preserveScroll:!0,onSuccess:()=>{c(!1)},onFinish:()=>n(!1)})},k=s=>{if(!s)return"N/A";const d=new Date(s);return Number.isNaN(d.getTime())?"N/A":d.toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})},y=s=>{if(!s)return"N/A";const d=new Date(s);return Number.isNaN(d.getTime())?"N/A":d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})},p=String((i==null?void 0:i.content)||""),f=i!=null&&i.image?"/image/announcements/"+String(i.image).replace(/^\/+/,""):null,r=!!(i!=null&&i.is_active);return e.jsxs(N,{children:[e.jsx(v,{title:(i==null?void 0:i.title)||"Announcement Details"}),e.jsxs("div",{className:"announcement-show-page",children:[e.jsxs("header",{className:"announcement-show-header",children:[e.jsxs("div",{className:"header-main",children:[e.jsx("div",{className:"header-icon",children:e.jsx(a,{name:"megaphone",size:25})}),e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(o,{href:route("admin.announcements.index"),children:"Announcements"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Details"})]}),e.jsx("h1",{children:"Announcement Details"}),e.jsx("p",{children:"View and manage announcement information."})]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(o,{href:route("admin.announcements.index"),className:"btn btn-secondary",children:[e.jsx(a,{name:"arrowLeft",size:17}),"Back"]}),e.jsxs(o,{href:route("admin.announcements.edit",i.id),className:"btn btn-secondary",children:[e.jsx(a,{name:"edit",size:17}),"Edit"]}),r?e.jsxs("button",{type:"button",className:"btn btn-warning",onClick:j,disabled:t,children:[e.jsx(a,{name:"minusCircle",size:17}),t?"Processing...":"Deactivate"]}):e.jsxs("button",{type:"button",className:"btn btn-success",onClick:x,disabled:t,children:[e.jsx(a,{name:"checkCircle",size:17}),t?"Processing...":"Activate"]}),e.jsxs("button",{type:"button",className:"btn btn-danger",onClick:()=>c(!0),children:[e.jsx(a,{name:"trash",size:17}),"Delete"]})]})]}),e.jsxs("section",{className:"status-banner "+(r?"active":"inactive"),children:[e.jsxs("div",{className:"status-left",children:[e.jsx("div",{className:"status-icon",children:e.jsx(a,{name:r?"checkCircle":"minusCircle",size:21})}),e.jsxs("div",{children:[e.jsx("strong",{children:r?"Announcement is active":"Announcement is inactive"}),e.jsx("span",{children:r?"This announcement is currently active and visible to users.":"This announcement is currently inactive and may not be visible to users."})]})]}),e.jsxs("span",{className:"status-badge",children:[e.jsx("span",{className:"status-dot"}),r?"Active":"Inactive"]})]}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("main",{className:"main-column",children:[e.jsxs("article",{className:"content-card",children:[e.jsx("div",{className:"content-card-header",children:e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"ANNOUNCEMENT"}),e.jsx("h2",{children:(i==null?void 0:i.title)||"Untitled Announcement"})]})}),e.jsxs("div",{className:"announcement-content",children:[e.jsx("div",{className:"content-label",children:"Content"}),e.jsx("div",{className:"content-body",children:p?p.split(`
`).map((s,d)=>e.jsxs(w.Fragment,{children:[s,d<p.split(`
`).length-1&&e.jsx("br",{})]},d)):e.jsx("span",{className:"empty-content",children:"No content has been added to this announcement."})})]})]}),f&&e.jsxs("article",{className:"content-card",children:[e.jsx("div",{className:"content-card-header compact",children:e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"MEDIA"}),e.jsx("h3",{children:"Announcement Image"})]})}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:f,alt:(i==null?void 0:i.title)||"Announcement"})})]}),(i==null?void 0:i.link)&&e.jsxs("article",{className:"content-card",children:[e.jsx("div",{className:"content-card-header compact",children:e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"RESOURCE"}),e.jsx("h3",{children:"External Link"})]})}),e.jsxs("div",{className:"external-link-card",children:[e.jsx("div",{className:"external-link-icon",children:e.jsx(a,{name:"link",size:21})}),e.jsxs("div",{className:"external-link-info",children:[e.jsx("span",{children:"External resource"}),e.jsx("a",{href:i.link,target:"_blank",rel:"noreferrer",children:i.link})]}),e.jsxs("a",{href:i.link,target:"_blank",rel:"noreferrer",className:"open-link",children:["Open",e.jsx(a,{name:"arrowRight",size:15})]})]})]})]}),e.jsxs("aside",{className:"sidebar",children:[e.jsxs("section",{className:"side-card",children:[e.jsx("div",{className:"side-card-header",children:e.jsx("h3",{children:"Announcement Details"})}),e.jsxs("div",{className:"detail-list",children:[e.jsxs("div",{className:"detail-item",children:[e.jsx("div",{className:"detail-icon purple",children:e.jsx(a,{name:"user",size:17})}),e.jsxs("div",{className:"detail-copy",children:[e.jsx("span",{children:"Created By"}),e.jsx("strong",{children:((g=i==null?void 0:i.user)==null?void 0:g.name)||"N/A"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("div",{className:"detail-icon green",children:e.jsx(a,{name:"tag",size:17})}),e.jsxs("div",{className:"detail-copy",children:[e.jsx("span",{children:"Category"}),e.jsx("strong",{children:((m=i==null?void 0:i.category)==null?void 0:m.name)||"N/A"})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("div",{className:"detail-icon blue",children:e.jsx(a,{name:"calendar",size:17})}),e.jsxs("div",{className:"detail-copy",children:[e.jsx("span",{children:"Created At"}),e.jsx("strong",{children:k(i==null?void 0:i.created_at)})]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("div",{className:"detail-icon "+(r?"green":"gray"),children:e.jsx(a,{name:r?"checkCircle":"minusCircle",size:17})}),e.jsxs("div",{className:"detail-copy",children:[e.jsx("span",{children:"Status"}),e.jsx("strong",{children:r?"Active":"Inactive"})]})]})]})]}),e.jsxs("section",{className:"side-card",children:[e.jsx("div",{className:"side-card-header",children:e.jsx("h3",{children:"Quick Actions"})}),e.jsxs("div",{className:"quick-actions",children:[e.jsxs(o,{href:route("admin.announcements.edit",i.id),className:"quick-action",children:[e.jsx("span",{className:"quick-action-icon blue",children:e.jsx(a,{name:"edit",size:17})}),e.jsx("span",{children:"Edit Announcement"}),e.jsx(a,{name:"arrowRight",size:15})]}),e.jsxs(o,{href:route("admin.announcements.index"),className:"quick-action",children:[e.jsx("span",{className:"quick-action-icon gray",children:e.jsx(a,{name:"arrowLeft",size:17})}),e.jsx("span",{children:"All Announcements"}),e.jsx(a,{name:"arrowRight",size:15})]})]})]}),e.jsxs("section",{className:"date-card",children:[e.jsx(a,{name:"calendar",size:18}),e.jsxs("div",{children:[e.jsx("span",{children:"Created"}),e.jsx("strong",{children:y(i==null?void 0:i.created_at)})]})]})]})]}),l&&e.jsx("div",{className:"modal-backdrop",onMouseDown:s=>{s.target===s.currentTarget&&c(!1)},children:e.jsxs("div",{className:"delete-modal",children:[e.jsx("button",{type:"button",className:"modal-close",onClick:()=>c(!1),children:e.jsx(a,{name:"close",size:18})}),e.jsx("div",{className:"delete-icon",children:e.jsx(a,{name:"alert",size:25})}),e.jsx("h3",{children:"Delete announcement?"}),e.jsxs("p",{children:["You are about to permanently delete"," ",e.jsxs("strong",{children:['"',i==null?void 0:i.title,'"']}),".",e.jsx("br",{}),"This action cannot be undone."]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>c(!1),disabled:t,children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn btn-danger",onClick:u,disabled:t,children:[e.jsx(a,{name:"trash",size:17}),t?"Deleting...":"Confirm Delete"]})]})]})})]}),e.jsx("style",{children:`

                * {
                    box-sizing: border-box;
                }

                .announcement-show-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f9fc;
                    color: #172033;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                .announcement-show-header {
                    max-width: 1440px;
                    margin: 0 auto 22px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-main {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                    border: 1px solid #d1fae5;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 5px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb a {
                    color: #059669;
                    text-decoration: none;
                }

                .breadcrumb a:hover {
                    text-decoration: underline;
                }

                .breadcrumb span {
                    color: #98a2b3;
                }

                .announcement-show-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 27px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                }

                .announcement-show-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .header-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 8px;
                }

                /* =====================================================
                   BUTTONS
                ===================================================== */

                .btn {
                    height: 40px;
                    padding: 0 14px;
                    border: 1px solid transparent;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease;
                }

                .btn:hover:not(:disabled) {
                    transform: translateY(-1px);
                }

                .btn:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                }

                .btn-secondary {
                    color: #344054;
                    background: #ffffff;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover:not(:disabled) {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-success {
                    color: #ffffff;
                    background: #059669;
                    border-color: #059669;
                }

                .btn-success:hover:not(:disabled) {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-warning {
                    color: #92400e;
                    background: #fffbeb;
                    border-color: #fde68a;
                }

                .btn-warning:hover:not(:disabled) {
                    background: #fef3c7;
                }

                .btn-danger {
                    color: #ffffff;
                    background: #dc2626;
                    border-color: #dc2626;
                }

                .btn-danger:hover:not(:disabled) {
                    background: #b91c1c;
                    border-color: #b91c1c;
                }

                /* =====================================================
                   STATUS BANNER
                ===================================================== */

                .status-banner {
                    max-width: 1440px;
                    margin: 0 auto 20px;
                    padding: 15px 18px;
                    border: 1px solid;
                    border-radius: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .status-banner.active {
                    background: #f0fdf4;
                    border-color: #bbf7d0;
                }

                .status-banner.inactive {
                    background: #f8fafc;
                    border-color: #e2e8f0;
                }

                .status-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .status-icon {
                    width: 39px;
                    height: 39px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .status-banner.active .status-icon {
                    color: #059669;
                    background: #dcfce7;
                }

                .status-banner.inactive .status-icon {
                    color: #64748b;
                    background: #e2e8f0;
                }

                .status-left strong {
                    display: block;
                    color: #344054;
                    font-size: 13px;
                }

                .status-left span {
                    display: block;
                    margin-top: 2px;
                    color: #667085;
                    font-size: 11px;
                }

                .status-badge {
                    height: 28px;
                    padding: 0 10px;
                    border-radius: 999px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #ffffff;
                    color: #475467;
                    border: 1px solid #e4e7ec;
                    font-size: 10px;
                    font-weight: 750;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #98a2b3;
                }

                .status-banner.active .status-dot {
                    background: #10b981;
                }

                /* =====================================================
                   CONTENT GRID
                ===================================================== */

                .content-grid {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 340px;
                    gap: 20px;
                    align-items: start;
                }

                .main-column {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* =====================================================
                   CONTENT CARDS
                ===================================================== */

                .content-card,
                .side-card,
                .date-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    box-shadow: 0 2px 6px rgba(16, 24, 40, .025);
                }

                .content-card {
                    overflow: hidden;
                }

                .content-card-header {
                    padding: 21px 23px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .content-card-header.compact {
                    padding: 18px 20px;
                }

                .eyebrow {
                    display: block;
                    margin-bottom: 7px;
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .content-card-header h2 {
                    max-width: 850px;
                    margin: 0;
                    color: #101828;
                    font-size: 22px;
                    line-height: 1.35;
                    font-weight: 750;
                    letter-spacing: -.3px;
                }

                .content-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                }

                .announcement-content {
                    padding: 24px;
                }

                .content-label {
                    margin-bottom: 10px;
                    color: #667085;
                    font-size: 11px;
                    font-weight: 750;
                    text-transform: uppercase;
                    letter-spacing: .6px;
                }

                .content-body {
                    padding: 20px;
                    min-height: 170px;
                    border: 1px solid #e8ebef;
                    border-radius: 11px;
                    background: #fafbfc;
                    color: #344054;
                    font-size: 14px;
                    line-height: 1.8;
                    white-space: normal;
                    overflow-wrap: anywhere;
                }

                .empty-content {
                    color: #98a2b3;
                    font-style: italic;
                }

                /* =====================================================
                   IMAGE
                ===================================================== */

                .image-container {
                    padding: 20px;
                    background: #fafbfc;
                    text-align: center;
                }

                .image-container img {
                    display: block;
                    max-width: 100%;
                    max-height: 430px;
                    margin: 0 auto;
                    border-radius: 10px;
                    border: 1px solid #e4e7ec;
                    object-fit: contain;
                    background: #ffffff;
                }

                /* =====================================================
                   EXTERNAL LINK
                ===================================================== */

                .external-link-card {
                    margin: 20px;
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border: 1px solid #e4e7ec;
                    border-radius: 11px;
                    background: #fafbfc;
                }

                .external-link-icon {
                    width: 42px;
                    height: 42px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563eb;
                    background: #eff6ff;
                }

                .external-link-info {
                    min-width: 0;
                    flex: 1;
                }

                .external-link-info span {
                    display: block;
                    margin-bottom: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                    font-weight: 650;
                }

                .external-link-info a {
                    display: block;
                    overflow: hidden;
                    color: #2563eb;
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-decoration: none;
                }

                .external-link-info a:hover {
                    text-decoration: underline;
                }

                .open-link {
                    height: 34px;
                    padding: 0 10px;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    color: #2563eb;
                    background: #eff6ff;
                    font-size: 11px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .open-link:hover {
                    background: #dbeafe;
                }

                /* =====================================================
                   SIDEBAR
                ===================================================== */

                .side-card {
                    overflow: hidden;
                }

                .side-card-header {
                    padding: 17px 18px;
                    border-bottom: 1px solid #eef1f5;
                }

                .side-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    font-weight: 750;
                }

                .detail-list {
                    padding: 5px 18px;
                }

                .detail-item {
                    min-height: 67px;
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    border-bottom: 1px solid #f0f2f5;
                }

                .detail-item:last-child {
                    border-bottom: 0;
                }

                .detail-icon {
                    width: 35px;
                    height: 35px;
                    flex-shrink: 0;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .detail-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .detail-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .detail-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .detail-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                .detail-copy {
                    min-width: 0;
                }

                .detail-copy span {
                    display: block;
                    margin-bottom: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .detail-copy strong {
                    display: block;
                    overflow: hidden;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 700;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =====================================================
                   QUICK ACTIONS
                ===================================================== */

                .quick-actions {
                    padding: 7px 10px;
                }

                .quick-action {
                    min-height: 52px;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border-bottom: 1px solid #f0f2f5;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                    text-decoration: none;
                }

                .quick-action:last-child {
                    border-bottom: 0;
                }

                .quick-action > span:nth-child(2) {
                    flex: 1;
                }

                .quick-action > svg {
                    color: #98a2b3;
                }

                .quick-action:hover {
                    color: #059669;
                }

                .quick-action:hover > svg {
                    color: #059669;
                }

                .quick-action-icon {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .quick-action-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .quick-action-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                /* =====================================================
                   DATE CARD
                ===================================================== */

                .date-card {
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    color: #2563eb;
                    background: #eff6ff;
                    border-color: #dbeafe;
                }

                .date-card span {
                    display: block;
                    margin-bottom: 2px;
                    color: #64748b;
                    font-size: 10px;
                }

                .date-card strong {
                    display: block;
                    color: #344054;
                    font-size: 12px;
                }

                /* =====================================================
                   DELETE MODAL
                ===================================================== */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(15, 23, 42, .45);
                    backdrop-filter: blur(3px);
                }

                .delete-modal {
                    position: relative;
                    width: min(430px, 100%);
                    padding: 28px;
                    border-radius: 18px;
                    background: #ffffff;
                    text-align: center;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, .18);
                }

                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    border: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #667085;
                    cursor: pointer;
                }

                .delete-icon {
                    width: 58px;
                    height: 58px;
                    margin: 2px auto 17px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fee2e2;
                }

                .delete-modal h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 19px;
                    font-weight: 750;
                }

                .delete-modal p {
                    margin: 9px 0 22px;
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .delete-modal p strong {
                    color: #344054;
                }

                .modal-actions {
                    display: flex;
                    justify-content: center;
                    gap: 9px;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1100px) {

                    .content-grid {
                        grid-template-columns: minmax(0, 1fr) 290px;
                    }

                }

                @media (max-width: 900px) {

                    .announcement-show-page {
                        padding: 20px 15px;
                    }

                    .announcement-show-header {
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .content-grid {
                        grid-template-columns: 1fr;
                    }

                    .sidebar {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        align-items: start;
                    }

                    .date-card {
                        grid-column: span 2;
                    }

                }

                @media (max-width: 600px) {

                    .announcement-show-header h1 {
                        font-size: 23px;
                    }

                    .header-main {
                        align-items: flex-start;
                    }

                    .header-actions {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .status-banner {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .status-badge {
                        align-self: flex-start;
                    }

                    .content-card-header {
                        padding: 18px;
                    }

                    .content-card-header h2 {
                        font-size: 19px;
                    }

                    .announcement-content {
                        padding: 18px;
                    }

                    .content-body {
                        padding: 16px;
                        font-size: 13px;
                    }

                    .sidebar {
                        display: flex;
                    }

                    .date-card {
                        grid-column: auto;
                    }

                    .external-link-card {
                        align-items: flex-start;
                        flex-wrap: wrap;
                    }

                    .external-link-info {
                        width: calc(100% - 55px);
                    }

                    .open-link {
                        margin-left: 53px;
                    }

                    .modal-actions {
                        flex-direction: column-reverse;
                    }

                    .modal-actions .btn {
                        width: 100%;
                    }

                }

            `})]})}export{C as default};
