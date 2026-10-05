import { NavLink, Outlet } from "react-router-dom";

function OrdersPage() {
  return (
    <div className="orders-page">

      <h1>📦 My Orders</h1>

      <nav className="orders-navigation">
        <NavLink to="current">
          Current Orders
        </NavLink>

        <NavLink to="history">
          Order History
        </NavLink>
      </nav>

      <div className="orders-content">
        <Outlet />
      </div>

    </div>
  );
}

export default OrdersPage;
