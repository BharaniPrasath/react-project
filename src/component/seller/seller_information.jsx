import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SellerNavbar from "./seller_navbar";


import '../../styles/seller/seller_information.css'

function Seller_information() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    company: "",
    owner: "",
    address: "",
    pincode: "",
    businessType: "",
    category: "",
    gstin: "",
    bank: "",
    ifsc: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passError, setPassError] = useState("")
  const [confirmPassword, setConfirmPasssword] = useState('')

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password != confirmPassword) {
      setPassError("Password not match")
      return; // stop submission
    } else {
      setPassError("");
    }
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/seller_signup/", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
      );
      alert("Seller registered successfully!");
      console.log("✅ Signup success:", res.data);
      navigate("/");
    }
    catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        setErrors({ api: "Server error, try again later" });
      }
    }
  };

  return (
    <>
      <SellerNavbar hideStartSelling={true} />

      {/* Main Container */}
      <div className="full-container">
        <div className="form-section">
          {/* Progress Tracker */}
          <div className="progress-tracker">
            <div className="step">
              <i className="bi bi-check-circle"></i>
              <p className="label">EMAIL ID & GST</p>
            </div>
            <div className="line"></div>
            <div className="step">
              <i className="bi bi-check-circle"></i>
              <p className="label">PASSWORD CREATION</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="myform">
            {/* Left Form */}
            <div className="right-form">
              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone No</label>
                <div className="phone-wrapper">
                  <span className="phone-prefix">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    className="form-control"
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                    required
                  />
                </div>
                {errors.phone && (<p className="error-message">{errors.phone}</p>)}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email ID *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Email ID"
                  required
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="mb-3">
                <label className="form-label">Company / Business Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Company Name"
                  required
                />
                {errors.company && (
                  <p className="error-message">{errors.company}</p>
                )}
              </div>

              {/* Owner Name */}
              <div className="mb-3">
                <label className="form-label">Owner / Seller Name *</label>
                <input
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Full Name"
                  required
                />
                {errors.owner && (
                  <p className="error-message">{errors.owner}</p>
                )}
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Business Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  rows="2"
                  placeholder="Enter Full Address"
                  required
                ></textarea>
                {errors.address && (
                  <p className="error-message">{errors.address}</p>
                )}
              </div>

              {/* Pincode */}
              <div className="mb-3">
                <label className="form-label">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength="6"
                  className="form-control"
                  onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                  required
                />
                {errors.pincode && (
                  <p className="error-message">{errors.pincode}</p>
                )}
              </div>

              {/* Business Type */}
              <div className="mb-3">
                <label className="form-label">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">-- Select Business Type --</option>
                  <option value="Proprietorship">Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="LLP">LLP</option>
                  <option value="Individual Seller">Individual Seller</option>
                </select>
                {errors.businessType && (
                  <p className="error-message">{errors.businessType}</p>
                )}
              </div>

              {/* Selling Category */}
              <div className="mb-3">
                <label className="form-label">What are you looking to sell?</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">-- Select Category --</option>
                  <option value="all">All Categories</option>
                  <option value="mobile">Mobile Phones</option>
                  <option value="watch">Watches</option>
                  <option value="laptop">Laptop</option>
                  <option value="shoes">Shoes</option>
                  <option value="tv">Television</option>
                  <option value="earphones">Ear Phones</option>
                  <option value="toys">Toys</option>
                  <option value="books">Books</option>
                </select>
                {errors.category && (
                  <p className="error-message">{errors.category}</p>
                )}
              </div>

              {/* GSTIN */}
              <div className="mb-3">
                <label className="form-label">Enter GSTIN *</label>
                <input
                  type="text"
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter GSTIN"
                />
                <small className="text-muted">
                  GSTIN is required to sell products. You can also share it later.
                </small>
                {errors.gstin && (
                  <p className="error-message">{errors.gstin}</p>
                )}
              </div>

              {/* Bank Account */}
              <div className="mb-3">
                <label className="form-label">Bank Account Number *</label>
                <input
                  type="text"
                  name="bank"
                  value={formData.bank}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Bank Account Number"
                />
                {errors.bank && (
                  <p className="error-message">{errors.bank}</p>
                )}
              </div>

              {/* IFSC */}
              <div className="mb-3">
                <label className="form-label">IFSC Code *</label>
                <input
                  type="text"
                  name="ifsc"
                  value={formData.ifsc}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter IFSC Code"
                />
                {errors.ifsc && (
                  <p className="error-message">{errors.ifsc}</p>
                )}
              </div>
              {errors.api && <p className="error-message">{errors.api}</p>}
            </div>
            {/* Left Form Ends */}





            {/* Right form  */}
            <div className="left-form" >
              {/* Password Form */}
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}
                  style={{ marginTop: "-8px" }}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </span>
              </div>

              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPasssword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ marginTop: "-8px" }}
                >
                  {showConfirmPassword ? "Hide Password" : "Show Password"}
                </span>
              </div>


              <p className="error-message">{errors.password}</p>
              <p className="error-message">{passError}</p>

              <span className="error-message" style={{ margin: "15px 5px" }}></span>
              <br />
              <div className="password-buttons">
                <button type="submit" className="btn button">
                  <i className="fa-solid fa-key" style={{ marginRight: "8px" }}></i>Save Seller
                </button>
              </div>
            </div>
            {/* Right form Ends */}
          </form>
        </div >
      </div >
      {/* Footer Info Section */}
      < footer className="footer-section" >
        <div>
          <h2 className="text-center mb-5">Why sell on Shopshy?</h2>
          <div className="row g-4">
            {[
              { icon: "truck", title: "Sell Across India", text: "Reach over 50 crore+ customers across 27000+ pincodes" },
              { icon: "percent", title: "Higher Profits", text: "With 0% commission, you take 100% profits with you" },
              { icon: "person-circle", title: "Account Management", text: "Our Dedicated managers will help your business" },
              { icon: "arrow-down-circle", title: "Lower Return Charges", text: "With our flat and low return charges, ship stress-free" },
              { icon: "calculator", title: "Simple Pricing Calculator", text: "Use our simple calculator to decide the best price" },
              { icon: "headphones", title: "24x7 Seller Support", text: "All your queries are answered by our team" },
              { icon: "cash-stack", title: "Fast & Regular Payments", text: "Get payments as fast as 7 - 10 days" },
              { icon: "phone", title: "Business on the go", text: "Download our Seller App to manage anywhere" },
            ].map((item, i) => (
              <div key={i} className="col-md-4 col-lg-3">
                <div className="icon-box">
                  <i className={`bi bi-${item.icon}`}></i>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer >
    </>
  );
}

export default Seller_information;
