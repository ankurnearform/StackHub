const Contact = () => {
  const contactDetails = { phone: '123-456-7890', email: 'contact@restaurant.com' };
  
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone: {contactDetails.phone}</p>
      <p>Email: {contactDetails.email}</p>
    </div>
  );
};

export default Contact;