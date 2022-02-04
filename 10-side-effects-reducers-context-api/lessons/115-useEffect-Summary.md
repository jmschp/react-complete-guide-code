115. useEffect Summary

Use effect running cycle

With no dependencies, it runs every time the component runs, after the component render cycle.

The cleanup function will run before the use effect code runs, except the first time the component is mounted and rendered.

```javascript
useEffect(() => {
  // use effect code here
  return () => {
    // clean up code here
  };
});
```

With an empty array as a dependency, it only runs the first time the component is mounted. So it only runs once.

The cleanup function will run when the component is unmounted.

```javascript
useEffect(() => {
  // use effect code here
  return () => {
    // clean up code here
  };
}, []);
```

With a dependency, it run the first time the component is mounted, and then each time the dependency changes.

The cleanup function will run before the use effect code runs (when the dependency changes), except the first time the component is mounted and rendered.

```javascript
useEffect(() => {
  // use effect code here
  return () => {
    // clean up code here
  };
}, [someDependency]);
```
