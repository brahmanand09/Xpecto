import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="left-info">
          <span>
            <img src="/assets/flags/india.png" alt="India" className="flag" />
            Sales: +91 997-139-2828
          </span>
          <span>
            <img src="/assets/flags/india.png" alt="India" className="flag" />
            Support: +91 997-188-8346
          </span>
          <span>
            <img src="/assets/flags/ff4.png" alt="Mexico" className="flag" />
            +52-984-278-8753
          </span>
        </div>
        <div className="right-links">
          <a href="#">📧 Internship</a>
          <a href="#">📧 Support</a>
          <a href="#">📧 Client Login</a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="logo">Xpecto</div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <div className="dropdown">
            <button>About Us ▾</button>
            <div className="dropdown-content">
              <a href="#">Company</a>
              <a href="#">Team</a>
            </div>
          </div>
          <div className="dropdown">
            <button>Services ▾</button>
            <div className="dropdown-content">
              <a href="#">Web</a>
              <a href="#">Mobile</a>
            </div>
          </div>
          <div className="dropdown">
            <button>Technology ▾</button>
            <div className="dropdown-content">
              <a href="#">React</a>
              <a href="#">Node.js</a>
            </div>
          </div>
          <div className="dropdown">
            <button>Industry ▾</button>
            <div className="dropdown-content">
              <a href="#">Healthcare</a>
              <a href="#">Finance</a>
            </div>
          </div>
          <a href="#">Career</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
