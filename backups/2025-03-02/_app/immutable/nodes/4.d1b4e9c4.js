import{s,n as o}from"../chunks/scheduler.e1b8cbbb.js";import{S as r,i as l,g as d,h as c,B as h,k as p,a as m,f as u}from"../chunks/index.a6550feb.js";function g(n){let e,a=`<div class="prose"><p>Over the past year and in my spare time, I built <code>sterling-svelte</code>, a UI component
			library. It includes all the components you would need to build a complete application. It
			wasn&#39;t easy and I&#39;m quite proud of the professional level of quality, customization, and
			performance.</p> <p>Since I work on the Fluent UI React team, it may seem strange that I ended up building a
			library for Svelte rather than React. About 2 years ago, I was chatting with David Zearing
			(Fluent UI founder, super-smart dev, and all-around nice person). We were discussing how
			ironic it is that React components don&#39;t really <i>react</i> to changing application state. To
			get reactivity in React, you end up having to add an observer/observable framework.</p> <p>David mentioned there was this thing called Svelte that had an interesting take on reactivity.
			He recommended I check out a youtube video where Rich Harris, the creator of Svelte,
			introduces Svelte&#39;s reactivity. Rich Harris is a excellent and entertaining speaker. It
			inspired me to check out Svelte. I&#39;ve found that learning new languages and frameworks helps
			me with the ones I already know.</p> <p>I found Svelte to be awesome. I love feeling close to the metal, writing HTML, CSS, and
			Javascript. Yet I get all the convenience and productivity of higher level abstractions like
			reactivity, logic blocks, slots, and even animation. Since the code compiles to plain
			Javascript, there isn&#39;t any runtime framework to download and rendering is insanely fast.</p> <p>As I was building my first application in Svelte, I found I needed some menus, lists, and
			dialogs. The existing component libraries I found just didn&#39;t suffice. Most are quick and
			dirty ports of React libraries or style systems. Many were woefully incomplete or full of
			bugs. I decided to see how hard it would be to build my own component library.</p> <p>Starting out, I was able to produce a component on average in about 4 days. As I got into form
			input components, I learned how hard it can be to style some of the native HTML elements. Then
			as I got to components with popovers, I needed to incorporate positioning middleware. My pace
			slowed to about 1 week per component. I ended up on a couple of side quests to get the
			documentation right, handle media queries, and change from built-in styles with
			CSS variable theming to styleless system with an opt-in style. Getting the library to
			version 1 quality took an additional month of polishing.</p> <p>I enjoyed the challenge of building a component library. In my day-to-day job, it is a team
			effort. I don&#39;t get to make all the architecture, design, and implementation decisions. This was
			a great experience getting to make hard choices and see what worked.</p> <p>Here&#39;s some things I learned:</p> <ul><li>Good middleware is critical to quality components. They help separate concerns
				between the component and reusable behavior. Otherwise, you can end up with large spaghetti
				code duplicated in multiple components.</li> <li>It is tough to meet the ARIA standard. It doesn&#39;t always give clear choices for more
				advanced components. You have to try things out and then verify them via accessibility
				tools. Sometimes you can&#39;t satisfy all the rules for every browser.</li> <li>Svelte&#39;s encapsulated and atomic CSS styles are great for application components, but
				library components should allow complete style replacement. Even with CSS variables and
				theming infrastructure, baking any styles into a component makes it too opinionated and
				rigid. This is why I made the difficult change just before 1.0 to a headless approach where
				components have no default style and you can opt-in to the styles you want.</li> <li>Documenting a component library is an equal effort to coding the components. I put in a lot
				of work to provide the component playgrounds and the props, events, and methods.</li> <li>The cost/benefit ratio needs to be thought through before adding a component. Svelte makes
				creating components easy enough that a good library should avoid the noise of a bunch of low
				value components.</li></ul></div>`;return{c(){e=d("div"),e.innerHTML=a,this.h()},l(t){e=c(t,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-qynzol"&&(e.innerHTML=a),this.h()},h(){p(e,"class","topic svelte-y4h2w")},m(t,i){m(t,e,i)},p:o,i:o,o,d(t){t&&u(e)}}}class f extends r{constructor(e){super(),l(this,e,null,g,s,{})}}export{f as component};
