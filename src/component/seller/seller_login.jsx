import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SellerNavbar from "./seller_navbar";

function SellerLogin(  ) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    seller_email: "",
    seller_password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller login data:", formData);

    // 🔹 Add validation / API call here
    if (formData.email === "" || formData.password === "") {
      setError("Email and password are required.");
      return;
    }

    navigate("/seller_dashboard");
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
                value={formData.email}
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
                  value={formData.password}
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
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerLogin;