import { useNavigate } from "react-router-dom";

import { useCartContext } from "../context/CartContext";


function CartPage() {

  const navigate = useNavigate();

  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    deliveryCharge,
    finalTotal
  } = useCartContext();


  if (!cart || cart.length === 0) {

    return (

      <div className="empty-cart">

        <h1>🛒 Your Cart is Empty</h1>

        <p>
          Please add products before checkout.
        </p>

      </div>
    );
  }


  return (

    <section className="cart-page">

      <h1>🛒 Shopping Cart</h1>


      <div className="cart-items">

        {cart.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
              className="cart-image"
            />


            <div className="cart-item-details">

              <h2>
                {item.name}
              </h2>

              <p>
                ₹{item.price}
              </p>


              <div className="quantity-controls">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  −
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
                className="remove-button"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>


      <div className="cart-summary">

        <h2>Order Summary</h2>

        <p>
          Subtotal:
          <strong> ₹{subtotal}</strong>
        </p>

        <p>
          Discount:
          <strong> ₹{discount}</strong>
        </p>

        <p>
          Delivery:
          <strong> ₹{deliveryCharge}</strong>
        </p>

        <hr />

        <h2>
          Total:
          <strong> ₹{finalTotal}</strong>
        </h2>


        <button
          className="checkout-button"
          onClick={() => navigate("/checkout")}
        >
          💳 Proceed to Checkout
        </button>


        <button
          className="continue-shopping-cart"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>

      </div>

    </section>
  );
}


export default CartPage;