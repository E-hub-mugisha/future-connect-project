import{j as a,H as d,L as r}from"./app-BO26Fp_i.js";import{A as l}from"./AppLayout-Do3g3cSn.js";function h({story:e,isOwner:s}){var t;return a.jsxs(l,{children:[a.jsx(d,{title:e.title}),a.jsxs("div",{"data-h-scope":"talent-story",children:[a.jsx("style",{children:`
                    [data-h-scope="talent-story"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-story"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-story"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-story"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-story"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-story"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-story"] .h-badge-accent {
                        background: rgba(72, 213, 151, 0.12);
                        color: var(--h-accent-dark);
                        border: 1px solid rgba(72, 213, 151, 0.3);
                    }
                    [data-h-scope="talent-story"] .h-badge-draft {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-story"] .h-content {
                        white-space: pre-line;
                        line-height: 1.8;
                        color: rgba(6,15,17,0.85);
                    }
                    [data-h-scope="talent-story"] .h-tag {
                        background: rgba(6,15,17,0.05);
                        color: var(--h-ink);
                    }
                `}),a.jsxs("div",{className:"container-fluid px-4 py-4",children:[a.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[a.jsxs(r,{href:route("talent.get.profile",e.talent_id),className:"btn h-btn-ghost rounded-pill px-3 py-2",children:[a.jsx("i",{className:"fas fa-arrow-left me-2"}),"Back to Profile"]}),s&&a.jsxs(r,{href:route("talent.page.stories.edit",e.id),className:"btn h-btn-accent rounded-pill px-4 py-2",children:[a.jsx("i",{className:"fas fa-pen me-2"}),"Edit Story"]})]}),a.jsx("div",{className:"row g-4 justify-content-center",children:a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"card h-card border-0 shadow-sm rounded-4 overflow-hidden",children:[e.thumbnail&&a.jsx("img",{src:`/storage/${e.thumbnail}`,alt:e.title,className:"w-100",style:{maxHeight:360,objectFit:"cover"}}),a.jsxs("div",{className:"card-body p-4 p-md-5",children:[a.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[((t=e.category)==null?void 0:t.name)&&a.jsx("span",{className:"badge h-badge-accent px-3 py-2 rounded-pill",children:e.category.name}),e.status==="draft"&&a.jsx("span",{className:"badge h-badge-draft px-3 py-2 rounded-pill",children:"Draft"})]}),a.jsx("h3",{className:"fw-bold mb-3",children:e.title}),a.jsx("div",{className:"h-content mb-4",children:e.content}),e.media&&a.jsxs("a",{href:`/storage/${e.media}`,target:"_blank",rel:"noreferrer",className:"btn h-btn-ghost rounded-pill px-4 py-2 mb-4",children:[a.jsx("i",{className:"fas fa-paperclip me-2"}),"View Attached Media"]}),e.tags&&a.jsx("div",{className:"d-flex flex-wrap gap-2",children:e.tags.split(",").map((n,c)=>a.jsxs("span",{className:"badge h-tag px-3 py-2 rounded-pill",children:["#",n.trim()]},c))})]})]})})})]})]})]})}export{h as default};
