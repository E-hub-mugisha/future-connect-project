import{r as o,j as e,H as f,L as l,a as x}from"./app-C-Atdk99.js";import{A as u}from"./AppLayout-3QMuWNNg.js";function v(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(n=>{var t;return(t=n[0])==null?void 0:t.toUpperCase()}).join(""):"—"}function j(r){if(r.budget_amount==null)return"—";const n=r.budget_currency??"",t=Number(r.budget_amount).toLocaleString();return n?`${n} ${t}`:t}function w({status:r}){const n=(r??"").toLowerCase(),i={open:{cls:"badge-success",label:"Open"},in_progress:{cls:"badge-info",label:"In Progress"},completed:{cls:"badge-muted",label:"Completed"},cancelled:{cls:"badge-danger",label:"Cancelled"},closed:{cls:"badge-danger",label:"Closed"}}[n]??{cls:"badge-muted",label:r?r.charAt(0).toUpperCase()+r.slice(1):"—"};return e.jsx("span",{className:`badge ${i.cls}`,children:i.label})}function N({projects:r}){const n=o.useRef(null),t=Array.isArray(r)?r:(r==null?void 0:r.data)??[],[i,c]=o.useState(null);o.useEffect(()=>{let a;return window.$&&window.$.fn&&window.$.fn.DataTable&&n.current&&(a=window.$(n.current).DataTable({destroy:!0,autoWidth:!1})),()=>{a==null||a.destroy()}},[t]),o.useEffect(()=>{function a(){c(null)}return document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[]);function g(a){x.post(route("admin.projects.verify",a.id))}function m(a){confirm("Delete this project?")&&x.delete(route("admin.projects.destroy",a.id))}const d={total:(r==null?void 0:r.total)??t.length,verified:t.filter(a=>a.verified).length,pending:t.filter(a=>!a.verified).length};return e.jsxs(u,{children:[e.jsx(f,{title:"Manage Projects"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #b3820f;
                    --danger:     #c94a3f;
                    --info:       #2f7dbd;
                }

                .fc-proj-page, .fc-proj-page * { box-sizing: border-box; }
                .fc-proj-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); padding: 32px; min-height: 100%; }
                @media(max-width: 768px) { .fc-proj-page { padding: 20px 16px; } }

                .proj-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 28px; }
                .proj-header h2 { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; margin: 0 0 4px; }
                .proj-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .btn-pill { display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-pill); padding: 11px 22px; font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s; white-space: nowrap; border: none; }
                .btn-pill.primary { background: var(--accent); color: #fff; box-shadow: 0 4px 18px var(--accent-glow); }
                .btn-pill.primary:hover { background: var(--accent-dim); transform: translateY(-1px); }

                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
                .stat-icon { width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--bg-glass2); color: var(--accent); font-size: 1.1rem; }
                .stat-card.pending .stat-icon { background: rgba(232,185,74,0.12); color: var(--warn); }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; margin: 0; }

                .table-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: visible; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }

                .fc-proj-page table.proj-table { width: 100% !important; border-collapse: collapse; margin: 0 !important; }
                .fc-proj-page table.proj-table thead th { text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 600; padding: 14px 22px; border-bottom: 1px solid var(--border); white-space: nowrap; background: transparent !important; }
                .fc-proj-page table.proj-table tbody tr td { background-color: var(--bg-card) !important; padding: 16px 22px; border-bottom: 1px solid var(--border); font-size: 0.85rem; color: var(--text-secondary); vertical-align: middle; }
                .fc-proj-page table.proj-table tbody tr:last-child td { border-bottom: none; }
                .fc-proj-page table.proj-table tbody tr:hover td { background-color: var(--bg-glass) !important; }

                .cell-title h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0 0 3px; }
                .cell-title p { font-size: 0.78rem; color: var(--text-muted); margin: 0; max-width: 260px; }

                .cell-person { display: flex; align-items: center; gap: 12px; }
                .cell-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: var(--bg-glass2); border: 1px solid var(--border-accent); color: var(--accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-weight: 700; font-size: 0.74rem; }
                .cell-person h6 { font-size: 0.83rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-person p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .cell-meta h6 { font-size: 0.83rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-meta p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .badge { display: inline-flex; align-items: center; gap: 5px; border-radius: var(--radius-pill); padding: 4px 12px; font-size: 0.72rem; font-weight: 700; white-space: nowrap; }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }

                .action-menu-wrap { position: relative; display: inline-block; }
                .btn-actions { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); border-radius: var(--radius-pill); padding: 7px 16px; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: border-color 0.2s, color 0.2s, background 0.2s; }
                .btn-actions:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .action-menu { position: absolute; right: 0; top: calc(100% + 6px); background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.12); min-width: 150px; padding: 6px; z-index: 20; }
                .action-menu button, .action-menu a { display: flex; align-items: center; gap: 8px; width: 100%; background: transparent; border: none; text-align: left; padding: 9px 10px; border-radius: 8px; font-size: 0.82rem; font-weight: 500; color: var(--text-secondary); text-decoration: none; cursor: pointer; transition: background 0.15s, color 0.15s; }
                .action-menu button:hover, .action-menu a:hover { background: var(--bg-glass2); color: var(--accent); }
                .action-menu button.danger:hover { background: rgba(201,74,63,0.1); color: var(--danger); }

                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link { min-width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; padding: 0 10px; border-radius: 8px; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: border-color 0.2s, color 0.2s, background 0.2s; }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .proj-table-wrap { overflow-x: auto; }
                    .fc-proj-page table.proj-table { white-space: nowrap; }
                }
            `}),e.jsxs("div",{className:"fc-proj-page",children:[e.jsxs("div",{className:"proj-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Manage Projects"}),e.jsx("p",{children:"Review submitted projects, verify listings, and manage their status."})]}),e.jsxs(l,{href:route("admin.projects.create"),className:"btn-pill primary",children:[e.jsx("i",{className:"bi bi-plus-circle"})," Add Project"]})]}),e.jsxs("div",{className:"stat-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-kanban"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Total Projects"}),e.jsx("h4",{children:d.total})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-patch-check"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Verified"}),e.jsx("h4",{children:d.verified})]})]}),e.jsxs("div",{className:"stat-card pending",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-hourglass-split"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Pending Verification"}),e.jsx("h4",{children:d.pending})]})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsx("div",{className:"proj-table-wrap",children:e.jsxs("table",{className:"datatable-init nowrap proj-table",ref:n,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Budget"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Verified"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:t.map(a=>{var s,p,b;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"cell-title",children:[e.jsx("h6",{children:a.title}),e.jsx("p",{children:a.description?a.description.length>40?`${a.description.slice(0,40)}…`:a.description:""})]})}),e.jsx("td",{children:e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"cell-avatar",children:v((s=a.user)==null?void 0:s.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:((p=a.user)==null?void 0:p.name)??"—"}),e.jsx("p",{children:((b=a.user)==null?void 0:b.email)??""})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"cell-meta",children:[e.jsx("h6",{children:a.category??"—"}),e.jsx("p",{children:a.location??"Remote"})]})}),e.jsx("td",{children:j(a)}),e.jsx("td",{children:e.jsx(w,{status:a.status})}),e.jsx("td",{children:a.verified?e.jsx("span",{className:"badge badge-success",children:"Yes"}):e.jsx("span",{className:"badge badge-warn",children:"No"})}),e.jsx("td",{children:e.jsxs("div",{className:"action-menu-wrap",onClick:h=>h.stopPropagation(),children:[e.jsxs("button",{className:"btn-actions",onClick:()=>c(i===a.id?null:a.id),children:["Actions ",e.jsx("i",{className:"bi bi-chevron-down"})]}),i===a.id&&e.jsxs("div",{className:"action-menu",children:[e.jsxs(l,{href:route("admin.projects.show",a.id),children:[e.jsx("i",{className:"bi bi-eye"})," View"]}),e.jsxs(l,{href:route("admin.projects.edit",a.id),children:[e.jsx("i",{className:"bi bi-pencil"})," Edit"]}),!a.verified&&e.jsxs("button",{type:"button",onClick:()=>g(a),children:[e.jsx("i",{className:"bi bi-patch-check"})," Verify"]}),e.jsxs("button",{type:"button",className:"danger",onClick:()=>m(a),children:[e.jsx("i",{className:"bi bi-trash"})," Delete"]})]})]})})]},a.id)})})]})}),(r==null?void 0:r.links)&&r.links.length>3&&e.jsx("div",{className:"table-footer",children:e.jsx("div",{className:"pagination-nav",children:r.links.map((a,s)=>a.url?e.jsx(l,{href:a.url,preserveState:!0,className:`page-link ${a.active?"active":""}`,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:a.label}})},s):e.jsx("span",{className:"page-link disabled",dangerouslySetInnerHTML:{__html:a.label}},s))})})]})]})]})}export{N as default};
