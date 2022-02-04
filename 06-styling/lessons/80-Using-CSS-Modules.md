# 80. Using CSS Modules

A even better approach to have styled scope components is to use [CSS modules](https://github.com/css-modules/css-modules).

According to the repo, CSS modules are:

> CSS files in which all class names and animation names are scoped locally by default.

React project created with [Create React App](http://create-react-app.dev/docs/adding-a-css-modules-stylesheet/), already support CSS modules.

To use the [CSS modules](https://github.com/css-modules/css-modules), we change the CSS import statement slightly, adding a name to to import, and add `.module.css` to the CSS file name, like so: `import someName from './path-to-file.module.css';`

```javascript
import styles from './Button.module.css';
```

This will import all the selector in the given file as properties of the object `styles`. And then we can use them like this: `styles.button`.

```javascript
import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

This will generate a HTML element with class that has a uniq hash.

```html
<button type="submit" class="Button_button__2lgkF">Add Goal</button>
```

To know more about CSS modules read the post [What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/) from [CSS Tricks](https://css-tricks.com/).
