import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/blogs.css";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import '../../style/home.css';

const Blog = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toISOString().replace("T", " ").slice(0, 19);
    setCurrentTime(formatted);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "How Does Real Estate Digital Marketing Increase Sales",
      image: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      id: 2,
      title: "Why Branding is Important for Startups",
      image: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      id: 3,
      title: "Top 5 Social Media Strategies for 2025",
      image: "/image/MAN13348-2-1920x1080.jpg",
    },
    {
      id: 4,
      title: "The Future of AI in Digital Marketing",
      image: "/image/MAN13348-2-1920x1080.jpg",
    },
  ];

  return (
    <>
    <Header/>
   <section className="portfolio-page"></section>
    <section className="ContactSection">
         <div className="container">
     <h1 className='FrontHeadSection'>Blogs</h1>
      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-lg-3 col-md-6 col-sm-12">
            <div className="blog-card">
              <div className="blog-img-wrapper">
                 <a href="/BlogDetail" className="read-more">
                <img src={blog.image} alt={blog.title} className="blog-img" />
                </a>
                <span className="blog-date">{currentTime}</span>
              </div>
              <div className="blog-overlay">
                 <a href="/BlogDetail" className="read-more">
                <h5 className="blog-title">{blog.title}</h5>
               
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
   <Footer/>
    </>
  );
};

export default Blog;
