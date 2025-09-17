import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../home/navbar";
import "../../styles/login/signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 store multiple errors from backend
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    setErrors({ confirmPassword: "Passwords do not match." });
    return; // stop submit
  }

    axios
      .post("http://127.0.0.1:8000/signup/", {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log("Signup success:", res.data);
        setErrors({});
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setErrors(err.response.data);
        } else {
          setErrors({ general: "Something went wrong, please try again." });
        }
      });
  };

  return (
    <>
      <Navbar hidesearch={true} hidelike={true} hidelogin={true} hidecart={true} />

      <div className="signup-wrapper">
        <div className="signup-container">
          {/* Left Section */}
          <div className="signup-left">
            <h1>Signup</h1>
            <p>
              Create your account to <br />
              access Orders, Wishlist and <br />
              Recommendations
            </p>
          </div>

          {/* Right Section */}
          <div className="signup-right">
            <h2>Welcome!</h2>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="error-message">{errors.username}</div>

              {/* Email */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="error-message">{errors.email}</div>

              {/* Password */}
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </span>
              </div>
              <div className="error-message">
                {Array.isArray(errors.password) ? errors.password.join(", ") : errors.password}
              </div>

              {/* Confirm Password */}
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide Password" : "Show Password"}
                </span>
              </div>
              <div className="error-message">{errors.confirmPassword}</div>

              {/* General error */}
              {errors.general && (
                <div className="error-message">{errors.general}</div>
              )}

              {/* Links */}
              <Link to={"/login"} className="forgot">
                Already have an account?
              </Link>

              {/* Submit */}
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
