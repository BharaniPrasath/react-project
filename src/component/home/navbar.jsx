import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas, Nav } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle, FaShoppingCart, FaStore, FaHeart, FaTruck, FaQuestionCircle, FaUser } from "react-icons/fa";

import search from "../../assets/search.png";
import "../../styles/home/navbar.css";

function MyNavbar({ hidesearch, hidelike, hidelogin, hidecart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ✅ Check login state
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    window.location.href = "/"; // redirect to login page
  };

  return (
    <>
      {/* Navbar */}
      <div className="mynavbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <Link as={Link} to="/">
              shopsy
            </Link>
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

          {isAuthenticated && (
            <div className="logout right-side" onClick={handleLogout}>
              <FaSignOutAlt />
              <span> Logout</span>
            </div>
          )}

          {!hidelike && (
            <div className=" right-side">
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
          <a
            className="offcanva"
            onClick={handleShow}
            style={{ background: "none !important" }}
          >
            ☰
          </a>
        </div>
      </div>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-container">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="offcanvas-body">
          {/* Profile Pic */}
          <div className="profile_pics">
          </div>

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
              <button className="btn-login" onClick={handleLogout}>
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
