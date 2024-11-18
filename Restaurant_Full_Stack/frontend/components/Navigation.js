import React, { useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import Services from './Services';

function RestaurantNavigation() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'menu':
        return <Menu />;
      case 'services':
        return <Services />;
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
      </nav>
      {renderPage()}
    </div>
  );
}

export default RestaurantNavigation;