import React from "react";

function LoginRequired({ onLogin }) {
  return (
    <div className="login-required">
      <h2>🔒 Login Required</h2>
      <button
        className="login-btn"
        onClick={() => {
          if (onLogin) onLogin();
          else window.location.href = "/login"; // fallback to login page
        }}
      >
        Click to Login
      </button>
    </div>
  );
}

export default LoginRequired;
