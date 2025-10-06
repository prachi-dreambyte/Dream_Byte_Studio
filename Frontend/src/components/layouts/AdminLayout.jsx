// src/components/layouts/AdminLayout.jsx
import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../style/adminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const toggleSidebar = () => {
    const rootElement = document.getElementById("adminWrapper");
    rootElement.classList.toggle("toggle-sidebar");
  };

  const toggleSearchBar = () => {
    const rootElement = document.getElementById("searchBar");
    rootElement.classList.toggle("search-bar-show");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkActive = (path) => location.pathname.startsWith(path);

  const handleSignOut = async () => {
    await dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="admin-wrapper" id="adminWrapper">
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="/image/logo/Dbs.png" alt="" />
          </Link>
          <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
        </div>

        {/* Search Bar */}
        <div className="search-bar" id="searchBar">
          <form className="search-form d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>

        {/* Nav Icons */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                <img src="/assets/img/user.png" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {user?.fullname || "User"}
                </span>
              </div>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{user?.fullname || "User"}</h6>
                  <span className="text-muted small">{user?.email || ""}</span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${checkActive("/dashboard") ? "" : "collapsed"}`} to="/dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${checkActive("/dashboard/blogs") ? "" : "collapsed"}`} to="/dashboard/blogs">
              <i className="bi bi-substack"></i>
              <span>Blogs</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* ======= Main Content ======= */}
      <main id="main" className="main">
        <Outlet />
      </main>

      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright <strong><span>Dream Byte Studio</span></strong>. All Rights Reserved
        </div>
      </footer>

      <span
        className="back-to-top d-flex align-items-center justify-content-center cursor-pointer"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </span>
    </div>
  );
};

export default AdminLayout;
