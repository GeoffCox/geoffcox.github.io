import{S as ft,i as mt,s as ht,k as i,a as k,l as c,m as u,c as _,h as t,n as w,b as a,D as r,f as Z,g as os,d as ns,t as ne,_ as Vt,Y as rs,N as ps,q as d,r as v,w as pt,x as it,y as ct,B as re,z as ut,p as is}from"../../../chunks/index-8df60287.js";import{d as cs,l as us,n as Re}from"../../../chunks/Slider.svelte_svelte_type_style_lang-ae4f99bd.js";import{T as fs}from"../../../chunks/ThemePropCard-cf281df4.js";function Lt(T,s,h){const o=T.slice();return o[8]=s[h],o}function ms(T){let s,h;return{c(){s=i("div"),h=d("Uh oh! The keys between the light and dark themes DO NOT MATCH!"),this.h()},l(o){s=c(o,"DIV",{class:!0});var n=u(s);h=v(n,"Uh oh! The keys between the light and dark themes DO NOT MATCH!"),n.forEach(t),this.h()},h(){w(s,"class","error svelte-1fwmrh5")},m(o,n){a(o,s,n),r(s,h)},d(o){o&&t(s)}}}function Rt(T){let s,h;return s=new fs({props:{name:T[8]}}),{c(){pt(s.$$.fragment)},l(o){it(s.$$.fragment,o)},m(o,n){ct(s,o,n),h=!0},p:re,i(o){h||(Z(s.$$.fragment,o),h=!0)},o(o){ne(s.$$.fragment,o),h=!1},d(o){ut(s,o)}}}function hs(T){let s,h,o,n,y=!T[0]&&ms(),m=T[1],f=[];for(let p=0;p<m.length;p+=1)f[p]=Rt(Lt(T,m,p));const b=p=>ne(f[p],1,1,()=>{f[p]=null});return{c(){s=i("div"),y&&y.c(),h=k(),o=i("div");for(let p=0;p<f.length;p+=1)f[p].c();this.h()},l(p){s=c(p,"DIV",{});var E=u(s);y&&y.l(E),h=_(E),o=c(E,"DIV",{class:!0});var g=u(o);for(let C=0;C<f.length;C+=1)f[C].l(g);g.forEach(t),E.forEach(t),this.h()},h(){w(o,"class","theme svelte-1fwmrh5")},m(p,E){a(p,s,E),y&&y.m(s,null),r(s,h),r(s,o);for(let g=0;g<f.length;g+=1)f[g].m(o,null);n=!0},p(p,[E]){if(E&2){m=p[1];let g;for(g=0;g<m.length;g+=1){const C=Lt(p,m,g);f[g]?(f[g].p(C,E),Z(f[g],1)):(f[g]=Rt(C),f[g].c(),Z(f[g],1),f[g].m(o,null))}for(os(),g=m.length;g<f.length;g+=1)b(g);ns()}},i(p){if(!n){for(let E=0;E<m.length;E+=1)Z(f[E]);n=!0}},o(p){f=f.filter(Boolean);for(let E=0;E<f.length;E+=1)ne(f[E]);n=!1},d(p){p&&t(s),y&&y.d(),Vt(f,p)}}}function ds(T,s,h){let o;const n=Object.keys(cs),y=Object.keys(us),m=y.every((p,E)=>p===n[E]),f=y,b=rs("sterlingDarkMode");return ps(T,b,p=>h(3,o=p)),T.$$.update=()=>{T.$$.dirty&8,T.$$.dirty&8},[m,f,b,o]}class vs extends ft{constructor(s){super(),mt(this,s,ds,hs,ht,{})}}function Yt(T,s,h){const o=T.slice();return o[0]=s[h],o}function It(T){let s,h,o,n,y=T[0]+"",m,f;return{c(){s=i("div"),h=i("div"),o=k(),n=i("div"),m=d(y),f=k(),this.h()},l(b){s=c(b,"DIV",{class:!0});var p=u(s);h=c(p,"DIV",{class:!0,style:!0,title:!0}),u(h).forEach(t),o=_(p),n=c(p,"DIV",{class:!0});var E=u(n);m=v(E,y),E.forEach(t),f=_(p),p.forEach(t),this.h()},h(){w(h,"class","swatch svelte-1p6cuug"),is(h,"background-color",Re[T[0]]),w(h,"title",`${Re[T[0]]}`),w(n,"class","name svelte-1p6cuug"),w(s,"class","color svelte-1p6cuug")},m(b,p){a(b,s,p),r(s,h),r(s,o),r(s,n),r(n,m),r(s,f)},p:re,d(b){b&&t(s)}}}function ks(T){let s,h=Object.keys(Re),o=[];for(let n=0;n<h.length;n+=1)o[n]=It(Yt(T,h,n));return{c(){s=i("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){s=c(n,"DIV",{class:!0});var y=u(s);for(let m=0;m<o.length;m+=1)o[m].l(y);y.forEach(t),this.h()},h(){w(s,"class","colors svelte-1p6cuug")},m(n,y){a(n,s,y);for(let m=0;m<o.length;m+=1)o[m].m(s,null)},p(n,[y]){if(y&0){h=Object.keys(Re);let m;for(m=0;m<h.length;m+=1){const f=Yt(n,h,m);o[m]?o[m].p(f,y):(o[m]=It(f),o[m].c(),o[m].m(s,null))}for(;m<o.length;m+=1)o[m].d(1);o.length=h.length}},i:re,o:re,d(n){n&&t(s),Vt(o,n)}}}class _s extends ft{constructor(s){super(),mt(this,s,null,ks,ht,{})}}function gs(T){let s,h,o,n,y,m,f,b,p,E,g,C,Ye,pe,x,ie,q,Ie,ce,P,Ve,ee,Ae,Ne,ue,H,At=`<code class="language-undefined">&lt;div use:theme=&#123;&#123;theme: myTheme&#125;&#125;&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,fe,$,qe,te,Be,Ue,se,je,Ke,me,O,Nt=`<code class="language-undefined">&lt;div use:lightTheme&gt;
	&lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,he,M,qt=`<code class="language-undefined">&lt;div use:darkTheme&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,de,B,ze,ve,S,Qe,le,Fe,Ge,ke,L,Bt=`<code class="language-undefined">&lt;div use:toggleDarkTheme&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,_e,U,Je,ge,R,Ut=`<code class="language-undefined">&lt;div use:toggleDarkTheme=&#123;&#123;dark: myToggleValue&#125;&#125;&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,ye,j,We,Ee,K,Xe,Te,z,Ze,we,Y,jt=`<code class="language-undefined">&lt;div use:theme=&#123;&#123;theme: myTheme, atDocumentRoot: true&#125;&#125;&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,be,I,Kt=`<code class="language-undefined">&lt;div use:toggleDarkTheme=&#123;atDocumentRoot: true&#125;&#125;&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,Ce,Q,et,$e,F,tt,De,G,D,st,ae,lt,at,oe,ot,nt,Pe,V,zt=`<code class="language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">&#123;</span> CSSVarSet <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@geoffcox/sterling-svelte'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> myTheme<span class="token operator">:</span> Theme <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token string-property property">'--Common__background-color'</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'--Common__border-color'</span><span class="token operator">:</span> <span class="token string">'#222'</span><span class="token punctuation">,</span>
  <span class="token comment">//...</span></code>`,Se,J,rt,xe,A,Qt=`<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> applyMyTheme <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> params<span class="token operator">?</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>ThemeActionParams<span class="token punctuation">,</span> <span class="token string">'theme'</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> <span class="token function">applyTheme</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>params<span class="token punctuation">,</span> theme<span class="token operator">:</span> myTheme <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,He,N,Ft=`<code class="language-undefined">&lt;div use:applyMyTheme&gt;
  &lt;!-- Components go here --&gt;
&lt;/div&gt;</code>`,Oe;return f=new vs({}),x=new _s({}),{c(){s=i("h1"),h=d("Theme"),o=k(),n=i("p"),y=d(`Each theme consists of a set of CSS variables.
Components use these in styles to follow the theme and respond to theme changes.`),m=k(),pt(f.$$.fragment),b=k(),p=i("h2"),E=d("Neutral Colors"),g=k(),C=i("p"),Ye=d("The built-in dark and light themes use these neutral colors."),pe=k(),pt(x.$$.fragment),ie=k(),q=i("h2"),Ie=d("Basic Usage"),ce=k(),P=i("p"),Ve=d("You can apply a theme with "),ee=i("code"),Ae=d("use:theme"),Ne=d("."),ue=k(),H=i("pre"),fe=k(),$=i("p"),qe=d("You can directly use either of the built-in themes with "),te=i("code"),Be=d("use:lightTheme"),Ue=d(" or "),se=i("code"),je=d("use:darkTheme"),Ke=d("."),me=k(),O=i("pre"),he=k(),M=i("pre"),de=k(),B=i("h2"),ze=d("Toggling between Light and Dark"),ve=k(),S=i("p"),Qe=d("You can toggle between the light and dark themes with "),le=i("code"),Fe=d("use:toggleDarkTheme"),Ge=d(`.
This will automatically follow the OS/browser light or dark theme setting.`),ke=k(),L=i("pre"),_e=k(),U=i("p"),Je=d("You can also provide the dark value to directly control the toggling."),ge=k(),R=i("pre"),ye=k(),j=i("h2"),We=d("Applying to Document Root"),Ee=k(),K=i("p"),Xe=d(`Applying a theme to an element within the body may cause the document element
colors to not match. This often appears as a mismatched background color on the page
when the user scrolls to the top or bottom of the document.`),Te=k(),z=i("p"),Ze=d("You can apply a theme to the root docment element with any of the theme actions."),we=k(),Y=i("pre"),be=k(),I=i("pre"),Ce=k(),Q=i("h1"),et=d("Creating a Custom Theme"),$e=k(),F=i("p"),tt=d("You can create a custom theme by defining a map of CSS variables to color value."),De=k(),G=i("blockquote"),D=i("p"),st=d("To allow components to conform to your theme, be sure to define a value for each CSS variable defined in either the "),ae=i("code"),lt=d("lightTheme"),at=d(" or "),oe=i("code"),ot=d("darkTheme"),nt=d("."),Pe=k(),V=i("pre"),Se=k(),J=i("p"),rt=d("If you want to make using your theme easier, you can write a Svelte action."),xe=k(),A=i("pre"),He=k(),N=i("pre"),this.h()},l(e){s=c(e,"H1",{});var l=u(s);h=v(l,"Theme"),l.forEach(t),o=_(e),n=c(e,"P",{});var dt=u(n);y=v(dt,`Each theme consists of a set of CSS variables.
Components use these in styles to follow the theme and respond to theme changes.`),dt.forEach(t),m=_(e),it(f.$$.fragment,e),b=_(e),p=c(e,"H2",{});var vt=u(p);E=v(vt,"Neutral Colors"),vt.forEach(t),g=_(e),C=c(e,"P",{});var kt=u(C);Ye=v(kt,"The built-in dark and light themes use these neutral colors."),kt.forEach(t),pe=_(e),it(x.$$.fragment,e),ie=_(e),q=c(e,"H2",{});var _t=u(q);Ie=v(_t,"Basic Usage"),_t.forEach(t),ce=_(e),P=c(e,"P",{});var Me=u(P);Ve=v(Me,"You can apply a theme with "),ee=c(Me,"CODE",{});var gt=u(ee);Ae=v(gt,"use:theme"),gt.forEach(t),Ne=v(Me,"."),Me.forEach(t),ue=_(e),H=c(e,"PRE",{class:!0});var Gt=u(H);Gt.forEach(t),fe=_(e),$=c(e,"P",{});var W=u($);qe=v(W,"You can directly use either of the built-in themes with "),te=c(W,"CODE",{});var yt=u(te);Be=v(yt,"use:lightTheme"),yt.forEach(t),Ue=v(W," or "),se=c(W,"CODE",{});var Et=u(se);je=v(Et,"use:darkTheme"),Et.forEach(t),Ke=v(W,"."),W.forEach(t),me=_(e),O=c(e,"PRE",{class:!0});var Jt=u(O);Jt.forEach(t),he=_(e),M=c(e,"PRE",{class:!0});var Wt=u(M);Wt.forEach(t),de=_(e),B=c(e,"H2",{});var Tt=u(B);ze=v(Tt,"Toggling between Light and Dark"),Tt.forEach(t),ve=_(e),S=c(e,"P",{});var Le=u(S);Qe=v(Le,"You can toggle between the light and dark themes with "),le=c(Le,"CODE",{});var wt=u(le);Fe=v(wt,"use:toggleDarkTheme"),wt.forEach(t),Ge=v(Le,`.
This will automatically follow the OS/browser light or dark theme setting.`),Le.forEach(t),ke=_(e),L=c(e,"PRE",{class:!0});var Xt=u(L);Xt.forEach(t),_e=_(e),U=c(e,"P",{});var bt=u(U);Je=v(bt,"You can also provide the dark value to directly control the toggling."),bt.forEach(t),ge=_(e),R=c(e,"PRE",{class:!0});var Zt=u(R);Zt.forEach(t),ye=_(e),j=c(e,"H2",{});var Ct=u(j);We=v(Ct,"Applying to Document Root"),Ct.forEach(t),Ee=_(e),K=c(e,"P",{});var $t=u(K);Xe=v($t,`Applying a theme to an element within the body may cause the document element
colors to not match. This often appears as a mismatched background color on the page
when the user scrolls to the top or bottom of the document.`),$t.forEach(t),Te=_(e),z=c(e,"P",{});var Dt=u(z);Ze=v(Dt,"You can apply a theme to the root docment element with any of the theme actions."),Dt.forEach(t),we=_(e),Y=c(e,"PRE",{class:!0});var es=u(Y);es.forEach(t),be=_(e),I=c(e,"PRE",{class:!0});var ts=u(I);ts.forEach(t),Ce=_(e),Q=c(e,"H1",{});var Pt=u(Q);et=v(Pt,"Creating a Custom Theme"),Pt.forEach(t),$e=_(e),F=c(e,"P",{});var St=u(F);tt=v(St,"You can create a custom theme by defining a map of CSS variables to color value."),St.forEach(t),De=_(e),G=c(e,"BLOCKQUOTE",{});var xt=u(G);D=c(xt,"P",{});var X=u(D);st=v(X,"To allow components to conform to your theme, be sure to define a value for each CSS variable defined in either the "),ae=c(X,"CODE",{});var Ht=u(ae);lt=v(Ht,"lightTheme"),Ht.forEach(t),at=v(X," or "),oe=c(X,"CODE",{});var Ot=u(oe);ot=v(Ot,"darkTheme"),Ot.forEach(t),nt=v(X,"."),X.forEach(t),xt.forEach(t),Pe=_(e),V=c(e,"PRE",{class:!0});var ss=u(V);ss.forEach(t),Se=_(e),J=c(e,"P",{});var Mt=u(J);rt=v(Mt,"If you want to make using your theme easier, you can write a Svelte action."),Mt.forEach(t),xe=_(e),A=c(e,"PRE",{class:!0});var ls=u(A);ls.forEach(t),He=_(e),N=c(e,"PRE",{class:!0});var as=u(N);as.forEach(t),this.h()},h(){w(H,"class","language-undefined"),w(O,"class","language-undefined"),w(M,"class","language-undefined"),w(L,"class","language-undefined"),w(R,"class","language-undefined"),w(Y,"class","language-undefined"),w(I,"class","language-undefined"),w(V,"class","language-ts"),w(A,"class","language-ts"),w(N,"class","language-undefined")},m(e,l){a(e,s,l),r(s,h),a(e,o,l),a(e,n,l),r(n,y),a(e,m,l),ct(f,e,l),a(e,b,l),a(e,p,l),r(p,E),a(e,g,l),a(e,C,l),r(C,Ye),a(e,pe,l),ct(x,e,l),a(e,ie,l),a(e,q,l),r(q,Ie),a(e,ce,l),a(e,P,l),r(P,Ve),r(P,ee),r(ee,Ae),r(P,Ne),a(e,ue,l),a(e,H,l),H.innerHTML=At,a(e,fe,l),a(e,$,l),r($,qe),r($,te),r(te,Be),r($,Ue),r($,se),r(se,je),r($,Ke),a(e,me,l),a(e,O,l),O.innerHTML=Nt,a(e,he,l),a(e,M,l),M.innerHTML=qt,a(e,de,l),a(e,B,l),r(B,ze),a(e,ve,l),a(e,S,l),r(S,Qe),r(S,le),r(le,Fe),r(S,Ge),a(e,ke,l),a(e,L,l),L.innerHTML=Bt,a(e,_e,l),a(e,U,l),r(U,Je),a(e,ge,l),a(e,R,l),R.innerHTML=Ut,a(e,ye,l),a(e,j,l),r(j,We),a(e,Ee,l),a(e,K,l),r(K,Xe),a(e,Te,l),a(e,z,l),r(z,Ze),a(e,we,l),a(e,Y,l),Y.innerHTML=jt,a(e,be,l),a(e,I,l),I.innerHTML=Kt,a(e,Ce,l),a(e,Q,l),r(Q,et),a(e,$e,l),a(e,F,l),r(F,tt),a(e,De,l),a(e,G,l),r(G,D),r(D,st),r(D,ae),r(ae,lt),r(D,at),r(D,oe),r(oe,ot),r(D,nt),a(e,Pe,l),a(e,V,l),V.innerHTML=zt,a(e,Se,l),a(e,J,l),r(J,rt),a(e,xe,l),a(e,A,l),A.innerHTML=Qt,a(e,He,l),a(e,N,l),N.innerHTML=Ft,Oe=!0},p:re,i(e){Oe||(Z(f.$$.fragment,e),Z(x.$$.fragment,e),Oe=!0)},o(e){ne(f.$$.fragment,e),ne(x.$$.fragment,e),Oe=!1},d(e){e&&t(s),e&&t(o),e&&t(n),e&&t(m),ut(f,e),e&&t(b),e&&t(p),e&&t(g),e&&t(C),e&&t(pe),ut(x,e),e&&t(ie),e&&t(q),e&&t(ce),e&&t(P),e&&t(ue),e&&t(H),e&&t(fe),e&&t($),e&&t(me),e&&t(O),e&&t(he),e&&t(M),e&&t(de),e&&t(B),e&&t(ve),e&&t(S),e&&t(ke),e&&t(L),e&&t(_e),e&&t(U),e&&t(ge),e&&t(R),e&&t(ye),e&&t(j),e&&t(Ee),e&&t(K),e&&t(Te),e&&t(z),e&&t(we),e&&t(Y),e&&t(be),e&&t(I),e&&t(Ce),e&&t(Q),e&&t($e),e&&t(F),e&&t(De),e&&t(G),e&&t(Pe),e&&t(V),e&&t(Se),e&&t(J),e&&t(xe),e&&t(A),e&&t(He),e&&t(N)}}}class ws extends ft{constructor(s){super(),mt(this,s,null,gs,ht,{})}}export{ws as default};