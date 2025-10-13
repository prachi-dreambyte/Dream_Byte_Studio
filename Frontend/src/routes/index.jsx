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
const ProductShoot = lazy(() => import("../pages/ProductShoot/ProductShoot.jsx"));
const ContentCreation = lazy(() => import("../pages/ContentCreation/ContentCreation.jsx"));
  const EventShoot = lazy(() => import("../pages/EventShoot/EventShoot.jsx"));
  const ECommerceShoot = lazy(() => import("../pages/ECommerceShoot/ECommerceShoot.jsx"));
  const FashionAndModel = lazy(() => import("../pages/FashionAndModel/FashionAndModel.jsx"));
  const AdFlimsAndCommercialShoots = lazy(() => import("../pages/AdFlimsAndCommercialShoots/AdFlimsAndCommercialShoots.jsx"));
  const PodcastShoot = lazy(() => import("../pages/PodcastShoot/PodcastShoot.jsx"));
  const ShortFlimProduction = lazy(() => import("../pages/ShortFlimProduction/ShortFlimProduction.jsx"));
  const RealEstateProduction = lazy(() => import("../pages/RealEstateProduction/RealEstateProduction.jsx"));
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
      { path: "services/ProductShoot", element:<ProductShoot /> },
      { path: "services/ECommerceShoot", element: <ECommerceShoot /> },
        { path: "services/FashionAndModel", element: <FashionAndModel /> },
          { path: "services/EventShoot", element: <EventShoot /> },
            { path: "services/AdFlimsAndCommercialShoots", element: <AdFlimsAndCommercialShoots /> },
              { path: "services/PodcastShoot", element: <PodcastShoot /> },
                { path: "services/ShortFlimProduction", element: <ShortFlimProduction /> },
                  { path: "services/RealEstateProduction", element: <RealEstateProduction /> }, 
                   { path: "services/ContentCreation", element: <ContentCreation /> },
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
