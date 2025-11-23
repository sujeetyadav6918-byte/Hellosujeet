import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterSection from '../Footersection/Footersection';


// Main Layout component
function Layout() {
  return (
<div>
      <Navbar />
    
        <Outlet />
      
      <FooterSection/>
    </div>
  );
}

export default Layout;
