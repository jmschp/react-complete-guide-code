# 106. Working with "ref"s

Refs are a React feature that allow us to get access to DOM elements and work with them. The `useRef`, is the React hook being this feature, with it we can create a connect with the DOM element and the JavaScript code.

To connect a HTML to Ref we first call the `useRef` hook and assign it's value to a variable. This being a React hook can only be used inside functional components.

```javascript
const myElementRef = useRef();
```

Then in our JSX element we use the special prop `ref` to connect it.

```javascript
<div ref={myElementRef}></div>
```

This would connect the `<div>` HTML DOM element to the Ref. When React reads this code it will set the value of `myElementRef` to an object with a key named `current` containing the `<div>` DOM node.

```javascript
{
  current: div // the div real DOM node
}
```

We now can use the this DOM node through the Ref.

It is not recommended that we directly change data in the ref, mostly we should use it to read data, and let React handle DOM changes for us. Although in some recommended it can be ok, like in the following example, were we read data from the refs `nameInputRef`, `ageInputRef`, and then reset the value from the input `nameInputRef.current.value = "";`, `ageInputRef.current.value = "";`.

This is a use case using `useRef` instead of `useState`. Usually when we only need to read a value it's better to use Refs instead of State.

```javascript
import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
```
