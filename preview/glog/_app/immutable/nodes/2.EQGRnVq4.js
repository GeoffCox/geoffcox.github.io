import{c as xe,p as tt,d as E,t as H,g as ze,e as _e}from"../chunks/disclose-version.DiEzmQb1.js";import{P as Ue,v as B,h as be,O as ot,m as je,R as nt,T as Oe,c as le,s as fe,d as Z,ar as ce,V as We,p as ke,W as it,w as Te,as as Ee,at,l as st,au as rt,af as Be,f as lt,an as ct,a4 as dt,G as Ce,av as Se,aw as Ie,ax as _t,a as Ke,g as Je,o as ut,ay as Ye,q as ht,az as mt,j as pt,b as gt,A as ue,t as se,ag as ee,ab as he,D as L,B as K,C as J,x as re,ac as W,J as A,L as d,aa as Me,z as j,a5 as te,ad as $,aA as ft,ah as vt}from"../chunks/index-client.Dq31lpYe.js";import{r as bt,a as Y,p as we,i as U}from"../chunks/props.DLBYX73D.js";import{s as Ae}from"../chunks/render.D9A7glUH.js";import{s as wt,t as yt,b as Ne,g as qe,a as kt}from"../chunks/settings.svelte.BDE0Pzso.js";import{b as Le}from"../chunks/this.CG61-XJA.js";import"../chunks/entry.DDb0I-7e.js";import"../chunks/client.DdUIz6C5.js";function Re(i,e){return e}function St(i,e,n,o){for(var r=[],p=e.length,c=0;c<p;c++)at(e[c].e,r,!0);var b=p>0&&r.length===0&&n!==null;if(b){var _=n.parentNode;st(_),_.append(n),o.clear(),X(i,e[0].prev,e[p-1].next)}rt(r,()=>{for(var u=0;u<p;u++){var v=e[u];b||(o.delete(v.k),X(i,v.prev,v.next)),Be(v.e,!b)}})}function ye(i,e,n,o,r,p=null){var c=i,b={flags:e,items:new Map,first:null},_=(e&Ye)!==0;if(_){var u=i;c=B?le(Je(u)):u.appendChild(ut())}B&&be();var v=null,y=!1;Ue(()=>{var k=n(),l=ot(k)?k:k==null?[]:je(k),s=l.length;if(y&&s===0)return;y=s===0;let h=!1;if(B){var I=c.data===nt;I!==(s===0)&&(c=Oe(),le(c),fe(!1),h=!0)}if(B){for(var w=null,a,g=0;g<s;g++){if(Z.nodeType===8&&Z.data===lt){c=Z,h=!0,fe(!1);break}var C=l[g],m=o(C,g);a=Xe(Z,b,w,null,C,m,g,r,e),b.items.set(m,a),w=a}s>0&&le(Oe())}if(!B){var t=ct;It(l,b,c,r,e,(t.f&ce)!==0,o)}p!==null&&(s===0?v?We(v):v=ke(()=>p(c)):v!==null&&it(v,()=>{v=null})),h&&fe(!0),n()}),B&&(c=Z)}function It(i,e,n,o,r,p,c,b){var O,D,R,T;var _=(r&mt)!==0,u=(r&(Ie|Se))!==0,v=i.length,y=e.items,k=e.first,l=k,s,h=null,I,w=[],a=[],g,C,m,t;if(_)for(t=0;t<v;t+=1)g=i[t],C=c(g,t),m=y.get(C),m!==void 0&&((O=m.a)==null||O.measure(),(I??(I=new Set)).add(m));for(t=0;t<v;t+=1){if(g=i[t],C=c(g,t),m=y.get(C),m===void 0){var S=l?l.e.nodes_start:n;h=Xe(S,e,h,h===null?e.first:h.next,g,C,t,o,r),y.set(C,h),w=[],a=[],l=h.next;continue}if(u&&xt(m,g,t,r),m.e.f&ce&&(We(m.e),_&&((D=m.a)==null||D.unfix(),(I??(I=new Set)).delete(m))),m!==l){if(s!==void 0&&s.has(m)){if(w.length<a.length){var N=a[0],x;h=N.prev;var V=w[0],P=w[w.length-1];for(x=0;x<w.length;x+=1)He(w[x],N,n);for(x=0;x<a.length;x+=1)s.delete(a[x]);X(e,V.prev,P.next),X(e,h,V),X(e,P,N),l=N,h=P,t-=1,w=[],a=[]}else s.delete(m),He(m,l,n),X(e,m.prev,m.next),X(e,m,h===null?e.first:h.next),X(e,h,m),h=m;continue}for(w=[],a=[];l!==null&&l.k!==C;)(p||!(l.e.f&ce))&&(s??(s=new Set)).add(l),a.push(l),l=l.next;if(l===null)continue;m=l}w.push(m),h=m,l=m.next}if(l!==null||s!==void 0){for(var M=s===void 0?[]:je(s);l!==null;)(p||!(l.e.f&ce))&&M.push(l),l=l.next;var z=M.length;if(z>0){var f=r&Ye&&v===0?n:null;if(_){for(t=0;t<z;t+=1)(R=M[t].a)==null||R.measure();for(t=0;t<z;t+=1)(T=M[t].a)==null||T.fix()}St(e,M,f,y)}}_&&ht(()=>{var F;if(I!==void 0)for(m of I)(F=m.a)==null||F.apply()}),Te.first=e.first&&e.first.e,Te.last=h&&h.e}function xt(i,e,n,o){o&Ie&&Ee(i.v,e),o&Se?Ee(i.i,n):i.i=n}function Xe(i,e,n,o,r,p,c,b,_,u){var v=(_&Ie)!==0,y=(_&_t)===0,k=v?y?dt(r):Ce(r):r,l=_&Se?Ce(c):c,s={i:l,v:k,k:p,a:null,e:null,prev:n,next:o};try{return s.e=ke(()=>b(i,k,l),B),s.e.prev=n&&n.e,s.e.next=o&&o.e,n===null?e.first=s:(n.next=s,n.e.next=s.e),o!==null&&(o.prev=s,o.e.prev=s.e),s}finally{}}function He(i,e,n){for(var o=i.next?i.next.e.nodes_start:n,r=e?e.e.nodes_start:n,p=i.e.nodes_start;p!==o;){var c=Ke(p);r.before(p),p=c}}function X(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ot(i,e,n,o,r){var p=i,c="",b;Ue(()=>{if(c===(c=e()??"")){B&&be();return}b!==void 0&&(Be(b),b=void 0),c!==""&&(b=ke(()=>{if(B){Z.data;for(var _=be(),u=_;_!==null&&(_.nodeType!==8||_.data!=="");)u=_,_=Ke(_);if(_===null)throw pt(),gt;xe(Z,u),p=le(_);return}var v=c+"",y=tt(v);xe(Je(y),y.lastChild),p.before(y)}))})}const Tt=!0,On=Object.freeze(Object.defineProperty({__proto__:null,prerender:Tt},Symbol.toStringTag,{value:"Module"}));var Et=H('<div>&gt; <span class="cursor svelte-44s095">█</span></div>');function Ve(i,e){let n=bt(e,["$$slots","$$events","$$legacy"]);var o=Et();let r;ue(()=>r=wt(o,r,{class:"prompt-indicator",...n},"svelte-44s095")),E(i,o)}var Ct=(i,e)=>e(" "),Mt=(i,e)=>e("Escape"),At=H('<div class="more-prompt svelte-kx2b91">-- more -- <!> <div class="commands svelte-kx2b91"><button class="choice svelte-kx2b91">[space] to continue</button> <span>|</span> <button class="choice svelte-kx2b91">[esc] to skip</button></div></div>');function Nt(i,e){se(e,!0),ee("stepContext");const n=async u=>{u===" "||u===" "?e.onContinue():u==="Escape"&&e.onSkip()},o=u=>{u.getModifierState,!u.metaKey&&!u.altKey&&!u.ctrlKey&&n(u.key)};he(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}));var r=At(),p=L(K(r));Ve(p,{});var c=L(p,2),b=K(c);b.__click=[Ct,n];var _=L(b,4);_.__click=[Mt,n],J(c),J(r),E(i,r),re()}ze(["click"]);var Lt=H('<div class="message svelte-7kcggs"><!> <span class="last-char svelte-7kcggs">0</span></div> <div class="more-prompt svelte-7kcggs"><!></div>',1);function de(i,e){se(e,!0);const n=f=>new Promise(O=>setTimeout(O,f)),o="=".repeat(40),r="-".repeat(40),p=f=>{let O="";switch(typeof f){case"string":O=f;break;case"function":O=f();break;default:throw new Error("Invalid message type")}return b.mobile&&(O=O.replace(/[-]{80}/g,r).replace(/[=]{80}/g,o)),O},c=ee("stepContext"),b=ee("screenContext"),_=ee("consoleContext");let u,v,y=W(void 0),k=W(void 0),l=te(()=>p(e.message)),s=W(""),h=W(!e.spool);A(s,Y(e.spool?"":d(l)));let I=W(!1),w;const a=async()=>(A(I,!0),c.onNewLine(),new Promise(f=>{w=f})),g=()=>{A(I,!1),w==null||w(!0),w=void 0},C=()=>{g(),A(h,!0)},m=async()=>{const f=d(l).length>1e3?4:2;let O,D=0;for(let R=0;R<d(l).length;R++)if(d(h)){A(s,Y(d(l))),c.onNewLine();break}else{R%f===0&&await n(10),A(s,d(s)+d(l)[R]),await $();const T=u==null?void 0:u.getBoundingClientRect().height;T&&(O===void 0||O!==T)&&(c.onNewLine(),d(k)&&_.consoleHeight&&Math.ceil(T+d(k)*1.6-D)>_.consoleHeight&&(await a(),D=T),O=T)}await $(),c.onNewLine(),A(h,!0)};let t=e.message;Me(()=>{e.spool&&e.message!==void 0&&e.message!==t&&d(h)&&(t=e.message,A(s,Y(e.spool?"":d(l))),A(h,!e.spool),e.spool&&m())}),Me(()=>{var f;e.spool&&d(h)&&((f=e.onSpooled)==null||f.call(e))});const S=f=>{!f.metaKey&&!f.altKey&&!f.ctrlKey&&!d(I)&&f.key==="Escape"&&A(h,!0)};he(()=>(e.spool?m():c.onNewLine(),window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}));var N=Lt(),x=j(N),V=K(x);Ot(V,()=>d(s).replaceAll(/\n/g,"<br/>"));var P=L(V,2);Le(P,f=>v=f,()=>v),J(x),Le(x,f=>u=f,()=>u);var M=L(x,2),z=K(M);Nt(z,{onContinue:g,onSkip:C}),J(M),ue(()=>yt(M,"visible",d(I))),Ne(x,"clientHeight",f=>A(y,f)),Ne(M,"clientHeight",f=>A(k,f)),E(i,N),re()}var Rt=H("<br> <!> <!>",1),Ht=H('<button class="choice svelte-12y3o2v"><!></button>'),Dt=(i,e)=>e("B"),Gt=H('<button class="choice svelte-12y3o2v">[B]ack</button>'),Pt=H("<span>|</span>"),Ft=(i,e)=>e("M"),zt=H('<button class="choice svelte-12y3o2v">[M]ain Menu</button>'),Ut=H('<br> <!> <div class="commands"><!> <!> <!></div>',1),jt=H("<!> <!>",1),Wt=H('<div class="choice svelte-12y3o2v"> </div>'),Bt=H("<!> <div> </div>",1),Kt=H('<div class="choices svelte-12y3o2v"><!> <!></div>');function Jt(i,e){se(e,!0);const n=ee("stepContext");let o=we(e,"menuItems",19,()=>[]),r=we(e,"userChoice",15),p=te(()=>{var t;return"-".repeat(((t=e.menuTitle)==null?void 0:t.length)||0)}),c=W(Y(!e.spool||!e.menuTitle)),b=W(Y(!e.spool||!e.menuTitle)),_=W(Y(e.spool?0:o().length));const u=t=>{switch(t.kind){case"url":n.goToUrl(t.link);break;case"step":n.goToStep(t.link);break;case"action":n.takeAction(t.link);break}},v=t=>{if(r()===void 0){const S=o()[t];S&&(r(`${t+1}`),u(S))}},y=async t=>{if(r()===void 0)if(n.canGoBack&&(t==="b"||t==="B"))r("B"),n.goBack();else if(n.canGoToMainMenu&&(t==="m"||t==="M"))r("M"),n.goToStep("main-menu");else{const S=Number.parseInt(t);S!=null&&S!==Number.NaN&&v(S-1)}},k=t=>{t.getModifierState,!t.metaKey&&!t.altKey&&!t.ctrlKey&&y(t.key)};he(()=>(window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}));const l=()=>{A(c,!0)},s=()=>{A(b,!0)},h=()=>{var t;ft(_),d(_)>=o().length&&((t=e.onSpooled)==null||t.call(e))},I=(t,S)=>{const N=typeof t.text=="function"?t.text():t.text;switch(t.kind){case"url":return`${S+1}. ${N} [↗]`;case"step":case"action":return`${S+1}. ${N}`}};var w=Kt(),a=K(w);{var g=t=>{var S=Rt(),N=L(j(S),2);de(N,{get message(){return e.menuTitle},spool:!0,onSpooled:l});var x=L(N,2);de(x,{get message(){return d(p)},spool:!0,onSpooled:s}),E(t,S)};U(a,t=>{e.menuTitle&&t(g)})}var C=L(a,2);{var m=t=>{var S=_e(),N=j(S);{var x=P=>{var M=jt(),z=j(M);ye(z,17,o,Re,(D,R,T)=>{var F=_e(),oe=j(F);{var me=ne=>{var ie=Ht();ie.__click=()=>v(T);var pe=K(ie),ge=te(()=>I(d(R),T)),G=te(()=>e.spool&&T>=d(_));de(pe,{get message(){return d(ge)},get spool(){return d(G)},onSpooled:h}),J(ie),E(ne,ie)};U(oe,ne=>{(!e.spool||T<=d(_))&&ne(me)})}E(D,F)});var f=L(z,2);{var O=D=>{var R=Ut(),T=L(j(R),2);Ve(T,{});var F=L(T,2),oe=K(F);{var me=G=>{var Q=Gt();Q.__click=[Dt,y],E(G,Q)};U(oe,G=>{n.canGoBack&&G(me)})}var ne=L(oe,2);{var ie=G=>{var Q=Pt();E(G,Q)};U(ne,G=>{n.canGoBack&&n.canGoToMainMenu&&G(ie)})}var pe=L(ne,2);{var ge=G=>{var Q=zt();Q.__click=[Ft,y],E(G,Q)};U(pe,G=>{n.canGoToMainMenu&&G(ge)})}J(F),E(D,R)};U(f,D=>{d(_)>=o().length&&D(O)})}E(P,M)},V=P=>{var M=Bt(),z=j(M);ye(z,17,o,Re,(D,R,T)=>{var F=Wt(),oe=K(F,!0);ue(()=>Ae(oe,I(d(R),T))),J(F),E(D,F)});var f=L(z,2),O=K(f);J(f),ue(()=>Ae(O,`> ${r()??""}`)),E(P,M)};U(N,P=>{r()===void 0?P(x):P(V,!1)})}E(t,S)};U(C,t=>{d(c)&&d(b)&&t(m)})}J(w),E(i,w),re()}ze(["click"]);var Yt=H("<!> <!>",1);function qt(i,e){se(e,!0);const n=ee("stepContext");let o=we(e,"step",7),r=W(Y(!o().message||o().displayed)),p=W(Y(!o().menuItems||o().menuItems.length===0||o().displayed));const c=s=>new Promise(h=>setTimeout(h,s)),b=async()=>{o().holdMs&&await c(o().holdMs),A(r,!0),o().autoNextStepId&&(o().displayed=!0,n.goToStep(o().autoNextStepId))},_=async()=>{A(p,!0),o().displayed=!0};var u=Yt(),v=j(u);{var y=s=>{var h=te(()=>!d(r));de(s,{get message(){return o().message},get spool(){return d(h)},onSpooled:b})};U(v,s=>{o().message&&s(y)})}var k=L(v,2);{var l=s=>{var h=_e(),I=j(h);{var w=a=>{var g=te(()=>!d(p));Jt(a,{get menuTitle(){return o().menuTitle},get menuItems(){return o().menuItems},get spool(){return d(g)},onSpooled:_,get userChoice(){return o().userChoice},set userChoice(C){o().userChoice=C}})};U(I,a=>{o().autoNextStepId||a(w)})}E(s,h)};U(k,s=>{d(r)&&s(l)})}E(i,u),re()}const Xt=`
               _____ ______ ____  ______ ______    _____ ______   __
              / ____|  ____/ __ \\|  ____|  ____|  / ____/ __ \\ \\ / /
             | |  __| |__ | |  | | |__  | |__    | |   | |  | \\ V / 
             | | |_ |  __|| |  | |  __| |  __|   | |   | |  | |> <  
             | |__| | |___| |__| | |    | |      | |___| |__| / . \\ 
              \\_____|______\\____/|_|    |_|       \\_____\\____/_/ \\_\\

`,Vt=`
                  ___  ____  __  ____  ____     ___  __  _  _ 
                 / __)(  __)/  \\(  __)(  __)   / __)/  \\( \\/ )
                ( (_ \\ ) _)(  O )) _)  ) _)   ( (__(  O ))  ( 
                 \\___/(____)\\__/(__)  (__)     \\___)\\__/(_/\\_)

`,Qt=`
░░      ░░░        ░░░      ░░░       ░░       ░░░░░      ░░░░      ░░░  ░░░░  ░
▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒
▓  ▓▓▓   ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓     ▓▓▓▓     ▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓
█  ████  ██  ████████  ████  ██  ███████  █████████  ████  ██  ████  ███  ██  ██
██      ███        ███      ███  ███████  ██████████      ████      ███  ████  █
`,Zt=`
                 ____ _____ ___  _____ _____    ____ _____  __
                / ___| ____/ _ \\|  ___|  ___|  / ___/ _ \\ \\/ /
               | |  _|  _|| | | | |_  | |_    | |  | | | \\  / 
               | |_| | |__| |_| |  _| |  _|   | |__| |_| /  \\ 
                \\____|_____\\___/|_|   |_|      \\____\\___/_/\\_\\

`,$t=`

       ██████  ███████  ██████  ███████ ███████      ██████  ██████  ██   ██ 
      ██       ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
      ██   ███ █████   ██    ██ █████   █████       ██      ██    ██   ███   
      ██    ██ ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
       ██████  ███████  ██████  ██      ██           ██████  ██████  ██   ██ 

`,eo=`

        █████╗ ███████╗ ██████╗ ███████╗███████╗     ██████╗ ██████╗ ██╗  ██╗
      ██╔════╝ ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██╔═══██╗╚██╗██╔╝
      ██║  ███╗█████╗  ██║   ██║█████╗  █████╗      ██║     ██║   ██║ ╚███╔╝ 
      ██║   ██║██╔══╝  ██║   ██║██╔══╝  ██╔══╝      ██║     ██║   ██║ ██╔██╗ 
      ╚██████╔╝███████╗╚██████╔╝██║     ██║         ╚██████╗╚██████╔╝██╔╝ ██╗
       ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝          ╚═════╝ ╚═════╝ ╚═╝  ╚═╝

`,De="\n                        .-. .-. .-. .-. .-.   .-. .-. .  . \n                        |.. |-  | | |-  |-    |   | |  )(  \n                        `-' `-' `-' '   '     `-' `-' '  '\n",to=`

                 GGG  EEEE  OOO  FFFF FFFF      CCC  OOO  X   X 
                G     E    O   O F    F        C    O   O  X X  
                G  GG EEE  O   O FFF  FFF      C    O   O   X   
                G   G E    O   O F    F        C    O   O  X X  
                 GGG  EEEE  OOO  F    F         CCC  OOO  X   X 

`,oo=`

        #####  ####### ####### ####### #######     #####  ####### #     # 
       #     # #       #     # #       #          #     # #     #  #   #  
       #       #       #     # #       #          #       #     #   # #   
       #  #### #####   #     # #####   #####      #       #     #    #    
       #     # #       #     # #       #          #       #     #   # #   
       #     # #       #     # #       #          #     # #     #  #   #  
        #####  ####### ####### #       #           #####  ####### #     #

`,no=`

   _|_|_|  _|_|_|_|    _|_|    _|_|_|  _|_|_|     _|_|_|    _|_|    _|      _|  
 _|        _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
 _|  _|_|  _|_|_|    _|    _|  _|_|    _|_|     _|        _|    _|      _|      
 _|    _|  _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
   _|_|_|  _|_|_|_|    _|_|    _|      _|         _|_|_|    _|_|    _|      _| 

`,io=`
      ______ _______  _____  _______ _______      _______  _____  _     _
     |  ____ |______ |     | |______ |______      |       |     |  \\___/ 
     |_____| |______ |_____| |       |            |_____  |_____| _/   \\_

`,ao=`
       _____   ______  _____   ______  ______       ___     _____  _     _ 
      (_____) (______)(_____) (______)(______)    _(___)_  (_____)( )   ( )
     (_)  ___ (_)__  (_)   (_)(_)__   (_)__      (_)   (_)(_)   (_)(_)_(_) 
     (_) (___)(____) (_)   (_)(____)  (____)     (_)    _ (_)   (_) (___)  
     (_)___(_)(_)____(_)___(_)(_)     (_)        (_)___(_)(_)___(_)(_) (_) 
      (_____) (______)(_____) (_)     (_)          (___)   (_____)(_)   (_)

`,so=`
==      ===       ====    ====       ==       =======     =====    ====   ==   =
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=  ========  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ========     ====  ====  ==     ====     =======  ========  ====  =====  ====
=  ===   ==  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
==      ===       ====    ====  =======  ============     =====    ====  ====  =
`,ro=`

                o-o  o--o  o-o  o--o o--o       o-o  o-o  o   o 
               o     |    o   o |    |         /    o   o  \\ /  
               |  -o O-o  |   | O-o  O-o      O     |   |   O   
               o   | |    o   o |    |         \\    o   o  / \\  
                o-o  o--o  o-o  o    o          o-o  o-o  o   o 

`,Ge=[De,Xt,Vt,Qt,Zt,$t,eo,De,to,oo,no,io,ao,so,ro],lo=`

            | Talented Developer | Thoughtful Leader | Kind Person |            
`,co=`
================================================================================`,_o="================================================================================",uo=`
============< G E O F F  C O X >============
`,ho=()=>ee("screenContext").mobile?uo:co+Ge[Math.floor(Math.random()*Ge.length)]+_o+lo,mo={id:"banner",message:ho,autoNextStepId:"news"},po=`
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

LICENSE: MIT`,go={id:"binary-search",message:po,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/binary-search/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/binary-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/binary-search/blob/main/lib/README.md"}]},fo=`
--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------

- 20+ years of expertise in web, native client, and global-scale cloud software development
- 10+ years managing high-performance teams
- Specialist in user interface design, architecture, and coaching practices

CURRENT WORK

Building the Fluent UI React component library for the Office suite, Microsoft, and the React community. Collaborating with partners across the company to enable the Fluent 2 design system and Copilot.

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
`,vo={id:"experience",message:fo},bo=`
--------------------------------------------------------------------------------
pretty-good-nlp
--------------------------------------------------------------------------------

A deterministic, match-based, recognizer for natural language processing (NLP) scenarios. Most useful as a placeholder for in application development when waiting for a predictive model.

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

LICENSE: MIT`,wo={id:"pretty-good-nlp",message:bo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/pretty-good-nlp/"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/pretty-good-nlp"}]},yo=`
--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------

I spend many evenings and weekends writing my own code.

When I think it might be useful to others, I publish it. I work hard to make the code clean, fast, well-documented, and easy to use.

Let me know if you find any bugs or have any suggestions for improvement.`,ko={id:"projects",message:yo,autoNextStepId:"projects-menu"},So={id:"projects-menu",menuTitle:"PROJECTS",menuItems:[{kind:"step",text:"binary-search",link:"binary-search"},{kind:"step",text:"pretty-good-nlp",link:"pretty-good-nlp"},{kind:"step",text:"react-splitter",link:"react-splitter"},{kind:"step",text:"recoil-examples",link:"recoil-examples"},{kind:"step",text:"sterling-svelte -*| NEW |*-",link:"sterling-svelte"},{kind:"step",text:"svelte-splitter",link:"svelte-splitter"},{kind:"step",text:"trie-search",link:"trie-search"}]},Io=`
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

LICENSE: MIT`,xo={id:"react-splitter",message:Io,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/react-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/react-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/react-splitter"}]},Oo=`
--------------------------------------------------------------------------------
recoil-examples
--------------------------------------------------------------------------------

A project containing the examples from Recoil JS documentation.

I don't know why the official site doesn't provide running example code. I am amazed how this project has over 60 stars on GitHub.

FEATURES

- Examples of atoms & selectors that can be built, run, and debugged.
- Bonus: Dispatcher pattern using Recoil.

TECHNOLOGY

- Recoil JS
- React
- Typescript

LICENSE: MIT`,To={id:"recoil-examples",message:Oo,menuItems:[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/recoil-examples"},{kind:"url",text:"Recoil JS Official Site",link:"https://recoiljs.org/"}]},Eo=`
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

I started in C/C++ and spent seven years building deep expertise in the language and Win32. I got to work on multiple different projects involving MFC, COM & DCOM, MAPI, networking, and serial hardware communication.

When C# arrived, I loved the productivity boost of solving problems rather than tracking memory allocations. I used my C/C++ knowledge to learn how .NET works internally including the intermediate language (IL), garbage collection (GC), and interop with Win32. C# gave me an appreciation for higher-level languages with frameworks that can run almost anywhere.

My love of C# got me involved in UI development with WPF and Silverlight. I discovered I have a passion for UI design and Human Computer Interaction (HCI). While I'm not an artist, I do enjoy studying different design approaches, assessing user interaction, and building new UI.
 
My interest in UI led me to web applications built with C# & .NET. ASP.NET MVC & Web API opened my eyes to how design patterns and architecture principles allowed composing simple pieces of functionality into powerful systems. I learned web protocols, performance optimization, and security fundamentals to ship several internet-scale web applications and services.

As part of a consulting project, I helped author two books on UI patterns for Microsoft Press. Working with the Patterns & Practices team taught me how to compose an architecture for UI through building blocks and subsystems.

As more of my work focused on building web applications in the browser, I dove into Javascript. In the early days, it was gruesome to build web applications with early JS and HTML/CSS. Fortunately, the timing worked out for me to join the web development journey. I went from JS to jQuery to Knockout to Angular to React. I also moved from CSS to LESS/SASS to CSS-in-JS. Getting to ship applications in multiple frameworks as HTML and CSS evolved gave me an ability to quickly learn new technology. Learning Typescript taught me the power of syntactic sugar and duck typing along with a rediscovered appreciation for strongly-typed runtimes.

In parallel with growing as a web developer, I continued working on systems programming projects. This included projects using Rust, SQL, and of course Azure services. I've gained an understanding of information architecture, different storage frameworks, and cloud services that help me across the stack.
 
I love learning new languages and technologies. It is fascinating to figure out their advantages and how they influence architecture and design. I try to balance the “T” of knowledge and capability; breadth of multiple technologies with depth in a few. Every time I learn something outside of my work projects, I always find it useful later on.`,Co={id:"skills",message:Eo},Mo=`
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

LICENSE: MIT`,Ao={id:"sterling-svelte",message:Mo,menuItems:[{kind:"url",text:"Documentation",link:"https://geoffcox.github.io/docs/sterling-svelte/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/sterling-svelte"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/sterling-svelte"}]},No=`
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

LICENSE: MIT`,Lo={id:"svelte-splitter",message:No,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/svelte-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/svelte-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/svelte-splitter"}]},Ro=`
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

LICENSE: MIT`,Ho={id:"trie-search",message:Ro,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/trie-search"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/trie-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/trie-search/blob/main/lib/README.md"}]},Do=`

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
                                                            
            This section still under construction.</pre>`,Go={id:"under-construction",message:Do},Qe={id:"main-menu",menuTitle:"MAIN MENU",menuItems:[{kind:"step",text:"Experience",link:"experience"},{kind:"step",text:"Skills",link:"skills"},{kind:"step",text:"Accomplishments",link:"accomplishments"},{kind:"step",text:"Projects",link:"projects"},{kind:"step",text:"Contact Me",link:"contact"},{kind:"step",text:"Curations",link:"curations"},{kind:"url",text:"Paper Resume",link:"https://geoffcox.github.io/geoffcoxresume.pdf"}]},Po=`
--------------------------------------------------------------------------------
NEWS
--------------------------------------------------------------------------------

[Jan 2025] sterling-svelte 2.0 is out!`,Fo={id:"news",message:Po,autoNextStepId:"main-menu"},zo=`
--------------------------------------------------------------------------------
MAJOR ACCOMPLISHMENTS
--------------------------------------------------------------------------------

----------

Architected and led an application/research platform for machine teaching including document classification and extraction, labeling and correction, and responsive model retraining. Integrated research advancements into the LUIS product.

----------

Created StackOverflow@Microsoft, adopted by 30K+ engineers. Recognized companywide as a key tool for Windows, Azure, and Office groups.

----------

Built Microsoft's implementation of the OASIS OData v4 aggregation standard.

----------

Delivered a Visual Studio integrated toolset providing enlistment, code review, and build used across SQL engineering. Also included a parallel, speculative, gated checkin system reducing CI build times from 4+ hours to <30 minutes.

Led SQL TechFest for the entire SQL organization. Managed submission and judging of hundreds of entries, all event logistics, and a personal tour with Microsoft's CEO.

----------

Delivered the 2012 Olympics real-time streaming voice-over system.

----------

Delivered a completely new MSDN website including Visual Studio 2010 brand and low bandwidth experiences, last-mile edge caching, and robust transformation 
pipeline.

----------

Designed and implemented the central job scheduler and multi-media/home automation hardware controllers for Paul Allen's personal residences worldwide.

----------`,Uo={id:"accomplishments",message:zo},jo=`
--------------------------------------------------------------------------------
CONTACT ME
--------------------------------------------------------------------------------

You can browse all my open source projects on GitHub, message me on LinkedIn, 
or follow me on BlueSky for whatever random thought pops in my head.

`,Wo=[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox"},{kind:"url",text:"LinkedIn",link:"https://www.linkedin.com/in/geoffcoxlive/"},{kind:"url",text:"BlueSky",link:"https://bsky.app/profile/geoffcoxlive.bsky.social"}],Bo={id:"contact",message:jo,menuTitle:"LINKS",menuItems:Wo},Ko=`
--------------------------------------------------------------------------------
CURATIONS
--------------------------------------------------------------------------------

`,Pe=[`Now so much I know
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

- Alan Kay`],Jo=()=>Ko+Pe[Math.floor(Math.random()*Pe.length)],Yo={id:"curations",message:Jo,menuTitle:"READ MORE",menuItems:[{kind:"step",text:"Tales of Interest",link:"stories"},{kind:"step",text:"Show me another quote",link:"curations"},{kind:"step",text:"About this website",link:"about-site"},{kind:"step",text:"Bookshelf",link:"bookshelf"}]},Ze={id:"modem-start",message:"Originating call...",holdMs:750,autoNextStepId:"modem-dialing"},qo={id:"modem-dialing",message:"Micromodem: dialing...",holdMs:1e3,autoNextStepId:"modem-carrier"},Xo={id:"modem-carrier",message:"Awaiting carrier...",holdMs:750,autoNextStepId:"modem-connect"},Vo={id:"modem-connect",message:"Micromodem: connect",holdMs:500,autoNextStepId:"modem-baud"},Qo={id:"modem-baud",message:"56kbps v.90/ISDN/33.6 kbps v.34/USR HST",holdMs:1e3,autoNextStepId:"modem-online"},Zo={id:"modem-online",message:`

geoffcox.github.io online`,holdMs:250,autoNextStepId:"banner"},$o=Array.from({length:1e3},(i,e)=>e+1).map((i,e)=>(e+1).toString()).join(`
`),en={id:"long-text",message:$o},tn=()=>`Change theme to '${qe()}'`,on={id:"settings",menuTitle:"SETTINGS",menuItems:[{kind:"action",text:tn,link:"cycle-theme"}]},nn=`
geoffcox.github.io online

===
                             G E O F F  C O X
===
            | Talented Developer | Thoughtful Leader | Kind Person |

`,an={id:"mini-banner",message:nn},sn={id:"stories",menuTitle:"TALES OF INTEREST",menuItems:[{kind:"step",text:"Speed Estimation",link:"speed-estimation"},{kind:"step",text:"Why I love Svelte",link:"i-love-svelte"},{kind:"step",text:"Unpredictable Users",link:"unpredictable-users"}]},rn=`
--------------------------------------------------------------------------------
Speed Estimation
--------------------------------------------------------------------------------

One evening, when I was working on a large customer data store, there was an emergency team meeting to figure out how to handle a bug that had incorrectly hashed the Passport authentication identifiers in our SQL databases. About 20 of us were called into a 10 person conference room to discuss options.

A dev on my team reported he had already patched the code and had a SQL script to repair the existing data. However, some random guy from another team had been talking to my boss and followed us into the meeting room. He decided to take over the meeting and loudly declared that we first had to estimate how long running the script would take. My boss, normally outspoken and decisive, deferred to him. Everyone assumed he must be important and knew what he was doing.

He grabbed a whiteboard pen and starting doing a calculation on the board. He stated that updating a row in SQL probably takes at best 1 millisecond when within a transaction. He also wrote out a bunch of hash algorithm statements that he said added up to 2.5 milliseconds per row. We had 400 million rows that needed updating. He then calculated this would take 400 million x 3.5 = 1.4 billion milliseconds => 1.4 million seconds => 23 thousand minutes => 388 hours => 16 days.

No one could use the system until all the rows were updated. The room was in a panic. I thought that we should get the script started ASAP. I pulled the dev and a service engineer into the hallway to confirm they had confidence in the script and to ask them to get it running.

In the meantime, random guy started drawing up a shift rotation schedule for each person to be on site watching the script run over the next 16 days. After 15 minutes, as random guy was finalizing the shift schedule, the dev and service engineer returned. The dev whispered in my ear the results.

Random guy was literally giving a pep talk to the room about how hard it was going to be working 24 hours a day, but that it would be a worthy and valiant effort. I tried to interrupt him, but he didn't give me any opportunity.
Finally, he finished. I let the room know that we had run the script and it completed in under 15 minutes. The script updated over 400 rows per millisecond. He muttered that was impossible as his chest caved and he hung his head.

While this guy was a bit of a blow hard, he followed how developers are taught to estimate algorithms. We mentally walk through the steps, estimate the cost of each instruction, account for loops, and multiply by the number of items to get the result.

The problem was that computation speed had exceeded human imagination. It is hard for humans to understand how fast 1/400th of a millisecond goes by. We like to think we can understand that kind of processing power, but we can't be precise enough to avoid exponential errors. This was back in 2005. Today, that script would likely complete in seconds.

We shouldn't manually think through estimates. Instead, we have to run the code in a production/test environment and measure the real performance. Don't be that (random) guy.
`,ln={id:"speed-estimation",message:rn},cn=`
--------------------------------------------------------------------------------
Unpredictable Users
--------------------------------------------------------------------------------

Back in the days of Windows 95, my brother called me in a panic. He reported that his drive was out of space and he couldn't figure out what to do.

I walked him through selecting some files he didn't need anymore. When I told him to drag the files to the recycle bin in Windows Explorer, he couldn't find it. I asked him to look on his desktop and he reported it wasn't there either.

He then told me what he had done the day before while trying to clean up files on his desktop. He had somehow dragged the recycle bin icon around and ended up creating a shortcut to the recycle bin. He now had two recycle bins on his desktop. He dragged one on to to the other and then emptied the recycle bin.

Turns out he dragged the real recycle bin to the recycle bin shortcut. This put the recycle bin control panel app into the recycle bin. When he emptied the recycle bin, the control panel app deleted itself!

The OS went through the recycle bin app for soft and hard deletes. Ctrl+Del didn't do anything. We were able to open a command prompt and delete files, but this was too tedious for him to do regularly without my help. He just kind of lived with a too full drive until he bought his next computer.

I doubt any developer or tester could have predicted a user would use a shortcut to the recycle bin to delete the recycle bin.
`,dn={id:"unpredictable-users",message:cn},_n=`
--------------------------------------------------------------------------------
Why I Love Svelte
--------------------------------------------------------------------------------

If you've never heard of Svelte, check out [svelte.dev](http://svelte.dev).

I am more productive. Writing HTML, CSS, and JS is straightforward. Svelte's hot-module-reloading makes my inner dev loop very fast. I feel like I can code anything with Svelte.

I can properly architect and design. Svelte provides componentization, encapsulation, composition, and extensibility.

I don't have to make as many low-level decisions. I don't agonize over which state management, templating, or styling libraries to choose. Svelte meets all my needs for building applications and libraries.

I don't waste time trying to optimize my code by hand. There's no need to call optimization memo functions since the Svelte compiler makes the code as fast and small.

I quickly became an expert. Svelte's documentation is concise and precise. The tutorial and examples get you started in a couple of hours. Additional capabilities like SvelteKit are built on top of rather than inside Svelte. This helps Svelte avoid collapsing under the weight of additional complexity.

Even if you are a React or Angular fanatic, I hope you'll check out Svelte. I've found that learning new languages and technologies makes me better with the ones I know.
`,un={id:"i-love-svelte",message:_n},hn=`
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
`,mn={id:"about-site",message:hn},pn={id:"bookshelf",menuTitle:"BOOKSHELF",menuItems:[{kind:"url",text:"Clean Architecture: A Craftsman's Guide to Software Structure and Design",link:"https://isbndb.com/book/9780134494166"},{kind:"url",text:"Design Patterns: Elements of Reusable Object-Oriented Software",link:"https://isbndb.com/book/9788178081359"},{kind:"url",text:"Patterns of Enterprise Application Architecture",link:"https://isbndb.com/book/9788131794029"},{kind:"url",text:"Refactoring: Improving the Design of Existing Code",link:"https://isbndb.com/book/9780201485677"},{kind:"url",text:"AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis",link:"https://isbndb.com/book/9780471197133"}]},$e=[Ze,qo,Xo,Vo,Qo,Zo],et=[mo,Fo,an],gn=[...$e,...et,Qe,vo,Co,Uo,ko,So,go,wo,xo,To,Ao,Lo,Ho,Bo,Yo,mn,pn,sn,un,ln,dn,on,Go,en],Fe=Ze.id,fn=[...$e,...et,Qe].map(i=>i.id),ae={};gn.forEach(i=>{ae[i.id]=i});const q=Y({steps:[]}),ve=[];function Tn(i,e){se(e,!0);const n=async a=>{!ae[a]||fn.includes(a)?q.steps.push({...ae[Fe]}):q.steps.push({...ae.banner,autoNextStepId:a})};let o=te(()=>q.steps[q.steps.length-1]);const r=async a=>{await $(),d(o)&&!d(o).autoNextStepId&&ve.push(d(o).id);const g=ae[a];g&&q.steps.push({...g})},p=async a=>{await $(),window.open(a,"_blank"),d(o)&&(d(o).userChoice=void 0)},c=async a=>{switch(await $(),a){case"cycle-theme":kt.theme=qe();break}d(o)&&(d(o).userChoice=void 0)},b=async()=>{await $();const a=ve.pop();if(a){const g=ae[a];g&&q.steps.push({...g})}},_={behavior:"auto",block:"end"};let u;const v=async()=>{await $(),u==null||u.scrollIntoView(_)};let y,k=0;const l=()=>{k=k===0?5:k+1,y===void 0&&(y=setInterval(()=>{var a,g;(a=document.querySelector(".drive-light"))==null||a.classList.toggle("on"),k--,k===0&&(clearInterval(y),y=void 0,(g=document.querySelector(".drive-light"))==null||g.classList.remove("on"))},50))};vt("stepContext",{get canGoBack(){return ve.length>0},get canGoToMainMenu(){var a;return((a=d(o))==null?void 0:a.id)!=="main-menu"},goToStep:r,goToUrl:p,goBack:b,takeAction:c,onNewLine:async()=>{l(),v()}}),he(()=>{if(u=document.getElementById("ScrollAnchor"),q.steps.length===0)if(location.hash){const a=location.hash.substring(1);n(a)}else r(Fe)});var I=_e(),w=j(I);ye(w,19,()=>q.steps,(a,g)=>`${a.id}-${g}`,(a,g)=>{qt(a,{get step(){return d(g)}})}),E(i,I),re()}export{Tn as component,On as universal};
