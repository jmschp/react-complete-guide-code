# 122. Using the React Context API

The first step should be creating a folder where we are going to store our context, for example. Usually we name this folder context or store.

```zsh
|- my-app
  |- src
    |- App.js
    |- components
    |- context
      |- auth-context.js
```

In this file we call `React.createContext()` to create a context object, and we should pass to it the default context, it can be anything, but it is usually an object. `React.createContext()` will return to us an object that contains components.

```javascript
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

To use the context im our app we need to do two things

1. Provide it. So all components wrapped by it will have access to it.
2. Consume it or listen to it.

## Providing context

We need to wrapper the components that need access to the context with the context it self. In this case we will wrap the `App` component because all the app needs access to the `AuthContext`. But we could only wrap individual components.

We do this by wrapping our components with the `Provider` component which is a property of our context object. In this case `AuthContext.Provider`. Now all the components wrapped by it and their children will have access to this context.

With the `value` prop of the provider we can manage our context.

Technically we only need the `Provider` if we do not have a default context or if we want to change the value of the context, which it is usually the case.

```javascript
function App() {
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
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}
```

## Consume context

### Using a consumer

There are to ways of consuming context, with the `Consumer` component or with a React hook. In this lesson we will look at the `Consumer` component.

As in the Provider we need to wrap our component with the `AuthContext.Consumer`.

```javascript
const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
      }}
    </AuthContext.Consumer>
  );
};
```

With context properly set up we can remove the `isAuthenticated={isLoggedIn}` prop from the `MainHeader` component that it the forwards to the `Navigation` component.
