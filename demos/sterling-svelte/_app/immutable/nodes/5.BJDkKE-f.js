import{s as _t,B,e as _,c as m,d as Y,h as c,j as Z,k as i,J as tt,a as v,b as $,t as nt,f as et,l as ft,N as mt,H as kt,g as b,i as dt,n as bt}from"../chunks/scheduler.Bw_xjNFK.js";import{S as vt,i as $t,c as T,a as V,m as q,t as A,b as R,d as z,f as at}from"../chunks/index.BMoFg06t.js";import{C as gt}from"../chunks/Checkbox.BWMJVdRd.js";import{L as Ct}from"../chunks/Label.Dg2xPRp_.js";import{I as xt}from"../chunks/MenuSeparator.yHwjPP_Z.js";import{P as Ht}from"../chunks/Playground.DC53lmnd.js";import{V as wt}from"../chunks/VariantInput.XD_9tCNV.js";function Pt(u){let t;return{c(){t=nt(u[3])},l(e){t=et(e,u[3])},m(e,p){i(e,t,p)},p(e,p){p&8&&mt(t,e[3])},d(e){e&&c(t)}}}function Et(u){let t,e,p,a;function f(o){u[8](o)}let l={disabled:u[1],variant:u[4],$$slots:{default:[Pt]},$$scope:{ctx:u}};return u[2]!==void 0&&(l.checked=u[2]),e=new gt({props:l}),B.push(()=>at(e,"checked",f)),e.$on("change",u[9]),{c(){t=_("div"),T(e.$$.fragment),this.h()},l(o){t=m(o,"DIV",{slot:!0,class:!0});var d=Y(t);V(e.$$.fragment,d),d.forEach(c),this.h()},h(){Z(t,"slot","component"),Z(t,"class","component svelte-wjcjyy")},m(o,d){i(o,t,d),q(e,t,null),a=!0},p(o,d){const g={};d&2&&(g.disabled=o[1]),d&16&&(g.variant=o[4]),d&2056&&(g.$$scope={dirty:d,ctx:o}),!p&&d&4&&(p=!0,g.checked=o[2],tt(()=>p=!1)),e.$set(g)},i(o){a||(A(e.$$.fragment,o),a=!0)},o(o){R(e.$$.fragment,o),a=!1},d(o){o&&c(t),z(e)}}}function jt(u){let t;return{c(){t=nt("disabled")},l(e){t=et(e,"disabled")},m(e,p){i(e,t,p)},d(e){e&&c(t)}}}function yt(u){let t,e,p;function a(l){u[6](l)}let f={};return u[3]!==void 0&&(f.value=u[3]),t=new xt({props:f}),B.push(()=>at(t,"value",a)),{c(){T(t.$$.fragment)},l(l){V(t.$$.fragment,l)},m(l,o){q(t,l,o),p=!0},p(l,o){const d={};!e&&o&8&&(e=!0,d.value=l[3],tt(()=>e=!1)),t.$set(d)},i(l){p||(A(t.$$.fragment,l),p=!0)},o(l){R(t.$$.fragment,l),p=!1},d(l){z(t,l)}}}function Lt(u){let t,e,p,a,f,l,o,d;function g(s){u[5](s)}let h={$$slots:{default:[jt]},$$scope:{ctx:u}};u[1]!==void 0&&(h.checked=u[1]),t=new gt({props:h}),B.push(()=>at(t,"checked",g)),a=new Ct({props:{text:"default slot (text)",$$slots:{default:[yt]},$$scope:{ctx:u}}});function D(s){u[7](s)}let x={availableVariants:["colorful"]};return u[4]!==void 0&&(x.variant=u[4]),l=new wt({props:x}),B.push(()=>at(l,"variant",D)),{c(){T(t.$$.fragment),p=v(),T(a.$$.fragment),f=v(),T(l.$$.fragment)},l(s){V(t.$$.fragment,s),p=$(s),V(a.$$.fragment,s),f=$(s),V(l.$$.fragment,s)},m(s,k){q(t,s,k),i(s,p,k),q(a,s,k),i(s,f,k),q(l,s,k),d=!0},p(s,k){const S={};k&2048&&(S.$$scope={dirty:k,ctx:s}),!e&&k&2&&(e=!0,S.checked=s[1],tt(()=>e=!1)),t.$set(S);const H={};k&2056&&(H.$$scope={dirty:k,ctx:s}),a.$set(H);const C={};!o&&k&16&&(o=!0,C.variant=s[4],tt(()=>o=!1)),l.$set(C)},i(s){d||(A(t.$$.fragment,s),A(a.$$.fragment,s),A(l.$$.fragment,s),d=!0)},o(s){R(t.$$.fragment,s),R(a.$$.fragment,s),R(l.$$.fragment,s),d=!1},d(s){s&&(c(p),c(f)),z(t,s),z(a,s),z(l,s)}}}function It(u){let t,e,p;return{c(){t=_("div"),e=nt("checked: "),p=nt(u[2])},l(a){t=m(a,"DIV",{});var f=Y(t);e=et(f,"checked: "),p=et(f,u[2]),f.forEach(c)},m(a,f){i(a,t,f),ft(t,e),ft(t,p)},p(a,f){f&4&&mt(p,a[2])},d(a){a&&c(t)}}}function Mt(u){let t,e,p={$$slots:{status:[It],props:[Lt],component:[Et]},$$scope:{ctx:u}};return t=new Ht({props:p}),u[10](t),{c(){T(t.$$.fragment)},l(a){V(t.$$.fragment,a)},m(a,f){q(t,a,f),e=!0},p(a,[f]){const l={};f&2079&&(l.$$scope={dirty:f,ctx:a}),t.$set(l)},i(a){e||(A(t.$$.fragment,a),e=!0)},o(a){R(t.$$.fragment,a),e=!1},d(a){u[10](null),z(t,a)}}}function Tt(u,t,e){let p,a=!1,f=!1,l="sterling-svelte",o="";function d(k){a=k,e(1,a)}function g(k){l=k,e(3,l)}function h(k){o=k,e(4,o)}function D(k){f=k,e(2,f)}const x=()=>p.recordEvent("change");function s(k){B[k?"unshift":"push"](()=>{p=k,e(0,p)})}return[p,a,f,l,o,d,g,h,D,x,s]}class Vt extends vt{constructor(t){super(),$t(this,t,Tt,Mt,_t,{})}}function qt(u){let t,e="Checkbox",p,a,f="A styled HTML <code>input</code> element with <code>type=checkbox</code>.",l,o,d="Props",g,h,D="HTMLInputElement props are included.",x,s,k,S=`<code class="language-ts"><span class="token comment">/** Additional class names to apply. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> variant<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></code>`,H,C,st="Events",J,w,lt="HTMLInputElement events are included.",N,P,pt="Methods",U,E,ot="HTMLInputElement <code>blur</code>, <code>click</code>, and <code>focus</code> methods are included.",F,j,ct="Anatomy",G,y,ut="Use the default slot to provide content for the optional label.",K,L,O,ht=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sterling-checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- hidden--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>checked<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>colorful<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>inputId<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>variant<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,Q,I,it="Playground",W,M,X;return M=new Vt({}),{c(){t=_("h1"),t.textContent=e,p=v(),a=_("p"),a.innerHTML=f,l=v(),o=_("h2"),o.textContent=d,g=v(),h=_("p"),h.textContent=D,x=v(),s=_("pre"),k=new kt(!1),H=v(),C=_("h2"),C.textContent=st,J=v(),w=_("p"),w.textContent=lt,N=v(),P=_("h2"),P.textContent=pt,U=v(),E=_("p"),E.innerHTML=ot,F=v(),j=_("h2"),j.textContent=ct,G=v(),y=_("p"),y.textContent=ut,K=v(),L=_("pre"),O=new kt(!1),Q=v(),I=_("h2"),I.textContent=it,W=v(),T(M.$$.fragment),this.h()},l(n){t=m(n,"H1",{"data-svelte-h":!0}),b(t)!=="svelte-1abgia9"&&(t.textContent=e),p=$(n),a=m(n,"P",{"data-svelte-h":!0}),b(a)!=="svelte-q993t3"&&(a.innerHTML=f),l=$(n),o=m(n,"H2",{"data-svelte-h":!0}),b(o)!=="svelte-1lq2xlg"&&(o.textContent=d),g=$(n),h=m(n,"P",{"data-svelte-h":!0}),b(h)!=="svelte-1593rip"&&(h.textContent=D),x=$(n),s=m(n,"PRE",{class:!0});var r=Y(s);k=dt(r,!1),r.forEach(c),H=$(n),C=m(n,"H2",{"data-svelte-h":!0}),b(C)!=="svelte-1b7vw6v"&&(C.textContent=st),J=$(n),w=m(n,"P",{"data-svelte-h":!0}),b(w)!=="svelte-dsq3he"&&(w.textContent=lt),N=$(n),P=m(n,"H2",{"data-svelte-h":!0}),b(P)!=="svelte-27oo3k"&&(P.textContent=pt),U=$(n),E=m(n,"P",{"data-svelte-h":!0}),b(E)!=="svelte-1k765au"&&(E.innerHTML=ot),F=$(n),j=m(n,"H2",{"data-svelte-h":!0}),b(j)!=="svelte-nes0c9"&&(j.textContent=ct),G=$(n),y=m(n,"P",{"data-svelte-h":!0}),b(y)!=="svelte-1klanps"&&(y.textContent=ut),K=$(n),L=m(n,"PRE",{class:!0});var rt=Y(L);O=dt(rt,!1),rt.forEach(c),Q=$(n),I=m(n,"H2",{"data-svelte-h":!0}),b(I)!=="svelte-1uz9czj"&&(I.textContent=it),W=$(n),V(M.$$.fragment,n),this.h()},h(){k.a=null,Z(s,"class","language-ts"),O.a=null,Z(L,"class","language-svelte")},m(n,r){i(n,t,r),i(n,p,r),i(n,a,r),i(n,l,r),i(n,o,r),i(n,g,r),i(n,h,r),i(n,x,r),i(n,s,r),k.m(S,s),i(n,H,r),i(n,C,r),i(n,J,r),i(n,w,r),i(n,N,r),i(n,P,r),i(n,U,r),i(n,E,r),i(n,F,r),i(n,j,r),i(n,G,r),i(n,y,r),i(n,K,r),i(n,L,r),O.m(ht,L),i(n,Q,r),i(n,I,r),i(n,W,r),q(M,n,r),X=!0},p:bt,i(n){X||(A(M.$$.fragment,n),X=!0)},o(n){R(M.$$.fragment,n),X=!1},d(n){n&&(c(t),c(p),c(a),c(l),c(o),c(g),c(h),c(x),c(s),c(H),c(C),c(J),c(w),c(N),c(P),c(U),c(E),c(F),c(j),c(G),c(y),c(K),c(L),c(Q),c(I),c(W)),z(M,n)}}}class Nt extends vt{constructor(t){super(),$t(this,t,null,qt,_t,{})}}export{Nt as component};