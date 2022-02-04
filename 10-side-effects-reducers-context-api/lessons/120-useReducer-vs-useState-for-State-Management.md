# 120. useReducer vs useState for State Management

Usually we need `useReducer` when state management becomes more complex.

- useState()
  - The main state management “tool”
  - Great for independent pieces of state/ data
  - Great if state updates are easy and limited to a few kinds of updates
- useReducer()
  - Great if you need “more power”
  - Should be considered if you have related pieces of state/ data
  - Can be helpful if you have more complex state updates
