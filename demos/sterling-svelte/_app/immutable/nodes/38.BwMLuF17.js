import{s as ae,e as n,a,c as o,g as s,b as u,k as i,n as N,h as l}from"../chunks/scheduler.Bw_xjNFK.js";import{S as ue,i as re}from"../chunks/index.BMoFg06t.js";function de(se){let r,Q="Changelog",M,d,B="1.0.8",k,x,K="<li>Fix packaging. Updates to svelte versions and tsconfig caused creation of a dist folder starting with 1.0.6. This caused problems including the default CSS. Added outdir to fix the issue.</li>",T,f,E="1.0.7",g,p,G="<li>Fix: Callout, Popover, and Menu height set to fit-content causes stretch behavior in Safari. Changed to auto.</li> <li>Fix: Dialog did not allow Popover and Callout to appear above. Updated portaling to support dialog as portal host through context.</li>",U,v,J="1.0.6",S,h,W="<li>Fix: Vertical Tab justification defaulted to flex-end and should be flex-start.</li> <li>Fix: List home/end keys weren’t working because of introduction of intermediate container element to properly scroll. Updated query selectors for first and last list items.</li> <li>Fix: List arrow keys weren’t working when selectedValue set to empty string. Updated conditionals in key handler.</li> <li>Fix: Dialog footer justified footer content as flex-end in default styles which is too opinionated. Removed flex styling from footer.</li> <li>Fix: Label text had unnecessary padding. Removed the padding.</li>",z,m,X="1.0.5",P,C,Y="<li>Fix: Radio and Switch top-level dismissing checked class. Prevented styling above the input.</li> <li>Fix: Checkbox, Input,Radio, and Switch top-level divs need using-keyboard class. This allows for focus-within applied like focus-visible when the intrinsic input is focused.</li> <li>Fix: Removed Tab content text aligment in vertical layout. No longer needed.</li>",R,c,Z="1.0.4",q,b,$="<li>Fix: Checkbox top-level div missing checked class. Prevented styling above the input.</li> <li>Fix: Label MutationObserver creation was not in onMount. Caused an error if used before parent component mounted.</li> <li>Fix: Callout referenced document rather than globalThis.document. Caused an error if used before parent component mounted.</li> <li>Fix: Popover referenced document rather than globalThis.document. Caused an error if used before parent component mounted.</li> <li>Fix: prefersColorSchemeDark mediaQuery subscriptions not within onMount. Caused an error if used before parent component was mounted.</li> <li>Fix: prefereReducedMotion mediaQuery subscriptions not within onMount. Caused an error if used before parent component was mounted.</li> <li>Fix: usingKeyboard keyborg subscriptions not within onMount. Caused an error if used before parent component was mounted.</li>",D,w,ee="1.0.3",j,y,te="<li>Fix: Dropdown and Select missing an icon slot to allow customization within the button.</li> <li>Fix: Dropdown rendering value div was not conditional on the value slot.</li> <li>Fix: Popover and Callout created ResizeObserver before mount causing a ResizeObserver undefined error.</li> <li>Feature: Added menuVariant to MenuButton to provide style customization.</li> <li>Feature: Added listVariant to Select to provide style customization.</li> <li>Fix: sterling.css Input styles used .label instead of .sterling-input.label .</li>",V,F,ie="1.0.2",A,L,le="(Not published)",O,_,ne="1.0.1",I,H,oe="<li>Fix: Dialog.svelte inadvertly imported sterling.css.</li>";return{c(){r=n("h1"),r.textContent=Q,M=a(),d=n("h2"),d.textContent=B,k=a(),x=n("ul"),x.innerHTML=K,T=a(),f=n("h2"),f.textContent=E,g=a(),p=n("ul"),p.innerHTML=G,U=a(),v=n("h2"),v.textContent=J,S=a(),h=n("ul"),h.innerHTML=W,z=a(),m=n("h2"),m.textContent=X,P=a(),C=n("ul"),C.innerHTML=Y,R=a(),c=n("h2"),c.textContent=Z,q=a(),b=n("ul"),b.innerHTML=$,D=a(),w=n("h2"),w.textContent=ee,j=a(),y=n("ul"),y.innerHTML=te,V=a(),F=n("h2"),F.textContent=ie,A=a(),L=n("p"),L.textContent=le,O=a(),_=n("h2"),_.textContent=ne,I=a(),H=n("ul"),H.innerHTML=oe},l(e){r=o(e,"H1",{"data-svelte-h":!0}),s(r)!=="svelte-1d3b658"&&(r.textContent=Q),M=u(e),d=o(e,"H2",{"data-svelte-h":!0}),s(d)!=="svelte-1xxy7ir"&&(d.textContent=B),k=u(e),x=o(e,"UL",{"data-svelte-h":!0}),s(x)!=="svelte-1mhdznh"&&(x.innerHTML=K),T=u(e),f=o(e,"H2",{"data-svelte-h":!0}),s(f)!=="svelte-kp9fo8"&&(f.textContent=E),g=u(e),p=o(e,"UL",{"data-svelte-h":!0}),s(p)!=="svelte-907ocf"&&(p.innerHTML=G),U=u(e),v=o(e,"H2",{"data-svelte-h":!0}),s(v)!=="svelte-1f5oeql"&&(v.textContent=J),S=u(e),h=o(e,"UL",{"data-svelte-h":!0}),s(h)!=="svelte-1473te0"&&(h.innerHTML=W),z=u(e),m=o(e,"H2",{"data-svelte-h":!0}),s(m)!=="svelte-3abamy"&&(m.textContent=X),P=u(e),C=o(e,"UL",{"data-svelte-h":!0}),s(C)!=="svelte-1hu3uw4"&&(C.innerHTML=Y),R=u(e),c=o(e,"H2",{"data-svelte-h":!0}),s(c)!=="svelte-xqqftr"&&(c.textContent=Z),q=u(e),b=o(e,"UL",{"data-svelte-h":!0}),s(b)!=="svelte-8v3qzt"&&(b.innerHTML=$),D=u(e),w=o(e,"H2",{"data-svelte-h":!0}),s(w)!=="svelte-1jlhdkk"&&(w.textContent=ee),j=u(e),y=o(e,"UL",{"data-svelte-h":!0}),s(y)!=="svelte-1kk0ra2"&&(y.innerHTML=te),V=u(e),F=o(e,"H2",{"data-svelte-h":!0}),s(F)!=="svelte-bfu61"&&(F.textContent=ie),A=u(e),L=o(e,"P",{"data-svelte-h":!0}),s(L)!=="svelte-1fmjz0y"&&(L.textContent=le),O=u(e),_=o(e,"H2",{"data-svelte-h":!0}),s(_)!=="svelte-1249nxi"&&(_.textContent=ne),I=u(e),H=o(e,"UL",{"data-svelte-h":!0}),s(H)!=="svelte-1rnpgdw"&&(H.innerHTML=oe)},m(e,t){i(e,r,t),i(e,M,t),i(e,d,t),i(e,k,t),i(e,x,t),i(e,T,t),i(e,f,t),i(e,g,t),i(e,p,t),i(e,U,t),i(e,v,t),i(e,S,t),i(e,h,t),i(e,z,t),i(e,m,t),i(e,P,t),i(e,C,t),i(e,R,t),i(e,c,t),i(e,q,t),i(e,b,t),i(e,D,t),i(e,w,t),i(e,j,t),i(e,y,t),i(e,V,t),i(e,F,t),i(e,A,t),i(e,L,t),i(e,O,t),i(e,_,t),i(e,I,t),i(e,H,t)},p:N,i:N,o:N,d(e){e&&(l(r),l(M),l(d),l(k),l(x),l(T),l(f),l(g),l(p),l(U),l(v),l(S),l(h),l(z),l(m),l(P),l(C),l(R),l(c),l(q),l(b),l(D),l(w),l(j),l(y),l(V),l(F),l(A),l(L),l(O),l(_),l(I),l(H))}}}class pe extends ue{constructor(r){super(),re(this,r,null,de,ae,{})}}export{pe as component};