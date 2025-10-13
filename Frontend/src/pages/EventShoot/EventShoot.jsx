import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const EventShoot
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
             <h1 className='FrontHeadSection'>Event Shoot</h1>
        <p>Every event is a story waiting to be told - full of emotions, energy, and unforgettable moments. At Dream Byte Studio, we provide professional event photography and 
            videography services that capture every extract of your special moment so that your memory never fades away.</p>
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
             <p className="">Our event photography is designed to cover every detail of your special occasion, whether it's cultural events, corporate gatherings, birthday events, engagement, anniversary, or any kind of occasion. We capture and create timeless memories.
             <br/> We deliver high-quality visuals that capture every smile, performance, and highlight, showing the mood, scale, and spirit of your moment. From candid shot to cinematic coverage, and from event videos to event photos we beautifully document your event.
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
                    Complete Event Coverage</h6>
                 <p>We also create highlights of your special day with engaging videos that summarize the best moments.
</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                    Highlight Films</h6>
                 <p>We have the experience of putting your product photography ideas to practice. We will incorporate props, backgrounds and themes which are aligned with your brand.
</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                 Candid Storytelling
</h6>
                 <p>We capture natural and beautifully composed frames to make cinematic videos and candid event videos and photos.
</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                       Expert Editing
</h6>
                       <p>We provide fully edited images and videos from shoot to editing; we take care of all.
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
                    <h4>Pre-event consultation</h4>
                    <p className="">We provide a pre-event consultation session to help you decide the theme, schedule, and key moments to capture for your event videos and photos.</p>
                  </li>
                  <li>
                    <h4>Full event coverage</h4>
                    <p className="">Our team will cover your event from start to finish, so every special moment will be captured in our frames</p>
                  </li>
                  <li>
                    <h4>Edited high-resolution photos</h4>
                    <p className="">Our team of expert editors will edit all images and photos in high resolution in print and digital form.</p>
                  </li>
                  <li>
                    <h4>Event highlight video</h4>
                    <p className="">We will create a highlight video of the special moments of the event.</p>
                  </li>
                  <li>
                    <h4>Fast delivery</h4>
                    <p className="">We ensure the timely delivery of your event coverage whether its birthday event, cultural event, or corporate event photography
Searching for professional event photography ? Let Dream Byte Studio capture your events. Contact us now to book your shoot!</p>
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
                  What types of events do you cover with your event photography services?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We cover a wide range of events including birthday events, cultural event, corporate events, parties etc. Our team ensure professional coverage for every occasion.
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
                    Do you provide both event photography and event videography?

                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                  Yes, Dream Byte Studio offer both photography and videography services. Every detail of your event will be covered by our team. 

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
                   Will I get edited photos and event highlight videos?
                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   Yes, with photography and videography Our packages also include editing of your photos and videos for better quality.
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
                  Can you customize event photography packages according to my needs?

                  </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Absolutely! We offer tailored packages based on your event type, duration, and requirement, Our packages are budget friendly.
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
                  How long does it take to deliver the photos and videos?

                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                  It depands on your event type and duration of video but the standard time for delivery is 7-10 business days.
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


export default EventShoot

