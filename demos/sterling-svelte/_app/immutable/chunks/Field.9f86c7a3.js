import{S as Te,i as Se,s as Ce,L as z,a as P,k as O,e as ce,c as W,l as V,m as I,h as v,n as D,b as C,M as K,N as U,O as F,g as p,v as Z,d as y,f as j,V as Le,o as Oe,H as A,P as Ye,W as Ze,X as de,w as le,D as ue,Y as _e,Z as E,_ as g,I as je,$ as Ge,J as he,K as Qe,y as Re,z as xe,A as $e,B as et,a0 as k,q as se,r as ie,u as fe,C as tt}from"./index.60e805ab.js";import{V as lt,z as st,T as it,b as ot,m as at,c as nt}from"./keyborg.esm.7401b283.js";import{p as rt}from"./portal.77b71a51.js";import{f as me}from"./index.31c7ab0f.js";/* empty css                                            */const ut=t=>({disabled:t&2,open:t&1}),be=t=>({disabled:t[1],open:t[0]}),ft=t=>({disabled:t&2,open:t&1}),ge=t=>({disabled:t[1],open:t[0]});function pe(t){let e,s,o,l,i,r,m,f;const n=t[14].tip,u=z(n,t,t[13],be);return{c(){e=O("div"),s=O("div"),o=O("div"),l=P(),u&&u.c(),this.h()},l(d){e=V(d,"DIV",{class:!0});var b=I(e);s=V(b,"DIV",{class:!0,style:!0});var w=I(s);o=V(w,"DIV",{class:!0,style:!0}),I(o).forEach(v),l=W(w),u&&u.l(w),w.forEach(v),b.forEach(v),this.h()},h(){D(o,"class","arrow svelte-7umbzm"),D(o,"style",t[5]),D(s,"class","sterling-tooltip svelte-7umbzm"),D(s,"style",t[6]),D(e,"class","sterling-tooltip-portal svelte-7umbzm")},m(d,b){C(d,e,b),A(e,s),A(s,o),t[16](o),A(s,l),u&&u.m(s,null),t[17](s),r=!0,m||(f=Ye(rt.call(null,e,{target:document.body})),m=!0)},p(d,b){(!r||b&32)&&D(o,"style",d[5]),u&&u.p&&(!r||b&8195)&&K(u,n,d,d[13],r?F(n,d[13],b,ut):U(d[13]),be),(!r||b&64)&&D(s,"style",d[6])},i(d){r||(p(u,d),Ze(()=>{i||(i=de(e,me,{duration:250},!0)),i.run(1)}),r=!0)},o(d){y(u,d),i||(i=de(e,me,{duration:250},!1)),i.run(0),r=!1},d(d){d&&v(e),t[16](null),u&&u.d(d),t[17](null),d&&i&&i.end(),m=!1,f()}}}function ct(t){let e,s,o,l,i;const r=t[14].default,m=z(r,t,t[13],ge);let f=t[0]&&pe(t);return{c(){m&&m.c(),e=P(),s=O("div"),o=P(),f&&f.c(),l=ce(),this.h()},l(n){m&&m.l(n),e=W(n),s=V(n,"DIV",{class:!0}),I(s).forEach(v),o=W(n),f&&f.l(n),l=ce(),this.h()},h(){D(s,"class","sterling-tooltip-origin svelte-7umbzm")},m(n,u){m&&m.m(n,u),C(n,e,u),C(n,s,u),t[15](s),C(n,o,u),f&&f.m(n,u),C(n,l,u),i=!0},p(n,[u]){m&&m.p&&(!i||u&8195)&&K(m,r,n,n[13],i?F(r,n[13],u,ft):U(n[13]),ge),n[0]?f?(f.p(n,u),u&1&&p(f,1)):(f=pe(n),f.c(),p(f,1),f.m(l.parentNode,l)):f&&(Z(),y(f,1,1,()=>{f=null}),j())},i(n){i||(p(m,n),p(f),i=!0)},o(n){y(m,n),y(f),i=!1},d(n){m&&m.d(n),n&&v(e),n&&v(s),t[15](null),n&&v(o),f&&f.d(n),n&&v(l)}}}function dt(t,e,s){let o,l,i,{$$slots:r={},$$scope:m}=e;const f=Le(r);let{disabled:n=!1}=e,{showOn:u=void 0}=e,{hoverDelayMilliseconds:d=1e3}=e,{open:b=!1}=e,{placement:w="top"}=e,{portalTarget:h=void 0}=e,c,T,q,L;const M=async()=>{if(o&&T&&q){const _=Math.sqrt(2*q.offsetWidth**2)/2,S=[it(_),ot({fallbackPlacements:["top","bottom","right","left"]}),at({element:q})];console.log(w),s(11,L=await lt(o,T,{placement:w,middleware:S}))}else s(11,L=void 0)};let B=()=>{};const H=()=>{B(),B=()=>{},o&&T&&(B=st(o,T,M))},J=_=>{if(_!=null&&_.placement)switch(_.placement){case"top":case"top-start":case"top-end":return`bottom: -${q.offsetWidth}px;transform:translate(0, -50%) rotate(135deg);`;case"right":case"right-start":case"right-end":return`left: -${q.offsetWidth}px;transform:translate(50%, 0) rotate(225deg);`;case"bottom":case"bottom-start":case"bottom-end":return`top: -${q.offsetWidth}px;transform:translate(0, 50%) rotate(-45deg);`;case"left":case"left-start":case"left-end":return`right: -${q.offsetWidth}px;transform:translate(-50%, 0) rotate(45deg);`}return""},G=_=>{var $;const S=($=_==null?void 0:_.middlewareData)==null?void 0:$.arrow;if(S){if(S.x!==null&&S.x!==void 0)return`left: ${S.x}px;`;if(S.y!==null&&S.y!==void 0)return`top: ${S.y}px;`}return""},X=()=>{n||s(0,b=!0)},Y=()=>s(0,b=!1),Q=()=>{n?s(0,b=!1):s(0,b=!b)},R=()=>{d===0?X():setTimeout(()=>{X()},d)};let N=()=>{};const x=()=>{N(),N=()=>{};const _=o;if(_)switch(u){case"click":_.addEventListener("click",Q),N=()=>_.removeEventListener("click",Q);break;case"hover":_.addEventListener("mouseenter",R),_.addEventListener("mouseleave",Y),N=()=>{_.removeEventListener("mouseenter",R),_.removeEventListener("mouseleave",Y)}}};Oe(()=>{s(7,h=h||document.body),H(),M(),x()});function oe(_){le[_?"unshift":"push"](()=>{c=_,s(2,c)})}function ae(_){le[_?"unshift":"push"](()=>{q=_,s(4,q)})}function ne(_){le[_?"unshift":"push"](()=>{T=_,s(3,T)})}return t.$$set=_=>{"disabled"in _&&s(1,n=_.disabled),"showOn"in _&&s(8,u=_.showOn),"hoverDelayMilliseconds"in _&&s(9,d=_.hoverDelayMilliseconds),"open"in _&&s(0,b=_.open),"placement"in _&&s(10,w=_.placement),"portalTarget"in _&&s(7,h=_.portalTarget),"$$scope"in _&&s(13,m=_.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&s(12,o=f.default?c==null?void 0:c.previousElementSibling:void 0),t.$$.dirty&4104&&H(),t.$$.dirty&1025&&M(),t.$$.dirty&2048&&s(6,l=L?`left:${L.x}px; top:${L.y}px;`:""),t.$$.dirty&2048&&s(5,i=J(L)+G(L)),t.$$.dirty&2&&n&&Y(),t.$$.dirty&4352&&x()},[b,n,c,T,q,i,l,h,u,d,w,L,o,m,r,oe,ae,ne]}class _t extends Te{constructor(e){super(),Se(this,e,dt,ct,Ce,{disabled:1,showOn:8,hoverDelayMilliseconds:9,open:0,placement:10,portalTarget:7})}}const ht=t=>({requiredTip:t[0]&32}),ke=t=>({requiredTip:t[5]}),mt=t=>({disabled:t[0]&256,message:t[0]&8,required:t[0]&16,status:t[0]&64}),ve=t=>({disabled:t[8],message:t[3],required:t[4],status:t[6]}),bt=t=>({disabled:t[0]&256,for:t[0]&2,forwardClick:t[0]&1,label:t[0]&4,required:t[0]&16}),qe=t=>({disabled:t[8],for:t[1],forwardClick:t[0],label:t[2],required:t[4]});function we(t){let e;const s=t[17].label,o=z(s,t,t[40],qe),l=o||gt(t);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,r){l&&l.m(i,r),e=!0},p(i,r){o?o.p&&(!e||r[0]&279|r[1]&512)&&K(o,s,i,i[40],e?F(s,i[40],r,bt):U(i[40]),qe):l&&l.p&&(!e||r[0]&4)&&l.p(i,e?r:[-1,-1])},i(i){e||(p(l,i),e=!0)},o(i){y(l,i),e=!1},d(i){l&&l.d(i)}}}function gt(t){let e,s;return{c(){e=O("div"),s=se(t[2]),this.h()},l(o){e=V(o,"DIV",{class:!0});var l=I(e);s=ie(l,t[2]),l.forEach(v),this.h()},h(){D(e,"class","label-text svelte-7nqya2")},m(o,l){C(o,e,l),A(e,s)},p(o,l){l[0]&4&&fe(s,o[2])},d(o){o&&v(e)}}}function ye(t){let e,s;const o=t[17].default,l=z(o,t,t[40],null);return{c(){e=O("div"),l&&l.c(),this.h()},l(i){e=V(i,"DIV",{class:!0});var r=I(e);l&&l.l(r),r.forEach(v),this.h()},h(){D(e,"class","content")},m(i,r){C(i,e,r),l&&l.m(e,null),s=!0},p(i,r){l&&l.p&&(!s||r[1]&512)&&K(l,o,i,i[40],s?F(o,i[40],r,null):U(i[40]),null)},i(i){s||(p(l,i),s=!0)},o(i){y(l,i),s=!1},d(i){i&&v(e),l&&l.d(i)}}}function Ee(t){let e;const s=t[17].message,o=z(s,t,t[40],ve),l=o||pt(t);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,r){l&&l.m(i,r),e=!0},p(i,r){o?o.p&&(!e||r[0]&344|r[1]&512)&&K(o,s,i,i[40],e?F(s,i[40],r,mt):U(i[40]),ve):l&&l.p&&(!e||r[0]&72)&&l.p(i,e?r:[-1,-1])},i(i){e||(p(l,i),e=!0)},o(i){y(l,i),e=!1},d(i){l&&l.d(i)}}}function pt(t){let e,s;return{c(){e=O("div"),s=se(t[3]),this.h()},l(o){e=V(o,"DIV",{class:!0});var l=I(e);s=ie(l,t[3]),l.forEach(v),this.h()},h(){D(e,"class","message svelte-7nqya2"),E(e,"info",t[6]==="info"),E(e,"success",t[6]==="success"),E(e,"warning",t[6]==="warning"),E(e,"error",t[6]==="error")},m(o,l){C(o,e,l),A(e,s)},p(o,l){l[0]&8&&fe(s,o[3]),l[0]&64&&E(e,"info",o[6]==="info"),l[0]&64&&E(e,"success",o[6]==="success"),l[0]&64&&E(e,"warning",o[6]==="warning"),l[0]&64&&E(e,"error",o[6]==="error")},d(o){o&&v(e)}}}function De(t){let e;const s=t[17].required,o=z(s,t,t[40],ke),l=o||qt(t);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,r){l&&l.m(i,r),e=!0},p(i,r){o?o.p&&(!e||r[0]&32|r[1]&512)&&K(o,s,i,i[40],e?F(s,i[40],r,ht):U(i[40]),ke):l&&l.p&&(!e||r[0]&32)&&l.p(i,e?r:[-1,-1])},i(i){e||(p(l,i),e=!0)},o(i){y(l,i),e=!1},d(i){l&&l.d(i)}}}function kt(t){let e,s;return{c(){e=O("div"),s=se("*"),this.h()},l(o){e=V(o,"DIV",{class:!0});var l=I(e);s=ie(l,"*"),l.forEach(v),this.h()},h(){D(e,"class","required svelte-7nqya2")},m(o,l){C(o,e,l),A(e,s)},p:tt,d(o){o&&v(e)}}}function vt(t){let e,s;return{c(){e=O("span"),s=se(t[5]),this.h()},l(o){e=V(o,"SPAN",{class:!0,slot:!0});var l=I(e);s=ie(l,t[5]),l.forEach(v),this.h()},h(){D(e,"class","required-tip svelte-7nqya2"),D(e,"slot","tip")},m(o,l){C(o,e,l),A(e,s)},p(o,l){l[0]&32&&fe(s,o[5])},d(o){o&&v(e)}}}function qt(t){let e,s;return e=new _t({props:{showOn:"hover",$$slots:{tip:[vt],default:[kt]},$$scope:{ctx:t}}}),{c(){Re(e.$$.fragment)},l(o){xe(e.$$.fragment,o)},m(o,l){$e(e,o,l),s=!0},p(o,l){const i={};l[0]&32|l[1]&512&&(i.$$scope={dirty:l,ctx:o}),e.$set(i)},i(o){s||(p(e.$$.fragment,o),s=!0)},o(o){y(e.$$.fragment,o),s=!1},d(o){et(e,o)}}}function wt(t){let e,s,o,l,i,r,m,f=(t[2]||t[11].label)&&we(t),n=t[11].default&&ye(t),u=t[3]&&Ee(t),d=t[4]&&De(t),b=[{"aria-disabled":t[8]},{class:"sterling-field"},{for:t[1]},t[12]],w={};for(let h=0;h<b.length;h+=1)w=ue(w,b[h]);return{c(){e=O("label"),f&&f.c(),s=P(),n&&n.c(),o=P(),u&&u.c(),l=P(),d&&d.c(),this.h()},l(h){e=V(h,"LABEL",{"aria-disabled":!0,class:!0,for:!0});var c=I(e);f&&f.l(c),s=W(c),n&&n.l(c),o=W(c),u&&u.l(c),l=W(c),d&&d.l(c),c.forEach(v),this.h()},h(){_e(e,w),E(e,"disabled",t[8]),E(e,"using-keyboard",t[9]),E(e,"svelte-7nqya2",!0)},m(h,c){C(h,e,c),f&&f.m(e,null),A(e,s),n&&n.m(e,null),A(e,o),u&&u.m(e,null),A(e,l),d&&d.m(e,null),t[39](e),i=!0,r||(m=[g(e,"blur",t[18]),g(e,"click",t[19]),g(e,"click",t[10]),g(e,"copy",t[20]),g(e,"cut",t[21]),g(e,"dblclick",t[22]),g(e,"focus",t[23]),g(e,"focusin",t[24]),g(e,"focusout",t[25]),g(e,"keydown",t[26]),g(e,"keypress",t[27]),g(e,"keyup",t[28]),g(e,"mousedown",t[29]),g(e,"mouseenter",t[30]),g(e,"mouseleave",t[31]),g(e,"mousemove",t[32]),g(e,"mouseover",t[33]),g(e,"mouseout",t[34]),g(e,"mouseup",t[35]),g(e,"scroll",t[36]),g(e,"wheel",t[37]),g(e,"paste",t[38])],r=!0)},p(h,c){h[2]||h[11].label?f?(f.p(h,c),c[0]&2052&&p(f,1)):(f=we(h),f.c(),p(f,1),f.m(e,s)):f&&(Z(),y(f,1,1,()=>{f=null}),j()),h[11].default?n?(n.p(h,c),c[0]&2048&&p(n,1)):(n=ye(h),n.c(),p(n,1),n.m(e,o)):n&&(Z(),y(n,1,1,()=>{n=null}),j()),h[3]?u?(u.p(h,c),c[0]&8&&p(u,1)):(u=Ee(h),u.c(),p(u,1),u.m(e,l)):u&&(Z(),y(u,1,1,()=>{u=null}),j()),h[4]?d?(d.p(h,c),c[0]&16&&p(d,1)):(d=De(h),d.c(),p(d,1),d.m(e,null)):d&&(Z(),y(d,1,1,()=>{d=null}),j()),_e(e,w=je(b,[(!i||c[0]&256)&&{"aria-disabled":h[8]},{class:"sterling-field"},(!i||c[0]&2)&&{for:h[1]},c[0]&4096&&h[12]])),E(e,"disabled",h[8]),E(e,"using-keyboard",h[9]),E(e,"svelte-7nqya2",!0)},i(h){i||(p(f),p(n),p(u),p(d),i=!0)},o(h){y(f),y(n),y(u),y(d),i=!1},d(h){h&&v(e),f&&f.d(),n&&n.d(),u&&u.d(),d&&d.d(),t[39](null),r=!1,Ge(m)}}}function yt(t,e,s){const o=["forwardClick","for","label","message","required","requiredReason","status","click","blur","focus"];let l=he(e,o),{$$slots:i={},$$scope:r}=e;const m=Le(i);let{forwardClick:f=!1}=e,{for:n=void 0}=e,{label:u=void 0}=e,{message:d=void 0}=e,{required:b=!1}=e,{requiredReason:w="This field is required"}=e,{status:h="none"}=e,c,T=!1,q=null;const L=()=>{let a=null;n&&(a=c==null?void 0:c.querySelector(`[id="${n}"]`)),a||(a=c==null?void 0:c.querySelector('a[href], audio[controls], button, details, div[contenteditable], form, input, select, textarea, video[controls], [tabindex]:not([tabindex="-1"])')),s(16,q=a)},M=a=>a?a.getAttribute("aria-disabled")==="true"||(a==null?void 0:a.matches(":disabled"))||(a==null?void 0:a.disabled)===!0||(a==null?void 0:a.classList.contains("disabled")):!1,B=a=>{let ee;for(let re=0;re<a.length;re++){const te=a[re];if(te.type==="attributes"&&(te.attributeName==="aria-disabled"||te.attributeName==="disabled"||te.attributeName==="class")){if(M(q)){ee=!0;break}ee=!1}}ee!==void 0&&s(8,T=ee)};let H=new MutationObserver(B),J=nt(window),G=J.isNavigatingWithKeyboard();const X=a=>{s(9,G=a)},Y=()=>{c==null||c.click()},Q=()=>{c==null||c.blur()},R=a=>{c==null||c.focus(a)};Oe(()=>(J.subscribe(X),()=>{J.unsubscribe(X)}));const N=()=>{f&&(q==null||q.click())};function x(a){k.call(this,t,a)}function oe(a){k.call(this,t,a)}function ae(a){k.call(this,t,a)}function ne(a){k.call(this,t,a)}function _(a){k.call(this,t,a)}function S(a){k.call(this,t,a)}function $(a){k.call(this,t,a)}function Ve(a){k.call(this,t,a)}function Ie(a){k.call(this,t,a)}function Ae(a){k.call(this,t,a)}function Me(a){k.call(this,t,a)}function Ne(a){k.call(this,t,a)}function Pe(a){k.call(this,t,a)}function We(a){k.call(this,t,a)}function ze(a){k.call(this,t,a)}function Ke(a){k.call(this,t,a)}function Ue(a){k.call(this,t,a)}function Fe(a){k.call(this,t,a)}function Be(a){k.call(this,t,a)}function He(a){k.call(this,t,a)}function Je(a){k.call(this,t,a)}function Xe(a){le[a?"unshift":"push"](()=>{c=a,s(7,c)})}return t.$$set=a=>{e=ue(ue({},e),Qe(a)),s(12,l=he(e,o)),"forwardClick"in a&&s(0,f=a.forwardClick),"for"in a&&s(1,n=a.for),"label"in a&&s(2,u=a.label),"message"in a&&s(3,d=a.message),"required"in a&&s(4,b=a.required),"requiredReason"in a&&s(5,w=a.requiredReason),"status"in a&&s(6,h=a.status),"$$scope"in a&&s(40,r=a.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&130&&(m.default,L()),t.$$.dirty[0]&65536&&s(8,T=M(q)),t.$$.dirty[0]&65536&&(H.disconnect(),q&&H.observe(q,{attributes:!0}))},[f,n,u,d,b,w,h,c,T,G,N,m,l,Y,Q,R,q,i,x,oe,ae,ne,_,S,$,Ve,Ie,Ae,Me,Ne,Pe,We,ze,Ke,Ue,Fe,Be,He,Je,Xe,r]}class Lt extends Te{constructor(e){super(),Se(this,e,yt,wt,Ce,{forwardClick:0,for:1,label:2,message:3,required:4,requiredReason:5,status:6,click:13,blur:14,focus:15},null,[-1,-1])}get click(){return this.$$.ctx[13]}get blur(){return this.$$.ctx[14]}get focus(){return this.$$.ctx[15]}}export{Lt as F,_t as T};
