import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const WeddingVideographyAndPhotography = () => {
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
             <h1 className='FrontHeadSection'>Wedding videography and photography</h1>
        <p>A wedding is one of the most significant days of your life and your family - It’s the beginning of a new life. We Dream Byte Studio understand that and that is why we offer professional wedding
             photoshoot and video shoot services to record your special day in unforgettable memories.</p>
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
             <p className="">We understand that each couple has a different love story, and our job is to reflect and capture it through our lens. Services that we offer are wedding photoshoot, wedding videography, creative pre-wedding photoshoot, post-wedding photoshoot, and wedding reel that will be used on your social media.
             <br/> Our team of professionals will make sure that each detail is captured beautifully whether it is candid shots, traditional shots or a cinematic wedding shoot. We are not new to the wedding shoots and we have completed numerous projects over the years.             </p>
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
                Experienced Professionals </h6>
                 <p>We possess years of experience in wedding photography, videography as well as creative shoots in order to make your wedding memorable.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                    Cinematic Storytelling</h6>
                    <p>We not only shoot but also align it with storytelling which reflects emotions and memories.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                   High-End Equipment </h6>
                    <p>Best visuals are captured with the help of professional cameras, drones, lights, and editing tools that can make your day unforgettable.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                      Customized Packages</h6>
                       <p>We offer personalized wedding photography packages that suit your budget.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4> Wedding Photoshoot</h4>
                    <p className="">Our candid, traditional and cinematic photos will elevate your special day. We will deliver professional services.</p>
                  </li>
                  <li>
                    <h4>Wedding Videography</h4>
                    <p className="">We offer complete coverage of your wedding ceremonies, haldi, mehendi, and the wedding.</p>
                  </li>
                  <li>
                    <h4> Pre-Wedding Photography and Videography</h4>
                    <p className="">Our crew will take your narrative and affections in movie frames at spectacular destinations. Our speciality is imaginative pre-wedding photoshoots and video shoots.</p>
                  </li>
                  <li>
                    <h4>Wedding Reels</h4>
                    <p className=""> With the boost of reel trends, every couple also wants to share their special day on social media; for that, we have our wedding reel services.</p>
                  </li>
                  <li>
                    <h4>Editing & Post-Production</h4>
                    <p className="">  Our editing of your posters and videos will be of high quality and will be professionally graded and improved in color.
                    Make your wedding memorable with the Dream Byte Studio.</p>
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


export default WeddingVideographyAndPhotography
