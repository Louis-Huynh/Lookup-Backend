(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){e.exports=t(42)},42:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(17),c=t.n(r),l=(t(8),t(6)),u=t(18),i=t(19),s=t(2),m=function(e){var n=e.displayFiltered;return o.a.createElement("ul",null,n)},f=function(e){var n=e.value,t=e.handler,a=e.label;return o.a.createElement("p",null,a,": ",o.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.handleSubmit,t=e.newName,a=e.handleInput,r=e.newNumber,c=e.handleNumber;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,o.a.createElement(f,{value:t,handler:a,label:"name"}),o.a.createElement(f,{value:r,handler:c,label:"number"})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},h=function(e){var n=e.handleSearch;return o.a.createElement("span",null,"Find",o.a.createElement("input",{onChange:n}))},b=t(5),p=t.n(b),v="/api/persons",g=function(){var e=p.a.get(v);return console.log("hello from get all ",e),e.then((function(e){return e.data}))},E=function(e){return p.a.post(v,e).then((function(e){return e.data}))},w=function(e){return p.a.delete("".concat(v,"/").concat(e))},j=function(e,n){return p.a.put("".concat(v,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){var n=e.message;return""===n?o.a.createElement(o.a.Fragment,null):null===n?null:n.includes("not")?o.a.createElement("p",{className:"fail"},n):o.a.createElement("p",{className:"success"},n)},y=function(){Object(a.useEffect)((function(){console.log("effect"),g().then((function(e){console.log("promised fulfilled: ",e),r(e)}))}),[]);var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),f=Object(s.a)(c,2),b=f[0],p=f[1],v=Object(a.useState)(""),y=Object(s.a)(v,2),S=y[0],k=y[1],N=Object(a.useState)(Object(i.a)(t)),C=Object(s.a)(N,2),F=C[0],I=C[1],x=Object(a.useState)(""),B=Object(s.a)(x,2),D=B[0],J=B[1],L=Object(a.useState)(""),T=Object(s.a)(L,2),W=T[0],A=T[1],M=Object(a.useState)(""),P=Object(s.a)(M,2),$=P[0],q=P[1],z=(""===D?t:F).map((function(e){return o.a.createElement("li",{className:"pudding",key:e.id},e.name," ",e.number,o.a.createElement("button",{type:"click",onClick:function(){return G(e.id)}},"remove"))})),G=function(e){window.confirm("Are you sure you wish to delete your work of art?")?w(e).then((function(n){console.log("success: ",n),r(t.filter((function(n){return n.id!==e})))})):console.log("no changes made")};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(O,{message:$}),o.a.createElement(O,{message:W}),o.a.createElement(h,{handleSearch:function(e){J(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));I(n)}}),o.a.createElement("h2",null,"New entry"),o.a.createElement(d,{handleSubmit:function(e){e.preventDefault();var n,a=!1,o=!1,c=!1,i=Object(u.a)(t);try{for(i.s();!(n=i.n()).done;){var s=n.value;b===s.name&&s.number!==S?(a=!0,c=window.confirm("".concat(s.name," already exist in the phonebook. Change its phone number?"))):b===s.name&&(o=!0)}}catch(d){i.e(d)}finally{i.f()}if(a)if(c){var m=t.find((function(e){return e.name===b})),f=Object(l.a)(Object(l.a)({},m),{},{number:S});console.log("soul sister",f),j(m.id,f).then((function(e){r(t.map((function(e){return e.name===m.name?f:e})))})).catch((function(e){A("".concat(m.name," is not part of the server!")),setTimeout((function(){A(null)}),3e3)}))}else console.log("No changes will be made to the phone number");else if(o)alert("".concat(b," has already been added")),console.log("Duplicate entry");else{E({name:b,number:S}).then((function(e){r(t.concat(e)),q("".concat(e.name," added")),setTimeout((function(){q(null)}),3e3)})).catch((function(e){return console.log("error: ",e)})),p(""),k("")}},newName:b,handleInput:function(e){p(e.target.value)},newNumber:S,handleNumber:function(e){k(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(m,{displayFiltered:z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.508e3648.chunk.js.map