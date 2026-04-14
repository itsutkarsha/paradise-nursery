import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>

      {/* Summary */}
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            <img src={item.image} alt={item.name} width="80" />

            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>

            {/* Buttons */}
            <div>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>

              <span style={{ margin: "10px" }}>{item.quantity}</span>

              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
            </div>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* Actions */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => alert("Coming Soon")}>
          Checkout
        </button>

        <button
          onClick={() => (window.location.href = "/plants")}
          style={{ marginLeft: "10px" }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItem;