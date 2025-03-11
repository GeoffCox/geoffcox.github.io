import{a as k,t as x}from"../chunks/disclose-version.BiSuMygR.js";import{p as y,s as e,f as _,t as w,a as C,c as t,r as s,d as O}from"../chunks/runtime.B1Lgz8AP.js";import{s as r}from"../chunks/render.CSQAU11X.js";import{i as E}from"../chunks/lifecycle.CouH_cVo.js";const o={clickOutside:`<script lang="ts">
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
`};var F=x(`<h1>Actions</h1> These actions were built to support components and are available to you in your own component
development. <h2>clickOutside</h2> Raises an event anytime the user clicks outside the bounds of the element. <pre>
  <code> </code>
</pre> <h2>extraClass</h2> Appends an extra class value to the class prop. Typically used by components to support adding the
class prop to an existing class name. <pre> </pre> <h2>forwardEvents</h2> Forwards native and svelte component events from one component to another. Useful when you need to
make an event appear to bubble up and components are not in the same DOM hierarchy. <pre> </pre> <h2>portal</h2> Makes the element a child of the target element. Useful in scenarios like menus when you want to
move an element outside of its parent so it can float above it. <pre> </pre> <h2>trapKeyboardFocus</h2> Keeps the keyboard focus within the children of an element by handling 'Tab' keyboard events. <pre> </pre>`,1);function A(u,h){y(h,!1),E();var l=F(),a=e(_(l),4),p=e(t(a)),v=t(p,!0);s(p),O(),s(a);var n=e(a,4),f=t(n,!0);s(n);var i=e(n,4),m=t(i,!0);s(i);var c=e(i,4),g=t(c,!0);s(c);var d=e(c,4),b=t(d,!0);s(d),w(()=>{r(v,o.clickOutside),r(f,o.extraClass),r(m,o.forwardEvents),r(g,o.portal),r(b,o.trapKeyboardFocus)}),k(u,l),C()}export{A as component};
