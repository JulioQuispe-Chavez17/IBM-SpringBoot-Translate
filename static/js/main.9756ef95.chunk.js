(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var c=t(9),s=t(50),n=t.n(s),l=t(63),r=t(28),i=(t(84),t(0)),j=t(64),b=t.n(j).a.create({baseURL:"https://ibm-translate.herokuapp.com/"}),d=t(142),o=t(145),u=t(138),h=t(149),O=t(143),x=t(147),m=t(140),v=t(141),p=t(69),f=t.n(p),g=t(70),I=t.n(g),N=t(6);function w(){var e=Object(i.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(i.useState)(""),j=Object(r.a)(s,2),p=j[0],g=j[1],w=Object(i.useState)(!1),C=Object(r.a)(w,2),S=C[0],k=C[1],y=Object(i.useState)(""),W=Object(r.a)(y,2),E=W[0],M=W[1],B=Object(i.useState)(""),F=Object(r.a)(B,2),J=F[0],R=F[1],T=Object(i.useState)(""),z=Object(r.a)(T,2),A=z[0],L=z[1],U=function(){var e=Object(l.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(!0),b.post("/translate/result",{words:t,idiom:a}).then((function(e){k(!1),g(e.data.translations[0].translation)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("h1",{children:"IBM Translate"}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)(o.a,{sx:{minWidth:120},children:Object(N.jsxs)(u.a,{fullWidth:!0,children:[Object(N.jsx)(h.a,{id:"label-tras",children:"Idiom"}),Object(N.jsxs)(O.a,{labelId:"select-label-tras",id:"select-tras",value:E,label:"Idiom",onChange:function(e){M(e.target.value)},children:[Object(N.jsx)(x.a,{value:"es",children:"Espa\xf1ol"}),Object(N.jsx)(x.a,{value:"en",children:"Ingles"}),Object(N.jsx)(x.a,{value:"fr",children:"Frances"})]})]})}),Object(N.jsx)(m.a,{className:"area",rowsMax:8,"aria-label":"maximum height",placeholder:"Type a text ...",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(N.jsxs)("div",{className:"command",children:[Object(N.jsx)(v.a,{className:"button",variant:"contained",color:"secondary",onClick:function(){E==J?g(t):(L(E+"-"+J),U(A))},startIcon:Object(N.jsx)(f.a,{}),children:"Send"}),S&&Object(N.jsx)(d.a,{className:"spinner",size:68}),Object(N.jsx)(v.a,{className:"button",variant:"contained",color:"primary",onClick:function(){c(""),g("")},startIcon:Object(N.jsx)(I.a,{}),children:"Clean"})]}),Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)(o.a,{sx:{minWidth:120},children:Object(N.jsxs)(u.a,{fullWidth:!0,children:[Object(N.jsx)(h.a,{id:"label",children:"Idiom"}),Object(N.jsxs)(O.a,{labelId:"select-label",id:"select",value:J,label:"Idiom",onChange:function(e){R(e.target.value)},children:[Object(N.jsx)(x.a,{value:"es",children:"Espa\xf1ol"}),Object(N.jsx)(x.a,{value:"en",children:"Ingles"}),Object(N.jsx)(x.a,{value:"fr",children:"Frances"})]})]})}),Object(N.jsx)(m.a,{rowsMax:8,className:"area","aria-label":"maximum height",placeholder:"Result",value:p,onChange:function(e){return g(e.target.value)}})]})]}),Object(N.jsx)("br",{})]})}var C=document.getElementById("root");Object(c.render)(Object(N.jsx)(w,{}),C)},84:function(e,a,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.9756ef95.chunk.js.map