import React, { useState } from "react";

import '../../styles/settings/security.css'


function Security({ isAuthenticated, onChangePassword }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    setError("");

    // Simulate API call
    if (onChangePassword) {
      onChangePassword(newPassword)
        .then((msg) => {
          setSuccessMessage(msg || "Password changed successfully!");
          setNewPassword("");
          setConfirmPassword("");
        })
        .catch(() => {
          setError("Failed to update password. Try again.");
        });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login_required">
        {/* Replace with your own component */}
        <p>You need to log in to access Security settings.</p>
      </div>
    );
  }

  return (
    <div className="security-info">
      <div>
        <h2>Security & Login</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
      </div>

      <form onSubmit={handleSubmit} id="securityForm">
        {/* New Password */}
        <label>New Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword1 ? "text" : "password"}
            id="passwordField"
            name="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword1(!showPassword1)}
          >
            <span>{showPassword1 ? "Hide Password" : "Show Password"}</span>
          </span>
        </div>

        {/* Confirm Password */}
        <label>Confirm New Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword2 ? "text" : "password"}
            id="confirmPasswordField"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword2(!showPassword2)}
          >
            <span>{showPassword2 ? "Hide Password" : "Show Password"}</span>
          </span>
        </div>

        {error && <span className="error-message">{error}</span>}
        <br />

        {/* Submit Button */}
        <button type="submit">
          <i className="fa-solid fa-key"></i> Change Password
        </button>
      </form>
    </div>
  );
}

export default Security;