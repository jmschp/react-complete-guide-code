# 128. Refactoring an Input Component

From the Log in component we can extratct the JSX that composes the from inputs and create a component for them, making it more reusable.

This is the type of component where we do not want to use React Context, because it can assume different behaviors and configurations depending on the type of input.

```javascript
import React from "react";

import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
```
