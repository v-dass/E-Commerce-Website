import { useState } from "react";

import {
  useCartContext
} from "../context/CartContext";

function Checkout() {

  const {
    cart,
    subtotal,
    discount,
    deliveryCharge,
    total,
    clearCart
  } = useCartContext();


  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: ""
  });


  const placeOrder = () => {

    if (
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {

      alert("Please fill all details.");

      return;
    }


    alert(
      "Order placed successfully! 🎉\n\n" +
      "Customer: " +
      customer.name +
      "\nSubtotal: ₹" +
      subtotal +
      "\nDiscount: ₹" +
      discount +
      "\nDelivery: ₹" +
      deliveryCharge +
      "\nFinal Total: ₹" +
      total
    );


    clearCart();

  };


  // Empty cart
  if (!cart || cart.length === 0) {

    return (
      <div className="empty-cart">

        <h1>
          🛒 Your Cart is Empty
        </h1>

        <p>
          Please add products before checkout.
        </p>

      </div>
    );

  }


  return (

    <section className="checkout-page">

      <h1>💳 Checkout</h1>


      <div className="checkout-form">

        <h2>
          Customer Details
        </h2>


        <input
          type="text"
          placeholder="Your Name"
          value={customer.name}
          onChange={(e) =>
            setCustomer({
              ...customer,
              name: e.target.value
            })
          }
        />


        <input
          type="text"
          placeholder="Phone Number"
          value={customer.phone}
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.target.value
            })
          }
        />


        <textarea
          placeholder="Delivery Address"
          value={customer.address}
          onChange={(e) =>
            setCustomer({
              ...customer,
              address: e.target.value
            })
          }
        />


        <div className="checkout-summary">

          <p>
            Subtotal: ₹{subtotal}
          </p>

          <p>
            Discount: ₹{discount}
          </p>

          <p>
            Delivery: ₹{deliveryCharge}
          </p>

          <hr />

          <h2>
            Final Total: ₹{total}
          </h2>

        </div>


        <button onClick={placeOrder}>
          Place Order
        </button>

      </div>

    </section>

  );
}

export default Checkout;