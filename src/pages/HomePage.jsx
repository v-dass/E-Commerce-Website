 import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small-text">
            WELCOME TO OUR STORE
          </p>

          <h1>
            Shop Everything You Love
          </h1>

          <p className="hero-description">
            Discover electronics, fashion,
            accessories, bags and more.
          </p>

          <Link
            to="/products"
            className="shop-now-button"
          >
            🛍️ Click to Shop
          </Link>

        </div>

      </section>

    </div>
  );
}

export default HomePage;