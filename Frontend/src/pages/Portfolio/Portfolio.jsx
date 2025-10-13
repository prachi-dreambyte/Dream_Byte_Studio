import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/portfolio.css";
import Footer from "../../components/Footer";

const Portfolio = () => {
  const portfolios = [
    "Product Shoot",
    "Content Creation",
    "Event Shoot",
    "E- Commerce Photography",
    "Fashion and Model Shoots",
    "Architecture",
    "Wildlife",
    "Events",
    "Wedding, Videography and Photography",
    "Documentary",
  ];

  // Different images for each portfolio
  const portfolioImages = {
    "Product Shoot": [
      "/image/productshoot/7.webp",
      "/image/productshoot/2.webp",
      "/image/productshoot/3.webp",
      "/image/productshoot/4.webp",
      "/image/productshoot/5.webp",
      "/image/productshoot/6.webp",
      "/image/productshoot/1.webp",
      "/image/productshoot/8.webp",
      "/image/productshoot/9.webp",
      "/image/productshoot/10.webp",
      "/image/productshoot/11.webp",
      "/image/productshoot/12.webp",
      "/image/productshoot/13.webp",
      "/image/productshoot/14.webp",
      "/image/productshoot/15.webp",
    ],
    "Content Creation": [
     "/image/400x500.png",
      "/image/400x500.png",
       "/image/400x500.png",
      "/image/400x500.png",
        "/image/400x500.png",
    ],
    "Event Shoot": [
      "/image/demo/Artboard 1 copy 5.png",
        "/image/demo/Artboard 1 copy 6.png",
         "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "E- Commerce Photography": [
      "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "Fashion and Model Shoots": [
     "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
    ],
    "Ad Flims and Commercial Shoots": [
      "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "Postcast Shoot": [
     "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
    ],
    "Short Flim Production": [
      "/images/event1.jpg",
      "/images/event2.jpg",
      "/images/event3.jpg",
    ],
    "Real estate Photography": [
      "/images/corp1.jpg",
      "/images/corp2.jpg",
      "/images/corp3.jpg",
    ],
    "Wedding, Videography and Photography": [
      "/images/street1.jpg",
      "/images/street2.jpg",
      "/images/street3.jpg",
    ],
        "Documentary": [
      "/images/corp1.jpg",
      "/images/corp2.jpg",
      "/images/corp3.jpg",
    ],
  };

  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* <Header /> */}
      <section className="portfolio-page"></section>
      <div className="container-fluid portfolio-pages">
        <div className="row">
          {/* Left Column: Portfolio List */}
          <div className="col-md-3 portfolio-list-wrapper">
            <div className="portfolio-list">
              <h4 className="portfolio-title">Our Portfolios</h4>
              <ul className="list-group">
                {portfolios.map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      selectedPortfolio === item ? "active" : ""
                    }`}
                    onClick={() => setSelectedPortfolio(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="col-md-9 portfolio-images">
            <div className="row">
              {portfolioImages[selectedPortfolio].map((img, i) => (
                <div className="col-md-4 col-sm-6 mb-4" key={i}>
                  <img
                    src={img}
                    alt={`Portfolio ${i}`}
                    className="img-fluid portfolio-img"
                    onClick={() => setSelectedImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <span className="close-btn">&times;</span>
            <img
              src={selectedImage}
              alt="Full View"
              className="modal-content-img"
            />
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Portfolio;
