```javascript
import React, { useState } from 'react';
import Home from './Home'; // Your Home component specific to Restaurant Industry
import Menu from './Menu';  // Assuming Menu.js is in the components folder
import Services from './Services'; // Services component for additional services provided by the restaurant
import Contact from './components/Contact'; // Updated path for Contact component
import ContactUs from './ContactUs'; // Assuming ContactUs.js is a separate component

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
        <NavLink to='/contact-us' activeClassName='active'>Contact Us</NavLink> {/* NavLink with activeClassName for highlighting */}
        <li><a href="#contact">Contact Us</a></li> {/* New link for contact us */}
      </nav>
      {renderPage()}
    </div>
  );
}

export default RestaurantNavigation;
```

**Changes Made:**

* Added a new `<li><a href="#contact">Contact Us</a></li>` element to the navigation bar.
* The `href` attribute of the link points to the `#contact` anchor on the page.

**Effect:**

This change adds a new link to the navigation bar that directly takes users to the contact us section of the page. It complements the `NavLink` component for navigation within the application.