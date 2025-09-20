import React, { useState } from "react";

import '../../styles/settings/profile_edit.css'

function ProfileEdit({ isAuthenticated, user, onSaveProfilePicture, onCancel }) {
  const [preview, setPreview] = useState(user?.profile_picture || "");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="login_required">
        <p>You need to log in to edit your profile picture.</p>
      </div>
    );
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Optional: file size validation (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("profile_picture", file);

      if (onSaveProfilePicture) {
        await onSaveProfilePicture(formData);
      }

      setSuccessMessage("Profile picture updated successfully!");
      setError("");
    } catch (err) {
      setError("Failed to update profile picture.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="profile-edit-box p-4 shadow rounded bg-white">
        <h2 className="mb-4">Edit Profile Picture</h2>

        {/* Profile Picture Preview */}
        <div className="text-center mb-4">
          <img
            src={preview}
            alt="Current Profile"
            className="rounded-circle border"
            id="previewImage"
          />
        </div>

        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {error && <div className="error-message">{error}</div>}

        {/* Upload Form */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label fw-bold">Choose New Picture</label>
            <input
              type="file"
              className="form-control"
              accept=".png,.jpg,.jpeg"
              required
              onChange={handleFileChange}
            />
            <small className="text-muted">Only JPG, PNG (max 5MB).</small>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel || (() => window.history.back())}
            >
              <i className="fa-solid fa-arrow-left me-1"></i> Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              <i className="fa-regular fa-floppy-disk me-1"></i> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
