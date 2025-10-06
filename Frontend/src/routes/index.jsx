// routes.jsx
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import AdminLayout from "../components/layouts/AdminLayout.jsx";
import Dashboard from "../pages/Admin/index.jsx";
import AllBlogs from "../pages/Admin/Blogs/index.jsx";
import Layout from "../components/layouts/layout.jsx";
import { lazy } from "react";
import React from "react";
import AddBlog from "../pages/Admin/Blogs/AddBlog.jsx";
import EditBlog from "../pages/Admin/Blogs/EditBlog.jsx";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
const Page = lazy(() => import("../pages/contactUs/Page.jsx"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const Services = lazy(() => import("../pages/Services/Services.jsx"));
const BlogDetail = lazy(() => import("../pages/BlogDetail/BlogDetail.jsx"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail/ServiceDetail.jsx"));
const LoginPage = lazy(() => import("../pages/Auth/login.jsx"));

export const routes = [
  // Public routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact-us", element: <Page /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "blogs", element: <Blogs /> },
      { path: "services", element: <Services /> },
      { path: "blogs/:id", element: <BlogDetail /> },
      { path: "services/:id", element: <ServiceDetail /> },
    ],
  },

  // ✅ Protected Admin routes
  {
    element: <ProtectedRoute />, // guard wrapper
    children: [
      {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "blogs", element: <AllBlogs /> },
          { path: "blogs/add", element: <AddBlog /> },
          { path: "blogs/edit/:slug", element: <EditBlog /> },
        ],
      },
    ],
  },

  // Public login route
  { path: "/login", element: <LoginPage /> },
];
