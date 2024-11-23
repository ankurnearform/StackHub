import React, { useState } from 'react';
import Home from './Home'; // Your Home component specific to Restaurant Industry
import Menu from './Menu';  // Assuming Menu.js is in the components folder
import Services from './Services'; // Services component for additional services provided by the restaurant
import Contact from './Contact'; // Updated consolidated import for Contact component
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

function RestaurantNavigation() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'menu':
        return <Menu />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('menu')}>Menu</button>
        <button onClick={() => setCurrentPage('services')}>Services</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
        <NavLink to='/contact' activeClassName='active'>Contact Us</NavLink> {/* NavLink with activeClassName, ensuring proper routing and styling */}
        <li><Contact /></li> {/* Contact component added as list item */}
        <NavLink to='/contact'>Contact Us</NavLink> {/* Additional NavLink for direct access to the contact page */}
        <NavLink to='/contact-us'>Contact Us</NavLink> {/* New NavLink for alternate contact us page */}
        <NavLink to='/contact' activeClassName='active'>Contact Us</NavLink> {/* Newly added NavLink with activeClassName */}
        <NavLink to='/contact'>Contact Us</NavLink> {/* New NavLink added for direct access to the contact page */}
      </nav>
      {renderPage()}
    </div>
  );
}

export default RestaurantNavigation;