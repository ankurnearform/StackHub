import React, { useState } from 'react';

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/make-reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, date, time, guests })
    })
    .then(response => response.json())
    .then(data => alert(`Reservation confirmed: ${data.message}`))
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>Phone Number:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <br />
      <label>Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <br />
      <label>Time:
        <input type="times" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <br />
      <label>Number of Guests:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      </label>
      <br />
      <button type="submit" style={{ backgroundColor: 'black' }}>Book Reservation</button>
    </form>
  );
}

export default ReservationForm;