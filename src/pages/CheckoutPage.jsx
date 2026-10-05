import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCartContext } from "../context/CartContext";


function CheckoutPage() {

  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    discount,
    deliveryCharge,
    finalTotal,
    clearCart
  } = useCartContext();


  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    payment: ""
  });


  const handleChange = (e) => {

    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });

  };


  const placeOrder = (e) => {

    e.preventDefault();


    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.payment
    ) {

      alert("Please fill all details.");

      return;
    }


    if (!cart || cart.length === 0) {

      alert("Your cart is empty.");

      return;
    }


    /* CREATE ORDER */

    const newOrder = {

      orderId: "ORD" + Date.now(),

      customer: {
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
        payment: customer.payment
      },


      /* SAVE COMPLETE PRODUCT DETAILS */

      items: cart.map((item) => ({

        id: item.id,

        name: item.name,

        image: item.image,

        price: item.price,

        quantity: item.quantity || 1

      })),


      subtotal: subtotal,

      discount: discount,

      delivery: deliveryCharge,

      total: finalTotal,

      date: new Date().toLocaleString(),

      status: "Processing"

    };


    /* GET OLD ORDERS */

    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    /* ADD NEW ORDER */

    const updatedOrders = [
      ...existingOrders,
      newOrder
    ];


    /* SAVE ORDERS */

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );


    /* EMPTY CART */

    clearCart();


    alert(
      "Order placed successfully! 🎉\n\n" +
      "Order ID: " +
      newOrder.orderId
    );


    /* GO TO CURRENT ORDERS */

    navigate("/orders/current");

  };


  /* EMPTY CART */

  if (!cart || cart.length === 0) {

    return (

      <div className="empty-cart">

        <h1>🛒 Your Cart is Empty</h1>

        <p>
          Please add products before checkout.
        </p>

        <button
          onClick={() =>
            navigate("/products")
          }
        >
          Continue Shopping
        </button>

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


        <form onSubmit={placeOrder}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={customer.name}
            onChange={handleChange}
          />


          <label>
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={customer.phone}
            onChange={handleChange}
          />


          <label>
            Delivery Address
          </label>

          <textarea
            name="address"
            placeholder="Enter your delivery address"
            value={customer.address}
            onChange={handleChange}
          />


          <label>
            Payment Method
          </label>

          <select
            name="payment"
            value={customer.payment}
            onChange={handleChange}
          >

            <option value="">
              Select Payment Method
            </option>

            <option value="Cash on Delivery">
              Cash on Delivery
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Card">
              Credit/Debit Card
            </option>

          </select>


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

            <h2>
              Final Total: ₹{finalTotal}
            </h2>

          </div>


          <button
            type="submit"
            className="place-order-button"
          >
            🛍️ Place Order
          </button>

        </form>

      </div>

    </section>

  );

}


export default CheckoutPage;
