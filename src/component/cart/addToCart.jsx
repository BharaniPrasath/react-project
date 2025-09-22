import React, { useState } from "react";
import Navbar from "../home/navbar";
import { FaTrash, FaCartShopping, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import '../../styles/category/addtocart.css'

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smart Watch",
      desc: "Black Edition",
      img: "https://via.placeholder.com/100", // adjust according to setup
      price: 2999,
      qty: 1,
    },
    {
      id: 2,
      name: "Running Shoes",
      desc: "Size: 9",
      img: "https://via.placeholder.com/100",
      price: 1499,
      qty: 2,
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const delivery = 39;
  const total = subtotal + delivery;

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="row g-4">
          {/* Left Side */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4 d-flex align-items-center">
                  <FaCartShopping className="me-2 text-theme" /> Your Cart
                </h4>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item d-flex align-items-center border-bottom py-3"
                  >
                    <img src={item.img} alt={item.name} />
                    <div className="ms-3 flex-grow-1">
                      <h5 className="mb-1">{item.name}</h5>
                      <small className="text-muted">{item.desc}</small>
                    </div>
                    <span className="fw-bold text-theme me-4">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <div className="quantity d-flex align-items-center me-3">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span className="mx-2">{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <Link to={'/'} className="continue-shoping">
                <FaArrowLeft className="me-1" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4">
            <div className="card shadow-sm summary-card">
              <div className="card-body">
                <h4 className="card-title mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery</span>
                  <span>₹{delivery}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold text-theme mb-3">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <button className="btn checkout">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
