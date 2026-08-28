import{u as I,r as f,j as e,H as W,L as h,a as j}from"./app-CzHhKsxF.js";import{A as P}from"./AppLayout-CgsTf2Wf.js";function X({talents:a,categories:d,stats:i,filters:t}){var w;const n={create:()=>route("admin.talents.create"),index:()=>route("admin.talents.index"),bulk:()=>route("admin.talents.bulk"),show:r=>route("admin.talents.show",r),edit:r=>route("admin.talents.edit",r),destroy:r=>route("admin.talents.destroy",r),connections:()=>route("admin.connections")},{data:c,setData:p,get:F,processing:C}=I({search:(t==null?void 0:t.search)??"",status:(t==null?void 0:t.status)??"",category_id:(t==null?void 0:t.category_id)??"",level:(t==null?void 0:t.level)??"",featured:(t==null?void 0:t.featured)??""}),[g,v]=f.useState([]),[b,L]=f.useState(""),z=a.data.length>0&&g.length===a.data.length,A=r=>{v(r?a.data.map(o=>o.id):[])},E=r=>{v(o=>o.includes(r)?o.filter(s=>s!==r):[...o,r])},S=r=>{r.preventDefault(),F(n.index(),{preserveState:!0,preserveScroll:!0})},M=()=>{j.get(n.index(),{},{preserveState:!1})},B=()=>{if(!b)return alert("Please select a bulk action.");if(g.length===0)return alert("Please select at least one skill.");b==="delete"&&!confirm("Delete selected skills?")||j.post(n.bulk(),{action:b,ids:g},{preserveScroll:!0,onSuccess:()=>v([])})},D=r=>{confirm("Delete this skill?")&&j.delete(n.destroy(r),{preserveScroll:!0})},_=f.useMemo(()=>{if(!a.last_page||a.last_page<=1)return[];const r=a.current_page,o=Math.max(1,r-2),s=Math.min(a.last_page,r+2),x=[];for(let l=o;l<=s;l++)x.push(l);return x},[a.current_page,a.last_page]);return e.jsxs(P,{children:[e.jsx(W,{title:"Skills Management"}),e.jsx("style",{children:J}),e.jsxs("div",{"data-h-scope":"skills",className:"skills-page",children:[((w=t==null?void 0:t.flash)==null?void 0:w.success)&&e.jsxs("div",{className:"flash-success mb-4",children:[e.jsx(N,{}),t.flash.success]}),e.jsxs("div",{className:"page-head",children:[e.jsxs("div",{children:[e.jsx("div",{className:"eyebrow",children:"Management"}),e.jsx("h1",{className:"page-title",children:"Skills Registry"}),e.jsx("p",{className:"page-sub",children:"Manage talent skills, categories, and levels"})]}),e.jsxs(h,{href:n.create(),className:"btn-accent",children:[e.jsx(R,{})," Add Skill"]}),e.jsxs(h,{href:n.connections(),className:"btn-accent",children:[e.jsx(U,{})," Connections requests"]})]}),e.jsxs("div",{className:"stat-grid",children:[e.jsx(u,{tone:"accent",label:"Total Skills",value:i==null?void 0:i.total,sub:"All registered",icon:e.jsx(H,{})}),e.jsx(u,{tone:"success",label:"Active",value:i==null?void 0:i.active,sub:"Currently live",icon:e.jsx(N,{})}),e.jsx(u,{tone:"gold",label:"Featured",value:i==null?void 0:i.featured,sub:"Highlighted profiles",icon:e.jsx(T,{})}),e.jsx(u,{tone:"info",label:"Matched",value:i==null?void 0:i.matched,sub:"Successfully placed",icon:e.jsx($,{})}),e.jsx(u,{tone:"purple",label:"Categories",value:i==null?void 0:i.categories,sub:"Skill types",icon:e.jsx(Y,{})})]}),e.jsx("form",{onSubmit:S,className:"filter-card",children:e.jsxs("div",{className:"filter-grid",children:[e.jsxs("div",{className:"filter-field filter-field--wide",children:[e.jsx("label",{className:"filter-label",children:"Search"}),e.jsx("input",{type:"text",className:"filter-input",placeholder:"Name, email, phone…",value:c.search,onChange:r=>p("search",r.target.value)})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{className:"filter-label",children:"Status"}),e.jsxs("select",{className:"filter-input",value:c.status,onChange:r=>p("status",r.target.value),children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{className:"filter-label",children:"Category"}),e.jsxs("select",{className:"filter-input",value:c.category_id,onChange:r=>p("category_id",r.target.value),children:[e.jsx("option",{value:"",children:"All Categories"}),d.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{className:"filter-label",children:"Level"}),e.jsxs("select",{className:"filter-input",value:c.level,onChange:r=>p("level",r.target.value),children:[e.jsx("option",{value:"",children:"All Levels"}),e.jsx("option",{value:"beginner",children:"Beginner"}),e.jsx("option",{value:"intermediate",children:"Intermediate"}),e.jsx("option",{value:"advanced",children:"Advanced"}),e.jsx("option",{value:"expert",children:"Expert"})]})]}),e.jsxs("div",{className:"filter-field filter-field--sm",children:[e.jsx("label",{className:"filter-label",children:"Featured"}),e.jsxs("select",{className:"filter-input",value:c.featured,onChange:r=>p("featured",r.target.value),children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"1",children:"Yes"}),e.jsx("option",{value:"0",children:"No"})]})]}),e.jsxs("div",{className:"filter-actions",children:[e.jsx("button",{type:"submit",className:"btn-filter",disabled:C,children:"Filter"}),e.jsx("button",{type:"button",className:"btn-reset",onClick:M,children:"Reset"})]})]})}),e.jsxs("div",{className:"ui-card",children:[e.jsxs("div",{className:"card-bar",children:[e.jsxs("span",{className:"card-bar-label",children:["All Skills ",e.jsx("span",{className:"count-badge",children:a.total})]}),e.jsxs("div",{className:"bulk-row",children:[e.jsxs("select",{className:"bulk-select",value:b,onChange:r=>L(r.target.value),children:[e.jsx("option",{value:"",children:"Bulk action"}),e.jsx("option",{value:"activate",children:"Activate"}),e.jsx("option",{value:"deactivate",children:"Deactivate"}),e.jsx("option",{value:"feature",children:"Mark Featured"}),e.jsx("option",{value:"delete",children:"Delete"})]}),e.jsx("button",{className:"btn-bulk-apply",onClick:B,children:"Apply"})]})]}),a.data.length>0?e.jsx("div",{className:"table-scroll",children:e.jsxs("table",{className:"ui-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:44},children:e.jsx("input",{type:"checkbox",checked:z,onChange:r=>A(r.target.checked)})}),e.jsx("th",{children:"Skill"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Language"}),e.jsx("th",{children:"Status"}),e.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),e.jsx("tbody",{children:a.data.map(r=>{var s,x,l;const o=(r.status||"inactive").toLowerCase();return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",checked:g.includes(r.id),onChange:()=>E(r.id)})}),e.jsx("td",{children:e.jsxs("div",{className:"skill-cell",children:[r.image?e.jsx("img",{src:r.image,alt:r.name,className:"skill-avatar"}):e.jsx("div",{className:"skill-avatar-placeholder",children:(x=(s=r.name)==null?void 0:s.charAt(0))==null?void 0:x.toUpperCase()}),e.jsxs("div",{children:[e.jsxs("div",{className:"skill-name",children:[r.name,r.featured&&e.jsx("span",{className:"badge-featured",children:"FEATURED"})]}),e.jsx("div",{className:"skill-meta",children:r.email||r.phone||"—"})]})]})}),e.jsx("td",{className:"col-muted",children:((l=r.category)==null?void 0:l.name)??"—"}),e.jsx("td",{children:r.level?e.jsx("span",{className:"level-pill",children:y(r.level)}):e.jsx("span",{className:"col-muted",children:"—"})}),e.jsx("td",{className:"col-muted",children:r.language??"—"}),e.jsx("td",{children:e.jsxs("span",{className:`badge badge-${o}`,children:[e.jsx("span",{className:"badge-dot"}),y(o)]})}),e.jsx("td",{children:e.jsxs("div",{className:"action-group",children:[e.jsx(h,{href:n.show(r.id),className:"action-btn",title:"View",children:e.jsx(V,{})}),e.jsx(h,{href:n.edit(r.id),className:"action-btn btn-edit",title:"Edit",children:e.jsx(q,{})}),e.jsx("button",{type:"button",className:"action-btn btn-del",title:"Delete",onClick:()=>D(r.id),children:e.jsx(G,{})})]})})]},r.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(O,{})}),e.jsx("h3",{children:"No skills found"}),e.jsx("p",{children:"Try adjusting your filters or add a new skill."})]}),a.last_page>1&&e.jsxs("div",{className:"pg-bar",children:[e.jsxs("span",{className:"pg-info",children:["Showing ",a.from,"–",a.to," of ",a.total," skills"]}),e.jsxs("div",{className:"pg-links",children:[e.jsx(k,{disabled:a.current_page===1,href:m(n,a.current_page-1),children:"‹"}),_.map(r=>e.jsx(k,{active:r===a.current_page,href:m(n,r),children:r},r)),e.jsx(k,{disabled:a.current_page===a.last_page,href:m(n,a.current_page+1),children:"›"})]})]})]})]})]});function m(r,o){const s=new URLSearchParams({...t,page:o});return`${r.index()}?${s.toString()}`}}function y(a){return a&&a.charAt(0).toUpperCase()+a.slice(1)}function u({tone:a,label:d,value:i,sub:t,icon:n}){return e.jsxs("div",{className:"stat-card","data-tone":a,children:[e.jsx("div",{className:"stat-label",children:d}),e.jsx("div",{className:"stat-value",children:Number(i??0).toLocaleString()}),e.jsx("div",{className:"stat-sub",children:t}),e.jsx("div",{className:"stat-icon",children:n})]})}function k({href:a,active:d,disabled:i,children:t}){return i?e.jsx("span",{className:"pg-btn disabled",children:t}):e.jsx(h,{href:a,className:`pg-btn ${d?"active":""}`,preserveScroll:!0,children:t})}function R(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function U(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}function N(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function H(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]})}function T(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}function $(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"})})}function Y(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"})})}function V(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function q(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"})})}function G(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function O(){return e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"})})}const J=`
[data-h-scope="skills"] {
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

.skills-page { padding: 28px 32px; background: var(--canvas); }

.flash-success {
    background: var(--success-bg); border: 1px solid rgba(14,169,107,.22);
    color: #085A3C; border-radius: var(--radius-md); padding: 12px 18px;
    font-size: 13px; display: flex; align-items: center; gap: 9px;
}

.page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
.page-title { font-size: 24px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; margin: 0; }
.page-sub { font-size: 13px; color: var(--text-lo); margin-top: 4px; }

.btn-accent {
    background: var(--accent); color: #fff; border: none;
    border-radius: 10px; font-size: 13px; font-weight: 600;
    padding: 10px 18px; display: inline-flex; align-items: center; gap: 7px;
    transition: background .18s, box-shadow .18s, transform .12s;
    text-decoration: none; cursor: pointer;
}
.btn-accent:hover { background: var(--accent-dark); color: #fff; box-shadow: 0 8px 20px rgba(79,70,229,.28); transform: translateY(-1px); }

.stat-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 720px)  { .stat-grid { grid-template-columns: repeat(2, 1fr); } }

.stat-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 18px 20px 16px;
    position: relative; overflow: hidden; box-shadow: var(--shadow-card);
    transition: box-shadow .2s, transform .2s;
}
.stat-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.stat-card[data-tone="accent"] { --tone: var(--accent); --tone-bg: var(--accent-light); }
.stat-card[data-tone="success"] { --tone: var(--success); --tone-bg: var(--success-bg); }
.stat-card[data-tone="gold"] { --tone: var(--gold); --tone-bg: var(--gold-bg); }
.stat-card[data-tone="info"] { --tone: var(--info); --tone-bg: var(--info-bg); }
.stat-card[data-tone="purple"] { --tone: var(--purple); --tone-bg: var(--purple-bg); }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--tone); }
.stat-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-lo); margin-bottom: 10px; }
.stat-value { font-size: 26px; font-weight: 800; color: var(--text-hi); letter-spacing: -.8px; line-height: 1; }
.stat-sub { font-size: 12px; color: var(--text-lo); margin-top: 6px; }
.stat-icon {
    position: absolute; right: 16px; top: 16px; width: 36px; height: 36px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: var(--tone-bg); color: var(--tone);
}

.filter-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px 20px; margin-bottom: 22px; box-shadow: var(--shadow-card); }
.filter-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr .8fr auto; gap: 14px; align-items: end; }
@media (max-width: 1100px) { .filter-grid { grid-template-columns: repeat(2, 1fr); } }
.filter-field--wide { grid-column: span 1; }
.filter-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--text-lo); margin-bottom: 6px; display: block; }
.filter-input {
    border: 1px solid var(--border-med); border-radius: var(--radius-sm);
    padding: 9px 12px; font-size: 13px; color: var(--text-hi);
    background: #FBFBFE; outline: none; width: 100%; font-family: inherit;
    transition: border-color .15s, background .15s, box-shadow .15s;
}
.filter-input:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(79,70,229,.1); }
.filter-actions { display: flex; gap: 8px; }
.btn-filter {
    background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm);
    padding: 9px 18px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .18s;
}
.btn-filter:hover { background: var(--accent-dark); }
.btn-filter:disabled { opacity: .6; cursor: default; }
.btn-reset {
    background: #F1F2F8; color: var(--text-mid); border: 1px solid var(--border); border-radius: var(--radius-sm);
    padding: 9px 16px; font-size: 13px; cursor: pointer; transition: background .15s;
}
.btn-reset:hover { background: #E7E9F2; color: var(--text-hi); }

.ui-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); }
.card-bar { padding: 14px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.card-bar-label { font-size: 13px; font-weight: 600; color: var(--text-mid); }
.count-badge { background: var(--accent-light); color: var(--accent); border-radius: 6px; font-size: 11px; font-weight: 700; padding: 2px 8px; margin-left: 6px; }
.bulk-row { display: flex; gap: 8px; }
.bulk-select { background: #FBFBFE; border: 1px solid var(--border-med); color: var(--text-mid); border-radius: var(--radius-sm); padding: 7px 12px; font-size: 12.5px; outline: none; cursor: pointer; }
.bulk-select:focus { border-color: var(--accent); }
.btn-bulk-apply { background: #F1F2F8; border: 1px solid var(--border); color: var(--text-mid); border-radius: var(--radius-sm); padding: 7px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all .15s; }
.btn-bulk-apply:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.table-scroll { overflow-x: auto; }
.ui-table { width: 100%; border-collapse: collapse; }
.ui-table thead tr { background: #FAFAFD; }
.ui-table thead th { padding: 11px 18px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--text-lo); white-space: nowrap; text-align: left; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: #FAFAFD; z-index: 1; }
.ui-table thead th:first-child { padding-left: 20px; }
.ui-table tbody tr { border-bottom: 1px solid #F1F2F7; transition: background .12s; }
.ui-table tbody tr:last-child { border-bottom: none; }
.ui-table tbody tr:hover { background: #FAFAFD; }
.ui-table tbody td { padding: 12px 18px; font-size: 13.5px; color: var(--text-mid); vertical-align: middle; }
.ui-table tbody td:first-child { padding-left: 20px; }
.col-muted { color: var(--text-lo); font-size: 13px; }

.skill-cell { display: flex; align-items: center; gap: 11px; }
.skill-avatar { width: 36px; height: 36px; border-radius: 9px; object-fit: cover; border: 1.5px solid var(--border); flex-shrink: 0; }
.skill-avatar-placeholder { width: 36px; height: 36px; border-radius: 9px; background: var(--accent-light); color: var(--accent); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.skill-name { font-weight: 600; color: var(--text-hi); font-size: 13.5px; }
.skill-meta { font-size: 11.5px; color: var(--text-lo); margin-top: 2px; }

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 700; white-space: nowrap; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-active { background: var(--success-bg); color: var(--success); }
.badge-inactive { background: #F1F2F7; color: var(--text-lo); }
.badge-pending { background: var(--warning-bg); color: var(--warning); }
.badge-featured { background: var(--gold-bg); color: var(--gold); border-radius: 5px; font-size: 10px; font-weight: 700; letter-spacing: .04em; padding: 2px 7px; margin-left: 6px; }
.level-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 700; background: var(--info-bg); color: var(--info); }

input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--accent); cursor: pointer; }

.action-group { display: flex; gap: 5px; justify-content: flex-end; }
.action-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: transparent; color: var(--text-lo); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all .15s; text-decoration: none; }
.action-btn:hover { background: var(--accent-light); color: var(--accent); border-color: #C9CDF9; }
.action-btn.btn-edit:hover { background: var(--warning-bg); color: var(--warning); border-color: #F0D28C; }
.action-btn.btn-del:hover { background: var(--danger-bg); color: var(--danger); border-color: #F3B4AE; }

.pg-bar { padding: 13px 20px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.pg-info { font-size: 12.5px; color: var(--text-lo); }
.pg-links { display: flex; gap: 4px; }
.pg-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: #fff; color: var(--text-mid); font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; transition: all .15s; cursor: pointer; }
.pg-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }
.pg-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); font-weight: 700; }
.pg-btn.disabled { opacity: .35; pointer-events: none; }

.empty-state { text-align: center; padding: 64px 24px; }
.empty-icon { width: 52px; height: 52px; border-radius: 50%; background: #F1F2F7; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--text-lo); }
.empty-state h3 { font-size: 14px; font-weight: 700; color: var(--text-mid); margin-bottom: 5px; }
.empty-state p { font-size: 13px; color: var(--text-lo); }

@media (max-width: 900px) {
    .ui-table th:nth-child(4), .ui-table th:nth-child(5),
    .ui-table td:nth-child(4), .ui-table td:nth-child(5) { display: none; }
}
`;export{X as default};
