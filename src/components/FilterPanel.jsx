function FilterPanel({
  category,
  setCategory,
  brand,
  setBrand,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating
}) {
  return (
    <div className="filters">

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="All">
          All Categories
        </option>

        <option value="Mobiles">
          Mobiles
        </option>

        <option value="Laptops">
          Laptops
        </option>

        <option value="Accessories">
          Accessories
        </option>

        <option value="Watches">
          Watches
        </option>

        <option value="Cameras">
          Cameras
        </option>
      </select>


      <select
        value={brand}
        onChange={(e) =>
          setBrand(e.target.value)
        }
      >
        <option value="All">
          All Brands
        </option>

        <option value="Apple">
          Apple
        </option>

        <option value="Samsung">
          Samsung
        </option>

        <option value="OnePlus">
          OnePlus
        </option>

        <option value="HP">
          HP
        </option>

        <option value="Dell">
          Dell
        </option>

        <option value="Sony">
          Sony
        </option>

        <option value="Canon">
          Canon
        </option>

        <option value="Nikon">
          Nikon
        </option>
      </select>


      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value)
        }
      >
        <option value="All">
          All Prices
        </option>

        <option value="15000">
          Under ₹15,000
        </option>

        <option value="30000">
          Under ₹30,000
        </option>

        <option value="50000">
          Under ₹50,000
        </option>

        <option value="70000">
          Under ₹70,000
        </option>

        <option value="100000">
          Under ₹1,00,000
        </option>
      </select>


      <select
        value={minRating}
        onChange={(e) =>
          setMinRating(e.target.value)
        }
      >
        <option value="All">
          All Ratings
        </option>

        <option value="4">
          ⭐ 4+
        </option>

        <option value="4.5">
          ⭐ 4.5+
        </option>

        <option value="4.8">
          ⭐ 4.8+
        </option>
      </select>

    </div>
  );
}

export default FilterPanel;