import { useState, useRef } from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${props.id}`,
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: "0",
        }}
      />
      <button type="submit">+ Add</button>
      {!formIsValid && <p>Please enter a valid amount of 1 - 5</p>}
    </form>
  );
};
export default MealItemForm;
