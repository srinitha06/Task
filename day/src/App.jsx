import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Section Components (For navigation)
function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to the homepage. This is where you can find the latest updates.</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h1>About Us</h1>
      <p>Learn more about our company and mission.</p>
    </section>
  );
}

function Services() {
  return (
    <section>
      <h1>Our Services</h1>
      <p>Explore the services we offer and how they can benefit you.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>Get in touch with us for inquiries, feedback, or support.</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
