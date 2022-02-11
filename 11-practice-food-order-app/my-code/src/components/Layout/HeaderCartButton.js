import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHighlight] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const btnClass = `${styles["button"]} ${btnIsHighlighted ? styles["bump"] : ""}`;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
