import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/settings/personal.css'

function PersonalInfo({ onSave }) {
  // ✅ Authentication and user state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  // Form state
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");  
  const [dob, setDob] = useState(user?.date_of_birth || "");
  const [phone, setPhone] = useState(user?.phone_number || "");
  const [profilePicture, setProfilePicture] = useState(user?.profile_picture || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  // ✅ Keep auth state in sync if login/logout happens elsewhere
  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(auth);
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) return;

    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("date_of_birth", dob);
      formData.append("phone", phone);
      if (profilePicture instanceof File) {
        formData.append("profile_picture", profilePicture);
      }

      if (onSave) {
        await onSave(formData); // Call parent handler or API
      }

      // Update local user info immediately
      const updatedUser = { ...user, first_name: firstName, last_name: lastName, date_of_birth: dob, phone_number: phone };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSuccessMessage("Profile updated successfully!");
      setError("");
    } catch (err) {
      setError("Failed to update profile. Try again.");
      setSuccessMessage("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login_required">
        <p>You need to log in to access Personal Information settings.</p>
      </div>
    );
  }

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>

      {successMessage && (
        <div className="alert alert-success" id="flash-message">
          {successMessage}
        </div>
      )}

      {/* Profile Picture */}
      <div className="profile-pic-wrapper">
        <div className="profile-pic">
          <img
            src={
              profilePicture && !(profilePicture instanceof File)
                ? profilePicture
                : "/images/userlogo.svg"
            }
            alt="profile"
            id="profileImage"
          />
          <div className="upload-overlay">
            <label style={{ color: "white", cursor: "pointer" }}>
              Edit <i className="fa-regular fa-pen-to-square"></i>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setProfilePicture(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} id="personalForm">
        <div className="mb-3 row">
          <div className="col-md-4">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={user?.username || ""} readOnly />
          {error && <span className="error-message">{error}</span>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" value={user?.email || ""} readOnly />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <div className="phone-wrapper">
            <span className="phone-prefix">+91</span>
            <input
              type="tel"
              className="form-control"
              maxLength={10}
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
              }
            />
          </div>
        </div>

        <button type="submit" className="save-btn">
          <i className="fa-solid fa-floppy-disk me-2"></i> Save Changes
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
