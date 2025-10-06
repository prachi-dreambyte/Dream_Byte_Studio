import React from "react";
import { useForm } from "react-hook-form";
import Header from '../../components/header';
import '../../style/home.css';
import '../../style/contactUs.css';
import "../../style/portfolio.css";
import Footer from "../../components/Footer";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };
  return (
    <>
    {/* <Header/> */}
    <section className="portfolio-page">

    </section>
    <section className="ContactSection services-sections">
        <div className="container-fluid">
          <div className="ConatctusDiv">
            <div className="row">
              <div className="col-md-6">
                <div className="ContactWrapper">
                  <h2 className="FrontHeadSection">Contact Us</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
                   {/* Full Name */}
                    <div className="ContactForm">
                      <label className="block mb-1 font-medium ContactFormlabel">Full Name*</label>
                        <input
                        type="text"
                        {...register("fullName", {
                        required: "Full Name is required*",
                        minLength: {
                        value: 3,
                        message: "Full Name must be at least 3 characters",
                        },
                        })}
                        className="w-full border contactInput"
                      />
                      {errors.fullName && (
                      <p className="text-danger text-sm">{errors.fullName.message}</p>
                       )}
                    

        {/* Email */}
        <div>
          <label className="block mb-1 ContactFormlabel">Email*</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required*",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border contactInput"
          />
          {errors.email && (
            <p className="text-danger text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 ContactFormlabel">Phone Number*</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required*",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className="w-full border contactInput"
          />
          {errors.phone && (
            <p className="text-danger text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 ContactFormlabel">Message*</label>
          <textarea
            {...register("message", {
              required: "Message is required*",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters*",
              },
            })}
            className="w-full border contactInput"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-danger text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="ContactButton"
        >
          Submit
        </button>
        </div>
      </form>
    </div> 
                </div>
                <div className="col-md-6">
                  <div className="ContactWrapper">
                    <h2 className="FrontHeadSection ">Contact Us Details</h2>
                     <div className="ContactForm">
                    <div className="contactWrapDisplay">
                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      <p className="ContactFormlabel"> 9876543213</p>
                    </div>
                    <div className="contactWrapDisplay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      <p className="ContactFormlabel">info@gmail.com</p>
                    </div>
                    <div className="contactWrapDisplay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      <p className="ContactFormlabel">Full address of studio </p>
                    </div>
                    <div className="contactWrapDisplay">
                      <iframe
                        src="https://www.google.com/maps?q=3rd+Floor,+Sahastradhara+Rd,+above+Bank+of+India,+near+IT+Park,+Doon+IT+Park,+Govind+Vihar,+Dehradun,+Danda+Dhoran,+Uttarakhand+248001&output=embed"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div> 
                  </div>                 
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className="ContactUsLooking">
      <div className="ContactOverlay"></div>
      <div className="container">
          <div className="ContactWork ">
              <div className="contactBlock">
                  <h5 className="FrontHeadSection"> Looking For A Professional Photographer? </h5>
              </div>
              <p className="DreamParagraph"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <span className="btn ContactBtn" data-toggle="modal" data-target="#hire-us-popup"> Hire Us </span>
          </div>
      </div>
    </section>
    {/* <Footer/> */}
    </>
  );
}

export default ContactUs;
