import{S as Ce,i as Me,s as Ee,D as M,y as D,z as P,A as V,I as Ie,a2 as we,g as d,d as v,B as K,J as B,V as Be,a3 as Ne,a4 as Oe,a5 as Se,K as Te,w as N,a0 as r,L as j,k as De,a as Pe,l as Ve,m as Ke,h as C,c as je,n as qe,b as O,M as q,N as z,O as A}from"./index.60e805ab.js";import{w as ze}from"./index.15eb4eef.js";import{B as Ae}from"./Button.dc9a9a97.js";import{f as Fe,a as Ge,b as Je,c as Le,d as Ue}from"./MenuItem.eba7a53d.js";import{i as Xe}from"./idGenerator.e5fbd04c.js";/* empty css                                                 */const Ye=e=>({shape:e[0]&2,variant:e[0]&8}),S=e=>({shape:e[1],variant:e[3]}),He=e=>({shape:e[0]&2,variant:e[0]&8}),T=e=>({shape:e[1],variant:e[3]});function Qe(e){let o;const i=e[15].items,l=j(i,e,e[43],S);return{c(){l&&l.c()},l(u){l&&l.l(u)},m(u,a){l&&l.m(u,a),o=!0},p(u,a){l&&l.p&&(!o||a[0]&10|a[1]&4096)&&q(l,i,u,u[43],o?A(i,u[43],a,Ye):z(u[43]),S)},i(u){o||(d(l,u),o=!0)},o(u){v(l,u),o=!1},d(u){l&&l.d(u)}}}function We(e){let o,i,l,u;const a=e[15].default,s=j(a,e,e[43],T);return l=new Ue({props:{id:e[7],reference:e[5],open:e[0],$$slots:{default:[Qe]},$$scope:{ctx:e}}}),{c(){o=De("div"),s&&s.c(),i=Pe(),D(l.$$.fragment),this.h()},l(t){o=Ve(t,"DIV",{class:!0});var c=Ke(o);s&&s.l(c),c.forEach(C),i=je(t),P(l.$$.fragment,t),this.h()},h(){qe(o,"class","reference svelte-i34uv1")},m(t,c){O(t,o,c),s&&s.m(o,null),e[16](o),O(t,i,c),V(l,t,c),u=!0},p(t,c){s&&s.p&&(!u||c[0]&10|c[1]&4096)&&q(s,a,t,t[43],u?A(a,t[43],c,He):z(t[43]),T);const _={};c[0]&128&&(_.id=t[7]),c[0]&32&&(_.reference=t[5]),c[0]&1&&(_.open=t[0]),c[0]&10|c[1]&4096&&(_.$$scope={dirty:c,ctx:t}),l.$set(_)},i(t){u||(d(s,t),d(l.$$.fragment,t),u=!0)},o(t){v(s,t),v(l.$$.fragment,t),u=!1},d(t){t&&C(o),s&&s.d(t),e[16](null),t&&C(i),K(l,t)}}}function Ze(e){let o,i;const l=[{"aria-controls":e[7]},{"aria-expanded":e[0]},{"aria-haspopup":e[6]},{"aria-owns":e[7]},{"data-value":e[2]},{"data-root-value":e[2]},{variant:e[3]},{shape:e[1]},e[10]];let u={$$slots:{default:[We]},$$scope:{ctx:e}};for(let a=0;a<l.length;a+=1)u=M(u,l[a]);return o=new Ae({props:u}),e[17](o),o.$on("blur",e[18]),o.$on("click",e[19]),o.$on("click",e[9]),o.$on("dblclick",e[20]),o.$on("focus",e[21]),o.$on("focusin",e[22]),o.$on("focusout",e[23]),o.$on("keydown",e[24]),o.$on("keypress",e[25]),o.$on("keyup",e[26]),o.$on("mousedown",e[27]),o.$on("mouseenter",e[28]),o.$on("mouseleave",e[29]),o.$on("mousemove",e[30]),o.$on("mouseover",e[31]),o.$on("mouseout",e[32]),o.$on("mouseup",e[33]),o.$on("pointercancel",e[34]),o.$on("pointerdown",e[35]),o.$on("pointerenter",e[36]),o.$on("pointerleave",e[37]),o.$on("pointermove",e[38]),o.$on("pointerover",e[39]),o.$on("pointerout",e[40]),o.$on("pointerup",e[41]),o.$on("wheel",e[42]),{c(){D(o.$$.fragment)},l(a){P(o.$$.fragment,a)},m(a,s){V(o,a,s),i=!0},p(a,s){const t=s[0]&1231?Ie(l,[s[0]&128&&{"aria-controls":a[7]},s[0]&1&&{"aria-expanded":a[0]},s[0]&64&&{"aria-haspopup":a[6]},s[0]&128&&{"aria-owns":a[7]},s[0]&4&&{"data-value":a[2]},s[0]&4&&{"data-root-value":a[2]},s[0]&8&&{variant:a[3]},s[0]&2&&{shape:a[1]},s[0]&1024&&we(a[10])]):{};s[0]&171|s[1]&4096&&(t.$$scope={dirty:s,ctx:a}),o.$set(t)},i(a){i||(d(o.$$.fragment,a),i=!0)},o(a){v(o.$$.fragment,a),i=!1},d(a){e[17](null),K(o,a)}}}function Re(e,o,i){let l,u;const a=["open","shape","value","variant","click","blur","focus"];let s=B(o,a),t,{$$slots:c={},$$scope:_}=o;const F=Be(c);let{open:f=!1}=o,{shape:E="rounded"}=o,{value:p}=o,{variant:I="regular"}=o;const G=Xe.nextId("MenuButton");let h,g,b=f;const m=ze([]);Ne(e,m,n=>i(44,t=n));const k=Oe(),J=n=>{k("close",{value:n})},L=n=>{k("open",{value:n})},U=n=>{k("select",{value:n})},X=()=>{i(0,f=!f),f&&setTimeout(()=>Le(t),10)},Y=()=>{h==null||h.click()},H=()=>{h==null||h.blur()},w=n=>{h==null||h.focus(n)};Se(Je,{rootValue:p,depth:1,register:n=>{m.set([...t,n])},unregister:n=>{m.set(t.filter(ke=>ke.value!==n.value))},closeMenu:n=>{i(0,f=!1)},focusPrevious:n=>Fe(t,n),focusNext:n=>Ge(t,n),onOpen:L,onClose:J,onSelect:U});function Q(n){N[n?"unshift":"push"](()=>{g=n,i(5,g)})}function W(n){N[n?"unshift":"push"](()=>{h=n,i(4,h)})}function Z(n){r.call(this,e,n)}function R(n){r.call(this,e,n)}function y(n){r.call(this,e,n)}function $(n){r.call(this,e,n)}function x(n){r.call(this,e,n)}function ee(n){r.call(this,e,n)}function ne(n){r.call(this,e,n)}function oe(n){r.call(this,e,n)}function ae(n){r.call(this,e,n)}function te(n){r.call(this,e,n)}function se(n){r.call(this,e,n)}function le(n){r.call(this,e,n)}function ie(n){r.call(this,e,n)}function ue(n){r.call(this,e,n)}function re(n){r.call(this,e,n)}function ce(n){r.call(this,e,n)}function he(n){r.call(this,e,n)}function fe(n){r.call(this,e,n)}function _e(n){r.call(this,e,n)}function pe(n){r.call(this,e,n)}function me(n){r.call(this,e,n)}function de(n){r.call(this,e,n)}function ve(n){r.call(this,e,n)}function ge(n){r.call(this,e,n)}function be(n){r.call(this,e,n)}return e.$$set=n=>{o=M(M({},o),Te(n)),i(10,s=B(o,a)),"open"in n&&i(0,f=n.open),"shape"in n&&i(1,E=n.shape),"value"in n&&i(2,p=n.value),"variant"in n&&i(3,I=n.variant),"$$scope"in n&&i(43,_=n.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&4&&i(7,l=`${p}-menu-${G}`),e.$$.dirty[0]&16385&&(!f&&f!==b&&w(),i(14,b=f))},i(6,u=F.items),[f,E,p,I,h,g,u,l,m,X,s,Y,H,w,b,c,Q,W,Z,R,y,$,x,ee,ne,oe,ae,te,se,le,ie,ue,re,ce,he,fe,_e,pe,me,de,ve,ge,be,_]}class an extends Ce{constructor(o){super(),Me(this,o,Re,Ze,Ee,{open:0,shape:1,value:2,variant:3,click:11,blur:12,focus:13},null,[-1,-1])}get click(){return this.$$.ctx[11]}get blur(){return this.$$.ctx[12]}get focus(){return this.$$.ctx[13]}}export{an as M};