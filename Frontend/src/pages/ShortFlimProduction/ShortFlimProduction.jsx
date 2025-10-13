import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const ShortFlimProduction = () => {
  const [activeService, setActiveService] = useState("");
  const navigate = useNavigate();

  const services = [
    { name: "Video productions", path: "/video-productions" },
    { name: "Digital media", path: "/digital-media" },
    { name: "Commercial", path: "/commercial" },
    { name: "Content creation", path: "/content-creation" },
    { name: "Creative directions", path: "/creative-directions" },
    { name: "Studio rental", path: "/studio-rental" },
  ];

  const handleClick = (service) => {
    setActiveService(service.name);
    navigate(service.path); // redirect to page
  };
  return (
  <>
    {/* <Header/> */}
     <section className="portfolio-page">
<img
          src="/image/demo/5rivban1.jpg"   // put your image path here
          alt="Product"
          className="media-item"
        />
    </section>
    <section className="ContactSection services-sections">
      <div className="container-fluid">
        <div className='ServicePadding SectionFrontSecondSection'>
             <h1 className='FrontHeadSection'>Short Film Production</h1>
        <p>We specialize in creating Hindi short films that stick in your audience's mind. At Dream Byte Studio, we offer end-to-end short film production to tell
         your stories to the world with professional production and direction.</p>
        </div>
           <div className="media-container">
        {/* Image */}
        <img
          src="/image/049A9578-1-1920x1080.jpg"   // put your image path here
          alt="Product"
          className="media-item"
        />
        {/* <img
          src="/image\demo\image2.jpg"   // put your image path here
          alt="Product"
          className="media-item"
        /> */}

        {/* Video */}
        {/* <video className="media-item" controls>
          <source src="/videos/product-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className='col-md-9'>
            <div className='quote-div SectionFrontSecondSection'>
                <h1 className="FrontHeadSection text-center mb-5">
                  Service Description
                </h1>
             <p className="">In today’s world of short-form content, people’s attention span is so low that they don’t want to watch a full-length film; that’s why we offer short film production services to attract your audience and tell them your story in short form. And our specialization is in Hindi short film production, so you can attract a mass audience.
             <br/>At Dream Byte Studio, we have created many flawless Hindi short films as well as in English and in regional languages through our creativity and storytelling. We have an expert team which have years of short film production experience. We produce short films that will connect with the audience.</p>
              <div className="quote-section">
              <div className="quote-icon">
               
              </div>
                {/* <h6 className="quote-text mb-0 ms-3">
                  Lorem Ipsum Dolor Sit Amet, Consec tuar Adipiscin<br/>
                  Elit In Augue Ligula, Feugiat Ut Nulla Consequat
                </h6> */}
                </div>
                 <div className='ServiceWrapper'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h6 className="">
               Professional production team</h6>
                 <p>We have a passionate and experienced team of professionals which believes in creating short films that connect with the audience.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                High-quality cinematography</h6>
                 <p>We use modern and best technology to create high-quality content that keeps the audience engaged.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                      Affordable yet professional production</h6>
                 <p>We believe in delivering professional production with an affordable budget.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                    On-time delivery</h6>
                       <p>We deliver projects on time without compromising the quality.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Idea & Story Development</h4>
                    <p className="">We help you shape your idea into a compelling script that defines your goals.</p>
                  </li>
                  <li>
                    <h4>Pre-Production</h4>
                    <p className="">Casting, location scouting, costumes, and scheduling – We handle it all to create a foundation for smooth production.</p>
                  </li>
                  <li>
                    <h4>Filming & Direction</h4>
                    <p className="">We create short movies of industry standard with the finest cinematography, professional equipment and narration.</p>
                  </li>
                  <li>
                    <h4>Editing & Post-Production</h4>
                    <p className="">Smooth editing, visual colour grading and sound effects make sure that there is a strong and effective short movie.</p>
                  </li>
                   <li>
                    <h4>Distribution Support</h4>
                    <p className="">We also guarantee the distribution assistance of online platforms to festival submissions.
Don’t just tell your story, show it. Book a free consultation today and let us produce a short film that connects with your audience.</p>
                  </li>
                </ul>
                <hr></hr>
                <section id="accordian" className="bsb-accordion-6 py-3 py-md-5 py-xl-8 FrontSecondSections">
      <h1 className="FrontHeadSection text-center mb-5">
        Frequently Asked Questions
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div className="accordion" id="accordionExample">
              {/* Item 1 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                How much does it cost to produce a short film?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">A short film's budget is determined by various factors, including the script, length, cast, setting, and production needs. 
                    Dream Byte Studio provides packages that are customized to your needs and budget.</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How long does it take to make a short film?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                <div className="accordion-body accBody">
                    On average it takes around 2 weeks to 6 weeks from idea generation to final submission of project,
                     It mainly depands on the complexity of project it can vary according that.
                </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                  Do you only produce Hindi short films?
                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">Although producing Hindi 
                    short films is our specialty, we also produce in English and other regional languages.
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  > I have an idea but no script. Can you help?</button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">Absolutely! We also offer scriptwriting as part of our services.
                     We provide a whole package that includes script writing, editing, and finishing.</div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >What equipment and technology do you use for short film production?</button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We use latest cameras, lighting, sound equipment,
                     and cutting-edge editing software. Our crew has years of expertise producing films.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </section>
            </div>
            
          </div>
          <div className="col-md-3">
      <div className="sticky-sidebar">
        <div className="services-card">
          <h5>More Services</h5>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                activeService === service.name ? "active" : "inactive"
              }`}
              onClick={() => handleClick(service)}
            >
              <i className="bi bi-arrow-right"></i> {service.name}
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
    {/* <Footer/> */}
    
    </>
  )
}


export default ShortFlimProduction
