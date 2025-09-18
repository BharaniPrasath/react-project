import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SellerNavbar from "./seller_navbar";


const SellerPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pasError, setPasError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasError("Passwords do not match");
      return;
    }

    // // Here you can handle the API call for saving the password
    // console.log({ password, confirmPassword });
  };

  return (
    <div>
      <SellerNavbar hideStartSelling={true} />


      <div className="container-1">
        <div className="row g-4">
          {/* Left Form */}
          <div className="col-md-7">
            <div className="form-section">
              {/* Progress Steps */}
              <div className="progress-tracker">
                <div className="step">
                  <i className="bi bi-check-circle"></i>
                  <p className="label">EMAIL ID & GST</p>
                </div>
                <div className="line"></div>
                <div className="step">
                  <i className="bi bi-check-circle"></i>
                  <p className="label" style={{ color: "black", fontWeight: 700 }}>
                    PASSWORD CREATION
                  </p>
                </div>
              </div>

              {/* Password Form */}
              <form onSubmit={handleSubmit} id="securityForm" style={{ height: "500px" }}>
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                <span className="error-message" style={{ margin: "15px 5px" }}>{pasError}ljkbkijb</span>
                <br />
                <button
                  type="submit"
                  style={{
                    padding: "10px 30px",
                    marginTop:"10px",
                    borderRadius: "3px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    backgroundColor: "#ffc107",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer"
                  }}
                >
                  <i className="fa-solid fa-key" style={{ marginRight: "8px" }}></i>
                  Save password
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-5">
            <div className="side-info">
              <h6 className="mb-3">#KuchKhaasKamao</h6>
              <img src="https://placehold.co/350x300?text=Seller+Ad+Banner" alt="Ad Banner" />
              <p className="mt-3 text-muted">
                50 Crore+ Customers • 19000+ Pincodes • 14 Lakh+ Sellers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div>
          <h2 className="text-center mb-5">Why sell on Flipkart?</h2>
          <div className="row g-4">
            {[
              { icon: "bi-truck", title: "Sell Across India", text: "Reach over 50 crore+ customers across 27000+ pincodes" },
              { icon: "bi-percent", title: "Higher Profits", text: "With 0% commission, you take 100% profits with you" },
              { icon: "bi-person-circle", title: "Account Management", text: "Our Dedicated managers will help your business on Flipkart" },
              { icon: "bi-arrow-down-circle", title: "Lower Return Charges", text: "With our flat and low return charges, ship your products stress-free" },
              { icon: "bi-calculator", title: "Simple Pricing Calculator", text: "Use our simple calculator to decide the best selling price" },
              { icon: "bi-headphones", title: "24x7 Seller Support", text: "All your queries are answered by our dedicated team" },
              { icon: "bi-cash-stack", title: "Fast & Regular Payments", text: "Get payments as fast as 7 - 10 days from dispatch" },
              { icon: "bi-phone", title: "Business on the go", text: "Download our Seller App to manage your business anywhere" },
            ].map((item, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="icon-box">
                  <i className={`bi ${item.icon}`}></i>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SellerPassword;