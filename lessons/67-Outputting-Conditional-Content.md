# 67. Outputting Conditional Content

Conditional content is about rendering different content under different conditions.
For example when filtering expenses, when no expense matches the filter we might want to render a message.

We can use the ternary operator in the JSX to apply the conditional content. For example the component return statement would look like this:

```javascript
return (
  <Card className="expenses">
    <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
    {expenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })
    )}
  </Card>
);
```

But it might be a better approach to implement outside the return statement.

```javascript
function Expenses(props) {
  const [filteredYear, setYear] = useState("");

  const filterExpenses = (filteredYear) => {
    if (filteredYear !== "") {
      const filteredExpenses = props.expensesList.filter((expense) => {
        return expense.date.getFullYear() === Number(filteredYear);
      });
      return filteredExpenses;
    } else {
      return props.expensesList;
    }
  };

  const filterExpenseHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expensesContent = <p>No expenses found</p>;

  if (filterExpenses(filteredYear).length > 0) {
    expensesContent = filterExpenses(filteredYear).map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      {expensesContent}
    </Card>
  );
}
```
