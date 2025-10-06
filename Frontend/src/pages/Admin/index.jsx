import React from "react";
import createExcerpt from "../../util/basic";

const baseURL = "https://example.com"; // replace with your actual base URL

// Static data
const data = {
  services: {
    totalResults: 10,
    results: [
      {
        title: "Service 1",
        featured_image: { path: "/images/service1.jpg" },
        description: "This is a description for Service 1",
        status: "Active",
      },
      {
        title: "Service 2",
        featured_image: { path: "/images/service2.jpg" },
        description: "This is a description for Service 2",
        status: "Inactive",
      },
      // Add more services as needed
    ],
  },
  venues: {
    totalResults: 5,
  },
  partners: {
    totalResults: 8,
  },
  blogs: {
    results: [
      {
        title: "Blog 1",
        description: "This is a description for Blog 1",
        featured_image: { path: "/images/blog1.jpg" },
      },
      {
        title: "Blog 2",
        description: "This is a description for Blog 2",
        featured_image: { path: "/images/blog2.jpg" },
      },
    ],
  },
};

const Dashboard = () => {
  return (
    <div>
      <div className="pagetitle">
        <h1>Dashboard</h1>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {/* Services Card */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Services <span>| Today</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-gear-wide"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{data.services.totalResults}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Venues Card */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Venues <span>| This Month</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-house-check"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{data.venues.totalResults}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners Card */}
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Partners <span>| This Year</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>{data.partners.totalResults}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Selling Services */}
              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      Services <span>| Today</span>
                    </h5>
                    {data.services.results.length > 0 ? (
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
                          {data.services.results.slice(0, 5).map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
                              <td>
                                <img src={baseURL + item.featured_image.path} alt="No Image" />
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

          {/* Right Column - Blogs */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body pb-0">
                <h5 className="card-title">
                  Blogs <span>| Today</span>
                </h5>
                {data.blogs.results.length > 0 ? (
                  <div className="news">
                    {data.blogs.results.slice(0, 5).map((item, index) => (
                      <div className="post-item clearfix" key={index}>
                        <img src={baseURL + item.featured_image.path} alt="No image" />
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
