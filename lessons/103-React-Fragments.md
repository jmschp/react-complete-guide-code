# 103. React Fragments

React has a built in wrapper component, that we can use so we do not need to cerate our own wrapper component. It called `Fragment`

> It’s an empty wrapper component: It doesn’t render any real HTML element to the DOM. But it fulfills React’s JSX’ requirement.

```javascript
return (
  <React.Fragment>
    <h2>Hi there!</h2>
    <p>This does not work :-(</p>
  </React.Fragment>
);
```

Depending on project configuration we can use a simpler alternative.

```javascript
return (
  <>
    <h2>Hi there!</h2>
    <p>This does not work :-(</p>
  </>
);
```

https://reactjs.org/docs/fragments.html
