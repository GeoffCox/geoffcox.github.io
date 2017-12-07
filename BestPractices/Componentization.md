Best Practices: Components
===
Almost every solution I encounter contains a ton of component projects.  It doesn't seem to matter if the project and/or the team is small or large.  Everybody loves creating lots of projects.

To create feels divine
---
Putting code in a project feels good. It is a happy, separate place away from the potential ugly of other code.  An isolation unit makes the code appear *done*.  Our natural instinct is that we won't touch the code or the unit tests of code in a separate project.

Creating projects is super easy. Modern IDEs are new project cannons.  A shiny new C# project feels so clean. However, spewing C/C++ projects doesn't feel as great.  C++ name mangling is a nightmare.  Deciding between a static library and having to call LoadLibrary() dampens mood of the party.

Creating projects avoids ridicule for building the dreaded *monolith application*.  Lots of projects makes us feel like architects.  "Hey, look all my whatzit code is in a separate project.  I'll call a *subsystem*.  It will take over the world as the most reused whatzit ever invented.  Somebody give me a raise."  Delusions of grandure are a common theme in spawning projects.

But there are mouths to feed
---
After creating all those projects, there will be inevitable regret.  Each project incurs some not-so-fun overhead:

- Each project needs to properly versioned when its public contract changes
- Each project needs to have its dependencies specified.  If you use NuGet, it means updating a dependency in every project that needs it.
- Interdependent code separated into separate project can create circular dependencies.
- Each project needs to be added to the build.
- You pay a 2x cost if every project also has a unit test project.
- If you didn't build your APIs to separate concerns, refactoring means changing projects all over the place.
- Every component exposes a public API.  When you make a change to any public API, you need to consider who it might break.  Most teams don't track who is using which API very well.
- And the worst for .NET developers is that more project means worse performance.
  - Every time a call crosses an assembly boundary, .NET runs a security stack walk.*  
  - The JIT compiler can better optimize code within the assembly boundary than across them.


*Full Trust application may have a very cheap security stack walk, but most modern applications should be able to run in reduced trust environments.

Family planning
---
Individual projects do provide value, but need to be balanced against the cost.

I create a new project for one of the following reasons:

- There are multiple *real applications* that need to re-use code *right now*.
  The code is worked on independently by another team/person and ships on a different cadence.
- The contract must be separated from several possible implementation.
- The code takes significant hard dependencies that must be isolated from the rest of the code.
- The code is injected into another container that requires a strong-name and limited code access security.

Good parenting makes the difference
---
You can create proper architectural boundaries without creating project boundaries.  A solid API with a precisely defined contract and proper implementation can be just as useful in a folder as it is in a project.  There is nothing magical about the project/DLL boundary that offers more protection from dependency failures, breaking a contract, or buggy code.

> Rome has grown since its humble beginnings that it is now overwhelmed by its own greatness.
