import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "/assets/images/elephants-on-a-game-drive-in-the-masai-mara.jpg",
  "/assets/images/lion-kill-masai-mara-scaled.jpg",
  "/assets/images/Leopard_and_her_cubs_are_in_the_wild.jpg"
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className="slide" 
              style={{ 
                minWidth: '100%', 
                height: '100vh', 
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          ))}
        </div>

        <button className="nav prev" aria-label="Previous slide" onClick={prevSlide}>‹</button>
        <button className="nav next" aria-label="Next slide" onClick={nextSlide}>›</button>

        <div className="dots" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '20px', width: '100%' }}>
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => goToSlide(idx)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none', margin: '0 5px',
                backgroundColor: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>

        <div className="hero-overlay slide-in-left">
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: '1.2', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Zuru Wild Trails — Explore Africa's Wild Heart</h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>Memorable safari experiences guided by experts. Authentic adventures, tailored for you.</p>
          <Link className="cta" to="/about">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
