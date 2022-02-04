# 55. Updating State That Depends On The Previous State

When when we need to update the State, and we depend on the previous state, we shouldn't just copy the State object like we did in the last lesson. Coping the state object could lead to inconsistencies in the component State.

To do this we should pass a function to the update State function. This function will be executed by React and will receive the previous State snapshot as argument.

- Incorrect:

```javascript
setStateFunction({
  ...stateObject,
  someKeyState: "new state value",
});
```

```javascript
setUserInput({
  ...userInput,
  enteredTitle: event.target.value,
});
```

- Correct:

```javascript
setStateFunction((prevState) => {
  return { ...prevState, someKeyState: "new state value" };
});
```

```javascript
setUserInput((prevState) => {
  return { ...userInput, enteredTitle: event.target.value };
});
```
