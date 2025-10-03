import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp, FaLinkedinIn } from "react-icons/fa";

const ScrollIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showIcons) return null; // Hide before scroll

  return (
    <div className="scroll-icons">
      <a href="#" className="icon-item fb"><FaFacebookF /></a>
      <a href="#" className="icon-item ig"><FaInstagram /></a>
      <a href="#" className="icon-item wa"><FaWhatsapp /></a>
      <a href="#" className="icon-item ln"><FaLinkedinIn /></a>
      {/* <button className="icon-item top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button> */}
    </div>
  );
};

export default ScrollIcons;
