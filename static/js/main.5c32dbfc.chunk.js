(this["webpackJsonpname-icon"]=this["webpackJsonpname-icon"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),i=n(2),s=n.n(i),l=n(3),u=n(5),b=(n(13),n(6)),f={size:60,foreColor:"#3c665f",backColor:"aliceblue",fontScale:.7,fontFamily:"sans-serif"},j=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c,r,a,o,i,l,u,j,d,p,x,h,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(b.a)(Object(b.a)({},f),n),r=[c.size,c.size],a=r[0],o=r[1],i=new OffscreenCanvas(a,o),l=i.getContext("2d")){e.next=6;break}throw new Error("could not get context.");case 6:return u=t.split(" "),j=u.length>=2?u[0].substring(0,1)+u[1].substring(0,1):t.substring(0,2),l.beginPath(),l.ellipse(a/2,o/2,a/2,o/2,0,0,2*Math.PI),l.closePath(),l.clip(),l.fillStyle=c.backColor,l.fillRect(0,0,2*a,2*o),l.fillStyle=c.foreColor,l.font="bold ".concat(o*c.fontScale,"px ").concat(c.fontFamily),d=l.measureText(j),p=a-d.width>0?(a-d.width)/2:0,x=(o+d.actualBoundingBoxAscent+d.actualBoundingBoxDescent)/2,l.fillText(j,p,x,a),e.next=22,i.convertToBlob();case 22:return h=e.sent,O=URL.createObjectURL(h),e.abrupt("return",O);case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=n(0),p=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)("\u5c71\u7530 \u592a\u90ce"),i=Object(u.a)(o,2),b=i[0],f=i[1],p=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(b);case 2:t=e.sent,a(t),(n=document.createElement("a")).href=t,n.download="nameicon.png",n.click(),n.remove();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("button",{onClick:p,children:"\u30a2\u30a4\u30b3\u30f3\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"icon",src:r})})]})};var x=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c32dbfc.chunk.js.map