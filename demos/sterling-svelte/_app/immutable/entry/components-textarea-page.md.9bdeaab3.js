import{S as Ge,i as Je,s as Ke,y as S,z as x,A as D,g as P,d as R,B as y,w as F,T as Q,U as Y,a as w,c as H,b as i,h as p,k as v,q as _,l as b,m as E,r as m,n as Ce,H as $,u as st,e as Ue,v as lt,f as nt,R as at,C as Qe}from"../chunks/index.3ab8247a.js";import{I as ot}from"../chunks/Input.579aebb3.js";import{T as rt}from"../chunks/TextArea.af0b880c.js";import{P as pt}from"../chunks/Playground.ff5e0b5e.js";import{C as Pe}from"../chunks/Checkbox.5903eac6.js";import{S as ct}from"../chunks/Select.4af3d4b2.js";import{L as ft}from"../chunks/ListItem.2b3ae9fa.js";import{L as Xe}from"../chunks/Label.c5bd548f.js";/* empty css                                                     *//* empty css                                                      *//* empty css                                                       *//* empty css                                                  *//* empty css                                                      *//* empty css                                                     *//* empty css                                                          *//* empty css                                                     *//* empty css                                                   *//* empty css                                                   *//* empty css                                                       *//* empty css                                                      *//* empty css                                                         *//* empty css                                                            *//* empty css                                                       *//* empty css                                                    *//* empty css                                                     *//* empty css                                                      *//* empty css                                                   *//* empty css                                                          *//* empty css                                                              *//* empty css                                                       */const Ze=["none","horizontal","vertical","both"];function je(o,e,a){const n=o.slice();return n[16]=e[a],n}function ut(o){let e,a,n;function l(t){o[12](t)}let u={colorful:o[1],disabled:o[2],placeholder:o[3],resize:o[6],autoHeight:o[4]};return o[5]!==void 0&&(u.value=o[5]),e=new rt({props:u}),F.push(()=>Q(e,"value",l,o[5])),e.$on("input",o[13]),e.$on("change",o[14]),{c(){S(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,c){D(e,t,c),n=!0},p(t,c){const f={};c&2&&(f.colorful=t[1]),c&4&&(f.disabled=t[2]),c&8&&(f.placeholder=t[3]),c&64&&(f.resize=t[6]),c&16&&(f.autoHeight=t[4]),!a&&c&32&&(a=!0,f.value=t[5],Y(()=>a=!1)),e.$set(f)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function it(o){let e;return{c(){e=_("colorful")},l(a){e=m(a,"colorful")},m(a,n){i(a,e,n)},d(a){a&&p(e)}}}function $t(o){let e;return{c(){e=_("disabled")},l(a){e=m(a,"disabled")},m(a,n){i(a,e,n)},d(a){a&&p(e)}}}function _t(o){let e,a,n;function l(t){o[9](t)}let u={composed:!0};return o[3]!==void 0&&(u.value=o[3]),e=new ot({props:u}),F.push(()=>Q(e,"value",l,o[3])),{c(){S(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,c){D(e,t,c),n=!0},p(t,c){const f={};!a&&c&8&&(a=!0,f.value=t[3],Y(()=>a=!1)),e.$set(f)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function mt(o){let e=o[16]+"",a;return{c(){a=_(e)},l(n){a=m(n,e)},m(n,l){i(n,a,l)},p:Qe,d(n){n&&p(a)}}}function Fe(o){let e,a;return e=new ft({props:{value:o[16],$$slots:{default:[mt]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,l){D(e,n,l),a=!0},p(n,l){const u={};l&524288&&(u.$$scope={dirty:l,ctx:n}),e.$set(u)},i(n){a||(P(e.$$.fragment,n),a=!0)},o(n){R(e.$$.fragment,n),a=!1},d(n){y(e,n)}}}function dt(o){let e,a,n=Ze,l=[];for(let t=0;t<n.length;t+=1)l[t]=Fe(je(o,n,t));const u=t=>R(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Ue()},l(t){for(let c=0;c<l.length;c+=1)l[c].l(t);e=Ue()},m(t,c){for(let f=0;f<l.length;f+=1)l[f].m(t,c);i(t,e,c),a=!0},p(t,c){if(c&0){n=Ze;let f;for(f=0;f<n.length;f+=1){const g=je(t,n,f);l[f]?(l[f].p(g,c),P(l[f],1)):(l[f]=Fe(g),l[f].c(),P(l[f],1),l[f].m(e.parentNode,e))}for(lt(),f=n.length;f<l.length;f+=1)u(f);nt()}},i(t){if(!a){for(let c=0;c<n.length;c+=1)P(l[c]);a=!0}},o(t){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)R(l[c]);a=!1},d(t){at(l,t),t&&p(e)}}}function ht(o){let e,a,n;function l(t){o[10](t)}let u={composed:!0,$$slots:{default:[dt]},$$scope:{ctx:o}};return o[6]!==void 0&&(u.selectedValue=o[6]),e=new ct({props:u}),F.push(()=>Q(e,"selectedValue",l,o[6])),{c(){S(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,c){D(e,t,c),n=!0},p(t,c){const f={};c&524288&&(f.$$scope={dirty:c,ctx:t}),!a&&c&64&&(a=!0,f.selectedValue=t[6],Y(()=>a=!1)),e.$set(f)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function kt(o){let e;return{c(){e=_("Auto height")},l(a){e=m(a,"Auto height")},m(a,n){i(a,e,n)},d(a){a&&p(e)}}}function gt(o){let e,a,n,l,u,t,c,f,g,C,A,O,M;function W(r){o[7](r)}let I={$$slots:{default:[it]},$$scope:{ctx:o}};o[1]!==void 0&&(I.checked=o[1]),e=new Pe({props:I}),F.push(()=>Q(e,"checked",W,o[1]));function z(r){o[8](r)}let G={$$slots:{default:[$t]},$$scope:{ctx:o}};o[2]!==void 0&&(G.checked=o[2]),l=new Pe({props:G}),F.push(()=>Q(l,"checked",z,o[2])),c=new Xe({props:{text:"placeholder",$$slots:{default:[_t]},$$scope:{ctx:o}}}),g=new Xe({props:{text:"resize",forwardClick:!0,$$slots:{default:[ht]},$$scope:{ctx:o}}});function B(r){o[11](r)}let k={$$slots:{default:[kt]},$$scope:{ctx:o}};return o[4]!==void 0&&(k.checked=o[4]),A=new Pe({props:k}),F.push(()=>Q(A,"checked",B,o[4])),{c(){S(e.$$.fragment),n=w(),S(l.$$.fragment),t=w(),S(c.$$.fragment),f=w(),S(g.$$.fragment),C=w(),S(A.$$.fragment)},l(r){x(e.$$.fragment,r),n=H(r),x(l.$$.fragment,r),t=H(r),x(c.$$.fragment,r),f=H(r),x(g.$$.fragment,r),C=H(r),x(A.$$.fragment,r)},m(r,d){D(e,r,d),i(r,n,d),D(l,r,d),i(r,t,d),D(c,r,d),i(r,f,d),D(g,r,d),i(r,C,d),D(A,r,d),M=!0},p(r,d){const V={};d&524288&&(V.$$scope={dirty:d,ctx:r}),!a&&d&2&&(a=!0,V.checked=r[1],Y(()=>a=!1)),e.$set(V);const N={};d&524288&&(N.$$scope={dirty:d,ctx:r}),!u&&d&4&&(u=!0,N.checked=r[2],Y(()=>u=!1)),l.$set(N);const U={};d&524296&&(U.$$scope={dirty:d,ctx:r}),c.$set(U);const q={};d&524352&&(q.$$scope={dirty:d,ctx:r}),g.$set(q);const X={};d&524288&&(X.$$scope={dirty:d,ctx:r}),!O&&d&16&&(O=!0,X.checked=r[4],Y(()=>O=!1)),A.$set(X)},i(r){M||(P(e.$$.fragment,r),P(l.$$.fragment,r),P(c.$$.fragment,r),P(g.$$.fragment,r),P(A.$$.fragment,r),M=!0)},o(r){R(e.$$.fragment,r),R(l.$$.fragment,r),R(c.$$.fragment,r),R(g.$$.fragment,r),R(A.$$.fragment,r),M=!1},d(r){y(e,r),r&&p(n),y(l,r),r&&p(t),y(c,r),r&&p(f),y(g,r),r&&p(C),y(A,r)}}}function vt(o){let e,a,n;return{c(){e=v("div"),a=_("value: "),n=_(o[5]),this.h()},l(l){e=b(l,"DIV",{class:!0});var u=E(e);a=m(u,"value: "),n=m(u,o[5]),u.forEach(p),this.h()},h(){Ce(e,"class","value")},m(l,u){i(l,e,u),$(e,a),$(e,n)},p(l,u){u&32&&st(n,l[5])},d(l){l&&p(e)}}}function bt(o){let e,a,n={$$slots:{status:[vt],props:[gt],component:[ut]},$$scope:{ctx:o}};return e=new pt({props:n}),o[15](e),{c(){S(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,u){D(e,l,u),a=!0},p(l,[u]){const t={};u&524415&&(t.$$scope={dirty:u,ctx:l}),e.$set(t)},i(l){a||(P(e.$$.fragment,l),a=!0)},o(l){R(e.$$.fragment,l),a=!1},d(l){o[15](null),y(e,l)}}}function Et(o,e,a){let n,l=!1,u=!1,t="Type your prose here",c=!1,f="",g="none";function C(k){l=k,a(1,l)}function A(k){u=k,a(2,u)}function O(k){t=k,a(3,t)}function M(k){g=k,a(6,g)}function W(k){c=k,a(4,c)}function I(k){f=k,a(5,f)}const z=()=>n.recordEvent("input"),G=()=>n.recordEvent("change");function B(k){F[k?"unshift":"push"](()=>{n=k,a(0,n)})}return[n,l,u,t,c,f,g,C,A,O,M,W,I,z,G,B]}class Tt extends Ge{constructor(e){super(),Je(this,e,Et,bt,Ke,{})}}function wt(o){let e,a,n,l,u,t,c,f,g,C,A,O,M,W,I,z,G=`<code class="language-ts"><span class="token comment">/** When true, the text area will resize itself vertically to fit the current text.*/</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> autoHeight <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** When true, applies colorful theme styles. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> colorful <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">/** Sets the resize handle in the lower corner of the text area. */</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> resize<span class="token operator">:</span> TextAreaResize <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span></code>`,B,k,r,d,V,N,U,q,X,oe,T,$e,ee,_e,me,te,de,he,se,ke,ge,le,ve,be,ne,Ee,Te,ae,we,He,re,J,Ae,pe,Z,Ye=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,ce,K,Le,fe,j,ue;return j=new Tt({}),{c(){e=v("h1"),a=_("TextArea"),n=w(),l=v("p"),u=_("A styled HTML "),t=v("code"),c=_("textarea"),f=_(" element."),g=w(),C=v("h2"),A=_("Props"),O=w(),M=v("p"),W=_("HTMLTextArea props are included."),I=w(),z=v("pre"),B=w(),k=v("h2"),r=_("Events"),d=w(),V=v("p"),N=_("HTMLTextArea events are included."),U=w(),q=v("h2"),X=_("Methods"),oe=w(),T=v("p"),$e=_("HTMLTextArea "),ee=v("code"),_e=_("blur"),me=_(", "),te=v("code"),de=_("click"),he=_(", "),se=v("code"),ke=_("focus"),ge=_(", "),le=v("code"),ve=_("select"),be=_(", "),ne=v("code"),Ee=_("setRangeText"),Te=_(" and "),ae=v("code"),we=_("setSelectionRanges"),He=_(" methods are included."),re=w(),J=v("h2"),Ae=_("Anatomy"),pe=w(),Z=v("pre"),ce=w(),K=v("h2"),Le=_("Playground"),fe=w(),S(j.$$.fragment),this.h()},l(s){e=b(s,"H1",{});var h=E(e);a=m(h,"TextArea"),h.forEach(p),n=H(s),l=b(s,"P",{});var ie=E(l);u=m(ie,"A styled HTML "),t=b(ie,"CODE",{});var Me=E(t);c=m(Me,"textarea"),Me.forEach(p),f=m(ie," element."),ie.forEach(p),g=H(s),C=b(s,"H2",{});var Re=E(C);A=m(Re,"Props"),Re.forEach(p),O=H(s),M=b(s,"P",{});var ze=E(M);W=m(ze,"HTMLTextArea props are included."),ze.forEach(p),I=H(s),z=b(s,"PRE",{class:!0});var et=E(z);et.forEach(p),B=H(s),k=b(s,"H2",{});var Se=E(k);r=m(Se,"Events"),Se.forEach(p),d=H(s),V=b(s,"P",{});var xe=E(V);N=m(xe,"HTMLTextArea events are included."),xe.forEach(p),U=H(s),q=b(s,"H2",{});var De=E(q);X=m(De,"Methods"),De.forEach(p),oe=H(s),T=b(s,"P",{});var L=E(T);$e=m(L,"HTMLTextArea "),ee=b(L,"CODE",{});var ye=E(ee);_e=m(ye,"blur"),ye.forEach(p),me=m(L,", "),te=b(L,"CODE",{});var Oe=E(te);de=m(Oe,"click"),Oe.forEach(p),he=m(L,", "),se=b(L,"CODE",{});var Ve=E(se);ke=m(Ve,"focus"),Ve.forEach(p),ge=m(L,", "),le=b(L,"CODE",{});var Ie=E(le);ve=m(Ie,"select"),Ie.forEach(p),be=m(L,", "),ne=b(L,"CODE",{});var qe=E(ne);Ee=m(qe,"setRangeText"),qe.forEach(p),Te=m(L," and "),ae=b(L,"CODE",{});var Be=E(ae);we=m(Be,"setSelectionRanges"),Be.forEach(p),He=m(L," methods are included."),L.forEach(p),re=H(s),J=b(s,"H2",{});var We=E(J);Ae=m(We,"Anatomy"),We.forEach(p),pe=H(s),Z=b(s,"PRE",{class:!0});var tt=E(Z);tt.forEach(p),ce=H(s),K=b(s,"H2",{});var Ne=E(K);Le=m(Ne,"Playground"),Ne.forEach(p),fe=H(s),x(j.$$.fragment,s),this.h()},h(){Ce(z,"class","language-ts"),Ce(Z,"class","language-svelte")},m(s,h){i(s,e,h),$(e,a),i(s,n,h),i(s,l,h),$(l,u),$(l,t),$(t,c),$(l,f),i(s,g,h),i(s,C,h),$(C,A),i(s,O,h),i(s,M,h),$(M,W),i(s,I,h),i(s,z,h),z.innerHTML=G,i(s,B,h),i(s,k,h),$(k,r),i(s,d,h),i(s,V,h),$(V,N),i(s,U,h),i(s,q,h),$(q,X),i(s,oe,h),i(s,T,h),$(T,$e),$(T,ee),$(ee,_e),$(T,me),$(T,te),$(te,de),$(T,he),$(T,se),$(se,ke),$(T,ge),$(T,le),$(le,ve),$(T,be),$(T,ne),$(ne,Ee),$(T,Te),$(T,ae),$(ae,we),$(T,He),i(s,re,h),i(s,J,h),$(J,Ae),i(s,pe,h),i(s,Z,h),Z.innerHTML=Ye,i(s,ce,h),i(s,K,h),$(K,Le),i(s,fe,h),D(j,s,h),ue=!0},p:Qe,i(s){ue||(P(j.$$.fragment,s),ue=!0)},o(s){R(j.$$.fragment,s),ue=!1},d(s){s&&p(e),s&&p(n),s&&p(l),s&&p(g),s&&p(C),s&&p(O),s&&p(M),s&&p(I),s&&p(z),s&&p(B),s&&p(k),s&&p(d),s&&p(V),s&&p(U),s&&p(q),s&&p(oe),s&&p(T),s&&p(re),s&&p(J),s&&p(pe),s&&p(Z),s&&p(ce),s&&p(K),s&&p(fe),y(j,s)}}}class ts extends Ge{constructor(e){super(),Je(this,e,null,wt,Ke,{})}}export{ts as default};