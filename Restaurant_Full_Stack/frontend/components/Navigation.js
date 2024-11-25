import React, { useState } from 'react';
import Home from './Home'; // Your Home component specific to Restaurant Industry
import Menu from './Menu';  // Assuming Menu.js is in the components folder
import Services from './Services'; // Services component for additional services provided by the restaurant
import Contact from './Contact'; // Importing Contact component

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
        <button onClick={() => setCurrentPage('contact')}>Contact Us</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default RestaurantNavigation;