import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const AdFlimsAndCommercialShoots

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
             <h1 className='FrontHeadSection'>Ad film and Commercial shoot</h1>
        <p>Every brand has the right to shine in the spotlight given the very competitive market today. In the Dream Byte Studio, we do not only think about visibility, but also we produce ad film that will make the lasting impression on your audiences. We possess experience of years in commercial shoot and ad shoot. Our main objective is to produce amazing ad films within your
            budget so small brands can also promote their product to a wide range of audiences.</p></div>
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
             <p className="">An ad film or commercial shoot is not just visuals – but it's about selling with stories. That is why, it is highly significant to reach people with the help of storytelling, cinematics, and wonderful visuals. Our filmmaking team of cinematographers, creative directors, ad film makers, and editors will combine your brand vision with creative cinematics, 
                that will create a lasting impression on the mind of the audience.<br/>Whether it is a new product launch, creating product awareness or digital ad campaign, We produce ad film that stick in the audience's mind.  We ensure everything from concept development, scriptwriting, and direction to shooting, editing, and final production. We help convert viewers into customers, 
                and that whats make us one of the best ad film production house.</p>
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
                    <h6 className="">Creative Storytelling</h6>
                 <p>We do not just shoot visuals, but we craft stories that align with your brand's 
                    vision and connect to the audience.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">Experienced Team</h6>
                 <p>Our directors, editors and professional ad film makers have several years experience and expertise in 
                    production of ad films and commercial shoots.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">Latest Technology</h6>
                 <p>Premium-quality ad shoot and results are guaranteed by high-resolution cameras, advanced lighting, and modern editing tools.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">Customized Solutions</h6>
                       <p>We offer customized solutions, hence every brand has a different vision and story, so we create services tailored to your audience and marketing strategy.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Pre-Production Planning</h4>
                    <p className="">From Script, storyboard, casting, and location scouting, all are discussed before production.</p>
                  </li>
                  <li>
                    <h4>Full Production Crew</h4>
                    <p className="">We have professional Directors, cinematographers, stylists, ad film makers, and support staff,
                       and we will ensure to deliver the best ad film services.</p>
                  </li>
                  <li>
                    <h4>Professional Equipment</h4>
                    <p className="">Our equipment is of the latest technology and of high quality to produce high-quality visuals.</p>
                  </li>
                  <li>
                    <h4>Proven Results</h4>
                    <p className="">Over the years, we have created many commercials that have actually shown results in advertising.
                    Ready to give your brand the spotlight it deserves? Book your ad film shoot today at Dream Byte Studio and we will make commercials that bind and convert.</p>
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
                  How do you make the ad film reach the target audience?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We blend market research, brand identity and creative storytelling in order to generate advertisements that not only appear beautiful, but also reach your market and deliver the desired results.</div>
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
                  >How long does it take to complete an ad shoot?</button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">The time taken to complete an ad film project ranges between two and six weeks, including concept development, filming and post production. Depending on the complexity of the project, timelines may vary.</div>
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
                  >What is the difference between an ad shoot and a commercial shoot?
                  </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">It's common to use both terms interchangeably. The two terms are often used interchangeably. A commercial shot may have a wider focus in terms of storytelling to create brand awareness, but an ad shoot normally focuses on the short, product related information.</div>
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
                  >Why should I choose Dream Byte Studio as my ad film makers?</button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody"> Our team of professional directors, cinematographers and editors focuses on creating engaging stories, quality cinematics, that delivers measurable results to your advertising campaigns.</div>
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
                  >How much does an ad film or commercial shoot cost?</button>
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


export default AdFlimsAndCommercialShoots


