import {
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import useProducts from "./hooks/productHook";

import {
  CartProvider,
  useCartContext
} from "./context/CartContext";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";

import ProductDetail from "./components/ProductDetail";

import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";

import Footer from "./components/Footer";

import "./App.css";


function Navigation() {

  const { cartCount } = useCartContext();

  return (
    <header className="main-header">

      <Link
        to="/"
        className="website-title"
      >
        🛍️ E-Commerce Website
      </Link>

      <nav className="navigation">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/cart">
          🛒 Cart ({cartCount})
        </NavLink>

        <NavLink to="/checkout">
          💳 Checkout
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>

        <NavLink to="/orders">
          Orders
        </NavLink>

      </nav>

    </header>
  );
}


function AppContent() {

  const productData = useProducts();

  return (
    <>
      <Navigation />

      <main>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<HomePage />}
          />


          {/* PRODUCTS */}

          <Route
            path="/products"
            element={
              <ProductsPage
                search={productData.search}
                setSearch={productData.setSearch}

                category={productData.category}
                setCategory={productData.setCategory}

                brand={productData.brand}
                setBrand={productData.setBrand}

                maxPrice={productData.maxPrice}
                setMaxPrice={productData.setMaxPrice}

                minRating={productData.minRating}
                setMinRating={productData.setMinRating}

                products={productData.filteredProducts}
              />
            }
          />


          {/* DYNAMIC PRODUCT DETAILS */}

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />


          {/* CART */}

          <Route
            path="/cart"
            element={<CartPage />}
          />


          {/* CHECKOUT */}

          <Route
            path="/checkout"
            element={<CheckoutPage />}
          />


          {/* LOGIN */}

          <Route
            path="/login"
            element={<LoginPage />}
          />


          {/* ORDERS */}

          <Route
            path="/orders"
            element={<OrdersPage />}
          >

            {/* CURRENT ORDERS */}

            <Route
              path="current"
              element={<CurrentOrders />}
            />


            {/* ORDER HISTORY */}

            <Route
              path="history"
              element={<OrderHistory />}
            />

          </Route>

        </Routes>

      </main>

      <Footer />

    </>
  );
}


function App() {

  return (
    <CartProvider>

      <AppContent />

    </CartProvider>
  );
}


export default App;