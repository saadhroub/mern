(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(24),o=n.n(r),i=(n(71),n(146)),l=n(14),s=n(33),j=n(2),u=n(13),b=n(139),d=n(144),h=n(148),O=n(145),x=n(38),p=n(147),f=n(150),m=n(135),g=n(149),v=n(151),y=n(134),C=n(102),k=n(136),w=n(21),A=n.n(w),F=n(4),S=function(t){var e=Object(a.useState)(""),n=Object(l.a)(e,2),c=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),s=i[0],j=i[1],b=Object(a.useState)(),d=Object(l.a)(b,2),h=d[0],O=d[1];Object(a.useEffect)((function(){t.id&&A.a.get("http://localhost:8000/api/authors/".concat(t.id)).then((function(t){return r(t.data.name)})).catch((function(t){return j(!0)}))}),[t.id]);return Object(F.jsx)(F.Fragment,{children:s?Object(F.jsxs)(y.a,{style:{width:"50%",margin:"0 auto"},children:[Object(F.jsx)("h3",{children:"Wrong Id "}),Object(F.jsx)("p",{children:"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"}),Object(F.jsx)(C.a,{size:"large",variant:"contained",onClick:function(t){return Object(u.b)("/authors/new")},children:"Add New Author"})]}):Object(F.jsxs)(y.a,{style:{width:"50%",margin:"0 auto"},children:[Object(F.jsxs)(f.a,{children:[Object(F.jsx)(v.a,{htmlFor:"name",children:"Author Name"}),Object(F.jsx)(g.a,{id:"name",value:c,onChange:function(t){return r(t.target.value)},"aria-describedby":"my-helper-text"}),Object(F.jsx)(m.a,{children:h?h.name.message:""})]}),Object(F.jsxs)(f.a,{children:[Object(F.jsx)(v.a,{htmlFor:"nationality",children:"Nationality"}),Object(F.jsx)(g.a,{id:"nationality","aria-describedby":"my-helper-text"}),Object(F.jsx)(m.a,{})]}),Object(F.jsxs)(k.a,{style:{margin:"0 auto"},color:"primary",children:[Object(F.jsx)(C.a,{size:"large",variant:"contained",onClick:function(t){return Object(u.b)("/authors")},children:"Cancel"}),Object(F.jsx)(C.a,{size:"large",variant:"contained",onClick:function(e){t.id?A.a.put("http://localhost:8000/api/authors/".concat(t.id),{name:c}).then((function(t){return Object(u.b)("/authors")})).catch((function(t){O(t.response.data.errors)})):A.a.post("http://localhost:8000/api/authors",{name:c}).then((function(t){return Object(u.b)("/authors")})).catch((function(t){O(t.response.data.errors)}))},children:"Create / Update"})]})]})})},z=n(5),N=n(141),W=n(143),D=n(137),E=n(140),I=n(142),_=n(138),B=n(103),J=function(t){var e=t.onDelete,n=t.id;return Object(F.jsx)(C.a,{size:"medium",variant:"outlined",onClick:function(t){return A.a.delete("http://localhost:8000/api/authors/".concat(n)).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),void e(n)},children:"Delete"})},L=Object(z.a)((function(t){return{head:{backgroundColor:t.palette.common.black,color:t.palette.common.white},body:{fontSize:14}}}))(D.a),P=Object(z.a)((function(t){return{root:{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover}}}}))(_.a),T=Object(b.a)({table:{minWidth:700}});function G(){var t=T(),e=Object(a.useState)([]),n=Object(l.a)(e,2),c=n[0],r=n[1];Object(a.useEffect)((function(){A.a.get("http://localhost:8000/api/authors").then((function(t){console.log(t.data),r(t.data)})).catch((function(t){return console.log(t)}))}),[]);var o=function(t){r(c.filter((function(e){return e._id!=t})))};return Object(F.jsx)(E.a,{component:B.a,children:Object(F.jsxs)(N.a,{className:t.table,"aria-label":"customized table",children:[Object(F.jsx)(I.a,{children:Object(F.jsxs)(_.a,{children:[Object(F.jsx)(L,{align:"center",children:"Author"}),Object(F.jsx)(L,{align:"center",children:"Actions available"})]})}),Object(F.jsx)(W.a,{children:c.map((function(t,e){return Object(F.jsxs)(P,{children:[Object(F.jsx)(L,{align:"center",component:"th",scope:"row",children:t.name}),Object(F.jsx)(L,{align:"center",children:Object(F.jsxs)(k.a,{style:{margin:"0 auto"},color:"primary",children:[Object(F.jsx)(C.a,{size:"medium",variant:"outlined",onClick:function(e){return Object(u.b)("/authors/edit/".concat(t._id))},children:"Edit"}),Object(F.jsx)(J,{onDelete:o,id:t._id})]})})]},e)}))})]})})}var M=["children","value","index"];function U(t){var e=t.children,n=t.value,a=t.index,c=Object(j.a)(t,M);return Object(F.jsx)("div",Object(s.a)(Object(s.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(F.jsx)(p.a,{p:3,children:Object(F.jsx)(x.a,{children:e})})}))}function q(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}var H=Object(b.a)((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper}}}));function K(){var t=H(),e=c.a.useState(0),n=Object(l.a)(e,2),a=n[0],r=n[1];return Object(F.jsxs)("div",{className:t.root,children:[Object(F.jsx)(d.a,{position:"static",children:Object(F.jsxs)(h.a,{value:a,variant:"fullWidth",onChange:function(t,e){r(e),0===e&&Object(u.b)("/authors"),1===e&&Object(u.b)("/authors/new")},"aria-label":"simple tabs example",children:[Object(F.jsx)(O.a,Object(s.a)({label:"All Authors"},q(0))),Object(F.jsx)(O.a,Object(s.a)({label:"Add Author"},q(1)))]})}),Object(F.jsx)(U,{value:a,index:0}),Object(F.jsx)(U,{value:a,index:1}),Object(F.jsxs)(u.a,{children:[Object(F.jsx)(G,{path:"/authors"}),Object(F.jsx)(S,{path:"/authors/new"}),Object(F.jsx)(S,{path:"/authors/edit/:id"})]})]})}var Q=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(i.a,{component:"h1",title:"Authors App",subheader:"Favourite Authors"}),Object(F.jsx)(K,{})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(Q,{})}),document.getElementById("root")),R()},71:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.2d911ea4.chunk.js.map