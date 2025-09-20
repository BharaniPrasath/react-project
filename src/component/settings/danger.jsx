import React from "react";

import '../../styles/settings/danger.css'


function DangerZone({ isAuthenticated, user, onDeleteAccount }) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account? This cannot be undone!"
    );

    if (confirmed && onDeleteAccount) {
      onDeleteAccount();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login_required">
        <p>You need to log in to access this page.</p>
      </div>
    );
  }

  return (
    <div className="danger-zone">
      <h2>Delete Your Account</h2>
      <h3>{user?.username}</h3>
      <h3>{user?.email}</h3>
      <p>Permanently delete it. This action is irreversible.</p>

      <button className="danger-btn" onClick={handleDelete}>
        Permanently Delete Account
      </button>
    </div>
  );
}

export default DangerZone;