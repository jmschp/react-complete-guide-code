# 66. Understanding "Keys"

When we are dealing with lists we should pass to the component being render in the list a special prop named `key` with a unique identifier, so when React has to render the list, for example when a new element is added, it knows which element has to update.

For example in the `<ExpenseItem />` being rendered in the list we would pass the `key` prop.

```javascript
function Expenses(props) {
  const [filteredYear, SetYear] = useState("2019");

  const filterExpenseHandler = (selectedYear) => {
    SetYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      {props.expensesList.map((expense) => {
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

export default Expenses;
```
