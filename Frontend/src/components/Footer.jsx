import React from "react";
import "../style/home.css";
import "../style/footer.css"

const Footer = () => {
  return (
    <>
    
    <footer className="bg-light pt-4 border-top">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img
              src="\image\logo\Dbs.png"
              alt="Logo" className="logo"
            />
          </div></div>
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
                <a href="#" className="">
                  About
                </a>
              </li>
              <li className="nav-item footerParagraph">
                <a href="#" className=" ">
                  Services
                </a>
              </li>
              <li className="nav-item footerParagraph">
                <a href="#" className="">
                 Portfolio
                </a>
              </li>
              <li className="nav-item footerParagraph" >
                <a href="#" className="">
                 Blogs
                </a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
             <div className="FooterGap">
             <h3 className="footerName">Contact</h3>
            <ul className="list-unstyled">
              
              <li className="nav-item footerParagraph">
                <a href="#" className=" ">
                 +91 8279720490
                </a>
              </li>
              <li className="nav-item footerParagraph">
                <a href="#" className="">
                 +91 9258332639
                </a>
              </li>
              <li className="nav-item footerParagraph">
                <a href="#" className="">
                info@dreambytesolution.com
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h3 className="footerName">
              Connect With Us</h3>
            <form className="d-flex justify-content-center justify-content-md-end">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email address..."
                style={{ maxWidth: "200px" }}
              />
              <button className="btn btn-primary footerParagraph" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0 text-center text-md-start">
            <a href="#" className="text-muted small px-2">
              Terms & Conditions
            </a>
            |
            <a href="#" className="text-muted small px-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-muted small px-2">
              Accessibility
            </a>
            |
            <a href="#" className="text-muted small px-2">
              Legal
            </a>
          </div>
          <div className="text-muted small text-center text-md-end">
            Design with * by <b>Dream Byte Studio</b> © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    </>
   
  );
};

export default Footer;
