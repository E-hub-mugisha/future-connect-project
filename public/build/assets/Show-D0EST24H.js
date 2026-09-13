import{j as t,H as N,L as r}from"./app-BV2sDVKx.js";import{A as k}from"./AppLayout-KiVsabfS.js";function T({story:e,isOwner:u}){var h,y,x,m,g,f,b,w;const n=a=>{if(!a)return null;try{return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(a))}catch{return null}},s=a=>a?/^https?:\/\//i.test(a)||a.startsWith("/storage/")?a:`/storage/${a.replace(/^\/+/,"")}`:null,i=s(e.thumbnail),l=s(e.media),c=typeof e.tags=="string"?e.tags.split(",").map(a=>a.trim()).filter(Boolean):Array.isArray(e.tags)?e.tags:[],o=((h=e.talent)==null?void 0:h.name)||((y=e.talent)==null?void 0:y.full_name)||((m=(x=e.talent)==null?void 0:x.user)==null?void 0:m.name)||"Talent",d=s(((g=e.talent)==null?void 0:g.profile_photo)||((f=e.talent)==null?void 0:f.profile_image)||((b=e.talent)==null?void 0:b.avatar)),v=o.split(" ").filter(Boolean).slice(0,2).map(a=>a.charAt(0).toUpperCase()).join(""),p=n(e.published_at)||n(e.created_at)||null;return t.jsxs(k,{children:[t.jsx(N,{title:e.title}),t.jsxs("div",{"data-h-scope":"talent-story-show",children:[t.jsx("style",{children:`
                    [data-h-scope="talent-story-show"] {
                        --story-accent: #48d597;
                        --story-accent-dark: #2fb87c;
                        --story-accent-soft: rgba(72, 213, 151, 0.10);
                        --story-ink: #071315;
                        --story-muted: #667477;
                        --story-border: #e7eeeb;
                        --story-bg: #f6f9f8;
                        --story-white: #ffffff;

                        min-height: calc(100vh - 80px);
                        background:
                            radial-gradient(
                                circle at 15% 0%,
                                rgba(72, 213, 151, 0.08),
                                transparent 28%
                            ),
                            var(--story-bg);
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] * {
                        box-sizing: border-box;
                    }

                    /* ================================
                       HEADER
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-topbar {
                        padding: 24px 0;
                    }

                    [data-h-scope="talent-story-show"] .story-back {
                        display: inline-flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--story-muted);
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: 600;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-back:hover {
                        color: var(--story-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-show"] .story-owner-actions {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    /* ================================
                       BUTTONS
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        border-radius: 12px;
                        padding: 10px 18px;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-btn-edit {
                        background: var(--story-accent);
                        color: var(--story-ink);
                        border: 1px solid var(--story-accent);
                        box-shadow: 0 6px 18px rgba(72, 213, 151, .18);
                    }

                    [data-h-scope="talent-story-show"] .story-btn-edit:hover {
                        background: var(--story-accent-dark);
                        border-color: var(--story-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    /* ================================
                       ARTICLE
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-layout {
                        max-width: 1100px;
                        margin: 0 auto;
                    }

                    [data-h-scope="talent-story-show"] .story-article {
                        background: var(--story-white);
                        border: 1px solid var(--story-border);
                        border-radius: 24px;
                        overflow: hidden;
                        box-shadow: 0 15px 45px rgba(7, 19, 21, .06);
                    }

                    /* ================================
                       COVER
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-cover {
                        position: relative;
                        min-height: 390px;
                        overflow: hidden;
                        background:
                            linear-gradient(
                                135deg,
                                #071315 0%,
                                #123b30 50%,
                                #48d597 150%
                            );
                    }

                    [data-h-scope="talent-story-show"] .story-cover-image {
                        width: 100%;
                        height: 100%;
                        min-height: 390px;
                        object-fit: cover;
                        display: block;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-overlay {
                        position: absolute;
                        inset: 0;
                        background:
                            linear-gradient(
                                180deg,
                                rgba(0,0,0,.04) 10%,
                                rgba(0,0,0,.18) 40%,
                                rgba(0,0,0,.82) 100%
                            );
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder::before {
                        content: "";
                        position: absolute;
                        width: 360px;
                        height: 360px;
                        border-radius: 50%;
                        border: 70px solid rgba(255,255,255,.05);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-placeholder::after {
                        content: "";
                        position: absolute;
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        background: rgba(72,213,151,.12);
                        filter: blur(5px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-icon {
                        position: relative;
                        z-index: 2;
                        width: 82px;
                        height: 82px;
                        border-radius: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(255,255,255,.12);
                        border: 1px solid rgba(255,255,255,.18);
                        color: var(--story-accent);
                        font-size: 30px;
                        backdrop-filter: blur(10px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-content {
                        position: absolute;
                        z-index: 3;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 42px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-show"] .story-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-show"] .story-meta-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 12px;
                        border-radius: 999px;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: .02em;
                    }

                    [data-h-scope="talent-story-show"] .story-category {
                        background: var(--story-accent);
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-status {
                        background: rgba(255,255,255,.13);
                        color: #fff;
                        border: 1px solid rgba(255,255,255,.16);
                        backdrop-filter: blur(8px);
                    }

                    [data-h-scope="talent-story-show"] .story-cover-title {
                        max-width: 850px;
                        margin: 0;
                        font-size: clamp(30px, 4vw, 48px);
                        line-height: 1.08;
                        font-weight: 800;
                        letter-spacing: -1.5px;
                    }

                    [data-h-scope="talent-story-show"] .story-cover-date {
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: rgba(255,255,255,.78);
                        font-size: 13px;
                        font-weight: 500;
                    }

                    /* ================================
                       ARTICLE BODY
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-body {
                        padding: 42px;
                    }

                    [data-h-scope="talent-story-show"] .story-author {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        padding-bottom: 28px;
                        margin-bottom: 30px;
                        border-bottom: 1px solid var(--story-border);
                    }

                    [data-h-scope="talent-story-show"] .story-author-avatar {
                        width: 46px;
                        height: 46px;
                        flex: 0 0 46px;
                        border-radius: 50%;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--story-accent-soft);
                        color: var(--story-accent-dark);
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-show"] .story-author-avatar img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-show"] .story-author-label {
                        color: var(--story-muted);
                        font-size: 12px;
                        margin-bottom: 2px;
                    }

                    [data-h-scope="talent-story-show"] .story-author-name {
                        font-size: 14px;
                        font-weight: 800;
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-content {
                        color: #273638;
                        font-size: 17px;
                        line-height: 1.9;
                        overflow-wrap: anywhere;
                    }

                    [data-h-scope="talent-story-show"] .story-content p {
                        margin-bottom: 1.35rem;
                    }

                    [data-h-scope="talent-story-show"] .story-content img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 16px;
                    }

                    [data-h-scope="talent-story-show"] .story-content h1,
                    [data-h-scope="talent-story-show"] .story-content h2,
                    [data-h-scope="talent-story-show"] .story-content h3,
                    [data-h-scope="talent-story-show"] .story-content h4 {
                        color: var(--story-ink);
                        font-weight: 800;
                        line-height: 1.25;
                        margin-top: 2rem;
                        margin-bottom: 1rem;
                    }

                    /* ================================
                       ATTACHMENT
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-attachment {
                        margin-top: 38px;
                        padding: 18px;
                        border: 1px solid var(--story-border);
                        background: #fafcfb;
                        border-radius: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-info {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                        min-width: 0;
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-icon {
                        width: 42px;
                        height: 42px;
                        flex: 0 0 42px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        background: var(--story-accent-soft);
                        color: var(--story-accent-dark);
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-title {
                        font-weight: 750;
                        font-size: 14px;
                        color: var(--story-ink);
                    }

                    [data-h-scope="talent-story-show"] .story-attachment-subtitle {
                        color: var(--story-muted);
                        font-size: 12px;
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-show"] .story-view-media {
                        white-space: nowrap;
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 9px 14px;
                        border-radius: 10px;
                        background: var(--story-ink);
                        color: #fff;
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-show"] .story-view-media:hover {
                        background: var(--story-accent-dark);
                        color: #fff;
                    }

                    /* ================================
                       TAGS
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-tags {
                        margin-top: 35px;
                        padding-top: 25px;
                        border-top: 1px solid var(--story-border);
                    }

                    [data-h-scope="talent-story-show"] .story-tags-label {
                        color: var(--story-muted);
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-show"] .story-tag {
                        display: inline-flex;
                        align-items: center;
                        padding: 7px 12px;
                        margin: 0 7px 7px 0;
                        border-radius: 999px;
                        background: #f0f5f3;
                        color: #41504f;
                        font-size: 12px;
                        font-weight: 650;
                    }

                    /* ================================
                       BOTTOM ACTION
                    ================================= */

                    [data-h-scope="talent-story-show"] .story-bottom {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                        margin-top: 25px;
                        padding: 20px 5px 40px;
                    }

                    [data-h-scope="talent-story-show"] .story-bottom-text {
                        color: var(--story-muted);
                        font-size: 13px;
                    }

                    [data-h-scope="talent-story-show"] .story-bottom-text strong {
                        color: var(--story-ink);
                    }

                    /* ================================
                       RESPONSIVE
                    ================================= */

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-show"] .story-topbar {
                            padding: 17px 0;
                        }

                        [data-h-scope="talent-story-show"] .story-owner-actions {
                            gap: 6px;
                        }

                        [data-h-scope="talent-story-show"] .story-btn-edit {
                            padding: 9px 12px;
                        }

                        [data-h-scope="talent-story-show"] .story-btn-edit span {
                            display: none;
                        }

                        [data-h-scope="talent-story-show"] .story-article {
                            border-radius: 18px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover,
                        [data-h-scope="talent-story-show"] .story-cover-image {
                            min-height: 330px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover-content {
                            padding: 25px 22px;
                        }

                        [data-h-scope="talent-story-show"] .story-cover-title {
                            font-size: 30px;
                            letter-spacing: -1px;
                        }

                        [data-h-scope="talent-story-show"] .story-body {
                            padding: 27px 21px;
                        }

                        [data-h-scope="talent-story-show"] .story-content {
                            font-size: 16px;
                            line-height: 1.8;
                        }

                        [data-h-scope="talent-story-show"] .story-attachment {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-show"] .story-view-media {
                            width: 100%;
                            justify-content: center;
                        }

                        [data-h-scope="talent-story-show"] .story-bottom {
                            align-items: flex-start;
                            flex-direction: column;
                            padding-bottom: 25px;
                        }
                    }
                `}),t.jsx("div",{className:"container-fluid px-3 px-md-4",children:t.jsxs("div",{className:"story-layout",children:[t.jsxs("div",{className:"story-topbar d-flex align-items-center justify-content-between",children:[t.jsxs(r,{href:route("talent.get.profile",e.talent_id),className:"story-back",children:[t.jsx("i",{className:"fas fa-arrow-left"}),t.jsx("span",{children:"Back to Profile"})]}),t.jsx("div",{className:"story-owner-actions",children:u&&t.jsxs(r,{href:route("talent.page.stories.edit",e.id),className:"story-btn story-btn-edit",children:[t.jsx("i",{className:"fas fa-pen"}),t.jsx("span",{children:"Edit Story"})]})})]}),t.jsxs("article",{className:"story-article",children:[t.jsxs("div",{className:"story-cover",children:[i?t.jsxs(t.Fragment,{children:[t.jsx("img",{src:i,alt:e.title,className:"story-cover-image"}),t.jsx("div",{className:"story-cover-overlay"})]}):t.jsx("div",{className:"story-cover-placeholder",children:t.jsx("div",{className:"story-cover-icon",children:t.jsx("i",{className:"fas fa-feather-pointed"})})}),t.jsxs("div",{className:"story-cover-content",children:[t.jsxs("div",{className:"story-meta",children:[((w=e.category)==null?void 0:w.name)&&t.jsxs("span",{className:"story-meta-badge story-category",children:[t.jsx("i",{className:"fas fa-folder-open"}),e.category.name]}),e.status&&t.jsxs("span",{className:"story-meta-badge story-status",children:[t.jsx("i",{className:e.status==="published"?"fas fa-circle-check":"fas fa-file"}),e.status==="published"?"Published":e.status.charAt(0).toUpperCase()+e.status.slice(1)]})]}),t.jsx("h1",{className:"story-cover-title",children:e.title}),p&&t.jsxs("div",{className:"story-cover-date",children:[t.jsx("i",{className:"far fa-calendar"}),p]})]})]}),t.jsxs("div",{className:"story-body",children:[t.jsxs("div",{className:"story-author",children:[t.jsx("div",{className:"story-author-avatar",children:d?t.jsx("img",{src:d,alt:o}):v||t.jsx("i",{className:"fas fa-user"})}),t.jsxs("div",{children:[t.jsx("div",{className:"story-author-label",children:"Written by"}),t.jsx("div",{className:"story-author-name",children:o})]})]}),t.jsx("div",{className:"story-content",dangerouslySetInnerHTML:{__html:e.content||""}}),l&&t.jsxs("div",{className:"story-attachment",children:[t.jsxs("div",{className:"story-attachment-info",children:[t.jsx("div",{className:"story-attachment-icon",children:t.jsx("i",{className:"fas fa-paperclip"})}),t.jsxs("div",{children:[t.jsx("div",{className:"story-attachment-title",children:"Attached Media"}),t.jsx("div",{className:"story-attachment-subtitle",children:"Additional media attached to this story"})]})]}),t.jsxs("a",{href:l,target:"_blank",rel:"noreferrer",className:"story-view-media",children:[t.jsx("i",{className:"fas fa-arrow-up-right-from-square"}),"View Media"]})]}),c.length>0&&t.jsxs("div",{className:"story-tags",children:[t.jsxs("div",{className:"story-tags-label",children:[t.jsx("i",{className:"fas fa-tags me-2"}),"Topics"]}),t.jsx("div",{children:c.map((a,j)=>t.jsxs("span",{className:"story-tag",children:["#",a]},`${a}-${j}`))})]})]})]}),t.jsxs("div",{className:"story-bottom",children:[t.jsxs("div",{className:"story-bottom-text",children:[t.jsx("strong",{children:"My Story"}),t.jsx("span",{className:"mx-2",children:"•"}),"Share your journey, experience and perspective."]}),t.jsxs(r,{href:route("talent.get.profile",e.talent_id),className:"story-back",children:["View Profile",t.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})]})}export{T as default};
