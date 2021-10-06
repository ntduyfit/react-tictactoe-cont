(this["webpackJsonpbtcn01-react-tutorial"]=this["webpackJsonpbtcn01-react-tutorial"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(7),s=t.n(i),o=(t(13),t(2)),a=t(8),u=t(6),l=t(0),j=function(e){var n=e.value,t=e.onClick,r=e.isWin,c=e.isDisabled,i="square"+(r?" winner":"");return Object(l.jsx)("button",{className:i,onClick:function(){return t()},disabled:c,children:n})},b=function(e){var n=e.rowIndex,t=e.squares,r=e.onClick,c=e.winChain,i=e.numOfRows;return Object(l.jsx)("div",{className:"board-row",children:t.map((function(e,t){var s=t+n*i;return Object(l.jsx)(j,{value:e,onClick:function(){return r(s)},isWin:c&&c.includes(s),isDisabled:!!c},"key"+s)}))})},f=function(e){var n=e.squares,t=e.onClick,r=e.winChain,c=e.numOfRows,i=function(){for(var e=[],i=0;i<c;i++){var s=i*c,o=s+c,a=n.slice(s,o);e.push(Object(l.jsx)(b,{rowIndex:i,onClick:t,squares:a,winChain:r,numOfRows:c},i))}return e};return Object(l.jsx)("div",{children:Object(l.jsx)(i,{})})},d=function(e){var n,t=e.history,r=e.steps,i=e.isAscending,s=e.jumpTo;i?n=t.map((function(e,n){var t=n?"Go to move #"+n+" (".concat(e.position.row,", ").concat(e.position.col,")"):"Go to game start";return Object(l.jsx)("li",{className:n===r.current?"bold":"",children:Object(l.jsx)("button",{onClick:function(){return s(n)},children:t})},"move"+n)})):n=t.slice().reverse().map((function(e,n){var t=r.max-n,c=-1!==e.position.col?"Go to move #"+t+" (".concat(e.position.row,", ").concat(e.position.col,")"):"Go to game start";return Object(l.jsx)("li",{className:t===r.current?"bold":"",children:Object(l.jsx)("button",{onClick:function(){return s(t)},children:c})},"move"+t)}));return Object(l.jsx)(c.a.Fragment,{children:n})},h=function(e,n){return{row:Math.floor(e/n+1),col:e%n+1}},O=function(e,n,t,r){var c=function(e,n,t,r){for(var c=[],i=t%r,s=r*r,o=i;o<s;o+=r){if(e[i]===n)c.push(o);else{if(c.length>=5)return c;c.splice(0,c.length)}i+=r}return c.length>=5?c:null}(e,n,t,r);if(c)return c;var i=function(e,n,t,r){for(var c=[],i=Math.floor(t/r)*r,s=i+r,o=i;o<s;o++)if(e[o]===n)c.push(o);else{if(c.length>=5)return c;c.splice(0,c.length)}return c.length>=5?c:null}(e,n,t,r);if(i)return i;var s=function(e,n,t,r){for(var c=[t],i=t;i-r>0;){var s=i-(r+1);if(e[s]!==n)break;c.push(s),i=s}for(var o=r*r;t+r<o;){var a=t+r+1;if(e[a]!==n)break;c.push(a),t=a}return c.length>=5?c:null}(e,n,t,r);if(s)return s;var o=function(e,n,t,r){for(var c=[t],i=t;i-r>0;){var s=i-(r-1);if(e[s]!==n)break;c.push(s),i=s}for(var o=r*r;t+r<o;){var a=t+(r-1);if(e[a]!==n)break;c.push(a),t=a}return c.length>=5?c:null}(e,n,t,r);return o||null},v=(t(15),{max:0,current:0,lastIndex:-1}),x=function(e){var n=e.rows,t=e.children,c=n*n,i=Object(r.useState)([{squares:Array(c).fill(null),position:{row:-1,col:-1}}]),s=Object(o.a)(i,2),j=s[0],b=s[1],x=Object(r.useState)(v),m=Object(o.a)(x,2),p=m[0],g=m[1],w=Object(r.useState)(!0),k=Object(o.a)(w,2),C=k[0],q=k[1],y=Object(r.useState)(!0),N=Object(o.a)(y,2),S=N[0],I=N[1],R=j[p.current],A=C?"O":"X",D=O(R.squares,A,p.lastIndex,n),G=n*n,T=p.current===G&&!D;return Object(l.jsxs)("div",{className:"game",children:[Object(l.jsxs)("div",{className:"game-board",children:[Object(l.jsx)(f,{squares:R.squares,onClick:function(e){var t=j[p.current].squares.slice();if(!t[e]){t[e]=C?"X":"O";var r=h(e,n),c=j.slice(0,p.current+1);b((function(){return[].concat(Object(a.a)(c),[{position:r,squares:t}])}));var i=c.length;g({current:i,max:i,lastIndex:e}),q(!C)}},winChain:D,numOfRows:n}),t]}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("button",{onClick:function(){I(!S)},children:"Sort steps order"}),Object(l.jsx)("span",{children:S?"Ascending":"Descending"}),T?Object(l.jsx)("div",{children:"Draw"}):Object(l.jsx)("div",{children:D?"Winner: "+A:"Next player: "+(C?"X":"O")}),Object(l.jsx)("ol",{className:"history-list",children:Object(l.jsx)(d,{steps:p,history:j,jumpTo:function(e){g((function(n){return Object(u.a)(Object(u.a)({},n),{},{current:e})})),q(e%2===0)},isAscending:S})})]})]})},m=(t(16),function(){var e=Object(r.useRef)(),n=Object(r.useState)(!1),t=Object(o.a)(n,2),c=t[0],i=t[1],s=Object(r.useState)(),a=Object(o.a)(s,2),u=a[0],j=a[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Tic-tac-toe"}),c?Object(l.jsx)(x,{rows:u,children:Object(l.jsx)("button",{id:"return-button",onClick:function(){j(0),i(!1)},children:"Return"})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"number",onChange:function(){var n=parseInt(e.current.value);j(n)},ref:e,placeholder:"Type board size - min = 5 and max = 15"}),Object(l.jsx)("button",{onClick:function(){u<5||u>15?e.current.focus():i(!0)},children:"Play"})]})]})});s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);