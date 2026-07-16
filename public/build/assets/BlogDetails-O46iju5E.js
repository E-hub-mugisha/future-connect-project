import{r as B,u as M,j as e,H as I,L as i}from"./app-DAdnLqM_.js";import{G as W}from"./GuestLayout-DypAKmPK.js";function q({rating:t=5}){return e.jsx("span",{className:"tb-stars",children:"★".repeat(Math.round(t)).padEnd(5,"☆")})}function D({blog:t,previous:s,next:d,relatedPosts:x=[],comments:l=[]}){var m,g,h,u,f,v,j,w,y;const[z,L]=B.useState("recommended"),{data:b,setData:c,post:S,processing:p,errors:o,reset:_}=M({name:"",email:"",comment:"",save_info:!1}),C=r=>{r.preventDefault(),S(route("user.blog.comment",t.slug),{onSuccess:()=>_("comment")})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:`${t.title} | Future Connect`}),e.jsxs("div",{className:"tb-blog-page",children:[e.jsx("div",{className:"tb-breadcrumb",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 col-12",children:[e.jsx("nav",{"aria-label":"breadcrumb",className:"page-breadcrumb",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx(i,{href:route("user.home"),children:"Home"})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(i,{href:route("user.blogs"),children:"news & insights"})})]})}),e.jsx("h2",{className:"tb-breadcrumb-title",children:t.title})]})})})}),e.jsx("div",{className:"tb-page-content",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"tb-details-col",children:[e.jsxs("div",{className:"tb-article",children:[e.jsx("div",{className:"tb-article-img",children:e.jsx("img",{src:t.image_url,alt:t.title})}),e.jsxs("div",{className:"tb-article-body",children:[e.jsxs("div",{className:"tb-meta-row",children:[e.jsxs("div",{className:"tb-meta-user",children:[e.jsx("a",{role:"button",tabIndex:0,children:e.jsx("img",{src:(m=t.author)==null?void 0:m.avatar_url,alt:(g=t.author)==null?void 0:g.name})}),e.jsxs("div",{children:[e.jsx("a",{role:"button",tabIndex:0,children:(h=t.author)==null?void 0:h.name}),e.jsxs("div",{className:"tb-meta-sub",children:[e.jsxs("span",{children:[e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),t.created_at_formatted]}),e.jsxs("span",{children:[e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),t.comments_count??l.length," comments"]})]})]})]}),e.jsx("span",{className:"tb-meta-badge",children:((u=t.category)==null?void 0:u.name)??"Uncategorized"})]}),e.jsx("div",{className:"tb-content",dangerouslySetInnerHTML:{__html:t.content}}),((f=t.tags)==null?void 0:f.length)>0&&e.jsx("div",{className:"tb-tags",children:t.tags.map(r=>e.jsx("span",{className:"tb-tag",children:r},r))})]})]}),e.jsxs("div",{className:"tb-author-box",children:[e.jsx("h5",{children:"Author"}),e.jsxs("div",{className:"tb-author-flex",children:[e.jsx("img",{src:(v=t.author)==null?void 0:v.avatar_url,alt:(j=t.author)==null?void 0:j.name}),e.jsxs("div",{children:[e.jsx("h6",{children:(w=t.author)==null?void 0:w.name}),e.jsx("p",{children:(y=t.author)==null?void 0:y.bio})]})]})]}),(s||d)&&e.jsxs("div",{className:"tb-pagination-row",children:[s&&e.jsxs(i,{href:route("user.blog.details",s.slug),className:"tb-page-link",children:[e.jsxs("div",{className:"tb-page-eyebrow",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Previous Post"]}),e.jsx("h6",{children:s.title})]}),d&&e.jsxs(i,{href:route("user.blog.details",d.slug),className:"tb-page-link tb-next",children:[e.jsxs("div",{className:"tb-page-eyebrow",children:["Next Post",e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})]}),e.jsx("h6",{children:d.title})]})]}),e.jsxs("div",{className:"tb-comments",children:[e.jsxs("div",{className:"tb-comments-head",children:[e.jsxs("h5",{children:["Comments (",l.length,")"]}),e.jsxs("div",{className:"tb-sort-inline",children:[e.jsx("span",{children:"Sort By"}),e.jsxs("select",{className:"tb-select",value:z,onChange:r=>L(r.target.value),children:[e.jsx("option",{value:"recommended",children:"Recommended"}),e.jsx("option",{value:"date",children:"Date"})]})]})]}),e.jsx("ul",{className:"tb-review-list",children:l.map(r=>{var n;return e.jsxs("li",{className:"tb-review",children:[e.jsx("img",{src:r.avatar_url,alt:r.name}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tb-review-name",children:[r.name,r.is_author&&e.jsx("span",{className:"tb-author-tag",children:"Author"})]}),r.rating!=null&&e.jsxs("div",{className:"tb-review-meta",children:[e.jsx(q,{rating:r.rating}),e.jsx("span",{children:r.rating.toFixed(1)}),e.jsxs("span",{children:["· ",r.created_at_human]})]}),e.jsx("p",{className:"tb-review-text",children:r.text}),e.jsxs("a",{role:"button",tabIndex:0,className:"tb-reply-btn",children:[e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"9 17 4 12 9 7"}),e.jsx("path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"})]}),"Reply"]}),(n=r.replies)==null?void 0:n.map(a=>e.jsx("div",{className:"tb-review-reply",children:e.jsxs("div",{className:"tb-review",style:{borderBottom:"none",paddingBottom:0},children:[e.jsx("img",{src:a.avatar_url,alt:a.name}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("div",{className:"tb-review-name",children:[a.name," ",a.is_author&&e.jsx("span",{className:"tb-author-tag",children:"Author"})]}),e.jsx("p",{className:"tb-review-text",children:a.text}),e.jsxs("a",{role:"button",tabIndex:0,className:"tb-reply-btn",children:[e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"9 17 4 12 9 7"}),e.jsx("path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"})]}),"Reply"]})]})]})},a.id))]})]},r.id)})}),l.length>0&&e.jsx("div",{className:"tb-load-more",children:e.jsxs("button",{type:"button",className:"tb-load-more-btn",children:["Load More",e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]})]})}),e.jsxs("form",{className:"tb-comment-form",onSubmit:C,children:[e.jsx("h6",{children:"Leave a Comment"}),e.jsxs("div",{className:"tb-form-grid",children:[e.jsxs("div",{className:"tb-form-group",children:[e.jsxs("label",{children:["Name ",e.jsx("span",{className:"tb-required",children:"*"})]}),e.jsx("input",{type:"text",value:b.name,onChange:r=>c("name",r.target.value),required:!0}),o.name&&e.jsx("div",{className:"tb-field-error",children:o.name})]}),e.jsxs("div",{className:"tb-form-group",children:[e.jsxs("label",{children:["Email ",e.jsx("span",{className:"tb-required",children:"*"})]}),e.jsx("input",{type:"email",value:b.email,onChange:r=>c("email",r.target.value),required:!0}),o.email&&e.jsx("div",{className:"tb-field-error",children:o.email})]}),e.jsxs("div",{className:"tb-form-group tb-form-full",children:[e.jsx("label",{children:"Comment"}),e.jsx("textarea",{rows:3,placeholder:"Share your thoughts...",value:b.comment,onChange:r=>c("comment",r.target.value)}),o.comment&&e.jsx("div",{className:"tb-field-error",children:o.comment}),e.jsxs("div",{className:"tb-checkbox-row",children:[e.jsx("input",{type:"checkbox",id:"tbSaveInfo",checked:b.save_info,onChange:r=>c("save_info",r.target.checked)}),e.jsx("label",{htmlFor:"tbSaveInfo",children:"Save my name & email in this browser for the next time I comment"})]}),e.jsx("button",{type:"submit",className:"tb-submit-btn",disabled:p,children:p?"Submitting…":"Submit a Review"})]})]})]})]})]})})})}),x.length>0&&e.jsx("div",{className:"tb-related-section",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"tb-related-head",children:e.jsx("h3",{children:"Related Posts"})}),e.jsx("div",{className:"tb-related-grid",children:x.map(r=>{var n,a,k,N;return e.jsxs("div",{className:"tb-rcard",children:[e.jsxs("div",{className:"tb-rcard-img",children:[e.jsx(i,{href:route("user.blog.details",r.slug),children:e.jsx("img",{src:r.image_url,alt:r.title})}),e.jsx("span",{className:"tb-rcard-cat",children:((n=r.category)==null?void 0:n.name)??"Uncategorized"}),e.jsx("button",{type:"button",className:"tb-rcard-fav","aria-label":"Add to favorites",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),e.jsxs("div",{className:"tb-rcard-body",children:[e.jsx("h3",{className:"tb-rcard-title",children:e.jsx(i,{href:route("user.blog.details",r.slug),children:r.title})}),e.jsx("p",{className:"tb-rcard-excerpt",children:r.excerpt}),e.jsxs("div",{className:"tb-rcard-footer",children:[e.jsx("img",{src:(a=r.author)==null?void 0:a.avatar_url,alt:(k=r.author)==null?void 0:k.name}),e.jsx("a",{href:"#",children:(N=r.author)==null?void 0:N.name}),e.jsx("span",{className:"tb-rcard-dot"}),e.jsx("small",{children:r.created_at_formatted})]})]})]},r.id)})})]})})]}),e.jsx("style",{children:`
                :root {
                    --tb-bg: #0e1618; --tb-surface: #141d20; --tb-surface2: #1a2428;
                    --tb-green: #48d597; --tb-green-dim: rgba(0, 166, 103, .14); --tb-green-glow: rgba(0, 166, 103, .28);
                    --tb-text: #e8f0ed; --tb-muted: #7a9a8e;
                    --tb-border: rgba(0, 166, 103, .16); --tb-border-h: rgba(0, 166, 103, .38);
                    --tb-radius: 14px;
                    --tb-breadcrumb-grad: linear-gradient(145deg, #091315 0%, #0c1e21 65%, #081213 100%);
                    --tb-breadcrumb-grid: rgba(0, 166, 103, .05);
                    --tb-title-color: #fff;
                    --tb-chip-bg: rgba(8, 15, 17, .75);
                    --tb-search-placeholder: #3d5a52;
                }

                [data-h-theme="light"] {
                    --tb-bg: #f6faf8; --tb-surface: #ffffff; --tb-surface2: #eef4f1;
                    --tb-green: #00a667; --tb-green-dim: rgba(0, 166, 103, .08); --tb-green-glow: rgba(0, 166, 103, .18);
                    --tb-text: #10201b; --tb-muted: #5b7a70;
                    --tb-border: rgba(0, 100, 60, .12); --tb-border-h: rgba(0, 100, 60, .3);
                    --tb-breadcrumb-grad: linear-gradient(145deg, #f0f7f4 0%, #e6f3ee 65%, #f0f7f4 100%);
                    --tb-breadcrumb-grid: rgba(0, 100, 60, .06);
                    --tb-title-color: #10201b;
                    --tb-chip-bg: rgba(255, 255, 255, .85);
                    --tb-search-placeholder: #a9c2b8;
                }

                .tb-blog-page, .tb-blog-page *, .tb-blog-page *::before, .tb-blog-page *::after { box-sizing: border-box; }
                .tb-blog-page { background: var(--tb-bg); font-family: 'DM Sans', sans-serif; color: var(--tb-text); padding-bottom: 20px; transition: background .25s, color .25s; }

                .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
                .tb-details-col { max-width: 900px; margin: 0 auto; }

                .tb-breadcrumb {
                    background: var(--tb-breadcrumb-grad); border-bottom: 1px solid var(--tb-border);
                    padding: 34px 0 28px; position: relative; overflow: hidden;
                }
                .tb-breadcrumb::before {
                    content: ''; position: absolute; inset: 0;
                    background-image:
                        linear-gradient(var(--tb-breadcrumb-grid) 1px, transparent 1px),
                        linear-gradient(90deg, var(--tb-breadcrumb-grid) 1px, transparent 1px);
                    background-size: 36px 36px; pointer-events: none;
                }
                .tb-breadcrumb .page-breadcrumb { position: relative; z-index: 1; }
                .tb-breadcrumb .breadcrumb { margin-bottom: 10px; list-style: none; display: flex; padding: 0; }
                .tb-breadcrumb .breadcrumb-item a { color: var(--tb-muted); font-size: 13px; text-decoration: none; transition: color .2s; }
                .tb-breadcrumb .breadcrumb-item a:hover { color: var(--tb-green); }
                .tb-breadcrumb .breadcrumb-item + .breadcrumb-item::before { color: var(--tb-muted); content: "/"; margin: 0 8px; }
                .tb-breadcrumb-title {
                    position: relative; z-index: 1; font-family: 'Syne', sans-serif; font-weight: 800;
                    font-size: clamp(22px, 3vw, 32px); letter-spacing: -1px; color: var(--tb-title-color); margin: 0;
                    max-width: 900px; line-height: 1.25;
                }

                .tb-page-content { padding-top: 40px; }

                .tb-article { background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); overflow: hidden; }
                .tb-article-img { aspect-ratio: 21/9; overflow: hidden; background: var(--tb-surface2); }
                .tb-article-img img { width: 100%; height: 100%; object-fit: cover; }
                .tb-article-body { padding: 30px 34px 34px; }

                .tb-meta-row {
                    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;
                    border-bottom: 1px solid var(--tb-border); padding-bottom: 22px; margin-bottom: 24px;
                }
                .tb-meta-user { display: flex; align-items: center; gap: 12px; }
                .tb-meta-user img { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid var(--tb-border); }
                .tb-meta-user a { color: var(--tb-title-color); font-weight: 600; font-size: 13.5px; text-decoration: none; cursor: pointer; }
                .tb-meta-user a:hover { color: var(--tb-green); }
                .tb-meta-sub { display: flex; align-items: center; gap: 14px; font-size: 12.5px; color: var(--tb-muted); margin-top: 3px; }
                .tb-meta-sub span { display: flex; align-items: center; gap: 5px; }
                .tb-meta-badge { background: var(--tb-green-dim); border: 1px solid var(--tb-border-h); color: var(--tb-green); font-size: 11.5px; font-weight: 600; padding: 6px 14px; border-radius: 99px; }

                .tb-content { font-size: 15px; line-height: 1.85; color: var(--tb-text); }
                .tb-content p { margin-bottom: 1em; }
                .tb-content a { color: var(--tb-green); }
                .tb-content img { max-width: 100%; border-radius: 10px; }

                .tb-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 26px 0 0; }
                .tb-tag { font-size: 12px; color: var(--tb-muted); background: var(--tb-surface2); border: 1px solid var(--tb-border); padding: 6px 13px; border-radius: 99px; transition: color .18s, border-color .18s; }
                .tb-tag:hover { color: var(--tb-green); border-color: var(--tb-border-h); }

                .tb-author-box { background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); padding: 26px; margin-top: 24px; }
                .tb-author-box h5 { font-family: 'Syne', sans-serif; font-size: 14px; color: var(--tb-title-color); margin: 0 0 18px; display: flex; align-items: center; gap: 8px; }
                .tb-author-box h5::before { content: ''; width: 3px; height: 15px; border-radius: 2px; background: var(--tb-green); display: inline-block; }
                .tb-author-flex { display: flex; gap: 18px; align-items: center; }
                .tb-author-flex img { width: 68px; height: 68px; border-radius: 14px; object-fit: cover; border: 1px solid var(--tb-border); flex-shrink: 0; }
                .tb-author-flex h6 { font-family: 'Syne', sans-serif; color: var(--tb-title-color); font-size: 15px; margin: 0 0 6px; }
                .tb-author-flex p { font-size: 13px; color: var(--tb-muted); line-height: 1.6; margin: 0; }

                .tb-pagination-row { display: flex; gap: 16px; margin-top: 24px; }
                .tb-page-link { flex: 1; background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); padding: 18px 20px; text-decoration: none; transition: border-color .2s, transform .2s; display: block; }
                .tb-page-link:hover { border-color: var(--tb-border-h); transform: translateY(-2px); }
                .tb-page-link.tb-next { text-align: right; }
                .tb-page-link .tb-page-eyebrow { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--tb-green); font-weight: 600; margin-bottom: 8px; }
                .tb-page-link.tb-next .tb-page-eyebrow { justify-content: flex-end; }
                .tb-page-link h6 { color: var(--tb-title-color); font-size: 13.5px; font-weight: 600; margin: 0; line-height: 1.4; }

                .tb-comments { background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); padding: 28px; margin-top: 24px; }
                .tb-comments-head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 22px; }
                .tb-comments-head h5 { font-family: 'Syne', sans-serif; color: var(--tb-title-color); font-size: 16px; margin: 0; }
                .tb-sort-inline { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--tb-muted); }
                .tb-select {
                    background: var(--tb-surface2); border: 1px solid var(--tb-border); color: var(--tb-text);
                    border-radius: 8px; padding: 7px 30px 7px 12px; font-size: 12.5px; outline: none; appearance: none;
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%237a9a8e'/></svg>");
                    background-repeat: no-repeat; background-position: right 10px center; cursor: pointer;
                }

                .tb-review-list { list-style: none; margin: 0; padding: 0; }
                .tb-review { display: flex; gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--tb-border); }
                .tb-review:first-child { padding-top: 0; }
                .tb-review img { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid var(--tb-border); flex-shrink: 0; }
                .tb-review-name { font-size: 13.5px; font-weight: 600; color: var(--tb-title-color); display: flex; align-items: center; gap: 8px; }
                .tb-review-meta { display: flex; align-items: center; gap: 10px; font-size: 11.5px; color: var(--tb-muted); margin-top: 2px; }
                .tb-stars { color: #f5b942; font-size: 11px; letter-spacing: 1px; }
                .tb-review-text { font-size: 13.5px; color: var(--tb-muted); line-height: 1.7; margin: 10px 0 10px; }
                .tb-reply-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--tb-green); text-decoration: none; font-weight: 600; cursor: pointer; }
                .tb-reply-btn:hover { text-decoration: underline; }
                .tb-review-reply { margin-left: 58px; margin-top: 6px; }
                .tb-author-tag { font-size: 10.5px; color: var(--tb-green); background: var(--tb-green-dim); border-radius: 99px; padding: 2px 9px; }

                .tb-comment-form { margin-top: 28px; padding-top: 26px; border-top: 1px solid var(--tb-border); }
                .tb-comment-form h6 { font-family: 'Syne', sans-serif; color: var(--tb-title-color); font-size: 14px; margin-bottom: 18px; }
                .tb-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .tb-form-full { grid-column: 1 / -1; }
                .tb-form-group { margin-bottom: 0; }
                .tb-form-group label { display: block; font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .6px; color: var(--tb-muted); margin-bottom: 7px; }
                .tb-required { color: var(--tb-required-color, #e07070); }
                .tb-form-group input, .tb-form-group textarea {
                    width: 100%; background: var(--tb-surface2); border: 1px solid var(--tb-border); border-radius: 10px;
                    color: var(--tb-text); font-size: 13.5px; padding: 11px 14px; outline: none;
                    transition: border-color .2s, background .2s; font-family: 'DM Sans', sans-serif;
                }
                .tb-form-group input:focus, .tb-form-group textarea:focus { border-color: var(--tb-green); background: var(--tb-green-dim); }
                .tb-field-error { font-size: 11.5px; color: #e07070; margin-top: 5px; }
                .tb-checkbox-row { display: flex; align-items: center; gap: 8px; margin: 14px 0 20px; }
                .tb-checkbox-row input { accent-color: var(--tb-green); width: 15px; height: 15px; cursor: pointer; }
                .tb-checkbox-row label { font-size: 12.5px; color: var(--tb-muted); cursor: pointer; margin: 0; }
                .tb-submit-btn {
                    background: var(--tb-green); border: none; color: #fff; font-family: 'Syne', sans-serif;
                    font-weight: 700; font-size: 13.5px; padding: 12px 28px; border-radius: 10px;
                    cursor: pointer; transition: background .2s, transform .2s;
                }
                .tb-submit-btn:hover:not(:disabled) { background: #00c07a; transform: translateY(-2px); }
                .tb-submit-btn:disabled { opacity: .7; cursor: not-allowed; }

                .tb-load-more { display: flex; justify-content: center; margin-top: 26px; }
                .tb-load-more-btn {
                    display: inline-flex; align-items: center; gap: 8px; background: transparent;
                    border: 1.5px solid var(--tb-border-h); color: var(--tb-green); font-family: 'Syne', sans-serif;
                    font-weight: 700; font-size: 13.5px; padding: 11px 26px; border-radius: 10px;
                    text-decoration: none; cursor: pointer; transition: all .2s;
                }
                .tb-load-more-btn:hover { background: var(--tb-green); color: #fff; box-shadow: 0 12px 28px var(--tb-green-glow); transform: translateY(-2px); }

                .tb-related-section { background: var(--tb-bg); padding: 50px 0 60px; border-top: 1px solid var(--tb-border); margin-top: 10px; }
                .tb-related-head { text-align: center; margin-bottom: 30px; }
                .tb-related-head h3 { font-family: 'Syne', sans-serif; font-weight: 800; color: var(--tb-title-color); font-size: 24px; letter-spacing: -.5px; }
                .tb-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
                .tb-rcard { background: var(--tb-surface); border: 1px solid var(--tb-border); border-radius: var(--tb-radius); overflow: hidden; transition: transform .25s, box-shadow .25s, border-color .25s; }
                .tb-rcard:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,.25); border-color: var(--tb-border-h); }
                .tb-rcard-img { position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--tb-surface2); }
                .tb-rcard-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
                .tb-rcard:hover .tb-rcard-img img { transform: scale(1.06); }
                .tb-rcard-cat {
                    position: absolute; top: 12px; left: 12px; background: var(--tb-chip-bg); backdrop-filter: blur(6px);
                    border: 1px solid var(--tb-border-h); color: var(--tb-green); font-size: 11px; font-weight: 600;
                    padding: 5px 12px; border-radius: 99px; text-decoration: none;
                }
                .tb-rcard-fav {
                    position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; border-radius: 8px;
                    background: var(--tb-chip-bg); backdrop-filter: blur(6px); border: 1px solid var(--tb-border);
                    color: var(--tb-muted); display: flex; align-items: center; justify-content: center; cursor: pointer;
                    transition: color .2s, border-color .2s;
                }
                .tb-rcard-fav:hover { color: #ff5c7a; border-color: rgba(255,92,122,.4); }
                .tb-rcard-body { padding: 18px; }
                .tb-rcard-title { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin: 0 0 8px; line-height: 1.35; }
                .tb-rcard-title a { color: var(--tb-title-color); text-decoration: none; transition: color .18s; }
                .tb-rcard-title a:hover { color: var(--tb-green); }
                .tb-rcard-excerpt { font-size: 12.5px; color: var(--tb-muted); line-height: 1.6; margin: 0 0 16px; }
                .tb-rcard-footer { display: flex; align-items: center; gap: 9px; padding-top: 14px; border-top: 1px solid var(--tb-border); }
                .tb-rcard-footer img { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }
                .tb-rcard-footer a { font-size: 11.5px; font-weight: 600; color: var(--tb-text); text-decoration: none; }
                .tb-rcard-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--tb-muted); }
                .tb-rcard-footer small { font-size: 11px; color: var(--tb-muted); }

                @media (max-width: 991px) {
                    .tb-related-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 768px) {
                    .tb-article-body { padding: 24px 20px 28px; }
                    .tb-pagination-row { flex-direction: column; }
                    .tb-page-link.tb-next { text-align: left; }
                    .tb-page-link.tb-next .tb-page-eyebrow { justify-content: flex-start; }
                    .tb-review-reply { margin-left: 0; }
                    .tb-form-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 640px) {
                    .tb-related-grid { grid-template-columns: 1fr; }
                }
            `})]})}D.layout=t=>e.jsx(W,{children:t,title:t.props.blog.title});export{D as default};
