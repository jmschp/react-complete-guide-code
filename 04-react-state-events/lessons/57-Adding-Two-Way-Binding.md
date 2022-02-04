# 57. Adding Two-Way Binding

Two-Way is a concept that allows us, not only to cellect user input on a form, bu also set the input. For Tha we need to add the HTML attribute `value` to the `input` elements, and point is to the corresponding State property. With this we can set the input programmatically.

Now we don't just listen to changes in the input, but we also feed the state back into the input, so that when we change the state, we also change input.

With this for example, we can clear all the inputs when the form is submitted.

```javascript
function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle
      amount: userInput.enteredAmount
      date: new Date(userInput.enteredDate)
    }
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"
          min="0.01"
          step="0.01"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
```
