
import "bootstrap-icons/font/bootstrap-icons.css";

import '../../styles/seller/seller_features.css'

function SellerFeatures() {


  const features = [
    { icon: "bi-people", text: "45 crore+ customers" },
    { icon: "bi-wallet2", text: "7 Days Secure Payments" },
    { icon: "bi-percent", text: "Low Cost of Doing Business" },
    { icon: "bi-headset", text: "24/7 Seller Support" },
    { icon: "bi-bag", text: "Access to Big Billion Days" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="hero-section-container">
          <h1>Sell Online with Seller Hub</h1>
          <p className="lead text-muted">
            Reach millions of customers and grow your business effortlessly
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="feature-box-container">
        <div className="feature-box-container-row ">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <i className={`bi ${feature.icon}`}></i>
              <h6>{feature.text}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerFeatures;
