import{S as x,i as $,s as ee,O as w,k as y,a as L,l as I,m as E,c as P,h as p,Z as S,_ as T,n as V,b as G,D as v,E as u,T as le,f as D,g as te,t as C,d as se,K as ae,U,a2 as ne,V as ie,w as oe,x as ce,y as ue,z as re,C as de,G as he,H as _e,I as fe,a1 as r}from"./index-a1914b40.js";import{v as me,L as be}from"./Example-48e67d2d.js";import"./Switch.svelte_svelte_type_style_lang-ae4f99bd.js";const pe=e=>({}),q=e=>({});function z(e){let s,n,l;return n=new be({props:{disabled:e[1],for:e[2],$$slots:{default:[ge]},$$scope:{ctx:e}}}),{c(){s=y("div"),oe(n.$$.fragment),this.h()},l(a){s=I(a,"DIV",{class:!0});var i=E(s);ce(n.$$.fragment,i),i.forEach(p),this.h()},h(){V(s,"class","label svelte-76i56f")},m(a,i){G(a,s,i),ue(n,s,null),l=!0},p(a,i){const h={};i&2&&(h.disabled=a[1]),i&134217728&&(h.$$scope={dirty:i,ctx:a}),n.$set(h)},i(a){l||(D(n.$$.fragment,a),l=!0)},o(a){C(n.$$.fragment,a),l=!1},d(a){a&&p(s),re(n)}}}function ge(e){let s;const n=e[5].label,l=de(n,e,e[27],q);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,i){l&&l.m(a,i),s=!0},p(a,i){l&&l.p&&(!s||i&134217728)&&he(l,n,a,a[27],s?fe(n,a[27],i,pe):_e(a[27]),q)},i(a){s||(D(l,a),s=!0)},o(a){C(l,a),s=!1},d(a){l&&l.d(a)}}}function ke(e){let s,n,l,a,i,h,f,_,g,k=[{type:"checkbox"},e[3],{id:e[2]},{disabled:e[1]}],m={};for(let c=0;c<k.length;c+=1)m=w(m,k[c]);let o=e[4].label&&z(e);return{c(){s=y("div"),n=y("div"),l=y("input"),a=L(),i=y("div"),h=L(),o&&o.c(),this.h()},l(c){s=I(c,"DIV",{class:!0});var d=E(s);n=I(d,"DIV",{class:!0});var b=E(n);l=I(b,"INPUT",{type:!0,id:!0}),a=P(b),i=I(b,"DIV",{class:!0}),E(i).forEach(p),b.forEach(p),h=P(d),o&&o.l(d),d.forEach(p),this.h()},h(){S(l,m),T(l,"svelte-76i56f",!0),V(i,"class","indicator svelte-76i56f"),V(n,"class","container svelte-76i56f"),V(s,"class","sterling-checkbox svelte-76i56f")},m(c,d){G(c,s,d),v(s,n),v(n,l),l.autofocus&&l.focus(),l.checked=e[0],v(n,a),v(n,i),v(s,h),o&&o.m(s,null),f=!0,_||(g=[u(l,"blur",e[6]),u(l,"click",e[7]),u(l,"change",e[8]),u(l,"dblclick",e[9]),u(l,"focus",e[10]),u(l,"focusin",e[11]),u(l,"focusout",e[12]),u(l,"keydown",e[13]),u(l,"keypress",e[14]),u(l,"keyup",e[15]),u(l,"input",e[16]),u(l,"mousedown",e[17]),u(l,"mouseenter",e[18]),u(l,"mouseleave",e[19]),u(l,"mousemove",e[20]),u(l,"mouseover",e[21]),u(l,"mouseout",e[22]),u(l,"mouseup",e[23]),u(l,"toggle",e[24]),u(l,"wheel",e[25]),u(l,"change",e[26])],_=!0)},p(c,[d]){S(l,m=le(k,[{type:"checkbox"},d&8&&c[3],{id:c[2]},(!f||d&2)&&{disabled:c[1]}])),d&1&&(l.checked=c[0]),T(l,"svelte-76i56f",!0),c[4].label?o?(o.p(c,d),d&16&&D(o,1)):(o=z(c),o.c(),D(o,1),o.m(s,null)):o&&(te(),C(o,1,1,()=>{o=null}),se())},i(c){f||(D(o),f=!0)},o(c){C(o),f=!1},d(c){c&&p(s),o&&o.d(),_=!1,ae(g)}}}function ve(e,s,n){const l=["checked","disabled"];let a=U(s,l),{$$slots:i={},$$scope:h}=s;const f=ne(i);let{checked:_=!1}=s,{disabled:g=!1}=s;const k=me();function m(t){r.call(this,e,t)}function o(t){r.call(this,e,t)}function c(t){r.call(this,e,t)}function d(t){r.call(this,e,t)}function b(t){r.call(this,e,t)}function H(t){r.call(this,e,t)}function K(t){r.call(this,e,t)}function N(t){r.call(this,e,t)}function O(t){r.call(this,e,t)}function Z(t){r.call(this,e,t)}function j(t){r.call(this,e,t)}function A(t){r.call(this,e,t)}function B(t){r.call(this,e,t)}function F(t){r.call(this,e,t)}function J(t){r.call(this,e,t)}function M(t){r.call(this,e,t)}function Q(t){r.call(this,e,t)}function R(t){r.call(this,e,t)}function W(t){r.call(this,e,t)}function X(t){r.call(this,e,t)}function Y(){_=this.checked,n(0,_)}return e.$$set=t=>{s=w(w({},s),ie(t)),n(3,a=U(s,l)),"checked"in t&&n(0,_=t.checked),"disabled"in t&&n(1,g=t.disabled),"$$scope"in t&&n(27,h=t.$$scope)},[_,g,k,a,f,i,m,o,c,d,b,H,K,N,O,Z,j,A,B,F,J,M,Q,R,W,X,Y,h]}class Ee extends x{constructor(s){super(),$(this,s,ve,ke,ee,{checked:0,disabled:1})}}export{Ee as C};