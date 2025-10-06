import { StrictMode, Suspense, lazy } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/index.jsx';
import Loader from './components/loader.jsx';
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
