import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const showCartHandler = () => {
    setCartIsShowing(true);
  };

  const hideCartHandler = () => {
    setCartIsShowing(false);
  };

  return (
    <CartProvider>
      <Header onClick={showCartHandler} />
      {cartIsShowing && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
