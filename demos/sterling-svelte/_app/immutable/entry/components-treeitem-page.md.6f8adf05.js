import{S as un,i as rn,s as kn,y as x,z as P,A as C,g as j,d as H,B as I,a5 as yn,w as fn,k as d,l as m,m as v,h as n,n as Y,b as p,T as wn,U as Tn,a as $,c as _,C as dn,q as k,r as f,H as o}from"../chunks/index.3ab8247a.js";import{C as xn}from"../chunks/Checkbox.5903eac6.js";import{P as Pn}from"../chunks/Playground.ff5e0b5e.js";import{T as as}from"../chunks/TreeItem.ea5369d8.js";import{w as cn}from"../chunks/index.e3af1c97.js";import{T as Cn}from"../chunks/TreeItemDisplay.a495a6b5.js";function jn(h){let a,c,i,t,r,u,g,b;return a=new as({props:{value:"Arabica"}}),i=new as({props:{value:"Robusta"}}),r=new as({props:{value:"Liberica"}}),g=new as({props:{value:"Excelsa"}}),{c(){x(a.$$.fragment),c=$(),x(i.$$.fragment),t=$(),x(r.$$.fragment),u=$(),x(g.$$.fragment)},l(e){P(a.$$.fragment,e),c=_(e),P(i.$$.fragment,e),t=_(e),P(r.$$.fragment,e),u=_(e),P(g.$$.fragment,e)},m(e,E){C(a,e,E),p(e,c,E),C(i,e,E),p(e,t,E),C(r,e,E),p(e,u,E),C(g,e,E),b=!0},p:dn,i(e){b||(j(a.$$.fragment,e),j(i.$$.fragment,e),j(r.$$.fragment,e),j(g.$$.fragment,e),b=!0)},o(e){H(a.$$.fragment,e),H(i.$$.fragment,e),H(r.$$.fragment,e),H(g.$$.fragment,e),b=!1},d(e){I(a,e),e&&n(c),I(i,e),e&&n(t),I(r,e),e&&n(u),I(g,e)}}}function Hn(h){let a,c,i;return c=new as({props:{value:"Coffee Bean Types",disabled:h[1],$$slots:{default:[jn]},$$scope:{ctx:h}}}),{c(){a=d("div"),x(c.$$.fragment),this.h()},l(t){a=m(t,"DIV",{class:!0,slot:!0});var r=v(a);P(c.$$.fragment,r),r.forEach(n),this.h()},h(){Y(a,"class","component svelte-wcq3we"),Y(a,"slot","component")},m(t,r){p(t,a,r),C(c,a,null),i=!0},p(t,r){const u={};r&2&&(u.disabled=t[1]),r&64&&(u.$$scope={dirty:r,ctx:t}),c.$set(u)},i(t){i||(j(c.$$.fragment,t),i=!0)},o(t){H(c.$$.fragment,t),i=!1},d(t){t&&n(a),I(c)}}}function In(h){let a;return{c(){a=k("disabled")},l(c){a=f(c,"disabled")},m(c,i){p(c,a,i)},d(c){c&&n(a)}}}function Dn(h){let a,c,i;function t(u){h[2](u)}let r={$$slots:{default:[In]},$$scope:{ctx:h}};return h[1]!==void 0&&(r.checked=h[1]),a=new xn({props:r}),fn.push(()=>wn(a,"checked",t,h[1])),{c(){x(a.$$.fragment)},l(u){P(a.$$.fragment,u)},m(u,g){C(a,u,g),i=!0},p(u,g){const b={};g&64&&(b.$$scope={dirty:g,ctx:u}),!c&&g&2&&(c=!0,b.checked=u[1],Tn(()=>c=!1)),a.$set(b)},i(u){i||(j(a.$$.fragment,u),i=!0)},o(u){H(a.$$.fragment,u),i=!1},d(u){I(a,u)}}}function Ln(h){let a,c,i={$$slots:{props:[Dn],component:[Hn]},$$scope:{ctx:h}};return a=new Pn({props:i}),h[3](a),{c(){x(a.$$.fragment)},l(t){P(a.$$.fragment,t)},m(t,r){C(a,t,r),c=!0},p(t,[r]){const u={};r&66&&(u.$$scope={dirty:r,ctx:t}),a.$set(u)},i(t){c||(j(a.$$.fragment,t),c=!0)},o(t){H(a.$$.fragment,t),c=!1},d(t){h[3](null),I(a,t)}}}function Mn(h,a,c){let i,t=!1;const r=cn([]),u=cn();yn(Cn,{expandedValues:r,selectedValue:u});function g(e){t=e,c(1,t)}function b(e){fn[e?"unshift":"push"](()=>{i=e,c(0,i)})}return[i,t,g,b]}class An extends un{constructor(a){super(),rn(this,a,Mn,Ln,kn,{})}}function Rn(h){let a,c,i,t,r,u,g,b,e,E,F,hs,Es,G,bs,ys,w,ws,J,Ts,xs,Q,Ps,Cs,ts,O,js,es,S,Hs,ps,D,mn=`<code class="language-ts"><span class="token comment">/**
 * The context for a tree item and its descendants.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TreeItemContext</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/**
   * The depth of this tree item within the tree hierarchy.
   * Starts at zero.
   */</span>
  depth<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token comment">/** When true, the three item is disabled. */</span>
  disabled<span class="token operator">:</span> Readable<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,ls,V,Is,os,q,Ds,cs,L,vn=`<code class="language-ts"><span class="token comment">/** When true, the item is disabled. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** The text for the item when the item and label slots are not filled. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token comment">/** The value uniquely identifying this item within the tree. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></code>`,us,B,Ls,is,N,Ms,rs,z,As,ks,y,Rs,Z,Os,Ss,ss,Vs,qs,ns,Bs,Ns,fs,M,$n=`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">collapse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">expand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">selectParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">selectPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">selectNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">toggleExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,ds,U,zs,ms,A,_n=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- item --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>colorful<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>depth<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>expanded<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hasChildren<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeItemDisplay</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>colorful<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>depth<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>expanded<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hasChildren<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span>
          <span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>text <span class="token operator">||</span> value<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span>
        <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeItemDisplay</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- children --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>depth<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>disabled<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">&#125;</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>value<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,vs,W,Us,$s,R,_s;return R=new An({}),{c(){a=d("h1"),c=k("TreeItem"),i=$(),t=d("p"),r=k("An item within a "),u=d("code"),g=k("Tree"),b=k(" hierarchy."),e=$(),E=d("ul"),F=d("li"),hs=k("Provides selection, expand/collapse, and interaction within a Tree."),Es=$(),G=d("li"),bs=k("By default, renders the item with TreeItemDisplay."),ys=$(),w=d("li"),ws=k("Note: A tree item is identified by having "),J=d("code"),Ts=k("data-value"),xs=k(" and "),Q=d("code"),Ps=k('role="treeitem"'),Cs=k(" properties"),ts=$(),O=d("h2"),js=k("Types"),es=$(),S=d("p"),Hs=k("TreeItem inspects both TreeContext and TreeItemContext to handle colorful, disabled, expand/collapse, and selected state."),ps=$(),D=d("pre"),ls=$(),V=d("h2"),Is=k("Props"),os=$(),q=d("p"),Ds=k("HTMLDivElement props are included."),cs=$(),L=d("pre"),us=$(),B=d("h2"),Ls=k("Events"),is=$(),N=d("p"),Ms=k("HTMLDivElement events are included."),rs=$(),z=d("h2"),As=k("Methods"),ks=$(),y=d("p"),Rs=k("HTMLDivElement "),Z=d("code"),Os=k("blur"),Ss=k(", "),ss=d("code"),Vs=k("click"),qs=k(", and "),ns=d("code"),Bs=k("focus"),Ns=k(" methods are included."),fs=$(),M=d("pre"),ds=$(),U=d("h2"),zs=k("Anatomy"),ms=$(),A=d("pre"),vs=$(),W=d("h2"),Us=k("Playground"),$s=$(),x(R.$$.fragment),this.h()},l(s){a=m(s,"H1",{});var l=v(a);c=f(l,"TreeItem"),l.forEach(n),i=_(s),t=m(s,"P",{});var gs=v(t);r=f(gs,"An item within a "),u=m(gs,"CODE",{});var Ws=v(u);g=f(Ws,"Tree"),Ws.forEach(n),b=f(gs," hierarchy."),gs.forEach(n),e=_(s),E=m(s,"UL",{});var K=v(E);F=m(K,"LI",{});var Ks=v(F);hs=f(Ks,"Provides selection, expand/collapse, and interaction within a Tree."),Ks.forEach(n),Es=_(K),G=m(K,"LI",{});var Xs=v(G);bs=f(Xs,"By default, renders the item with TreeItemDisplay."),Xs.forEach(n),ys=_(K),w=m(K,"LI",{});var X=v(w);ws=f(X,"Note: A tree item is identified by having "),J=m(X,"CODE",{});var Ys=v(J);Ts=f(Ys,"data-value"),Ys.forEach(n),xs=f(X," and "),Q=m(X,"CODE",{});var Fs=v(Q);Ps=f(Fs,'role="treeitem"'),Fs.forEach(n),Cs=f(X," properties"),X.forEach(n),K.forEach(n),ts=_(s),O=m(s,"H2",{});var Gs=v(O);js=f(Gs,"Types"),Gs.forEach(n),es=_(s),S=m(s,"P",{});var Js=v(S);Hs=f(Js,"TreeItem inspects both TreeContext and TreeItemContext to handle colorful, disabled, expand/collapse, and selected state."),Js.forEach(n),ps=_(s),D=m(s,"PRE",{class:!0});var gn=v(D);gn.forEach(n),ls=_(s),V=m(s,"H2",{});var Qs=v(V);Is=f(Qs,"Props"),Qs.forEach(n),os=_(s),q=m(s,"P",{});var Zs=v(q);Ds=f(Zs,"HTMLDivElement props are included."),Zs.forEach(n),cs=_(s),L=m(s,"PRE",{class:!0});var hn=v(L);hn.forEach(n),us=_(s),B=m(s,"H2",{});var sn=v(B);Ls=f(sn,"Events"),sn.forEach(n),is=_(s),N=m(s,"P",{});var nn=v(N);Ms=f(nn,"HTMLDivElement events are included."),nn.forEach(n),rs=_(s),z=m(s,"H2",{});var an=v(z);As=f(an,"Methods"),an.forEach(n),ks=_(s),y=m(s,"P",{});var T=v(y);Rs=f(T,"HTMLDivElement "),Z=m(T,"CODE",{});var tn=v(Z);Os=f(tn,"blur"),tn.forEach(n),Ss=f(T,", "),ss=m(T,"CODE",{});var en=v(ss);Vs=f(en,"click"),en.forEach(n),qs=f(T,", and "),ns=m(T,"CODE",{});var pn=v(ns);Bs=f(pn,"focus"),pn.forEach(n),Ns=f(T," methods are included."),T.forEach(n),fs=_(s),M=m(s,"PRE",{class:!0});var En=v(M);En.forEach(n),ds=_(s),U=m(s,"H2",{});var ln=v(U);zs=f(ln,"Anatomy"),ln.forEach(n),ms=_(s),A=m(s,"PRE",{class:!0});var bn=v(A);bn.forEach(n),vs=_(s),W=m(s,"H2",{});var on=v(W);Us=f(on,"Playground"),on.forEach(n),$s=_(s),P(R.$$.fragment,s),this.h()},h(){Y(D,"class","language-ts"),Y(L,"class","language-ts"),Y(M,"class","language-ts"),Y(A,"class","language-svelte")},m(s,l){p(s,a,l),o(a,c),p(s,i,l),p(s,t,l),o(t,r),o(t,u),o(u,g),o(t,b),p(s,e,l),p(s,E,l),o(E,F),o(F,hs),o(E,Es),o(E,G),o(G,bs),o(E,ys),o(E,w),o(w,ws),o(w,J),o(J,Ts),o(w,xs),o(w,Q),o(Q,Ps),o(w,Cs),p(s,ts,l),p(s,O,l),o(O,js),p(s,es,l),p(s,S,l),o(S,Hs),p(s,ps,l),p(s,D,l),D.innerHTML=mn,p(s,ls,l),p(s,V,l),o(V,Is),p(s,os,l),p(s,q,l),o(q,Ds),p(s,cs,l),p(s,L,l),L.innerHTML=vn,p(s,us,l),p(s,B,l),o(B,Ls),p(s,is,l),p(s,N,l),o(N,Ms),p(s,rs,l),p(s,z,l),o(z,As),p(s,ks,l),p(s,y,l),o(y,Rs),o(y,Z),o(Z,Os),o(y,Ss),o(y,ss),o(ss,Vs),o(y,qs),o(y,ns),o(ns,Bs),o(y,Ns),p(s,fs,l),p(s,M,l),M.innerHTML=$n,p(s,ds,l),p(s,U,l),o(U,zs),p(s,ms,l),p(s,A,l),A.innerHTML=_n,p(s,vs,l),p(s,W,l),o(W,Us),p(s,$s,l),C(R,s,l),_s=!0},p:dn,i(s){_s||(j(R.$$.fragment,s),_s=!0)},o(s){H(R.$$.fragment,s),_s=!1},d(s){s&&n(a),s&&n(i),s&&n(t),s&&n(e),s&&n(E),s&&n(ts),s&&n(O),s&&n(es),s&&n(S),s&&n(ps),s&&n(D),s&&n(ls),s&&n(V),s&&n(os),s&&n(q),s&&n(cs),s&&n(L),s&&n(us),s&&n(B),s&&n(is),s&&n(N),s&&n(rs),s&&n(z),s&&n(ks),s&&n(y),s&&n(fs),s&&n(M),s&&n(ds),s&&n(U),s&&n(ms),s&&n(A),s&&n(vs),s&&n(W),s&&n($s),I(R,s)}}}class zn extends un{constructor(a){super(),rn(this,a,null,Rn,kn,{})}}export{zn as default};