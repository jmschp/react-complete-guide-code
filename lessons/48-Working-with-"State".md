# 48. Working with "State"

To tell React that it should reevaluate a component and render any update. First we need to import the the `useState` function, like so:

```javascript
import React, ( useState ), from 'react'
```

This function allows us to define values as State, as state where changes to these values should reflect in the component function being called again.

The `useState` function is a React Hook. The React Hooks start their names with _use_, and they must be called inside the component, but not on nest functions.

As an argument to this function we can pass the initial State, if there is one, if not we can pass an empty string.

- With initial State `useState(<my-initial-state>)`
- Without initial State `useState("")`

The `useState` function return an Array, where the first value is the variable itself, and the second element in the array is the updating function.

```javascript
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const updateTitleHandler = () => {
    setTitle("Updated");
  };
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
