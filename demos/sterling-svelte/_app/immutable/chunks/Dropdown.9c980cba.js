import{S as Pe,i as Ae,s as Ve,L as N,D as S,k as E,a as H,y as Ke,l as P,m as A,h as k,c as J,z as Me,n as w,V as L,W as b,b as G,H as V,A as we,P as Ne,Y as n,M as q,N as z,O as B,I as Se,Q as qe,g as K,d as M,B as ze,Z as Be,J as Q,a0 as Ge,a4 as He,K as Je,a1 as Le,a2 as W,$ as t,w as Y,C as Qe}from"./index.3ab8247a.js";import{P as We}from"./Popover.372b4bfe.js";import{c as Ye}from"./clickOutside.5904bc9a.js";import{i as Ze}from"./idGenerator.e5fbd04c.js";import{p as je,s as Fe}from"./index.6bd4216f.js";/* empty css                                               */const Te=e=>({colorful:e[0]&2,composed:e[0]&4,disabled:e[0]&8,open:e[0]&1}),Z=e=>({colorful:e[1],composed:e[2],disabled:e[3],open:e[0]}),Ue=e=>({colorful:e[0]&2,composed:e[0]&4,disabled:e[0]&8,open:e[0]&1}),j=e=>({colorful:e[1],composed:e[2],disabled:e[3],open:e[0]}),Xe=e=>({colorful:e[0]&2,composed:e[0]&4,disabled:e[0]&8,open:e[0]&1}),F=e=>({colorful:e[1],composed:e[2],disabled:e[3],open:e[0]});function Re(e){let l,a;return{c(){l=E("div"),a=E("div"),this.h()},l(d){l=P(d,"DIV",{class:!0});var _=A(l);a=P(_,"DIV",{class:!0}),A(a).forEach(k),_.forEach(k),this.h()},h(){w(a,"class","chevron svelte-crgrlx"),w(l,"class","button svelte-crgrlx")},m(d,_){G(d,l,_),V(l,a)},p:Qe,d(d){d&&k(l)}}}function xe(e){let l,a,d;const _=e[17].default,i=N(_,e,e[46],Z);return{c(){l=E("div"),i&&i.c(),this.h()},l(u){l=P(u,"DIV",{class:!0});var p=A(l);i&&i.l(p),p.forEach(k),this.h()},h(){w(l,"class","popup-content svelte-crgrlx"),b(l,"colorful",e[1])},m(u,p){G(u,l,p),i&&i.m(l,null),e[44](l),d=!0},p(u,p){i&&i.p&&(!d||p[0]&15|p[1]&32768)&&q(i,_,u,u[46],d?B(_,u[46],p,Te):z(u[46]),Z),(!d||p[0]&2)&&b(l,"colorful",u[1])},i(u){d||(K(i,u),Le(()=>{a||(a=W(l,e[6],{duration:200},!0)),a.run(1)}),d=!0)},o(u){M(i,u),a||(a=W(l,e[6],{duration:200},!1)),a.run(0),d=!1},d(u){u&&k(l),i&&i.d(u),e[44](null),u&&a&&a.end()}}}function $e(e){let l,a,d,_,i,u,p,m,y,I;const D=e[17].value,f=N(D,e,e[46],F),h=e[17].button,v=N(h,e,e[46],j),c=v||Re();i=new We({props:{reference:e[4],open:!e[3]&&e[0],$$slots:{default:[xe]},$$scope:{ctx:e}}});let O=[{"aria-controls":e[7]},{"aria-haspopup":u=!0},{"aria-expanded":e[0]},{class:"sterling-dropdown"},{role:"combobox"},{tabindex:"0"},e[11]],C={};for(let s=0;s<O.length;s+=1)C=S(C,O[s]);return{c(){l=E("div"),a=E("div"),f&&f.c(),d=H(),c&&c.c(),_=H(),Ke(i.$$.fragment),this.h()},l(s){l=P(s,"DIV",{"aria-controls":!0,"aria-haspopup":!0,"aria-expanded":!0,class:!0,role:!0,tabindex:!0});var r=A(l);a=P(r,"DIV",{class:!0});var g=A(a);f&&f.l(g),g.forEach(k),d=J(r),c&&c.l(r),_=J(r),Me(i.$$.fragment,r),r.forEach(k),this.h()},h(){w(a,"class","value svelte-crgrlx"),L(l,C),b(l,"colorful",e[1]),b(l,"composed",e[2]),b(l,"disabled",e[3]),b(l,"svelte-crgrlx",!0)},m(s,r){G(s,l,r),V(l,a),f&&f.m(a,null),V(l,d),c&&c.m(l,null),V(l,_),we(i,l,null),e[45](l),m=!0,y||(I=[Ne(p=Ye.call(null,l,{ignoreOthers:[e[5]]})),n(l,"blur",e[18]),n(l,"click",e[19]),n(l,"click",e[8]),n(l,"copy",e[20]),n(l,"cut",e[21]),n(l,"dblclick",e[22]),n(l,"dragend",e[23]),n(l,"dragenter",e[24]),n(l,"dragleave",e[25]),n(l,"dragover",e[26]),n(l,"dragstart",e[27]),n(l,"drop",e[28]),n(l,"focus",e[29]),n(l,"focusin",e[30]),n(l,"focusout",e[31]),n(l,"keydown",e[32]),n(l,"keydown",e[9]),n(l,"keypress",e[33]),n(l,"keyup",e[34]),n(l,"mousedown",e[35]),n(l,"mouseenter",e[36]),n(l,"mouseleave",e[37]),n(l,"mousemove",e[38]),n(l,"mouseover",e[39]),n(l,"mouseout",e[40]),n(l,"mouseup",e[41]),n(l,"wheel",e[42],{passive:!0}),n(l,"paste",e[43]),n(l,"click_outside",e[10])],y=!0)},p(s,r){f&&f.p&&(!m||r[0]&15|r[1]&32768)&&q(f,D,s,s[46],m?B(D,s[46],r,Xe):z(s[46]),F),v&&v.p&&(!m||r[0]&15|r[1]&32768)&&q(v,h,s,s[46],m?B(h,s[46],r,Ue):z(s[46]),j);const g={};r[0]&16&&(g.reference=s[4]),r[0]&9&&(g.open=!s[3]&&s[0]),r[0]&47|r[1]&32768&&(g.$$scope={dirty:r,ctx:s}),i.$set(g),L(l,C=Se(O,[{"aria-controls":s[7]},{"aria-haspopup":u},(!m||r[0]&1)&&{"aria-expanded":s[0]},{class:"sterling-dropdown"},{role:"combobox"},{tabindex:"0"},r[0]&2048&&s[11]])),p&&qe(p.update)&&r[0]&32&&p.update.call(null,{ignoreOthers:[s[5]]}),b(l,"colorful",s[1]),b(l,"composed",s[2]),b(l,"disabled",s[3]),b(l,"svelte-crgrlx",!0)},i(s){m||(K(f,s),K(c,s),K(i.$$.fragment,s),m=!0)},o(s){M(f,s),M(c,s),M(i.$$.fragment,s),m=!1},d(s){s&&k(l),f&&f.d(s),c&&c.d(s),ze(i),e[45](null),y=!1,Be(I)}}}function eo(e,l,a){let d;const _=["colorful","composed","disabled","open","stayOpenOnClickAway","click","blur","focus"];let i=Q(l,_),u;Ge(e,je,o=>a(16,u=o));let{$$slots:p={},$$scope:m}=l;const y=Ze.nextId("Dropdown-popup");let{colorful:I=!1}=l,{composed:D=!1}=l,{disabled:f=!1}=l,{open:h=!1}=l,{stayOpenOnClickAway:v=!1}=l,c,O;const C=He(),s=o=>{C("open",{open:o})},r=()=>{c==null||c.click()},g=()=>{c==null||c.blur()},T=o=>{c==null||c.focus(o)},U=o=>{f||(a(0,h=!h),o.preventDefault(),o.stopPropagation())},X=o=>{if(!o.altKey&&!o.ctrlKey&&!o.shiftKey)switch(o.key){case" ":return a(0,h=!h),o.preventDefault(),o.stopPropagation(),!1;case"Escape":return a(0,h=!1),o.preventDefault(),o.stopPropagation(),!1}},R=o=>{v||a(0,h=!1)},x=(o,oo)=>({delay:0,duration:0});function $(o){t.call(this,e,o)}function ee(o){t.call(this,e,o)}function oe(o){t.call(this,e,o)}function le(o){t.call(this,e,o)}function se(o){t.call(this,e,o)}function ae(o){t.call(this,e,o)}function ne(o){t.call(this,e,o)}function te(o){t.call(this,e,o)}function ie(o){t.call(this,e,o)}function re(o){t.call(this,e,o)}function ue(o){t.call(this,e,o)}function ce(o){t.call(this,e,o)}function de(o){t.call(this,e,o)}function fe(o){t.call(this,e,o)}function pe(o){t.call(this,e,o)}function _e(o){t.call(this,e,o)}function he(o){t.call(this,e,o)}function me(o){t.call(this,e,o)}function be(o){t.call(this,e,o)}function ge(o){t.call(this,e,o)}function ve(o){t.call(this,e,o)}function ke(o){t.call(this,e,o)}function Oe(o){t.call(this,e,o)}function De(o){t.call(this,e,o)}function Ce(o){t.call(this,e,o)}function ye(o){t.call(this,e,o)}function Ie(o){Y[o?"unshift":"push"](()=>{O=o,a(5,O)})}function Ee(o){Y[o?"unshift":"push"](()=>{c=o,a(4,c)})}return e.$$set=o=>{l=S(S({},l),Je(o)),a(11,i=Q(l,_)),"colorful"in o&&a(1,I=o.colorful),"composed"in o&&a(2,D=o.composed),"disabled"in o&&a(3,f=o.disabled),"open"in o&&a(0,h=o.open),"stayOpenOnClickAway"in o&&a(12,v=o.stayOpenOnClickAway),"$$scope"in o&&a(46,m=o.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&1&&s(h),e.$$.dirty[0]&65536&&a(6,d=u?x:Fe)},[h,I,D,f,c,O,d,y,U,X,R,i,v,r,g,T,u,p,$,ee,oe,le,se,ae,ne,te,ie,re,ue,ce,de,fe,pe,_e,he,me,be,ge,ve,ke,Oe,De,Ce,ye,Ie,Ee,m]}class ro extends Pe{constructor(l){super(),Ae(this,l,eo,$e,Ve,{colorful:1,composed:2,disabled:3,open:0,stayOpenOnClickAway:12,click:13,blur:14,focus:15},null,[-1,-1])}get click(){return this.$$.ctx[13]}get blur(){return this.$$.ctx[14]}get focus(){return this.$$.ctx[15]}}export{ro as D};