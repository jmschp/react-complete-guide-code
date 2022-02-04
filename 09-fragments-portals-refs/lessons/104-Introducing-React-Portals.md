# 104. Introducing React Portals

React Portals can be useful to render components in a different part of the DOM than the one where the actual component is declared. For example we may declare a modal component next to a form component, but we actually don't want to render the modal next to the form, because the modal is ana overlay component. We might want to render the modal on top or at the bottom of the DOM

The following return statement:

```javascript
return (
  <React.Fragment>
    <MyModal />
    <MyInputForm />
  </React.Fragment>
);
```

Could render the following HTML markup. It would work, but it is not a good practice.

```html
<section>
  <h2>Some other content ...</h2>
  <div class="“my-modal”">
    <h2>A Modal Title!</h2>
  </div>
  <form><label>Username</label> <input type="“text”" /></form>
</section>
```

> Semantically and from a “clean HTML structure” perspective, having this nested modal isn’t ideal. It is an overlay to the entire page after all (that’s similar for side- drawers, other dialogs etc.). It’s a bit like styling a `<div>` like a `<button>` and adding an event listener to it: It’ll work, but it’s not a good practice.

```html
<div onClick="{clickHandler}">Click me, I’m a bad button</div>
```

A better approach would be to render the modal outside the form section.

```html
<div class="“my-modal”"><h2>A Modal Title!</h2></div>
<section>
  <h2>Some other content ...</h2>
  <form>
    <label>Username</label>
    <input type="“text”" />
  </form>
</section>
```
