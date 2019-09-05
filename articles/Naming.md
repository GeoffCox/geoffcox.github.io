# Naming

The name chosen for each and every part of a code base is important. Naming is critical for code at the heart of a system because it influences all the code that depends upon it.  

A good name describes what a function, parameter, interface, class, class member, or component does; it removes as much of the need for a comment as possible. A great name defines the purpose of the code so that its contract is immediately clear to callers; what it does and what it doesn't do. The best names also amplify the architectural principles and reinforce the structure of the entire system.

The process of defining the semantically right name is very difficult. Even a small software system has a lot of parts with complex relationships between them. Software is virtual and often shouldn't map one-to-one to concepts within problem domains. We work to encapsulate and abstract the implementation details from the caller which introduces new concepts that must be named.

Fortunately, names doesn't have to be perfect at inception. Development tools continue to improve at refactoring and renaming and languages are providing more consistent naming guidelines. As the implementation takes shape and is refactored, better names are discovered. We learn more about the problem domain as we code and make better distinctions between names.

# Leverage language constructs

Assuming you are writing code in English, then code name should follow English constructs.  

# Prefer minimal and complete names
# Default to the most familiar name
# Test the name by using it
# Document imperfect choices
# Avoid unimportant metrics
  - name length
  - alphabetizing
  - future collisions (most of the time)
# Avoid hubris
# Avoid synonym hell
# Be a chameleon for consistency

