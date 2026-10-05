import { useEffect, useState } from "react";

function CurrentOrders() {

  const [orders, setOrders] = useState([]);


  const loadOrders = () => {

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    const currentOrders = savedOrders.filter(
      (order) =>
        order.status !== "Delivered" &&
        order.status !== "Cancelled"
    );


    setOrders(currentOrders);

  };


  useEffect(() => {
    loadOrders();
  }, []);


  const markAsDelivered = (orderId) => {

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    const updatedOrders = savedOrders.map((order) => {

      if (order.orderId === orderId) {

        return {
          ...order,
          status: "Delivered"
        };

      }

      return order;

    });


    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );


    loadOrders();

  };


  if (orders.length === 0) {

    return (
      <div className="orders-section">

        <h2>📦 Current Orders</h2>

        <p>
          No current orders found.
        </p>

      </div>
    );
  }


  return (

    <div className="orders-section">

      <h2>📦 Current Orders</h2>


      {orders.map((order, index) => {

        const items = Array.isArray(order.items)
          ? order.items
          : [];


        return (

          <div
            className="order-card"
            key={order.orderId || index}
          >

            <h3>
              🧾 Order ID: {order.orderId}
            </h3>


            <p>
              <strong>Customer:</strong>{" "}
              {order.customer?.name}
            </p>


            <p>
              <strong>Phone:</strong>{" "}
              {order.customer?.phone}
            </p>


            <p>
              <strong>Address:</strong>{" "}
              {order.customer?.address}
            </p>


            <p>
              <strong>Payment:</strong>{" "}
              {order.customer?.payment}
            </p>


            <p>
              <strong>Order Date:</strong>{" "}
              {order.date}
            </p>


            <p>
              <strong>Total:</strong>{" "}
              ₹{order.total}
            </p>


            <p className="order-status">
              Status: {order.status}
            </p>


            <h4>
              🛍️ Products Ordered
            </h4>


            {items.length > 0 ? (

              items.map((item, itemIndex) => (

                <div
                  className="ordered-product"
                  key={item.id || itemIndex}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div>

                    <strong>
                      {item.name}
                    </strong>

                    <p>
                      <strong>
                        Product ID:
                      </strong>{" "}
                      {item.id}
                    </p>

                    <p>
                      Quantity: {item.quantity || 1}
                    </p>

                    <p>
                      Price: ₹{item.price}
                    </p>

                  </div>

                </div>

              ))

            ) : (

              <p>
                No product information available for this old order.
              </p>

            )}


            <button
              className="delivered-button"
              onClick={() =>
                markAsDelivered(order.orderId)
              }
            >
              ✅ Mark as Delivered
            </button>

          </div>

        );

      })}

    </div>
  );
}

export default CurrentOrders;