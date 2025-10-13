import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const Documentary = () => {
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
             <h1 className='FrontHeadSection'>Documentary</h1>
        <p>At Dream Byte Studio, we think that every story should be passionately and creatively told, and that documentaries are an effective medium for telling your story. Our team of experts specializes in creating inspirational, educational, and influential documentary film in Hindi. We also shoot business documentaries that tell your story behind building your business, and
             documentary movies in Hindi that entertain and influence your audience with our creativity.</p>
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
             <p className="">We combine storytelling with high-quality cinematography, well-curated documentary background music, and a powerful message. Our vision is to enable every business or individual share their stories through our professional documentary services.
                <br/>Our team has years of experience in filming documentaries, and we have modern technology that gives us an edge over our competitors. We focus on creative scripts, real-life emotions, and professional cinematography to produce the best documentary film in Hindi or regional languages, too.</p>
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
                Strong Storytelling</h6>
                 <p>We create scripts that can influence your audience with powerful storytelling and emotions, inform, influence, and connect to people.
</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                     Full-service production</h6>
                    <p>We offer end-to-end services, concept development and research, scripting, directing, cinematography, and editing; we get you all covered.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                       All kinds of documentary shoots</h6>
                    <p>We specialize in shooting all kinds of documentaries, whether it's Corporate & Business Documentaries, Social & Cultural Stories, and Documentary films in Hindi.</p>
                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                      Professional Cinematography</h6>
                       <p>Our team provides professional cinematography in both studio and outdoor setups.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4> Concept Development & Research</h4>
                    <p className="">Our services include in-depth concept development and research of the subject to create an authentic and engaging documentary.</p>
                  </li>
                  <li>
                    <h4>Professional Shoot</h4>
                    <p className="">We provide professional shoots with modern industry-standard equipment for the best quality Documentary.</p>
                  </li>
                  <li>
                    <h4>Cinematography & Direction</h4>
                    <p className="">We have a passionate and professional team of cinematographers and directors.</p>
                  </li>
                  <li>
                    <h4>Multi-Platform Deliverables</h4>
                    <p className="">High-resolution films optimized for all digital platforms.</p>
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


export default Documentary
