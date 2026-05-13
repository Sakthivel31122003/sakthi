import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "இயற்கை உணவகம்",
      subtitle: "Food Ordering System",
      description: "A full-stack organic restaurant application with a focus on healthy living. Features category-based filtering and seamless order management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://restaurant-frontends-l97a.onrender.com", // Unga real link-a inga kuduthukonga
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500"
    },
    {
      id: 2,
      title: "Thari Malar",
      subtitle: "E-Commerce Platform",
      description: "A premium clothing store web app featuring a modern UI, user authentication, and a responsive product gallery for a seamless shopping experience.",
      tech: ["MERN Stack", "Razorpay", "Tailwind CSS"],
      link: "https://tharimalar.com",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500"
    },
    {
      id: 3,
      title: "Smart Food Order",
      subtitle: "Real-time Delivery App",
      description: "A high-performance food delivery platform with real-time tracking and secure payment gateway integration using Razorpay.",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "#",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500"
    }
  ];

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-header">
        <h4 className="section-subtitle">My Creative Works</h4>
        <h2 className="section-title">Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card reveal-on-scroll ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                  View Live Project
                </a>
              </div>
            </div>

            <div className="project-info">
              <span className="project-category">{project.subtitle}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}