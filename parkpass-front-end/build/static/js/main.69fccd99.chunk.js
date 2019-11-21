(this["webpackJsonpparkpass-front-end"]=this["webpackJsonpparkpass-front-end"]||[]).push([[0],{104:function(e,t,a){e.exports=a(132)},108:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(15),i=(a(108),a(84)),m=a(11),u=a(35),s=function(){return localStorage.getItem("token")},p=function(e){e.preventDefault(),localStorage.removeItem("token"),localStorage.removeItem("username")};function d(){var e=s();return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/"},"Home"),!e&&r.a.createElement(l.b,{to:"/login"},"Login"),!e&&r.a.createElement(l.b,{to:"/signup"},"Signup"),e&&r.a.createElement(l.b,{to:"/account"},"Account"),r.a.createElement("button",{onClick:function(e){return p(e)}},"Signout")))}var b=a(182),E=a(22),f=a.n(E),g=a(165),h=a(162),v=a(166),O=a(167),k=a(168),j=a(169),x=a(176),y=a(52),S=a.n(y),P=a(4),w=a(178),C=Object(h.a)((function(e){return{card:{maxWidth:345,margin:"20px auto",boxShadow:"0 8px 40px -15px rgba(0,0,0,0.3)",borderRadius:"5px"},details:{marginTop:"10px",textAlign:"left"},box:{marginTop:"20px",marginBottom:"-10px"}}})),N=Object(P.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(w.a);function D(e){var t=e.name,a=e.location,c=e.description,o=e.addToFaves,l=C(),i=Object(n.useState)(2),u=Object(m.a)(i,2);u[0],u[1];return r.a.createElement(g.a,{className:l.card},r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:l.details},r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Location: ",a,r.a.createElement("br",null),"Description: ",c)),r.a.createElement(x.a,{className:l.box,component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement(k.a,{component:"legend"},"Excellent"),r.a.createElement(N,{name:"customized-color",value:5,icon:r.a.createElement(S.a,{fontSize:"inherit"})})))),r.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),o({name:t,location:a,description:c})}(e)}},"Add To Faves"))}var T=a(183),F=a(180),L=a(177),I=a(172),A=(Object(n.createContext)(),Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,display:"stretch",marginTop:"15px"},selectEmpty:{marginTop:e.spacing(2)}}})));function W(e){var t=A(),a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(m.a)(u,2),p=s[0],d=s[1],E=Object(n.useState)(""),g=Object(m.a)(E,2),h=g[0],v=g[1],O=r.a.useRef(null),k=r.a.useState(0),j=Object(m.a)(k,2),x=j[0],y=j[1];r.a.useEffect((function(){y(O.current.offsetWidth)}),[]),Object(n.useEffect)((function(){f.a.get("https://park-passport.herokuapp.com/api/parks").then((function(e){var t=e.data.filter((function(e){return e.name.toLowerCase().includes(p.toLocaleLowerCase())}));i(t)}))}),[p]);var S=function(e){d(e.target.value),v(e.target.value)};return r.a.createElement("section",{className:"search-form"},r.a.createElement(b.a,{id:"name",label:"Search Parks",type:"search",margin:"normal",variant:"outlined",value:p,onChange:S}),r.a.createElement(I.a,{variant:"outlined",className:t.formControl},r.a.createElement(T.a,{ref:O,id:"demo-simple-select-outlined-label"},"Filters"),r.a.createElement(L.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:h,onChange:S,labelWidth:x},r.a.createElement(F.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(F.a,{value:""},"Pool"),r.a.createElement(F.a,{value:20},"Hiking"),r.a.createElement(F.a,{value:"Warrior"},"Fishing"),r.a.createElement(F.a,{value:50},"Wildlife"),r.a.createElement(F.a,{value:60},"Camping"),r.a.createElement(F.a,{value:70},"Disc Golf"),r.a.createElement(F.a,{value:"Lacy"},"Dog Park"),r.a.createElement(F.a,{value:90},"Picnic Area"),r.a.createElement(F.a,{value:"Rainey"},"Playground"),r.a.createElement(F.a,{value:110},"Soccer Field"),r.a.createElement(F.a,{value:120},"Paddle Boats"),r.a.createElement(F.a,{value:130},"Tennis Courts"),r.a.createElement(F.a,{value:140},"Walking Paths"),r.a.createElement(F.a,{value:150},"Bird Watching"),r.a.createElement(F.a,{value:160},"Volletball Court"),r.a.createElement(F.a,{value:170},"Basketball Court"))),o.map((function(t){return r.a.createElement(l.b,{to:"parks/".concat(t.id)},r.a.createElement(D,{key:t.id,name:t.name,description:t.description,location:t.location,addToFaves:e.addToFaves}))})))}var B=a(85),R=function(e){var t=e.component,a=Object(B.a)(e,["component"]),n=localStorage.getItem("token");return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/login"})}}))},_=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){f.a.get("https://park-passport.herokuapp.com/api/parks").then((function(e){r(e.data)})).catch((function(e){console.log("---Api Call Error---"),console.log(e),i(!0)}))}),[]),[a,l]},H=Object(n.createContext)(),z=Object(n.createContext)(),U=a(34),G=a(173),J=a(3),V=a(80),M=a.n(V),q=a(174),K=a(175),Q=a(81),X=a.n(Q),Y=Object(h.a)((function(e){return{card:{maxWidth:345,margin:"20px auto",boxShadow:"0 8px 40px -15px rgba(0,0,0,0.3)",borderRadius:"5px"},details:{marginTop:"10px",textAlign:"left"},box:{marginTop:"20px",marginBottom:"-10px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{marginTop:"25px"}}})),Z=Object(P.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(w.a),$=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){var t=e.match.params.id;f.a.get("https://park-passport.herokuapp.com/api/parks/".concat(t)).then((function(e){o(e.data)})).catch((function(e){console.error(e)}))}),[]);var l=Y(),i=Object(n.useState)(2),u=Object(m.a)(i,2),s=(u[0],u[1],Object(n.useState)(!1)),p=Object(m.a)(s,2),d=p[0],E=p[1],h=c.name,y=c.location,P=c.description;return r.a.createElement(g.a,{className:l.card},r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},h),r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:l.details},r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Location: ",y,r.a.createElement("br",null),"Description: ",P)),r.a.createElement(x.a,{className:l.box,component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement(k.a,{component:"legend"},"Excellent"),r.a.createElement(Z,{name:"customized-color",value:5,icon:r.a.createElement(S.a,{fontSize:"inherit"})})),r.a.createElement(G.a,{className:Object(J.a)(l.expand,Object(U.a)({},l.expandOpen,d)),onClick:function(){E(!d)},"aria-expanded":d,"aria-label":"show more"},r.a.createElement(M.a,null))),r.a.createElement(q.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement(O.a,null,r.a.createElement(b.a,{id:"outlined-textarea",label:"Leave a Review",placeholder:"",multiline:!0,className:l.textField,margin:"normal",variant:"outlined"}),r.a.createElement(K.a,{variant:"contained",color:"primary",className:l.button,endIcon:r.a.createElement(X.a,null)},"Send")))))},ee=a(23);function te(e){var t=e.values,a=Object(n.useState)([]),c=Object(m.a)(a,2);c[0],c[1];return r.a.createElement("div",{className:"add-park"},r.a.createElement(ee.b,null,r.a.createElement(ee.a,{id:"park",name:"park",placeholder:"Park"}),r.a.createElement(ee.a,{id:"location",name:"location",placeholder:"Location"}),r.a.createElement("label",{className:"checkbox-container"},"Dog Park",r.a.createElement(ee.a,{type:"checkbox",name:"dog_park",checked:t.dog_park}),r.a.createElement("span",{className:"checkmark"}),"Pool",r.a.createElement(ee.a,{type:"checkbox",name:"pool",checked:t.pool}),r.a.createElement("span",{className:"checkmark"}),"Hiking",r.a.createElement(ee.a,{type:"checkbox",name:"hiking",checked:t.hiking}),r.a.createElement("span",{className:"checkmark"}),"Waterfalls",r.a.createElement(ee.a,{type:"checkbox",name:"waterfalls",checked:t.waterfalls}),r.a.createElement("span",{className:"checkmark"}),"Disc Golf",r.a.createElement(ee.a,{type:"checkbox",name:"disc_golf",checked:t.disc_golf}),r.a.createElement("span",{className:"checkmark"}),"Picnic Area",r.a.createElement(ee.a,{type:"checkbox",name:"picnic_area",checked:t.picnic_area}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("button",null,"Submit")))}Object(ee.c)({mapPropsToValues:function(e){return{park:e.park||"",location:e.location||""}},handleSubmit:function(e){console.log(e)}});function ae(){var e=localStorage.getItem("username"),t=Object(n.useContext)(z);return console.log("faves",t),r.a.createElement("div",null,r.a.createElement("p",null,e),r.a.createElement("h1",null,"My Favorites"),t&&t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description))})))}function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],i=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(U.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),f.a.post("https://park-passport.herokuapp.com/api/auth/login",c).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",c.username),e.history.push("/")})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:c.username,onChange:i}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:c.password,onChange:i}),r.a.createElement("button",{type:"submit"},"Login")),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(l.b,{to:"/signup"},"Sign Up.")))}function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],i=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(U.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.a.post("https://park-passport.herokuapp.com/api/auth/register",c).then((function(e){localStorage.setItem("token",e.data.token),console.log(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:c.username,onChange:i}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:c.password,onChange:i}),r.a.createElement("button",{type:"submit"},"Register")),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(l.b,{to:"/login"},"Login.")))}function le(e){return r.a.createElement("div",null,r.a.createElement(l.b,{to:e.linkTo},e.text))}function ie(){return r.a.createElement("div",{className:"bottom-nav"},r.a.createElement(le,{linkTo:"/addpark",text:"+"}))}a(131);var me=Object(u.f)((function(){var e=_(),t=Object(m.a)(e,2),a=t[0],c=(t[1],Object(n.useState)([])),o=Object(m.a)(c,2),l=o[0],s=o[1],p=function(e){s([e].concat(Object(i.a)(l)))};return r.a.createElement(H.Provider,{value:a},r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("h1",null,"ParkPass App"),r.a.createElement(u.b,{exact:!0,path:"/login",component:re}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:oe}),r.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(W,Object.assign({},e,{addToFaves:p}))}}),r.a.createElement(z.Provider,{value:l},r.a.createElement(R,{exact:!0,path:"/account",component:ae})),r.a.createElement(R,{exact:!0,path:"/addpark",component:te}),r.a.createElement(u.b,{path:"/parks/:id",component:$}),r.a.createElement(ie,null)))}));o.a.render(r.a.createElement(l.a,null,r.a.createElement(me,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.69fccd99.chunk.js.map