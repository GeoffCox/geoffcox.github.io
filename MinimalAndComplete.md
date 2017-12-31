<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

### [<i class="fa fa-home"></i>](README.md)

# Design Minimal and Complete Interfaces

I was introduced to the concept of minimal and complete in [Effective C++](https://www.amazon.com/Effective-Specific-Improve-Programs-Designs/dp/0321334876) by Scott Meyers.  

It has been one of my guiding principles in my work for almost 20 years.  Applying it to interface design but also to component and system architectures has repeatedly helped me produce better code.

## Minimal

A minimal interface is as small as possible without losing required functionality. 

Minimal interfaces don't have multiple methods that do the same thing; callers shouldn't have to make a coin-toss decision between methods.

## Complete

A complete interface isn't missing anything.  It fully satisfies its single responsibility.  

Just having all the methods and parameters isn't enough.  The interface defines a complete contract including behavior, validation, performance, and implementation requirements.  

## Benefits

- It naturally leads to following the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- It helps follow the [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) process
- The number of methods you need to maintain is at a minimum.
- You are forced to think carefully through the purpose and requirements of the interface.

## Tips
- Minimal and complete can quickly become difficult when convenience methods are added.  Write out the code you expect most callers to use and then consider if the convenient methods are really needed, or if the inconvenient methods can be improved.
- Be aware of false need.  Often knowing the constraints of the implementation will cause developers to violate minimal and complete in the interface.