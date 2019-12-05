# Why you should avoid StyleCop

[StyleCop](https://github.com/DotNetAnalyzers/StyleCopAnalyzers) is a tool that runs over .NET source code and verifies the test follows a set of [style rules](https://github.com/DotNetAnalyzers/StyleCopAnalyzers/blob/master/DOCUMENTATION.md). 

I worked with many teams that have used StyleCop. Teams varied in size, experience, and code complexity.  Some teams spent considerable time customizing the rules to match their agreed on coding style. I never saw StyleCop prevent a single problem or have a positive impact on the team.

One would expect me to like StyleCop. I like to write clean code in a consistent codebase. I care a lot about developer productivity. I manage a team of developers and need to coordinate their work.  However, there are inherent problems in code style analyzers and issues with StyleCop in particular.

## Style analyzers start from the wrong place

I once asked [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) how he an [Jeff Richter](https://en.wikipedia.org/wiki/Jeffrey_Richter) resolved their style differences when creating the .NET CLR together.  Anders puts the opening curly brace on a new line and Jeff puts it at the end of the previous statement. Anders said that they never had any problem. Whoever authored the block decided and people didn't change it if they touched that code. He then said 

> "If style were important, we would have put it in the compiler".

Style analyzers start from generating compilation errors when rules are violated. This generates more work for developers.

- Code is for humans
- If style were important it would be in the compiler
- Slows the build
- Should never break the build

## Some rules are harmful
- Parens
- Underscore prefix
- Grouping & ordering of members
- Lambda collapse
- But what about turning off bad rules?

## There are  more important things to worry about
- Architecture
- FxCop
- Perfomance

## There are better tools available
- VS compiler can handle XML docs
- Prettier
- Resharper

## 

## Teams that think are more productive
- 100K style fix
- Analyzers lag behind the language and technologies
- 
