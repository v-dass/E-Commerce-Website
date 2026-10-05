import ProductList from "../components/ProductList";

function ProductsPage({
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  products
}) {
  return (
    <div className="products-page">

      <h1>🛍️ Our Products</h1>

      {/* FILTER SECTION */}
      <div className="filter-panel">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Audio">
            Audio
          </option>

          <option value="Wearables">
            Wearables
          </option>

          <option value="Camera">
            Camera
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Accessories">
            Accessories
          </option>

          <option value="Bags">
            Bags
          </option>

          <option value="Home">
            Home
          </option>

        </select>


        {/* BRAND */}
        <select
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          <option value="">
            All Brands
          </option>

          <option value="Apple">
            Apple
          </option>

          <option value="HP">
            HP
          </option>

          <option value="Sony">
            Sony
          </option>

          <option value="Canon">
            Canon
          </option>

          <option value="Nike">
            Nike
          </option>

          <option value="Samsung">
            Samsung
          </option>

          <option value="Adidas">
            Adidas
          </option>

          <option value="Dell">
            Dell
          </option>

          <option value="Puma">
            Puma
          </option>

        </select>


        {/* PRICE */}
        <div className="price-filter">

          <label>
            Maximum Price:
            <strong>
              ₹{Number(maxPrice).toLocaleString("en-IN")}
            </strong>
          </label>

          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
          />

        </div>


        {/* RATING */}
        <select
          value={minRating}
          onChange={(e) =>
            setMinRating(Number(e.target.value))
          }
        >

          <option value="0">
            All Ratings
          </option>

          <option value="4">
            ⭐ 4+
          </option>

          <option value="4.5">
            ⭐ 4.5+
          </option>

          <option value="4.7">
            ⭐ 4.7+
          </option>

        </select>

      </div>


      {/* PRODUCTS */}
      <ProductList
        products={products}
      />

    </div>
  );
}

export default ProductsPage;