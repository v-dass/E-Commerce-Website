import { useEffect, useState } from "react";

function OrderHistory() {

  const [orders, setOrders] = useState([]);


  const loadOrders = () => {

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    const historyOrders = savedOrders.filter(
      (order) =>
        order.status === "Delivered" ||
        order.status === "Cancelled"
    );


    setOrders(historyOrders);

  };


  useEffect(() => {
    loadOrders();
  }, []);


  const clearOrderHistory = () => {

    const confirmClear = window.confirm(
      "Are you sure you want to clear your order history?"
    );


    if (!confirmClear) {
      return;
    }


    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );


    const currentOrders = savedOrders.filter(
      (order) =>
        order.status !== "Delivered" &&
        order.status !== "Cancelled"
    );


    localStorage.setItem(
      "orders",
      JSON.stringify(currentOrders)
    );


    setOrders([]);


    alert(
      "Order history cleared successfully!"
    );

  };


  return (

    <div className="orders-section">

      <div className="order-history-header">

        <h2>
          📋 Order History
        </h2>


        {orders.length > 0 && (

          <button
            className="clear-history-button"
            onClick={clearOrderHistory}
          >
            🗑️ Clear Order History
          </button>

        )}

      </div>


      {orders.length === 0 ? (

        <p>
          No previous orders found.
        </p>

      ) : (

        orders.map((order, index) => {

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
                <strong>Total:</strong>{" "}
                ₹{order.total}
              </p>


              <p>
                <strong>Order Date:</strong>{" "}
                {order.date}
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
                  No product information available.
                </p>

              )}

            </div>

          );

        })

      )}

    </div>

  );
}

export default OrderHistory;