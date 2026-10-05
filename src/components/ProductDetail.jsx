import { useParams } from "react-router-dom";
import useProducts from "../hooks/productHook";
import { useCartContext } from "../context/CartContext";

function ProductDetail() {

  const { id } = useParams();

  const { products } = useProducts();

  const { addToCart } = useCartContext();


  const product = products.find(
    (item) => String(item.id) === String(id)
  );


  if (!product) {

    return (

      <div className="product-detail">

        <h1>❌ Product Not Found</h1>

        <p>
          Product ID: {id}
        </p>

      </div>

    );

  }


  return (

    <div className="product-detail">

      <h1>📦 Product Details</h1>


      <div className="product-detail-card">

        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />


        <div className="product-detail-info">

          <h2>
            {product.name}
          </h2>


          <p>
            <strong>Product ID:</strong>{" "}
            {product.id}
          </p>


          <p>
            <strong>Brand:</strong>{" "}
            {product.brand}
          </p>


          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>


          <p>
            <strong>Rating:</strong>{" "}
            ⭐ {product.rating}
          </p>


          <h2>
            ₹{product.price}
          </h2>


          <button
            className="detail-cart-button"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductDetail;