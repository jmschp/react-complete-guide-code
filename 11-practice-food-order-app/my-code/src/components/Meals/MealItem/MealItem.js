import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const addItemsHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <div className={styles["meal"]}>
      <h3>{props.name}</h3>
      <div className={styles["description"]}>{props.description}</div>
      <div className={styles["price"]}>{price}</div>
      <MealItemForm id={props.id} onAddToCart={addItemsHandler} />
    </div>
  );
};

export default MealItem;
