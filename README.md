# Best Practices, Advice, and Opinions
<hr />

##  3 tenets for leading software development teams
These are the tenets that guide me as a software development lead.

- Empower developers through ownership
- Minimize process
- Lead by example

<i class="fa fa-people-carry"/> [Read more](posts/DevLeadTenets.md)

## How to name things in code

The names you choose in your code are important. Names give meaning to the structure of code. Paying attention to naming is critical to software architecture. Good names make developers more productive. Well named code is easier to understand, easier to maintain, less likely to have bugs, and requires fewer code comments.

Here are my best practices for naming things in code.

- Always look for better names
- Prefer correct grammar
- Avoid distinguishing without a difference
- Prefer to be humble
- Avoid false metrics

<i class="fa fa-file-code"/> [Read more](posts/NamingCode.md)

## Organize code using the principle of locality

Code is edited as text to optimize human understanding and productivity. Organizing code for the computer's sake is counter-productive. The computer prefers binary and you don't want to be typing zeros and ones all day.  Use the the principle of locality to organize your code.

- Keep fields and subroutines near the functions that use them.
- Fallback to grouping code that is likely to change at the same time.
- Check for single responsibility when you have trouble applying the principle.
- Let the modern IDE do the heavy-lifting for you.

<i class="fas fa-map-marked-alt"/> [Read more](posts/Locality.md)

# Code Projects
<hr />

## Swag-O (A useful swagger viewer)
The Swagger open API specification is an amazing and popular way to describe APIs. The folks at swagger.io have done a great job with the specification standardization and the tools for creating swagger files and generating client code in multiple lanuages. However, the Swagger UI viewer leaves a lot to be desired. 

I built Swag-O to make navigating complex and larger swagger files more pleasant. The entire application is open source.

<i class="fa fa-github"/> [Swag-O on GitHub](https://github.com/GeoffCox/swago)

##  Recoil JS examples
[Recoil JS](http://recoiljs.org) is a new application state management library for React applications. Developed under facebook/experimental, it is still in its early stages (i.e. unstable). It solves the same problems that Redux and MobX tackle. Recoil shows a lot of promise as a very lightweight library built for the hooks API.

The documentation is good, but the Recoil site doesn't have runnable examples. I decided to create running examples for each of the tutorials. I also provide a tutorial on how to implement a dispatcher pattern using recoil.

<i class="fa fa-github"/> [recoil-examples on GitHub](https://github.com/GeoffCox/recoil-examples)

## Web Application Guide
There are lots of helpful tools that can generate code as a starting point for a web application. I find they are too auto-magical. They don't explain what each piece does nor how they are configured to work together. It leaves you stuck if something doesn't work, you have a breaking change when upgrading a library or tool, or if you need to incorporate a new piece of technology.

I wrote this step-by-step guide to building a web application on the technology stack I consider minimal and modern.
- React
- Typescript
- Webpack
- Optional: Hot Module Reloading
- Optional: Electron

The readme files take you through every single change so you can recreate the application by following along. You can also download the existing code to get started building you app.

Additionally I created a more complete application - The memory game. Players take turns trying to find matching cards.  This example extends the application to leverage the libraries I often use to handle state mangement, styling, and data manipulation.

<i class="fa fa-github"/> [WebAppGuide on GitHub](https://github.com/GeoffCox/WebAppGuide)

## Model-View-ViewModel for WPF
Back when I was doing a lot of WPF programming, I created this library to support following Model-View-ViewModel (M-V-VM) pattern. 

Many other libraries out there (i.e. Model-View-Controller, Model-View-Presenter, or Model-View-ViewModel) require you to write a bunch of code to connect your views to your view models. Sometimes this is implmeents as a separate View Model Locator. This unncessary tax was the reason I created this library.

This MVVM library lets you provide your view a view model from directly within the XAML. Connecting your view and view models using the visual hierarchy is both simple and powerful. This library also supports custom styled controls, dependency injection frameworks, and customized view/view-model binding.

The library has been used in major software projects and is heavily unit tested. I also included several custom actions, behaviors, and converters that most applications will want to leverage.

Of course, Windows client application platforms continue to evolve. This library is built for WPF and may not function with Silverlight, Windows Universal Store apps, or WPF converted to run in the store.

<i class="fa fa-github"/> [MVVM on GitHub](https://github.com/GeoffCox/MVVM)

## KeepSiteAlive Windows Service
If you are hosting your web application or site using a discount commercial hosting company, you might be on shared infrastructure. These companies often put web applications to sleep if there hasn't been any traffic for awhile. This can mean a poor experience for the user that shows up and has to wait for your application to be resurected.  

I wrote this very small Windows service to ping a set of URLs at configurable intervals. It supports hours, minutes, and seconds (HH:MM:SS) intervals. I recommend using different seconds offsets between different URLs to stagger the calls.

<i class="fa fa-github"/> [KeepSiteAlive on GitHub](https://github.com/GeoffCox/KeepSiteAlive)