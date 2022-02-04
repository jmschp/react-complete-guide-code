# 117. Using the useReducer() Hook

Just like the `useState`, the `useReducer` return an array, so we can use array destructuring. As a first element it will give as the state snapshot, and as a second element a function that can be used to dispatch a new action (dispatch function) (i.e. trigger an update of the state)

The `useReducer` take as first argument a function, the reducer function, that is triggered automatically once an action is dispatched by the dispatch function. The reducer function receives the latest state snapshot as a first argument, and the action as the second. And it should return the new updated state. React will call this reducer function when ever an action is dispatched.

As a second argument it take the initial state.

And as a third argument it can take a initial function that runs to get the initial state. A function to set the initial state programmatically.

```javascript
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

We can create the reducer function outside the scope of the component function. Because we won't be using any data that is generated inside the component function. The data used and required by this function will be passed to it when it is executed by React.

```javascript
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [setFormIsValid, enteredEmail, enteredPassword]);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });

    setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
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
