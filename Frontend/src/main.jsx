import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Page from './pages/contactUs/Page.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Services from './pages/Services/Services.jsx';
import BlogDetail from './pages/BlogDetail/BlogDetail.jsx';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail.jsx';
import ServiceArea from './pages/ServicesAera/ServiceArea.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/contactUs',
    element:<Page/>
  },
  {
     path:'/portfolio',
    element:<Portfolio/>
  },
  {
   path:'/blogs',
    element:<Blogs/>
  },
  {
   path:'/services',
    element:<Services/>
  },
  {
   path:'/BlogDetail',
    element:<BlogDetail/>
  },
  {
   path:'/ServiceDetail',
    element:<ServiceDetail/>
  },
  {
   path:'/servicearea',
    element:<ServiceArea/>
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
