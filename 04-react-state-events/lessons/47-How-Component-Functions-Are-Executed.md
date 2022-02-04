# 47. How Component Functions Are Executed

To updated the title we CAN NOT simply do something like this:

```jsx
function ExpenseItem(props) {
  let title = props.title;

  const updateTitleHandler = () => {
    title = 'updated'
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">€ {props.amount}</div>
      <button onClick={updateTitleHandler}>Do something</button>
    </Card>
  );
}
```

This as to do with the way React works and parses JavaScript. React go through all the components translating each component to a function and calling it, until no component is left, in the end it renders everything on to the DOM. But React only doe this once.

To tell React that something has changed and that some component has to be reevaluated, we use **State**.
