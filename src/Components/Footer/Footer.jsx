import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaAngleRight,
} from "react-icons/fa";
import "./footer.css"; // Import the CSS file
import logo from "../../Assets/AIEVVO ENGINEERSs-1.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo-rights">
            <Link href="/" className="text-decoration-none">
              <img src={logo} alt="Home Masters Logo" className="footer-logo" />
              <h4 className="text-dark text-center mb-2">
                AIEVVO ENGINEERS PVT. LTD.
              </h4>
            </Link>
            <p className="footer-rights">
              All Rights Reserved. &#169; {new Date().getFullYear()}{" "}
              <Link to={`/`}>AIEVVO ENGINEERS PVT. LTD.</Link>.
              <br />
              Designed by{" "}
              <span>
                <a
                  href="https://www.digiindiasolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer" // Added for security
                >
                  DIGI INDIA SOLUTIONS.
                </a>
              </span>
            </p>
          </div>

          <div className="footer-nav">
            <h5 className="footer-heading">NAVIGATION</h5>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="footer-link">
                  <FaAngleRight className="footer-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/MoreService" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/Project" className="footer-link">
                  <FaAngleRight className="footer-icon" /> Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h5 className="footer-heading">GET IN TOUCH</h5>
            <ul className="footer-contact-info">
              <li>
                <FaMapMarkerAlt className="footer-icon" /> PLOT NO-270/271
                AASRAM ROAD BHANGEL NOIDA, GAUTAM BUDDHA NAGAR-201301
              </li>
              <li>
                <FaClock className="footer-icon" /> Monday - Saturday
              </li>
              <li>
                <FaClock className="footer-icon" /> 09:00 AM - 06:00 PM
              </li>
            </ul>
            <div className="footer-social">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61574116371522"
                className="footer-social-icon"
              >
                <FaFacebookF />
              </a>

              <a target="_blank" href="#" className="footer-social-icon">
                <FaYoutube />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/aievvo?igsh=MTEycW5nczRjMzY3dw=="
                className="footer-social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
