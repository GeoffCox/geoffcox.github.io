import{S as dt,i as ht,s as mt,k as p,l as E,m as g,h as r,n as b,b as M,f as C,g as pt,t as J,d as Et,o as gt,a2 as bt,E as Z,a as O,q as S,c as y,r as w,F as _,I as tt,J as et,K as st,a3 as kt,u as it}from"./index-6a84fe7d.js";function ct(o,s,l){const e=o.slice();return e[5]=s[l],e}const Dt=o=>({}),rt=o=>({}),It=o=>({}),_t=o=>({}),Vt=o=>({}),ft=o=>({});function ut(o){let s,l,e,a,n,V,d,h,i,f,x,G,N,$,H,P,F,Q,R,q,k;const T=o[4].component,m=Z(T,o,o[3],ft),U=o[4].status,K=Z(U,o,o[3],_t),D=K||St(),W=o[4].options,j=Z(W,o,o[3],rt),I=j||wt();let A=o[0],u=[];for(let t=0;t<A.length;t+=1)u[t]=vt(ct(o,A,t));return{c(){s=p("div"),m&&m.c(),l=O(),e=p("div"),a=p("div"),n=p("h2"),V=S("Status"),d=O(),D&&D.c(),h=O(),i=p("div"),f=p("h2"),x=S("Options"),G=O(),I&&I.c(),N=O(),$=p("div"),H=p("h2"),P=S("Events "),F=p("small"),Q=S("(newest to oldest)"),R=O(),q=p("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){s=E(t,"DIV",{class:!0});var v=g(s);m&&m.l(v),v.forEach(r),l=y(t),e=E(t,"DIV",{class:!0});var c=g(e);a=E(c,"DIV",{class:!0});var L=g(a);n=E(L,"H2",{class:!0});var lt=g(n);V=w(lt,"Status"),lt.forEach(r),d=y(L),D&&D.l(L),L.forEach(r),h=y(c),i=E(c,"DIV",{class:!0});var z=g(i);f=E(z,"H2",{class:!0});var ot=g(f);x=w(ot,"Options"),ot.forEach(r),G=y(z),I&&I.l(z),z.forEach(r),N=y(c),$=E(c,"DIV",{class:!0});var B=g($);H=E(B,"H2",{class:!0});var X=g(H);P=w(X,"Events "),F=E(X,"SMALL",{});var at=g(F);Q=w(at,"(newest to oldest)"),at.forEach(r),X.forEach(r),R=y(B),q=E(B,"DIV",{class:!0});var nt=g(q);for(let Y=0;Y<u.length;Y+=1)u[Y].l(nt);nt.forEach(r),B.forEach(r),c.forEach(r),this.h()},h(){b(s,"class","component svelte-s9d7ax"),b(n,"class","svelte-s9d7ax"),b(a,"class","status panel svelte-s9d7ax"),b(f,"class","svelte-s9d7ax"),b(i,"class","options panel svelte-s9d7ax"),b(H,"class","svelte-s9d7ax"),b(q,"class","event-list svelte-s9d7ax"),b($,"class","events panel svelte-s9d7ax"),b(e,"class","configuration svelte-s9d7ax")},m(t,v){M(t,s,v),m&&m.m(s,null),M(t,l,v),M(t,e,v),_(e,a),_(a,n),_(n,V),_(a,d),D&&D.m(a,null),_(e,h),_(e,i),_(i,f),_(f,x),_(i,G),I&&I.m(i,null),_(e,N),_(e,$),_($,H),_(H,P),_(H,F),_(F,Q),_($,R),_($,q);for(let c=0;c<u.length;c+=1)u[c].m(q,null);k=!0},p(t,v){if(m&&m.p&&(!k||v&8)&&tt(m,T,t,t[3],k?st(T,t[3],v,Vt):et(t[3]),ft),K&&K.p&&(!k||v&8)&&tt(K,U,t,t[3],k?st(U,t[3],v,It):et(t[3]),_t),j&&j.p&&(!k||v&8)&&tt(j,W,t,t[3],k?st(W,t[3],v,Dt):et(t[3]),rt),v&1){A=t[0];let c;for(c=0;c<A.length;c+=1){const L=ct(t,A,c);u[c]?u[c].p(L,v):(u[c]=vt(L),u[c].c(),u[c].m(q,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=A.length}},i(t){k||(C(m,t),C(D,t),C(I,t),k=!0)},o(t){J(m,t),J(D,t),J(I,t),k=!1},d(t){t&&r(s),m&&m.d(t),t&&r(l),t&&r(e),D&&D.d(t),I&&I.d(t),kt(u,t)}}}function St(o){let s;return{c(){s=S("(none)")},l(l){s=w(l,"(none)")},m(l,e){M(l,s,e)},d(l){l&&r(s)}}}function wt(o){let s;return{c(){s=S("(none)")},l(l){s=w(l,"(none)")},m(l,e){M(l,s,e)},d(l){l&&r(s)}}}function vt(o){let s,l=o[5].message+"",e,a,n,V,d=o[5].timestamp.getMilliseconds()+"",h;return{c(){s=p("div"),e=S(l),a=O(),n=p("div"),V=S(" @"),h=S(d),this.h()},l(i){s=E(i,"DIV",{class:!0});var f=g(s);e=w(f,l),f.forEach(r),a=y(i),n=E(i,"DIV",{class:!0});var x=g(n);V=w(x," @"),h=w(x,d),x.forEach(r),this.h()},h(){b(s,"class","event-message svelte-s9d7ax"),b(n,"class","event-timestamp svelte-s9d7ax")},m(i,f){M(i,s,f),_(s,e),M(i,a,f),M(i,n,f),_(n,V),_(n,h)},p(i,f){f&1&&l!==(l=i[5].message+"")&&it(e,l),f&1&&d!==(d=i[5].timestamp.getMilliseconds()+"")&&it(h,d)},d(i){i&&r(s),i&&r(a),i&&r(n)}}}function Mt(o){let s,l,e=o[1]&&ut(o);return{c(){s=p("div"),e&&e.c(),this.h()},l(a){s=E(a,"DIV",{class:!0});var n=g(s);e&&e.l(n),n.forEach(r),this.h()},h(){b(s,"class","example svelte-s9d7ax")},m(a,n){M(a,s,n),e&&e.m(s,null),l=!0},p(a,[n]){a[1]?e?(e.p(a,n),n&2&&C(e,1)):(e=ut(a),e.c(),C(e,1),e.m(s,null)):e&&(pt(),J(e,1,1,()=>{e=null}),Et())},i(a){l||(C(e),l=!0)},o(a){J(e),l=!1},d(a){a&&r(s),e&&e.d()}}}function $t(o,s,l){let{$$slots:e={},$$scope:a}=s,n=[];const V=h=>{const i=new Date;l(0,n=[{message:h,timestamp:i},...n.slice(0,4)])};let d=!1;return gt(()=>{l(1,d=!0)}),bt(()=>{l(1,d=!1)}),o.$$set=h=>{"$$scope"in h&&l(3,a=h.$$scope)},[n,d,V,a,e]}class Ht extends dt{constructor(s){super(),ht(this,s,$t,Mt,mt,{recordEvent:2})}get recordEvent(){return this.$$.ctx[2]}}export{Ht as E};