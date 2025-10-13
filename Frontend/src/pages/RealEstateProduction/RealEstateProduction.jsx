import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const RealEstateProduction = () => {
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
             <h1 className='FrontHeadSection'>Real Estate Production</h1>
        <p>First impressions are the most important when it comes to the sale or rental of properties. Good real estate photography can change how potential customers or tenants view your house. Stunning photographs do not merely draw visitors to you but also create a sense of trust and credibility in what you are selling. At Dream Byte Studios, we assist real estate agents, developers and owners of properties to present 
            their properties in the most favorable light, both literally and figuratively.</p>
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
             <p className="">Dream Byte Studio is an artistic photography and video production firm that deals with real estate photographs on a professional level. We make eye-catching photos and videos of residential, commercial, and architectural houses that will make your listings shine in a competitive market.
                <br/>Do you want wide-angle frames of a stylish domestic environment, drone shots of a luxurious villa house, or videos of a virtual tour of the commercial buildings? We guarantee that every place in your house will look extraordinary.
Our professional photographers and videographers have developed talents of creativity, accuracy, and the newest technology to create visually appealing content that narrates your property. We produce powerful images that will result in more people making an inquiry and a quicker sale or rental.</p>
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
                    Editing & Retouching</h6>
                    <p>We professionally edit and retouch every photo to make your property appear the best in realism and be welcoming.</p> </div>
                   <div className='col-md-6'>
                    <h6 className="">
                     Architectural Detailing</h6>
                    <p>Our team dwells on the capture of structure, natural light and design beauty to bring out the essence of what your property is.</p>                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                       Aerial & Drone Shots</h6>
                      <p>We provide aerial photography and videography services professionally and at an affordable cost that offers a panoramic view of your property and the surrounding area.</p></div>
                     <div className='col-md-6'>
                      <h6 className="">
                      Virtual Tours & Walk throughs</h6>
                      <p>Improve potential customer experience with immersive 360 virtual tours and video walkthroughs that enable them to feel as though they are already there.</p></div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Creative Briefing & Planning</h4>
                    <p>Before we start, we will discuss your property type, brand goals, and target audience to align the shoot with your vision.</p>
                    </li>
                  <li>
                    <h4>Professional Photography System</h4>
                    <p>We have high-end cameras, lenses, lighting and drones that will ensure that all details are captured with accuracy and clarity.</p>
                    </li>
                  <li>
                    <h4>Styling & Scene Preparation</h4>
                    <p className="">We assist in setting and styling your area, playing with the lights and the angles, as well as the set-up to make each shot look clean, balanced, and attractive.</p>
                  </li>
                  <li>
                    <h4>Editing & Retouching</h4>
                    <p>We undertake our post-production process consisting of color correction, exposure balancing, sky replacement and object removal to make your images perfect.

You will get web-optimized and super high-resolution images and videos that can be utilized throughout your site, portals, print brochures, and any social media.
Do not allow boring pictures to restrain the potential of your property. Allow Dream Byte Studios to put the best foot forward in front of your space, and enable you to make more buyers, renters and clients.
Contact us today to book your real estate photography session and elevate your listings.
</p>
                   </li>
                  {/* <li>
                    <h4>Editing & Post-Production</h4>
                    <p className="">  Our editing of your posters and videos will be of high quality and will be professionally graded and improved in color.
                    Make your wedding memorable with the Dream Byte Studio.</p>
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
                  What do you provide in your wedding photography packages?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We offer candid, traditional, and cinematic wedding photography services, complete wedding videography coverage, pre-wedding shoots, post-wedding shoots, and social media wedding reels.
                  </div>
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
                     Do you sell personalized wedding photography packages?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Yes, we know that each wedding and couple is different, hence we offer personalized packages to meet your needs, budget, and culture.</div>
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
                    Do you offer pre-wedding and post-wedding shoots?                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                  Yes, we specialize in wedding shoots, and we offer pre-wedding shoots in beautiful places and post-wedding photoshoots to make the best of your love story.
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
                  > Do you travel outside of Dehradun to do wedding shoots?
                 </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   Yes, other than Dehradun we do shoots in Mussoorie, Rishikesh, Haridwar and all over Uttarakhand. We also provide destination wedding shoots in Uttarakhand and other nearby areas.
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
                  >Do you also offer Instagram reels of weddings?</button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   Yes, we understand that couples like posting their special moments during the wedding to their social media, so we produce cinematic wedding reels that will give you a spotlight on your social media.             </div>
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


export default RealEstateProduction
