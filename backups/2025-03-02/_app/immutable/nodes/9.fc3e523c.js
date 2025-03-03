import{s as X,a as A,k as F,m as B,e as h,p as c,b as u,q as p,t as f,i as o,w as D,f as s}from"../chunks/scheduler.75f5293f.js";import{S as G,i as M,c as N,b as R,m as U,t as J,a as K,d as V}from"../chunks/index.36074062.js";import{g as Y,a as Z}from"../chunks/spread.8a54911c.js";import{P as tt}from"../chunks/Post.19bcd7ab.js";function et(C){let e,m=`One evening, when I was working on a large customer data store, there was an emergency team
		meeting to figure out how to handle a bug that had incorrectly hashed the Passport
		authentication identifiers in our SQL databases. About 20 of us were called into a 10 person
		conference room to discuss options.`,i,l,n=`A dev on my team reported he had already patched the code and had a SQL script to repair the
		existing data. However, some random guy from another team had been talking to my boss and
		followed us into the meeting room. He decided to take over the meeting and loudly declared that
		we first had to estimate how long running the script would take. My boss, normally outspoken and
		decisive, deferred to him. Everyone assumed he must be important and knew what he was doing.`,r,d,W=`He grabbed a whiteboard pen and starting doing a calculation on the board. He stated that
		updating a row in SQL probably takes at best 1 millisecond when within a transaction. He also
		wrote out a bunch of hash algorithm statements that he said added up to 2.5 milliseconds per
		row. We had 400 million rows that needed updating. He then calculated this would take 400
		million x 3.5 = 1.4 billion milliseconds => 1.4 million seconds => 23 thousand minutes
		=> 388 hours => 16 days.`,k,w,j=`No one could use the system until all the rows were updated. The room was in a panic. I thought
		that we should get the script started ASAP. I pulled the dev and a service engineer into the
		hallway to confirm they had confidence in the script and to ask them to get it running.`,P,g,q=`In the meantime, random guy started drawing up a shift rotation schedule for each person to be
		on site watching the script run over the next 16 days. After 15 minutes, as random guy was
		finalizing the shift schedule, the dev and service engineer returned. The dev whispered in my
		ear the results.`,$,v,z=`Random guy was literally giving a pep talk to the room about how hard it was going to be working
		24 hours a day, but that it would be a worthy and valiant effort. I tried to interrupt him, but
		he wasn't given any opportunity.`,I,y,L=`Finally he finished. I let the room know that we had run the script and it completed in under 15
		minutes. The script updated over 400 rows per millisecond. He said that was impossible as his
		chest caved and he hung his head. I had never seen someone have the wind taken out of their
		sails like him.`,S,_,O=`While this guy was a bit of a blow hard, he followed how developers are taught to estimate
		algorithm duration. We mentally walk through the steps, deciding what each instruction should
		cost, look for loops, and multiply to get the result. The problem was that computation speeds
		had wildly exceeded human imagination. It is hard for humans to understand how fast 1/400th of a
		millisecond goes by.`,H,x,Q=`This was back in 2005. The XBOX 360 had just come out and everyone was amazed at its 240 GFLOPS
		speed. We like to imagine we can understand that kid of processing power. Today, the script
		would likely complete in a few seconds.`,T,b,E=`Humans simply cannot perceive time in those units. We shouldn't manually think through estimates. 
		Instead, we have to run the code in a production/test environment and measure the real performance.
		Don't be that (random) guy.`;return{c(){e=h("p"),e.textContent=m,i=c(),l=h("p"),l.textContent=n,r=c(),d=h("p"),d.textContent=W,k=c(),w=h("p"),w.textContent=j,P=c(),g=h("p"),g.textContent=q,$=c(),v=h("p"),v.textContent=z,I=c(),y=h("p"),y.textContent=L,S=c(),_=h("p"),_.textContent=O,H=c(),x=h("p"),x.textContent=Q,T=c(),b=h("p"),b.textContent=E},l(t){e=u(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-zi2g9c"&&(e.textContent=m),i=f(t),l=u(t,"P",{"data-svelte-h":!0}),p(l)!=="svelte-139gv2o"&&(l.textContent=n),r=f(t),d=u(t,"P",{"data-svelte-h":!0}),p(d)!=="svelte-1qkpabd"&&(d.textContent=W),k=f(t),w=u(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-11ih7t0"&&(w.textContent=j),P=f(t),g=u(t,"P",{"data-svelte-h":!0}),p(g)!=="svelte-o6jwum"&&(g.textContent=q),$=f(t),v=u(t,"P",{"data-svelte-h":!0}),p(v)!=="svelte-1u27gfa"&&(v.textContent=z),I=f(t),y=u(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-jti4uy"&&(y.textContent=L),S=f(t),_=u(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-kf8eoq"&&(_.textContent=O),H=f(t),x=u(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1k14eib"&&(x.textContent=Q),T=f(t),b=u(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-16dmrzs"&&(b.textContent=E)},m(t,a){o(t,e,a),o(t,i,a),o(t,l,a),o(t,r,a),o(t,d,a),o(t,k,a),o(t,w,a),o(t,P,a),o(t,g,a),o(t,$,a),o(t,v,a),o(t,I,a),o(t,y,a),o(t,S,a),o(t,_,a),o(t,H,a),o(t,x,a),o(t,T,a),o(t,b,a)},p:D,d(t){t&&(s(e),s(i),s(l),s(r),s(d),s(k),s(w),s(P),s(g),s($),s(v),s(I),s(y),s(S),s(_),s(H),s(x),s(T),s(b))}}}function nt(C){let e,m;const i=[{category:"Story"},{headline:"Speed Estimation"},{postUrl:"speed-estimation"},C[0]];let l={$$slots:{default:[et]},$$scope:{ctx:C}};for(let n=0;n<i.length;n+=1)l=A(l,i[n]);return e=new tt({props:l}),{c(){N(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){U(e,n,r),m=!0},p(n,[r]){const d=r&1?Y(i,[i[0],i[1],i[2],Z(n[0])]):{};r&2&&(d.$$scope={dirty:r,ctx:n}),e.$set(d)},i(n){m||(J(e.$$.fragment,n),m=!0)},o(n){K(e.$$.fragment,n),m=!1},d(n){V(e,n)}}}function at(C,e,m){const i=[];let l=F(e,i);return C.$$set=n=>{e=A(A({},e),B(n)),m(0,l=F(e,i))},[l]}class rt extends G{constructor(e){super(),M(this,e,at,nt,X,{})}}export{rt as component};
