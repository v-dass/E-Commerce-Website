 import {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

function useCart() {

  // =========================
  // CART
  // =========================

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("productCart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  // =========================
  // ORDERS
  // =========================

  const [orders, setOrders] = useState(() => {

    const savedOrders =
      localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [];
  });


  // Save cart
  useEffect(() => {

    localStorage.setItem(
      "productCart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // Save orders
  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = useCallback(
    (product) => {

      setCart((currentCart) => {

        const existingProduct =
          currentCart.find(
            (item) =>
              item.id === product.id
          );

        if (existingProduct) {

          return currentCart.map(
            (item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity:
                      item.quantity + 1,
                  }
                : item
          );
        }

        return [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      });

    },
    []
  );


  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart =
    useCallback((id) => {

      setCart((currentCart) =>
        currentCart.filter(
          (item) => item.id !== id
        )
      );

    }, []);


  // =========================
  // UPDATE QUANTITY
  // =========================

  const updateQuantity =
    useCallback(
      (id, quantity) => {

        if (quantity < 1) {
          return;
        }

        setCart((currentCart) =>
          currentCart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: quantity,
                }
              : item
          )
        );

      },
      []
    );


  // =========================
  // CLEAR CART
  // =========================

  const clearCart =
    useCallback(() => {

      setCart([]);

    }, []);


  // =========================
  // ADD ORDER
  // =========================

  const addOrder =
    useCallback((order) => {

      setOrders((currentOrders) => [
        ...currentOrders,
        order,
      ]);

    }, []);


  // =========================
  // CLEAR ORDERS
  // =========================

  const clearOrders =
    useCallback(() => {

      setOrders([]);

    }, []);


  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = useMemo(() => {

    return cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  }, [cart]);


  // =========================
  // DISCOUNT
  // =========================

  const discount = useMemo(() => {

    if (subtotal >= 500) {

      return Math.round(
        subtotal * 0.1
      );
    }

    return 0;

  }, [subtotal]);


  // =========================
  // DELIVERY
  // =========================

  const deliveryCharge =
    useMemo(() => {

      if (cart.length === 0) {
        return 0;
      }

      if (subtotal >= 1000) {
        return 0;
      }

      return 50;

    }, [cart, subtotal]);


  // =========================
  // FINAL TOTAL
  // =========================

  const finalTotal =
    useMemo(() => {

      return (
        subtotal -
        discount +
        deliveryCharge
      );

    }, [
      subtotal,
      discount,
      deliveryCharge,
    ]);


  // =========================
  // CART COUNT
  // =========================

  const cartCount =
    useMemo(() => {

      return cart.reduce(
        (count, item) =>
          count + item.quantity,
        0
      );

    }, [cart]);


  return {

    cart,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    subtotal,
    discount,
    deliveryCharge,
    finalTotal,

    total: finalTotal,

    cartCount,

    // Orders
    orders,
    addOrder,
    clearOrders,
  };
}

export default useCart;