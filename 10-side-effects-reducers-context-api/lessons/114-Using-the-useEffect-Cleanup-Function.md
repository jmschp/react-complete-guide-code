# 114. Using the useEffect Cleanup Function

Suppose that in the login example instead of only checking for the form validity, we are making an HTTP request to check the user credentials. We don't want to make an HTTP request on every key stroke, so we could set a timeout to wait for the user to stop typing.

In this example we can set a timer to check form validity, but without effect clean up we would be setting a time fro each key stroke.

With the effect cleanup we can clear the previous timer so we only have one timer running. To setup effect cleanup we have to return a function in the `useEffect` hook.

React will run this function every time before it runs the code in the `useEffect` hook, except for the first time it renders the component.

So in this case, before starting a new timer, we first clear the previous timer.

```javascript
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [setFormIsValid, enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
```
