# Organize Code by Locality of Reference
Organizing class members by access modifier (public, protected, private)or by member type (properties, methods, events) in modern languages are antiquated practices.

Organizing code to match memory layout or header/implementation grouping constraints is a holdover from C/C++ that isn't necessary today. Unfortunately a couple of tools (I'm looking at you StyleCop) want to enforce these rules in C#.

## The Principle of Locality
The principle of locality (referred to as the [locality of reference](http://en.wikipedia.org/wiki/Locality_of_reference) to distinguish it from the physics principle) says:

- If a particular location is referenced at a particular time, then it is likely that nearby locations will be referenced in the near future (Spatial Locality).
- If at one point in time a particular location is referenced, then it is likely that the same location will be referenced again in the near future (Temporal Locality)

This directly affects how developers should group class members:

> If one class member is referenced, then it is likely that related class members will be referenced in the near future.  

## Examples
- A field declared before the property that exposes it.
- A field declared before the method that uses it.
- A helper method after the method that calls it.

## Tips
- Files are serial so you might not be able to always group all code together.  Do your best, but realize that a class with a complex web of dependencies internally might need to be re-designed.
- In C#, avoid #regions except for implementing interface contracts.  Modern tools have excellent search and humans are pretty good at vertical scanning.

## Benefits
- Reduced scrolling when reading and modifying code.
- Faster comprehension when reading code as related code calls are closer together.
- Fewer due to failure to update code dependent on changed code elsewhere.
- Encourages functional decomposition (i.e. keeping methods short and sweet)

