import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/portfolio.css";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const Portfolio = () => {
  const portfolios = [
    "Wedding Shoot",
    "Fashion Photography",
    "Nature",
    "Travel",
    "Food",
    "Architecture",
    "Wildlife",
    "Events",
    "Corporate",
    "Street Photography",
  ];

  // Different images for each portfolio
  const portfolioImages = {
    "Wedding Shoot": [
      "/image/demo/Artboard 1 copy.png",
      "/image/demo/Artboard 1 copy 2.png",
      "/image/demo/Artboard 1 copy 3.png",
      "/image/demo/Artboard 1 copy 4.png",
       "/image/demo/Artboard 1 copy 5.png",
        "/image/demo/Artboard 1 copy 6.png",
         "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/Artboard 1 copy 8.png",
           "/image/demo/Artboard 1 copy 9.png",
            "/image/demo/Artboard 1 copy 10.png",
             "/image/demo/Artboard 1 copy.png",
    ],
    "Fashion Photography": [
      "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
      "/image/demo/DSC07246.jpg",
      "/image/demo/momos.png",
    ],
    "Nature": [
      "/image/demo/Artboard 1 copy 5.png",
        "/image/demo/Artboard 1 copy 6.png",
         "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "Travel": [
      "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "Food": [
     "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
    ],
    "Architecture": [
      "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
      "/image/demo/DSC07237.jpg",
    ],
    "Wildlife": [
     "/image/demo/Artboard 1 copy 7.png",
          "/image/demo/DSC07211.jpg",
      "/image/demo/DSC07219.jpg",
    ],
    "Events": [
      "/images/event1.jpg",
      "/images/event2.jpg",
      "/images/event3.jpg",
    ],
    "Corporate": [
      "/images/corp1.jpg",
      "/images/corp2.jpg",
      "/images/corp3.jpg",
    ],
    "Street Photography": [
      "/images/street1.jpg",
      "/images/street2.jpg",
      "/images/street3.jpg",
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
