# 101. JSX Limitations & Workarounds

## JSX Limitations

Returning more than one root element. The code below will through an error, because we can not return two JSX elements side by side. To workaround this issue we can implement two solutions.

```javascript
return (
  <h2>Hi there!</h2>
  <p>This does not work :-(</p>
)
```

## Workaround

### Wrap in a JSX element

The must common solution is to wrap the side by side elements in an another JSX element, usually a `<div>`. But this will render the `<div>` elements in the DOM. which in big applications can be a problem “`<div>` Soup”.

```javascript
return (
  <div>
    <h2>Hi there!</h2>
    <p>This does not work :-(</p>
  </div>
);
```

### Return as an array

Another approach is to return as an array. React will then render the array items, but because we are dealing with an array, we need to add key prop to each element, or React will through a warning of missing key.

```javascript
return [
  error && <ErrorModal key="error-modal" title={error.title} message={error.message} onConfirm={errorHandler} />,
  <Card key="add-user-card" className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
  </Card>,
];
```
