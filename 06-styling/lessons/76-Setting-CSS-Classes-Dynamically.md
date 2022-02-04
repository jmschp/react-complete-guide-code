# 76. Setting CSS Classes Dynamically

To add CSS classes dynamically we can use ternary operator in the special className JSX property.

We create two selectors that will target the input an label.

```css
/* CourseInput.css */

.form-control.invalid label {
  color: red;
}

.form-control.invalid input {
  border-color: red;
  background-color: rgb(231, 210, 210);
}
```

And the conditional apply the `invalid` class depending on the state.

```javascript
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```
