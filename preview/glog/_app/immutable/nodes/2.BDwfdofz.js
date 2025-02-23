import{a as x,t as T,g as Ne,k as ge}from"../chunks/disclose-version.uDeAePpO.js";import{C as Be,d as qe,h as V,g as he,b as Je,V as Ye,A as Le,H as Qe,e as ke,i as me,m as oe,aq as re,j as Re,k as Pe,l as Ve,D as Se,ar as Ie,as as Xe,z as Ze,at as $e,ah as et,o as tt,w as ot,am as nt,a3 as it,M as xe,au as be,av as ye,aw as at,u as st,ax as De,a6 as rt,ay as lt,t as ne,a as ae,az as ie,s as E,c as H,r as D,p as se,ae as J,O,Q as c,I as _e,f as B,a4 as X,aA as He,af as ee,aj as ct}from"../chunks/runtime.Dw9PevHv.js";import{o as ce}from"../chunks/index-client.BJqJXq_0.js";import{i as R}from"../chunks/if.Cm640iHB.js";import{r as dt,p as U,a as fe}from"../chunks/props.DnjauSsg.js";import{s as le}from"../chunks/render.C95QHNkD.js";import{s as ut,g as Ge,a as ht}from"../chunks/settings.svelte.hrrQ3M3V.js";import{r as Te}from"../chunks/entry.O8nYDIeX.js";import{p as Oe}from"../chunks/index.B9jdtOV4.js";function Ee(a,e){return e}function mt(a,e,n,o){for(var d=[],v=e.length,s=0;s<v;s++)Xe(e[s].e,d,!0);var y=v>0&&d.length===0&&n!==null;if(y){var k=n.parentNode;Ze(k),k.append(n),o.clear(),q(a,e[0].prev,e[v-1].next)}$e(d,()=>{for(var h=0;h<v;h++){var f=e[h];y||(o.delete(f.k),q(a,f.prev,f.next)),et(f.e,!y)}})}function ve(a,e,n,o,d,v=null){var s=a,y={flags:e,items:new Map,first:null},k=(e&De)!==0;if(k){var h=a;s=V?he(tt(h)):h.appendChild(Be())}V&&Je();var f=null,I=!1;qe(()=>{var b=n(),r=Ye(b)?b:b==null?[]:Le(b),l=r.length;if(I&&l===0)return;I=l===0;let p=!1;if(V){var C=s.data===Qe;C!==(l===0)&&(s=ke(),he(s),me(!1),p=!0)}if(V){for(var S=null,i,t=0;t<l;t++){if(oe.nodeType===8&&oe.data===ot){s=oe,p=!0,me(!1);break}var g=r[t],u=o(g,t);i=je(oe,y,S,null,g,u,t,d,e),y.items.set(u,i),S=i}l>0&&he(ke())}if(!V){var w=nt;pt(r,y,s,d,e,(w.f&re)!==0,o)}v!==null&&(l===0?f?Re(f):f=Pe(()=>v(s)):f!==null&&Ve(f,()=>{f=null})),p&&me(!0),n()}),V&&(s=oe)}function pt(a,e,n,o,d,v,s,y){var N,L,j,Z;var k=(d&lt)!==0,h=(d&(ye|be))!==0,f=a.length,I=e.items,b=e.first,r=b,l,p=null,C,S=[],i=[],t,g,u,w;if(k)for(w=0;w<f;w+=1)t=a[w],g=s(t,w),u=I.get(g),u!==void 0&&((N=u.a)==null||N.measure(),(C??(C=new Set)).add(u));for(w=0;w<f;w+=1){if(t=a[w],g=s(t,w),u=I.get(g),u===void 0){var Y=r?r.e.nodes_start:n;p=je(Y,e,p,p===null?e.first:p.next,t,g,w,o,d),I.set(g,p),S=[],i=[],r=p.next;continue}if(h&&gt(u,t,w,d),u.e.f&re&&(Re(u.e),k&&((L=u.a)==null||L.unfix(),(C??(C=new Set)).delete(u))),u!==r){if(l!==void 0&&l.has(u)){if(S.length<i.length){var M=i[0],m;p=M.prev;var _=S[0],K=S[S.length-1];for(m=0;m<S.length;m+=1)Ce(S[m],M,n);for(m=0;m<i.length;m+=1)l.delete(i[m]);q(e,_.prev,K.next),q(e,p,_),q(e,K,M),r=M,p=K,w-=1,S=[],i=[]}else l.delete(u),Ce(u,r,n),q(e,u.prev,u.next),q(e,u,p===null?e.first:p.next),q(e,p,u),p=u;continue}for(S=[],i=[];r!==null&&r.k!==g;)(v||!(r.e.f&re))&&(l??(l=new Set)).add(r),i.push(r),r=r.next;if(r===null)continue;u=r}S.push(u),p=u,r=u.next}if(r!==null||l!==void 0){for(var G=l===void 0?[]:Le(l);r!==null;)(v||!(r.e.f&re))&&G.push(r),r=r.next;var P=G.length;if(P>0){var W=d&De&&f===0?n:null;if(k){for(w=0;w<P;w+=1)(j=G[w].a)==null||j.measure();for(w=0;w<P;w+=1)(Z=G[w].a)==null||Z.fix()}mt(e,G,W,I)}}k&&rt(()=>{var z;if(C!==void 0)for(u of C)(z=u.a)==null||z.apply()}),Se.first=e.first&&e.first.e,Se.last=p&&p.e}function gt(a,e,n,o){o&ye&&Ie(a.v,e),o&be?Ie(a.i,n):a.i=n}function je(a,e,n,o,d,v,s,y,k,h){var f=(k&ye)!==0,I=(k&at)===0,b=f?I?it(d):xe(d):d,r=k&be?xe(s):s,l={i:r,v:b,k:v,a:null,e:null,prev:n,next:o};try{return l.e=Pe(()=>y(a,b,r),V),l.e.prev=n&&n.e,l.e.next=o&&o.e,n===null?e.first=l:(n.next=l,n.e.next=l.e),o!==null&&(o.prev=l,o.e.prev=l.e),l}finally{}}function Ce(a,e,n){for(var o=a.next?a.next.e.nodes_start:n,d=e?e.e.nodes_start:n,v=a.e.nodes_start;v!==o;){var s=st(v);d.before(v),v=s}}function q(a,e,n){e===null?a.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}const ft=!0,$o=Object.freeze(Object.defineProperty({__proto__:null,prerender:ft},Symbol.toStringTag,{value:"Module"}));var vt=T('<div>&gt; <span class="cursor svelte-44s095">█</span></div>');function ze(a,e){let n=dt(e,["$$slots","$$events","$$legacy"]);var o=vt();let d;ne(()=>d=ut(o,d,{class:"prompt-indicator",...n},"svelte-44s095")),x(a,o)}var wt=(a,e)=>e(" "),bt=(a,e)=>e("Escape"),yt=T('<div class="more-prompt svelte-18s4q0e">-- more -- <!> <div class="commands"><button class="choice svelte-18s4q0e">[space] to continue</button> <span>|</span> <button class="choice svelte-18s4q0e">[esc] to skip</button></div></div>');function kt(a,e){ae(e,!0),ie("stepContext");const n=async h=>{h===" "||h===" "?e.onContinue():h==="Escape"&&e.onSkip()},o=h=>{h.getModifierState,!h.metaKey&&!h.altKey&&!h.ctrlKey&&n(h.key)};ce(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}));var d=yt(),v=E(H(d));ze(v,{});var s=E(v,2),y=H(s);y.__click=[wt,n];var k=E(y,4);k.__click=[bt,n],D(s),D(d),x(a,d),se()}Ne(["click"]);var St=T("<pre> </pre> <!>",1);function we(a,e){ae(e,!0);const n=ie("stepContext"),o=ie("screenContext"),d=m=>new Promise(_=>setTimeout(_,m)),v=m=>{if(typeof m=="string")return m;if(typeof m=="function")return m();throw new Error("Invalid message type")};let s=X(()=>v(e.message)),y=J(U([])),k=X(()=>c(y).join("")),h=J(!e.spool);O(y,U(e.spool?[]:[c(s)]));let f=J(0),I=J(!1),b;const r=async()=>(O(I,!0),await ee(),n.onNewLine(),new Promise(m=>{b=m})),l=()=>{O(I,!1),b==null||b(!0),b=void 0},p=()=>{O(I,!1),b==null||b(!1),b=void 0,O(h,!0)},C=3,S=async()=>{const m=c(s).length>1e3?4:2;for(let _=0;_<c(s).length;_++)if(c(h)){O(y,U([c(s)]));break}else _%m===0&&await d(0),c(y).push(c(s)[_]),c(s)[_]===`
`&&(n.onNewLine(),He(f),o.linesPerScreen&&c(f)>=o.linesPerScreen-C&&(await r(),O(f,0)));n.onNewLine(),O(h,!0)};let i=c(s);_e(()=>{e.spool&&c(s)!==void 0&&c(s)!==i&&c(h)&&(i=c(s),O(y,U(e.spool?[]:[c(s)])),O(h,!e.spool),e.spool&&S())}),_e(()=>{var m;e.spool&&c(h)&&((m=e.onSpooled)==null||m.call(e))});const t=m=>{!m.metaKey&&!m.altKey&&!m.ctrlKey&&!c(I)&&m.key==="Escape"&&O(h,!0)};ce(()=>(e.spool&&S(),window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}));var g=St(),u=B(g),w=H(u,!0);D(u);var Y=E(u,2);{var M=m=>{kt(m,{onContinue:l,onSkip:p})};R(Y,m=>{c(I)&&m(M)})}ne(()=>le(w,c(k))),x(a,g),se()}var It=T("<br> <!> <div> </div>",1),xt=T('<button class="choice svelte-12ctzjl"><!></button>'),_t=(a,e)=>e("B"),Tt=T('<button class="choice svelte-12ctzjl">[B]ack</button>'),Ot=T("<span>|</span>"),Et=(a,e)=>e("M"),Ct=T('<button class="choice svelte-12ctzjl">[M]ain Menu</button>'),Mt=T('<br> <!> <div class="commands"><!> <!> <!></div>',1),At=T("<!> <!>",1),Nt=T('<div class="choice svelte-12ctzjl"> </div>'),Lt=T("<!> <div> </div>",1),Rt=T('<div class="choices svelte-12ctzjl"><!> <!></div>');function Pt(a,e){ae(e,!0);const n=ie("stepContext");let o=fe(e,"menuItems",19,()=>[]),d=fe(e,"userChoice",15),v=J(U(!e.menuTitle||!e.spool)),s=J(U(e.spool?o().length:0));const y=t=>{switch(t.kind){case"url":n.goToUrl(t.link);break;case"step":n.goToStep(t.link);break;case"action":n.takeAction(t.link);break}},k=t=>{if(d()===void 0){const g=o()[t];g&&(d(`${t+1}`),y(g))}},h=async t=>{if(d()===void 0)if(n.canGoBack&&(t==="b"||t==="B"))d("B"),n.goBack();else if(n.canGoToMainMenu&&(t==="m"||t==="M"))d("M"),n.goToStep("main-menu");else{const g=Number.parseInt(t);g!=null&&g!==Number.NaN&&k(g-1)}},f=t=>{t.getModifierState,!t.metaKey&&!t.altKey&&!t.ctrlKey&&h(t.key)};ce(()=>(window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}));const I=()=>{O(v,!0)},b=()=>{var t;He(s),c(s)>=o().length&&((t=e.onSpooled)==null||t.call(e)),n.onNewLine()},r=(t,g)=>{const u=typeof t.text=="function"?t.text():t.text;switch(t.kind){case"url":return`${g+1}. ${u} [↗]`;case"step":case"action":return`${g+1}. ${u}`}};var l=Rt(),p=H(l);{var C=t=>{var g=It(),u=E(B(g),2);we(u,{get message(){return e.menuTitle},spool:!0,onSpooled:I});var w=E(u,2),Y=H(w,!0);ne(()=>le(Y,"-".repeat(e.menuTitle.length))),D(w),x(t,g)};R(p,t=>{e.menuTitle&&t(C)})}var S=E(p,2);{var i=t=>{var g=ge(),u=B(g);{var w=M=>{var m=At(),_=B(m);ve(_,17,o,Ee,(P,W,N)=>{var L=ge(),j=B(L);{var Z=z=>{var $=xt();$.__click=()=>k(N);var de=H($),ue=X(()=>r(c(W),N)),A=X(()=>e.spool&&c(s)===N);we(de,{get message(){return c(ue)},get spool(){return c(A)},onSpooled:b}),D($),x(z,$)};R(j,z=>{(!e.spool||N<=c(s))&&z(Z)})}x(P,L)});var K=E(_,2);{var G=P=>{var W=Mt(),N=E(B(W),2);ze(N,{});var L=E(N,2),j=H(L);{var Z=A=>{var Q=Tt();Q.__click=[_t,h],x(A,Q)};R(j,A=>{n.canGoBack&&A(Z)})}var z=E(j,2);{var $=A=>{var Q=Ot();x(A,Q)};R(z,A=>{n.canGoBack&&n.canGoToMainMenu&&A($)})}var de=E(z,2);{var ue=A=>{var Q=Ct();Q.__click=[Et,h],x(A,Q)};R(de,A=>{n.canGoToMainMenu&&A(ue)})}D(L),x(P,W)};R(K,P=>{c(s)>=o().length&&P(G)})}x(M,m)},Y=M=>{var m=Lt(),_=B(m);ve(_,17,o,Ee,(P,W,N)=>{var L=Nt(),j=H(L,!0);ne(()=>le(j,r(c(W),N))),D(L),x(P,L)});var K=E(_,2),G=H(K);D(K),ne(()=>le(G,`> ${d()??""}`)),x(M,m)};R(u,M=>{d()===void 0?M(w):M(Y,!1)})}x(t,g)};R(S,t=>{c(v)&&t(i)})}D(l),x(a,l),se()}Ne(["click"]);var Dt=T("<div><!> <!></div>");function Ht(a,e){ae(e,!0);const n=ie("stepContext");let o=fe(e,"step",7),d=J(U(!o().message||o().displayed)),v=J(U(!o().menuItems||o().menuItems.length===0||o().displayed));const s=l=>new Promise(p=>setTimeout(p,l)),y=async()=>{o().holdMs&&await s(o().holdMs),O(d,!0),o().autoNextStepId&&(o().displayed=!0,n.goToStep(o().autoNextStepId))},k=async()=>{O(v,!0),o().displayed=!0};var h=Dt(),f=H(h);{var I=l=>{var p=X(()=>!c(d));we(l,{get message(){return o().message},get spool(){return c(p)},onSpooled:y})};R(f,l=>{o().message&&l(I)})}var b=E(f,2);{var r=l=>{var p=ge(),C=B(p);{var S=i=>{var t=X(()=>!c(v));Pt(i,{get menuTitle(){return o().menuTitle},get menuItems(){return o().menuItems},get spool(){return c(t)},onSpooled:k,get userChoice(){return o().userChoice},set userChoice(g){o().userChoice=g}})};R(C,i=>{o().autoNextStepId||i(S)})}x(l,p)};R(b,l=>{c(d)&&l(r)})}D(h),x(a,h),se()}const Gt=`
▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖

                   ▗▄▄▖▗▄▄▄▖ ▗▄▖ ▗▄▄▄▖▗▄▄▄▖     ▗▄▄▖ ▗▄▖ ▗▖  ▗▖
                  ▐▌   ▐▌   ▐▌ ▐▌▐▌   ▐▌       ▐▌   ▐▌ ▐▌ ▝▚▞▘ 
                  ▐▌▝▜▌▐▛▀▀▘▐▌ ▐▌▐▛▀▀▘▐▛▀▀▘    ▐▌   ▐▌ ▐▌  ▐▌  
                  ▝▚▄▞▘▐▙▄▄▖▝▚▄▞▘▐▌   ▐▌       ▝▚▄▄▖▝▚▄▞▘▗▞▘▝▚▖

▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖

            | Talented Developer | Thoughtful Leader | Kind Person |`,jt={id:"banner",message:Gt,autoNextStepId:"news"},zt=`
--------------------------------------------------------------------------------
binary-search
--------------------------------------------------------------------------------

A binary search algorithm

FEATURES

- Typescript defintions
- ES and CommonJS modules
- Bonus: If the value is not found, the index range nearest to the value is 
  provided.

TECHNOLOGY

- Typescript

LICENSE: MIT`,Ut={id:"binary-search",message:zt,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/binary-search/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/binary-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/binary-search/blob/main/lib/README.md"}]},Kt=`
--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------

- 20+ years of expertise in web, native client, and global-scale cloud software development
- 10+ years managing high-performance teams
- Specialist in user interface design, architecture, and coaching practices

CURRENT WORK

Building the Fluent UI React component library for the Office suite, Microsoft, 
and the React community. Collaborating with partners across the company to 
enable the Fluent 2 design system and Copilot.

TIMELINE

9/2021 to present   Microsoft Office/Fluent UI
                    Principal Software Development Engineer

10/2019 - 9/2021    Microsoft Azure AI/Language Understanding Intelligence
                    Principal Software Development Engineer Lead

6/2017 - 10/2019    Microsoft Research AI/Machine Teaching
                    Principal Research Software Development Engineer Lead

10/2015 - 6/2017    Microsoft Azure Dev Ops/Visual Studio
                    Principal Software Development Engineer

9/2012 - 10/2015    Microsoft SQL
                    Principal Software Development Engineer Lead

4/2010 - 9/2012     Southworks
                    Principal Software Development Engineer Lead

4/2007 - 4/2010     Microsoft Developer Network (MDSN)
                    Senior Software Development Engineer Lead

9/2002 - 4/2007     Microsoft.com
                    Senior Software Development Engineer Lead

EDUCATION

University of Washington
B.S. Computer Science
`,Wt={id:"experience",message:Kt},Ft=`
--------------------------------------------------------------------------------
pretty-good-nlp
--------------------------------------------------------------------------------

A deterministic, match-based, recognizer for natural language processing (NLP) 
scenarios. Most useful as a placeholder for in application development when 
waiting for a predictive model.

FEATURES

- Probability match scoring for intents
- Phrase and pattern matching
- Variable extraction
- Recognition adjustments including negation, weighting, ordering, and noise 
  removal
- Shared phrases and patterns between intents
- Tokenizer replacement

TECHNOLOGY

- Typescript
- Trie search

LICENSE: MIT`,Bt={id:"pretty-good-nlp",message:Ft,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/pretty-good-nlp/"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/pretty-good-nlp"}]},qt=`
--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------

I spend many evenings and weekends writing my own code.

When I think it might be useful to others, I publish it. I work hard to make the 
code clean, fast, well-documented, and easy to use.

Let me know if you find any bugs or have any suggestions for improvement.`,Jt={id:"projects",message:qt,autoNextStepId:"projects-menu"},Yt={id:"projects-menu",menuTitle:"PROJECTS",menuItems:[{kind:"step",text:"binary-search",link:"binary-search"},{kind:"step",text:"pretty-good-nlp",link:"pretty-good-nlp"},{kind:"step",text:"react-splitter",link:"react-splitter"},{kind:"step",text:"recoil-examples",link:"recoil-examples"},{kind:"step",text:"sterling-svelte -*| NEW |*-",link:"sterling-svelte"},{kind:"step",text:"svelte-splitter",link:"svelte-splitter"},{kind:"step",text:"trie-search",link:"trie-search"}]},Qt=`
--------------------------------------------------------------------------------
react-splitter
--------------------------------------------------------------------------------

A splitter control for React to resize panes relative to each other.

FEATURES

- Split horizontally or vertically
- Minimum, maximum, and initial pane sizes
- Any CSS unit size (e.g. px, %, fr, em, pt, cm, mm)
- Reset split with double click
- Resize with arrow keys
- Nested splits
- Semantic class names for style customization

TECHNOLOGY

- React
- Typescript

LICENSE: MIT`,Vt={id:"react-splitter",message:Qt,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/react-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/react-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/react-splitter"}]},Xt=`
--------------------------------------------------------------------------------
recoil-examples
--------------------------------------------------------------------------------

A project containing the examples from Recoil JS documentation.

I don't know why the official site doesn't provide running example code. I am 
amazed how this project has over 60 stars on GitHub.

FEATURES

- Examples of atoms & selectors that can be built, run, and debugged.
- Bonus: Dispatcher pattern using Recoil.

TECHNOLOGY

- Recoil JS
- React
- Typescript

LICENSE: MIT`,Zt={id:"recoil-examples",message:Xt,menuItems:[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/recoil-examples"},{kind:"url",text:"Recoil JS Official Site",link:"https://recoiljs.org/"}]},$t=`
--------------------------------------------------------------------------------
SKILLS
--------------------------------------------------------------------------------

EXPERTISE

- React
- Svelte
- TypeScript/Javascript
- Node & Electron
- Azure
- C# & .NET
- ASP.NET MVC & Web API
- WPF
- SQL

HISTORY

I started in C/C++ and spent seven years building deep expertise in the language
and Win32. I got to work on multiple different projects involving MFC, COM & 
DCOM, MAPI, networking, and serial hardware communication.
 
When C# arrived, I loved the productivity boost of solving problems rather than 
tracking memory allocations. I used my C/C++ knowledge to learn how .NET works 
internally including the intermediate language (IL), garbage collection (GC), 
and interop with Win32. C# gave me an appreciation for higher-level languages 
with frameworks that can run almost anywhere.

My love of C# got me involved in UI development with WPF and Silverlight. I 
discovered I have a passion for UI design and Human Computer Interaction (HCI). 
While I'm not an artist, I do enjoy studying different design approaches, 
assessing user interaction, and building new UI.
 
My interest in UI led me to web applications built with C# & .NET. ASP.NET MVC 
& Web API opened my eyes to how design patterns and architecture principles 
allowed composing simple pieces of functionality into powerful systems. I 
learned web protocols, performance optimization, and security fundamentals to 
ship several internet-scale web applications and services.

As part of a consulting project, I helped author two books on UI patterns for 
Microsoft Press. Working with the Patterns & Practices team taught me how to 
compose an architecture for UI through building blocks and subsystems.

As more of my work focused on building web applications in the browser, I dove 
into Javascript. In the early days, it was gruesome to build web applications 
with early JS and HTML/CSS. Fortunately, the timing worked out for me to join 
the web development journey. I went from JS to jQuery to Knockout to Angular to 
React. I also moved from CSS to LESS/SASS to CSS-in-JS. Getting to ship 
applications in multiple frameworks as HTML and CSS evolved gave me an ability 
to quickly learn new technology. Learning Typescript taught me the power of 
syntactic sugar and duck typing along with a rediscovered appreciation for 
strongly-typed runtimes.

In parallel with growing as a web developer, I continued working on systems 
programming projects. This included projects using Rust, SQL, and of course 
Azure services. I've gained an understanding of information architecture, 
different storage frameworks, and cloud services that help me across the stack.
 
I love learning new languages and technologies. It is fascinating to figure out 
their advantages and how they influence architecture and design. I try to 
balance the “T” of knowledge and capability; breadth of multiple technologies 
with depth in a few. Every time I learn something outside of my work projects, 
I always find it useful later on.`,eo={id:"skills",message:$t},to=`
--------------------------------------------------------------------------------
sterling-svelte
--------------------------------------------------------------------------------

sterling-svelte is a component UI library for Svelte.
It is modern, fast, and lightweight.

Version 2.0 is now available!

FEATURES

- Core components for any application
    - Actions: Button, Link, Menu
  - Form Inputs: Checkbox, Input, Radio, Select, Slider, Switch, TextArea
  - Display: Label, Progress
  - Collections: Dropdown, List, Select, Tree   
  - Surfaces: Callout, Dialog, Popover, TabList, Tooltip
- Headless (no forced theme or styling)
- Sterling Theme provided by @geoffcox/sterling-svelte-theme
- Meets ARIA accessibility standards
- Fully documented
- Quality and performance for real-world applications


TECHNOLOGY

- Svelte 5
- SvelteKit 2 (for documentation)
- Typescript

LICENSE: MIT`,oo={id:"sterling-svelte",message:to,menuItems:[{kind:"url",text:"Documentation",link:"https://geoffcox.github.io/docs/sterling-svelte/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/sterling-svelte"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/sterling-svelte"}]},no=`
--------------------------------------------------------------------------------
svelte-splitter
--------------------------------------------------------------------------------

A splitter control for Svelte to resize panes relative to each other.

FEATURES

- Split horizontally or vertically
- Minimum, maximum, and initial pane sizes
- Any CSS unit size (e.g. px, %, fr, em, pt, cm, mm)
- Reset split with double click
- Resize with arrow keys
- Nested splits
- Semantic class names for style customization

TECHNOLOGY

- Svelte 4
- Typescript

LICENSE: MIT`,io={id:"svelte-splitter",message:no,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/svelte-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/svelte-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/svelte-splitter"}]},ao=`
--------------------------------------------------------------------------------
trie-search
--------------------------------------------------------------------------------

A Trie search algorithm for matching multiple strings in a large body of text 
efficiently.

FEATURES
- Single pass over the data
- Monitor and handle matches as they are found with onFound callback
- Matches index into data to avoid data duplication
- Search 
  - text by characters or words
  - arrays of values
  - sequences of items
- Proper matching of overlapping sequences and sub-sequences
- Visualize the trie structure for debugging or showing off

TECHNOLOGY
- Typescript
- Trie search

LICENSE: MIT`,so={id:"trie-search",message:ao,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/trie-search"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/trie-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/trie-search/blob/main/lib/README.md"}]},ro=`

     OOOOOOOOO                                              
   OO:::::::::OO                                            
 OO:::::::::::::OO                                          
O:::::::OOO:::::::O                                         
O::::::O   O::::::O                           ooooooooooo   
O:::::O     O:::::O                         oo:::::::::::oo 
O:::::O     O:::::O                        o:::::::::::::::o
O:::::O     O:::::O                        o:::::ooooo:::::o
O:::::O     O:::::O                        o::::o     o::::o
O:::::O     O:::::O                        o::::o     o::::o
O:::::O     O:::::O                        o::::o     o::::o
O::::::O   O::::::O                        o::::o     o::::o
O:::::::OOO:::::::O                        o:::::ooooo:::::o
 OO:::::::::::::OO                         o:::::::::::::::o
   OO:::::::::OO                            oo:::::::::::oo 
     OOOOOOOOO                                ooooooooooo   
                   ________________________                 
                   _::::::::::::::::::::::_                 
                   ________________________                 
                                                            
            This section still under construction.</pre>`,lo={id:"under-construction",message:ro},Ue={id:"main-menu",menuTitle:"MAIN MENU",menuItems:[{kind:"step",text:"Experience",link:"experience"},{kind:"step",text:"Skills",link:"skills"},{kind:"step",text:"Accomplishments",link:"accomplishments"},{kind:"step",text:"Projects",link:"projects"},{kind:"step",text:"Contact Me",link:"contact"},{kind:"step",text:"Curations",link:"curations"},{kind:"url",text:"Paper Resume",link:"https://geoffcox.github.io/geoffcoxresume.pdf"}]},co=`
--------------------------------------------------------------------------------
NEWS
--------------------------------------------------------------------------------

[Jan 2025] sterling-svelte 2.0 is out!`,uo={id:"news",message:co,autoNextStepId:"main-menu"},ho=`
--------------------------------------------------------------------------------
MAJOR ACCOMPLISHMENTS
--------------------------------------------------------------------------------

-----

Architected and led an application/research platform for machine teaching 
including document classification and extraction, labeling and correction, and 
responsive model retraining. Integrated research advancements into the LUIS 
product.

-----

Created StackOverflow@Microsoft, adopted by 30K+ engineers. Recognized 
companywide as a key tool for Windows, Azure, and Office groups.

-----

Built Microsoft's implementation of the OASIS OData v4 aggregation standard.

-----

Delivered a Visual Studio integrated toolset providing enlistment, code review, 
and build used across SQL engineering. Also included a parallel, speculative, 
gated checkin system reducing CI build times from 4+ hours to <30 minutes.

Led SQL TechFest for the entire SQL organization. Managed submission and 
judging of hundreds of entries, all event logistics, and a personal tour with 
Microsoft's CEO.

-----

Delivered the 2012 Olympics real-time streaming voice-over system.

-----

Delivered a completely new MSDN website including Visual Studio 2010 brand and 
low bandwidth experiences, last-mile edge caching, and robust transformation 
pipeline.

-----

Designed and implemented the central job scheduler and multi-media/home 
automation hardware controllers for Paul Allen's personal residences worldwide.

-----`,mo={id:"accomplishments",message:ho},po=`
--------------------------------------------------------------------------------
CONTACT ME
--------------------------------------------------------------------------------

You can browse all my open source projects on GitHub, message me on LinkedIn, 
or follow me on BlueSky for whatever random thought pops in my head.

`,go=[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox"},{kind:"url",text:"LinkedIn",link:"https://www.linkedin.com/in/geoffcoxlive/"},{kind:"url",text:"BlueSky",link:"https://bsky.app/profile/geoffcoxlive.bsky.social"}],fo={id:"contact",message:po,menuTitle:"LINKS",menuItems:go},vo=`
--------------------------------------------------------------------------------
CURATIONS
--------------------------------------------------------------------------------

`,Me=[`Now so much I know
that things just don't grow
if you don't bless them with your patience.

- First Aid Kit`,`Simplicity, 
carried to the extreme, 
becomes elegance.

— Jon Franklin`,`I was raised up believing
I was somehow unique.

Like a snowflake
distinct among snowflakes,
unique in each way you can see.

And now, after some thinking,
I'd say I'd rather be
a functioning cog
in some great machinery
serving something beyond me.

- Fleet Foxes`,`Most of the good programmers do programming 
not because they expect to get paid 
or get adulation by the public, 
but because it is fun to program.

- Linus Torvalds`,`Everyone is afraid of losing
Even the ones that always win

Hey sleepwalker, when the mountain comes back to life
It doesn't come from without
It comes from within

- The Killers`,`Simple things should be simple, 
complex things should be possible.

- Alan Kay`],wo=()=>vo+Me[Math.floor(Math.random()*Me.length)],bo={id:"curations",message:wo,menuTitle:"READ MORE",menuItems:[{kind:"step",text:"Tales of Interest",link:"stories"},{kind:"step",text:"Show me another quote",link:"curations"},{kind:"step",text:"About this website",link:"about-site"},{kind:"step",text:"Bookshelf",link:"bookshelf"}]},yo={id:"modem-start",message:"Originating call...",holdMs:750,autoNextStepId:"modem-dialing"},ko={id:"modem-dialing",message:"Micromodem: dialing...",holdMs:1e3,autoNextStepId:"modem-carrier"},So={id:"modem-carrier",message:"Awaiting carrier...",holdMs:750,autoNextStepId:"modem-connect"},Io={id:"modem-connect",message:"Micromodem: connect",holdMs:500,autoNextStepId:"modem-baud"},xo={id:"modem-baud",message:"56kbps v.90/ISDN/33.6 kbps v.34/USR HST",holdMs:1e3,autoNextStepId:"modem-online"},_o={id:"modem-online",message:`

geoffcox.github.io online`,holdMs:250,autoNextStepId:"banner"},To=Array.from({length:100},(a,e)=>e+1).map((a,e)=>(e+1).toString()).join(`
`),Oo={id:"long-text",message:To},Eo=()=>`Change theme to '${Ge()}'`,Co={id:"settings",menuTitle:"SETTINGS",menuItems:[{kind:"action",text:Eo,link:"cycle-theme"}]},Mo=`
geoffcox.github.io online

================================================================================
                             G E O F F  C O X
================================================================================
            | Talented Developer | Thoughtful Leader | Kind Person |

`,Ao={id:"mini-banner",message:Mo},No={id:"stories",menuTitle:"TALES OF INTEREST",menuItems:[{kind:"step",text:"Speed Estimation",link:"speed-estimation"},{kind:"step",text:"Why I love Svelte",link:"i-love-svelte"},{kind:"step",text:"Unpredictable Users",link:"unpredictable-users"}]},Lo=`
--------------------------------------------------------------------------------
Speed Estimation
--------------------------------------------------------------------------------

One evening, when I was working on a large customer data store, there was an 
emergency team meeting to figure out how to handle a bug that had incorrectly 
hashed the Passport authentication identifiers in our SQL databases. About 20 
of us were called into a 10 person conference room to discuss options.

A dev on my team reported he had already patched the code and had a SQL script 
to repair the existing data. However, some random guy from another team had 
been talking to my boss and followed us into the meeting room. He decided to 
take over the meeting and loudly declared that we first had to estimate how 
long running the script would take. My boss, normally outspoken and decisive, 
deferred to him. Everyone assumed he must be important and knew what he was 
doing.

He grabbed a whiteboard pen and starting doing a calculation on the board. He 
stated that updating a row in SQL probably takes at best 1 millisecond when 
within a transaction. He also wrote out a bunch of hash algorithm statements 
that he said added up to 2.5 milliseconds per row. We had 400 million rows that 
needed updating. He then calculated this would take 400 million x 3.5 = 1.4 
billion milliseconds => 1.4 million seconds => 23 thousand minutes => 388 hours 
=> 16 days.

No one could use the system until all the rows were updated. The room was in a 
panic. I thought that we should get the script started ASAP. I pulled the dev 
and a service engineer into the hallway to confirm they had confidence in the 
script and to ask them to get it running.

In the meantime, random guy started drawing up a shift rotation schedule for 
each person to be on site watching the script run over the next 16 days. After 
15 minutes, as random guy was finalizing the shift schedule, the dev and 
service engineer returned. The dev whispered in my ear the results.

Random guy was literally giving a pep talk to the room about how hard it was 
going to be working 24 hours a day, but that it would be a worthy and valiant 
effort. I tried to interrupt him, but he didn't give me any opportunity.

Finally, he finished. I let the room know that we had run the script and it 
completed in under 15 minutes. The script updated over 400 rows per millisecond. 
He muttered that was impossible as his chest caved and he hung his head.

While this guy was a bit of a blow hard, he followed how developers are taught 
to estimate algorithms. We mentally walk through the steps, estimate the cost 
of each instruction, account for loops, and multiply by the number of items to 
get the result.

The problem was that computation speed had exceeded human imagination. It is 
hard for humans to understand how fast 1/400th of a millisecond goes by. We 
like to think we can understand that kind of processing power, but we can't be 
precise enough to avoid exponential errors. This was back in 2005. Today, that 
script would likely complete in seconds.

We shouldn't manually think through estimates. Instead, we have to run the code 
in a production/test environment and measure the real performance. Don't be 
that (random) guy.
`,Ro={id:"speed-estimation",message:Lo},Po=`
--------------------------------------------------------------------------------
Unpredictable Users
--------------------------------------------------------------------------------

Back in the days of Windows 95, my brother called me in a panic. He reported 
that his drive was out of space and he couldn't figure out what to do.

I walked him through selecting some files he didn't need anymore. When I told 
him to drag the files to the recycle bin in Windows Explorer, he couldn't find 
it. I asked him to look on his desktop and he reported it wasn't there either.

He then told me what he had done the day before while trying to clean up files 
on his desktop. He had somehow dragged the recycle bin icon around and ended up 
creating a shortcut to the recycle bin. He now had two recycle bins on his 
desktop. He dragged one on to to the other and then emptied the recycle bin.

Turns out he dragged the real recycle bin to the recycle bin shortcut. This put 
the recycle bin control panel app into the recycle bin. When he emptied the 
recycle bin, the control panel app deleted itself!

The OS went through the recycle bin app for soft and hard deletes. Ctrl+Del 
didn't do anything. We were able to open a command prompt and delete files, but 
this was too tedious for him to do regularly without my help. He just kind of 
lived with a too full drive until he bought his next computer.

I doubt any developer or tester could have predicted a user would use a 
shortcut to the recycle bin to delete the recycle bin.
`,Do={id:"unpredictable-users",message:Po},Ho=`
--------------------------------------------------------------------------------
Why I Love Svelte
--------------------------------------------------------------------------------

If you've never heard of Svelte, check out [svelte.dev](http://svelte.dev).

I am more productive. Writing HTML, CSS, and JS is straightforward. Svelte's 
hot-module-reloading makes my inner dev loop very fast. I feel like I can code 
anything with Svelte.

I can properly architect and design. Svelte provides componentization, 
encapsulation, composition, and extensibility.

I don't have to make as many low-level decisions. I don't agonize over which 
state management, templating, or styling libraries to choose. Svelte meets all 
my needs for building applications and libraries.

I don't waste time trying to optimize my code by hand. There's no need to call 
optimization memo functions since the Svelte compiler makes the code as fast 
and small.

I quickly became an expert. Svelte's documentation is concise and precise. The 
tutorial and examples get you started in a couple of hours. Additional 
capabilities like SvelteKit are built on top of rather than inside Svelte. This 
helps Svelte avoid collapsing under the weight of additional complexity.

Even if you are a React or Angular fanatic, I hope you'll check out Svelte. 
I've found that learning new languages and technologies makes me better with 
the ones I know.
`,Go={id:"i-love-svelte",message:Ho},jo=`
--------------------------------------------------------------------------------
About this site
--------------------------------------------------------------------------------

It isn't easy to build a personal website and blog. 
It is too easy to use some pre-canned site that is boring or a clone.

As a kid, I loved the choose your own adventure books. I really enjoyed playing
text-based games like Zork. I decided to make my site a choose your own 
adventure. I think its fun to spelunk around and hope you do too.

- You can use the keyboard or mouse to choose what to see next.
- You can type a dash (-) to go back
- You can type a zero (0) to start over

The site is built using awesome technologies:
- Svelte 5
- SvelteKit 2
- vite
`,zo={id:"about-site",message:jo},Uo={id:"bookshelf",menuTitle:"BOOKSHELF",menuItems:[{kind:"url",text:"Clean Architecture: A Craftsman's Guide to Software Structure and Design",link:"https://isbndb.com/book/9780134494166"},{kind:"url",text:"Design Patterns: Elements of Reusable Object-Oriented Software",link:"https://isbndb.com/book/9788178081359"},{kind:"url",text:"Patterns of Enterprise Application Architecture",link:"https://isbndb.com/book/9788131794029"},{kind:"url",text:"Refactoring: Improving the Design of Existing Code",link:"https://isbndb.com/book/9780201485677"},{kind:"url",text:"AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis",link:"https://isbndb.com/book/9780471197133"}]},Ke=[yo,ko,So,Io,xo,_o],We=[jt,uo,Ao],Fe=[...Ke,...We,Ue,Wt,eo,mo,Jt,Yt,Ut,Bt,Vt,Zt,oo,io,so,fo,bo,zo,Uo,No,Go,Ro,Do,Co,lo,Oo],Ae=Fe[0].id,Ko=[...Ke,...We,Ue].map(a=>a.id),te={};Fe.forEach(a=>{te[a.id]=a});const F=U({steps:[]}),pe=[];var Wo=T('<div class="page svelte-18lkc44"></div>');function en(a,e){ae(e,!0);const n=async i=>{!te[i]||Ko.includes(i)?F.steps.push({...te[Ae]}):F.steps.push({...te["mini-banner"],autoNextStepId:i})};let o=X(()=>F.steps[F.steps.length-1]);const d=async i=>{await ee(),c(o)&&!c(o).autoNextStepId&&pe.push(c(o).id);const t=te[i];t&&Te(`#${t.id}`,Oe.state),t&&F.steps.push({...t})},v=async i=>{await ee(),window.open(i,"_blank"),c(o)&&(c(o).userChoice=void 0)},s=async i=>{switch(await ee(),i){case"cycle-theme":ht.theme=Ge();break}c(o)&&(c(o).userChoice=void 0)},y=async()=>{await ee();const i=pe.pop();if(i){const t=te[i];t&&(Te(`#${t.id}`,Oe.state),F.steps.push({...t}))}},k={behavior:"smooth",block:"nearest"};let h,f;const I=async()=>{f||(await ee(),f=setTimeout(()=>{h==null||h.scrollIntoView(k),f=void 0},100))};let b,r=0;const l=()=>{r=r===0?5:r+1,b===void 0&&(b=setInterval(()=>{var i,t;console.log("flash",r),(i=document.querySelector(".drive-light"))==null||i.classList.toggle("on"),r--,r===0&&(clearInterval(b),b=void 0,(t=document.querySelector(".drive-light"))==null||t.classList.remove("on"))},50))};ct("stepContext",{get canGoBack(){return pe.length>0},get canGoToMainMenu(){var i;return((i=c(o))==null?void 0:i.id)!=="main-menu"},goToStep:d,goToUrl:v,goBack:y,takeAction:s,onNewLine:async()=>{l(),I()}}),ce(()=>{if(h=document.getElementById("ScrollAnchor"),F.steps.length===0)if(location.hash){const i=location.hash.substring(1);n(i)}else d(Ae)});var S=Wo();ve(S,23,()=>F.steps,(i,t)=>`${i.id}-${t}`,(i,t)=>{Ht(i,{get step(){return c(t)}})}),D(S),x(a,S),se()}export{en as component,$o as universal};
