import{s as _,a as l,k as m,m as u,e as g,p as b,b as h,q as f,t as d,v as k,i as c,w as v,f as p}from"../chunks/scheduler.75f5293f.js";import{S as x,i as w,c as P,b as $,m as A,t as C,a as j,d as S}from"../chunks/index.36074062.js";import{g as y,a as D}from"../chunks/spread.8a54911c.js";import{P as I}from"../chunks/Post.19bcd7ab.js";function E(n){let t,o=`I've been studying software architecture throughout my career. I highly recommend these books. I
		reference them to solve tough problems or when I sense something is not quite right with
		existing code.`,r,s,e='<img src="/images/CleanArchitecture.jpg" width="46px" height="60px" alt="Clean Architecture book cover"/> <a href="https://isbndb.com/book/9780134494166" target="_blank">Clean Architecture: A Craftsman&#39;s Guide to Software Structure and Design</a> <img src="/images/DesignPatterns.jpg" width="46px" height="60px" alt="Design Patterns book cover"/> <a href="https://isbndb.com/book/9788178081359" target="_blank">Design Patterns: Elements of Reusable Object-Oriented Software</a> <img src="/images/EnterprisePatterns.jpg" width="46px" height="60px" alt="Entterprise Patterns book cover"/> <a href="https://isbndb.com/book/9788131794029" target="_blank">Patterns of Enterprise Application Architecture</a> <img src="/images/Refactoring.jpg" width="46px" height="60px" alt="Refactoring book cover"/> <a href="https://isbndb.com/book/9780201485677" target="_blank">Refactoring: Improving the Design of Existing Code</a> <img src="/images/AntiPatterns.jpg" width="46px" height="60px" alt="Anit-patterns book cover"/> <a href="https://isbndb.com/book/9780471197133" target="_blank">AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis</a>';return{c(){t=g("p"),t.textContent=o,r=b(),s=g("div"),s.innerHTML=e,this.h()},l(a){t=h(a,"P",{"data-svelte-h":!0}),f(t)!=="svelte-6r18i5"&&(t.textContent=o),r=d(a),s=h(a,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-fqm3km"&&(s.innerHTML=e),this.h()},h(){k(s,"class","links svelte-1l7jmjk")},m(a,i){c(a,t,i),c(a,r,i),c(a,s,i)},p:v,d(a){a&&(p(t),p(r),p(s))}}}function R(n){let t,o;const r=[{category:"Bookshelf"},{headline:"Software Architecture Books"},{postUrl:"software-architecture-books"},n[0]];let s={$$slots:{default:[E]},$$scope:{ctx:n}};for(let e=0;e<r.length;e+=1)s=l(s,r[e]);return t=new I({props:s}),{c(){P(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){A(t,e,a),o=!0},p(e,[a]){const i=a&1?y(r,[r[0],r[1],r[2],D(e[0])]):{};a&2&&(i.$$scope={dirty:a,ctx:e}),t.$set(i)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){j(t.$$.fragment,e),o=!1},d(e){S(t,e)}}}function q(n,t,o){const r=[];let s=m(t,r);return n.$$set=e=>{t=l(l({},t),u(e)),o(0,s=m(t,r))},[s]}class O extends x{constructor(t){super(),w(this,t,q,R,_,{})}}export{O as component};