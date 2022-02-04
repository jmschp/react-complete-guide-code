# 102. Creating a Wrapper Component

Another solution to wrap the JSX elements is to create a Wrapper component that only returns `props.children`.

```javascript
const Wrapper = props => {
  return props.children;
};

export default Wrapper;
```

We can then wrap other components with the Wrapper component. With this solution we can avoid creating several unnecessary `<div>` wrappers, that will be rendered in the DOM, or having to wrap our components in an array and assign keys to them.
