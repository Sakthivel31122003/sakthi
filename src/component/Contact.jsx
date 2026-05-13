import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll trigger logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // 10% section therinjaale trigger aagum
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918838185633"; // Unga number
    const message = `*New Query from Portfolio*%0A%0A` + 
                    `*Name:* ${formData.name}%0A` + 
                    `*Email:* ${formData.email}%0A` + 
                    `*Message:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className={`contact-header reveal-on-scroll ${isVisible ? 'active' : ''}`}>
        <h4 className="section-subtitle">Get In Touch</h4>
        <h2 className="section-title">Let's Talk <span>Business</span></h2>
      </div>

      <div className="contact-container">
        {/* Left side animate from left */}
        <div className={`contact-info reveal-left ${isVisible ? 'active' : ''}`}>
          <div className="info-box">
            <h3>Contact Details</h3>
            <p>📧 sakthivelsekar03@gmail.com</p>
            <p>📍 Tamil Nadu, India</p>
          </div>
          <div className="info-box">
            <h3>Direct Chat</h3>
            <p>Message me for MERN projects like <strong>இயற்கை உணவகம்</strong>.</p>
          </div>
        </div>

        {/* Right side animate from right */}
        <form className={`contact-form reveal-right ${isVisible ? 'active' : ''}`} onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" />
          </div>
          <div className="input-group">
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email" />
          </div>
          <div className="input-group">
            <textarea name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className="send-btn">Send to WhatsApp</button>
        </form>
      </div>
    </section>
  );
}