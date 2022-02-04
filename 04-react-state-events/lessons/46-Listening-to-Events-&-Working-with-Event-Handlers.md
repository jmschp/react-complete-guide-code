# 46. Listening to Events & Working with Event Handlers

To all the default HTML element events, there is a prop equivalent in React, which we can add to these built-in HTML elements to listen to this events.

So instead of add an event listener like `target.addEventListener()` to the elements, we add a special prop to the JSX element. For example in the following component `ExpenseItem`, we could add a `onClick` prop to the `<button>Do something</button>` element.

This default events are expose by React as props, and always start with _"on"_. Like `onClick` or `onFocus`. We must pass a function to this special props, but only a reference we must not call it directly. So we could use `<button onClick={someFunction}>Do something</button>`.

We could define the function inside the special prop, as an arrow function `<button onClick={() => {}}>Do something</button>`, or as a normal function `<button onClick={function(){}}>Do something</button>`. But it is usually better to define the function outside the JSX code, and then reference it.

As a good practice we should add the sufix _Handler_ to the function name. Like for example _clickHandler_ or _updateTitleHandler_.

```jsx
function ExpenseItem(props) {
  const updateTitleHandler = () => {
    console.log("Clicked!!!")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">€ {props.amount}</div>
      <button onClick={updateTitleHandler}>Do something</button>
    </Card>
  );
}
```
