import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">SAKTHI<span>VEL</span></h2>
          <p className="footer-tagline">
            Specializing in premium MERN stack applications. Let's build something extraordinary together.
          </p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Services / Focus Area */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>MERN Integration</li>
            <li>E-commerce Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: sakthivelsekar03@gmail.com</p>
          <p>Location: Tamil Nadu, India</p>
          <button className="footer-btn">Work With Me</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SAKTHIVEL. All rights reserved.</p>
        <p>Made with ❤️ and React</p>
      </div>
    </footer>
  );
}