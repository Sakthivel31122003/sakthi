import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import owner from '../assets/owner.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Section screen-la 20% vandhuduchu-na trigger aagum
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-container" ref={heroRef}>
      {/* isVisible true aana mattum 'active' class add aagum */}
      <div className={`hero-content reveal-left ${isVisible ? 'active' : ''}`}>
        <h4 className="hero-greeting">Hi, I'm Sakthivel</h4>
        <h1 className="hero-title">
          Building Digital Solutions with <span className="highlight">MERN Stack</span>
        </h1>
        <p className="hero-description">
          A passionate <strong>Full Stack Web Developer</strong> from India. 
          I specialize in creating premium, high-performance web applications 
          using MongoDB, Express, React, and Node.js. 
        </p>
        
        <div className="hero-btns">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Download CV</button>
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