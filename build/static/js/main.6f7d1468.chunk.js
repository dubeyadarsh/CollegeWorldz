(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,c,l){},23:function(e,c,l){},24:function(e,c,l){},26:function(e,c,l){},27:function(e,c,l){},46:function(e,c,l){"use strict";l.r(c);var s=l(1),A=l.n(s),t=l(17),n=l.n(t),a=(l(22),l(3)),i=(l.p,l(23),l(6)),d=l.n(i),j=(l(24),l(0)),r=function(){return Object(j.jsx)("div",{className:"vh-100 bg-dark",children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(d.a,{type:"bars",color:"#03fc4e",height:100,width:100})})})},o=l.p+"static/media/logo2.99a16616.png",m=(l(26),function(){return Object(j.jsx)(A.a.Fragment,{children:Object(j.jsx)("nav",{class:"navbar mb-3 np navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsx)("div",{class:"",children:Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("img",{src:o,className:" logo "}),Object(j.jsx)("h1",{className:"title text-white",children:"CollegeWorldz"})]})})})})}),b=function(){return Object(j.jsx)(A.a.Fragment,{children:Object(j.jsx)("footer",{class:"mt-4",children:Object(j.jsx)("p",{class:"text-center bg-dark text-white",children:"@copyright CollegeWordz.com"})})})},h=(l(27),l(8)),x=l.n(h),g=l.p+"static/media/vcet.7da38f9a.jpg",O=function(){var e=Object(s.useState)([]),c=Object(a.a)(e,2),l=c[0],t=c[1],n=Object(s.useState)(""),i=Object(a.a)(n,2),r=i[0],o=i[1],h=Object(s.useState)(""),O=Object(a.a)(h,2),u=O[0],v=(O[1],Object(s.useState)("")),p=Object(a.a)(v,2),E=p[0],N=(p[1],Object(s.useState)("")),I=Object(a.a)(N,2),C=I[0],Q=I[1],f=Object(s.useState)(""),S=Object(a.a)(f,2),B=S[0],U=S[1],T=Object(s.useState)(!1),J=Object(a.a)(T,2),L=J[0],W=J[1],V=Object(s.useState)(!1),X=Object(a.a)(V,2),w=X[0],K=X[1];return Object(s.useEffect)((function(){x.a.get("/det").then((function(e){t(e.data),console.log(e.data)}))}),[]),Object(j.jsx)(A.a.Fragment,{children:Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("div",{children:Object(j.jsx)(m,{})}),L?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(d.a,{type:"spin",color:"#66dd11",height:200,width:200})}):null,Object(j.jsx)("div",{className:" w-100 h-50",children:Object(j.jsxs)("div",{className:"th",children:[Object(j.jsxs)("div",{className:"t1 ",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",className:" ico mb-3 "}),Object(j.jsx)("h1",{className:"st pr",children:"Filters"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{className:" mx-auto",onSubmit:function(e){e.preventDefault(),W(!0),console.log(r,u,E),x.a.get("/imp",{params:{location:r}}).then((function(e){t(e.data),W(!1),K(!0)}))},children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:" col-lg-4 col-md-4 col-sm-6",children:Object(j.jsxs)("div",{class:" form-group",children:[Object(j.jsx)("label",{for:"exampleInput",children:Object(j.jsxs)("h5",{className:"st med",children:["Location",Object(j.jsx)("span",{className:"text-danger",children:"*"})]})}),Object(j.jsx)("input",{type:"text",required:!0,value:r,class:"form-control mb-3 border-dark",onChange:function(e){return o(e.target.value)},id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter a location"})]})}),Object(j.jsx)("div",{className:" col-lg-4 col-md-4 col-sm-6",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInput",children:Object(j.jsx)("h5",{className:"st med",children:"Type"})}),Object(j.jsx)("div",{class:"input-group  mb-3",children:w?Object(j.jsxs)("select",{class:" form-select w-100 border-dark rounded","data-size":"10",value:C,onChange:function(e){return Q(e.target.value)},id:"inputGroupSelect02",children:[Object(j.jsx)("option",{value:"",selected:!0,children:"Select Type..."}),Object(j.jsx)("option",{value:"Private",children:"Private"}),Object(j.jsx)("option",{value:"Public/Government",children:"Public/Government"})]}):Object(j.jsxs)("select",{class:" form-select w-100 rounded","data-size":"10",disabled:!0,value:C,onChange:function(e){return Q(e.target.value)},id:"inputGroupSelect02",children:[Object(j.jsx)("option",{value:"",selected:!0,children:"Select Type..."}),Object(j.jsx)("option",{value:"Private",children:"Private"}),Object(j.jsx)("option",{value:"Public/Government",children:"Public/Government"})]})})]})}),Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInput",children:Object(j.jsx)("h5",{className:"st med",children:"Rating"})}),Object(j.jsx)("div",{class:"input-group  mb-3",children:w?Object(j.jsxs)("select",{class:"form-select w-100 border-dark rounded",value:B,onChange:function(e){return U(e.target.value)},id:"inputGroupSelect02",children:[Object(j.jsx)("option",{selected:!0,children:"Select Rating..."}),Object(j.jsx)("option",{value:"AAA+ (Good)",children:"AAA+"}),Object(j.jsx)("option",{value:"AAAA (Very Good)",children:"AAAA"}),Object(j.jsx)("option",{value:"AAAA+ (Outstanding)",children:"AAAA+"}),Object(j.jsx)("option",{value:"AAAAA (Exceptional)",children:"AAAAA"})]}):Object(j.jsxs)("select",{class:"form-select w-100 rounded",disabled:!0,value:B,onChange:function(e){return U(e.target.value)},id:"inputGroupSelect02",children:[Object(j.jsx)("option",{selected:!0,children:"Select Rating..."}),Object(j.jsx)("option",{value:"AAA+ (Good)",children:"AAA+"}),Object(j.jsx)("option",{value:"AAAA (Very Good)",children:"AAAA"}),Object(j.jsx)("option",{value:"AAAA+ (Outstanding)",children:"AAAA+"}),Object(j.jsx)("option",{value:"AAAAA (Exceptional)",children:"AAAAA"})]})})]})})]}),Object(j.jsx)("button",{type:"",class:"btn btn-warning",children:"Submit"})]})]}),Object(j.jsxs)("div",{className:"mt-5",children:[Object(j.jsx)("h1",{className:"st pi",children:"Recommendation"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"row m-3 ",children:l.map((function(e,c){return""===C&&""===B?Object(j.jsx)("div",{className:"col-lg-4 col-md-12 col-sm-12",children:Object(j.jsxs)("div",{className:"bd m-4 p-1",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:null==e.img?g:e.img,className:"clgimg"})}),Object(j.jsx)("div",{children:Object(j.jsx)("h6",{className:"st bl",children:""==e.name?"Loading":e.name})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"st med",children:""==e.add?"loading":e.add})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-6",children:Object(j.jsx)("p",{className:"st med",children:""==e.type?"loading":e.type})}),Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-6",children:Object(j.jsx)("p",{className:"st rat med",children:""==e.rating?"loading":e.rating})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-6",children:Object(j.jsx)("p",{className:"st med",children:"B.E/B.Tech"})}),Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-6",children:Object(j.jsx)("p",{className:"st med",children:""==e.fees?"loading":e.fees})})]})]})}):null!=B&&null==C?B==e.rating?Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(j.jsxs)("div",{className:"bd m-4 p-1",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:null==e.img?g:e.img,className:"clgimg"})}),Object(j.jsx)("div",{children:Object(j.jsx)("h6",{className:"st bl",children:""==e.name?"Loading":e.name})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"st",children:""==e.add?"loading":e.add})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.type?"loading":e.type})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st bl",children:""==e.rating?"loading":e.rating})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:"B.E/B.Tech"})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.fees?"loading":e.fees})})]})]})}):null:null!=C&&null==B?e.type==C?Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(j.jsxs)("div",{className:"bd m-4 p-1",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:null==e.img?g:e.img,className:"clgimg"})}),Object(j.jsx)("div",{children:Object(j.jsx)("h6",{className:"st bl",children:""==e.name?"Loading":e.name})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"st",children:""==e.add?"loading":e.add})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.type?"loading":e.type})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st bl",children:""==e.rating?"loading":e.rating})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:"B.E/B.Tech"})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.fees?"loading":e.fees})})]})]})}):null:e.type==C&&e.rating==B?Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(j.jsxs)("div",{className:"bd m-4 p-1",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:null==e.img?g:e.img,className:"clgimg"})}),Object(j.jsx)("div",{children:Object(j.jsx)("h6",{className:"st bl",children:""==e.name?"Loading":e.name})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"st",children:""==e.add?"loading":e.add})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.type?"loading":e.type})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st bl",children:""==e.rating?"loading":e.rating})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:"B.E/B.Tech"})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("p",{className:"st",children:""==e.fees?"loading":e.fees})})]})]})}):null}))})})]})]})}),Object(j.jsx)("div",{children:Object(j.jsx)(b,{})})]})})};var u=function(){var e=Object(s.useState)(!0),c=Object(a.a)(e,2),l=c[0],A=c[1];return Object(s.useEffect)((function(){setTimeout((function(){A(!1)}),5e3)})),Object(j.jsx)("div",{className:"App",children:l?Object(j.jsx)(r,{}):Object(j.jsx)(O,{})})},v=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,47)).then((function(c){var l=c.getCLS,s=c.getFID,A=c.getFCP,t=c.getLCP,n=c.getTTFB;l(e),s(e),A(e),t(e),n(e)}))};n.a.render(Object(j.jsx)(A.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.6f7d1468.chunk.js.map