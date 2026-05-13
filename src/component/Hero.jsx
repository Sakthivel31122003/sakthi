import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Toast import
import './Hero.css';
import owner from '../assets/owner.png';
import Sakthivel from '../assets/sakthi-frontend.pdf'; // Asset import

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Professional Download Logic with Toast
  const handleDownload = () => {
    // 1. Starting Notification
    toast.loading('Downloading Resume...', { id: 'download' });

    setTimeout(() => {
      try {
        const link = document.createElement('a'); // Create dummy link
        link.href = Sakthivel; // Assign path
        link.download = 'Sakthivel_Resume.pdf'; // Set filename
        document.body.appendChild(link); // Add to DOM
        link.click(); // Trigger click
        document.body.removeChild(link); // Clean up

        // 2. Success Notification
        toast.success('Download Started!', { id: 'download' });
      } catch (error) {
        // 3. Error Notification
        toast.error('Download Failed!', { id: 'download' });
      }
    }, 1000); // 1 second delay for a smooth feel
  };

  return (
    <section className="hero-container" ref={heroRef} id="home">
      {/* Toaster Component - Idhu thaan toast-ah display pannum */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className={`hero-content reveal-left ${isVisible ? 'active' : ''}`}>
        <h4 className="hero-greeting">Hi, I'm Sakthivel</h4>
        <h1 className="hero-title">
          Building Digital Solutions with <span className="highlight">MERN Stack</span>
        </h1>
        <p className="hero-description">
          A passionate <strong>Full Stack Web Developer</strong> specializing in 
          MongoDB, Express, React, and Node.js.
        </p>
        
        <div className="hero-btns">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary" onClick={handleDownload}>
            Download CV
          </button>
        </div>

        <div className="tech-pills">
          <span>#MongoDB</span>
          <span>#Express</span>
          <span>#React</span>
          <span>#Node.js</span>
        </div>
      </div>

      <div className={`hero-visual reveal-right ${isVisible ? 'active' : ''}`}>
        <div className="blob-bg"></div>
        <div className="image-wrapper">
          <img src={owner} alt="Sakthivel" className="hero-img" />
        </div>
      </div>
    </section>
  );
}