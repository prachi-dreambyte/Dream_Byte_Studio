import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const ContentCreation = () => {
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
             <h1 className='FrontHeadSection'>Content Creation</h1>
        <p>In today’s fast-paced digital world, your digital media presence is how you connect to your audience. At Dream Byte Studio, we not only provide content creation services for digital presence, but we also influence your audience with our content. From scroll-stopping social media posts, we make sure that your brand stands out in the crowd.
    </p>
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
             <p className="">Our content creation services are designed to elevate your brand’s online presence. Whether you need an eye-catching digital marketing post, engaging reels, or digital marketing creative ads for a social media awareness campaign, we've got you all covered.

             <br/>As a content creation company, we provide high-quality content services for brands and influencers. We have worked with many brands and influencers to help them grow their social media presence. We ensure that your social media attracts engagement so that your brand will be known to others.

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
               Content creation</h6>
                 <p>We provide high-quality content creation services with compelling visuals to increase your social media awareness.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                Corporate & Social Media Videos</h6>
                 <p>We create all kinds of social media content, including Business profiles, explainers, and reels with professional equipment.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                       Branded Graphics & Visual Assets</h6>
                 <p>Our team builds engaging banners, digital marketing creative ads, and infographics, all with high-quality visuals for your social media campaign.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                     Strategic Planning</h6>
                       <p>We provide a strategic plan to firms and influencers for digital marketing posts and ad campaigns that align with your goals.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Content strategy & monthly planning</h4>
                    <p className="">Pre-planned content concept and monthly content calendar will be shared with you.</p>
                  </li>
                  <li>
                    <h4>Full video production</h4>
                    <p className="">We provide all kinds of content creation, whether it's short-form or long-form video, digital media posts, or ad creatives.</p>
                  </li>
                  <li>
                    <h4>Editing & Optimization</h4>
                    <p className="">Professional video editing and content refining with high-quality files for your website and social media.</p>
                  </li>
                  <li>
                    <h4>Deliverables</h4>
                    <p className="">Final content with high resolution and web/social media formats.</p>
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
                What types of digital media content do you create?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We create wide range of content,
                     including social media posts digital media creatives, reels, explainer videos, branded graphics and ad campaigns personalized to your brand.
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
                    Do you only provide social media content, or other formats too?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                 Though social media content is a big part of our services but we also offer digital marketing posts, 
                 corporate videos, banners, infographics and web-ready content.


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
                  Do you work with both brands and influencers?

                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                 Yes we create work with businesses, startups, and influencers. We have worked with diverse clients and helped them to grow their digital presence.
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
                  >
                Can you create a monthly content calendar for my brand?
                  </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Absolutely! We also offer lifestyle product photography in addition to studio shoot to demonstrate your products in real-life situations.
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
                  How much does digital media content creation cost?
                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">The budget of a commercial film depends on a variety of factors such as the script, duration, actors, location, and the standard of production. At Dream Byte Studio,
                   packages are affordable packages without compromise on originality</div>
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


export default ContentCreation
