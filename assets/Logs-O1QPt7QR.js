import{u as O,d as e,ab as V,i as t,ac as I,ad as q,F as x,ae as H,af as Q,ag as d,ah as X,ai as Z,g as C,aj as W,ak as J,al as K,Q as U,t as h,b as Y,y as ee,A as z,am as te,T as re,$ as F,D as ae,B as j,a3 as le,a1 as A,a4 as se,a0 as G,a8 as ne,aa as ie,m as oe}from"./index-CnPdl4-v.js";import{c as ce,g as de,a as ue,e as ge,I as he,f as ve,h as P,i as me,j as fe,r as be}from"./index-BHWPCJ4Y.js";import{D as pe}from"./DocumentTitle-B5juNon7.js";var $e=h('<div class="flex flex-col gap-4"><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full">'),k=h("<option>");const _e=v=>{const[l]=O();return e(U,{ref:n=>{var o;return(o=v.ref)==null?void 0:o.call(v,n)},get icon(){return e(V,{size:24})},get title(){return l("logsSettings")},get children(){var n=$e(),o=n.firstChild,c=o.firstChild,$=o.nextSibling,f=$.firstChild,w=$.nextSibling,b=w.firstChild;return t(o,e(I,{withDivider:!0,get children(){return l("tableSize")}}),c),c.addEventListener("change",r=>q(r.target.value)),t(c,e(x,{get each(){return Object.values(H)},children:r=>(()=>{var s=k();return s.value=r,t(s,()=>l(r)),s})()})),t($,e(I,{withDivider:!0,get children(){return l("logLevel")}}),f),f.addEventListener("change",r=>Q(r.target.value)),t(f,e(x,{get each(){return[d.Info,d.Error,d.Warning,d.Debug,d.Silent]},children:r=>(()=>{var s=k();return s.value=r,t(s,()=>l(r)),s})()})),t(w,e(I,{withDivider:!0,get children(){return l("logMaxRows")}}),b),b.addEventListener("change",r=>X(parseInt(r.target.value))),t(b,e(x,{each:Z,children:r=>(()=>{var s=k();return s.value=r,t(s,r),s})()})),C(()=>c.value=W()),C(()=>f.value=J()),C(()=>b.value=K()),n}})};var Se=h("<span>"),xe=h('<div class="flex h-full flex-col gap-2"><div class="join w-full"><input type=search class="input input-sm join-item input-primary flex-1 flex-shrink-0"></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10"></thead><tbody>'),Ce=h("<tr>"),we=h('<th class=bg-base-200><div class="flex items-center"><div>'),ye=h('<tr class="hover:!bg-primary hover:text-primary-content">'),Le=h("<td class=py-2>");const N=(v,l,n,o)=>{const c=be(v.getValue(l),n);return o({itemRank:c}),c.passed},Me=()=>{const v=Y();if(!ee())return v("/setup",{replace:!0}),null;let l;const[n]=O(),[o,c]=z(""),{logs:$,paused:f,setPaused:w}=te(),[b,r]=re(z([]),{name:"logsTableSorting",storage:localStorage}),s=[{header:n("sequence"),accessorFn:i=>i.seq},{header:n("type"),accessorFn:i=>i.type,cell:({row:i})=>{const p=i.original.type;let u="";switch(p){case d.Error:u="text-error";break;case d.Warning:u="text-warning";break;case d.Info:u="text-info";break;case d.Debug:u="text-success";break}return(()=>{var _=Se();return F(_,u),t(_,()=>`[${i.original.type}]`),_})()}},{header:n("payload"),accessorFn:i=>i.payload}],M=ce({filterFns:{fuzzy:N},state:{get globalFilter(){return o()},get sorting(){return b()}},get data(){return $()},sortDescFirst:!0,columns:s,onGlobalFilterChange:c,onSortingChange:r,globalFilterFn:N,getFilteredRowModel:de(),getSortedRowModel:ue(),getCoreRowModel:ge()});return[e(pe,{get children(){return n("logs")}}),(()=>{var i=xe(),p=i.firstChild,u=p.firstChild,_=p.nextSibling,D=_.firstChild,R=D.firstChild,B=R.nextSibling;return u.$$input=a=>c(a.target.value),t(p,e(j,{class:"btn-primary join-item btn-sm",onClick:()=>w(a=>!a),get icon(){return ae(()=>!!f())()?e(he,{}):e(ve,{})}}),null),t(p,e(j,{class:"btn-primary join-item btn-sm",onClick:()=>l==null?void 0:l.showModal(),get icon(){return e(le,{})}}),null),t(R,e(A,{get each(){return M.getHeaderGroups()},children:a=>{const m=a();return(()=>{var g=Ce();return t(g,e(A,{get each(){return m.headers},children:y=>{const S=y();return(()=>{var E=we(),T=E.firstChild,L=T.firstChild;return se(L,"click",S.column.getToggleSortingHandler(),!0),t(L,()=>P(S.column.columnDef.header,S.getContext())),t(T,()=>({asc:e(me,{}),desc:e(fe,{})})[S.column.getIsSorted()]??null,null),C(()=>F(L,G(S.column.getCanSort()&&"cursor-pointer select-none","flex-1"))),E})()}})),g})()}})),t(B,e(x,{get each(){return M.getRowModel().rows},children:a=>(()=>{var m=ye();return t(m,e(x,{get each(){return a.getVisibleCells()},children:g=>(()=>{var y=Le();return t(y,()=>P(g.column.columnDef.cell,g.getContext())),y})()})),m})()})),t(i,e(_e,{ref:a=>l=a}),null),C(a=>{var m=n("search"),g=G(ne(W()),"table relative rounded-none");return m!==a.e&&ie(u,"placeholder",a.e=m),g!==a.t&&F(D,a.t=g),a},{e:void 0,t:void 0}),i})()]};oe(["input","click"]);export{Me as default};
