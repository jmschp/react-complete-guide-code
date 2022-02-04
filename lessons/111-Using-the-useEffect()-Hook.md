# 111. Using the useEffect() Hook

In this example we use the `useEffect` hook to see if a user has a session in the browser, and so log him in, this dummy session is a key value pair in the browser local storage(key: `userLoggedin`, value `1` -> user is logged in).

Inside the `useEffect` hook we get the value of the `userLoggedin` key, and check if the user is logged in, is so we update the state `isLoggedIn` to `true`.

In this case the use effect will only run the first time the component renders. Because the dependencies parameter is set to an empty array, there are no dependencies to change.

If we placed this code outside the `useEffect` hook we would end up in an infinite loop, once the user had logged in. Because we would get the value of `userLoggedin`, the condition would evaluate to `true`, and it would update the state, which rerenders the component, and would execute that same logic again and again.

```javascript
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem('userLoggedin')
    if (userSession === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('userLoggedin', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('userLoggedin')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
```
