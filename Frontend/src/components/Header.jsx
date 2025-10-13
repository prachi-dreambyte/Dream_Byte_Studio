import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/home.css";
import Social from "./social";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const closeMobileMenu = () => {
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <Social />
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/" onClick={closeMobileMenu}>
            <img src="/image/logo/Dbs.png" alt="Logo" className="logo" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item DreamHeader">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  end
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item DreamHeader">
                <Link className="nav-link" to="/#aboutus" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item DreamHeader">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item DreamHeader">
                <a className="nav-link" href="/services-areas" onClick={closeMobileMenu}>
                  Services Area
                </a>
              </li>
              <li className="nav-item DreamHeader">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item DreamHeader">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            {/* Right Button */}
            <div className="d-flex">
              <Link to="/contact-us" className="btn DreamBtn" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;