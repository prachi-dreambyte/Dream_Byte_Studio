import React, { useEffect, useState } from "react";
import Axios from "../../config/axiosInstance";
import createExcerpt from "../../util/basic";
import Loader from "../../components/loader";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/"; // adjust to your backend URL

const Dashboard = () => {
  const [services, setServices] = useState({ totalResults: 0, results: [] });
  const [blogs, setBlogs] = useState({ totalResults: 0, results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services (limit 5 for recent services)
        const servicesRes = await Axios.get("/services/get-all-services", {
          params: { limit: 5, page: 1, status: "all" },
        });

        setServices({
          totalResults: servicesRes.data.totalResults || 0,
          results: servicesRes.data.results || [],
        });

        // Fetch blogs (limit 5 for recent blogs)
        const blogsRes = await Axios.get("/blogs/get-all-blogs", {
          params: { limit: 5, page: 1, status: "all" },
        });

        setBlogs({
          totalResults: blogsRes.data.totalResults || 0,
          results: blogsRes.data.results || [],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div>
      <div className="pagetitle">
        <h1>Dashboard</h1>
      </div>

      <section className="section dashboard">
        <div className="row">
          {/* Left Column: Cards */}
          <div className="col-lg-8">
            <div className="row">
              {/* Services Count */}
              <div className="col-xxl-6 col-md-6">
                <div className="card info-card sales-card mx-0 w-100 h-auto">
                  <div className="card-body">
                    <h5 className="card-title">Services</h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-gear-wide"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{services.totalResults}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blogs Count */}
              <div className="col-xxl-6 col-md-6">
                <div className="card info-card revenue-card mx-0 w-100 h-auto">
                  <div className="card-body">
                    <h5 className="card-title">Blogs</h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-journal-text"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{blogs.totalResults}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Services */}
              <div className="col-12">
                <div className="card top-selling overflow-auto mx-0 w-100 h-auto">
                  <div className="card-body pb-0">
                    <h5 className="card-title">Recent Services</h5>
                    {services.results.length > 0 ? (
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>S.no.</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.results.map((item, index) => (
                            <tr key={item._id || index}>
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
                              <td>
                                <img
                                  src={baseURL + item.featured_image?.path}
                                  alt="No Image"
                                  width={50}
                                />
                              </td>
                              <td>{createExcerpt(item.description, 100)}</td>
                              <td>{item.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div>No services data available.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Recent Blogs */}
          <div className="col-lg-4">
            <div className="card mx-0 w-100 h-auto">
              <div className="card-body pb-0">
                <h5 className="card-title">Recent Blogs</h5>
                {blogs.results.length > 0 ? (
                  <div className="news">
                    {blogs.results.map((item, index) => (
                      <div className="post-item clearfix" key={item._id || index}>
                        <img
                          src={baseURL + item.featured_image?.path}
                          alt="No image"
                          width={80}
                        />
                        <h4>{item.title}</h4>
                        <p>{createExcerpt(item.description, 100)}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No blog data available.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
