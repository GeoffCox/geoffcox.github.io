# Naming

The names you choose in your code matter.

Architecture is structure with a purpose. The right name explains the purpose of that structure. Every component, class, property, function, and variable needs the best name possible. Name choices have a lasting impact on the architecture.  

The right names relate the code to the problem being solved. Code that looks like the problem it is solving is called *screaming architecture*. For example, if you look at the the architecture for a shopping application, it *screams* shopping. It doesn't scream password management or programming framework. Poor names indicate a lack of understanding the problem or a disconnect from the problem (i.e. over-abstraction).

The right name improves developer productivity. Self-describing code requires producing fewer code comments and is easier to maintain. It is also easier for callers to use.

Naming isn't easy:
- Problems are complex: It can be hard to chose clear names that explain the nuances of hard problems.  
- Software is complex: There are many ways to architect and code any solution. Technology and framework choices heavily influence naming. 
- People are complex: They have personal preferences for certain words. They define the same word differently depending on context.

So now that you're motivated, how do you choose the right name? Here is my guide to effective naming.   

## Always look for a better name

As software is developed, you will discover new dimensions to the problem and solution. Changing software requirements may cause another name to work better. Think of every word choice as your best decision at that point in time.  Stay open minded, consider different names, and be willing to change.

Take advantage of the refactoring capability in modern IDEs to rename as needed. Of course, avoid breaking previously shipped interfaces. You may need to write new code migrate callers over to the new name.

A team with a culture of looking for a better name is a team culture of quality coding and architecture.

## Always comment imperfect names

It takes time to find the perfect name. There is not always a clear winner among synonyms. Document problems with your current name.  Document the other names you considered along with their pros & cons. 

While TODO comments are frowned upon, naming documentation should be near the name. As a bonus, it will help others searching the code even if they search for the wrong name.

## Always verify top down

TODO

## Prefer correct grammar 

Programming language is design for human understanding; binary for machine execution and state. While we use programming keywords and syntax, the words are still natural languages. Follow the grammar rules of the natural language whenever possible. 

**Adjective before Noun**

When using English, this means adjectives come before nouns. If you need to distinguish between subtypes of the same thing, prefix with an adjective. For example, classes derived from a File base class should be TextFile, ImageFile, and VideoFile.  They should not be FileText, FileImage, nor FileVideo. 

Developers decompose bigger problems into smaller ones. This creates code hierarchies. The namespaces and paths that represent hierarchy read from top to bottom (e.g. System.Math.Trig, Solution/Project/File/Class/Member). This pattern is correct for hierarchy, but I see this pattern lead developers astray when naming single entities.

**Noun versus Verb**

A noun identifies a person, place or thing. A verb describes an action, state change or occurrence. Use nouns for classes and state.  Use verbs for functions. 

Many nouns in English are verbed (e.g. shop -> shopper) and almost any verb can be used as a noun (e.g. sort -> sorter). This [anthimeria](https://en.wikipedia.org/wiki/Anthimeria) shows up most often in code when an object represents a function (a.k.a functor). There are plenty of valid use cases for functors (especially in functional programming), but functors can indicate a lack of attention to naming and architecture.  

For example, a class named Orderer. It has a method called Order() that takes a customer and a product array as parameters. A likely better architecture would define a Customer (noun) with an Order method (verb).  If separating the customer from ordering process is desired, then consider a Cart (noun) with an Order (verb).

**Verb tense**

Present tense should be used for methods (e.g. freeze instead of frozen). Past tense should be used for events (e.g. clicked instead of click). Prefixing events with 'on' (e.g. onClick) allows for wiggle room through [perfect tense](https://www.merriam-webster.com/dictionary/perfect%20tense). Use [progressive tense](https://www.merriam-webster.com/dictionary/progressive%20tense) for events raised before the action occurs (e.g. clicking) or repeatedly during an action (e.g. dragging, dropping).

**Cardinality**

Use singular form when there is one and plural form when there are many. The most common mistake I see is when there are collections of collections. For example, multiple customer addresses used for different purposes like home, work, billing, and shipping.  <<<<<<>>>>>>

If there can be only one instance (i.e. singleton), you can prefix with 'the' (e.g. TheApplication).

## Prefer the common tongue

Sometimes there are two or more equally good names. You might have a coin-flip choice between List or Collection. When this happens, consider which name is used most commonly by your customers, in similar systems, and in the frameworks you adopt. Avoid assuming you are the customer and choosing your personal preference.  Use data whenever possible to choose the best name.

At one time, I would use googlefight.com as my last resort to see which of two terms is the most popular. There were often counter-intuitive results.  For example, List vs. Collection has Collection winning by almost 3 to 1.

## Judiciously provide abstraction

Abstraction and encapsulation are primary 

## Judiciously distinguish differences
## Judiciously enforce consistency
## Avoid hubris 
## Avoid being too clever
## Avoid false metrics (length, alphabetizing, future-proofing)
## Avoid synonyms

