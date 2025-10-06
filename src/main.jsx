import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './Pages/HomePage.jsx';
import Employer from './Pages/Employer.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,    
    errorElement: <div>404 Page Not Found</div>,
    children: [
      { index: true, element: <Home /> },      
      { path: "employer", element: <Employer /> }, 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router} />
  </StrictMode>,
)
