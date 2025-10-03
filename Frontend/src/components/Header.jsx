import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/home.css";
import Social from "./social";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
   <Social/>
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/#Homepage">
          <img src="image/logo/Dbs.png" alt="Logo" className="logo" />
        </a>

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
              <a className="nav-link active" href="/#Homepage">
                Home
              </a>
            </li>
            <li className="nav-item DreamHeader">
              <a className="nav-link" href="/#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item DreamHeader">
              <a className="nav-link" href="/Services">
                Services
              </a>
            </li>
             <li className="nav-item DreamHeader">
              <a className="nav-link" href="/ServicesAera">
                Services Aera
              </a>
            </li>
            <li className="nav-item DreamHeader">
              <a className="nav-link" href="/Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item DreamHeader">
              <a className="nav-link" href="/Blogs">
                Blog
              </a>
            </li>
          </ul>

          {/* Right Button */}
          <div className="d-flex">
            <a href="/contactUs" className="btn DreamBtn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
   
  );
};

export default Header;
