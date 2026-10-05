 import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

function Header() {

  const { cartCount } = useCartContext();

  return (
    <header className="main-header">

      {/* WEBSITE TITLE */}

      <div className="website-title">
        🛍️ E-Commerce Website
      </div>


      {/* NAVIGATION */}

      <nav className="navigation">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        <Link to="/checkout">
          💳 Checkout
        </Link>

      </nav>

    </header>
  );
}

export default Header;