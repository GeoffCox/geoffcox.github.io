# The Latest

<hr />

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

- [react-splitter: A splitter control for web applications (React & Typescript)](https://github.com/GeoffCox/react-splitter)
- [Photiso: a photo organizer (Rust)](https://github.com/GeoffCox/photiso)
- [Swag-O: a powerful swagger viewer (React, Typescript & Electron) ](https://github.com/GeoffCox/swago)
- [WebAppGuide: A complete step-by-step guide to building modern web applications (React, Typescript, Webpack & optionally Electron)](https://github.com/GeoffCox/WebAppGuide)
- [recoil-examples: runnable versions of Recoil JS examples (Typescript)](https://github.com/GeoffCox/recoil-examples)
- [KeepSiteAlive - A windows service to regularly ping a web server (C#)](https://github.com/GeoffCox/KeepSiteAlive)
- [MVVM: A complete Model-View-ViewModel framework for WPF application (C# & .NET)](https://github.com/GeoffCox/MVVM)

> Ordered from recent to older
