# 110. What are "Side Effects" & Introducing useEffect

The main job of ReactJS is to render UI and react to user input. Side Effects deal with other tasks not directly related to render the UI, like tore data in browser storage, or send HTTP requests to backend servers.

To handle Side Effects we use the `useEffect` hook.

```javascript
useEffect(() => { ... }, [ dependencies ]);
```

The first parameter is:

> A function that should be executed AFTER every component evaluation IF the specified dependencies changed. Your side effect code goes into this function.

The second parameter is:

> Dependencies of this effect – the function only runs if the dependencies changed. Specify your dependencies of your function here

More on [React docs](https://reactjs.org/docs/hooks-effect.html)
