import{$ as e,A as t,M as n,Z as r,dt as i,ft as a,gt as o,k as s,l as c,q as l}from"../chunks/CX2jC7lQ.js";import"../chunks/xihTtKlq.js";import"../chunks/ClNsB9K-.js";var u={applyLightDarkMode:`<script lang="ts">
  import { applyLightDarkMode } from '@geoffcox/sterling-svelte';
<\/script>

<div use:applyLightDarkMode={{ mode: 'auto', atDocumentRoot: true }}>
  <!-- content here -->
</div>
`,colorScheme:`<script lang="ts">
  import { colorScheme } from '@geoffcox/sterling-svelte';
<\/script>

<div use:colorScheme={{ value: 'light dark' }}>
  <!-- content here -->
</div>
`,clickOutside:`<script lang="ts">
  import { clickOutside, type ClickOutsideEvent } from '@geoffcox/sterling-svelte';
  const onClickOutside = (event: ClickOutsideEvent) => {
    // do something here
  };
<\/script>

<div use:clickOutside on:click_outside={onClickOutside}>
  <!-- content here -->
</div>
`,extraClass:`<script lang="ts">
  import { extraClass } from '@geoffcox/sterling-svelte';

  let {children, class: _class}
<\/script>

<button class="sterling-button" use:extraClass={extraClass: _class}>
  {#if children}
    {children}
  {/endif}
</button>
`,forwardEvents:`<script lang="ts">
  import { forwardEvents } from '@geoffcox/sterling-svelte';

  let targetRef: HTMLDivElement;

  const onClick = () => {
    // do something here
  };
<\/script>

<div bind:this={targetRef} on:click={onClick}>sterling-svelte</div>
<button use:forwardEvents={ target: targetRef, events: ['click']}>Click Me<button>
`,popoverHover:`<script lang="ts">
  import { popoverHover } from '@geoffcox/sterling-svelte';
<\/script>

<div use:popoverHover={{popovertarget:'MyPopover',delayMilliseconds:750}}>
  <!-- content here -->
</div>
<Popover2 id="MyPopover">
  <!-- content here -->
</Popover2>
`,portal:`<script lang="ts">
  import { portal } from '@geoffcox/sterling-svelte';
<\/script>

<div use:portal={{ target: document.body }}>
  <!-- content here -->
</div>
`,trapKeyboardFocus:`<script lang="ts">
  import { trapKeyboardFocus } from '@geoffcox/sterling-svelte';
<\/script>

<div use:trapKeyboardFocus>
  <!-- content with focusable children here -->
</div>
`},d=n(`<div class="topic-page svelte-108wvy0"><h1>Actions</h1> These actions were built to support components and are available to you in your own component
  development. <h2>clickOutside</h2> Raises an event anytime the user clicks outside the bounds of the element. <pre> </pre> <h2>colorScheme</h2> Sets the color-scheme on the document root element. It can be applied at any div in the
  application. The value set should be 'light dark', 'light', or 'dark'. <pre> </pre> <h2>forwardEvents</h2> Forwards native and svelte component events from one component to another. Useful when you need to
  make an event appear to bubble up and components are not in the same DOM hierarchy. <pre> </pre> <h2>popoverHover</h2> Opens a popover when the mouse hovers over the element. <pre> </pre> <h2>portal</h2> Makes the element a child of the target element. Useful in scenarios like menus when you want to
  move an element outside of its parent so it can float above it. <pre> </pre> <h2>trapKeyboardFocus</h2> Keeps the keyboard focus within the children of an element by handling 'Tab' keyboard events. <pre> </pre> <h2>applyLightDarkMode (DEPRECATED)</h2> When using sterling-svelte-themes 2.0 or later, you should use the colorScheme action instead.
  Sets light-mode or dark-mode classes on the node or optionally on the root document element. <pre> </pre> <h2>extraClass (DEPRECATED)</h2> Appends an extra class value to the class prop. Typically used by components to support adding the
  class prop to an existing class name. <pre> </pre></div>`);function f(n,f){a(f,!1),c();var p=d(),m=e(r(p),4),h=r(m,!0);o(m);var g=e(m,4),_=r(g,!0);o(g);var v=e(g,4),y=r(v,!0);o(v);var b=e(v,4),x=r(b,!0);o(b);var S=e(b,4),C=r(S,!0);o(S);var w=e(S,4),T=r(w,!0);o(w);var E=e(w,4),D=r(E,!0);o(E);var O=e(E,4),k=r(O,!0);o(O),o(p),l(()=>{s(h,u.clickOutside),s(_,u.clickOutside),s(y,u.forwardEvents),s(x,u.popoverHover),s(C,u.portal),s(T,u.trapKeyboardFocus),s(D,u.applyLightDarkMode),s(k,u.extraClass)}),t(n,p),i()}export{f as component};