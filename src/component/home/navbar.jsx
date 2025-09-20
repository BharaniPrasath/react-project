import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas, Nav } from "react-bootstrap";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
  FaShoppingCart,
  FaStore,
  FaHeart,
  FaTruck,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";

import search from "../../assets/search.png";
import "../../styles/home/navbar.css";

function MyNavbar({ hidesearch, hidelike, hidelogin, hidecart }) {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/logout/", {}, { withCredentials: true }); // call Django logout
    } catch (err) {
      console.error("Logout failed", err);
    }

    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.location.href = "/";
  };


  // ✅ Keep state in sync with localStorage (in case of login elsewhere)
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="mynavbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <Link to="/">shopsy</Link>
          </div>

          {/* Search */}
          {!hidesearch && (
            <form className="search-box">
              <img src={search} alt="" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for Products"
              />
            </form>
          )}

          {/* Right Icons */}
          {!hidelogin && !isAuthenticated && (
            <div className="login right-side">
              <Link to="/login">
                <FaUserCircle />
                <span> Login</span>
              </Link>
            </div>
          )}


          {!hidelike && (
            <div className="right-side">
              <Link to="/wishlist" className="like">
                <FaHeart />
              </Link>
            </div>
          )}

          {!hidecart && (
            <div className="cart right-side">
              <Link to="/cart">
                <FaShoppingCart />
                <span>Cart</span>
              </Link>
            </div>
          )}

          <div className="seller right-side">
            <Link to="/seller">
              <FaStore /> <span>Become a Seller</span>
            </Link>
          </div>

          {/* Offcanvas Trigger */}
          <a className="offcanva" onClick={handleShow}>
            ☰
          </a>
        </div>
      </div>

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Welcome {isAuthenticated ? JSON.parse(localStorage.getItem("user"))?.username : "guest"}</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="offcanvas-body">
          {/* Menu */}
          <div className="menu-section">
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/settings" className="menu-link">
                <FaUser /> My Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="menu-link">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist" className="menu-link">
                <FaHeart /> Wishlist
              </Nav.Link>
              <Nav.Link as={Link} to="/orders" className="menu-link">
                <FaTruck /> Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/help" className="menu-link">
                <FaQuestionCircle /> Help
              </Nav.Link>
            </Nav>
          </div>

          {/* Login / Logout */}
          <div className="btn-login-container text-center mt-3">
            {!isAuthenticated ? (
              <Link to="/login" className="btn-login">
                Login <FaSignInAlt />
              </Link>
            ) : (
              <button className="btn-login" onClick={handleLogout} style={{ border: "none", outline: "none", background: "none", borderTop: "1px solid black" }} >
                Logout <FaSignOutAlt />
              </button>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavbar;
