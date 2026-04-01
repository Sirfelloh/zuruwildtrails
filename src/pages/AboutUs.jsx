import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="hero" style={{ height: '70vh', minHeight: '400px' }}>
        <div style={{ backgroundImage: 'url("/assets/images/lion-kill-masai-mara-scaled.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,31,63,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.2', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>About Zuru Wild Trails</h1>
          </div>
        </div>
      </div>
      <main className="container" style={{ padding: '48px 20px', maxWidth: '1000px', margin: '0 auto', minHeight: '50vh' }}>
        <h2 style={{ marginBottom: '20px' }}>Our Story</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          Zuru Wild Trails is a locally-run safari operator offering authentic, responsible wildlife experiences across East Africa. Lead by our expert <strong>Mirriam Kamene</strong>, our team of guides are insiders with deep knowledge of landscapes like the Masai Mara, Amboseli, Serengeti, and many other sanctuaries.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          We prioritize conservation and community partnerships so every trip benefits nature and people. We focus on providing personalized, tailor-made itineraries that ensure you experience the absolute best of the African wild, guided by top-rated professionals.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          If you'd like to learn more about our approach, sustainability practices, and our team, please do not hesitate to contact us. We are here to craft your dream adventure.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
