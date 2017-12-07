
I was introduced to the concept of minimal and complete interfaces in Effective C++ by Scott Meyers.  It has been my the guiding principle across my work for almost 20 years.  I have had success applying it beyond interface design; to architecture, component design, configuration, and software planning.

#Minimal#

A minimal interface is as small as possible. Nothing can be removed without callers being unable to achieve what they need.  Minimal interface don't have multiple methods that do the same thing; callers shouldn't have to make a coin-toss decision between methods.

#Complete#

A complete interface isn't missing anything.  It fully satisfies its single responsibility.  Just having all the methods and parameters isn't enough.  The interface defines a complete contract including behavior, validation, performance, and implementation requirements.  

#Impact#

Thinking of software design and engineering in terms of minimal complete is much like a Hoberman Sphere. As the sphere is tossed in the air, it grows.  It shrinks as it is caught.  When I think about completeness, I expand my interface. When I consider what is minimal it collapses it to its essence.  If I'm working on a complicated design and I don't have an epiphany that significantly simplifies my design, then I know I haven't yet thought hard enough about minimal and complete.

Minimal and complete thinking drives considering multiple point-of-view in software design.  

* I consider different design viewpoints: aspect-oriented, feature-driven, and domain-driven design.  
* I think about the qualities of the code: correctness, reliability, performance, maintainability, security, reusability/extensibility, and testability.  
* I evaluate development techniques: test driven development, dependency injection, unit testing strategies, and agile team processes.  
* I follow architectural patterns: SOLID, DRY, and YAGNI.

#Benefits#

Minimal and complete helps get architectures right.  I've crafted a set of minimal and complete interfaces, and components that exhibit emergent behavior. When done right minimal and complete leads to software with exceptionally low bug counts that can be produced on tight timelines.

Minimal and complete can be applied outside of coding to team roles and responsibilities, team processes, documentation, and deployment topologies.  It makes an excellent evaluation tool for existing code bases.  

It has been an invaluable mantra in all aspects of my work.
