import{S as ye,i as pe,s as ve,O as Y,k as O,a as U,l as P,m as M,c as W,h as I,n as v,a7 as Ie,Z as X,_ as p,b as ae,D as S,a8 as Se,E as H,f as R,g as Te,t as L,d as je,T as Oe,K as Pe,U as Z,a2 as Me,a3 as De,V as Ne,w as Ae,x as Ee,y as Ve,z as Ce,C as Re,G as ke,H as Be,I as we,M as ze}from"./index-a1914b40.js";import{v as Fe,L as Ge}from"./Example-48e67d2d.js";import"./Switch.svelte_svelte_type_style_lang-ae4f99bd.js";var Ke=typeof global=="object"&&global&&global.Object===Object&&global;const He=Ke;var Le=typeof self=="object"&&self&&self.Object===Object&&self,Ue=He||Le||Function("return this")();const oe=Ue;var We=oe.Symbol;const E=We;var le=Object.prototype,Ye=le.hasOwnProperty,qe=le.toString,C=E?E.toStringTag:void 0;function Xe(e){var t=Ye.call(e,C),n=e[C];try{e[C]=void 0;var s=!0}catch{}var i=qe.call(e);return s&&(t?e[C]=n:delete e[C]),i}var Ze=Object.prototype,Je=Ze.toString;function Qe(e){return Je.call(e)}var xe="[object Null]",$e="[object Undefined]",J=E?E.toStringTag:void 0;function et(e){return e==null?e===void 0?$e:xe:J&&J in Object(e)?Xe(e):Qe(e)}function tt(e){return e!=null&&typeof e=="object"}var it="[object Symbol]";function fe(e){return typeof e=="symbol"||tt(e)&&et(e)==it}function rt(e,t){for(var n=-1,s=e==null?0:e.length,i=Array(s);++n<s;)i[n]=t(e[n],n,e);return i}var nt=Array.isArray;const st=nt;var at=1/0,Q=E?E.prototype:void 0,x=Q?Q.toString:void 0;function ce(e){if(typeof e=="string")return e;if(st(e))return rt(e,ce)+"";if(fe(e))return x?x.call(e):"";var t=e+"";return t=="0"&&1/e==-at?"-0":t}var ot=/\s/;function lt(e){for(var t=e.length;t--&&ot.test(e.charAt(t)););return t}var ft=/^\s+/;function ct(e){return e&&e.slice(0,lt(e)+1).replace(ft,"")}function $(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ee=0/0,ut=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,bt=parseInt;function ue(e){if(typeof e=="number")return e;if(fe(e))return ee;if($(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ct(e);var n=dt.test(e);return n||mt.test(e)?bt(e.slice(2),n?2:8):ut.test(e)?ee:+e}var te=1/0,gt=17976931348623157e292;function ht(e){if(!e)return e===0?e:0;if(e=ue(e),e===te||e===-te){var t=e<0?-1:1;return t*gt}return e===e?e:0}function _t(e){var t=ht(e),n=t%1;return t===t?n?t-n:t:0}function ie(e){return e==null?"":ce(e)}var yt=oe.isFinite,pt=Math.min;function vt(e){var t=Math[e];return function(n,s){if(n=ue(n),s=s==null?0:pt(_t(s),292),s&&yt(n)){var i=(ie(n)+"e").split("e"),o=t(i[0]+"e"+(+i[1]+s));return i=(ie(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-s))}return t(n)}}var It=vt("round");const re=It,St=e=>({}),ne=e=>({});function se(e){let t,n,s;return n=new Ge({props:{disabled:e[3],for:e[8],$$slots:{default:[Tt]},$$scope:{ctx:e}}}),{c(){t=O("div"),Ae(n.$$.fragment),this.h()},l(i){t=P(i,"DIV",{class:!0});var o=M(t);Ee(n.$$.fragment,o),o.forEach(I),this.h()},h(){v(t,"class","label svelte-11u8381")},m(i,o){ae(i,t,o),Ve(n,t,null),s=!0},p(i,o){const m={};o&8&&(m.disabled=i[3]),o&16777216&&(m.$$scope={dirty:o,ctx:i}),n.$set(m)},i(i){s||(R(n.$$.fragment,i),s=!0)},o(i){L(n.$$.fragment,i),s=!1},d(i){i&&I(t),Ce(n)}}}function Tt(e){let t;const n=e[21].label,s=Re(n,e,e[24],ne);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,o){s&&s.m(i,o),t=!0},p(i,o){s&&s.p&&(!t||o&16777216)&&ke(s,n,i,i[24],t?we(n,i[24],o,St):Be(i[24]),ne)},i(i){t||(R(s,i),t=!0)},o(i){L(s,i),t=!1},d(i){s&&s.d(i)}}}function jt(e){let t,n,s,i,o,m,g,T,D,h,j,k,d,c,f,b,N,l=e[13].label&&se(e),_=[{class:"slider"},{id:e[8]},{role:"slider"},{"aria-valuemin":d=0},{"aria-valuenow":e[0]},{"aria-valuemax":e[1]},{tabindex:c=e[3]?void 0:0},e[14]],A={};for(let a=0;a<_.length;a+=1)A=Y(A,_[a]);return{c(){t=O("div"),l&&l.c(),n=U(),s=O("div"),i=O("div"),o=O("div"),m=U(),g=O("div"),D=U(),h=O("div"),this.h()},l(a){t=P(a,"DIV",{class:!0});var u=M(t);l&&l.l(u),n=W(u),s=P(u,"DIV",{class:!0,id:!0,role:!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuemax":!0,tabindex:!0});var B=M(s);i=P(B,"DIV",{class:!0});var y=M(i);o=P(y,"DIV",{class:!0}),M(o).forEach(I),m=W(y),g=P(y,"DIV",{class:!0,style:!0}),M(g).forEach(I),D=W(y),h=P(y,"DIV",{class:!0,style:!0}),M(h).forEach(I),y.forEach(I),B.forEach(I),u.forEach(I),this.h()},h(){v(o,"class","track svelte-11u8381"),v(g,"class","fill svelte-11u8381"),v(g,"style",T=e[2]?`height: ${e[7]}px`:`width: ${e[7]}px`),v(h,"class","thumb svelte-11u8381"),v(h,"style",j=e[2]?`bottom: ${e[7]}px`:`left: ${e[7]}px`),v(i,"class","container svelte-11u8381"),Ie(()=>e[23].call(i)),X(s,A),p(s,"disabled",e[3]),p(s,"horizontal",!e[2]),p(s,"vertical",e[2]),p(s,"svelte-11u8381",!0),v(t,"class","sterling-slider svelte-11u8381"),p(t,"vertical",e[2])},m(a,u){ae(a,t,u),l&&l.m(t,null),S(t,n),S(t,s),S(s,i),S(i,o),S(i,m),S(i,g),S(i,D),S(i,h),e[22](i),k=Se(i,e[23].bind(i)),f=!0,b||(N=[H(s,"keydown",e[12]),H(s,"pointerdown",e[9]),H(s,"pointermove",e[10]),H(s,"pointerup",e[11])],b=!0)},p(a,[u]){a[13].label?l?(l.p(a,u),u&8192&&R(l,1)):(l=se(a),l.c(),R(l,1),l.m(t,n)):l&&(Te(),L(l,1,1,()=>{l=null}),je()),(!f||u&132&&T!==(T=a[2]?`height: ${a[7]}px`:`width: ${a[7]}px`))&&v(g,"style",T),(!f||u&132&&j!==(j=a[2]?`bottom: ${a[7]}px`:`left: ${a[7]}px`))&&v(h,"style",j),X(s,A=Oe(_,[{class:"slider"},{id:a[8]},{role:"slider"},{"aria-valuemin":d},(!f||u&1)&&{"aria-valuenow":a[0]},(!f||u&2)&&{"aria-valuemax":a[1]},(!f||u&8&&c!==(c=a[3]?void 0:0))&&{tabindex:c},u&16384&&a[14]])),p(s,"disabled",a[3]),p(s,"horizontal",!a[2]),p(s,"vertical",a[2]),p(s,"svelte-11u8381",!0),(!f||u&4)&&p(t,"vertical",a[2])},i(a){f||(R(l),f=!0)},o(a){L(l),f=!1},d(a){a&&I(t),l&&l.d(),e[22](null),k(),b=!1,Pe(N)}}}function Ot(e,t,n){let s,i,o,m,g;const T=["value","min","max","step","precision","vertical","disabled"];let D=Z(t,T),{$$slots:h={},$$scope:j}=t;const k=Me(h);let{value:d=0}=t,{min:c=0}=t,{max:f=100}=t,{step:b=void 0}=t,{precision:N=0}=t,{vertical:l=!1}=t,{disabled:_=!1}=t;const A=Fe();let a;const u=De(),B=r=>{u("change",{value:r})},y=r=>{if(r!==void 0&&Number!==null&&!Number.isNaN(r)){const G=r.toString(),K=G.indexOf(".");if(K!==-1){const q=G.substring(K+1);if(q)return q.length}}return 0},V=r=>{n(0,d=re(Math.max(c,Math.min(f,r)),s))},w=r=>{if(m>0){const G=Math.max(0,Math.min(1,r/m)),K=c+G*(f-c);V(K)}};let z,F;const de=r=>{_||(r.currentTarget.setPointerCapture(r.pointerId),w(l?a.getBoundingClientRect().bottom-r.y:r.x-a.getBoundingClientRect().left))},me=r=>{!_&&r.currentTarget.hasPointerCapture(r.pointerId)&&w(l?a.getBoundingClientRect().bottom-r.y:r.x-a.getBoundingClientRect().left)},be=r=>{_||r.currentTarget.releasePointerCapture(r.pointerId)},ge=r=>{if(!_&&!r.ctrlKey&&!r.shiftKey&&!r.altKey)switch(r.code){case"ArrowDown":case"ArrowLeft":V(d-o),r.preventDefault(),r.stopPropagation();return;case"ArrowRight":case"ArrowUp":V(d+o),r.preventDefault(),r.stopPropagation();return}};function he(r){ze[r?"unshift":"push"](()=>{a=r,n(6,a)})}function _e(){z=this.clientWidth,F=this.clientHeight,n(4,z),n(5,F)}return e.$$set=r=>{t=Y(Y({},t),Ne(r)),n(14,D=Z(t,T)),"value"in r&&n(0,d=r.value),"min"in r&&n(15,c=r.min),"max"in r&&n(1,f=r.max),"step"in r&&n(16,b=r.step),"precision"in r&&n(17,N=r.precision),"vertical"in r&&n(2,l=r.vertical),"disabled"in r&&n(3,_=r.disabled),"$$scope"in r&&n(24,j=r.$$scope)},e.$$.update=()=>{if(e.$$.dirty&32770&&c>f&&n(15,c=f),e.$$.dirty&229378&&n(20,s=Math.max(N,y(c),y(f),y(b))),e.$$.dirty&1081347&&(d<c||d>f||d!==re(d,s))&&V(d),e.$$.dirty&98307&&b){let r=Math.max(c,Math.min(d,f));r=Math.round(r/b)*b+c,r!==d&&V(r)}e.$$.dirty&32771&&n(18,i=(d-c)/(f-c)),e.$$.dirty&65536&&(o=b||1),e.$$.dirty&1&&B(d),e.$$.dirty&52&&n(19,m=l?F:z),e.$$.dirty&786432&&n(7,g=m*i)},[d,f,l,_,z,F,a,g,A,de,me,be,ge,k,D,c,b,N,i,m,s,h,he,_e,j]}class Nt extends ye{constructor(t){super(),pe(this,t,Ot,jt,ve,{value:0,min:15,max:1,step:16,precision:17,vertical:2,disabled:3})}}export{Nt as S};