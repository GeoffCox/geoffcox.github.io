import{S as N,i as O,s as w,C as x,Q as b,k as $,w as ee,a as ne,l as le,m as te,x as ae,c as se,h as C,R as k,T as h,b as ie,y as oe,D as de,U as a,F as ue,G as he,H as re,V as ce,f as y,t as T,z as _e,W as me,X as D,Y as fe,Z as s}from"./index-ce302ad6.js";import{T as pe}from"./TreeChevron-a03cd0ca.js";/* empty css                                                      */const ve=e=>({depth:e[0]&1,disabled:e[0]&2,expanded:e[0]&4,hasChildren:e[0]&8,selected:e[0]&32,value:e[0]&16}),j=e=>({depth:e[0],disabled:e[1],expanded:e[2],hasChildren:e[3],selected:e[5],value:e[4]});function ge(e){let l,i,_,r,u,m,v;i=new pe({props:{expanded:e[2],hasChildren:e[3]}});const f=e[8].default,o=x(f,e,e[7],j);let p=[{class:"sterling-tree-item"},{style:r=`--sterling-tree-item-depth: ${e[0]}`},e[6]],c={};for(let t=0;t<p.length;t+=1)c=b(c,p[t]);return{c(){l=$("div"),ee(i.$$.fragment),_=ne(),o&&o.c(),this.h()},l(t){l=le(t,"DIV",{class:!0,style:!0});var d=te(l);ae(i.$$.fragment,d),_=se(d),o&&o.l(d),d.forEach(C),this.h()},h(){k(l,c),h(l,"disabled",e[1]),h(l,"expanded",e[2]),h(l,"selected",e[5]),h(l,"svelte-hjvnmf",!0)},m(t,d){ie(t,l,d),oe(i,l,null),de(l,_),o&&o.m(l,null),u=!0,m||(v=[a(l,"blur",e[9]),a(l,"click",e[10]),a(l,"dblclick",e[11]),a(l,"focus",e[12]),a(l,"focusin",e[13]),a(l,"focusout",e[14]),a(l,"keydown",e[15]),a(l,"keypress",e[16]),a(l,"keyup",e[17]),a(l,"mousedown",e[18]),a(l,"mouseenter",e[19]),a(l,"mouseleave",e[20]),a(l,"mousemove",e[21]),a(l,"mouseover",e[22]),a(l,"mouseout",e[23]),a(l,"mouseup",e[24]),a(l,"pointercancel",e[25]),a(l,"pointerdown",e[26]),a(l,"pointerenter",e[27]),a(l,"pointerleave",e[28]),a(l,"pointermove",e[29]),a(l,"pointerover",e[30]),a(l,"pointerout",e[31]),a(l,"pointerup",e[32]),a(l,"wheel",e[33])],m=!0)},p(t,d){const g={};d[0]&4&&(g.expanded=t[2]),d[0]&8&&(g.hasChildren=t[3]),i.$set(g),o&&o.p&&(!u||d[0]&191)&&ue(o,f,t,t[7],u?re(f,t[7],d,ve):he(t[7]),j),k(l,c=ce(p,[{class:"sterling-tree-item"},(!u||d[0]&1&&r!==(r=`--sterling-tree-item-depth: ${t[0]}`))&&{style:r},d[0]&64&&t[6]])),h(l,"disabled",t[1]),h(l,"expanded",t[2]),h(l,"selected",t[5]),h(l,"svelte-hjvnmf",!0)},i(t){u||(y(i.$$.fragment,t),y(o,t),u=!0)},o(t){T(i.$$.fragment,t),T(o,t),u=!1},d(t){t&&C(l),_e(i),o&&o.d(t),m=!1,me(v)}}}function be(e,l,i){const _=["depth","disabled","expanded","hasChildren","value","selected"];let r=D(l,_),{$$slots:u={},$$scope:m}=l,{depth:v=0}=l,{disabled:f=!1}=l,{expanded:o=!1}=l,{hasChildren:p=!1}=l,{value:c}=l,{selected:t=!1}=l;function d(n){s.call(this,e,n)}function g(n){s.call(this,e,n)}function I(n){s.call(this,e,n)}function S(n){s.call(this,e,n)}function V(n){s.call(this,e,n)}function q(n){s.call(this,e,n)}function z(n){s.call(this,e,n)}function E(n){s.call(this,e,n)}function F(n){s.call(this,e,n)}function G(n){s.call(this,e,n)}function H(n){s.call(this,e,n)}function P(n){s.call(this,e,n)}function Q(n){s.call(this,e,n)}function R(n){s.call(this,e,n)}function U(n){s.call(this,e,n)}function W(n){s.call(this,e,n)}function X(n){s.call(this,e,n)}function Y(n){s.call(this,e,n)}function Z(n){s.call(this,e,n)}function A(n){s.call(this,e,n)}function B(n){s.call(this,e,n)}function J(n){s.call(this,e,n)}function K(n){s.call(this,e,n)}function L(n){s.call(this,e,n)}function M(n){s.call(this,e,n)}return e.$$set=n=>{l=b(b({},l),fe(n)),i(6,r=D(l,_)),"depth"in n&&i(0,v=n.depth),"disabled"in n&&i(1,f=n.disabled),"expanded"in n&&i(2,o=n.expanded),"hasChildren"in n&&i(3,p=n.hasChildren),"value"in n&&i(4,c=n.value),"selected"in n&&i(5,t=n.selected),"$$scope"in n&&i(7,m=n.$$scope)},[v,f,o,p,c,t,r,m,u,d,g,I,S,V,q,z,E,F,G,H,P,Q,R,U,W,X,Y,Z,A,B,J,K,L,M]}class Te extends N{constructor(l){super(),O(this,l,be,ge,w,{depth:0,disabled:1,expanded:2,hasChildren:3,value:4,selected:5},null,[-1,-1])}}export{Te as T};