# The Latest

<hr />

## 2021-10-11 <i class="fa fa-github"/> [pretty-good-nlp](https://github.com/GeoffCox/pretty-good-nlp)

When an application needs to recognize short sentences (e.g. commands, orders, search queries), it can take significant effort to build all the necessary models. Developers are often blocked waiting on the ML to be ready. While hard-coding recognition is a fine workaround, it makes the app feel incomplete. It also prevents the developer from building expertise in handling different input variations. I built pretty-good-nlp to fill this gap.

This library provides a deterministic, fast, and independent recognizer. It is straightforward to define intents through examples. There are options to get basic control over relative importance, ordering, noise, and negations. You can also substitute your own tokenizer to handle other languages.

I think what is cool is that by defining intents, the configuration captures important information for training ML models. The app developer can get the app working for most expected inputs, contribute to the building of the ML model, and then swap out the ML model at the end.

## 2021-05-01 <i class="fa fa-github"/> [svelte-splitter](https://github.com/GeoffCox/svelte-splitter)

After learning about Svelte from a colleague and watching Rich Harris talk about the reactivity and performance, I decided to write my splitter from scratch in Svelte. I also kept with Typescript. I couldn't quite get typescript definition files from the Svelte components, but that's OK as Svelte apps can consume it easily enough.

Svelte's features out-of-the-box are awesome.  
- It gives you the infrastructure you would otherwise have to wire together with a bunch of packages and tools. 
- The HTML, script, and style sit cohesively in a module that gets compiled to lightning fast JS. 
- Reactive properties and stores mean you don't have to pick one of the many state packages (e.g. redux, mobx, recoil).
- There is way less ceremony required to define the properties, events, methods, and slots in a Svelte component.
- Whether you choose rollup or webpack, the amount of required configuration is significantly reduced. 
- And the best feature is no runtime dependencies. If the Svelte compiler improves, just recompile your code and you get the benefits.

I was able to add several new features and improvements to my splitter because of Svelte's animation helpers, ability to expose imperative methods, and fast reactive properties. Svelte 3 feels like a mature and powerful way to build components and applications. I think the ecosystem of packages needs more time to get to the abundance of React's vast set of libraries.  It will be interesting to see how React reacts :) to the gauntlet Svelte has thrown down. I plan on doing all my hobby weekend programming in Svelte although I will stick to React for my day job.

## 2020-12-16 <i class="fa fa-github"/> [react-splitter](https://github.com/GeoffCox/react-splitter)

I overhauled my react-splitter control to publish version 2.0. A colleague, Soroush Ghorashi, recommended using CSS minmax for controlling the minimum pane sizes. This idea lead to incredible improvements. It caused me to realize a common flaw of most splitter controls: they set the pane sizes in pixels.

When the user moves the splitter to a position, it is conceptually a relative position and not a specific pixel size. Setting a pixel size requires a bunch of math to adjust the pane sizes if the parent size changes. By tracking a percentage for the split position, my splitter now properly resizes in nested splitter scenarios without needing any extra math.

Even though I ended up making several feature additions, the code size decreased by half. Shrinking code indicates improved design and architecture. This always makes me happy.

## 2020-12-04 <i class="fa fa-github"/> [Photiso](https://github.com/GeoffCox/photiso)

About a year ago, I briefly spent time learning about Rust. I worked through a lot of examples and read the Rust book, but I didn't try to build a real application.

Several years ago, I created a photo organizing program called Photiso. It was written in C# with a WPF user interface. I use it regularly to organize all my photos chronologically. It makes it easy for Carbonite to back up my photos without having to sync older folders over and over. It handles duplicate photos and different photos with duplicate file names.

V1 was a pretty good application, but I wasn't satisfied with the precision of the EXIF date/time information. Because I only run it every few weeks, I found I don't need a graphical interface. I also wished that it was faster and would run on other OSs. Over the Thanksgiving holiday I rewrote Photiso in Rust.

I decided that V2 would be a command line program driven from a configuration file. It took me about 3 days of effort. Fortunately I have a colleague to consult, Johan Verwey, who has a lot of expertise in Rust. It was great fun to dive in and learn Rusts' memory ownership, `Result` and `Option` return types, and mutable/immutable types like PathBuf/Path.

The EXIF package I picked up made my photo organization precise. V2 runs about 10x faster than my .NET program. Plus, it could be compiled to run on Windows, Mac, or Linux.

Rust is an incredible language; I can't recommend it enough. The compile time memory and thread safety meant I didn't spend any time worrying about null pointer dereferences, missed error handling, or framework versions. Rusts package management (called crates) has a huge ecosystem.

C/C++ developers can learn it very quickly. C#/.NET developers might need a little more time to get used to the references and string buffers. Javascript developers would have to spend some time figuring out the memory ownership semantics, but could still ramp up pretty quickly to produce high performance web assemblies.

I can't imagine ever writing a systems-level program in anything other than Rust.

# Blog Posts

<hr />

- <i class="fa fa-people-carry"/> [3 tenets for leading software development teams](posts/DevLeadTenets.md)
- <i class="fa fa-file-code"/> [How to name things in code](posts/NamingCode.md)
- <i class="fas fa-map-marked-alt"/> [Organize code using the principle of locality](posts/Locality.md)
- <i class="fa fa-comment"/> [How to comment code](posts/CodeComments.md)

# Projects

<hr />

- [pretty-good-nlp: A basic natural language recognizer you can get working in minutes.](https://github.com/GeoffCox/pretty-good-nlp)
- [svelte-splitter: A splitter control for web application (Svelte & Typescript)](https://github.com/GeoffCox/svelte-splitter)
- [react-splitter: A splitter control for web applications (React & Typescript)](https://github.com/GeoffCox/react-splitter)
- [Photiso: a photo organizer (Rust)](https://github.com/GeoffCox/photiso)
- [Swag-O: a powerful swagger viewer (React, Typescript & Electron) ](https://github.com/GeoffCox/swago)
- [WebAppGuide: A complete step-by-step guide to building modern web applications (React, Typescript, Webpack & optionally Electron)](https://github.com/GeoffCox/WebAppGuide)
- [recoil-examples: runnable versions of Recoil JS examples (Typescript)](https://github.com/GeoffCox/recoil-examples)
- [KeepSiteAlive - A windows service to regularly ping a web server (C#)](https://github.com/GeoffCox/KeepSiteAlive)
- [MVVM: A complete Model-View-ViewModel framework for WPF application (C# & .NET)](https://github.com/GeoffCox/MVVM)

> Ordered from recent to older
