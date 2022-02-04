# 58. Child-to-Parent Component Communication (Bottom-up)

To pass data from child to parent we need to pass a function from the parent to child as props. This function can than be called in the child component with arguments to return the data.

In this example we need to pass the data from the `ExpenseForm` component to the `NewExpense`, and finally to the `App` component, where we need to add the new expense to the `expenses` array.

We can't skip components in between, props can only be passed from parent to child.

In the `App` component, we can define a function that is going to receive a new expense and add it to the `expenses` array. The we pass this function as props to the `NewExpense` component.

```javascript
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const newExpenseHandler = (expense) => {
    expenses.push(expense)
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
```

In the `NewExpense` component we can define a function `saveExpenseDataHandler`to pass to the `ExpenseForm`. In this function we add can copy to a new object the user entered data.

```javascript
function NewExpense(props) {
  const saveExpenseDataHandler = (userExpenseData) => {
    const expenseData = {
      ...userExpenseData,
      id: Math.random()
    }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
```

In the `ExpenseForm` component we receive the `saveExpenseDataHandler`, and we can pass to it the user input data.

```javascript
function ExpenseForm(props) {
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
    const formExpenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(formExpenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            nim="0.01"
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
