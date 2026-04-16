import React from "react";
import "./Footer.css";

const Footer = () => {
  const flags = [
    "ff1.png", "ff2.png", "ff3.png", "ff4.png", "ff5.png",
    "ff6.png"
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Xpecto® IT Solutions Pvt Ltd</h2>
        <p className="tagline">A Reference Based Company</p>

        <div className="footer-columns">
          <div>
            <h3>Expertise</h3>
            <ul>
              <li>Website Development</li>
              <li>Web Applications</li>
              <li>Custom Applications</li>
              <li>Mobile Applications</li>
              <li>Digital Marketing</li>
              <li>Cloud / Hosting</li>
              <li>Email Solutions</li>
              <li>Web / Mobile Maintenance</li>
            </ul>
          </div>

          <div>
            <h3>Consulting</h3>
            <ul>
              <li>Blockchain</li>
              <li>Artificial Intelligence</li>
              <li>IoT</li>
              <li>NFT</li>
              <li>Digital Transformation</li>
              <li>ChatBot</li>
              <li>Web 3.0</li>
            </ul>
          </div>

          <div>
            <h3>Hire</h3>
            <ul>
              <li>Full Stack Developers</li>
              <li>Web Developers</li>
              <li>MERN Stack Developers</li>
              <li>UI/UX Designers</li>
              <li>Others</li>
            </ul>
          </div>

          <div>
            <h3>Informations</h3>
            <ul>
              <li>Who We Are</li>
              <li>Clients</li>
              <li>We Work In</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="footer-certifications-social">
          {/* Left: Certification Box */}
          <div className="certifications-box">
            <div className="certifications-container">
              <img src="/assets/flags/i.png" alt="DUNS Registered" />
              <img src="/assets/flags/j.png" alt="Clutch" />
              <img src="/assets/flags/k.svg" alt="Top Software" />
            </div>
          </div>

          {/* Right: Social + Flags */}
          <div className="footer-right">
            <div className="footer-social">
              <p>Follow Us On:</p>
              <div className="icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-google"></i>
              </div>
            </div>

            <div className="footer-flags">
              <p>We Work In:</p>
              <div className="flags">
                {flags.map((flag, i) => (
                  <img key={i} src={`/assets/flags/${flag}`} alt={`flag-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="https://dummyimage.com/100x30/cccccc/000000&text=DMCA+Protected" alt="DMCA" />
        <p>Copyright © 2013-2024 Xpecto® IT Solutions Pvt Ltd. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Trademark Policy</a>
          <a href="#">GDPR Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
