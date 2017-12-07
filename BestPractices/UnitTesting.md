Best Practices: Unit Testing
===
I won't pretend that writing unit tests should be the highlight of your day.  Very few people wake up and think 'I can't wait to get to work and write a bunch unit tests'.  Unit testing isn't cheap either.  It requires thinking about the ways your code is going to fail.  

There's a ton of articles and books our there explaining why you should write unit tests, so this article won't spend time focusing on the reasons to unit test.  I imagine the *world's most interesting developer* would say, 'I don't unit test as often as I should, but when I do, I always find bugs I would be ashamed to ship'.

When you have an somewhat unpleasant and expensive task before you, you want to make it as easy as possible and get the most benefit for your hard work.  In software development, that means writing unit tests correctly the first time and avoiding the high cost of having to fix it later.

Below I've outlined straightforward patterns and techniques you can employ to successfully unit test your code.

Follow the When/Then pattern to name unit tests
---
A lot of developers I've met don't care very much about how anything in code is named, much less unit test names.  I have found  a high correlation between poor naming and poor quality code.  I have yet to meet a great developer that does not always carefully consider the right name.

It isn't any different with naming unit tests. A good name helps you distinguish one test from another, verify the test is correct, and get a sense of what your test covers.

Unfortunately, many developers start out with some horrible, hierarchial naming scheme.  The name often involves an unhealthy number of underscores; something like this:

    <ClassName>_<MemberName>_<ParameterName>_<ParameterValue>_<AnotherParameterName>_<AnotherParameterValue>

Ugh! This leads developers into the trap of testing the universe of possible input permutations. It also inhibits considering interesting and useful test cases because they don't fit into the naming scheme.  After writing a bunch of tests named this way, all the test names start looking alike. Because the test name is tightly bound to the code structure, they get out of date when the code changes in the slightest. Ultimately, the team is overwhelmed and new code doesn't get properly unit tested.

The When/Then naming pattern is a better and much simpler approach.

**Pattern**

**When**_ActionCondition_**Then**_ExpectedResult_

- Action: The action is what produces the result you want to inspect.  It could be a method call, a property change, or forcing an event to fire.
- Condition: The condition describes any important state before the action.  For default cases, it is optional.
- Expected Result: The expected result describes what should be the state after the action.

**Tips**

- Use the past-tense of verbs.  It helps solidify the test as a factual entity in the readers mind.
- Avoid including passive verbs (e.g. is, are).  They take up space without much benefit.
- Choose noun and verbs you would use when describing the test to other developers (e.g. set a property, call a method, raise an event).
- Be just formal enough to easily distinguish one test from another and make your intentions clear.

**Examples**

Unit testing a Name property:

- WhenNameSetThenValueSet
- WhenNameSetToDifferentValueThenPropertyChangedRaised
- WhenNameSetToSameValueThenPropertyChangedNotRaised
- WhenNameSetToNullThenExceptionThrown
- WhenNameSetToEmptyThenValueSet

Unit testing a bank account transfer method:

- WhenTransferCalledWithAmountGreaterThanMaximumThenExceptionThrown
- WhenTranserCalledAndTransferCancelledThenAccountBalancesNotChanged

**Benefits**

The When/Then pattern expresses the condition and expected result of the test.  It is easy to read as a sentence (which is how most people describe a test to other folks anyway).  It avoid the need for comments to explain what the test does.  It encourages verifying one result for a given condition; this makes tests more atomic and less likely to partially fail.  

Follow the Arrange/Act/Assert (AAA) pattern to structure unit tests
---
A well-written test distinguishes between of preparing for the test, taking action, and validating the results.  When someone else (or future you) reads your test, each part of the code should be clearly labeled.  

The Arrange/Act/Assert pattern is simple commenting convention that makes it easy.  

**Pattern**

Comment each section of a test using implementation comments (//).

    // Arrange
    // Act
    // Assert

**Tips**

Don't let the AAA comments make you shy about adding other important comments. Add whatever is required to properly describe what the test is doing that isn't obvious from reading the code.

If your testing framework supports features like setup and tear-down methods or wrapping arrange and assert in delegate try/catch blocks, then you may not need the AAA pattern.

**Example**


    [TestMethod]
    public void WhenNameSetToDifferentValueThenPropertyChangedRaised()
    {
      // Arrange            
      var target = new Customer();
      target.Name = "New";
    
      bool actual = false;
      target.PropertyChanged += delegate(object sender, PropertyChangedEventArgs e)
      {
        if (e.PropertyName == PropertyNames.Task.Name)
        {
          actual = true;
        }
      };
    
      // Act
      target.Name = "Name";
    
      // Assert            
      Assert.IsTrue(actual);
    }

**Benefits**

The AAA pattern provides consistency when implementing a test.  It makes the logical flow of each test easy to recognize.  It goes hand-in-hand with the When/Then pattern because you can clearly distinguish the condition, the action, and the result.

Fixing a failing test also gets easier.  Let's say a test fails with an exception.  While debugging you find that the code throwing the exception is in the arrange block.  You instantly know the problem is likely in your test setup and not in the code under test.

Follow the Expected/Target/Actual (ETA) pattern to name unit test variables
---
Variable names are important in unit tests too.  Many unit tests I've seen mimic the variable names of the code under test.  Just like unit test names that are bound to the code structure, variable names also get out of date.  

I find developers are a bit lazier when writing unit tests and use shorthand or abbreviations in variables. This creates two different terminology sets for another developer reading tests to understand.  You really want your variable names to be about the test and not the code you're testing.

Just as the AAA pattern distinguishes different steps of the test, the Expected/Target/Actual pattern helps distinguish between the result you expect, the target of your test, and the actual result. 

**Pattern**

- Expected: The expected result.
- Target: The instance of the class being tested.
- Actual: The actual result.

**Tips**

- If you have multiple expected/actual values, then prefix those variables with 'expected' and 'actual'.
- Prefer to use the 'var' (variant) keyword if your language supports it.  This makes your test resilient to type changes that are not critical to the test.  If verifying types are important the test, verify them in the //Assert section. 

**Example**


    [TestMethod()]
    public void WhenNameSetThenValueUpdated()
    {
      // Arrange
      var expected = "Name";
    
      var id = new Guid("04360d3f-76bb-42c7-96dc-982934c39a3c");
      var publishedLocation = "PublishedLocation";
    
      var target = new Enlistment(id, publishedLocation);
    
      // Act
      target.Name = expected;
      var actual = target.Name;
    
      // Assert                                  
      Assert.AreEqual(expected, actual);
    }

**Benefits**

The ETA pattern keeps your test variables independent of the code under test. Like the other naming patterns, it creates consistency that makes the tests easier to understand.

It also helps with correctly validating results.  I've seen many tests where the expected and actual were accidentally swapped. This causes a confusing test failure message.  

I've even seen a set of tests accidentally test a mock object rather than the real object because they didn't identify the target of the test.

Match the number of unit tests to your code value
---
Consider the importance of your code.  Will it be around for a long time (i.e. years)?  Is it called millions of times a day?   What is the impact if it doesn't work? Is it in the core of the product?  

Also consider the volatility of your code. How likely is it that this code will change in the future?  How many external dependencies does your code rely upon?  Will any of your code be ported to another language or framework?  Will there be new requirements? Will you likely find a better design?

The more important the code, the more unit tests it deserves. If the code is important and volatile, it deserves even more unit tests. 

*-- Begin Personal Story--*

When I was the web dev lead for MSDN, we rewrote the entire web stack to move the code from ASP.NET Forms to ASP.NET MVC.  We ended up with nearly *10K* unit tests.  That's a lot of unit tests for 8 developers over 18 months.  

OK..OK, we went way overboard with testing content boundary cases.  However, spending the time ensuring that our core (e.g. URL parsing, data access, content transformation) had full code coverage paid off over and over.  That code is called every time you look up any topic on MSDN. Developers are an unforgiving lot if you 404 the documentation for string.Format().  

If I could go back in time, I think we could have been a lot smarter in selecting which tests we needed.  However, I'm confident we would never have shipped without those critical unit tests.  They saved us huge amounts of debugging time when anything broke because we didn't have to worry about the core of our system.

*--End Personal Story--*

**Process for writing the right number of unit tests**

There's no magic formula here.  Like almost all complex tasks, the right approach is almost always to keep it simple and iteratively work towards a solution.

1. Visually inspect your class and fix obvious problems.  Consider having another developer review the code.
2. Write one or two positive† unit tests that verify the key functionality of your class.
3. Review your class for any complex code.  Write a couple of unit tests to cover those cases.
4. Review your tests and code coverage.  
5. If you are confident the tests verify the class works, and there are enough tests to match the importance of the class, then STOP.  Otherwise, add one more test and go back to #4.

† A positive test is one where the inputs are those that are expected and the method under test succeeds.  There are typically four kinds of tests: positive, negative, boundary, and stress.

**Tips**

Always focus on testing the most important and volatile code first.  Don't start with trivial parameter inputs; they have very low return on investment.  

Don't bet on code coverage to mean that you've really tested your code.  Well-factored code is an enigma to code coverage tools because so many code paths funnel to a single point.  Nothing beats understanding your class and testing its essence.

Fun ways to fail
---
I've listed my favorite anti-patterns for unit testing below and some ways to avoid them.  If you witness these behaviors, be prepared for some pain.  I've been guilty of all of these at some point.

**Spend hours and hours factoring your unit test code to make it DRY ('Don't Repeat Yourself').**  Include a bunch of mode switches so that any change in your shared methods cause hundreds of tests to fail in weird ways.  Make writing unit test infrastructure your full-time job.  Shroud it in mystery and create job security.  

*How to avoid*: Don't worry about a little cut-and-paste coding in unit tests.  Atomic tests are worth a little search-replace from time to time.

**Believe you are a coding god.**  Your code doesn't need unit testing because you always write perfect code.  Those other devs are beneath your omniscient understanding.  

*How to avoid*: Unit test and write down all the bugs you find.  Discover some humility.

**Mock yourself.** Create large sets of mock objects to ensure you test every last line of implementation.  Spend days getting that switch statement to show 100% code coverage.  

*How to avoid*: Focus on unit testing the contract of classes.  Mocks are to isolate dependencies, not verify implementation.

**Let your unit testing framework drive all unit testing decisions** or better yet, work tirelessly to make your unit tests portable to every test framework.  

*How to avoid*: Decide what you want to test and then choose the right tool for the job.

**Hide feature and end-to-end tests inside unit tests.**  Spend lots of time waiting for mutexes for background database calls.  Re-test every layer in your layer-cake architecture. 

*How to avoid*:  Create an feature test project and write your tests their.  Consider using a load testing framework and really give your product a work out. 

**Get really clever and use random numbers in your tests** or do fuzz testing of security.  This way no test failure is ever repeatable and you can make your coworkers think they are going insane.  
 
*How to avoid*: Make sure your tests are as repeatable as possible.  Properly catch exceptions and determine if they are expected or unexpected.

**Comment out your shame** Work on a huge feature to check-in all at once.  Drop that code bomb on your unsuspecting team.  Oh, a bunch of unit tests fail? Well, it's a work in progress so just comment out those tests and put in a TODO to fix them later.  

*How to avoid*: Check in your code and unit tests together.  Run them locally before check-in.  Have a gated build that runs your unit tests.
