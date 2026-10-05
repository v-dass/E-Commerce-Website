 import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <h1>Welcome to ShopEasy</h1>

      <p>
        Your simple online shopping destination
      </p>

      <Link to="/products">
        <button>Start Shopping</button>
      </Link>

    </section>
  );
}

export default Home;