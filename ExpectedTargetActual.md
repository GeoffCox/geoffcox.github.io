<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

### [<i class="fa fa-home"></i>](README.md)

# Name your variables with the Expected, Target, Actual pattern

The Expected, Target, Actual (ETA) pattern distinguishes the entities you use for each step of your test.

## Benefits

- The ETA pattern keeps your test variables independent of the code under test. 
- Like the other naming patterns, it creates consistency that makes the tests easier to understand.
- It can prevent mistakes such as confusing the expected and actual parameters during assert or testing a mocked instance.
- It fits together with the [Arrange, Act, Assert](ArrangeActAssert.md) pattern.  Expected is set during *Arrange*, Target is called during *Act*, and Expected and Actual are compared during *Assert*.

**Pattern**

- Name the expected result variable 'expected'
- Name the instance of the class being tested 'target'
- Name the actual result of of the test 'actual'

## Example

```csharp
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
```

 ## Tips

- If you end up with multiple variables, use expected, actual or target as prefixes (i.e. expectedFirstName and expectedLastName).
- Prefer to use the 'var' (variant) keyword if your language supports it.  This makes your test resilient to type changes that are not critical to the test.  If verifying types are important the test, verify them in the //Assert section. 
