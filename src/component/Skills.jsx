import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skillsData = [
    { name: 'MongoDB', level: '85%', category: 'Database', icon: '🍃' },
    { name: 'Express.js', level: '80%', category: 'Backend', icon: '🚂' },
    { name: 'React.js', level: '90%', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', level: '85%', category: 'Backend', icon: '🟢' },
    { name: 'JavaScript', level: '88%', category: 'Language', icon: 'JS' },
    { name: 'UI/UX Design', level: '75%', category: 'Design', icon: '🎨' },
  ];

  return (
    <section className="skills-container" id="skills" ref={skillsRef}>
      <div className="skills-header reveal-up">
        <h4 className="section-subtitle">My Expertise</h4>
        <h2 className="section-title">Technical <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card reveal-on-scroll ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="skill-info">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-details">
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
              <span className="skill-percentage">{skill.level}</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: isVisible ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}