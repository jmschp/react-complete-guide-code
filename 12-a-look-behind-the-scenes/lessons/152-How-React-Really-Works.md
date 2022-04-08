# 152. How React Really Works

> React is a JavaScript library for building User Interfaces.

We us React components to build those User Interfaces, and it is through props and state management that these components update the User Interface. When there is, for example a state update, React will reevaluate the components impacted by the respective state and will handle to ReactDOM the result component tree.

ReactDOM checks what should be render in the screen and compares to see if there are any changes that should be applied. To do this ReactDOM use a concept called the Virtual DOM. By comparing the Virtual DOM with the real DOM, it figures out the difference between the two and only applies the necessary changes to the real DOM.

- [React docs - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [React docs - Virtual DOM and Internals](https://reactjs.org/docs/faq-internals.html)
