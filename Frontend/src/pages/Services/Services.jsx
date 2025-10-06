import React from "react";
import "../../style/services.css";
import "../../style/home.css";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import { FaCamera, FaVideo, FaPhotoVideo, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
function Services() {
  const services = [
    {
      title: "Photography",
      desc: "Capturing timeless moments with creative frames.",
      icon: <FaCamera />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      title: "Videography",
      desc: "Professional video production with cinematic quality.",
      icon: <FaVideo />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      title: "Portfolio Shoot",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <FaPhotoVideo />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      title: "Fashion and Model Shoot",
      desc: "Capturing timeless moments with creative frames.",
      icon: <FaCamera />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      title: "Event shoot",
      desc: "Professional video production with cinematic quality.",
      icon: <FaVideo />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      title: "Ad Films and Commercial shoots",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <FaPhotoVideo />,
      img: "/image/MAN13348-2-1920x1080.jpg",
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <section className="portfolio-page"></section>

      <section className="FrontSecondSection services-sections" >
        <div className="DreamFrontSecondSection SectionFrontSecondSection">
          <div className="container-fluid">
              <h1 className="FrontHeadSection">
                The Best Production house in India
              </h1>
              <p className="fst-italic">
                Welcome to Dream Byte Studio, where we bring brands to life by
                creating compelling visuals. As the creative heart of Dream Byte
                Solutions, we have enabled impactful showcasing and brand
                building for brands all over India and have become one of the
                most trusted production houses in India.
              </p>
              </div>
              </div>
              <div className="container-fluid DreamPadding">

              <div className="row">
                {services.map((service, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="service-card" style={{"--delay": `${index * 0.2}s`}}>
                      <div className="service-img" style={{ backgroundImage: `url(${service.img})` }}></div>
    <div className="service-content">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </div>
    <div className="service-bottom-icon">{service.icon}</div>
   <Link to="/services/films-showcasing" className="service-right-btn">
  <FaGreaterThan className="arrow" />
</Link>
  </div>
</div>

                ))}
              </div>
            </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Services;
