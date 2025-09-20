import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import '../../styles/settings/settings.css'

import PersonalInfo from "./personal";
import Security from "./Security";
import Address from "./address";
import HelpSupport from "./help";
import DangerZone from "./Danger";

function Settings() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ✅ store the active tab in state
  const [activeTab, setActiveTab] = useState("personal");

  // restore last opened tab from localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem("lastTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // save tab on change
  useEffect(() => {
    localStorage.setItem("lastTab", activeTab);
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/logout/",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Logout failed:", err);
    }

    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);

    navigate("/");
  };

  // keep auth state in sync with localStorage
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  // ✅ Render the correct section
  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo />;
      case "security":
        return <Security />;
      case "address":
        return <Address />;
      case "help":
        return <HelpSupport />;
      case "danger":
        return <DangerZone />;
      default:
        return <PersonalInfo />;
    }
  };
  return (
    <div className="my_container d-flex">
      {/* Left Sidebar */}
      <div className="sec1">
        <div className="subsec1">
          <p>Settings</p>
          <Link to="/settings/personal" className="load-page active">
            Personal Informations
          </Link>
          <Link to="/settings/security" className="load-page">
            Security & Login
          </Link>
          <Link to="/settings/address" className="load-page">
            Address & Delivery
          </Link>
          <Link to="/settings/help" className="load-page">
            Help & Support
          </Link>
          <Link to="/settings/danger" className="load-page" id="danger">
            Danger Zone
          </Link>
        </div>

        <div className="subsec2">
          {isAuthenticated ? (
            <Link id="danger">

              <button
                onClick={handleLogout}
                style={{ background: "none", border: "none", outline: "none", color: "#d32f2f", fontWeight: "600" }}
              >
                Logout <i style={{ marginLeft: "10px" }} className="fas fa-right-from-bracket"></i>
              </button>
            </Link>
          ) : (
            <Link to="/login" id="danger">
              Login <i style={{ marginLeft: "10px" }} className="fa-solid fa-right-to-bracket"></i>
            </Link>
          )}




          <Link to="/">
            <i style={{ marginRight: "5px" }} className="fa fa-home"></i> Home
          </Link>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="sec2" id="settings-content">
        {renderContent()}
      </div>
    </div >
  );
}

export default Settings;
