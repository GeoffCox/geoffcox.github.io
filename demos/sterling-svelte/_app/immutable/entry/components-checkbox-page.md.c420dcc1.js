import{S as O,i as R,s as x,y as w,z as E,A as C,g as P,d as j,B as I,w as T,T as B,k as H,l as L,m as A,h as k,n as F,b as m,U as D,a as M,c as S,q as g,r as h,H as y,u as z,C as G}from"../chunks/index.0c4ca2cd.js";import{C as V}from"../chunks/Checkbox.e0b96079.js";import{F as J}from"../chunks/Field.0a7fcfd7.js";import{I as K}from"../chunks/Input.e15eeeb9.js";import{P as N}from"../chunks/Playground.e5862966.js";function Q(t){let n;return{c(){n=g(t[4])},l(s){n=h(s,t[4])},m(s,p){m(s,n,p)},p(s,p){p&16&&z(n,s[4])},d(s){s&&k(n)}}}function W(t){let n,s,p,a;function r(o){t[8](o)}let c={colorful:t[3],disabled:t[1],$$slots:{default:[Q]},$$scope:{ctx:t}};return t[2]!==void 0&&(c.checked=t[2]),s=new V({props:c}),T.push(()=>B(s,"checked",r,t[2])),s.$on("change",t[9]),{c(){n=H("div"),w(s.$$.fragment),this.h()},l(o){n=L(o,"DIV",{slot:!0,class:!0});var i=A(n);E(s.$$.fragment,i),i.forEach(k),this.h()},h(){F(n,"slot","component"),F(n,"class","component svelte-wjcjyy")},m(o,i){m(o,n,i),C(s,n,null),a=!0},p(o,i){const f={};i&8&&(f.colorful=o[3]),i&2&&(f.disabled=o[1]),i&2064&&(f.$$scope={dirty:i,ctx:o}),!p&&i&4&&(p=!0,f.checked=o[2],D(()=>p=!1)),s.$set(f)},i(o){a||(P(s.$$.fragment,o),a=!0)},o(o){j(s.$$.fragment,o),a=!1},d(o){o&&k(n),I(s)}}}function X(t){let n;return{c(){n=g("colorful")},l(s){n=h(s,"colorful")},m(s,p){m(s,n,p)},d(s){s&&k(n)}}}function Y(t){let n;return{c(){n=g("disabled")},l(s){n=h(s,"disabled")},m(s,p){m(s,n,p)},d(s){s&&k(n)}}}function Z(t){let n,s,p;function a(c){t[7](c)}let r={composed:!0};return t[4]!==void 0&&(r.value=t[4]),n=new K({props:r}),T.push(()=>B(n,"value",a,t[4])),{c(){w(n.$$.fragment)},l(c){E(n.$$.fragment,c)},m(c,o){C(n,c,o),p=!0},p(c,o){const i={};!s&&o&16&&(s=!0,i.value=c[4],D(()=>s=!1)),n.$set(i)},i(c){p||(P(n.$$.fragment,c),p=!0)},o(c){j(n.$$.fragment,c),p=!1},d(c){I(n,c)}}}function nn(t){let n,s,p,a,r,c,o,i;function f(e){t[5](e)}let $={$$slots:{default:[X]},$$scope:{ctx:t}};t[3]!==void 0&&($.checked=t[3]),n=new V({props:$}),T.push(()=>B(n,"checked",f,t[3]));function b(e){t[6](e)}let _={$$slots:{default:[Y]},$$scope:{ctx:t}};return t[1]!==void 0&&(_.checked=t[1]),a=new V({props:_}),T.push(()=>B(a,"checked",b,t[1])),o=new J({props:{label:"default slot (text)",$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){w(n.$$.fragment),p=M(),w(a.$$.fragment),c=M(),w(o.$$.fragment)},l(e){E(n.$$.fragment,e),p=S(e),E(a.$$.fragment,e),c=S(e),E(o.$$.fragment,e)},m(e,u){C(n,e,u),m(e,p,u),C(a,e,u),m(e,c,u),C(o,e,u),i=!0},p(e,u){const l={};u&2048&&(l.$$scope={dirty:u,ctx:e}),!s&&u&8&&(s=!0,l.checked=e[3],D(()=>s=!1)),n.$set(l);const d={};u&2048&&(d.$$scope={dirty:u,ctx:e}),!r&&u&2&&(r=!0,d.checked=e[1],D(()=>r=!1)),a.$set(d);const v={};u&2064&&(v.$$scope={dirty:u,ctx:e}),o.$set(v)},i(e){i||(P(n.$$.fragment,e),P(a.$$.fragment,e),P(o.$$.fragment,e),i=!0)},o(e){j(n.$$.fragment,e),j(a.$$.fragment,e),j(o.$$.fragment,e),i=!1},d(e){I(n,e),e&&k(p),I(a,e),e&&k(c),I(o,e)}}}function sn(t){let n,s,p;return{c(){n=H("div"),s=g("checked: "),p=g(t[2])},l(a){n=L(a,"DIV",{});var r=A(n);s=h(r,"checked: "),p=h(r,t[2]),r.forEach(k)},m(a,r){m(a,n,r),y(n,s),y(n,p)},p(a,r){r&4&&z(p,a[2])},d(a){a&&k(n)}}}function an(t){let n,s,p={$$slots:{status:[sn],props:[nn],component:[W]},$$scope:{ctx:t}};return n=new N({props:p}),t[10](n),{c(){w(n.$$.fragment)},l(a){E(n.$$.fragment,a)},m(a,r){C(n,a,r),s=!0},p(a,[r]){const c={};r&2079&&(c.$$scope={dirty:r,ctx:a}),n.$set(c)},i(a){s||(P(n.$$.fragment,a),s=!0)},o(a){j(n.$$.fragment,a),s=!1},d(a){t[10](null),I(n,a)}}}function tn(t,n,s){let p,a=!1,r=!1,c=!1,o="Sterling";function i(u){c=u,s(3,c)}function f(u){a=u,s(1,a)}function $(u){o=u,s(4,o)}function b(u){r=u,s(2,r)}const _=()=>p.recordEvent("change");function e(u){T[u?"unshift":"push"](()=>{p=u,s(0,p)})}return[p,a,r,c,o,i,f,$,b,_,e]}class en extends O{constructor(n){super(),R(this,n,tn,an,x,{})}}function pn(t){let n,s,p,a,r,c,o,i,f,$,b,_,e=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ----- Props ----- //</span>

  <span class="token comment">// HTMLInputElement props are forwarded</span>

  <span class="token keyword">let</span> <span class="token literal-property property">colorful</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">shape</span><span class="token operator">:</span> ButtonShape <span class="token operator">=</span> <span class="token string">'rounded'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">variant</span><span class="token operator">:</span> ButtonVariant <span class="token operator">=</span> <span class="token string">'regular'</span><span class="token punctuation">;</span>

  <span class="token comment">// ----- Events ----- //</span>

  <span class="token comment">// HTMLInputElement events are bubbled</span>

  <span class="token comment">// ----- Methods ----- //</span>

  <span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">focus</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> FocusOptions</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Anatomy --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- hidden --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- checkmark --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>checked<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token attr-name">inputId=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,u;return $=new en({}),{c(){n=H("h1"),s=g("Checkbox"),p=M(),a=H("p"),r=g("A styled "),c=H("code"),o=g("<input type=checkbox />"),i=g("."),f=M(),w($.$$.fragment),b=M(),_=H("pre"),this.h()},l(l){n=L(l,"H1",{});var d=A(n);s=h(d,"Checkbox"),d.forEach(k),p=S(l),a=L(l,"P",{});var v=A(a);r=h(v,"A styled "),c=L(v,"CODE",{});var q=A(c);o=h(q,"<input type=checkbox />"),q.forEach(k),i=h(v,"."),v.forEach(k),f=S(l),E($.$$.fragment,l),b=S(l),_=L(l,"PRE",{class:!0});var U=A(_);U.forEach(k),this.h()},h(){F(_,"class","language-svelte")},m(l,d){m(l,n,d),y(n,s),m(l,p,d),m(l,a,d),y(a,r),y(a,c),y(c,o),y(a,i),m(l,f,d),C($,l,d),m(l,b,d),m(l,_,d),_.innerHTML=e,u=!0},p:G,i(l){u||(P($.$$.fragment,l),u=!0)},o(l){j($.$$.fragment,l),u=!1},d(l){l&&k(n),l&&k(p),l&&k(a),l&&k(f),I($,l),l&&k(b),l&&k(_)}}}class kn extends O{constructor(n){super(),R(this,n,null,pn,x,{})}}export{kn as default};