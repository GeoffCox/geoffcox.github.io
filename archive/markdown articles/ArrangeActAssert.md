# Structure your tests with the Arrange, Act, Assert pattern
The Arrange, Act, Assert (AAA) pattern separates your test into distinct steps using code comments.

## Pattern
Comment each section of a test using implementation comments (//).

```csharp
    // Arrange
    // Act
    // Assert
```

## Example
*Note*: This test is using the When/Then pattern and the Expected, Target, Actual patterns as well.

```csharp
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
```

## Tips
- Don't let AAA comments make you shy about adding other important comments. Add whatever comments are required to properly describe why the test is written that way.
- If your testing framework supports features like setup and tear-down methods or wrapping *Arrange* and *Assert* in delegate try/catch blocks, then you may not need to add the comments to follow the AAA pattern.

## Benefits
- Developers reading the test can clearly distinguish each step of your test.  They are not likely to confuse arranging the condition with what is being tested.
- It fits together with the [When/Then](WhenThen.md) pattern.  Arrange and Act are the *When* and Assert is the *Then*.
- Labeling each step makes it easier to fix a broken test, especially when an exception is thrown during Arrange.