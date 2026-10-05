import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCartContext();

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />


      <h3>
        {product.name}
      </h3>


      <p>
        <strong>Brand:</strong> {product.brand}
      </p>


      <p>
        <strong>Category:</strong> {product.category}
      </p>


      <p>
        <strong>Rating:</strong> ⭐ {product.rating}
      </p>


      <h3>
        ₹{product.price}
      </h3>


      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>


      {/* DYNAMIC ROUTING */}

      <Link
        to={`/products/${product.id}`}
        className="view-details-button"
      >
        👁️ View Details
      </Link>

    </div>

  );
}

export default ProductCard;