import React, { useState } from "react";

import '../../styles/settings/address.css'


function Address({ isAuthenticated, user, onSaveAddress }) {
  const [addressLine1, setAddressLine1] = useState(user?.address_line1 || "");
  const [addressLine2, setAddressLine2] = useState(user?.address_line2 || "");
  const [city, setCity] = useState(user?.city || "");
  const [state, setState] = useState(user?.state || "");
  const [postalCode, setPostalCode] = useState(user?.postal_code || "");
  const [country, setCountry] = useState(user?.country || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for postal code
    if (!/^[0-9]{1,6}$/.test(postalCode)) {
      setError("Postal code must be numeric and up to 6 digits.");
      setSuccessMessage("");
      return;
    }

    try {
      const formData = {
        address_line1: addressLine1,
        address_line2: addressLine2,
        city,
        state,
        postal_code: postalCode,
        country,
      };

      if (onSaveAddress) {
        await onSaveAddress(formData);
      }

      setSuccessMessage("Address updated successfully!");
      setError("");
    } catch (err) {
      setError("Failed to update address. Try again.");
      setSuccessMessage("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login_required">
        <p>You need to log in to access Address settings.</p>
      </div>
    );
  }

  return (
    <div className="address-info">
      <div>
        <h2>Delivery Address</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Address Line 1 */}
        <div className="mb-3">
          <label className="form-label">Address Line 1</label>
          <input
            type="text"
            className="form-control"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </div>

        {/* Address Line 2 */}
        <div className="mb-3">
          <label className="form-label">Address Line 2</label>
          <input
            type="text"
            className="form-control"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>

        {/* City & State */}
        <div className="mb-3 row">
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>

        {/* Postal Code & Country */}
        <div className="mb-3 row">
          <div className="col-md-6">
            <label className="form-label">Postal Code</label>
            <input
              type="text"
              className="form-control"
              value={postalCode}
              maxLength={6}
              onChange={(e) =>
                setPostalCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))
              }
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">
          <i className="fa-solid fa-location-dot" style={{ paddingRight: "5px" }}></i>
          Change Address
        </button>
      </form>
    </div>
  );
}

export default Address;