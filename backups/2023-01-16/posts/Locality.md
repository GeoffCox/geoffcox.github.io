# Organize code using the principle of locality

The conventional coding standard for many projects requires grouping code by access (e.g. public, protected, private), by member type (e.g. properties, methods), or by lifetime (e.g. constants, instance types, static types). There are many tools that enforce these groupings. These rules were defined based on programming languages where the order of statements in the text file determined the compiled memory layout. Following the same rules in modern languages and when modern editors is an archaic process.

Code is edited as text to optimize human understanding and productivity. Organizing code for the computer's sake is counter-productive. The computer prefers binary and you don't want to be typing zeros and ones all day.  Use the the principle of locality to organize your code.

## The principle of locality
In case you aren't familiar with it, checkout [Wikipedia](http://en.wikipedia.org/wiki/Locality_of_reference).

Here's the TLDR;
- If a particular location is referenced at a particular time, then it is likely that nearby locations will be referenced in the near future (Spatial Locality).
- If at one point in time a particular location is referenced, then it is likely that the same location will be referenced again in the near future (Temporal Locality).

Locality has been an important principle in computer storage, video optimization, and caching. It can also be applied to grouping code within a file to help the developer.

## Best practices for locality
Keep fields near the functions that use them. Keep subroutines near the functions that call them. If one function is referenced, then it is likely that the fields and functions it uses will be referenced in the near future.  

Sometimes you can't group everything in perfect clusters. Fall back to grouping things that are most likely to change together and at the same time.

If you have trouble organizing a particular module or class, check if it has very independent groups of fields or methods. It may be that you need to break up your code into smaller pieces where each has a single responsibility. The great thing is that by using locality, you've already grouped related things together - making them easy to put in a new file.

Leverage the modern IDE at your finger tips. Search, reference following, and direct lookup capabilities of IDEs can quickly navigate to the code you are looking for. Don't worry too much that you don't have all the data fields grouped together; a modern IDE can usually give you that view without causing you to re-organize your code.

## Benefits

 - Reduces scrolling when seeking for related fields and methods
 - Helps other understand the code faster as cohesive related units
 - Avoids missing a necessary cascading change to related code
 - Reduces scatter of changes in code reviews and pull requests
 - Don't have to run tools to enforce annoying rules because you have semantically organized the code.