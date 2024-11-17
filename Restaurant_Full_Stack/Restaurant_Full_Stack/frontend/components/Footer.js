import React from 'react';

function RestaurantFooter() {
  const [contact, setContact] = React.useState({});

  React.useEffect(() => {
    fetch('http://localhost:8000/api/restaurant/contact')  // Ensure this is the correct URL and port for restaurant contact
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching restaurant contact:', error));
  }, []);

  return (
    <footer>
      <p>Restaurant Contact: {contact.email || 'Information is loading...'}</p>
    </footer>
  );
}

export default RestaurantFooter;