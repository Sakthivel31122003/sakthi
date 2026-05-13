import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // Scroll logic to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.toLowerCase()));
      
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      sections.forEach((section, index) => {
        if (section && 
            scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveItem(menuItems[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handle
  const handleNavClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="portfolio-navbar">
      <div className="logo-section">
        <h2 className="neon-text">SAKTHI<span>VEL</span></h2>
        <p className="sub-logo">FREELANCE</p>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li 
            key={item}
            className={activeItem === item ? 'active' : ''} 
            onClick={() => handleNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="hire-me-neon">
        Hire Sakthivel
      </button>
    </nav>
  );
}