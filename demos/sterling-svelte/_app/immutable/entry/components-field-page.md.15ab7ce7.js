import{S as us,i as is,s as fs,y as q,z as y,A as S,g as b,d as w,B as C,w as B,T as N,a as P,c as V,b as $,U as z,h as f,q as _,r as h,k as F,l as T,m as I,H as g,C as x,e as os,v as $s,f as ms,R as ds,n as gs}from"../chunks/index.60e805ab.js";import{C as Y}from"../chunks/Checkbox.54686df2.js";import{P as _s}from"../chunks/Playground.e480cf30.js";/* empty css                                                    */import{I as ss}from"../chunks/Input.cde74614.js";import{F as Z}from"../chunks/Field.9f86c7a3.js";import{L as hs}from"../chunks/ListItem.2330bbef.js";import{S as bs}from"../chunks/Select.30dc91b3.js";/* empty css                                                     *//* empty css                                                     *//* empty css                                                       *//* empty css                                                   *//* empty css                                                   *//* empty css                                                       *//* empty css                                                      *//* empty css                                                         *//* empty css                                                            *//* empty css                                                    *//* empty css                                                     *//* empty css                                                     *//* empty css                                                  *//* empty css                                                      *//* empty css                                                       *//* empty css                                                    *//* empty css                                                   *//* empty css                                                          *//* empty css                                                              *//* empty css                                                       */const ls=["none","info","success","warning","error"];function cs(o,s,a){const n=o.slice();return n[14]=s[a],n}function vs(o){let s,a;return s=new ss({props:{id:"field-target",disabled:o[0],composed:!0}}),{c(){q(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,t){S(s,n,t),a=!0},p(n,t){const r={};t&1&&(r.disabled=n[0]),s.$set(r)},i(n){a||(b(s.$$.fragment,n),a=!0)},o(n){w(s.$$.fragment,n),a=!1},d(n){C(s,n)}}}function ws(o){let s,a;return s=new Z({props:{for:o[6]?"field-target":void 0,forwardClick:o[1],label:o[2],message:o[3],required:o[4],status:o[5],$$slots:{default:[vs]},$$scope:{ctx:o}}}),{c(){q(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,t){S(s,n,t),a=!0},p(n,t){const r={};t&64&&(r.for=n[6]?"field-target":void 0),t&2&&(r.forwardClick=n[1]),t&4&&(r.label=n[2]),t&8&&(r.message=n[3]),t&16&&(r.required=n[4]),t&32&&(r.status=n[5]),t&131073&&(r.$$scope={dirty:t,ctx:n}),s.$set(r)},i(n){a||(b(s.$$.fragment,n),a=!0)},o(n){w(s.$$.fragment,n),a=!1},d(n){C(s,n)}}}function Es(o){let s;return{c(){s=_("input disabled")},l(a){s=h(a,"input disabled")},m(a,n){$(a,s,n)},d(a){a&&f(s)}}}function qs(o){let s;return{c(){s=_("forwardClick")},l(a){s=h(a,"forwardClick")},m(a,n){$(a,s,n)},d(a){a&&f(s)}}}function ys(o){let s,a,n;function t(e){o[10](e)}let r={composed:!0};return o[2]!==void 0&&(r.value=o[2]),s=new ss({props:r}),B.push(()=>N(s,"value",t,o[2])),{c(){q(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,l){S(s,e,l),n=!0},p(e,l){const c={};!a&&l&4&&(a=!0,c.value=e[2],z(()=>a=!1)),s.$set(c)},i(e){n||(b(s.$$.fragment,e),n=!0)},o(e){w(s.$$.fragment,e),n=!1},d(e){C(s,e)}}}function Ss(o){let s,a,n;function t(e){o[11](e)}let r={composed:!0};return o[3]!==void 0&&(r.value=o[3]),s=new ss({props:r}),B.push(()=>N(s,"value",t,o[3])),{c(){q(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,l){S(s,e,l),n=!0},p(e,l){const c={};!a&&l&8&&(a=!0,c.value=e[3],z(()=>a=!1)),s.$set(c)},i(e){n||(b(s.$$.fragment,e),n=!0)},o(e){w(s.$$.fragment,e),n=!1},d(e){C(s,e)}}}function Cs(o){let s;return{c(){s=_("required")},l(a){s=h(a,"required")},m(a,n){$(a,s,n)},d(a){a&&f(s)}}}function Ls(o){let s=o[14]+"",a;return{c(){a=_(s)},l(n){a=h(n,s)},m(n,t){$(n,a,t)},p:x,d(n){n&&f(a)}}}function rs(o){let s,a;return s=new hs({props:{value:o[14],$$slots:{default:[Ls]},$$scope:{ctx:o}}}),{c(){q(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,t){S(s,n,t),a=!0},p(n,t){const r={};t&131072&&(r.$$scope={dirty:t,ctx:n}),s.$set(r)},i(n){a||(b(s.$$.fragment,n),a=!0)},o(n){w(s.$$.fragment,n),a=!1},d(n){C(s,n)}}}function js(o){let s,a,n=ls,t=[];for(let e=0;e<n.length;e+=1)t[e]=rs(cs(o,n,e));const r=e=>w(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=os()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);s=os()},m(e,l){for(let c=0;c<t.length;c+=1)t[c].m(e,l);$(e,s,l),a=!0},p(e,l){if(l&0){n=ls;let c;for(c=0;c<n.length;c+=1){const k=cs(e,n,c);t[c]?(t[c].p(k,l),b(t[c],1)):(t[c]=rs(k),t[c].c(),b(t[c],1),t[c].m(s.parentNode,s))}for($s(),c=n.length;c<t.length;c+=1)r(c);ms()}},i(e){if(!a){for(let l=0;l<n.length;l+=1)b(t[l]);a=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)w(t[l]);a=!1},d(e){ds(t,e),e&&f(s)}}}function Fs(o){let s,a,n;function t(e){o[13](e)}let r={id:"status-select",composed:!0,$$slots:{default:[js]},$$scope:{ctx:o}};return o[5]!==void 0&&(r.selectedValue=o[5]),s=new bs({props:r}),B.push(()=>N(s,"selectedValue",t,o[5])),{c(){q(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,l){S(s,e,l),n=!0},p(e,l){const c={};l&131072&&(c.$$scope={dirty:l,ctx:e}),!a&&l&32&&(a=!0,c.selectedValue=e[5],z(()=>a=!1)),s.$set(c)},i(e){n||(b(s.$$.fragment,e),n=!0)},o(e){w(s.$$.fragment,e),n=!1},d(e){C(s,e)}}}function Ts(o){let s,a,n,t,r,e,l,c,k,L,v,H,A,m,D;function M(p){o[8](p)}let d={$$slots:{default:[Es]},$$scope:{ctx:o}};o[0]!==void 0&&(d.checked=o[0]),s=new Y({props:d}),B.push(()=>N(s,"checked",M,o[0]));function Q(p){o[9](p)}let O={$$slots:{default:[qs]},$$scope:{ctx:o}};o[1]!==void 0&&(O.checked=o[1]),t=new Y({props:O}),B.push(()=>N(t,"checked",Q,o[1])),l=new Z({props:{label:"label",$$slots:{default:[ys]},$$scope:{ctx:o}}}),k=new Z({props:{label:"message",$$slots:{default:[Ss]},$$scope:{ctx:o}}});function W(p){o[12](p)}let G={$$slots:{default:[Cs]},$$scope:{ctx:o}};return o[4]!==void 0&&(G.checked=o[4]),v=new Y({props:G}),B.push(()=>N(v,"checked",W,o[4])),m=new Z({props:{label:"status",for:"status-select",forwardClick:!0,$$slots:{default:[Fs]},$$scope:{ctx:o}}}),{c(){q(s.$$.fragment),n=P(),q(t.$$.fragment),e=P(),q(l.$$.fragment),c=P(),q(k.$$.fragment),L=P(),q(v.$$.fragment),A=P(),q(m.$$.fragment)},l(p){y(s.$$.fragment,p),n=V(p),y(t.$$.fragment,p),e=V(p),y(l.$$.fragment,p),c=V(p),y(k.$$.fragment,p),L=V(p),y(v.$$.fragment,p),A=V(p),y(m.$$.fragment,p)},m(p,i){S(s,p,i),$(p,n,i),S(t,p,i),$(p,e,i),S(l,p,i),$(p,c,i),S(k,p,i),$(p,L,i),S(v,p,i),$(p,A,i),S(m,p,i),D=!0},p(p,i){const R={};i&131072&&(R.$$scope={dirty:i,ctx:p}),!a&&i&1&&(a=!0,R.checked=p[0],z(()=>a=!1)),s.$set(R);const j={};i&131072&&(j.$$scope={dirty:i,ctx:p}),!r&&i&2&&(r=!0,j.checked=p[1],z(()=>r=!1)),t.$set(j);const X={};i&131076&&(X.$$scope={dirty:i,ctx:p}),l.$set(X);const U={};i&131080&&(U.$$scope={dirty:i,ctx:p}),k.$set(U);const u={};i&131072&&(u.$$scope={dirty:i,ctx:p}),!H&&i&16&&(H=!0,u.checked=p[4],z(()=>H=!1)),v.$set(u);const E={};i&131104&&(E.$$scope={dirty:i,ctx:p}),m.$set(E)},i(p){D||(b(s.$$.fragment,p),b(t.$$.fragment,p),b(l.$$.fragment,p),b(k.$$.fragment,p),b(v.$$.fragment,p),b(m.$$.fragment,p),D=!0)},o(p){w(s.$$.fragment,p),w(t.$$.fragment,p),w(l.$$.fragment,p),w(k.$$.fragment,p),w(v.$$.fragment,p),w(m.$$.fragment,p),D=!1},d(p){C(s,p),p&&f(n),C(t,p),p&&f(e),C(l,p),p&&f(c),C(k,p),p&&f(L),C(v,p),p&&f(A),C(m,p)}}}function Is(o){let s,a,n,t,r,e,l;return{c(){s=_("use "),a=F("i"),n=_("for"),t=_(" and "),r=F("i"),e=_("id"),l=_(" association")},l(c){s=h(c,"use "),a=T(c,"I",{});var k=I(a);n=h(k,"for"),k.forEach(f),t=h(c," and "),r=T(c,"I",{});var L=I(r);e=h(L,"id"),L.forEach(f),l=h(c," association")},m(c,k){$(c,s,k),$(c,a,k),g(a,n),$(c,t,k),$(c,r,k),g(r,e),$(c,l,k)},p:x,d(c){c&&f(s),c&&f(a),c&&f(t),c&&f(r),c&&f(l)}}}function Ps(o){let s,a,n;function t(e){o[7](e)}let r={$$slots:{default:[Is]},$$scope:{ctx:o}};return o[6]!==void 0&&(r.checked=o[6]),s=new Y({props:r}),B.push(()=>N(s,"checked",t,o[6])),{c(){q(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,l){S(s,e,l),n=!0},p(e,l){const c={};l&131072&&(c.$$scope={dirty:l,ctx:e}),!a&&l&64&&(a=!0,c.checked=e[6],z(()=>a=!1)),s.$set(c)},i(e){n||(b(s.$$.fragment,e),n=!0)},o(e){w(s.$$.fragment,e),n=!1},d(e){C(s,e)}}}function Vs(o){let s,a;return s=new _s({props:{$$slots:{options:[Ps],props:[Ts],component:[ws]},$$scope:{ctx:o}}}),{c(){q(s.$$.fragment)},l(n){y(s.$$.fragment,n)},m(n,t){S(s,n,t),a=!0},p(n,[t]){const r={};t&131199&&(r.$$scope={dirty:t,ctx:n}),s.$set(r)},i(n){a||(b(s.$$.fragment,n),a=!0)},o(n){w(s.$$.fragment,n),a=!1},d(n){C(s,n)}}}function As(o,s,a){let n=!1,t=!1,r="Name",e="",l=!1,c="none",k=!0;function L(d){k=d,a(6,k)}function v(d){n=d,a(0,n)}function H(d){t=d,a(1,t)}function A(d){r=d,a(2,r)}function m(d){e=d,a(3,e)}function D(d){l=d,a(4,l)}function M(d){c=d,a(5,c)}return[n,t,r,e,l,c,k,L,v,H,A,m,D,M]}class Ds extends us{constructor(s){super(),is(this,s,As,Vs,fs,{})}}function Hs(o){let s,a,n,t,r,e,l,c,k,L,v,H,A,m,D,M,d,Q,O,W,G,p,i,R,j,X=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ----- Types ----- //</span>

  type FieldStatus <span class="token operator">=</span> <span class="token string">'none'</span> <span class="token operator">|</span> <span class="token string">'info'</span> <span class="token operator">|</span> <span class="token string">'success'</span> <span class="token operator">|</span> <span class="token string">'warning'</span> <span class="token operator">|</span> <span class="token string">'error'</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Props ----- //</span>

  <span class="token comment">// HTMLLabelElement props are forwarded</span>

  <span class="token keyword">let</span> <span class="token literal-property property">forwardClick</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token keyword">for</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">label</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">message</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">required</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> requiredReason <span class="token operator">=</span> <span class="token string">'This field is required'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">status</span><span class="token operator">:</span> FieldStatus <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Events ----- //</span>

  <span class="token comment">// HTMLLabelElement events are bubbled</span>

  <span class="token comment">// ----- Methods ----- //</span>

  <span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> FocusOptions</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Anatomy --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span> <span class="token attr-name">disabled=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>targetDisabled<span class="token punctuation">&#125;</span></span> <span class="token attr-name">for=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>htmlFor<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>forwardClick<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>label<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>required<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">disabled=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>targetDisabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>message<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>required<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>status<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>required<span class="token punctuation">"</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>requiredTip<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></code>`,U;return i=new Ds({}),{c(){s=F("h1"),a=_("Field"),n=P(),t=F("p"),r=_("A label container for an interactive element such as an input, select, list, or tree."),e=P(),l=F("ul"),c=F("li"),k=_("Set optional message and status of the field"),L=P(),v=F("li"),H=_("Set required and requiredTip to indicate the user must fill in a value"),A=P(),m=F("li"),D=_("Set "),M=F("code"),d=_("for"),Q=_(" to the "),O=F("code"),W=_("id"),G=_(" of the interactive element to improve voice navigation."),p=P(),q(i.$$.fragment),R=P(),j=F("pre"),this.h()},l(u){s=T(u,"H1",{});var E=I(s);a=h(E,"Field"),E.forEach(f),n=V(u),t=T(u,"P",{});var ns=I(t);r=h(ns,"A label container for an interactive element such as an input, select, list, or tree."),ns.forEach(f),e=V(u),l=T(u,"UL",{});var J=I(l);c=T(J,"LI",{});var es=I(c);k=h(es,"Set optional message and status of the field"),es.forEach(f),L=V(J),v=T(J,"LI",{});var as=I(v);H=h(as,"Set required and requiredTip to indicate the user must fill in a value"),as.forEach(f),A=V(J),m=T(J,"LI",{});var K=I(m);D=h(K,"Set "),M=T(K,"CODE",{});var ts=I(M);d=h(ts,"for"),ts.forEach(f),Q=h(K," to the "),O=T(K,"CODE",{});var ps=I(O);W=h(ps,"id"),ps.forEach(f),G=h(K," of the interactive element to improve voice navigation."),K.forEach(f),J.forEach(f),p=V(u),y(i.$$.fragment,u),R=V(u),j=T(u,"PRE",{class:!0});var ks=I(j);ks.forEach(f),this.h()},h(){gs(j,"class","language-svelte")},m(u,E){$(u,s,E),g(s,a),$(u,n,E),$(u,t,E),g(t,r),$(u,e,E),$(u,l,E),g(l,c),g(c,k),g(l,L),g(l,v),g(v,H),g(l,A),g(l,m),g(m,D),g(m,M),g(M,d),g(m,Q),g(m,O),g(O,W),g(m,G),$(u,p,E),S(i,u,E),$(u,R,E),$(u,j,E),j.innerHTML=X,U=!0},p:x,i(u){U||(b(i.$$.fragment,u),U=!0)},o(u){w(i.$$.fragment,u),U=!1},d(u){u&&f(s),u&&f(n),u&&f(t),u&&f(e),u&&f(l),u&&f(p),C(i,u),u&&f(R),u&&f(j)}}}class kn extends us{constructor(s){super(),is(this,s,null,Hs,fs,{})}}export{kn as default};