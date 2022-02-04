# 105. Working with Portals

To render components on a different place we use the `React.createPortal` method.

```javascript
React.createPortal(<Component>, document.getElementById('my-unique-id'))
```

First we need to declared in our HTML the elements were we want to portal these components. For example we could add one element were we are going to portal or backdrop components, and another element for the overlay components.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... some head tags ... -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- Portal for backdrop components -->
    <div id="backdrop-root"></div>
    <!-- Portal for overlay components -->
    <div id="overlay-root"></div>
    <!-- The main App component -->
    <div id="root"></div>
  </body>
</html>
```

The we would refactor the the modal component to use portals.

```javascript
import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
```
