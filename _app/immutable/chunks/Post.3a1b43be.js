import{s as G,c as w,u as z,g as B,a as F,d as H}from"./scheduler.bebf7e56.js";import{S as J,i as K,e as p,s as D,c as k,k as g,a as I,f as h,b as m,d as b,m as v,t as y,u as L,h as E,v as M,j as V,l as U,n as P}from"./index.eec01950.js";const N=a=>({}),j=a=>({});function q(a){let e,s;return{c(){e=p("div"),s=V(a[0]),this.h()},l(t){e=k(t,"DIV",{class:!0});var l=g(e);s=U(l,a[0]),l.forEach(h),this.h()},h(){m(e,"class","category svelte-1age95p")},m(t,l){b(t,e,l),v(e,s)},p(t,l){l&1&&P(s,t[0])},d(t){t&&h(e)}}}function A(a){let e;function s(i,n){return i[2]?Q:O}let t=s(a),l=t(a);return{c(){e=p("div"),l.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var n=g(e);l.l(n),n.forEach(h),this.h()},h(){m(e,"class","headline svelte-1age95p")},m(i,n){b(i,e,n),l.m(e,null)},p(i,n){t===(t=s(i))&&l?l.p(i,n):(l.d(1),l=t(i),l&&(l.c(),l.m(e,null)))},d(i){i&&h(e),l.d()}}}function O(a){let e;return{c(){e=V(a[1])},l(s){e=U(s,a[1])},m(s,t){b(s,e,t)},p(s,t){t&2&&P(e,s[1])},d(s){s&&h(e)}}}function Q(a){let e,s;return{c(){e=p("a"),s=V(a[1]),this.h()},l(t){e=k(t,"A",{href:!0,class:!0});var l=g(e);s=U(l,a[1]),l.forEach(h),this.h()},h(){m(e,"href",a[2]),m(e,"class","svelte-1age95p")},m(t,l){b(t,e,l),v(e,s)},p(t,l){l&2&&P(s,t[1]),l&4&&m(e,"href",t[2])},d(t){t&&h(e)}}}function C(a){let e,s;const t=a[5].links,l=w(t,a,a[4],j);return{c(){e=p("div"),l&&l.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var n=g(e);l&&l.l(n),n.forEach(h),this.h()},h(){m(e,"class","links svelte-1age95p")},m(i,n){b(i,e,n),l&&l.m(e,null),s=!0},p(i,n){l&&l.p&&(!s||n&16)&&z(l,t,i,i[4],s?F(t,i[4],n,N):B(i[4]),j)},i(i){s||(y(l,i),s=!0)},o(i){E(l,i),s=!1},d(i){i&&h(e),l&&l.d(i)}}}function R(a){let e,s,t,l,i,n,r=a[0]&&q(a),c=a[1]&&A(a);const d=a[5].default,u=w(d,a,a[4],null);let o=a[3].links&&C(a);return{c(){e=p("div"),r&&r.c(),s=D(),c&&c.c(),t=D(),l=p("div"),u&&u.c(),i=D(),o&&o.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var _=g(e);r&&r.l(_),s=I(_),c&&c.l(_),t=I(_),l=k(_,"DIV",{class:!0});var S=g(l);u&&u.l(S),S.forEach(h),i=I(_),o&&o.l(_),_.forEach(h),this.h()},h(){m(l,"class","content"),m(e,"class","post svelte-1age95p")},m(f,_){b(f,e,_),r&&r.m(e,null),v(e,s),c&&c.m(e,null),v(e,t),v(e,l),u&&u.m(l,null),v(e,i),o&&o.m(e,null),n=!0},p(f,[_]){f[0]?r?r.p(f,_):(r=q(f),r.c(),r.m(e,s)):r&&(r.d(1),r=null),f[1]?c?c.p(f,_):(c=A(f),c.c(),c.m(e,t)):c&&(c.d(1),c=null),u&&u.p&&(!n||_&16)&&z(u,d,f,f[4],n?F(d,f[4],_,null):B(f[4]),null),f[3].links?o?(o.p(f,_),_&8&&y(o,1)):(o=C(f),o.c(),y(o,1),o.m(e,null)):o&&(L(),E(o,1,1,()=>{o=null}),M())},i(f){n||(y(u,f),y(o),n=!0)},o(f){E(u,f),E(o),n=!1},d(f){f&&h(e),r&&r.d(),c&&c.d(),u&&u.d(f),o&&o.d()}}}function T(a,e,s){let{$$slots:t={},$$scope:l}=e;const i=H(t);let{category:n=void 0}=e,{headline:r=void 0}=e,{postUrl:c=void 0}=e;return a.$$set=d=>{"category"in d&&s(0,n=d.category),"headline"in d&&s(1,r=d.headline),"postUrl"in d&&s(2,c=d.postUrl),"$$scope"in d&&s(4,l=d.$$scope)},[n,r,c,i,l,t]}class Y extends J{constructor(e){super(),K(this,e,T,R,G,{category:0,headline:1,postUrl:2})}}export{Y as P};