import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const ServiceDetail = () => {
  return (
  <>
    <Header/>
     <section className="portfolio-page">

    </section>
    <section className="ContactSection services-sections">
      <div className="container-fluid">
        <div className='ServicePadding SectionFrontSecondSection'>
             <h1 className='FrontHeadSection'>Product Shoot</h1>
        <p>In case of product-based company, products are the main asset and therefore it is important to make any company display its products in their social media, ecommerce website and advertisements as it is what triggers
         the intention among customers to purchase the product. Our product photography services are offered to businesses that seek to improve their sales.</p>
        </div>
           <div className="media-container">
        {/* Image */}
        <img
          src="\image\demo\image1.jpg"   // put your image path here
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
             <p className="">Dream Byte Studios is an creative product photography and video production studio where we shoot creative and high quality images of your products and video in order to make your brand shine. We also handle any type of product shoots, be it a studio shoot all your products to be used in your online store or be it a creative lifestyle product shoot that you need to launch in your marketing campaign, we will take care of all.
             <br/> Our professional photographers and videographers combine creativity and technology to bring life to your product photography. We are confident in providing the finest quality work to our clients.
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
                 High-resolution photography</h6>
                 <p>We provide our quality photography and videography services to your digital platform, web, and marketing advertisement.
</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                 Creative styling and setup</h6>
                 <p>We have the experience of putting your product photography ideas to practice. We will incorporate props, backgrounds and themes which are aligned with your brand.
</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                 E-Commerce ready</h6>
                 <p>Our product photoshoot studio is specialized in product photography which is optimized to be used on Amazon, Flipkart, Shopify, or your website.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                       Editing and Retouching</h6>
                       <p>We will also give you polished, high quality, edited images and videos of you with a photoshoot that meets your brand standards.</p>
                     </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Creative Briefing & Planning</h4>
                    <p className="">We chat about your brand, target audience, and direction, prior to commencement so that we can align your brand vision.</p>
                  </li>
                  <li>
                    <h4>Professional Photography System.</h4>
                    <p className="">We possess a professional product photoshoot studio equipped, lighting and modern equipment to shoot and also offer lifestyle product shoots.
</p>
                  </li>
                  <li>
                    <h4>Creative Briefing & Planning</h4>
                    <p className="">We chat about your brand, target audience, and direction, prior to commencement so that we can align your brand vision.</p>
                  </li>
                  <li>
                    <h4>Creative Briefing & Planning</h4>
                    <p className="">We chat about your brand, target audience, and direction, prior to commencement so that we can align your brand vision.</p>
                  </li>
                </ul>
                <hr></hr>
                <section id="accordian" className="bsb-accordion-6 py-3 py-md-5 py-xl-8 FrontSecondSections">
      <h1 className="FrontHeadSection text-center mb-5">
        Frequently Asked Questions
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto">
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
                  So what is the importance of professional product photography in e-commerce?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We establish trust and win customers by means of high-quality professional product photography. We also generate brand image by professional photography.
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
                    What is the cost of product photoshoot?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   These are based on the nature of the products, quantity of items, the styling needs and whether 
                   the photographs are lifestyle or studio. We provide you with a budget friendly package. 

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
                    Do you offer e-commerce-ready photos to online stores such as Amazon and Flipkart?
                    </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                   Yes, we provide e-commerce-optimized images which give your e-commerce site a professional appearance and increases engagement.
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
                  Do you also do lifestyle product shoots?

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
                   What is the duration of final product images delivery?

                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                  Time is based on the size of the project and the number of product lines, however, on average, we complete the editing of photos in 5 to 7 working days.
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
                    <div className="services-card">
    <h5>More Services</h5>
    <div className="service-item active">
      <i className="bi bi-arrow-right"></i> Video productions
    </div>
    <div className="service-item inactive">
      <i className="bi bi-arrow-right"></i> Digital media
    </div>
    <div className="service-item inactive">
      <i className="bi bi-arrow-right"></i> Commercial
    </div>
    <div className="service-item inactive">
      <i className="bi bi-arrow-right"></i> Content creation
    </div>
    <div className="service-item inactive">
      <i className="bi bi-arrow-right"></i> Creative directions
    </div>
    <div className="service-item inactive">
      <i className="bi bi-arrow-right"></i> Studio rental
    </div>
  </div>

              </div>
          </div>

        </div>
        </div>
      </div>
    </section>
    <Footer/>
    
    </>
  )
}


export default ServiceDetail
