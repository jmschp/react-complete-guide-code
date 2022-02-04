# 116. Introducing useReducer & Reducers In General

The `useReducer` hook is for state management, in case where we have complex states for example if it got multiple states, multiple ways of changing it or dependencies to other states.

For example in the `Login` component, the `emailIsValid` state dependes on the `enteredEmail` state. Because the way React scheduled state updates, in rare situation we could be checking the not the latest version of the `enteredEmail` state. And because we are dealing with different states we can not use the form `setEmailIsValid((prevSate) => {enteredEmail.includes("@")})`, because `prevSate` does not would the value of `enteredEmail`, but the previous value of `emailIsValid`.

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

  useEffect(() => {
    return () => {
      console.log("cleaning up");
    };
  });

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

[React docs](https://reactjs.org/docs/hooks-reference.html#usereducer)
