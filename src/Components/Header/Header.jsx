import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/AIEVVO ENGINEERSs-1.png";
import { FaPhoneAlt, FaWhatsapp, FaAngleDoubleUp } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    let bootstrapCollapse = null;

    if (window.bootstrap && navbarCollapseRef.current) {
      // Initialize Bootstrap collapse instance
      bootstrapCollapse = new window.bootstrap.Collapse(
        navbarCollapseRef.current,
        {
          toggle: false,
        }
      );
    }

    // Clean up the collapse instance when the component unmounts
    return () => {
      if (bootstrapCollapse) {
        bootstrapCollapse.dispose();
      }
    };
  }, []);

  const handleActiveChange = () => {
    setActive(!active);

    // Collapse the navbar if it's expanded
    if (
      navbarCollapseRef.current &&
      navbarCollapseRef.current.classList.contains("show")
    ) {
      const collapseInstance = window.bootstrap.Collapse.getInstance(
        navbarCollapseRef.current
      );
      if (collapseInstance) {
        collapseInstance.hide();
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  // Function to check if user has scrolled enough to display the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=919412124892"
        target="_blank"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      <a href="tel:+919761336602" target="_blank" className="call_float">
        <FaPhoneAlt />
      </a>

      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="go-to-top-btn">
            <FaAngleDoubleUp />
          </button>
        )}
      </div>

      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <div className="logo img-fluid">
            <Link className="navbar-brand m-0" to="/">
              <img src={logo} alt="LOGO" className="img-fluid" />
              <span>Aievvo Engineers Pvt. Ltd.</span>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={handleActiveChange} to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={handleActiveChange}
                  to="/About"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="servicesdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="servicesdropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/consoleTable"
                    >
                      Modern Console Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/dining"
                    >
                      Modern Dining Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/sideTable"
                    >
                      Modern Side Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/centralTable"
                    >
                      Modern Central Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/mirror"
                    >
                      Modern Mirror
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/partition"
                    >
                      Modern Partition
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/bar"
                    >
                      Modern Bar Trolly
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/chairs"
                    >
                      Modern Chairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/coffe"
                    >
                      Modern Coffee Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/receptions"
                    >
                      Modern Receptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/sofa"
                    >
                      Modern Sofa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/officeTable"
                    >
                      Modern Office Tables
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1"
                      onClick={handleActiveChange}
                      to="/workStation"
                    >
                      Modern Work Stations
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="servicesdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="servicesdropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/kitchen"
                    >
                      Interior Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/Wardrobe"
                    >
                      Fabrication
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/Furniture"
                    >
                      Modular Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/MoreService"
                    >
                      More Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="pagesdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </Link>
                <ul className="dropdown-menu" aria-labelledby="pagesdropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/project"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/WeWork"
                    >
                      Our Work Procedure
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleActiveChange}
                      to="/Wantjoin"
                    >
                      Want To Join
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={handleActiveChange}
                  to="/Contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
