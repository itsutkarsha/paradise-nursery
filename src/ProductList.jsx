import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";

const plantsData = [
  {
    category: "Indoor",
    plants: [
      { id: 1, name: "Snake Plant", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Peace Lily", price: 12, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Outdoor",
    plants: [
      { id: 3, name: "Aloe Vera", price: 8, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Areca Palm", price: 15, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { id: 5, name: "Cactus", price: 5, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Jade Plant", price: 9, image: "https://via.placeholder.com/100" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div>

      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "green", color: "white" }}>
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <a href="/" style={{ margin: "10px", color: "white" }}>Home</a>
          <a href="/plants" style={{ margin: "10px", color: "white" }}>Plants</a>
          <a href="/cart" style={{ margin: "10px", color: "white" }}>
            Cart 🛒 ({useSelector(state => state.cart.totalQuantity)})
          </a>
        </div>
      </nav>

      {/* Products */}
      {plantsData.map((category, index) => (
        <div key={index} style={{ padding: "20px" }}>
          <h2>{category.category}</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {category.plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid gray", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default ProductList;