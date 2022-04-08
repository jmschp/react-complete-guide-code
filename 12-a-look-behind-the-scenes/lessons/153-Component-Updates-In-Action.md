# 153. Component Updates In Action

With this simple component we can see the rendering in action. When the app load this component will be evaluated and rendered into the screen (in the console it will print `App component evaluated`).

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
      {showParagraph && <p>This is new!</p>}
    </div>
  );
}
```

The final HTML rendered to the DOM will be the following, where the element `<p>This is new!</p>` is not rendered because `showParagraph` is initially set to false.

```html
<div id="root">
  <div class="app">
    <button type="button" class="Button_button__2lgkF undefined">Toggle Paragraph</button>
    <h1>Hi there!</h1>
  </div>
</div>
```

When we click the button `Toggle Paragraph`, this will trigger a state change and React will reevaluate this entire component. When reevaluating we will see a second print, `App component evaluated`, in the browser Javascript console. A new element will be generated and handles to ReactDOM, which will compare to the real DOM, and only update the necessary parts. So only the `<p>This is new!</p>` element will be inserted, the rest of the DOM will not be touched.

```html
<div id="root">
  <div class="app">
    <button type="button" class="Button_button__2lgkF undefined">Toggle Paragraph</button>
    <h1>Hi there!</h1>
    <p>This is new!</p>
  </div>
</div>
```

If we click the button again the same process will happen, but this time removing the `<p>This is new!</p>` element.
