# Name your tests with the When/Then pattern
The When/Then naming pattern captures the condition and expected result of the test. 

## Pattern
**When**_ActionCondition_**Then**_ExpectedResult_

- Action: The action is what produces the result you want to inspect.  It could be a method call, a property change, or forcing an event to fire.
- Condition: The condition describes any important state before the action.  For default cases, it is optional.
- Expected Result: The expected result describes what should be the state after the action.

## Examples
Unit testing a Name property:

```csharp
public void WhenNameSetThenValueSet() {}

public void WhenNameSetToDifferentValueThenPropertyChangedRaised() {}

public void WhenNameSetToSameValueThenPropertyChangedNotRaised() {}

public void WhenNameSetToNullThenExceptionThrown() {}

public void WhenNameSetToEmptyThenValueSet() {}
```

Unit testing a bank account transfer method:

```csharp
public void WhenTransferCalledWithAmountGreaterThanMaximumThenExceptionThrown() {}

public void WhenTranserCalledAndTransferCancelledThenAccountBalancesNotChanged() {}
```

## Tips
- Use the past tense of verbs.  Past tense helps solidify the test as a factual entity in the readers mind.
- Avoid passive verbs (e.g. is, are).  They take up space without much benefit and humans reading the test name will fill these in automatically in their heads.
- Choose nouns and verbs you would use when describing the test to other developers (e.g. set a property, call a method, raise an event).
- Keep the names just long enough to distinguish one test from another and make the intention of the test clear.  

## Benefits
- The test name is easy to read as a sentence.  This is how most developers would describe a test to someone else.  
- The descriptive name avoids the need for comments to explain what the test does.  
- The pattern encourages asserting one logical result per condition. This makes the test more atomic and less likely to partial failures that require stepping through with the debugger.
- The test is easy to distinguish between other tests in a run.  Any decent test runner shows you where the test lives in the code hierarchy (e.g. project, namespace, and class) so putting code structure in the name is unnecessary.