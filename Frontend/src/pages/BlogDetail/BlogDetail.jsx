import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/BlogDetail.css';

function BlogDetail() {
  return (
    <>
    <Header/>
     <section className="portfolio-page">

    </section>
    <section className="ContactSection services-sections">
      <div className="container">
        <h1 className='FrontHeadSection'>Blogs-detail</h1>
        <div className="row g-4">
          <div className='col-md-9'>
            <div className='quote-div SectionFrontSecondSection'>
             <p className="">We focus on creating timeless memories and producing a film that sticks in the mind with its visuals and compelling stories.</p>
              <div className="quote-section">
              <div className="quote-icon">
                <span> &#10077; </span>
              </div>
                <h6 className="quote-text mb-0 ms-3">
                  Lorem Ipsum Dolor Sit Amet, Consec tuar Adipiscin<br/>
                  Elit In Augue Ligula, Feugiat Ut Nulla Consequat
                </h6>
                </div>
             <img src="\image\demo\Video.jpg" alt='image' className='ServiceImage'/>
             <p>urabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non nisl interdum, citudinne que sed, posuere elit. Vivamus ac tincidunt sapien. Donec at dapibus enim nteger et tur is vel turpis vehi cula mattis. Class aptentre taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosivam.
               Curabitur at ferm entum purus. Interdum et mal suada fames ac ante ipsu primis in faucibus. Mauris non nisl interdum, citudin neque se posue asre elit.</p>
             <h2>The List Of Requierd Equipment</h2>
             <p>Vividum at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non nisl interdum, citudinne que sed, posuere elit. Vivamus ac tincidunt sapien. Donec at dapibus enim nteger et tur is vel turpis vehi cula mattis. Class aptentre taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosivam. Curabitur at ferm entum purus. 
              Interdum et mal suada fames ac ante ipsu primis in faucibus.</p>
              <div className="quote-section">
              <div className="quote-icon">
                <span> &#10077; </span>
              </div>
                <h6 className="quote-text mb-0 ms-3">
                  Lorem Ipsum Dolor Sit Amet, Consec tuar Adipiscin<br/>
                  Elit In Augue Ligula, Feugiat Ut Nulla Consequat
                </h6>
                </div>
                <p>Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non nisl interdum, citudinne que sed, posuere elit. Vivamus ac tincidunt sapien. Donec at dapibus enim nteger et tur is vel turpis vehi cula mattis. Class aptentre taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosivam. Curabitur at ferm entum purus.
                   Interdum et mal suada fames ac ante ipsu primis in faucibus.</p>
                   <h2>Top Ten Advices From Experts</h2>
                   <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet, uisque rutrum, aenean imperdie etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, am eget dui maecenas tempus, tellus eget condimentu rhoncus, sem quam semper.
                     Pellentesque vitae quam luctus, porta nibh at, accumsan und.</p>
                     <div className='d-flex'>
                      <img src="\image\demo\img1.jpg" alt="Image1" className='ServiceImg'/>
                      <img src="/image/demo/img2.jpg" alt="Image2" className='ServiceImg'/>
                     </div>
                     {/* <button className="ServiceBtn mt-2">
                        <a href="/Services">More Services</a>
                      </button> */}
                      <p>Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non nisl interdum, citudinne que sed, posuere elit. Vivamus ac tincidunt sapien. Donec at dapibus enim nteger et tur is vel turpis vehi cula mattis. Class aptentre taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosivam. Curabitur at ferm entum purus. 
                        Interdum et mal suada fames ac ante ipsu primis in faucibus.</p>
            </div>
            
          </div>
          <div className="col-md-3">
               <div className="sticky-sidebar">
                  <h2 className='SectionRecent'>Recent Post</h2>
                 <a href="" className='ServiceA'>
                 <img src="\image\demo\image1.jpg" alt="" className="ServiceImages" />
                 <p>29-09-2025 03:23</p>
                    <h5>Why Branding is Important for Startups.</h5>
                 </a>
                 <a href="" className='ServiceA'>
                 <img src="\image\demo\image2.jpg" alt="" className="ServiceImages" />
                 <p>29-09-2025 03:23</p>
                    <h5>Why Branding is Important for Startups.</h5>
                 </a>
             
              </div>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default BlogDetail