import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartHasItems = cartContext.items.length > 0;
  const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`;

  const cartAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartRemoveHandler = (id) => {
    cartContext.removeItem(id)
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <li key={item.id}>
          <CartItem
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartRemoveHandler.bind(null, item.id)}
            onAdd={cartAddHandler.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles["total"]}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartHasItems && <button className={styles["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
