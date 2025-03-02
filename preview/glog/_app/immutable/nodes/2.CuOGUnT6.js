import{d as xe,p as nt,a as E,t as H,g as Ue,e as _e}from"../chunks/disclose-version.DRxv1ZBB.js";import{D as Ke,x as B,j as be,Y as it,q as Be,F as at,G as Oe,h as le,e as fe,k as Z,ar as ce,I as We,w as ke,J as st,y as Te,as as Ee,at as rt,o as lt,au as ct,af as qe,l as dt,an as _t,a6 as ut,P as Ce,av as Se,aw as Ie,ax as ht,b as Je,g as Ye,v as mt,ay as Xe,M as pt,az as gt,m as ft,d as vt,t as ue,a as se,ag as ee,s as L,c as W,r as q,p as re,ac as K,R as A,V as d,B as Me,f as U,a7 as te,ad as $,aA as bt,ah as wt}from"../chunks/runtime.CM1ebsLf.js";import{o as he}from"../chunks/index-client.DUiFVfyl.js";import{b as Ae,i as j}from"../chunks/this.BEomrWGt.js";import{r as yt,a as J,p as we}from"../chunks/props.BvJcO1_d.js";import{s as Ne}from"../chunks/render.DSR6BWur.js";import{s as kt,t as St,b as Le,g as Ve,a as It}from"../chunks/settings.svelte.KJuxORoq.js";import{r as Re}from"../chunks/entry.D1dyRd72.js";import{p as He}from"../chunks/index.BAmTNWf7.js";function De(i,e){return e}function xt(i,e,n,o){for(var r=[],g=e.length,c=0;c<g;c++)rt(e[c].e,r,!0);var b=g>0&&r.length===0&&n!==null;if(b){var _=n.parentNode;lt(_),_.append(n),o.clear(),X(i,e[0].prev,e[g-1].next)}ct(r,()=>{for(var u=0;u<g;u++){var v=e[u];b||(o.delete(v.k),X(i,v.prev,v.next)),qe(v.e,!b)}})}function ye(i,e,n,o,r,g=null){var c=i,b={flags:e,items:new Map,first:null},_=(e&Xe)!==0;if(_){var u=i;c=B?le(Ye(u)):u.appendChild(mt())}B&&be();var v=null,y=!1;Ke(()=>{var k=n(),l=it(k)?k:k==null?[]:Be(k),s=l.length;if(y&&s===0)return;y=s===0;let h=!1;if(B){var I=c.data===at;I!==(s===0)&&(c=Oe(),le(c),fe(!1),h=!0)}if(B){for(var w=null,a,m=0;m<s;m++){if(Z.nodeType===8&&Z.data===dt){c=Z,h=!0,fe(!1);break}var C=l[m],p=o(C,m);a=Qe(Z,b,w,null,C,p,m,r,e),b.items.set(p,a),w=a}s>0&&le(Oe())}if(!B){var t=_t;Ot(l,b,c,r,e,(t.f&ce)!==0,o)}g!==null&&(s===0?v?We(v):v=ke(()=>g(c)):v!==null&&st(v,()=>{v=null})),h&&fe(!0),n()}),B&&(c=Z)}function Ot(i,e,n,o,r,g,c,b){var O,D,R,T;var _=(r&gt)!==0,u=(r&(Ie|Se))!==0,v=i.length,y=e.items,k=e.first,l=k,s,h=null,I,w=[],a=[],m,C,p,t;if(_)for(t=0;t<v;t+=1)m=i[t],C=c(m,t),p=y.get(C),p!==void 0&&((O=p.a)==null||O.measure(),(I??(I=new Set)).add(p));for(t=0;t<v;t+=1){if(m=i[t],C=c(m,t),p=y.get(C),p===void 0){var S=l?l.e.nodes_start:n;h=Qe(S,e,h,h===null?e.first:h.next,m,C,t,o,r),y.set(C,h),w=[],a=[],l=h.next;continue}if(u&&Tt(p,m,t,r),p.e.f&ce&&(We(p.e),_&&((D=p.a)==null||D.unfix(),(I??(I=new Set)).delete(p))),p!==l){if(s!==void 0&&s.has(p)){if(w.length<a.length){var N=a[0],x;h=N.prev;var V=w[0],P=w[w.length-1];for(x=0;x<w.length;x+=1)Ge(w[x],N,n);for(x=0;x<a.length;x+=1)s.delete(a[x]);X(e,V.prev,P.next),X(e,h,V),X(e,P,N),l=N,h=P,t-=1,w=[],a=[]}else s.delete(p),Ge(p,l,n),X(e,p.prev,p.next),X(e,p,h===null?e.first:h.next),X(e,h,p),h=p;continue}for(w=[],a=[];l!==null&&l.k!==C;)(g||!(l.e.f&ce))&&(s??(s=new Set)).add(l),a.push(l),l=l.next;if(l===null)continue;p=l}w.push(p),h=p,l=p.next}if(l!==null||s!==void 0){for(var M=s===void 0?[]:Be(s);l!==null;)(g||!(l.e.f&ce))&&M.push(l),l=l.next;var z=M.length;if(z>0){var f=r&Xe&&v===0?n:null;if(_){for(t=0;t<z;t+=1)(R=M[t].a)==null||R.measure();for(t=0;t<z;t+=1)(T=M[t].a)==null||T.fix()}xt(e,M,f,y)}}_&&pt(()=>{var F;if(I!==void 0)for(p of I)(F=p.a)==null||F.apply()}),Te.first=e.first&&e.first.e,Te.last=h&&h.e}function Tt(i,e,n,o){o&Ie&&Ee(i.v,e),o&Se?Ee(i.i,n):i.i=n}function Qe(i,e,n,o,r,g,c,b,_,u){var v=(_&Ie)!==0,y=(_&ht)===0,k=v?y?ut(r):Ce(r):r,l=_&Se?Ce(c):c,s={i:l,v:k,k:g,a:null,e:null,prev:n,next:o};try{return s.e=ke(()=>b(i,k,l),B),s.e.prev=n&&n.e,s.e.next=o&&o.e,n===null?e.first=s:(n.next=s,n.e.next=s.e),o!==null&&(o.prev=s,o.e.prev=s.e),s}finally{}}function Ge(i,e,n){for(var o=i.next?i.next.e.nodes_start:n,r=e?e.e.nodes_start:n,g=i.e.nodes_start;g!==o;){var c=Je(g);r.before(g),g=c}}function X(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Et(i,e,n,o,r){var g=i,c="",b;Ke(()=>{if(c===(c=e()??"")){B&&be();return}b!==void 0&&(qe(b),b=void 0),c!==""&&(b=ke(()=>{if(B){Z.data;for(var _=be(),u=_;_!==null&&(_.nodeType!==8||_.data!=="");)u=_,_=Je(_);if(_===null)throw ft(),vt;xe(Z,u),g=le(_);return}var v=c+"",y=nt(v);xe(Ye(y),y.lastChild),g.before(y)}))})}const Ct=!0,Cn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ct},Symbol.toStringTag,{value:"Module"}));var Mt=H('<div>&gt; <span class="cursor svelte-44s095">█</span></div>');function Ze(i,e){let n=yt(e,["$$slots","$$events","$$legacy"]);var o=Mt();let r;ue(()=>r=kt(o,r,{class:"prompt-indicator",...n},"svelte-44s095")),E(i,o)}var At=(i,e)=>e(" "),Nt=(i,e)=>e("Escape"),Lt=H('<div class="more-prompt svelte-18s4q0e">-- more -- <!> <div class="commands"><button class="choice svelte-18s4q0e">[space] to continue</button> <span>|</span> <button class="choice svelte-18s4q0e">[esc] to skip</button></div></div>');function Rt(i,e){se(e,!0),ee("stepContext");const n=async u=>{u===" "||u===" "?e.onContinue():u==="Escape"&&e.onSkip()},o=u=>{u.getModifierState,!u.metaKey&&!u.altKey&&!u.ctrlKey&&n(u.key)};he(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}));var r=Lt(),g=L(W(r));Ze(g,{});var c=L(g,2),b=W(c);b.__click=[At,n];var _=L(b,4);_.__click=[Nt,n],q(c),q(r),E(i,r),re()}Ue(["click"]);var Ht=H('<div class="message svelte-1w6rnqt"><!> <span class="last-char svelte-1w6rnqt">0</span></div> <div class="more-prompt svelte-1w6rnqt"><!></div>',1);function de(i,e){se(e,!0);const n=f=>new Promise(O=>setTimeout(O,f)),o="=".repeat(40),r="-".repeat(40),g=f=>{let O="";switch(typeof f){case"string":O=f;break;case"function":O=f();break;default:throw new Error("Invalid message type")}return b.mobile&&(O=O.replace(/[-]{80}/g,r).replace(/[=]{80}/g,o)),O},c=ee("stepContext"),b=ee("screenContext"),_=ee("consoleContext");let u,v,y=K(void 0),k=K(void 0),l=te(()=>g(e.message)),s=K(""),h=K(!e.spool);A(s,J(e.spool?"":d(l)));let I=K(!1),w;const a=async()=>(A(I,!0),c.onNewLine(),new Promise(f=>{w=f})),m=()=>{A(I,!1),w==null||w(!0),w=void 0},C=()=>{m(),A(h,!0)},p=async()=>{const f=d(l).length>1e3?4:2;let O,D=0;for(let R=0;R<d(l).length;R++)if(d(h)){A(s,J(d(l))),c.onNewLine();break}else{R%f===0&&await n(10),A(s,d(s)+d(l)[R]),await $();const T=u==null?void 0:u.getBoundingClientRect().height;T&&(O===void 0||O!==T)&&(c.onNewLine(),d(k)&&_.consoleHeight&&Math.ceil(T+d(k)*1.6-D)>_.consoleHeight&&(await a(),D=T),O=T)}await $(),c.onNewLine(),A(h,!0)};let t=e.message;Me(()=>{e.spool&&e.message!==void 0&&e.message!==t&&d(h)&&(t=e.message,A(s,J(e.spool?"":d(l))),A(h,!e.spool),e.spool&&p())}),Me(()=>{var f;e.spool&&d(h)&&((f=e.onSpooled)==null||f.call(e))});const S=f=>{!f.metaKey&&!f.altKey&&!f.ctrlKey&&!d(I)&&f.key==="Escape"&&A(h,!0)};he(()=>(e.spool?p():c.onNewLine(),window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}));var N=Ht(),x=U(N),V=W(x);Et(V,()=>d(s).replaceAll(/\n/g,"<br/>"));var P=L(V,2);Ae(P,f=>v=f,()=>v),q(x),Ae(x,f=>u=f,()=>u);var M=L(x,2),z=W(M);Rt(z,{onContinue:m,onSkip:C}),q(M),ue(()=>St(M,"visible",d(I))),Le(x,"clientHeight",f=>A(y,f)),Le(M,"clientHeight",f=>A(k,f)),E(i,N),re()}var Dt=H("<br> <!> <!>",1),Gt=H('<button class="choice svelte-12ctzjl"><!></button>'),Pt=(i,e)=>e("B"),Ft=H('<button class="choice svelte-12ctzjl">[B]ack</button>'),zt=H("<span>|</span>"),jt=(i,e)=>e("M"),Ut=H('<button class="choice svelte-12ctzjl">[M]ain Menu</button>'),Kt=H('<br> <!> <div class="commands"><!> <!> <!></div>',1),Bt=H("<!> <!>",1),Wt=H('<div class="choice svelte-12ctzjl"> </div>'),qt=H("<!> <div> </div>",1),Jt=H('<div class="choices svelte-12ctzjl"><!> <!></div>');function Yt(i,e){se(e,!0);const n=ee("stepContext");let o=we(e,"menuItems",19,()=>[]),r=we(e,"userChoice",15),g=te(()=>{var t;return"-".repeat(((t=e.menuTitle)==null?void 0:t.length)||0)}),c=K(J(!e.spool||!e.menuTitle)),b=K(J(!e.spool||!e.menuTitle)),_=K(J(e.spool?0:o().length));const u=t=>{switch(t.kind){case"url":n.goToUrl(t.link);break;case"step":n.goToStep(t.link);break;case"action":n.takeAction(t.link);break}},v=t=>{if(r()===void 0){const S=o()[t];S&&(r(`${t+1}`),u(S))}},y=async t=>{if(r()===void 0)if(n.canGoBack&&(t==="b"||t==="B"))r("B"),n.goBack();else if(n.canGoToMainMenu&&(t==="m"||t==="M"))r("M"),n.goToStep("main-menu");else{const S=Number.parseInt(t);S!=null&&S!==Number.NaN&&v(S-1)}},k=t=>{t.getModifierState,!t.metaKey&&!t.altKey&&!t.ctrlKey&&y(t.key)};he(()=>(window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}));const l=()=>{A(c,!0)},s=()=>{A(b,!0)},h=()=>{var t;bt(_),d(_)>=o().length&&((t=e.onSpooled)==null||t.call(e))},I=(t,S)=>{const N=typeof t.text=="function"?t.text():t.text;switch(t.kind){case"url":return`${S+1}. ${N} [↗]`;case"step":case"action":return`${S+1}. ${N}`}};var w=Jt(),a=W(w);{var m=t=>{var S=Dt(),N=L(U(S),2);de(N,{get message(){return e.menuTitle},spool:!0,onSpooled:l});var x=L(N,2);de(x,{get message(){return d(g)},spool:!0,onSpooled:s}),E(t,S)};j(a,t=>{e.menuTitle&&t(m)})}var C=L(a,2);{var p=t=>{var S=_e(),N=U(S);{var x=P=>{var M=Bt(),z=U(M);ye(z,17,o,De,(D,R,T)=>{var F=_e(),oe=U(F);{var me=ne=>{var ie=Gt();ie.__click=()=>v(T);var pe=W(ie),ge=te(()=>I(d(R),T)),G=te(()=>e.spool&&T>=d(_));de(pe,{get message(){return d(ge)},get spool(){return d(G)},onSpooled:h}),q(ie),E(ne,ie)};j(oe,ne=>{(!e.spool||T<=d(_))&&ne(me)})}E(D,F)});var f=L(z,2);{var O=D=>{var R=Kt(),T=L(U(R),2);Ze(T,{});var F=L(T,2),oe=W(F);{var me=G=>{var Q=Ft();Q.__click=[Pt,y],E(G,Q)};j(oe,G=>{n.canGoBack&&G(me)})}var ne=L(oe,2);{var ie=G=>{var Q=zt();E(G,Q)};j(ne,G=>{n.canGoBack&&n.canGoToMainMenu&&G(ie)})}var pe=L(ne,2);{var ge=G=>{var Q=Ut();Q.__click=[jt,y],E(G,Q)};j(pe,G=>{n.canGoToMainMenu&&G(ge)})}q(F),E(D,R)};j(f,D=>{d(_)>=o().length&&D(O)})}E(P,M)},V=P=>{var M=qt(),z=U(M);ye(z,17,o,De,(D,R,T)=>{var F=Wt(),oe=W(F,!0);ue(()=>Ne(oe,I(d(R),T))),q(F),E(D,F)});var f=L(z,2),O=W(f);q(f),ue(()=>Ne(O,`> ${r()??""}`)),E(P,M)};j(N,P=>{r()===void 0?P(x):P(V,!1)})}E(t,S)};j(C,t=>{d(c)&&d(b)&&t(p)})}q(w),E(i,w),re()}Ue(["click"]);var Xt=H("<!> <!>",1);function Vt(i,e){se(e,!0);const n=ee("stepContext");let o=we(e,"step",7),r=K(J(!o().message||o().displayed)),g=K(J(!o().menuItems||o().menuItems.length===0||o().displayed));const c=s=>new Promise(h=>setTimeout(h,s)),b=async()=>{o().holdMs&&await c(o().holdMs),A(r,!0),o().autoNextStepId&&(o().displayed=!0,n.goToStep(o().autoNextStepId))},_=async()=>{A(g,!0),o().displayed=!0};var u=Xt(),v=U(u);{var y=s=>{var h=te(()=>!d(r));de(s,{get message(){return o().message},get spool(){return d(h)},onSpooled:b})};j(v,s=>{o().message&&s(y)})}var k=L(v,2);{var l=s=>{var h=_e(),I=U(h);{var w=a=>{var m=te(()=>!d(g));Yt(a,{get menuTitle(){return o().menuTitle},get menuItems(){return o().menuItems},get spool(){return d(m)},onSpooled:_,get userChoice(){return o().userChoice},set userChoice(C){o().userChoice=C}})};j(I,a=>{o().autoNextStepId||a(w)})}E(s,h)};j(k,s=>{d(r)&&s(l)})}E(i,u),re()}const Qt=`
               _____ ______ ____  ______ ______    _____ ______   __
              / ____|  ____/ __ \\|  ____|  ____|  / ____/ __ \\ \\ / /
             | |  __| |__ | |  | | |__  | |__    | |   | |  | \\ V / 
             | | |_ |  __|| |  | |  __| |  __|   | |   | |  | |> <  
             | |__| | |___| |__| | |    | |      | |___| |__| / . \\ 
              \\_____|______\\____/|_|    |_|       \\_____\\____/_/ \\_\\

`,Zt=`
                  ___  ____  __  ____  ____     ___  __  _  _ 
                 / __)(  __)/  \\(  __)(  __)   / __)/  \\( \\/ )
                ( (_ \\ ) _)(  O )) _)  ) _)   ( (__(  O ))  ( 
                 \\___/(____)\\__/(__)  (__)     \\___)\\__/(_/\\_)

`,$t=`
░░      ░░░        ░░░      ░░░       ░░       ░░░░░      ░░░░      ░░░  ░░░░  ░
▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒
▓  ▓▓▓   ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓     ▓▓▓▓     ▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓
█  ████  ██  ████████  ████  ██  ███████  █████████  ████  ██  ████  ███  ██  ██
██      ███        ███      ███  ███████  ██████████      ████      ███  ████  █
`,eo=`
                 ____ _____ ___  _____ _____    ____ _____  __
                / ___| ____/ _ \\|  ___|  ___|  / ___/ _ \\ \\/ /
               | |  _|  _|| | | | |_  | |_    | |  | | | \\  / 
               | |_| | |__| |_| |  _| |  _|   | |__| |_| /  \\ 
                \\____|_____\\___/|_|   |_|      \\____\\___/_/\\_\\

`,to=`

       ██████  ███████  ██████  ███████ ███████      ██████  ██████  ██   ██ 
      ██       ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
      ██   ███ █████   ██    ██ █████   █████       ██      ██    ██   ███   
      ██    ██ ██      ██    ██ ██      ██          ██      ██    ██  ██ ██  
       ██████  ███████  ██████  ██      ██           ██████  ██████  ██   ██ 

`,oo=`

        █████╗ ███████╗ ██████╗ ███████╗███████╗     ██████╗ ██████╗ ██╗  ██╗
      ██╔════╝ ██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██╔═══██╗╚██╗██╔╝
      ██║  ███╗█████╗  ██║   ██║█████╗  █████╗      ██║     ██║   ██║ ╚███╔╝ 
      ██║   ██║██╔══╝  ██║   ██║██╔══╝  ██╔══╝      ██║     ██║   ██║ ██╔██╗ 
      ╚██████╔╝███████╗╚██████╔╝██║     ██║         ╚██████╗╚██████╔╝██╔╝ ██╗
       ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝          ╚═════╝ ╚═════╝ ╚═╝  ╚═╝

`,Pe="\n                        .-. .-. .-. .-. .-.   .-. .-. .  . \n                        |.. |-  | | |-  |-    |   | |  )(  \n                        `-' `-' `-' '   '     `-' `-' '  '\n",no=`

                 GGG  EEEE  OOO  FFFF FFFF      CCC  OOO  X   X 
                G     E    O   O F    F        C    O   O  X X  
                G  GG EEE  O   O FFF  FFF      C    O   O   X   
                G   G E    O   O F    F        C    O   O  X X  
                 GGG  EEEE  OOO  F    F         CCC  OOO  X   X 

`,io=`

        #####  ####### ####### ####### #######     #####  ####### #     # 
       #     # #       #     # #       #          #     # #     #  #   #  
       #       #       #     # #       #          #       #     #   # #   
       #  #### #####   #     # #####   #####      #       #     #    #    
       #     # #       #     # #       #          #       #     #   # #   
       #     # #       #     # #       #          #     # #     #  #   #  
        #####  ####### ####### #       #           #####  ####### #     #

`,ao=`

   _|_|_|  _|_|_|_|    _|_|    _|_|_|  _|_|_|     _|_|_|    _|_|    _|      _|  
 _|        _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
 _|  _|_|  _|_|_|    _|    _|  _|_|    _|_|     _|        _|    _|      _|      
 _|    _|  _|        _|    _|  _|      _|       _|        _|    _|    _|  _|    
   _|_|_|  _|_|_|_|    _|_|    _|      _|         _|_|_|    _|_|    _|      _| 

`,so=`
      ______ _______  _____  _______ _______      _______  _____  _     _
     |  ____ |______ |     | |______ |______      |       |     |  \\___/ 
     |_____| |______ |_____| |       |            |_____  |_____| _/   \\_

`,ro=`
       _____   ______  _____   ______  ______       ___     _____  _     _ 
      (_____) (______)(_____) (______)(______)    _(___)_  (_____)( )   ( )
     (_)  ___ (_)__  (_)   (_)(_)__   (_)__      (_)   (_)(_)   (_)(_)_(_) 
     (_) (___)(____) (_)   (_)(____)  (____)     (_)    _ (_)   (_) (___)  
     (_)___(_)(_)____(_)___(_)(_)     (_)        (_)___(_)(_)___(_)(_) (_) 
      (_____) (______)(_____) (_)     (_)          (___)   (_____)(_)   (_)

`,lo=`
==      ===       ====    ====       ==       =======     =====    ====   ==   =
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=  ========  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ========     ====  ====  ==     ====     =======  ========  ====  =====  ====
=  ===   ==  =======  ====  ==  =======  ==========  ========  ====  ====    ===
=  ====  ==  =======  ====  ==  =======  ==========  ========  ====  ===  ==  ==
=   ==   ==  ========  ==  ===  =======  ===========  ===  ===  ==  ====  ==  ==
==      ===       ====    ====  =======  ============     =====    ====  ====  =
`,co=`

                o-o  o--o  o-o  o--o o--o       o-o  o-o  o   o 
               o     |    o   o |    |         /    o   o  \\ /  
               |  -o O-o  |   | O-o  O-o      O     |   |   O   
               o   | |    o   o |    |         \\    o   o  / \\  
                o-o  o--o  o-o  o    o          o-o  o-o  o   o 

`,Fe=[Pe,Qt,Zt,$t,eo,to,oo,Pe,no,io,ao,so,ro,lo,co],_o=`

            | Talented Developer | Thoughtful Leader | Kind Person |            
`,uo=`
================================================================================`,ho="================================================================================",mo=`
==============================================================

            G E O F F  C O X            

--------|  Talented Developer  |--------

--------|   Thoughtful Leader  |--------

--------|     Kind Person      |--------

==============================================================`,po=()=>ee("screenContext").mobile?mo:uo+Fe[Math.floor(Math.random()*Fe.length)]+ho+_o,go={id:"banner",message:po,autoNextStepId:"news"},fo=`
---
binary-search
---

A binary search algorithm

FEATURES

- Typescript defintions
- ES and CommonJS modules
- Bonus: If the value is not found, the index range nearest to the value is 
  provided.

TECHNOLOGY

- Typescript

LICENSE: MIT`,vo={id:"binary-search",message:fo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/binary-search/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/binary-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/binary-search/blob/main/lib/README.md"}]},bo=`
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
`,wo={id:"experience",message:bo},yo=`
---
pretty-good-nlp
---

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

LICENSE: MIT`,ko={id:"pretty-good-nlp",message:yo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/pretty-good-nlp/"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/pretty-good-nlp"}]},So=`
---
PROJECTS
---

I spend many evenings and weekends writing my own code.

When I think it might be useful to others, I publish it. I work hard to make the 
code clean, fast, well-documented, and easy to use.

Let me know if you find any bugs or have any suggestions for improvement.`,Io={id:"projects",message:So,autoNextStepId:"projects-menu"},xo={id:"projects-menu",menuTitle:"PROJECTS",menuItems:[{kind:"step",text:"binary-search",link:"binary-search"},{kind:"step",text:"pretty-good-nlp",link:"pretty-good-nlp"},{kind:"step",text:"react-splitter",link:"react-splitter"},{kind:"step",text:"recoil-examples",link:"recoil-examples"},{kind:"step",text:"sterling-svelte -*| NEW |*-",link:"sterling-svelte"},{kind:"step",text:"svelte-splitter",link:"svelte-splitter"},{kind:"step",text:"trie-search",link:"trie-search"}]},Oo=`
---
react-splitter
---

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

LICENSE: MIT`,To={id:"react-splitter",message:Oo,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/react-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/react-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/react-splitter"}]},Eo=`
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

LICENSE: MIT`,Co={id:"recoil-examples",message:Eo,menuItems:[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/recoil-examples"},{kind:"url",text:"Recoil JS Official Site",link:"https://recoiljs.org/"}]},Mo=`
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
 
I love learning new languages and technologies. It is fascinating to figure out their advantages and how they influence architecture and design. I try to balance the “T” of knowledge and capability; breadth of multiple technologies with depth in a few. Every time I learn something outside of my work projects, I always find it useful later on.`,Ao={id:"skills",message:Mo},No=`
---
sterling-svelte
---

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

LICENSE: MIT`,Lo={id:"sterling-svelte",message:No,menuItems:[{kind:"url",text:"Documentation",link:"https://geoffcox.github.io/docs/sterling-svelte/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/sterling-svelte"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/sterling-svelte"}]},Ro=`
---
svelte-splitter
---

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

LICENSE: MIT`,Ho={id:"svelte-splitter",message:Ro,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/svelte-splitter/"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/svelte-splitter"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/svelte-splitter"}]},Do=`
---
trie-search
---

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

LICENSE: MIT`,Go={id:"trie-search",message:Do,menuItems:[{kind:"url",text:"Demo",link:"https://geoffcox.github.io/demos/trie-search"},{kind:"url",text:"NPM",link:"https://www.npmjs.com/package/@geoffcox/trie-search"},{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox/trie-search/blob/main/lib/README.md"}]},Po=`

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
                                                            
            This section still under construction.</pre>`,Fo={id:"under-construction",message:Po},$e={id:"main-menu",menuTitle:"MAIN MENU",menuItems:[{kind:"step",text:"Experience",link:"experience"},{kind:"step",text:"Skills",link:"skills"},{kind:"step",text:"Accomplishments",link:"accomplishments"},{kind:"step",text:"Projects",link:"projects"},{kind:"step",text:"Contact Me",link:"contact"},{kind:"step",text:"Curations",link:"curations"},{kind:"url",text:"Paper Resume",link:"https://geoffcox.github.io/geoffcoxresume.pdf"}]},zo=`
---
NEWS
---

[Jan 2025] sterling-svelte 2.0 is out!`,jo={id:"news",message:zo,autoNextStepId:"main-menu"},Uo=`
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

----------`,Ko={id:"accomplishments",message:Uo},Bo=`
---
CONTACT ME
---

You can browse all my open source projects on GitHub, message me on LinkedIn, 
or follow me on BlueSky for whatever random thought pops in my head.

`,Wo=[{kind:"url",text:"GitHub",link:"https://github.com/GeoffCox"},{kind:"url",text:"LinkedIn",link:"https://www.linkedin.com/in/geoffcoxlive/"},{kind:"url",text:"BlueSky",link:"https://bsky.app/profile/geoffcoxlive.bsky.social"}],qo={id:"contact",message:Bo,menuTitle:"LINKS",menuItems:Wo},Jo=`
---
CURATIONS
---

`,ze=[`Now so much I know
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

- Alan Kay`],Yo=()=>Jo+ze[Math.floor(Math.random()*ze.length)],Xo={id:"curations",message:Yo,menuTitle:"READ MORE",menuItems:[{kind:"step",text:"Tales of Interest",link:"stories"},{kind:"step",text:"Show me another quote",link:"curations"},{kind:"step",text:"About this website",link:"about-site"},{kind:"step",text:"Bookshelf",link:"bookshelf"}]},et={id:"modem-start",message:"Originating call...",holdMs:750,autoNextStepId:"modem-dialing"},Vo={id:"modem-dialing",message:"Micromodem: dialing...",holdMs:1e3,autoNextStepId:"modem-carrier"},Qo={id:"modem-carrier",message:"Awaiting carrier...",holdMs:750,autoNextStepId:"modem-connect"},Zo={id:"modem-connect",message:"Micromodem: connect",holdMs:500,autoNextStepId:"modem-baud"},$o={id:"modem-baud",message:"56kbps v.90/ISDN/33.6 kbps v.34/USR HST",holdMs:1e3,autoNextStepId:"modem-online"},en={id:"modem-online",message:`

geoffcox.github.io online`,holdMs:250,autoNextStepId:"banner"},tn=Array.from({length:1e3},(i,e)=>e+1).map((i,e)=>(e+1).toString()).join(`
`),on={id:"long-text",message:tn},nn=()=>`Change theme to '${Ve()}'`,an={id:"settings",menuTitle:"SETTINGS",menuItems:[{kind:"action",text:nn,link:"cycle-theme"}]},sn=`
geoffcox.github.io online

===
                             G E O F F  C O X
===
            | Talented Developer | Thoughtful Leader | Kind Person |

`,rn={id:"mini-banner",message:sn},ln={id:"stories",menuTitle:"TALES OF INTEREST",menuItems:[{kind:"step",text:"Speed Estimation",link:"speed-estimation"},{kind:"step",text:"Why I love Svelte",link:"i-love-svelte"},{kind:"step",text:"Unpredictable Users",link:"unpredictable-users"}]},cn=`
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
`,dn={id:"speed-estimation",message:cn},_n=`
--------------------------------------------------------------------------------
Unpredictable Users
--------------------------------------------------------------------------------

Back in the days of Windows 95, my brother called me in a panic. He reported that his drive was out of space and he couldn't figure out what to do.

I walked him through selecting some files he didn't need anymore. When I told him to drag the files to the recycle bin in Windows Explorer, he couldn't find it. I asked him to look on his desktop and he reported it wasn't there either.

He then told me what he had done the day before while trying to clean up files on his desktop. He had somehow dragged the recycle bin icon around and ended up creating a shortcut to the recycle bin. He now had two recycle bins on his desktop. He dragged one on to to the other and then emptied the recycle bin.

Turns out he dragged the real recycle bin to the recycle bin shortcut. This put the recycle bin control panel app into the recycle bin. When he emptied the recycle bin, the control panel app deleted itself!

The OS went through the recycle bin app for soft and hard deletes. Ctrl+Del didn't do anything. We were able to open a command prompt and delete files, but this was too tedious for him to do regularly without my help. He just kind of lived with a too full drive until he bought his next computer.

I doubt any developer or tester could have predicted a user would use a shortcut to the recycle bin to delete the recycle bin.
`,un={id:"unpredictable-users",message:_n},hn=`
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
`,mn={id:"i-love-svelte",message:hn},pn=`
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
`,gn={id:"about-site",message:pn},fn={id:"bookshelf",menuTitle:"BOOKSHELF",menuItems:[{kind:"url",text:"Clean Architecture: A Craftsman's Guide to Software Structure and Design",link:"https://isbndb.com/book/9780134494166"},{kind:"url",text:"Design Patterns: Elements of Reusable Object-Oriented Software",link:"https://isbndb.com/book/9788178081359"},{kind:"url",text:"Patterns of Enterprise Application Architecture",link:"https://isbndb.com/book/9788131794029"},{kind:"url",text:"Refactoring: Improving the Design of Existing Code",link:"https://isbndb.com/book/9780201485677"},{kind:"url",text:"AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis",link:"https://isbndb.com/book/9780471197133"}]},tt=[et,Vo,Qo,Zo,$o,en],ot=[go,jo,rn],vn=[...tt,...ot,$e,wo,Ao,Ko,Io,xo,vo,ko,To,Co,Lo,Ho,Go,qo,Xo,gn,fn,ln,mn,dn,un,an,Fo,on],je=et.id,bn=[...tt,...ot,$e].map(i=>i.id),ae={};vn.forEach(i=>{ae[i.id]=i});const Y=J({steps:[]}),ve=[];function Mn(i,e){se(e,!0);const n=async a=>{!ae[a]||bn.includes(a)?Y.steps.push({...ae[je]}):Y.steps.push({...ae.banner,autoNextStepId:a})};let o=te(()=>Y.steps[Y.steps.length-1]);const r=async a=>{await $(),d(o)&&!d(o).autoNextStepId&&ve.push(d(o).id);const m=ae[a];m&&Re(`#${m.id}`,He.state),m&&Y.steps.push({...m})},g=async a=>{await $(),window.open(a,"_blank"),d(o)&&(d(o).userChoice=void 0)},c=async a=>{switch(await $(),a){case"cycle-theme":It.theme=Ve();break}d(o)&&(d(o).userChoice=void 0)},b=async()=>{await $();const a=ve.pop();if(a){const m=ae[a];m&&(Re(`#${m.id}`,He.state),Y.steps.push({...m}))}},_={behavior:"auto",block:"end"};let u;const v=async()=>{await $(),u==null||u.scrollIntoView(_)};let y,k=0;const l=()=>{k=k===0?5:k+1,y===void 0&&(y=setInterval(()=>{var a,m;(a=document.querySelector(".drive-light"))==null||a.classList.toggle("on"),k--,k===0&&(clearInterval(y),y=void 0,(m=document.querySelector(".drive-light"))==null||m.classList.remove("on"))},50))};wt("stepContext",{get canGoBack(){return ve.length>0},get canGoToMainMenu(){var a;return((a=d(o))==null?void 0:a.id)!=="main-menu"},goToStep:r,goToUrl:g,goBack:b,takeAction:c,onNewLine:async()=>{l(),v()}}),he(()=>{if(u=document.getElementById("ScrollAnchor"),Y.steps.length===0)if(location.hash){const a=location.hash.substring(1);n(a)}else r(je)});var I=_e(),w=U(I);ye(w,19,()=>Y.steps,(a,m)=>`${a.id}-${m}`,(a,m)=>{Vt(a,{get step(){return d(m)}})}),E(i,I),re()}export{Mn as component,Cn as universal};
