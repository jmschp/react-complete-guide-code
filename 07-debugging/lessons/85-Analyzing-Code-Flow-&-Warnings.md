# 85. Analyzing Code Flow & Warnings

When working with javascript it is very important to have the browser console opened. Their we can see silent JavaScript errors and warnings.

In this case because we have a hard coded `key` in the `App` component, that would result in warning, and not a compilation error. The app would still compile successfully and we would be able to navigate through it in the browser, however we might notice some strange behavior.

```shell
index.js:1 Warning: Encountered two children with the same key, `goal1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    at ul
    at CourseGoalList (http://localhost:3000/static/js/main.chunk.js:764:21)
    at section
    at div
    at App (http://localhost:3000/static/js/main.chunk.js:266:95)
```
