# 125. Building & Using a Custom Context Provider Component

In this application we could extract the login and logout logic to a custom context provider. This way the `App` component does not have to handle this responsibility.

```javascript
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // Just a dummy function, useful to provide autocompletion to the IDE
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  // We use the AuthContext object to create a custom context provider.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem("userLoggedin");
    if (userSession === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("userLoggedin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("userLoggedin", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```
