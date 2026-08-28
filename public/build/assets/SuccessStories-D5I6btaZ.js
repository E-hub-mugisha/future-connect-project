import{d as F,r as m,u as D,j as s,H as M,L as p,a as y}from"./app-CzHhKsxF.js";import{G as E}from"./GuestLayout-XZ7pV8zu.js";function R(r){return r?r.replace(/<[^>]*>/g,""):""}function I(r,t=100){return r?r.length>t?r.slice(0,t).trimEnd()+"...":r:""}function N({id:r,title:t,onClose:o,children:l,footer:d}){return s.jsxs("div",{className:"modal fade ss-modal show",id:r,style:{display:"block"},tabIndex:"-1",role:"dialog","aria-modal":"true",children:[s.jsx("div",{className:"modal-backdrop fade show",onClick:o,style:{zIndex:1040}}),s.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",style:{zIndex:1050,position:"relative"},children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h5",{className:"modal-title",children:t}),s.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]}),s.jsx("div",{className:"modal-body",children:l}),d&&s.jsx("div",{className:"modal-footer",children:d})]})})]})}function A({stories:r,search:t="",role:o="",roles:l=[]}){var j;const{props:d}=F(),b=(j=d.flash)==null?void 0:j.story_submitted,u=(r==null?void 0:r.data)??[],h=(r==null?void 0:r.links)??[],w=Array.isArray(r==null?void 0:r.links),g=(r==null?void 0:r.total)??u.length,[f,k]=m.useState(t),[S,i]=m.useState(!1),[n,x]=m.useState(null),a=D({title:"",author_name:"",role:"",excerpt:"",content:"",thumbnail:null});function z(e){e.preventDefault(),a.post(route("user.success-stories.store"),{forceFormData:!0,onSuccess:()=>{i(!1),a.reset()},onError:()=>{i(!0)}})}function _(e){e.preventDefault(),y.get(route("user.success-stories"),{search:f||void 0,role:o||void 0})}function v(e){return route("user.success-stories",e)}const C=!!(o||t);return s.jsxs(s.Fragment,{children:[s.jsx(M,{title:"Success Stories | Future Connect"}),s.jsx("style",{children:`
        :root {
          --ss-bg: #0e1618;
          --ss-surface: #141d20;
          --ss-surface2: #1a2428;
          --ss-green: #48d597;
          --ss-green-dim: rgba(0, 166, 103, .14);
          --ss-green-glow: rgba(0, 166, 103, .28);
          --ss-text: #e8f0ed;
          --ss-muted: #7a9a8e;
          --ss-border: rgba(0, 166, 103, .16);
          --ss-border-h: rgba(0, 166, 103, .38);
          --ss-radius: 14px;
          --ss-btn-text: #06120d;
          --ss-heading: #ffffff;
          --ss-placeholder: #3d5a52;
          --ss-error: #ff8a8a;
          --ss-card-shadow: rgba(0, 0, 0, .4);
          --ss-quote-bg: rgba(8, 15, 17, .75);
          --ss-hero-grad: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
        }

        /* ── LIGHT THEME OVERRIDES ──────────────────────
           Driven by the same [data-h-theme="light"] attribute
           the header sets on <html> (and persists via
           localStorage 'fc-theme'), so this page just follows
           whatever the header's toggle already decided. ── */
        [data-h-theme="light"] {
          --ss-bg: #f6faf8;
          --ss-surface: #ffffff;
          --ss-surface2: #eef4f1;
          --ss-green: #00a667;
          --ss-green-dim: rgba(0, 166, 103, .08);
          --ss-green-glow: rgba(0, 166, 103, .18);
          --ss-text: #10201b;
          --ss-muted: #5b7a70;
          --ss-border: rgba(0, 100, 60, .12);
          --ss-border-h: rgba(0, 100, 60, .3);
          --ss-btn-text: #ffffff;
          --ss-heading: #10201b;
          --ss-placeholder: #a9c2b8;
          --ss-error: #c94040;
          --ss-card-shadow: rgba(16, 32, 27, .12);
          --ss-quote-bg: rgba(255, 255, 255, .85);
          --ss-hero-grad: linear-gradient(145deg, #eef7f2 0%, #ffffff 65%, #f2f8f5 100%);
        }

        [data-h-theme="light"] .ss-modal .btn-close {
          filter: none;
          opacity: .6;
        }

        [data-h-theme="light"] .ss-card:hover,
        [data-h-theme="light"] .ss-cta-banner,
        [data-h-theme="light"] .ss-filter-bar {
          box-shadow: 0 1px 3px rgba(16, 32, 27, .05);
        }

        .ss-page,
        .ss-page *,
        .ss-page *::before,
        .ss-page *::after {
          box-sizing: border-box;
        }

        .ss-page {
          background: var(--ss-bg);
          font-family: 'DM Sans', sans-serif;
          color: var(--ss-text);
          padding-bottom: 60px;
          transition: background .25s ease;
        }

        /* ── Breadcrumb / hero ── */
        .ss-breadcrumb {
          background: var(--ss-hero-grad);
          border-bottom: 1px solid var(--ss-border);
          padding: 44px 0 36px;
          position: relative;
          overflow: hidden;
          text-align: center;
          transition: background .25s ease;
        }

        .ss-breadcrumb::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 166, 103, .05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 166, 103, .05) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .ss-breadcrumb .page-breadcrumb {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .ss-breadcrumb .breadcrumb {
          margin-bottom: 14px;
        }

        .ss-breadcrumb .breadcrumb-item a {
          color: var(--ss-muted);
          font-size: 13px;
          text-decoration: none;
          transition: color .2s;
        }

        .ss-breadcrumb .breadcrumb-item a:hover {
          color: var(--ss-green);
        }

        .ss-breadcrumb .breadcrumb-item.active,
        .ss-breadcrumb .breadcrumb-item[aria-current="page"] {
          color: var(--ss-green);
          font-size: 13px;
        }

        .ss-breadcrumb .breadcrumb-item+.breadcrumb-item::before {
          color: var(--ss-muted);
          content: "/";
        }

        .ss-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 166, 103, .1);
          border: 1px solid rgba(0, 166, 103, .2);
          border-radius: 99px;
          padding: 5px 14px;
          font-size: 11.5px;
          color: var(--ss-green);
          font-weight: 500;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .ss-pill::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ss-green);
          display: inline-block;
        }

        .ss-breadcrumb-title {
          position: relative;
          z-index: 1;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 3.6vw, 40px);
          letter-spacing: -1px;
          color: var(--ss-heading);
          margin: 0 0 10px;
        }

        .ss-breadcrumb-sub {
          position: relative;
          z-index: 1;
          color: var(--ss-muted);
          font-size: 14px;
          max-width: 560px;
          margin: 0 auto 22px;
          line-height: 1.6;
        }

        .ss-hero-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          padding: 12px 22px;
          border-radius: 10px;
          border: none;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }

        .ss-hero-cta:hover {
          background: #00c07a;
          color: var(--ss-btn-text);
          transform: translateY(-2px);
        }

        /* ── Page content ── */
        .ss-page-content {
          padding-top: 40px;
        }

        /* ── CTA banner ── */
        .ss-cta-banner {
          background: linear-gradient(120deg, var(--ss-surface) 0%, var(--ss-surface2) 100%);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          padding: 30px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          transition: background .25s, border-color .25s;
        }

        .ss-cta-banner::after {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--ss-green-glow) 0%, transparent 70%);
          pointer-events: none;
        }

        .ss-cta-banner-text {
          position: relative;
          z-index: 1;
          max-width: 560px;
        }

        .ss-cta-banner-text h4 {
          font-family: 'Syne', sans-serif;
          color: var(--ss-heading);
          font-weight: 700;
          font-size: 19px;
          margin: 0 0 6px;
        }

        .ss-cta-banner-text p {
          color: var(--ss-muted);
          font-size: 13.5px;
          margin: 0;
          line-height: 1.6;
        }

        .ss-cta-banner-btn {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          padding: 13px 24px;
          border-radius: 10px;
          border: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .ss-cta-banner-btn:hover {
          background: #00c07a;
          transform: translateY(-2px);
        }

        /* ── Filter bar ── */
        .ss-filter-bar {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 30px;
          transition: background .25s, border-color .25s;
        }

        .ss-search-form {
          position: relative;
          flex: 1;
          min-width: 220px;
        }

        .ss-search-form input {
          width: 100%;
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          border-radius: 10px;
          color: var(--ss-text);
          font-size: 13.5px;
          padding: 11px 40px 11px 14px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .ss-search-form input::placeholder {
          color: var(--ss-placeholder);
        }

        .ss-search-form input:focus {
          border-color: var(--ss-green);
          background: rgba(0, 166, 103, .06);
        }

        .ss-search-form button {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: var(--ss-green);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s;
        }

        .ss-search-form button:hover {
          background: #00c07a;
        }

        .ss-role-chips {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ss-chip {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--ss-muted);
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          padding: 8px 15px;
          border-radius: 99px;
          text-decoration: none;
          transition: all .18s;
          white-space: nowrap;
        }

        .ss-chip:hover {
          color: var(--ss-heading);
          border-color: var(--ss-border-h);
        }

        .ss-chip.active {
          color: var(--ss-heading);
          background: var(--ss-green-dim);
          border-color: var(--ss-border-h);
          font-weight: 600;
        }

        .ss-clear-filters {
          font-size: 12.5px;
          color: var(--ss-green);
          text-decoration: none;
          white-space: nowrap;
        }

        .ss-clear-filters:hover {
          text-decoration: underline;
        }

        /* ── Results head ── */
        .ss-results-count {
          font-size: 13.5px;
          color: var(--ss-muted);
          margin-bottom: 20px;
        }

        .ss-results-count strong {
          color: var(--ss-text);
          font-weight: 600;
        }

        /* ── Story cards ── */
        .ss-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ss-card {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          border-radius: var(--ss-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .25s, box-shadow .25s, border-color .25s, background .25s;
          cursor: pointer;
        }

        .ss-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 44px var(--ss-card-shadow);
          border-color: var(--ss-border-h);
        }

        .ss-card-img {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: var(--ss-surface2);
        }

        .ss-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s;
        }

        .ss-card:hover .ss-card-img img {
          transform: scale(1.06);
        }

        .ss-card-quote-icon {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--ss-quote-bg);
          backdrop-filter: blur(6px);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }

        .ss-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ss-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16.5px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .ss-card-title button {
          background: none;
          border: none;
          padding: 0;
          color: var(--ss-heading);
          text-decoration: none;
          transition: color .18s;
          text-align: left;
          font-family: 'Syne', sans-serif;
          font-size: 16.5px;
          font-weight: 700;
          line-height: 1.35;
        }

        .ss-card:hover .ss-card-title button {
          color: var(--ss-green);
        }

        .ss-card-excerpt {
          font-size: 13px;
          color: var(--ss-muted);
          line-height: 1.65;
          margin: 0 0 20px;
          flex: 1;
          font-style: italic;
        }

        .ss-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--ss-border);
        }

        .ss-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          flex-shrink: 0;
          background: var(--ss-green-dim);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ss-card-person {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ss-card-person-name {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ss-text);
        }

        .ss-card-person-role {
          font-size: 11px;
          color: var(--ss-muted);
          margin-top: 1px;
        }

        .ss-card-arrow {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid var(--ss-border);
          color: var(--ss-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all .2s;
          flex-shrink: 0;
          background: none;
          cursor: pointer;
        }

        .ss-card:hover .ss-card-arrow {
          color: var(--ss-green);
          border-color: var(--ss-border-h);
          transform: translateX(2px);
        }

        /* ── Empty state ── */
        .ss-empty {
          text-align: center;
          padding: 70px 20px;
          background: var(--ss-surface);
          border: 1px dashed var(--ss-border);
          border-radius: var(--ss-radius);
        }

        .ss-empty i {
          font-size: 34px;
          color: var(--ss-muted);
          margin-bottom: 12px;
          display: inline-block;
        }

        .ss-empty h5 {
          color: var(--ss-heading);
          font-family: 'Syne', sans-serif;
          margin-bottom: 6px;
        }

        .ss-empty p {
          color: var(--ss-muted);
          font-size: 13.5px;
          margin: 0;
        }

        /* ── Pagination ── */
        .ss-pagination-wrap {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .ss-pagination-wrap nav ul.pagination {
          gap: 6px;
        }

        .ss-pagination-wrap .page-link {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border);
          color: var(--ss-muted);
          border-radius: 8px !important;
          margin: 0;
        }

        .ss-pagination-wrap .page-item.active .page-link {
          background: var(--ss-green);
          border-color: var(--ss-green);
          color: var(--ss-btn-text);
        }

        .ss-pagination-wrap .page-link:hover {
          color: var(--ss-green);
          border-color: var(--ss-border-h);
        }

        /* ── Modals ── */
        .ss-modal .modal-content {
          background: var(--ss-surface);
          border: 1px solid var(--ss-border-h);
          border-radius: var(--ss-radius);
          color: var(--ss-text);
        }

        .ss-modal .modal-header {
          border-bottom: 1px solid var(--ss-border);
          padding: 20px 24px;
        }

        .ss-modal .modal-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: var(--ss-heading);
          font-size: 18px;
        }

        .ss-modal .modal-body {
          padding: 24px;
        }

        .ss-modal .modal-footer {
          border-top: 1px solid var(--ss-border);
          padding: 16px 24px;
        }

        .ss-modal .btn-close {
          filter: invert(1) grayscale(1) brightness(1.6);
          opacity: .7;
        }

        .ss-form-label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ss-muted);
          margin-bottom: 6px;
          display: block;
        }

        .ss-form-control {
          width: 100%;
          background: var(--ss-surface2);
          border: 1px solid var(--ss-border);
          border-radius: 9px;
          color: var(--ss-text);
          font-size: 13.5px;
          padding: 11px 14px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .ss-form-control::placeholder {
          color: var(--ss-placeholder);
        }

        .ss-form-control:focus {
          border-color: var(--ss-green);
          background: rgba(0, 166, 103, .06);
        }

        textarea.ss-form-control {
          resize: vertical;
          min-height: 90px;
        }

        .ss-form-group {
          margin-bottom: 16px;
        }

        .ss-form-error {
          color: var(--ss-error);
          font-size: 11.5px;
          margin-top: 5px;
        }

        .ss-btn-primary {
          background: var(--ss-green);
          color: var(--ss-btn-text);
          font-weight: 700;
          font-size: 13.5px;
          border: none;
          border-radius: 9px;
          padding: 11px 22px;
          cursor: pointer;
          transition: background .2s;
        }

        .ss-btn-primary:hover {
          background: #00c07a;
        }

        .ss-btn-primary:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .ss-btn-secondary {
          background: transparent;
          color: var(--ss-muted);
          font-weight: 600;
          font-size: 13.5px;
          border: 1px solid var(--ss-border);
          border-radius: 9px;
          padding: 11px 22px;
          cursor: pointer;
          transition: all .2s;
        }

        .ss-btn-secondary:hover {
          color: var(--ss-text);
          border-color: var(--ss-border-h);
        }

        .ss-alert-success {
          background: rgba(0, 166, 103, .1);
          border: 1px solid var(--ss-border-h);
          color: var(--ss-green);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          margin-bottom: 24px;
        }

        /* Detail modal specific */
        .ss-detail-img {
          width: 100%;
          aspect-ratio: 16/8;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
          background: var(--ss-surface2);
        }

        .ss-detail-person {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--ss-border);
        }

        .ss-detail-content {
          font-size: 14px;
          line-height: 1.8;
          color: var(--ss-text);
        }

        .ss-detail-content p {
          margin-bottom: 14px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 991px) {
          .ss-grid-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ss-grid-row {
            grid-template-columns: 1fr;
          }

          .ss-filter-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .ss-cta-banner {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .ss-cta-banner-btn {
            justify-content: center;
          }
        }
      `}),s.jsxs("div",{className:"ss-page",children:[s.jsx("div",{className:"ss-breadcrumb",children:s.jsxs("div",{className:"container",children:[s.jsx("nav",{"aria-label":"breadcrumb",className:"page-breadcrumb",children:s.jsxs("ol",{className:"breadcrumb",children:[s.jsx("li",{className:"breadcrumb-item",children:s.jsx(p,{href:route("user.home"),children:"Home"})}),s.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"Success Stories"})]})}),s.jsx("div",{className:"ss-pill",children:"Real People, Real Results"}),s.jsx("h2",{className:"ss-breadcrumb-title",children:"Success Stories"}),s.jsx("p",{className:"ss-breadcrumb-sub",children:"Meet the talents and clients who found real opportunity through Future Connect."}),s.jsxs("button",{type:"button",className:"ss-hero-cta",onClick:()=>i(!0),children:[s.jsx("i",{className:"feather-edit-3"})," Share Your Story"]})]})}),s.jsx("div",{className:"ss-page-content",children:s.jsxs("div",{className:"container",children:[b&&s.jsxs("div",{className:"ss-alert-success",children:[s.jsx("i",{className:"feather-check-circle"}),b]}),s.jsxs("div",{className:"ss-filter-bar",children:[s.jsxs("form",{className:"ss-search-form",onSubmit:_,children:[s.jsx("input",{type:"text",name:"search",value:f,onChange:e=>k(e.target.value),placeholder:"Search success stories..."}),s.jsx("button",{type:"submit","aria-label":"Search",children:s.jsx("i",{className:"feather-search"})})]}),l.length>0&&s.jsxs("div",{className:"ss-role-chips",children:[s.jsx(p,{href:v(t?{search:t}:{}),className:`ss-chip ${o?"":"active"}`,children:"All"}),l.map(e=>s.jsx(p,{href:v(t?{role:e,search:t}:{role:e}),className:`ss-chip ${o===e?"active":""}`,children:e},e))]}),C&&s.jsxs(p,{href:route("user.success-stories"),className:"ss-clear-filters",children:[s.jsx("i",{className:"feather-x"})," Clear"]})]}),s.jsxs("div",{className:"ss-results-count",children:["Showing ",s.jsx("strong",{children:g})," stor",g===1?"y":"ies",o&&s.jsxs(s.Fragment,{children:[" from ",s.jsx("strong",{children:o})]}),t&&s.jsxs(s.Fragment,{children:[" for “",s.jsx("strong",{children:t}),"”"]})]}),u.length>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"ss-grid-row",children:u.map(e=>s.jsx("div",{className:"ss-card ss-card-trigger",role:"button",tabIndex:0,onClick:()=>x(e),onKeyPress:c=>{(c.key==="Enter"||c.key===" ")&&x(e)},children:s.jsxs("div",{className:"ss-card-body",children:[s.jsx("h3",{className:"ss-card-title",children:s.jsx("button",{type:"button","aria-label":`Read full story: ${e.title}`,children:e.title})}),s.jsxs("p",{className:"ss-card-excerpt",children:["“",I(R(e.excerpt),100),"”"]}),s.jsxs("div",{className:"ss-card-footer",children:[s.jsxs("div",{className:"ss-card-person",children:[s.jsx("div",{className:"ss-avatar",children:e.author_name?e.author_name.charAt(0).toUpperCase():"?"}),s.jsxs("div",{children:[s.jsx("div",{className:"ss-card-person-name",children:e.author_name}),e.role&&s.jsx("div",{className:"ss-card-person-role",children:e.role})]})]}),s.jsx("button",{type:"button",className:"ss-card-arrow","aria-label":"Read more",children:s.jsx("i",{className:"feather-arrow-up-right"})})]})]})},e.slug))}),w&&h.length>3&&s.jsx("div",{className:"ss-pagination-wrap",children:s.jsx("nav",{children:s.jsx("ul",{className:"pagination",children:h.map((e,c)=>s.jsx("li",{className:`page-item ${e.active?"active":""} ${e.url?"":"disabled"}`,children:s.jsx("button",{type:"button",className:"page-link",disabled:!e.url,onClick:()=>e.url&&y.get(e.url,{},{preserveScroll:!0}),dangerouslySetInnerHTML:{__html:e.label}})},c))})})})]}):s.jsxs("div",{className:"ss-empty",children:[s.jsx("i",{className:"feather-star"}),s.jsx("h5",{children:"No success stories found"}),s.jsx("p",{children:"Try adjusting your search or filters."})]}),s.jsxs("div",{className:"ss-cta-banner",children:[s.jsxs("div",{className:"ss-cta-banner-text",children:[s.jsx("h4",{children:"Have your own success story?"}),s.jsx("p",{children:"Whether you found your next opportunity or your ideal talent through Future Connect, we'd love to feature your story and inspire others in the community."})]}),s.jsxs("button",{type:"button",className:"ss-cta-banner-btn",onClick:()=>i(!0),children:[s.jsx("i",{className:"feather-plus-circle"})," Submit Your Story"]})]})]})})]}),S&&s.jsx(N,{id:"ssSubmitModal",title:"Share Your Success Story",onClose:()=>i(!1),footer:s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"ss-btn-secondary",onClick:()=>i(!1),children:"Cancel"}),s.jsx("button",{type:"submit",form:"ssSubmitForm",className:"ss-btn-primary",disabled:a.processing,children:a.processing?"Submitting…":"Submit Story"})]}),children:s.jsxs("form",{id:"ssSubmitForm",onSubmit:z,children:[s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_title",children:"Story Title"}),s.jsx("input",{type:"text",id:"ss_title",className:"ss-form-control",placeholder:"e.g. How I landed my first remote client",value:a.data.title,onChange:e=>a.setData("title",e.target.value),required:!0}),a.errors.title&&s.jsx("div",{className:"ss-form-error",children:a.errors.title})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_author_name",children:"Your Name"}),s.jsx("input",{type:"text",id:"ss_author_name",className:"ss-form-control",placeholder:"Full name",value:a.data.author_name,onChange:e=>a.setData("author_name",e.target.value),required:!0}),a.errors.author_name&&s.jsx("div",{className:"ss-form-error",children:a.errors.author_name})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_role",children:"Your Role"}),s.jsx("input",{type:"text",id:"ss_role",className:"ss-form-control",placeholder:"e.g. Freelance Designer, Client, Agency",value:a.data.role,onChange:e=>a.setData("role",e.target.value)}),a.errors.role&&s.jsx("div",{className:"ss-form-error",children:a.errors.role})]})})]}),s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_excerpt",children:"Short Summary"}),s.jsx("textarea",{id:"ss_excerpt",className:"ss-form-control",rows:2,placeholder:"A one or two sentence teaser shown on the story card",value:a.data.excerpt,onChange:e=>a.setData("excerpt",e.target.value),required:!0}),a.errors.excerpt&&s.jsx("div",{className:"ss-form-error",children:a.errors.excerpt})]}),s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_content",children:"Full Story"}),s.jsx("textarea",{id:"ss_content",className:"ss-form-control",rows:6,placeholder:"Tell us the full story...",value:a.data.content,onChange:e=>a.setData("content",e.target.value),required:!0}),a.errors.content&&s.jsx("div",{className:"ss-form-error",children:a.errors.content})]}),s.jsxs("div",{className:"ss-form-group",children:[s.jsx("label",{className:"ss-form-label",htmlFor:"ss_thumbnail",children:"Photo (optional)"}),s.jsx("input",{type:"file",id:"ss_thumbnail",className:"ss-form-control",accept:"image/*",onChange:e=>a.setData("thumbnail",e.target.files[0]??null)}),a.errors.thumbnail&&s.jsx("div",{className:"ss-form-error",children:a.errors.thumbnail})]})]})}),n&&s.jsxs(N,{id:"ssDetailModal",title:n.title,onClose:()=>x(null),children:[s.jsx("img",{src:n.thumbnail_url||"/assets/img/blog/blog-large-01.jpg",alt:n.title,className:"ss-detail-img"}),s.jsxs("div",{className:"ss-detail-person",children:[s.jsx("div",{className:"ss-avatar",style:{width:44,height:44,fontSize:16},children:n.author_name?n.author_name.charAt(0).toUpperCase():"?"}),s.jsxs("div",{children:[s.jsx("div",{className:"ss-card-person-name",style:{fontSize:14},children:n.author_name}),s.jsx("div",{className:"ss-card-person-role",children:n.role||""})]})]}),s.jsx(H,{content:n.content})]})]})}function H({content:r}){const t=m.useMemo(()=>r?/<[a-z][\s\S]*>/i.test(r)?r:r.split(/\n{2,}/).map(o=>`<p>${o.replace(/\n/g,"<br>")}</p>`).join(""):"",[r]);return s.jsx("div",{className:"ss-detail-content",dangerouslySetInnerHTML:{__html:t}})}A.layout=r=>s.jsx(E,{children:r,title:"Success Stories | Future Connect"});export{A as default};
