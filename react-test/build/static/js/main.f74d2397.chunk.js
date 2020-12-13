(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=a(51),i=a.n(l),u=a(71),s=a(26),m=a(30),d=a(11),E=(a(94),a(154)),p=a(19),f=a(34),b=a.n(f),h=function(e){return function(t){b.a.post("../api/jokes",e).then((function(e){return t({type:"ADD_JOKE",payload:e.data})}))}},j=function(){return{type:"JOKES_LOADING"}};var k=function(e){var t=Object(p.c)((function(e){return e.joke})),a=Object(p.b)();return o.a.createElement("div",null,o.a.createElement("h1",null,e.text.joke),o.a.createElement(E.a,{variant:"outlined",onClick:function(){e.getJoke()}}," More Jokes without Refresh!")," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(E.a,{variant:"outlined",onClick:function(){t.jokes.find((function(t){return t.id===e.text.id}))||a(h(e.text))}},"What a Hit!"),o.a.createElement(E.a,{variant:"outlined",onClick:function(){alert("Add this to jokes I don't like")}},"Booooo!"),o.a.createElement(E.a,{variant:"outlined",onClick:function(){alert("Add this to jokes I don't understand")}},"Please Explain!"))};var v=function(){return o.a.createElement("h2",null,"Hello World-Hello")};var O=function(){return o.a.createElement("h2",null,"Hello World - Welcome")},g=a(163),w=a(158),y=a(159),_=a(160),x=a(162),C=a(161),S=a(73),J=a.n(S),D=a(75),N=a(166),A=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(-2)},title:{flexGrow:1}}}));var T=function(){var e=A(),t=o.a.useState(null),a=Object(s.a)(t,2),n=a[0],r=a[1],c=function(){r(null)};return o.a.createElement("div",{className:e.root},o.a.createElement(y.a,{position:"static"},o.a.createElement(_.a,null,o.a.createElement(C.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},o.a.createElement(J.a,null)),o.a.createElement(D.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:c},o.a.createElement(N.a,{onClick:c},o.a.createElement(m.b,{to:"/home"},"Home")),o.a.createElement(N.a,{onClick:c},o.a.createElement(m.b,{to:"/favorites"},"Favorites")),o.a.createElement(N.a,{onClick:c},o.a.createElement(m.b,{to:"/dislike"},"Dislike")),o.a.createElement(N.a,{onClick:c},o.a.createElement(m.b,{to:"/confused"},"Confused"))),o.a.createElement(x.a,{variant:"h6",className:e.title},"Dad Jokes For You!"))))},K=a(50),H=a(165),I=a(164);function W(){return Math.round(20*Math.random())-10}function B(){var e=50+W(),t=50+W();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var G=Object(w.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function L(){Object(p.c)((function(e){return e.joke}));var e=Object(p.b)(),t=G(),a=o.a.useState(B),r=Object(s.a)(a,1)[0],c=o.a.useState(!1),l=Object(s.a)(c,2),i=l[0],u=l[1],m=Object(n.useState)({name:""}),d=Object(s.a)(m,2),E=d[0],f=d[1],b=function(){u(!1)},j=o.a.createElement("div",{style:r,className:t.paper},o.a.createElement("h2",{id:"simple-modal-title"},"Add to Favorites"),o.a.createElement("p",{id:"simple-modal-description"},"^.^"),o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault();var a={joke:E.name};e(h(a)),b()}},o.a.createElement(I.a,{onChange:function(e){f(Object(K.a)({},e.target.name,e.target.value))},name:"name",size:"small",id:"outlined-basic",label:"Enter your Joke",variant:"outlined"}),o.a.createElement("button",{type:"submit"},"Submit")));return o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){u(!0)}},"Add Your Own Joke!"),o.a.createElement(H.a,{open:i,onClose:b,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},j))}var M=function(){var e=Object(p.c)((function(e){return e.joke})),t=Object(p.b)();return Object(n.useEffect)((function(){t((function(e){e(j()),b.a.get("../api/jokes").then((function(t){return e({type:"GET_JOKES",payload:t.data})}))}))}),[]),console.log(e),o.a.createElement("div",null,o.a.createElement("h1",null,"Hi! Here are your saved favorites!"),e.jokes.map((function(e){return o.a.createElement("div",{key:e._id},o.a.createElement(E.a,{onClick:function(){var a;t((a=e._id,function(e){b.a.delete("../api/jokes/".concat(a)).then((function(t){return e({type:"DELETE_JOKE",payload:a})}))}))}},"x"),e.joke)})),o.a.createElement(L,null))},R=a(24),X=a(74),F=a(76),V=a(22),z={jokes:[],loading:!1},U=Object(R.c)({joke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_JOKES":return Object(V.a)(Object(V.a)({},e),{},{jokes:t.payload,loading:!1});case"DELETE_JOKE":return Object(V.a)(Object(V.a)({},e),{},{jokes:e.jokes.filter((function(e){return e._id!==t.payload}))});case"ADD_JOKE":return Object(V.a)(Object(V.a)({},e),{},{jokes:[t.payload].concat(Object(F.a)(e.jokes))});case"JOKES_LOADING":return Object(V.a)(Object(V.a)({},e),{},{loading:!0});default:return e}}}),Y=[X.a],P=Object(R.e)(U,{},Object(R.d)(R.a.apply(void 0,Y),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var $=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://icanhazdadjoke.com",{headers:{Accept:"application/json"}});case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),o.a.createElement(p.a,{store:P},o.a.createElement(m.a,null,o.a.createElement(g.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(T,null),o.a.createElement(g.a,{maxWidth:"sm"},o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/"},o.a.createElement(d.a,{to:"/home"})),o.a.createElement(d.b,{exact:!0,path:"/home"},o.a.createElement(k,{text:a,getJoke:c})),o.a.createElement(d.b,{exact:!0,path:"/favorites"},o.a.createElement(M,null)),o.a.createElement(d.b,{path:"/dislike"},o.a.createElement(v,null)),o.a.createElement(d.b,{path:"/confused"},o.a.createElement(O,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(119)},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.f74d2397.chunk.js.map