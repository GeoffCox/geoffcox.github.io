import{S as fe,i as ge,s as ve,L as Ve,D as E,k as K,l as D,m as w,h as k,n as ke,V as I,W as _,b as ye,H as Ee,X as t,M as Se,N as ze,O as Te,I as Ce,g as Ke,d as De,Y as we,J as N,a1 as H,a2 as Ie,o as Ne,a3 as He,K as Me,_ as l,w as Oe}from"./index.a21fe2bb.js";import{c as We}from"./keyborg.esm.7544f288.js";import{w as y}from"./index.a2b516e3.js";import{T as Xe}from"./TreeItemDisplay.668493b7.js";/* empty css                                           */const Ye=e=>({composed:e[0]&1,disabled:e[0]&2}),M=e=>({composed:e[0],disabled:e[1]});function qe(e){let n,o,d,p,m;const c=e[14].default,i=Ve(c,e,e[13],M);let f=[{"aria-disabled":e[1]},{class:"sterling-tree"},{role:"tree"},e[6]],b={};for(let s=0;s<f.length;s+=1)b=E(b,f[s]);return{c(){n=K("div"),o=K("div"),i&&i.c(),this.h()},l(s){n=D(s,"DIV",{"aria-disabled":!0,class:!0,role:!0});var r=w(n);o=D(r,"DIV",{class:!0});var h=w(o);i&&i.l(h),h.forEach(k),r.forEach(k),this.h()},h(){ke(o,"class","container svelte-1mzkl8z"),I(n,b),_(n,"composed",e[0]),_(n,"disabled",e[1]),_(n,"using-keyboard",e[3]),_(n,"svelte-1mzkl8z",!0)},m(s,r){ye(s,n,r),Ee(n,o),i&&i.m(o,null),e[46](n),d=!0,p||(m=[t(n,"blur",e[15]),t(n,"click",e[16]),t(n,"dblclick",e[17]),t(n,"dragend",e[18]),t(n,"dragenter",e[19]),t(n,"dragleave",e[20]),t(n,"dragover",e[21]),t(n,"dragstart",e[22]),t(n,"drop",e[23]),t(n,"focus",e[24]),t(n,"focusin",e[25]),t(n,"focusout",e[26]),t(n,"keydown",e[27]),t(n,"keypress",e[28]),t(n,"keyup",e[29]),t(n,"mousedown",e[30]),t(n,"mouseenter",e[31]),t(n,"mouseleave",e[32]),t(n,"mousemove",e[33]),t(n,"mouseover",e[34]),t(n,"mouseout",e[35]),t(n,"mouseup",e[36]),t(n,"pointercancel",e[37]),t(n,"pointerdown",e[38]),t(n,"pointerenter",e[39]),t(n,"pointerleave",e[40]),t(n,"pointermove",e[41]),t(n,"pointerover",e[42]),t(n,"pointerout",e[43]),t(n,"pointerup",e[44]),t(n,"wheel",e[45])],p=!0)},p(s,r){i&&i.p&&(!d||r[0]&8195)&&Se(i,c,s,s[13],d?Te(c,s[13],r,Ye):ze(s[13]),M),I(n,b=Ce(f,[(!d||r[0]&2)&&{"aria-disabled":s[1]},{class:"sterling-tree"},{role:"tree"},r[0]&64&&s[6]])),_(n,"composed",s[0]),_(n,"disabled",s[1]),_(n,"using-keyboard",s[3]),_(n,"svelte-1mzkl8z",!0)},i(s){d||(Ke(i,s),d=!0)},o(s){De(i,s),d=!1},d(s){s&&k(n),i&&i.d(s),e[46](null),p=!1,we(m)}}}function Je(e,n,o){const d=["composed","disabled","selectedValue","expandedValues","blur","focus"];let p=N(n,d),m,c,{$$slots:i={},$$scope:f}=n,{composed:b=!1}=n,{disabled:s=!1}=n,{selectedValue:r=void 0}=n,{expandedValues:h=[]}=n,u;const g=y(r);H(e,g,a=>o(12,c=a));const v=y(h);H(e,v,a=>o(11,m=a));const S=y(s),O=()=>{u==null||u.blur()},W=a=>{u==null||u.focus(a)},z=Ie(),X=a=>{z("expandCollapse",{expandedValues:a})},Y=a=>{z("select",{selectedValue:a})};let V=We(window),T=V.isNavigatingWithKeyboard();const C=a=>{o(3,T=a)};Ne(()=>(V.subscribe(C),()=>{V.unsubscribe(C)})),He(Xe,{expandedValues:v,selectedValue:g,disabled:S});function q(a){l.call(this,e,a)}function J(a){l.call(this,e,a)}function L(a){l.call(this,e,a)}function P(a){l.call(this,e,a)}function j(a){l.call(this,e,a)}function A(a){l.call(this,e,a)}function B(a){l.call(this,e,a)}function F(a){l.call(this,e,a)}function G(a){l.call(this,e,a)}function Q(a){l.call(this,e,a)}function U(a){l.call(this,e,a)}function Z(a){l.call(this,e,a)}function R(a){l.call(this,e,a)}function x(a){l.call(this,e,a)}function $(a){l.call(this,e,a)}function ee(a){l.call(this,e,a)}function ae(a){l.call(this,e,a)}function ne(a){l.call(this,e,a)}function te(a){l.call(this,e,a)}function le(a){l.call(this,e,a)}function se(a){l.call(this,e,a)}function oe(a){l.call(this,e,a)}function ie(a){l.call(this,e,a)}function re(a){l.call(this,e,a)}function de(a){l.call(this,e,a)}function ue(a){l.call(this,e,a)}function ce(a){l.call(this,e,a)}function he(a){l.call(this,e,a)}function _e(a){l.call(this,e,a)}function me(a){l.call(this,e,a)}function be(a){l.call(this,e,a)}function pe(a){Oe[a?"unshift":"push"](()=>{u=a,o(2,u)})}return e.$$set=a=>{n=E(E({},n),Me(a)),o(6,p=N(n,d)),"composed"in a&&o(0,b=a.composed),"disabled"in a&&o(1,s=a.disabled),"selectedValue"in a&&o(7,r=a.selectedValue),"expandedValues"in a&&o(8,h=a.expandedValues),"$$scope"in a&&o(13,f=a.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&4096&&(o(7,r=c),Y(c)),e.$$.dirty[0]&128&&g.set(r),e.$$.dirty[0]&2048&&(o(8,h=m),X(m)),e.$$.dirty[0]&256&&v.set(h),e.$$.dirty[0]&2&&S.set(s)},[b,s,u,T,g,v,p,r,h,O,W,m,c,f,i,q,J,L,P,j,A,B,F,G,Q,U,Z,R,x,$,ee,ae,ne,te,le,se,oe,ie,re,de,ue,ce,he,_e,me,be,pe]}class Fe extends fe{constructor(n){super(),ge(this,n,Je,qe,ve,{composed:0,disabled:1,selectedValue:7,expandedValues:8,blur:9,focus:10},null,[-1,-1])}get blur(){return this.$$.ctx[9]}get focus(){return this.$$.ctx[10]}}export{Fe as T};