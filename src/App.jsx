
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Main layout
import Home from './components/Home/Home'; // Your home page
import Rarecontact from './components/Navbarupper/Rarecontactus';
import Blog from './components/Navbarupper/Blog';
import Faqsupport from './components/Navbarupper/Faqsupport';
import Aboutuss from './components/Navbarupper/Aboutuss';
import HematologyProductsPage from './components/TherapeuticAreas/Hematology';
import OncologyProductsPage from './components/TherapeuticAreas/Oncology';
import RarediseaseProductsPage from './components/TherapeuticAreas/Raredisease';
import NaurologyProductsPage from './components/Section1/Neurology';
import MedicinesDirectory from './components/Section1/medicineDirectory';

// import AboutPage from './components/Navbarupper/Aboutus';

// Router configuration
const App = () =>{
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Rarecontact',
        element:<Rarecontact/>
      },
      {
      path:'/Blog',
      element:<Blog/>
      },
      {
      path:'/Faqsupport',
      element:<Faqsupport/>
      },
      {
        path:'/Aboutuss',
        element:<Aboutuss/>
      },
      {
        path:'/Hematology',
        element:< HematologyProductsPage/>
      },
      {
        path:'/Oncology',
        element:<OncologyProductsPage/>
        
      },
      {
        path:'/Raredisease',
        element:<RarediseaseProductsPage/>
        
      },
      {
        path:'/Neurology',
        element:<NaurologyProductsPage/>
      },
      {
        path:'/medicines-directory',
        element:<MedicinesDirectory/>
      }
     
      
    ],
  },
  // If you need, you can define other layouts here for auth, admin, etc.
]);

  return <RouterProvider router={router} />;
}

export default App;
