 import { useState, useMemo } from "react";

function useProducts() {

  const products = [

    // 1
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      brand: "Apple",
      price: 70000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },

    // 2
    {
      id: 2,
      name: "HP Laptop",
      category: "Electronics",
      brand: "HP",
      price: 65000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },

    // 3
    {
      id: 3,
      name: "Sony Headphones",
      category: "Audio",
      brand: "Sony",
      price: 8999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },

    // 4
    {
      id: 4,
      name: "Apple Smart Watch",
      category: "Wearables",
      brand: "Apple",
      price: 35000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },

    // 5
    {
      id: 5,
      name: "Canon Camera",
      category: "Camera",
      brand: "Canon",
      price: 55000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"
    },

    // 6
    {
      id: 6,
      name: "Nike Shoes",
      category: "Fashion",
      brand: "Nike",
      price: 5999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },

    // 7
    {
      id: 7,
      name: "Adidas T-Shirt",
      category: "Fashion",
      brand: "Adidas",
      price: 1999,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },

    // 8
    {
      id: 8,
      name: "Skybags Backpack",
      category: "Bags",
      brand: "Skybags",
      price: 2999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },

    // 9
    {
      id: 9,
      name: "Fossil Wrist Watch",
      category: "Watches",
      brand: "Fossil",
      price: 4999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80"
    },

    // 10
    {
      id: 10,
      name: "Ray-Ban Sunglasses",
      category: "Accessories",
      brand: "Ray-Ban",
      price: 12999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
    },

    // 11
    {
      id: 11,
      name: "Samsung Galaxy Phone",
      category: "Electronics",
      brand: "Samsung",
      price: 45000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80"
    },

    // 12
    {
      id: 12,
      name: "Dell Laptop",
      category: "Electronics",
      brand: "Dell",
      price: 58000,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=500&q=80"
    },

    // 13
    {
      id: 13,
      name: "JBL Bluetooth Speaker",
      category: "Audio",
      brand: "JBL",
      price: 4999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
    },

    // 14
    {
      id: 14,
      name: "Gaming Keyboard",
      category: "Electronics",
      brand: "Logitech",
      price: 3499,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"
    },

    // 15
    {
      id: 15,
      name: "Gaming Mouse",
      category: "Electronics",
      brand: "Logitech",
      price: 2499,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80"
    },

    // 16
    {
      id: 16,
      name: "Travel Suitcase",
      category: "Bags",
      brand: "American Tourister",
      price: 6999,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=500&q=80"
    },

    // 17
    {
      id: 17,
      name: "Running Shoes",
      category: "Fashion",
      brand: "Nike",
      price: 7499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=80"
    },

    // 18
    {
      id: 18,
      name: "Leather Handbag",
      category: "Bags",
      brand: "Fossil",
      price: 8999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
    },

    // 19
    {
      id: 19,
      name: "Digital Camera",
      category: "Camera",
      brand: "Canon",
      price: 42000,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1606986628253-3e3c6a9e9b3d?auto=format&fit=crop&w=500&q=80"
    },

    // 20
    {
      id: 20,
      name: "Wireless Earbuds",
      category: "Audio",
      brand: "Sony",
      price: 5999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80"
    }

  ];


  // =========================
  // FILTER STATES
  // =========================

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [brand, setBrand] =
    useState("All");

  const [maxPrice, setMaxPrice] =
    useState(100000);

  const [minRating, setMinRating] =
    useState(0);


  const filteredProducts = useMemo(() => {

    const searchText =
      String(search || "").toLowerCase();
    
    


    return products.filter((product) => {

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(searchText);


      const categoryMatch =
        category === "All" ||
        product.category === category;


      const brandMatch =
        brand === "All" ||
        product.brand === brand;


      const priceMatch =
        product.price <= Number(maxPrice);


      const ratingMatch =
        product.rating >= Number(minRating);


      return (
        searchMatch &&
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        ratingMatch
      );

    });

  }, [
    search,
    category,
    brand,
    maxPrice,
    minRating
  ]);


  // =========================
  // RETURN
  // =========================

  return {

    products,

    filteredProducts,

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

  };
}


export default useProducts;