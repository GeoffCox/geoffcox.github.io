import{s as z,a as H,k as Q,m as E,e as u,p as c,b as m,q as p,t as w,i as o,w as F,f as s}from"../chunks/scheduler.75f5293f.js";import{S as X,i as B,c as D,b as G,m as M,t as N,a as U,d as J}from"../chunks/index.36074062.js";import{g as K,a as R}from"../chunks/spread.8a54911c.js";import{P as V}from"../chunks/Post.19bcd7ab.js";function Y(b){let e,h=`One evening, when I was working on a large customer data store, there was an emergency team
		meeting to figure out how to handle a bug that had incorrectly hashed the Passport
		authentication identifiers in our SQL databases. About 20 of us were called into a 10 person conference
		room to discuss options.`,i,l,n=`A dev on my team reported he had already patched the code and had a SQL script to repair the
		existing data. However, some random guy from another team had been talking to my boss and
		followed us into the meeting room. He decided to loudly take over the meeting and declared that
		we first had to estimate how long running the script would take. My boss, normally outspoken
		and decisive, deferred to him. Everyone assumed he must be important and knew
		what he was doing.`,r,d,T=`He grabbed a whiteboard pen and starting doing a calculation on the board. He stated that
		updating a row in SQL probably takes at best 1 millisecond when within a transaction. He also
		wrote out a bunch of hash algorithm statements that he said added up to 2.5 milliseconds per
		row. We had 400 million rows that needed updating. He then calculated this would take 400
		million x 3.5 = 1.4 billion milliseconds => 1.4 million seconds => 23 thousand minutes
		=> 388 hours => 16 days.`,C,f,j=`No one could use the system until all the rows were updated. The room was in a panic. I thought
		that we should get the script started ASAP. I pulled the dev and a service engineer into the
		hallway to confirm they had confidence in the script and to ask them to get it running.`,k,g,A=`In the meantime, random guy started drawing up a shift rotation schedule for each person to be
		on site watching the script run over the next 16 days. After 15 minutes, as the guy was
		finalizing the shift schedule, the dev and service engineer returned to the room. The dev
		whispered in my ear the results.`,P,v,W=`The random guy was literally giving a pep talk to the room about how hard it was going to be to
		watch this 24 hours a day, but that it would be a worthy and valiant effort. I tried to
		interrupt him, but he wasn't allowing anyone to talk.`,$,y,q=`Finally he finished. I let the room know that we had run the script and it completed in under 15
		minutes. The script updated over 400 rows per millisecond. He said that was impossible as his
		chest caved and he hung his head. I had never seen someone have the wind taken out of their
		sails like him.`,I,_,L=`While this guy was a total blow hard, he followed how developers are taught to estimate
		algorithm duration. We mentally walk through the steps, deciding what each instruction should
		cost, look for loops, and multiply to get the result. The problem is that computation speeds had
		wildly exceeded human imagination. It is hard for humans to understand how fast 1/400th of a
		millisecond goes by.`,S,x,O=`This was back in 2005. The XBOX 360 had just come out and everyone was amazed at its 240 GFLOPS
		speed. We like to imagine we can understand that kid of processing power. Today, the script
		would likely complete in a few seconds today. Humans simply can perceive time in those units. We
		can't just think through estimates anymore. Instead, we have to run the code in a simulation and
		measure the performance. Don't be like that random guy.`;return{c(){e=u("p"),e.textContent=h,i=c(),l=u("p"),l.textContent=n,r=c(),d=u("p"),d.textContent=T,C=c(),f=u("p"),f.textContent=j,k=c(),g=u("p"),g.textContent=A,P=c(),v=u("p"),v.textContent=W,$=c(),y=u("p"),y.textContent=q,I=c(),_=u("p"),_.textContent=L,S=c(),x=u("p"),x.textContent=O},l(t){e=m(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-nc59g0"&&(e.textContent=h),i=w(t),l=m(t,"P",{"data-svelte-h":!0}),p(l)!=="svelte-10cij54"&&(l.textContent=n),r=w(t),d=m(t,"P",{"data-svelte-h":!0}),p(d)!=="svelte-1qkpabd"&&(d.textContent=T),C=w(t),f=m(t,"P",{"data-svelte-h":!0}),p(f)!=="svelte-11ih7t0"&&(f.textContent=j),k=w(t),g=m(t,"P",{"data-svelte-h":!0}),p(g)!=="svelte-1alwxvx"&&(g.textContent=A),P=w(t),v=m(t,"P",{"data-svelte-h":!0}),p(v)!=="svelte-1fi90uq"&&(v.textContent=W),$=w(t),y=m(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-jti4uy"&&(y.textContent=q),I=w(t),_=m(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-1vf9kpu"&&(_.textContent=L),S=w(t),x=m(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-166v96l"&&(x.textContent=O)},m(t,a){o(t,e,a),o(t,i,a),o(t,l,a),o(t,r,a),o(t,d,a),o(t,C,a),o(t,f,a),o(t,k,a),o(t,g,a),o(t,P,a),o(t,v,a),o(t,$,a),o(t,y,a),o(t,I,a),o(t,_,a),o(t,S,a),o(t,x,a)},p:F,d(t){t&&(s(e),s(i),s(l),s(r),s(d),s(C),s(f),s(k),s(g),s(P),s(v),s($),s(y),s(I),s(_),s(S),s(x))}}}function Z(b){let e,h;const i=[{category:"Story"},{headline:"Speed Estimation"},{postUrl:"speed-estimation"},b[0]];let l={$$slots:{default:[Y]},$$scope:{ctx:b}};for(let n=0;n<i.length;n+=1)l=H(l,i[n]);return e=new V({props:l}),{c(){D(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,r){M(e,n,r),h=!0},p(n,[r]){const d=r&1?K(i,[i[0],i[1],i[2],R(n[0])]):{};r&2&&(d.$$scope={dirty:r,ctx:n}),e.$set(d)},i(n){h||(N(e.$$.fragment,n),h=!0)},o(n){U(e.$$.fragment,n),h=!1},d(n){J(e,n)}}}function tt(b,e,h){const i=[];let l=Q(e,i);return b.$$set=n=>{e=H(H({},e),E(n)),h(0,l=Q(e,i))},[l]}class st extends X{constructor(e){super(),B(this,e,tt,Z,z,{})}}export{st as component};
