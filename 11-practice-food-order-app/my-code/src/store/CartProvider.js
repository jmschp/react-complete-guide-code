import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const indexOfItem = state.items.findIndex((item) => item.id === action.item.id);
    const existemItem = state.items[indexOfItem];
    let updatedItems;

    if (existemItem) {
      const updatedItem = {
        ...action.item,
        amount: existemItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[indexOfItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const indexOfItem = state.items.findIndex((item) => item.id === action.id);
    const existemItem = state.items[indexOfItem];
    const updatedTotalAmount = state.totalAmount - existemItem.price;

    let updatedItems;

    if (existemItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existemItem, amount: existemItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[indexOfItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
