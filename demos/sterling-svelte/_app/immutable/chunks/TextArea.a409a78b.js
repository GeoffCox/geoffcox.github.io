import{S as me,i as be,s as fe,D as k,k as v,l as p,m as y,h as f,V as T,W as m,n as ke,b as ve,H as pe,$ as z,X as l,I as ye,C as H,Y as Te,J as S,o as ze,K as He,_ as i,w as Se}from"./index.a21fe2bb.js";/* empty css                                               */function Ee(n){let s,t,o,c,h,d=[{disabled:n[1]},{rows:"1"},{style:o=`--TextArea__resize: ${n[2]};`},n[5]],r={};for(let u=0;u<d.length;u+=1)r=k(r,d[u]);return{c(){s=v("div"),t=v("textarea"),this.h()},l(u){s=p(u,"DIV",{class:!0});var a=y(s);t=p(a,"TEXTAREA",{rows:!0,style:!0}),y(t).forEach(f),a.forEach(f),this.h()},h(){T(t,r),m(t,"svelte-1kz526k",!0),ke(s,"class","sterling-text-area svelte-1kz526k"),m(s,"disabled",n[1])},m(u,a){ve(u,s,a),pe(s,t),t.autofocus&&t.focus(),n[46](t),z(t,n[0]),c||(h=[l(t,"input",n[47]),l(t,"beforeinput",n[13]),l(t,"blur",n[14]),l(t,"click",n[15]),l(t,"change",n[16]),l(t,"copy",n[17]),l(t,"cut",n[18]),l(t,"paste",n[19]),l(t,"dblclick",n[20]),l(t,"dragend",n[21]),l(t,"dragenter",n[22]),l(t,"dragleave",n[23]),l(t,"dragover",n[24]),l(t,"dragstart",n[25]),l(t,"drop",n[26]),l(t,"focus",n[27]),l(t,"focusin",n[28]),l(t,"focusout",n[29]),l(t,"input",n[30]),l(t,"invalid",n[31]),l(t,"keydown",n[32]),l(t,"keypress",n[33]),l(t,"keyup",n[34]),l(t,"mousedown",n[35]),l(t,"mouseenter",n[36]),l(t,"mouseleave",n[37]),l(t,"mousemove",n[38]),l(t,"mouseover",n[39]),l(t,"mouseout",n[40]),l(t,"mouseup",n[41]),l(t,"select",n[42]),l(t,"submit",n[43]),l(t,"reset",n[44]),l(t,"wheel",n[45]),l(t,"input",n[4])],c=!0)},p(u,a){T(t,r=ye(d,[a[0]&2&&{disabled:u[1]},{rows:"1"},a[0]&4&&o!==(o=`--TextArea__resize: ${u[2]};`)&&{style:o},a[0]&32&&u[5]])),a[0]&1&&z(t,u[0]),m(t,"svelte-1kz526k",!0),a[0]&2&&m(s,"disabled",u[1])},i:H,o:H,d(u){u&&f(s),n[46](null),c=!1,Te(h)}}}function Ie(n,s,t){const o=["autoHeight","disabled","resize","value","blur","click","focus","select","setSelectionRange","setRangeText"];let c=S(s,o),{autoHeight:h=!1}=s,{disabled:d=!1}=s,{resize:r="none"}=s,{value:u=""}=s,a;const b=()=>{h&&a&&(t(3,a.style.height="auto",a),t(3,a.style.height=`${a.scrollHeight}px`,a))},E=()=>{b()};ze(()=>{b()});const I=()=>{a==null||a.blur()},w=()=>{a==null||a.click()},C=e=>{a==null||a.focus()},D=()=>{a==null||a.select()},V=(e,_,g)=>{a==null||a.setSelectionRange(e,_,g)},X=(e,_,g,ge)=>{_&&g?a==null||a.setRangeText(e,_,g,ge):a==null||a.setRangeText(e)};function q(e){i.call(this,n,e)}function J(e){i.call(this,n,e)}function K(e){i.call(this,n,e)}function M(e){i.call(this,n,e)}function P(e){i.call(this,n,e)}function W(e){i.call(this,n,e)}function Y(e){i.call(this,n,e)}function j(e){i.call(this,n,e)}function B(e){i.call(this,n,e)}function F(e){i.call(this,n,e)}function G(e){i.call(this,n,e)}function L(e){i.call(this,n,e)}function N(e){i.call(this,n,e)}function O(e){i.call(this,n,e)}function Q(e){i.call(this,n,e)}function U(e){i.call(this,n,e)}function Z(e){i.call(this,n,e)}function R(e){i.call(this,n,e)}function A(e){i.call(this,n,e)}function x(e){i.call(this,n,e)}function $(e){i.call(this,n,e)}function ee(e){i.call(this,n,e)}function ne(e){i.call(this,n,e)}function te(e){i.call(this,n,e)}function ae(e){i.call(this,n,e)}function le(e){i.call(this,n,e)}function ie(e){i.call(this,n,e)}function se(e){i.call(this,n,e)}function ue(e){i.call(this,n,e)}function oe(e){i.call(this,n,e)}function re(e){i.call(this,n,e)}function ce(e){i.call(this,n,e)}function he(e){i.call(this,n,e)}function de(e){Se[e?"unshift":"push"](()=>{a=e,t(3,a)})}function _e(){u=this.value,t(0,u)}return n.$$set=e=>{s=k(k({},s),He(e)),t(5,c=S(s,o)),"autoHeight"in e&&t(6,h=e.autoHeight),"disabled"in e&&t(1,d=e.disabled),"resize"in e&&t(2,r=e.resize),"value"in e&&t(0,u=e.value)},n.$$.update=()=>{n.$$.dirty[0]&64&&b()},[u,d,r,a,E,c,h,I,w,C,D,V,X,q,J,K,M,P,W,Y,j,B,F,G,L,N,O,Q,U,Z,R,A,x,$,ee,ne,te,ae,le,ie,se,ue,oe,re,ce,he,de,_e]}class De extends me{constructor(s){super(),be(this,s,Ie,Ee,fe,{autoHeight:6,disabled:1,resize:2,value:0,blur:7,click:8,focus:9,select:10,setSelectionRange:11,setRangeText:12},null,[-1,-1])}get blur(){return this.$$.ctx[7]}get click(){return this.$$.ctx[8]}get focus(){return this.$$.ctx[9]}get select(){return this.$$.ctx[10]}get setSelectionRange(){return this.$$.ctx[11]}get setRangeText(){return this.$$.ctx[12]}}export{De as T};