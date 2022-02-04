# 54. Using One State Instead (And What's Better)

There are two different ways of using the React Hook `useState`. Instead of calling `useState` several times, we can just call it once and pass to it an object.

```javascript
const [stateObject, setStateFunction] = useState({
  someKeyState: "initial State value",
  otherKeyState: "other State value",
});
```

Then when setting the State, we first destructure the initial state object, to copy the values, and the override the new State property want to update.

```javascript
setStateFunction({
  ...stateObject,
  someKeyState: "new state value",
});
```

In the following example:

```javascript
default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });


  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
```
