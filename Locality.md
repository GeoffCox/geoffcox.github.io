# How I organize my code
Within each file, I like to keep fields and class members near the functions that use them.  I try to keep functions that call each other as together as possible.

This goes against the conventional practices of grouping by access (public, protected, private), by member type (constant, property, and method), or by lifetime (instance, static).

Several style check & correct tools follow what I think are antiquated rules often based on the constraints of other languages.

# Locality
In case you aren't familiar with the principle of locality, checkout the [Wikipedia](http://en.wikipedia.org/wiki/Locality_of_reference)  definition.

While locality is discussed in the context of grouping data in that are accessed near each other in time, it can also be applied to how we group code within files.

- If a particular location is referenced at a particular time, then it is likely that nearby locations will be referenced in the near future (Spatial Locality).

- If at one point in time a particular location is referenced, then it is likely that the same location will be referenced again in the near future (Temporal Locality)

# Code Locality

If one function is referenced, then it is likely that the fields and functions it uses will be referenced in the near future.  

So by putting things that are related near each other, I have found:

- I spend less time scrolling and searching
- Others can read and understand the code faster
- There is less likelihood creating failure in upstream dependents when making a change.

One common objection I hear is that locality makes it harder to see the data payload of a class. Developers are often used to grouping fields and functions for the compilers benefit rather than their own.  Modern IDEs can often show you the hierarchy of class members in any grouping so I take that advantage to optimize my code organization for editing.

