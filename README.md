# Recoil JS examples <i class="fa fa-github"/>
[Recoil JS](http://recoiljs.org) is a new application state management library for React applications. Developed under facebook/experimental, it is still in its early stages (i.e. unstable). It solves the same problems that Redux and MobX tackle. Recoil shows a lot of promise as a very lightweight library built for the hooks API.

The documentation is good, but the Recoil site doesn't have runnable examples. I decided to create running examples for each of the tutorials. I also provide a tutorial on how to implement a dispatcher pattern using recoil.

[recoil-examples](https://github.com/GeoffCox/recoil-examples)

# 3 tenets for leading software development teams <i class="fa fa-people-carry"/>
These are the tenets that guide me as a software development lead.

- Empower developers through ownership
- Minimize process
- Lead by example

[Read More](posts/DevLeadTenets.md)

# How to name things in code <i class="fa fa-file-code"/>

The names you choose in your code are important. Names give meaning to the structure of code. Paying attention to naming is critical to software architecture. Good names make developers more productive. Well named code is easier to understand, easier to maintain, less likely to have bugs, and requires fewer code comments.

Here are my best practices for naming things in code.

- Always look for better names
- Prefer correct grammar
- Avoid distinguishing without a difference
- Prefer to be humble
- Avoid false metrics

[Read More](posts/NamingCode.md)

# Organize code using the principle of locality <i class="fa fa-map-marked-alt"/>

Code is edited as text to optimize human understanding and productivity. Organizing code for the computer's sake is counter-productive. The computer prefers binary and you don't want to be typing zeros and ones all day.  Use the the principle of locality to organize your code.

- Keep fields and subroutines near the functions that use them.
- Fallback to grouping code that is likely to change at the same time.
- Check for single responsibility when you have trouble applying the principle.
- Let the modern IDE do the heavy-lifting for you.

[Read More](posts/Locality.md)

## [Web Application Guide](https://github.com/GeoffCox/WebAppGuide)
A step-by-step guide to building a modern web application using React, Electron, Typescript, and Webpack.

## [MVVM](https://github.com/GeoffCox/MVVM)
A lightweight library for following the Model-View-ViewModel (M-V-VM) pattern using WPF.

## [KeepSiteAlive](https://github.com/GeoffCox/KeepSiteAlive)
A robust Windows service that pings URLS at regular intervals.




