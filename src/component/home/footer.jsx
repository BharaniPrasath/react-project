// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaBullhorn, FaGift, FaQuestionCircle, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import "../../styles/home/footer.css";

function Footer() {

  return (

    <footer className="footer-1 mt-5">
      <div className="footer-row">
        <div className="footer-col">
          <h6 className="footer-heading">About</h6>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h6 className="footer-heading">Group Companies</h6>
          <ul>
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>



        <div className="footer-col">
          <h6 className="footer-heading">Consumer Policy</h6>
          <ul>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h6 className="footer-heading">Help</h6>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col footer-mail">
          <div className="mail">
            <h6 className="footer-heading">Mail Us:</h6>
            <p>
              <a href="mailto:flipkart@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>flipkart@gmail.com</a> <br />
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className="footer-icons">
            <h6 className="footer-social-heading">Social :</h6>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div><Link to={'/seller'} ><FaBriefcase /> Become a Seller</Link></div>
        <div><a href="#"><FaBullhorn /> Advertise</a></div>
        <div><a href="#"><FaGift /> Gift Cards</a></div>
        <div><a href="#"><FaQuestionCircle /> Help Center</a></div>
      </div>

      <div className="footer-last">
        <div>© 2007-2025 Flipkart.com</div>
        <div className="payment-icons">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
          <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" />
          <img src="https://img.icons8.com/color/48/rupay.png" alt="Rupay" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
