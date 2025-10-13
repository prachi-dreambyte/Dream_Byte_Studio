import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const FashionAndModelShoot
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
             <h1 className='FrontHeadSection'>  Fashion and Model Shoot</h1>
            <p>Your portfolio is your first impression – In the modeling world, your first impressions matter a lot. At Dream Byte Studio, we create a professional industry-standard portfolio shoot to reflect your personality, versatility, and style, and you can stand out amongst others.
            </p>
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
             <p className="">We do model shoots for brands and individuals, whether you need a fashion model photoshoot for your brand or for your own portfolio. Our services are designed to capture your best looks with the mix of your styles, looks, and moods.
             <br/> We understand that a model portfolio shoot is more than just photos; it’s about storytelling from the lens to convey the emotions and message behind every character or brand. Our services include fashion model photoshoots, brand shoots, and personal portfolio shoots.
             </p>
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
                    Professional Photography
</h6>
                 <p>We will capture your high-resolution and compelling images with experienced photographers.  
</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                    Creative Direction</h6>
                 <p>We provide styling tips, posing, and shoot guidance to bring your confidence out, which will reflect your story.
</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                 Studio & Outdoor Options</h6>
                 <p>We have a professional studio setup for indoor shoots and can also choose natural outdoor locations.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                      Retouching & Editing

</h6>
                       <p>For flawless and polished images, we give retouching and editing services so that your personality shines.
</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Pre-shoot consultation
</h4>
                    <p className="">We provide pre-shoot consultation or guidance for a photoshoot to align your portfolio shoot with your story and ideas.</p>
                  </li>
                  <li>
                    <h4>Professional lighting & setups</h4>
                    <p className="">We have a professional studio setup and also options for outdoor locations for lifestyle shoots and natural vibes.</p>
                  </li>
                  <li>
                    <h4>Edited high-resolution images</h4>
                    <p className="">Our team will provide you with edited high-resolution images to make the images look perfect and professional.</p>
                  </li>
                  <li>
                    <h4>Social Media Ready Content</h4>
                    <p className="">Our services include social media-ready content so you can grow your social media presence.</p>
                  </li>
                  <li>
                    <h4>Fast delivery</h4>
                    <p className="">Delivery of projects on a fast and timely basis without compromising the quality of the project.
                        Expand your own brand with professional images. Call Dream Byte Studio and begin your modeling career.
                    </p>
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


export default FashionAndModelShoot

