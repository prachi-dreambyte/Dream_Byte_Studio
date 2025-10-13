import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const ECommerceShoot
 = () => {
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
             <h1 className='FrontHeadSection'>E-commerce photography</h1>
            <p>With the rise of digital commerce, your product images are your first impression. At Dream Byte Studio, we capture stunning images and transforms ordinary  products into appealing visuals. Today investing in professional e-commerce
              photography is smartest way to grow your busin  increase impressions.</p>
            </div>
           <div className="media-container">
        {/* Image */}
        <img
          src="/image/demo/product (2).webp"   // put your image path here
          alt="Product"
          className="media-item"
        />
        {/* <img
          src="\image\demo\image2.jpg"   // put your image path here
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
            <p>Through our e-commerce product photography services we ensure to highlight your products details, colors, and textures in high resolution images and videos. Whether it’s apparel, electronics, jewelry, cosmetics, lifestyle products or any other e-commerce business, Our team captures images according to industry standards while showcasing your brand’s unique identity.
            <br/>To make your visuals flawless, we offer end to end e-commerce photography services including pre-shoot consultations, photoshoot and e-commerce photo editing. We offer both studio and outdoor natural shoot so we can represent your brands vibe and aesthetics.</p>
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
                   Conversion-Focused Photography</h6>
                 <p>Our team focuses on capturing photos that actually works in the market place, Our main objective is to take eye catching photos.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">Experienced Team</h6>
                    <p>Our team of talented and creative photographers ensure breathtaking photography.Our team have years of experience in this industry.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">Experienced Team</h6>
                      <p>Our team includes industry experts with years of professional experience and a passion for video or podcast shoots.</p>
                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                        Collaborative Approach
                      </h6>
                      <p>We work closely with you to ensure your podcast reflects your vision, so your audience will engage with your podcast.</p>                    
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Pre-shoot consultation</h4>
                    <p>You will have a pre-shoot meeting for podcast consultation and planning about your podcast format and requirements.</p>
                   </li>
                  <li>
                    <h4>Professional lighting & setups</h4>
                    <p>Our Studio setup is perfect for podcast recording it is designed with premium audio equipment, cameras, soundproofing, and lighting.</p>
                    </li>
                  <li>
                    <h4>Recording Session</h4>
                    <p className="">Your podcast will be recorded in our studio which is fully equipped and we can also customize it according to your aesthetics.</p></li>
                  <li>
                    <h4>Editing & Post-Production</h4>
                    <p className="">We ensure professional audio mixing, video editing, and intro/outro creation.</p></li>
                  {/* <li>
                    <h4>Fast delivery</h4>
                    <p className="">Delivery of projects on a fast and timely basis without compromising the quality of the project.
                        Expand your own brand with professional images. Call Dream Byte Studio and begin your modeling career.
                    </p>
                  </li> */}
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
                  What is included in a model portfolio shoot?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">Our portfolio shoots consist of pre-shoot consultation, studio set up and outdoor shoot, high-resolution edited photos, and social media ready content. We also offer photoshoots 
                    to potential models and aspiring brands in need of model photoshoots.</div>
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
                     What do I need to prepare to have a portfolio shoot?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">e suggest carrying 3-4 outfits that are a reflection of your style and versatility. Be natural unless a certain appearance is desired, and get plenty of rest before the shoot.
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
                    What is the length of a model portfolio shoot?
                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody"> A model photoshoot takes 2 to 3 hours on average and it will take a longer time based on the number of looks and places.</div>
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
                  >Do you offer indoor studio and outdoor photographing?</button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">Yes, we also provide indoor 
                    professional studio set up shoots and outdoor location photoshoots (lifestyle shots).
                  </div>
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
                  >
                    When will I receive my end images?</button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   Edited high-resolution photos usually take 5-7 business days to be delivered.
                  </div>
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


export default ECommerceShoot

