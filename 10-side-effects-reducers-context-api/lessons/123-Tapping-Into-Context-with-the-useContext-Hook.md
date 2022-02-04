# 123. Tapping Into Context with the useContext Hook

## Consume context

### Using a React hook

To consume a context object using React hook, we need to import from React `useContext` hook. We pass to it the context object as argument, and it will return to us the context content.

```javascript
import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
```
