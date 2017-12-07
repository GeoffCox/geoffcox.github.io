Best Practices: Code Locality
===
Are you a C#/.NET developer who groups class members by access modifier (public, protected, private) or by member type (properties, methods, events)?  If so, you are following an antiquated practice.  

C# syntax evolved from C/C++ syntax so that most developers would be comfortable moving to managed code.  This was great for early adoption of C#, but it caused some C/C++ practices to come along for the ride.  

C/C++ care about the ordering of fields because it affects the memory layout of the instanitated object.  Also, access modifiers were easier to specify as sections rather than per member. C# doesn't have this restriction unless you are interacting with native code through P/Invoke or COM.

The Principle of Locality
---
The principle of locality (referred to as the [locality of reference](http://en.wikipedia.org/wiki/Locality_of_reference) to distinguish it from the physics principle) says:

- If a particular location is referenced at a particular time, then it is likely that nearby locations will be referenced in the near future (Spatial Locality).
- If at one point in time a particular location is referenced, then it is likely that the same location will be referenced again in the near future (Temporal Locality)

This can be translated directly to class members relationships:  

> If one class member is referenced, then it is likely that related class members will be referenced in the near future.  

Don't wear out the scroll bar
---
If two related class members are likely to be referenced together in time, then you should put them together in space.  By keeping highly related code as close together as possible, you are significantly reducing the need for the user to scroll to another location.  Moving related code to be together is akin to defragging a hard drive to prevent sector scans.

Because developers change code, there is an added benefit that needs to be called out.  If a developer changes code and related code is nearby (i.e. on the screen), they are more likely to ensure that the related code is updated too.  **This means fewer bugs!**

Come together, right now
---
Files are serial, and you may have many relationships between code elements.  A property is related to its field, but maybe also to a method that uses the property.  You can't put everything near everything else.  Just do your best to keep highly related class members together.

- Declare a field just before the property that exposes it.
- Declare fields that don't have properties just before the method that instantiates them or sets their value.
- Declare constants and statics just before the method that uses them.
- Declare a helper method immediately following the calling method.
- Declare the method that raises an event immediately following the event declaration.
- Declare an event handler immediately following the member that subscribes to the event.

Note: I avoid #regions.  The expanding and collapsing of tree nodes is as more work as scrolling even with the keyboard shortcuts.  Humans are pretty good at vertical scanning, and collapsed regions just hide too much information.

Benefits
---

- Less scrolling
- Easier for others to understand code when they are likely to see it all the related code together.
- Encourages functional decomposition (i.e. keeping methods short and sweet)
- Reduces the chance of bugs caused by forgetting to update related code.
- Easier to remove related code if you need to re-factor or delete it.

