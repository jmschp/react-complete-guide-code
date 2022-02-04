# 68. Adding Conditional Return Statements

We can extract the expense list to a new component along side with the logic to render optional content. In there we can use a condition to return something if the list is empty. We can have multiple returns statements for each condition.

```javascript
function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        );
      })}
    </ul>
  );
}
```
