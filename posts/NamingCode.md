# How to name things in code

The names you choose in your code matter. Names give meaning to the structure of code. Paying attention to naming is critical to software architecture. Good names make developers more productive. Well named code is easier to understand, easier to maintain, less likely to have bugs, and requires fewer code comments.

Finding the perfect name isn't easy. It is a problem made messy by natural language. 
- There are often multiple definitions for the same word. 
- People can interpret words differently and have personal preferences.
- We build on top of a history of existing names and an evolving dictionary.

Here are my best practices for naming things in code.

## Always look for better names

- Don't try to pick a perfect name the first time. As you solve problems, use what you learn about the problem space. 
- Write sample caller code and unit tests to evaluate your names.
- Let developers unfamiliar with your code read it and see if they can understand it without additional explanation.
- Comment imperfect names in code. List the names you rejected and why. 
- Keep the cost of renaming low by using the refactoring tools available in modern IDEs and version control. 

## Prefer correct grammar

These are some rules for English. If you code in another language, they may not apply.

- Adjectives come before nouns.
- Use nouns for structures and classes.
- Use verbs for methods.
- Use proper verb tense for events to distinguish between the present (e.g. onDrag) and past (e.g. onDropped). 
- Use singular and plural to indicate if there is one or many (i.e. cardinality).
- Avoid "verbing" nouns unless you are naming a functor.  See [anthimeria](https://en.wikipedia.org/wiki/Anthimeria).

## Avoid distinguishing without a difference

- Use the minimal number of words to describe the purpose of the code. 
- Add words when you must distinguish one thing from another. 
- Keep names short by leveraging structural hierarchy (e.g. namespaces, modules).
- Avoid adding empty words evident from the code structure (e.g. Object, Type, Struct, Class, Method)

## Prefer to be humble

- Prefer the most concrete name related to your problem domain. While abstraction and encapsulation are important, over-abstract names create disconnect the code from the problem it is trying to solve.
- When faced with several good names, choose the most commonly used name.
- Don't use synonyms for different things and pretend there is some subtle difference only you can see.
- Don't be too clever. No one wants to read code requiring a dictionary and thesaurus.
- Don't use the same names as ones likely to conflict with global scope, popular frameworks, or code keywords.

## Avoid false metrics

- Don't overvalue short names. Auto-complete and intelli-sense are everywhere.
- Don't allow a desire for consistency make you stick with a bad name.
- Don't choose names so they are alphabetized on disk. Modern IDEs can search and browse code easily.
- Choose a name for today, not tomorrow.  Avoid choosing a "future-proof" name for code you haven't written.