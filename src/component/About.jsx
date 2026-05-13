import React, { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Section screen-la vandhadhum active aagum
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // 20% area visible aana trigger aagum
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" id="about" ref={aboutRef}>
      <div className="about-content">
        
        {/* Left Side: Visual UI with Scroll Animation */}
        <div className={`about-visual reveal-left ${isVisible ? 'active' : ''}`}>
          <div className="visual-wrapper">
            <div className="experience-badge">
              <span className="years">1+</span>
              <span className="exp-text">Years of Experience</span>
            </div>

            <div className="tech-stack-display">
              <div className="tech-card c1"><span>MongoDB</span></div>
              <div className="tech-card c2"><span>Express</span></div>
              <div className="tech-card c3"><span>React</span></div>
              <div className="tech-card c4"><span>Node.js</span></div>
            </div>

            <div className="circle-decor"></div>
          </div>
        </div>

        {/* Right Side: Text Content with Scroll Animation */}
        <div className={`about-text-section reveal-right ${isVisible ? 'active' : ''}`}>
          <h4 className="section-subtitle">My Story</h4>
          <h2 className="section-title">A Dedicated <span>Full Stack Developer</span></h2>
          
          <p className="about-para">
            I am a MERN stack specialist who loves turning complex problems into simple, beautiful, and intuitive digital solutions. My journey in web development started with a curiosity for how things work on the internet, and now I build full-scale applications.
          </p>

          <p className="about-para">
            Whether it's building a <strong>Restaurant Application</strong> or an <strong>E-commerce platform</strong> like DRESSKADAI, I focus on clean code and premium UI/UX.
          </p>

          <div className="personal-info">
            <div className="info-item">
              <strong>Role:</strong> Full Stack Developer
            </div>
            <div className="info-item">
              <strong>Location:</strong> India
            </div>
            <div className="info-item">
              <strong>Focus:</strong> Scalable Web Apps
            </div>
          </div>
          
          <button className="read-more-btn">Read More</button>
        </div>

      </div>
    </section>
  );
}