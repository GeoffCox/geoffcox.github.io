import{S as Fe,i as Oe,s as qe,w as q,x as V,y as z,f as U,t as Y,z as j,C as x,D as pe,k as m,l as $,m as h,h as s,n as G,b as u,H as ue,a as k,c as L,q as E,r as H,F as p,u as Ve,B as fe}from"../../../../chunks/index-a2f545b7.js";import{I as Te}from"../../../../chunks/Input-8f541c39.js";import{P as Ye}from"../../../../chunks/Playground-10e74055.js";import{C as je}from"../../../../chunks/Checkbox-5131bf2d.js";import"../../../../chunks/TextArea.svelte_svelte_type_style_lang-ae4f99bd.js";/* empty css                                                              *//* empty css                                                             *//* empty css                                                                *//* empty css                                                             *//* empty css                                                             *//* empty css                                                              *//* empty css                                                           *//* empty css                                                               *//* empty css                                                            *//* empty css                                                                     */function Ge(i){let e;return{c(){e=E(i[2])},l(n){e=H(n,i[2])},m(n,a){u(n,e,a)},p(n,a){a&4&&Ve(e,n[2])},d(n){n&&s(e)}}}function Je(i){let e,n,a,l;function f(r){i[8](r)}let v={disabled:i[1],placeholder:i[3],$$slots:{label:[Ge]},$$scope:{ctx:i}};return i[4]!==void 0&&(v.value=i[4]),n=new Te({props:v}),x.push(()=>pe(n,"value",f,i[4])),n.$on("input",i[9]),n.$on("change",i[10]),{c(){e=m("div"),q(n.$$.fragment),this.h()},l(r){e=$(r,"DIV",{class:!0,slot:!0});var c=h(e);V(n.$$.fragment,c),c.forEach(s),this.h()},h(){G(e,"class","component svelte-xngsp5"),G(e,"slot","component")},m(r,c){u(r,e,c),z(n,e,null),l=!0},p(r,c){const T={};c&2&&(T.disabled=r[1]),c&8&&(T.placeholder=r[3]),c&4100&&(T.$$scope={dirty:c,ctx:r}),!a&&c&16&&(a=!0,T.value=r[4],ue(()=>a=!1)),n.$set(T)},i(r){l||(U(n.$$.fragment,r),l=!0)},o(r){Y(n.$$.fragment,r),l=!1},d(r){r&&s(e),j(n)}}}function Ke(i){let e,n;return{c(){e=m("span"),n=E("disabled"),this.h()},l(a){e=$(a,"SPAN",{slot:!0});var l=h(e);n=H(l,"disabled"),l.forEach(s),this.h()},h(){G(e,"slot","label")},m(a,l){u(a,e,l),p(e,n)},p:fe,d(a){a&&s(e)}}}function Qe(i){let e,n;return{c(){e=m("span"),n=E("LABEL (slot)"),this.h()},l(a){e=$(a,"SPAN",{slot:!0});var l=h(e);n=H(l,"LABEL (slot)"),l.forEach(s),this.h()},h(){G(e,"slot","label")},m(a,l){u(a,e,l),p(e,n)},p:fe,d(a){a&&s(e)}}}function We(i){let e,n;return{c(){e=m("span"),n=E("PLACEHOLDER"),this.h()},l(a){e=$(a,"SPAN",{slot:!0});var l=h(e);n=H(l,"PLACEHOLDER"),l.forEach(s),this.h()},h(){G(e,"slot","label")},m(a,l){u(a,e,l),p(e,n)},p:fe,d(a){a&&s(e)}}}function Xe(i){let e,n,a,l,f,v,r,c,T;function P(o){i[5](o)}let w={$$slots:{label:[Ke]},$$scope:{ctx:i}};i[1]!==void 0&&(w.checked=i[1]),e=new je({props:w}),x.push(()=>pe(e,"checked",P,i[1]));function A(o){i[6](o)}let D={$$slots:{label:[Qe]},$$scope:{ctx:i}};i[2]!==void 0&&(D.value=i[2]),l=new Te({props:D}),x.push(()=>pe(l,"value",A,i[2]));function I(o){i[7](o)}let d={$$slots:{label:[We]},$$scope:{ctx:i}};return i[3]!==void 0&&(d.value=i[3]),r=new Te({props:d}),x.push(()=>pe(r,"value",I,i[3])),{c(){q(e.$$.fragment),a=k(),q(l.$$.fragment),v=k(),q(r.$$.fragment)},l(o){V(e.$$.fragment,o),a=L(o),V(l.$$.fragment,o),v=L(o),V(r.$$.fragment,o)},m(o,b){z(e,o,b),u(o,a,b),z(l,o,b),u(o,v,b),z(r,o,b),T=!0},p(o,b){const g={};b&4096&&(g.$$scope={dirty:b,ctx:o}),!n&&b&2&&(n=!0,g.checked=o[1],ue(()=>n=!1)),e.$set(g);const y={};b&4096&&(y.$$scope={dirty:b,ctx:o}),!f&&b&4&&(f=!0,y.value=o[2],ue(()=>f=!1)),l.$set(y);const S={};b&4096&&(S.$$scope={dirty:b,ctx:o}),!c&&b&8&&(c=!0,S.value=o[3],ue(()=>c=!1)),r.$set(S)},i(o){T||(U(e.$$.fragment,o),U(l.$$.fragment,o),U(r.$$.fragment,o),T=!0)},o(o){Y(e.$$.fragment,o),Y(l.$$.fragment,o),Y(r.$$.fragment,o),T=!1},d(o){j(e,o),o&&s(a),j(l,o),o&&s(v),j(r,o)}}}function Ze(i){let e,n,a;return{c(){e=m("div"),n=E("value: "),a=E(i[4])},l(l){e=$(l,"DIV",{});var f=h(e);n=H(f,"value: "),a=H(f,i[4]),f.forEach(s)},m(l,f){u(l,e,f),p(e,n),p(e,a)},p(l,f){f&16&&Ve(a,l[4])},d(l){l&&s(e)}}}function xe(i){let e,n,a={$$slots:{status:[Ze],options:[Xe],component:[Je]},$$scope:{ctx:i}};return e=new Ye({props:a}),i[11](e),{c(){q(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,f){z(e,l,f),n=!0},p(l,[f]){const v={};f&4127&&(v.$$scope={dirty:f,ctx:l}),e.$set(v)},i(l){n||(U(e.$$.fragment,l),n=!0)},o(l){Y(e.$$.fragment,l),n=!1},d(l){i[11](null),j(e,l)}}}function et(i,e,n){let a,l=!1,f="NAME",v="Type your name here",r="";function c(d){l=d,n(1,l)}function T(d){f=d,n(2,f)}function P(d){v=d,n(3,v)}function w(d){r=d,n(4,r)}const A=()=>a.recordEvent("input"),D=()=>a.recordEvent("change");function I(d){x[d?"unshift":"push"](()=>{a=d,n(0,a)})}return[a,l,f,v,r,c,T,P,w,A,D,I]}class tt extends Fe{constructor(e){super(),Oe(this,e,et,xe,qe,{})}}function lt(i){let e,n,a,l,f,v,r,c,T,P,w,A,D,I,d,o,b,g,y,S,ee,M,_e,te,F,me,le,C,ze=`<code class="language-undefined">  label slot
  HTML input</code>`,se,O,$e,ne,N,J,R,K,he,ce,Q,de,ve,W,B,X,be,Ee,Z,He,ae;return P=new tt({}),{c(){e=m("h1"),n=E("Input"),a=k(),l=m("p"),f=E("A styled HTML input element."),v=k(),r=m("h2"),c=E("Playground"),T=k(),q(P.$$.fragment),w=k(),A=m("h2"),D=E("Features"),I=k(),d=m("ul"),o=m("li"),b=E("Identify the value with an associated label."),g=k(),y=m("h2"),S=E("Props"),ee=k(),M=m("p"),_e=E("No additional properties beyond those for the native element."),te=k(),F=m("h2"),me=E("Anatomy"),le=k(),C=m("pre"),se=k(),O=m("h2"),$e=E("Slots"),ne=k(),N=m("table"),J=m("thead"),R=m("tr"),K=m("th"),he=E("Name"),ce=k(),Q=m("th"),de=E("Description"),ve=k(),W=m("tbody"),B=m("tr"),X=m("td"),be=E("label"),Ee=k(),Z=m("td"),He=E("The label associated with the input"),this.h()},l(t){e=$(t,"H1",{});var _=h(e);n=H(_,"Input"),_.forEach(s),a=L(t),l=$(t,"P",{});var ke=h(l);f=H(ke,"A styled HTML input element."),ke.forEach(s),v=L(t),r=$(t,"H2",{});var Le=h(r);c=H(Le,"Playground"),Le.forEach(s),T=L(t),V(P.$$.fragment,t),w=L(t),A=$(t,"H2",{});var Pe=h(A);D=H(Pe,"Features"),Pe.forEach(s),I=L(t),d=$(t,"UL",{});var Ae=h(d);o=$(Ae,"LI",{});var ye=h(o);b=H(ye,"Identify the value with an associated label."),ye.forEach(s),Ae.forEach(s),g=L(t),y=$(t,"H2",{});var we=h(y);S=H(we,"Props"),we.forEach(s),ee=L(t),M=$(t,"P",{});var De=h(M);_e=H(De,"No additional properties beyond those for the native element."),De.forEach(s),te=L(t),F=$(t,"H2",{});var Ie=h(F);me=H(Ie,"Anatomy"),Ie.forEach(s),le=L(t),C=$(t,"PRE",{class:!0});var Ue=h(C);Ue.forEach(s),se=L(t),O=$(t,"H2",{});var ge=h(O);$e=H(ge,"Slots"),ge.forEach(s),ne=L(t),N=$(t,"TABLE",{});var oe=h(N);J=$(oe,"THEAD",{});var Ne=h(J);R=$(Ne,"TR",{});var ie=h(R);K=$(ie,"TH",{});var Se=h(K);he=H(Se,"Name"),Se.forEach(s),ce=L(ie),Q=$(ie,"TH",{});var Ce=h(Q);de=H(Ce,"Description"),Ce.forEach(s),ie.forEach(s),Ne.forEach(s),ve=L(oe),W=$(oe,"TBODY",{});var Re=h(W);B=$(Re,"TR",{});var re=h(B);X=$(re,"TD",{});var Be=h(X);be=H(Be,"label"),Be.forEach(s),Ee=L(re),Z=$(re,"TD",{});var Me=h(Z);He=H(Me,"The label associated with the input"),Me.forEach(s),re.forEach(s),Re.forEach(s),oe.forEach(s),this.h()},h(){G(C,"class","language-undefined")},m(t,_){u(t,e,_),p(e,n),u(t,a,_),u(t,l,_),p(l,f),u(t,v,_),u(t,r,_),p(r,c),u(t,T,_),z(P,t,_),u(t,w,_),u(t,A,_),p(A,D),u(t,I,_),u(t,d,_),p(d,o),p(o,b),u(t,g,_),u(t,y,_),p(y,S),u(t,ee,_),u(t,M,_),p(M,_e),u(t,te,_),u(t,F,_),p(F,me),u(t,le,_),u(t,C,_),C.innerHTML=ze,u(t,se,_),u(t,O,_),p(O,$e),u(t,ne,_),u(t,N,_),p(N,J),p(J,R),p(R,K),p(K,he),p(R,ce),p(R,Q),p(Q,de),p(N,ve),p(N,W),p(W,B),p(B,X),p(X,be),p(B,Ee),p(B,Z),p(Z,He),ae=!0},p:fe,i(t){ae||(U(P.$$.fragment,t),ae=!0)},o(t){Y(P.$$.fragment,t),ae=!1},d(t){t&&s(e),t&&s(a),t&&s(l),t&&s(v),t&&s(r),t&&s(T),j(P,t),t&&s(w),t&&s(A),t&&s(I),t&&s(d),t&&s(g),t&&s(y),t&&s(ee),t&&s(M),t&&s(te),t&&s(F),t&&s(le),t&&s(C),t&&s(se),t&&s(O),t&&s(ne),t&&s(N)}}}class vt extends Fe{constructor(e){super(),Oe(this,e,null,lt,qe,{})}}export{vt as default};