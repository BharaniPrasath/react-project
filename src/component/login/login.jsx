import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/login/login.css";
import Navbar from "../home/navbar";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required!");
      return;
    }

    axios
      .post("http://localhost:8000/login/", { username, password })
      .then((response) => {
        // Store tokens in localStorage
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh); 
        console.log("Login successful:", response.data);
        console.log("Login response:", response.data);

        setError("");

        // ✅ Store login state
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ username }));

        // Redirect
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("❌ Invalid username or password");
      });
  };

  return (
    <>
      <Navbar hidesearch={true} hidelike={true} hidelogin={true} hidecart={true} />
      <div className="login-wrapper">
        <div className="login-container">
          {/* Left Section */}
          <div className="login-left">
            <h1>Login</h1>
            <p>
              Get access your Orders <br />
              Wishlist and <br />
              Recommendations
            </p>
          </div>

          {/* Right Section */}
          <div className="login-right">
            <h2>Welcome!</h2>
            <br />

            <form onSubmit={handleSubmit} method="POST">
              {/* Username */}
              <label htmlFor="username">Username</label>
              <div className="user-name">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <br />
              {/* Password */}
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="passwordField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>{showPassword ? "Hide Password" : "Show Password"}</span>
                </span>
              </div>

              {/* Error */}
              <div className="error-message">{error}</div>

              {/* Links */}
              <div>
                <a href="/" className="forgot">
                  Forgot password?
                </a>
                <Link to={"/signup"} className="forgot">
                  Not have an account?
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

export default Login;
