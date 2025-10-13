import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      
      {/* Main Footer */}
      <footer className="bg-light pt-4 border-top">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <img
                src="\image\logo\Dbs.png"
                alt="Logo" className="logo"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3 mb-md-0">
              <h3 className="footerName">Get in Touch</h3>
              <p className="footerPara">
                Dream Byte Solutions Pvt. Ltd
                3rd Floor, above Bank of India,
                Sahastradhara Road, Near IT Park,
                Dehradun, Uttarakhand</p>
            </div>

            {/* Links */}
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="FooterGap">
                <h3 className="footerName">Home</h3>
                <ul className="list-unstyled">
                  <li className="nav-item footerParagraph">
                    <Link to="/#aboutus">About</Link>
                  </li>
                  <li className="nav-item footerParagraph">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="nav-item footerParagraph">
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item footerParagraph">
                    <Link to="/blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="FooterGap">
                <h3 className="footerName">Contact</h3>
                <ul className="list-unstyled">
                  <li className="nav-item footerParagraph">
                    <a href="tel:+918279720490">+91 8279720490</a>
                  </li>
                  <li className="nav-item footerParagraph">
                    <a href="tel:+919258332639">+91 9258332639</a>
                  </li>
                  <li className="nav-item footerParagraph">
                    <a href="mailto:info@dreambytesolution.com">
                      info@dreambytesolution.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3">
              <div></div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Bottom Footer */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-2 mb-md-0 text-center text-md-start">
              <Link to="/terms" className="text-muted small px-2">
                Terms & Conditions
              </Link>
              |
              <Link to="/privacy-policy" className="text-muted small px-2">
                Privacy Policy
              </Link>
              |
              <Link to="/accessibility" className="text-muted small px-2">
                Accessibility
              </Link>
              |
              <Link to="/legal" className="text-muted small px-2">
                Legal
              </Link>
            </div>
            <div className="text-muted small text-center text-md-end">
              Design with * by <b>Dream Byte Studio</b> © {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;