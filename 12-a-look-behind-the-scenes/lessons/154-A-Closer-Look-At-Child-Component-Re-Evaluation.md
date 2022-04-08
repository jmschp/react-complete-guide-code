# 154. A Closer Look At Child Component Re-Evaluation

If we move `<p>This is new!</p>` element to a new React component, that we can import in the `App` component, we will see that every time there is a state change in the `App` component, not only the `App` component is evaluated, but all its children are evaluated as well,

So for every click in the button, in the browser javascript console, we will se printed `App component evaluated` and `Demo component evaluated`.

It doesn't matter if the `Demo` component is receiving props from the App component. Even if we removes the props or hardcoded them, the `Demo` component will reevaluate every time the `App` is reevaluated.

This chain will go on on from parent to child.

```javascript
const Demo = (props) => {
  console.log("Demo component evaluated");

  return <p>{props.show ? "This is new!" : ""}</p>;
};
```

```javascript
function App() {
  console.log("App component evaluated");

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
    </div>
  );
}
```
