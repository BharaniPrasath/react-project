import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SellerNavbar from "./seller_navbar";
import axios from "axios";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function SellerLogin() {

  const [formData, setFormData] = useState({
    seller_email: "",
    seller_password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [isSellerAuthenticated, setIsSellerAuthenticated] = useState(
    localStorage.getItem("isSellerAuthenticated") === "true"
  );

  // 🔄 Redirect if already logged in
  useEffect(() => {
    if (isSellerAuthenticated) {
      navigate("/addmobileproduct");
    }
  }, [isSellerAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    axios.post("http://127.0.0.1:8000/seller_login/",formData,{headers: { "X-CSRFToken": getCookie("csrftoken") },withCredentials: true,})
    .then(res=>{
      localStorage.setItem("isSellerAuthenticated", "true");
      localStorage.setItem("seller",JSON.stringify({ seller_email: formData.seller_email }));
      setIsSellerAuthenticated(true);
      navigate("/seller");
      console.log("Seller login successful", res);
    })
    .catch (err=>{
      const msg =err.response?.data?.error ||"Something went wrong. Please try again.";
      setError(msg);
    setLoading(false);
      console.error("Login error", err);
    })
  };

  return (
    <>
      <SellerNavbar hidelogin={true} />

      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-right">
            <h2>Seller Login</h2>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <label htmlFor="seller_email">Email Address</label>
              <input
                type="email"
                id="seller_email"
                name="seller_email"
                value={formData.seller_email}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              {/* Password */}
              <label htmlFor="passwordField">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="passwordField"
                  name="seller_password"
                  value={formData.seller_password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </span>
              </div>

              {/* Error */}
              {error && <div className="error-message">{error}</div>}

              {/* Links */}
              <div>
                <a href="/" className="forgot">
                  Forgot password?
                </a>
                <Link to="/seller_information" className="forgot">
                  Not have a seller account?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !formData.seller_email || !formData.seller_password}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerLogin;
