import{S as x,i as $,s as ee,Q as E,k as w,a as L,l as y,m as I,c as N,h as p,R as P,T as S,n as V,b as z,D as v,U as c,V as le,f as D,g as te,t as C,d as se,W as ae,X as T,N as ne,Y as ie,w as oe,x as ue,y as ce,z as re,C as de,F as he,G as fe,H as _e,Z as r}from"./index-ce302ad6.js";import{L as me}from"./Label-cfb430ef.js";/* empty css                                               */import{v as ge}from"./v4-a960c1f4.js";const be=e=>({checked:e&2,disabled:e&4}),U=e=>({checked:e[1],disabled:e[2]});function q(e){let s,n,l;return n=new me({props:{disabled:e[2],for:e[0],$$slots:{default:[pe]},$$scope:{ctx:e}}}),{c(){s=w("div"),oe(n.$$.fragment),this.h()},l(a){s=y(a,"DIV",{class:!0});var i=I(s);ue(n.$$.fragment,i),i.forEach(p),this.h()},h(){V(s,"class","label svelte-xgirw")},m(a,i){z(a,s,i),ce(n,s,null),l=!0},p(a,i){const h={};i&4&&(h.disabled=a[2]),i&1&&(h.for=a[0]),i&134217734&&(h.$$scope={dirty:i,ctx:a}),n.$set(h)},i(a){l||(D(n.$$.fragment,a),l=!0)},o(a){C(n.$$.fragment,a),l=!1},d(a){a&&p(s),re(n)}}}function pe(e){let s;const n=e[5].default,l=de(n,e,e[27],U);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,i){l&&l.m(a,i),s=!0},p(a,i){l&&l.p&&(!s||i&134217734)&&he(l,n,a,a[27],s?_e(n,a[27],i,be):fe(a[27]),U)},i(a){s||(D(l,a),s=!0)},o(a){C(l,a),s=!1},d(a){l&&l.d(a)}}}function ke(e){let s,n,l,a,i,h,f,_,k,m=[{disabled:e[2]},{id:e[0]},{type:"checkbox"},e[4]],g={};for(let u=0;u<m.length;u+=1)g=E(g,m[u]);let o=e[3].default&&q(e);return{c(){s=w("div"),n=w("div"),l=w("input"),a=L(),i=w("div"),h=L(),o&&o.c(),this.h()},l(u){s=y(u,"DIV",{class:!0});var d=I(s);n=y(d,"DIV",{class:!0});var b=I(n);l=y(b,"INPUT",{id:!0,type:!0}),a=N(b),i=y(b,"DIV",{class:!0}),I(i).forEach(p),b.forEach(p),h=N(d),o&&o.l(d),d.forEach(p),this.h()},h(){P(l,g),S(l,"svelte-xgirw",!0),V(i,"class","indicator svelte-xgirw"),V(n,"class","container svelte-xgirw"),V(s,"class","sterling-checkbox svelte-xgirw")},m(u,d){z(u,s,d),v(s,n),v(n,l),l.autofocus&&l.focus(),l.checked=e[1],v(n,a),v(n,i),v(s,h),o&&o.m(s,null),f=!0,_||(k=[c(l,"blur",e[6]),c(l,"click",e[7]),c(l,"change",e[8]),c(l,"dblclick",e[9]),c(l,"focus",e[10]),c(l,"focusin",e[11]),c(l,"focusout",e[12]),c(l,"keydown",e[13]),c(l,"keypress",e[14]),c(l,"keyup",e[15]),c(l,"input",e[16]),c(l,"mousedown",e[17]),c(l,"mouseenter",e[18]),c(l,"mouseleave",e[19]),c(l,"mousemove",e[20]),c(l,"mouseover",e[21]),c(l,"mouseout",e[22]),c(l,"mouseup",e[23]),c(l,"toggle",e[24]),c(l,"wheel",e[25]),c(l,"change",e[26])],_=!0)},p(u,[d]){P(l,g=le(m,[(!f||d&4)&&{disabled:u[2]},(!f||d&1)&&{id:u[0]},{type:"checkbox"},d&16&&u[4]])),d&2&&(l.checked=u[1]),S(l,"svelte-xgirw",!0),u[3].default?o?(o.p(u,d),d&8&&D(o,1)):(o=q(u),o.c(),D(o,1),o.m(s,null)):o&&(te(),C(o,1,1,()=>{o=null}),se())},i(u){f||(D(o),f=!0)},o(u){C(o),f=!1},d(u){u&&p(s),o&&o.d(),_=!1,ae(k)}}}function ve(e,s,n){const l=["checked","disabled","id"];let a=T(s,l),{$$slots:i={},$$scope:h}=s;const f=ne(i);let{checked:_=!1}=s,{disabled:k=!1}=s,{id:m=void 0}=s;function g(t){r.call(this,e,t)}function o(t){r.call(this,e,t)}function u(t){r.call(this,e,t)}function d(t){r.call(this,e,t)}function b(t){r.call(this,e,t)}function F(t){r.call(this,e,t)}function G(t){r.call(this,e,t)}function H(t){r.call(this,e,t)}function Q(t){r.call(this,e,t)}function R(t){r.call(this,e,t)}function W(t){r.call(this,e,t)}function X(t){r.call(this,e,t)}function Y(t){r.call(this,e,t)}function Z(t){r.call(this,e,t)}function j(t){r.call(this,e,t)}function A(t){r.call(this,e,t)}function B(t){r.call(this,e,t)}function J(t){r.call(this,e,t)}function K(t){r.call(this,e,t)}function M(t){r.call(this,e,t)}function O(){_=this.checked,n(1,_)}return e.$$set=t=>{s=E(E({},s),ie(t)),n(4,a=T(s,l)),"checked"in t&&n(1,_=t.checked),"disabled"in t&&n(2,k=t.disabled),"id"in t&&n(0,m=t.id),"$$scope"in t&&n(27,h=t.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&f.default&&m===void 0&&n(0,m=ge())},[m,_,k,f,a,i,g,o,u,d,b,F,G,H,Q,R,W,X,Y,Z,j,A,B,J,K,M,O,h]}class Ve extends x{constructor(s){super(),$(this,s,ve,ke,ee,{checked:1,disabled:2,id:0})}}export{Ve as C};