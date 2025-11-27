import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FooterSection from '../Footersection/Footersection';
import ScrollToTop from '../Scrolltotop/Scrolltotop';
import BackToTop from '../Scrolltotop/Backtotop';
import WhatsAppButton from '../Scrolltotop/Whatsappbutton';
import Breadcrumbs from '../Navbar/Breadcrumb';


// Main Layout component
function Layout() {
  return (
<div>
     <ScrollToTop/>
      <Navbar /> 
      <Breadcrumbs/>   
      <Outlet />      
      <FooterSection/>
      <BackToTop/>
      <WhatsAppButton/>
    </div>
  );
}

export default Layout;
