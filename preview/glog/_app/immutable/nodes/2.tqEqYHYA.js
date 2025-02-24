import{a as I,t as O,g as Re,k as pe}from"../chunks/disclose-version.uDeAePpO.js";import{C as Je,d as Ye,h as X,g as ue,b as Ve,V as Xe,A as Pe,H as Qe,e as ye,i as he,m as oe,aq as re,j as De,k as Ge,l as Ze,D as ke,ar as Se,as as $e,z as et,at as tt,ah as ot,o as nt,w as it,am as at,a3 as st,M as Ie,au as we,av as be,aw as rt,u as lt,ax as He,a6 as ct,ay as dt,t as ne,a as ae,az as ie,s as E,c as G,r as D,p as se,ae as J,O as T,Q as l,I as xe,f as B,a4 as Q,aA as Fe,af as ee,aj as _t}from"../chunks/runtime.Dw9PevHv.js";import{o as ce}from"../chunks/index-client.BJqJXq_0.js";import{i as R}from"../chunks/if.Cm640iHB.js";import{r as ut,p as z,a as ge}from"../chunks/props.DnjauSsg.js";import{s as le}from"../chunks/render.C95QHNkD.js";import{s as ht,g as je,a as mt}from"../chunks/settings.svelte.hrrQ3M3V.js";import{r as Oe}from"../chunks/entry.BgV9C0zZ.js";import{p as Te}from"../chunks/index.95iMS2KK.js";function Ee(a,e){return e}function pt(a,e,n,o){for(var c=[],f=e.length,s=0;s<f;s++)$e(e[s].e,c,!0);var b=f>0&&c.length===0&&n!==null;if(b){var y=n.parentNode;et(y),y.append(n),o.clear(),q(a,e[0].prev,e[f-1].next)}tt(c,()=>{for(var u=0;u<f;u++){var g=e[u];b||(o.delete(g.k),q(a,g.prev,g.next)),ot(g.e,!b)}})}function fe(a,e,n,o,c,f=null){var s=a,b={flags:e,items:new Map,first:null},y=(e&He)!==0;if(y){var u=a;s=X?ue(nt(u)):u.appendChild(Je())}X&&Ve();var g=null,S=!1;Ye(()=>{var w=n(),d=Xe(w)?w:w==null?[]:Pe(w),r=d.length;if(S&&r===0)return;S=r===0;let m=!1;if(X){var C=s.data===Qe;C!==(r===0)&&(s=ye(),ue(s),he(!1),m=!0)}if(X){for(var k=null,i,t=0;t<r;t++){if(oe.nodeType===8&&oe.data===it){s=oe,m=!0,he(!1);break}var p=d[t],_=o(p,t);i=ze(oe,b,k,null,p,_,t,c,e),b.items.set(_,i),k=i}r>0&&ue(ye())}if(!X){var v=at;gt(d,b,s,c,e,(v.f&re)!==0,o)}f!==null&&(r===0?g?De(g):g=Ge(()=>f(s)):g!==null&&Ze(g,()=>{g=null})),m&&he(!0),n()}),X&&(s=oe)}function gt(a,e,n,o,c,f,s,b){var N,L,F,Z;var y=(c&dt)!==0,u=(c&(be|we))!==0,g=a.length,S=e.items,w=e.first,d=w,r,m=null,C,k=[],i=[],t,p,_,v;if(y)for(v=0;v<g;v+=1)t=a[v],p=s(t,v),_=S.get(p),_!==void 0&&((N=_.a)==null||N.measure(),(C??(C=new Set)).add(_));for(v=0;v<g;v+=1){if(t=a[v],p=s(t,v),_=S.get(p),_===void 0){var Y=d?d.e.nodes_start:n;m=ze(Y,e,m,m===null?e.first:m.next,t,p,v,o,c),S.set(p,m),k=[],i=[],d=m.next;continue}if(u&&ft(_,t,v,c),_.e.f&re&&(De(_.e),y&&((L=_.a)==null||L.unfix(),(C??(C=new Set)).delete(_))),_!==d){if(r!==void 0&&r.has(_)){if(k.length<i.length){var M=i[0],h;m=M.prev;var x=k[0],U=k[k.length-1];for(h=0;h<k.length;h+=1)Ce(k[h],M,n);for(h=0;h<i.length;h+=1)r.delete(i[h]);q(e,x.prev,U.next),q(e,m,x),q(e,U,M),d=M,m=U,v-=1,k=[],i=[]}else r.delete(_),Ce(_,d,n),q(e,_.prev,_.next),q(e,_,m===null?e.first:m.next),q(e,m,_),m=_;continue}for(k=[],i=[];d!==null&&d.k!==p;)(f||!(d.e.f&re))&&(r??(r=new Set)).add(d),i.push(d),d=d.next;if(d===null)continue;_=d}k.push(_),m=_,d=_.next}if(d!==null||r!==void 0){for(var H=r===void 0?[]:Pe(r);d!==null;)(f||!(d.e.f&re))&&H.push(d),d=d.next;var P=H.length;if(P>0){var K=c&He&&g===0?n:null;if(y){for(v=0;v<P;v+=1)(F=H[v].a)==null||F.measure();for(v=0;v<P;v+=1)(Z=H[v].a)==null||Z.fix()}pt(e,H,K,S)}}y&&ct(()=>{var j;if(C!==void 0)for(_ of C)(j=_.a)==null||j.apply()}),ke.first=e.first&&e.first.e,ke.last=m&&m.e}function ft(a,e,n,o){o&be&&Se(a.v,e),o&we?Se(a.i,n):a.i=n}function ze(a,e,n,o,c,f,s,b,y,u){var g=(y&be)!==0,S=(y&rt)===0,w=g?S?st(c):Ie(c):c,d=y&we?Ie(s):s,r={i:d,v:w,k:f,a:null,e:null,prev:n,next:o};try{return r.e=Ge(()=>b(a,w,d),X),r.e.prev=n&&n.e,r.e.next=o&&o.e,n===null?e.first=r:(n.next=r,n.e.next=r.e),o!==null&&(o.prev=r,o.e.prev=r.e),r}finally{}}function Ce(a,e,n){for(var o=a.next?a.next.e.nodes_start:n,c=e?e.e.nodes_start:n,f=a.e.nodes_start;f!==o;){var s=lt(f);c.before(f),f=s}}function q(a,e,n){e===null?a.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}const vt=!0,vn=Object.freeze(Object.defineProperty({__proto__:null,prerender:vt},Symbol.toStringTag,{value:"Module"}));var wt=O('<div>&gt; <span class="cursor svelte-44s095">█</span></div>');function Ue(a,e){let n=ut(e,["$$slots","$$events","$$legacy"]);var o=wt();let c;ne(()=>c=ht(o,c,{class:"prompt-indicator",...n},"svelte-44s095")),I(a,o)}var bt=(a,e)=>e(" "),yt=(a,e)=>e("Escape"),kt=O('<div class="more-prompt svelte-18s4q0e">-- more -- <!> <div class="commands"><button class="choice svelte-18s4q0e">[space] to continue</button> <span>|</span> <button class="choice svelte-18s4q0e">[esc] to skip</button></div></div>');function St(a,e){ae(e,!0),ie("stepContext");const n=async u=>{u===" "||u===" "?e.onContinue():u==="Escape"&&e.onSkip()},o=u=>{u.getModifierState,!u.metaKey&&!u.altKey&&!u.ctrlKey&&n(u.key)};ce(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}));var c=kt(),f=E(G(c));Ue(f,{});var s=E(f,2),b=G(s);b.__click=[bt,n];var y=E(b,4);y.__click=[yt,n],D(s),D(c),I(a,c),se()}Re(["click"]);var It=O("<pre> </pre> <!>",1);function ve(a,e){ae(e,!0);const n=ie("stepContext"),o=ie("screenContext"),c=h=>new Promise(x=>setTimeout(x,h)),f=h=>{if(typeof h=="string")return h;if(typeof h=="function")return h();throw new Error("Invalid message type")};let s=Q(()=>f(e.message)),b=J(z([])),y=Q(()=>l(b).join("")),u=J(!e.spool);T(b,z(e.spool?[]:[l(s)]));let g=J(0),S=J(!1),w;const d=async()=>(T(S,!0),await ee(),n.onNewLine(),new Promise(h=>{w=h})),r=()=>{T(S,!1),w==null||w(!0),w=void 0},m=()=>{T(S,!1),w==null||w(!1),w=void 0,T(u,!0)},C=3,k=async()=>{const h=l(s).length>1e3?4:2;for(let x=0;x<l(s).length;x++)if(l(u)){T(b,z([l(s)]));break}else x%h===0&&await c(0),l(b).push(l(s)[x]),l(s)[x]===`
`&&(n.onNewLine(),Fe(g),o.linesPerScreen&&l(g)>=o.linesPerScreen-C&&(await d(),T(g,0)));n.onNewLine(),T(u,!0)};let i=l(s);xe(()=>{e.spool&&l(s)!==void 0&&l(s)!==i&&l(u)&&(i=l(s),T(b,z(e.spool?[]:[l(s)])),T(u,!e.spool),e.spool&&k())}),xe(()=>{var h;e.spool&&l(u)&&((h=e.onSpooled)==null||h.call(e))});const t=h=>{!h.metaKey&&!h.altKey&&!h.ctrlKey&&!l(S)&&h.key==="Escape"&&T(u,!0)};ce(()=>(e.spool&&k(),window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}));var p=It(),_=B(p),v=G(_,!0);D(_);var Y=E(_,2);{var M=h=>{St(h,{onContinue:r,onSkip:m})};R(Y,h=>{l(S)&&h(M)})}ne(()=>le(v,l(y))),I(a,p),se()}var xt=O("<br> <!> <div> </div>",1),Ot=O('<button class="choice svelte-12ctzjl"><!></button>'),Tt=(a,e)=>e("B"),Et=O('<button class="choice svelte-12ctzjl">[B]ack</button>'),Ct=O("<span>|</span>"),Mt=(a,e)=>e("M"),At=O('<button class="choice svelte-12ctzjl">[M]ain Menu</button>'),Nt=O('<br> <!> <div class="commands"><!> <!> <!></div>',1),Lt=O("<!> <!>",1),Rt=O('<div class="choice svelte-12ctzjl"> </div>'),Pt=O("<!> <div> </div>",1),Dt=O('<div class="choices svelte-12ctzjl"><!> <!></div>');function Gt(a,e){ae(e,!0);const n=ie("stepContext");let o=ge(e,"menuItems",19,()=>[]),c=ge(e,"userChoice",15),f=J(z(!e.menuTitle||!e.spool)),s=J(z(e.spool?o().length:0));const b=t=>{switch(t.kind){case"url":n.goToUrl(t.link);break;case"step":n.goToStep(t.link);break;case"action":n.takeAction(t.link);break}},y=t=>{if(c()===void 0){const p=o()[t];p&&(c(`${t+1}`),b(p))}},u=async t=>{if(c()===void 0)if(n.canGoBack&&(t==="b"||t==="B"))c("B"),n.goBack();else if(n.canGoToMainMenu&&(t==="m"||t==="M"))c("M"),n.goToStep("main-menu");else{const p=Number.parseInt(t);p!=null&&p!==Number.NaN&&y(p-1)}},g=t=>{t.getModifierState,!t.metaKey&&!t.altKey&&!t.ctrlKey&&u(t.key)};ce(()=>(window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}));const S=()=>{T(f,!0)},w=()=>{var t;Fe(s),l(s)>=o().length&&((t=e.onSpooled)==null||t.call(e)),n.onNewLine()},d=(t,p)=>{const _=typeof t.text=="function"?t.text():t.text;switch(t.kind){case"url":return`${p+1}. ${_} [↗]`;case"step":case"action":return`${p+1}. ${_}`}};var r=Dt(),m=G(r);{var C=t=>{var p=xt(),_=E(B(p),2);ve(_,{get message(){return e.menuTitle},spool:!0,onSpooled:S});var v=E(_,2),Y=G(v,!0);ne(()=>le(Y,"-".repeat(e.menuTitle.length))),D(v),I(t,p)};R(m,t=>{e.menuTitle&&t(C)})}var k=E(m,2);{var i=t=>{var p=pe(),_=B(p);{var v=M=>{var h=Lt(),x=B(h);fe(x,17,o,Ee,(P,K,N)=>{var L=pe(),F=B(L);{var Z=j=>{var $=Ot();$.__click=()=>y(N);var de=G($),_e=Q(()=>d(l(K),N)),A=Q(()=>e.spool&&l(s)===N);ve(de,{get message(){return l(_e)},get spool(){return l(A)},onSpooled:w}),D($),I(j,$)};R(F,j=>{(!e.spool||N<=l(s))&&j(Z)})}I(P,L)});var U=E(x,2);{var H=P=>{var K=Nt(),N=E(B(K),2);Ue(N,{});var L=E(N,2),F=G(L);{var Z=A=>{var V=Et();V.__click=[Tt,u],I(A,V)};R(F,A=>{n.canGoBack&&A(Z)})}var j=E(F,2);{var $=A=>{var V=Ct();I(A,V)};R(j,A=>{n.canGoBack&&n.canGoToMainMenu&&A($)})}var de=E(j,2);{var _e=A=>{var V=At();V.__click=[Mt,u],I(A,V)};R(de,A=>{n.canGoToMainMenu&&A(_e)})}D(L),I(P,K)};R(U,P=>{l(s)>=o().length&&P(H)})}I(M,h)},Y=M=>{var h=Pt(),x=B(h);fe(x,17,o,Ee,(P,K,N)=>{var L=Rt(),F=G(L,!0);ne(()=>le(F,d(l(K),N))),D(L),I(P,L)});var U=E(x,2),H=G(U);D(U),ne(()=>le(H,`> ${c()??""}`)),I(M,h)};R(_,M=>{c()===void 0?M(v):M(Y,!1)})}I(t,p)};R(k,t=>{l(f)&&t(i)})}D(r),I(a,r),se()}Re(["click"]);var Ht=O("<div><!> <!></div>");function Ft(a,e){ae(e,!0);const n=ie("stepContext");let o=ge(e,"step",7),c=J(z(!o().message||o().displayed)),f=J(z(!o().menuItems||o().menuItems.length===0||o().displayed));const s=r=>new Promise(m=>setTimeout(m,r)),b=async()=>{o().holdMs&&await s(o().holdMs),T(c,!0),o().autoNextStepId&&(o().displayed=!0,n.goToStep(o().autoNextStepId))},y=async()=>{T(f,!0),o().displayed=!0};var u=Ht(),g=G(u);{var S=r=>{var m=Q(()=>!l(c));ve(r,{get message(){return o().message},get spool(){return l(m)},onSpooled:b})};R(g,r=>{o().message&&r(S)})}var w=E(g,2);{var d=r=>{var m=pe(),C=B(m);{var k=i=>{var t=Q(()=>!l(f));Gt(i,{get menuTitle(){return o().menuTitle},get menuItems(){return o().menuItems},get spool(){return l(t)},onSpooled:y,get userChoice(){return o().userChoice},set userChoice(p){o().userChoice=p}})};R(C,i=>{o().autoNextStepId||i(k)})}I(r,m)};R(w,r=>{l(c)&&r(d)})}D(u),I(a,u),se()}const jt=`
               _____ ______ ____  ______ ______    _____ ______   __
              / ____|  ____/ __ \\|  ____|  ____|  / ____/ __ \\ \\ / /
             | |  __| |__ | |  | | |__  | |__    | |   | |  | \\ V / 
             | | |_ |  __|| |  | |  __| |  __|   | |   | |  | |> <  
             | |__| | |___| |__| | |    | |      | |___| |__| / . \\ 
              \\_____|______\\____/|_|    |_|       \\_____\\____/_/ \\_\\

`,zt=`
                  ___  ____  __  ____  ____     ___  __  _  _ 
                 / __)(  __)/  \\(  __)(  __)   / __)/  \\( \\/ )
                ( (_ \\ ) _)(  O )) _)  ) _)   ( (__(  O ))  ( 
                 \\___/(____)\\__/(__)  (__)     \\___)\\__/(_/\\_)

`,Ut=`
░░      ░░░        ░░░      ░░░       ░░       ░░░░░      ░░░░      ░░░  ░░░░  ░
▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒
▓  ▓▓▓   ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓     ▓▓▓▓     ▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓
█  ████  ██  ████████  ████  ██  ███████  █████████  ████  ██  ████  ███  ██  ██
██      ███        ███      ███  ███████  ██████████      ████      ███  ████  █
`,Kt=`
                 ____ _____ ___  _____ _____    ____ _____  __
                / ___| ____/ _ \\|  ___|  ___|  / ___/ _ \\ \\/ /
               | |  _|  _|| | | | |_  | |_    | |  | | | \\  / 
               | |_| | |__| |_| |  _| |  _|   | |__| |_| /  \\ 
                \\____|_____\\___/|_|   |_|      \\____\\___/_/\\_\\

`,Wt=`

       ██████  ███████  ██████  ███████ ███████      ██████  ██████  ██   ██ 
      ██       ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
      ██   ███ █████   ██    ██ █████   █████       ██      ██    ██   ███   
      ██    ██ ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
       ██████  ███████  ██████  ██      ██           ██████  ██████  ██   ██ 

`,Bt=`

        █████╗ ███████╗ ██████╗ ███████╗███████╗     ██████╗ ██████╗ ██╗  ██╗
      ██╔════╝ ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██╔═══██╗╚██╗██╔╝
      ██║  ███╗█████╗  ██║   ██║█████╗  █████╗      ██║     ██║   ██║ ╚███╔╝ 
      ██║   ██║██╔══╝  ██║   ██║██╔══╝  ██╔══╝      ██║     ██║   ██║ ██╔██╗ 
      ╚██████╔╝███████╗╚██████╔╝██║     ██║         ╚██████╗╚██████╔╝██╔╝ ██╗
       ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝          ╚═════╝ ╚═════╝ ╚═╝  ╚═╝

`,Me="\n                        .-. .-. .-. .-. .-.   .-. .-. .  . \n                        |.. |-  | | |-  |-    |   | |  )(  \n                        `-' `-' `-' '   '     `-' `-' '  '\n",qt=`

                 GGG  EEEE  OOO  FFFF FFFF      CCC  OOO  X   X 
                G     E    O   O F    F        C    O   O  X X  
                G  GG EEE  O   O FFF  FFF      C    O   O   X   
                G   G E    O   O F    F        C    O   O  X X  
                 GGG  EEEE  OOO  F    F         CCC  OOO  X   X 

`,Jt=`

        #####  ####### ####### ####### #######     #####  ####### #     # 
       #     # #       #     # #       #          #     # #     #  #   #  
       #       #       #     # #       #          #       #     #   # #   
       #  #### #####   #     # #####   #####      #       #     #    #    
       #     # #       #     # #       #          #       #     #   # #   
       #     # #       #     # #       #          #     # #     #  #   #  
        #####  ####### ####### #       #           #####  ####### #     #

`,Yt=`

   _|_|_|  _|_|_|_|    _|_|    _|_|_|  _|_|_|     _|_|_|    _|_|    _|      _|  
 _|        _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
 _|  _|_|  _|_|_|    _|    _|  _|_|    _|_|     _|        _|    _|      _|      
 _|    _|  _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
   _|_|_|  _|_|_|_|    _|_|    _|      _|         _|_|_|    _|_|    _|      _| 

`,Vt=`
      ______ _______  _____  _______ _______      _______  _____  _     _
     |  ____ |______ |     | |______ |______      |       |     |  \\___/ 
     |_____| |______ |_____| |       |            |_____  |_____| _/   \\_

`,Xt=`
       _____   ______  _____   ______  ______       ___     _____  _     _ 
      (_____) (______)(_____) (______)(______)    _(___)_  (_____)( )   ( )
     (_)  ___ (_)__  (_)   (_)(_)__   (_)__      (_)   (_)(_)   (_)(_)_(_) 
     (_) (___)(____) (_)   (_)(____)  (____)     (_)    _ (_)   (_) (___)  
     (_)___(_)(_)____(_)___(_)(_)     (_)        (_)___(_)(_)___(_)(_) (_) 
      (_____) (______)(_____) (_)     (_)          (___)   (_____)(_)   (_)

`,Qt=`
==      ===       ====    ====       ==       =======     =====    ====   ==   =
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=  ========  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ========     ====  ====  ==     ====     =======  ========  ====  =====  ====
=  ===   ==  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
==      ===       ====    ====  =======  ============     =====    ====  ====  =
`,Zt=`

                o-o  o--o  o-o  o--o o--o       o-o  o-o  o   o 
               o     |    o   o |    |         /    o   o  \\ /  
               |  -o O-o  |   | O-o  O-o      O     |   |   O   
               o   | |    o   o |    |         \\    o   o  / \\  
                o-o  o--o  o-o  o    o          o-o  o-o  o   o 

`,Ae=[Me,jt,zt,Ut,Kt,Wt,Bt,Me,qt,Jt,Yt,Vt,Xt,Qt,Zt],$t=`

            | Talented Developer | Thoughtful Leader | Kind Person |            
`,eo=`
================================================================================`,to="================================================================================",oo=()=>eo+Ae[Math.floor(Math.random()*Ae.length)]+to+$t,no={id:"banner",message:oo,autoNextStepId:"news"},io=`
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

LICENSE: MIT`,ao={id:"binary-search",message:io,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/binary-search/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/binary-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/binary-search/blob/main/lib/README.md"}]},so=`
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
`,ro={id:"experience",message:so},lo=`
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

LICENSE: MIT`,co={id:"pretty-good-nlp",message:lo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/pretty-good-nlp/"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/pretty-good-nlp"}]},_o=`
--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------

I spend many evenings and weekends writing my own code.

When I think it might be useful to others, I publish it. I work hard to make the 
code clean, fast, well-documented, and easy to use.

Let me know if you find any bugs or have any suggestions for improvement.`,uo={id:"projects",message:_o,autoNextStepId:"projects-menu"},ho={id:"projects-menu",menuTitle:"PROJECTS",menuItems:[{kind:"step",text:"binary-search",link:"binary-search"},{kind:"step",text:"pretty-good-nlp",link:"pretty-good-nlp"},{kind:"step",text:"react-splitter",link:"react-splitter"},{kind:"step",text:"recoil-examples",link:"recoil-examples"},{kind:"step",text:"sterling-svelte -*| NEW |*-",link:"sterling-svelte"},{kind:"step",text:"svelte-splitter",link:"svelte-splitter"},{kind:"step",text:"trie-search",link:"trie-search"}]},mo=`
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

LICENSE: MIT`,po={id:"react-splitter",message:mo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/react-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/react-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/react-splitter"}]},go=`
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

LICENSE: MIT`,fo={id:"recoil-examples",message:go,menuItems:[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/recoil-examples"},{kind:"url",text:"Recoil JS Official Site",link:"https://recoiljs.org/"}]},vo=`
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
I always find it useful later on.`,wo={id:"skills",message:vo},bo=`
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

LICENSE: MIT`,yo={id:"sterling-svelte",message:bo,menuItems:[{kind:"url",text:"Documentation",link:"https://geoffcox.github.io/docs/sterling-svelte/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/sterling-svelte"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/sterling-svelte"}]},ko=`
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

LICENSE: MIT`,So={id:"svelte-splitter",message:ko,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/svelte-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/svelte-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/svelte-splitter"}]},Io=`
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

LICENSE: MIT`,xo={id:"trie-search",message:Io,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/trie-search"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/trie-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/trie-search/blob/main/lib/README.md"}]},Oo=`

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
                                                            
            This section still under construction.</pre>`,To={id:"under-construction",message:Oo},Ke={id:"main-menu",menuTitle:"MAIN MENU",menuItems:[{kind:"step",text:"Experience",link:"experience"},{kind:"step",text:"Skills",link:"skills"},{kind:"step",text:"Accomplishments",link:"accomplishments"},{kind:"step",text:"Projects",link:"projects"},{kind:"step",text:"Contact Me",link:"contact"},{kind:"step",text:"Curations",link:"curations"},{kind:"url",text:"Paper Resume",link:"https://geoffcox.github.io/geoffcoxresume.pdf"}]},Eo=`
--------------------------------------------------------------------------------
NEWS
--------------------------------------------------------------------------------

[Jan 2025] sterling-svelte 2.0 is out!`,Co={id:"news",message:Eo,autoNextStepId:"main-menu"},Mo=`
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

-----`,Ao={id:"accomplishments",message:Mo},No=`
--------------------------------------------------------------------------------
CONTACT ME
--------------------------------------------------------------------------------

You can browse all my open source projects on GitHub, message me on LinkedIn, 
or follow me on BlueSky for whatever random thought pops in my head.

`,Lo=[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox"},{kind:"url",text:"LinkedIn",link:"https://www.linkedin.com/in/geoffcoxlive/"},{kind:"url",text:"BlueSky",link:"https://bsky.app/profile/geoffcoxlive.bsky.social"}],Ro={id:"contact",message:No,menuTitle:"LINKS",menuItems:Lo},Po=`
--------------------------------------------------------------------------------
CURATIONS
--------------------------------------------------------------------------------

`,Ne=[`Now so much I know
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

- Alan Kay`],Do=()=>Po+Ne[Math.floor(Math.random()*Ne.length)],Go={id:"curations",message:Do,menuTitle:"READ MORE",menuItems:[{kind:"step",text:"Tales of Interest",link:"stories"},{kind:"step",text:"Show me another quote",link:"curations"},{kind:"step",text:"About this website",link:"about-site"},{kind:"step",text:"Bookshelf",link:"bookshelf"}]},Ho={id:"modem-start",message:"Originating call...",holdMs:750,autoNextStepId:"modem-dialing"},Fo={id:"modem-dialing",message:"Micromodem: dialing...",holdMs:1e3,autoNextStepId:"modem-carrier"},jo={id:"modem-carrier",message:"Awaiting carrier...",holdMs:750,autoNextStepId:"modem-connect"},zo={id:"modem-connect",message:"Micromodem: connect",holdMs:500,autoNextStepId:"modem-baud"},Uo={id:"modem-baud",message:"56kbps v.90/ISDN/33.6 kbps v.34/USR HST",holdMs:1e3,autoNextStepId:"modem-online"},Ko={id:"modem-online",message:`

geoffcox.github.io online`,holdMs:250,autoNextStepId:"banner"},Wo=Array.from({length:100},(a,e)=>e+1).map((a,e)=>(e+1).toString()).join(`
`),Bo={id:"long-text",message:Wo},qo=()=>`Change theme to '${je()}'`,Jo={id:"settings",menuTitle:"SETTINGS",menuItems:[{kind:"action",text:qo,link:"cycle-theme"}]},Yo=`
geoffcox.github.io online

================================================================================
                             G E O F F  C O X
================================================================================
            | Talented Developer | Thoughtful Leader | Kind Person |

`,Vo={id:"mini-banner",message:Yo},Xo={id:"stories",menuTitle:"TALES OF INTEREST",menuItems:[{kind:"step",text:"Speed Estimation",link:"speed-estimation"},{kind:"step",text:"Why I love Svelte",link:"i-love-svelte"},{kind:"step",text:"Unpredictable Users",link:"unpredictable-users"}]},Qo=`
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
`,Zo={id:"speed-estimation",message:Qo},$o=`
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
`,en={id:"unpredictable-users",message:$o},tn=`
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
`,on={id:"i-love-svelte",message:tn},nn=`
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
`,an={id:"about-site",message:nn},sn={id:"bookshelf",menuTitle:"BOOKSHELF",menuItems:[{kind:"url",text:"Clean Architecture: A Craftsman's Guide to Software Structure and Design",link:"https://isbndb.com/book/9780134494166"},{kind:"url",text:"Design Patterns: Elements of Reusable Object-Oriented Software",link:"https://isbndb.com/book/9788178081359"},{kind:"url",text:"Patterns of Enterprise Application Architecture",link:"https://isbndb.com/book/9788131794029"},{kind:"url",text:"Refactoring: Improving the Design of Existing Code",link:"https://isbndb.com/book/9780201485677"},{kind:"url",text:"AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis",link:"https://isbndb.com/book/9780471197133"}]},We=[Ho,Fo,jo,zo,Uo,Ko],Be=[no,Co,Vo],qe=[...We,...Be,Ke,ro,wo,Ao,uo,ho,ao,co,po,fo,yo,So,xo,Ro,Go,an,sn,Xo,on,Zo,en,Jo,To,Bo],Le=qe[0].id,rn=[...We,...Be,Ke].map(a=>a.id),te={};qe.forEach(a=>{te[a.id]=a});const W=z({steps:[]}),me=[];var ln=O('<div class="page svelte-18lkc44"></div>');function wn(a,e){ae(e,!0);const n=async i=>{!te[i]||rn.includes(i)?W.steps.push({...te[Le]}):W.steps.push({...te["mini-banner"],autoNextStepId:i})};let o=Q(()=>W.steps[W.steps.length-1]);const c=async i=>{await ee(),l(o)&&!l(o).autoNextStepId&&me.push(l(o).id);const t=te[i];t&&Oe(`#${t.id}`,Te.state),t&&W.steps.push({...t})},f=async i=>{await ee(),window.open(i,"_blank"),l(o)&&(l(o).userChoice=void 0)},s=async i=>{switch(await ee(),i){case"cycle-theme":mt.theme=je();break}l(o)&&(l(o).userChoice=void 0)},b=async()=>{await ee();const i=me.pop();if(i){const t=te[i];t&&(Oe(`#${t.id}`,Te.state),W.steps.push({...t}))}},y={behavior:"smooth",block:"nearest"};let u,g;const S=async()=>{g||(await ee(),g=setTimeout(()=>{u==null||u.scrollIntoView(y),g=void 0},100))};let w,d=0;const r=()=>{d=d===0?5:d+1,w===void 0&&(w=setInterval(()=>{var i,t;(i=document.querySelector(".drive-light"))==null||i.classList.toggle("on"),d--,d===0&&(clearInterval(w),w=void 0,(t=document.querySelector(".drive-light"))==null||t.classList.remove("on"))},50))};_t("stepContext",{get canGoBack(){return me.length>0},get canGoToMainMenu(){var i;return((i=l(o))==null?void 0:i.id)!=="main-menu"},goToStep:c,goToUrl:f,goBack:b,takeAction:s,onNewLine:async()=>{r(),S()}}),ce(()=>{if(u=document.getElementById("ScrollAnchor"),W.steps.length===0)if(location.hash){const i=location.hash.substring(1);n(i)}else c(Le)});var k=ln();fe(k,23,()=>W.steps,(i,t)=>`${i.id}-${t}`,(i,t)=>{Ft(i,{get step(){return l(t)}})}),D(k),I(a,k),se()}export{wn as component,vn as universal};
