# 64. Rendering Lists of Data

To render a array of items in React we can use the builtin Javascript `map` method to transform each item in a React component. React is then able to render an array of components.

If we pass an array of components like `{<Item /><Item /><Item />}`, React will render each item.

In the expenses app we pass through props from `App` to `Expenses` and array of expenses.

```js
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
```

We can ther use the `map` method to render each item.

```js
function Expenses(props) {
  const [filteredYear, SetYear] = useState("2019");

  const filterExpenseHandler = (selectedYear) => {
    SetYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}
```
