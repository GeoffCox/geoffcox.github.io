import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index.js";
import "@geoffcox/binary-search";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '@fontsource/overpass';@import '@fontsource/fira-mono';.title.svelte-1wmz7vq.svelte-1wmz7vq{font-size:2.5em}.demo.svelte-1wmz7vq.svelte-1wmz7vq{align-content:flex-start;align-items:flex-start;display:flex;flex-direction:column;font-family:'Overpass', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;width:800px;padding:10px 20px}.intro.svelte-1wmz7vq.svelte-1wmz7vq{padding:20px 0;max-width:550px}.intro.svelte-1wmz7vq p.svelte-1wmz7vq{margin-block-start:0.25em;margin-block-end:0.25em}.step.svelte-1wmz7vq.svelte-1wmz7vq{font-size:1.6em;margin-top:0.5em}.section.svelte-1wmz7vq.svelte-1wmz7vq{align-content:flex-start;align-items:flex-start;display:flex;flex-direction:column;margin-bottom:0.5em}.section.svelte-1wmz7vq .svelte-1wmz7vq{margin-top:5px}.info.svelte-1wmz7vq.svelte-1wmz7vq{color:#777;font-size:0.8em;margin-left:5px}.values-array.svelte-1wmz7vq.svelte-1wmz7vq{background:#ededed;margin:15px 0;font-family:'Fira Mono', monospace;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:auto;place-content:flex-start;place-items:flex-start;max-height:400px;max-width:800px;overflow:auto}.values-array.svelte-1wmz7vq div.svelte-1wmz7vq{margin:5px;justify-self:flex-end}.results.svelte-1wmz7vq b.svelte-1wmz7vq{font-size:1.2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let arrayLength;
  let startNumber;
  let removeCount;
  let canCreateValues;
  let valuesText;
  let arrayLengthText = "26";
  let startNumberText = "0";
  let removeCountText = "0";
  let numberToFindText = "10";
  let values = [];
  let nearestRange = {};
  $$result.css.add(css);
  arrayLength = Number.parseInt(arrayLengthText);
  startNumber = Number.parseInt(startNumberText);
  removeCount = Number.parseInt(removeCountText);
  canCreateValues = !isNaN(arrayLength) && !isNaN(startNumber) && !isNaN(removeCount);
  valuesText = values.join(" ");
  ({
    lowValue: values[nearestRange.lowIndex || -1],
    highValue: values[nearestRange.highIndex || -1]
  });
  return `<div class="${"demo svelte-1wmz7vq"}"><div class="${"title svelte-1wmz7vq"}">@geoffcox/binary-search demo</div>

	<div class="${"intro svelte-1wmz7vq"}"><p class="${"svelte-1wmz7vq"}">This demo lets you play with the binary search algorithm.</p>
		<p class="${"svelte-1wmz7vq"}">You can create sequence of numbers, remove some of the values, and then search for a value.
		</p>
		<p class="${"svelte-1wmz7vq"}">If the value isn&#39;t found, the algorithm tells you the low/high range where the number would
			have been if it was in the array.
		</p></div>

	<div class="${"step svelte-1wmz7vq"}">1. Create an array of numbers to search</div>
	<div class="${"section svelte-1wmz7vq"}"><label class="${"svelte-1wmz7vq"}">Length
			<input class="${"svelte-1wmz7vq"}"${add_attribute("value", arrayLengthText, 0)}></label>
		<label class="${"svelte-1wmz7vq"}">Start Number
			<input class="${"svelte-1wmz7vq"}"${add_attribute("value", startNumberText, 0)}></label>
		<label class="${"svelte-1wmz7vq"}">Remove Count
			<input class="${"svelte-1wmz7vq"}"${add_attribute("value", removeCountText, 0)}></label>

		<button ${!canCreateValues ? "disabled" : ""} class="${"svelte-1wmz7vq"}">Create Values</button>
		<div class="${"values-array svelte-1wmz7vq"}">${valuesText.length ? `${each(values, (value) => {
    return `<div class="${"svelte-1wmz7vq"}">${escape(value)}</div>`;
  })}` : `<span class="${"svelte-1wmz7vq"}">[ ]</span>`}</div></div>

	<div class="${"step svelte-1wmz7vq"}">2. Choose a number to find</div>
	<div class="${"section svelte-1wmz7vq"}"><label class="${"svelte-1wmz7vq"}">Number
			<input class="${"svelte-1wmz7vq"}"${add_attribute("value", numberToFindText, 0)}></label></div>

	<div class="${"step svelte-1wmz7vq"}">3. Run the search</div>
	<div class="${"section svelte-1wmz7vq"}"><button class="${"svelte-1wmz7vq"}">Search</button>
		<div class="${"info svelte-1wmz7vq"}">We expect log<sub class="${"svelte-1wmz7vq"}">2</sub>(length) =&gt; ${escape(Math.round(Math.log2(arrayLength)))} comparisons.
		</div>
		<div class="${"results svelte-1wmz7vq"}">${``}</div></div>
</div>`;
});
export {
  Page as default
};
