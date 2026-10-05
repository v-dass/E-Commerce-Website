 import ProductCard from "./ProductCard";

function ProductList({ products }) {

  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <h2>😕 No products found</h2>
        <p>Try changing your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default ProductList;