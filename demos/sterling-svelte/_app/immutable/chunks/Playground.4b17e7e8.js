import{S as ds,i as hs,s as ms,k as p,l as g,m as E,h as r,p as b,b as S,g as A,w as ps,d as N,f as gs,o as Es,a8 as bs,L as x,a as L,r as V,c as O,u as w,H as _,N as ss,O as ts,P as es,R as ks,v as is}from"./index.111fe57f.js";function cs(o,e,l){const t=o.slice();return t[5]=e[l],t}const zs=o=>({}),rs=o=>({}),Ds=o=>({}),_s=o=>({}),Is=o=>({}),fs=o=>({});function vs(o){let e,l,t,n,a,I,d,h,i,f,M,G,J,H,P,K,C,Q,T,$,k;const U=o[4].component,m=x(U,o,o[3],fs),W=o[4].options,R=x(W,o,o[3],_s),z=R||Vs(),X=o[4].status,j=x(X,o,o[3],rs),D=j||ws();let q=o[0],v=[];for(let s=0;s<q.length;s+=1)v[s]=us(cs(o,q,s));return{c(){e=p("div"),m&&m.c(),l=L(),t=p("div"),n=p("div"),a=p("h2"),I=V("Options"),d=L(),z&&z.c(),h=L(),i=p("div"),f=p("h2"),M=V("Status"),G=L(),D&&D.c(),J=L(),H=p("div"),P=p("h2"),K=V("Events "),C=p("small"),Q=V("(newest to oldest)"),T=L(),$=p("div");for(let s=0;s<v.length;s+=1)v[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var u=E(e);m&&m.l(u),u.forEach(r),l=O(s),t=g(s,"DIV",{class:!0});var c=E(t);n=g(c,"DIV",{class:!0});var y=E(n);a=g(y,"H2",{class:!0});var ls=E(a);I=w(ls,"Options"),ls.forEach(r),d=O(y),z&&z.l(y),y.forEach(r),h=O(c),i=g(c,"DIV",{class:!0});var B=E(i);f=g(B,"H2",{class:!0});var os=E(f);M=w(os,"Status"),os.forEach(r),G=O(B),D&&D.l(B),B.forEach(r),J=O(c),H=g(c,"DIV",{class:!0});var F=E(H);P=g(F,"H2",{class:!0});var Y=E(P);K=w(Y,"Events "),C=g(Y,"SMALL",{});var ns=E(C);Q=w(ns,"(newest to oldest)"),ns.forEach(r),Y.forEach(r),T=O(F),$=g(F,"DIV",{class:!0});var as=E($);for(let Z=0;Z<v.length;Z+=1)v[Z].l(as);as.forEach(r),F.forEach(r),c.forEach(r),this.h()},h(){b(e,"class","component svelte-ssv1z6"),b(a,"class","svelte-ssv1z6"),b(n,"class","options panel svelte-ssv1z6"),b(f,"class","svelte-ssv1z6"),b(i,"class","status panel svelte-ssv1z6"),b(P,"class","svelte-ssv1z6"),b($,"class","event-list svelte-ssv1z6"),b(H,"class","events panel svelte-ssv1z6"),b(t,"class","configuration svelte-ssv1z6")},m(s,u){S(s,e,u),m&&m.m(e,null),S(s,l,u),S(s,t,u),_(t,n),_(n,a),_(a,I),_(n,d),z&&z.m(n,null),_(t,h),_(t,i),_(i,f),_(f,M),_(i,G),D&&D.m(i,null),_(t,J),_(t,H),_(H,P),_(P,K),_(P,C),_(C,Q),_(H,T),_(H,$);for(let c=0;c<v.length;c+=1)v[c].m($,null);k=!0},p(s,u){if(m&&m.p&&(!k||u&8)&&ss(m,U,s,s[3],k?es(U,s[3],u,Is):ts(s[3]),fs),R&&R.p&&(!k||u&8)&&ss(R,W,s,s[3],k?es(W,s[3],u,Ds):ts(s[3]),_s),j&&j.p&&(!k||u&8)&&ss(j,X,s,s[3],k?es(X,s[3],u,zs):ts(s[3]),rs),u&1){q=s[0];let c;for(c=0;c<q.length;c+=1){const y=cs(s,q,c);v[c]?v[c].p(y,u):(v[c]=us(y),v[c].c(),v[c].m($,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=q.length}},i(s){k||(A(m,s),A(z,s),A(D,s),k=!0)},o(s){N(m,s),N(z,s),N(D,s),k=!1},d(s){s&&r(e),m&&m.d(s),s&&r(l),s&&r(t),z&&z.d(s),D&&D.d(s),ks(v,s)}}}function Vs(o){let e;return{c(){e=V("(none)")},l(l){e=w(l,"(none)")},m(l,t){S(l,e,t)},d(l){l&&r(e)}}}function ws(o){let e;return{c(){e=V("(none)")},l(l){e=w(l,"(none)")},m(l,t){S(l,e,t)},d(l){l&&r(e)}}}function us(o){let e,l=o[5].message+"",t,n,a,I,d=o[5].timestamp.getMilliseconds()+"",h;return{c(){e=p("div"),t=V(l),n=L(),a=p("div"),I=V(" @"),h=V(d),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=E(e);t=w(f,l),f.forEach(r),n=O(i),a=g(i,"DIV",{class:!0});var M=E(a);I=w(M," @"),h=w(M,d),M.forEach(r),this.h()},h(){b(e,"class","event-message svelte-ssv1z6"),b(a,"class","event-timestamp svelte-ssv1z6")},m(i,f){S(i,e,f),_(e,t),S(i,n,f),S(i,a,f),_(a,I),_(a,h)},p(i,f){f&1&&l!==(l=i[5].message+"")&&is(t,l),f&1&&d!==(d=i[5].timestamp.getMilliseconds()+"")&&is(h,d)},d(i){i&&r(e),i&&r(n),i&&r(a)}}}function Ss(o){let e,l,t=o[1]&&vs(o);return{c(){e=p("div"),t&&t.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var a=E(e);t&&t.l(a),a.forEach(r),this.h()},h(){b(e,"class","example svelte-ssv1z6")},m(n,a){S(n,e,a),t&&t.m(e,null),l=!0},p(n,[a]){n[1]?t?(t.p(n,a),a&2&&A(t,1)):(t=vs(n),t.c(),A(t,1),t.m(e,null)):t&&(ps(),N(t,1,1,()=>{t=null}),gs())},i(n){l||(A(t),l=!0)},o(n){N(t),l=!1},d(n){n&&r(e),t&&t.d()}}}function Hs(o,e,l){let{$$slots:t={},$$scope:n}=e,a=[];const I=h=>{const i=new Date;l(0,a=[{message:h,timestamp:i},...a.slice(0,4)])};let d=!1;return Es(()=>{l(1,d=!0)}),bs(()=>{l(1,d=!1)}),o.$$set=h=>{"$$scope"in h&&l(3,n=h.$$scope)},[a,d,I,n,t]}class Ps extends ds{constructor(e){super(),hs(this,e,Hs,Ss,ms,{recordEvent:2})}get recordEvent(){return this.$$.ctx[2]}}export{Ps as P};