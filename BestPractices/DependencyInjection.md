Best Practices: Dependency Injection
===

If you have never heard of dependency injection, I recommend reading Martin Fowler's article [Inversion of Control Containers and the Dependency Injection pattern](http://martinfowler.com/articles/injection.html). 

Basically, DI containers allow you to move the knowledge of how to construct dependencies (i.e. particular implementations of interfaces) from your class to a centralized place in your application. 

I think of dependency injection (DI) as the reverse process of .NET garbage collection.  Rather than walk down a tree of objects looking for things to throw away, dependency injection walks down the tree looking for required dependencies and constructing them. 

When to use dependency injection
---
Here are the reasons I use dependency injection:

1. I need to replace dependencies on external resources at run time. 
    
    - To determine the implementation of an interface based on a run-time configuration.
    - To unit test classes and want to isolate them using mocked implementations.
    - To A/B test different implementations to determine which works best.
    - To run different implementations in my local development environment.
    
2. I have a large project that requires a sophisticated approach to separation of concerns. 
    
    - Many classes that must only have knowledge of interfaces (and not concrete types). 
    - Neither the Singleton pattern nor Abstract Factory pattern work well as every class would depend on them.
    - Layers of classes that take their dependencies as constructor parameters.  This can create tight coupling between classes that only have indirect dependencies.
    
3. I am consuming or producing a framework that allows callers to control what/how classes are instantiated.
    
    - To override a framework like ASP.NET MVC that uses convention over configuration by default.
    - To intercept the construction of types and wrap them in a virtual proxy or adapter.

Get started
---
1. Start with poor man's dependency injection. 
    
    Adding DI to a project that isn't properly factored only makes like worse.  You need to identify which classes need dependency injection and then structure them to depend on interfaces rather than concrete types. 
    
    I often start with a class constructing concrete types in a default constructor and setting member variables that are interfaces.  The next step is to make those dependencies constructor parameters. Modern DI containers let you inject dependencies almost anywhere in your code (e.g. constructors, properties, methods, and events).  Prefer constructor injection whenever possible because it simplified your code; you don't have to check for null everywhere or handle your implementation changing after instantiation.
    
2. Choose a reliable and mature dependency injection (DI) container. 
    
    I prefer [Ninject](http://www.ninject.org/) over others because of its fluent API, control over instantiation, debuggability, and lightning fast performance.  Plus, it has a nice NuGet package and extra package to integrate with special project types.
    
    Unity is another good DI container, but it has some problems when trying to provide a singleton implementation for multiple interfaces without instantiating the implementation as start up.  Unity also relies too heavily on the associated ServiceLocator pattern that ends up being a crutch for poorly factored code.
    
    You might ask "What about Managed Extensibility Framework (MEF)? It is built into .NET, so isn't that the clear choice?"
    
    MEF is an extensibility framework and not a general purpose DI container.  While MEF shares many aspects of DI containers like injection-control attributes, it is much better for a dynamic plug-in model than fine-grained dependency injection (note the 'extensibility' and not 'dependency injection' in the name).  
    
    - MEF requires all your classes reference the System.ComponentModel.Componentization DLL.
    - MEF's meta-data and attribute models are geared toward decentralized contracts.  It isn't that great at inversion of control.
    - MEF's composition engine is difficult to debug and failures can be quite opaque as MEF runs its contract resolution algorithm.
    
    I recommend avoiding MEF completely.  MEF has caused more hours spent pulling out hair than making projects simpler.
    
3. Convert slowly.
    
    If you have a small solo-developer project, consider not using DI at all.
    
    If a dependency isn't tied to an external resource (i.e. web service, file system, or database) and there is only ever going to be one implementation of it, don't put an interface around it and don't use dependency injection for it.  Every DI injection has run-time cost that is much higher than 'new'.
    
    Don't go mad with the power of dependency injection. While you can create cool conditional logic (e.g. changing the implementation depending on the type or parameter of the target), try to avoid creating an undebuggable state machine.
    
    Avoid taking dependencies on your DI container from within your classes.  Sure, declarative attribute-based injection seems cool, but you are weaving a dependency on the DI container into your code.  This is goes against the reason you adopted DI in the first place.
