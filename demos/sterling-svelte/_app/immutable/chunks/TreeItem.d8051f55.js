import{S as et,i as tt,s as lt,L as W,D as H,k as I,a as at,l as J,m as U,h as T,c as st,n as q,W as V,V as le,b as Z,H as ae,X as d,M as j,N as F,O as G,g as E,v as nt,d as N,f as rt,I as ot,Y as it,J as se,Z as O,_ as ut,a7 as ne,a3 as dt,K as ct,y as ft,z as _t,A as pt,B as ht,a4 as bt,a8 as re,$ as f,w as gt,q as mt,r as vt,u as kt}from"./index.27ede9e8.js";import{s as wt}from"./index.1a545ff6.js";import{T as Pt,a as oe,b as Dt}from"./TreeItemDisplay.aab1a536.js";import{w as At}from"./index.896ce23e.js";import{p as Ct}from"./prefersReducedMotion.75841c81.js";/* empty css                                               */const Et=e=>({selected:e[0]&128,value:e[0]&2}),ie=e=>({depth:e[14],selected:e[7],value:e[1]}),St=e=>({depth:e[0]&16384,disabled:e[0]&1,expanded:e[0]&32,hasChildren:e[0]&64,selected:e[0]&128,value:e[0]&2}),ue=e=>({depth:e[14],disabled:e[0],expanded:e[5],hasChildren:e[6],selected:e[7],value:e[1]}),Vt=e=>({disabled:e[0]&8,expanded:e[0]&32,hasChildren:e[0]&64,selected:e[0]&128,value:e[0]&2}),de=e=>({depth:e[14],disabled:e[3],expanded:e[5],hasChildren:e[6],selected:e[7],value:e[1]});function Tt(e){let l=e[1]+"",a;return{c(){a=mt(l)},l(n){a=vt(n,l)},m(n,r){Z(n,a,r)},p(n,r){r[0]&2&&l!==(l=n[1]+"")&&kt(a,l)},d(n){n&&T(a)}}}function Nt(e){let l;const a=e[29].label,n=W(a,e,e[62],ue),r=n||Tt(e);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),l=!0},p(s,o){n?n.p&&(!l||o[0]&16611|o[2]&1)&&j(n,a,s,s[62],l?G(a,s[62],o,St):F(s[62]),ue):r&&r.p&&(!l||o[0]&2)&&r.p(s,l?o:[-1,-1,-1])},i(s){l||(E(r,s),l=!0)},o(s){N(r,s),l=!1},d(s){r&&r.d(s)}}}function qt(e){let l,a;return l=new Dt({props:{depth:e[14],disabled:e[3],expanded:e[5],hasChildren:e[6],selected:e[7],value:e[1],$$slots:{default:[Nt,({depth:n,disabled:r,expanded:s,hasChildren:o,selected:c,value:w})=>({14:n,0:r,5:s,6:o,7:c,1:w}),({depth:n,disabled:r,expanded:s,hasChildren:o,selected:c,value:w})=>[(n?16384:0)|(r?1:0)|(s?32:0)|(o?64:0)|(c?128:0)|(w?2:0)]]},$$scope:{ctx:e}}}),{c(){ft(l.$$.fragment)},l(n){_t(l.$$.fragment,n)},m(n,r){pt(l,n,r),a=!0},p(n,r){const s={};r[0]&8&&(s.disabled=n[3]),r[0]&32&&(s.expanded=n[5]),r[0]&64&&(s.hasChildren=n[6]),r[0]&128&&(s.selected=n[7]),r[0]&2&&(s.value=n[1]),r[0]&16611|r[2]&1&&(s.$$scope={dirty:r,ctx:n}),l.$set(s)},i(n){a||(E(l.$$.fragment,n),a=!0)},o(n){N(l.$$.fragment,n),a=!1},d(n){ht(l,n)}}}function ce(e){let l,a,n;const r=e[29].default,s=W(r,e,e[62],ie);return{c(){l=I("div"),s&&s.c(),this.h()},l(o){l=J(o,"DIV",{class:!0,role:!0});var c=U(l);s&&s.l(c),c.forEach(T),this.h()},h(){q(l,"class","children"),q(l,"role","group")},m(o,c){Z(o,l,c),s&&s.m(l,null),n=!0},p(o,c){s&&s.p&&(!n||c[0]&130|c[2]&1)&&j(s,r,o,o[62],n?G(r,o[62],c,Et):F(o[62]),ie)},i(o){n||(E(s,o),bt(()=>{a||(a=re(l,e[4],{duration:200},!0)),a.run(1)}),n=!0)},o(o){N(s,o),a||(a=re(l,e[4],{duration:200},!1)),a.run(0),n=!1},d(o){o&&T(l),s&&s.d(o),o&&a&&a.end()}}}function Kt(e){let l,a,n,r,s,o,c,w;const S=e[29].item,v=W(S,e,e[62],de),g=v||qt(e);let _=e[5]&&e[6]&&ce(e),A=[{"aria-selected":s=e[7]?!0:void 0},{"aria-expanded":e[5]},{class:"sterling-tree-item"},{"data-value":e[1]},{role:"treeitem"},e[13]],C={};for(let u=0;u<A.length;u+=1)C=H(C,A[u]);return{c(){l=I("div"),a=I("div"),g&&g.c(),r=at(),_&&_.c(),this.h()},l(u){l=J(u,"DIV",{"aria-selected":!0,"aria-expanded":!0,class:!0,"data-value":!0,role:!0});var p=U(l);a=J(p,"DIV",{class:!0,tabindex:!0});var D=U(a);g&&g.l(D),D.forEach(T),r=st(p),_&&_.l(p),p.forEach(T),this.h()},h(){q(a,"class","item svelte-nfiz55"),q(a,"tabindex",n=e[7]?0:-1),V(a,"selected",e[7]),le(l,C),V(l,"disabled",e[3]),V(l,"svelte-nfiz55",!0)},m(u,p){Z(u,l,p),ae(l,a),g&&g.m(a,null),ae(l,r),_&&_.m(l,null),e[61](l),o=!0,c||(w=[d(a,"click",e[11]),d(a,"keydown",e[12]),d(l,"blur",e[30]),d(l,"click",e[31]),d(l,"dblclick",e[32]),d(l,"dragend",e[33]),d(l,"dragenter",e[34]),d(l,"dragleave",e[35]),d(l,"dragover",e[36]),d(l,"dragstart",e[37]),d(l,"drop",e[38]),d(l,"focus",e[39]),d(l,"focusin",e[40]),d(l,"focusout",e[41]),d(l,"keydown",e[42]),d(l,"keypress",e[43]),d(l,"keyup",e[44]),d(l,"mousedown",e[45]),d(l,"mouseenter",e[46]),d(l,"mouseleave",e[47]),d(l,"mousemove",e[48]),d(l,"mouseover",e[49]),d(l,"mouseout",e[50]),d(l,"mouseup",e[51]),d(l,"pointercancel",e[52]),d(l,"pointerdown",e[53]),d(l,"pointerenter",e[54]),d(l,"pointerleave",e[55]),d(l,"pointermove",e[56]),d(l,"pointerover",e[57]),d(l,"pointerout",e[58]),d(l,"pointerup",e[59]),d(l,"wheel",e[60])],c=!0)},p(u,p){v?v.p&&(!o||p[0]&234|p[2]&1)&&j(v,S,u,u[62],o?G(S,u[62],p,Vt):F(u[62]),de):g&&g.p&&(!o||p[0]&235|p[2]&1)&&g.p(u,o?p:[-1,-1,-1]),(!o||p[0]&128&&n!==(n=u[7]?0:-1))&&q(a,"tabindex",n),(!o||p[0]&128)&&V(a,"selected",u[7]),u[5]&&u[6]?_?(_.p(u,p),p[0]&96&&E(_,1)):(_=ce(u),_.c(),E(_,1),_.m(l,null)):_&&(nt(),N(_,1,1,()=>{_=null}),rt()),le(l,C=ot(A,[(!o||p[0]&128&&s!==(s=u[7]?!0:void 0))&&{"aria-selected":s},(!o||p[0]&32)&&{"aria-expanded":u[5]},{class:"sterling-tree-item"},(!o||p[0]&2)&&{"data-value":u[1]},{role:"treeitem"},p[0]&8192&&u[13]])),V(l,"disabled",u[3]),V(l,"svelte-nfiz55",!0)},i(u){o||(E(g,u),E(_),o=!0)},o(u){N(g,u),N(_),o=!1},d(u){u&&T(l),g&&g.d(u),_&&_.d(),e[61](null),c=!1,it(w)}}}function Mt(e,l,a){let n,r,s,o,c;const w=["disabled","value","collapse","expand","toggleExpanded","blur","focus","click","select","selectParent","selectPrevious","selectNext"];let S=se(l,w),v,g,_,A;O(e,Ct,t=>a(28,A=t));let{$$slots:C={},$$scope:u}=l;const p=ut(C);let{disabled:D=!1}=l,{value:P}=l;const fe=(t,i)=>({delay:0,duration:0}),{expandedValues:K,selectedValue:X,disabled:Q}=ne(Pt);O(e,K,t=>a(25,v=t)),O(e,X,t=>a(27,_=t)),O(e,Q,t=>a(26,g=t));const{depth:y=0}=ne(oe)||{};let m;const x=At(D),Y=t=>!c&&(t=t??v.findIndex(i=>i===P),t!==-1)?(K.set([...v.slice(0,t),...v.slice(t+1)]),!0):!1,_e=()=>Y(),B=t=>!c&&(t=t??v.findIndex(i=>i===P),t===-1)?(K.set([...v,P]),!0):!1,pe=()=>B(),L=()=>{if(!c){const t=v.findIndex(i=>i===P);return t!==-1?Y(t):B(t)}return!1},he=t=>{if(!c){const i=t==null?void 0:t.querySelector(".item");i==null||i.blur()}},be=()=>{he(m)},M=(t,i)=>{if(!c){const h=t==null?void 0:t.querySelector(".item");h==null||h.focus(i)}},ge=t=>{M(m),m==null||m.focus(t)},me=t=>{if(!c){const i=t==null?void 0:t.querySelector(".item");i==null||i.click()}},ve=()=>{me(m)},z=t=>{c||X.set(t)},$=()=>{c||z(P)},ee=()=>{var t;if(!c){let i=(t=m.parentElement)==null?void 0:t.closest('[role="treeitem"][data-value]'),h=i==null?void 0:i.getAttribute("data-value");if(h&&i)return z(h),M(i),!0}return!1},te=()=>{var t;if(!c){let i,h;const b=m==null?void 0:m.previousElementSibling;if(b){const k=b.querySelectorAll('[role="treeitem"][data-value]');k&&(i=k[k.length-1],h=i==null?void 0:i.getAttribute("data-value")),h||(i=b,h=i==null?void 0:i.getAttribute("data-value"))}if(h||(i=(t=m.parentElement)==null?void 0:t.closest('[role="treeitem"][data-value]'),h=i==null?void 0:i.getAttribute("data-value")),h&&i)return z(h),M(i),!0}return!1},R=()=>{var t,i;if(!c){let h,b=m.querySelector('[role="treeitem"][data-value]');if(h=b==null?void 0:b.getAttribute("data-value"),!h){for(b=m.nextElementSibling;b&&b.getAttribute("data-value")===null;)b=b.nextElementSibling;h=b==null?void 0:b.getAttribute("data-value")}if(!h){let k=(t=m.parentElement)==null?void 0:t.closest('[role="treeitem"][data-value]');for(;k&&!h;)b=k==null?void 0:k.nextElementSibling,h=b==null?void 0:b.getAttribute("data-value"),k=(i=k.parentElement)==null?void 0:i.closest('[role="treeitem"][data-value]')}if(h&&b)return z(h),M(b),!0}return!1},ke=()=>{c||(L(),$())},we=t=>{if(!t.altKey&&!t.ctrlKey&&!t.shiftKey)switch(t.key){case"Enter":case" ":if(L())return t.preventDefault(),t.stopPropagation(),!1;break;case"ArrowRight":if(r){if(s){if(R())return t.preventDefault(),t.stopPropagation(),!1}else if(B())return t.preventDefault(),t.stopPropagation(),!1}break;case"ArrowLeft":if(r&&s){if(Y())return t.preventDefault(),t.stopPropagation(),!1}else if(ee())return t.preventDefault(),t.stopPropagation(),!1;break;case"ArrowUp":if(te())return t.preventDefault(),t.stopPropagation(),!1;break;case"ArrowDown":if(R())return t.preventDefault(),t.stopPropagation(),!1;break}};dt(oe,{depth:y+1,disabled:x});function Pe(t){f.call(this,e,t)}function De(t){f.call(this,e,t)}function Ae(t){f.call(this,e,t)}function Ce(t){f.call(this,e,t)}function Ee(t){f.call(this,e,t)}function Se(t){f.call(this,e,t)}function Ve(t){f.call(this,e,t)}function Te(t){f.call(this,e,t)}function Ne(t){f.call(this,e,t)}function qe(t){f.call(this,e,t)}function Ke(t){f.call(this,e,t)}function Me(t){f.call(this,e,t)}function ze(t){f.call(this,e,t)}function Oe(t){f.call(this,e,t)}function Xe(t){f.call(this,e,t)}function Ye(t){f.call(this,e,t)}function Be(t){f.call(this,e,t)}function Le(t){f.call(this,e,t)}function Re(t){f.call(this,e,t)}function He(t){f.call(this,e,t)}function Ie(t){f.call(this,e,t)}function Je(t){f.call(this,e,t)}function Ue(t){f.call(this,e,t)}function We(t){f.call(this,e,t)}function Ze(t){f.call(this,e,t)}function je(t){f.call(this,e,t)}function Fe(t){f.call(this,e,t)}function Ge(t){f.call(this,e,t)}function Qe(t){f.call(this,e,t)}function ye(t){f.call(this,e,t)}function xe(t){f.call(this,e,t)}function $e(t){gt[t?"unshift":"push"](()=>{m=t,a(2,m)})}return e.$$set=t=>{l=H(H({},l),ct(t)),a(13,S=se(l,w)),"disabled"in t&&a(0,D=t.disabled),"value"in t&&a(1,P=t.value),"$$scope"in t&&a(62,u=t.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&268435456&&a(4,n=A?fe:wt),e.$$.dirty[0]&33554434&&a(5,s=v.includes(P)),e.$$.dirty[0]&134217730&&a(7,o=_===P),e.$$.dirty[0]&67108865&&a(3,c=D||g),e.$$.dirty[0]&1&&x.set(D)},a(6,r=p.default),[D,P,m,c,n,s,r,o,K,X,Q,ke,we,S,y,_e,pe,L,be,ge,ve,$,ee,te,R,v,g,_,A,C,Pe,De,Ae,Ce,Ee,Se,Ve,Te,Ne,qe,Ke,Me,ze,Oe,Xe,Ye,Be,Le,Re,He,Ie,Je,Ue,We,Ze,je,Fe,Ge,Qe,ye,xe,$e,u]}class Rt extends et{constructor(l){super(),tt(this,l,Mt,Kt,lt,{disabled:0,value:1,collapse:15,expand:16,toggleExpanded:17,blur:18,focus:19,click:20,select:21,selectParent:22,selectPrevious:23,selectNext:24},null,[-1,-1,-1])}get collapse(){return this.$$.ctx[15]}get expand(){return this.$$.ctx[16]}get toggleExpanded(){return this.$$.ctx[17]}get blur(){return this.$$.ctx[18]}get focus(){return this.$$.ctx[19]}get click(){return this.$$.ctx[20]}get select(){return this.$$.ctx[21]}get selectParent(){return this.$$.ctx[22]}get selectPrevious(){return this.$$.ctx[23]}get selectNext(){return this.$$.ctx[24]}}export{Rt as T};