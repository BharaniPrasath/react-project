import React, { useEffect, useState } from "react";
import Navbar from "../home/navbar";
import { FaTrash, FaCartShopping, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import '../../styles/category/addtocart.css'

function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate();

  // Add or less quantity
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + change);

          // Update backend
          const token = localStorage.getItem("access");
          axios.patch(`http://127.0.0.1:8000/cart/update/${id}/`,
            { quantity: newQty },
            { headers: { Authorization: `Bearer ${token}` } }
          ).catch(err => console.error("Error updating quantity:", err));

          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Remove button
  const removeItem = (id) => {
    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first!");
      return;
    }

    axios.delete(`http://127.0.0.1:8000/deletecart/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        // Remove the item from state to update UI
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting cart item:", err);
        if (err.response.status === 401) {
          alert("Session expired. Please login again.");
          window.location.href = "/login";
        }
      });
  };

  // Total calculation
  const subtotal = cartItems.reduce((sum, item) =>
    sum + (item.product.productPrice - item.product.discountPrice) * item.quantity, 0);
  const delivery = 39;
  const total = subtotal + delivery;


  const token = localStorage.getItem("access");

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      console.log("No access token found. Redirect to login.");
      return; // Optionally redirect user to /login
    }

    axios
      .get("http://127.0.0.1:8000/getCartItem/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCartItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error on fetching cart:", err);
        // Optionally handle expired token: redirect to login
      });
  }, []);



  return (
    <>
      <Navbar />
      <div className="cart-container">
        {token ? (
          <div className="row g-4">
            {/* Left Side */}
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title mb-4 d-flex align-items-center">
                    <FaCartShopping className="me-2 text-theme" /> Your Cart
                  </h4>

                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item border-bottom py-3">
                      <div className="cart-item1">
                        <Link to={`/showproduct/${item.product.id}/`}>
                          <img
                            src={item.product.productImage1 ? `http://localhost:8000${item.product.productImage1}` : "/placeholder.png"}
                            alt={item.product.productName}
                          />
                        </Link>


                        <div className="ms-3 flex-grow-1" style={{ display: "felx", flexDirection: "column", alignItems: "start" }}>
                          <h5 className="mb-1">{item.product.productName}</h5>
                          <small className="text-muted">{item.product.brandName}</small>
                        </div>

                        <span className="fw-bold text-theme me-4">
                          ₹{(item.product.productPrice - item.product.discountPrice).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="cart-item2">

                        <div className="quantity d-flex align-items-center me-3">

                          <button onClick={() => updateQuantity(item.id, -1)}>-</button>

                          <span className="mx-2">{item.quantity}</span>

                          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>

                        <button className="remove-btn" onClick={() => removeItem(item.product.id)}  ><FaTrash /></button>
                      </div>
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
          </div>) : (
          <div className="cart-login-prompt">
            <div className="cart-login-box">
              <h2>Access Restricted</h2>
              <p>You must be logged in to view this page.</p>
              <button className="cart-login-btn" onClick={() => navigate("/login")}>
                Login Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
