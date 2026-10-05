 import {
  createContext,
  useContext,
} from "react";

import useCart from "../hooks/cartHook";

const CartContext = createContext();

export function CartProvider({ children }) {
  const cartData = useCart();

  return (
    <CartContext.Provider value={cartData}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

export default CartContext;