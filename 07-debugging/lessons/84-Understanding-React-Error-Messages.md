# 84. Understanding React Error Messages

To understand an error is important to properly read the error message. In the following error message, we can see:

- error type: `SyntaxError`
- path to file: `/Users/jmschp/code/debugging-react-apps/src/App.js`
- error message: `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`
- line and column: `(43:6)`

```shell
Failed to compile.

./src/App.js
SyntaxError: /Users/jmschp/code/debugging-react-apps/src/App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (43:6)

  41 |         <CourseInput onAddGoal={addGoalHandler} />
  42 |       </section>
> 43 |       <section id="goals">
     |       ^
  44 |         {content}
  45 |       </section>
  46 |
```
