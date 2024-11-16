import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ReservationForm from './components/ContactForm';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <ReservationForm buttonBackgroundColor="black" />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));