import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discount,
    deliveryCharge,
    finalTotal
  } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <h1>
          🛒 Your cart is empty
        </h1>

        <p>
          Add some products to your cart.
        </p>

        <Link to="/">
          <button>
            Continue Shopping
          </button>
        </Link>

      </div>
    );
  }

  return (
    <section className="cart-page">

      <h1>
        🛒 Your Cart
      </h1>

      {cart.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >

          <div className="cart-product">

            <span>
              {item.icon}
            </span>

            <div>

              <h3>
                {item.name}
              </h3>

              <p>
                ₹{item.price.toLocaleString("en-IN")}
              </p>

            </div>

          </div>


          <div className="quantity">

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity - 1
                )
              }
            >
              -
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity + 1
                )
              }
            >
              +
            </button>

          </div>


          <button
            className="remove"
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>

        </div>

      ))}


      <div className="cart-summary">

        <h2>
          Order Summary
        </h2>

        <p>
          Subtotal: ₹
          {subtotal.toLocaleString("en-IN")}
        </p>

        <p>
          Discount: -₹
          {discount.toLocaleString("en-IN")}
        </p>

        <p>
          Delivery: ₹{deliveryCharge}
        </p>

        <hr />

        <h2>
          Final Total: ₹
          {finalTotal.toLocaleString("en-IN")}
        </h2>


        <Link to="/checkout">

          <button>
            Proceed to Checkout
          </button>

        </Link>


        <button
          className="clear"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

    </section>
  );
}

export default Cart;